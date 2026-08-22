/* ============================================================
   ELC STEM hub v2 — tap a word, see your language
   ------------------------------------------------------------
   Include after stem-vocab-data.js + stem-shared.js:
       <script src="stem-translate.js?v=..."></script>
   It runs itself. Two rules, on purpose:

   1. HELPER WORDS (the instruction language of a task — "calculate",
      "between", "table") can be tapped any time. One or two words at
      a time, never the whole page.
   2. TARGET WORDS (the subject vocabulary in the Vocab Hub) are
      LOCKED until the student builds them. Tapping one says so and
      offers the build. The translation is the reward for building.

   Machine translation of the whole page is blocked (notranslate +
   the Google meta), so the page can't be walked around.

   Turn it off for one element with class="no-tap" (or any input).
   ============================================================ */
(function () {
  "use strict";
  if (!window.STEM2) return;

  var LANG_KEY = "elc_stem_home_lang";
  var MAX_PICK = 1;                    /* ONE word or phrase at a time, like the Grammar Hub */
  var GLOSS = (window.STEM_GLOSS || {});
  var DATA = window.STEM_VOCAB_DATA;

  /* target words: everything the Vocab Hub teaches. A word can live in more
     than one set (revision sets recap earlier words, and a few words repeat
     across units) — keep the FIRST one, in the order the sets are authored
     (unit order, then within-unit order — the same order stem-vocab-hub.html's
     WORD_HOME uses), so the locked-word popup names, and its build link
     opens, the earliest place the word is taught. */
  var TARGET = {};
  if (DATA) DATA.sets.forEach(function (set) {
    set.words.forEach(function (w) {
      var k = w.w.toLowerCase();
      if (!TARGET[k]) TARGET[k] = { w: w, set: set };
    });
  });

  function homeLang() { try { return localStorage.getItem(LANG_KEY) || ""; } catch (e) { return ""; } }
  function setHomeLang(v) { try { localStorage.setItem(LANG_KEY, v); } catch (e) {} }
  var esc = STEM2.esc;

  /* ---------- block machine translation of the page ---------- */
  (function blockMT() {
    var m = document.createElement("meta");
    m.name = "google"; m.content = "notranslate";
    document.head.appendChild(m);
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
  })();

  var CSS = "" +
    /* wraps rather than overflowing: the 44px close button has to stay on
       screen at 360px, next to an 18-language select. */
    ".tw-bar{position:fixed;left:0;right:0;bottom:0;z-index:8500;display:flex;flex-wrap:wrap;gap:10px;align-items:center;" +
      "padding:9px 14px;background:var(--paper,#fcfcfa);border-top:1px solid var(--hair,#e6e7e3);" +
      "font-size:.8rem;transform:translateY(102%);transition:transform .18s ease}" +
    ".tw-bar.on{transform:none}" +
    ".tw-bar select{font:inherit;font-size:.78rem;border:1px solid var(--hair,#e6e7e3);border-radius:8px;" +
      "background:var(--paper,#fcfcfa);color:var(--ink,#212427);padding:4px 7px;min-height:44px;" +
      "flex:1 1 160px;min-width:0;max-width:246px}" +
    ".tw-bar .tw-x{margin-left:auto;border:0;background:none;color:var(--muted,#767b7f);font-size:1.1rem;cursor:pointer;" +
      "min-width:44px;min-height:44px;line-height:1;display:flex;align-items:center;justify-content:center}" +
    /* the bar is fixed to the bottom, so the page reserves the same height
       underneath it — otherwise it sits on top of the last lines of the page. */
    "body.tw-active{padding-bottom:var(--tw-bar-h,56px)}" +
    /* the notebook's floating 📓 lives at bottom-right too — while the bar is
       open it rides up above it, or it covers the bar's close button */
    "body.tw-active .sv-book{bottom:calc(var(--tw-bar-h,56px) + 10px)}" +
    ".tw-hit{cursor:help;border-bottom:1px dotted var(--faint,#9aa0a5)}" +
    ".tw-hit.tw-lock{border-bottom-style:dashed}" +
    ".tw-hit.tw-on{background:var(--accent-soft,#f4f9f8);border-bottom-color:var(--accent,#0d7a70)}" +
    ".tw-pop{position:absolute;z-index:8600;max-width:250px;background:var(--paper,#fcfcfa);color:var(--ink,#212427);" +
      "border:1px solid var(--hair,#e6e7e3);border-radius:9px;padding:9px 11px;font-size:.82rem;line-height:1.45;" +
      "box-shadow:0 6px 20px rgba(16,24,40,.13)}" +
    ".tw-pop .w{font-family:Georgia,'Times New Roman',serif;font-size:1rem}" +
    ".tw-pop .g{font-size:1.02rem;font-weight:700;margin-top:3px}" +
    ".tw-pop .n{color:var(--muted,#767b7f);font-size:.75rem;margin-top:4px}" +
    ".tw-pop a{color:var(--accent,#0d7a70);font-weight:600;text-decoration:none}" +
    /* a held control keeps full text contrast — only its frame goes quiet, so
       nothing on the page becomes harder to READ while it cannot be pressed */
    "body.tw-active button:not(.tw-x):not(.tw-toggle):not(.sv-panel *)," +
      "body.tw-active a:not(.tw-toggle):not(.sv-panel *){border-color:var(--hair,#e6e7e3)!important}" +
    "body.tw-active button:not(.tw-x):not(.tw-toggle):not(.sv-panel *){cursor:not-allowed}" +
    ".tw-toggle{border:1px solid var(--hair,#e6e7e3);border-radius:999px;background:var(--paper,#fcfcfa);" +
      "color:var(--muted,#767b7f);font:inherit;font-size:.72rem;padding:4px 13px;cursor:pointer;min-height:44px}" +
    ".tw-toggle.on{border-color:var(--accent,#0d7a70);color:var(--accent,#0d7a70)}";

  var bar, pop, active = [], enabled = false;

  /* the few strings this component shows, in the page languages */
  var UI = {
    en:        { btn: "tap to translate", my: "My language", pick: "choose…",
                 hint: "tap one word · buttons are off",
                 held: "Translate is on, so the page is held. Turn it off to use this.",
                 first: "Choose your language in the bar below first.",
                 learnAtF: function (u, n) { return "Go to <b>" + u + " · word list " + n + "</b> to learn this word."; },
                 learnFallback: "Build it to learn this word.",
                 build: "Build it now →", none: "No translation stored for this word yet." },
    "zh-Hans": { btn: "点词翻译", my: "我的语言", pick: "选择…",
                 hint: "一次点一个词 · 按钮已停用",
                 held: "翻译模式开着，页面被暂停了。关掉它才能点这个。",
                 first: "请先在下面选择你的语言。",
                 learnAtF: function (u, n) { return "去 <b>" + u + " · 单词表 " + n + "</b> 学这个词。"; },
                 learnFallback: "拼出它就能学会这个词。",
                 build: "现在去拼 →", none: "这个词还没有翻译。" },
    "zh-Hant": { btn: "點字翻譯", my: "我的語言", pick: "選擇…",
                 hint: "一次點一個字 · 按鈕已停用",
                 held: "翻譯模式開著，頁面被暫停了。關掉它才能點這個。",
                 first: "請先在下面選擇你的語言。",
                 learnAtF: function (u, n) { return "去 <b>" + u + " · 單字表 " + n + "</b> 學這個字。"; },
                 learnFallback: "拼出它就能學會這個字。",
                 build: "現在去拼 →", none: "這個字還沒有翻譯。" },
    vi:        { btn: "chạm để dịch", my: "Tiếng của tôi", pick: "chọn…",
                 hint: "chạm một từ · các nút đang tắt",
                 held: "Chế độ dịch đang bật nên trang bị giữ lại. Hãy tắt nó để dùng nút này.",
                 first: "Hãy chọn tiếng của bạn ở thanh bên dưới trước.",
                 learnAtF: function (u, n) { return "Đến <b>" + u + " · danh sách từ " + n + "</b> để học từ này."; },
                 learnFallback: "Ghép nó để học từ này.",
                 build: "Ghép ngay →", none: "Từ này chưa có bản dịch." }
  };
  function pageLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return UI[l] ? l : "en";
  }
  function U(k) { return UI[pageLang()][k] || UI.en[k]; }

  function ensureChrome() {
    var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s);

    bar = document.createElement("div");
    bar.className = "tw-bar";
    var opts = "<option value=''>" + esc(U("pick")) + "</option>";
    ((DATA && DATA.langs) || []).forEach(function (l) {
      opts += "<option value='" + esc(l.id) + "'>" + esc(l.name) + "</option>";
    });
    bar.innerHTML = "<span>" + esc(U("my")) + "</span><select aria-label='My first language'>" + opts + "</select>" +
      "<span class='tw-hint' style='color:var(--muted,#767b7f)'>" + esc(U("hint")) + "</span>" +
      "<button class='tw-x' aria-label='Close'>×</button>";
    document.body.appendChild(bar);
    var sel = bar.querySelector("select");
    sel.value = homeLang();
    sel.addEventListener("change", function () { setHomeLang(sel.value); closePop(); });
    bar.querySelector(".tw-x").addEventListener("click", function () { setEnabled(false); });

    pop = document.createElement("div");
    pop.className = "tw-pop";
    pop.style.display = "none";
    document.body.appendChild(pop);
    document.addEventListener("click", function (e) {
      if (!pop.contains(e.target) && !e.target.classList.contains("tw-hit")) closePop();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePop(); });
  }

  function closePop() {
    if (pop) pop.style.display = "none";
    active.forEach(function (el) { el.classList.remove("tw-on"); });
    active = [];
  }

  function showPop(el, html) {
    var r = el.getBoundingClientRect();
    pop.innerHTML = html;
    pop.style.display = "block";
    var top = r.bottom + window.scrollY + 6;
    var left = Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 10);
    pop.style.top = top + "px";
    pop.style.left = Math.max(8, left) + "px";
  }

  function glossFor(word) {
    var lg = homeLang();
    if (!lg) return null;
    var g = GLOSS[word];
    return g && g[lg] ? g[lg] : null;
  }

  function onTap(el, word) {
    /* tapping the selected word again clears it — one at a time, and the
       student can always put it back down */
    if (active.length && active[0] === el) { closePop(); return; }

    var t = TARGET[word];

    /* A WORD BUILDER WORD OPENS THE NOTEBOOK, never a tooltip.
       The notebook is where a word's parts, its meaning, its ✓ and its build
       live; showing a stripped-down copy of that in a bubble taught students
       that the two were different things. If the word is not built yet the
       notebook says so and offers the build there and then — which is the
       point: the translation is the reward for assembling the word. */
    if (t && window.STEMVOCAB && window.STEMVOCAB.dict &&
        window.STEMVOCAB.dict[String(t.w.w).toLowerCase()]) {
      closePop();
      window.STEMVOCAB.openWord(t.w.w);
      return;
    }

    if (!homeLang()) {
      select(el);
      showPop(el, "<div class='n'>" + esc(U("first")) + "</div>");
      return;
    }
    select(el);

    /* no notebook on this page (or the word is not in it): keep the honest
       fallback — say where the word is taught rather than handing it over */
    if (t) {
      var st = STEM2.Store.vocabWord(word);
      if (st && st.built) {
        var lg = homeLang();
        var tr = (t.w.tr || {})[lg] || "";
        showPop(el, "<div class='w'>" + esc(t.w.w) + "</div><div class='g'>" + esc(tr) + "</div>" +
          "<div class='n'>" + esc((t.w.meaning || "").slice(0, 90)) + "</div>");
      } else {
        var loc = STEM2.setLocation(t.set.id);
        var locMsg = loc ? U("learnAtF")(esc(loc.unitName), loc.index) : U("learnFallback");
        showPop(el, "<div class='w'>" + esc(t.w.w) + "</div>" +
          "<div class='n'>" + locMsg + "</div>" +
          "<div style='margin-top:6px'><a href='stem-vocab-hub.html#word=" + encodeURIComponent(t.w.w) + "'>" + esc(U("build")) + "</a></div>");
      }
      return;
    }

    /* an ordinary helper word: the gloss, one at a time */
    var g = glossFor(word);
    if (g) showPop(el, "<div class='w'>" + esc(word) + "</div><div class='g'>" + esc(g) + "</div>");
    else showPop(el, "<div class='w'>" + esc(word) + "</div><div class='n'>" + esc(U("none")) + "</div>");
  }

  function select(el) {
    if (active.indexOf(el) !== -1) return;
    while (active.length >= MAX_PICK) active.shift().classList.remove("tw-on");
    active.push(el); el.classList.add("tw-on");
  }

  /* ---------- the word splitter ----------
     A few target words are hyphenated ("y-intercept", "x-intercept"). A plain
     run of letters either splits them or swallows a neighbouring hyphen, so the
     known hyphenated terms are matched first, as whole terms, and only then the
     ordinary word run. The lookahead stops "y-intercept" matching inside
     "y-intercepts", which is not the term we hold a translation for. */
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  var HYPHENATED = Object.keys(TARGET).concat(Object.keys(GLOSS))
    .filter(function (k) { return k.indexOf("-") > -1; })
    .sort(function (a, b) { return b.length - a.length; });
  var SPLIT_RE = new RegExp("(" +
    (HYPHENATED.length ? "(?:" + HYPHENATED.map(escRe).join("|") + ")(?![A-Za-z])|" : "") +
    "[A-Za-z][A-Za-z'-]{1,})", "i");

  /* Wrap eligible words in tappable spans. A BUTTON's and an A's text IS
     decorated: while translate is on the page is held, so the words on a
     button are readable like any others and the button cannot fire. Form
     fields and code stay out — there is nothing to translate in a number a
     student typed. */
  var SKIP = { SCRIPT: 1, STYLE: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, CODE: 1, SVG: 1, OPTION: 1 };
  function decorate(root) {
    /* the only reason a button's text is fair game to wrap (see the note
       above) is that translate mode is ON and the button cannot fire while
       held anyway. Off, wrapping still ran on every external call — sim
       pages repaint through STEMTAP.decorate() after every stage — so a
       "Check"/"Next"/"Show the working" button whose own text happened to
       match a glossary word silently ate its own clicks for every student,
       translate on or not. Internal callers (redecorate, setEnabled) only
       ever run this while enabled anyway, so the guard changes nothing for
       them and fixes every external one in the one place they all share. */
    if (!enabled) return;
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !/[A-Za-z]{3}/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        while (p && p !== document.body) {
          if (SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
          /* tw-hit: already decorated — skipping it makes decorate() safe to
             re-run over markup that is partly new and partly untouched. */
          if (p.classList && (p.classList.contains("no-tap") || p.classList.contains("tw-bar") ||
              p.classList.contains("tw-pop") || p.classList.contains("tw-hit") ||
              /* the notebook manages its own words: decorating its build
                 tiles turned the "ion" TILE into a tap on the word "ion",
                 which repainted the panel mid-build */
              p.classList.contains("sv-panel") || p.classList.contains("sv-book") ||
              p.classList.contains("sv-word"))) return NodeFilter.FILTER_REJECT;
          if (p.hasAttribute && p.hasAttribute("data-v")) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var parts = node.nodeValue.split(SPLIT_RE);
      var any = false;
      var frag = document.createDocumentFragment();
      parts.forEach(function (p, i) {
        if (i % 2 === 1) {
          var lw = p.toLowerCase();
          if (GLOSS[lw] || TARGET[lw]) {
            var span = document.createElement("span");
            span.className = "tw-hit" + (TARGET[lw] ? " tw-lock" : "");
            span.textContent = p;
            span.addEventListener("click", function (e) {
              /* preventDefault as well as stopPropagation: stopping the bubble
                 does not stop an enclosing <a> from navigating. */
              e.preventDefault(); e.stopPropagation(); onTap(span, lw);
            });
            frag.appendChild(span); any = true; return;
          }
        }
        if (p) frag.appendChild(document.createTextNode(p));
      });
      if (any) node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- keeping the decoration alive ----------
     stem-skills.html and stem-vocab-hub.html rewrite their whole view on every
     hashchange, so a word that arrived after the toggle went on used to stay
     untappable. decorate() skips anything already wrapped, so it is safe to run
     again over markup that is partly new; the observer is detached while it
     runs so our own replacements cannot feed it back. */
  var observer = null, pending = null;
  function ours(node) {
    var p = node;
    while (p && p !== document.body) {
      if (p.classList && (p.classList.contains("tw-bar") || p.classList.contains("tw-pop") ||
          p.classList.contains("tw-hit"))) return true;
      p = p.parentNode;
    }
    return false;
  }
  function redecorate() {
    if (!enabled) return;
    if (observer) observer.disconnect();
    try { decorate(document.body); }
    finally { if (observer) observer.observe(document.body, { childList: true, subtree: true }); }
  }
  function scheduleDecorate() {
    if (pending) return;
    pending = setTimeout(function () { pending = null; redecorate(); }, 60);
  }
  function startWatching() {
    if (observer || typeof MutationObserver !== "function") return;
    observer = new MutationObserver(function (recs) {
      for (var i = 0; i < recs.length; i++) {
        var r = recs[i];
        if (r.addedNodes && r.addedNodes.length && !ours(r.target)) { scheduleDecorate(); return; }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  function stopWatching() {
    if (observer) { observer.disconnect(); observer = null; }
    if (pending) { clearTimeout(pending); pending = null; }
  }

  /* ---------- holding the page while translate is on ----------
     The teacher's rule: you deselect translate to actually click things. So
     while the mode is on, every control outside our own chrome is inert, and
     tapping one says why rather than doing nothing silently. Without this a
     student tapping a word that happens to sit on a button navigates away
     mid-sentence and never sees the translation. */
  var EXEMPT = ".tw-bar,.tw-pop,.tw-toggle,.sv-panel,.sv-scrim,.sv-book,.language-select";
  var CONTROL = "a,button,select,input,textarea,summary,label,[role=button],[onclick]";
  function heldNudge(el) {
    showPop(el, "<div class='n'>" + esc(U("held")) + "</div>");
  }
  function hold(e) {
    if (!enabled) return;
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.classList && t.classList.contains("tw-hit")) return;   /* our own word */
    if (t.closest(EXEMPT)) return;                               /* our own chrome + the notebook */
    var ctl = t.closest(CONTROL);
    if (!ctl) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "click") heldNudge(ctl);
  }
  document.addEventListener("click", hold, true);
  document.addEventListener("submit", hold, true);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") hold(e);
  }, true);

  /* the bar is fixed to the bottom of the viewport, so reserve its height under
     the page while it is open — otherwise it covers the last lines. */
  function syncBarSpace() {
    if (!bar || !enabled) return;
    var h = bar.offsetHeight || 56;
    document.documentElement.style.setProperty("--tw-bar-h", h + "px");
  }
  window.addEventListener("resize", function () { syncBarSpace(); });

  function setEnabled(on) {
    enabled = on;
    if (on) { decorate(document.body); startWatching(); } else { stopWatching(); }
    bar.classList.toggle("on", on);
    document.body.classList.toggle("tw-active", on);
    syncBarSpace();
    document.querySelectorAll(".tw-hit").forEach(function (el) {
      el.style.borderBottomStyle = on ? "" : "none";
      el.style.cursor = on ? "" : "inherit";
      el.style.pointerEvents = on ? "" : "none";
    });
    if (!on) closePop();
    try { localStorage.setItem("elc_stem_tap", on ? "1" : "0"); } catch (e) {}
    var t = document.querySelector(".tw-toggle");
    if (t) t.classList.toggle("on", on);
  }

  /* the toggle button — pages put <span id="tw-slot"></span> in their top row */
  function mountToggle() {
    var slot = document.getElementById("tw-slot");
    var btn = document.createElement("button");
    btn.className = "tw-toggle";
    btn.type = "button";
    btn.textContent = "文 " + U("btn");
    btn.title = "Tap a word to see it in your language";
    btn.addEventListener("click", function () { setEnabled(!enabled); });
    (slot || document.body).appendChild(btn);
    if (!slot) { btn.style.position = "fixed"; btn.style.right = "14px"; btn.style.bottom = "62px"; btn.style.zIndex = "8400"; }
  }

  function init() {
    ensureChrome();
    mountToggle();
    var was = "0";
    try { was = localStorage.getItem("elc_stem_tap") || "0"; } catch (e) {}
    setEnabled(was === "1");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.STEMTAP = { decorate: decorate, setEnabled: setEnabled };
})();
