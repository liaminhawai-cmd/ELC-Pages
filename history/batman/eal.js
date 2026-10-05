/* =======================================================================
   EAL SOURCE-ANALYSIS VOCABULARY: the shared table.

   These are the words a student needs in order to do source analysis at
   all, as opposed to the words of any one unit. All three History units
   read this file; the unit's own GLOSS.tier3 carries what is specific to
   that source.

   THE SAME TABLE FEEDS THE VOCABULARY HUB. tools/build_vocab_entries.py
   turns it into entries for liaminhawai-cmd/EAL-Vocabulary-Site, so the
   wall and the hub cannot end up teaching different words. Edit here, run
   that script, and both are updated.

   ---------------------------------------------------------------------
   TRANSLATION STATUS: MACHINE-DRAFTED, NOT YET REVIEWED.

   The vocabulary site's own rule is that every translation set must
   include REVIEWED Taiwan Traditional Chinese as its own value, with
   Taiwan terminology rather than character conversion. These drafts were
   written with that in mind, zh-Hant and zh-Hans differ in wording, not just in characters, wherever the two varieties genuinely differ, but
   nobody has reviewed them yet. The wall labels them as unreviewed on
   screen, and they should not be treated as meeting that rule until a
   speaker of each language has been through them.

   `morph` is the morpheme breakdown, where the word has one. The hub is
   built on morphology, so this is what lets a word join its family there.
   ======================================================================= */

const EAL_LANGS = [
  { code:"zh-Hans", label:"简体中文（中国）", english:"Chinese (China)" },
  { code:"zh-Hant", label:"繁體中文（台灣）", english:"Chinese (Taiwan)" },
  { code:"ja",      label:"日本語",           english:"Japanese" },
  { code:"ko",      label:"한국어",            english:"Korean" },
  { code:"vi",      label:"Tiếng Việt",       english:"Vietnamese" },
  { code:"ar",      label:"العربية",           english:"Arabic" },
  { code:"fa",      label:"فارسی",             english:"Farsi/Dari" },
  { code:"ur",      label:"اردو",              english:"Urdu" },
  { code:"ps",      label:"پښتو",              english:"Pashto" },
  { code:"am",      label:"አማርኛ",             english:"Amharic" },
  { code:"ml",      label:"മലയാളം",           english:"Malayalam" },
  { code:"ta",      label:"தமிழ்",             english:"Tamil" },
  { code:"hi",      label:"हिन्दी",              english:"Hindi" },
  { code:"tl",      label:"Tagalog",          english:"Tagalog" },
  { code:"ro",      label:"Română",           english:"Romanian" },
  { code:"ru",      label:"Русский",          english:"Russian" },
  { code:"fr",      label:"Français",         english:"French" },
  { code:"es",      label:"Español",          english:"Spanish" }
];

const EAL_NOTE = "Machine-drafted. Not yet checked by a speaker of each language.";

