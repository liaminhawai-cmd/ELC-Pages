/* ============================================================
   ELC STEM hub v2 — the project map
   ------------------------------------------------------------
   Renders a unit's road to its integrated tasks, left → right:
   goal columns flowing into full-height skinny project columns.
   Everything to the left of a project feeds it.

   LAYOUT (v3): each stage packs its cells top-to-bottom in one
   column — words, then maths, then science. Strand identity is
   carried by a coloured edge + label on every cell (the same
   three hues as the shelf's lanes), NOT by row alignment. The
   old strand-row grid made every row as tall as its tallest
   cell, so a stage with nothing in a band showed a void the
   full height of that band; on Kinematics that was ~1000px of
   grid for ~500px of content. Packed columns have no voids:
   the map is exactly as tall as its tallest stage.

   Sized for the classroom fleet: 1366×768 laptops, landscape.
   Kinematics (5 stages) fits that width without scrolling;
   Lab & Matter (6 stages) scrolls a little and says so.

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
                 soon: "now", later: "later",
                 words: "Words", maths: "Maths", science: "Science",
                 scroll: "Drag the grid sideways to see the whole road →",
                 legend: "Every cell feeds the tall column to its right — the project is the point. ✓ = goal met." },
    "zh-Hans": { skills: function (n) { return n + " 项技能"; },
                 soon: "现在", later: "之后",
                 words: "词汇", maths: "数学", science: "科学",
                 scroll: "左右拖动网格，可以看到整条路 →",
                 legend: "每一格都在为右边那根高柱做准备——项目才是重点。✓ = 已达成目标。" },
    "zh-Hant": { skills: function (n) { return n + " 項技能"; },
                 soon: "現在", later: "之後",
                 words: "詞彙", maths: "數學", science: "科學",
                 scroll: "左右拖動網格，可以看到整條路 →",
                 legend: "每一格都在為右邊那根高柱做準備——專案才是重點。✓ = 已達成目標。" },
    vi:        { skills: function (n) { return n + " kỹ năng"; },
                 soon: "bây giờ", later: "sau này",
                 words: "Từ vựng", maths: "Toán", science: "Khoa học",
                 scroll: "Kéo lưới sang ngang để xem cả con đường →",
                 legend: "Mỗi ô đều chuẩn bị cho cột cao bên phải — dự án mới là đích. ✓ = đã đạt mục tiêu." }
  };
  function pageLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return COPY[l] ? l : "en";
  }
  function T(k) { var v = COPY[pageLang()][k]; return v !== undefined ? v : COPY.en[k]; }
  function strandName(s) {
    /* localized when the id is one of the three known strands;
       whatever the map data says otherwise */
    return COPY[pageLang()][s.id] || COPY.en[s.id] || s.label || s.id;
  }
  function esc(s) { return STEM2.esc(s); }

  /* ---------- short set labels, derived from the vocab set titles ----------
     "Linear graphs — quiz language (revision)" is a sentence, not a label. */
  var SET_SHORT = {};
  function shorten(title) {
    var t = String(title || "");
    t = t.replace(/\s*[—–-]\s.*$/, "").replace(/\s*\(.*\)\s*$/, "");
    if (t.length > 22) {
      var out = [];
      t.split(/\s+/).forEach(function (w) {
        if (out.join(" ").length + w.length < 22) out.push(w);
      });
      t = out.join(" ");
    }
    /* never end on a connective — "Probability for" is worse than "Probability" */
    t = t.replace(/\s+(for|and|of|the|with|its|a|an|&)$/i, "");
    return t || String(title || "");
  }
  (function () {
    var data = window.STEM_VOCAB_DATA;
    if (!data || !data.sets) return;
    data.sets.forEach(function (set) { SET_SHORT[set.id] = shorten(set.title); });
  })();

  var CSS =
    /* ---- the three strand hues — the same as the shelf's lanes, so a
       colour here means the same thing it means there ---- */
    ":root{--pm-words:#a2522b;--pm-maths:#28598c;--pm-science:#455e6b}" +
    "@media(prefers-color-scheme:dark){:root{--pm-words:#d98e6a;--pm-maths:#82afe1;--pm-science:#a6c0cc}}" +

    /* ---- shared bones ---- */
    ".pm-wrap{overflow-x:auto;overflow-y:hidden;max-width:100%;padding-bottom:6px}" +
    ".pm{display:grid;gap:8px;align-items:stretch}" +
    /* one packed column per stage: cells stack top-to-bottom, no voids */
    ".pm-stage{display:grid;grid-auto-rows:max-content;align-content:start;gap:8px;min-width:0}" +
    ".pm-cell{border:1px solid var(--hair,#e6e7e3);border-radius:8px;padding:7px 9px 7px 11px;min-width:0;" +
      "font-size:.72rem;line-height:1.35;color:var(--ink,#212427);text-decoration:none;display:block;" +
      "background:var(--paper,#fcfcfa);position:relative}" +
    /* the strand edge: a 2px rule inside the left border, in the strand's hue */
    ".pm-cell::before{content:'';position:absolute;left:-1px;top:6px;bottom:6px;width:2px;border-radius:2px}" +
    ".pm-cell.sw::before{background:var(--pm-words)}" +
    ".pm-cell.sm::before{background:var(--pm-maths)}" +
    ".pm-cell.ss::before{background:var(--pm-science)}" +
    ".pm-tag{display:block;font-size:.58rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;" +
      "margin:0 0 2px}" +
    ".pm-cell.sw .pm-tag{color:var(--pm-words)}" +
    ".pm-cell.sm .pm-tag{color:var(--pm-maths)}" +
    ".pm-cell.ss .pm-tag{color:var(--pm-science)}" +
    "a.pm-cell:hover{border-color:var(--accent,#0d7a70)}" +
    ".pm-cell .t{color:var(--muted,#767b7f)}" +
    ".pm-cell .n{font-weight:700;white-space:nowrap}" +
    ".pm-cell .n .tick{color:var(--accent,#0d7a70)}" +
    /* max-width/margin pinned here so a host page's own .bar rule (the spine
       caps bars at 180px) can never squeeze the map's */
    ".pm-cell .bar{display:block;height:3px;background:var(--hair,#e6e7e3);border-radius:2px;" +
      "margin:5px 0 0;max-width:none}" +
    ".pm-cell .bar i{display:block;height:3px;background:var(--accent,#0d7a70);border-radius:2px}" +
    ".pm-cell.met{border-color:var(--accent,#0d7a70);background:var(--accent-soft,#f4f9f8)}" +
    ".pm-cell.soon{border-style:dashed;color:var(--faint,#9aa0a5)}" +
    ".pm-cell.soon .t{color:var(--faint,#9aa0a5)}" +
    ".pm-cell .cb{display:block;font-size:.62rem;color:var(--accent,#0d7a70);margin-top:2px}" +
    ".pm-proj{border:1.5px solid var(--ink,#212427);border-radius:9px;" +
      "width:54px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;" +
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
    ".pm-lg{gap:9px}" +
    ".pm-lg .pm-stage{gap:9px}" +
    ".pm-lg .pm-cell{padding:9px 11px 9px 13px;border-radius:10px;font-size:.78rem}" +
    ".pm-lg .pm-cell::before{top:8px;bottom:8px}" +
    ".pm-lg .pm-tag{font-size:.6rem;margin-bottom:3px}" +
    ".pm-lg .pm-cell .hd{display:flex;justify-content:space-between;align-items:baseline;gap:10px;" +
      "text-decoration:none;color:inherit;min-height:34px}" +
    ".pm-lg .pm-cell .t{font-family:Georgia,'Times New Roman',serif;font-size:.94rem;color:var(--ink,#212427)}" +
    ".pm-lg .pm-cell.soon .t{color:var(--faint,#9aa0a5)}" +
    ".pm-lg .pm-cell .n{font-size:.88rem;font-variant-numeric:tabular-nums}" +
    ".pm-lg .pm-cell .n .tick{font-size:1.02rem}" +
    ".pm-lg .pm-cell .sub{font-size:.7rem;color:var(--faint,#9aa0a5);margin-top:1px}" +
    ".pm-lg .pm-cell .cb{font-size:.7rem;margin-top:4px}" +
    ".pm-lg .pm-cell .bar{height:4px;margin-top:7px}" +
    ".pm-lg .pm-cell .bar i{height:4px}" +
    ".pm-lg .items{margin-top:6px;border-top:1px solid var(--hair,#e6e7e3);padding-top:3px;" +
      "display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:0 12px;align-content:start}" +
    /* TAP TARGETS. Every control in the hub is 44px except these grid rows,
       which are 26. The map's whole purpose is seeing a unit's road at once,
       and dozens of rows at 44px put most of it below the fold. 26px still
       clears WCAG 2.5.8 AA (24px), and the rows are separated rather than
       butted together. If the teacher finds it fiddly on a real phone,
       raise it here. */
    ".pm-lg .it{display:flex;gap:6px;align-items:center;min-height:26px;font-size:.73rem;line-height:1.22;" +
      "color:var(--muted,#767b7f);text-decoration:none;padding:1px 4px;border-radius:6px}" +
    ".pm-lg a.it:hover{background:var(--accent-soft,#f4f9f8);color:var(--ink,#212427)}" +
    ".pm-lg .it .mk{flex:0 0 auto;width:11px;color:var(--faint,#9aa0a5)}" +
    ".pm-lg .it.done{color:var(--ink,#212427)}" +
    ".pm-lg .it.done .mk{color:var(--accent,#0d7a70)}" +
    ".pm-lg .it .ct{margin-left:auto;padding-left:7px;font-size:.68rem;color:var(--faint,#9aa0a5);" +
      "white-space:nowrap;font-variant-numeric:tabular-nums}" +
    ".pm-lg .pm-proj{width:60px;padding:14px 5px;gap:8px;border-radius:11px}" +
    ".pm-lg .pm-proj .pn{font-size:1.06rem}" +
    ".pm-lg .pm-proj .pd{font-size:.68rem}" +
    ".pm-lg .pm-proj .pt{font-size:.88rem}" +
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
  function strandClass(strandId) {
    return strandId === "words" ? "sw" : strandId === "science" ? "ss" : "sm";
  }

  /* the per-item list — large only: every skill and every word set, named,
     each with its own state and its own link to the work */
  function itemsHtml(blk, live) {
    var out = [];
    (blk.sets || []).forEach(function (sid) {
      var c = STEM2.setCounts(sid);
      var done = c.total > 0 && c.built === c.total;
      var inner = "<span class='mk'>" + (done ? "✓" : "·") + "</span>" +
        "<span class='nm'>" + esc(SET_SHORT[sid] || c.title || sid) + "</span>" +
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

  function blockHtml(blk, unitId, large, live, strand, tagged) {
    var head = blk.label || blockCount(blk) || blk.soon || "";
    /* a large multi-set cell lists every set as its own row below, so a
       joined "A + B + C" title would say everything twice — the strand
       tag and the count carry the head instead */
    if (large && blk.sets && blk.sets.length > 1 && !blk.label) head = "";
    /* and a single-set cell IS its one row: the head already carries the
       name, the count and the link, so a repeated item row says nothing */
    var soloSet = large && blk.sets && blk.sets.length === 1 && !blk.label && !blk.skills;
    var detail = blk.label ? (blockCount(blk) || blk.soon || "") : "";
    var title = blockTitle(blk);
    var scls = " " + strandClass(strand.id);
    /* the coloured edge marks every cell; the label prints once per strand
       per stage, so a stacked pair of maths lanes is not shouted at twice */
    var tag = tagged ? "<span class='pm-tag'>" + esc(strandName(strand)) + "</span>" : "";

    if (blk.soon) {
      var st = "<span class='n' style='font-weight:400'>· " + esc(T("later")) + "</span>";
      return "<div class='pm-cell soon" + scls + "' title=\"" + esc(title) + "\">" + tag +
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
      return "<div class='pm-cell" + met + scls + "'>" + tag + hd +
        (detail ? "<div class='sub'>" + esc(detail) + "</div>" : "") +
        cb + bar + (soloSet ? "" : itemsHtml(blk, live)) + "</div>";
    }
    var inner = tag + "<span class='t'>" + esc(head) + "</span> <span class='n'>" + state + "</span>" + cb + bar;
    return live
      ? "<a class='pm-cell" + met + scls + "' href='" + href + "' title=\"" + esc(title) + "\">" + inner + "</a>"
      : "<div class='pm-cell" + met + scls + "' title=\"" + esc(title) + "\">" + inner + "</div>";
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

    /* "next" is an explicit teacher call (status:"now"), never a guess
       from array order. An unconfirmed unit shows every open project the
       same way — a task waiting, not a task scheduled. */
    var firstOpenProj = null;
    plan.forEach(function (p) {
      if (!firstOpenProj && p.cp && p.cp.status === "now") firstOpenProj = p.cp.id;
    });

    /* widths chosen for the classroom's 1366-wide laptops: Kinematics
       (5 goal + 5 project columns) must fit a 1300px content box */
    var goalW = large ? 185 : 110, projW = large ? 60 : 52, gap = large ? 8 : 7;
    var colDefs = [], minW = 0;
    plan.forEach(function (p) {
      if (p.cp) { colDefs.push(projW + "px"); minW += projW + gap; return; }
      colDefs.push("minmax(" + goalW + "px,1fr)");
      minW += goalW + gap;
    });
    minW -= gap;

    var html = "<div class='pm-wrap'><div class='pm" + (large ? " pm-lg" : "") +
      "' style='grid-template-columns:" + colDefs.join(" ") + ";min-width:" + minW + "px'>";

    var col = 1;
    plan.forEach(function (p) {
      if (p.cp) {
        var cp = p.cp;
        var done = STEM2.cpDone(cp);
        var isNext = cp.id === firstOpenProj;
        var cls = "pm-proj" + (done ? " done" : (isNext ? " next" : ""));
        var mark = done ? "✓" : (isNext ? "→" : "·");
        /* no word under an unconfirmed project — "later" still read as a
           position in a sequence we do not actually know this year */
        var pin = "<span class='pt'>" + mark + "</span>" +
          "<span class='pn'>" + esc(cp.short) + "</span>" +
          (done || isNext ? "<span class='pd'>" + esc(done ? "✓" : T("soon")) + "</span>" : "");
        html += live
          ? "<a class='" + cls + "' style='grid-column:" + col + "' href='" + esc(unit.page) + "#prove' title=\"" +
            esc(cp.name + " — " + cp.desc) + "\">" + pin + "</a>"
          : "<div class='" + cls + "' style='grid-column:" + col + "' title=\"" +
            esc(cp.name + " — " + cp.desc) + "\">" + pin + "</div>";
        col++;
        return;
      }
      /* one packed column: this stage's cells, words → maths → science,
         each carrying its strand's edge and label. No band alignment,
         so no stage inherits another stage's height as empty space. */
      html += "<div class='pm-stage' style='grid-column:" + col + "'>";
      strands.forEach(function (s) {
        var cell = p.goal ? p.goal[s.id] : null;
        var blks = [];
        blocksOf(cell).forEach(function (b) {
          /* on the compact maps each word set gets its own box — the set's
             name, its built count and its bar are the summary the unit
             pages used to paint in by hand */
          if (!large && b.sets && b.sets.length > 1 && !b.label) {
            b.sets.forEach(function (sid) { blks.push({ sets: [sid] }); });
          } else blks.push(b);
        });
        blks.forEach(function (b, i) {
          html += blockHtml(b, unitId, large, live, s, i === 0);
        });
      });
      html += "</div>";
      col++;
    });

    html += "</div></div>";
    /* every size gets the drag hint; fitHint() hides it when the road fits */
    html += "<p class='pm-scroll' hidden>" + esc(T("scroll")) + "</p>";
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
