/* report-button.js — the one "📈 My report" pill that every page of the
   ELC Hub carries, so a student is never more than one tap from their own
   record wherever they are.

   Where it points depends on where you are:
     stem*.html          → stem-progress.html   (the STEM report)
     pronunciation       → report.html#app-pron (the hub's own card)
     everything else     → report.html          (the cross-app record)
   report.html itself does not show it (it *is* the report), and
   stem-progress.html points up to the cross-app record instead.

   The pill also carries a one-glance status so it is a status light, not
   just a link: on STEM pages the mastered-skill count, on the
   pronunciation hub the sounds achieved, elsewhere the last day any app
   recorded work. All of it comes from localStorage on this device — the
   same rule as everything else in the hub: no account, nothing sent.

   Fixed size, fixed corner (bottom-left, above the tiny STEM build stamp),
   never resizes with scroll. Bottom-right is taken by the STEM notebook's
   floating 📓 and the hub's teacher badge, bottom-centre by the TEEA
   paragraph's theme pill; the STEM translate bar (body.tw-active) is
   full-width along the bottom, so the pill rides up above it. */
(function () {
  "use strict";
  if (document.getElementById("elcReportBtn")) return;
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "report.html") return;

  var isStem = /^stem/.test(page) && page !== "stem-progress.html";
  var isPron = /^pronunciation/.test(page);

  var T = {
    en:        { report: "My report", stem: "STEM report", all: "All apps", today: "today", yesterday: "yesterday",
                 aria: "Open my report", mastered: "skills mastered", mastered1: "skill mastered",
                 sounds: "sounds achieved", sounds1: "sound achieved", last: "last worked on" },
    "zh-Hans": { report: "我的报告", stem: "STEM 报告", all: "所有应用", today: "今天", yesterday: "昨天",
                 aria: "打开我的报告", mastered: "项技能已掌握", sounds: "个音已达成", last: "上次练习" },
    "zh-Hant": { report: "我的報告", stem: "STEM 報告", all: "所有應用程式", today: "今天", yesterday: "昨天",
                 aria: "開啟我的報告", mastered: "項技能已掌握", sounds: "個音已達成", last: "上次練習" },
    vi:        { report: "Báo cáo của tôi", stem: "Báo cáo STEM", all: "Tất cả ứng dụng", today: "hôm nay", yesterday: "hôm qua",
                 aria: "Mở báo cáo của tôi", mastered: "kỹ năng đã thành thạo", sounds: "âm đã đạt", last: "lần cuối" }
  };
  function lang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return T[l] ? l : "en";
  }
  function readJson(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function dayOf(ts) {
    var d = new Date(ts);
    if (isNaN(d)) return null;
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function niceDay(day, l) {
    var t = T[l];
    var now = new Date();
    if (day === dayOf(now)) return t.today;
    if (day === dayOf(now.getTime() - 864e5)) return t.yesterday;
    var p = day.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    try { return d.toLocaleDateString(l === "en" ? "en-AU" : l, { day: "numeric", month: "short" }); }
    catch (e) { return day; }
  }

  /* ---- status readers: one number each, all optional ---------------- */
  function stemStatus() {
    var m2 = readJson("elc_stem_m2");
    var skills = (m2 && m2.skills) || {};
    var known = (window.STEM2 && window.STEM2.SKILLS) || null;
    var done = 0, total = 0;
    if (known) {
      Object.keys(known).forEach(function (id) { total++; if (skills[id] && skills[id].mastered) done++; });
    } else {
      Object.keys(skills).forEach(function (id) { if (skills[id] && skills[id].mastered) done++; });
    }
    return { done: done, total: total };
  }
  function pronStatus() {
    var st = readJson("elc_pron_state") || {};
    var done = 0;
    Object.keys(st).forEach(function (k) { if (st[k] && st[k].st === "done") done++; });
    return done;
  }
  /* newest dated activity from any app on this device — mirrors what
     progress-sources.js reads, minus the Phonics IndexedDB (too heavy to
     open on every page; its localStorage fallback is covered). */
  function lastActiveDay() {
    var latest = null;
    function see(ts) { var d = dayOf(ts); if (d && (!latest || d > latest)) latest = d; }
    var g = readJson("grammarHub.v1");
    if (g) {
      (g.history || []).forEach(function (h) { see(h.date); });
      (g.writings || []).forEach(function (w) { see(w.date); });
    }
    var s = readJson("elc_stem_m2");
    if (s) {
      Object.keys(s.skills || {}).forEach(function (id) {
        var sk = s.skills[id];
        (sk.runs || []).forEach(function (r) { see(r.t); });
        if (sk.mastered) see(sk.mastered);
      });
      (s.rev || []).forEach(function (r) { see(r.t); });
    }
    var p = readJson("elc_pron_state");
    if (p) Object.keys(p).forEach(function (k) { if (p[k] && p[k].clearedAt) see(p[k].clearedAt); });
    var ph = readJson("phonics-tracker");
    if (ph && ph.attempts) (ph.attempts || []).forEach(function (a) { see(a.ts); });
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("ealvocab:") === 0) {
          var v = readJson(k);
          if (v) (v.log || []).forEach(function (e) { see(e.at); });
        }
      }
    } catch (e) {}
    return latest;
  }

  /* ---- build ---------------------------------------------------------- */
  var css = "" +
    ".elc-report{position:fixed;left:12px;bottom:22px;z-index:8400;display:inline-flex;align-items:center;gap:8px;box-sizing:border-box;margin:0;" +
      "min-height:44px;padding:0 14px 0 12px;border-radius:999px;border:1px solid rgba(16,24,40,.12);" +
      "background:#fff;color:#1c2333;font:700 .86rem/1.2 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;" +
      "text-decoration:none;box-shadow:0 2px 6px rgba(16,24,40,.12),0 8px 22px rgba(16,24,40,.12);" +
      "max-width:min(70vw,320px);white-space:nowrap}" +
    ".elc-report:hover{filter:brightness(.97)}" +
    ".elc-report:focus-visible{outline:3px solid #0f766e;outline-offset:3px}" +
    ".elc-report .ic{font-size:1.05rem;line-height:1}" +
    ".elc-report .lbl{overflow:hidden;text-overflow:ellipsis}" +
    ".elc-report .st{font-weight:600;font-size:.76rem;color:#5b6478;overflow:hidden;text-overflow:ellipsis;" +
      "padding-left:8px;border-left:1px solid rgba(16,24,40,.14)}" +
    ".elc-report .st:empty{display:none}" +
    "body.tw-active .elc-report{bottom:calc(var(--tw-bar-h,56px) + 22px)}" +
    "@media (prefers-color-scheme:dark){.elc-report{background:#171e2e;color:#fff;border-color:#34405b}" +
      ".elc-report .st{color:#c7d0e2;border-left-color:#34405b}}" +
    "@media print{.elc-report{display:none}}";

  function build() {
    if (!document.body || document.getElementById("elcReportBtn")) return;
    var style = document.createElement("style");
    style.id = "elcReportCss";
    style.textContent = css;
    document.head.appendChild(style);

    var a = document.createElement("a");
    a.id = "elcReportBtn";
    a.className = "elc-report";
    a.innerHTML = '<span class="ic" aria-hidden="true">📈</span><span class="lbl"></span><span class="st"></span>';
    document.body.appendChild(a);
    render();
  }

  function render() {
    var a = document.getElementById("elcReportBtn");
    if (!a) return;
    var l = lang(), t = T[l];
    var label = t.report, href = "report.html", status = "", title = t.aria;
    if (isStem) {
      label = t.stem; href = "stem-progress.html";
      var s = stemStatus();
      if (s.done) {
        status = "✓ " + s.done + (s.total ? "/" + s.total : "");
        title = s.done + (s.total ? "/" + s.total : "") + " " + (s.done === 1 && t.mastered1 ? t.mastered1 : t.mastered);
      }
    } else if (page === "stem-progress.html") {
      label = t.all; href = "report.html";
    } else if (isPron) {
      href = "report.html#app-pron";
      var n = pronStatus();
      if (n) { status = "✓ " + n; title = n + " " + (n === 1 && t.sounds1 ? t.sounds1 : t.sounds); }
    }
    if (!status) {
      var day = lastActiveDay();
      if (day) { status = niceDay(day, l); title = t.last + " " + status; }
    }
    a.href = href;
    a.setAttribute("aria-label", title === t.aria ? t.aria : t.aria + " — " + title);
    a.title = title;
    a.querySelector(".lbl").textContent = label;
    a.querySelector(".st").textContent = status;
  }

  if (document.body) build(); else document.addEventListener("DOMContentLoaded", build);
  /* page-language selects write elc_page_language on change; re-label then.
     Same-tab writes don't fire "storage", so listen to the selects too. */
  document.addEventListener("change", function (e) {
    var el = e.target;
    if (el && (el.classList && el.classList.contains("language-select") || el.id === "pageLanguage")) setTimeout(render, 0);
  }, true);
  window.addEventListener("storage", function () { render(); });
  window.addEventListener("pageshow", function () { render(); });
  window.ELCReportButton = { refresh: render };
})();
