/* =======================================================================
   CONTENT BLOCK for the ELC first contact wall. Read by bump-it-up.html (the
   wall) and worksheet.html (the printed sheet), so the two cannot disagree.
   Edit here; nothing else holds this text.

   It practises historical perspectives: three primary sources on first
   contact and colonisation. A is positive but patronising (Cook, 1770), B is
   negative and dismissive (Dampier, 1688), C is an Aboriginal man's own
   account (Mahroot, 1845). See SOURCE-NOTICE.md for where each text was read
   and what was cut.

   Shape and rubric rows are copied from the Year 7 Humanities walls
   (Year-7-Humanities-Pages history/terracotta): rows 1, 3 and 5 of the Ancient
   China Source Analysis Rubric, word for word.

   PASSWORD. The class sees every rung and its rubric rows, and the worked
   examples up to Level 6. Typing "colonisation" anywhere on the wall (not in
   a text box) opens Levels 7 to 10 and the VCE rungs (Years 11 and 12). Typing it again closes them. It is a
   curtain, not a lock: the word is in this file.
   ======================================================================= */

const UNLOCK_WORD = "colonisation";

const WALL = {
  id: "elc-first-contact",
  title: "First contact",
  expected: "Level 6",
  inquiry: "How did Europeans see Aboriginal people, and what did colonisation mean for them?",
  foot: "<b>Sources:</b> A, James Cook's journal, 1770 (NLA MS 1); B, William Dampier, A New Voyage Round the World, 1697; C, Mahroot's evidence to the NSW Legislative Council, 1845. All public domain."
};

/* Context: shown on the wall's first screen and in the box on the sheet. */
const FACTS = [
 [ "First Nations Peoples",
   "Aboriginal and Torres Strait Islander Peoples have lived in Australia for more than 60,000 years, in hundreds of language groups." ],
 [ "1688: Dampier",
   "William Dampier, an English sailor on a pirate ship, landed on the north-west coast. His book about the voyage came out in 1697." ],
 [ "1770: Cook",
   "James Cook sailed up the east coast and landed at Botany Bay. On 22 August 1770 he claimed the whole east coast for King George III. He did not ask the people who lived there." ],
 [ "1788: the First Fleet",
   "British ships arrived at Sydney Cove to start a colony. The land was taken without a treaty." ],
 [ "1789: smallpox",
   "A year later, smallpox spread among Aboriginal people around Sydney. Many died." ],
 [ "1845: the committee",
   "A committee of the New South Wales parliament asked Aboriginal people and settlers about Aboriginal people's lives. Mahroot, from Botany Bay, answered their questions." ]
];

