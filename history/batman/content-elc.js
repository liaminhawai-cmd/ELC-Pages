/* =======================================================================
   ELC ADDITIONS TO content.js, read by bump-it-up.html after content.js.

   content.js stays a straight copy of the Year 7 unit so it can be copied
   across again when Year 7 changes. Everything the ELC version adds is
   here: the Proclamation in plain English, who made each source and when,
   and the dates on a timeline.
   ======================================================================= */

/* One paragraph per paragraph of the Proclamation, in Bourke's own voice.
   bump-it-up.html already shows a written source's `plain` beside it. */
SOURCES.find(s => s.id === "proclamation").plain = [
  "I have been told that some British people have taken vacant land of the Crown in this Colony. They pretend they bought it from Aboriginal people with a treaty, a bargain or a contract.",
  "So I, the Governor, use my power to declare to everyone: every treaty, bargain or contract with Aboriginal people for land in the Colony of New South Wales is void. It cannot take away the rights of the Crown.",
  "Anyone found on this land without permission from the Government will be treated as a trespasser. They will be treated the same as anyone else who goes onto the vacant land of the Crown.",
  "Signed and sealed by me at Government House, Sydney, on 26 August 1835. Richard Bourke."
];

/* The same questions for every source, so they can be compared row by row.
   Keyed by source id; one answer per row. The table carries everything in
   the FACTS boxes named in `replaces`, so the source screen drops those. */
const ABOUT = {
  rows: ["Who made it?", "When?", "How long after the meeting?", "Was the maker at the meeting?", "Good to know"],
  replaces: ["The painting", "The document"],
  painting: [
    "John Wesley Burtt, an artist.",
    "About 1875.",
    "About 40 years.",
    "No.",
    "No picture of Batman was made while he was alive, so the artist invented his face."
  ],
  proclamation: [
    "Governor Sir Richard Bourke, the Governor of New South Wales.",
    "26 August 1835.",
    "10 weeks.",
    "No. He signed it in Sydney.",
    "In 1835, Britain counted the Melbourne area as part of the Colony of New South Wales. Victoria became a separate colony in 1851."
  ]
};

/* Drawn to scale, so the 40 years before the painting fill the line and the
   10 weeks before the Proclamation barely move off the start. The first
   event sits above the line; the sources sit below it, in date order. */
const TIMELINE = {
  from: 1835, to: 1875,
  events: [
    { year: 1835.43, date: "June 1835", text: "Batman meets Kulin leaders at Merri Creek" },
    { year: 1835.65, date: "26 August 1835", text: "B · The Proclamation, 10 weeks after the meeting" },
    { year: 1875, date: "About 1875", text: "A · The painting, about 40 years after the meeting" }
  ]
};
