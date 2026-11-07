/* =======================================================================
   CONTENT BLOCK for the Rabbit-Proof Fence analytical writing workshops.
   workshop.html, workshop-deck.html and workshop-sheets.html all read
   this file, after writing-content.js (which holds CRITERIA, the colours,
   CONTINUUM, the ELC Film Analysis rubric word for word, and EXAMPLES,
   the belonging paragraphs from the bump-it-up ladder). Editing here
   updates the student workshop, the projector deck and the print sheets
   at once.

   Every paragraph and sentence here was written for this site as a
   model. None is a student's work. Quotes from the film are a few words
   long, checked against the transcript, and sit inside analysis.

   Mark a phrase with {idea|...} theme, {evid|...} evidence,
   {purp|...} purpose, {lang|...} a linking word (stays black in the
   workshops). Anything unmarked stays black.
   Write plain characters (’ “ ”), not HTML entities.
   ======================================================================= */

/* The three colours the workshops teach. Keys match CRITERIA in
   writing-content.js, so the colours, glyphs and underlines are the same
   as the bump-it-up ladder and the wall. */
const WS_KINDS = [
  { key:"idea", short:"Theme",    ask:"the big idea",                     rubric:"Ideas & Themes" },
  { key:"evid", short:"Evidence", ask:"what we see or hear",              rubric:"Evidence & Metalanguage" },
  { key:"purp", short:"Purpose",  ask:"what Noyce wants us to feel or think", rubric:"Purpose & Interpretation" }
];

const WS_BANDS = ["C2", "C3", "C4"];
const WS_SKILL = { C2:"Describe", C3:"Explain", C4:"Analyse" };

/* A first wrong colour is told the rule for the colour it CHOSE, never the
   right answer: otherwise the second try is free. A second miss on the
   same phrase reveals it (WS_IS) and it counts as missed. */
const WS_NOT = {
  idea:"Not theme ▲. Theme is the big idea: a word like belonging or control, or a claim about it.",
  evid:"Not evidence ■. Evidence is on screen or in the soundtrack: a shot, a sound, or a line someone says.",
  purp:"Not purpose ●. Purpose is what Noyce wants the audience to feel, think or understand.",
  black:"Not a colour. This part holds the sentence together, so it stays black. It counts as a miss."
};
const WS_IS = {
  idea:"Missed twice: this is theme ▲, an idea about the film, not something on screen.",
  evid:"Missed twice: this is evidence ■. It is on screen or in the soundtrack.",
  purp:"Missed twice: this is purpose ●. It says what Noyce wants the audience to feel or think."
};

/* What counts as passed. A tick means passed, not just finished.
   colourMisses: misses allowed in one paragraph (black parts count).
   sortFirstRound: of the nine paragraphs, right before any feedback.
   climbChecks: a band passed in this many checks or fewer gets a clean tick. */
const WS_PASS = { colourMisses:1, sortFirstRound:7, climbChecks:2 };

/* ---------------------------------------------------------------------
   THE PARAGRAPHS. Three questions, one paragraph at each C band.
   "belonging" reuses EXAMPLES from writing-content.js (src:"EXAMPLES").
   why  = the rubric line it meets, and the words that prove it.
   lack = what it still needs for the band above (shown when a student
          places it too high). C4 has no lack: C4 is the top of this set.
   The control and determination paragraphs are written so that length
   does not give the band away: a C2 can be the longest card.
   --------------------------------------------------------------------- */
