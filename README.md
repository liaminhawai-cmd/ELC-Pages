# ELC Pages

The student launcher for the ELC. Links out to the actual tools, each of which
lives and is deployed in its own repo (`Phonics`, `Grammar-hub`,
`EAL-Vocabulary-Site`, etc.) — this site never hosts a copy, so there's only
ever one live version of each tool to keep updated.

Also has a lightweight name/ID intake (saved to the browser only, never
transmitted anywhere) that feeds a printable "My Report" page, and a
teacher-view toggle that's cosmetic only — this is a static site, so it isn't
real access control.

**Adding a tool once it's live elsewhere:** add a card to `index.html`
pointing at its URL. Nothing to copy in.

**Live site:** liaminhawai-cmd.github.io/ELC-Pages/ (Settings → Pages →
Deploy from a branch → `main` / `/(root)`).