const CRITERIA = [
  { key:"source",      row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"perspective", row:"Historical perspectives",               name:"Historical perspectives",               glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"judge",       row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9","Level 10","Year 11","Year 12"];
const STUDENT_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5", "Level 6"];
const EARLY_LEVELS = ["Foundation to Level 2","Levels 3 and 4","Level 5"];

/* ---------- the sources ---------- */
const SOURCES = [
 {
  id: "cook", tab: "Source A", kind: "text",
  sheetHead: "James Cook's journal, written in August 1770 at the end of his voyage up the east coast",
  cite: "Source A: James Cook, journal of the Endeavour voyage, his description of New South Wales, written after the entry for 23 August 1770 (National Library of Australia, MS 1, page 299). Transcription: South Seas project, Paul Turnbull. Cook's own spelling. […] shows where words are left out.",
  whole: { label: "The whole extract",
    text: "Cook kept this journal for the British navy. He wrote this part just after he had claimed the east coast for King George III." },
  paragraphs: [
    "From what I have said of the Natives of New-Holland they may appear to some to be the most wretched people upon Earth, but in reality they are far more happier than we Europeans; being wholy unacquainted not only with the superfluous but the necessary conveniencies so much sought after in Europe, they are happy in not knowing the use of them.",
    "They live in a Tranquillity which is not disturb'd by the Inequality of Condition: The Earth and sea of their own accord furnishes them with all things necessary for life […]",
    "In short they seem'd to set no Value upon any thing we gave them, nor would they ever part with any thing of their own for any one article we could offer them; this, in my opinion argues that they think themselves provided with all the necessarys of Life and that they have no Superfluities"
  ],
  plain: [
    "Some people may think the Aboriginal people here are the poorest people on Earth. But really they are much happier than us Europeans. They do not know the things Europeans want, so they are happy without them.",
    "They live in peace, because no one is richer than anyone else. The land and the sea give them everything they need.",
    "They did not want anything we gave them. They would not swap anything of theirs for our things. I think this shows they believe they already have everything they need."
  ],
  hotspots: [
   { mark:"the most wretched people upon Earth", label:"What others think", text:"Wretched means very poor and unhappy. Cook starts with the view he expects his European readers to hold." },
   { mark:"far more happier than we Europeans", label:"Cook's view", text:"Cook's point of view is positive. He says Aboriginal people are happier than Europeans." },
   { mark:"they are happy in not knowing the use of them", label:"Happy because they do not know", text:"Praise, but it is patronising: they are happy because they do not know any better. Who decides what is better?" },
   { mark:"They live in a Tranquillity", label:"Peace", text:"Tranquillity means calm and peace. Cook admires a society where no one is richer than anyone else." },
   { mark:"they seem'd to set no Value upon any thing we gave them", label:"Gifts left behind", text:"Cook saw people leave cloth on the beach. He decides this means they are content. Could it mean something else?" },
   { mark:"in my opinion argues", label:"Cook's opinion", text:"Cook says himself that this is his opinion. These are his words about Aboriginal people, not their words." }
  ]
 },
 {
  id: "dampier", tab: "Source B", kind: "text",
  sheetHead: "William Dampier's book A New Voyage Round the World, 1697, about the north-west coast in 1688",
  cite: "Source B: William Dampier, A New Voyage Round the World (London, 1697), from the 1859 reprint in Early Voyages to Terra Australis (Hakluyt Society), via Wikisource. Dampier anchored on 5 January 1688. […] shows where words are left out, including racist names for other peoples.",
  whole: { label: "The whole extract",
    text: "Dampier wrote this book for readers in England. It was about his voyage around the world." },
  paragraphs: [
    "The inhabitants of this country are the miserablest people in the world. […] and setting aside their human shape, they differ but little from brutes.",
    "Their eyelids are always half closed, to keep the flies out of their eyes […] and therefore they cannot see far, unless they hold up their heads as if they were looking at somewhat over them."
  ],
  plain: [
    "The people who live here are the most miserable people in the world. Apart from their human shape, they are almost the same as animals.",
    "Their eyes are always half closed to keep the flies out. So they cannot see far unless they tip their heads back."
  ],
  hotspots: [
   { mark:"the miserablest people in the world", label:"Dampier's view", text:"Miserablest means the most miserable. Dampier's point of view is negative." },
   { mark:"they differ but little from brutes", label:"Like animals", text:"Brutes are animals. Dampier says Aboriginal people are hardly different from animals. This is dehumanising: it treats people as less than human." },
   { mark:"Their eyelids are always half closed", label:"What he saw", text:"An observation: he saw people half-close their eyes against the flies." },
   { mark:"therefore they cannot see far", label:"What he guessed", text:"A guess, not a fact. Dampier turns what he saw into a claim about what people can do." }
  ]
 },
 {
  id: "mahroot", tab: "Source C", kind: "text",
  sheetHead: "Mahroot, a Botany Bay man, answering questions from a New South Wales parliament committee, 8 September 1845",
  cite: "Source C: evidence of Mahroot, 8 September 1845, Report from the Select Committee on the Condition of the Aborigines, NSW Legislative Council (printed 1845). Transcription: Hunter Living Histories, University of Newcastle. The labels Q and A are added; the words are the printed report's. Four exchanges, in the order they were asked; others are left out.",
  whole: { label: "The four answers",
    text: "Committee members asked the questions. A clerk wrote down the answers, and the parliament printed them." },
  paragraphs: [
    "Q: When you first recollect, how many black fellows were there in the tribe who spoke your language, men, women, and children? A: Four hundred I think is my recollection.",
    "Q: When did the number of your tribe begin to diminish (a pause) when did you find black fellows die off; when did they come to be few? A: They used to fight about the town, knock about like the deuce in liquor.",
    "Q: It was by getting drunk you think? A: To that degree they took to liquor, at last they went away very fast; it was the only thing that destroyed them.",
    "Q: How many are there do you think alive, who were born there, who belong to the old tribe who speak your language, not the Liverpool language? A: Only four, three women and I am the only man."
  ],
  plain: [
    "Q: When you were young, how many people in your group spoke your language? A: About 400, I think.",
    "Q: When did your people start to die? A: They fought in the town and drank a lot of alcohol.",
    "Q: So it was because of drinking? A: They drank so much that they died fast. It was the only thing that killed them.",
    "Q: How many people from your old group are alive now? A: Only four. Three women, and I am the only man."
  ],
  hotspots: [
   { mark:"Four hundred I think is my recollection", label:"Before", text:"Recollection means memory. Mahroot remembers about 400 people in his group when he was a little boy." },
   { mark:"when did they come to be few?", label:"The committee's question", text:"The committee chose what to ask. They ask when the people died, not why the land was taken." },
   { mark:"It was by getting drunk you think?", label:"A leading question", text:"A leading question suggests its own answer. The committee offers alcohol as the cause before Mahroot says it." },
   { mark:"it was the only thing that destroyed them", label:"Mahroot's answer", text:"Mahroot names alcohol. The questions never ask about smallpox, which spread around Sydney in 1789, or about losing the land." },
   { mark:"Only four, three women and I am the only man", label:"After", text:"From about 400 to four. This is the impact of colonisation in one sentence." }
  ]
 }
];
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

/* ---------- worked examples: one answer to the inquiry at every rung ---------- */
const EARLY_EXAMPLES = {
 "Foundation to Level 2": "{source|Source A is from Captain Cook's diary}. {perspective|Cook thinks Aboriginal people are happy}. {perspective|Dampier thinks they are like animals}. {judge|Source C is good because an Aboriginal man is talking}. I think colonisation was bad for Aboriginal people.",
 "Levels 3 and 4": "{source|Source A is Captain Cook's journal from 1770}. {source|Source B is from William Dampier's book}. {perspective|Cook says Aboriginal people are \"far more happier than we Europeans\"}. {perspective|Dampier says they are \"the miserablest people in the world\"}. {judge|Source C is useful because Mahroot saw what happened to his people}. I think colonisation was very bad for Aboriginal people, because most of Mahroot's people died.",
 "Level 5": "{source|Source A is a journal written by James Cook in 1770}. A feature I notice is {source|the old spelling, like \"wholy\"}. {perspective|Cook thinks Aboriginal people are happy because they live in peace}. {perspective|Mahroot says there were about 400 people in his group, and now only four are left}. {judge|Source B shows what Dampier thought}, {judge|but it cannot tell us what Aboriginal people thought}. I think colonisation destroyed Mahroot's people."
};
const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
  "source": "Says what the source is.",
  "perspective": "Says what each European thinks.",
  "judge": "Says why one source is good."
 },
 "Levels 3 and 4": {
  "source": "Names two sources and when they were made.",
  "perspective": "Uses the sources' own words for each point of view.",
  "judge": "Says why a source is useful."
 },
 "Level 5": {
  "source": "Names the source and one feature.",
  "perspective": "Says what one European thought and what one Aboriginal man said.",
  "judge": "Says one thing a source can and cannot tell us."
 }
};

