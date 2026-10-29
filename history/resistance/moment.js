/* =======================================================================
   SHARED by both Resistance ladders (perspective-content.js and
   writing-content.js): the facts of the moment, the two ideas of land,
   and the glossary with its translations. bump-it-up.html loads this
   first, then one ladder's content file.

   The task is the Resistance creative non-fiction story (task sheet in the
   private ELC repo, teaching/humanities/resistance-creative-nonfiction).
   The facts come from the class textbook, section 4.4.2 (Yagan),
   summarised here in our own words.

   The narrator on both ladders is an imagined settler, on purpose. The
   Nyungar view shows through what he notices and cannot understand, so no
   Nyungar thoughts, words or beliefs are invented. LAND_SOURCE summarises
   a class discussion in general terms and names no Nyungar story.

   OPEN ITEM: LAND_SOURCE has not been checked by a Nyungar or other
   Aboriginal reviewer. Closing it may change the wording.

   Write plain characters (’ “ ”), not HTML entities.
   ======================================================================= */

const RECORD_SOURCE = {
  id: "record",
  tab: "A · What happened",
  title: "What happened",
  kind: "text",
  cite: "Summarised from the class textbook, section 4.4.2. Every fact on the ladder comes from here. The fence, the weather and the narrator’s thoughts are imagined.",
  whole: { label:"What happened",
    text:"The facts your story must keep. Anything you imagine has to fit them." },
  paragraphs: [
   "1829. The British start the Swan River Colony on Nyungar land in south-western Western Australia. Settlers are given land grants: papers that say the land is theirs.",
   "At first, Nyungar people and settlers live side by side. Then arguments start over land and food. The British think the Nyungar burning of the land is an attack.",
   "1831. A Nyungar man takes potatoes from a settler’s garden. He is shot.",
   "The settler sees it as theft. The Nyungar would see it as taking food from their own land, which they had a right to.",
   "Yagan seeks payback for this killing. A reward is offered for his head. He is shot in July 1833."
  ],
  hotspots: [
   { mark:"land grants", label:"Land grants",
     text:"To a settler, a paper from the Governor made the land his. Your settler narrator would believe this completely." },
   { mark:"the Nyungar burning of the land is an attack", label:"Burning the land",
     text:"Nyungar people burned the land on purpose, to care for it. The British read it as violence. The same act, seen two ways: that is perspective." },
   { mark:"takes potatoes from a settler’s garden", label:"The moment",
     text:"This is the moment on every rung. It lasts a minute. Your story can be this short." },
   { mark:"The settler sees it as theft", label:"The settler’s view",
     text:"Your narrator’s view. At the time, he can only see it this way." },
   { mark:"taking food from their own land", label:"The Nyungar view",
     text:"The view your narrator cannot see. A strong story lets the reader see it anyway." },
   { mark:"Yagan seeks payback", label:"What happens next",
     text:"This killing starts Yagan’s resistance." }
  ]
};

