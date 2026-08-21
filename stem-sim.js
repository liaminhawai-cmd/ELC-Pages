/* ================================================================
   stem-sim.js — the gradual-release simulation engine
   ----------------------------------------------------------------
   Every major task in the STEM hub has a REHEARSAL: a sim that runs
   the same mathematics as the real assessment on a different story
   (the Keg Toss rehearses as a tennis serve, the Ball Drop as a
   coconut). Same maths, different words, so practising it is not
   memorising it.

   THE LADDER (this is the whole point of the file)
     1 PLAY    sliders + animation, nothing to type. Reach a goal by
               dragging. The student sees the relationship first.
     2 READ    sliders still live, but now read values off the graph
               or the table and type them in.
     3 PREDICT sliders set by the task. Say what will happen BEFORE
               it runs; the sim then runs and marks you.
     4 SOLVE   the sim is hidden. Do the algebra. Your answer is
               then played back so you can see it was right.
     5 EXAM    no sim, no sliders, no hints. Dense words, like the
               real task. Timed.
   Scaffolding only ever comes OFF. A stage unlocks when the one
   before it is finished.

   WHAT A PAGE WRITES
       STEMSIM.mount(document.getElementById("sim"), {
         id: "commute", cp: "cp_cat", room: "maths",
         skills: ["k_intersect", "k_simult"],
         sets: [ { id:"a", name:{en:"..."}, stages:[ ... ] } ],
         copy: { en:{...}, "zh-Hans":{...}, "zh-Hant":{...}, vi:{...} }
       });
   Stage objects are documented at STAGE CONTRACT below.

   WHAT IT RECORDS  (this browser only — no accounts, no tracking)
       elc_stem_sim   {simId:{set,stage,done:{},ms:{}}}
       Stages 4 and 5 also call STEM2.Mastery.record() for the linked
       skills, because that is unaided work; stages 1–3 never do.
       Every finished stage writes a line to STEM2.Store.addEvidence
       so the report can say what was actually done.

   NO images, NO webfonts, NO CDNs. Graphs are inline SVG drawn from
   the page's own CSS custom properties, so a sim re-tints itself in
   dark mode and inside a stem-theme.css room without a redraw path
   of its own.
   ================================================================ */