const WS_SETS = [
 { id:"belonging", theme:"Belonging",
   q:"How does Noyce use film techniques to show the theme of belonging?",
   paras:{
    C2:{ src:"EXAMPLES",
      why:"C2: it “retells visible details”. The girls “want to go home” and “belong at Jigalong”: what happens, with no technique linked to a meaning.",
      lack:"No connective joins a technique to an effect. C3 needs “because”, “so” or “to show”." },
    C3:{ src:"EXAMPLES",
      why:"C3: “to show how far away from home they are” explains the effect, and “because” and “so” join the ideas.",
      lack:"It says how the audience feels, but not what Noyce is suggesting. C4 makes an inference about the director." },
    C4:{ src:"EXAMPLES",
      why:"C4: analytical verbs (“highlight”, “symbolises”, “reveals”) and “suggesting that the settlement cannot replace a mother” infers what Noyce means." }
   }},
 { id:"control", theme:"Control",
   q:"How does Noyce show control in Rabbit-Proof Fence?",
   paras:{
    C2:{ text:`In the film, {idea|Mr Neville controls the girls}. He says {evid|“every Aborigine born in this State comes under my control.”} A policeman takes the girls away in a car, so their mothers cry. At Moore River the girls get new clothes and they have to line up with lots of other children. {idea|They have to follow the rules}. {purp|This is sad for the girls.}`,
      why:"C2: it “retells visible details”. Every sentence says what happens, the verbs are literal (“says”, “takes”), the “so” only joins two events, and “This is sad” is the basic meaning.",
      lack:"Lots of detail, but no technique word, and no effect is explained. C3 links a technique to a feeling." },
    C3:{ text:`Noyce shows that {idea|the girls have no control over their lives}. He uses {evid|a close-up of the girls’ faces in the car}, {purp|suggesting that they are scared}. At Moore River, a woman tells them {evid|“We don’t use that jabber here,”} {lang|so} {purp|the audience understands} that {idea|their own language is not allowed}.`,
      why:"C3: a technique word (“close-up”) linked to a feeling, and the connective “so” joins the quote to its effect.",
      lack:"“Suggesting that they are scared” is a feeling, not what Noyce is saying, and the verb is still “shows”. C4 infers the director’s intent." },
    C4:{ text:`Noyce {lang|presents} {idea|control as the power to decide where a child belongs}. Neville’s calm words, {evid|“every Aborigine born in this State comes under my control,”} {lang|reveal} {purp|how normal this power seemed to him}. {lang|Yet} {evid|extreme long shots of the open desert} {lang|highlight} {idea|land that he cannot control}, {purp|suggesting that Noyce wants us to see the girls as free}.`,
      why:"C4: the topic sentence makes a claim about control, “reveal” and “highlight” are analytical verbs, and “suggesting that Noyce wants us to see the girls as free” infers his intent." }
   }},
 { id:"determination", theme:"Determination",
   q:"How does Noyce show Molly’s determination?",
   paras:{
    C2:{ text:`{idea|Molly wants to go home}. She says {evid|“Find that rabbit fence, we go home.”} {evid|The girls walk next to the fence in the desert.} {idea|They walk a long way}. {purp|Molly is brave because she does not stop.}`,
      why:"C2: short, simple sentences, a quote and a description of what is seen. “Molly is brave because she does not stop” is the basic meaning, and its reason is still the story.",
      lack:"No technique word, and nothing is linked to an effect on the audience. C3 explains an effect." },
    C3:{ text:`Noyce shows that {idea|Molly is determined to get home to her family}. When the girls escape, Molly says {evid|“Find that rabbit fence, we go home,”} {lang|because} she knows the fence will lead them to Jigalong. He uses {evid|a long shot of the girls walking in the hot desert} {purp|to show how hard the journey is}. This is {lang|important because} {idea|Molly never gives up}, {lang|so} {purp|the audience feels proud of her}.`,
      why:"C3: “a long shot” is a technique word, “to show how hard the journey is” explains the effect, and “because” and “so” join the ideas.",
      lack:"Long, but every effect is a feeling. C4 says what Noyce is suggesting, with analytical verbs." },
    C4:{ text:`Noyce {lang|presents} {idea|Molly’s determination as a quiet kind of resistance}. Her short command, {evid|“Find that rabbit fence, we go home,”} {lang|reveals} {purp|that she already has a plan}. {evid|Extreme long shots of three small figures beside the fence} {lang|emphasise} {idea|how far she will go to reach her mother}, {lang|so} {purp|Noyce positions us to admire a girl who will not be controlled}.`,
      why:"C4: precise film terms (“extreme long shots”), analytical verbs (“reveals”, “emphasise”), and “Noyce positions us to admire…” infers his intent." }
   }}
];

/* The order of the cards in the sort tray. Within each question the bands
   are never in order, so the tray does not give the answer away. */
const WS_SORT_ORDER = [
  "control-C3", "belonging-C4", "determination-C3",
  "control-C2", "belonging-C2", "determination-C4",
  "control-C4", "determination-C2", "belonging-C3"
];

