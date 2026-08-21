/* ============================================================
   ELC STEM hub v2 — question bank, part 3: LAB & MATTER
   ------------------------------------------------------------
   Loads AFTER stem-questions.js and registers into the same
   QBANK using the contract documented in that file's header:

     QBANK.register({ id, teach:{what,how}, hint, gen(rng) })
     gen(rng) -> { qHTML, svg?, inputs:[...] | opts:{list,a}, workedHTML }

   Generators are PURE functions of the seeded rng (no Date, no
   Math.random) and every number in every answer is computed from
   the numbers the generator made — nothing is hard-coded.

   Skills registered here (ids from stem-shared.js STEM2.SKILLS):
     In the laboratory     sc_safety · sc_equipment · sc_bunsen
     Measuring & recording sc_measure · sc_graph · sc_trend
     What things are made of
                           sc_atom · sc_bonding · sc_mixtures · sc_ph

   HOUSE RULES THAT BITE IN THIS FILE
   · No images. The two instruments in sc_measure and the pH scale
     in sc_ph are inline SVG drawn to a real scale, and every colour
     is read from the page's CSS custom properties (with the light
     palette as the fallback) so the drawings follow dark mode —
     same trick as k_grad_graph in stem-questions.js.
   · Hazard symbols are DESCRIBED IN WORDS (corrosive, flammable,
     toxic, irritant). There is no symbol artwork anywhere.
   · The safety and Bunsen items practise the words and the
     thinking. They are never written as a substitute for the
     teacher: "wait for your teacher" is step 1 of the burner
     sequence and it is said out loud in the teach text.
   · sc_ph contains NO logarithms — the lesson plan says so. The
     scale is read as a number line: below 7 acidic, 7 neutral,
     above 7 basic, lower number = more acidic.
   · sc_atom keeps to the simple neutral-atom model the lesson
     teaches: protons = electrons, the charges cancel. No mass
     numbers, no shells, no isotopes.
   · Only classes that already exist in the skills engine are used
     (qb-graph, qb-table); anything else is styled inline, so the
     markup carries its own look wherever it is mounted.
   · People in questions are fictional and drawn from one list.

   Run QBANK.audit(2000) in the console after editing anything.
   ============================================================ */