(function () {
  "use strict";

  var K = "elc_stem_sim";
  var S2 = window.STEM2 || null;

  /* ---------------- tiny helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function get(k, fb) { try { var v = JSON.parse(localStorage.getItem(k)); return v || fb; } catch (e) { return fb; } }
  function set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  /* 12.0 -> "12", 12.50 -> "12.5" — students should never read "12.00 km" */
  function num(v, dp) {
    if (!isFinite(v)) return "—";
    var s = (dp == null ? Math.round(v * 1000) / 1000 : Number(v).toFixed(dp)).toString();
    if (s.indexOf(".") > -1) s = s.replace(/0+$/, "").replace(/\.$/, "");
    return s;
  }
  /* num() strips trailing zeros, which is right for "12 km" and wrong for a
     stopwatch: a fall of exactly one second must read 1.00 s, not 1 s. */
  function fix(v, dp) { return isFinite(v) ? Number(v).toFixed(dp == null ? 2 : dp) : "—"; }
  function pageLang() {
    var l = "en";
    try { l = localStorage.getItem("elc_page_language") || "en"; } catch (e) {}
    return l;
  }
  /* pick the page language out of a {en:..,vi:..} bundle, or pass a plain string through */
  function L(bundle) {
    if (bundle == null) return "";
    if (typeof bundle === "string") return bundle;
    return bundle[pageLang()] !== undefined ? bundle[pageLang()] : bundle.en;
  }
  function reduceMotion() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  }
  function cvar(name, fb) {
    try {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fb;
    } catch (e) { return fb; }
  }

  /* ---------------- engine copy, in the four page languages ---------------- */
  var UI = {
    en: {
      set: "Set", stage: "Step", locked: "Finish the step before this one first.",
      play: "Play", read: "Read it off", predict: "Predict", solve: "Do the maths", exam: "The real thing",
      aim: "What you are learning", goal: "To finish this step",
      check: "Check", again: "Try again", next: "Next step →", nextSet: "Next set →",
      run: "Run it", replay: "Run it again", pause: "Pause", reset: "Reset",
      right: "Right.", wrong: "Not yet.", hint: "Give me a hint", worked: "Show me how",
      doneStage: "Step finished.", doneAll: "You have finished every step. Come back and beat your time.",
      yourTime: "Your time", perQ: "per question", noSim: "No sim in this step — this is the one you do on your own.",
      rehearses: "This rehearses ", rehearsesEnd: ".", untimed: "Take your time — nothing here is timed.",
      timed: "This step is timed, like the real task.",
      privacy: "Everything you do here is saved in this browser only.",
      showSim: "Show me the sim playing my answer", tryFirst: "Answer first, then the sim will play it.",
      goalMet: "Goal reached.", drag: "Drag the sliders."
    },
    "zh-Hans": {
      set: "组", stage: "步骤", locked: "请先完成上一个步骤。",
      play: "先玩", read: "读出数值", predict: "先预测", solve: "自己算", exam: "正式演练",
      aim: "这一步要学的", goal: "完成这一步要做到",
      check: "检查", again: "再试一次", next: "下一步 →", nextSet: "下一组 →",
      run: "运行", replay: "再运行一次", pause: "暂停", reset: "重置",
      right: "正确。", wrong: "还不对。", hint: "给我提示", worked: "看解法",
      doneStage: "这一步完成了。", doneAll: "所有步骤都完成了。可以回来刷新纪录。",
      yourTime: "你的用时", perQ: "每题", noSim: "这一步没有模拟——要自己做。",
      rehearses: "这是在为", rehearsesEnd: "做演练。", untimed: "慢慢来，这里不计时。",
      timed: "这一步会计时，和正式任务一样。",
      privacy: "你在这里做的一切只保存在这个浏览器里。",
      showSim: "用模拟播放我的答案", tryFirst: "先作答，模拟才会播放。",
      goalMet: "达成目标。", drag: "拖动滑块。"
    },
    "zh-Hant": {
      set: "組", stage: "步驟", locked: "請先完成上一個步驟。",
      play: "先玩", read: "讀出數值", predict: "先預測", solve: "自己算", exam: "正式演練",
      aim: "這一步要學的", goal: "完成這一步要做到",
      check: "檢查", again: "再試一次", next: "下一步 →", nextSet: "下一組 →",
      run: "執行", replay: "再執行一次", pause: "暫停", reset: "重設",
      right: "正確。", wrong: "還不對。", hint: "給我提示", worked: "看解法",
      doneStage: "這一步完成了。", doneAll: "所有步驟都完成了。可以回來刷新紀錄。",
      yourTime: "你的用時", perQ: "每題", noSim: "這一步沒有模擬——要自己做。",
      rehearses: "這是在為", rehearsesEnd: "做演練。", untimed: "慢慢來，這裡不計時。",
      timed: "這一步會計時，和正式任務一樣。",
      privacy: "你在這裡做的一切只儲存在這個瀏覽器裡。",
      showSim: "用模擬播放我的答案", tryFirst: "先作答，模擬才會播放。",
      goalMet: "達成目標。", drag: "拖動滑桿。"
    },
    vi: {
      set: "Nhóm", stage: "Bước", locked: "Hãy hoàn thành bước trước đã.",
      play: "Chơi thử", read: "Đọc số liệu", predict: "Dự đoán", solve: "Tự tính", exam: "Làm thật",
      aim: "Bước này học gì", goal: "Để hoàn thành bước này",
      check: "Kiểm tra", again: "Thử lại", next: "Bước tiếp →", nextSet: "Nhóm tiếp →",
      run: "Chạy", replay: "Chạy lại", pause: "Tạm dừng", reset: "Đặt lại",
      right: "Đúng rồi.", wrong: "Chưa đúng.", hint: "Cho em gợi ý", worked: "Xem cách làm",
      doneStage: "Xong bước này.", doneAll: "Em đã xong mọi bước. Quay lại phá kỷ lục thời gian nhé.",
      yourTime: "Thời gian của em", perQ: "mỗi câu", noSim: "Bước này không có mô phỏng — em tự làm.",
      rehearses: "Đây là buổi tập dượt cho bài ", rehearsesEnd: ".", untimed: "Cứ từ từ — bước này không tính giờ.",
      timed: "Bước này có tính giờ, giống bài thật.",
      privacy: "Mọi thứ em làm ở đây chỉ lưu trong trình duyệt này.",
      showSim: "Cho mô phỏng chạy đáp án của em", tryFirst: "Trả lời trước, rồi mô phỏng mới chạy.",
      goalMet: "Đạt mục tiêu.", drag: "Kéo các thanh trượt."
    }
  };
  function T(k) {
    var d = UI[pageLang()] || UI.en;
    return d[k] !== undefined ? d[k] : UI.en[k];
  }

  /* ---------------- one-time stylesheet (tokens only, no new look) ---------------- */
  var CSS = [
    /* the mover colours every sim shares: a bike is the same colour on every page */
    ":root{--sim-a:#0d7a70;--sim-b:#b0592f;--sim-c:#3f56a8;--sim-d:#6b7075}",
    "@media(prefers-color-scheme:dark){:root{--sim-a:#2fb3a5;--sim-b:#d98e6a;--sim-c:#8fa0e8;--sim-d:#9aa0a5}}",
    ".sim-tabs{display:flex;flex-wrap:wrap;gap:0;border-bottom:1px solid var(--hair);margin:0 0 1.1rem}",
    ".sim-tab{appearance:none;background:none;border:0;border-bottom:2px solid transparent;font:inherit;",
      "font-size:.86rem;color:var(--muted);padding:.55rem .7rem;min-height:44px;cursor:pointer;white-space:nowrap}",
    ".sim-tab.on{color:var(--ink);border-bottom-color:var(--accent);font-weight:600}",
    ".sim-tab[aria-disabled=true]{color:var(--faint);cursor:not-allowed}",
    ".sim-tab .n{font-variant-numeric:tabular-nums;opacity:.65;margin-right:.35em}",
    ".sim-setbar{display:flex;flex-wrap:wrap;gap:.4rem;align-items:baseline;margin:0 0 .5rem}",
    ".sim-setbar b{font-size:.72rem;letter-spacing:.09em;text-transform:uppercase;color:var(--faint);font-weight:600}",
    ".sim-setbtn{appearance:none;background:none;border:1px solid var(--hair);border-radius:999px;font:inherit;",
      "font-size:.8rem;color:var(--muted);padding:.5rem .9rem;min-height:44px;cursor:pointer}",
    ".sim-setbtn.on{border-color:var(--accent);color:var(--accent);font-weight:600}",
    ".sim-aim{margin:0 0 .9rem;padding:0 0 0 .8rem;border-left:2px solid var(--accent)}",
    ".sim-aim .k{display:block;font-size:.7rem;letter-spacing:.09em;text-transform:uppercase;color:var(--faint);margin-bottom:.15rem}",
    ".sim-aim p{margin:0 0 .35rem;font-size:.95rem}",
    ".sim-goal{margin:0;font-size:.88rem;color:var(--muted)}",
    ".sim-ctl{display:flex;flex-wrap:wrap;gap:.9rem 1.4rem;margin:.9rem 0}",
    ".sim-sl{flex:1 1 190px;min-width:170px}",
    ".sim-sl label{display:flex;justify-content:space-between;align-items:baseline;gap:.5rem;",
      "font-size:.82rem;color:var(--muted);margin-bottom:.15rem}",
    ".sim-sl label b{color:var(--ink);font-variant-numeric:tabular-nums;font-weight:600}",
    ".sim-sl input[type=range]{width:100%;min-height:44px;accent-color:var(--accent);cursor:pointer}",
    ".sim-sl.lock input[type=range]{opacity:.45;pointer-events:none}",
    ".sim-fig{margin:.9rem 0}",
    ".sim-fig svg{display:block;width:100%;height:auto;overflow:visible}",
    ".sim-figs{display:grid;gap:1rem}",
    "@media(min-width:760px){.sim-figs.two{grid-template-columns:1fr 1fr}}",
    ".sim-run{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:.6rem 0}",
    ".sim-btn{appearance:none;font:inherit;font-size:.88rem;background:var(--accent);color:var(--on-accent);",
      "border:1px solid var(--accent);border-radius:8px;padding:.5rem 1rem;min-height:44px;cursor:pointer}",
    ".sim-btn.ghost{background:none;color:var(--accent)}",
    ".sim-btn[disabled]{opacity:.45;cursor:not-allowed}",
    ".sim-scrub{flex:1 1 160px;min-width:140px;min-height:44px;accent-color:var(--accent)}",
    ".sim-clock{font-variant-numeric:tabular-nums;font-size:.86rem;color:var(--muted);min-width:5.5em}",
    ".sim-q{border-top:1px solid var(--hair);padding-top:.9rem;margin-top:.9rem}",
    ".sim-q:first-child{border-top:0;padding-top:0;margin-top:0}",
    ".sim-q .qp{margin:0 0 .6rem;font-size:.95rem;line-height:1.55}",
    ".sim-in{display:flex;flex-wrap:wrap;gap:.6rem .9rem;align-items:flex-end;margin:0 0 .6rem}",
    ".sim-in label{font-size:.82rem;color:var(--muted);display:block}",
    ".sim-in .u{font-size:.8rem;color:var(--faint);margin-left:.3em}",
    ".sim-in input[type=text]{font:inherit;width:6.5em;padding:.45rem .55rem;min-height:44px;border-radius:8px;",
      "border:1px solid var(--hair);background:var(--paper);color:var(--ink)}",
    ".sim-in input.wide{width:12em}",
    ".sim-in input.right{border-color:var(--accent);background:var(--accent-soft)}",
    ".sim-in input.wrong{border-color:var(--alert)}",
    ".sim-opts{display:grid;gap:.4rem;margin:0 0 .6rem}",
    ".sim-opt{appearance:none;font:inherit;font-size:.9rem;text-align:left;background:none;color:var(--ink);",
      "border:1px solid var(--hair);border-radius:8px;padding:.55rem .8rem;min-height:44px;cursor:pointer}",
    ".sim-opt.on{border-color:var(--accent);background:var(--accent-soft)}",
    ".sim-opt.right{border-color:var(--accent);background:var(--accent-soft);font-weight:600}",
    ".sim-opt.wrong{border-color:var(--alert)}",
    ".sim-fb{font-size:.88rem;margin:.5rem 0 0;min-height:1.3em}",
    ".sim-fb.ok{color:var(--accent)}",
    ".sim-fb.no{color:var(--alert)}",
    ".sim-help{margin:.5rem 0 0;display:flex;gap:1rem;flex-wrap:wrap}",
    ".sim-help button{appearance:none;background:none;border:0;font:inherit;font-size:.82rem;",
      "color:var(--muted);text-decoration:underline;text-underline-offset:3px;padding:.6rem 0;min-height:44px;cursor:pointer}",
    ".sim-help-body{font-size:.88rem;color:var(--muted);border-left:2px solid var(--hair);padding-left:.8rem;margin:.5rem 0 0}",
    ".sim-help-body p{margin:0 0 .4rem}",
    ".sim-foot{border-top:1px solid var(--hair);margin-top:1.2rem;padding-top:.9rem;",
      "display:flex;flex-wrap:wrap;gap:.6rem 1rem;align-items:center;justify-content:space-between}",
    ".sim-tally{font-size:.82rem;color:var(--muted);font-variant-numeric:tabular-nums}",
    ".sim-note{font-size:.8rem;color:var(--faint);margin:.9rem 0 0}",
    ".sim-table{width:100%;border-collapse:collapse;font-size:.86rem;font-variant-numeric:tabular-nums}",
    ".sim-table th,.sim-table td{border-bottom:1px solid var(--hair);padding:.4rem .5rem;text-align:right}",
    ".sim-table th:first-child,.sim-table td:first-child{text-align:left}",
    ".sim-table th{font-weight:600;color:var(--muted);font-size:.78rem}",
    ".sim-wrapx{overflow-x:auto}",
    ".sim-key{display:flex;flex-wrap:wrap;gap:.3rem 1rem;font-size:.8rem;color:var(--muted);margin:.3rem 0 0}",
    ".sim-key i{display:inline-block;width:.85em;height:.85em;border-radius:2px;margin-right:.35em;vertical-align:-1px}",
    "@media(prefers-reduced-motion:reduce){.sim-fig svg *{transition:none!important}}"
  ].join("");

  function injectCSS() {
    if (document.getElementById("sim-css")) return;
    var s = document.createElement("style");
    s.id = "sim-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ================================================================
     SVG PLOT — a graph drawn from the page's own tokens
     plot(host, {
       xLabel, yLabel, xMax, yMax, xMin, yMin, xStep, yStep,
       xUnit, yUnit, height,
       series: [{ name, color, fn(x)->y | points:[[x,y]..], dash, width }],
       marks:  [{ x, y, label, color }],
       vlines: [{ x, label }], hlines: [{ y, label }]
     })
     Returns { update(opts), svg }.
     ================================================================ */
  function plot(host, o) {
    /* The viewBox is sized to the box the graph actually lands in, so a
       font-size of 11 renders at about 11 real pixels on a phone as well
       as on a laptop. A fixed 640-wide viewBox squashed into a 320px
       column would render every axis number at five pixels. */
    function measure() {
      var w = host.clientWidth || (host.parentNode && host.parentNode.clientWidth) || 640;
      return clamp(Math.round(w), 300, 720);
    }
    var W = measure(), H = o.height || 340;
    /* the y gutter has to hold the widest tick number AND the rotated axis
       label. A fixed 38px was fine for "6 km" and collided with "900". */
    function gutter(o) {
      var yMin = o.yMin || 0, ys = o.yStep || 0, wide = 0, v;
      if (!ys) ys = (o.yMax - yMin) / 6;
      for (v = Math.ceil(yMin / ys) * ys; v <= o.yMax + 1e-9; v += ys) {
        wide = Math.max(wide, String(num(v)).length);
      }
      return (o.yLabel ? 16 : 0) + 12 + wide * 6.5;
    }
    var P = { l: Math.max(W < 420 ? 30 : 40, gutter(o)), r: 14, t: 14, b: 40 };

    function build(o) {
      var xMin = o.xMin || 0, yMin = o.yMin || 0;
      var xMax = o.xMax, yMax = o.yMax;
      var pw = W - P.l - P.r, ph = H - P.t - P.b;
      function X(x) { return P.l + (x - xMin) / (xMax - xMin) * pw; }
      function Y(y) { return P.t + ph - (y - yMin) / (yMax - yMin) * ph; }

      var ink = cvar("--ink", "#212427"), muted = cvar("--muted", "#5c6166");
      var hair = cvar("--hair", "#e6e7e3"), accent = cvar("--accent", "#0d7a70");
      var faint = cvar("--faint", "#6b7075");

      var g = [];
      /* gridlines + axis numbers */
      var xs = o.xStep || niceStep(xMax - xMin), ys = o.yStep || niceStep(yMax - yMin);
      var i, v;
      for (v = Math.ceil(xMin / xs) * xs; v <= xMax + 1e-9; v += xs) {
        g.push("<line x1='" + X(v) + "' y1='" + P.t + "' x2='" + X(v) + "' y2='" + (P.t + ph) +
          "' stroke='" + hair + "' stroke-width='1'/>");
        g.push("<text x='" + X(v) + "' y='" + (P.t + ph + 16) + "' fill='" + faint +
          "' font-size='11' text-anchor='middle'>" + esc(num(v)) + "</text>");
      }
      for (v = Math.ceil(yMin / ys) * ys; v <= yMax + 1e-9; v += ys) {
        g.push("<line x1='" + P.l + "' y1='" + Y(v) + "' x2='" + (P.l + pw) + "' y2='" + Y(v) +
          "' stroke='" + hair + "' stroke-width='1'/>");
        g.push("<text x='" + (P.l - 7) + "' y='" + (Y(v) + 4) + "' fill='" + faint +
          "' font-size='11' text-anchor='end'>" + esc(num(v)) + "</text>");
      }
      /* axes */
      g.push("<line x1='" + P.l + "' y1='" + P.t + "' x2='" + P.l + "' y2='" + (P.t + ph) +
        "' stroke='" + muted + "' stroke-width='1.4'/>");
      g.push("<line x1='" + P.l + "' y1='" + (P.t + ph) + "' x2='" + (P.l + pw) + "' y2='" + (P.t + ph) +
        "' stroke='" + muted + "' stroke-width='1.4'/>");
      if (o.xLabel) g.push("<text x='" + (P.l + pw / 2) + "' y='" + (H - 6) + "' fill='" + muted +
        "' font-size='12' text-anchor='middle'>" + esc(L(o.xLabel)) + "</text>");
      if (o.yLabel) g.push("<text transform='translate(11," + (P.t + ph / 2) + ") rotate(-90)' fill='" + muted +
        "' font-size='12' text-anchor='middle'>" + esc(L(o.yLabel)) + "</text>");

      /* reference lines */
      (o.vlines || []).forEach(function (l) {
        if (l.x < xMin || l.x > xMax) return;
        g.push("<line x1='" + X(l.x) + "' y1='" + P.t + "' x2='" + X(l.x) + "' y2='" + (P.t + ph) +
          "' stroke='" + (l.color || faint) + "' stroke-width='1' stroke-dasharray='3 3'/>");
        if (l.label) g.push("<text x='" + (X(l.x) + 4) + "' y='" + (P.t + 12) + "' fill='" + (l.color || faint) +
          "' font-size='11'>" + esc(L(l.label)) + "</text>");
      });
      (o.hlines || []).forEach(function (l) {
        if (l.y < yMin || l.y > yMax) return;
        g.push("<line x1='" + P.l + "' y1='" + Y(l.y) + "' x2='" + (P.l + pw) + "' y2='" + Y(l.y) +
          "' stroke='" + (l.color || faint) + "' stroke-width='1' stroke-dasharray='3 3'/>");
        if (l.label) g.push("<text x='" + (P.l + 4) + "' y='" + (Y(l.y) - 4) + "' fill='" + (l.color || faint) +
          "' font-size='11'>" + esc(L(l.label)) + "</text>");
      });

      /* series */
      (o.series || []).forEach(function (s) {
        var pts = s.points;
        if (!pts && s.fn) {
          pts = [];
          var n = 180;
          for (i = 0; i <= n; i++) {
            var x = xMin + (xMax - xMin) * i / n, y = s.fn(x);
            if (isFinite(y)) pts.push([x, y]);
          }
        }
        if (!pts || !pts.length) return;
        var col = s.color || accent;
        if (s.dots) {
          pts.forEach(function (p) {
            if (p[1] < yMin - 1e-9 || p[1] > yMax + 1e-9) return;
            g.push("<circle cx='" + X(p[0]) + "' cy='" + Y(p[1]) + "' r='" + (s.r || 3.4) +
              "' fill='" + col + "'/>");
          });
        }
        if (s.dots && !s.line) return;
        var d = "", pen = false;
        pts.forEach(function (p) {
          var inside = p[1] >= yMin - 1e-9 && p[1] <= yMax + 1e-9;
          if (!inside) { pen = false; return; }
          d += (pen ? "L" : "M") + X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1) + " ";
          pen = true;
        });
        if (d) g.push("<path d='" + d + "' fill='none' stroke='" + col + "' stroke-width='" + (s.width || 2.2) +
          "' stroke-linejoin='round' stroke-linecap='round'" +
          (s.dash ? " stroke-dasharray='" + s.dash + "'" : "") + "/>");
      });

      /* marked points */
      (o.marks || []).forEach(function (m) {
        if (m.x < xMin || m.x > xMax || m.y < yMin || m.y > yMax) return;
        var col = m.color || ink;
        g.push("<circle cx='" + X(m.x) + "' cy='" + Y(m.y) + "' r='4.6' fill='" + cvar("--paper", "#fff") +
          "' stroke='" + col + "' stroke-width='2'/>");
        if (m.label) {
          var tx = X(m.x) + 8, anch = "start";
          if (tx > W - 90) { tx = X(m.x) - 8; anch = "end"; }
          g.push("<text x='" + tx + "' y='" + (Y(m.y) - 8) + "' fill='" + col +
            "' font-size='11.5' font-weight='600' text-anchor='" + anch + "'>" + esc(L(m.label)) + "</text>");
        }
      });

      return "<svg viewBox='0 0 " + W + " " + H + "' role='img' aria-label='" +
        esc(L(o.alt) || L(o.xLabel) + " against " + L(o.yLabel)) + "'>" + g.join("") + "</svg>";
    }

    function niceStep(range) {
      var raw = range / 6, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
      var n = raw / mag;
      return (n >= 5 ? 5 : n >= 2 ? 2 : 1) * mag;
    }

    host.classList.add("sim-fig");
    host.innerHTML = build(o);
    return {
      update: function (next) {
        o = next || o;
        W = measure(); P.l = Math.max(W < 420 ? 30 : 40, gutter(o));
        host.innerHTML = build(o);
      },
      opts: function () { return o; }
    };
  }

  /* ================================================================
     TRACK — one lane per traveller, so three people at the same place
     do not stack on top of each other. Names sit in the lane, in the
     traveller's own colour, and the landmarks are labelled once below.
     track(host, { length, labels:[{x,name}], movers:[{name,color,x}] })
     ================================================================ */
  function track(host, o) {
    var W = clamp(Math.round(host.clientWidth ||
      (host.parentNode && host.parentNode.clientWidth) || 640), 300, 720);
    var movers = o.movers || [], lanes = movers.length || 1;
    var narrow = W < 430;
    var nameW = narrow ? 0 : 92;            /* on a phone the names go above the lane */
    var laneH = narrow ? 40 : 32;
    var P = { l: 14 + nameW, r: 16, t: 10, b: 26 };
    var H = P.t + lanes * laneH + P.b;
    var pw = W - P.l - P.r;
    function X(x) { return P.l + clamp(x / o.length, 0, 1) * pw; }
    var muted = cvar("--muted", "#5c6166"), hair = cvar("--hair", "#e6e7e3");
    var faint = cvar("--faint", "#6b7075"), paper = cvar("--paper", "#fff");
    var g = [];

    movers.forEach(function (m, i) {
      var y = P.t + i * laneH + (narrow ? 26 : laneH / 2);
      var col = m.color || muted;
      g.push("<line x1='" + P.l + "' y1='" + y + "' x2='" + (P.l + pw) + "' y2='" + y +
        "' stroke='" + hair + "' stroke-width='6' stroke-linecap='round'/>");
      /* the road already travelled, in the traveller's colour */
      g.push("<line x1='" + P.l + "' y1='" + y + "' x2='" + X(m.x) + "' y2='" + y +
        "' stroke='" + col + "' stroke-width='6' stroke-linecap='round' opacity='.30'/>");
      g.push("<circle cx='" + X(m.x) + "' cy='" + y + "' r='8' fill='" + col +
        "' stroke='" + paper + "' stroke-width='2.5'/>");
      if (narrow) {
        g.push("<text x='" + P.l + "' y='" + (y - 13) + "' fill='" + col +
          "' font-size='11.5' font-weight='600'>" + esc(L(m.name)) + "</text>");
      } else {
        g.push("<text x='" + (P.l - 10) + "' y='" + (y + 4) + "' fill='" + col +
          "' font-size='11.5' font-weight='600' text-anchor='end'>" + esc(L(m.name)) + "</text>");
      }
    });

    /* the landmarks, ticked through every lane and named once at the foot */
    var yTop = P.t + (narrow ? 14 : 4), yBot = P.t + lanes * laneH;
    (o.labels || []).forEach(function (mk) {
      g.push("<line x1='" + X(mk.x) + "' y1='" + yTop + "' x2='" + X(mk.x) + "' y2='" + yBot +
        "' stroke='" + hair + "' stroke-width='1'/>");
      g.push("<text x='" + X(mk.x) + "' y='" + (H - 8) + "' fill='" + faint +
        "' font-size='11' text-anchor='" +
        (mk.x <= 0 ? "start" : mk.x >= o.length ? "end" : "middle") + "'>" +
        esc(L(mk.name)) + "</text>");
    });

    host.classList.add("sim-fig");
    host.innerHTML = "<svg viewBox='0 0 " + W + " " + H + "' role='img' aria-label='" +
      esc(L(o.alt) || "position along the road") + "'>" + g.join("") + "</svg>";
  }

  /* ================================================================
     ANIM — a clock the stage owns. Play / pause / scrub / reset.
     anim(host, { dur, speed, onFrame(t), labelFor(t) })
     Honours prefers-reduced-motion: no autoplay, scrubber only.
     ================================================================ */
  function anim(host, o) {
    var bar = el("div", "sim-run");
    var btn = el("button", "sim-btn", esc(T("run")));
    btn.type = "button";
    var scrub = document.createElement("input");
    scrub.type = "range"; scrub.className = "sim-scrub";
    scrub.min = 0; scrub.max = 1000; scrub.step = 1; scrub.value = 0;
    scrub.setAttribute("aria-label", L(o.scrubLabel) || "scrub through time");
    var clock = el("span", "sim-clock", "");
    var reset = el("button", "sim-btn ghost", esc(T("reset")));
    reset.type = "button";
    bar.appendChild(btn); bar.appendChild(scrub); bar.appendChild(clock); bar.appendChild(reset);
    host.appendChild(bar);

    var t = 0, raf = null, last = null, playing = false;
    var speed = o.speed || 1;   /* model-seconds per real second */

    function paint() {
      scrub.value = Math.round(t / o.dur * 1000);
      clock.textContent = o.labelFor ? o.labelFor(t) : num(t, 1);
      if (o.onFrame) o.onFrame(t);
    }
    function step(ts) {
      if (!playing) return;
      if (last == null) last = ts;
      t += (ts - last) / 1000 * speed;
      last = ts;
      if (t >= o.dur) { t = o.dur; stop(); paint(); if (o.onEnd) o.onEnd(); return; }
      paint();
      raf = requestAnimationFrame(step);
    }
    function play() {
      if (t >= o.dur) t = 0;
      playing = true; last = null;
      btn.textContent = T("pause");
      raf = requestAnimationFrame(step);
    }
    function stop() {
      playing = false; last = null;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
      btn.textContent = t >= o.dur ? T("replay") : T("run");
    }
    btn.addEventListener("click", function () { playing ? stop() : play(); });
    scrub.addEventListener("input", function () {
      stop();
      t = Number(scrub.value) / 1000 * o.dur;
      paint();
    });
    reset.addEventListener("click", function () { stop(); t = 0; paint(); });

    if (reduceMotion()) { btn.hidden = true; }
    paint();
    return {
      play: play, stop: stop,
      seek: function (v) { stop(); t = clamp(v, 0, o.dur); paint(); },
      time: function () { return t; },
      setDur: function (d) { o.dur = d; if (t > d) t = d; paint(); },
      el: bar
    };
  }

  /* ================================================================
     SLIDERS
     sliders(host, [{k,label,min,max,step,value,unit,fmt,locked}], onChange)
     -> { values(), set(k,v), lock(k), el }
     ================================================================ */
  function sliders(host, defs, onChange) {
    var wrap = el("div", "sim-ctl");
    var vals = {}, nodes = {};
    defs.forEach(function (d) {
      vals[d.k] = d.value;
      var box = el("div", "sim-sl" + (d.locked ? " lock" : ""));
      var lab = el("label");
      var txt = el("span", null, esc(L(d.label)));
      var out = el("b");
      lab.appendChild(txt); lab.appendChild(out);
      var inp = document.createElement("input");
      inp.type = "range"; inp.min = d.min; inp.max = d.max; inp.step = d.step;
      inp.value = d.value;
      inp.setAttribute("aria-label", L(d.label));
      if (d.locked) inp.disabled = true;
      function show() {
        out.textContent = (d.fmt ? d.fmt(vals[d.k]) : num(vals[d.k])) + (d.unit ? " " + L(d.unit) : "");
      }
      inp.addEventListener("input", function () {
        vals[d.k] = Number(inp.value);
        show();
        if (onChange) onChange(vals, d.k);
      });
      show();
      box.appendChild(lab); box.appendChild(inp);
      wrap.appendChild(box);
      nodes[d.k] = { box: box, inp: inp, show: show };
    });
    host.appendChild(wrap);
    return {
      values: function () { return vals; },
      set: function (k, v) {
        if (!nodes[k]) return;
        vals[k] = v; nodes[k].inp.value = v; nodes[k].show();
        if (onChange) onChange(vals, k);
      },
      lock: function (k, on) {
        if (!nodes[k]) return;
        nodes[k].inp.disabled = on !== false;
        nodes[k].box.classList.toggle("lock", on !== false);
      },
      el: wrap
    };
  }

  /* ---------------- answer parsing ---------------- */
  function parseNum(s) {
    if (s == null) return NaN;
    s = String(s).trim().replace(/,/g, "").replace(/\s+/g, "");
    s = s.replace(/^\+/, "").replace(/[×xX*]10\^?(-?\d+)$/, "e$1");
    if (/^-?\d+\/\d+$/.test(s)) { var p = s.split("/"); return Number(p[0]) / Number(p[1]); }
    var m = Number(s);
    return isFinite(m) ? m : NaN;
  }
  function near(a, b, tol) {
    if (!isFinite(a)) return false;
    var t = tol == null ? 0.005 : tol;
    return Math.abs(a - b) <= t + 1e-12;
  }
  /* free text: ignore case, punctuation and doubled spaces */
  function normText(s) {
    return String(s || "").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }

  /* ================================================================
     QUESTION BLOCK
     ask(host, {
       prompt,                       // i18n bundle or HTML string
       inputs: [{k,label,unit,answer,tol,wide,text:[accepted..]}],
       opts:   {list:[..], a:index}, // OR a multiple choice
       hint, worked,                 // i18n bundles
       onDone(ok, {ms, tries, assisted})
     })
     Times the student from first paint to the first correct check.
     `assisted` is true if the student opened the worked solution before
     getting it right — a stage should exclude those from its `ok` count
     so mastery is never granted for an answer that was handed over.
     ================================================================ */
  function ask(host, q) {
    var box = el("div", "sim-q");
    box.appendChild(el("p", "qp", typeof q.prompt === "string" ? q.prompt : L(q.prompt)));

    var started = (window.performance && performance.now) ? performance.now() : Date.now();
    var inputs = [], optBtns = [], chosen = -1, solved = false, tries = 0;
    /* opening the worked solution means the student was TAUGHT this one.
       It still marks correct — but it must not count towards mastery. */
    var assisted = false;

    if (q.opts) {
      var ow = el("div", "sim-opts");
      (q.opts.list || []).forEach(function (o, i) {
        var b = el("button", "sim-opt", typeof o === "string" ? esc(o) : esc(L(o)));
        b.type = "button";
        b.addEventListener("click", function () {
          if (solved) return;
          chosen = i;
          optBtns.forEach(function (x) { x.classList.remove("on"); });
          b.classList.add("on");
        });
        optBtns.push(b); ow.appendChild(b);
      });
      box.appendChild(ow);
    } else {
      var iw = el("div", "sim-in");
      (q.inputs || []).forEach(function (d) {
        var cell = el("div");
        var lab = el("label", null, esc(L(d.label)) + (d.unit ? "<span class='u'>" + esc(L(d.unit)) + "</span>" : ""));
        var inp = document.createElement("input");
        inp.type = "text";
        inp.autocomplete = "off";
        inp.setAttribute("inputmode", d.text ? "text" : "decimal");
        if (d.wide || d.text) inp.className = "wide";
        inp.setAttribute("aria-label", L(d.label));
        cell.appendChild(lab); cell.appendChild(inp);
        iw.appendChild(cell);
        inputs.push({ d: d, inp: inp });
      });
      box.appendChild(iw);
    }

    var row = el("div", "sim-run");
    var check = el("button", "sim-btn", esc(T("check")));
    check.type = "button";
    row.appendChild(check);
    box.appendChild(row);
    var fb = el("p", "sim-fb", "");
    box.appendChild(fb);

    var help = el("div", "sim-help");
    var helpBody = el("div", "sim-help-body");
    helpBody.hidden = true;
    /* A hint or a worked solution is written into the page long after the
       stage was painted, so the notebook has to be run over it again — a
       <span data-v> in one of them was styled but dead until this call. */
    function relinkHelp() {
      if (window.STEMVOCAB && window.STEMVOCAB.decorate) window.STEMVOCAB.decorate(helpBody);
    }
    if (q.hint) {
      var hb = el("button", null, esc(T("hint")));
      hb.type = "button";
      hb.addEventListener("click", function () {
        helpBody.hidden = false;
        helpBody.innerHTML = "<p>" + (typeof q.hint === "string" ? q.hint : L(q.hint)) + "</p>";
        relinkHelp();
      });
      help.appendChild(hb);
    }
    if (q.worked) {
      var wb = el("button", null, esc(T("worked")));
      wb.type = "button";
      wb.addEventListener("click", function () {
        helpBody.hidden = false;
        helpBody.innerHTML = typeof q.worked === "string" ? q.worked : L(q.worked);
        relinkHelp();
        if (!solved) assisted = true;
      });
      help.appendChild(wb);
    }
    if (help.childNodes.length) { box.appendChild(help); box.appendChild(helpBody); }

    function mark() {
      if (solved) return;
      tries++;
      var allOk = true;
      if (q.opts) {
        if (chosen < 0) { fb.className = "sim-fb no"; fb.textContent = T("wrong"); return; }
        allOk = chosen === q.opts.a;
        optBtns.forEach(function (b, i) {
          b.classList.remove("right", "wrong");
          if (i === chosen) b.classList.add(allOk ? "right" : "wrong");
          if (allOk && i === q.opts.a) b.classList.add("right");
        });
      } else {
        inputs.forEach(function (o) {
          var ok;
          /* a written answer may carry BOTH a list of accepted strings and a
             check() fallback, so a long answer is not brittle: either passes */
          if (o.d.text) ok = o.d.text.some(function (a) { return normText(a) === normText(o.inp.value); });
          if (!ok && o.d.check) ok = !!o.d.check(o.inp.value);
          if (!ok && !o.d.text && !o.d.check) ok = near(parseNum(o.inp.value), o.d.answer, o.d.tol);
          o.inp.classList.remove("right", "wrong");
          o.inp.classList.add(ok ? "right" : "wrong");
          if (!ok) allOk = false;
        });
      }
      if (allOk) {
        solved = true;
        var ms = ((window.performance && performance.now) ? performance.now() : Date.now()) - started;
        fb.className = "sim-fb ok";
        fb.textContent = T("right") + (q.after ? " " + L(q.after) : "");
        check.disabled = true;
        if (q.onDone) q.onDone(true, { ms: Math.round(ms), tries: tries, assisted: assisted });
      } else {
        fb.className = "sim-fb no";
        fb.textContent = T("wrong") + (q.nudge ? " " + L(q.nudge) : "");
        if (q.onDone) q.onDone(false, { tries: tries, assisted: assisted });
      }
    }
    check.addEventListener("click", mark);
    box.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !solved) { e.preventDefault(); mark(); }
    });

    host.appendChild(box);
    return { el: box, solved: function () { return solved; },
             assisted: function () { return assisted; }, mark: mark };
  }

  /* ================================================================
     MOUNT — tabs, sets, locking, progress, recording
     ================================================================ */
  function mount(root, cfg) {
    if (!root) return null;
    injectCSS();
    if (cfg.room && !document.body.getAttribute("data-room")) {
      document.body.setAttribute("data-room", cfg.room);
    }

    var store = get(K, {});
    var mine = store[cfg.id] = store[cfg.id] || { set: 0, stage: 0, done: {}, ms: {} };
    if (!mine.done) mine.done = {};
    if (!mine.ms) mine.ms = {};
    function save() { store[cfg.id] = mine; set(K, store); }

    var sets = cfg.sets || [];
    var setBar = el("div", "sim-setbar");
    var tabs = el("div", "sim-tabs");
    var panel = el("div", "sim-panel");
    root.appendChild(setBar); root.appendChild(tabs); root.appendChild(panel);

    function key(si, gi) { return sets[si].id + ":" + sets[si].stages[gi].id; }
    function isDone(si, gi) { return !!mine.done[key(si, gi)]; }
    /* a stage is open if it is the first, or the one before it is finished.
       A finished SET opens the first stage of the next set. */
    function isOpen(si, gi) {
      if (cfg.openAll) return true;
      if (gi === 0) {
        if (si === 0) return true;
        var prev = sets[si - 1];
        return isDone(si - 1, prev.stages.length - 1);
      }
      return isDone(si, gi - 1);
    }
    function setOpen(si) { return si === 0 || cfg.openAll || isDone(si - 1, sets[si - 1].stages.length - 1); }

    var cur = { s: clamp(mine.set || 0, 0, sets.length - 1), g: 0 };
    cur.g = clamp(mine.stage || 0, 0, sets[cur.s].stages.length - 1);
    while (cur.g > 0 && !isOpen(cur.s, cur.g)) cur.g--;
    if (!setOpen(cur.s)) { cur.s = 0; cur.g = 0; }

    function paintSets() {
      if (sets.length < 2) { setBar.hidden = true; return; }
      var h = "<b>" + esc(T("set")) + "</b>";
      setBar.innerHTML = h;
      sets.forEach(function (s, i) {
        var b = el("button", "sim-setbtn" + (i === cur.s ? " on" : ""),
          (setOpen(i) ? "" : "🔒 ") + esc(L(s.name)));
        b.type = "button";
        b.addEventListener("click", function () {
          if (!setOpen(i)) { flash(T("locked")); return; }
          cur.s = i; cur.g = 0;
          while (cur.g < sets[i].stages.length - 1 && isDone(i, cur.g)) cur.g++;
          mine.set = cur.s; mine.stage = cur.g; save();
          paintAll();
        });
        setBar.appendChild(b);
      });
    }

    function paintTabs() {
      tabs.innerHTML = "";
      sets[cur.s].stages.forEach(function (st, i) {
        var open = isOpen(cur.s, i), done = isDone(cur.s, i);
        var b = el("button", "sim-tab" + (i === cur.g ? " on" : ""),
          "<span class='n'>" + (i + 1) + "</span>" + (done ? "✓ " : open ? "" : "🔒 ") +
          esc(L(st.tab) || T(st.kind) || L(st.title)));
        b.type = "button";
        if (!open) b.setAttribute("aria-disabled", "true");
        b.addEventListener("click", function () {
          if (!open) { flash(T("locked")); return; }
          cur.g = i; mine.stage = i; save();
          paintAll();
        });
        tabs.appendChild(b);
      });
    }

    var flashEl = null;
    function flash(msg) {
      if (!flashEl) { flashEl = el("p", "sim-fb no"); root.insertBefore(flashEl, panel); }
      flashEl.textContent = msg;
      setTimeout(function () { if (flashEl) flashEl.textContent = ""; }, 2600);
    }

    /* the one line that keeps the project in view on every stage */
    function projectLine() {
      if (!S2 || !cfg.cp) return "";
      var cp = null;
      S2.UNITS.forEach(function (u) {
        u.checkpoints.forEach(function (c) { if (c.id === cfg.cp) cp = c; });
      });
      if (!cp) return "";
      return T("rehearses") + cp.name + T("rehearsesEnd");
    }

    function finishStage(si, gi, info) {
      var k = key(si, gi);
      var first = !mine.done[k];
      mine.done[k] = true;
      if (info && info.ms) {
        var prev = mine.ms[k];
        if (!prev || info.ms < prev) mine.ms[k] = info.ms;
      }
      mine.stage = Math.min(gi + 1, sets[si].stages.length - 1);
      save();
      var st = sets[si].stages[gi];
      /* only unaided work counts towards a skill */
      if (S2 && first && (st.kind === "solve" || st.kind === "exam")) {
        var ids = st.skills || cfg.skills || [];
        /* `ok` is the count solved WITHOUT the worked solution; a stage that
           does not distinguish sends ok === of and gets the benefit of the doubt */
        var n = info && info.of ? info.of : 0, ok = info && info.ok ? info.ok : 0;
        ids.forEach(function (id) {
          if (!S2.SKILLS[id]) return;
          if (n >= 3) S2.Mastery.record(id, { ok: ok, of: n, ms: (info.msList || []), mode: "p" });
          S2.Store.addEvidence(id, cfg.evidenceSrc || cfg.id,
            L(sets[si].name) + " · " + (L(st.title) || st.id) +
            (n ? " — " + ok + "/" + n : ""));
        });
      }
    }

    function paintPanel() {
      panel.innerHTML = "";
      var st = sets[cur.s].stages[cur.g];

      var head = el("div", "sim-aim");
      head.innerHTML =
        "<span class='k'>" + esc(T("stage")) + " " + (cur.g + 1) + " · " + esc(T(st.kind) || "") + "</span>" +
        "<p><b>" + esc(L(st.title)) + "</b></p>" +
        (st.aim ? "<p>" + (typeof st.aim === "string" ? st.aim : L(st.aim)) + "</p>" : "") +
        (st.goal ? "<p class='sim-goal'><b>" + esc(T("goal")) + ":</b> " +
          (typeof st.goal === "string" ? st.goal : L(st.goal)) + "</p>" : "");
      panel.appendChild(head);

      var body = el("div", "sim-body");
      panel.appendChild(body);

      var foot = el("div", "sim-foot");
      var tally = el("span", "sim-tally", "");
      var nextBtn = el("button", "sim-btn", esc(T("next")));
      nextBtn.type = "button";
      nextBtn.hidden = true;
      var lastStage = cur.g === sets[cur.s].stages.length - 1;
      var lastSet = cur.s === sets.length - 1;
      if (lastStage) nextBtn.textContent = lastSet ? "" : T("nextSet");
      nextBtn.addEventListener("click", function () {
        if (lastStage) {
          if (lastSet) return;
          cur.s++; cur.g = 0;
        } else cur.g++;
        mine.set = cur.s; mine.stage = cur.g; save();
        paintAll();
        root.scrollIntoView({ block: "start", behavior: reduceMotion() ? "auto" : "smooth" });
      });
      foot.appendChild(tally); foot.appendChild(nextBtn);
      panel.appendChild(foot);

      var note = el("p", "sim-note", esc(projectLine()) + " " + esc(T("privacy")));
      panel.appendChild(note);

      /* the context object every stage gets */
      var ctx = {
        host: body,
        el: el, esc: esc, num: num, L: L, T: T, clamp: clamp,
        plot: plot, track: track, anim: anim, sliders: sliders, ask: ask,
        cvar: cvar, reduceMotion: reduceMotion,
        lang: pageLang(),
        say: function (msg) { tally.textContent = typeof msg === "string" ? msg : L(msg); },
        /* a stage calls done() when its goal is met */
        done: function (info) {
          finishStage(cur.s, cur.g, info || {});
          tally.textContent = T("doneStage") +
            (info && info.ms ? "  " + T("yourTime") + " " + num(info.ms / 1000, 1) + "s" : "");
          if (lastStage && lastSet) tally.textContent = T("doneAll");
          else { nextBtn.hidden = false; nextBtn.focus(); }
          paintTabs();
        },
        alreadyDone: isDone(cur.s, cur.g)
      };
      if (ctx.alreadyDone) { nextBtn.hidden = lastStage && lastSet; tally.textContent = T("doneStage"); }

      try { st.build(ctx); }
      catch (e) {
        body.innerHTML = "<p class='sim-fb no'>" + esc(String(e && e.message || e)) + "</p>";
        if (window.console) console.error("[stem-sim]", cfg.id, st.id, e);
      }

      /* A repainted panel is all new nodes, so BOTH word layers have to be
         run over it again — the tap-to-translate helper words and the
         notebook's own data-v words. Without the second call every stage
         after the first had inert vocabulary. */
      if (window.STEMTAP && window.STEMTAP.decorate) window.STEMTAP.decorate(panel);
      if (window.STEMVOCAB && window.STEMVOCAB.decorate) window.STEMVOCAB.decorate(panel);
    }

    function paintAll() { paintSets(); paintTabs(); paintPanel(); }
    paintAll();

    /* graphs are sized to their box, so a rotation needs a redraw */
    var rzT = null;
    window.addEventListener("resize", function () {
      if (rzT) clearTimeout(rzT);
      rzT = setTimeout(function () { rzT = null; paintPanel(); }, 220);
    });

    /* re-tint the graphs when the OS theme flips under us */
    try {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onFlip = function () { paintPanel(); };
      if (mq.addEventListener) mq.addEventListener("change", onFlip);
      else if (mq.addListener) mq.addListener(onFlip);
    } catch (e) {}

    return { repaint: paintAll, state: function () { return mine; } };
  }

  window.STEMSIM = {
    mount: mount,
    plot: plot, track: track, anim: anim, sliders: sliders, ask: ask,
    num: num, fix: fix, esc: esc, L: L, T: T, cvar: cvar, clamp: clamp,
    parseNum: parseNum, near: near, reduceMotion: reduceMotion,
    /* the mover colours every sim shares, so a bike is the same colour everywhere */
    colors: function () {
      return {
        a: cvar("--sim-a", "#0d7a70"),
        b: cvar("--sim-b", "#b0592f"),
        c: cvar("--sim-c", "#4a5aa8"),
        d: cvar("--sim-d", "#6b7075")
      };
    }
  };
})();
