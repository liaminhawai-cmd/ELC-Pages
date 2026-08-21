/* ============================================================
   ELC STEM hub v2 — question bank, part 2: GENETICS + PANDEMIC
   ------------------------------------------------------------
   Loads AFTER stem-questions.js and registers into the same
   QBANK using the contract documented in that file's header:

     QBANK.register({ id, teach:{what,how}, hint, gen(rng) })
     gen(rng) -> { qHTML, svg?, inputs:[...] | opts:{list,a}, workedHTML }

   Generators are PURE functions of the seeded rng (no Date, no
   Math.random) and every number in every answer is computed from
   the numbers the generator made — nothing is hard-coded.

   Skills registered here (ids from stem-shared.js STEM2.SKILLS):
     Genetics  b_dna · b_genlang · b_punnett · b_pedigree
               b_samplespace · b_tree
     Pandemic  p_percent · p_exp · p_claims

   Run QBANK.audit(300) in the console after editing anything.
   ============================================================ */
(function () {
  "use strict";

  if (!window.QBANK || typeof window.QBANK.register !== "function") {
    if (window.console) console.warn("stem-questions-bio.js: QBANK missing — load stem-questions.js first.");
    return;
  }

  var register = window.QBANK.register;
  var U = window.QBANK.util;
  var num = U.num, near = U.near, fmt = U.fmt, numInput = U.numInput;

  /* ---------------- small shared helpers ---------------- */
  function gcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { var t = a % b; a = b; b = t; }
    return a || 1;
  }
  /* a fraction shown the way a student writes it: 6/8 -> 3/4, 4/4 -> 1, 0/4 -> 0 */
  function fracStr(n, d) {
    if (n === 0) return "0";
    var g = gcd(n, d); n = n / g; d = d / g;
    return d === 1 ? String(n) : n + "/" + d;
  }
  /* fraction answer: accepts 3/4, 6/8 or 0.75 */
  function fracInput(k, label, n, d) {
    var v = n / d;
    return { k: k, label: label, place: "e.g. 3/4", answer: fracStr(n, d),
      check: function (val) { return near(num(val), v, 0.005); } };
  }
  /* percentage answer: accepts 42 or 42% */
  function pctInput(k, label, value) {
    return { k: k, label: label, place: "e.g. 25", answer: fmt(value),
      check: function (val) {
        return near(num(String(val == null ? "" : val).replace(/%/g, "")), value, 0.05);
      } };
  }
  /* show the reduction step only when the fraction actually reduces */
  function reduceLine(n, d) {
    var r = fracStr(n, d);
    return (r === n + "/" + d) ? "<b>" + r + "</b>" : n + "/" + d + " = <b>" + r + "</b>";
  }
  /* a Punnett box, always written with the capital (dominant) allele first: ("b","B") -> "Bb" */
  function combo(x, y) { return (x === x.toUpperCase()) ? x + y : y + x; }

  /* pick n distinct wrong options from a pool, then put the answer first */
  function mcq(rng, answer, pool) {
    var wrong = rng.shuffle(pool.filter(function (s) { return s !== answer; }));
    return { list: [answer].concat(wrong.slice(0, 3)), a: answer };
  }

  /* ============================================================
     GENETICS
     ============================================================ */

  /* organisms used across b_genlang and b_punnett.
     All are classic single-gene (Mendelian) examples — no human traits. */
  var TRAITS = [
    { org: "pea plant",    who: "Anh",   L: "P", feature: "flower colour",  dom: "purple flowers", rec: "white flowers",   ds: "purple", rs: "white" },
    { org: "pea plant",    who: "Layla", L: "R", feature: "seed shape",     dom: "round seeds",    rec: "wrinkled seeds",  ds: "round",  rs: "wrinkled" },
    { org: "tomato plant", who: "Hiro",  L: "R", feature: "fruit colour",   dom: "red tomatoes",   rec: "yellow tomatoes", ds: "red",    rs: "yellow" },
    { org: "guinea pig",   who: "Amara", L: "B", feature: "fur colour",     dom: "black fur",      rec: "brown fur",       ds: "black",  rs: "brown" },
    { org: "rabbit",       who: "Tom",   L: "G", feature: "fur colour",     dom: "grey fur",       rec: "white fur",       ds: "grey",   rs: "white" },
    { org: "budgerigar",   who: "Mai",   L: "G", feature: "feather colour", dom: "green feathers", rec: "blue feathers",   ds: "green",  rs: "blue" }
  ];
  /* "a Bb parent" but "an Ss parent" — letter names beginning with a vowel sound take "an" */
  function artic(word) {
    return "AEFHILMNORSX".indexOf(word.charAt(0).toUpperCase()) !== -1 ? "an" : "a";
  }
  function boxWord(n) { return n + " box" + (n === 1 ? " shows" : "es show"); }
  /* one sentence that sets up the alleles, worded so it reads correctly for every trait */
  function alleleLine(t) {
    return "In " + t.org + "s, the allele <b>" + t.L + "</b> (" + t.dom + ") is dominant over <b>" +
      t.L.toLowerCase() + "</b> (" + t.rec + ").";
  }

  /* ---------------- b_dna ---------------- */
  var PARTNER = { A: "T", T: "A", C: "G", G: "C" };

  function dnaSpan(s) {
    return "<b style='letter-spacing:.2em;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace'>" + s + "</b>";
  }

  register({
    id: "b_dna",
    teach: {
      what: "DNA is a long twisted ladder — a double helix. The rungs of the ladder are pairs of bases, and the pairing never changes: <b>A pairs with T</b>, and <b>C pairs with G</b>. A gene is one short section of that DNA, and a chromosome is one long piece of DNA packed up inside the nucleus.",
      how: ["Read the given strand one base at a time, left to right.",
            "Swap each base for its partner: A ↔ T, C ↔ G.",
            "Check the length — the matching strand has exactly the same number of bases.",
            "Keep the sizes straight: cell → nucleus → chromosome → gene → single base."]
    },
    hint: "A pairs with T, C pairs with G. Same length on both sides.",
    gen: function (rng) {
      var bases = ["A", "C", "G", "T"];
      var n = rng.ri(6, 8), i, strand = [];
      for (i = 0; i < n; i++) strand.push(rng.pick(bases));
      var top = strand.join("");
      var comp = strand.map(function (x) { return PARTNER[x]; }).join("");
      var kind = rng.pick(["comp", "comp", "pair", "count", "nest", "gene"]);

      if (kind === "comp") {
        return {
          qHTML: "One side of a piece of DNA reads " + dnaSpan(top) + ".<br>Write the <b>matching strand</b> — the base that pairs with each one.",
          inputs: [{ k: "c", label: "matching strand =", place: "e.g. TGCA", answer: comp,
            check: function (v) {
              return String(v == null ? "" : v).toUpperCase().replace(/[\s,.\-–—]/g, "") === comp;
            } }],
          workedHTML: "Swap every base for its partner (A→T, T→A, C→G, G→C):<br>" +
            dnaSpan(top) + "<br>" + dnaSpan(comp) + "<br>Both strands have " + n + " bases — a base pair for every rung."
        };
      }

      if (kind === "pair") {
        var b = rng.pick(bases);
        return {
          qHTML: "In DNA, which base always pairs with <b>" + b + "</b>?",
          opts: { list: bases.slice(), a: PARTNER[b] },
          workedHTML: "The base pairing rules are A–T and C–G, so <b>" + b + "</b> pairs with <b>" + PARTNER[b] + "</b>. " +
            "The pair is held together across the rung of the ladder."
        };
      }

      if (kind === "count") {
        var present = [];
        strand.forEach(function (x) { if (present.indexOf(x) === -1) present.push(x); });
        var src = rng.pick(present);
        var target = PARTNER[src];
        var cnt = strand.filter(function (x) { return x === src; }).length;
        return {
          qHTML: "One side of a piece of DNA reads " + dnaSpan(top) + ".<br>How many <b>" + target + "</b> bases are in the <b>matching strand</b>?",
          inputs: [numInput("k", "number of " + target + " =", cnt, 0.001)],
          workedHTML: "Every <b>" + src + "</b> on this side must face a <b>" + target + "</b> on the other side. " +
            "This strand has <b>" + cnt + "</b> " + src + " base" + (cnt === 1 ? "" : "s") +
            ", so the matching strand has <b>" + cnt + "</b> " + target + " base" + (cnt === 1 ? "" : "s") + "."
        };
      }

      if (kind === "nest") {
        var right = "cell → nucleus → chromosome → gene";
        return {
          qHTML: "Put these in order, <b>biggest first</b>.",
          opts: { list: [right,
            "gene → chromosome → nucleus → cell",
            "nucleus → cell → gene → chromosome",
            "chromosome → cell → gene → nucleus"], a: right },
          workedHTML: "<b>" + right + "</b>. The nucleus sits inside the cell; the chromosomes sit inside the nucleus; " +
            "a chromosome is one long DNA molecule, and a gene is just one section of it."
        };
      }

      var geneRight = "a section of DNA that codes for one protein";
      return {
        qHTML: "What is a <b>gene</b>?",
        opts: { list: [geneRight, "a whole chromosome", "the nucleus of a cell", "a single base, such as A or C"], a: geneRight },
        workedHTML: "A gene is <b>" + geneRight + "</b>. The order of the bases is the instruction; " +
          "a chromosome carries many genes, and one base on its own carries no instruction at all."
      };
    }
  });

  /* ---------------- b_genlang ---------------- */
  var DEFS = [
    { q: "What does <b>allele</b> mean?", a: "one version of a gene",
      w: ["a pair of chromosomes", "a feature you can see", "the nucleus of a cell"] },
    { q: "What does <b>genotype</b> mean?", a: "the pair of alleles an organism carries",
      w: ["what the organism looks like", "the number of chromosomes", "the protein a gene makes"] },
    { q: "What does <b>phenotype</b> mean?", a: "the feature you can see or measure",
      w: ["the two letters of the alleles", "one version of a gene", "the place a gene sits on a chromosome"] },
    { q: "What does <b>homozygous</b> mean?", a: "the two alleles are the same",
      w: ["the two alleles are different", "the organism has only one allele", "the organism shows the dominant feature"] },
    { q: "What does <b>carrier</b> mean?", a: "it carries a recessive allele but does not show it",
      w: ["it shows the recessive feature", "it has two dominant alleles", "it cannot pass the allele on"] }
  ];

  register({
    id: "b_genlang",
    teach: {
      what: "A <b>genotype</b> is the pair of alleles an organism carries, written as two letters (BB, Bb, bb). A <b>phenotype</b> is the feature you can actually see. Two of the same letter is <b>homozygous</b>; one of each is <b>heterozygous</b>.",
      how: ["Look at the two letters. Same letters → homozygous. Different letters → heterozygous.",
            "One capital letter is enough to show the dominant phenotype (BB and Bb look the same).",
            "Only two lowercase letters (bb) show the recessive phenotype.",
            "Bb is a carrier: it looks dominant, but it still carries the recessive allele and can pass it on."]
    },
    hint: "Same two letters = homozygous. One capital = dominant look. Only bb shows the recessive.",
    gen: function (rng) {
      var t = rng.pick(TRAITS), L = t.L, l = L.toLowerCase();
      var HOM = L + L, HET = L + l, REC = l + l;
      var kind = rng.pick(["zygo", "whichrec", "carrier", "phenoOf", "isPheno", "genoOf", "def"]);

      if (kind === "zygo") {
        var g = rng.pick([HOM, HET, REC]);
        var ans = g === HET ? "heterozygous" : (g === HOM ? "homozygous dominant" : "homozygous recessive");
        return {
          qHTML: t.who + "'s " + t.org + " has the genotype <b>" + g + "</b> for " + t.feature + ". Which word describes this genotype?",
          opts: { list: ["heterozygous", "homozygous dominant", "homozygous recessive", "phenotype"], a: ans },
          workedHTML: "<b>" + g + "</b> has " + (g === HET ? "two <i>different</i> alleles, so it is <b>heterozygous</b>."
            : "two of the <i>same</i> allele, so it is <b>" + ans + "</b>.") +
            " (Phenotype is the wrong kind of word here — that is what the " + t.org + " looks like.)"
        };
      }

      if (kind === "whichrec") {
        return {
          qHTML: alleleLine(t) + " Which genotype gives <b>" + t.rec + "</b>?",
          opts: { list: [REC, HOM, HET, HOM + " or " + HET], a: REC },
          workedHTML: "One capital " + L + " is enough to give " + t.dom + ", so " + HOM + " and " + HET + " both show " + t.dom +
            ". Only <b>" + REC + "</b> — two recessive alleles — gives <b>" + t.rec + "</b>."
        };
      }

      if (kind === "carrier") {
        return {
          qHTML: alleleLine(t) + " Which genotype is a <b>carrier</b> — it shows the dominant feature but still carries the recessive allele?",
          opts: { list: [HET, HOM, REC, HOM + " or " + REC], a: HET },
          workedHTML: "<b>" + HET + "</b>. The capital " + L + " gives it " + t.dom + ", but the hidden " + l +
            " can still be passed to its offspring. " + HOM + " carries no recessive allele; " + REC + " shows " + t.rec + " itself."
        };
      }

      if (kind === "phenoOf") {
        var g2 = rng.pick([HOM, HET, REC]);
        var look = g2 === REC ? t.rec : t.dom;
        return {
          qHTML: alleleLine(t) + " " + t.who + "'s " + t.org + " has the genotype <b>" + g2 + "</b>. What does it look like?",
          opts: { list: [t.dom, t.rec, "a mix of the two", "we cannot tell from the genotype"], a: look },
          workedHTML: (g2 === REC
            ? "<b>" + REC + "</b> has no capital " + L + ", so the recessive feature shows: <b>" + t.rec + "</b>."
            : "<b>" + g2 + "</b> has at least one capital " + L + ", so the dominant feature shows: <b>" + t.dom + "</b>.") +
            " A genotype always tells you the phenotype — the alleles do not blend."
        };
      }

      if (kind === "isPheno") {
        return {
          qHTML: "Which of these is a <b>phenotype</b> (the feature you can see), not a genotype?",
          opts: { list: [t.dom, HOM, HET, REC], a: t.dom },
          workedHTML: "<b>" + t.dom + "</b> is something you can look at and describe — that is a phenotype. " +
            HOM + ", " + HET + " and " + REC + " are all genotypes: pairs of alleles written as letters."
        };
      }

      if (kind === "genoOf") {
        var unsure = HOM + " or " + HET + " — we cannot be sure";
        return {
          qHTML: t.who + "'s " + t.org + " has <b>" + t.dom + "</b>, the dominant feature. What is its genotype?",
          opts: { list: [unsure, HOM, HET, REC], a: unsure },
          workedHTML: "The dominant feature only needs <i>one</i> capital " + L + ", so it could be <b>" + HOM + "</b> or <b>" + HET +
            "</b> — the phenotype alone cannot tell them apart. (A recessive phenotype is different: " + t.rec + " must be " + REC + ".)"
        };
      }

      var d = rng.pick(DEFS);
      return {
        qHTML: d.q,
        opts: { list: [d.a].concat(d.w), a: d.a },
        workedHTML: "<b>" + d.a.charAt(0).toUpperCase() + d.a.slice(1) + ".</b> Keep genotype (the letters) and phenotype (what you see) apart — most mistakes come from mixing those two."
      };
    }
  });

  /* ---------------- b_punnett ---------------- */
  function punnettHTML(p1, p2, filled) {
    var r = [p1.charAt(0), p1.charAt(1)], c = [p2.charAt(0), p2.charAt(1)];
    var h = "<table class='qb-table'><tr><th></th><th>" + c[0] + "</th><th>" + c[1] + "</th></tr>";
    for (var i = 0; i < 2; i++) {
      h += "<tr><th>" + r[i] + "</th>";
      for (var j = 0; j < 2; j++) h += "<td>" + (filled ? combo(r[i], c[j]) : "&nbsp;") + "</td>";
      h += "</tr>";
    }
    return h + "</table>";
  }

  register({
    id: "b_punnett",
    teach: {
      what: "A Punnett square crosses two parents. One parent's two alleles go down the side, the other parent's two go along the top. Each of the four boxes is one equally likely offspring, so the boxes give you both ratios and every percentage.",
      how: ["Split each parent into its two alleles and write them on the edges of the square.",
            "Fill each box with the side letter and the top letter, capital first (Aa, not aA).",
            "Count the boxes of each genotype → that is the genotype ratio.",
            "Group the boxes by what you would SEE → that is the phenotype ratio. Chance = boxes ÷ 4 × 100%."]
    },
    hint: "Four boxes, all equally likely. Count boxes, then divide by 4.",
    gen: function (rng) {
      var t = rng.pick(TRAITS), L = t.L, l = L.toLowerCase();
      var HOM = L + L, HET = L + l, REC = l + l;
      var pattern = rng.pick([["Aa", "Aa"], ["Aa", "Aa"], ["Aa", "Aa"], ["Aa", "aa"], ["Aa", "aa"],
                              ["AA", "aa"], ["AA", "Aa"], ["aa", "aa"], ["AA", "AA"]]);
      /* the crosses are written with A/a; swap in this organism's letter pair */
      function toLetters(p) {
        return p.replace(/A/g, "\u0001").replace(/a/g, l).replace(/\u0001/g, L);
      }
      var p1 = toLetters(pattern[0]), p2 = toLetters(pattern[1]);

      /* every offspring box, computed from the parents */
      var boxes = [];
      for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) boxes.push(combo(p1.charAt(i), p2.charAt(j)));
      var cnt = { hom: 0, het: 0, rec: 0 };
      boxes.forEach(function (b) {
        if (b === HOM) cnt.hom++; else if (b === REC) cnt.rec++; else cnt.het++;
      });
      var domCount = cnt.hom + cnt.het, recCount = cnt.rec;

      var names = [HOM, HET, REC], counts = [cnt.hom, cnt.het, cnt.rec];
      function genoRatio() {
        var g = 0, parts = [];
        counts.forEach(function (c) { if (c) g = gcd(g, c); });
        var nz = 0;
        counts.forEach(function (c) { if (c) nz++; });
        if (nz === 1) {
          for (var k = 0; k < 3; k++) if (counts[k]) return "all " + names[k];
        }
        for (var m = 0; m < 3; m++) if (counts[m]) parts.push((counts[m] / g) + " " + names[m]);
        return parts.join(" : ");
      }
      function phenoRatio() {
        if (recCount === 0) return "all " + t.ds;
        if (domCount === 0) return "all " + t.rs;
        var g = gcd(domCount, recCount);
        return (domCount / g) + " " + t.ds + " : " + (recCount / g) + " " + t.rs;
      }

      var setup = alleleLine(t) + " " + t.who + " crosses " + artic(p1) + " <b>" + p1 + "</b> parent with " +
        artic(p2) + " <b>" + p2 + "</b> parent.";
      var blank = punnettHTML(p1, p2, false);
      var full = punnettHTML(p1, p2, true);
      var boxLine = "The four boxes are <b>" + boxes.join(", ") + "</b>.";
      var kind = rng.pick(["geno", "pheno", "pct", "pct"]);

      if (kind === "geno") {
        var gAns = genoRatio();
        var gPool = ["1 " + HOM + " : 2 " + HET + " : 1 " + REC,
                     "1 " + HET + " : 1 " + REC,
                     "1 " + HOM + " : 1 " + HET,
                     "all " + HET, "all " + HOM, "all " + REC,
                     "3 " + HOM + " : 1 " + REC,
                     "1 " + HOM + " : 1 " + REC,
                     "2 " + HOM + " : 1 " + HET + " : 1 " + REC];
        return {
          qHTML: setup + " What is the <b>genotype ratio</b> of the offspring?" + blank,
          opts: mcq(rng, gAns, gPool),
          workedHTML: full + boxLine + " Counting them: " +
            cnt.hom + " × " + HOM + ", " + cnt.het + " × " + HET + ", " + cnt.rec + " × " + REC +
            " → genotype ratio <b>" + gAns + "</b>."
        };
      }

      if (kind === "pheno") {
        var pAns = phenoRatio();
        var pPool = ["3 " + t.ds + " : 1 " + t.rs,
                     "1 " + t.ds + " : 1 " + t.rs,
                     "2 " + t.ds + " : 1 " + t.rs,
                     "1 " + t.ds + " : 3 " + t.rs,
                     "all " + t.ds, "all " + t.rs];
        return {
          qHTML: setup + " What is the <b>phenotype ratio</b> of the offspring?" + blank,
          opts: mcq(rng, pAns, pPool),
          workedHTML: full + boxLine + " Now group them by what you can see: " +
            HOM + " and " + HET + " both show " + t.dom + ", so " + boxWord(domCount) + " " + t.dom +
            " and " + boxWord(recCount) + " " + t.rec + " → phenotype ratio <b>" + pAns + "</b>."
        };
      }

      var target = rng.pick(["recPheno", "domPheno", "het", "homRec"]);
      var hits, wordy, why;
      if (target === "recPheno") { hits = recCount; wordy = "has " + t.rec; why = "only " + REC + " shows " + t.rec; }
      else if (target === "domPheno") { hits = domCount; wordy = "has " + t.dom; why = HOM + " and " + HET + " both show " + t.dom; }
      else if (target === "het") { hits = cnt.het; wordy = "has the genotype <b>" + HET + "</b>"; why = "count only the " + HET + " boxes"; }
      else { hits = cnt.rec; wordy = "has the genotype <b>" + REC + "</b>"; why = "count only the " + REC + " boxes"; }
      var pct = hits / 4 * 100;
      return {
        qHTML: setup + " What is the <b>chance</b> that one offspring " + wordy + "?" + blank,
        inputs: [pctInput("p", "chance (%) =", pct)],
        workedHTML: full + boxLine + " To answer this one, " + why + ": <b>" + hits + " of the 4</b> boxes. " +
          hits + " ÷ 4 = " + fmt(hits / 4) + " = <b>" + fmt(pct) + "%</b>." +
          (hits === 0 ? " (Zero boxes means it cannot happen from this cross.)" : "")
      };
    }
  });

  /* ---------------- b_pedigree ---------------- */
  var PEDS = [
    { org: "mice", trait: "a curly tail" },
    { org: "guinea pigs", trait: "a white patch on the chest" },
    { org: "rabbits", trait: "a white front paw" },
    { org: "cats", trait: "a short tail" },
    { org: "budgerigars", trait: "a blue chest feather" }
  ];

  function pedShape(sex, x, y, affected) {
    var fill = affected ? "var(--ink,#212427)" : "var(--paper,#fcfcfa)";
    if (sex === "m") {
      return "<rect x='" + (x - 11) + "' y='" + (y - 11) + "' width='22' height='22' fill='" + fill +
        "' stroke='var(--ink,#212427)' stroke-width='1.6'/>";
    }
    return "<circle cx='" + x + "' cy='" + y + "' r='11' fill='" + fill +
      "' stroke='var(--ink,#212427)' stroke-width='1.6'/>";
  }

  function pedigreeSVG(parentSexes, parentsAffected, kidSexes, kidsAffected) {
    var n = kidSexes.length;
    var s = "<svg class='qb-graph' viewBox='0 0 300 150' role='img' aria-label='pedigree chart'>";
    function ln(x1, y1, x2, y2) {
      return "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 +
        "' stroke='var(--muted,#767b7f)' stroke-width='1.3'/>";
    }
    function lbl(x, y, txt) {
      return "<text x='" + x + "' y='" + y + "' font-size='9' text-anchor='middle' fill='var(--muted,#767b7f)'>" + txt + "</text>";
    }
    var px = [110, 190], py = 30, ky = 110, sib = 72;
    var xs = [], gap = n > 1 ? 220 / (n - 1) : 0;
    for (var i = 0; i < n; i++) xs.push(n > 1 ? Math.round(40 + gap * i) : 150);
    /* generation I */
    s += ln(px[0] + 11, py, px[1] - 11, py);
    s += ln(150, py, 150, sib);
    /* sibship line + drops */
    s += ln(xs[0], sib, xs[n - 1], sib);
    for (i = 0; i < n; i++) s += ln(xs[i], sib, xs[i], ky - 11);
    s += pedShape(parentSexes[0], px[0], py, parentsAffected[0]);
    s += pedShape(parentSexes[1], px[1], py, parentsAffected[1]);
    s += lbl(px[0], py + 24, "I-1") + lbl(px[1], py + 24, "I-2");
    for (i = 0; i < n; i++) {
      s += pedShape(kidSexes[i], xs[i], ky, kidsAffected[i]);
      s += lbl(xs[i], ky + 24, "II-" + (i + 1));
    }
    return s + "</svg>";
  }

  register({
    id: "b_pedigree",
    teach: {
      what: "A pedigree chart is a family tree for one feature. <b>Squares are males, circles are females</b>, and a <b>filled</b> shape means that individual has the trait. Two clean patterns let you decide dominant or recessive with certainty.",
      how: ["Two parents WITHOUT the trait having a child WITH it → the trait is recessive, and both parents are carriers.",
            "Two parents WITH the trait having a child WITHOUT it → the trait is dominant, and both parents are heterozygous.",
            "Anyone showing a recessive trait must be homozygous recessive (aa).",
            "Anyone showing a dominant trait may be AA or Aa — say 'we cannot be sure' instead of guessing."]
    },
    hint: "Unaffected parents + affected child = recessive. Affected parents + unaffected child = dominant.",
    gen: function (rng) {
      var p = rng.pick(PEDS);
      var pair = rng.pick([["A", "a"], ["B", "b"], ["D", "d"], ["T", "t"], ["G", "g"]]);
      var L = pair[0], l = pair[1];
      var recessive = rng.raw() < 0.5;
      var n = rng.pick([3, 4]);
      var i, kidSexes = [], parentSexes = ["m", "f"];
      for (i = 0; i < n; i++) kidSexes.push(rng.raw() < 0.5 ? "m" : "f");
      /* at least one affected child AND at least one unaffected child */
      var order = rng.shuffle([0, 1, 2, 3].slice(0, n));
      var k = rng.ri(1, n - 1);
      var kidsAff = [];
      for (i = 0; i < n; i++) kidsAff.push(false);
      for (i = 0; i < k; i++) kidsAff[order[i]] = true;
      var parentsAff = recessive ? [false, false] : [true, true];

      var svg = pedigreeSVG(parentSexes, parentsAff, kidSexes, kidsAff);
      var intro = "The chart shows a family of " + p.org + ". Squares are males, circles are females, and a <b>filled</b> shape means that animal has <b>" +
        p.trait + "</b>. Use <b>" + L + "</b> for the dominant allele and <b>" + l + "</b> for the recessive allele.";
      var recWhy = "Both parents (I-1 and I-2) do NOT have " + p.trait + ", but child II-" + (order[0] + 1) +
        " does. A feature can only appear from nowhere if it is <b>recessive</b> and both parents are carriers (" + L + l + " × " + L + l + ").";
      var domWhy = "Both parents (I-1 and I-2) DO have " + p.trait + ", but at least one child does not. " +
        "That missing child must be " + l + l + ", so each parent handed on " + artic(l) + " " + l + " — the trait is <b>dominant</b> and both parents are " + L + l + ".";
      var kind = rng.pick(["dr", "why", "geno", "geno"]);

      if (kind === "dr") {
        return {
          qHTML: intro + "<br>Is <b>" + p.trait + "</b> dominant or recessive?",
          svg: svg,
          opts: { list: ["recessive", "dominant", "the chart cannot tell us"], a: recessive ? "recessive" : "dominant" },
          workedHTML: recessive ? recWhy : domWhy
        };
      }

      if (kind === "why") {
        var aRec = "Recessive — two parents without the trait have a child with it.";
        var aDom = "Dominant — two parents with the trait have a child without it.";
        return {
          qHTML: intro + "<br>Which statement matches this chart?",
          svg: svg,
          opts: { list: [aRec, aDom,
            "Recessive — the trait appears in every generation.",
            "Dominant — the trait skips a generation."], a: recessive ? aRec : aDom },
          workedHTML: recessive ? recWhy : domWhy
        };
      }

      /* genotype of one member */
      var affKids = [], clearKids = [];
      for (i = 0; i < n; i++) (kidsAff[i] ? affKids : clearKids).push(i);
      var whoKind = rng.pick(["parent", "showing", "notshowing"]);
      var label, ans, reason;
      var unsure = L + L + " or " + L + l + " — we cannot be sure";
      if (whoKind === "parent") {
        label = rng.raw() < 0.5 ? "I-1" : "I-2";
        ans = L + l;
        reason = recessive
          ? label + " does not have " + p.trait + ", so it has at least one " + L + ". It has an affected (" + l + l +
            ") child, so it must also carry " + artic(l) + " " + l + ". Genotype <b>" + L + l + "</b>."
          : label + " has " + p.trait + ", so it has at least one " + L + ". It has an unaffected (" + l + l +
            ") child, so it must also carry " + artic(l) + " " + l + ". Genotype <b>" + L + l + "</b>.";
      } else if (whoKind === "showing") {
        /* an individual who HAS the trait */
        var showIdx = affKids[rng.ri(0, affKids.length - 1)];
        label = "II-" + (showIdx + 1);
        if (recessive) {
          ans = l + l;
          reason = label + " has " + p.trait + ", and the trait is recessive, so it needs two recessive alleles: <b>" + l + l + "</b>.";
        } else {
          ans = unsure;
          reason = label + " has " + p.trait + " and the trait is dominant, so it has at least one " + L +
            ". Its parents are both " + L + l + ", so it could be " + L + L + " or " + L + l + " — <b>we cannot be sure</b>.";
        }
      } else {
        /* an individual who does NOT have the trait */
        var clearIdx = clearKids[rng.ri(0, clearKids.length - 1)];
        label = "II-" + (clearIdx + 1);
        if (recessive) {
          ans = unsure;
          reason = label + " does not have " + p.trait + ", so it has at least one " + L +
            ". Its parents are both " + L + l + ", so it could be " + L + L + " or " + L + l + " — <b>we cannot be sure</b>.";
        } else {
          ans = l + l;
          reason = label + " does not have " + p.trait + ", and the trait is dominant, so it cannot have even one " + L +
            ": it must be <b>" + l + l + "</b>.";
        }
      }
      return {
        qHTML: intro + " (" + p.trait.charAt(0).toUpperCase() + p.trait.slice(1) + " is <b>" +
          (recessive ? "recessive" : "dominant") + "</b>.)<br>What is the genotype of <b>" + label + "</b>?",
        svg: svg,
        opts: { list: [L + L, L + l, l + l, unsure], a: ans },
        workedHTML: (recessive ? recWhy : domWhy) + "<br>" + reason
      };
    }
  });

  /* ---------------- b_samplespace ---------------- */
  var SPIN_COLOURS = ["red", "blue", "green", "yellow"];

  register({
    id: "b_samplespace",
    teach: {
      what: "A <b>sample space</b> is the list of every possible outcome. For a two-step experiment the number of outcomes is (choices in step 1) × (choices in step 2). When every outcome is equally likely, P(event) = favourable outcomes ÷ total outcomes.",
      how: ["Count the choices at each step and multiply to get the total.",
            "List the outcomes in a system so you miss none: all the H ones first, then all the T ones.",
            "Count the outcomes that fit the event, and write the probability as a fraction.",
            "'At least one' is easier backwards: total outcomes − outcomes with NONE."]
    },
    hint: "Total = step 1 × step 2. 'At least one' = all outcomes − none of them.",
    gen: function (rng) {
      var who = rng.pick(["Mai", "Anh", "Hiro", "Amara", "Tom", "Layla"]);
      var exp = rng.pick(["coins", "coins", "coindie", "spinners", "spinners"]);

      if (exp === "coins") {
        var setup = who + " flips a <b>20c coin</b> and a <b>50c coin</b> at the same time.";
        var space = "HH, HT, TH, TT";
        var kind = rng.pick(["size", "p", "p", "atleast"]);
        if (kind === "size") {
          return { qHTML: setup + " How many outcomes are in the <b>sample space</b>?",
            inputs: [numInput("n", "number of outcomes =", 4, 0.001)],
            workedHTML: "Each coin has 2 outcomes, so 2 × 2 = <b>4</b>. Listed in order: <b>" + space + "</b>." };
        }
        if (kind === "p") {
          var ev = rng.pick([
            { t: "two heads", n: 1, list: "HH" },
            { t: "two tails", n: 1, list: "TT" },
            { t: "one head and one tail, in any order", n: 2, list: "HT, TH" }
          ]);
          return { qHTML: setup + " What is <b>P(" + ev.t + ")</b>? Give a fraction.",
            inputs: [fracInput("p", "P(" + ev.t + ") =", ev.n, 4)],
            workedHTML: "Sample space: <b>" + space + "</b> — 4 equally likely outcomes. " +
              ev.n + " of them fit" + (ev.n === 1 ? "s" : "") + " (" + ev.list + "), so P = " + reduceLine(ev.n, 4) + "." };
        }
        var side = rng.pick(["head", "tail"]);
        var noneList = side === "head" ? "TT" : "HH";
        return { qHTML: setup + " What is <b>P(at least one " + side + ")</b>? Give a fraction.",
          inputs: [fracInput("p", "P(at least one " + side + ") =", 3, 4)],
          workedHTML: "Sample space: <b>" + space + "</b> — 4 outcomes. Only <b>" + noneList + "</b> has no " + side +
            ", so 4 − 1 = 3 outcomes have at least one. P = " + reduceLine(3, 4) + "." };
      }

      if (exp === "coindie") {
        var setup2 = who + " flips a coin and rolls a fair <b>six-sided die</b>.";
        var kind2 = rng.pick(["size", "p", "p"]);
        if (kind2 === "size") {
          return { qHTML: setup2 + " How many outcomes are in the <b>sample space</b>?",
            inputs: [numInput("n", "number of outcomes =", 12, 0.001)],
            workedHTML: "The coin has 2 outcomes and the die has 6, so 2 × 6 = <b>12</b>: H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6." };
        }
        var ev2 = rng.pick([
          { t: "a head and a 6", n: 1, list: "H6" },
          { t: "a tail and an even number", n: 3, list: "T2, T4, T6" },
          { t: "a head and a number bigger than 4", n: 2, list: "H5, H6" },
          { t: "a tail and a number less than 3", n: 2, list: "T1, T2" }
        ]);
        return { qHTML: setup2 + " What is <b>P(" + ev2.t + ")</b>? Give a fraction.",
          inputs: [fracInput("p", "P(" + ev2.t + ") =", ev2.n, 12)],
          workedHTML: "The sample space has 2 × 6 = 12 equally likely outcomes. " +
            ev2.n + " of them fit" + (ev2.n === 1 ? "s" : "") + " (" + ev2.list + "), so P = " + reduceLine(ev2.n, 12) + "." };
      }

      /* two identical spinners */
      var k = rng.pick([3, 4]);
      var cols = SPIN_COLOURS.slice(0, k);
      var total = k * k;
      var setup3 = who + " spins <b>two identical spinners</b>. Each spinner has " + k + " equal parts: " + cols.join(", ") + ".";
      var kind3 = rng.pick(["size", "p", "p", "atleast"]);
      if (kind3 === "size") {
        return { qHTML: setup3 + " How many outcomes are in the <b>sample space</b>?",
          inputs: [numInput("n", "number of outcomes =", total, 0.001)],
          workedHTML: "Spinner 1 has " + k + " choices and spinner 2 has " + k + ", so " + k + " × " + k + " = <b>" + total + "</b> outcomes." };
      }
      if (kind3 === "p") {
        var c = rng.pick(cols);
        if (rng.raw() < 0.5) {
          return { qHTML: setup3 + " What is <b>P(both spinners land on " + c + ")</b>? Give a fraction.",
            inputs: [fracInput("p", "P(both " + c + ") =", 1, total)],
            workedHTML: "Only one outcome out of " + total + " is (" + c + ", " + c + "), so P = <b>" + fracStr(1, total) + "</b>." };
        }
        return { qHTML: setup3 + " What is <b>P(both spinners land on the same colour)</b>? Give a fraction.",
          inputs: [fracInput("p", "P(same colour) =", k, total)],
          workedHTML: "The matching outcomes are " + cols.map(function (x) { return "(" + x + ", " + x + ")"; }).join(", ") +
            " — that is " + k + " out of " + total + ". P = " + reduceLine(k, total) + "." };
      }
      var c2 = rng.pick(cols);
      var none = (k - 1) * (k - 1);
      return { qHTML: setup3 + " What is <b>P(at least one spinner lands on " + c2 + ")</b>? Give a fraction.",
        inputs: [fracInput("p", "P(at least one " + c2 + ") =", total - none, total)],
        workedHTML: "Work backwards. Outcomes with NO " + c2 + ": " + (k - 1) + " × " + (k - 1) + " = " + none +
          ". So at least one " + c2 + " happens in " + total + " − " + none + " = <b>" + (total - none) + "</b> outcomes. " +
          "P = " + reduceLine(total - none, total) + "." };
    }
  });

  /* ---------------- b_tree ---------------- */
  function treeSVG(t) {
    var s = "<svg class='qb-graph' viewBox='0 0 320 185' role='img' aria-label='tree diagram'>";
    function ln(x1, y1, x2, y2) {
      return "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 +
        "' stroke='var(--muted,#767b7f)' stroke-width='1.3'/>";
    }
    function tx(x, y, txt, anchor, strong) {
      return "<text x='" + x + "' y='" + y + "' font-size='9' text-anchor='" + (anchor || "middle") +
        "' fill='" + (strong ? "var(--ink,#212427)" : "var(--muted,#767b7f)") + "'" +
        (strong ? " font-weight='700'" : "") + ">" + txt + "</text>";
    }
    s += ln(24, 95, 120, 45) + ln(24, 95, 120, 145);
    s += ln(148, 45, 232, 22) + ln(148, 45, 232, 68);
    s += ln(148, 145, 232, 122) + ln(148, 145, 232, 168);
    s += tx(72, 62, t.pa) + tx(72, 134, t.pb);
    s += tx(190, 27, t.paa) + tx(190, 64, t.pab);
    s += tx(190, 127, t.pba) + tx(190, 164, t.pbb);
    s += tx(134, 48, t.a, "middle", true) + tx(134, 148, t.b, "middle", true);
    s += tx(238, 25, t.a + ", " + t.a, "start") + tx(238, 71, t.a + ", " + t.b, "start");
    s += tx(238, 125, t.b + ", " + t.a, "start") + tx(238, 171, t.b + ", " + t.b, "start");
    return s + "</svg>";
  }

  register({
    id: "b_tree",
    teach: {
      what: "A tree diagram lays out a two-step experiment branch by branch. Write the probability on every branch, <b>multiply along</b> a path to get that path's probability, and <b>add across</b> paths when more than one path fits the question.",
      how: ["Step 1 branches use the starting numbers: reds out of the total.",
            "Step 2 branches: if the marble goes back, the numbers repeat; if it does not, the total drops by 1 — and so does the colour you already took.",
            "Multiply along the branches to get one whole path.",
            "Add the paths that fit the question, then simplify the fraction."]
    },
    hint: "Multiply along a path, add across paths. Without replacement, the total drops by 1.",
    gen: function (rng) {
      var who = rng.pick(["Mai", "Anh", "Hiro", "Amara", "Tom", "Layla"]);
      var pair = rng.pick([["red", "blue"], ["green", "white"], ["red", "white"], ["blue", "green"]]);
      var cA = pair[0], cB = pair[1];
      var r = rng.ri(2, 4), b = rng.ri(2, 4), n = r + b;
      var replace = rng.raw() < 0.5;

      var den = replace ? n * n : n * (n - 1);
      var nAA = replace ? r * r : r * (r - 1);
      var nBB = replace ? b * b : b * (b - 1);
      var nAB = r * b;              /* A first, then B */
      var nBA = b * r;              /* B first, then A */

      /* branch labels, left unsimplified — that is how a tree is read */
      var t2 = {
        a: cA, b: cB,
        pa: r + "/" + n, pb: b + "/" + n,
        paa: (replace ? r : r - 1) + "/" + (replace ? n : n - 1),
        pab: b + "/" + (replace ? n : n - 1),
        pba: r + "/" + (replace ? n : n - 1),
        pbb: (replace ? b : b - 1) + "/" + (replace ? n : n - 1)
      };
      var svg = treeSVG(t2);
      var setup = "A bag holds <b>" + r + " " + cA + "</b> marbles and <b>" + b + " " + cB + "</b> marbles. " + who +
        " takes one marble, " + (replace ? "<b>puts it back</b>" : "does <b>not</b> put it back") + ", then takes another.";
      var secondLine = replace
        ? "Because the marble goes back, the bag is the same both times: " + n + " marbles every draw."
        : "Because the marble does not go back, the second draw is out of " + (n - 1) + " marbles.";

      var kind = rng.pick(["aa", "ab", "same", "diff"]);
      var hit, label, work;
      if (kind === "aa") {
        hit = nAA; label = "P(" + cA + " then " + cA + ")";
        work = t2.pa + " × " + t2.paa;
      } else if (kind === "ab") {
        hit = nAB; label = "P(" + cA + " first, then " + cB + ")";
        work = t2.pa + " × " + t2.pab;
      } else if (kind === "same") {
        hit = nAA + nBB; label = "P(both marbles the same colour)";
        work = "(" + t2.pa + " × " + t2.paa + ") + (" + t2.pb + " × " + t2.pbb + ") = " +
          nAA + "/" + den + " + " + nBB + "/" + den;
      } else {
        hit = nAB + nBA; label = "P(one of each colour, in any order)";
        work = "(" + t2.pa + " × " + t2.pab + ") + (" + t2.pb + " × " + t2.pba + ") = " +
          nAB + "/" + den + " + " + nBA + "/" + den;
      }

      return {
        qHTML: setup + "<br>What is <b>" + label + "</b>? Give a fraction.",
        inputs: [fracInput("p", label + " =", hit, den)],
        workedHTML: svg + secondLine + "<br>Multiply along the branches" +
          (kind === "same" || kind === "diff" ? ", then add the paths that fit" : "") + ":<br>" +
          work + " = " + reduceLine(hit, den) + "."
      };
    }
  });

  /* ============================================================
     PANDEMIC
     ============================================================ */

  /* ---------------- p_percent ---------------- */
  var PCTX = [
    { s1: "a mask", s2: "a vaccine", risk: "catching the virus", who: "Anh" },
    { s1: "sunscreen", s2: "a wide hat", risk: "getting burnt on a hot Melbourne day", who: "Mai" },
    { s1: "washing hands", s2: "staying home when sick", risk: "passing the bug to someone else", who: "Tom" },
    { s1: "an air filter", s2: "opening the windows", risk: "breathing in the virus indoors", who: "Layla" }
  ];

  register({
    id: "p_percent",
    teach: {
      what: "Protections do <b>not</b> add up. The second protection only works on the risk that is <b>left over</b> after the first one. So you multiply what still gets through — and the total protection can never pass 100%.",
      how: ["Turn each protection into the fraction that still gets through: 60% protection → 0.4 gets through.",
            "Multiply those fractions together: that is the risk that is left.",
            "Total protection = 100% − the risk that is left.",
            "Sanity check: if an answer is over 100%, the percentages were added instead of multiplied."]
    },
    hint: "Multiply what gets THROUGH, then take it away from 100%.",
    gen: function (rng) {
      var P = [30, 40, 50, 60, 80];
      var kind = rng.pick(["remain", "protect", "people", "fallacy", "fallacy"]);
      var a, b;
      if (kind === "fallacy") {
        /* the trap only bites when a + b passes 100 */
        a = rng.pick([50, 60, 80]);
        b = rng.pick(P.filter(function (x) { return x + a > 100; }));
      } else {
        a = rng.pick(P); b = rng.pick(P);
      }
      var c = rng.pick(PCTX);
      var thruA = (100 - a) / 100, thruB = (100 - b) / 100;
      var remPct = Math.round(thruA * thruB * 10000) / 100;
      var protPct = Math.round((100 - remPct) * 100) / 100;

      var setup = "In a simple model, " + c.s1 + " on its own cuts the chance of <b>" + c.risk + "</b> by <b>" + a +
        "%</b>, and " + c.s2 + " on its own cuts it by <b>" + b + "%</b>. " + c.who +
        " uses <b>both</b>, and the two protections work independently.";
      var maths = "What gets through " + c.s1 + ": 100% − " + a + "% = " + (100 - a) + "% = " + fmt(thruA) + ".<br>" +
        "What gets through " + c.s2 + ": 100% − " + b + "% = " + (100 - b) + "% = " + fmt(thruB) + ".<br>" +
        "Risk left = " + fmt(thruA) + " × " + fmt(thruB) + " = " + fmt(thruA * thruB) + " = <b>" + fmt(remPct) + "%</b>.<br>" +
        "Total protection = 100% − " + fmt(remPct) + "% = <b>" + fmt(protPct) + "%</b>.";

      if (kind === "remain") {
        return { qHTML: setup + "<br>What percentage of the risk is <b>still left</b>?",
          inputs: [pctInput("r", "risk left (%) =", remPct)], workedHTML: maths };
      }
      if (kind === "protect") {
        return { qHTML: setup + "<br>How well is " + c.who + " protected <b>altogether</b>, as a percentage?",
          inputs: [pctInput("p", "total protection (%) =", protPct)],
          workedHTML: maths + " (Adding would have given " + (a + b) + "% — which is why adding is wrong.)" };
      }
      if (kind === "people") {
        var still = Math.round(thruA * thruB * 1000);
        return { qHTML: setup + "<br>Out of <b>1000 people</b> who all use both, about how many are still at risk?",
          inputs: [numInput("n", "people still at risk =", still, 0.5)],
          workedHTML: maths + "<br>" + fmt(remPct) + "% of 1000 = " + fmt(thruA * thruB) + " × 1000 = <b>" + still + " people</b>." };
      }

      var right = "You cannot pass 100%. The second one only works on the risk left, so together they stop " + fmt(protPct) + "%.";
      return {
        qHTML: "A post says: <i>“" + c.s1.charAt(0).toUpperCase() + c.s1.slice(1) + " stops " + a + "% and " + c.s2 +
          " stops " + b + "%, so together they stop " + (a + b) + "% — you are completely safe.”</i><br>What is <b>wrong</b> with this?",
        opts: { list: [right,
          "Nothing is wrong — protections do add up to " + (a + b) + "%.",
          "They should be multiplied: " + a + "% × " + b + "% = " + fmt(a * b / 100) + "% protected.",
          "They should be averaged: (" + a + " + " + b + ") ÷ 2 = " + fmt((a + b) / 2) + "% protected."], a: right },
        workedHTML: maths + " Adding gives " + (a + b) + "%, which is impossible. " +
          "Multiplying the protections (" + fmt(a * b / 100) + "%) and averaging them (" + fmt((a + b) / 2) +
          "%) are wrong too — it is the <i>leftovers</i> that get multiplied."
      };
    }
  });

  /* ---------------- p_exp ---------------- */
  var ECTX = [
    { what: "people who have seen a class video", short: "people" },
    { what: "water-weed plants on a farm dam", short: "plants" },
    { what: "students away sick in one year level", short: "students" },
    { what: "posts sharing one rumour", short: "posts" }
  ];

  register({
    id: "p_exp",
    teach: {
      what: "<b>Linear</b> growth adds the same amount every step (+5, +5, +5). <b>Exponential</b> growth multiplies by the same number every step (×2, ×2, ×2). Exponential growth looks small and harmless at the start, then overtakes everything.",
      how: ["Find the gaps between the numbers. Equal gaps → linear.",
            "Now find the ratios: divide each number by the one before. Equal ratios → exponential.",
            "Continue with the rule you found: add the gap, or multiply by the ratio.",
            "For day N of a doubling pattern: start × 2 to the power (N − 1)."]
    },
    hint: "Check the gaps AND the ratios. Doubling grows far faster than adding.",
    gen: function (rng) {
      var c = rng.pick(ECTX);
      var start = rng.pick([5, 10, 20, 40]);
      var doubling = rng.raw() < 0.6;
      var d = rng.pick([5, 10, 15, 20, 25]);
      var steps = rng.ri(3, 5);
      var i, terms = [];
      for (i = 0; i < steps; i++) terms.push(doubling ? start * Math.pow(2, i) : start + i * d);
      var last = terms[steps - 1], prev = terms[steps - 2];
      var lastGap = last - prev, firstGap = terms[1] - terms[0];
      var kind = doubling ? rng.pick(["next", "which", "dayN", "dayN"]) : rng.pick(["next", "which"]);

      if (kind === "next") {
        var ans = doubling ? last * 2 : last + d;
        var trap = doubling ? last + lastGap : last * 2;
        return {
          qHTML: "Day by day, the number of " + c.what + " goes:<br><b>" + terms.join(", ") +
            ", …</b><br>If the pattern keeps going, what is the <b>next</b> value?",
          inputs: [numInput("v", "next value (" + c.short + ") =", ans, 0.001)],
          workedHTML: doubling
            ? "The ratios are all × 2 (" + terms[0] + " → " + terms[1] + " → " + terms[2] +
              "), so this is exponential: " + last + " × 2 = <b>" + ans + "</b>.<br>" +
              "<b>The linear trap:</b> if you just added the last gap of " + lastGap + " you would say " + trap +
              " — but the gaps are growing, so adding is the wrong rule here."
            : "The gaps are all +" + d + ", so this is linear: " + last + " + " + d + " = <b>" + ans + "</b>.<br>" +
              "<b>The exponential trap:</b> doubling would give " + trap +
              " — but nothing here is doubling, so check the gaps before you assume."
        };
      }

      if (kind === "which") {
        var right = doubling ? "It doubles each day (× 2)." : "It adds " + d + " each day.";
        var list = doubling
          ? [right, "It adds " + firstGap + " each day.", "It adds " + lastGap + " each day.", "It goes up by 10% each day."]
          : [right, "It doubles each day (× 2).", "It adds " + (2 * d) + " each day.", "It goes up by 10% each day."];
        return {
          qHTML: "Day by day, the number of " + c.what + " goes:<br><b>" + terms.join(", ") +
            "</b><br>Which rule fits this pattern?",
          opts: { list: list, a: right },
          workedHTML: doubling
            ? "Gaps: " + terms.slice(1).map(function (v, j) { return "+" + (v - terms[j]); }).join(", ") +
              " — not equal, so it is not linear. Ratios: " + terms.slice(1).map(function (v, j) { return "×" + (v / terms[j]); }).join(", ") +
              " — all the same, so it is <b>exponential: doubling</b>."
            : "Gaps: " + terms.slice(1).map(function (v, j) { return "+" + (v - terms[j]); }).join(", ") +
              " — all the same, so it is <b>linear: it adds " + d + " a day</b>. Ratios (" +
              terms.slice(1).map(function (v, j) { return "×" + fmt(Math.round(v / terms[j] * 100) / 100); }).join(", ") +
              ") are not equal, so it is not doubling."
        };
      }

      /* day N of a doubling pattern */
      var N = rng.ri(5, 8);
      var correct = start * Math.pow(2, N - 1);
      var linTrap = start * N;                    /* "it just adds the day-1 number every day" */
      var opts = [String(correct), String(linTrap)];
      var cands = [start * Math.pow(2, N - 2), start * 2 * (N - 1), correct * 2, correct + start, start * (N + 3)];
      for (i = 0; i < cands.length && opts.length < 4; i++) {
        var s = String(cands[i]);
        if (opts.indexOf(s) === -1) opts.push(s);
      }
      var pad = 3;
      while (opts.length < 4) { var s2 = String(correct + start * pad); if (opts.indexOf(s2) === -1) opts.push(s2); pad++; }
      return {
        qHTML: "In a model, the number of " + c.what + " starts at <b>" + start + "</b> on day 1 and <b>doubles every day</b>. " +
          "How many are there on <b>day " + N + "</b>?",
        opts: { list: opts, a: String(correct) },
        workedHTML: "From day 1 to day " + N + " there are " + (N - 1) + " doublings: " + start + " × 2<sup>" + (N - 1) +
          "</sup> = " + start + " × " + Math.pow(2, N - 1) + " = <b>" + correct + "</b>.<br>" +
          "<b>The linear trap:</b> reading 'doubles' as 'adds " + start + " every day' gives " + start + " × " + N + " = " +
          linTrap + ". That is the answer most people guess, and it is far too small — that is exactly why exponential growth surprises people."
      };
    }
  });

  /* ---------------- p_claims ---------------- */
  var CLCTX = ["cases of a winter bug in one suburb", "students walking to school", "trams running late",
               "calls to a school help line", "reports of a stomach bug"];

  register({
    id: "p_claims",
    teach: {
      what: "A claim is only as good as the numbers behind it. Three tricks come up again and again: dividing the change by the <b>wrong</b> number, a graph axis that does <b>not start at zero</b>, and quoting the one week that suits the story.",
      how: ["Find the claim, then find the numbers it is built on.",
            "Percentage change = (change ÷ the STARTING number) × 100.",
            "Check the graph's axis: does it start at zero? If not, the bars exaggerate.",
            "Check the window: does the whole data set say the same thing as the part they quoted?"]
    },
    hint: "Divide the change by the STARTING number, and always look at the whole data set.",
    gen: function (rng) {
      var thing = rng.pick(CLCTX);
      var tmpl = rng.pick(["drop", "drop", "axis", "axis", "window", "window"]);

      /* --- 1. dividing by the wrong number --- */
      if (tmpl === "drop") {
        var base = rng.pick([400, 800, 1000, 2000]);
        var p = rng.pick([50, 60, 75]);
        var v = [base, Math.round(base * 0.8), Math.round(base * 0.65), Math.round(base * (1 - p / 100))];
        var fall = base - v[3];
        var wrongPct = Math.round(fall / v[3] * 100);
        var series = v.join(" → ");
        var claim = "A post about " + thing + " says: <i>“Over four weeks the numbers went " + series +
          ". That is a fall of " + fall + " — a " + wrongPct + "% drop!”</i>";
        var truth = "Percentage drop = fall ÷ the STARTING number × 100 = " + fall + " ÷ " + base + " × 100 = <b>" + p + "%</b>. " +
          "The post divided by " + v[3] + ", the NEW number, which is why it got " + wrongPct + "%. " +
          "A drop can never be more than 100% — that would mean nothing was left at all.";
        if (rng.raw() < 0.5) {
          return { qHTML: claim + "<br>What is the <b>real</b> percentage drop from week 1 to week 4?",
            inputs: [pctInput("p", "real drop (%) =", p)], workedHTML: truth };
        }
        var rightD = "It divided the fall by the NEW number. The real drop is " + p + "%.";
        return { qHTML: claim + "<br>What is <b>wrong</b> with the post?",
          opts: { list: [rightD,
            "Nothing is wrong — the drop really is " + wrongPct + "%.",
            "It added the four weekly drops together.",
            "It should have used week 2 as the starting number."], a: rightD },
          workedHTML: truth };
      }

      /* --- 2. the axis does not start at zero --- */
      if (tmpl === "axis") {
        var AX = [
          { v1: 100, v2: 110, S: 90, m: 2, q: 10 },
          { v1: 100, v2: 120, S: 90, m: 3, q: 20 },
          { v1: 200, v2: 210, S: 190, m: 2, q: 5 },
          { v1: 200, v2: 220, S: 190, m: 3, q: 10 },
          { v1: 400, v2: 500, S: 300, m: 2, q: 25 },
          { v1: 400, v2: 420, S: 390, m: 3, q: 5 },
          { v1: 800, v2: 880, S: 720, m: 2, q: 10 },
          { v1: 50, v2: 60, S: 40, m: 2, q: 20 }
        ];
        var x = rng.pick(AX);
        var word = x.m === 2 ? "doubled" : "tripled";
        var wordN = x.m === 2 ? "doubling" : "tripling";
        var claimA = "A news graph shows " + thing + ": last year <b>" + x.v1 + "</b>, this year <b>" + x.v2 +
          "</b>. The vertical axis starts at <b>" + x.S + "</b>, not 0, so this year's bar looks <b>" + x.m +
          " times as tall</b> and the headline says the number has <i>" + word + "</i>.";
        var truthA = "The bars only show the part above " + x.S + ": " + (x.v1 - x.S) + " and " + (x.v2 - x.S) +
          " — and " + (x.v2 - x.S) + " ÷ " + (x.v1 - x.S) + " = " + x.m + ", which is where '" + word + "' comes from.<br>" +
          "The real change uses the whole numbers: (" + x.v2 + " − " + x.v1 + ") ÷ " + x.v1 + " × 100 = " +
          (x.v2 - x.v1) + " ÷ " + x.v1 + " × 100 = <b>" + x.q + "%</b>. A rise of " + x.q + "% is nowhere near " + wordN + ".";
        if (rng.raw() < 0.5) {
          return { qHTML: claimA + "<br>What is the <b>real</b> percentage rise?",
            inputs: [pctInput("q", "real rise (%) =", x.q)], workedHTML: truthA };
        }
        var rightA = "The axis starts at " + x.S + ", not 0, so a rise of only " + x.q + "% looks like it " + word + ".";
        return { qHTML: claimA + "<br>Why is the graph <b>misleading</b>?",
          opts: { list: [rightA,
            "Nothing is wrong — the bar really is " + x.m + " times as tall.",
            "The axis should start at " + x.v1 + " to show the change more clearly.",
            "The rise should be worked out as (" + x.v2 + " − " + x.S + ") ÷ " + x.S + " × 100."], a: rightA },
          workedHTML: truthA };
      }

      /* --- 3. the cherry-picked window --- */
      var base2 = rng.pick([200, 400, 800, 1000]);
      var mm = rng.pick([20, 25]);
      var dd = rng.pick([10, 20]);
      var qq = rng.pick([30, 40, 50, 60]);
      var w1 = base2, w2 = Math.round(base2 * (1 + mm / 100));
      var w3 = Math.round(w2 * (1 - dd / 100)), w4 = Math.round(base2 * (1 + qq / 100));
      var claimW = "Four weeks of " + thing + ": week 1 <b>" + w1 + "</b>, week 2 <b>" + w2 + "</b>, week 3 <b>" + w3 +
        "</b>, week 4 <b>" + w4 + "</b>. A post says: <i>“Numbers are falling — down " + dd + "% this week!”</i>";
      var truthW = "The post is only comparing week 2 with week 3: " + w2 + " → " + w3 + ", which really is a " + dd +
        "% fall. But that is one week chosen out of four.<br>Over the whole month: (" + w4 + " − " + w1 + ") ÷ " + w1 +
        " × 100 = " + (w4 - w1) + " ÷ " + w1 + " × 100 = <b>+" + qq + "%</b>. The trend is <b>up</b>, not down.";
      if (rng.raw() < 0.5) {
        return { qHTML: claimW + "<br>What is the percentage change from <b>week 1 to week 4</b>?",
          inputs: [pctInput("q", "change from week 1 to week 4 (%) =", qq)], workedHTML: truthW };
      }
      var rightW = "It used the one week that fell. Over the four weeks the number rose " + qq + "%.";
      return { qHTML: claimW + "<br>What is <b>wrong</b> with the post?",
        opts: { list: [rightW,
          "It should have used the change from week 1 to week 2 instead.",
          "It divided by the wrong number — the weekly fall is not " + dd + "%.",
          "The numbers are too small to show any trend."], a: rightW },
        workedHTML: truthW };
    }
  });

})();