/* ---------------------------------------------------------------------
   THREE WAYS IN. Start from one colour, build the other two.
   q: good (green), ok (accepted, with a note: it is a lower band),
      weak (bounces back, with the reason).
   build: the sentence, in order. "@evid", "@verb", "@idea", "@purp" are
   the given or the pick of that kind; anything else is printed as is.
   --------------------------------------------------------------------- */
const WS_ROUTES = [
 { id:"ev", name:"From the evidence",
   given:{ kind:"evid", text:"an extreme long shot of three small girls beside the fence" },
   steps:[
    { kind:"verb", ask:"What does the shot do?", opts:[
      { t:"highlights", q:"good", why:"An analytical verb: C4 writes “with analytical verbs (“symbolises”, “reveals”)”." },
      { t:"shows", q:"ok", why:"True, but “shows” is a C2 literal verb. Swap it up at C4." },
      { t:"is a picture of", q:"weak", why:"That says what the shot is, not what it does. Pick a verb that says what the shot does." } ]},
    { kind:"idea", ask:"Which idea?", opts:[
      { t:"the girls’ bond with their home", q:"good", why:"A theme: belonging, said as a claim." },
      { t:"belonging", q:"good", why:"A theme from the rubric: “belonging, freedom, or control”." },
      { t:"that the desert is very hot and dry in summer", q:"weak", why:"That is the weather, not an idea. A theme is a big idea, like belonging, family or control." } ]},
    { kind:"purp", ask:"What does Noyce want us to see?", opts:[
      { t:"suggesting that the fence is their way home", q:"good", why:"C4: “Makes inferences about the director’s intent”." },
      { t:"to show that they are far away", q:"ok", why:"C3: “to show distance” explains the effect. C4 says what Noyce is suggesting." },
      { t:"which makes the film longer and more interesting to watch", q:"weak", why:"That is about the film itself, not the audience or Noyce’s message." } ]}
   ],
   build:["@evid", "@verb", "@idea", ",", "@purp", "."] },

 { id:"idea", name:"From the theme",
   given:{ kind:"idea", text:"control" },
   steps:[
    { kind:"evid", ask:"Which moment proves it?", opts:[
      { t:"Neville’s words, “every Aborigine born in this State comes under my control,”", q:"good", why:"He names his power in his own words." },
      { t:"the rules at Moore River, “We don’t use that jabber here,”", q:"good", why:"A rule against the girls’ own language: control over who they are." },
      { t:"the spirit bird that flies above Molly in the wide blue sky as the girls walk home across the desert", q:"weak", why:"The spirit bird is Molly’s connection to her mother and her Country. It does not show control." } ]},
    { kind:"verb", ask:"What do the words do?", opts:[
      { t:"reveal", q:"good", why:"An analytical verb: the line uncovers how the system thinks." },
      { t:"show", q:"ok", why:"Works, but “show” is the C2 literal verb." },
      { t:"talk about", q:"weak", why:"“Talk about” retells. Say what the words do." } ]},
    { kind:"purp", ask:"What does Noyce want us to think?", opts:[
      { t:"suggesting that Noyce wants the audience to question this power", q:"good", why:"C4: an inference about the director’s intent." },
      { t:"to make us feel angry", q:"ok", why:"C3: “to make us feel sad” is the rubric’s own example. C4 says what Noyce wants us to think." },
      { t:"which happened a long time ago, in Western Australia in the year 1931", q:"weak", why:"That is a fact about the date, not an effect on the audience." } ]}
   ],
   build:["@evid", "@verb", "how much", "@idea", "the government had", ",", "@purp", "."] },

 { id:"eff", name:"From the purpose",
   given:{ kind:"purp", text:"make the audience feel the girls’ loss" },
   steps:[
    { kind:"evid", ask:"Which moment does it?", opts:[
      { t:"the mothers’ cries as the car drives away", q:"good", why:"Diegetic sound: the characters hear it too, and so do we." },
      { t:"close-ups of the girls’ faces in the car", q:"good", why:"A close-up shows feeling in detail." },
      { t:"the archival footage of the real Molly and Daisy at the very end of the film", q:"weak", why:"The ending shows the real Molly and Daisy, years later. It is about survival, not the moment of loss." } ]},
    { kind:"idea", ask:"Which idea?", opts:[
      { t:"separation", q:"good", why:"A theme: being taken from family and Country." },
      { t:"family", q:"good", why:"A simple theme, from the rubric’s own list: “fear, courage, family”." },
      { t:"the car that drives them away", q:"weak", why:"A car is an object in the scene. A theme is an idea." } ]},
    { kind:"verb", ask:"What does Noyce do?", opts:[
      { t:"uses", q:"good", why:"Plain and strong: Noyce chose this on purpose." },
      { t:"shows", q:"ok", why:"Fine at C2. At C4, “uses” plus a precise term is stronger." },
      { t:"has", q:"weak", why:"“Has” hides that this is the director’s choice." } ]}
   ],
   build:["To", "@purp", ", Noyce", "@verb", "@evid", ", so the theme of", "@idea", "feels personal."] }
];

