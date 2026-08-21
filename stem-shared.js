/* ============================================================
   ELC STEM hub v2 — shared data + stores
   ------------------------------------------------------------
   TEACHERS EDIT HERE:
   · UNITS — each unit owns its checkpoints (dates live nowhere
     else), its vocab sets and its skill groups.
   · SKILLS — one entry per skill: name, rubric bands, the
     checkpoint it is needed by ("needs"), continuum reference.
   Nothing below the data needs touching.
   ------------------------------------------------------------
   Progress (this browser only):
     elc_stem_m2       mastery v2 — practise/revise runs with
                       per-question timing; mastered timestamps.
                       NOTHING here is self-rated.
     elc_stem_vocab    words built/checked (shared with the
                       vocab hub + notebook panel)
     elc_stem_evidence proof lines written by interactives
   The old elc_stem_skills (self-assessment) is ignored.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- UNITS — checkpoints live WITHIN units ---------------- */
  var UNITS = [
    { id: "found", name: "Foundations", page: "stem-foundations.html", always: true,
      blurb: "Symbols, conversions, fluency — open all year",
      checkpoints: [],
      vocabSets: [],
      skillGroups: [
        { id: "f_fluency", name: "Number fluency", skills: ["f_mult", "f_squares"] },
        { id: "f_units",   name: "Units & symbols", skills: ["f_convert", "f_symbols"] }
      ] },
    { id: "kin", name: "Kinematics", page: "stem-kinematics.html", term: "Term 3",
      blurb: "Motion · linear graphs · data — Race to School inside",
      checkpoints: [
        { id: "cp_quiz",   date: "2026-08-14", status: "done",
          name: "Linear Equations Progress Quiz", short: "Progress Quiz",
          desc: "20 minutes, no calculator, bound reference allowed." },
        { id: "cp_report", date: "2026-09-09", status: "planned",
          name: "Ball Drop report", short: "Ball Drop",
          desc: "Collect drop-time data, linearise it in Excel, find g." },
        { id: "cp_cat",    date: "2026-09-11", status: "planned",
          name: "The Trains task (Motion CAT)", short: "Trains task",
          desc: "Turn a worded journey into graphs and answers, alone." },
        { id: "cp_test",   date: "2026-09-15", status: "planned",
          name: "Linear + Quadratic test", short: "Lin+Quad test",
          desc: "Skills test on linear and quadratic graphs." },
        { id: "cp_keg",    date: "2026-09-17", status: "planned",
          name: "The Keg Toss task (quadratics)", short: "Keg Toss",
          desc: "Model a thrown keg's flight with a parabola. Opens after the Trains task." }
      ],
      vocabSets: ["kin1", "kin2", "kin3", "kin4", "rev"],
      skillGroups: [
        { id: "kg_lines",  name: "Linear graphs",
          skills: ["k_coords", "k_table", "k_grad_graph", "k_grad_pts", "k_yint", "k_eq", "k_sketch", "k_intersect", "k_simult"] },
        { id: "kg_motion", name: "Motion & graphs",
          skills: ["s_vectors", "s_ptgraph", "s_story"] },
        { id: "kg_data",   name: "Data & trendlines",
          skills: ["s_variables", "s_lobf", "s_corr", "s_excel"] }
      ] },
    { id: "gen", name: "Genetics", page: "stem-genetics.html", term: "Term 4",
      opensFrom: "2026-10-05",
      blurb: "DNA · inheritance · the probability behind it",
      checkpoints: [
        { id: "cp_probpre", date: "2026-10-06", status: "planned",
          name: "Probability pre-test", short: "Pre-test",
          desc: "No study needed — it finds your starting point." },
        { id: "cp_traits",  date: "2026-10-27", status: "planned",
          name: "Traits test", short: "Traits test",
          desc: "Alleles, Punnett squares, genotype and phenotype language." },
        { id: "cp_biocat",  date: "2026-11-10", status: "planned",
          name: "Biology + Probability CAT", short: "Bio CAT",
          desc: "30 min biology + 30 min probability. Direct knowledge and skills." },
        { id: "cp_bones",   date: "2026-11-24", status: "planned",
          name: "Mystery Bones project", short: "Mystery Bones",
          desc: "Measure bones, graph the data, predict height from the best trendline." }
      ],
      vocabSets: ["bio1", "bio2", "bio3"],
      skillGroups: [
        { id: "gg_code",    name: "The code", skills: ["b_dna", "b_genlang"] },
        { id: "gg_inherit", name: "Inheritance", skills: ["b_punnett", "b_pedigree"] },
        { id: "gg_prob",    name: "Probability", skills: ["b_samplespace", "b_tree"] }
      ] },
    { id: "pan", name: "Pandemic", page: "stem-pandemic.html", term: "Term 4",
      opensFrom: "2026-11-16",
      blurb: "Reading the maths inside the news",
      checkpoints: [
        { id: "cp_pan", date: "2026-11-27", status: "planned",
          name: "Pandemic data task", short: "Data task",
          desc: "Check the maths behind the claims in four opinion articles." }
      ],
      vocabSets: ["pan"],
      skillGroups: [
        { id: "pg_claims", name: "Checking claims", skills: ["p_percent", "p_exp", "p_claims"] }
      ] }
  ];

  /* ---------------- SKILLS — bands are the tucked-away rubric ---------------- */
  var SKILLS = {
    /* Foundations */
    f_mult: { name: "Multiplication facts — fast and accurate", unit: "found", group: "f_fluency",
      cont: "Maths · Number fluency", needs: null,
      bands: ["I am accurate with the easier tables.",
              "I am fast and accurate on all tables up to 12.",
              "I keep my speed while using them inside bigger problems."],
      vocab: [] },
    f_squares: { name: "Squares and square roots without a calculator", unit: "found", group: "f_fluency",
      cont: "Maths · Number L7", needs: null,
      bands: ["I know the squares up to 10².",
              "I know squares to 15² and roots of perfect squares.",
              "I can trap other square roots between two whole numbers."],
      vocab: [] },
    f_convert: { name: "Convert units — length, time, speed", unit: "found", group: "f_units",
      cont: "Maths · Measurement L7-8", needs: null,
      bands: ["I can convert simple lengths and times.",
              "I can convert speeds like km/h ↔ m/s in clear steps.",
              "I can convert areas, volumes and rates, choosing sensible units."],
      vocab: ["rate"] },
    f_symbols: { name: "Read the symbols of maths", unit: "found", group: "f_units",
      cont: "Maths · language of symbols", needs: null,
      bands: ["I know +, −, ×, ÷, = and <, >.",
              "I can read ≤, ≥, ≠, ≈, ±, √, ² and π in a question.",
              "I can say a whole symbol sentence in words."],
      vocab: [] },

    /* Kinematics · linear graphs */
    k_coords: { name: "Plot and read coordinates", unit: "kin", group: "kg_lines",
      cont: "Maths · Space L7", needs: "cp_quiz",
      bands: ["I can plot a point like (3, 2) with help.",
              "I can plot and read any point, including negatives, and name the axes and origin.",
              "I can use coordinates to describe lines and spot errors in a plotted graph."],
      vocab: ["coordinate", "axis", "origin", "plot"] },
    k_table: { name: "Complete a table of values by substitution", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L7-8", needs: "cp_quiz",
      bands: ["I can substitute small positive numbers into y = mx + c.",
              "I can complete a table for any linear rule, showing working.",
              "I can find the rule from a completed table, negatives included."],
      vocab: ["substitution", "equation", "linear"] },
    k_grad_graph: { name: "Gradient from a graph", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L8", needs: "cp_quiz",
      bands: ["I can say if a gradient is positive or negative and count rise and run.",
              "I can calculate gradient = rise ÷ run from any graph.",
              "I can explain what the gradient means in a real story."],
      vocab: ["gradient", "slope", "positive", "negative"] },
    k_grad_pts: { name: "Gradient from two points", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L8-9", needs: "cp_quiz",
      bands: ["I can find the gradient from two plotted points by counting.",
              "I can use m = (y₂ − y₁) ÷ (x₂ − x₁) for any two coordinates.",
              "I can handle negative and fractional answers and check the sign makes sense."],
      vocab: ["gradient", "coordinate"] },
    k_yint: { name: "The y-intercept, two ways", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L8-9", needs: "cp_quiz",
      bands: ["I can read the y-intercept from a graph.",
              "I can also calculate c by substituting a point into y = mx + c.",
              "I can choose the best method and explain the physics-vs-maths difference."],
      vocab: ["y-intercept", "substitution"] },
    k_eq: { name: "Equation of a line — y = mx + c", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L8-9", needs: "cp_quiz",
      bands: ["I can write the equation when I'm told m and c.",
              "I can find it from a graph or two points, showing all four steps.",
              "I can write equations for real data and say what m and c mean."],
      vocab: ["equation", "gradient", "y-intercept", "linear"] },
    k_sketch: { name: "Sketch a line from its equation", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L8", needs: "cp_quiz",
      bands: ["I can plot a line from a table of values.",
              "I can sketch from y = mx + c using the intercept and gradient.",
              "I can sketch from any form, marking both intercepts with coordinates."],
      vocab: ["sketch", "y-intercept", "x-intercept"] },
    k_intersect: { name: "Point of intersection — from a graph", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L8-9", needs: "cp_quiz",
      bands: ["I can point to where two lines cross.",
              "I can state the point of intersection as a coordinate and say what it means.",
              "I can spot when lines never cross, and explain why."],
      vocab: ["point of intersection", "coordinate"] },
    k_simult: { name: "Point of intersection — with algebra", unit: "kin", group: "kg_lines",
      cont: "Maths · Algebra L9-10", needs: "cp_test",
      bands: ["I can check whether a point is on both lines by substitution.",
              "I can set the equations equal and solve to find where lines meet.",
              "I can solve any pair, fraction answers included, and verify by substitution."],
      vocab: ["point of intersection", "simultaneous", "solution"] },

    /* Kinematics · motion & graphs */
    s_vectors: { name: "Distance vs displacement · speed vs velocity", unit: "kin", group: "kg_motion",
      cont: "Science · Physical L9-10", needs: "cp_cat",
      bands: ["I can match the four words to their meanings.",
              "I can calculate both in a journey where they differ, and say which is a vector.",
              "I can explain why average speed and average velocity differ on a return trip."],
      vocab: ["distance", "displacement", "speed", "velocity", "direction"] },
    s_ptgraph: { name: "Read a position-time graph", unit: "kin", group: "kg_motion",
      cont: "Science · Physical L9-10", needs: "cp_cat",
      bands: ["I can say when the object is moving, stopped or coming back.",
              "I can calculate velocity from the gradient and describe each section.",
              "I can compare two travellers on one graph — who's faster, where they meet."],
      vocab: ["position", "gradient", "velocity", "motion"] },
    s_story: { name: "Worded journey ↔ graph", unit: "kin", group: "kg_motion",
      cont: "Science · Physical L9-10 / Maths · Algebra L8", needs: "cp_cat",
      bands: ["I can draw one steady trip as a straight line, with help.",
              "I can graph a journey with stops and speed changes (piecewise), axes correct.",
              "I can solve catch-up problems: who arrives first, when would they meet."],
      vocab: ["piecewise", "uniform", "rest", "motion"] },

    /* Kinematics · data & trendlines */
    s_variables: { name: "Identify the variables", unit: "kin", group: "kg_data",
      cont: "Science · Inquiry L7-10", needs: "cp_report",
      bands: ["I can pick the variable we change and the one we measure, with help.",
              "I can name IV, DV and two controlled variables for any experiment.",
              "I can explain why uncontrolled variables make data untrustworthy."],
      vocab: ["variable", "data"] },
    s_lobf: { name: "Line of best fit by hand", unit: "kin", group: "kg_data",
      cont: "Maths · Statistics L9", needs: "cp_report",
      bands: ["I can plot given points on a labelled grid.",
              "I can draw a sensible trendline and find its gradient and equation.",
              "I can predict from my line and say when predicting is risky."],
      vocab: ["plot", "data", "trend"] },
    s_corr: { name: "Describe correlation · r from R²", unit: "kin", group: "kg_data",
      cont: "Maths · Statistics L10", needs: "cp_report",
      bands: ["I can say if a scatterplot shows positive, negative or no correlation.",
              "I can describe strength and take √R² to find r with the right sign.",
              "I can explain why correlation is not causation, with an example."],
      vocab: ["correlation", "positive", "negative", "predict"] },
    s_excel: { name: "Scatterplot, trendline and R² in Excel", unit: "kin", group: "kg_data",
      cont: "Maths · Statistics L9-10 / Science · Inquiry", needs: "cp_report",
      bands: ["I can enter data and insert a scatterplot.",
              "I can add the trendline, its equation and the R² value.",
              "I can compare graphs by R² and choose the best predictor."],
      vocab: ["correlation", "trend", "data"] },

    /* Genetics */
    b_dna: { name: "DNA and base pairing", unit: "gen", group: "gg_code",
      cont: "Science · Biological L10", needs: "cp_traits",
      bands: ["I can label a simple DNA diagram.",
              "I can describe the double helix, base pairing (A-T, C-G) and what a gene is.",
              "I can explain how DNA → chromosome → gene fit together."],
      vocab: ["DNA", "gene", "chromosome", "nucleus", "protein"] },
    b_genlang: { name: "Genotype and phenotype language", unit: "gen", group: "gg_code",
      cont: "Science · Biological L10", needs: "cp_traits",
      bands: ["I can match the key words to meanings.",
              "I can write genotypes (Aa, aa) and describe phenotypes.",
              "I can use heterozygous, homozygous and carrier correctly in explanations."],
      vocab: ["genotype", "phenotype", "allele", "dominant", "recessive", "heterozygous", "homozygous", "carrier"] },
    b_punnett: { name: "Punnett squares and their ratios", unit: "gen", group: "gg_inherit",
      cont: "Science · Biological L10 / Maths · Probability L9", needs: "cp_traits",
      bands: ["I can fill in a Punnett square for one trait, with help.",
              "I can set one up from the parents' genotypes and state both ratios.",
              "I can work backwards from offspring ratios to the parents."],
      vocab: ["Punnett square", "parent", "offspring", "inheritance", "ratio"] },
    b_pedigree: { name: "Read a pedigree chart", unit: "gen", group: "gg_inherit",
      cont: "Science · Biological L10", needs: "cp_biocat",
      bands: ["I can say who is male, female and affected on the chart.",
              "I can trace a trait through generations and decide dominant or recessive.",
              "I can assign genotypes to family members and justify each one."],
      vocab: ["pedigree", "generation", "carrier", "inheritance"] },
    b_samplespace: { name: "Sample spaces and probabilities", unit: "gen", group: "gg_prob",
      cont: "Maths · Probability L7-9", needs: "cp_biocat",
      bands: ["I can list the outcomes of one coin or one die.",
              "I can list a two-step sample space and give each probability.",
              "I can use it to answer 'at least one…' questions."],
      vocab: ["sample space", "outcome", "probability"] },
    b_tree: { name: "Tree diagrams", unit: "gen", group: "gg_prob",
      cont: "Maths · Probability L9-10", needs: "cp_biocat",
      bands: ["I can complete a tree diagram someone else started.",
              "I can draw one myself and multiply along the branches.",
              "I can handle without-replacement problems."],
      vocab: ["outcome", "probability", "frequency"] },

    /* Pandemic */
    p_percent: { name: "Combine percentages correctly", unit: "pan", group: "pg_claims",
      cont: "Maths · Number L8-9", needs: "cp_pan",
      bands: ["I can find a percentage of a number.",
              "I know protections multiply the remaining risk (50% + 60% → 80%, not 110%).",
              "I can explain why a '110% protected' claim is wrong, with working."],
      vocab: ["percentage", "rate"] },
    p_exp: { name: "Linear vs exponential growth", unit: "pan", group: "pg_claims",
      cont: "Maths · Algebra L10", needs: "cp_pan",
      bands: ["I can continue both patterns: +10 a day vs ×2 a day.",
              "I can say which model fits data and predict the next values.",
              "I can explain why exponential growth surprises people, using a graph."],
      vocab: ["exponential", "linear", "rate", "trend"] },
    p_claims: { name: "Check a claim against the data", unit: "pan", group: "pg_claims",
      cont: "Science · Inquiry L9-10 / Literacy", needs: "cp_pan",
      bands: ["I can find the claim in an article.",
              "I can test the claim's maths and find the trick.",
              "I can rewrite the claim honestly and say what the data really shows."],
      vocab: ["claim", "evidence", "misleading", "source", "data"] }
  };

  /* ---------------- PROJECT MAPS ----------------
     The road to each unit's integrated tasks. Read left → right:
     goal cells feed the next full-height project column, and
     everything left of a project feeds it. One row per strand.
     cells: {sets:[vocab set ids]} | {skills:[skill ids]} |
            {soon:"label"} (not yet open) | null (quiet empty cell)
     callback:true marks skills borrowed from an earlier unit.  */
  var MAPS = {
    kin: {
      strands: [{ id: "words", label: "Words" }, { id: "maths", label: "Maths" }, { id: "science", label: "Science" }],
      stages: [
        { cols: [
            { words: { sets: ["kin1"] }, maths: { skills: ["k_coords", "k_table", "k_grad_graph"] }, science: { skills: ["s_vectors"] } },
            { words: { sets: ["kin2", "rev"] }, maths: { skills: ["k_grad_pts", "k_yint", "k_eq", "k_sketch"] }, science: { skills: ["s_ptgraph", "s_story"] } },
            { words: { sets: ["kin3"] }, maths: { skills: ["k_intersect", "k_simult"] }, science: { skills: ["s_variables", "s_lobf", "s_excel", "s_corr"] } }
          ], project: "cp_report" },
        { cols: [], project: "cp_cat" },
        { cols: [
            { words: { soon: "quadratic words" }, maths: { soon: "sketching parabolas" }, science: { soon: "projectile motion" } }
          ], project: "cp_keg" }
      ] },
    gen: {
      strands: [{ id: "words", label: "Words" }, { id: "maths", label: "Maths" }, { id: "science", label: "Science" }],
      stages: [
        { cols: [
            { words: { sets: ["bio1"] }, maths: { skills: ["b_samplespace"] }, science: { skills: ["b_dna", "b_genlang"] } },
            { words: { sets: ["bio2"] }, maths: null, science: { skills: ["b_punnett"] } }
          ], project: "cp_traits" },
        { cols: [
            { words: { sets: ["bio3"] }, maths: { skills: ["b_tree"] }, science: { skills: ["b_pedigree"] } }
          ], project: "cp_biocat" },
        { cols: [
            { words: null, maths: { skills: ["s_lobf", "s_excel", "s_corr"], callback: "from Kinematics" }, science: { soon: "measure & report" } }
          ], project: "cp_bones" }
      ] },
    pan: {
      strands: [{ id: "words", label: "Words" }, { id: "maths", label: "Maths" }, { id: "science", label: "Science" }],
      stages: [
        { cols: [
            { words: { sets: ["pan"] }, maths: { skills: ["p_percent", "p_exp"] }, science: { skills: ["p_claims"] } }
          ], project: "cp_pan" }
      ] }
  };

  /* ---------------- helpers ---------------- */
  function safeGet(k, fb) { try { var v = JSON.parse(localStorage.getItem(k)); return v || fb; } catch (e) { return fb; } }
  function safeSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function daysUntil(d) { return Math.ceil((new Date(d + "T23:59:59") - new Date()) / 86400000); }
  function fmtDate(d) { return new Date(d + "T12:00:00").toLocaleDateString(undefined, { day: "numeric", month: "short" }); }

  var UNIT_BY_ID = {}; UNITS.forEach(function (u) { UNIT_BY_ID[u.id] = u; });

  function currentUnit() {
    var timed = UNITS.filter(function (u) { return !u.always; });
    var cur = timed[0];
    timed.forEach(function (u) {
      if (u.opensFrom && daysUntil(u.opensFrom) <= 0) cur = u;
    });
    return cur;
  }
  function nextCheckpoint(unit) {
    var open = unit.checkpoints.filter(function (c) { return c.status !== "done" && daysUntil(c.date) >= 0; });
    return open[0] || null;
  }

  /* ---------------- mastery store v2 (objective only) ---------------- */
  var K_M2 = "elc_stem_m2";
  function m2() { return safeGet(K_M2, { skills: {}, rev: [] }); }
  var Mastery = {
    runs: function (id) { var s = m2().skills[id]; return s ? s.runs : []; },
    mastered: function (id) { var s = m2().skills[id]; return s && s.mastered ? s.mastered : null; },
    record: function (id, run) {  /* {ok, of, ms:[], mode:'p'|'r'} */
      var d = m2();
      var s = d.skills[id] = d.skills[id] || { runs: [], mastered: null };
      run.t = Date.now();
      s.runs.push(run);
      if (s.runs.length > 30) s.runs = s.runs.slice(-30);
      if (run.mode === "p" && run.of >= 3 && run.ok === run.of && !s.mastered) s.mastered = run.t;
      safeSet(K_M2, d);
    },
    recordRevision: function (r) {  /* {msAvg, n, okPct} */
      var d = m2();
      r.t = Date.now();
      d.rev.push(r);
      if (d.rev.length > 40) d.rev = d.rev.slice(-40);
      safeSet(K_M2, d);
    },
    revisionHistory: function () { return m2().rev; },
    state: function (id) {
      var s = m2().skills[id];
      if (!s || !s.runs.length) return { status: "none", lastRun: null, paceMs: null, mastered: null };
      var last = s.runs[s.runs.length - 1];
      var pace = null;
      if (last.ms && last.ms.length) pace = Math.round(last.ms.reduce(function (a, b) { return a + b; }, 0) / last.ms.length);
      return { status: s.mastered ? "mastered" : "started", lastRun: last, paceMs: pace, mastered: s.mastered };
    },
    unitCounts: function (unitId) {
      var total = 0, done = 0;
      (UNIT_BY_ID[unitId].skillGroups || []).forEach(function (g) {
        g.skills.forEach(function (id) { total++; if (Mastery.mastered(id)) done++; });
      });
      return { done: done, total: total };
    },
    clearAll: function () { try { localStorage.removeItem(K_M2); } catch (e) {} }
  };

  /* ---------------- vocab + evidence (v1-compatible keys) ---------------- */
  var K_VOCAB = "elc_stem_vocab", K_EVID = "elc_stem_evidence";
  var Store = {
    vocab: function () { return safeGet(K_VOCAB, {}); },
    vocabWord: function (w) { return Store.vocab()[w.toLowerCase()] || null; },
    markVocab: function (w, field) {
      var v = Store.vocab(); var k = w.toLowerCase();
      v[k] = v[k] || { seen: 0 };
      if (field === "seen") v[k].seen = (v[k].seen || 0) + 1;
      else v[k][field] = Date.now();
      safeSet(K_VOCAB, v);
    },
    evidence: function () { return safeGet(K_EVID, {}); },
    addEvidence: function (skillId, src, detail) {
      var e = Store.evidence(); e[skillId] = e[skillId] || [];
      e[skillId].push({ src: src, detail: detail, ts: Date.now() });
      if (e[skillId].length > 20) e[skillId] = e[skillId].slice(-20);
      safeSet(K_EVID, e);
    },
    /* legacy no-ops kept so old pages don't crash; subjective data is dead */
    skills: function () { return {}; },
    setSkill: function () {},
    clearAll: function () {
      try { localStorage.removeItem(K_VOCAB); localStorage.removeItem(K_EVID);
            localStorage.removeItem("elc_stem_skills"); } catch (e) {}
      Mastery.clearAll();
    }
  };

  function setCounts(setId) {
    if (!window.STEM_VOCAB_DATA) return { built: 0, checked: 0, total: 0 };
    var set = window.STEM_VOCAB_DATA.sets.filter(function (s) { return s.id === setId; })[0];
    if (!set) return { built: 0, checked: 0, total: 0 };
    var v = Store.vocab(), built = 0, checked = 0;
    set.words.forEach(function (w) {
      var s = v[w.w.toLowerCase()];
      if (s && s.built) built++;
      if (s && s.checked) checked++;
    });
    return { built: built, checked: checked, total: set.words.length, title: set.title };
  }

  /* progress of one map cell: {done, total, met} (null cell → null) */
  function cellState(cell) {
    if (!cell || cell.soon) return null;
    var done = 0, total = 0;
    (cell.skills || []).forEach(function (id) { total++; if (Mastery.mastered(id)) done++; });
    (cell.sets || []).forEach(function (sid) {
      var c = setCounts(sid); total += c.total; done += c.built;
    });
    return { done: done, total: total, met: total > 0 && done === total };
  }

  window.STEM2 = {
    UNITS: UNITS, UNIT_BY_ID: UNIT_BY_ID, SKILLS: SKILLS, MAPS: MAPS,
    currentUnit: currentUnit, nextCheckpoint: nextCheckpoint, cellState: cellState,
    Mastery: Mastery, Store: Store, setCounts: setCounts,
    daysUntil: daysUntil, fmtDate: fmtDate, esc: esc
  };

  /* ---------------- legacy surface (v1 pages still loading this file) ---------------- */
  var LEGACY_CPS = [];
  UNITS.forEach(function (u) { u.checkpoints.forEach(function (c) { LEGACY_CPS.push(c); }); });
  var CP_BY_ID = {}; LEGACY_CPS.forEach(function (c) { CP_BY_ID[c.id] = c; });
  window.STEM = {
    CHECKPOINTS: LEGACY_CPS, CP_BY_ID: CP_BY_ID,
    SKILLS: [], AREAS: {}, LEVELS: ["", "", "", ""],
    Store: Store, daysUntil: daysUntil,
    skillState: function () { return { lv: 0, evidence: false, mastered: false, started: false, timing: "upcoming", checkpoint: null, daysLeft: 999 }; },
    summary: function () { return { ahead: 0, done: 0, dueSoon: 0, behind: 0, upcoming: 0, total: 0 }; }
  };
})();
