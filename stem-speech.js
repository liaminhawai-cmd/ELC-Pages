/* ============================================================
   ELC STEM hub — read aloud
   ------------------------------------------------------------
   The same feature the Word Builder has, and deliberately the
   same behaviour: the browser's own speechSynthesis, no network,
   no dependency, Australian English by default because this is
   an Australian school program, rate 0.9 because these are
   learners, and cancel-before-speak so a rapid tapper does not
   build a queue.

   For a newly-arrived student, hearing "coefficient" or
   "displacement" said aloud matters as much as seeing it — and a
   home-language translation is worth hearing in the home
   language, which is why speak() takes a language code.

   TWO DIFFERENCES from the Word Builder's speech.js, both
   deliberate:
     · it is a plain script, not an ES module, because every
       other file in this hub is;
     · the button draws an SVG speaker instead of the 🔊 emoji,
       because this hub's house style has no emoji chrome.

   USE
       STEMSPEAK.btn("velocity")            English
       STEMSPEAK.btn(word, "vi")            a home language
       STEMSPEAK.btn(word, "en", "lg")      bigger, for a headword
   btn() returns an HTML STRING (this hub builds markup as
   strings), or "" when the browser has no speech engine — so a
   caller can concatenate it unconditionally and it simply is not
   there on a browser that cannot speak.

   Clicks are handled by ONE delegated listener, so a button
   works no matter when it was inserted. Panels here are
   re-rendered constantly; per-button listeners would go stale.
   ============================================================ */
