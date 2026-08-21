/* ============================================================
   ELC STEM hub v2 — the project map
   ------------------------------------------------------------
   Renders a unit's road to its integrated tasks: one row per
   strand (Words / Maths / Science), goal cells flowing left →
   right into full-height skinny project columns. Everything to
   the left of a project feeds it.

   Include after stem-vocab-data.js + stem-shared.js, then:
       STEMMAP.render(document.getElementById("map"), "kin");
   Data lives in stem-shared.js (STEM2.MAPS) — edit it there.
   ============================================================ */
(function () {
  "use strict";
  if (!window.STEM2) return;

  /* ---------- the few strings this component shows, in the page languages ----------
     Same pattern as the pages: read elc_page_language, fall back to English.
     Set names are NOT here — they are derived from the vocab data (below), so a
     new set never needs a code change. */
  var COPY = {
    en:        { skills: function (n) { return n + (n === 1 ? " skill" : " skills"); },
                 soon: "soon",
                 legend: "Every cell feeds the tall column to its right — the project is the point. ✓ = goal met." },
    "zh-Hans": { skills: function (n) { return n + " 项技能"; },
                 soon: "即将开始",
                 legend: "每一格都在为右边那根高柱做准备——项目才是重点。✓ = 已达成目标。" },
    "zh-Hant": { skills: function (n) { return n + " 項技能"; },
                 soon: "即將開始",
                 legend: "每一格都在為右邊那根高柱做準備——專案才是重點。✓ = 已達成目標。" },
    vi:        { skills: function (n) { return n + " kỹ năng"; },
                 soon: "sắp tới",
                 legend: "Mỗi ô đều chuẩn bị cho cột cao bên phải — dự án mới là đích. ✓ = đã đạt mục tiêu." }
  };
  function pageLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return COPY[l] ? l : "en";
  }
  function T(k) { var v = COPY[pageLang()][k]; return v !== undefined ? v : COPY.en[k]; }

  /* ---------- short set labels, derived from the vocab set titles ----------
     "Motion & its language" → "Motion";  "Pandemic — data literacy" → "Pandemic".
     Cut at a dash, then at " & ", then at a comma, then to whole words, so the
     label fits a 112px cell. Falls back to the set id if the data is absent. */
  var MAXLEN = 16;
  function shorten(title) {
    var s = String(title || "").replace(/\s*\(revision\)\s*$/i, "").trim();
    s = s.split(/\s+[—–-]\s+/)[0].trim();
    if (s.length > MAXLEN) s = s.split(" & ")[0].trim();
    if (s.length > MAXLEN) s = s.split(",")[0].trim();
    if (s.length > MAXLEN) {
      var out = [];
      s.split(/\s+/).forEach(function (w) {
        if (out.join(" ").length + w.length + (out.length ? 1 : 0) <= MAXLEN) out.push(w);
      });
      if (out.length) s = out.join(" ");
    }
    return s.replace(/\s+(?:for|of|in|on|to|with|and|the|a|an|&)$/i, "").trim();
  }
  var SET_SHORT = {};
  (function () {
    var data = window.STEM_VOCAB_DATA;
    if (!data || !data.sets) return;
    data.sets.forEach(function (set) { SET_SHORT[set.id] = shorten(set.title); });
  })();

  var CSS = "" +
    ".pm-wrap{overflow-x:auto;padding-bottom:6px}" +
    ".pm{display:grid;gap:6px;align-items:stretch;min-width:560px}" +
    ".pm .pm-strand{font-size:.68rem;letter-spacing:.06em;color:var(--faint,#9aa0a5);" +
      "display:flex;align-items:center;padding-right:8px;white-space:nowrap}" +
    ".pm-cell{border:1px solid var(--hair,#e6e7e3);border-radius:8px;padding:7px 9px;min-width:104px;" +
      "font-size:.72rem;line-height:1.35;color:var(--ink,#212427);text-decoration:none;display:block;background:var(--paper,#fcfcfa)}" +
    "a.pm-cell:hover{border-color:var(--accent,#0d7a70)}" +
    ".pm-cell .t{color:var(--muted,#767b7f)}" +
    ".pm-cell .n{font-weight:700;white-space:nowrap}" +
    ".pm-cell .n .tick{color:var(--accent,#0d7a70)}" +
    ".pm-cell .bar{display:block;height:3px;background:var(--hair,#e6e7e3);border-radius:2px;margin-top:5px}" +
    ".pm-cell .bar i{display:block;height:3px;background:var(--accent,#0d7a70);border-radius:2px}" +
    ".pm-cell.met{border-color:var(--accent,#0d7a70);background:var(--accent-soft,#f4f9f8)}" +
    ".pm-cell.soon{border-style:dashed;color:var(--faint,#9aa0a5)}" +
    ".pm-cell.soon .t{color:var(--faint,#9aa0a5)}" +
    ".pm-cell.empty{border:0;background:none}" +
    ".pm-cell .cb{display:block;font-size:.62rem;color:var(--accent,#0d7a70);margin-top:2px}" +
    ".pm-proj{grid-row:1 / span 3;border:1.5px solid var(--ink,#212427);border-radius:9px;" +
      "width:58px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;" +
      "text-decoration:none;color:var(--ink,#212427);background:var(--paper,#fcfcfa);padding:10px 4px}" +
    ".pm-proj .pn{writing-mode:vertical-rl;transform:rotate(180deg);font-family:Georgia,'Times New Roman',serif;" +
      "font-size:.92rem;letter-spacing:.02em;white-space:nowrap}" +
    ".pm-proj .pd{font-size:.62rem;color:var(--muted,#767b7f);writing-mode:vertical-rl;transform:rotate(180deg)}" +
    ".pm-proj.done{border-color:var(--accent,#0d7a70);background:var(--accent-soft,#f4f9f8)}" +
    ".pm-proj.done .pn{color:var(--accent,#0d7a70)}" +
    ".pm-proj.next{box-shadow:inset 0 0 0 1.5px var(--alert,#b0592f);border-color:var(--alert,#b0592f)}" +
    ".pm-proj .pt{font-size:.66rem;font-weight:700;color:var(--alert,#b0592f)}" +
    ".pm-proj.done .pt{color:var(--accent,#0d7a70)}" +
    ".pm-legend{font-size:.68rem;color:var(--faint,#9aa0a5);margin-top:6px}";

  var cssDone = false;
  function ensureCss() {
    if (cssDone) return; cssDone = true;
    var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s);
  }

  function skillsTitle(ids) {
    return ids.map(function (id) { var s = STEM2.SKILLS[id]; return s ? s.name : id; }).join(" · ");
  }
  function cellLabel(cell) {
    if (cell.sets) return cell.sets.map(function (s) { return SET_SHORT[s] || s; }).join(" + ");
    if (cell.skills) return T("skills")(cell.skills.length);
    return "";
  }
  function cellHref(cell, unitId) {
    if (cell.sets) return "stem-vocab-hub.html#set=" + cell.sets[0];
    if (cell.skills) return "stem-skills.html#skill=" + cell.skills[0];
    return "stem-skills.html#unit=" + unitId;
  }

  function render(el, unitId, opts) {
    ensureCss();
    opts = opts || {};
    var map = STEM2.MAPS[unitId];
    var unit = STEM2.UNIT_BY_ID[unitId];
    if (!map || !unit) { el.innerHTML = ""; return; }
    var cpById = {}; unit.checkpoints.forEach(function (c) { cpById[c.id] = c; });

    /* column plan: strand-label col, then per stage its goal cols, then its project col */
    var colDefs = ["max-content"];
    map.stages.forEach(function (st) {
      st.cols.forEach(function () { colDefs.push("minmax(112px,1fr)"); });
      colDefs.push("58px");
    });

    var firstOpenProj = null;
    map.stages.forEach(function (st) {
      var cp = cpById[st.project];
      if (!firstOpenProj && cp && cp.status !== "done" && STEM2.daysUntil(cp.date) >= 0) firstOpenProj = st.project;
    });

    var rows = [[], [], []]; /* one array of html per strand row */
    var projCols = [];       /* {afterColIndex, html} — placed via explicit grid positions */

    var html = "<div class='pm-wrap'><div class='pm' style='grid-template-columns:" + colDefs.join(" ") + "'>";

    /* strand labels — column 1, rows 1..3 */
    map.strands.forEach(function (s, r) {
      html += "<div class='pm-strand' style='grid-column:1;grid-row:" + (r + 1) + "'>" + STEM2.esc(s.label.toUpperCase()) + "</div>";
    });

    var col = 2;
    map.stages.forEach(function (st) {
      st.cols.forEach(function (c) {
        map.strands.forEach(function (s, r) {
          var cell = c[s.id];
          var pos = "style='grid-column:" + col + ";grid-row:" + (r + 1) + "'";
          if (!cell) { html += "<div class='pm-cell empty' " + pos + "></div>"; return; }
          if (cell.soon) {
            html += "<div class='pm-cell soon' " + pos + "><span class='t'>" + STEM2.esc(cell.soon) + "</span> <span class='n' style='font-weight:400'>· " + STEM2.esc(T("soon")) + "</span></div>";
            return;
          }
          var stt = STEM2.cellState(cell);
          var pct = stt.total ? Math.round(100 * stt.done / stt.total) : 0;
          var met = stt.met ? " met" : "";
          var title = cell.skills ? skillsTitle(cell.skills) : "";
          var inner = "<span class='t'>" + STEM2.esc(cellLabel(cell)) + "</span> " +
            "<span class='n'>" + (stt.met ? "<span class='tick'>✓</span>" : stt.done + "/" + stt.total) + "</span>" +
            (cell.callback ? "<span class='cb'>" + STEM2.esc(cell.callback) + "</span>" : "") +
            "<span class='bar'><i style='width:" + pct + "%'></i></span>";
          if (opts.links === false) html += "<div class='pm-cell" + met + "' " + pos + " title=\"" + STEM2.esc(title) + "\">" + inner + "</div>";
          else html += "<a class='pm-cell" + met + "' " + pos + " href='" + cellHref(cell, unitId) + "' title=\"" + STEM2.esc(title) + "\">" + inner + "</a>";
        });
        col++;
      });
      /* the merged skinny project column */
      var cp = cpById[st.project];
      if (cp) {
        var done = cp.status === "done";
        var days = STEM2.daysUntil(cp.date);
        var cls = "pm-proj" + (done ? " done" : (st.project === firstOpenProj ? " next" : ""));
        var state = done ? "✓" : (days >= 0 ? days + "d" : "—");
        html += "<a class='" + cls + "' style='grid-column:" + col + "' href='" + unit.page + "#prove'" +
          " title=\"" + STEM2.esc(cp.name + " — " + cp.desc) + "\">" +
          "<span class='pt'>" + state + "</span>" +
          "<span class='pn'>" + STEM2.esc(cp.short) + "</span>" +
          "<span class='pd'>" + STEM2.esc(STEM2.fmtDate(cp.date)) + "</span></a>";
        col++;
      }
    });

    html += "</div></div>";
    if (opts.legend !== false) {
      html += "<div class='pm-legend'>" + STEM2.esc(T("legend")) + "</div>";
    }
    el.innerHTML = html;
    remember(el, unitId, opts);
  }

  /* ---------- repaint when the reader changes the page language ----------
     The pages write elc_page_language and repaint themselves; the map is drawn
     by one call at load, so it listens for the same change and redraws. */
  var drawn = [];
  function remember(el, unitId, opts) {
    for (var i = 0; i < drawn.length; i++) {
      if (drawn[i].el === el) { drawn[i].unitId = unitId; drawn[i].opts = opts; return; }
    }
    drawn.push({ el: el, unitId: unitId, opts: opts });
  }
  function redrawAll() {
    drawn.slice().forEach(function (d) {
      if (d.el && d.el.isConnected) render(d.el, d.unitId, d.opts);
    });
  }
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (t && t.classList && t.classList.contains("language-select")) setTimeout(redrawAll, 0);
  });
  window.addEventListener("storage", function (e) {
    if (e.key === "elc_page_language") redrawAll();
  });

  window.STEMMAP = { render: render };
})();
