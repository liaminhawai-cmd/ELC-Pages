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
2. **No copyrighted material** — no textbook scans, picture books, film
   scripts, subtitle files, or teacher planning documents. Planning docs get
   rebuilt as interactive activities; they are never published as-is.
3. **Nothing vulgar**, nothing that collects personal data. No accounts, no
   tracking, no analytics. `localStorage` only, and the UI says so honestly.
4. **The teacher-view toggle is cosmetic.** This is a static site — never
   present anything here as access control, and never put teacher-only
   content behind it.
5. **Current publishing mode:** direct pushes to `main` are OK'd by the
   teachers while the site isn't yet shared with students. Still run your own
   privacy/copyright check on every file and say in the commit what you
   checked. This mode ends when the teachers say so.

## Before you build

**Check what already exists** — here, and in the other live repos
(`Phonics`, `Grammar-hub`, `EAL-Vocabulary-Site`). Two AIs once shipped two
pronunciation hubs in one day because neither looked. If something similar
exists, extend it or flag the overlap; don't ship a parallel version.

Current pages: `index.html` (launcher) · `writing-wall.html` ·
`pronunciation.html` · `feeling-wheel.html` · `learning-compass.html` ·
`report.html`.

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
