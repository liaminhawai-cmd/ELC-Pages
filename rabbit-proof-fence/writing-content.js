/* =======================================================================
   CONTENT BLOCK for the Rabbit-Proof Fence writing ladder.
   bump-it-up.html and wagoll-wall.html both read this file, so editing
   here updates the big-screen ladder and the printable wall at once.

   Every paragraph here was written for this site as a model. None is a
   student's work. Quotes from the film are a few words long and sit
   inside analysis, which is ordinary criticism; no script, subtitles or
   stills are reproduced.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.
   Write plain characters (’ “ ”), not HTML entities: the ladder prints
   these strings as text.
   ======================================================================= */

const WALL = {
  id: "rpf-belonging",
  title: "How Noyce shows belonging",
  kicker: "Rabbit-Proof Fence · Analytical writing",
  sourceRung: "The question",
  expected: null,
  inquiry: "How does Noyce use film techniques to show the theme of belonging in Rabbit-Proof Fence?",
  foot: "<b>The text:</b> <i>Rabbit-Proof Fence</i> (2002), directed by Phillip Noyce, from the book <i>Follow the Rabbit-Proof Fence</i> by Doris Pilkington Garimara. <b>The paragraphs</b> on this wall were written for it as models; none is a student’s work. <b>The rubric</b> is the ELC Film Analysis rubric, word for word."
};

const FACTS = [
  ["The film", "Rabbit-Proof Fence (2002), directed by Phillip Noyce. It is based on the book Follow the Rabbit-Proof Fence by Doris Pilkington Garimara, Molly’s daughter."],
  ["When and where", "Western Australia, 1931. The law gave the Chief Protector of Aborigines the power to take Aboriginal children from their families."],
  ["The theme", "Belonging: being accepted and at home with your family, your people and your Country, and who gets to decide where you belong."],
  ["The task", "One T·E·E·A paragraph. Every rung of this ladder answers the same question, so you can see exactly what changes."]
];

/* The ELC writing colours: ideas red-orange, evidence blue, purpose green,
   the same as the Analytical Writing Wall and the T·E·E·A page. Language &
   structure is purple. ink is the colour on paper, lamp the colour on the
   dark bar; underline is the second channel, for greyscale and colour-blind
   readers. */
const CRITERIA = [
  { key:"idea", row:"Ideas &amp; Themes",          name:"Ideas &amp; Themes",          glyph:"▲",
    ink:"#b13427", lamp:"#ef9a82", soft:"#fbe3dc", underline:"solid" },
  { key:"evid", row:"Evidence &amp; Metalanguage", name:"Evidence &amp; Metalanguage", glyph:"■",
    ink:"#00629f", lamp:"#6cbcf0", soft:"#d9ecf8", underline:"dashed" },
  { key:"lang", row:"Language &amp; Structure",    name:"Language &amp; Structure",    glyph:"◆",
    ink:"#6d4790", lamp:"#c3a6e0", soft:"#ece2f5", underline:"double" },
  { key:"purp", row:"Purpose &amp; Interpretation", name:"Purpose &amp; Interpretation", glyph:"●",
    ink:"#0b7a45", lamp:"#74cf96", soft:"#dcf2e3", underline:"dotted" },
];

const LEVELS = ["C2", "C3", "C4", "VCE 1"];
const EARLY_LEVELS = [];

/* What each band is called on the skill ladder. */
const LEVEL_SKILL = { "C2":"Describe", "C3":"Explain", "C4":"Analyse", "VCE 1":"Interpret" };