const EXAMPLES = {
 "Level 6": "{source|Sources A and B are primary sources written by European explorers}. {source|Source C is a primary source too, because Mahroot, an Aboriginal man, said these words in 1845}. {perspective|The sources show different points of view}. {perspective|Cook sees Aboriginal people as happy, but Dampier calls them \"the miserablest people in the world\"}. {perspective|Mahroot talks about what happened to his people}. {judge|Source C is more useful for showing what colonisation did, because Mahroot lived through it}. I think the Europeans judged Aboriginal people without understanding them.",
 "Level 7": "{source|Source A is from James Cook's journal, written in August 1770 after he sailed up the east coast}. {source|Cook kept the journal as a record for the British navy}. {source|Source B is from William Dampier's book, published in 1697, about the north-west coast in 1688}. {perspective|Cook's point of view is positive. He says Aboriginal people are \"far more happier than we Europeans\" and live in \"Tranquillity\"}. {perspective|Dampier's point of view is negative. He says they \"differ but little from brutes\"}. {perspective|Mahroot gives an Aboriginal point of view. He remembers 400 people, but in 1845 only \"three women and I\" were left}. {judge|Sources A and B are useful for showing what Europeans thought}, {judge|but they cannot tell us what Aboriginal people thought}. {judge|Source C is the most useful for showing what colonisation did to Aboriginal people}. I conclude that Europeans saw Aboriginal people in very different ways, but colonisation was a disaster for them.",
 "Level 8": "{source|Cook wrote Source A in his journal in August 1770, as part of his description of New South Wales}. {source|The old spelling, such as \"wholy\" and \"necessarys\", shows he wrote it at the time}. {source|Source C is set out as questions and answers. Mahroot gave this evidence to a committee of the New South Wales parliament}. {perspective|Cook and Dampier both judge Aboriginal people by European standards}. {perspective|Dampier calls them \"the miserablest people in the world\" and says they \"differ but little from brutes\"}. {perspective|Cook sees that they own very little and decides they are happy \"in not knowing the use of them\"}. {perspective|Mahroot is the only one who belongs to the people he describes. He counts how many of them have died}. {judge|We should ask how much Dampier really understood}. {judge|He saw people half-close their eyes against flies and decided they \"cannot see far\"}. {judge|We should also ask whether Source C tells the whole story}. {judge|The committee asks about alcohol, but never about smallpox, which spread around Sydney in 1789}. I think Cook's view was kinder than Dampier's, but both were outsiders, and only Source C shows what colonisation cost.",
 "Level 9": "{source|Source A's origin helps explain why Cook sounds so kind}. {source|Cook wrote this description just after he claimed the whole east coast for King George III on 22 August 1770}. {source|He had a reason to make the people sound content and harmless, because he had just claimed their land}. {perspective|Sources A and B look like opposites, but they start from the same idea}. {perspective|Dampier calls Aboriginal people \"the miserablest people in the world\", and Cook opens with almost the same words, \"the most wretched people upon Earth\"}. {perspective|Dampier agrees with that idea and Cook argues against it. Both men decide from the outside whether Aboriginal people are happy, and neither asks them}. {perspective|Mahroot counts his people instead: \"Four hundred\" when he was young}. {judge|Source A is probably accurate about what Cook saw. People did not want the goods his crew offered}. {judge|It is less reliable about what that meant. Cook decides the people were happy, but they may have refused the gifts because they did not want the strangers there}. {judge|Source C is an Aboriginal primary source, but the committee chose the questions and a clerk wrote down the answers}. My judgement is that Source C tells us the most about the impact of colonisation. Sources A and B tell us more about European attitudes.",
 "Level 10": "{source|Explicitly, Cook praises Aboriginal people. He says they are \"far more happier than we Europeans\"}. {source|Implicitly, he is less kind. He says they are happy \"in not knowing\", which makes them sound like children}. {source|When Cook writes \"in my opinion argues\", he admits that their happiness is his own guess about them}. {perspective|Cook's praise is patronising and Dampier's \"brutes\" is an insult, but both men assume that Europeans get to do the judging}. {perspective|Cook and Dampier never ask Aboriginal people what they value}. {perspective|When a committee finally asks Mahroot in 1845, his people have fallen from \"Four hundred\" to \"Only four\"}. {judge|But Europeans shaped Source C too}. {judge|The question \"It was by getting drunk you think?\" offers him the answer before he gives it}. {judge|The committee picks up on alcohol and never asks about disease or the land that was taken. We only hear Mahroot through questions that colonists wrote}. All three sources are most reliable as evidence of how Europeans described Aboriginal people. Cook could praise Aboriginal people and claim their land in the same week. Mahroot could only answer the questions he was asked.",
 "Year 11": "{source|Source A reads like a reply to Source B}. {source|Cook's \"most wretched people upon Earth\" echoes Dampier's \"miserablest people in the world\", and Dampier's book was well known in England by 1770}. {source|Cook seems to be arguing with Dampier as well as describing the people he met, and he is writing for the same English readers}. {perspective|That is why Cook's praise is so strong: he wants to prove Dampier wrong}. {perspective|He still only argues about whether Aboriginal people are miserable, because that was Dampier's question}. {perspective|Cook wrote this in the same week he claimed the east coast. If people \"set no Value\" on things, a British reader could easily assume they would not miss their land}. {perspective|Mahroot's people lived at Botany Bay, inside the land Cook claimed. In his lifetime, they went from \"Four hundred\" to \"Only four\"}. {judge|Source C is the best evidence of the three for the impact of colonisation, but the committee had a purpose too}. {judge|The committee wanted to know why Aboriginal people were dying out, and \"It was by getting drunk you think?\" hands Mahroot an answer that blames his own people}. {judge|That answer cannot explain the losses on its own. Smallpox spread around Sydney in 1789, and many people died}. {judge|Disease and the loss of land are the causes the committee never asked about}. Read together, the sources tell us more about how Europeans explained Aboriginal people than about Aboriginal people themselves. Dampier and Cook judge Aboriginal people from the outside, and the committee blames drink. None of them explains how about 400 people became four.",
 "Year 12": "{source|All three sources were made for European readers: Cook's journal for the navy, Dampier's book for buyers in England, and Mahroot's evidence for a parliament}. {source|Mahroot's words only reached print because colonists wanted an answer to their own question about why his people were dying}. {perspective|In 1968 W. E. H. Stanner called the way Australian histories left out Aboriginal people the great Australian silence, and these sources show the same silence at work long before 1968}. {perspective|Cook and Dampier describe Aboriginal people without hearing from them at all}. {perspective|The committee does hear Mahroot, but it decides what he is asked, and it never asks about the land}. {judge|Henry Reynolds and later historians set out to write Aboriginal experience back into the history, and Source C supports that approach}. {judge|It records a loss that no European source here mentions: \"Four hundred\" people down to \"Only four\"}. {judge|It also shows the limit of that approach, because historians still meet Mahroot through a record that colonists made}. {judge|The careful way to use Source C is to trust what Mahroot knew first-hand, the numbers, and to treat the cause he gives with the same caution as the question that suggested it}. My judgement is that the sources show Stanner's silence clearly, and only Source C starts to fill it. Mahroot's count is the strongest evidence of the three, because no question could change how many of his people were left."
};
const EXPLANATIONS = {
 "Level 6": {
  "source": "Identifies the type of each source.",
  "perspective": "Identifies a different point of view in each source.",
  "judge": "Recognises that Source C is more useful for this question."
 },
 "Level 7": {
  "source": "Identifies the origin and purpose of Sources A and B.",
  "perspective": "Describes each point of view, using the sources' own words.",
  "judge": "Draws a conclusion about what each source is useful for."
 },
 "Level 8": {
  "source": "Describes the origin, and what a feature shows about it.",
  "perspective": "Explains why Cook and Dampier differ, and how Mahroot's view is different again.",
  "judge": "Asks questions about accuracy, and checks Source C against what happened in 1789."
 },
 "Level 9": {
  "source": "Explains what the origin means for the source's tone.",
  "perspective": "Compares A and B: they start from the same idea and reach opposite conclusions, both from the outside.",
  "judge": "Identifies what Source A is accurate on and where it is unreliable, and the limits of Source C."
 },
 "Level 10": {
  "source": "Analyses explicit and implicit meaning: patronising praise.",
  "perspective": "Explains what each writer valued, and who was never asked.",
  "judge": "Analyses how Source C was shaped by the questions, and what the sources are reliable evidence of."
 },
 "Year 11": {
  "source": "Reads Source A as a reply to Source B: who Cook was answering, and who he wrote for.",
  "perspective": "Shows that opposite views share the same terms, and links Cook's praise to his claim on the land.",
  "judge": "Tests Source C against its purpose and the context, then argues across all three sources."
 },
 "Year 12": {
  "source": "Explains who each source was made for, and why Mahroot's words were recorded at all.",
  "perspective": "Uses a historian's interpretation, Stanner's great Australian silence, to explain what the three perspectives share.",
  "judge": "Weighs Reynolds' approach against Source C: what it supports, and where the record still limits it."
 }
};

