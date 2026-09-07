/* ============================================================
   ELC Hub — tap a word, see your language
   ------------------------------------------------------------
   Include on any hub page, after the page's own script:
       <script src="word-tap.js?v=v1" defer></script>
   It runs itself. The STEM pages have their own version
   (stem-translate.js) with locked target words; this one is for
   every other page and steps aside if that one is present.

   Two rules, on purpose:
   1. Machine translation of the whole page is blocked (the Google
      notranslate meta + translate="no" on the root), so the page
      cannot be read in another language by walking around the
      English.
   2. ONE word at a time. While translate is on, the page is held —
      buttons and links are inert and say so — and tapping a word
      shows that word, in the student's language, with its ELC
      meaning if the Word Builder teaches it.

   The dictionary (elc-gloss.js, ~450 KB) loads only when a student
   turns translate on. It is generated in the private ELC repo from
   the Word Builder's ELC-level words plus the STEM helper words —
   do not hand-edit it here.

   Turn tapping off for one element with class="no-tap".
   ============================================================ */
(function () {
  "use strict";
  if (window.STEM2 || window.STEMTAP) return;          /* STEM pages carry their own */
  if (window.ELCTAP) return;

  var LANG_KEY = "elc_stem_home_lang";                 /* shared with the STEM hub: one student, one language */
  var ON_KEY = "elc_tap";
  var GLOSS_SRC = "elc-gloss.js?v=v1";

  var LANGS = [
    ["zh-Hant", "繁體中文（台灣） Chinese (Taiwan)"], ["zh-Hans", "简体中文（中国） Chinese (China)"],
    ["vi", "Tiếng Việt Vietnamese"], ["ja", "日本語 Japanese"], ["ko", "한국어 Korean"],
    ["ar", "العربية Arabic"], ["fa", "فارسی Farsi/Dari"], ["ur", "اردو Urdu"], ["ps", "پښتو Pashto"],
    ["hi", "हिन्दी Hindi"], ["ta", "தமிழ் Tamil"], ["ml", "മലയാളം Malayalam"], ["am", "አማርኛ Amharic"],
    ["tl", "Tagalog"], ["es", "Español Spanish"], ["fr", "Français French"], ["ro", "Română Romanian"],
    ["ru", "Русский Russian"]
  ];

  /* ---------- block machine translation of the page ---------- */
  (function blockMT() {
    if (!document.querySelector('meta[name="google"][content="notranslate"]')) {
      var m = document.createElement("meta");
      m.name = "google"; m.content = "notranslate";
      document.head.appendChild(m);
    }
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
  })();

  /* the few strings this shows, in the page languages the hub offers */
  var UI = {
    en:        { btn: "tap to translate", my: "My language", pick: "choose…",
                 hint: "tap one word · buttons are off",
                 held: "Translate is on, so the page is held. Turn it off to use this.",
                 first: "Choose your language in the bar below first.",
                 none: "No translation stored for this word.", loading: "Loading the dictionary…" },
    "zh-Hans": { btn: "点词翻译", my: "我的语言", pick: "选择…",
                 hint: "一次点一个词 · 按钮已停用",
                 held: "翻译模式开着，页面被暂停了。关掉它才能点这个。",
                 first: "请先在下面选择你的语言。",
                 none: "这个词还没有翻译。", loading: "正在载入词典…" },
    "zh-Hant": { btn: "點字翻譯", my: "我的語言", pick: "選擇…",
                 hint: "一次點一個字 · 按鈕已停用",
                 held: "翻譯模式開著，頁面被暫停了。關掉它才能點這個。",
                 first: "請先在下面選擇你的語言。",
                 none: "這個字還沒有翻譯。", loading: "正在載入詞典…" },
    vi:        { btn: "chạm để dịch", my: "Tiếng của tôi", pick: "chọn…",
                 hint: "chạm một từ · các nút đang tắt",
                 held: "Chế độ dịch đang bật nên trang bị giữ lại. Hãy tắt nó để dùng nút này.",
                 first: "Hãy chọn tiếng của bạn ở thanh bên dưới trước.",
                 none: "Từ này chưa có bản dịch.", loading: "Đang tải từ điển…" }
  };
  function pageLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return UI[l] ? l : "en";
  }
  function U(k) { return UI[pageLang()][k] || UI.en[k]; }
  function homeLang() { try { return localStorage.getItem(LANG_KEY) || ""; } catch (e) { return ""; } }
  function setHomeLang(v) { try { localStorage.setItem(LANG_KEY, v); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  var CSS = "" +
    ".tw-bar{position:fixed;left:0;right:0;bottom:0;z-index:8500;display:flex;flex-wrap:wrap;gap:10px;align-items:center;" +
      "padding:9px 14px;background:var(--card,#fff);color:var(--ink,#1c2333);border-top:1px solid var(--line,#e3e8f2);" +
      "font-size:.8rem;transform:translateY(102%);transition:transform .18s ease;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
    ".tw-bar.on{transform:none}" +
    ".tw-bar select{font:inherit;font-size:.78rem;border:1px solid var(--line,#e3e8f2);border-radius:8px;" +
      "background:var(--bg,#f6f8fc);color:var(--ink,#1c2333);padding:4px 7px;min-height:44px;flex:1 1 160px;min-width:0;max-width:260px}" +
    ".tw-bar .tw-x{margin-left:auto;border:0;background:none;color:var(--muted,#5b6478);font-size:1.1rem;cursor:pointer;" +
      "min-width:44px;min-height:44px;line-height:1;display:flex;align-items:center;justify-content:center}" +
    "body.tw-active{padding-bottom:var(--tw-bar-h,56px)}" +
    ".tw-hit{cursor:help;border-bottom:1px dotted var(--muted,#9aa0a5)}" +
    ".tw-hit.tw-on{background:color-mix(in srgb,var(--accent,#7c3aed) 14%,transparent);border-bottom-color:var(--accent,#7c3aed)}" +
    ".tw-pop{position:absolute;z-index:8600;max-width:260px;background:var(--card,#fff);color:var(--ink,#1c2333);" +
      "border:1px solid var(--line,#e3e8f2);border-radius:9px;padding:9px 11px;font-size:.82rem;line-height:1.45;" +
      "box-shadow:0 6px 20px rgba(16,24,40,.13);font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
    ".tw-pop .w{font-size:1rem;font-weight:700}" +
    ".tw-pop .g{font-size:1.1rem;font-weight:800;margin-top:3px;color:var(--accent,#7c3aed)}" +
    ".tw-pop .n{color:var(--muted,#5b6478);font-size:.75rem;margin-top:4px}" +
    "body.tw-active button:not(.tw-x):not(.tw-toggle),body.tw-active a:not(.tw-toggle){border-color:var(--line,#e3e8f2)!important}" +
    "body.tw-active button:not(.tw-x):not(.tw-toggle){cursor:not-allowed}" +
    ".tw-toggle{position:fixed;right:14px;bottom:62px;z-index:8400;border:1px solid var(--line,#e3e8f2);border-radius:999px;" +
      "background:var(--card,#fff);color:var(--muted,#5b6478);font:inherit;font-size:.72rem;padding:4px 13px;cursor:pointer;min-height:44px;" +
      "box-shadow:0 1px 2px rgba(16,24,40,.05),0 5px 16px rgba(16,24,40,.07);font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
    ".tw-toggle.on{border-color:var(--accent,#7c3aed);color:var(--accent,#7c3aed)}" +
    "body.tw-active .tw-toggle{bottom:calc(var(--tw-bar-h,56px) + 14px)}" +
    "body.tw-active .elc-report{bottom:calc(var(--tw-bar-h,56px) + 22px)}" +
    "@media print{.tw-bar,.tw-pop,.tw-toggle{display:none!important}.tw-hit{border-bottom:0}}";

  var bar, pop, toggle, active = null, enabled = false, gloss = null, glossLoading = false;

  /* ---------- the dictionary, loaded on first use ---------- */
  function loadGloss(then) {
    if (gloss) { then(); return; }
    if (window.ELC_GLOSS) { gloss = window.ELC_GLOSS; then(); return; }
    if (glossLoading) { setTimeout(function () { loadGloss(then); }, 150); return; }
    glossLoading = true;
    var s = document.createElement("script");
    s.src = GLOSS_SRC;
    s.onload = function () { gloss = window.ELC_GLOSS || {}; glossLoading = false; then(); };
    s.onerror = function () { gloss = {}; glossLoading = false; then(); };
    document.head.appendChild(s);
  }
  /* exact word, then its likely base form: isolates → isolate, admitted → admit, happily → happy */
  function lookup(word) {
    var w = word.toLowerCase();
    if (gloss[w]) return gloss[w];
    var tries = [];
    var m;
    if ((m = /^(.+?)(ies)$/.exec(w))) tries.push(m[1] + "y");
    if ((m = /^(.+?)(ily)$/.exec(w))) tries.push(m[1] + "y");
    if ((m = /^(.+?)(es|s|ed|d|ing|ly|er|est)$/.exec(w))) {
      var b = m[1];
      tries.push(b, b + "e");
      if (/([bdgmnprt])\1$/.test(b)) tries.push(b.slice(0, -1));
    }
    for (var i = 0; i < tries.length; i++) if (gloss[tries[i]]) return gloss[tries[i]];
    return null;
  }

  function ensureChrome() {
    var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s);
    bar = document.createElement("div");
    bar.className = "tw-bar";
    var opts = "<option value=''>" + esc(U("pick")) + "</option>";
    LANGS.forEach(function (l) { opts += "<option value='" + esc(l[0]) + "'>" + esc(l[1]) + "</option>"; });
    bar.innerHTML = "<span>" + esc(U("my")) + "</span><select aria-label='My first language'>" + opts + "</select>" +
      "<span class='tw-hint' style='color:var(--muted,#5b6478)'>" + esc(U("hint")) + "</span>" +
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
      if (!pop.contains(e.target) && !(e.target.classList && e.target.classList.contains("tw-hit"))) closePop();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePop(); });
    toggle = document.createElement("button");
    toggle.className = "tw-toggle"; toggle.type = "button";
    toggle.textContent = "文 " + U("btn");
    toggle.title = "Tap a word to see it in your language";
    toggle.addEventListener("click", function () { setEnabled(!enabled); });
    document.body.appendChild(toggle);
  }
  function closePop() {
    if (pop) pop.style.display = "none";
    if (active) { active.classList.remove("tw-on"); active = null; }
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
  function onTap(el, word) {
    if (active === el) { closePop(); return; }          /* tap again to put it down */
    closePop();
    active = el; el.classList.add("tw-on");
    if (!homeLang()) { showPop(el, "<div class='n'>" + esc(U("first")) + "</div>"); return; }
    if (!gloss) {
      showPop(el, "<div class='w'>" + esc(word) + "</div><div class='n'>" + esc(U("loading")) + "</div>");
      loadGloss(function () { if (active === el) render(el, word); });
      return;
    }
    render(el, word);
  }
  function render(el, word) {
    var e = lookup(word), lg = homeLang();
    var tr = e && e.t && e.t[lg];
    if (tr) showPop(el, "<div class='w'>" + esc(word) + "</div><div class='g'>" + esc(tr) + "</div>" +
      (e.m ? "<div class='n'>" + esc(String(e.m).slice(0, 110)) + "</div>" : ""));
    else showPop(el, "<div class='w'>" + esc(word) + "</div><div class='n'>" + esc(U("none")) + "</div>");
  }

  /* ---------- the word splitter ---------- */
  var SPLIT_RE = /([A-Za-z][A-Za-z'’-]{1,})/;
  var SKIP = { SCRIPT: 1, STYLE: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, CODE: 1, SVG: 1, OPTION: 1, PRE: 1 };
  function decorate(root) {
    if (!enabled) return;
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !/[A-Za-z]{2}/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        while (p && p !== document.body) {
          if (SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
          if (p.classList && (p.classList.contains("no-tap") || p.classList.contains("tw-bar") ||
              p.classList.contains("tw-pop") || p.classList.contains("tw-hit") || p.classList.contains("tw-toggle") ||
              p.classList.contains("elc-report"))) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var parts = node.nodeValue.split(SPLIT_RE);
      if (parts.length < 2) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function (p, i) {
        if (i % 2 === 1) {
          var span = document.createElement("span");
          span.className = "tw-hit";
          span.textContent = p;
          span.addEventListener("click", function (ev) { ev.preventDefault(); ev.stopPropagation(); onTap(span, p); });
          frag.appendChild(span);
        } else if (p) frag.appendChild(document.createTextNode(p));
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- keep the decoration alive on pages that redraw ---------- */
  var observer = null, pending = null;
  function ours(node) {
    var p = node;
    while (p && p !== document.body) {
      if (p.classList && (p.classList.contains("tw-bar") || p.classList.contains("tw-pop") || p.classList.contains("tw-hit"))) return true;
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

  /* ---------- holding the page while translate is on ---------- */
  var EXEMPT = ".tw-bar,.tw-pop,.tw-toggle,.language-select,.elc-report";
  var CONTROL = "a,button,select,input,textarea,summary,label,[role=button],[onclick]";
  function hold(e) {
    if (!enabled) return;
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.classList && t.classList.contains("tw-hit")) return;
    if (t.closest(EXEMPT)) return;
    var ctl = t.closest(CONTROL);
    if (!ctl) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "click") { closePop(); active = null; showPop(ctl, "<div class='n'>" + esc(U("held")) + "</div>"); }
  }
  document.addEventListener("click", hold, true);
  document.addEventListener("submit", hold, true);
  document.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") hold(e); }, true);

  function syncBarSpace() {
    if (!bar || !enabled) return;
    var h = bar.offsetHeight || 56;
    document.documentElement.style.setProperty("--tw-bar-h", h + "px");
  }
  window.addEventListener("resize", syncBarSpace);

  function setEnabled(on) {
    enabled = on;
    if (on) { loadGloss(function () {}); decorate(document.body); startWatching(); } else { stopWatching(); }
    bar.classList.toggle("on", on);
    toggle.classList.toggle("on", on);
    document.body.classList.toggle("tw-active", on);
    syncBarSpace();
    document.querySelectorAll(".tw-hit").forEach(function (el) {
      el.style.borderBottomStyle = on ? "" : "none";
      el.style.cursor = on ? "" : "inherit";
      el.style.pointerEvents = on ? "" : "none";
    });
    if (!on) closePop();
    try { localStorage.setItem(ON_KEY, on ? "1" : "0"); } catch (e) {}
  }
  function init() {
    ensureChrome();
    var was = "0";
    try { was = localStorage.getItem(ON_KEY) || "0"; } catch (e) {}
    setEnabled(was === "1");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  window.ELCTAP = { decorate: decorate, setEnabled: setEnabled };
})();