const EAL = {
"source": { en:"Something from the past that we use to find out what happened.",
  t:{ "zh-Hans":"史料", "zh-Hant":"史料", ja:"史料", ko:"사료", vi:"nguồn sử liệu",
      ar:"مصدر", fa:"منبع", ur:"ماخذ", ps:"سرچینه", am:"ምንጭ", ml:"സ്രോതസ്സ്",
      ta:"ஆதாரம்", hi:"स्रोत", tl:"pinagmulan", ro:"sursă", ru:"источник",
      fr:"source", es:"fuente" }},

"primary source": { en:"A source made at the time by someone who was there.",
  t:{ "zh-Hans":"第一手史料", "zh-Hant":"第一手史料", ja:"一次史料", ko:"1차 사료",
      vi:"nguồn sơ cấp", ar:"مصدر أولي", fa:"منبع دست اول", ur:"بنیادی ماخذ",
      ps:"لومړنۍ سرچینه", am:"ቀዳማይ ምንጭ", ml:"പ്രാഥമിക സ്രോതസ്സ്",
      ta:"முதன்மை ஆதாரம்", hi:"प्राथमिक स्रोत", tl:"pangunahing pinagmulan",
      ro:"sursă primară", ru:"первичный источник", fr:"source primaire",
      es:"fuente primaria" }},

"secondary source": { en:"A source made later by someone studying the past.",
  t:{ "zh-Hans":"第二手史料", "zh-Hant":"第二手史料", ja:"二次史料", ko:"2차 사료",
      vi:"nguồn thứ cấp", ar:"مصدر ثانوي", fa:"منبع دست دوم", ur:"ثانوی ماخذ",
      ps:"دویمنۍ سرچینه", am:"ካልኣይ ምንጭ", ml:"ദ്വിതീയ സ്രോതസ്സ്",
      ta:"இரண்டாம் நிலை ஆதாரம்", hi:"द्वितीयक स्रोत", tl:"pangalawang pinagmulan",
      ro:"sursă secundară", ru:"вторичный источник", fr:"source secondaire",
      es:"fuente secundaria" }},

"evidence": { en:"The part of a source that proves something.",
  t:{ "zh-Hans":"证据", "zh-Hant":"證據", ja:"証拠", ko:"증거", vi:"bằng chứng",
      ar:"دليل", fa:"شواهد", ur:"ثبوت", ps:"شواهد", am:"ማስረጃ", ml:"തെളിവ്",
      ta:"சான்று", hi:"साक्ष्य", tl:"katibayan", ro:"dovadă", ru:"доказательство",
      fr:"preuve", es:"evidencia" }},

"artefact": { en:"An object made or used by people in the past.",
  morph:[["arte","skill/craft","root"],["fact","made","root"]],
  t:{ "zh-Hans":"文物", "zh-Hant":"文物", ja:"遺物", ko:"유물", vi:"hiện vật",
      ar:"قطعة أثرية", fa:"شیء باستانی", ur:"نوادر", ps:"لرغونی توکی",
      am:"ቅርስ", ml:"പുരാവസ്തു", ta:"தொல்பொருள்", hi:"कलाकृति",
      tl:"artepakto", ro:"artefact", ru:"артефакт", fr:"artefact", es:"artefacto" }},

"archaeologist": { en:"Someone who studies the past by digging up what people left behind.",
  morph:[["archaeo","ancient","root"],["log","study of","root"],["ist","a person who","suffix"]],
  t:{ "zh-Hans":"考古学家", "zh-Hant":"考古學家", ja:"考古学者", ko:"고고학자",
      vi:"nhà khảo cổ học", ar:"عالم آثار", fa:"باستان‌شناس", ur:"ماہرِ آثارِ قدیمہ",
      ps:"لرغون پوه", am:"አርኪኦሎጂስት", ml:"പുരാവസ്തു ഗവേഷകൻ",
      ta:"தொல்லியலாளர்", hi:"पुरातत्वविद्", tl:"arkeologo", ro:"arheolog",
      ru:"археолог", fr:"archéologue", es:"arqueólogo" }},

"excavate": { en:"To dig something carefully out of the ground.",
  morph:[["ex","out","prefix"],["cav","hollow","root"],["ate","to do","suffix"]],
  t:{ "zh-Hans":"发掘", "zh-Hant":"發掘", ja:"発掘する", ko:"발굴하다",
      vi:"khai quật", ar:"يُنقّب", fa:"کاوش کردن", ur:"کھدائی کرنا",
      ps:"کیندل", am:"መቆፈር", ml:"ഖനനം ചെയ്യുക", ta:"அகழ்வாய்வு செய்",
      hi:"खुदाई करना", tl:"maghukay", ro:"a excava", ru:"раскапывать",
      fr:"fouiller", es:"excavar" }},

"interpretation": { en:"What someone thinks a source means.",
  morph:[["inter","between","prefix"],["pret","explain","root"],["ation","the act of","suffix"]],
  t:{ "zh-Hans":"解释", "zh-Hant":"詮釋", ja:"解釈", ko:"해석", vi:"cách diễn giải",
      ar:"تفسير", fa:"تفسیر", ur:"تعبیر", ps:"تفسیر", am:"ትርጓሜ",
      ml:"വ്യാഖ്യാനം", ta:"விளக்கம்", hi:"व्याख्या", tl:"interpretasyon",
      ro:"interpretare", ru:"интерпретация", fr:"interprétation",
      es:"interpretación" }},

"perspective": { en:"How something looks from one person's point of view.",
  morph:[["per","through","prefix"],["spect","look","root"],["ive","having the quality of","suffix"]],
  t:{ "zh-Hans":"观点", "zh-Hant":"觀點", ja:"視点", ko:"관점", vi:"góc nhìn",
      ar:"وجهة نظر", fa:"دیدگاه", ur:"نقطۂ نظر", ps:"نظر", am:"አመለካከት",
      ml:"കാഴ്ചപ്പാട്", ta:"பார்வை", hi:"दृष्टिकोण", tl:"pananaw",
      ro:"perspectivă", ru:"точка зрения", fr:"point de vue", es:"perspectiva" }},

"context": { en:"What was going on around the source when it was made.",
  morph:[["con","together","prefix"],["text","woven","root"]],
  t:{ "zh-Hans":"背景", "zh-Hant":"背景", ja:"背景", ko:"맥락", vi:"bối cảnh",
      ar:"سياق", fa:"زمینه", ur:"پس منظر", ps:"شالید", am:"አውድ",
      ml:"സന്ദർഭം", ta:"பின்னணி", hi:"संदर्भ", tl:"konteksto", ro:"context",
      ru:"контекст", fr:"contexte", es:"contexto" }},

"reliable": { en:"Able to be trusted.",
  t:{ "zh-Hans":"可靠", "zh-Hant":"可靠", ja:"信頼できる", ko:"신뢰할 수 있는",
      vi:"đáng tin cậy", ar:"موثوق", fa:"قابل اعتماد", ur:"قابلِ اعتماد",
      ps:"د باور وړ", am:"አስተማማኝ", ml:"വിശ്വസനീയം", ta:"நம்பகமான",
      hi:"विश्वसनीय", tl:"maaasahan", ro:"de încredere", ru:"надёжный",
      fr:"fiable", es:"fiable" }},

"bias": { en:"Leaning towards one side instead of being fair.",
  t:{ "zh-Hans":"偏见", "zh-Hant":"偏見", ja:"偏り", ko:"편향", vi:"thiên kiến",
      ar:"تحيّز", fa:"سوگیری", ur:"جانبداری", ps:"تعصب", am:"አድልዎ",
      ml:"പക്ഷപാതം", ta:"சார்பு", hi:"पूर्वाग्रह", tl:"pagkiling",
      ro:"părtinire", ru:"предвзятость", fr:"parti pris", es:"sesgo" }},

"purpose": { en:"The reason something was made.",
  t:{ "zh-Hans":"目的", "zh-Hant":"目的", ja:"目的", ko:"목적", vi:"mục đích",
      ar:"الغرض", fa:"هدف", ur:"مقصد", ps:"موخه", am:"ዓላማ", ml:"ഉദ്ദേശ്യം",
      ta:"நோக்கம்", hi:"उद्देश्य", tl:"layunin", ro:"scop", ru:"цель",
      fr:"but", es:"propósito" }},

"audience": { en:"The people something was made for.",
  morph:[["audi","hear","root"],["ence","the state of","suffix"]],
  t:{ "zh-Hans":"受众", "zh-Hant":"讀者群", ja:"読み手", ko:"독자층",
      vi:"đối tượng người đọc", ar:"الجمهور", fa:"مخاطب", ur:"سامعین",
      ps:"لوستونکي", am:"አድማጭ", ml:"വായനക്കാർ", ta:"வாசகர்கள்",
      hi:"पाठक वर्ग", tl:"mambabasa", ro:"public", ru:"аудитория",
      fr:"public", es:"público" }},

"eyewitness": { en:"Someone who saw it happen with their own eyes.",
  t:{ "zh-Hans":"目击者", "zh-Hant":"目擊者", ja:"目撃者", ko:"목격자",
      vi:"nhân chứng tận mắt", ar:"شاهد عيان", fa:"شاهد عینی", ur:"عینی شاہد",
      ps:"سترګه لیدونکی", am:"የዓይን ምስክር", ml:"ദൃക്‌സാക്ഷി",
      ta:"நேரில் கண்டவர்", hi:"प्रत्यक्षदर्शी", tl:"saksi", ro:"martor ocular",
      ru:"очевидец", fr:"témoin oculaire", es:"testigo presencial" }},

"hearsay": { en:"Something you were told, rather than saw yourself.",
  t:{ "zh-Hans":"传闻", "zh-Hant":"傳聞", ja:"伝聞", ko:"전해 들은 말",
      vi:"lời đồn", ar:"سماع", fa:"شنیده", ur:"سنی سنائی بات", ps:"اورېدلي",
      am:"ወሬ", ml:"കേട്ടുകേൾവി", ta:"கேள்விச் செய்தி", hi:"सुनी-सुनाई बात",
      tl:"sabi-sabi", ro:"din auzite", ru:"слухи", fr:"ouï-dire",
      es:"de oídas" }},

"corroborate": { en:"To back something up with separate evidence.",
  morph:[["cor","together","prefix"],["robor","strength","root"],["ate","to do","suffix"]],
  t:{ "zh-Hans":"佐证", "zh-Hant":"佐證", ja:"裏付ける", ko:"뒷받침하다",
      vi:"chứng thực", ar:"يؤكّد", fa:"تأیید کردن", ur:"تصدیق کرنا",
      ps:"تاييدول", am:"ማረጋገጥ", ml:"സ്ഥിരീകരിക്കുക", ta:"உறுதிப்படுத்து",
      hi:"पुष्टि करना", tl:"patunayan", ro:"a corobora", ru:"подтверждать",
      fr:"corroborer", es:"corroborar" }},

"chronology": { en:"The order in which things happened.",
  morph:[["chrono","time","root"],["logy","study of","suffix"]],
  t:{ "zh-Hans":"年代顺序", "zh-Hant":"年代順序", ja:"年代順", ko:"연대순",
      vi:"trình tự thời gian", ar:"التسلسل الزمني", fa:"گاه‌شماری",
      ur:"زمانی ترتیب", ps:"د وخت ترتیب", am:"የጊዜ ቅደም ተከተል",
      ml:"കാലക്രമം", ta:"காலவரிசை", hi:"कालक्रम", tl:"pagkakasunod-sunod",
      ro:"cronologie", ru:"хронология", fr:"chronologie", es:"cronología" }},

"translation": { en:"A version of a text put into another language.",
  morph:[["trans","across","prefix"],["lat","carried","root"],["ion","the act of","suffix"]],
  t:{ "zh-Hans":"译文", "zh-Hant":"譯文", ja:"翻訳", ko:"번역", vi:"bản dịch",
      ar:"ترجمة", fa:"ترجمه", ur:"ترجمہ", ps:"ژباړه", am:"ትርጉም",
      ml:"വിവർത്തനം", ta:"மொழிபெயர்ப்பு", hi:"अनुवाद", tl:"salin",
      ro:"traducere", ru:"перевод", fr:"traduction", es:"traducción" }},

"manuscript": { en:"A copy of a text written out by hand, before printing existed.",
  morph:[["manu","hand","root"],["script","written","root"]],
  t:{ "zh-Hans":"手稿", "zh-Hant":"手稿", ja:"写本", ko:"필사본", vi:"bản chép tay",
      ar:"مخطوطة", fa:"دست‌نوشته", ur:"مخطوطہ", ps:"لاسي لیکنه", am:"የእጅ ጽሑፍ",
      ml:"കൈയെഴുത്തുപ്രതി", ta:"கையெழுத்துப் பிரதி", hi:"पांडुलिपि",
      tl:"manuskrito", ro:"manuscris", ru:"рукопись", fr:"manuscrit",
      es:"manuscrito" }}
};
