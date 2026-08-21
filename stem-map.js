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

  var SET_SHORT = {
    kin1: "motion words", kin2: "graph words", kin3: "data words",
    kin4: "trig words", rev: "quiz words",
    bio1: "cells & DNA", bio2: "inheritance", bio3: "probability words",
    pan: "pandemic words"
  };

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
    if (cell.skills) return cell.skills.length + (cell.skills.length === 1 ? " skill" : " skills");
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
            html += "<div class='pm-cell soon' " + pos + "><span class='t'>" + STEM2.esc(cell.soon) + "</span> <span class='n' style='font-weight:400'>· soon</span></div>";
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
      html += "<div class='pm-legend'>Every cell feeds the tall column to its right — the project is the point. ✓ = goal met.</div>";
    }
    el.innerHTML = html;
  }

  window.STEMMAP = { render: render };
})();