const EXAMPLES = {
"C2":
`Rabbit-Proof Fence is about {idea|three girls who want to go home}. The film {lang|shows} {evid|a long shot of the girls walking next to the fence}. They are {idea|far away from their family}. At Moore River, Molly says {evid|“I got mother.”} {purp|She wants to go back to her mother.} The girls {idea|belong at Jigalong}.`,

"C3":
`Noyce shows that {idea|the girls belong with their families}. He uses {evid|a long shot of the three girls walking beside the fence} {purp|to show how far away from home they are}. This is {lang|important because} {idea|home is where they feel safe}. At Moore River, Molly answers {evid|“I got mother,”} {lang|so} {purp|the audience feels sad for her} and understands that {idea|she will not stay there}.`,

"C4":
`Noyce presents {idea|belonging as a bond that distance cannot break}. {evid|Extreme long shots of three small girls beside the endless fence} {lang|highlight} {purp|how alone they are in the vast desert}, {lang|yet} the fence also {lang|symbolises} {idea|the way home to their mothers}. At Moore River, Molly’s short reply, {evid|“I got mother,”} {lang|reveals} that {idea|she still belongs to her family}, {purp|suggesting that the settlement cannot replace a mother}. {lang|Together, these choices show that} {idea|for Molly, belonging is a family, not a place she is sent to}.`,

"VCE 1":
`Noyce {purp|positions the audience to see} {idea|belonging as something the law could not take away}. {evid|The repeated extreme long shots of the fence running across the red desert} {lang|work in two directions at once}: the line built to {idea|divide the land} becomes {idea|the line that leads the girls home}. Noyce {lang|contrasts} this open land with {evid|the settlement, where the girls are told to speak only English and that Moore River is their “new home”}, {purp|exposing how the assimilation policy tried to replace family with an institution}. {lang|By ending with} {evid|archival footage of the real Molly and Daisy}, Noyce {purp|insists that this is history, not fiction}, {lang|so that} {idea|their belonging to family and Country} {purp|becomes a challenge to Australians to remember the Stolen Generations}.`
};

const EXPLANATIONS = {
"C2": {
  idea: "The red phrases retell what happens: the girls, their family, their home. Belonging is named only as a place, not yet as an idea.",
  evid: "One technique, a long shot, and one short quote. Neither is linked to a meaning yet.",
  lang: "Short, simple sentences with a literal verb: the film “shows”.",
  purp: "Gives the basic meaning of the moment: Molly wants her mother."
},
"C3": {
  idea: "Names a simple theme, belonging to family, and gives a reason: home is where the girls feel safe.",
  evid: "The technique word now comes with what is in the shot, and the quote sits inside the sentence.",
  lang: "The connectives “because” and “so” join the ideas, with an evaluative word, “important”.",
  purp: "Explains the effect with “to show”, and says how the audience feels."
},
"C4": {
  idea: "The topic sentence makes a claim about belonging; the last sentence says what belonging means for Molly.",
  evid: "Precise film terms, “extreme long shots”, with exactly what is in the frame, and a quote embedded in the sentence.",
  lang: "Analytical verbs (“highlight”, “symbolises”, “reveals”) in complex sentences joined by “yet”, and the analysis sentence opens “Together, these choices show that…”.",
  purp: "Infers what Noyce is suggesting: a settlement cannot replace a mother."
},
"VCE 1": {
  idea: "Belonging is treated as a value the film defends: the fence divides the land and leads home, and belonging outlasts the policy.",
  evid: "Technique and evidence are woven in: repeated framing, the settlement’s rules, the archival footage.",
  lang: "Varied structures show cause and effect: a colon to turn the idea, “By ending with…”, “so that”.",
  purp: "Links Noyce’s choices to his purpose and to history: assimilation, the Stolen Generations, Australians today."
}
};

/* The ELC Film Analysis rubric, word for word (rubrics.html, Film Analysis). */
const CONTINUUM = {
idea:{
 "C2":"Recognises what happens in the scene or shot. Retells visible details (actions, settings, emotions) with little interpretation.",
 "C3":"Explains basic feelings or ideas suggested by the scene. Begins linking visuals or sounds to emotions or simple themes (fear, courage, family).",
 "C4":"Connects specific techniques and moments to themes or concepts such as belonging, freedom, or control. Explains what the director might be saying.",
 "VCE 1":"Analyses how techniques and ideas express messages, values, or perspectives. Evaluates the director’s purpose in representing culture, identity, or social issues."},
evid:{
 "C2":"Gives a simple quote or description of what is seen or heard.",
 "C3":"Adds a technique word (“close-up”, “sound”, “lighting”) and begins linking it to meaning.",
 "C4":"Uses film terms accurately to discuss how techniques create meaning. Supports ideas with short embedded evidence.",
 "VCE 1":"Integrates technique and theme naturally. Embeds evidence and terminology fluently to build analysis."},
lang:{
 "C2":"Writes short, simple sentences. Uses mostly literal verbs (“shows”, “is”, “looks”).",
 "C3":"Expands sentences with connectives like because or so. Begins using evaluative words (“important”, “brave”).",
 "C4":"Uses complex and precise sentences. Combines description and explanation smoothly with analytical verbs (“symbolises”, “reveals”).",
 "VCE 1":"Writes fluently in a formal and cohesive style. Varies sentence structures to show cause, effect, and interpretation."},
purp:{
 "C2":"Identifies the basic meaning or message of a scene.",
 "C3":"Explains the purpose or audience effect (“to make us feel sad”, “to show distance”).",
 "C4":"Makes inferences about the director’s intent or cultural perspective.",
 "VCE 1":"Discusses deeper social or moral ideas, linking the director’s choices to historical or ethical context."},
};