const LAND_SOURCE = {
  id: "land",
  tab: "B · Two ideas of land",
  title: "Two ideas of land",
  kind: "text",
  cite: "From class discussion, in general terms. A summary to think with, not a source to quote.",
  whole: { label:"Two ideas of land",
    text:"Two different ideas of what land is. On the higher rungs, the narrator holds one idea and the reader is shown the other." },
  paragraphs: [
   "Many Aboriginal people describe Country as family. People belong to the land; the land does not belong to people. Caring for Country is law.",
   "The Dreaming is not only the past. It is the law and the stories that connect people, animals, plants and land, then and now. The anthropologist W. E. H. Stanner called it “everywhen”.",
   "The British settlers brought another idea. Land is property. It can be measured, fenced, bought and sold, and a paper proves who owns it.",
   "Many settlers read the Bible’s words that people should “subdue” the earth and “have dominion” over it. The British also treated Australia as terra nullius, land that belonged to no one.",
   "In class we compared Country with Daoism. In Daoism, people are part of nature’s way, not above it. They are different traditions, but both begin from connection instead of ownership."
  ],
  hotspots: [
   { mark:"People belong to the land", label:"Belonging to Country",
     text:"Ownership goes the other way. Your settler cannot imagine this. Your reader can." },
   { mark:"everywhen", label:"“Everywhen”",
     text:"Stanner’s word for the Dreaming: not long ago, but always." },
   { mark:"a paper proves who owns it", label:"Property",
     text:"The settler’s whole idea of land. A fence and a land grant mean “mine”." },
   { mark:"“subdue” the earth and “have dominion” over it", label:"The Bible’s words",
     text:"From Genesis. Many settlers believed the land was given to people to control. This is where a narrator’s values can come from." },
   { mark:"terra nullius", label:"Terra nullius",
     text:"“Land belonging to no one.” The idea that let the British take land without a treaty." },
   { mark:"people are part of nature’s way", label:"Daoism",
     text:"The comparison from class. Use it to think with. Keep it out of your 1831 story: no one there would say it." }
  ]
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general words, which need a plainer synonym.
   Matched case-insensitively on whole words wherever they appear. */
const GLOSS = {
 tier3: {
  "Nyungar":"The Aboriginal people of south-western Western Australia. The textbook spells it Nyungar; you will also see Noongar.",
  "colony":"Land taken and ruled by another country. Here, the British Swan River Colony.",
  "land grant":"A paper from the Governor giving a settler land. To the British, it meant the land was theirs.",
  "land grants":"Papers from the Governor giving settlers land. To the British, they meant the land was theirs.",
  "Country":"With a capital C: the land a people belongs to, with its places, stories and law.",
  "The Dreaming":"The law and stories that connect people, animals, plants and land, in the past and now.",
  "terra nullius":"Latin for “land belonging to no one”. The British used this idea to take land without a treaty.",
  "Daoism":"A Chinese way of thinking, from Laozi. People are part of nature’s way (the Dao), not above it.",
  "narrator":"The person telling the story.",
  "perspective":"The way one person sees an event, shaped by who they are and what they believe."
 },
 tier2: {
  "subdue":"take control of",
  "dominion":"the power to rule over something",
  "theft":"stealing",
  "payback":"hurting someone back for a wrong",
  "knelt":"went down on his knees",
  "kneeling":"down on his knees",
  "ignored":"did not pay attention to",
  "property":"something a person owns",
  "values":"what a person believes is right and important",
  "hoeing":"digging the soil with a garden tool",
  "crouching":"bending low with knees bent",
  "furrows":"long lines dug in the soil for planting",
  "unhurried":"slow and calm, not in a rush",
  "stubborn":"not giving up or changing"
 }
};

const EAL_LANGS = [
  { code:"zh-Hant", label:"繁體國語", english:"Mandarin (Traditional)" },
  { code:"zh-Hans", label:"简体普通话", english:"Mandarin (Simplified)" },
  { code:"vi",      label:"Tiếng Việt", english:"Vietnamese" },
];
const EAL_NOTE = "Drafted. Not yet checked by a speaker of each language.";
const EAL = {};

const TIER3_T = {
  "Nyungar": {"zh-Hans":"Nyungar 人（西澳大利亚原住民）", "zh-Hant":"Nyungar 人（西澳原住民）", "vi":"người Nyungar (thổ dân miền tây nam Tây Úc)"},
  "colony": {"zh-Hans":"殖民地", "zh-Hant":"殖民地", "vi":"thuộc địa"},
  "land grant": {"zh-Hans":"土地授予（官方赠地）", "zh-Hant":"土地授予（官方贈地）", "vi":"giấy cấp đất"},
  "land grants": {"zh-Hans":"土地授予（官方赠地）", "zh-Hant":"土地授予（官方贈地）", "vi":"giấy cấp đất"},
  "Country": {"zh-Hans":"故土（祖先的土地）", "zh-Hant":"故土（祖先的土地）", "vi":"Đất Mẹ (vùng đất tổ tiên)"},
  "The Dreaming": {"zh-Hans":"梦幻时代（原住民的法则与故事）", "zh-Hant":"夢幻時代（原住民的法則與故事）", "vi":"Thời kỳ Giấc mơ (luật và chuyện kể của thổ dân)"},
  "terra nullius": {"zh-Hans":"无主之地", "zh-Hant":"無主之地", "vi":"vùng đất vô chủ"},
  "Daoism": {"zh-Hans":"道家思想", "zh-Hant":"道家思想", "vi":"Đạo gia"},
  "narrator": {"zh-Hans":"叙述者", "zh-Hant":"敘述者", "vi":"người kể chuyện"},
  "perspective": {"zh-Hans":"视角", "zh-Hant":"視角", "vi":"góc nhìn"}
};
const TIER2_T = {
  "subdue": {"zh-Hans":"征服", "zh-Hant":"征服", "vi":"chinh phục"},
  "dominion": {"zh-Hans":"统治权", "zh-Hant":"統治權", "vi":"quyền thống trị"},
  "theft": {"zh-Hans":"偷窃", "zh-Hant":"偷竊", "vi":"trộm cắp"},
  "payback": {"zh-Hans":"报复", "zh-Hant":"報復", "vi":"trả thù"},
  "knelt": {"zh-Hans":"跪下", "zh-Hant":"跪下", "vi":"quỳ xuống"},
  "kneeling": {"zh-Hans":"跪着", "zh-Hant":"跪著", "vi":"đang quỳ"},
  "ignored": {"zh-Hans":"无视", "zh-Hant":"無視", "vi":"phớt lờ"},
  "property": {"zh-Hans":"财产", "zh-Hant":"財產", "vi":"tài sản"},
  "values": {"zh-Hans":"价值观", "zh-Hant":"價值觀", "vi":"giá trị (niềm tin)"},
  "hoeing": {"zh-Hans":"锄地", "zh-Hant":"鋤地", "vi":"cuốc đất"},
  "crouching": {"zh-Hans":"蹲着", "zh-Hant":"蹲著", "vi":"ngồi thụp xuống"},
  "furrows": {"zh-Hans":"犁沟", "zh-Hant":"犁溝", "vi":"luống cày"},
  "unhurried": {"zh-Hans":"不慌不忙", "zh-Hant":"不慌不忙", "vi":"thong thả"},
  "stubborn": {"zh-Hans":"顽强的", "zh-Hant":"頑強的", "vi":"bền bỉ, kiên cường"}
};
