/* =======================================================================
   CONTENT BLOCK for the Resistance PERSPECTIVE ladder (the history side).
   One strand only, perspective, so the class watches one thing grow.
   The writing strands are on the other ladder, writing-content.js.
   Shared facts, sources and glossary are in moment.js.

   Every snippet was written for this site as a model. None is a student's
   work. Mark evidence with {purp|the phrase}.

   With one strand, every marked phrase on a rung opens the same
   explanation, so each explanation names the rung's moves in order.
   ======================================================================= */

const WALL = {
  id: "resist-perspective",
  title: "Perspective: the potato garden, 1831",
  kicker: "Resistance · History perspective",
  sourceRung: "The moment",
  rubricLabel: "Task rubric, Perspective",
  expected: null,
  inquiry: "Swan River, 1831. A Nyungar man takes potatoes from a settler’s garden and is shot. How does the narrator’s idea of land change the way he tells it?",
  foot: "<b>The facts</b> are from the class textbook, section 4.4.2. <b>The snippets</b> were written for this page as models. <b>The rubric</b> is the Resistance task rubric, C2 to C4 word for word; the VCE 1 column was written for this page."
};

const FACTS = [
  ["The moment", "Swan River Colony, 1831. A Nyungar man takes potatoes from a settler’s garden and is shot. Yagan seeks payback for this killing."],
  ["The narrator", "The settler whose garden it is. He is imagined. Everything that happens around him is from the record."],
  ["What to watch", "A settler cannot see the Nyungar view. Good writing lets the reader see what the narrator cannot."],
  ["The ladder", "Every rung tells the same minute. Only the narrator’s view gets deeper."]
];

const CRITERIA = [
  { key:"purp", row:"Perspective", name:"Perspective", glyph:"●",
    ink:"#0b7a45", lamp:"#74cf96", soft:"#dcf2e3", underline:"dotted" },
];

const LEVELS = ["C2", "C3", "C4", "VCE 1"];
const EARLY_LEVELS = [];
const LEVEL_SKILL = { "C2":"Describe", "C3":"Explain", "C4":"Analyse", "VCE 1":"Interpret" };

const EXAMPLES = {
"C2":
`I was in our garden by the Swan River. I saw a Nyungar man pull up our potatoes. {purp|I was angry.} {purp|I shouted, “Stop, thief!”} Then a gun went off and the man fell.`,

"C3":
`It was 1831, two years after we started the colony on the Swan River. A Nyungar man stepped into our garden and pulled up the potatoes with his hands. I shouted at him {purp|because we had carried that seed all the way from England, and I believed every potato in the ground was ours}. He did not run. He did not even look afraid. {purp|To me he was stealing, so I never stopped to ask what he thought he was doing.} Then the shot.`,

"C4":
`I had built a brush fence around the garden in our first winter on the Swan, so when the Nyungar man stepped over it and knelt between the potato rows, {purp|the word that came to me was thief}. {purp|I noticed the fence he ignored, the seed we had paid for, the rows I had dug. I did not notice that he worked slowly, as if no one could tell him no.} {purp|It was my garden. I never asked whose ground it was before it was a garden.} The shot came from behind me.`,

"VCE 1":
`{purp|Thief. The word was out of my mouth before I had thought it, the way a prayer comes.} He stepped over the brush fence as if it were a fallen branch and knelt in the potato rows, the way my mother knelt in her garden at home. {purp|In England a fence says mine. Here it seemed to say nothing at all.} {purp|I had a land grant with the Governor’s name on it, and the Bible told me the earth was given to us to subdue.} {purp|He moved like a man taking food from his own Country, which, I understand now, he was.} The shot came from behind me, {purp|and I have told it as a theft ever since, because that is the only way I know how to tell it.}`
};

const EXPLANATIONS = {
"C2": {
  purp: "Describes what the narrator feels and does: he is angry, and he shouts. “Thief” already shows his side, but the writing does not notice it yet."
},
"C3": {
  purp: "Explains why he feels this way, with “because”: the seed came from England, so the potatoes are his. He only uses what a settler in 1831 could know. The second phrase admits there was another view he never asked about."
},
"C4": {
  purp: "Three moves. “The word that came to me” shows “thief” is his choice, not a fact. The list sets what he noticed (his own work and property) against what he missed. The last thought shows his idea of land without him understanding it."
},
"VCE 1": {
  purp: "The view has a source: a word that comes like a prayer, a land grant, the Bible’s “subdue”. Two ideas of land meet: a fence that says “mine”, and a man taking food from his own Country. The capital C shows what the narrator has learnt since. The last line admits he is not a fair teller of the story."
}
};

/* The Resistance task rubric, Perspective row, C2 to C4 word for word.
   The task sheet stops at C4; VCE 1 was written for this page. */
const CONTINUUM = {
purp:{
 "C2":"Describes what the narrator sees and does.",
 "C3":"Explains why the narrator thinks and feels this way, using only what they could know at the time.",
 "C4":"Analyses how the narrator’s position shapes what they notice. Word choice (for example “outlaw” or “warrior”) shows their point of view.",
 "VCE 1":"Interprets where the narrator’s view comes from (beliefs, law, upbringing) and lets the reader see what the narrator cannot."},
};

const SOURCES = [RECORD_SOURCE, LAND_SOURCE];

const BUMP = {
 "C2": {
   new:"You say what the narrator feels and does.",
   background:"the facts of 1831: the colony, the garden, the potatoes, the shot." },
 "C3": {
   new:"You explain why the narrator feels this way with “because”, using only what a settler could know in 1831.",
   background:"that the settler saw it as theft, and the Nyungar would see it as taking food from their own land." },
 "C4": {
   new:"You show how the narrator’s position shapes what he notices and what he misses. “Thief” is his word, and your writing knows it.",
   background:"the adjectives activity in the textbook: colonists and Aboriginal people used different words for the same men." },
 "VCE 1": {
   new:"Two ideas of land meet in one moment. The narrator’s view has a source, and the reader sees what he cannot.",
   background:"Country and the Dreaming, British ideas of property and dominion, terra nullius, and the class comparison with Daoism." }
};
