/* ============================================================
   ELC STEM hub v3 — the project map
   ------------------------------------------------------------
   Renders a unit's road to its integrated tasks: one row per
   strand (Words / Maths / Science), goal cells flowing left →
   right into full-height skinny project columns. Everything to
   the left of a project feeds it.

   Two sizes, ONE renderer:
       STEMMAP.render(el, "kin");                     compact — unit pages
       STEMMAP.render(el, "kin", { size:"large" });   large   — stem-map.html
   Options: size ("compact" | "large"), links:false (draw it dead),
            legend:false (the page prints its own key).

   A cell may hold stacked SUB-ROWS — this is how the maths band
   splits into lanes ("lines & graphing", then "intercepts &
   sketching"). Both sizes draw them:
       maths: { rows: [ {label, skills}, {label, skills} ] }
   Data lives in stem-shared.js (STEM2.MAPS) — edit it there.
   ============================================================ */
(function () {
  "use strict";
  if (!window.STEM2) return;

  /* ---------- the few strings this component shows, in the page languages ----------
     Same pattern as the pages: read elc_page_language, fall back to English.
     Set names and lane labels are NOT here — they come from the data, like
     skill names and unit names, so a new lane never needs a code change. */
  var COPY = {
    en:        { skills: function (n) { return n + (n === 1 ? " skill" : " skills"); },
                 soon: "now", later: "later",
                 scroll: "Drag the grid sideways to see the whole road →",
                 legend: "Every cell feeds the tall column to its right — the project is the point. ✓ = goal met." },
    "zh-Hans": { skills: function (n) { return n + " 项技能"; },
                 soon: "现在", later: "之后",
                 scroll: "左右拖动这张表，就能看到整条路 →",
                 legend: "每一格都在为右边那根高柱做准备——项目才是重点。✓ = 已达成目标。" },
    "zh-Hant": { skills: function (n) { return n + " 項技能"; },
                 soon: "現在", later: "之後",
                 scroll: "左右拖動這張表，就能看到整條路 →",
                 legend: "每一格都在為右邊那根高柱做準備——專案才是重點。✓ = 已達成目標。" },
    vi:        { skills: function (n) { return n + " kỹ năng"; },
                 soon: "bây giờ", later: "sau này",
                 scroll: "Kéo bảng sang ngang để thấy trọn con đường →",
                 legend: "Mỗi ô đều chuẩn bị cho cột cao bên phải — dự án mới là đích. ✓ = đã đạt mục tiêu." }
  };
  function pageLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return COPY[l] ? l : "en";
  }
  function T(k) { var v = COPY[pageLang()][k]; return v !== undefined ? v : COPY.en[k]; }
  function esc(s) { return STEM2.esc(s); }

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
    /* ---- shared bones ---- */
    ".pm-wrap{overflow-x:auto;overflow-y:hidden;max-width:100%;padding-bottom:6px}" +
    ".pm{display:grid;gap:6px;align-items:stretch;min-width:560px}" +
    /* the strand name stays put while the road scrolls under it */
    /* the negative margins let the label's paper cover the grid gaps too,
       so nothing shows through beside it while the road scrolls under */
    ".pm .pm-strand{font-size:.68rem;letter-spacing:.06em;color:var(--faint,#9aa0a5);" +
      "display:flex;align-items:center;white-space:nowrap;" +
      "margin:-3px -6px -3px 0;padding-right:14px;" +
      "position:sticky;left:0;z-index:2;background:var(--paper,#fcfcfa)}" +
    ".pm-band{display:grid;grid-auto-rows:auto;align-content:start;gap:5px;min-width:0}" +
    /* a band holding two skill groups lays them SIDE BY SIDE on the big map —
       stacking them made that band the tallest cell in its strand row, and a
       grid row is as tall as its tallest cell, so every other stage in the
       row inherited hundreds of empty pixels */
    ".pm-lg .pm-band.multi{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}" +
    ".pm-cell{border:1px solid var(--hair,#e6e7e3);border-radius:8px;padding:7px 9px;min-width:0;" +
      "font-size:.72rem;line-height:1.35;color:var(--ink,#212427);text-decoration:none;display:block;" +
      "background:var(--paper,#fcfcfa)}" +
    "a.pm-cell:hover{border-color:var(--accent,#0d7a70)}" +
    ".pm-cell .t{color:var(--muted,#767b7f)}" +
    ".pm-cell .n{font-weight:700;white-space:nowrap}" +
    ".pm-cell .n .tick{color:var(--accent,#0d7a70)}" +
    ".pm-cell .bar{display:block;height:3px;background:var(--hair,#e6e7e3);border-radius:2px;margin-top:5px}" +
    ".pm-cell .bar i{display:block;height:3px;background:var(--accent,#0d7a70);border-radius:2px}" +
    ".pm-cell.met{border-color:var(--accent,#0d7a70);background:var(--accent-soft,#f4f9f8)}" +
    ".pm-cell.soon{border-style:dashed;color:var(--faint,#9aa0a5)}" +
    ".pm-cell.soon .t{color:var(--faint,#9aa0a5)}" +
    ".pm-band.empty{border:0;background:none}" +
    ".pm-cell .cb{display:block;font-size:.62rem;color:var(--accent,#0d7a70);margin-top:2px}" +
    ".pm-proj{border:1.5px solid var(--ink,#212427);border-radius:9px;" +
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
    ".pm-legend{font-size:.68rem;color:var(--faint,#9aa0a5);margin-top:6px}" +

    /* ---- large: the whole-unit view on stem-map.html ---- */
    ".pm-lg{gap:10px}" +
    ".pm-lg .pm-strand{font-size:.78rem;letter-spacing:.11em;font-weight:700;" +
      "color:var(--muted,#767b7f);margin:-5px -10px -5px 0;padding-right:24px}" +
    ".pm-lg .pm-band{gap:9px}" +
    ".pm-lg .pm-cell{padding:11px 13px;border-radius:10px;font-size:.78rem}" +
    ".pm-lg .pm-cell .hd{display:flex;justify-content:space-between;align-items:baseline;gap:10px;" +
      "text-decoration:none;color:inherit;min-height:34px}" +
    ".pm-lg .pm-cell .t{font-family:Georgia,'Times New Roman',serif;font-size:.98rem;color:var(--ink,#212427)}" +
    ".pm-lg .pm-cell.soon .t{color:var(--faint,#9aa0a5)}" +
    ".pm-lg .pm-cell .n{font-size:.9rem;font-variant-numeric:tabular-nums}" +
    ".pm-lg .pm-cell .n .tick{font-size:1.05rem}" +
    ".pm-lg .pm-cell .sub{font-size:.7rem;color:var(--faint,#9aa0a5);margin-top:1px}" +
    ".pm-lg .pm-cell .cb{font-size:.7rem;margin-top:4px}" +
    ".pm-lg .pm-cell .bar{height:4px;margin-top:8px}" +
    ".pm-lg .pm-cell .bar i{height:4px}" +
    ".pm-lg .items{margin-top:9px;border-top:1px solid var(--hair,#e6e7e3);padding-top:5px;" +
      "display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:0 16px;align-content:start}" +
    /* TAP TARGETS. Every control in the hub is 44px except these grid rows,
       which are 28. The map's whole purpose is seeing a unit's road at once,
       and dozens of rows at 44px put most of it below the fold. 28px still
       clears WCAG 2.5.8 AA (24px), and the rows are separated rather than
       butted together. If the teacher finds it fiddly on a real phone,
       raise it here. */
    ".pm-lg .it{display:flex;gap:8px;align-items:center;min-height:28px;font-size:.76rem;line-height:1.3;" +
      "color:var(--muted,#767b7f);text-decoration:none;padding:3px 5px;border-radius:6px}" +
    ".pm-lg a.it:hover{background:var(--accent-soft,#f4f9f8);color:var(--ink,#212427)}" +
    ".pm-lg .it .mk{flex:0 0 auto;width:12px;color:var(--faint,#9aa0a5)}" +
    ".pm-lg .it.done{color:var(--ink,#212427)}" +
    ".pm-lg .it.done .mk{color:var(--accent,#0d7a70)}" +
    ".pm-lg .it .ct{margin-left:auto;padding-left:8px;font-size:.7rem;color:var(--faint,#9aa0a5);" +
      "white-space:nowrap;font-variant-numeric:tabular-nums}" +
    ".pm-lg .pm-proj{width:78px;padding:16px 6px;gap:9px;border-radius:11px}" +
    ".pm-lg .pm-proj .pn{font-size:1.12rem}" +
    ".pm-lg .pm-proj .pd{font-size:.7rem}" +
    ".pm-lg .pm-proj .pt{font-size:.92rem}" +
    ".pm-scroll{font-size:.72rem;color:var(--faint,#9aa0a5);margin-top:8px}";

  var cssDone = false;
  function ensureCss() {
    if (cssDone) return; cssDone = true;
    var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s);
  }

  /* ---------- reading a cell ----------
     A cell is either one block, or a stack of sub-row blocks. A block takes
     the same keys either way: label / skills / sets / soon / callback. */
  function blocksOf(cell) {
    if (!cell) return [];
    if (cell.rows && cell.rows.length) return cell.rows;
    return [cell];
  }
  function skillsTitle(ids) {
    return ids.map(function (id) { var s = STEM2.SKILLS[id]; return s ? s.name : id; }).join(" · ");
  }
  function blockTitle(blk) {
    var bits = [];
    if (blk.label) bits.push(blk.label);
    if (blk.sets) bits.push(blk.sets.map(function (s) { return SET_SHORT[s] || s; }).join(" · "));
    if (blk.skills) bits.push(skillsTitle(blk.skills));
    if (blk.soon) bits.push(blk.soon);
    return bits.join(" — ");
  }
  /* what the block counts: "3 word sets" is never as clear as the set names */
  function blockCount(blk) {
    if (blk.sets) return blk.sets.map(function (s) { return SET_SHORT[s] || s; }).join(" + ");
    if (blk.skills) return T("skills")(blk.skills.length);
    return "";
  }
  function blockHref(blk, unitId) {
    if (blk.sets) return "stem-vocab-hub.html#set=" + blk.sets[0];
    if (blk.skills) return "stem-skills.html#skill=" + blk.skills[0];
    return "stem-skills.html#unit=" + unitId;
  }

  /* the per-item list — large only: every skill and every word set, named,
     each with its own state and its own link to the work */
  function itemsHtml(blk, live) {
    var out = [];
    (blk.sets || []).forEach(function (sid) {
      var c = STEM2.setCounts(sid);
      var done = c.total > 0 && c.built === c.total;
      var inner = "<span class='mk'>" + (done ? "✓" : "·") + "</span>" +
        "<span class='nm'>" + esc(c.title || SET_SHORT[sid] || sid) + "</span>" +
        "<span class='ct'>" + c.built + "/" + c.total + "</span>";
      out.push(live
        ? "<a class='it" + (done ? " done" : "") + "' href='stem-vocab-hub.html#set=" + esc(sid) + "'>" + inner + "</a>"
        : "<span class='it" + (done ? " done" : "") + "'>" + inner + "</span>");
    });
    (blk.skills || []).forEach(function (id) {
      var s = STEM2.SKILLS[id];
      var done = !!STEM2.Mastery.mastered(id);
      var inner = "<span class='mk'>" + (done ? "✓" : "·") + "</span>" +
        "<span class='nm'>" + esc(s ? s.name : id) + "</span>";
      out.push(live
        ? "<a class='it" + (done ? " done" : "") + "' href='stem-skills.html#skill=" + esc(id) + "'>" + inner + "</a>"
        : "<span class='it" + (done ? " done" : "") + "'>" + inner + "</span>");
    });
    if (!out.length) return "";
    return "<div class='items'>" + out.join("") + "</div>";
  }

  function blockHtml(blk, unitId, large, live) {
    var head = blk.label || blockCount(blk) || blk.soon || "";
    var detail = blk.label ? (blockCount(blk) || blk.soon || "") : "";
    var title = blockTitle(blk);

    if (blk.soon) {
      var st = "<span class='n' style='font-weight:400'>· " + esc(T("later")) + "</span>";
      return "<div class='pm-cell soon' title=\"" + esc(title) + "\">" +
        (large
          ? "<div class='hd'><span class='t'>" + esc(head) + "</span>" + st + "</div>" +
            (detail ? "<div class='sub'>" + esc(detail) + "</div>" : "")
          : "<span class='t'>" + esc(head) + "</span> " + st) +
        "</div>";
    }

    var stt = STEM2.cellState(blk) || { done: 0, total: 0, met: false };
    var pct = stt.total ? Math.round(100 * stt.done / stt.total) : 0;
    var met = stt.met ? " met" : "";
    var state = stt.met ? "<span class='tick'>✓</span>" : stt.done + "/" + stt.total;
    var bar = "<span class='bar'><i style='width:" + pct + "%'></i></span>";
    var cb = blk.callback ? "<span class='cb'>" + esc(blk.callback) + "</span>" : "";
    var href = blockHref(blk, unitId);

    if (large) {
      var hd = live
        ? "<a class='hd' href='" + href + "'><span class='t'>" + esc(head) + "</span><span class='n'>" + state + "</span></a>"
        : "<div class='hd'><span class='t'>" + esc(head) + "</span><span class='n'>" + state + "</span></div>";
      return "<div class='pm-cell" + met + "'>" + hd +
        (detail ? "<div class='sub'>" + esc(detail) + "</div>" : "") +
        cb + bar + itemsHtml(blk, live) + "</div>";
    }
    var inner = "<span class='t'>" + esc(head) + "</span> <span class='n'>" + state + "</span>" + cb + bar;
    return live
      ? "<a class='pm-cell" + met + "' href='" + href + "' title=\"" + esc(title) + "\">" + inner + "</a>"
      : "<div class='pm-cell" + met + "' title=\"" + esc(title) + "\">" + inner + "</div>";
  }

  function render(el, unitId, opts) {
    ensureCss();
    opts = opts || {};
    var large = opts.size === "large";
    var live = opts.links !== false;
    var map = STEM2.MAPS[unitId];
    var unit = STEM2.UNIT_BY_ID[unitId];
    if (!map || !unit) { el.innerHTML = ""; return; }
    var cpById = {}; unit.checkpoints.forEach(function (c) { cpById[c.id] = c; });
    var strands = map.strands || [];

    /* the column plan, left → right: goal columns and the tall project columns
       between them. A stage with no checkpoint of its own has no tall column. */
    var plan = [];
    map.stages.forEach(function (st) {
      (st.cols || []).forEach(function (c) { plan.push({ goal: c }); });
      var cp = cpById[st.project];
      if (cp) plan.push({ cp: cp });
    });

    var firstOpenProj = null;
    plan.forEach(function (p) {
      if (!firstOpenProj && p.cp && p.cp.status !== "done") firstOpenProj = p.cp.id;
    });

    var goalW = large ? 240 : 112, projW = large ? 68 : 58, gap = large ? 10 : 6;
    var colDefs = ["max-content"], minW = large ? 118 : 74;
    plan.forEach(function (p) {
      if (p.cp) { colDefs.push(projW + "px"); minW += projW + gap; return; }
      /* a goal whose band stacks two skill groups gets a double-width column,
         so the groups sit side by side instead of making their whole strand
         row twice as tall — a grid row is as tall as its tallest cell, and
         every other stage inherits that height as empty space */
      var wide = large && strands.some(function (st) {
        return blocksOf(p.goal ? p.goal[st.id] : null).length > 1;
      });
      var w = wide ? goalW * 2 - 20 : goalW;
      colDefs.push("minmax(" + w + "px," + (wide ? "1.8fr" : "1fr") + ")");
      minW += w + gap;
    });

    var html = "<div class='pm-wrap'><div class='pm" + (large ? " pm-lg" : "") +
      "' style='grid-template-columns:" + colDefs.join(" ") + ";min-width:" + minW + "px'>";

    /* strand labels — column 1, one row each */
    strands.forEach(function (s, r) {
      html += "<div class='pm-strand' style='grid-column:1;grid-row:" + (r + 1) + "'>" +
        esc(String(s.label).toUpperCase()) + "</div>";
    });

    var col = 2;
    plan.forEach(function (p) {
      if (p.cp) {
        var cp = p.cp;
        var done = STEM2.cpDone(cp);
        var isNext = cp.id === firstOpenProj;
        var cls = "pm-proj" + (done ? " done" : (isNext ? " next" : ""));
        var mark = done ? "✓" : (isNext ? "→" : "·");
        var pos = "style='grid-column:" + col + ";grid-row:1 / span " + Math.max(1, strands.length) + "'";
        var pin = "<span class='pt'>" + mark + "</span>" +
          "<span class='pn'>" + esc(cp.short) + "</span>" +
          "<span class='pd'>" + esc(done ? "✓" : T(isNext ? "soon" : "later")) + "</span>";
        html += live
          ? "<a class='" + cls + "' " + pos + " href='" + esc(unit.page) + "#prove' title=\"" +
            esc(cp.name + " — " + cp.desc) + "\">" + pin + "</a>"
          : "<div class='" + cls + "' " + pos + " title=\"" + esc(cp.name + " — " + cp.desc) + "\">" + pin + "</div>";
        col++;
        return;
      }
      strands.forEach(function (s, r) {
        var cell = p.goal ? p.goal[s.id] : null;
        var pos = "style='grid-column:" + col + ";grid-row:" + (r + 1) + "'";
        var blks = blocksOf(cell);
        if (!blks.length) { html += "<div class='pm-band empty' " + pos + "></div>"; return; }
        html += "<div class='pm-band" + (blks.length > 1 ? " multi" : "") + "' " + pos + ">";
        blks.forEach(function (b) { html += blockHtml(b, unitId, large, live); });
        html += "</div>";
      });
      col++;
    });

    html += "</div></div>";
    if (large) html += "<p class='pm-scroll' hidden>" + esc(T("scroll")) + "</p>";
    if (opts.legend !== false) html += "<div class='pm-legend'>" + esc(T("legend")) + "</div>";
    el.innerHTML = html;
    fitHint(el);
    remember(el, unitId, opts);
  }

  /* the "drag it sideways" line only earns its place when there is
     something off the right edge — a narrow map should not nag */
  function fitHint(el) {
    var hint = el.querySelector(".pm-scroll"), wrap = el.querySelector(".pm-wrap");
    if (!hint || !wrap) return;
    hint.hidden = wrap.scrollWidth <= wrap.clientWidth + 2;
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
  var fitT = null;
  window.addEventListener("resize", function () {
    clearTimeout(fitT);
    fitT = setTimeout(function () {
      drawn.forEach(function (d) { if (d.el && d.el.isConnected) fitHint(d.el); });
    }, 120);
  });

  window.STEMMAP = { render: render, redraw: redrawAll };
})();