/* Rows 1 and 5: Levels 6 to 9 are the Ancient China Source Analysis Rubric, 5 and 10 the
   Ancient Australia continuum. Row 3, perspectives: Levels 6 to 9 only. Copied word for word
   from Year-7-Humanities-Pages history/terracotta/content.js. */
const CONTINUUM = {
 "source": {
  "Level 5": "I can name a historical source and a feature I notice.",
  "Level 6": "I can identify different types of historical sources.",
  "Level 7": "I can identify the origin, content features and purpose of historical sources.",
  "Level 8": "I can describe the origin, content features and purpose of historical sources.",
  "Level 9": "I can explain the origin, content features and purpose of historical sources.",
  "Level 10": "I can analyse the origin, explicit and implicit meaning, and purpose of historical sources.",
  "Year 11": "I can analyse a source's origin, purpose and audience, including what earlier writing it answers.",
  "Year 12": "I can analyse how a source's origin, purpose and audience shape what it records and what it leaves out."
 },
 "perspective": {
  "Level 6": "I can identify different points of view in primary sources.",
  "Level 7": "I can describe different points of view in primary sources.",
  "Level 8": "I can explain different points of view in primary sources.",
  "Level 9": "I can compare and contrast different points of view in primary sources, outlining the similarities and differences.",
  "Year 11": "I can analyse how a perspective is shaped by its context, and what opposing views share.",
  "Year 12": "I can analyse perspectives in sources alongside historians' interpretations of the period."
 },
 "judge": {
  "Level 5": "I can say one thing a source can and cannot tell us.",
  "Level 6": "I can recognise that some historical sources are more useful than others.",
  "Level 7": "I can draw conclusions about the usefulness of sources.",
  "Level 8": "I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
  "Level 9": "I can compare and contrast historical sources and identify their accuracy, usefulness and reliability.",
  "Level 10": "I can compare and contrast sources and analyse their accuracy, usefulness and reliability.",
  "Year 11": "I can evaluate sources as evidence against their purpose and the context, and use them to build an argument.",
  "Year 12": "I can evaluate historians' interpretations against the sources, and judge what the sources can and cannot support."
 }
};

