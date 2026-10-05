/* =======================================================================
   CONTENT BLOCK for the history WAGOLL family.
   This is the ONLY place the wall text lives. wagoll-wall.html,
   level-sheets.html and interactive.html all read it, so editing here
   updates the wall, the per-level A3 sheets and the interactive at once.

   This is the wall for History 1, Ancient Australia, and it is on the site.

   ONE ITEM IS STILL OPEN: the framing has not been checked with the Wurundjeri
   Woi Wurrung Cultural Heritage Aboriginal Corporation. Both sources here were
   made by colonists and no Kulin record of the meeting survives, which the wall
   states, but stating it is not the same as having the framing reviewed. The
   item is named on the topic page as well as here, and closing it may change
   the wording.

   The painting is reproduced at 1600x800 from the file supplied for this
   build. It is John Wesley Burtt, circa 1875, State Library of Victoria
   accession H92.196. The painting itself is long out of copyright; the
   reproduction's own terms still need confirming with SLV before print.
   See SOURCE-NOTICE.md.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.
   ======================================================================= */

const WALL = {
  id: "hist-batman",
  title: "Batman's Treaty",
  expected: "Year 7",
  inquiry: "A painting says Batman bought this land. A Proclamation says that was never possible. Which do you trust, and why?",
  foot: "<b>Sources:</b> <i>Batman's Treaty with the Aborigines at Merri Creek</i>, John Wesley Burtt, oil on canvas, circa 1875. State Library of Victoria, Pictures Collection, accession H92.196. Proclamation by Governor Sir Richard Bourke, 26 August 1835, National Archives of Australia. Reproduction terms for the painting have not yet been confirmed; see SOURCE-NOTICE.md."
};

const FACTS = [
  ["The painting", "Batman's Treaty with the Aborigines at Merri Creek, painted by John Wesley Burtt about 1875, roughly forty years after the meeting it shows."],
  ["The document", "A Proclamation signed by Governor Sir Richard Bourke on 26 August 1835, ten weeks after Batman's meeting."],
  ["What Batman claimed", "That Kulin leaders agreed to a treaty selling him land stretching from Melbourne to Geelong, about 240,000 hectares."],
  ["What Bourke declared", "That no settler could ever buy land from Aboriginal people. Any such treaty was ‘void and of no effect.’"],
  ["What's missing", "No Kulin record of the meeting has survived. The painting, the treaty and the Proclamation were all made by colonists."]
];

/* ink: the colour on paper, all four above 4.5:1 on the wall's cream lamp,
   the same criterion on the dark bar of the big-screen tool. underline, the
   second channel, is what survives a greyscale photocopy and a colour-blind
   reader. Colours and glyphs match the rest of the history family, so a
   student who knows GS73's wall reads this one the same way. */
