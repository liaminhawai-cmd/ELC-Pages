/* ============================================================
   ELC STEM hub v2 — the question bank (QBANK)
   ------------------------------------------------------------
   Every skill on stem-skills.html is powered by a GENERATOR
   registered here: same skill, fresh clean numbers every run.

   QBANK.register({
     id: "<skillId from stem-shared.js>",
     teach: { what: HTML,               // 2-3 plain-EAL sentences
              how: [step, step, ...] }, // the method, numbered by the UI
     hint: "one-line reminder shown in guided mode",
     gen(rng) -> ONE of:
       { qHTML, svg?, inputs:[{k, label, place?, check(v)->bool, answer}], workedHTML }
       { qHTML, svg?, opts:{list:[str...], a:str}, workedHTML }   // MCQ (UI shuffles)
     Generators MUST be pure functions of rng (no Date/Math.random)
     and MUST produce clean numbers (integers/halves unless noted).

   QBANK.gen(id, seed?) -> instance · QBANK.teach(id) · QBANK.list()
   QBANK.audit(n) runs every generator n times and validates shape,
   answer-in-options, and check(answer)===true — run it in the console
   after editing anything here.
   ------------------------------------------------------------
   The genetics + pandemic generators live in stem-questions-bio.js
   (loaded after this file; it calls the same QBANK.register).
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- seeded rng ---------------- */
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function makeRng(seed) {
    var f = mulberry32(seed);
    var rng = {
      raw: f,
      ri: function (a, b) { return a + Math.floor(f() * (b - a + 1)); },
      pick: function (arr) { return arr[Math.floor(f() * arr.length)]; },
      shuffle: function (arr) {
        arr = arr.slice();
        for (var i = arr.length - 1; i > 0; i--) {
          var j = Math.floor(f() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
        return arr;
      }
    };
    return rng;
  }

  /* ---------------- formatting + parsing ---------------- */
  function fmt(n) {
    if (Number.isInteger(n)) return String(n);
    return (Math.round(n * 100) / 100).toString();
  }
  function eqStr(m, c) {
    var s = "y = ";
    if (m === 0) return s + fmt(c);
    if (m === 1) s += "x"; else if (m === -1) s += "−x"; else s += fmt(m) + "x";
    if (c > 0) s += " + " + fmt(c); else if (c < 0) s += " − " + fmt(Math.abs(c));
    return s;
  }
  function near(a, b, tol) { return Math.abs(a - b) <= (tol === undefined ? 0.02 : tol); }
  function num(str) {
    if (str == null) return NaN;
    str = String(str).replace(/−/g, "-").replace(/\s+/g, "")
      .replace(/^\+-/, "-").replace(/^-\+/, "-").replace(/^\+/, "");
    if (!str) return NaN;
    var m = str.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    if (!/^-?\d+(?:\.\d+)?$/.test(str)) return NaN;
    return parseFloat(str);
  }
  function parseEq(str) {
    if (!str) return null;
    var s = String(str).toLowerCase().replace(/−/g, "-").replace(/\s+/g, "");
    var mm = s.match(/^y=(.*)$/); if (mm) s = mm[1];
    if (!s) return null;
    var m = 0, c = 0;
    var xm = s.match(/^([+-]?(?:\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)?)x/);
    if (xm) {
      var coef = xm[1];
      if (coef === "" || coef === "+") m = 1;
      else if (coef === "-") m = -1;
      else m = num(coef);
      s = s.slice(xm[0].length);
      var dm = s.match(/^\/(\d+(?:\.\d+)?)/);
      if (dm) { var den = parseFloat(dm[1]); if (!den) return null; m = m / den; s = s.slice(dm[0].length); }
      if (s) { if (!/^[+-]/.test(s)) return null; c = num(s); }
    } else { c = num(s); if (isNaN(c)) return null; }
    if (isNaN(m) || isNaN(c)) return null;
    return { m: m, c: c };
  }
  function parseCoord(str) {
    var mm = String(str || "").replace(/−/g, "-")
      .match(/\(?\s*(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)\s*\)?/);
    return mm ? { x: parseFloat(mm[1]), y: parseFloat(mm[2]) } : null;
  }

  /* ---------------- SVG helpers (sketch-matched look) ---------------- */
  var R = 6, STEP = 24, PAD = 18;
  function X(x) { return PAD + (x + R) * STEP; }
  function Y(y) { return PAD + (R - y) * STEP; }
  function grid(inner) {
    var size = PAD * 2 + 2 * R * STEP, g = "<svg class='qb-graph' viewBox='0 0 " + size + " " + size + "' role='img'>";
    for (var i = -R; i <= R; i++) {
      g += "<line x1='" + X(i) + "' y1='" + Y(-R) + "' x2='" + X(i) + "' y2='" + Y(R) + "' stroke='var(--hair,#e6e7e3)' stroke-width='1'/>";
      g += "<line x1='" + X(-R) + "' y1='" + Y(i) + "' x2='" + X(R) + "' y2='" + Y(i) + "' stroke='var(--hair,#e6e7e3)' stroke-width='1'/>";
    }
    g += "<line x1='" + X(-R) + "' y1='" + Y(0) + "' x2='" + X(R) + "' y2='" + Y(0) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    g += "<line x1='" + X(0) + "' y1='" + Y(-R) + "' x2='" + X(0) + "' y2='" + Y(R) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    for (var t = -R; t <= R; t += 2) if (t !== 0) {
      g += "<text x='" + X(t) + "' y='" + (Y(0) + 13) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='middle'>" + t + "</text>";
      g += "<text x='" + (X(0) - 5) + "' y='" + (Y(t) + 3) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='end'>" + t + "</text>";
    }
    return g + inner + "</svg>";
  }
  function lineSeg(m, c, color) {
    var pts = [];
    function add(x, y) { if (x >= -R - 1e-9 && x <= R + 1e-9 && y >= -R - 1e-9 && y <= R + 1e-9) pts.push([x, y]); }
    add(-R, m * -R + c); add(R, m * R + c);
    if (m !== 0) { add((-R - c) / m, -R); add((R - c) / m, R); }
    pts.sort(function (a, b) { return a[0] - b[0]; });
    if (pts.length < 2) return "";
    var a = pts[0], b = pts[pts.length - 1];
    return "<line x1='" + X(a[0]) + "' y1='" + Y(a[1]) + "' x2='" + X(b[0]) + "' y2='" + Y(b[1]) + "' stroke='" + (color || "var(--accent,#0d7a70)") + "' stroke-width='2.5'/>";
  }
  function dot(x, y, color) {
    return "<circle cx='" + X(x) + "' cy='" + Y(y) + "' r='4.5' fill='" + (color || "var(--accent,#0d7a70)") + "'/>";
  }
  /* small time-position chart for motion questions: segs = [{dt, dy}] starting at (0,0),
     axes labelled t (min) horizontal 0..tMax and position (km/m) vertical 0..yMax */
  function motionChart(segs, tMax, yMax, unitY, unitT) {
    var W = 320, H = 220, P = 34;
    function mx(t) { return P + (W - P - 10) * t / tMax; }
    function my(y) { return H - P - (H - P - 16) * y / yMax; }
    var g = "<svg class='qb-graph' viewBox='0 0 " + W + " " + H + "' role='img'>";
    for (var yt = 0; yt <= yMax; yt++) g += "<line x1='" + mx(0) + "' y1='" + my(yt) + "' x2='" + mx(tMax) + "' y2='" + my(yt) + "' stroke='var(--hair,#e6e7e3)'/>";
    for (var tt = 0; tt <= tMax; tt += Math.max(1, Math.round(tMax / 10))) g += "<line x1='" + mx(tt) + "' y1='" + my(0) + "' x2='" + mx(tt) + "' y2='" + my(yMax) + "' stroke='var(--hair,#e6e7e3)'/>";
    g += "<line x1='" + mx(0) + "' y1='" + my(0) + "' x2='" + mx(tMax) + "' y2='" + my(0) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    g += "<line x1='" + mx(0) + "' y1='" + my(0) + "' x2='" + mx(0) + "' y2='" + my(yMax) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    var t = 0, y = 0, labels = "ABCDEF";
    for (var i = 0; i < segs.length; i++) {
      var t2 = t + segs[i].dt, y2 = y + segs[i].dy;
      g += "<line x1='" + mx(t) + "' y1='" + my(y) + "' x2='" + mx(t2) + "' y2='" + my(y2) + "' stroke='var(--accent,#0d7a70)' stroke-width='2.5'/>";
      g += "<text x='" + ((mx(t) + mx(t2)) / 2) + "' y='" + (my((y + y2) / 2) - 7) + "' font-size='10' font-weight='700' fill='var(--ink,#212427)' text-anchor='middle'>" + labels[i] + "</text>";
      t = t2; y = y2;
    }
    for (var yt2 = 0; yt2 <= yMax; yt2 += Math.max(1, Math.round(yMax / 5))) g += "<text x='" + (mx(0) - 5) + "' y='" + (my(yt2) + 3) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='end'>" + yt2 + "</text>";
    for (var tt2 = 0; tt2 <= tMax; tt2 += Math.max(2, Math.round(tMax / 5))) g += "<text x='" + mx(tt2) + "' y='" + (my(0) + 12) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='middle'>" + tt2 + "</text>";
    g += "<text x='" + (W - 8) + "' y='" + (my(0) + 12) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='end'>" + (unitT || "t (min)") + "</text>";
    g += "<text x='" + (mx(0) + 4) + "' y='12' font-size='9' fill='var(--muted,#767b7f)'>" + (unitY || "position (km)") + "</text>";
    return g + "</svg>";
  }

  function numInput(k, label, answer, tol) {
    return { k: k, label: label, answer: fmt(answer),
             check: function (v) { return near(num(v), answer, tol === undefined ? 0.02 : tol); } };
  }

  /* ---------------- registry ---------------- */
  var REG = {};
  var seedCounter = 1;
  function register(def) {
    if (!def || !def.id || typeof def.gen !== "function") throw new Error("bad generator def");
    REG[def.id] = def;
  }
  function gen(id, seed) {
    var def = REG[id]; if (!def) return null;
    if (seed === undefined) seed = (seedCounter++ * 2654435761 ^ (typeof performance !== "undefined" ? Math.floor(performance.now() * 1000) : 0)) >>> 0;
    return def.gen(makeRng(seed));
  }
  function teach(id) { var d = REG[id]; return d ? d.teach : null; }
  function hint(id) { var d = REG[id]; return d ? (d.hint || "") : ""; }
  function list() { return Object.keys(REG); }
  function audit(n) {
    n = n || 200;
    var bad = [];
    Object.keys(REG).forEach(function (id) {
      for (var i = 0; i < n; i++) {
        try {
          var q = REG[id].gen(makeRng(i + 1));
          if (!q || !q.qHTML || !q.workedHTML) { bad.push(id + "#" + i + ": missing fields"); break; }
          if (q.opts) {
            if (q.opts.list.indexOf(q.opts.a) === -1) { bad.push(id + "#" + i + ": answer not in options"); break; }
            var set = {}; var dup = false;
            q.opts.list.forEach(function (o) { if (set[o]) dup = true; set[o] = 1; });
            if (dup) { bad.push(id + "#" + i + ": duplicate options"); break; }
          } else if (q.inputs) {
            for (var j = 0; j < q.inputs.length; j++) {
              if (!q.inputs[j].check(q.inputs[j].answer)) { bad.push(id + "#" + i + ": check rejects own answer (" + q.inputs[j].k + ")"); break; }
            }
          } else { bad.push(id + "#" + i + ": neither inputs nor opts"); break; }
        } catch (e) { bad.push(id + "#" + i + ": threw " + e.message); break; }
      }
    });
    return { generators: Object.keys(REG).length, problems: bad };
  }

  window.QBANK = { register: register, gen: gen, teach: teach, hint: hint, list: list, audit: audit,
                   util: { fmt: fmt, eqStr: eqStr, near: near, num: num, parseEq: parseEq,
                           parseCoord: parseCoord, grid: grid, lineSeg: lineSeg, dot: dot,
                           motionChart: motionChart, numInput: numInput, makeRng: makeRng } };

  /* ============================================================
     FOUNDATIONS
     ============================================================ */
  register({
    id: "f_mult",
    teach: { what: "Multiplication facts are the gears inside every other skill. Fast facts leave your brain free for the new idea.",
      how: ["If you're stuck, build from a fact you know: 7 × 8 = 7 × 4 doubled.",
            "Say the whole fact, not just the answer: seven eights are fifty-six.",
            "Accuracy first. Speed comes from correct repeats."] },
    hint: "Build from a fact you know and double or halve.",
    gen: function (rng) {
      var a = rng.ri(3, 12), b = rng.ri(3, 12);
      return { qHTML: "What is <b>" + a + " × " + b + "</b>?",
        inputs: [numInput("p", a + " × " + b + " =", a * b, 0.001)],
        workedHTML: a + " × " + b + " = <b>" + (a * b) + "</b>." + (a !== b ? " (Same as " + b + " × " + a + ".)" : "") };
    }
  });

  register({
    id: "f_squares",
    teach: { what: "A square number is a number times itself: 7² = 7 × 7 = 49. A square root undoes it: √49 = 7.",
      how: ["Learn the squares to 15² — they repay you in Pythagoras and area.",
            "√ of a perfect square: ask 'what times itself makes this?'",
            "For other numbers, trap the root between two whole numbers."] },
    hint: "² means times itself; √ asks what times itself makes this.",
    gen: function (rng) {
      if (rng.raw() < 0.5) {
        var n = rng.ri(4, 15);
        return { qHTML: "What is <b>" + n + "²</b>? (no calculator)",
          inputs: [numInput("s", n + "² =", n * n, 0.001)],
          workedHTML: n + "² = " + n + " × " + n + " = <b>" + (n * n) + "</b>." };
      }
      var r = rng.ri(4, 15);
      return { qHTML: "What is <b>√" + (r * r) + "</b>? (no calculator)",
        inputs: [numInput("r", "√" + (r * r) + " =", r, 0.001)],
        workedHTML: r + " × " + r + " = " + (r * r) + ", so √" + (r * r) + " = <b>" + r + "</b>." };
    }
  });

  register({
    id: "f_convert",
    teach: { what: "Converting units is multiplying or dividing by the right factor. The units tell you which way: going to a smaller unit means more of them.",
      how: ["Write the chain: km → m is × 1000; m → cm is × 100; min → s is × 60.",
            "Speed: km/h → m/s is ÷ 3.6 (because 1000 m ÷ 3600 s).",
            "Check the direction: 2 km should become a BIGGER number of metres."] },
    hint: "Smaller unit → bigger number. km/h ÷ 3.6 = m/s.",
    gen: function (rng) {
      var type = rng.pick(["len1", "len2", "time", "speed"]);
      if (type === "len1") { var km = rng.pick([0.5, 1.5, 2, 2.5, 3, 4, 6, 7.5]);
        return { qHTML: "Convert <b>" + fmt(km) + " km</b> to metres.",
          inputs: [numInput("v", fmt(km) + " km = ? m", km * 1000, 0.5)],
          workedHTML: fmt(km) + " km × 1000 = <b>" + fmt(km * 1000) + " m</b> — smaller unit, bigger number." }; }
      if (type === "len2") { var cm = rng.pick([150, 240, 320, 450, 780, 905]);
        return { qHTML: "Convert <b>" + cm + " cm</b> to metres.",
          inputs: [numInput("v", cm + " cm = ? m", cm / 100, 0.005)],
          workedHTML: cm + " cm ÷ 100 = <b>" + fmt(cm / 100) + " m</b> — bigger unit, smaller number." }; }
      if (type === "time") { var mins = rng.pick([2.5, 3, 4.5, 6, 7.5, 12]);
        return { qHTML: "Convert <b>" + fmt(mins) + " minutes</b> to seconds.",
          inputs: [numInput("v", fmt(mins) + " min = ? s", mins * 60, 0.5)],
          workedHTML: fmt(mins) + " × 60 = <b>" + fmt(mins * 60) + " s</b>." }; }
      var kmh = rng.pick([18, 36, 54, 72, 90, 108]);
      return { qHTML: "Convert <b>" + kmh + " km/h</b> to m/s.",
        inputs: [numInput("v", kmh + " km/h = ? m/s", kmh / 3.6, 0.05)],
        workedHTML: kmh + " ÷ 3.6 = <b>" + fmt(kmh / 3.6) + " m/s</b> (1 km/h = 1000 m per 3600 s)." };
    }
  });

  register({
    id: "f_symbols",
    teach: { what: "Maths writes with symbols so questions stay short. Reading them aloud in words unlocks the question.",
      how: ["≤ at most · ≥ at least · ≠ not equal · ≈ approximately.",
            "± plus or minus · √ square root · ² squared · π pi (≈ 3.14).",
            "Say the whole line in words before you calculate anything."] },
    hint: "Say the symbol in words first.",
    gen: function (rng) {
      var bank = [
        ["≤", "less than or equal to (at most)"], ["≥", "greater than or equal to (at least)"],
        ["≠", "not equal to"], ["≈", "approximately equal to"], ["±", "plus or minus"],
        ["√", "the square root of"], ["x²", "x squared (x times itself)"], ["π", "pi — about 3.14"],
        ["<", "less than"], [">", "greater than"], ["Δ", "the change in"], ["∴", "therefore"]
      ];
      var pickN = rng.shuffle(bank).slice(0, 4);
      var target = pickN[rng.ri(0, 3)];
      return { qHTML: "Which symbol means “<b>" + target[1] + "</b>”?",
        opts: { list: pickN.map(function (p) { return p[0]; }), a: target[0] },
        workedHTML: "<b>" + target[0] + "</b> means " + target[1] + "." };
    }
  });

  /* ============================================================
     KINEMATICS · LINEAR GRAPHS
     ============================================================ */
  register({
    id: "k_coords",
    teach: { what: "A coordinate (x, y) is an address: x steps across from the origin, then y steps up. The axes are the two number lines the graph hangs on.",
      how: ["Start at the origin (0, 0), where the axes cross.",
            "Read ACROSS first (x), then UP or DOWN (y).",
            "Write the address in brackets, x first: (3, −2)."] },
    hint: "Across first, then up. (x, y).",
    gen: function (rng) {
      var x = rng.ri(-5, 5), y = rng.ri(-5, 5);
      while (x === 0 && y === 0) { x = rng.ri(-5, 5); y = rng.ri(-5, 5); }
      return { qHTML: "Write the coordinate of the marked point.",
        svg: grid(dot(x, y)),
        inputs: [{ k: "pt", label: "point:", place: "(x, y)", answer: "(" + x + ", " + y + ")",
          check: function (v) { var p = parseCoord(v); return !!p && near(p.x, x, .01) && near(p.y, y, .01); } }],
        workedHTML: "From the origin: " + Math.abs(x) + " " + (x >= 0 ? "right" : "left") + ", then " + Math.abs(y) + " " + (y >= 0 ? "up" : "down") + " → <b>(" + x + ", " + y + ")</b>." };
    }
  });

  register({
    id: "k_table",
    teach: { what: "Substitution means putting a number in place of the letter. A table of values is the same substitution done five times.",
      how: ["Write the rule: y = m × x + c.",
            "Replace x with the column's number — brackets around negatives.",
            "Multiply first, then add. One column at a time."] },
    hint: "y = m × x + c. Multiply first, then add. Watch the negatives.",
    gen: function (rng) {
      var m = rng.pick([-3, -2, -1, 2, 3, 4]), c = rng.ri(-5, 5);
      var xs = [-2, -1, 0, 1, 2];
      var q = "Complete the table for <b>" + eqStr(m, c) + "</b>.<table class='qb-table'><tr><th>x</th>";
      xs.forEach(function (x) { q += "<td>" + x + "</td>"; });
      q += "</tr><tr><th>y</th>";
      xs.forEach(function (x, i) { q += "<td data-slot='y" + i + "'></td>"; });
      q += "</tr></table>";
      return { qHTML: q,
        inputs: xs.map(function (x, i) { return numInput("y" + i, "y when x = " + x, m * x + c, 0.001); }),
        workedHTML: "Working for x = −2: y = " + fmt(m) + " × (−2) " + (c >= 0 ? "+ " + c : "− " + Math.abs(c)) + " = <b>" + fmt(m * -2 + c) + "</b>. All columns: " +
          xs.map(function (x) { return "x=" + x + " → " + fmt(m * x + c); }).join(", ") + "." };
    }
  });

  register({
    id: "k_grad_graph",
    teach: { what: "The gradient says how steep a line is: how far UP for every step ACROSS. Down-to-the-right means a negative gradient.",
      how: ["Pick two points where the line crosses grid corners.",
            "rise = how far up between them (negative if down).",
            "run = how far right. gradient m = rise ÷ run."] },
    hint: "m = rise ÷ run between two grid points.",
    gen: function (rng) {
      var run = rng.pick([1, 2, 3, 4]), rise = rng.pick([-4, -3, -2, -1, 1, 2, 3, 4]);
      var m = rise / run;
      var x1 = rng.ri(-3, 0), y1 = rng.ri(-3, 3), y2 = y1 + rise, x2 = x1 + run;
      var guard = 0;
      while (Math.abs(y2) > 5 && guard++ < 20) { y1 = rng.ri(-3, 3); y2 = y1 + rise; }
      var c = y1 - m * x1;
      return { qHTML: "The line passes through the two marked points. Find the gradient.",
        svg: grid(lineSeg(m, c) + dot(x1, y1) + dot(x2, y2)),
        inputs: [
          { k: "rise", label: "rise =", answer: fmt(rise), check: function (v) { return !isNaN(num(v)); } },
          { k: "run", label: "run =", answer: fmt(run), check: function (v) { return !isNaN(num(v)) && num(v) !== 0; } },
          { k: "m", label: "m =", answer: fmt(m), check: function (v) { return near(num(v), m); } }
        ],
        crossCheck: function (vals) {  /* any consistent rise/run pair counts */
          var r = num(vals.rise), rn = num(vals.run), mv = num(vals.m);
          return !isNaN(r) && !isNaN(rn) && rn !== 0 && near(r / rn, m) && near(mv, m);
        },
        workedHTML: "From (" + x1 + ", " + fmt(y1) + ") to (" + x2 + ", " + fmt(y2) + "): rise = " + fmt(rise) + ", run = " + run + ". m = " + fmt(rise) + " ÷ " + run + " = <b>" + fmt(m) + "</b>." };
    }
  });

  register({
    id: "k_grad_pts",
    teach: { what: "With two coordinates you don't need the picture: subtract the y's, subtract the x's — in the same order — and divide.",
      how: ["Label the points (x₁, y₁) and (x₂, y₂).",
            "m = (y₂ − y₁) ÷ (x₂ − x₁) — same order top and bottom.",
            "Check the sign: line going down as x grows → m is negative."] },
    hint: "m = (y₂ − y₁) ÷ (x₂ − x₁), same order on top and bottom.",
    gen: function (rng) {
      var m = rng.pick([-3, -2, -1, -0.5, 0.5, 1, 2, 3]), c = rng.ri(-5, 5);
      var x1 = rng.ri(-6, -1), x2 = rng.ri(1, 6);
      if (m === 0.5 || m === -0.5) { x1 = rng.pick([-6, -4, -2]); x2 = rng.pick([2, 4, 6]); }
      var y1 = m * x1 + c, y2 = m * x2 + c;
      var pf = function (n) { return n < 0 ? "(−" + fmt(Math.abs(n)) + ")" : fmt(n); };
      return { qHTML: "A line joins <b>(" + x1 + ", " + fmt(y1) + ")</b> and <b>(" + x2 + ", " + fmt(y2) + ")</b>. Find the gradient.",
        inputs: [{ k: "m", label: "m =", answer: fmt(m), check: function (v) { return near(num(v), m); } }],
        workedHTML: "m = (" + fmt(y2) + " − " + pf(y1) + ") ÷ (" + x2 + " − " + pf(x1) + ") = " + fmt(y2 - y1) + " ÷ " + fmt(x2 - x1) + " = <b>" + fmt(m) + "</b>." };
    }
  });

  register({
    id: "k_yint",
    teach: { what: "The y-intercept is where the line catches the y-axis — the value of y when x = 0. You can READ it from a graph (the physics way) or CALCULATE it by substituting a point into y = mx + c (the maths way).",
      how: ["Reading: find where the line crosses the y-axis; c is that y-value.",
            "Calculating: put a known point and m into y = mx + c.",
            "Solve for c, then check with the other point if you have one."] },
    hint: "c = y − m×x for any point on the line.",
    gen: function (rng) {
      if (rng.raw() < 0.5) {
        var m1 = rng.pick([-3, -2, -1, 1, 2, 3]), c1 = rng.ri(-4, 4);
        return { qHTML: "Read the y-intercept of this line.",
          svg: grid(lineSeg(m1, c1) + dot(0, c1, "var(--alert,#b0592f)")),
          inputs: [numInput("c", "c =", c1, 0.01)],
          workedHTML: "The line catches the y-axis at (0, " + fmt(c1) + "), so c = <b>" + fmt(c1) + "</b>." };
      }
      var m = rng.pick([-3, -2, 2, 3, 4]), c = rng.ri(-6, 6), px = rng.ri(1, 5);
      var py = m * px + c;
      return { qHTML: "A line with gradient <b>" + fmt(m) + "</b> passes through <b>(" + px + ", " + fmt(py) + ")</b>. Calculate the y-intercept c.",
        inputs: [numInput("c", "c =", c, 0.01)],
        workedHTML: "Substitute into y = mx + c: " + fmt(py) + " = " + fmt(m) + " × " + px + " + c, so c = " + fmt(py) + " − " + fmt(m * px) + " = <b>" + fmt(c) + "</b>." };
    }
  });

  register({
    id: "k_eq",
    teach: { what: "Every straight line is y = mx + c. Find m (the gradient) and c (the y-intercept) and you have the whole line in five symbols.",
      how: ["STEP 1 — gradient from two points: m = (y₂ − y₁) ÷ (x₂ − x₁).",
            "STEP 2 — substitute ONE point into y = mx + c.",
            "STEP 3 — solve for c.", "STEP 4 — write y = mx + c with your numbers."] },
    hint: "Four steps: m from two points → substitute a point → solve c → write the equation.",
    gen: function (rng) {
      var m = rng.pick([-3, -2, -1, -0.5, 0.5, 1, 2, 3]), c = rng.ri(-5, 5);
      var x1 = rng.ri(-4, -1), x2 = rng.ri(1, 4);
      if (m === 0.5 || m === -0.5) { x1 = rng.pick([-4, -2]); x2 = rng.pick([2, 4]); }
      var y1 = m * x1 + c, y2 = m * x2 + c;
      var pf = function (n) { return n < 0 ? "(−" + fmt(Math.abs(n)) + ")" : fmt(n); };
      return { qHTML: "A line joins <b>(" + x1 + ", " + fmt(y1) + ")</b> and <b>(" + x2 + ", " + fmt(y2) + ")</b>. Find its equation.",
        inputs: [
          { k: "m", label: "m =", answer: fmt(m), check: function (v) { return near(num(v), m); } },
          { k: "c", label: "c =", answer: fmt(c), check: function (v) { return near(num(v), c); } },
          { k: "eq", label: "equation:", place: "y = ...", answer: eqStr(m, c),
            check: function (v) { var p = parseEq(v); return !!p && near(p.m, m) && near(p.c, c); } }
        ],
        workedHTML: "m = (" + fmt(y2) + " − " + pf(y1) + ") ÷ (" + x2 + " − " + pf(x1) + ") = <b>" + fmt(m) + "</b>. Substitute (" + x2 + ", " + fmt(y2) + "): " + fmt(y2) + " = " + fmt(m) + " × " + x2 + " + c → c = <b>" + fmt(c) + "</b>. Equation: <b>" + eqStr(m, c) + "</b>." };
    }
  });

  register({
    id: "k_sketch",
    teach: { what: "A sketch shows the line's character: where it catches the y-axis and which way it slopes. Two facts, one quick drawing.",
      how: ["Mark c on the y-axis first.",
            "m positive → up to the right ↗; m negative → down to the right ↘.",
            "From c, go right 1 and up (or down) m to get a second point."] },
    hint: "Mark c on the y-axis, then slope by m: right 1, up m.",
    gen: function (rng) {
      var m = rng.pick([-2, -1, 1, 2]), c = rng.pick([-3, -2, -1, 1, 2, 3]);
      var variants = [{ m: m, c: c, ok: true }, { m: -m, c: c }, { m: m, c: -c }, { m: -m, c: -c }];
      variants = rng.shuffle(variants);
      var labels = ["A", "B", "C", "D"], correct = "";
      var q = "Which sketch shows <b>" + eqStr(m, c) + "</b>?<div class='qb-minis'>";
      variants.forEach(function (v, i) {
        if (v.ok) correct = labels[i];
        q += "<figure><figcaption>" + labels[i] + "</figcaption>" + grid(lineSeg(v.m, v.c) + dot(0, v.c, "var(--alert,#b0592f)")) + "</figure>";
      });
      q += "</div>";
      return { qHTML: q, opts: { list: labels.slice(), a: correct },
        workedHTML: "c = " + fmt(c) + " → the line must catch the y-axis " + (c > 0 ? "ABOVE" : "BELOW") + " the origin. m = " + fmt(m) + " → it slopes " + (m > 0 ? "up ↗" : "down ↘") + ". Only <b>" + correct + "</b> does both." };
    }
  });

  register({
    id: "k_intersect",
    teach: { what: "The point of intersection is where two lines cross — the one coordinate that is true for both rules at once.",
      how: ["Find where the lines touch on the graph.",
            "Read across for x, up for y; write it as (x, y).",
            "Check by substituting the point into BOTH equations."] },
    hint: "Read the crossing point: across for x, up for y.",
    gen: function (rng) {
      var px = rng.ri(-3, 3), py = rng.ri(-3, 3);
      var m1 = rng.pick([-2, -1, 1, 2]), m2 = rng.pick([-3, -2, -1, 1, 2, 3]);
      var guard = 0;
      while (m2 === m1 && guard++ < 10) m2 = rng.pick([-3, -2, -1, 1, 2, 3]);
      if (m2 === m1) m2 = m1 === 1 ? 2 : 1;
      var c1 = py - m1 * px, c2 = py - m2 * px;
      return { qHTML: "State the point of intersection of the two lines.",
        svg: grid(lineSeg(m1, c1) + lineSeg(m2, c2, "var(--alert,#b0592f)")),
        inputs: [{ k: "pt", label: "point:", place: "(x, y)", answer: "(" + px + ", " + py + ")",
          check: function (v) { var p = parseCoord(v); return !!p && near(p.x, px, .01) && near(p.y, py, .01); } }],
        workedHTML: "The lines cross once, at <b>(" + px + ", " + py + ")</b>. Check line 1: y = " + fmt(m1) + " × (" + px + ") " + (c1 >= 0 ? "+ " + fmt(c1) : "− " + fmt(Math.abs(c1))) + " = " + fmt(m1 * px + c1) + " ✓." };
    }
  });

  register({
    id: "k_simult",
    teach: { what: "Algebra finds the crossing point without the picture: at the intersection both rules give the same y, so set them equal.",
      how: ["Write m₁x + c₁ = m₂x + c₂.",
            "Collect the x's on one side, numbers on the other.",
            "Solve for x, then substitute back to get y. Check in the OTHER equation."] },
    hint: "Set the two rules equal, solve for x, substitute back for y.",
    gen: function (rng) {
      var px = rng.ri(-4, 4), py = rng.ri(-4, 4);
      var m1 = rng.pick([-3, -2, -1, 1, 2, 3]), m2 = rng.pick([-3, -2, -1, 1, 2, 3]);
      var guard = 0;
      while (m2 === m1 && guard++ < 10) m2 = rng.pick([-3, -2, -1, 1, 2, 3]);
      if (m2 === m1) m2 = m1 === 1 ? -1 : 1;
      var c1 = py - m1 * px, c2 = py - m2 * px;
      return { qHTML: "Find the point of intersection of <b>" + eqStr(m1, c1) + "</b> and <b>" + eqStr(m2, c2) + "</b> using algebra.",
        inputs: [numInput("x", "x =", px, 0.01), numInput("y", "y =", py, 0.01)],
        workedHTML: "Set equal: " + fmt(m1) + "x " + (c1 >= 0 ? "+ " + fmt(c1) : "− " + fmt(Math.abs(c1))) + " = " + fmt(m2) + "x " + (c2 >= 0 ? "+ " + fmt(c2) : "− " + fmt(Math.abs(c2))) + " → " + fmt(m1 - m2) + "x = " + fmt(c2 - c1) + " → x = <b>" + fmt(px) + "</b>. Then y = " + fmt(m1) + " × " + pf(px) + " " + (c1 >= 0 ? "+ " + fmt(c1) : "− " + fmt(Math.abs(c1))) + " = <b>" + fmt(py) + "</b>." };
      function pf(n) { return n < 0 ? "(−" + fmt(Math.abs(n)) + ")" : fmt(n); }
    }
  });

  /* ============================================================
     KINEMATICS · MOTION & GRAPHS
     ============================================================ */
  register({
    id: "s_vectors",
    teach: { what: "Distance counts every metre travelled. Displacement is start-to-finish in a straight line, WITH direction — it can even be zero. Speed uses distance; velocity uses displacement.",
      how: ["Distance: add every leg of the journey.",
            "Displacement: forward legs minus backward legs, plus a direction.",
            "Average speed = total distance ÷ time. Average velocity = displacement ÷ time."] },
    hint: "Distance adds every leg; displacement is start-to-finish with direction.",
    gen: function (rng) {
      var a = rng.ri(3, 9), b = rng.ri(1, a - 1); /* a east, b west, a>b */
      var kind = rng.pick(["dist", "disp", "avg"]);
      var story = "A tram travels <b>" + a + " km east</b>, then <b>" + b + " km west</b>.";
      if (kind === "dist") {
        return { qHTML: story + " What <b>distance</b> has it travelled?",
          inputs: [numInput("d", "distance (km) =", a + b, 0.01)],
          workedHTML: "Distance counts every kilometre: " + a + " + " + b + " = <b>" + (a + b) + " km</b>." };
      }
      if (kind === "disp") {
        var opts = [(a - b) + " km east", (a + b) + " km", (a - b) + " km west", (a + b) + " km east"];
        return { qHTML: story + " What is its <b>displacement</b>?",
          opts: { list: opts, a: (a - b) + " km east" },
          workedHTML: "Start to finish: " + a + " − " + b + " = " + (a - b) + " km, still east of the start → <b>" + (a - b) + " km east</b>. Displacement keeps its direction." };
      }
      var t = rng.pick([1, 2]);  /* hours, keeps division clean when a+b even */
      if ((a + b) % 2 === 1) t = 1;
      return { qHTML: story + " The trip takes <b>" + t + " hour" + (t > 1 ? "s" : "") + "</b>. What is its <b>average speed</b> in km/h?",
        inputs: [numInput("s", "average speed (km/h) =", (a + b) / t, 0.01)],
        workedHTML: "Average speed = total distance ÷ time = " + (a + b) + " ÷ " + t + " = <b>" + fmt((a + b) / t) + " km/h</b>. (Average velocity would use the displacement, " + (a - b) + " km east.)" };
    }
  });

  register({
    id: "s_ptgraph",
    teach: { what: "On a position-time graph, the GRADIENT of each section is the velocity. Steep = fast. Flat = at rest. Sloping down = coming back.",
      how: ["Read one section at a time (A, B, C…).",
            "velocity = change in position ÷ change in time for that section.",
            "Flat piece: position isn't changing — the object is at rest."] },
    hint: "Section gradient = velocity. Flat = at rest.",
    gen: function (rng) {
      /* three segments: go, rest, go (sometimes back) */
      var v1 = rng.pick([1, 2]), t1 = rng.pick([2, 3, 4]);
      var tRest = rng.pick([2, 3]);
      var back = rng.raw() < 0.35;
      var v3 = rng.pick([1, 2]), t3 = rng.pick([2, 3]);
      var y1 = v1 * t1;
      var dy3 = (back ? -1 : 1) * v3 * t3;
      if (back && y1 + dy3 < 0) { dy3 = -y1; t3 = Math.round(y1 / v3) || 1; dy3 = -v3 * t3; if (y1 + dy3 < 0) { back = false; dy3 = v3 * t3; } }
      var segs = [{ dt: t1, dy: y1 }, { dt: tRest, dy: 0 }, { dt: t3, dy: dy3 }];
      var tMax = t1 + tRest + t3, yMax = Math.max(y1, y1 + Math.max(0, dy3)) + 1;
      var svg = motionChart(segs, tMax, yMax, "position (km)", "t (min)");
      var kind = rng.pick(["vA", "rest", "dist"]);
      if (kind === "vA") {
        return { qHTML: "The graph shows a journey. What is the <b>velocity in section A</b>, in km per minute?",
          svg: svg, inputs: [numInput("v", "velocity in A (km/min) =", v1, 0.01)],
          workedHTML: "Section A climbs " + y1 + " km in " + t1 + " min → velocity = " + y1 + " ÷ " + t1 + " = <b>" + fmt(v1) + " km/min</b>." };
      }
      if (kind === "rest") {
        return { qHTML: "In which section is the traveller <b>at rest</b>?",
          svg: svg, opts: { list: ["A", "B", "C"], a: "B" },
          workedHTML: "Section <b>B</b> is flat — position doesn't change, so the traveller is at rest." };
      }
      var total = y1 + Math.abs(dy3);
      return { qHTML: "What <b>total distance</b> does the traveller cover in the whole journey?",
        svg: svg, inputs: [numInput("d", "total distance (km) =", total, 0.01)],
        workedHTML: "A: " + y1 + " km. B: 0 km (at rest). C: " + Math.abs(dy3) + " km" + (dy3 < 0 ? " (coming back still counts as distance)" : "") + ". Total = <b>" + total + " km</b>." };
    }
  });

  register({
    id: "s_story",
    teach: { what: "A worded journey and its graph say the same thing in two languages. Stops become flat pieces; faster legs become steeper pieces; coming home slopes back down to zero.",
      how: ["Break the story into legs: how long, how far, which direction.",
            "Each leg is one straight piece; stack them left to right.",
            "Check the ends: does the finish position match the story?"] },
    hint: "Stops are flat. Faster = steeper. Coming home slopes down to zero.",
    gen: function (rng) {
      var t1 = rng.pick([2, 3]), y1 = rng.pick([2, 3, 4]);
      var tR = rng.pick([2, 3]);
      var t3 = rng.pick([2, 3]);
      var story = "Anh cycles " + y1 + " km in " + t1 + " min, waits at the lights for " + tR + " min, then rides home, arriving after another " + t3 + " min.";
      var right = [{ dt: t1, dy: y1 }, { dt: tR, dy: 0 }, { dt: t3, dy: -y1 }];
      var w1 = [{ dt: t1, dy: y1 }, { dt: tR, dy: 0 }, { dt: t3, dy: y1 }];             /* keeps going */
      var w2 = [{ dt: t1, dy: y1 }, { dt: tR, dy: y1 }, { dt: t3, dy: -y1 }];          /* no real stop */
      var w3 = [{ dt: t1, dy: y1 }, { dt: tR, dy: 0 }, { dt: t3, dy: -Math.max(1, y1 - 1) }]; /* doesn't reach home */
      var yMax = 2 * y1 + 1;
      var variants = rng.shuffle([{ s: right, ok: true }, { s: w1 }, { s: w2 }, { s: w3 }]);
      var labels = ["A", "B", "C", "D"], correct = "";
      var q = story + "<br>Which graph tells this story?<div class='qb-minis'>";
      variants.forEach(function (v, i) {
        if (v.ok) correct = labels[i];
        q += "<figure><figcaption>" + labels[i] + "</figcaption>" + motionChart(v.s, t1 + tR + t3, yMax, "km", "min") + "</figure>";
      });
      q += "</div>";
      return { qHTML: q, opts: { list: labels.slice(), a: correct },
        workedHTML: "The story has three pieces: up to " + y1 + " km, FLAT for " + tR + " min (the stop), then back DOWN to zero (home). Only <b>" + correct + "</b> does all three." };
    }
  });

  /* ============================================================
     KINEMATICS · DATA & TRENDLINES
     ============================================================ */
  register({
    id: "s_variables",
    teach: { what: "The independent variable (IV) is what YOU change. The dependent variable (DV) is what you MEASURE. Everything else must stay the same — controlled — or the data can't be trusted.",
      how: ["Ask: what did the experimenter deliberately change? → IV.",
            "Ask: what number did they write down? → DV.",
            "List what must stay the same for a fair test → controlled."] },
    hint: "IV = what you change. DV = what you measure.",
    gen: function (rng) {
      var scenarios = [
        { s: "Mai drops a ball from different heights and times how long it takes to land.",
          iv: "the drop height", dv: "the time to land", ctrl: ["the same ball", "the same timer", "the same person timing"] },
        { s: "Hiro waters identical seedlings with different amounts of water and measures their height after two weeks.",
          iv: "the amount of water", dv: "the seedling height", ctrl: ["the same type of seedling", "the same sunlight", "the same soil"] },
        { s: "Amara tests how the number of tram stops changes her travel time to school on the same route.",
          iv: "the number of stops", dv: "the travel time", ctrl: ["the same route", "the same tram line", "leaving at the same time"] },
        { s: "Tom measures phone battery used after different minutes of video on the same phone.",
          iv: "the minutes of video", dv: "the battery used", ctrl: ["the same phone", "the same brightness", "the same app"] },
        { s: "Layla times how long water takes to boil with different amounts of water in the same kettle.",
          iv: "the amount of water", dv: "the time to boil", ctrl: ["the same kettle", "the same starting temperature", "the same power"] }
      ];
      var sc = rng.pick(scenarios);
      var ask = rng.pick(["iv", "dv", "ctrl"]);
      if (ask === "ctrl") {
        var notCtrl = rng.raw() < 0.5 ? sc.iv : sc.dv;
        var opts = rng.shuffle(sc.ctrl.slice(0, 3)).slice(0, 3); opts.push(notCtrl);
        return { qHTML: sc.s + "<br>Which of these is <b>NOT</b> a controlled variable in this experiment?",
          opts: { list: rng.shuffle(opts), a: notCtrl },
          workedHTML: "<b>" + notCtrl + "</b> is " + (notCtrl === sc.iv ? "the independent variable — it is deliberately changed" : "the dependent variable — it is what gets measured") + ". The others must stay the same for a fair test." };
      }
      var target = ask === "iv" ? sc.iv : sc.dv;
      var pool = [sc.iv, sc.dv].concat(sc.ctrl.slice(0, 2));
      return { qHTML: sc.s + "<br>What is the <b>" + (ask === "iv" ? "independent" : "dependent") + "</b> variable?",
        opts: { list: rng.shuffle(pool), a: target },
        workedHTML: (ask === "iv" ? "The experimenter deliberately changes <b>" + sc.iv + "</b> — that's the IV." :
          "The number written down is <b>" + sc.dv + "</b> — that's the DV.") };
    }
  });

  register({
    id: "s_lobf",
    teach: { what: "A line of best fit turns scattered data into a usable rule. Its equation lets you PREDICT a value you never measured — safest between your data points.",
      how: ["Draw the line through the middle of the cloud, balancing points above and below.",
            "Find its gradient and intercept like any line.",
            "Predict by substituting into the trendline equation."] },
    hint: "Substitute into the trendline equation to predict.",
    gen: function (rng) {
      var m = rng.pick([0.5, 1, 1.5, 2, 2.5]), c = rng.ri(1, 8);
      var x = rng.pick([4, 6, 8, 10]);
      var ctx = rng.pick([
        { s: "hours of practice", y: "test score", u: "marks" },
        { s: "minutes of sunshine", y: "temperature rise", u: "°C" },
        { s: "days of growth", y: "plant height", u: "cm" },
        { s: "km cycled", y: "energy used", u: "kJ" }
      ]);
      return { qHTML: "A class plotted <i>" + ctx.y + "</i> against <i>" + ctx.s + "</i>. The trendline is <b>y = " + fmt(m) + "x + " + fmt(c) + "</b>. Predict y when x = <b>" + x + "</b>.",
        inputs: [numInput("y", "predicted " + ctx.y + " (" + ctx.u + ") =", m * x + c, 0.01)],
        workedHTML: "Substitute x = " + x + ": y = " + fmt(m) + " × " + x + " + " + fmt(c) + " = <b>" + fmt(m * x + c) + " " + ctx.u + "</b>. (Prediction is safest between the measured points.)" };
    }
  });

  register({
    id: "s_corr",
    teach: { what: "Correlation describes the pattern in a scatterplot: which way it leans and how tight it is. R² measures tightness; r = √R², wearing the slope's sign.",
      how: ["Lean up to the right → positive. Down → negative.",
            "Tight cloud → strong; loose cloud → weak.",
            "r = √R², then give it the trendline's sign."] },
    hint: "r = √R², with the trendline's sign.",
    gen: function (rng) {
      var pairs = [[0.81, 0.9], [0.64, 0.8], [0.49, 0.7], [0.36, 0.6], [0.25, 0.5], [0.09, 0.3]];
      var p = rng.pick(pairs);
      var negSlope = rng.raw() < 0.5;
      var r = (negSlope ? -1 : 1) * p[1];
      return { qHTML: "A trendline has <b>R² = " + p[0] + "</b> and its gradient is <b>" + (negSlope ? "negative" : "positive") + "</b>. What is r?",
        inputs: [{ k: "r", label: "r =", answer: fmt(r), check: function (v) { return near(num(v), r, 0.01); } }],
        workedHTML: "√" + p[0] + " = " + p[1] + ". The slope is " + (negSlope ? "negative, so r = <b>−" + p[1] + "</b>" : "positive, so r = <b>" + p[1] + "</b>") + "." };
    }
  });

  register({
    id: "s_excel",
    teach: { what: "Excel draws the scatterplot, fits the trendline and reports R² for you — your job is to read what it says and choose the best model.",
      how: ["Insert → Scatter chart with your two columns.",
            "Right-click a point → Add Trendline → tick 'Display equation' and 'Display R-squared'.",
            "Higher R² (closer to 1) = the line explains the data better."] },
    hint: "Higher R² (closer to 1) = better fit.",
    gen: function (rng) {
      var vals = rng.shuffle([0.97, 0.85, 0.62, 0.31]);
      var bones = rng.shuffle(["femur", "tibia", "radius", "wingspan"]);
      var best = 0;
      for (var i = 1; i < 4; i++) if (vals[i] > vals[best]) best = i;
      var list = bones.map(function (b, i) { return b + " — R² = " + vals[i]; });
      return { qHTML: "Four trendlines predict height from different measurements:<br>" +
          list.join("<br>") + "<br>Which is the <b>best predictor</b> of height?",
        opts: { list: list.slice(), a: list[best] },
        workedHTML: "The R² closest to 1 explains the data best: <b>" + list[best] + "</b>. (This is exactly the Mystery Bones decision.)" };
    }
  });

})();
