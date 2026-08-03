# ELC Pages

The student launcher for the ELC. Larger tools live and deploy from their own
repos (`Phonics`, `Grammar-hub`, `EAL-Vocabulary-Site`, etc.), and this hub
links to those single live versions. Small, self-contained tools such as the
Learning Compass and Feeling Wheel live here beside the launcher.

Activity and saved goals stay in the browser and feed a printable "My Report"
page; the hub does not ask for names or student IDs. The teacher-view toggle is
cosmetic only — this is a static site, so it isn't real access control.

**Adding a tool once it's live elsewhere:** add a card to `index.html`
pointing at its URL. Nothing to copy in. Hub-native mini tools are standalone
HTML pages linked from the same card grid.

**Live site:** liaminhawai-cmd.github.io/ELC-Pages/ (Settings → Pages →
Deploy from a branch → `main` / `/(root)`).
