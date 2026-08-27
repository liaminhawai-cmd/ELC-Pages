// ============================================================
// progress-sources.js — window.ELCProgress
//
// Reads what every ELC app has saved on THIS device and returns it
// in one shape, so report.html can show a single dated record
// instead of a student opening five apps to find five part-answers.
//
// Why this works at all: every one of these apps is a GitHub Pages
// site under liaminhawai-cmd.github.io/<repo>/, which means they are
// all the SAME ORIGIN. Browser storage is keyed by origin, not by
// path, so the hub can read the phonics trainer's records the same
// way the phonics trainer can. Nothing is fetched, nothing is sent:
// this is the same device-local data, read where it already sits.
//
// Every reader is independently wrapped: if one app changes the
// shape of what it saves, that app's row goes quiet and the rest of
// the record still renders. A report that half-works beats one that
// throws.
//
//   const record = await ELCProgress.all();
//   record.apps      // [{id, title, href, stats, lastDay, events}]
//   record.days      // [{day, events:[{app, label, detail}]}]  newest first
// ============================================================

window.ELCProgress = (() => {

  const pad = (n) => String(n).padStart(2, "0");
  // A local day key. Deliberately built from the local getters rather
  // than toISOString(), which would give the UTC day and can land a
  // Melbourne evening on the following date.
  function dayOf(ts) {
    const d = new Date(ts);
    if (isNaN(d)) return null;
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      const v = raw == null ? null : JSON.parse(raw);
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }
  const plural = (n, one, many) => n + " " + (n === 1 ? one : (many || one + "s"));
  // A stat's noun has to agree with its own number — "1 sounds mastered"
  // is the kind of thing a child notices and a teacher has to explain away.
  const stat = (value, one, many, tail) =>
    ({ value, label: (value === 1 ? one : (many || one + "s")) + (tail ? " " + tail : "") });

  /* ---------------- Grammar Hub ----------------
     grammarHub.v1 → { history:[{date, skillId, right, total}], writings:[{date, promptId, text}] }
     Its dates are already day strings (no clock time), which is why the
     whole record groups by day rather than by timestamp. */
  function grammar() {
    const s = readJson("grammarHub.v1", null);
    if (!s) return null;
    const history = Array.isArray(s.history) ? s.history : [];
    const writings = Array.isArray(s.writings) ? s.writings : [];
    if (!history.length && !writings.length) return null;

    const events = [];
    // One session drills several cells on the same day; group them so a
    // day reads as "3 skills practised", not three near-identical lines.
    const byDay = {};
    history.forEach((h) => {
      if (!h || !h.date) return;
      const d = (byDay[h.date] = byDay[h.date] || { right: 0, total: 0, skills: new Set() });
      d.right += Number(h.right) || 0;
      d.total += Number(h.total) || 0;
      d.skills.add(h.skillId);
    });
    Object.keys(byDay).forEach((day) => {
      const d = byDay[day];
      events.push({ day, label: plural(d.skills.size, "skill") + " practised",
                    detail: d.right + "/" + d.total + " right first try" });
    });
    writings.forEach((w) => {
      if (!w || !w.date || !w.text || !w.text.trim()) return;
      events.push({ day: w.date, label: "Wrote a response", detail: w.text.trim().split(/\s+/).length + " words" });
    });

    const totals = history.reduce((a, h) => ({ right: a.right + (Number(h.right) || 0),
                                               total: a.total + (Number(h.total) || 0) }), { right: 0, total: 0 });
    return {
      id: "grammar", title: "Grammar Hub", icon: "📐",
      href: "https://liaminhawai-cmd.github.io/Grammar-hub/",
      stats: [
        { value: totals.total ? totals.right + "/" + totals.total : "—", label: "questions right first try" },
        stat(new Set(history.map((h) => h.skillId)).size, "skill", null, "touched"),
        stat(writings.filter((w) => w && w.text && w.text.trim()).length, "writing task", "writing tasks", "done"),
      ],
      events,
    };
  }

  /* ---------------- EAL Vocabulary ----------------
     ealvocab:<userId> → { collection:{key:{word, box, reps, mastered, path}}, log:[{at, ...}] }
     The user id is part of the key, so find whichever bucket has data
     rather than assuming "guest". */
  function vocab() {
    let state = null;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || k.indexOf("ealvocab:") !== 0) continue;
        const v = readJson(k, null);
        if (v && (Object.keys(v.collection || {}).length || (v.log || []).length)) { state = v; break; }
      }
    } catch (e) { return null; }
    if (!state) return null;

    const items = Object.values(state.collection || {});
    const log = Array.isArray(state.log) ? state.log : [];
    if (!items.length && !log.length) return null;

    const byDay = {};
    log.forEach((e) => {
      const day = e && e.at ? dayOf(e.at) : null;
      if (!day) return;
      const d = (byDay[day] = byDay[day] || { n: 0, words: new Set() });
      d.n++;
      if (e.word) d.words.add(e.word);
    });
    const events = Object.keys(byDay).map((day) => ({
      day,
      label: plural(byDay[day].words.size || byDay[day].n, "word") + " practised",
      detail: plural(byDay[day].n, "review"),
    }));

    return {
      id: "vocab", title: "Vocabulary", icon: "📘",
      href: "https://liaminhawai-cmd.github.io/EAL-Vocabulary-Site/#/words",
      stats: [
        stat(items.length, "word", null, "collected"),
        { value: items.filter((i) => i && i.mastered).length, label: "mastered" },
        stat(items.reduce((n, i) => n + (Number(i && i.reps) || 0), 0), "review", null, "done"),
      ],
      events,
    };
  }

  /* ---------------- STEM ----------------
     elc_stem_m2 → { skills:{id:{runs:[{t, ok, of, mode}], mastered:ts}}, rev:[{t, okPct}] }
     Names come from STEM2.SKILLS when stem-shared.js is on the page. */
  function stem() {
    const m2 = readJson("elc_stem_m2", null);
    const vocabWords = readJson("elc_stem_vocab", {}) || {};
    const hasSkills = m2 && m2.skills && Object.keys(m2.skills).length;
    if (!hasSkills && !Object.keys(vocabWords).length) return null;

    const SK = (typeof window.STEM2 !== "undefined" && STEM2.SKILLS) || {};
    const nameOf = (id) => (SK[id] && (SK[id].name || SK[id].title)) || id;
    // The STEM box further down this page counts only skills STEM2 still
    // defines, so a record left behind by a retired skill id doesn't show
    // up there. Match that, or the same page states two different totals.
    const known = Object.keys(SK).length ? (id) => !!SK[id] : () => true;

    const events = [];
    let mastered = 0, runs = 0;
    Object.keys((m2 && m2.skills) || {}).forEach((id) => {
      if (!known(id)) return;
      const s = m2.skills[id] || {};
      if (s.mastered) {
        mastered++;
        const day = dayOf(s.mastered);
        if (day) events.push({ day, label: "Mastered " + nameOf(id), detail: "" });
      }
      (s.runs || []).forEach((r) => {
        runs++;
        const day = r && r.t ? dayOf(r.t) : null;
        if (!day) return;
        events.push({ day, label: nameOf(id),
                      detail: (r.ok != null && r.of != null ? r.ok + "/" + r.of : "practised") +
                              (r.mode === "r" ? " · revision" : "") });
      });
    });
    ((m2 && m2.rev) || []).forEach((r) => {
      const day = r && r.t ? dayOf(r.t) : null;
      if (day) events.push({ day, label: "Revision round", detail: r.okPct != null ? r.okPct + "% right" : "" });
    });

    return {
      id: "stem", title: "STEM", icon: "🧪", href: "stem.html",
      stats: [
        stat(mastered, "skill", null, "mastered"),
        stat(runs, "practice run", null, null),
        stat(Object.keys(vocabWords).length, "word", null, "looked up"),
      ],
      events,
    };
  }

  /* ---------------- Pronunciation Hub ----------------
     elc_pron_state → { "/θ/": {st, focus, clearedAt, mine, steps} }
     Only clearedAt carries a time — a plain ⭐/✅ self-mark doesn't, so
     those count towards the totals but can't appear on a dated line. */
  function pron() {
    const s = readJson("elc_pron_state", null);
    if (!s || typeof s !== "object") return null;
    const syms = Object.keys(s);
    if (!syms.length) return null;

    const events = [];
    let done = 0, focus = 0, written = 0;
    syms.forEach((sym) => {
      const v = s[sym] || {};
      if (v.st === "done") done++;
      if (v.focus) focus++;
      if (v.mine && String(v.mine).trim()) written++;
      const day = v.clearedAt ? dayOf(v.clearedAt) : null;
      if (day) events.push({ day, label: "Teacher heard " + sym, detail: "focus sound cleared" });
    });
    if (!done && !focus && !written) return null;

    return {
      id: "pron", title: "Pronunciation Hub", icon: "🗣️", href: "pronunciation.html",
      stats: [
        stat(done, "sound", null, "marked ‘I can say it’"),
        stat(focus, "focus sound", null, "open"),
        stat(written, "twister", null, "written"),
      ],
      events,
    };
  }

  /* ---------------- Phonics ----------------
     The trainer keeps per-attempt records in IndexedDB ("phonics-tracker":
     profiles / mastery / attempts, each attempt stamped with ts), and only
     falls back to a localStorage blob where IndexedDB is unavailable. Both
     are same-origin, so both are readable from here. */
  function openPhonicsDb() {
    return new Promise((resolve) => {
      if (typeof indexedDB === "undefined") return resolve(null);
      // Opening a database that doesn't exist CREATES it — an empty
      // "phonics-tracker" v1 with no object stores would then stop the real
      // trainer from ever building its own (same version = no upgrade
      // event). So: ask first where the browser can tell us, and where it
      // can't, undo an accidental creation before anyone notices.
      const open = () => {
        let req;
        try { req = indexedDB.open("phonics-tracker"); } catch (e) { return resolve(null); }
        req.onerror = () => resolve(null);
        req.onsuccess = () => {
          const db = req.result;
          if (!db.objectStoreNames.length) {   // we just made it — put it back
            db.close();
            try { indexedDB.deleteDatabase("phonics-tracker"); } catch (e) {}
            return resolve(null);
          }
          resolve(db);
        };
      };
      if (indexedDB.databases) {
        indexedDB.databases().then((list) => {
          const exists = (list || []).some((d) => d && d.name === "phonics-tracker");
          exists ? open() : resolve(null);
        }).catch(open);
      } else { open(); }
    });
  }
  function getAll(db, store) {
    return new Promise((resolve) => {
      try {
        const req = db.transaction(store, "readonly").objectStore(store).getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (e) { resolve([]); }
    });
  }

  async function phonics() {
    let profiles = [], mastery = [], attempts = [];
    const db = await openPhonicsDb();
    if (db) {
      const names = db.objectStoreNames;
      if (names.contains("profiles")) profiles = await getAll(db, "profiles");
      if (names.contains("mastery")) mastery = await getAll(db, "mastery");
      if (names.contains("attempts")) attempts = await getAll(db, "attempts");
      db.close();
    } else {
      const blob = readJson("phonics-tracker", null);   // localStorage fallback adapter
      if (blob) {
        profiles = Object.values(blob.profiles || {});
        Object.values(blob.mastery || {}).forEach((byKey) => {
          Object.values(byKey || {}).forEach((r) => mastery.push(r));
        });
        attempts = blob.attempts || [];
      }
    }
    if (!attempts.length && !mastery.length) return null;

    // One learner per device is the norm here, but the trainer supports
    // several profiles — scope to whoever is active so a shared laptop
    // doesn't blend two children's records into one line.
    let activeId = null;
    try { activeId = localStorage.getItem("phonics-active-profile"); } catch (e) {}
    const active = profiles.filter((p) => p && p.id === activeId)[0] || null;
    if (activeId) {
      attempts = attempts.filter((a) => !a.profileId || a.profileId === activeId);
      mastery = mastery.filter((m) => !m.profileId || m.profileId === activeId);
    }

    const byDay = {};
    attempts.forEach((a) => {
      const day = a && a.ts ? dayOf(a.ts) : null;
      if (!day) return;
      const d = (byDay[day] = byDay[day] || { n: 0, right: 0, keys: new Set() });
      d.n++;
      if (a.correct) d.right++;
      if (a.key) d.keys.add(String(a.key).split("|")[0]);
    });
    const events = Object.keys(byDay).map((day) => ({
      day,
      label: plural(byDay[day].keys.size, "sound") + " practised",
      detail: byDay[day].right + "/" + byDay[day].n + " right",
    }));

    return {
      id: "phonics", title: "Phonics" + (active && active.name ? " · " + active.name : ""), icon: "🔤",
      href: "https://liaminhawai-cmd.github.io/Phonics/",
      stats: [
        stat(mastery.filter((m) => m && m.everMastered).length, "sound", null, "mastered"),
        stat(attempts.length, "attempt", null, null),
        { value: attempts.filter((a) => a && a.correct).length, label: "right" },
      ],
      events,
    };
  }

  /* ---------------- assembly ---------------- */
  const SAFE = (fn) => { try { return fn(); } catch (e) { console.warn("ELCProgress:", e); return null; } };

  async function all() {
    let ph = null;
    try { ph = await phonics(); } catch (e) { console.warn("ELCProgress: phonics", e); }
    // Order is the order they appear in the record: literacy first, STEM last.
    const live = [ph, SAFE(vocab), SAFE(grammar), SAFE(pron), SAFE(stem)].filter(Boolean);
    live.forEach((a) => {
      a.events = (a.events || []).filter((e) => e && e.day);
      a.lastDay = a.events.length ? a.events.map((e) => e.day).sort().slice(-1)[0] : null;
    });

    // Fold every app's events into one day-keyed timeline, newest day first.
    const dayMap = {};
    live.forEach((a) => a.events.forEach((e) => {
      (dayMap[e.day] = dayMap[e.day] || []).push({ app: a.id, appTitle: a.title, icon: a.icon,
                                                   label: e.label, detail: e.detail });
    }));
    const days = Object.keys(dayMap).sort().reverse().map((day) => ({ day, events: dayMap[day] }));

    return { apps: live, days };
  }

  return { all, dayOf };
})();
