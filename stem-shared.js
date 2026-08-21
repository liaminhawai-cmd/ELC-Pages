/* ============================================================
   ELC STEM hub — shared data + progress store
   ------------------------------------------------------------
   EDIT HERE, TEACHERS:
   1. CHECKPOINTS — the big assessment dates. status: "done" or
      "planned". Change a date and every page updates.
   2. SKILLS — one row per skill. masterBy names the checkpoint
      the skill must be mastered before. bands are the
      Working-towards / At-standard / Above descriptors
      (matched to the Victorian curriculum learning continuum).
   No code below the SKILLS block needs touching.
   ------------------------------------------------------------
   Progress lives in this browser's localStorage only:
     elc_stem_skills   {skillId:{lv:0-3, ts}}   self-assessment
     elc_stem_vocab    {word:{built,checked,seen}}  vocab hub
     elc_stem_evidence {skillId:[{src,detail,ts}]}  from interactives
   ============================================================ */
(function () {
  "use strict";

  var CHECKPOINTS = [
    { id: "cp_quiz",    date: "2026-08-14", status: "done",
      name: "Linear Equations Progress Quiz",
      short: "Progress Quiz",
      desc: "20 minutes, no calculator, bound reference allowed. Linear graph skills + language." },
    { id: "cp_report",  date: "2026-09-09", status: "planned",
      name: "Ball Drop Report",
      short: "Ball Drop",
      desc: "Scientific report: collect drop-time data, linearise it in Excel, find g." },
    { id: "cp_cat",     date: "2026-09-11", status: "planned",
      name: "Linear Motion CAT (the trains task)",
      short: "Motion CAT",
      desc: "Worded linear-motion task. Practise with the Race to School interactive — the CAT itself stays under wraps." },
    { id: "cp_test",    date: "2026-09-15", status: "planned",
      name: "Linear + Quadratic Test",
      short: "Lin+Quad Test",
      desc: "Skills test on linear and quadratic graphs." },
    { id: "cp_probpre", date: "2026-10-06", status: "planned",
      name: "Probability Pre-test",
      short: "Prob pre-test",
      desc: "Start of Term 4. No study needed — it finds your starting point." },
    { id: "cp_traits",  date: "2026-10-27", status: "planned",
      name: "Traits Test",
      short: "Traits Test",
      desc: "Inheritance: alleles, Punnett squares, genotype and phenotype language." },
    { id: "cp_biocat",  date: "2026-11-10", status: "planned",
      name: "Biology + Probability CAT",
      short: "Bio CAT",
      desc: "30 min biology + 30 min probability. Direct knowledge and skills." },
    { id: "cp_bones",   date: "2026-11-24", status: "planned",
      name: "Mystery Bones project",
      short: "Mystery Bones",
      desc: "Measure bones, graph the data, use the best trendline to predict height." },
    { id: "cp_pan",     date: "2026-11-27", status: "planned",
      name: "Pandemic data task",
      short: "Pandemic task",
      desc: "Check the maths behind the claims in four opinion articles." }
  ];

  /* areas: kin-maths | kin-sci | bio | pan */
  var SKILLS = [
    /* ---- Kinematics · maths skills ---- */
    { id: "k_coords", area: "kin-maths", masterBy: "cp_quiz",
      name: "Plot and read coordinates on the Cartesian plane",
      cont: "Maths · Space L7",
      bands: ["I can plot a point like (3, 2) with help.",
              "I can plot and read any point, including negatives, and name the axes and origin.",
              "I can use coordinates to describe lines and shapes, and spot errors in a plotted graph."],
      vocab: ["coordinate", "axis", "origin", "plot"] },
    { id: "k_table", area: "kin-maths", masterBy: "cp_quiz",
      name: "Complete a table of values by substitution",
      cont: "Maths · Algebra L7-8",
      bands: ["I can substitute small positive numbers into y = mx + c.",
              "I can complete a table of values for any linear rule, showing my working.",
              "I can find the rule from a completed table, including negatives and fractions."],
      vocab: ["substitution", "equation", "linear"] },
    { id: "k_grad_graph", area: "kin-maths", masterBy: "cp_quiz",
      name: "Find the gradient of a line from its graph",
      cont: "Maths · Algebra L8",
      bands: ["I can say if a gradient is positive or negative, and count rise and run on a grid.",
              "I can calculate gradient = rise ÷ run from any graph, including negative slopes.",
              "I can explain what the gradient means in a real story (speed, cost per km, fill rate)."],
      vocab: ["gradient", "slope", "positive", "negative"] },
    { id: "k_grad_pts", area: "kin-maths", masterBy: "cp_quiz",
      name: "Find the gradient from two points",
      cont: "Maths · Algebra L8-9",
      bands: ["I can find the gradient from two plotted points by counting.",
              "I can use m = (y₂ − y₁) ÷ (x₂ − x₁) for any two coordinates, showing working.",
              "I can do it with negative and fractional answers, and check the sign makes sense."],
      vocab: ["gradient", "coordinate"] },
    { id: "k_yint", area: "kin-maths", masterBy: "cp_quiz",
      name: "Find the y-intercept two ways",
      cont: "Maths · Algebra L8-9",
      bands: ["I can read the y-intercept from a graph.",
              "I can also calculate c by substituting a point into y = mx + c (the maths method).",
              "I can choose the best method and explain the physics-vs-maths difference."],
      vocab: ["y-intercept", "substitution"] },
    { id: "k_eq", area: "kin-maths", masterBy: "cp_quiz",
      name: "Write the equation of a line as y = mx + c",
      cont: "Maths · Algebra L8-9",
      bands: ["I can write the equation when I am told m and c.",
              "I can find the equation from a graph, or from two points, showing all four steps.",
              "I can write equations for real data (trendlines) and say what m and c mean."],
      vocab: ["equation", "gradient", "y-intercept", "linear"] },
    { id: "k_sketch", area: "kin-maths", masterBy: "cp_quiz",
      name: "Sketch a line from its equation",
      cont: "Maths · Algebra L8",
      bands: ["I can plot a line from a table of values.",
              "I can sketch from y = mx + c using the intercept and gradient, and from two points.",
              "I can sketch from any form, marking both intercepts with their coordinates."],
      vocab: ["sketch", "y-intercept", "x-intercept"] },
    { id: "k_intersect", area: "kin-maths", masterBy: "cp_quiz",
      name: "Find a point of intersection from a graph",
      cont: "Maths · Algebra L8-9",
      bands: ["I can point to where two lines cross.",
              "I can state the point of intersection as a coordinate, and say what it means in a story.",
              "I can spot when lines will never cross (parallel) and explain why."],
      vocab: ["point of intersection", "coordinate"] },
    { id: "k_simult", area: "kin-maths", masterBy: "cp_test",
      name: "Find a point of intersection with algebra",
      cont: "Maths · Algebra L9-10",
      bands: ["I can check whether a point is on both lines by substitution.",
              "I can set the two equations equal and solve to find where the lines meet.",
              "I can solve any pair, including ones with fraction answers, and verify by substitution."],
      vocab: ["point of intersection", "simultaneous", "solution"] },
    { id: "k_convert", area: "kin-maths", masterBy: "cp_cat",
      name: "Convert units (length, time, speed)",
      cont: "Maths · Measurement L7-8",
      bands: ["I can convert simple lengths (m ↔ cm ↔ km) and times (min ↔ s).",
              "I can convert speeds like km/h ↔ m/s in clear steps.",
              "I can convert areas, volumes and rates, choosing sensible units for the answer."],
      vocab: ["rate"] },
    { id: "k_squares", area: "kin-maths", masterBy: "cp_cat",
      name: "Squares and square roots without a calculator",
      cont: "Maths · Number L7",
      bands: ["I know the squares up to 10².",
              "I know squares to 15² and can find square roots of perfect squares.",
              "I can estimate other square roots between two whole numbers."],
      vocab: [] },
    { id: "k_mult", area: "kin-maths", masterBy: "cp_quiz",
      name: "Multiplication facts — fast and accurate",
      cont: "Maths · Number fluency",
      bands: ["I am accurate with the easier tables.",
              "I am fast and accurate on all tables up to 12 (the entry-task standard).",
              "I keep my speed while doing them inside bigger problems."],
      vocab: [] },

    /* ---- Kinematics · science skills ---- */
    { id: "s_vectors", area: "kin-sci", masterBy: "cp_cat",
      name: "Use distance vs displacement and speed vs velocity correctly",
      cont: "Science · Physical L9-10",
      bands: ["I can match the four words to their meanings.",
              "I can calculate both in a journey where they differ, and say which is a vector.",
              "I can explain why average speed and average velocity differ for a return trip."],
      vocab: ["distance", "displacement", "speed", "velocity", "direction"] },
    { id: "s_ptgraph", area: "kin-sci", masterBy: "cp_cat",
      name: "Read a position-time graph",
      cont: "Science · Physical L9-10",
      bands: ["I can say when the object is moving, stopped or coming back.",
              "I can calculate velocity from the gradient and describe each section of the journey.",
              "I can compare two travellers on one graph — who is faster, where they meet, who wins."],
      vocab: ["position", "gradient", "velocity", "motion"] },
    { id: "s_story", area: "kin-sci", masterBy: "cp_cat",
      name: "Turn a worded journey into a graph — and back",
      cont: "Science · Physical L9-10 / Maths · Algebra L8",
      bands: ["I can draw one steady trip as a straight line with help.",
              "I can graph a journey with stops and speed changes (piecewise), with correct axes and units.",
              "I can solve worded catch-up problems: who arrives first, when would they meet, what wait time makes it a tie."],
      vocab: ["piecewise", "uniform", "rest", "motion"] },
    { id: "s_variables", area: "kin-sci", masterBy: "cp_report",
      name: "Identify independent, dependent and controlled variables",
      cont: "Science · Inquiry L7-10",
      bands: ["I can pick the variable we change and the one we measure, with help.",
              "I can name IV, DV and two controlled variables for any experiment.",
              "I can explain why uncontrolled variables would make the data untrustworthy."],
      vocab: ["variable", "data"] },
    { id: "s_lobf", area: "kin-sci", masterBy: "cp_report",
      name: "Plot data by hand and draw a line of best fit",
      cont: "Maths · Statistics L9",
      bands: ["I can plot given points on a labelled grid.",
              "I can draw a sensible trendline and find its gradient and equation.",
              "I can use my line to predict values and say when predicting is risky (extrapolation)."],
      vocab: ["plot", "data", "trend"] },
    { id: "s_excel", area: "kin-sci", masterBy: "cp_report",
      name: "Make a scatterplot in Excel with a trendline and R²",
      cont: "Maths · Statistics L9-10 / Science · Inquiry",
      bands: ["I can enter data and insert a scatterplot.",
              "I can add the trendline, show its equation and the R² value.",
              "I can compare graphs by R² and choose the best predictor, like in Mystery Bones."],
      vocab: ["correlation", "trend", "data"] },
    { id: "s_corr", area: "kin-sci", masterBy: "cp_report",
      name: "Describe correlation — and find r from R²",
      cont: "Maths · Statistics L10",
      bands: ["I can say if a scatterplot shows positive, negative or no correlation.",
              "I can describe strength (strong/weak) and take √R² to find r with the right sign.",
              "I can explain why correlation is not causation, with an example."],
      vocab: ["correlation", "positive", "negative", "predict"] },
    { id: "s_report", area: "kin-sci", masterBy: "cp_report",
      name: "Write a scientific report",
      cont: "Science · Inquiry L9-10",
      bands: ["I can fill in aim, materials and method with a template.",
              "I can write every section including hypothesis, variables and a qualitative record.",
              "I can discuss errors, link results to theory (SUVAT) and suggest improvements."],
      vocab: ["variable", "data", "predict", "evidence"] },

    /* ---- Biology · genetics (Term 4) ---- */
    { id: "b_dna", area: "bio", masterBy: "cp_traits",
      name: "Describe the structure and job of DNA",
      cont: "Science · Biological L10",
      bands: ["I can label a simple DNA diagram.",
              "I can describe the double helix, base pairing (A-T, C-G) and what a gene is.",
              "I can explain how DNA → chromosome → gene fit together, and outline transcription."],
      vocab: ["DNA", "gene", "chromosome", "nucleus", "protein"] },
    { id: "b_genlang", area: "bio", masterBy: "cp_traits",
      name: "Use genotype and phenotype language correctly",
      cont: "Science · Biological L10",
      bands: ["I can match the key words to meanings.",
              "I can write genotypes (Aa, aa) and describe phenotypes for dominant/recessive traits.",
              "I can use heterozygous, homozygous and carrier correctly in explanations."],
      vocab: ["genotype", "phenotype", "allele", "dominant", "recessive", "heterozygous", "homozygous", "carrier"] },
    { id: "b_punnett", area: "bio", masterBy: "cp_traits",
      name: "Complete a Punnett square and give the ratios",
      cont: "Science · Biological L10 / Maths · Probability L9",
      bands: ["I can fill in a Punnett square for one trait with help.",
              "I can set one up from the parents' genotypes and state genotype + phenotype ratios.",
              "I can work backwards — deduce parent genotypes from the offspring ratios."],
      vocab: ["Punnett square", "parent", "offspring", "inheritance", "ratio"] },
    { id: "b_pedigree", area: "bio", masterBy: "cp_biocat",
      name: "Read a pedigree chart",
      cont: "Science · Biological L10",
      bands: ["I can say who is male, female and affected on the chart.",
              "I can trace a trait through generations and decide dominant or recessive.",
              "I can assign genotypes to family members and justify each one."],
      vocab: ["pedigree", "generation", "carrier", "inheritance"] },
    { id: "b_samplespace", area: "bio", masterBy: "cp_biocat",
      name: "List a sample space and assign probabilities",
      cont: "Maths · Probability L7-9",
      bands: ["I can list the outcomes of one coin or one die.",
              "I can list the full sample space of a two-step experiment and give each probability.",
              "I can use the sample space to answer 'at least one…' questions."],
      vocab: ["sample space", "outcome", "probability"] },
    { id: "b_tree", area: "bio", masterBy: "cp_biocat",
      name: "Draw a tree diagram for a two-step experiment",
      cont: "Maths · Probability L9-10",
      bands: ["I can complete a tree diagram someone else started.",
              "I can draw one myself and multiply along the branches.",
              "I can handle without-replacement problems where the second step changes."],
      vocab: ["outcome", "probability", "frequency"] },

    /* ---- Pandemic · data literacy (Term 4) ---- */
    { id: "p_percent", area: "pan", masterBy: "cp_pan",
      name: "Combine percentages correctly",
      cont: "Maths · Number L8-9",
      bands: ["I can find a percentage of a number.",
              "I know protections don't add: I multiply the remaining risks (50% + 60% → 0.5×0.4 = 20% risk left).",
              "I can explain why an article claiming '110% protected' is wrong, with the working."],
      vocab: ["percentage", "rate"] },
    { id: "p_exp", area: "pan", masterBy: "cp_pan",
      name: "Tell linear growth from exponential growth",
      cont: "Maths · Algebra L10",
      bands: ["I can continue both patterns: +10 each day vs ×2 each day.",
              "I can say which model fits given data and predict the next values.",
              "I can explain why exponential growth surprises people, using a graph."],
      vocab: ["exponential", "linear", "rate", "trend"] },
    { id: "p_claims", area: "pan", masterBy: "cp_pan",
      name: "Check a claim against the data",
      cont: "Science · Inquiry L9-10 / Literacy",
      bands: ["I can find the claim in an article.",
              "I can test the claim's maths and find the trick (cherry-picking, wrong baseline, axis games).",
              "I can rewrite the claim honestly and explain what the data really shows."],
      vocab: ["claim", "evidence", "misleading", "source", "data"] }
  ];

  /* ---------- progress store (localStorage, this device only) ---------- */
  function safeGet(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v || fallback; }
    catch (e) { return fallback; }
  }
  function safeSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  var K_SKILLS = "elc_stem_skills", K_VOCAB = "elc_stem_vocab", K_EVID = "elc_stem_evidence";

  var Store = {
    skills: function () { return safeGet(K_SKILLS, {}); },
    setSkill: function (id, lv) {
      var s = Store.skills(); s[id] = { lv: lv, ts: Date.now() }; safeSet(K_SKILLS, s);
    },
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
    clearAll: function () {
      try { localStorage.removeItem(K_SKILLS); localStorage.removeItem(K_VOCAB); localStorage.removeItem(K_EVID); } catch (e) {}
    }
  };

  /* ---------- schedule helpers ---------- */
  var CP_BY_ID = {}; CHECKPOINTS.forEach(function (c) { CP_BY_ID[c.id] = c; });

  function daysUntil(dateStr) {
    var d = new Date(dateStr + "T23:59:59");
    return Math.ceil((d - new Date()) / 86400000);
  }

  /* status of one skill for the report:
     mastered  — self-assessed "Got it"/"Can teach it" or interactive evidence
     started   — "Getting there" or vocab progress on its words
     none      — nothing yet
     plus timing vs its masterBy date → ahead | onTrack | dueSoon | behind | done-late */
  function skillState(skill) {
    var self = Store.skills()[skill.id];
    var lv = self ? self.lv : 0;
    var ev = (Store.evidence()[skill.id] || []).length > 0;
    var mastered = lv >= 2 || ev;
    var started = mastered || lv >= 1;
    var cp = CP_BY_ID[skill.masterBy];
    var days = cp ? daysUntil(cp.date) : 9999;
    var timing;
    if (mastered) timing = (days >= 0) ? "ahead" : "done";
    else if (days < 0) timing = "behind";
    else if (days <= 14) timing = "dueSoon";
    else timing = "upcoming";
    return { lv: lv, evidence: ev, mastered: mastered, started: started,
             checkpoint: cp, daysLeft: days, timing: timing };
  }

  function summary() {
    var out = { ahead: 0, done: 0, dueSoon: 0, behind: 0, upcoming: 0, total: SKILLS.length };
    SKILLS.forEach(function (s) { out[skillState(s).timing]++; });
    return out;
  }

  window.STEM = {
    CHECKPOINTS: CHECKPOINTS, SKILLS: SKILLS, CP_BY_ID: CP_BY_ID,
    Store: Store, skillState: skillState, summary: summary, daysUntil: daysUntil,
    AREAS: {
      "kin-maths": { name: "Kinematics · maths skills", emoji: "📈" },
      "kin-sci":   { name: "Kinematics · science skills", emoji: "🔬" },
      "bio":       { name: "Biology · genetics", emoji: "🧬" },
      "pan":       { name: "Pandemic · data literacy", emoji: "🦠" }
    },
    LEVELS: ["Not yet", "Getting there", "Got it", "I could teach it"]
  };
})();