/* ---------------------------------------------------------------------
   THE CLIMB. One sentence, built at C2, then rebuilt at C3 and C4.
   The sentence is never wiped. Each tile has lv:[first, last] band it is
   available at (2 = C2). A tile used above its last band is "retired":
   it stays in the sentence, flagged, with "retire" saying why, until the
   student trades it out. lv:[0,0] is a decoy that fails at every band.
   Every tile is in the bank at every band, so choosing is the work.
   kinds: subj, verb, evid, idea, purp, join (black, links the parts).
   tech: the evidence names a technique.  exact: the term is precise.
   --------------------------------------------------------------------- */
const WS_CLIMB = {
  moment:"The walk home along the fence",
  q:"How does Noyce show belonging?",
  /* the same sentence at each band, for the deck and the anchor sheet */
  models:{
    C2:`The film {lang|shows} {evid|the girls walking next to the fence}. {idea|They want to go home}. {purp|It is sad.}`,
    C3:`Noyce uses {evid|a long shot of the girls beside the fence} {purp|to show how far from home they are}, {lang|so} the audience understands that {idea|they belong with their families}.`,
    C4:`Noyce uses {evid|extreme long shots of three small girls beside the endless fence}, which {lang|highlight} {idea|belonging as a bond that distance cannot break}, {purp|suggesting that Noyce wants us to see the land as their home}.`
  },
  tiles:[
    { k:"subj", t:"The film", lv:[2,3], retire:"At C4 the subject is the director’s choice. Write about Noyce." },
    { k:"subj", t:"It", lv:[0,0], retire:"“It” could be anything. Say who made the choice: Noyce, or the film." },
    { k:"subj", t:"The girls", lv:[2,2], retire:"At C3 the sentence is about how the film is made. Start with Noyce or the film." },
    { k:"subj", t:"Noyce", lv:[2,4] },

    { k:"verb", t:"shows", lv:[2,3], retire:"“Shows” is a C2 literal verb. C4 writes “with analytical verbs (“symbolises”, “reveals”)”." },
    { k:"verb", t:"is about", lv:[2,2], retire:"“Is about” retells. C3 explains." },
    { k:"verb", t:"uses", lv:[3,4] },
    { k:"verb", t:"has", lv:[0,0], retire:"“Has” says nothing about what the film does. Pick a verb that does." },
    { k:"verb", t:"highlights", lv:[2,4], an:true },
    { k:"verb", t:"symbolises", lv:[2,4], an:true },
    { k:"verb", t:"reveals", lv:[2,4], an:true },

    { k:"evid", t:"the girls walking", lv:[2,2], retire:"C3 “adds a technique word”. Name the shot." },
    { k:"evid", t:"“Find that rabbit fence, we go home”", lv:[2,4] },
    { k:"evid", t:"the bell at Moore River", lv:[0,0], retire:"That is Moore River, not the walk. Use evidence from this moment." },
    { k:"evid", t:"a long shot of the girls beside the fence", lv:[3,3], tech:true,
      retire:"At C4 the term is exact: the girls are tiny in the frame, so it is an extreme long shot." },
    { k:"evid", t:"extreme long shots of three small girls beside the endless fence", lv:[4,4], tech:true, exact:true },
    { k:"evid", t:"the archival footage at the end", lv:[0,0], retire:"That is the ending, not the walk. Use evidence from this moment." },
    { k:"evid", t:"the non-diegetic music as they walk", lv:[4,4], tech:true, exact:true },

    { k:"idea", t:"the girls want to go home", lv:[2,2], n:2, retire:"C3 names a simple theme, like family or belonging." },
    { k:"idea", t:"they miss their mother", lv:[2,2], n:2, retire:"C3 names a simple theme, like family or belonging." },
    { k:"idea", t:"the desert is hot", lv:[0,0], retire:"That is the weather, not an idea. A theme is a big idea, like belonging or family." },
    { k:"idea", t:"family", lv:[3,3], n:3, retire:"At C4 the theme becomes a claim: what does the film say about it?" },
    { k:"idea", t:"belonging", lv:[3,3], n:3, retire:"At C4 the theme becomes a claim: what does the film say about it?" },
    { k:"idea", t:"belonging as a bond that distance cannot break", lv:[4,4], n:4 },
    { k:"idea", t:"the fence as the way home", lv:[4,4], n:4 },
    { k:"idea", t:"the fence is long", lv:[0,0], retire:"That describes the fence. A theme is the idea it carries." },

    { k:"purp", t:"It is sad", lv:[2,2], n:2, retire:"C3 explains the purpose or audience effect: “to show…”, “to make us feel…”." },
    { k:"purp", t:"Molly is brave", lv:[2,2], n:2, retire:"C3 explains the purpose or audience effect: “to show…”, “to make us feel…”." },
    { k:"purp", t:"to show how far from home they are", lv:[3,4], n:3 },
    { k:"purp", t:"to make the film longer", lv:[0,0], retire:"That is about the film’s length, not the audience or Noyce’s message." },
    { k:"purp", t:"so the audience feels sad for them", lv:[3,3], n:3, retire:"At C4 the purpose is an inference about Noyce, not only a feeling." },
    { k:"purp", t:"suggesting that no law can stop them belonging to their family", lv:[4,4], n:4 },
    { k:"purp", t:"because the music is loud", lv:[0,0], retire:"Loud is a fact about the sound. Purpose says what Noyce wants us to feel or think." },
    { k:"purp", t:"suggesting that Noyce wants us to see the land as their home", lv:[4,4], n:4 },

    { k:"join", t:".", lv:[2,4] },
    { k:"join", t:",", lv:[2,4] },
    { k:"join", t:"and", lv:[2,4] },
    { k:"join", t:"because", lv:[3,4], con:true },
    { k:"join", t:"so", lv:[3,4], con:true },
    { k:"join", t:"which", lv:[3,4], con:true },
    { k:"join", t:"yet", lv:[4,4], con:true },
    { k:"join", t:"of", lv:[2,4] },
    { k:"join", t:"to show", lv:[3,4] }
  ],
  /* What each band asks for, checked in this order. Each test names the
     rubric line it comes from. */
  need:{
    2:[ ["subj", "A subject: who or what the sentence is about."],
        ["verb", "A verb."],
        ["evid", "Evidence ■: C2 “gives a simple quote or description of what is seen or heard”."],
        ["ideaOrPurp", "A theme ▲ or a purpose ●: C2 “identifies the basic meaning or message of a scene”."] ],
    3:[ ["subj", "A subject."],
        ["verb", "A verb."],
        ["tech", "Evidence with a technique word ■: C3 “adds a technique word (“close-up”, “sound”, “lighting”)”."],
        ["idea3", "A simple theme ▲: C3 links visuals “to emotions or simple themes (fear, courage, family)”."],
        ["purp3", "A purpose ●: C3 “explains the purpose or audience effect (“to make us feel sad”, “to show distance”)”."],
        ["con", "A connective: C3 “expands sentences with connectives like because or so”."] ],
    4:[ ["noyce", "Noyce as the subject: the purpose is about the director’s intent."],
        ["an", "An analytical verb: C4 writes “with analytical verbs (“symbolises”, “reveals”)”."],
        ["exact", "An exact film term ■: C4 “uses film terms accurately”."],
        ["idea4", "A theme as a claim ▲: C4 “connects specific techniques and moments to themes or concepts such as belonging”."],
        ["purp4", "An inference ●: C4 “makes inferences about the director’s intent”."] ]
  }
};

