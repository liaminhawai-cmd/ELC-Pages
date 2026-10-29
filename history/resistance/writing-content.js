/* =======================================================================
   CONTENT BLOCK for the Resistance WRITING ladder.
   Two strands only, Orientation and Vocabulary and word choice, so the
   class watches two things grow. Perspective is on the other ladder,
   perspective-content.js. Shared facts, sources and glossary are in
   moment.js.

   Each rung is the opening of the same story, before the shot: the
   orientation is where setting and senses do their work.

   Every snippet was written for this site as a model. None is a student's
   work. Mark evidence with {orient|the phrase} or {vocab|the phrase}.
   ======================================================================= */

const WALL = {
  id: "resist-writing",
  title: "Writing: opening the story",
  kicker: "Resistance · Creative non-fiction writing",
  sourceRung: "The moment",
  rubricLabel: "ELC writing rubric",
  expected: null,
  inquiry: "Swan River, 1831. Open the story in the settler’s garden, the minute before the Nyungar man is seen. Set the scene so the reader is standing there.",
  foot: "<b>The facts</b> are from the class textbook, section 4.4.2. <b>The snippets</b> were written for this page as models. <b>The rubric</b> rows are the ELC writing rubric (Vocabulary) and the recount rubric (Orientation), word for word."
};

const FACTS = [
  ["The moment", "Swan River Colony, 1831. A Nyungar man takes potatoes from a settler’s garden and is shot."],
  ["The narrator", "The settler whose garden it is. He is imagined. The weather, sounds and smells are imagined too, and they must fit the place."],
  ["What to watch", "How the opening puts the reader in the garden: first the 5 W’s, then the senses, then showing instead of telling."],
  ["The ladder", "Every rung is the same opening. Only the writing changes."]
];

/* Orientation is blue (the concrete detail of the scene), vocabulary
   purple, as on the other ELC writing ladders. */
const CRITERIA = [
  { key:"orient", row:"Orientation",                name:"Orientation",                glyph:"■",
    ink:"#00629f", lamp:"#6cbcf0", soft:"#d9ecf8", underline:"dashed" },
  { key:"vocab",  row:"Vocabulary and word choice", name:"Vocabulary and word choice", glyph:"◆",
    ink:"#6d4790", lamp:"#c3a6e0", soft:"#ece2f5", underline:"double" },
];

/* The writing rubrics stop at C4. */
const LEVELS = ["C2", "C3", "C4"];
const EARLY_LEVELS = [];
const LEVEL_SKILL = { "C2":"Describe", "C3":"Explain", "C4":"Analyse" };

const EXAMPLES = {
"C2":
`{orient|It was 1831.} {orient|I was in my garden by the Swan River in Western Australia.} I was {vocab|tired} {vocab|and} {vocab|hot}. {orient|A Nyungar man came into the garden.} He {vocab|quickly} pulled up our potatoes.`,

"C3":
`{orient|The afternoon sun pressed on the back of my neck}, {orient|and the river smelled of mud and reeds}. {orient|Our garden was the only green square on the grey sand}, {vocab|because} we watered it every evening by hand. I was {vocab|hoeing} the bean rows {vocab|when} I heard {orient|the dry crack of the brush fence}. A Nyungar man was {vocab|crouching} between the potato plants.`,

"C4":
`{orient|Sweat stung my eyes as I dragged the hoe through the bean rows}, {orient|and the river breathed mud and reed-smell up the bank}. Our potatoes were {vocab|a stubborn square of green stitched onto the grey sand}, watered by bucket every evening. {orient|A twig snapped at the brush fence.} {orient|I straightened slowly, the hoe still in my fist.} There, kneeling in the {vocab|furrows}, was a Nyungar man, {vocab|unhurried}, filling his cloak with my potatoes.`
};

const EXPLANATIONS = {
"C2": {
  orient: "The 5 W’s: when (1831), where (the Swan River), who (I, and a Nyungar man), what (he comes into the garden).",
  vocab:  "Simple adjectives (tired, hot), a conjunction (and) and an adverb (quickly)."
},
"C3": {
  orient: "Sets the scene with three senses: touch (the sun on his neck), smell (mud and reeds), sound (the crack of the fence). The where and when are still there, inside the description.",
  vocab:  "Connectives (because, when) join the ideas. Specific verbs (hoeing, crouching) say exactly what each person is doing."
},
"C4": {
  orient: "Shows instead of telling. He never says he is tired or afraid: the sweat, the snapped twig and the slow straightening, hoe in his fist, show it.",
  vocab:  "Precise and poetic choices: the garden “stitched” onto the sand, the farming word “furrows”, and “unhurried”, which tells us how the Nyungar man moved in one word."
}
};

/* Vocabulary: the ELC writing rubric, word for word.
   Orientation: the ELC recount writing rubric, word for word. */
const CONTINUUM = {
orient:{
 "C2":"Include 5 W’s",
 "C3":"Set the scene using interesting descriptive language with a mix of senses included",
 "C4":"Use sensory descriptions to ‘show don’t tell’"},
vocab:{
 "C2":"Use some interesting adjectives, conjunctions (For And Nor But Yet So), and adverbs",
 "C3":"Use some connectives (but, because…etc). Use a variety of specific verbs, nouns and adjectives",
 "C4":"Make precise word choices to express ideas. Use some technical or poetic language"},
};

const SOURCES = [RECORD_SOURCE];

const BUMP = {
 "C2": {
   new:"You give the 5 W’s and use simple adjectives, a conjunction and an adverb.",
   background:"the facts of 1831: the colony, the garden, the potatoes." },
 "C3": {
   new:"You set the scene with a mix of senses, and join ideas with connectives like “because” and “when”.",
   background:"what the Swan River looked like: a river, reeds, and sandy ground." },
 "C4": {
   new:"You show feelings through the body and the senses instead of naming them, with precise and poetic words.",
   background:"that settlers farmed small gardens by hand, and that Nyungar people wore kangaroo-skin cloaks." }
};