const VC = {
 "Level 5": [["VC2HH6S03","describe the features, content and context of historical sources"],["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"]],
 "Level 6": [["VC2HH6S03","describe the features, content and context of historical sources"],["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"]],
 "Level 7": [["VC2HH8S03","explain the features, content and context of historical sources"],["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"]],
 "Level 8": [["VC2HH8S03","explain the features, content and context of historical sources"],["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"]],
 "Level 9": [["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"]],
 "Level 10": [["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"]]
};
const VC_HEAD = { "Year 11": "VCE History", "Year 12": "VCE History" };
const VC_NOTE = "Levels 6 to 9 are the Year 7 Ancient China Source Analysis Rubric, word for word: rows 1, 3 and 5. That rubric stops at 6 and 9, so Level 5 and Level 10 of rows 1 and 5 quote the Ancient Australia source analysis continuum, also word for word. No rubric words the perspectives row at Level 5 or 10, or any row below Level 5: those lines are plain descriptions written for this wall. The codes are Victorian Curriculum 2.0. The Year 11 and Year 12 lines are written for this wall to describe VCE History source work (Units 1 and 2, then Units 3 and 4, where historians' interpretations come in); they are not VCAA wording, and no study design codes are given.";

/* new: what this rung adds, as instructions. background: facts the rung uses that are not in the sources. */
const BUMP = {
 "Foundation to Level 2": { "new": "Say what one source is. Say what Cook and Dampier think. Say which source is good, and why.",
   "background": "Cook and Dampier were European sailors. Mahroot was an Aboriginal man from Botany Bay." },
 "Levels 3 and 4": { "new": "Name two sources and when they were made. Use their words. Say why a source is useful.",
   "background": "Cook wrote in 1770. Dampier visited in 1688. Mahroot spoke in 1845." },
 "Level 5": { "new": "Name the source and a feature you notice. Say what one European and Mahroot say. Say what a source cannot tell us.",
   "background": "Old writing uses old spelling, like \"wholy\" for \"wholly\"." },
 "Level 6": { "new": "Say what type of source each one is. Find a point of view in each. Say which is more useful, and why.",
   "background": "A primary source was made at the time. All three sources are primary sources." },
 "Level 7": { "new": "Say where A and B came from and why they were made. Describe each point of view in the sources' words. Draw a conclusion.",
   "background": "Cook kept his journal as a record for the British navy. Dampier wrote his book for readers in England." },
 "Level 8": { "new": "Say what a feature shows about the source. Explain why the points of view differ. Ask questions about accuracy.",
   "background": "Smallpox spread among Aboriginal people around Sydney in 1789, a year after the First Fleet arrived." },
 "Level 9": { "new": "Explain what the origin means for the tone. Compare A and B: what do they share? Say what each source is reliable for.",
   "background": "Cook claimed the east coast for King George III on 22 August 1770, just before he wrote Source A." },
 "Level 10": { "new": "Explain what Source A says and what it suggests. Explain who was never asked. Judge how Source C was shaped.",
   "background": "A leading question suggests its own answer. The committee's questions were written by colonists." },
 "Year 11": { "new": "Read Source A as a reply to Source B. Link Cook's view to his claim on the land. Test Source C against the context, then make one argument across all three.",
   "background": "Dampier's book went through several editions and was well known in England long before 1770." },
 "Year 12": { "new": "Say who each source was made for. Use a historian's interpretation to explain what the sources share. Judge what Source C can and cannot support.",
   "background": "In 1968 the anthropologist W. E. H. Stanner called the way Australian histories left out Aboriginal people \"the great Australian silence\". Historians since, such as Henry Reynolds in The Other Side of the Frontier (1981), have set out to write Aboriginal experience back in." }
};

