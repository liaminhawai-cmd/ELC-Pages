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

  /* ---------------- SVG helpers · parabolas ----------------
     The same picture as grid(): 324 × 324, PAD 18, square STEP cells, every
     colour read from the same custom properties so dark mode follows. The one
     change a curve forces is that the y-window SLIDES — a parabola can have
     its turning point at y = −9 while its y-intercept sits at +8, and a fixed
     −6…6 window would cut one of them off. QSPAN stays 12 so the cells stay
     square and the picture stays the same size as every other graph here. */
  var QSPAN = 12;
  function QY(y, yLo) { return PAD + (yLo + QSPAN - y) * STEP; }
  function rd1(n) { return Math.round(n * 10) / 10; }
  function bracket(n) { return n < 0 ? "(−" + fmt(-n) + ")" : fmt(n); }

  /* The lowest EVEN window edge that leaves every listed y-value at least one
     unit inside the picture; ties go to the window that centres them. Returns
     null when 12 units cannot hold them all — note that a 10-unit spread only
     fits if the parity works out (0…10 needs a bottom edge of −1, which would
     put the labels on odd numbers), so callers must filter their candidate
     turning points with quadFits() rather than trusting the spread alone. */
  function quadWindow(vals) {
    var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
    var best = null, bestOff = Infinity;
    for (var yLo = -24; yLo <= 24; yLo += 2) {
      if (yLo > lo - 1 || yLo + QSPAN < hi + 1) continue;
      var off = Math.abs((yLo + QSPAN / 2) - (lo + hi) / 2);
      if (off < bestOff) { bestOff = off; best = yLo; }
    }
    return best;
  }
  function quadFits(vals) { return quadWindow(vals) !== null; }

  function quadGrid(yLo, inner) {
    var size = PAD * 2 + 2 * R * STEP, yHi = yLo + QSPAN;
    var g = "<svg class='qb-graph' viewBox='0 0 " + size + " " + size + "' role='img'>";
    for (var i = -R; i <= R; i++)
      g += "<line x1='" + X(i) + "' y1='" + QY(yHi, yLo) + "' x2='" + X(i) + "' y2='" + QY(yLo, yLo) + "' stroke='var(--hair,#e6e7e3)' stroke-width='1'/>";
    for (var j = yLo; j <= yHi; j++)
      g += "<line x1='" + X(-R) + "' y1='" + QY(j, yLo) + "' x2='" + X(R) + "' y2='" + QY(j, yLo) + "' stroke='var(--hair,#e6e7e3)' stroke-width='1'/>";
    g += "<line x1='" + X(-R) + "' y1='" + QY(0, yLo) + "' x2='" + X(R) + "' y2='" + QY(0, yLo) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    g += "<line x1='" + X(0) + "' y1='" + QY(yHi, yLo) + "' x2='" + X(0) + "' y2='" + QY(yLo, yLo) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    for (var t = -R; t <= R; t += 2) if (t !== 0)
      g += "<text x='" + X(t) + "' y='" + (QY(0, yLo) + 13) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='middle'>" + t + "</text>";
    for (var u = yLo; u <= yHi; u += 2) if (u !== 0)
      g += "<text x='" + (X(0) - 5) + "' y='" + (QY(u, yLo) + 3) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='end'>" + u + "</text>";
    return g + inner + "</svg>";
  }

  /* y = a(x − h)² + k across the window, cut wherever it leaves the top or the
     bottom — the curved version of the clip lineSeg does for straight lines */
  function quadPath(a, h, k, yLo, color) {
    var runs = [], cur = [], i, x, y;
    for (i = 0; i <= 240; i++) {
      x = -R + i * 0.05;
      y = a * (x - h) * (x - h) + k;
      if (y >= yLo && y <= yLo + QSPAN) cur.push(rd1(X(x)) + "," + rd1(QY(y, yLo)));
      else if (cur.length) { runs.push(cur); cur = []; }
    }
    if (cur.length) runs.push(cur);
    var out = "";
    for (i = 0; i < runs.length; i++) {
      if (runs[i].length < 2) continue;
      out += "<polyline points='" + runs[i].join(" ") + "' fill='none' stroke='" +
        (color || "var(--accent,#0d7a70)") + "' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/>";
    }
    return out;
  }
  function qdot(x, y, yLo, color) {
    return "<circle cx='" + X(x) + "' cy='" + QY(y, yLo) + "' r='4.5' fill='" + (color || "var(--accent,#0d7a70)") + "'/>";
  }

  /* trajectory sketch for projectile questions: motionChart's frame (320 × 220,
     same padding, same colours) with a curved path h = A·x·(range − x). The axes
     carry UNITS but no scale numbers — the flight numbers must come from the
     rule, not from measuring a 300-pixel picture. Whatever the question GIVES
     (an obstacle at a stated distance and height) is drawn and labelled. */
  function arcChart(A, range, top, launch, obst) {
    var W = 320, H = 220, P = 34;
    var xMax = range * 1.15, yMax = top * 1.35;
    function mx(x) { return rd1(P + (W - P - 16) * x / xMax); }
    function my(y) { return rd1(H - P - (H - P - 18) * y / yMax); }
    var g = "<svg class='qb-graph' viewBox='0 0 " + W + " " + H + "' role='img'>";
    g += "<line x1='" + mx(0) + "' y1='" + my(0) + "' x2='" + mx(xMax) + "' y2='" + my(0) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    g += "<line x1='" + mx(0) + "' y1='" + my(0) + "' x2='" + mx(0) + "' y2='" + my(yMax) + "' stroke='var(--muted,#767b7f)' stroke-width='1.6'/>";
    var pts = [];
    for (var i = 0; i <= 120; i++) { var x = range * i / 120; pts.push(mx(x) + "," + my(A * x * (range - x))); }
    g += "<polyline points='" + pts.join(" ") + "' fill='none' stroke='var(--accent,#0d7a70)' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/>";
    g += "<circle cx='" + mx(0) + "' cy='" + my(0) + "' r='4' fill='var(--accent,#0d7a70)'/>";
    g += "<text x='" + (mx(0) + 6) + "' y='" + (my(0) + 13) + "' font-size='9' fill='var(--muted,#767b7f)'>" + launch + "</text>";
    if (obst) {
      var right = mx(obst.d) > W * 0.62;
      g += "<line x1='" + mx(obst.d) + "' y1='" + my(0) + "' x2='" + mx(obst.d) + "' y2='" + my(obst.f) + "' stroke='var(--alert,#b0592f)' stroke-width='3'/>";
      g += "<text x='" + (mx(obst.d) + (right ? -5 : 5)) + "' y='" + (my(obst.f) - 5) + "' font-size='9' fill='var(--alert,#b0592f)' text-anchor='" + (right ? "end" : "start") + "'>" + obst.label + "</text>";
    }
    g += "<text x='" + (W - 8) + "' y='" + (my(0) + 13) + "' font-size='9' fill='var(--muted,#767b7f)' text-anchor='end'>distance x (m)</text>";
    g += "<text x='" + (mx(0) + 4) + "' y='12' font-size='9' fill='var(--muted,#767b7f)'>height h (m)</text>";
    return g + "</svg>";
  }

  /* ---------------- turning-point form ----------------
     y = a(x − h)² + k, written and read back. h = 0 loses the bracket
     (y = 2x² + 5) and a = ±1 loses its 1, exactly as a student would write it. */
  function vertexStr(a, h, k) {
    var s = "y = ";
    if (a === -1) s += "−"; else if (a !== 1) s += (a < 0 ? "−" + fmt(-a) : fmt(a));
    s += (h === 0) ? "x²" : "(x " + (h > 0 ? "− " + fmt(h) : "+ " + fmt(-h)) + ")²";
    if (k > 0) s += " + " + fmt(k); else if (k < 0) s += " − " + fmt(-k);
    return s;
  }
  /* accepts y = 2(x-3)^2+4, -(x+1)²-5, 0.5(x − 2)² + 3, 1/2x^2, (x-3)^2 … */
  function parseVertex(str) {
    if (!str) return null;
    var s = String(str).toLowerCase().replace(/−/g, "-").replace(/²/g, "^2")
      .replace(/\*/g, "").replace(/\s+/g, "");
    var ym = s.match(/^y=(.*)$/); if (ym) s = ym[1];
    var m = s.match(/^([+-]?(?:\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)?)(?:\(x([+-]\d+(?:\.\d+)?)?\)|x)\^2([+-]\d+(?:\.\d+)?)?$/);
    if (!m) return null;
    var a = (m[1] === "" || m[1] === "+") ? 1 : (m[1] === "-" ? -1 : num(m[1]));
    var h = m[2] ? -num(m[2]) : 0;
    var k = m[3] ? num(m[3]) : 0;
    if (isNaN(a) || isNaN(h) || isNaN(k) || a === 0) return null;
    return { a: a, h: h, k: k };
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
                           parseCoord: parseCoord, parseVertex: parseVertex, vertexStr: vertexStr,
                           grid: grid, lineSeg: lineSeg, dot: dot, motionChart: motionChart,
                           quadWindow: quadWindow, quadFits: quadFits, quadGrid: quadGrid, quadPath: quadPath, qdot: qdot,
                           arcChart: arcChart, numInput: numInput, makeRng: makeRng } };

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
      /* rise/run pairs chosen so the gradient is always a clean number a student
         can write exactly: whole numbers and halves only — never 2 ÷ 3 = 0.67 */
      var pair = rng.pick([[1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [3, 2],
                           [-1, 1], [-2, 1], [-3, 1], [-4, 1], [-1, 2], [-3, 2]]);
      var rise = pair[0], run = pair[1];
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
     KINEMATICS · CURVES & QUADRATICS
     Every parabola in this section is built from WHOLE-NUMBER intercepts:
     y = a(x − h)² + k with k = −a·m², which cuts the x-axis at exactly
     h − m and h + m. Nothing a student has to read off a grid, and nothing
     a worked solution has to state, is ever irrational.
     ============================================================ */
  register({
    id: "k_parabola",
    teach: { what: "A parabola is the curve a squared rule draws. It is symmetrical: the <b>turning point</b> is the bottom of a smile or the top of a frown, and the <b>axis of symmetry</b> is the vertical line straight through it. Every height on the curve happens twice — once each side of that line.",
      how: ["Which way does it open? Smile = opens up (a is positive). Frown = opens down (a is negative).",
            "y-intercept: the y-value where the curve crosses the y-axis (x = 0).",
            "x-intercepts: the x-values where the curve crosses the x-axis (y = 0). There can be two, one, or none.",
            "Turning point: the lowest or highest point. The axis of symmetry is x = that point's x-value, halfway between the two x-intercepts."] },
    hint: "Find the turning point first — the axis of symmetry is x = its x-value, and the curve mirrors across it.",
    gen: function (rng) {
      /* a is paired with m (half the gap between the roots) so that
         k = −a·m² is a whole number; h is then filtered so both roots land on
         the grid and the y-intercept a(h² − m²) stays a readable whole number.
         Building from the ROOTS is what keeps every answer rational. */
      var shape = rng.pick([
        { a: 1, m: 1 }, { a: 1, m: 2 }, { a: 1, m: 3 },
        { a: -1, m: 1 }, { a: -1, m: 2 }, { a: -1, m: 3 },
        { a: 2, m: 1 }, { a: 2, m: 2 }, { a: -2, m: 1 }, { a: -2, m: 2 },
        { a: 0.5, m: 2 }, { a: 0.5, m: 4 }, { a: -0.5, m: 2 }, { a: -0.5, m: 4 }
      ]);
      var a = shape.a, m = shape.m, k = -a * m * m, hs = [];
      for (var t = -4; t <= 4; t++) {
        var cc = a * (t * t - m * m);
        if (Math.abs(t) + m > R) continue;                       /* both roots on the grid */
        if (!Number.isInteger(cc) || Math.abs(cc) > 9) continue; /* readable y-intercept */
        if (!quadFits([0, k, cc])) continue;                     /* turning point AND intercept on the picture */
        hs.push(t);
      }
      var h = rng.pick(hs), c = a * (h * h - m * m), p = h - m, q = h + m;
      var yLo = quadWindow([0, k, c]);
      var curve = quadPath(a, h, k, yLo);
      var ask = rng.pick(["dir", "tp", "roots", "axis", "mirror"]);

      if (ask === "dir") {
        /* the wrong y-intercept is the classic slip — reading the turning
           point's height instead of the height above the origin */
        var wrongC = (k !== c) ? k : c + 2;
        var right = "opens " + (a > 0 ? "up" : "down") + ", y-intercept (0, " + fmt(c) + ")";
        return { qHTML: "Which statement describes this parabola?",
          svg: quadGrid(yLo, curve),
          opts: { list: [right,
              "opens " + (a > 0 ? "down" : "up") + ", y-intercept (0, " + fmt(c) + ")",
              "opens " + (a > 0 ? "up" : "down") + ", y-intercept (0, " + fmt(wrongC) + ")",
              "opens " + (a > 0 ? "down" : "up") + ", y-intercept (0, " + fmt(wrongC) + ")"], a: right },
          workedHTML: "The arms point " + (a > 0 ? "UP" : "DOWN") + ", so the parabola opens " + (a > 0 ? "up" : "down") +
            ". Follow the y-axis to the curve: it crosses at (0, " + fmt(c) + "). So: <b>" + right + "</b>." };
      }
      if (ask === "tp") {
        return { qHTML: "Write the coordinate of the <b>turning point</b> of this parabola.",
          svg: quadGrid(yLo, curve),
          inputs: [{ k: "tp", label: "turning point:", place: "(x, y)", answer: "(" + h + ", " + fmt(k) + ")",
            check: function (v) { var pt = parseCoord(v); return !!pt && near(pt.x, h, .01) && near(pt.y, k, .01); } }],
          workedHTML: "The curve stops " + (a > 0 ? "falling and starts rising" : "rising and starts falling") +
            " there, so it is the " + (a > 0 ? "lowest" : "highest") + " point. From the origin: " +
            Math.abs(h) + " " + (h >= 0 ? "right" : "left") + ", then " + Math.abs(k) + " " +
            (k >= 0 ? "up" : "down") + " → <b>(" + h + ", " + fmt(k) + ")</b>." };
      }
      if (ask === "roots") {
        return { qHTML: "Write the two <b>x-intercepts</b> of this parabola.",
          svg: quadGrid(yLo, curve),
          inputs: [numInput("p", "smaller x-intercept: x =", p, 0.01),
                   numInput("q", "larger x-intercept: x =", q, 0.01)],
          workedHTML: "The curve cuts the x-axis at x = <b>" + p + "</b> and x = <b>" + q + "</b>. Check the symmetry: both are " +
            m + " away from the turning point at x = " + h + "." };
      }
      if (ask === "mirror") {
        /* only offsets whose marked point ALSO fits the picture may be used —
           the window is recomputed to include it, so most shapes keep one */
        var offs = [];
        for (var o = 1; o <= 3; o++) {
          var yy = a * o * o + k;
          if (!Number.isInteger(yy)) continue;
          if (Math.abs(h + o) > R || Math.abs(h - o) > R) continue;
          if (!quadFits([0, k, c, yy])) continue;
          offs.push(o);
        }
        if (offs.length) {
          var off = rng.pick(offs), side = rng.raw() < 0.5 ? 1 : -1;
          var x1 = h + side * off, y1 = a * off * off + k, x2 = h - side * off;
          var mLo = quadWindow([0, k, c, y1]);
          return { qHTML: "The marked point is on this parabola. One other point on the curve has the <b>same y-value</b>. Write its coordinate.",
            svg: quadGrid(mLo, quadPath(a, h, k, mLo) + qdot(x1, y1, mLo, "var(--alert,#b0592f)")),
            inputs: [{ k: "pt", label: "the matching point:", place: "(x, y)", answer: "(" + x2 + ", " + fmt(y1) + ")",
              check: function (v) { var pt = parseCoord(v); return !!pt && near(pt.x, x2, .01) && near(pt.y, y1, .01); } }],
            workedHTML: "The axis of symmetry is x = " + h + ". The marked point (" + x1 + ", " + fmt(y1) + ") is " + off +
              " to the " + (side > 0 ? "right" : "left") + " of it, so its mirror image is " + off + " to the " +
              (side > 0 ? "left" : "right") + ", at the same height: <b>(" + x2 + ", " + fmt(y1) + ")</b>." };
        }
        /* nothing fits inside the picture — ask for the axis instead */
      }
      return { qHTML: "Write the equation of the <b>axis of symmetry</b> of this parabola.",
        svg: quadGrid(yLo, curve),
        inputs: [{ k: "ax", label: "axis of symmetry: x =", answer: fmt(h),
          check: function (v) { return near(num(String(v).replace(/\s+/g, "").replace(/^x=/i, "")), h, 0.01); } }],
        workedHTML: "The axis of symmetry runs vertically through the turning point (" + h + ", " + fmt(k) +
          "), so its equation is <b>x = " + fmt(h) + "</b>. It also sits halfway between the x-intercepts: (" +
          p + " + " + q + ") ÷ 2 = " + fmt(h) + "." };
    }
  });

  register({
    id: "k_quadeq",
    teach: { what: "Turning-point form is <b>y = a(x − h)² + k</b>. The turning point sits at (h, k) — watch the sign, because (x − 3)² means h = 3 and (x + 2)² means h = −2. <b>a</b> decides which way the curve opens and how narrow it is.",
      how: ["Read the turning point (h, k) and write y = a(x − h)² + k with those two numbers in place.",
            "Flip the sign inside the bracket: turning point at x = −2 gives (x + 2)².",
            "Substitute the other point's x and y into your rule.",
            "Solve for a, then write the finished rule. Check it by substituting the point back in."] },
    hint: "Put (h, k) in first — the sign of h flips inside the bracket — then substitute the extra point to find a.",
    gen: function (rng) {
      /* a is paired with the offset of the extra point so y₁ = k + a·o² is a
         whole number: half-sized a's only ever get offset 2, a = ±3 only ever
         gets offset 1. Nothing to read or write is ever a fraction. */
      var shape = rng.pick([
        { a: 0.5, o: 2 }, { a: -0.5, o: 2 },
        { a: 1, o: 1 }, { a: 1, o: 2 }, { a: -1, o: 1 }, { a: -1, o: 2 },
        { a: 2, o: 1 }, { a: 2, o: 2 }, { a: -2, o: 1 }, { a: -2, o: 2 },
        { a: 3, o: 1 }, { a: -3, o: 1 }
      ]);
      var a = shape.a, o = shape.o, dy = a * o * o;
      var pic = rng.raw() < 0.55, h, k, kk, i;
      if (pic) {
        var hs = [], ks = [];
        for (i = -4; i <= 4; i++) if (Math.abs(i + o) <= R && Math.abs(i - o) <= R) hs.push(i);
        for (kk = -6; kk <= 6; kk++)          /* turning point AND extra point must fit the window */
          if (quadFits([0, kk, kk + dy])) ks.push(kk);
        h = rng.pick(hs); k = rng.pick(ks);
      } else {                                 /* no picture, so the numbers can spread out */
        h = rng.ri(-6, 6); k = rng.ri(-8, 8);
      }
      var side = rng.raw() < 0.5 ? 1 : -1;
      var x1 = h + side * o, y1 = k + dy;
      var rule = vertexStr(a, h, k);
      var tpTxt = "(" + h + ", " + fmt(k) + ")", ptTxt = "(" + x1 + ", " + fmt(y1) + ")";
      var known = "y = a" + (h === 0 ? "x²" : "(x " + (h > 0 ? "− " + fmt(h) : "+ " + fmt(-h)) + ")²") +
        (k > 0 ? " + " + fmt(k) : k < 0 ? " − " + fmt(-k) : "");
      var subs = "Substitute " + ptTxt + ": " + fmt(y1) + " = a × " +
        (h === 0 ? bracket(x1) + "²" : "(" + bracket(x1) + " − " + bracket(h) + ")²") + " " +
        (k > 0 ? "+ " + fmt(k) : k < 0 ? "− " + fmt(-k) : "+ 0") + " → " + fmt(y1 - k) + " = a × " + (o * o) +
        " → a = <b>" + fmt(a) + "</b>.";
      function ruleCheck(v) { var r = parseVertex(v); return !!r && near(r.a, a, .01) && near(r.h, h, .01) && near(r.k, k, .01); }

      if (pic) {
        var yLo = quadWindow([0, k, y1]);
        var svg = quadGrid(yLo, quadPath(a, h, k, yLo) + qdot(h, k, yLo) + qdot(x1, y1, yLo, "var(--alert,#b0592f)"));
        var stem = "The turning point of this parabola is marked, and so is one other point on the curve.";
        if (rng.raw() < 0.5) {
          return { qHTML: stem + " Find <b>a</b>, <b>h</b> and <b>k</b> for y = a(x − h)² + k.", svg: svg,
            inputs: [numInput("h", "h =", h, 0.01), numInput("k", "k =", k, 0.01), numInput("a", "a =", a, 0.01)],
            workedHTML: "The turning point is " + tpTxt + ", so h = <b>" + fmt(h) + "</b> and k = <b>" + fmt(k) +
              "</b>, giving " + known + ". The other marked point is " + ptTxt + ". " + subs +
              " The rule is " + rule + "." };
        }
        return { qHTML: stem + " Write its rule in the form y = a(x − h)² + k.", svg: svg,
          inputs: [{ k: "rule", label: "rule:", place: "y = a(x − h)² + k", answer: rule, check: ruleCheck }],
          workedHTML: "Turning point " + tpTxt + " → h = " + fmt(h) + ", k = " + fmt(k) + ", so " + known + ". " +
            subs + " The rule is <b>" + rule + "</b>." };
      }
      if (rng.raw() < 0.5) {
        return { qHTML: "A parabola has its turning point at <b>" + tpTxt + "</b>, so its rule is <b>" + known +
            "</b>. The curve also passes through <b>" + ptTxt + "</b>. Find <b>a</b>.",
          inputs: [numInput("a", "a =", a, 0.01)],
          workedHTML: subs + " (Check: " + fmt(a) + " × " + (o * o) + " " +
            (k >= 0 ? "+ " + fmt(k) : "− " + fmt(-k)) + " = " + fmt(y1) + " ✓)" };
      }
      return { qHTML: "A parabola has its turning point at <b>" + tpTxt + "</b> and passes through <b>" + ptTxt +
          "</b>. Write its rule in the form y = a(x − h)² + k.",
        inputs: [numInput("a", "a =", a, 0.01),
                 { k: "rule", label: "rule:", place: "y = a(x − h)² + k", answer: rule, check: ruleCheck }],
        workedHTML: "h = " + fmt(h) + " and k = " + fmt(k) + " come straight from the turning point, so " + known +
          ". " + subs + " The rule is <b>" + rule + "</b>." };
    }
  });

  register({
    id: "k_project",
    teach: { what: "A thrown object traces a parabola. The <b>turning point</b> is the top of the flight — the greatest height, and half way along. Where the curve meets the ground (h = 0) is where the object lands. The rule is a <b>model</b>: it ignores wind and spin, so it is close, not perfect.",
      how: ["Greatest height: find the turning point. In h = a(x − p)² + q it is (p, q); from the factorised form it is halfway between the two ground points.",
            "Landing distance: solve h = 0. The factorised form hands you both answers — x = 0 is the throw itself, the other one is the landing.",
            "Clearing an obstacle: substitute its distance for x, then compare the height you get with the height of the obstacle.",
            "Always write the unit. These are metres, not just numbers."] },
    hint: "Top of the flight = turning point. It lands where h = 0. To test an obstacle, substitute its distance.",
    gen: function (rng) {
      /* Each flight is a hand-checked (A, range, greatest height) triple:
         A·range²/4 = height exactly, √(height/A) = range/2 exactly, and A has
         at most two decimal places — so the top, the landing point and every
         substitution come out tidy. The pairs are also physically sensible:
         a chipped golf ball is low and long, a lobbed netball is high and short. */
      var f = rng.pick([
        { stem: "A keg is tossed from ground level.", noun: "the keg", pp: "tossed", launch: "toss", obst: "rope", A: 0.25, R: 8, H: 4 },
        { stem: "A netball is lobbed from ground level.", noun: "the ball", pp: "lobbed", launch: "lob", obst: "defender's hands", A: 0.2, R: 10, H: 5 },
        { stem: "A ball is thrown from ground level.", noun: "the ball", pp: "thrown", launch: "throw", obst: "fence", A: 0.05, R: 20, H: 5 },
        { stem: "A cricket ball is hit from ground level.", noun: "the ball", pp: "hit", launch: "hit", obst: "safety net", A: 0.1, R: 20, H: 10 },
        { stem: "A football is kicked from ground level.", noun: "the ball", pp: "kicked", launch: "kick", obst: "tree", A: 0.04, R: 30, H: 9 },
        { stem: "A ball is punted from ground level.", noun: "the ball", pp: "punted", launch: "punt", obst: "tall tree", A: 0.02, R: 40, H: 8 },
        { stem: "A golf ball is chipped from ground level.", noun: "the ball", pp: "chipped", launch: "chip", obst: "hedge", A: 0.01, R: 40, H: 4 }
      ]);
      var half = f.R / 2;
      var fact = "h = " + fmt(f.A) + "x(" + f.R + " − x)";
      var vert = "h = −" + fmt(f.A) + "(x − " + half + ")² + " + f.H;
      var lead = f.stem + " Its height <b>h</b> metres, after travelling <b>x</b> metres forward, is modelled by ";
      var ask = rng.pick(["whatis", "maxh", "land", "clear"]);

      if (ask === "clear") {
        /* obstacle distances that give a one-decimal height, well clear of the
           peak (or the question answers itself by looking at the picture) */
        var ds = [];
        for (var d = 1; d < f.R; d++) {
          var hd = f.A * d * (f.R - d);
          if (Math.abs(hd * 10 - Math.round(hd * 10)) > 1e-9) continue;
          if (hd < 1 || Math.abs(hd - f.H) < 0.5) continue;
          ds.push(d);
        }
        if (ds.length) {
          var D = rng.pick(ds), hD = Math.round(f.A * D * (f.R - D) * 10) / 10;
          var gap = rng.pick([0.5, 1, 1.5, 2]);
          var clears = (hD - gap > 0.4) ? rng.raw() < 0.5 : false;  /* the obstacle has to stand above the ground */
          var F = Math.round((clears ? hD - gap : hD + gap) * 10) / 10;
          return { qHTML: lead + "<b>" + fact + "</b>. A " + f.obst + " <b>" + fmt(F) + " m</b> high stands <b>" + D +
              " m</b> from the start. Does " + f.noun + " clear it?",
            svg: arcChart(f.A, f.R, f.H, f.launch, { d: D, f: F, label: fmt(F) + " m" }),
            inputs: [numInput("h", "height at x = " + D + " m, in metres =", hD, 0.02),
              { k: "clr", label: "clears the " + f.obst + "? (yes / no)", place: "yes or no",
                answer: clears ? "yes" : "no",
                check: function (v) {
                  var s = String(v == null ? "" : v).trim().toLowerCase();
                  if (/^y(es)?$/.test(s)) return clears;
                  if (/^n(o)?$/.test(s)) return !clears;
                  return false;
                } }],
            workedHTML: "Substitute x = " + D + ": h = " + fmt(f.A) + " × " + D + " × (" + f.R + " − " + D + ") = " +
              fmt(f.A) + " × " + D + " × " + (f.R - D) + " = <b>" + fmt(hD) + " m</b>. The " + f.obst + " is " + fmt(F) +
              " m high, and " + fmt(hD) + " m is " + (clears ? "above" : "below") + " that, so it does" + (clears ? "" : " NOT") +
              " clear it: <b>" + (clears ? "yes" : "no") + "</b>." };
        }
        ask = "maxh";   /* no sensible obstacle for this flight — ask the height instead */
      }
      if (ask === "whatis") {
        var right = "the greatest height " + f.noun + " reaches";
        return { qHTML: lead + "<b>" + fact + "</b>. In this model, what does the <b>turning point</b> tell you?",
          svg: arcChart(f.A, f.R, f.H, f.launch, null),
          opts: { list: [right, "how far away " + f.noun + " lands", "how fast " + f.noun + " was " + f.pp,
                         "the height " + f.noun + " was " + f.pp + " from"], a: right },
          workedHTML: "The turning point is the top of the flight — the moment the object stops climbing and starts falling. So it tells you <b>" +
            right + "</b>, and the x-value there tells you how far it had travelled at that moment." };
      }
      if (ask === "land") {
        return { qHTML: lead + "<b>" + vert + "</b>. How far from the start does " + f.noun + " <b>land</b>?",
          svg: arcChart(f.A, f.R, f.H, f.launch, null),
          inputs: [numInput("x", "landing distance (m) =", f.R, 0.02)],
          workedHTML: "It lands where the height is zero. Put h = 0: 0 = −" + fmt(f.A) + "(x − " + half + ")² + " +
            f.H + ", so " + fmt(f.A) + "(x − " + half + ")² = " + f.H +
            " → (x − " + half + ")² = " + f.H + " ÷ " + fmt(f.A) + " = " + (half * half) + " → x − " + half + " = ±" + half +
            ". That gives x = 0 (the start) and x = <b>" + f.R + "</b>. So it lands <b>" + f.R + " m</b> away." };
      }
      return { qHTML: lead + "<b>" + fact + "</b>. Find the <b>greatest height</b>, and how far " + f.noun +
          " has travelled when it reaches it.",
        svg: arcChart(f.A, f.R, f.H, f.launch, null),
        inputs: [numInput("x", "x at the greatest height (m) =", half, 0.02),
                 numInput("h", "greatest height (m) =", f.H, 0.02)],
        workedHTML: "h = 0 at x = 0 and at x = " + f.R + " (the two ground points). The turning point sits halfway between them: x = " +
          f.R + " ÷ 2 = <b>" + half + "</b>. Substitute: h = " + fmt(f.A) + " × " + half + " × (" + f.R + " − " + half +
          ") = <b>" + fmt(f.H) + " m</b>." };
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
        /* the stop must not always be the middle section, or the answer is
           always "B" and the question can be scored without reading the graph */
        var restAt = rng.ri(0, 2);
        var rsegs, rtMax, ryMax;
        if (restAt === 1) { rsegs = segs; rtMax = tMax; ryMax = yMax; }
        else if (restAt === 0) {   /* waiting first, then two moving legs */
          rsegs = [{ dt: tRest, dy: 0 }, { dt: t1, dy: y1 }, { dt: t3, dy: Math.abs(dy3) }];
          rtMax = tRest + t1 + t3; ryMax = y1 + Math.abs(dy3) + 1;
        } else {                    /* moves, moves, then stops at the end */
          rsegs = [{ dt: t1, dy: y1 }, { dt: t3, dy: Math.abs(dy3) }, { dt: tRest, dy: 0 }];
          rtMax = t1 + t3 + tRest; ryMax = y1 + Math.abs(dy3) + 1;
        }
        var letter = ["A", "B", "C"][restAt];
        return { qHTML: "In which section is the traveller <b>at rest</b>?",
          svg: motionChart(rsegs, rtMax, ryMax, "position (km)", "t (min)"),
          opts: { list: ["A", "B", "C"], a: letter },
          workedHTML: "Section <b>" + letter + "</b> is the flat one — the position line does not climb or fall, so the traveller is not moving." };
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