/* ---------------------------------------------------------------------------
   Two written sources. A: the question, unpacked word by word, because
   reading the question is the first skill of the test. B: the moments to
   watch for this theme, written as things to look and listen for rather
   than as a record of every shot, so students find their own evidence in
   the film itself.
   --------------------------------------------------------------------------- */
const SOURCES = [
 {
  id: "question",
  tab: "A · The question",
  title: "The question",
  kind: "text",
  cite: "Tap an underlined part to see what it is asking you to do.",
  whole: { label:"The whole question",
    text:"The question names your evidence (film techniques), your idea (belonging) and your job: to explain how Noyce’s choices show that idea." },
  paragraphs: [
   "How does Noyce use film techniques to show the theme of belonging in Rabbit-Proof Fence?",
   "Write one T·E·E·A paragraph: a topic sentence that makes a claim about belonging, two explanation sentences that each link a technique to the theme, and an analysis sentence that says what they show together."
  ],
  hotspots: [
   { mark:"How does Noyce use", label:"“How does Noyce use…”",
     text:"“How” asks about choices and what they do, not about the story. Noyce is the director: every shot, sound and colour is his choice. Write “Noyce uses…”, not “the movie has…”." },
   { mark:"film techniques", label:"“film techniques”",
     text:"Your evidence: shots, angles, camera movement, sound, light and colour, symbols. Name the technique, then say exactly what is in the frame or what we hear." },
   { mark:"the theme of belonging", label:"“the theme of belonging”",
     text:"The idea your paragraph argues about. Belonging means being accepted and at home with your family, your people and your Country. Every sentence comes back to it." },
   { mark:"a topic sentence that makes a claim about belonging", label:"T · Topic sentence",
     text:"Your claim. The subject is an idea and the verb is analytical: “Noyce presents belonging as…”. No evidence yet." },
   { mark:"two explanation sentences", label:"E · Explain, twice",
     text:"Technique, what it does, and the theme, fused into one sentence, with the evidence inside it. Then a second one with a different technique." },
   { mark:"an analysis sentence", label:"A · Analyse",
     text:"What your two E sentences show when you read them together. Purpose and theme only: no new evidence here." }
  ]
 },
 {
  id: "moments",
  tab: "B · Moments to watch",
  title: "Moments to watch for belonging",
  kind: "text",
  cite: "Find each moment in the film. Write down the time, take a screenshot, and name the technique.",
  whole: { label:"Moments to watch",
    text:"Six moments where the film shows belonging. For each one, find it in the film, name the technique, and say what it shows about belonging." },
  paragraphs: [
   "Jigalong, at the start. The girls catch a goanna and bring it back to their family. Notice the warm colours of the land, and who shares the frame with the girls.",
   "The removal. The girls are taken from their mothers and driven away in a car. Watch the girls’ faces, and listen to the mothers.",
   "Moore River. The girls are told “You talk English!” and “This is your new home.” Look at the scrubbing, the lines and the rules. Does this place feel like home?",
   "The walk. Three small figures walk beside a fence that runs across the red desert, with music that only the audience hears. What do the long shots show about distance, and about home?",
   "The spirit bird. A bird appears in the sky at important moments. What could it stand for?",
   "The ending. Molly and Daisy reach their family. Then the film shows archival footage of the real Molly and Daisy. Why does Noyce end with real people?"
  ],
  hotspots: [
   { mark:"warm colours of the land", label:"Colour",
     text:"Warm colours, gold and red earth, often feel alive, free and at home. Compare them with the colours at Moore River." },
   { mark:"who shares the frame with the girls", label:"Framing and mise en scène",
     text:"Who stands in the frame with a character tells us who they belong with. Here: their family, on their own land." },
   { mark:"Watch the girls’ faces", label:"Close-up",
     text:"A close-up shows feelings in detail. Ask what the girls feel, and what the audience feels watching them." },
   { mark:"listen to the mothers", label:"Diegetic sound",
     text:"The characters can hear these cries, so the sound is diegetic. Ask how the sound makes the separation feel." },
   { mark:"“You talk English!”", label:"Dialogue and language",
     text:"Language is part of identity. A rule against speaking your own language attacks where you belong." },
   { mark:"the scrubbing, the lines and the rules", label:"Mise en scène",
     text:"Everything placed in the frame: the settlement’s routines show the girls being made to fit somewhere they do not belong." },
   { mark:"Three small figures walk beside a fence", label:"Extreme long shot",
     text:"The land fills the screen and the girls look tiny. Ask: alone, or on their way home? It can be both." },
   { mark:"music that only the audience hears", label:"Non-diegetic sound",
     text:"The girls cannot hear this music, so it is non-diegetic. It tells the audience how to feel about the walk." },
   { mark:"A bird appears in the sky", label:"Symbol",
     text:"Something that stands for an idea. The spirit bird can stand for Molly’s connection to her mother and her Country." },
   { mark:"archival footage of the real Molly and Daisy", label:"Archival footage",
     text:"Real film of the real people, from outside the story. It reminds the audience that this happened." }
  ]
 }
];

