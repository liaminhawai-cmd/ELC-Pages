/* ============================================================
   ELC STEM hub — in-page vocab linker ("the notebook")
   ------------------------------------------------------------
   Include AFTER stem-vocab-data.js and stem-shared.js, then:
       STEMVOCAB.init();
   Mark any word in your page:  <span data-v>gradient</span>
   or, if the shown text differs:  <span data-v="gradient">slopes</span>
   What students get:
     hover/tap a marked word  -> the 📓 notebook glows
     click it                 -> glossary panel opens beside the work
                                 (meaning, morphemes, your language,
                                  quick Build + Check, hub link)
   Progress is shared with the STEM Vocab Hub and My Progress page
   via localStorage (see stem-shared.js).
   ============================================================ */
(function () {
  "use strict";
  if (!window.STEM_VOCAB_DATA || !window.STEM) return;

  var DATA = window.STEM_VOCAB_DATA;
  var Store = window.STEM.Store;
  var LANG_KEY = "elc_stem_home_lang";

  /* dictionary: lowercase word -> entry (+set back-refs) */
  var DICT = {};
  DATA.sets.forEach(function (set) {
    set.words.forEach(function (w) {
      var k = w.w.toLowerCase();
      if (!DICT[k]) { DICT[k] = w; w._sets = []; }
      DICT[k]._sets.push(set.id);
    });
  });

  /* "" when the browser has no speech engine, so it simply is not there */
  function SAY(t, code, cls) {
    return window.STEMSPEAK ? window.STEMSPEAK.btn(t, code, cls) : "";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function homeLang() { try { return localStorage.getItem(LANG_KEY) || ""; } catch (e) { return ""; } }
  function setHomeLang(v) { try { localStorage.setItem(LANG_KEY, v); } catch (e) {} }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---------- styles ---------- */
  var CSS = "" +
  ".sv-word{border-bottom:2px dotted var(--accent,#0d7a70);cursor:pointer;border-radius:2px}" +
  ".sv-word:hover,.sv-word:focus-visible{background:var(--accent-soft,#f4f9f8)}" +
  ".sv-word.sv-known{border-bottom-style:solid}" +
  ".sv-book{position:fixed;right:14px;bottom:14px;z-index:9000;width:52px;height:52px;border-radius:50%;" +
    "border:1px solid var(--hair,#e6e7e3);background:var(--paper,#fcfcfa);box-shadow:0 4px 14px rgba(16,24,40,.18);" +
    "font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center}" +
  ".sv-book .sv-count{position:absolute;top:-6px;right:-6px;background:var(--accent,#0d7a70);color:#fff;" +
    "font-size:11px;font-weight:700;min-width:20px;height:20px;border-radius:999px;display:flex;align-items:center;justify-content:center;padding:0 4px}" +
  ".sv-book.sv-glow{animation:svglow 1s ease-in-out infinite alternate}" +
  "@keyframes svglow{from{box-shadow:0 0 0 0 rgba(13,122,112,.55)}to{box-shadow:0 0 0 12px rgba(13,122,112,0)}}" +
  ".sv-panel{position:fixed;top:0;right:0;bottom:0;width:min(460px,100%);z-index:9001;background:var(--paper,#fcfcfa);" +
    "color:var(--ink,#212427);border-left:1px solid var(--hair,#e6e7e3);box-shadow:-8px 0 30px rgba(16,24,40,.18);" +
    "transform:translateX(105%);transition:transform .22s ease;display:flex;flex-direction:column}" +
  ".sv-panel.sv-open{transform:none}" +
  "@media(max-width:720px){.sv-panel{top:auto;left:0;width:100%;max-height:82vh;border-left:0;border-top:1px solid var(--hair,#e6e7e3);" +
    "border-radius:16px 16px 0 0;transform:translateY(105%)}.sv-panel.sv-open{transform:none}}" +
  ".sv-head{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--hair,#e6e7e3)}" +
  ".sv-head h2{font-size:1.25rem;margin:0;flex:1;font-family:Georgia,'Times New Roman',serif}" +
  ".sv-x{border:0;background:none;font-size:22px;cursor:pointer;color:var(--muted,#767b7f);min-width:44px;min-height:44px;display:flex;align-items:center;justify-content:center;padding:0}" +
  ".sv-body{padding:14px 16px 20px;overflow-y:auto;flex:1;font-size:.95rem;line-height:1.55}" +
  ".sv-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}" +
  ".sv-chip{border-radius:999px;padding:4px 12px;font-size:.85rem;font-weight:600;border:1px solid var(--hair,#e6e7e3)}" +
  ".sv-chip small{display:block;font-weight:400;font-size:.72rem;opacity:.85}" +
  ".sv-chip.sv-prefix{background:#e5eef5;color:#2c6fa8}.sv-chip.sv-root{background:#f5e7d8;color:#9a5518}.sv-chip.sv-suffix{background:#e6f1e8;color:#3f7a4a}" +
  "@media(prefers-color-scheme:dark){.sv-chip.sv-prefix{background:#22323c;color:#9fcbe1}.sv-chip.sv-root{background:#34281c;color:#dda866}.sv-chip.sv-suffix{background:#22321f;color:#93cf9b}}" +
  ".sv-tr{background:var(--accent-soft,#f4f9f8);border-radius:10px;padding:8px 12px;margin:10px 0}" +
  ".sv-tr select{margin-left:6px;font:inherit;border-radius:8px;border:1px solid var(--hair,#e6e7e3);padding:2px 6px;background:var(--paper,#fcfcfa);color:var(--ink,#212427)}" +
  ".sv-tr .sv-trword{font-size:1.15rem;font-weight:700;margin-top:4px}" +
  ".sv-note{color:var(--muted,#767b7f);font-size:.88rem;border-left:3px solid var(--hair,#e6e7e3);padding-left:10px;margin:10px 0}" +
  ".sv-actions{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 6px}" +
  ".sv-btn{border-radius:999px;border:1px solid var(--accent,#0d7a70);background:var(--accent,#0d7a70);color:#fff;" +
    "padding:8px 16px;font:inherit;font-weight:600;cursor:pointer}" +
  ".sv-btn.sv-ghost{background:none;color:var(--accent,#0d7a70)}" +
  ".sv-btn:disabled{opacity:.5;cursor:default}" +
  ".sv-done{color:#2f6a3e;font-weight:700}" +
  "@media(prefers-color-scheme:dark){.sv-done{color:#93cf9b}}" +
  ".sv-build{margin:12px 0;padding:12px;border:1px dashed var(--hair,#e6e7e3);border-radius:12px}" +
  ".sv-slots{display:flex;flex-wrap:wrap;gap:6px;min-height:40px;margin-bottom:10px}" +
  ".sv-slot{border-bottom:2px solid var(--muted,#767b7f);min-width:52px;text-align:center;padding:6px 8px;font-weight:700}" +
  ".sv-tiles{display:flex;flex-wrap:wrap;gap:6px}" +
  ".sv-tile{border-radius:10px;border:1px solid var(--hair,#e6e7e3);background:var(--paper,#fcfcfa);color:var(--ink,#212427);padding:7px 12px;font:inherit;font-weight:600;cursor:pointer}" +
  ".sv-tile:disabled{opacity:.35}" +
  ".sv-feedback{margin-top:8px;font-weight:600}" +
  ".sv-opts{display:flex;flex-direction:column;gap:8px;margin-top:8px}" +
  ".sv-opt{text-align:left;border-radius:10px;border:1px solid var(--hair,#e6e7e3);background:var(--paper,#fcfcfa);color:var(--ink,#212427);padding:9px 12px;font:inherit;cursor:pointer}" +
  ".sv-opt.sv-right{border-color:#2f6a3e;background:rgba(47,106,62,.12)}" +
  ".sv-opt.sv-wrong{border-color:#a8432f;background:rgba(168,67,47,.12)}" +
  ".sv-muted{color:var(--muted,#767b7f);font-size:.85rem}" +
  ".sv-listrow{display:flex;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid var(--hair,#e6e7e3)}" +
  ".sv-scrim{position:fixed;inset:0;z-index:9000;background:rgba(15,20,32,.35);opacity:0;pointer-events:none;transition:opacity .2s}" +
  ".sv-scrim.sv-open{opacity:1;pointer-events:auto}";

  /* ---------- DOM scaffolding ---------- */
  var book, panel, scrim, panelBody, panelTitle;

  function build() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    book = document.createElement("button");
    book.className = "sv-book";
    book.setAttribute("aria-label", "Open my vocab notebook");
    book.innerHTML = "📓<span class='sv-count'>0</span>";
    book.addEventListener("click", function () { openList(); });
    document.body.appendChild(book);

    scrim = document.createElement("div");
    scrim.className = "sv-scrim";
    scrim.addEventListener("click", closePanel);
    document.body.appendChild(scrim);

    panel = document.createElement("aside");
    panel.className = "sv-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Vocab notebook");
    panel.innerHTML = "<div class='sv-head'><h2></h2><button class='sv-x' aria-label='Close'>×</button></div><div class='sv-body'></div>";
    panelTitle = panel.querySelector("h2");
    panelBody = panel.querySelector(".sv-body");
    panel.querySelector(".sv-x").addEventListener("click", closePanel);
    document.body.appendChild(panel);

    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });
    refreshCount();
  }

  function refreshCount() {
    var v = Store.vocab(), n = 0;
    Object.keys(v).forEach(function (k) { if (v[k].built || v[k].checked) n++; });
    var c = book.querySelector(".sv-count");
    c.textContent = n;
    c.style.display = n ? "flex" : "none";
  }

  function openPanel() { panel.classList.add("sv-open"); scrim.classList.add("sv-open"); }
  function closePanel() { panel.classList.remove("sv-open"); scrim.classList.remove("sv-open"); book.classList.remove("sv-glow"); }

  /* ---------- language ---------- */
  function langSelect(entry, onchange) {
    var cur = homeLang();
    var sel = "<select class='sv-langsel'><option value=''>choose…</option>";
    (DATA.langs || []).forEach(function (l) {
      sel += "<option value='" + esc(l.id) + "'" + (l.id === cur ? " selected" : "") + ">" + esc(l.name) + "</option>";
    });
    return sel + "</select>";
  }

  /* ---------- word panel ---------- */
  function openWord(name) {
    var entry = DICT[name.toLowerCase()];
    if (!entry) return;
    Store.markVocab(entry.w, "seen");
    var st = Store.vocabWord(entry.w) || {};
    /* the headword gets a speaker: hearing an academic word is half of
       learning it, and this panel is where a student meets it */
    panelTitle.innerHTML = esc(entry.w) + SAY(entry.w, "en", "lg");
    var h = "";

    if (entry.parts && entry.parts.length) {
      h += "<div class='sv-chips'>";
      entry.parts.forEach(function (p) {
        var trTxt = "";
        var lg = homeLang();
        if (lg && p.tr && p.tr[lg]) trTxt = " · " + esc(p.tr[lg]);
        h += "<span class='sv-chip sv-" + esc(p.type || "root") + "'>" + esc(p.surface) +
             "<small>" + esc(p.meaning || "") + trTxt + "</small></span>";
      });
      h += "</div>";
    }
    h += "<p>" + esc(entry.meaning || "") + "</p>";
    if (entry.example) h += "<p class='sv-muted'>“" + esc(entry.example) + "”" +
      SAY(entry.example, "en", "sm") + "</p>";

    /* the whole-word translation is BUILT-gated, exactly like tap-to-translate:
       assembling the word is what unlocks it. The morpheme translations above
       stay visible — they are the tools for the build, not the reward. */
    if (st.built) {
      h += "<div class='sv-tr'>In your language " + langSelect(entry) + "<div class='sv-trword'></div></div>";
    } else {
      h += "<div class='sv-tr sv-locked'>In your language " + langSelect(entry) +
           "<div class='sv-trword sv-muted'>🔒 build the word to unlock its translation</div></div>";
    }
    if (entry.note) h += "<div class='sv-note'>" + entry.note + "</div>";
    else if (entry.origin) h += "<div class='sv-note'>" + esc(entry.origin) + "</div>";

    var builtBadge = st.built ? "<span class='sv-done'>✓ built</span>" : "";
    var checkBadge = st.checked ? "<span class='sv-done'>✓ checked</span>" : "";
    h += "<div class='sv-actions'>";
    if (!st.built && entry.parts && entry.parts.length > 1) {
      h += "<button class='sv-btn' data-act='build'>🔨 Build it</button>";
    } else if (!st.built) {
      h += "<button class='sv-btn' data-act='remember'>⭐ I’ve got this word</button>";
    }
    if (entry.apply && entry.apply.length) h += "<button class='sv-btn sv-ghost' data-act='check'>❓ Check it</button>";
    h += builtBadge + checkBadge + "</div>";

    if (!st.built) h += "<p class='sv-muted'>This word isn’t in your notebook yet — build it now, or do the full lesson in the Vocab Hub.</p>";

    h += "<div class='sv-buildarea'></div>";
    h += "<p style='margin-top:14px'><a href='stem-vocab-hub.html#word=" + encodeURIComponent(entry.w) + "'>Open in the STEM Vocab Hub →</a></p>";

    panelBody.innerHTML = h;
    var sel = panelBody.querySelector(".sv-langsel");
    var trword = panelBody.querySelector(".sv-trword");
    function paintTr() {
      if (!st.built) { if (sel) sel.value = homeLang(); return; }
      var lg = homeLang();
      var trTxt = (lg && entry.tr && entry.tr[lg]) ? entry.tr[lg] : "";
      /* said in the home language, not read out in an English accent */
      trword.innerHTML = esc(trTxt) + (trTxt ? SAY(trTxt, lg, "sm") : "");
      if (sel) sel.value = lg;
    }
    if (sel) sel.addEventListener("change", function () { setHomeLang(sel.value); openWord(name); });
    paintTr();

    panelBody.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.getAttribute("data-act");
        if (act === "build") renderBuild(entry);
        if (act === "check") renderCheck(entry);
        if (act === "remember") { Store.markVocab(entry.w, "built"); refreshCount(); openWord(name); }
      });
    });
    /* an unbuilt word does not wait to be asked: the panel opens with the
       build already laid out. Backing out is still one tap on ×. */
    if (!st.built && entry.parts && entry.parts.length > 1) renderBuild(entry);
    openPanel();
  }

  /* quick build: tap the tiles in order */
  function renderBuild(entry) {
    var area = panelBody.querySelector(".sv-buildarea");
    var target = entry.parts.map(function (p) { return p.surface; });
    var pool = shuffle(target.slice());
    var placed = [];
    function paint() {
      var h = "<div class='sv-build'><div class='sv-slots'>";
      for (var i = 0; i < target.length; i++) {
        h += "<span class='sv-slot'>" + (placed[i] ? esc(placed[i]) : "&nbsp;") + "</span>";
      }
      h += "</div><div class='sv-tiles'>";
      pool.forEach(function (t, idx) {

        h += "<button class='sv-tile' data-idx='" + idx + "'" + (usedIdx[idx] ? " disabled" : "") + ">" + esc(t) + "</button>";
      });
      h += "</div><div class='sv-feedback'></div></div>";
      area.innerHTML = h;
      area.querySelectorAll(".sv-tile").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = +btn.getAttribute("data-idx");
          if (usedIdx[idx]) return;
          var pos = placed.length;
          if (pool[idx] === target[pos]) {
            placed.push(pool[idx]); usedIdx[idx] = true; paint();
            if (placed.length === target.length) {
              Store.markVocab(entry.w, "built"); refreshCount();
              area.querySelector(".sv-feedback").innerHTML = "<span class='sv-done'>✓ " + esc(entry.w) + " is in your notebook!</span>";
              /* repaint so the ✓, the unlocked translation and the check
                 arrive now, not on the next visit */
              setTimeout(function () { openWord(entry.w); }, 1200);
            }
          } else {
            var fb = area.querySelector(".sv-feedback");
            fb.textContent = "Not that piece next — think about the order.";
            setTimeout(function () { if (fb.parentNode) fb.textContent = ""; }, 1600);
          }
        });
      });
    }
    var usedIdx = {};
    paint();
  }

  /* quick check: one random apply question */
  function renderCheck(entry) {
    var area = panelBody.querySelector(".sv-buildarea");
    var item = entry.apply[Math.floor(Math.random() * entry.apply.length)];
    var q = item.type === "cloze"
      ? esc(item.before) + " ____ " + esc(item.after)
      : esc(item.q || "");
    var h = "<div class='sv-build'><p>" + q + "</p><div class='sv-opts'>";
    shuffle(item.opts || []).forEach(function (o) {
      h += "<button class='sv-opt'>" + esc(o) + "</button>";
    });
    h += "</div><div class='sv-feedback'></div></div>";
    area.innerHTML = h;
    var done = false;
    area.querySelectorAll(".sv-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (done) return;
        var right = btn.textContent === String(item.a);
        btn.classList.add(right ? "sv-right" : "sv-wrong");
        var fb = area.querySelector(".sv-feedback");
        if (right) {
          done = true;
          Store.markVocab(entry.w, "checked"); refreshCount();
          fb.innerHTML = "<span class='sv-done'>✓ Correct.</span> <span class='sv-muted'>" + (item.explain || "") + "</span>";
        } else {
          fb.innerHTML = "<span class='sv-muted'>Not quite — try again. Think about the word parts.</span>";
        }
      });
    });
  }

  /* notebook list view */
  function openList() {
    panelTitle.textContent = "📓 My vocab notebook";
    var v = Store.vocab();
    var h = "<p class='sv-muted'>Words you build or check anywhere on the STEM pages land here — and on your <a href='stem-progress.html'>My Progress</a> report. Stored in this browser only.</p>";
    DATA.sets.forEach(function (set) {
      var built = 0, checked = 0;
      set.words.forEach(function (w) {
        var s = v[w.w.toLowerCase()];
        if (s && s.built) built++;
        if (s && s.checked) checked++;
      });
      h += "<div class='sv-listrow'><span>" + esc(set.title) + "</span><span class='sv-muted'>" +
           built + "/" + set.words.length + " built · " + checked + " checked</span></div>";
    });
    h += "<p style='margin-top:14px'><a class='sv-btn' style='text-decoration:none' href='stem-notebook.html'>Open my full notebook →</a> " +
         "<a class='sv-btn sv-ghost' style='text-decoration:none' href='stem-vocab-hub.html'>Open the STEM Vocab Hub →</a></p>";
    panelBody.innerHTML = h;
    openPanel();
  }

  /* ---------- decorate tagged words ---------- */
  function decorate(root) {
    (root || document).querySelectorAll("[data-v]").forEach(function (el) {
      if (el._sv) return;
      el._sv = true;
      var key = (el.getAttribute("data-v") || el.textContent).trim().toLowerCase();
      if (!DICT[key]) return;
      el.classList.add("sv-word");
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      var st = Store.vocabWord(key);
      if (st && (st.built || st.checked)) el.classList.add("sv-known");
      el.addEventListener("mouseenter", function () { book.classList.add("sv-glow"); });
      el.addEventListener("mouseleave", function () { book.classList.remove("sv-glow"); });
      el.addEventListener("click", function () { openWord(key); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openWord(key); }
      });
    });
  }

  window.STEMVOCAB = {
    init: function () { build(); decorate(document); },
    decorate: decorate,
    openWord: openWord,
    dict: DICT
  };
})();