(function () {
  "use strict";

  /* our internal language codes -> BCP-47 tags the engine knows.
     Identical to the Word Builder's map, so a word said in one
     app is said the same way in the other. */
  var BCP47 = {
    en: "en-AU",
    "zh-Hans": "zh-CN",
    "zh-Hant": "zh-TW",
    ja: "ja-JP", ko: "ko-KR", vi: "vi-VN", ar: "ar-SA", fa: "fa-IR",
    ur: "ur-PK", am: "am-ET", ml: "ml-IN", ta: "ta-IN", tl: "fil-PH",
    ps: "ps-AF", ro: "ro-RO", ru: "ru-RU", fr: "fr-FR", hi: "hi-IN",
    es: "es-ES"
  };

  function can() {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }
  function bcp47(code) { return BCP47[code] || ""; }

  function voiceFor(tag) {
    var voices = window.speechSynthesis.getVoices() || [];
    var lang = String(tag).toLowerCase(), base = lang.split("-")[0], i;
    /* an exact region match first, then any voice for the same language */
    for (i = 0; i < voices.length; i++) {
      if (voices[i].lang && voices[i].lang.toLowerCase() === lang) return voices[i];
    }
    for (i = 0; i < voices.length; i++) {
      if (voices[i].lang && voices[i].lang.toLowerCase().split("-")[0] === base) return voices[i];
    }
    return null;
  }

  /* speak `text` in one of our language codes. Returns false when the
     browser has no voice for that language, so a caller can say so
     rather than leaving a student tapping a button that does nothing. */
  function speak(text, code) {
    if (!can() || !text) return false;
    var synth = window.speechSynthesis;
    synth.cancel();                       /* no queue on rapid taps */
    var tag = BCP47[code || "en"] || "en-AU";
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = tag;
    u.rate = 0.9;                         /* a touch slower — learners */
    var v = voiceFor(tag);
    if (v) u.voice = v;
    try { synth.speak(u); } catch (e) { return false; }
    return !!v || BCP47[code] === undefined;
  }

  function hasVoiceFor(code) {
    if (!can()) return false;
    return !!voiceFor(BCP47[code || "en"] || "en-AU");
  }
  /* voice lists load asynchronously on some engines */
  function onVoicesReady(cb) {
    if (!can()) return;
    if ((window.speechSynthesis.getVoices() || []).length) { cb(); return; }
    window.speechSynthesis.addEventListener("voiceschanged", cb, { once: true });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* the four page languages, for the button's own label */
  var LBL = {
    en: "Listen", "zh-Hans": "朗读", "zh-Hant": "朗讀", vi: "Nghe"
  };
  function uiLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return LBL[l] ? l : "en";
  }

  var ICON =
    "<svg viewBox='0 0 16 16' aria-hidden='true' focusable='false'>" +
    "<path d='M7.2 2.6 4.1 5.1H2.2a.7.7 0 0 0-.7.7v4.4c0 .4.3.7.7.7h1.9l3.1 2.5c.45.36 1.1.05 1.1-.53V3.13c0-.58-.65-.89-1.1-.53z'/>" +
    "<path d='M10.9 5.2a.62.62 0 0 0-.15.87c.38.53.6 1.2.6 1.93s-.22 1.4-.6 1.93a.62.62 0 1 0 1.02.72A4.6 4.6 0 0 0 12.6 8a4.6 4.6 0 0 0-.83-2.65.62.62 0 0 0-.87-.15z'/>" +
    "<path d='M12.85 2.75a.62.62 0 0 0-.2.86A7.3 7.3 0 0 1 13.8 8c0 1.6-.42 3.06-1.15 4.39a.62.62 0 1 0 1.09.6A8.55 8.55 0 0 0 15.05 8c0-1.85-.5-3.57-1.34-5a.62.62 0 0 0-.86-.25z'/>" +
    "</svg>";

  /* an HTML string, or "" when this browser cannot speak — so callers
     concatenate it unconditionally and it is simply absent otherwise */
  function btn(text, code, cls) {
    if (!can() || !text) return "";
    var t = String(text);
    return "<button type='button' class='sp-say no-tap" + (cls ? " " + esc(cls) : "") +
      "' data-say=\"" + esc(t) + "\" data-lang=\"" + esc(code || "en") + "\"" +
      " aria-label=\"" + esc(LBL[uiLang()] + ": " + t) + "\"" +
      " title=\"" + esc(LBL[uiLang()]) + "\">" + ICON + "</button>";
  }

  var CSS =
    ".sp-say{border:0;background:transparent;cursor:pointer;padding:0;margin:0 0 0 6px;" +
      "display:inline-flex;align-items:center;justify-content:center;" +
      "width:34px;height:34px;min-width:34px;border-radius:8px;color:var(--muted,#5c6166);" +
      "vertical-align:middle;flex:0 0 auto;-webkit-tap-highlight-color:transparent}" +
    ".sp-say svg{width:15px;height:15px;fill:currentColor;pointer-events:none}" +
    ".sp-say:hover{color:var(--accent,#0d7a70);background:var(--accent-soft,#f4f9f8)}" +
    ".sp-say:focus-visible{outline:2px solid var(--accent,#0d7a70);outline-offset:1px}" +
    ".sp-say.lg svg{width:18px;height:18px}" +
    ".sp-say.sm{width:30px;height:30px;min-width:30px}" +
    ".sp-say.sm svg{width:13px;height:13px}" +
    /* while it is speaking, so a student can see which word is sounding */
    ".sp-say.on{color:var(--accent,#0d7a70);background:var(--accent-soft,#f4f9f8)}" +
    "@media (prefers-reduced-motion:no-preference){.sp-say:active{transform:scale(.92)}}";

  var cssDone = false;
  function ensureCss() {
    if (cssDone || !document.head) return;
    cssDone = true;
    var s = document.createElement("style");
    s.id = "sp-css"; s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ONE delegated listener for every speaker button on the page, now and
     later. preventDefault AND stopPropagation: these buttons sit inside
     links, clickable rows and tappable words, none of which should fire
     because a student wanted to hear the word. */
  var wired = false;
  function wire() {
    if (wired || !document.body) return;
    wired = true;
    ensureCss();
    document.addEventListener("click", function (e) {
      var b = e.target && e.target.closest && e.target.closest(".sp-say");
      if (!b) return;
      e.preventDefault();
      e.stopPropagation();
      var txt = b.getAttribute("data-say") || "";
      var lg = b.getAttribute("data-lang") || "en";
      var live = document.querySelector(".sp-say.on");
      if (live) live.classList.remove("on");
      if (speak(txt, lg)) {
        b.classList.add("on");
        try {
          window.speechSynthesis.addEventListener("end", function off() {
            b.classList.remove("on");
          }, { once: true });
        } catch (err) {}
        /* the end event is unreliable across engines, so clear it on a
           timer too — a stuck highlight is worse than an early one */
        setTimeout(function () { b.classList.remove("on"); },
          Math.min(6000, 900 + txt.length * 90));
      }
    }, true);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();

  window.STEMSPEAK = {
    can: can, speak: speak, btn: btn, bcp47: bcp47,
    hasVoiceFor: hasVoiceFor, onVoicesReady: onVoicesReady, wire: wire
  };
})();