const GLOSS = {
 tier2: {
   "wretched":"very poor and unhappy",
   "miserablest":"the most miserable",
   "brutes":"animals",
   "tranquillity":"calm and peace",
   "superfluous":"more than you need",
   "conveniencies":"useful things that make life easier",
   "recollect":"remember",
   "diminish":"become smaller",
   "patronising":"kind on the surface, but treating someone as less able than you",
   "explicit":"said openly and clearly",
   "implicit":"suggested without being said",
   "harmless":"not dangerous"
 },
 tier3: {
   "colonisation":"When one country takes control of another people's land and sends its own people to live there.",
   "first contact":"The first meetings between two peoples who had never met before.",
   "journal":"A daily written record. Ship captains kept one for the navy.",
   "committee":"A small group chosen to look into something and report back.",
   "leading question":"A question that suggests its own answer.",
   "dehumanising":"Treating people as if they are less than human.",
   "smallpox":"A deadly disease that spreads from person to person. Europeans brought it to Australia.",
   "point of view":"How one person sees something, shaped by who they are."
 }
};

const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:[
   "I can say what a source is.",
   "I can say what one person thinks.",
   "I can say what a source is good for."] },
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:[
   "I can say what a source is and when it was made.",
   "I can say what two people think, in their words.",
   "I can say why a source is useful."] },
 "Level 5": { band:"Level 5", lines:[
   "I can name a historical source and a feature I notice.",
   "I can say what a European and an Aboriginal person said.",
   "I can say one thing a source can and cannot tell us."] },
 "Level 6": { band:"Level 6", lines:[
   "I can say what kind of source it is.",
   "I can find a point of view in each source.",
   "I can say which source is more useful, and why."] },
 "Level 7": { band:"Level 7", lines:[
   "I can say where a source came from, what is in it and why it was made.",
   "I can describe different points of view, using their words.",
   "I can say what a source is good for, and what it cannot tell me."] },
 "Level 8": { band:"Level 8", lines:[
   "I can describe a source's origin and what its features show.",
   "I can explain why points of view are different.",
   "I can ask questions about whether a source is accurate and reliable."] },
 "Level 9": { band:"Level 9", lines:[
   "I can explain what a source's origin means for what it says.",
   "I can compare points of view and say how they are alike and different.",
   "I can say what each source is reliable for, and its limits."] },
 "Level 10": { band:"Level 10", lines:[
   "I can explain what a source says, what it suggests, and why it was made.",
   "I can explain what different people valued, and whose voice is missing.",
   "I can judge how reliable each source is, and why."] },
 "Year 11": { band:"VCE History, Year 11 (Units 1 and 2)", lines:[
   "I can say who a source was answering and who it was written for.",
   "I can show how a point of view comes from its time, and what opposite views share.",
   "I can test a source against what else we know, and use all the sources in one argument."] },
 "Year 12": { band:"VCE History, Year 12 (Units 3 and 4)", lines:[
   "I can say who a source was made for, and what that leaves out.",
   "I can use a historian's idea to explain what different points of view share.",
   "I can judge what a source can support, and weigh a historian's argument against it."] }
};

/* ---------- the printed worksheet (worksheet.html) ---------- */
const WORKSHEET = {
  title: "First contact: source analysis",
  task: "Use Sources A, B and C and the context. Say how each source sees Aboriginal people, then make your own judgement.",
  hint: "Write one answer. Use all three sources. Quote a few words from each.",
  rubricLevels: ["Level 5", "Level 6", "Level 7"],
  rubricNote: "Rows 1, 3 and 5 of the Year 7 Source Analysis Rubric, word for word. Level 5 of the perspectives row has no rubric wording; that line is written for this sheet."
};