/* ---------------------------------------------------------------------
   WRITE YOUR OWN. Moments from the hub's "Moments to watch", and the
   frames for each band. The frames are the C-band shapes from the climb.
   --------------------------------------------------------------------- */
const WS_MOMENTS = [
  "Jigalong, at the start: the goanna, the family, the warm colours",
  "The removal: the car, the girls’ faces, the mothers’ cries",
  "Moore River: “This is your new home.” The rules and the lines",
  "The walk: the fence across the desert, and the music",
  "Gracie is caught: “I’m taking you back where you belong.”",
  "The ending: the archival footage of the real Molly and Daisy"
];
const WS_THEMES = ["belonging", "control", "determination", "family", "separation", "identity"];
const WS_FRAMES = {
  C2:"In the film, ▲ ______ . We see ■ ______ . ● This shows ______ .",
  C3:"Noyce shows that ▲ ______ . He uses ■ (technique) ______ ● to show ______ , so ______ .",
  C4:"Noyce presents ▲ (theme) as ______ . ■ (exact film term) ______ reveals ______ , ● suggesting that Noyce wants us to ______ ."
};

/* ---------------------------------------------------------------------
   KEY WORDS for the projector deck, in all three languages at once: the
   deck is shown to the whole room, so it never asks which language.
   (Student pages ask each student to pick one.)
   Every entry is copied from a table the hub already uses, so a word is
   the same here as in the vocab hub and the film techniques slides:
     vocab-hub.html TR (Purpose, Describe, Explain, Analyse, Belonging,
       Determination, Separation, Highlight, Reveal),
     techniques.html TERMS (the shots and sounds),
     writing-content.js TIER3_T / TIER2_T (theme, suggesting),
     ../index.html (rubric, in Mandarin).
   Drafted here, new: evidence, control, and rubric in Vietnamese.
   All are drafted and not yet checked by a speaker (EAL_NOTE).
   Mandarin (Traditional) uses Taiwan wording, Simplified uses Mainland.
   --------------------------------------------------------------------- */
