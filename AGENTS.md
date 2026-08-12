# Read this first (AI assistants)

**This repo is PUBLIC and LIVE.** Everything on `main` is on the internet at
`liaminhawai-cmd.github.io/ELC-Pages/` within a minute or two of pushing.
Students will use these pages.

This is the student hub for an intensive English Language Centre. The private
context library — source materials, house style, the roadmap, and the full AI
brief — is the `ELC` repo. **Read `ELC/AGENTS.md` and `ELC/ROADMAP.md` before
building anything here.** If you can't reach the private repo, ask the teacher
to paste what you need; don't guess.

## Hard rules for a public, live repo

1. **No student or staff names, ever** — in code, content, examples, commit
   messages, or file metadata.
2. **No reproducing copyrighted works** — no textbook scans, picture-book
   pages or page images, film scripts, subtitle files, or teacher planning
   documents. **Short quotes inside original analytical commentary are
   fine** — a phrase or a line, same as any published book review or the
   writing wall already does — that's ordinary fair-dealing criticism/
   review, not reproduction. Planning docs get rebuilt as interactive
   activities; they are never published as-is.
3. **Nothing vulgar**, nothing that collects personal data. No accounts, no
   tracking, no analytics. `localStorage` only, and the UI says so honestly.
4. **Traditional Chinese is required.** Whenever an ELC page offers translated
   content, include reviewed Traditional Chinese as a distinct option and data
   value. Do not treat Simplified Chinese fallback text as Traditional coverage.
5. **The teacher-view toggle is cosmetic.** This is a static site — never
   present anything here as access control, and never put teacher-only
   content behind it.
6. **Current publishing mode:** direct pushes to `main` are OK'd by the
   teachers while the site isn't yet shared with students. Still run your own
   privacy/copyright check on every file and say in the commit what you
   checked. This mode ends when the teachers say so.

## Core principles — these override everything except the hard rules

1. **No fluff. Ever.** Do not invent progress chatter, streaks, points, badges,
   encouragement banners, "keep going!", "1 view left", or any other filler
   that pretends to be teaching. If a line of text does not teach something,
   instruct something, or report a real state, delete it. Teachers notice
   padding instantly and it costs the tool its credibility.
2. **Teach the rule, with the example — not the example alone.** Showing a
   model is not teaching. Every model must be annotated with the rule it
   demonstrates, the way a good slide is: name the pattern, show where it
   lives in the example, and state the range/limits so students can apply it
   to their own work. Point at the specific words, don't just assert.
3. **Never lock a teacher or student out of content.** No gates, no "complete
   this first", no forced sequences. Teachers jump around mid-lesson, re-teach
   a slide, skip what the class already knows. Sequence is a *suggestion* —
   show progress ticks if useful, but every part is always reachable.
4. **Annotate generously.** Labels, callouts, arrows, colour-coding tied to
   meaning — the density of a well-made PowerPoint, not a bare demo. The
   student should be able to read the screen without the teacher narrating.
5. **Say the honest thing.** If the computer is guessing (syllable splits,
   accent models, synthesised sound), say so and let the human overrule it.
   Never present a guess as an authority.
6. **Plain instructions.** Short sentences, common words, one instruction per
   line. The readers are EAL learners.

## Before you build

**Check what already exists** — here, and in the other live repos
(`Phonics`, `Grammar-hub`, `EAL-Vocabulary-Site`). Two AIs once shipped two
pronunciation hubs in one day because neither looked. If something similar
exists, extend it or flag the overlap; don't ship a parallel version.

Current pages: `index.html` (launcher) · `writing-wall.html` ·
`pronunciation.html` · `feeling-wheel.html` · `limericks.html` ·
`learning-compass.html` · `report.html`.

## Conventions

- **One self-contained `.html` file per tool.** No build step, no CDNs, no
  external fonts. Must work offline and on a phone (mobile-first).
- **Content lives in a marked data block at the top of the file** so teachers
  can add examples/words/twisters without touching logic.
- Match the shared look: CSS variables, light/dark via
  `prefers-color-scheme`, the existing card/header patterns.
- Cross-repo links are fine (e.g. the pronunciation hub plays audio from
  `Phonics`); hosted duplicates are not.
- New tool → add a card in `index.html` with `data-cat`/`data-title` so the
  activity record keeps working.
- Sticky UI must never resize with scroll (that's what causes jank) — pin at
  a fixed size with internal scroll, like the writing wall's rubric.

## Verify before you push

Load the page and click through what you changed — a real browser or
headless run, not a hope. State in the commit message what you verified.