(function () {
  "use strict";

  if (!window.QBANK || typeof window.QBANK.register !== "function") {
    if (window.console) console.warn("stem-questions-lab.js: QBANK missing — load stem-questions.js first.");
    return;
  }

  var register = window.QBANK.register;
  var U = window.QBANK.util;
  var num = U.num, near = U.near, fmt = U.fmt, numInput = U.numInput;

  /* ---------------- people ----------------
     Fictional, always. Sentences are written so no pronoun is ever
     needed — the name does the work twice if it has to. */
  var NAMES = ["Mai", "Anh", "Hiro", "Amara", "Tom", "Layla", "Nadia", "Omar", "Sofia", "Kiet"];
  function fill(s, n) { return s.replace(/\{n\}/g, n); }

  /* ---------------- small shared helpers ---------------- */

  /* pick up to n distinct wrong options from a pool, answer first (the UI shuffles) */
  function mcq(rng, answer, pool, n) {
    n = n || 3;
    var seen = {}, wrong = [];
    rng.shuffle(pool).forEach(function (s) {
      if (s === answer || seen[s]) return;
      seen[s] = 1; wrong.push(s);
    });
    return { list: [answer].concat(wrong.slice(0, n)), a: answer };
  }

  /* one spelling for every way a student might type the same word:
     lower case, no punctuation, no leading article, hyphens are spaces */
  function normWord(s) {
    return String(s == null ? "" : s)
      .toLowerCase()
      .replace(/[‘’“”]/g, "'")
      .replace(/[-‐-―_\/]/g, " ")
      .replace(/[.,;:!?"']/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^(?:a|an|the)\s+/, "");
  }
  /* a written answer: the canonical wording, plus every alternative
     wording a Year-9 EAL student reasonably writes for the same idea */
  function wordInput(k, label, answer, alts, place) {
    var ok = {};
    [answer].concat(alts || []).forEach(function (s) { ok[normWord(s)] = 1; });
    return { k: k, label: label, place: place, answer: answer,
      check: function (v) { return ok[normWord(v)] === 1; } };
  }

  /* a measurement: the NUMBER ALONE IS NOT ACCEPTED — the unit has to be
     there. That is the whole point of the heating-water lesson, so the
     check enforces it and the label and placeholder both warn about it. */
  var UNITS = {
    "°C": { show: "°C",
      rx: /^(?:[°º˚⁰]\s*c|deg(?:ree)?s?(?:\s*[°º]?\s*c(?:elsius)?)?|celsius|c)$/ },
    "mL": { show: "mL",
      rx: /^(?:m\s*l|mill?ilit(?:re|er)s?|cm\s*(?:3|³)|cc)$/ }
  };
  function unitInput(k, label, value, unitKey, place) {
    var u = UNITS[unitKey];
    return { k: k, label: label, place: place, answer: fmt(value) + " " + u.show,
      check: function (v) {
        var s = String(v == null ? "" : v).replace(/−/g, "-").replace(/\u00a0/g, " ")
          .trim().toLowerCase().replace(/\.$/, "");
        var m = s.match(/^(-?\d+(?:[.,]\d+)?)\s*(.*)$/);
        if (!m) return false;
        var n = parseFloat(m[1].replace(",", "."));
        if (!isFinite(n)) return false;
        if (!u.rx.test(m[2].replace(/\s+/g, " ").trim())) return false;
        return near(n, value, 0.001);
      } };
  }

  /* a two-column results table, the shape the students fill in by hand */
  function tableHTML(h1, h2, rows) {
    var t = "<table class='qb-table'><tr><th>" + h1 + "</th><th>" + h2 + "</th></tr>";
    rows.forEach(function (r) { t += "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; });
    return t + "</table>";
  }
  function olHTML(items) {
    var s = "<ol style='margin:8px 0 0;padding-left:22px'>";
    items.forEach(function (x) { s += "<li style='margin:3px 0'>" + x + "</li>"; });
    return s + "</ol>";
  }
  function r1(n) { return Math.round(n * 10) / 10; }

  /* ============================================================
     INLINE SVG INSTRUMENTS
     Every drawing is built from the generated value, so the picture
     and the answer can never drift apart. Colours are CSS custom
     properties with the light palette as the fallback: --paper for
     glass, --muted for outlines, --ink for numbers, --alert for the
     thermometer liquid, --accent for the water in the cylinder.
     ============================================================ */

  /* A laboratory thermometer. sc = {min, max, major, minor}: the scale is
     drawn tick by tick from those numbers, so the picture IS the scale the
     question asks about. The liquid column stops exactly at `value`. */
  function thermometerSVG(sc, value) {
    var TOP = 36, BOT = 248, CX = 78, HALF = 11, BULB = 270;
    function ty(t) { return r1(BOT - (t - sc.min) / (sc.max - sc.min) * (BOT - TOP)); }
    var s = "<svg class='qb-graph' style='max-width:148px' viewBox='0 0 150 300' role='img' " +
      "aria-label='A thermometer with a scale from " + sc.min + " to " + sc.max + " degrees Celsius'>";
    /* the glass: one rounded tube running down into the bulb */
    s += "<rect x='" + (CX - HALF) + "' y='" + (TOP - 16) + "' width='" + (2 * HALF) +
      "' height='" + (BULB - TOP + 16) + "' rx='" + HALF +
      "' fill='var(--paper,#fcfcfa)' stroke='var(--muted,#5c6166)' stroke-width='1.5'/>";
    s += "<circle cx='" + CX + "' cy='" + BULB + "' r='19' fill='var(--paper,#fcfcfa)' " +
      "stroke='var(--muted,#5c6166)' stroke-width='1.5'/>";
    /* the liquid */
    s += "<rect x='" + (CX - 6) + "' y='" + ty(value) + "' width='12' height='" +
      r1(BULB - ty(value)) + "' fill='var(--alert,#b0592f)'/>";
    s += "<circle cx='" + CX + "' cy='" + BULB + "' r='14' fill='var(--alert,#b0592f)'/>";
    /* the scale — counted in whole minor divisions so no rounding creeps in */
    var steps = Math.round((sc.max - sc.min) / sc.minor);
    for (var i = 0; i <= steps; i++) {
      var t = sc.min + i * sc.minor;
      var big = Math.abs(t / sc.major - Math.round(t / sc.major)) < 1e-9;
      s += "<line x1='" + (big ? 48 : 57) + "' y1='" + ty(t) + "' x2='" + (CX - HALF) +
        "' y2='" + ty(t) + "' stroke='var(--muted,#5c6166)' stroke-width='" + (big ? 1.4 : 0.9) + "'/>";
      if (big) s += "<text x='44' y='" + r1(ty(t) + 3.4) + "' font-size='10' " +
        "fill='var(--ink,#212427)' text-anchor='end'>" + fmt(t) + "</text>";
    }
    s += "<text x='" + (CX + HALF + 5) + "' y='" + (TOP - 4) + "' font-size='11' " +
      "fill='var(--muted,#5c6166)'>°C</text>";
    return s + "</svg>";
  }

  /* A measuring cylinder. sc = {cap, major, minor}. The water is drawn with a
     real meniscus: the surface curves UP at the glass, and the bottom of the
     curve — which is where you read — sits exactly on `value`. */
  function cylinderSVG(sc, value) {
    var GT = 40, GB = 258, LX = 60, RX = 116, Y0 = 250, Y1 = 56;
    function vy(v) { return r1(Y0 - v / sc.cap * (Y0 - Y1)); }
    var ys = vy(value), yEdge = r1(ys - 5), yCtl = r1(ys + 5);
    var s = "<svg class='qb-graph' style='max-width:148px' viewBox='0 0 150 300' role='img' " +
      "aria-label='A measuring cylinder with a scale from 0 to " + sc.cap + " millilitres'>";
    /* glass, then water, then the marks on top of the water so they stay readable */
    s += "<rect x='" + LX + "' y='" + GT + "' width='" + (RX - LX) + "' height='" + (GB - GT) +
      "' fill='var(--paper,#fcfcfa)'/>";
    s += "<path d='M" + (LX + 2) + "," + yEdge + " Q88," + yCtl + " " + (RX - 2) + "," + yEdge +
      " L" + (RX - 2) + "," + (GB - 2) + " L" + (LX + 2) + "," + (GB - 2) +
      " Z' fill='var(--accent,#0d7a70)' opacity='0.22'/>";
    s += "<path d='M" + (LX + 2) + "," + yEdge + " Q88," + yCtl + " " + (RX - 2) + "," + yEdge +
      "' fill='none' stroke='var(--accent,#0d7a70)' stroke-width='1.8'/>";
    var steps = Math.round(sc.cap / sc.minor);
    for (var i = 0; i <= steps; i++) {
      var v = i * sc.minor;
      var big = Math.abs(v / sc.major - Math.round(v / sc.major)) < 1e-9;
      s += "<line x1='" + LX + "' y1='" + vy(v) + "' x2='" + (big ? LX + 20 : LX + 11) +
        "' y2='" + vy(v) + "' stroke='var(--muted,#5c6166)' stroke-width='" + (big ? 1.4 : 0.9) + "'/>";
      if (big) s += "<text x='" + (LX - 4) + "' y='" + r1(vy(v) + 3.4) + "' font-size='10' " +
        "fill='var(--ink,#212427)' text-anchor='end'>" + fmt(v) + "</text>";
    }
    /* the glass outline last: body, pouring lip, foot */
    s += "<rect x='" + LX + "' y='" + GT + "' width='" + (RX - LX) + "' height='" + (GB - GT) +
      "' fill='none' stroke='var(--muted,#5c6166)' stroke-width='1.5'/>";
    s += "<path d='M" + LX + ",44 L50,36' fill='none' stroke='var(--muted,#5c6166)' stroke-width='1.5'/>";
    s += "<path d='M" + LX + "," + GB + " L48,272 L128,272 L" + RX + "," + GB +
      " Z' fill='var(--paper,#fcfcfa)' stroke='var(--muted,#5c6166)' stroke-width='1.5'/>";
    s += "<text x='" + (RX + 5) + "' y='" + (GT + 14) + "' font-size='11' " +
      "fill='var(--muted,#5c6166)'>mL</text>";
    return s + "</svg>";
  }

  /* The pH scale as a number line, 0 to 14, in the universal-indicator colours.
     The colours are the DATA here (they are what the indicator does), so they
     are fixed hex — mid-tone values that hold up on white paper and on the dark
     background. Every number under the strip is drawn in --ink, so the labels
     follow the theme. marks = [{v, tag}] draws a pointer over a cell. */
  var PHBAND = [
    { lo: 0, hi: 2, col: "red", fill: "#c0392b", say: "strongly acidic" },
    { lo: 3, hi: 4, col: "orange", fill: "#cf7327", say: "acidic" },
    { lo: 5, hi: 6, col: "yellow", fill: "#c2a01c", say: "weakly acidic" },
    { lo: 7, hi: 7, col: "green", fill: "#3f8f4a", say: "neutral" },
    { lo: 8, hi: 11, col: "blue", fill: "#3a6ea5", say: "basic" },
    { lo: 12, hi: 14, col: "purple", fill: "#6b4a9c", say: "strongly basic" }
  ];
  function bandOf(v) {
    for (var i = 0; i < PHBAND.length; i++) if (v >= PHBAND[i].lo && v <= PHBAND[i].hi) return PHBAND[i];
    return PHBAND[0];
  }
  function phStripSVG(marks) {
    var X0 = 10, CW = r1(280 / 15), TOP = 30, H = 30;
    var s = "<svg class='qb-graph' viewBox='0 0 300 78' role='img' " +
      "aria-label='The pH scale from 0 to 14'>";
    for (var v = 0; v <= 14; v++) {
      var x = r1(X0 + v * CW);
      s += "<rect x='" + x + "' y='" + TOP + "' width='" + r1(CW + 0.6) + "' height='" + H +
        "' fill='" + bandOf(v).fill + "'/>";
      s += "<text x='" + r1(x + CW / 2) + "' y='" + (TOP + H + 13) + "' font-size='9.5' " +
        "fill='var(--ink,#212427)' text-anchor='middle'>" + v + "</text>";
    }
    s += "<rect x='" + X0 + "' y='" + TOP + "' width='" + r1(15 * CW) + "' height='" + H +
      "' fill='none' stroke='var(--muted,#5c6166)' stroke-width='1'/>";
    (marks || []).forEach(function (m) {
      var cx = r1(X0 + m.v * CW + CW / 2);
      s += "<path d='M" + r1(cx - 6) + ",14 L" + r1(cx + 6) + ",14 L" + cx +
        ",25 Z' fill='var(--ink,#212427)'/>";
      s += "<text x='" + cx + "' y='10' font-size='9.5' font-weight='700' " +
        "fill='var(--ink,#212427)' text-anchor='middle'>" + m.tag + "</text>";
    });
    return s + "</svg>";
  }

  /* ============================================================
     IN THE LABORATORY
     ============================================================ */

  /* ---------------- sc_safety ---------------- */

  /* Short actions, written WITHOUT a full stop: they are option labels and
     sentence parts, so the punctuation belongs to whatever uses them. */
  var SAFE_ACTS = [
    "Pushing your stool right under the bench before you start",
    "Putting your bag under the bench, out of the walkway",
    "Putting safety glasses on before anything is heated",
    "Reading the label on a bottle before pouring from it",
    "Telling your teacher straight away when a test tube cracks",
    "Standing up while you heat something on the tripod",
    "Walking, never running, while carrying a beaker",
    "Tying long hair back before the burner is lit",
    "Washing your hands before leaving the laboratory",
    "Waiting for your teacher to say the practical can start"
  ];
  var UNSAFE = [
    { act: "Tasting a white powder to find out what it is",
      story: "{n} cannot tell whether the white powder is salt or sugar, so {n} tastes a little of it",
      rule: "Nothing in a laboratory ever goes in your mouth",
      fix: "read the label on the jar, and ask the teacher if the label does not say" },
    { act: "Leaving your bag in the walkway between the benches",
      story: "{n} drops a school bag in the walkway between two benches and starts the practical",
      rule: "The floor and the walkway stay clear, so nobody trips while carrying something hot",
      fix: "put the bag under the bench, out of the walkway" },
    { act: "Pointing the open end of a hot test tube at the person beside you",
      story: "{n} heats a test tube of water with the open end pointing at the next student along the bench",
      rule: "The open end of a heated test tube points at nobody",
      fix: "turn the test tube so the open end points at an empty part of the bench" },
    { act: "Picking a hot beaker up with your fingers",
      story: "{n} lifts a beaker straight off the gauze mat with bare fingers",
      rule: "Hot glass looks exactly like cold glass",
      fix: "use tongs, and let the beaker cool on the heatproof mat first" },
    { act: "Running across the laboratory to fetch a spatula",
      story: "{n} is missing a spatula and runs across the laboratory to the front bench to get one",
      rule: "You walk in a laboratory, because other people are carrying hot and sharp things",
      fix: "walk, and look at what other people are carrying on the way" },
    { act: "Lighting the burner before the teacher has said to start",
      story: "{n} has read the sheet and lights the burner while the teacher is still explaining the practical",
      rule: "A practical starts when the teacher says it starts, not before",
      fix: "wait, listen to the whole instruction, and light the burner only when the teacher says to" },
    { act: "Wiping a spill with your sleeve and saying nothing",
      story: "{n} spills a little of the liquid on the bench and wipes it up with a sleeve",
      rule: "Every spill gets reported, however small it looks",
      fix: "step back and tell the teacher straight away, before touching the spill" },
    { act: "Leaning over a beaker to smell what is inside",
      story: "{n} wants to know what is in the beaker and leans over it to take a deep sniff",
      rule: "You never put your face over an open container",
      fix: "keep well back, and ask the teacher what is in the beaker" },
    { act: "Taking your safety glasses off while the burner is still lit",
      story: "{n} has finished heating the water and pushes the safety glasses up while the burner is still lit",
      rule: "Safety glasses stay on until every flame is out and everything is cool",
      fix: "turn the gas off first, then wait until everything is cool before taking the glasses off" },
    { act: "Walking away from a burner that is still on the heating flame",
      story: "{n} leaves a lit burner on the blue heating flame and goes to the sink for more water",
      rule: "A lit burner is never left on its own, and a blue flame is hard to see",
      fix: "close the air hole so the flame is orange, or turn the gas off before walking away" }
  ];
  /* Hazard symbols, described in words. No artwork, ever. */
  var HAZ = [
    { word: "corrosive", sym: "a drop of liquid falling onto a hand and onto a bench, eating a hole in both",
      mean: "it can burn your skin and your eyes, and eat into the bench",
      care: "put safety glasses on, pour slowly and keep it well away from your face" },
    { word: "flammable", sym: "a flame burning on top of a line",
      mean: "it catches fire very easily",
      care: "turn the burner off first and keep the bottle far away from any flame" },
    { word: "toxic", sym: "a skull and crossbones",
      mean: "it is poisonous and can make you very ill",
      care: "keep it away from your mouth and wash your hands the moment you finish" },
    { word: "irritant", sym: "an exclamation mark",
      mean: "it can make your skin, your eyes or your throat sore",
      care: "keep it off your skin and do not breathe it in" }
  ];
  var TEACHER_LINE = "Whatever the answer says, the rule in the room is the one your teacher gives you: " +
    "you start when your teacher says to start, and you ask before you do anything you are not sure about.";

  register({
    id: "sc_safety",
    teach: {
      what: "A <b>laboratory</b> is a safe room to work in as long as everyone works the same way. A <b>hazard</b> is a thing that could hurt somebody — a flame, a bottle of acid, a bag in the walkway. The <b>risk</b> is the chance that it actually does hurt somebody, and every safety rule is there to make that chance smaller. <b>Hazard symbols</b> on a bottle tell you which hazard is inside before you touch it. " +
        "<b>These questions are practice for the words and the thinking. They are not a substitute for your teacher.</b> In the room you wait for your teacher's instructions, and you ask when you are not sure.",
      how: ["Look at the situation and ask: what could go wrong here?",
        "Name the hazard — the thing that could hurt someone.",
        "Say which rule covers it, in one sentence.",
        "Say what to do <i>instead</i>. A safety answer always ends with an action.",
        "On a bottle, read the hazard symbol first, then the label, then pour."]
    },
    hint: "Hazard = the thing that could hurt you. Risk = the chance it does. Always finish with what to do instead.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["spot", "spot", "fix", "sym", "sym", "symword", "care", "words"]);

      /* --- four short actions, one of them unsafe --- */
      if (kind === "spot") {
        var bad = rng.pick(UNSAFE).act;
        var good = rng.shuffle(SAFE_ACTS).slice(0, 3);
        return {
          qHTML: "Four students are working in the laboratory. Which one of these is <b>unsafe</b>?",
          opts: { list: [bad].concat(good), a: bad },
          workedHTML: "<b>" + bad + "</b> — that is the unsafe one. The other three are exactly what you are asked to do every lesson. " + TEACHER_LINE
        };
      }

      /* --- one unsafe situation: what should they do instead? --- */
      if (kind === "fix") {
        var u = rng.pick(UNSAFE);
        var pool = UNSAFE.filter(function (x) { return x !== u; }).map(function (x) { return x.fix; });
        var right = u.fix;
        return {
          qHTML: fill(u.story, n) + ".<br>What should " + n + " do <b>instead</b>?",
          opts: mcq(rng, right, pool),
          workedHTML: "The rule: " + u.rule + ". So " + n + " should <b>" + right + "</b>. " + TEACHER_LINE
        };
      }

      /* --- symbol described in words -> what it warns you about --- */
      if (kind === "sym") {
        var h = rng.pick(HAZ);
        var pool2 = HAZ.map(function (x) { return x.mean; });
        return {
          qHTML: "A bottle on the bench carries a hazard symbol: <b>" + h.sym +
            "</b>. What is the symbol warning you about?",
          opts: mcq(rng, h.mean, pool2),
          workedHTML: "That symbol means <b>" + h.word + "</b>: <b>" + h.mean + "</b>. " +
            "Before you pour it, " + h.care + ". " + TEACHER_LINE
        };
      }

      /* --- symbol described in words -> the one word for it --- */
      if (kind === "symword") {
        var h2 = rng.pick(HAZ);
        return {
          qHTML: "A hazard symbol shows <b>" + h2.sym + "</b>. Which word goes with that symbol?",
          opts: mcq(rng, h2.word, HAZ.map(function (x) { return x.word; })),
          workedHTML: "<b>" + h2.word + "</b> — " + h2.mean + ". " +
            "The symbol to look for is " + h2.sym + "."
        };
      }

      /* --- the word -> the sensible extra care --- */
      if (kind === "care") {
        var h3 = rng.pick(HAZ);
        var pool3 = HAZ.filter(function (x) { return x !== h3; }).map(function (x) { return x.care; });
        return {
          qHTML: n + " has to use a liquid whose bottle is marked <b>" + h3.word +
            "</b>. What is the sensible extra care?",
          opts: mcq(rng, h3.care, pool3),
          workedHTML: h3.word.charAt(0).toUpperCase() + h3.word.slice(1) + " means " + h3.mean +
            ", so the sensible extra care is to <b>" + h3.care + "</b>. " + TEACHER_LINE
        };
      }

      /* --- hazard vs risk, the two words the lesson keeps apart --- */
      var defs = [
        { ask: "the thing that could hurt somebody", a: "a hazard" },
        { ask: "the chance that somebody actually gets hurt", a: "a risk" }
      ];
      var d = rng.pick(defs);
      return {
        qHTML: "In science safety words, what do we call <b>" + d.ask + "</b>?",
        opts: mcq(rng, d.a, ["a hazard", "a risk", "a rule", "a hazard symbol"]),
        workedHTML: "It is <b>" + d.a + "</b>. A <i>hazard</i> is the thing itself — the flame, the acid, the bag in the walkway. " +
          "The <i>risk</i> is the chance it hurts somebody, and every safety rule is there to make that chance smaller."
      };
    }
  });

  /* ---------------- sc_equipment ---------------- */

  /* The 19 pieces of equipment from the first two lessons. Every job is
     written so it fits exactly one of them: the qualifier ("in millilitres",
     "in grams", "a small amount of a solid") is what keeps two options from
     both being right. */
  var KIT = [
    { name: "beaker", job: "hold a liquid while it is heated, and pour it out easily", alts: [] },
    { name: "measuring cylinder", job: "measure a volume of liquid in millilitres", alts: ["cylinder", "measuring jug"] },
    { name: "test tube", job: "hold a small amount of liquid for a reaction", alts: ["tube"] },
    { name: "test tube rack", job: "stand test tubes upright so they cannot roll or fall over", alts: ["rack", "tube rack"] },
    { name: "thermometer", job: "measure a temperature in degrees Celsius", alts: [] },
    { name: "tripod", job: "stand over the burner so something can be heated above the flame", alts: ["tripod stand"] },
    { name: "gauze mat", job: "spread the heat evenly so the bottom of the glass never gets one hot spot", alts: ["gauze", "wire gauze"] },
    { name: "tongs", job: "pick something hot up without touching it", alts: ["pair of tongs"] },
    { name: "spatula", job: "scoop up a small amount of a solid powder", alts: [] },
    { name: "stirring rod", job: "stir a liquid until the solid has dissolved", alts: ["glass rod", "stirrer", "rod"] },
    { name: "funnel", job: "pour a liquid into a narrow opening without spilling it", alts: [] },
    { name: "evaporating basin", job: "hold a solution while the liquid evaporates away", alts: ["evaporating dish", "basin"] },
    { name: "heatproof mat", job: "protect the bench from the heat of the burner", alts: ["heat proof mat", "mat", "bench mat"] },
    { name: "safety glasses", job: "protect your eyes", alts: ["goggles", "safety goggles", "glasses"] },
    { name: "Bunsen burner", job: "heat things with a gas flame", alts: ["bunsen", "burner"] },
    { name: "conical flask", job: "hold a liquid so it can be swirled round without splashing out", alts: ["flask"] },
    { name: "dropper", job: "add a liquid a few drops at a time", alts: ["pipette", "teat pipette"] },
    { name: "balance", job: "measure a mass in grams", alts: ["scales", "scale", "electronic balance"] },
    { name: "filter paper", job: "catch the solid pieces as a mixture is poured through", alts: ["filter"] }
  ];
  /* "This is a beaker" but "These are tongs" and "This is filter paper" — the
     sentence frame has to fit the word, or the model sentence teaches an error. */
  var PLURAL_KIT = { "safety glasses": 1, "tongs": 1 };
  var MASS_KIT = { "filter paper": 1 };
  function kitFrame(name) {
    if (PLURAL_KIT[name]) return { intro: "These are " + name, subj: "They are" };
    if (MASS_KIT[name]) return { intro: "This is " + name, subj: "It is" };
    return { intro: "This is " + ("aeiou".indexOf(name.charAt(0).toLowerCase()) !== -1 ? "an " : "a ") + name,
             subj: "It is" };
  }

  /* Jobs on the bench. `avoid` keeps a second genuinely-right tool out of the
     options — the tripod and the gauze mat are both needed to heat a beaker,
     so neither is ever offered against the other. */
  var BENCH = [
    { need: "{n} has to lift a hot evaporating basin down off the tripod.", tool: "tongs", avoid: [],
      why: "fingers would be burnt; tongs hold the hot glass for you" },
    { need: "{n} has to measure exactly 50 mL of water for the experiment.", tool: "measuring cylinder", avoid: [],
      why: "the marks on a beaker are only rough — the measuring cylinder is the one built to measure volume" },
    { need: "{n} needs to know how hot the water is after two minutes.", tool: "thermometer", avoid: [],
      why: "temperature is a number in degrees Celsius, and this is the tool that gives it" },
    { need: "{n} has to scoop a little salt out of the jar.", tool: "spatula", avoid: [],
      why: "a spatula takes a small, controlled amount of a solid — you never pour from the jar" },
    { need: "{n} needs a stand that sits over the burner so a beaker can be heated above the flame.", tool: "tripod", avoid: ["gauze mat"],
      why: "the tripod is the stand; the gauze mat then goes on top of it" },
    { need: "{n} needs something flat on the tripod so the heat spreads under the beaker instead of hitting one spot.", tool: "gauze mat", avoid: ["tripod"],
      why: "the gauze mat spreads the heat, which is what stops the glass cracking" },
    { need: "{n} must pour water into a bottle with a very narrow neck.", tool: "funnel", avoid: [],
      why: "the funnel is wide at the top and narrow at the bottom, so nothing is spilt" },
    { need: "{n} wants the salt to dissolve faster in the water.", tool: "stirring rod", avoid: [],
      why: "stirring brings fresh water to the salt, so it dissolves faster" },
    { need: "{n} needs to protect the bench before lighting the burner.", tool: "heatproof mat", avoid: [],
      why: "the mat takes the heat instead of the bench" },
    { need: "{n} has to keep six test tubes standing up while they cool.", tool: "test tube rack", avoid: [],
      why: "test tubes have round bottoms — the rack is the only thing that keeps them upright" },
    { need: "{n} needs to add three drops of indicator to a test tube.", tool: "dropper", avoid: [],
      why: "a dropper gives you drops you can count" },
    { need: "{n} has to find the mass of the sugar in grams before it dissolves.", tool: "balance", avoid: [],
      why: "mass in grams comes from a balance, never from a measuring cylinder" },
    { need: "{n} wants to get the sand out of a beaker of sandy water.", tool: "filter paper", avoid: [],
      why: "the water goes through the paper and the sand stays behind on it" }
  ];

  register({
    id: "sc_equipment",
    teach: {
      what: "Every piece of equipment in the laboratory has one job. Once you can say the name and the job you can follow any instruction sheet, because the sheet just names the tools. The sentence to practise is: <b>This is a beaker. It is used to hold a liquid while it is heated.</b>",
      how: ["Say the name first: <i>This is a ___.</i>",
        "Say the job second: <i>It is used to ___.</i>",
        "For a job on the bench, look for the word that gives it away — <i>millilitres</i> means the measuring cylinder, <i>grams</i> means the balance, <i>hot</i> means the tongs.",
        "If two tools look possible, ask which one the job is actually built for."]
    },
    hint: "This is a ___. It is used to ___. Look for the giveaway word: millilitres, grams, hot, drops.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["job2name", "name2job", "bench", "bench", "type"]);

      /* --- the job -> which tool is it? --- */
      if (kind === "job2name") {
        var k = rng.pick(KIT);
        return {
          qHTML: "Which piece of equipment is used to <b>" + k.job + "</b>?",
          opts: mcq(rng, k.name, KIT.map(function (x) { return x.name; })),
          workedHTML: "<b>" + k.name + "</b>. Say it as a whole sentence: " + kitFrame(k.name).intro +
            ". " + kitFrame(k.name).subj + " used to " + k.job + "."
        };
      }

      /* --- the tool -> what is it for? --- */
      if (kind === "name2job") {
        var k2 = rng.pick(KIT);
        return {
          qHTML: n + " picks up the <b>" + k2.name + "</b>. What is it used for?",
          opts: mcq(rng, k2.job, KIT.map(function (x) { return x.job; })),
          workedHTML: kitFrame(k2.name).intro + ". " + kitFrame(k2.name).subj +
            " used to <b>" + k2.job + "</b>."
        };
      }

      /* --- a real job on the bench -> pick the tool --- */
      if (kind === "bench") {
        var b = rng.pick(BENCH);
        var pool = KIT.map(function (x) { return x.name; }).filter(function (name) {
          return name !== b.tool && b.avoid.indexOf(name) === -1;
        });
        return {
          qHTML: fill(b.need, n) + "<br>Which piece of equipment does " + n + " need?",
          opts: mcq(rng, b.tool, pool),
          workedHTML: "The <b>" + b.tool + "</b> — " + b.why + "."
        };
      }

      /* --- type the name into the sentence frame --- */
      var k3 = rng.pick(KIT), f3 = kitFrame(k3.name);
      var inp = wordInput("e", "the name of the equipment =", k3.name, k3.alts, "e.g. beaker");
      return {
        qHTML: n + " is writing an equipment card. The card says: <i>" + f3.subj + " used to " + k3.job +
          ".</i><br>Which piece of equipment is the card about?",
        inputs: [inp],
        workedHTML: f3.intro.replace(k3.name, "<b>" + k3.name + "</b>") + ". " + f3.subj +
          " used to " + k3.job + "."
      };
    }
  });

  /* ---------------- sc_bunsen ---------------- */

  /* The lighting sequence, in order. Step 1 is the teacher, and it stays step 1:
     nothing in this generator is written as permission to light a burner alone. */
  var STEPS = [
    "Wait for your teacher to check the bench and say you can start.",
    "Stand the burner on a heatproof mat, away from the edge of the bench.",
    "Push the rubber tubing firmly onto the gas tap and check it is not cracked.",
    "Tie long hair back and put your safety glasses on.",
    "Turn the collar to close the air hole.",
    "Light the match and hold it beside the top of the barrel.",
    "Turn on the gas tap.",
    "Turn the collar to open the air hole for the blue heating flame."
  ];
  var SAFETY_FLAME = "the safety flame (orange, air hole closed)";
  var HEATING_FLAME = "the heating flame (blue, air hole open)";
  var EITHER_FLAME = "either flame — it makes no difference";
  var FLAME_JOBS = [
    { ask: "heat a beaker of water on the tripod", a: HEATING_FLAME, why: "heating needs the hot blue flame" },
    { ask: "leave the burner alight while the results are written down", a: SAFETY_FLAME, why: "the orange flame is easy to see, so nobody walks into it" },
    { ask: "warm a test tube gently", a: SAFETY_FLAME, why: "the orange flame is the cooler one" },
    { ask: "boil water as fast as possible", a: HEATING_FLAME, why: "the blue flame is much hotter" }
  ];

  /* Take four consecutive steps and move ONE of them. The arrangement is only
     used if exactly one step can be lifted out to leave the rest in order —
     otherwise the question would have two right answers. */
  function loneIntruder(order) {
    var hits = [];
    for (var i = 0; i < order.length; i++) {
      var rest = order.slice(0, i).concat(order.slice(i + 1)), ok = true;
      for (var j = 1; j < rest.length; j++) if (rest[j] < rest[j - 1]) ok = false;
      if (ok) hits.push(i);
    }
    return hits.length === 1 ? hits[0] : -1;
  }

  register({
    id: "sc_bunsen",
    teach: {
      what: "The Bunsen burner has two flames and you choose between them with the <b>collar</b>, which opens and closes the <b>air hole</b>. Air hole <b>closed</b> gives the orange <b>safety flame</b>: cool, easy to see, and the one the burner stands on whenever you are not heating something. Air hole <b>open</b> gives the blue <b>heating flame</b>: much hotter, and much harder to see. " +
        "<b>The order of the steps is the safety.</b> You light the match first and turn the gas on second, never the other way round. " +
        "<b>None of this replaces your teacher</b> — step 1 is always waiting to be told you can start, and a lit burner is never left on its own.",
      how: ["Set up first: heatproof mat, tubing on the gas tap, hair back, safety glasses on.",
        "Close the air hole with the collar — you always light it on the safety flame.",
        "Light the match and hold it beside the top of the barrel, <i>then</i> turn on the gas.",
        "Open the air hole when you are ready to heat; close it again the moment you stop.",
        "Blue = hot and hard to see. Orange = cooler and easy to see."]
    },
    hint: "Match first, gas second. Air hole closed = orange safety flame; open = blue heating flame.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["next", "next", "order", "order", "flame", "collar", "why"]);

      /* --- three steps in order: what comes next? --- */
      if (kind === "next") {
        var i = rng.ri(0, STEPS.length - 4);
        var shown = [STEPS[i], STEPS[i + 1], STEPS[i + 2]];
        var right = STEPS[i + 3];
        var pool = STEPS.filter(function (s) { return shown.indexOf(s) === -1 && s !== right; });
        return {
          qHTML: n + " is lighting a Bunsen burner and has done these three steps, in this order:" +
            olHTML(shown) + "Which step comes <b>next</b>?",
          opts: mcq(rng, right, pool),
          workedHTML: "Next is: <b>" + right + "</b><br>The full order is: " + olHTML(STEPS)
        };
      }

      /* --- four steps with one moved: which one is out of place? --- */
      if (kind === "order") {
        var start = rng.ri(0, STEPS.length - 4);
        var moves = rng.shuffle([[3, 0], [0, 3], [3, 1], [0, 2], [2, 0], [1, 3]]);
        var order = null, badAt = -1;
        for (var m = 0; m < moves.length && badAt === -1; m++) {
          var run = [start, start + 1, start + 2, start + 3];
          var lifted = run.splice(moves[m][0], 1)[0];
          run.splice(moves[m][1], 0, lifted);
          var probe = loneIntruder(run);
          if (probe !== -1) { order = run; badAt = probe; }
        }
        if (badAt === -1) {                     /* [last, first, second, third] is always unique */
          order = [start + 3, start, start + 1, start + 2]; badAt = 0;
        }
        var listed = order.map(function (ix) { return STEPS[ix]; });
        var labels = ["Step 1", "Step 2", "Step 3", "Step 4"];
        /* where the displaced step should have gone, said against the other three */
        var rest = order.filter(function (ix, i) { return i !== badAt; })
          .sort(function (a, b) { return a - b; });
        var belongs;
        if (order[badAt] < rest[0]) belongs = "before all three of the others";
        else if (order[badAt] > rest[rest.length - 1]) belongs = "after all three of the others";
        else belongs = "after “" + STEPS[rest.filter(function (ix) { return ix < order[badAt]; }).pop()] + "”";
        return {
          qHTML: n + " wrote down the order the burner was lit in. <b>One step is in the wrong place.</b> Which one?" +
            olHTML(listed),
          opts: { list: labels.slice(), a: labels[badAt] },
          workedHTML: "<b>" + labels[badAt] + "</b> — “" + listed[badAt] + "” — belongs " + belongs +
            ". Take it out and the other three are in the right order.<br>The full sequence is: " + olHTML(STEPS)
        };
      }

      /* --- which flame for which job? --- */
      if (kind === "flame") {
        var f = rng.pick(FLAME_JOBS);
        return {
          qHTML: n + " needs to <b>" + f.ask + "</b>. Which flame?",
          opts: { list: [SAFETY_FLAME, HEATING_FLAME, EITHER_FLAME], a: f.a },
          workedHTML: "<b>" + f.a + "</b> — " + f.why + ". " +
            "The collar is what changes one into the other: closed for orange, open for blue."
        };
      }

      /* --- the parts, and what each one does --- */
      if (kind === "collar") {
        var parts = [
          { ask: "open and close the air hole", a: "the collar" },
          { ask: "let air in so the flame turns blue", a: "the air hole" },
          { ask: "stand the burner on so the bench is not damaged", a: "the heatproof mat" },
          { ask: "let the gas through to the burner", a: "the gas tap" }
        ];
        var p = rng.pick(parts);
        var pool2 = parts.map(function (x) { return x.a; }).concat(["the barrel"]);
        return {
          qHTML: "Which part do you use to <b>" + p.ask + "</b>?",
          opts: mcq(rng, p.a, pool2),
          workedHTML: "It is <b>" + p.a + "</b>. You turn the collar to open and close the air hole, and the air hole is what decides the colour of the flame."
        };
      }

      /* --- why the order and the colours matter --- */
      var whys = [
        { q: "Why do you light the burner with the air hole <b>closed</b>?",
          a: "so the flame is orange and everybody can see it",
          pool: ["so the flame is as hot as possible straight away",
            "so the gas burns with a clean blue flame",
            "so the burner uses less gas while it warms up"] },
        { q: "Why do you light the match <b>before</b> turning on the gas?",
          a: "so gas is not building up in the air before there is a flame to light it",
          pool: ["so the match burns for longer",
            "so the flame starts off blue instead of orange",
            "so the collar is easier to turn"] },
        { q: "Why do you close the air hole again as soon as you stop heating?",
          a: "so the flame goes orange and is easy to see, and the burner is cooler",
          pool: ["so the burner cannot be turned on again by mistake",
            "so the beaker cools down faster",
            "so the tubing does not get hot"] }
      ];
      var w = rng.pick(whys);
      return {
        qHTML: w.q,
        opts: mcq(rng, w.a, w.pool),
        workedHTML: "<b>" + w.a + "</b>. That is why the safety flame is the flame the burner sits on whenever nothing is being heated."
      };
    }
  });

  /* ============================================================
     MEASURING & RECORDING
     ============================================================ */

  /* ---------------- sc_measure ---------------- */

  /* Thermometer scales. `half` says whether a reading is allowed to sit
     halfway between two marks — only where that lands on a clean number. */
  var TSCALES = [
    { min: 0, max: 50, major: 10, minor: 2, half: true },
    { min: 0, max: 20, major: 5, minor: 1, half: true },
    { min: 0, max: 100, major: 20, minor: 5, half: false },
    { min: 0, max: 60, major: 10, minor: 2, half: true }
  ];
  var CSCALES = [
    { cap: 100, major: 20, minor: 5, half: false },
    { cap: 50, major: 10, minor: 2, half: true },
    { cap: 25, major: 5, minor: 1, half: true },
    { cap: 250, major: 50, minor: 10, half: false }
  ];
  /* a value that really sits on the drawing: on a mark, or halfway between two */
  function readingOn(rng, lo, hi, minor, allowHalf) {
    var steps = Math.round((hi - lo) / minor);
    var k = rng.ri(1, steps - 1);
    var v = lo + k * minor;
    if (allowHalf && rng.raw() < 0.4 && k < steps - 1) v += minor / 2;
    return v;
  }

  register({
    id: "sc_measure",
    teach: {
      what: "Reading a scale is two questions. First: <b>what is one small division worth?</b> Count how many small divisions the gap between two numbered lines is split into, and divide. Second: <b>where has it stopped?</b> Count the small marks up from the number below it. On a measuring cylinder the water curves up at the glass — that curve is the <b>meniscus</b>, and you read the <b>bottom</b> of it, with your eye level with the water. " +
        "Then the part everybody forgets: <b>a number with no unit means nothing</b>. 46 is not a temperature. 46 °C is.",
      how: ["Find two numbered lines and count the small divisions the gap is split into.",
        "One division = the gap between the numbers ÷ the number of divisions.",
        "Start at the number below the reading and count divisions up.",
        "If it has stopped exactly between two lines, add half a division.",
        "Write the number AND the unit: °C for temperature, mL for volume."]
    },
    hint: "Work out what one small division is worth first — and never write the number without its unit.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["therm", "therm", "cyl", "cyl", "div", "heading"]);

      /* --- read the thermometer --- */
      if (kind === "therm") {
        var ts = rng.pick(TSCALES);
        var t = readingOn(rng, ts.min, ts.max, ts.minor, ts.half);
        var below = Math.floor(t / ts.major) * ts.major;
        var inp = unitInput("v", "temperature (with the unit) =", t, "°C", "e.g. 24 °C");
        return {
          qHTML: n + " reads the thermometer after two minutes of heating. <b>What is the temperature?</b> " +
            "Write the unit as well as the number.",
          svg: thermometerSVG(ts, t),
          inputs: [inp],
          workedHTML: "The numbered lines are " + ts.major + " °C apart and the gap is split into " +
            (ts.major / ts.minor) + " small divisions, so one division = " + ts.major + " ÷ " +
            (ts.major / ts.minor) + " = " + fmt(ts.minor) + " °C.<br>" +
            (t === below ? "The liquid stops exactly on the " + below + " line"
              : "The liquid stops " + fmt(t - below) + " °C above the " + below + " line") +
            ", so the reading is <b>" + inp.answer + "</b>. " +
            "A number on its own would not tell anyone what it means."
        };
      }

      /* --- read the measuring cylinder --- */
      if (kind === "cyl") {
        var cs = rng.pick(CSCALES);
        var v = readingOn(rng, 0, cs.cap, cs.minor, cs.half);
        var below2 = Math.floor(v / cs.major) * cs.major;
        var inp2 = unitInput("v", "volume (with the unit) =", v, "mL", "e.g. 35 mL");
        return {
          qHTML: n + " pours water into a measuring cylinder. <b>What volume is in it?</b> " +
            "Read the bottom of the curved surface, and write the unit as well as the number.",
          svg: cylinderSVG(cs, v),
          inputs: [inp2],
          workedHTML: "The numbered lines are " + cs.major + " mL apart and the gap is split into " +
            (cs.major / cs.minor) + " small divisions, so one division = " + cs.major + " ÷ " +
            (cs.major / cs.minor) + " = " + fmt(cs.minor) + " mL.<br>" +
            (v === below2 ? "The bottom of the meniscus sits exactly on the " + below2 + " line"
              : "The bottom of the meniscus is " + fmt(v - below2) + " mL above the " + below2 + " line") +
            ", so the volume is <b>" + inp2.answer + "</b>."
        };
      }

      /* --- how much is one small mark worth? --- */
      if (kind === "div") {
        if (rng.raw() < 0.5) {
          var ts2 = rng.pick(TSCALES);
          var t2 = readingOn(rng, ts2.min, ts2.max, ts2.minor, false);
          var inp3 = unitInput("d", "one small division (with the unit) =", ts2.minor, "°C", "e.g. 2 °C");
          return {
            qHTML: "Look at the scale on this thermometer. <b>How much is one small division worth?</b> " +
              "Write the unit as well as the number.",
            svg: thermometerSVG(ts2, t2),
            inputs: [inp3],
            workedHTML: "Between two numbered lines there is a gap of " + ts2.major + " °C, split into " +
              (ts2.major / ts2.minor) + " small divisions. " + ts2.major + " ÷ " +
              (ts2.major / ts2.minor) + " = <b>" + inp3.answer + "</b> for one division. " +
              "That is also the smallest change this thermometer can show you."
          };
        }
        var cs2 = rng.pick(CSCALES);
        var v2 = readingOn(rng, 0, cs2.cap, cs2.minor, false);
        var inp4 = unitInput("d", "one small division (with the unit) =", cs2.minor, "mL", "e.g. 5 mL");
        return {
          qHTML: "Look at the scale on this measuring cylinder. <b>How much is one small division worth?</b> " +
            "Write the unit as well as the number.",
          svg: cylinderSVG(cs2, v2),
          inputs: [inp4],
          workedHTML: "Between two numbered lines there is a gap of " + cs2.major + " mL, split into " +
            (cs2.major / cs2.minor) + " small divisions. " + cs2.major + " ÷ " +
            (cs2.major / cs2.minor) + " = <b>" + inp4.answer + "</b> for one division."
        };
      }

      /* --- the heading of the results table needs the unit --- */
      var isTemp = rng.raw() < 0.5;
      var step = rng.pick([30, 60]);
      var start = isTemp ? rng.ri(16, 24) : rng.ri(5, 15);
      var rise = isTemp ? rng.pick([6, 8, 10]) : rng.pick([5, 10]);
      var rows = [];
      for (var r = 0; r < 4; r++) rows.push([String(r * step), String(start + r * rise)]);
      var right = isTemp ? "Temperature (°C)" : "Volume (mL)";
      var pool = isTemp ? ["Temperature (°C)", "Temperature (mL)", "Temperature (g)", "Temperature (s)"]
        : ["Volume (mL)", "Volume (°C)", "Volume (g)", "Volume (cm)"];
      return {
        qHTML: n + " recorded the results but has not finished the second heading:" +
          tableHTML("Time (s)", "?", rows) +
          "Which heading makes the numbers in that column mean something?",
        opts: mcq(rng, right, pool),
        workedHTML: "<b>" + right + "</b>. The heading carries the unit, so every number underneath is read the same way — " +
          "and you never have to write the unit again in the boxes."
      };
    }
  });

  /* ---------------- sc_graph ---------------- */

  /* TAILS, with a testable meaning for each letter. Every clause below is
     written twice — once as it looks when it is right, once as it looks when
     it is missing — so a question can print four rights and one wrong. */
  var TAILS = [
    { L: "T", word: "Title",
      ok: "it has a title at the top: “{title}”",
      no: "there is nothing written at the top, so you cannot tell what the graph is about",
      means: "Title — a heading that says what the graph shows" },
    { L: "A", word: "Axes",
      ok: "{iv} is along the bottom and {dv} is up the side",
      no: "the axes are the wrong way round: {dv} is along the bottom and {iv} is up the side",
      means: "Axes — the changed variable along the bottom, the measured variable up the side" },
    { L: "I", word: "Intervals",
      ok: "the numbers on both axes go up in even steps",
      no: "the numbers along the bottom go 0, 10, 20, 50, 60 — the steps are not even",
      means: "Intervals — the numbers on each axis going up in even steps" },
    { L: "L", word: "Labels",
      ok: "both axes are labelled with a name and a unit",
      no: "the axes have names but no units, so the numbers do not mean anything",
      means: "Labels — a name and a unit on each axis" },
    { L: "S", word: "Scale",
      ok: "the points are spread out across most of the grid",
      no: "every point is squashed into the bottom left corner of the grid",
      means: "Scale — a scale chosen so the points fill most of the grid" }
  ];
  var GCTX = [
    { iv: "the time in minutes", dv: "the temperature of the water",
      title: "How the temperature of water changed while it was heated" },
    { iv: "the volume of water in the beaker", dv: "the time it took to boil",
      title: "How the volume of water changed the time it took to boil" },
    { iv: "the number of spoons of salt", dv: "the mass that dissolved",
      title: "How much salt dissolved in 100 mL of water" },
    { iv: "the number of layers of paper", dv: "the temperature after five minutes",
      title: "How the number of layers changed the temperature after five minutes" }
  ];

  register({
    id: "sc_graph",
    teach: {
      what: "<b>TAILS</b> is the checklist a line graph has to pass. <b>T</b>itle — a heading that says what the graph shows. <b>A</b>xes — the variable you changed goes along the bottom, the one you measured goes up the side. <b>I</b>ntervals — the numbers on each axis go up in even steps. <b>L</b>abels — each axis has a name <i>and</i> a unit. <b>S</b>cale — the points spread across most of the grid, not squashed into a corner. " +
        "The axes rule is the one worth learning first: <b>what you changed goes across, what you measured goes up</b>.",
      how: ["Write the title before you plot anything.",
        "Decide the axes: changed variable → horizontal, measured variable → vertical.",
        "Look at your biggest number and choose even steps that reach it.",
        "Label each axis with the name and the unit, e.g. Time (s).",
        "Plot, then run through T-A-I-L-S once before you hand it in."]
    },
    hint: "T-A-I-L-S. Changed variable across the bottom, measured variable up the side.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var c = rng.pick(GCTX);
      function say(s) {
        return s.replace(/\{iv\}/g, c.iv).replace(/\{dv\}/g, c.dv).replace(/\{title\}/g, c.title);
      }
      var kind = rng.pick(["missing", "missing", "letter", "axis", "axis"]);

      /* --- four parts right, one missing: which letter? --- */
      if (kind === "missing") {
        var gone = rng.pick(TAILS);
        var good = TAILS.filter(function (x) { return x !== gone; }).map(function (x) { return say(x.ok); });
        return {
          qHTML: n + " drew a line graph of " + c.dv + " against " + c.iv + ". On this graph, " +
            good.join("; ") + ". But " + say(gone.no) + ".<br>Which part of <b>TAILS</b> is missing?",
          opts: { list: TAILS.map(function (x) { return x.word; }), a: gone.word },
          workedHTML: "The missing one is <b>" + gone.word + "</b> (the <b>" + gone.L +
            "</b> of TAILS): " + gone.means.replace(/^[^—]*—\s*/, "") +
            ". Everything else on the list is already there."
        };
      }

      /* --- what does the letter stand for? --- */
      if (kind === "letter") {
        var t = rng.pick(TAILS);
        return {
          qHTML: "In <b>TAILS</b>, what does the <b>" + t.L + "</b> stand for?",
          opts: mcq(rng, t.means, TAILS.map(function (x) { return x.means; }), 3),
          workedHTML: "<b>" + t.means + "</b>. TAILS runs Title, Axes, Intervals, Labels, Scale — check them in that order."
        };
      }

      /* --- which variable goes on which axis? --- */
      var wantX = rng.raw() < 0.5;
      var ansV = wantX ? c.iv : c.dv;
      return {
        qHTML: n + " changes " + c.iv + " and measures " + c.dv + ". Which one goes on the <b>" +
          (wantX ? "horizontal axis (along the bottom)" : "vertical axis (up the side)") + "</b>?",
        opts: { list: [c.iv, c.dv, "either one — it makes no difference"], a: ansV },
        workedHTML: "<b>" + ansV + "</b>. What you <i>changed</i> goes along the bottom and what you <i>measured</i> goes up the side, so here " +
          c.iv + " is the horizontal axis and " + c.dv + " is the vertical axis."
      };
    }
  });

  /* ---------------- sc_trend ---------------- */

  var TREND_WORDS = {
    up: { answer: "increased",
      alts: ["increase", "increases", "increasing", "went up", "goes up", "rose", "rises", "risen", "got higher", "got hotter", "gets higher", "goes higher"] },
    down: { answer: "decreased",
      alts: ["decrease", "decreases", "decreasing", "went down", "goes down", "fell", "falls", "fallen", "dropped", "drops", "got lower", "got colder", "cooled", "cooled down"] },
    flat: { answer: "stayed the same",
      alts: ["stayed constant", "stays the same", "stay the same", "did not change", "didnt change", "does not change", "no change", "constant", "same", "remained the same", "stayed level"] }
  };
  /* Each context carries the directions its story can honestly go in: water over
     a burner heats up, water on the bench cools down, water already boiling sits
     still at 100 °C. `lo`/`hi` are the range the first reading is drawn from. */
  var TCTX = [
    { unitX: "s", nameX: "time", stepX: 30, unitY: "°C", nameY: "temperature",
      thing: "water in a beaker over a Bunsen burner", dirs: ["up"], lo: 16, hi: 30 },
    { unitX: "min", nameX: "time", stepX: 1, unitY: "°C", nameY: "temperature",
      thing: "water cooling on the bench", dirs: ["down"], lo: 46, hi: 70 },
    { unitX: "s", nameX: "time", stepX: 30, unitY: "mL", nameY: "volume",
      thing: "water dripping into a measuring cylinder", dirs: ["up"], lo: 10, hi: 26 },
    { unitX: "min", nameX: "time", stepX: 1, unitY: "°C", nameY: "temperature",
      thing: "water that has already reached boiling point", dirs: ["flat"], lo: 100, hi: 100 }
  ];

  register({
    id: "sc_trend",
    teach: {
      what: "A <b>trend</b> is the story the numbers tell as a whole: they went up, they went down, or they stayed the same. Write it in one sentence with the frame <b>As ___ increased, ___ ___.</b> — for example, <i>As the time increased, the temperature increased.</i> " +
        "An <b>anomaly</b> is the one reading that does not fit the pattern. It usually means somebody misread the scale or wrote the number down wrongly, not that nature suddenly changed. Every measurement carries some <b>uncertainty</b>, which is why two groups can get slightly different numbers and both be right.",
      how: ["Read down the measured column: are the numbers getting bigger, smaller, or staying the same?",
        "Say it with the frame: As ___ increased, ___ ___.",
        "Look for the one reading that breaks the pattern — that is the anomaly.",
        "Say what probably caused it: a misread scale, a wrong number written down.",
        "An anomaly is left on the graph but not used when you draw the line."]
    },
    hint: "As ___ increased, ___ increased / decreased / stayed the same. The anomaly is the one that breaks the pattern.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["trend", "trend", "anomaly", "anomaly", "cause", "uncert"]);
      /* the anomaly questions need a rising story, so they only ever use a rising context */
      var c = rng.pick(kind === "trend" || kind === "uncert" ? TCTX
        : TCTX.filter(function (x) { return x.dirs.indexOf("up") !== -1; }));

      /* --- state the trend from a generated table --- */
      if (kind === "trend") {
        var dir = rng.pick(c.dirs);
        var start = rng.ri(c.lo, c.hi);
        var step = dir === "up" ? rng.pick([4, 6, 8]) : dir === "down" ? -rng.pick([3, 4, 5]) : 0;
        var rows = [], i;
        for (i = 0; i < 5; i++) rows.push([String(i * c.stepX), String(start + i * step)]);
        var w = TREND_WORDS[dir];
        var inp = wordInput("t", "the missing words =", w.answer, w.alts, "e.g. increased");
        return {
          qHTML: n + " measured the " + c.nameY + " of " + c.thing + " five times:" +
            tableHTML(c.nameX.charAt(0).toUpperCase() + c.nameX.slice(1) + " (" + c.unitX + ")",
              c.nameY.charAt(0).toUpperCase() + c.nameY.slice(1) + " (" + c.unitY + ")", rows) +
            "Finish the sentence: <b>As the " + c.nameX + " increased, the " + c.nameY + " ______.</b>",
          inputs: [inp],
          workedHTML: "Reading down the " + c.nameY + " column: " +
            rows.map(function (r) { return r[1]; }).join(", ") + " " + c.unitY + ". " +
            (dir === "flat" ? "Every reading is the same." :
              "Each reading is " + Math.abs(step) + " " + c.unitY + " " + (step > 0 ? "more" : "less") + " than the one before.") +
            "<br>As the " + c.nameX + " increased, the " + c.nameY + " <b>" + inp.answer + "</b>."
        };
      }

      /* --- spot the anomaly in a generated table --- */
      if (kind === "anomaly" || kind === "cause") {
        var s0 = rng.ri(18, 26), st = rng.pick([6, 8, 10]);
        var vals = [], j;
        for (j = 0; j < 6; j++) vals.push(s0 + j * st);
        var bad = rng.ri(1, 4);                       /* never the first or last reading */
        /* st + 3, 5 or 7 is more than a whole step out, and can never be a multiple
           of the step — so the wrong reading never collides with a real one */
        var offBy = rng.pick([-1, 1]) * (st + rng.pick([3, 5, 7]));
        var shown = vals.slice();
        shown[bad] = vals[bad] + offBy;
        var rows2 = [], k;
        for (k = 0; k < 6; k++) rows2.push([String(k * c.stepX), String(shown[k])]);
        var tbl = tableHTML(c.nameX.charAt(0).toUpperCase() + c.nameX.slice(1) + " (" + c.unitX + ")",
          c.nameY.charAt(0).toUpperCase() + c.nameY.slice(1) + " (" + c.unitY + ")", rows2);
        var asText = function (x) { return x + " " + c.unitY; };

        if (kind === "anomaly") {
          return {
            qHTML: n + " recorded these readings. Every reading except one follows the same pattern." + tbl +
              "Which reading is the <b>anomaly</b>?",
            opts: { list: shown.map(asText), a: asText(shown[bad]) },
            workedHTML: "The " + c.nameY + " goes up by " + st + " " + c.unitY + " every " + c.stepX + " " +
              c.unitX + ", so at " + (bad * c.stepX) + " " + c.unitX + " it should be about " + vals[bad] + " " +
              c.unitY + ". The recorded value is <b>" + asText(shown[bad]) + "</b> — that is the anomaly. " +
              "You leave it on the graph, but you do not let it pull your line of best fit."
          };
        }
        var right = "the scale was misread, or the number was written down wrongly";
        return {
          qHTML: n + " recorded these readings, and " + asText(shown[bad]) + " does not fit the pattern." + tbl +
            "What is the <b>most likely</b> cause of that anomaly?",
          opts: mcq(rng, right, [
            "the " + c.nameY + " really did jump and then go back to the pattern",
            "the graph is missing its title",
            "the readings were taken too close together",
            "every other reading in the table is wrong"]),
          workedHTML: "The likely cause is that <b>" + right + "</b>. One reading out of six that breaks a steady pattern is almost always a reading or recording mistake. " +
            "The honest thing is to keep it in the table, mark it as an anomaly, and repeat that measurement if you can."
        };
      }

      /* --- uncertainty: three groups, three slightly different numbers --- */
      var base = rng.ri(70, 88), spread = rng.pick([1, 2]);
      var three = [base - spread, base, base + spread];
      var rightU = "every measurement has some uncertainty, so the real value is close to " + base + " " + c.unitY;
      return {
        qHTML: "Three groups measured the same " + c.nameY + " and wrote down " + three[0] + " " + c.unitY +
          ", " + three[1] + " " + c.unitY + " and " + three[2] + " " + c.unitY +
          ".<br>What do those three numbers tell you?",
        opts: mcq(rng, rightU, [
          "two of the three groups must have done the experiment wrongly",
          "the " + c.nameY + " changed while the groups were measuring",
          "the readings are too far apart to be any use",
          "only the middle number counts and the other two are thrown away"]),
        workedHTML: "<b>" + rightU + "</b>. The three readings are within " + (2 * spread) + " " + c.unitY +
          " of each other, which is the ordinary uncertainty of reading a scale by eye. " +
          "It is not a mistake — it is why scientists repeat measurements."
      };
    }
  });

  /* ============================================================
     WHAT THINGS ARE MADE OF
     ============================================================ */

  /* ---------------- sc_atom ---------------- */

  var ELEMENTS = [
    { name: "hydrogen", sym: "H", Z: 1 }, { name: "helium", sym: "He", Z: 2 },
    { name: "lithium", sym: "Li", Z: 3 }, { name: "beryllium", sym: "Be", Z: 4 },
    { name: "boron", sym: "B", Z: 5 }, { name: "carbon", sym: "C", Z: 6 },
    { name: "nitrogen", sym: "N", Z: 7 }, { name: "oxygen", sym: "O", Z: 8 },
    { name: "fluorine", sym: "F", Z: 9 }, { name: "neon", sym: "Ne", Z: 10 },
    { name: "sodium", sym: "Na", Z: 11 }, { name: "magnesium", sym: "Mg", Z: 12 },
    { name: "aluminium", sym: "Al", Z: 13 }, { name: "silicon", sym: "Si", Z: 14 },
    { name: "phosphorus", sym: "P", Z: 15 }, { name: "sulfur", sym: "S", Z: 16 },
    { name: "chlorine", sym: "Cl", Z: 17 }, { name: "argon", sym: "Ar", Z: 18 },
    { name: "potassium", sym: "K", Z: 19 }, { name: "calcium", sym: "Ca", Z: 20 }
  ];
  var IN_NUCLEUS = "in the nucleus, at the centre of the atom";
  var ROUND_NUCLEUS = "moving around the nucleus, outside it";
  var PARTICLES = [
    { name: "proton", charge: "positive (+)", where: IN_NUCLEUS },
    { name: "neutron", charge: "no charge (neutral)", where: IN_NUCLEUS },
    { name: "electron", charge: "negative (−)", where: ROUND_NUCLEUS }
  ];

  register({
    id: "sc_atom",
    teach: {
      what: "An <b>atom</b> is built from three particles. In the middle is the <b>nucleus</b>, and it holds the <b>protons</b> (positive) and the <b>neutrons</b> (no charge). The <b>electrons</b> (negative) move around the outside of the nucleus. " +
        "In a normal, <b>neutral</b> atom the number of protons and the number of electrons are <b>the same</b> — one positive for every negative — so the charges cancel and the atom has no overall charge. The number of protons is what makes it that <b>element</b>: 6 protons is always carbon.",
      how: ["Nucleus in the middle: protons + neutrons. Electrons outside, moving around it.",
        "Charges: proton +, electron −, neutron none.",
        "Neutral atom: electrons = protons. Always.",
        "The proton number names the element — change it and it is a different element."]
    },
    hint: "Protons +, electrons −, neutrons none. In a neutral atom, electrons = protons.",
    gen: function (rng) {
      var e = rng.pick(ELEMENTS);
      var kind = rng.pick(["counts", "counts", "charge", "where", "which", "neutral"]);

      /* --- protons and electrons in a neutral atom --- */
      if (kind === "counts") {
        var p = numInput("p", "number of protons =", e.Z, 0.001);
        var el = numInput("e", "number of electrons =", e.Z, 0.001);
        return {
          qHTML: "The proton number of <b>" + e.name + "</b> (" + e.sym + ") is <b>" + e.Z +
            "</b>. Fill in the counts for one <b>neutral</b> atom of " + e.name + ".",
          inputs: [p, el],
          workedHTML: "The proton number IS the number of protons, so the number of protons is <b>" +
            p.answer + "</b>. A neutral atom has one electron for every proton, so the number of electrons is <b>" +
            el.answer + "</b> too. Every + on a proton is cancelled by a − on an electron, " +
            "which is what <i>neutral</i> means."
        };
      }

      /* --- the charge on a named particle --- */
      if (kind === "charge") {
        var pc = rng.pick(PARTICLES);
        return {
          qHTML: "What is the charge on a <b>" + pc.name + "</b>?",
          opts: { list: PARTICLES.map(function (x) { return x.charge; }), a: pc.charge },
          workedHTML: "A " + pc.name + " has <b>" + pc.charge + "</b>. " +
            "The three together: proton positive, electron negative, neutron no charge at all."
        };
      }

      /* --- where the particle sits --- */
      if (kind === "where") {
        var pw = rng.pick(PARTICLES);
        return {
          qHTML: "Where in the atom is the <b>" + pw.name + "</b> found?",
          opts: mcq(rng, pw.where, [IN_NUCLEUS, ROUND_NUCLEUS,
            "spread evenly all the way through the atom",
            "outside the atom altogether"]),
          workedHTML: "The " + pw.name + " is <b>" + pw.where + "</b>. " +
            "Protons and neutrons stay in the nucleus; only the electrons are on the outside."
        };
      }

      /* --- name the particle from its description --- */
      if (kind === "which") {
        var pk = rng.pick(PARTICLES);
        var clue = pk.name === "neutron" ? "sits in the nucleus and has no charge at all"
          : pk.name === "proton" ? "sits in the nucleus and has a positive charge"
            : "has a negative charge and moves around the outside of the nucleus";
        return {
          qHTML: "Which particle <b>" + clue + "</b>?",
          opts: mcq(rng, pk.name, ["proton", "neutron", "electron", "nucleus"]),
          workedHTML: "That is the <b>" + pk.name + "</b>: charge " + pk.charge + ", found " + pk.where + "."
        };
      }

      /* --- why a neutral atom has no overall charge --- */
      var rightN = "it has the same number of protons (+) as electrons (−), so the charges cancel";
      return {
        qHTML: "An atom of <b>" + e.name + "</b> has <b>" + e.Z +
          "</b> protons and <b>" + e.Z + "</b> electrons. Why does it have <b>no overall charge</b>?",
        opts: mcq(rng, rightN, [
          "it has no charged particles in it at all",
          "the neutrons cancel out the protons",
          "the nucleus is too small to have a charge",
          "the electrons move too fast for their charge to count"]),
        workedHTML: "<b>" + rightN + "</b>. Every + on a proton is cancelled by a − on an electron, " +
          "so the charges add up to zero. Neutrons have no charge at all, so they change the mass but never the charge."
      };
    }
  });

  /* ---------------- sc_bonding ---------------- */

  /* Each substance is described the way a model kit shows it, never by a name
     the student has to already know. `els` is how many different elements are
     in it — one kind of atom means an element, two or more means a compound. */
  var SUBS = [
    { f: "O₂", desc: "two oxygen atoms joined together", type: "element", els: 1, atoms: 2, shape: "molecule", bond: "covalent" },
    { f: "H₂", desc: "two hydrogen atoms joined together", type: "element", els: 1, atoms: 2, shape: "molecule", bond: "covalent" },
    { f: "N₂", desc: "two nitrogen atoms joined together", type: "element", els: 1, atoms: 2, shape: "molecule", bond: "covalent" },
    { f: "H₂O", desc: "two hydrogen atoms joined to one oxygen atom", type: "compound", els: 2, atoms: 3, shape: "molecule", bond: "covalent" },
    { f: "CO₂", desc: "one carbon atom joined to two oxygen atoms", type: "compound", els: 2, atoms: 3, shape: "molecule", bond: "covalent" },
    { f: "CH₄", desc: "one carbon atom joined to four hydrogen atoms", type: "compound", els: 2, atoms: 5, shape: "molecule", bond: "covalent" },
    { f: "NH₃", desc: "one nitrogen atom joined to three hydrogen atoms", type: "compound", els: 2, atoms: 4, shape: "molecule", bond: "covalent" },
    { f: "NaCl", desc: "sodium ions and chloride ions stacked in a repeating cube pattern", type: "compound", els: 2, atoms: 0, shape: "lattice", bond: "ionic" },
    { f: "MgO", desc: "magnesium ions and oxide ions stacked in a repeating pattern", type: "compound", els: 2, atoms: 0, shape: "lattice", bond: "ionic" },
    { f: "Cu", desc: "copper ions packed in a lattice with electrons that move between them", type: "element", els: 1, atoms: 0, shape: "lattice", bond: "metallic" },
    { f: "Fe", desc: "iron ions packed in a lattice with electrons that move between them", type: "element", els: 1, atoms: 0, shape: "lattice", bond: "metallic" },
    { f: "Al", desc: "aluminium ions packed in a lattice with electrons that move between them", type: "element", els: 1, atoms: 0, shape: "lattice", bond: "metallic" }
  ];
  var SHAPE_OPT = {
    molecule: "a molecule — a small group of atoms joined together",
    lattice: "a lattice — a huge repeating pattern of particles"
  };
  var ELECTRON_OPT = {
    covalent: "two atoms share a pair of electrons",
    ionic: "one atom gives electrons to another, and the two ions then attract each other",
    metallic: "the electrons are free to move through a lattice of positive metal ions"
  };

  register({
    id: "sc_bonding",
    teach: {
      what: "Count the <b>kinds</b> of atom first. One kind only is an <b>element</b> (O₂, Cu). Two or more kinds joined together is a <b>compound</b> (H₂O, NaCl). Then look at the shape: a small group of atoms joined together is a <b>molecule</b>; a huge repeating pattern of particles is a <b>lattice</b>. " +
        "There are three <b>bonds</b>, and each one is a different thing happening to the electrons. <b>Covalent</b>: two atoms <i>share</i> a pair. <b>Ionic</b>: one atom <i>gives</i> electrons away, both become <b>ions</b>, and + and − attract. <b>Metallic</b>: the electrons leave their atoms and move freely through a lattice of positive ions.",
      how: ["How many different kinds of atom? One = element, two or more = compound.",
        "Small joined group = molecule. Repeating pattern = lattice.",
        "Two non-metals sharing → covalent.",
        "A metal giving electrons to a non-metal → ionic, and you get ions.",
        "A metal on its own → metallic, with electrons free to move."]
    },
    hint: "One kind of atom = element. Share = covalent, give = ionic, free to move = metallic.",
    gen: function (rng) {
      var s = rng.pick(SUBS);
      var kind = rng.pick(["type", "type", "shape", "bond", "bond", "electrons", "count", "ion"]);

      /* --- element or compound? --- */
      if (kind === "type") {
        return {
          qHTML: "A model shows <b>" + s.desc + "</b> (" + s.f + ").<br>Is it an <b>element</b> or a <b>compound</b>?",
          opts: { list: ["an element", "a compound", "a mixture"], a: "a" + (s.type === "element" ? "n element" : " compound") },
          workedHTML: "There " + (s.els === 1 ? "is only <b>one</b> kind of " + (s.shape === "lattice" ? "particle" : "atom")
              : "are <b>" + s.els + "</b> different kinds of " + (s.shape === "lattice" ? "particle" : "atom")) +
            " in " + s.f + ", so it is <b>a" + (s.type === "element" ? "n element" : " compound") + "</b>. " +
            "It is not a mixture: these particles are <i>joined</i>, and a mixture is only stirred together."
        };
      }

      /* --- molecule or lattice? --- */
      if (kind === "shape") {
        return {
          qHTML: "A model shows <b>" + s.desc + "</b> (" + s.f + ").<br>Which describes it best?",
          opts: mcq(rng, SHAPE_OPT[s.shape], [SHAPE_OPT.molecule, SHAPE_OPT.lattice,
            "a mixture — two substances stirred together",
            "a solution — a solid dissolved in a liquid"]),
          workedHTML: "It is <b>" + SHAPE_OPT[s.shape] + "</b>. " +
            (s.shape === "molecule" ? "You can point to where one molecule stops and the next begins."
              : "The pattern just keeps repeating — there is no single small unit to point at.")
        };
      }

      /* --- which bond? --- */
      if (kind === "bond") {
        return {
          qHTML: "What kind of bond holds <b>" + s.f + "</b> (" + s.desc + ") together?",
          opts: { list: ["covalent", "ionic", "metallic"], a: s.bond },
          workedHTML: "<b>" + s.bond + "</b>. " + ELECTRON_OPT[s.bond].charAt(0).toUpperCase() +
            ELECTRON_OPT[s.bond].slice(1) + "."
        };
      }

      /* --- what happens to the electrons? --- */
      if (kind === "electrons") {
        var b = rng.pick(["covalent", "ionic", "metallic"]);
        return {
          qHTML: "In a <b>" + b + "</b> bond, what happens to the electrons?",
          opts: mcq(rng, ELECTRON_OPT[b], [ELECTRON_OPT.covalent, ELECTRON_OPT.ionic, ELECTRON_OPT.metallic,
            "the electrons stay exactly where they were and nothing holds the particles together"]),
          workedHTML: "In a " + b + " bond, <b>" + ELECTRON_OPT[b] + "</b>. " +
            "Share = covalent, give = ionic, free to move = metallic."
        };
      }

      /* --- count what is in one molecule --- */
      if (kind === "count") {
        var mol = SUBS.filter(function (x) { return x.shape === "molecule"; });
        var m = rng.pick(mol);
        if (rng.raw() < 0.5) {
          var ia = numInput("a", "atoms in one molecule =", m.atoms, 0.001);
          return {
            qHTML: "One molecule of <b>" + m.f + "</b> is " + m.desc +
              ".<br>How many atoms are there <b>altogether</b> in one molecule?",
            inputs: [ia],
            workedHTML: "Count every atom in the description: " + m.desc + " → <b>" + ia.answer + "</b> atoms."
          };
        }
        var ie = numInput("d", "different elements =", m.els, 0.001);
        return {
          qHTML: "One molecule of <b>" + m.f + "</b> is " + m.desc +
            ".<br>How many <b>different elements</b> are in it?",
          inputs: [ie],
          workedHTML: "Count the <i>kinds</i> of atom, not the atoms: <b>" + ie.answer + "</b>. " +
            (m.els === 1 ? "One kind only, so " + m.f + " is an element."
              : m.els + " kinds joined together, so " + m.f + " is a compound.")
        };
      }

      /* --- ions: what an atom becomes when it gives or takes an electron --- */
      var giving = rng.raw() < 0.5;
      var story = giving ? "A sodium atom <b>gives away</b> one electron."
        : "A chlorine atom <b>takes in</b> one extra electron.";
      var rightI = giving ? "a positive ion" : "a negative ion";
      return {
        qHTML: story + "<br>What has the atom become?",
        opts: mcq(rng, rightI, ["a positive ion", "a negative ion", "a neutral atom", "a molecule"]),
        workedHTML: "It becomes <b>" + rightI + "</b>. " +
          (giving ? "Losing a negative electron leaves one more positive proton than negative electron, so the charge is +."
            : "Gaining a negative electron leaves one more negative electron than positive proton, so the charge is −.") +
          " In an ionic bond the + ion and the − ion then attract each other."
      };
    }
  });

  /* ---------------- sc_mixtures ---------------- */

  var PURE = [
    "a bottle of distilled water", "a piece of copper wire", "a lump of pure sulfur",
    "a cylinder of oxygen gas", "a diamond", "a spoonful of pure salt"
  ];
  var MIXED = [
    "sea water", "the air in the room", "muddy river water", "orange juice with the bits left in",
    "tea with sugar stirred into it", "sand mixed with salt", "milk"
  ];
  var DISSOLVE = "the {s} disappears and the water stays clear — it is soluble";
  var SINKS = "the {s} sinks to the bottom in whole grains and the water above stays clear — it is insoluble";
  var FLOATS = "the {s} will not mix in at all; it sits in a separate layer on top — it is insoluble";
  var CLOUDY = "the water turns cloudy and the tiny pieces slowly settle — it is a suspension";
  var SOLIDS = [
    { s: "salt", out: DISSOLVE }, { s: "sugar", out: DISSOLVE },
    { s: "instant coffee", out: DISSOLVE }, { s: "sand", out: SINKS },
    { s: "small stones", out: SINKS }, { s: "cooking oil", out: FLOATS },
    { s: "chalk powder", out: CLOUDY }, { s: "flour", out: CLOUDY }
  ];
  var SOLUTIONS = [
    { solute: "sugar", solvent: "water", made: "sweet water" },
    { solute: "salt", solvent: "water", made: "salty water" },
    { solute: "instant coffee", solvent: "hot water", made: "a cup of coffee" },
    { solute: "sugar", solvent: "hot tea", made: "sweet tea" }
  ];

  register({
    id: "sc_mixtures",
    teach: {
      what: "A <b>pure substance</b> is one substance with nothing else in it. A <b>mixture</b> is two or more substances together, not joined — you could take them apart again. " +
        "When a solid disappears into a liquid you get a <b>solution</b>: the thing that dissolves is the <b>solute</b>, the liquid that does the dissolving is the <b>solvent</b>. If it dissolves it is <b>soluble</b>; if it does not it is <b>insoluble</b>. " +
        "A <b>suspension</b> is the in-between one: the pieces are too small to see one by one, so the liquid looks cloudy, but they are still solid pieces and they slowly settle to the bottom.",
      how: ["Ask first: one substance, or more than one? One = pure, more = mixture.",
        "In a solution, the solute is the solid and the solvent is the liquid.",
        "Solution: clear, and it stays mixed. Suspension: cloudy, and it settles.",
        "Salt and sugar dissolve in water. Sand and oil do not.",
        "Insoluble solid + water → pour it through filter paper to get the solid back."]
    },
    hint: "Solute = what dissolves. Solvent = the liquid. Clear = solution, cloudy and settles = suspension.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["pure", "solve", "solute", "suspension", "separate"]);

      /* --- which one of four is pure / which is a mixture? --- */
      if (kind === "pure") {
        if (rng.raw() < 0.5) {
          var p = rng.pick(PURE);
          return {
            qHTML: "Which one of these is a <b>pure substance</b>?",
            opts: { list: [p].concat(rng.shuffle(MIXED).slice(0, 3)), a: p },
            workedHTML: "The pure substance here is <b>" + p + "</b> — there is only that one substance in it. " +
              "The other three are mixtures: more than one substance, together but not joined."
          };
        }
        var mx = rng.pick(MIXED);
        return {
          qHTML: "Which one of these is a <b>mixture</b>?",
          opts: { list: [mx].concat(rng.shuffle(PURE).slice(0, 3)), a: mx },
          workedHTML: "The mixture here is <b>" + mx + "</b> — you could separate what is in it again. " +
            "The other three are pure substances: one substance, nothing else."
        };
      }

      /* --- what happens when it is stirred into water? --- */
      if (kind === "solve") {
        var it = rng.pick(SOLIDS);
        var say = function (tpl) { return tpl.replace(/\{s\}/g, it.s); };
        var pool = [DISSOLVE, SINKS, FLOATS, CLOUDY].map(say);
        return {
          qHTML: n + " stirs a spoonful of <b>" + it.s + "</b> into a beaker of water. What will " + n + " see?",
          opts: { list: pool, a: say(it.out) },
          workedHTML: n + " would see: <b>" + say(it.out) + "</b>. " +
            (it.out === DISSOLVE ? "Soluble means the solid breaks up into pieces far too small to see, and the solution stays clear."
              : it.out === SINKS ? "Insoluble means the grains never break up, so they fall straight to the bottom."
                : it.out === FLOATS ? "Oil and water do not mix at all, so the oil stays as its own layer."
                  : "A suspension looks mixed at first, but the pieces are still solid and gravity slowly pulls them down.")
        };
      }

      /* --- name the solute and the solvent --- */
      if (kind === "solute") {
        var so = rng.pick(SOLUTIONS);
        var iu = wordInput("u", "the solute =", so.solute, [], "e.g. salt");
        var iv = wordInput("v", "the solvent =", so.solvent, [so.solvent.replace(/^hot /, "")], "e.g. water");
        return {
          qHTML: n + " stirs <b>" + so.solute + "</b> into <b>" + so.solvent +
            "</b> until it has all disappeared, and makes " + so.made +
            ".<br>Name the <b>solute</b> and the <b>solvent</b>.",
          inputs: [iu, iv],
          workedHTML: "The solute is the thing that dissolves: <b>" + iu.answer +
            "</b>. The solvent is the liquid that does the dissolving: <b>" + iv.answer +
            "</b>. Solute + solvent = solution."
        };
      }

      /* --- solution or suspension? --- */
      if (kind === "suspension") {
        var cloudy = rng.raw() < 0.5;
        var seen = cloudy
          ? "The water goes cloudy, and after a few minutes the tiny pieces have settled on the bottom."
          : "The water stays completely clear, and nothing settles even after ten minutes.";
        var rightS = cloudy ? "a suspension" : "a solution";
        return {
          qHTML: n + " shakes a solid and water together in a test tube. " + seen +
            "<br>What has " + n + " made?",
          opts: mcq(rng, rightS, ["a solution", "a suspension", "a pure substance", "a solvent"]),
          workedHTML: "It is <b>" + rightS + "</b>. " +
            (cloudy ? "Cloudy and settling means the pieces are still solid: a suspension."
              : "Clear and staying mixed means the solid has dissolved: a solution.")
        };
      }

      /* --- getting an insoluble solid back --- */
      var rightF = "pour the mixture through filter paper";
      return {
        qHTML: n + " has a beaker of water with <b>sand</b> in it. What is the easiest way to get the sand out?",
        opts: mcq(rng, rightF, [
          "stir it much faster until the sand dissolves",
          "add more water so the sand spreads out",
          "heat it until the sand melts into the water",
          "leave it in the sun for a week"]),
        workedHTML: "<b>" + rightF + "</b> — the water goes through and the sand stays behind on the paper. " +
          "This works because sand is <i>insoluble</i>: it never dissolved, so it is still there as solid grains. " +
          "You could not filter salty water this way, because dissolved salt goes straight through with the water."
      };
    }
  });

  /* ---------------- sc_ph ---------------- */

  register({
    id: "sc_ph",
    teach: {
      what: "The <b>pH</b> scale runs from 0 to 14 and it is read as a number line. Below 7 is an <b>acid</b>. Exactly 7 is <b>neutral</b> — pure water. Above 7 is a <b>base</b>. The further from 7 the stronger it is, so pH 1 is a stronger acid than pH 5, and pH 13 is a stronger base than pH 9. " +
        "An <b>indicator</b> is a substance that changes colour to tell you where on the scale you are: universal indicator goes red, orange, yellow at the acid end, green at 7, and blue then purple at the base end. Blue litmus paper turns red in an acid; red litmus turns blue in a base. " +
        "In water an acid makes <b>hydrogen ions, H⁺</b>; a base makes <b>hydroxide ions, OH⁻</b>. Strong acids and strong bases are both <b>corrosive</b> — the two ends of the scale are equally dangerous.",
      how: ["Put the number on the line: under 7 acid, 7 neutral, over 7 base.",
        "Further from 7 = stronger. Lower number = more acidic.",
        "Universal indicator: red/orange/yellow acid, green neutral, blue/purple base.",
        "Litmus: blue → red means acid; red → blue means base.",
        "H⁺ goes with acids, OH⁻ goes with bases.",
        "Both ends are corrosive: safety glasses on, and follow your teacher's instructions."]
    },
    hint: "Under 7 acid, 7 neutral, over 7 base. Lower number = more acidic. H⁺ acid, OH⁻ base.",
    gen: function (rng) {
      var n = rng.pick(NAMES);
      var kind = rng.pick(["classify", "classify", "colour", "range", "litmus", "ions", "stronger", "corrosive", "neutral"]);

      /* --- read a pH number off the scale --- */
      if (kind === "classify") {
        var v = rng.ri(0, 14);
        var ans = v < 7 ? "acidic" : v > 7 ? "basic" : "neutral";
        return {
          qHTML: n + " tests a liquid and the pH meter reads <b>pH " + v +
            "</b>.<br>Is the liquid <b>acidic</b>, <b>neutral</b> or <b>basic</b>?",
          svg: phStripSVG([{ v: v, tag: "pH " + v }]),
          opts: { list: ["acidic", "neutral", "basic"], a: ans },
          workedHTML: "pH " + v + " is " + (v < 7 ? "<b>below</b> 7" : v > 7 ? "<b>above</b> 7" : "<b>exactly</b> 7") +
            ", so the liquid is <b>" + ans + "</b>" +
            (ans === "neutral" ? " — the same as pure water. Universal indicator would turn it green."
              : ". Universal indicator would turn it <b>" + bandOf(v).col + "</b> there — that is the " +
                bandOf(v).say + " part of the scale.")
        };
      }

      /* --- pH -> indicator colour --- */
      if (kind === "colour") {
        var v2 = rng.ri(0, 14), band = bandOf(v2);
        return {
          qHTML: n + " adds a drop of <b>universal indicator</b> to a liquid of <b>pH " + v2 +
            "</b>. What colour does the liquid turn?",
          opts: mcq(rng, band.col, PHBAND.map(function (b) { return b.col; })),
          workedHTML: "pH " + v2 + " is in the <b>" + band.col + "</b> band (pH " + band.lo +
            (band.lo === band.hi ? "" : "–" + band.hi) + "), which is " + band.say + ". " +
            "The scale runs red, orange, yellow, green, blue, purple from one end to the other."
        };
      }

      /* --- indicator colour -> which pH could it be? --- */
      if (kind === "range") {
        var b2 = rng.pick(PHBAND);
        var right = "pH " + rng.ri(b2.lo, b2.hi);
        var others = PHBAND.filter(function (x) { return x !== b2; });
        var pool = rng.shuffle(others).slice(0, 3).map(function (x) { return "pH " + rng.ri(x.lo, x.hi); });
        return {
          qHTML: n + " adds universal indicator to a liquid and it turns <b>" + b2.col +
            "</b>. Which of these could the pH be?",
          opts: { list: [right].concat(pool), a: right },
          workedHTML: "<b>" + b2.col.charAt(0).toUpperCase() + b2.col.slice(1) + "</b> is the colour for pH " +
            b2.lo + (b2.lo === b2.hi ? "" : " to " + b2.hi) + ", so <b>" + right +
            "</b> is the only one that fits. That liquid is " + b2.say + "."
        };
      }

      /* --- litmus paper --- */
      if (kind === "litmus") {
        var cases = [
          { seen: "blue litmus paper turns red", a: "an acid", why: "blue → red is the acid test" },
          { seen: "red litmus paper turns blue", a: "a base", why: "red → blue is the base test" },
          { seen: "neither the red nor the blue litmus paper changes colour", a: "neutral", why: "no change at all means neither acid nor base" }
        ];
        var cs = rng.pick(cases);
        return {
          qHTML: n + " dips litmus paper into a liquid and <b>" + cs.seen + "</b>.<br>What is the liquid?",
          opts: mcq(rng, cs.a, ["an acid", "a base", "neutral", "an indicator"]),
          workedHTML: "It is <b>" + cs.a + "</b> — " + cs.why + "."
        };
      }

      /* --- H+ and OH- --- */
      if (kind === "ions") {
        var acid = rng.raw() < 0.5;
        var rightI = acid ? "hydrogen ions, H⁺" : "hydroxide ions, OH⁻";
        return {
          qHTML: "Which ion does <b>" + (acid ? "an acid" : "a base") + "</b> make when it is dissolved in water?",
          opts: mcq(rng, rightI, ["hydrogen ions, H⁺", "hydroxide ions, OH⁻",
            "sodium ions, Na⁺", "chloride ions, Cl⁻"]),
          workedHTML: "<b>" + rightI + "</b>. Acids make H⁺ in water and bases make OH⁻ — " +
            "that is the difference the pH number is measuring."
        };
      }

      /* --- which is more acidic? (no logarithms anywhere) --- */
      if (kind === "stronger") {
        var a1 = rng.ri(0, 4), a2 = rng.ri(a1 + 2, 6);   /* both under 7, and never adjacent */
        var moreAcid = rng.raw() < 0.5;
        var lo = "pH " + a1, hi = "pH " + a2;
        var ansS = moreAcid ? lo : hi;
        return {
          qHTML: "Two liquids are tested: one is <b>" + lo + "</b> and the other is <b>" + hi +
            "</b>. Which one is <b>" + (moreAcid ? "more acidic" : "closer to neutral") + "</b>?",
          svg: phStripSVG([{ v: a1, tag: lo }, { v: a2, tag: hi }]),
          opts: { list: [lo, hi, "they are the same"], a: ansS },
          workedHTML: "Both are below 7, so both are acids. The <b>lower</b> the number the more acidic it is, " +
            "so " + lo + " is the stronger acid and " + hi + " is the one closer to neutral. The answer is <b>" +
            ansS + "</b>."
        };
      }

      /* --- both ends are corrosive --- */
      if (kind === "corrosive") {
        var strong = rng.pick([{ v: rng.ri(0, 1), what: "a strong acid" }, { v: rng.ri(13, 14), what: "a strong base" }]);
        return {
          qHTML: "A bottle holds " + strong.what + " at <b>pH " + strong.v +
            "</b>. Which hazard word will be on the label?",
          svg: phStripSVG([{ v: strong.v, tag: "pH " + strong.v }]),
          opts: mcq(rng, "corrosive", HAZ.map(function (x) { return x.word; })),
          workedHTML: "<b>corrosive</b> — it can burn skin and eyes and eat into the bench. " +
            "Both ends of the pH scale are corrosive: a strong base at pH 14 is every bit as dangerous as a strong acid at pH 0. " +
            "Safety glasses on, and use it the way your teacher has shown you."
        };
      }

      /* --- the number for neutral --- */
      var ip = numInput("p", "pH =", 7, 0.001);
      return {
        qHTML: n + " tests <b>pure water</b> with a pH meter. What number should it show?",
        inputs: [ip],
        workedHTML: "Pure water is neutral, and neutral is <b>" + ip.answer +
          "</b> — exactly halfway along the scale, with acids below it and bases above it."
      };
    }
  });

})();