/* new: the SKILL this rung adds. background: what a student at this band
   already knows, so a harder rung reads as "taught later", not "too hard". */
const BUMP = {
 "C2": {
   new:"You say what happens, name one technique and give a short quote. Your sentences are short and simple.",
   background:"the story: three girls are taken from their families and walk home along the rabbit-proof fence." },
 "C3": {
   new:"You add the effect on the audience with “to show”, and join your ideas with “because” and “so”.",
   background:"what a long shot and a close-up are, and that every choice in a film was made by the director." },
 "C4": {
   new:"You link each technique to the theme with an analytical verb (highlight, symbolise, reveal), and say what Noyce is suggesting.",
   background:"the history behind the film: the Stolen Generations, and the assimilation policy of the time." },
 "VCE 1": {
   new:"You interpret: you connect Noyce’s choices to his purpose and to Australian history, and vary your sentences to show cause and effect.",
   background:"that the story is true, that the book was written by Molly’s daughter, and that Australia apologised to the Stolen Generations in 2008." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer synonym.
   Matched case-insensitively on whole words wherever they appear. */
const GLOSS = {
 tier3: {
  "film techniques":"The choices a director makes about shots, angles, camera movement, sound, light and colour.",
  "theme":"A big idea the film keeps coming back to, such as belonging or freedom.",
  "belonging":"Being accepted and at home with your family, your people and your Country.",
  "long shot":"A shot that shows a whole person, head to feet, and the place around them.",
  "extreme long shots":"Shots from very far away: the land fills the screen and people look tiny.",
  "archival footage":"Real film or photographs from the past, put into a film.",
  "Stolen Generations":"The Aboriginal and Torres Strait Islander children taken from their families by governments and churches, from about 1910 to the 1970s.",
  "assimilation policy":"A government policy that tried to make Aboriginal people give up their own culture and live like white Australians.",
  "settlement":"Here, the Moore River Native Settlement: the government camp the girls were sent to.",
  "Chief Protector of Aborigines":"The official with legal power over Aboriginal people’s lives in Western Australia in 1931. The word Aborigines is no longer used for people.",
  "spirit bird":"A bird in the film that seems to watch over Molly.",
  "Country":"With a capital C: the land a people belongs to, with its places, stories and law."
 },
 tier2: {
  "highlight":"draw attention to",
  "symbolises":"stands for a bigger idea",
  "reveals":"shows something hidden",
  "suggesting":"showing an idea without saying it directly",
  "contrasts":"puts two different things side by side",
  "positions":"leads the audience to see it a certain way",
  "exposing":"showing the truth about something wrong",
  "insists":"says strongly, and will not change it",
  "vast":"very big",
  "bond":"a strong connection between people",
  "institution":"a large place run by rules, often by a government or a church",
  "claim":"what you are arguing"
 }
};

/* Translations, in the shape the ladder reads. Mandarin in Traditional
   characters uses Taiwan wording, Simplified uses Mainland wording.
   Drafted, not yet checked by a speaker of each language, and labelled so
   on screen (EAL_NOTE). */
const EAL_LANGS = [
  { code:"zh-Hant", label:"繁體國語", english:"Mandarin (Traditional)" },
  { code:"zh-Hans", label:"简体普通话", english:"Mandarin (Simplified)" },
  { code:"vi",      label:"Tiếng Việt", english:"Vietnamese" },
];
const EAL_NOTE = "Drafted. Not yet checked by a speaker of each language.";
const EAL = {};

const TIER3_T = {
  "film techniques": {"zh-Hans":"电影技巧", "zh-Hant":"電影技巧", "vi":"kỹ thuật điện ảnh"},
  "theme": {"zh-Hans":"主题", "zh-Hant":"主題", "vi":"chủ đề"},
  "belonging": {"zh-Hans":"归属感", "zh-Hant":"歸屬感", "vi":"cảm giác thuộc về"},
  "long shot": {"zh-Hans":"远景", "zh-Hant":"遠景", "vi":"toàn cảnh"},
  "extreme long shots": {"zh-Hans":"大远景", "zh-Hant":"大遠景", "vi":"đại toàn cảnh"},
  "archival footage": {"zh-Hans":"档案影像", "zh-Hant":"檔案影片", "vi":"phim tư liệu lưu trữ"},
  "Stolen Generations": {"zh-Hans":"被偷走的一代", "zh-Hant":"被偷走的世代", "vi":"Thế hệ bị đánh cắp"},
  "assimilation policy": {"zh-Hans":"同化政策", "zh-Hant":"同化政策", "vi":"chính sách đồng hóa"},
  "settlement": {"zh-Hans":"安置营", "zh-Hant":"安置營", "vi":"khu định cư (trại của chính phủ)"},
  "Chief Protector of Aborigines": {"zh-Hans":"原住民首席保护官", "zh-Hant":"原住民首席保護官", "vi":"Trưởng quan Bảo hộ thổ dân"},
  "spirit bird": {"zh-Hans":"灵鸟", "zh-Hant":"靈鳥", "vi":"chim thần hộ mệnh"},
  "Country": {"zh-Hans":"故土（祖先的土地）", "zh-Hant":"故土（祖先的土地）", "vi":"Đất Mẹ (vùng đất tổ tiên)"}
};
const TIER2_T = {
  "highlight": {"zh-Hans":"突出（凸显）", "zh-Hant":"凸顯", "vi":"làm nổi bật"},
  "symbolises": {"zh-Hans":"象征", "zh-Hant":"象徵", "vi":"tượng trưng cho"},
  "reveals": {"zh-Hans":"揭示", "zh-Hant":"揭露", "vi":"cho thấy"},
  "suggesting": {"zh-Hans":"暗示", "zh-Hant":"暗示", "vi":"gợi ý"},
  "contrasts": {"zh-Hans":"对比", "zh-Hant":"對比", "vi":"đối chiếu, làm nổi bật sự khác biệt"},
  "positions": {"zh-Hans":"引导（观众）", "zh-Hant":"引導（觀眾）", "vi":"định hướng (khán giả)"},
  "exposing": {"zh-Hans":"揭露", "zh-Hant":"揭發", "vi":"phơi bày"},
  "insists": {"zh-Hans":"坚持", "zh-Hant":"堅持", "vi":"khẳng định"},
  "vast": {"zh-Hans":"广阔的", "zh-Hant":"廣闊的", "vi":"rộng lớn"},
  "bond": {"zh-Hans":"纽带", "zh-Hant":"紐帶", "vi":"mối gắn bó"},
  "institution": {"zh-Hans":"机构", "zh-Hant":"機構", "vi":"cơ sở (thể chế)"},
  "claim": {"zh-Hans":"论点", "zh-Hant":"論點", "vi":"luận điểm"}
};