const WS_TERM_LANGS = [["zh-Hant","繁體"], ["zh-Hans","简体"], ["vi","Tiếng Việt"]];
const WS_TERMS = {
  "theme":              {"zh-Hant":"主題", "zh-Hans":"主题", "vi":"chủ đề"},
  "evidence":           {"zh-Hant":"證據", "zh-Hans":"证据", "vi":"bằng chứng"},
  "purpose":            {"zh-Hant":"目的", "zh-Hans":"目的", "vi":"mục đích"},
  "describe":           {"zh-Hant":"描述", "zh-Hans":"描述", "vi":"mô tả"},
  "explain":            {"zh-Hant":"解釋", "zh-Hans":"解释", "vi":"giải thích"},
  "analyse":            {"zh-Hant":"分析", "zh-Hans":"分析", "vi":"phân tích"},
  "rubric":             {"zh-Hant":"評分標準", "zh-Hans":"评分标准", "vi":"tiêu chí chấm điểm"},
  "belonging":          {"zh-Hant":"歸屬感", "zh-Hans":"归属感", "vi":"cảm giác thuộc về"},
  "control":            {"zh-Hant":"控制", "zh-Hans":"控制", "vi":"sự kiểm soát"},
  "determination":      {"zh-Hant":"決心", "zh-Hans":"决心", "vi":"quyết tâm"},
  "separation":         {"zh-Hant":"分離", "zh-Hans":"分离", "vi":"sự chia cắt"},
  "long shot":          {"zh-Hant":"遠景", "zh-Hans":"远景", "vi":"toàn cảnh"},
  "extreme long shot":  {"zh-Hant":"大遠景", "zh-Hans":"大远景", "vi":"đại toàn cảnh"},
  "close-up":           {"zh-Hant":"特寫", "zh-Hans":"特写", "vi":"cận cảnh"},
  "diegetic sound":     {"zh-Hant":"劇情內聲音", "zh-Hans":"剧情内声音", "vi":"âm thanh trong truyện"},
  "highlight":          {"zh-Hant":"凸顯（強調）", "zh-Hans":"突出（凸显）", "vi":"làm nổi bật"},
  "reveal":             {"zh-Hant":"揭露（顯示）", "zh-Hans":"揭示", "vi":"cho thấy, tiết lộ"},
  "suggesting":         {"zh-Hant":"暗示", "zh-Hans":"暗示", "vi":"gợi ý"}
};