const CRITERIA = [
  { key:"source",   row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"context",  row:"Historical context",                    name:"Historical context",                    glyph:"▲",
    ink:"#357a46", lamp:"#74c288", underline:"dashed" },
  { key:"evidence", row:"Historical interpretations",            name:"Historical interpretations",            glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"judge",    row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
];

const LEVELS = ["Grade 5","Year 6","Year 7","Year 8","Year 9","Year 10"];

/* Two rungs below Grade 5, matching the Victorian Curriculum's own two-year
   bands: Foundation to Level 2, then Levels 3 and 4. Criteria appear one at
   a time on the way up, which is the point of the ladder, not an omission. */
const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4"];

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`This is a {source|painting}. I can see {source|a big tree} and {source|long spears}. A man in a {source|white shirt} is standing with {context|Kulin people}.`,

 "Levels 3 and 4":
`The painting shows {source|a man named Batman meeting Aboriginal people from the Kulin Nation}. On the ground are {source|blankets with mirrors, shirts and beads on them}. Batman said {context|the Kulin people agreed to sell him their land}. A different document called the {evidence|Proclamation says no one could buy Aboriginal land at all}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   source:  "Names three things the child can point to in the painting: that it is a painting, the tree, and the spears.",
   context: "Names the group of people in the painting, using their own name rather than a general word." },
 "Levels 3 and 4": {
   source:  "Names the source, the event and one visible feature, the gifts on the blankets.",
   context: "Reports Batman's own claim about what happened.",
   evidence:"Reports a second document that disagrees with the first, without yet explaining why." }
};

const EXAMPLES = {
"Grade 5":
`This painting is a {source|picture of Batman meeting Kulin people in 1835}. I can see {source|blankets with gifts on them} and {source|men holding spears}. It shows {context|the day Batman said he bought Kulin land}. {evidence|The Proclamation disagrees}: it says no one could buy Aboriginal land. The painting is {judge|useful for showing what people wore and carried}, but it {judge|cannot show me what was really said}.`,

"Year 6":
`The source is a {source|painting of Batman's meeting with the Kulin Nation}, showing {source|gifts laid out on the ground and people talking}. It was painted to {context|remember an event some colonists were proud of}. {evidence|Batman claimed the Kulin people agreed to sell their land}, but {evidence|the Proclamation says such a sale was never allowed}. The painting is {judge|useful for showing how colonists pictured the meeting}, although {judge|it cannot tell us what the Kulin people actually thought}.`,

"Year 7":
`The event is {source|Batman's meeting with Kulin leaders in June 1835}. The painting is {source|a later artwork by John Wesley Burtt, made about forty years afterwards to record the meeting}. At this time, {context|Batman wanted land, and colonists were arguing about whether buying land from Aboriginal people was even allowed}. {evidence|Batman's own deed, the paper in his hand in the painting, says the Kulin people agreed to sell}; {evidence|Bourke's Proclamation says any such sale was ‘void and of no effect’}. The painting is {judge|useful for showing how the meeting was later remembered}, but {judge|it was painted forty years later, by someone who was not there}.`,

"Year 8":
`The painting is {source|Burtt's 1875 artwork of Batman's 1835 meeting with the Kulin Nation}, made to {source|show the meeting as calm and friendly}. {context|In the 1830s, Britain claimed Australia belonged to no one, so land could not legally be bought from its people}. {evidence|Batman argued his treaty was a fair purchase}; {evidence|Bourke's Proclamation rejects that, calling every such treaty ‘void’}; {evidence|the painting takes neither side, it simply shows the meeting happening}. The painting is {judge|useful evidence of how the meeting was later pictured}, but {judge|it cannot be trusted as a record of what was said or agreed, because the artist was not there}.`,

"Year 9":
`The event is {source|Batman's 1835 meeting with Kulin leaders}; the source used here is {source|Burtt's 1875 painting, made forty years later for people who had not seen it happen}. {context|The meeting sits inside a bigger argument: colonists wanted land, while British law increasingly held that Aboriginal people could not sell land they were said not to own}. {evidence|Batman's deed presents willing agreement}; {evidence|Bourke's Proclamation presents the opposite, that no agreement could ever be legal}; {evidence|the two documents disagree because they were written for different purposes, one to justify a land claim, one to control it}. The painting is {judge|strong evidence of how colonists wanted the meeting remembered}, but {judge|weak evidence of what actually happened, since no Kulin account of the day survives}.`,

"Year 10":
`The source is {source|a colonial painting of a disputed meeting}. Its {source|explicit content is a peaceful exchange of goods}; its {source|implicit message is that Batman's claim to the land was fair and orderly}, aimed at {source|later Australians who wanted to believe the colony began well}. {context|Painted in 1875, it reflects the values of its own time: order, progress, and an easy conscience about how the colony was founded}. {evidence|Batman's treaty and Bourke's Proclamation give opposite answers to one question, could this land be bought}; {evidence|they differ because one argues for private ownership and the other for the Crown's sole authority over the land}. Overall, the painting is {judge|useful evidence of memory and myth-making, but poor evidence of the event itself}: {judge|it was made decades later, by an artist who never saw the meeting, and no Kulin account from the day survives to check it against}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:  "The blue phrases name what the picture shows and two things visible in it: gifts, and men with spears.",
  context: "The green phrase places the painting on the day of Batman's claim, without yet explaining why that claim was disputed.",
  evidence:"The orange phrase reports the Proclamation's disagreement without yet explaining what either side argues.",
  judge:   "The purple phrases give one use and one limit: clothing and objects are visible, spoken words are not."
},
"Year 6": {
  source:  "'A painting of Batman's meeting' and 'gifts laid out' identify the source and one feature; purpose is not yet explained.",
  context: "The green phrase explains why the painting was made: to remember an event, without yet placing it in a wider argument.",
  evidence:"The answer gives both claims but does not yet say why they conflict.",
  judge:   "It recognises usefulness for one thing, how colonists pictured the day, and a clear limit: Kulin thoughts are absent.",
},
"Year 7": {
  source:  "The answer separates the 1835 event from the 1875 painting of it, then names when the painting was made and why.",
  context: "The green sentence places the meeting inside a real argument: whether buying Aboriginal land was legally possible at all.",
  evidence:"The orange phrases give both documents' claims side by side, quoting the Proclamation's own words.",
  judge:   "The purple judgement names a use, then bounds it: the artist's absence limits what the painting can prove.",
},
"Year 8": {
  source:  "The blue phrases describe the painting and explain the effect it was made to create: a calm, friendly scene.",
  context: "The green phrase explains the legal argument of the 1830s that the painting sits inside.",
  evidence:"The answer shows three positions, Batman's, Bourke's, and the painting's own silence on who was right.",
  judge:   "It separates what the painting is useful for from what it cannot be trusted for, and gives the reason.",
},
"Year 9": {
  source:  "The blue phrases separate the event from the source, and explain who the painting was really made for.",
  context: "The green phrases place both documents inside one bigger dispute, then name what each side was arguing for.",
  evidence:"Each document is explained through its purpose: justifying a claim, or controlling one.",
  judge:   "The purple comparison names what the painting is strong evidence for, and what it is weak evidence for, and why.",
},
"Year 10": {
  source:  "The blue phrases separate explicit content from implicit message, and name the audience the painting was made for.",
  context: "The green phrases use the painting's date to explain the values of the people who made and first viewed it.",
  evidence:"The evaluation explains why the documents disagree: they defend two different sources of authority over the land.",
  judge:   "The overall judgement holds two different kinds of usefulness apart, evidence of memory, and evidence of fact.",
}
};

const CONTINUUM = {
source:{
 "Grade 5":"I can name a historical source and a feature I notice.",
 "Year 6":"I can identify different types of historical sources.",
 "Year 7":"I can identify the origin, content features and purpose of historical sources.",
 "Year 8":"I can describe the origin, content features and purpose of historical sources.",
 "Year 9":"I can explain the origin, content features and purpose of historical sources.",
 "Year 10":"I can analyse the origin, explicit and implicit meaning, and purpose of historical sources."},
context:{
 "Grade 5":"I can say where or when a source comes from.",
 "Year 6":"I can identify the historical context of a source.",
 "Year 7":"I can outline the historical context of a source.",
 "Year 8":"I can describe the historical context of sources.",
 "Year 9":"I can explain historical context, including important events that influenced a source’s creation.",
 "Year 10":"I can explain historical context to identify the motivations, values and attitudes of a source’s creator."},
evidence:{
 "Grade 5":"I can notice that people may explain the past differently.",
 "Year 6":"I can recognise that historians may interpret historical events and developments differently.",
 "Year 7":"I can describe different historical interpretations of the past.",
 "Year 8":"I can explain different historical interpretations and contested debates about the past.",
 "Year 9":"I can analyse historical interpretations and contested debates and identify the evidence used to support them.",
 "Year 10":"I can evaluate historical interpretations and contested debates, including why or how interpretations differ."},
judge:{
 "Grade 5":"I can say one thing a source can and cannot tell us.",
 "Year 6":"I can recognise that some historical sources are more useful than others.",
 "Year 7":"I can draw conclusions about the usefulness of sources.",
 "Year 8":"I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
 "Year 9":"I can compare and contrast historical sources and identify their accuracy, usefulness and reliability.",
 "Year 10":"I can compare and contrast sources and analyse their accuracy, usefulness and reliability."},
};

/* =======================================================================
   For rubric-tour.html, the screen that teaches the rubric itself.

   STRAND_NOTES says what each strand of the wall is asking a student to think
   about. It is written about the skill, not about this painting: a student who
   has understood these four paragraphs can read a source they have never seen.
   Nothing here names an answer, because the screen that shows it is the screen
   a student sees BEFORE they sort anything.

   `grows` describes what changes as the strand is read left to right. It is a
   gloss on the rubric wording in CONTINUUM above, not a replacement for it:
   the rubric is quoted exactly on screen and this sits underneath.
   ======================================================================= */
const STRAND_NOTES = {
  source: {
    is: "Where a source came from, what is actually in it, and why it was made.",
    why: "Every source was made by somebody, at some time, for a reason. That reason shapes what went into it and what was left out, so who made it is itself a piece of evidence.",
    grows: "At the start of the strand you name what is in front of you. Further along you say what it was made for. At the end you work out what it implies but never states, which is the part a maker almost never writes down."
  },
  context: {
    is: "What was going on around the source at the time it was made.",
    why: "A source does not simply show its own age. It was made inside an argument that was already running, by somebody who had a side, and that argument stays invisible unless you go looking for it.",
    grows: "At the start of the strand you place the source in time. Further along you name the events pressing on the person who made it. At the end you use those events to get at what they wanted."
  },
  evidence: {
    is: "The different ways people have explained the same past.",
    why: "People at the time told the story differently, and so do historians now. When two accounts disagree, the disagreement is itself something to explain rather than something to settle by picking a side.",
    grows: "At the start of the strand you notice that people disagree. Further along you set two accounts beside each other and say what each one rests on. At the end you say why they differ."
  },
  judge: {
    is: "Whether a source can be trusted, and what it is good for.",
    why: "Useful and reliable are not the same test. A source can be wrong about what happened and still be excellent evidence of what somebody wanted people to believe, which is why a historian rarely throws one out.",
    grows: "At the start of the strand you say one thing the source can and cannot tell you. Further along you weigh it against another source. At the end you give a verdict and say what it rests on."
  }
};

/* The twenty sentences students sort, one per cell of the five-by-four grid
   rubric-tour.html builds. Every one is quoted from EXAMPLES above, and
   rubric-tour.html checks at load that each still appears there verbatim, so
   editing an example can never leave this list quietly out of date.

   Why a list at all, rather than taking the first or the longest marked phrase
   in each example: several cells mark two or three phrases, and picking
   mechanically produced pairs a student could not separate. "picture of Batman
   meeting Kulin people in 1835" and "painting of Batman's meeting with the
   Kulin Nation" differ by no skill anyone is being marked on. These twenty are
   chosen so that each one is separable from its neighbours by reading the
   rubric, which is the only thing the activity is trying to teach. */
const SORT_SET = {
  source: {
    "Grade 5": "blankets with gifts on them",
    "Year 6":  "painting of Batman's meeting with the Kulin Nation",
    "Year 7":  "a later artwork by John Wesley Burtt, made about forty years afterwards to record the meeting",
    "Year 8":  "Burtt's 1875 artwork of Batman's 1835 meeting with the Kulin Nation",
    "Year 9":  "Burtt's 1875 painting, made forty years later for people who had not seen it happen"
  },
  context: {
    "Grade 5": "the day Batman said he bought Kulin land",
    "Year 6":  "remember an event some colonists were proud of",
    "Year 7":  "Batman wanted land, and colonists were arguing about whether buying land from Aboriginal people was even allowed",
    "Year 8":  "In the 1830s, Britain claimed Australia belonged to no one, so land could not legally be bought from its people",
    "Year 9":  "The meeting sits inside a bigger argument: colonists wanted land, while British law increasingly held that Aboriginal people could not sell land they were said not to own"
  },
  evidence: {
    "Grade 5": "The Proclamation disagrees",
    "Year 6":  "Batman claimed the Kulin people agreed to sell their land",
    "Year 7":  "Batman's own deed, the paper in his hand in the painting, says the Kulin people agreed to sell",
    "Year 8":  "the painting takes neither side, it simply shows the meeting happening",
    "Year 9":  "the two documents disagree because they were written for different purposes, one to justify a land claim, one to control it"
  },
  judge: {
    "Grade 5": "useful for showing what people wore and carried",
    "Year 6":  "it cannot tell us what the Kulin people actually thought",
    "Year 7":  "it was painted forty years later, by someone who was not there",
    "Year 8":  "it cannot be trusted as a record of what was said or agreed, because the artist was not there",
    "Year 9":  "weak evidence of what actually happened, since no Kulin account of the day survives"
  }
};

/* The order the twenty sentences are printed in on the cut-out sheet, and so
   the number each one carries. Pinned here rather than shuffled at build time
   for two reasons: the PDF is committed, so a fresh shuffle would rewrite the
   binary on every rebuild, and a teacher holding last term's key would find it
   no longer matched this term's cards.

   No two neighbours share a strand or a level, so a run of cards down the sheet
   never hints at where they belong. sort-cards.html and sort-key.html both read
   this, which is what keeps a card and its number on the key in agreement. */
const SORT_DECK = [
  ["evidence", "Year 9"],             // 1
  ["judge", "Grade 5"],               // 2
  ["source", "Year 9"],               // 3
  ["judge", "Year 6"],                // 4
  ["context", "Year 8"],              // 5
  ["source", "Year 6"],               // 6
  ["context", "Year 9"],              // 7
  ["evidence", "Year 7"],             // 8
  ["judge", "Year 8"],                // 9
  ["context", "Grade 5"],             // 10
  ["source", "Year 7"],               // 11
  ["evidence", "Grade 5"],            // 12
  ["judge", "Year 7"],                // 13
  ["evidence", "Year 6"],             // 14
  ["context", "Year 7"],              // 15
  ["source", "Year 8"],               // 16
  ["context", "Year 6"],              // 17
  ["judge", "Year 9"],                // 18
  ["source", "Grade 5"],              // 19
  ["evidence", "Year 8"],             // 20
];

const SHEET_IMAGE = "batman-treaty-source.jpg";

/* ---------------------------------------------------------------------------
   TWO sources, not one. The whole point of this wall is that they disagree:
   the painting shows a bargain being struck, the Proclamation says no such
   bargain was ever possible. A student cannot compare interpretations from a
   single source, which is what the interpretations row asks for.

   SOURCES drives the tab strip on bump-it-up.html. Each entry carries its own
   hotspots, so a picture source and a written source behave identically.
   --------------------------------------------------------------------------- */
const SOURCES = [
 {
  id: "painting",
  tab: "A · The painting",
  title: "Batman's Treaty with the Aborigines at Merri Creek",
  kind: "image",
  file: SHEET_IMAGE,
  ar:   "1600/800",
  alt:  "Batman's Treaty with the Aborigines at Merri Creek, an oil painting of about 1875 by John Wesley Burtt. Batman stands in a white shirt holding a document, facing a Kulin man in a possum-skin cloak, with Kulin men holding spears and a shield behind them, two white cloths spread on the grass with trade goods on them, and a camp with bark shelters to the right.",
  missing: "The picture of the painting did not load.<br>Keep <b>batman-treaty-source.jpg</b> in the same folder as this page.",
  cite: "John Wesley Burtt, circa 1875. State Library of Victoria, H92.196.",
  whole: { label:"The whole painting",
    text:"Painted about 1875, roughly forty years after the meeting it shows, by an artist who was not there. No portrait of Batman was made while he was alive, so his face here is invented." },
  /* Percentages of the 1600x800 reproduction, read off the image. Nudge them
     if the plate is ever replaced with a different crop. */
  hotspots: [
   { x:12, y:66, w:30, h:22, label:"The goods on the cloth",
     text:"Two white cloths spread on the grass, with red cloth, small mirrors and beads laid out. This is the painting's record of what was offered for about 240,000 hectares of land." },
   { x:21, y:47, w:22, h:18, label:"The men laying them out",
     text:"Colonists kneeling over the cloths, arranging the goods. One stands behind them with a gun. The painting puts armed men at a meeting it otherwise shows as friendly." },
   { x:45, y:36, w:17, h:52, label:"Batman, and the paper in his hand",
     text:"Batman in a white shirt and red tie, holding a document: the deed itself, inside the picture. The Kulin man facing him rests a hand on his shoulder. Neither man's face was painted from life." },
   { x:62, y:36, w:18, h:44, label:"The Kulin men",
     text:"Men of the Kulin Nation in possum-skin cloaks, holding long spears and an oval shield. Not one of them is named in the painting or in its catalogue record." },
   { x:80, y:42, w:19, h:38, label:"The camp",
     text:"Bark shelters, women, children and people seated on the ground, carrying on while the meeting happens. The painting shows a place already lived in." }
  ]
 },
 {
  id: "proclamation",
  tab: "B · The Proclamation",
  title: "Proclamation of Governor Sir Richard Bourke",
  kind: "text",
  cite: "Proclamation of Governor Sir Richard Bourke, 26 August 1835. Abridged; spelling and capitals as written.",
  whole: { label:"The whole Proclamation",
    text:"Ten weeks after the meeting in the painting, the Governor of New South Wales declared that no settler could buy land from Aboriginal people, and that Batman's treaty was worth nothing." },
  paragraphs: [
   "Whereas, it has been represented to me, that divers of His Majesty's Subjects have taken possession of vacant Lands of the Crown within the limits of this Colony, under the pretence of a treaty, bargain, or contract, for the purchase thereof, with the Aboriginal Natives;",
   "Now therefore, I the Governor, in virtue and in exercise of the power and authority in me vested, do hereby proclaim and notify to all His Majesty's Subjects, and others whom it may concern, that every such treaty, bargain, and contract with the Aboriginal Natives, as aforesaid, for the possession, title, or claim to any Lands lying and being within the limits of the Government of the Colony of New South Wales, is void and of no effect against the rights of the Crown;",
   "and that all Persons who shall be found in possession of any such Lands as aforesaid, without the license or authority of His Majesty's Government, for such purpose first had and obtained, will be considered as trespassers, and liable to be dealt with in like manner as other intruders upon the vacant Lands of the Crown within the said Colony.",
   "Given under my Hand and Seal, at Government House, Sydney, this twenty sixth Day of August, One thousand eight hundred and thirty five. (signed) Richard Bourke."
  ],
  hotspots: [
   { mark:"vacant Lands of the Crown", label:"‘vacant Lands of the Crown’",
     text:"The land is called empty and the Crown's. Read on: the same sentence admits there were Aboriginal people there to make a treaty with. The document contradicts itself in four lines." },
   { mark:"under the pretence of a treaty", label:"‘under the pretence of a treaty’",
     text:"‘Pretence’ decides the question before it is argued. To Bourke, Batman's deed is not a treaty that failed, it is an excuse." },
   { mark:"is void and of no effect against the rights of the Crown", label:"‘void and of no effect’",
     text:"The ruling. Not that this particular treaty was unfair, but that no such treaty could ever count, because only the Crown could grant land." },
   { mark:"will be considered as trespassers", label:"‘considered as trespassers’",
     text:"The consequence. A settler holding land bought from Aboriginal people is not an owner but an intruder." },
   { mark:"twenty sixth Day of August, One thousand eight hundred and thirty five", label:"The date",
     text:"26 August 1835, about ten weeks after the June meeting the painting shows. The painting was made forty years after both." }
  ]
 }
];

/* Anything that reads a single source, the A3 sheet and the poster builders,
   still gets one. bump-it-up.html prefers SOURCES when it is defined. */
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

/* Two different things climb this wall at once, and a student who cannot tell
   them apart reads their own year level as "too hard" rather than "not taught
   yet".

   new:        the SKILL this rung adds that the rung below did not have.
   background: the KNOWLEDGE a student at this level has already been taught,
               which is what makes the inference above available to them.

   So background is written as a statement about what the year level knows, not
   as a warning about what the reader is missing. On screen the panel is
   labelled with the level's own name: "A Year 9 student already knows". Read
   down the column and you can see exactly which rungs are harder because the
   thinking got harder, and which are harder because they lean on history that
   is taught later. */
const BUMP = {
 "Foundation to Level 2": {
   new:"You name what you can see in the painting.",
   background:"that pictures are made by people, and that a picture can show something that did not happen quite that way." },
 "Levels 3 and 4": {
   new:"You say what the painting is claimed to show, and that a second document disagrees with it.",
   background:"that Aboriginal peoples were here first, and that this land is the Country of the Kulin Nation." },
 "Grade 5": {
   new:"You name the date the painting shows, bring in the Proclamation as a second source, and give one use and one limit.",
   background:"that Europeans came to Australia and took land, and that governments make written rules about who owns what." },
 "Year 6": {
   new:"You explain why the painting was made, not just what it shows, and give both sides' claims.",
   background:"that Australia was colonised by Britain, and that people who write about an event often want it remembered a particular way." },
 "Year 7": {
   new:"You separate the 1835 event from the 1875 painting of it, and quote the Proclamation's own words.",
   background:"that colonisation happened over a long period, place by place, and that Melbourne was founded in the 1830s, decades after Sydney." },
 "Year 8": {
   new:"You give three positions instead of two, adding what the painting itself does and does not take sides on, and explain why the artist's absence limits it.",
   background:"that Britain claimed Australia as land belonging to no one, which is the idea that let a Governor rule that Aboriginal people had no land to sell." },
 "Year 9": {
   new:"You explain why the two documents disagree, not only that they disagree, by naming what each one was written to achieve.",
   background:"that colonisation dispossessed Aboriginal peoples, that this was contested at the time, and that almost all surviving written records of it were made by colonists." },
 "Year 10": {
   new:"You separate what a source explicitly shows from what it implies, and name the audience it was really made for.",
   background:"that later generations retell their own founding stories to suit themselves, and that Australia argued about the truth of its settlement long after 1835." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer synonym.
   Matched case-insensitively on whole words wherever they appear. */
const GLOSS = {
 tier3: {
  "Proclamation":"An official public announcement made by a governor, with the force of law.",
  "treaty":"A formal agreement, usually between two groups or nations.",
  "Kulin Nation":"Five Aboriginal peoples whose Country covers the area around present-day Melbourne.",
  "grazier":"A farmer who raises sheep or cattle on open land.",
  "void":"Having no legal force. A void agreement counts as if it never happened.",
  "trespasser":"Someone occupying land without legal permission to be there.",
  "vacant":"Empty, belonging to no one. The Proclamation calls the land 'vacant' while also describing Aboriginal people living on it.",
  "Crown":"The British monarch, acting as the legal head of the government and its territory."
 },
 tier2: {
  "claimed":"said, without proof",
  "declared":"announced officially",
  "authority":"the power to decide",
  "legal":"allowed by law",
  "dispute":"disagreement",
  "contested":"argued about",
  "implicit":"suggested, not stated directly",
  "explicit":"stated directly",
  "myth-making":"turning an event into a story people want to believe",
  "reject":"refuse to accept",
  "justify":"give good reasons for",
  "purpose":"the reason it was made"
 }
};

/* Translations for this unit's own tier-3 words, in the shape eal.js uses.
   Machine-drafted, unreviewed, and labelled as such on screen (EAL_NOTE),
   same as every other translation table on this site. The eight languages
   below are the ones Year 7 actually has full coverage in: check against
   geography/water/content.js's TIER3_T before assuming a wider or narrower
   set, that file is the one other units are drafted against. */
const TIER3_T = {
  "Proclamation": {"zh-Hans": "公告", "zh-Hant": "公告", "vi": "tuyên cáo", "ar": "إعلان رسمي", "fa": "اعلامیه", "ur": "اعلان نامہ", "ml": "വിളംബരം", "am": "አዋጅ"},
  "treaty": {"zh-Hans": "条约", "zh-Hant": "條約", "vi": "hiệp ước", "ar": "معاهدة", "fa": "معاهده", "ur": "معاہدہ", "ml": "ഉടമ്പടി", "am": "ስምምነት"},
  "Kulin Nation": {"zh-Hans": "库林民族", "zh-Hant": "庫林民族", "vi": "dân tộc Kulin", "ar": "أمة كولين", "fa": "ملت کولین", "ur": "قومِ کولن", "ml": "കുലിൻ ജനത", "am": "የኩሊን ብሔር"},
  "grazier": {"zh-Hans": "牧场主", "zh-Hant": "牧場主", "vi": "chủ trại chăn nuôi", "ar": "مربي ماشية", "fa": "دامدار", "ur": "مویشی پالنے والا", "ml": "കന്നുകാലി വളർത്തുന്നയാൾ", "am": "የከብት እርባታ ባለቤት"},
  "void": {"zh-Hans": "无效的", "zh-Hant": "無效的", "vi": "vô hiệu", "ar": "لاغٍ وباطل", "fa": "باطل", "ur": "کالعدم", "ml": "അസാധുവായ", "am": "ውድቅ የሆነ"},
  "trespasser": {"zh-Hans": "非法占用者", "zh-Hant": "非法佔用者", "vi": "kẻ xâm phạm", "ar": "متعدٍّ على الأرض", "fa": "متجاوز", "ur": "تجاوز کار", "ml": "കടന്നുകയറ്റക്കാരൻ", "am": "ወራሪ"},
  "vacant": {"zh-Hans": "空置的", "zh-Hant": "空置的", "vi": "bỏ trống", "ar": "شاغر", "fa": "خالی از سکنه", "ur": "خالی", "ml": "ഒഴിഞ്ഞ", "am": "ባዶ"},
  "Crown": {"zh-Hans": "英国王室", "zh-Hant": "英國王室", "vi": "Vương triều Anh", "ar": "التاج البريطاني", "fa": "تاج بریتانیا", "ur": "برطانوی تاج", "ml": "ബ്രിട്ടീഷ് കിരീടം", "am": "የእንግሊዝ ዘውድ"}
};

/* Same shape, for the tier-2 words: the general academic vocabulary, not the
   subject's own terms. Tapping one of these used to only toggle an inline
   English synonym; it now opens the same translate popup as a tier-3 word,
   which is what this table is for. */
const TIER2_T = {
  "claimed": {"zh-Hans": "声称", "zh-Hant": "聲稱", "vi": "tuyên bố", "ar": "زعم", "fa": "ادعا کرد", "ur": "دعویٰ کیا", "ml": "അവകാശപ്പെട്ടു", "am": "ተናገረ"},
  "declared": {"zh-Hans": "宣布", "zh-Hant": "宣布", "vi": "tuyên bố chính thức", "ar": "أعلن", "fa": "اعلام کرد", "ur": "اعلان کیا", "ml": "പ്രഖ്യാപിച്ചു", "am": "አወጀ"},
  "authority": {"zh-Hans": "权力", "zh-Hant": "權力", "vi": "thẩm quyền", "ar": "سلطة", "fa": "اقتدار", "ur": "اختیار", "ml": "അധികാരം", "am": "ስልጣን"},
  "legal": {"zh-Hans": "合法的", "zh-Hant": "合法的", "vi": "hợp pháp", "ar": "قانوني", "fa": "قانونی", "ur": "قانونی", "ml": "നിയമപരമായ", "am": "ህጋዊ"},
  "dispute": {"zh-Hans": "争议", "zh-Hant": "爭議", "vi": "tranh chấp", "ar": "نزاع", "fa": "اختلاف", "ur": "تنازع", "ml": "തർക്കം", "am": "ውዝግብ"},
  "contested": {"zh-Hans": "有争议的", "zh-Hant": "有爭議的", "vi": "bị tranh cãi", "ar": "متنازع عليه", "fa": "مورد مناقشه", "ur": "متنازعہ", "ml": "തർക്കത്തിലുള്ള", "am": "አከራካሪ"},
  "implicit": {"zh-Hans": "隐含的", "zh-Hant": "隱含的", "vi": "ngầm hiểu", "ar": "ضمني", "fa": "ضمنی", "ur": "مضمر", "ml": "അന്തർലീനമായ", "am": "ስውር"},
  "explicit": {"zh-Hans": "明确的", "zh-Hant": "明確的", "vi": "rõ ràng", "ar": "صريح", "fa": "صریح", "ur": "واضح", "ml": "വ്യക്തമായ", "am": "ግልጽ"},
  "myth-making": {"zh-Hans": "神话塑造", "zh-Hant": "神話塑造", "vi": "việc tạo huyền thoại", "ar": "صناعة الأسطورة", "fa": "افسانه‌سازی", "ur": "افسانہ سازی", "ml": "കെട്ടുകഥ നിർമ്മാണം", "am": "ተረት መፍጠር"},
  "reject": {"zh-Hans": "拒绝", "zh-Hant": "拒絕", "vi": "từ chối", "ar": "يرفض", "fa": "رد کرد", "ur": "مسترد کیا", "ml": "നിരസിക്കുന്നു", "am": "ውድቅ አደረገ"},
  "justify": {"zh-Hans": "证明合理", "zh-Hant": "證明合理", "vi": "biện minh", "ar": "يبرر", "fa": "توجیه کرد", "ur": "جواز پیش کرنا", "ml": "ന്യായീകരിക്കുന്നു", "am": "አጸደቀ"},
  "purpose": {"zh-Hans": "目的", "zh-Hant": "目的", "vi": "mục đích", "ar": "الغرض", "fa": "هدف", "ur": "مقصد", "ml": "ഉദ്ദേശ്യം", "am": "ዓላማ"}
};
