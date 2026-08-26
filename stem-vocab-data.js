/* ============================================================
   ELC STEM hub — vocabulary data (generated)
   Source of truth: EAL-Vocabulary-Site data + ELC teaching
   vocab lessons. Regenerate with ELC/tools/stem-hub/, or edit
   a word here directly — the structure is plain JSON.
   ============================================================ */
window.STEM_VOCAB_DATA = {
 "langs": [
  {
   "id": "zh-Hans",
   "name": "简体中文（中国） Chinese (China)"
  },
  {
   "id": "zh-Hant",
   "name": "繁體中文（台灣） Chinese (Taiwan)"
  },
  {
   "id": "ja",
   "name": "日本語 Japanese"
  },
  {
   "id": "ko",
   "name": "한국어 Korean"
  },
  {
   "id": "vi",
   "name": "Tiếng Việt Vietnamese"
  },
  {
   "id": "ar",
   "name": "العربية Arabic"
  },
  {
   "id": "fa",
   "name": "فارسی Farsi/Dari"
  },
  {
   "id": "ur",
   "name": "اردو Urdu"
  },
  {
   "id": "am",
   "name": "አማርኛ Amharic"
  },
  {
   "id": "ml",
   "name": "മലയാളം Malayalam"
  },
  {
   "id": "ta",
   "name": "தமிழ் Tamil"
  },
  {
   "id": "tl",
   "name": "Tagalog"
  },
  {
   "id": "ps",
   "name": "پښتو Pashto"
  },
  {
   "id": "ro",
   "name": "Română Romanian"
  },
  {
   "id": "ru",
   "name": "Русский Russian"
  },
  {
   "id": "fr",
   "name": "Français French"
  },
  {
   "id": "hi",
   "name": "हिन्दी Hindi"
  },
  {
   "id": "es",
   "name": "Español Spanish"
  }
 ],
 "sets": [
  {
   "id": "kin1",
   "area": "kin",
   "title": "Motion & its language",
   "focus": "The words that describe movement: how far, how fast, which way.",
   "words": [
    {
     "w": "velocity",
     "meaning": "How fast something moves AND the direction it moves in.",
     "example": "The car's velocity was 20 m/s heading north.",
     "parts": [
      {
       "surface": "veloc",
       "type": "root",
       "meaning": "speed",
       "tr": {
        "am": "ፍጥነት",
        "ar": "سرعة",
        "es": "velocidad",
        "fa": "سرعت",
        "fr": "vitesse",
        "hi": "गति",
        "ja": "速度",
        "ko": "속도",
        "ml": "വേഗത",
        "ps": "سرعت",
        "ro": "viteză",
        "ru": "скорость",
        "ta": "வேகம்",
        "tl": "bilis",
        "ur": "رفتار",
        "vi": "vận tốc",
        "zh-Hans": "速度",
        "zh-Hant": "速度"
       }
      },
      {
       "surface": "ity",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "स्थिति",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態",
        "other": "حالت"
       }
      }
     ],
     "tr": {
      "am": "አቅጣጫ ያለው ፍጥነት",
      "ar": "السرعة المتجهة",
      "es": "velocidad",
      "fa": "سرعت",
      "fr": "vitesse",
      "hi": "वेग",
      "ja": "速度",
      "ko": "속도",
      "ml": "പ്രവേഗം",
      "ps": "سمتي سرعت",
      "ro": "viteză",
      "ru": "скорость",
      "ta": "திசைவேகம்",
      "tl": "belocidad",
      "ur": "سمتی رفتار",
      "vi": "vận tốc",
      "zh-Hans": "速度",
      "zh-Hant": "速度"
     },
     "note": "Latin <i>velox</i> (swift) gives <i>veloc</i> (speed) + <i>-ity</i> (state of): the state of being fast. Same <i>veloc</i> in <b>velodrome</b>, the fast cycling track. In physics velocity is a <b>vector</b> — it needs a direction — while speed is just the number.",
     "apply": [
      {
       "id": "kin1_vel_calc",
       "type": "scenario",
       "q": "Hiro walks 100 m north along the platform in 50 seconds. What is his velocity?",
       "a": "2 m/s north",
       "opts": [
        "50 m/s north",
        "2 m/s north",
        "0.5 m/s north",
        "2 m/s"
       ],
       "explain": "100 ÷ 50 = 2 m/s, and we must say the direction. Velocity = speed <b>plus</b> direction."
      },
      {
       "id": "kin1_vel_desc",
       "type": "desc",
       "q": "Which word tells you BOTH how fast something moves and which way it is going?",
       "a": "Velocity",
       "opts": [
        "Velocity",
        "Speed",
        "Distance",
        "Time"
       ],
       "explain": "<i>veloc</i> (speed) + <i>-ity</i> (state of). Without a direction it is only a speed."
      },
      {
       "id": "kin1_vel_cloze",
       "type": "cloze",
       "before": "The app said the tram was moving at 25 km/h north. Because it gives the direction as well as the number, 25 km/h north is a",
       "after": "and not just a speed.",
       "a": "velocity",
       "opts": [
        "distance",
        "gradient",
        "velocity",
        "force"
       ],
       "explain": "Number + direction = velocity. Drop the word north and you are left with a speed."
      }
     ]
    },
    {
     "w": "speed",
     "meaning": "How fast something moves, without saying the direction.",
     "example": "Her running speed was 5 metres per second.",
     "parts": [
      {
       "surface": "speed",
       "type": "root",
       "meaning": "speed",
       "tr": {
        "am": "ፍጥነት",
        "ar": "سرعة",
        "es": "velocidad",
        "fa": "سرعت",
        "fr": "vitesse",
        "hi": "गति",
        "ja": "速度",
        "ko": "속도",
        "ml": "വേഗത",
        "ps": "سرعت",
        "ro": "viteză",
        "ru": "скорость",
        "ta": "வேகம்",
        "tl": "bilis",
        "ur": "رفتار",
        "vi": "tốc độ",
        "zh-Hans": "速度",
        "zh-Hant": "速度"
       }
      }
     ],
     "tr": {
      "am": "ፍጥነት",
      "ar": "السرعة",
      "es": "rapidez",
      "fa": "تندی",
      "fr": "vitesse",
      "hi": "चाल",
      "ja": "速さ",
      "ko": "속력",
      "ml": "വേഗത",
      "ps": "تېزي",
      "ro": "viteză",
      "ru": "скорость",
      "ta": "வேகம்",
      "tl": "bilis",
      "ur": "رفتار",
      "vi": "tốc độ",
      "zh-Hans": "速率",
      "zh-Hant": "速率"
     },
     "note": "<b>Speed</b> has no Latin pieces to cut: it comes from Old English <i>spēd</i>, which meant success or quickness — the same word hiding inside the old greeting <b>Godspeed</b>. In physics, speed = distance ÷ time and it has no direction, so it is a <b>scalar</b>.",
     "apply": [
      {
       "id": "kin1_speed_calc",
       "type": "scenario",
       "q": "Layla runs one lap of the 400 m oval in 80 seconds. What is her average speed?",
       "a": "5 m/s",
       "opts": [
        "0.2 m/s",
        "5 m/s",
        "320 m/s",
        "5 m/s north"
       ],
       "explain": "400 ÷ 80 = 5 m/s. Speed never carries a direction, so <b>5 m/s north</b> would be a velocity."
      },
      {
       "id": "kin1_speed_desc",
       "type": "desc",
       "q": "Which quantity says how fast something moves but says nothing about which way?",
       "a": "Speed",
       "opts": [
        "Velocity",
        "Displacement",
        "Speed",
        "Acceleration"
       ],
       "explain": "Speed = distance ÷ time. Add a direction and it becomes velocity."
      }
     ]
    },
    {
     "w": "distance",
     "meaning": "The total length of the path something travels.",
     "example": "The distance around the oval is 400 metres.",
     "parts": [
      {
       "surface": "di",
       "type": "prefix",
       "meaning": "apart",
       "tr": {
        "fa": "جدا/نفی",
        "am": "መለያየት/አይ",
        "ar": "غير",
        "es": "aparte/no",
        "fr": "séparé/non",
        "hi": "अलग/नहीं",
        "ja": "分離",
        "ko": "분리/부정",
        "ml": "വേർപെട്ട്/അല്ല",
        "ps": "بېل",
        "ro": "des",
        "ru": "раздельно/не",
        "ta": "பிரி/இல்லை",
        "tl": "hiwalay/hindi",
        "ur": "الگ/نہیں",
        "vi": "tách/không",
        "zh-Hans": "分开",
        "zh-Hant": "分開",
        "other": "دو"
       }
      },
      {
       "surface": "st",
       "type": "root",
       "meaning": "stand",
       "tr": {
        "ja": "立つ",
        "am": "መቆም",
        "ar": "وقوف",
        "es": "estar de pie",
        "fa": "ایستادن",
        "fr": "se tenir",
        "hi": "खड़ा होना",
        "ko": "서다",
        "ml": "നിൽക്കുക",
        "ps": "ودریدل",
        "ro": "a sta",
        "ru": "стоять",
        "ta": "நிற்றல்",
        "tl": "tumayo",
        "ur": "کھڑا ہونا",
        "vi": "đứng",
        "zh-Hans": "站立",
        "zh-Hant": "站立"
       }
      },
      {
       "surface": "ance",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      }
     ],
     "tr": {
      "am": "ርቀት",
      "ar": "المسافة",
      "es": "distancia",
      "fa": "مسافت",
      "fr": "distance",
      "hi": "दूरी",
      "ja": "道のり",
      "ko": "이동 거리",
      "ml": "ദൂരം",
      "ps": "واټن",
      "ro": "distanță",
      "ru": "расстояние",
      "ta": "தூரம்",
      "tl": "distansya",
      "ur": "فاصلہ",
      "vi": "quãng đường",
      "zh-Hans": "路程",
      "zh-Hant": "路程"
     },
     "note": "Latin <i>dis-</i> (apart) + <i>stare/st</i> (to stand) + <i>-ance</i> (state of): how far two things <b>stand apart</b>. Same <i>st</i> (stand) in <b>stable</b> and <b>station</b> (a standing place). Exam tip: distance counts every metre of the path you walked; displacement only counts start to finish.",
     "apply": [
      {
       "id": "kin1_dist_scn",
       "type": "scenario",
       "q": "Tom rides 3 km to the shops and then rides the same 3 km home. What distance did he ride?",
       "a": "6 km",
       "opts": [
        "6 km",
        "0 km",
        "3 km",
        "6 km east"
       ],
       "explain": "Distance adds up the whole path: 3 + 3 = 6 km. His <b>displacement</b> is 0 km, because he finished where he started."
      },
      {
       "id": "kin1_dist_cloze",
       "type": "cloze",
       "before": "One lap of the oval is 400 m, so after two full laps Amara's total",
       "after": "was 800 m.",
       "a": "distance",
       "opts": [
        "displacement",
        "velocity",
        "distance",
        "gradient"
       ],
       "explain": "Every metre of the path counts: 2 × 400 = 800 m. Her displacement after two laps is 0 m."
      }
     ]
    },
    {
     "w": "displacement",
     "meaning": "The straight-line distance and direction from the start point to the end point.",
     "example": "My displacement from the door is 2 metres.",
     "parts": [
      {
       "surface": "dis",
       "type": "prefix",
       "meaning": "apart, away",
       "tr": {
        "am": "ተለያይቶ፣ ራቅ ብሎ",
        "ar": "بعيدًا، منفصل",
        "es": "aparte/lejos",
        "fa": "جدا، دور",
        "fr": "séparé, loin",
        "hi": "अलग, दूर",
        "ja": "離れて",
        "ko": "떨어져, 분리",
        "ml": "അകലെ, വേർപെട്ട്",
        "ps": "بېل، لرې",
        "ro": "separat, departe",
        "ru": "врозь, прочь",
        "ta": "விலகி, தொலைவில்",
        "tl": "hiwalay, malayo",
        "ur": "الگ، دور",
        "vi": "tách rời, xa",
        "zh-Hans": "分开，离开",
        "zh-Hant": "分開，離開",
        "other": "دو"
       }
      },
      {
       "surface": "place",
       "type": "root",
       "meaning": "location",
       "tr": {
        "am": "ቦታ",
        "ar": "مكان",
        "es": "ubicación",
        "fa": "مکان",
        "fr": "lieu",
        "hi": "स्थान",
        "ja": "場所",
        "ko": "장소",
        "ml": "സ്ഥലം",
        "ps": "ځای",
        "ro": "loc",
        "ru": "место",
        "ta": "இடம்",
        "tl": "lugar",
        "ur": "جگہ",
        "vi": "địa điểm",
        "zh-Hans": "地点",
        "zh-Hant": "地點"
       }
      },
      {
       "surface": "ment",
       "type": "suffix",
       "meaning": "result of (noun)",
       "tr": {
        "am": "ውጤት",
        "ar": "نتيجة",
        "es": "resultado de",
        "fa": "نتیجه",
        "fr": "résultat de",
        "hi": "परिणाम",
        "ja": "結果",
        "ko": "결과",
        "ml": "ഫലം",
        "ps": "پایله",
        "ro": "rezultatul",
        "ru": "результат",
        "ta": "விளைவு",
        "tl": "resulta",
        "ur": "نتیجہ",
        "vi": "kết quả",
        "zh-Hans": "结果",
        "zh-Hant": "結果"
       }
      }
     ],
     "tr": {
      "zh-Hans": "位移",
      "zh-Hant": "位移",
      "ja": "変位 (へんい)",
      "ko": "변위",
      "vi": "độ dời",
      "ar": "الإزاحة",
      "am": "መፈናቀል",
      "es": "desplazamiento",
      "fa": "جابجایی",
      "fr": "déplacement",
      "hi": "विस्थापन",
      "ml": "സ്ഥാനാന്തരം",
      "ps": "ځای‌بدلون",
      "ro": "deplasare",
      "ru": "перемещение",
      "ta": "இடப்பெயர்ச்சி",
      "tl": "paglilipat",
      "ur": "نقل مکانی"
     },
     "note": "Latin <i>dis-</i> (apart, away) + <i>place</i> (location) + <i>-ment</i> (the result of): the result of being moved <b>away</b> from your starting place. Same <i>place</i> in <b>replace</b> (put back in position). In physics displacement is a <b>vector</b>: it has size AND direction, while distance only has size.",
     "apply": [
      {
       "id": "kin1_disp_scn",
       "type": "scenario",
       "q": "Mai walks 8 m to the canteen window, then walks 3 m back towards the door. What is her displacement?",
       "a": "5 m towards the canteen",
       "opts": [
        "11 m",
        "5 m towards the canteen",
        "3 m back",
        "5 m"
       ],
       "explain": "Start to finish in a straight line, with direction: 8 − 3 = 5 m towards the canteen. Her <b>distance</b> was 11 m."
      },
      {
       "id": "kin1_disp_desc",
       "type": "desc",
       "q": "Which word means the straight line from the start point to the end point, including the direction?",
       "a": "Displacement",
       "opts": [
        "Distance",
        "Speed",
        "Displacement",
        "Time"
       ],
       "explain": "<i>dis-</i> (away) + <i>place</i> + <i>-ment</i>: how far your position has moved away from the start."
      },
      {
       "id": "kin1_disp_cloze",
       "type": "cloze",
       "before": "Hiro rides one full lap of the 250 m velodrome and stops exactly where he began. His distance was 250 m, but his",
       "after": "was 0 m.",
       "a": "displacement",
       "opts": [
        "displacement",
        "distance",
        "speed",
        "position"
       ],
       "explain": "He finished at his starting place, so he has moved <b>apart</b> from the start by nothing."
      }
     ]
    },
    {
     "w": "time",
     "meaning": "How long something takes, measured in seconds, minutes or hours.",
     "example": "The trip took a time of 3 hours.",
     "parts": [
      {
       "surface": "time",
       "type": "root",
       "meaning": "time",
       "tr": {
        "am": "ጊዜ",
        "ar": "وقت",
        "es": "tiempo",
        "fa": "زمان",
        "fr": "temps",
        "hi": "समय",
        "ja": "時間",
        "ko": "시간",
        "ml": "സമയം",
        "ps": "وخت",
        "ro": "timp",
        "ru": "время",
        "ta": "நேரம்",
        "tl": "oras",
        "ur": "وقت",
        "vi": "thời gian",
        "zh-Hans": "时间",
        "zh-Hant": "時間"
       }
      }
     ],
     "tr": {
      "am": "ጊዜ",
      "ar": "الزمن",
      "es": "tiempo",
      "fa": "زمان",
      "fr": "temps",
      "hi": "समय",
      "ja": "時間",
      "ko": "시간",
      "ml": "സമയം",
      "ps": "وخت",
      "ro": "timp",
      "ru": "время",
      "ta": "நேரம்",
      "tl": "oras",
      "ur": "وقت",
      "vi": "thời gian",
      "zh-Hans": "时间",
      "zh-Hant": "時間"
     },
     "note": "<b>Time</b> is one of the oldest words in English (Old English <i>tīma</i>) and has no Latin parts to cut. It is related to <b>tide</b>, which once meant a period of time — as in <b>Yuletide</b>. In physics its symbol is <i>t</i>, its unit is the second (s), and it always goes on the <b>horizontal</b> axis of a motion graph.",
     "apply": [
      {
       "id": "kin1_time_calc",
       "type": "scenario",
       "q": "A train covers 90 km at an average speed of 45 km/h. How much time does the trip take?",
       "a": "2 hours",
       "opts": [
        "0.5 hours",
        "45 minutes",
        "2 hours",
        "135 hours"
       ],
       "explain": "Time = distance ÷ speed = 90 ÷ 45 = 2 hours."
      },
      {
       "id": "kin1_time_cloze",
       "type": "cloze",
       "before": "On a distance-time graph we always put",
       "after": "on the horizontal axis and distance on the vertical axis.",
       "a": "time",
       "opts": [
        "velocity",
        "time",
        "gradient",
        "force"
       ],
       "explain": "Time is the input variable, so it goes across the bottom. That is why the graph is called <b>distance-time</b>."
      }
     ]
    },
    {
     "w": "acceleration",
     "meaning": "How quickly velocity increases (speeding up).",
     "example": "The rocket's acceleration pushed us back into our seats.",
     "parts": [
      {
       "surface": "ac",
       "type": "prefix",
       "meaning": "to, toward",
       "tr": {
        "am": "ወደ",
        "ar": "نحو",
        "es": "a/hacia",
        "fa": "به سمت",
        "fr": "vers",
        "hi": "की ओर",
        "ja": "向かって",
        "ko": "향하여",
        "ml": "ലേക്ക്",
        "ps": "خواته",
        "ro": "spre",
        "ru": "к",
        "ta": "நோக்கி",
        "tl": "tungo sa",
        "ur": "کی طرف",
        "vi": "hướng tới",
        "zh-Hans": "向",
        "zh-Hant": "向",
        "other": "به"
       }
      },
      {
       "surface": "celer",
       "type": "root",
       "meaning": "fast",
       "tr": {
        "am": "ፈጣን",
        "ar": "سريع",
        "es": "rápido",
        "fa": "سریع",
        "fr": "rapide",
        "hi": "तेज़",
        "ja": "速い",
        "ko": "빠른",
        "ml": "വേഗമുള്ള",
        "ps": "تېز",
        "ro": "rapid",
        "ru": "быстрый",
        "ta": "வேகமான",
        "tl": "mabilis",
        "ur": "تیز",
        "vi": "nhanh",
        "zh-Hans": "快",
        "zh-Hant": "快"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "act of (noun)",
       "tr": {
        "am": "ተግባር",
        "ar": "فعل",
        "es": "acción de",
        "fa": "عمل",
        "fr": "action de",
        "hi": "क्रिया",
        "ja": "行為",
        "ko": "행위",
        "ml": "പ്രവൃത്തി",
        "ps": "عمل",
        "ro": "acțiune de",
        "ru": "действие",
        "ta": "செயல்",
        "tl": "kilos",
        "ur": "عمل",
        "vi": "hành động",
        "zh-Hans": "行为",
        "zh-Hant": "行為"
       }
      }
     ],
     "tr": {
      "am": "ማፋጠን",
      "ar": "التسارع",
      "es": "aceleración",
      "fa": "شتاب",
      "fr": "accélération",
      "hi": "त्वरण",
      "ja": "加速度",
      "ko": "가속도",
      "ml": "ത്വരണം",
      "ps": "تعجیل",
      "ro": "accelerație",
      "ru": "ускорение",
      "ta": "முடுக்கம்",
      "tl": "akselerasyon",
      "ur": "اسراع",
      "vi": "gia tốc",
      "zh-Hans": "加速度",
      "zh-Hant": "加速度"
     },
     "note": "Latin <i>ad/ac-</i> (towards) + <i>celer</i> (fast) + <i>-ation</i> (the act of): the act of moving towards being fast. Same <i>celer</i> in the car's <b>accelerator</b>. Physics tip: acceleration = change in velocity ÷ time, so its unit is <b>m/s²</b> — metres per second, per second.",
     "apply": [
      {
       "id": "kin1_acc_calc",
       "type": "scenario",
       "q": "A tram speeds up from 0 m/s to 12 m/s in 6 seconds. What is its acceleration?",
       "a": "2 m/s²",
       "opts": [
        "6 m/s²",
        "72 m/s²",
        "2 m/s²",
        "0.5 m/s²"
       ],
       "explain": "Change in velocity ÷ time = (12 − 0) ÷ 6 = 2 m/s². Every second it gains 2 m/s."
      },
      {
       "id": "kin1_acc_desc",
       "type": "desc",
       "q": "Which word names how quickly an object's velocity increases?",
       "a": "Acceleration",
       "opts": [
        "Acceleration",
        "Deceleration",
        "Displacement",
        "Distance"
       ],
       "explain": "<i>ac-</i> (towards) + <i>celer</i> (fast): heading towards being faster."
      },
      {
       "id": "kin1_acc_cloze",
       "type": "cloze",
       "before": "On a velocity-time graph, a line that slopes upward shows",
       "after": "because the object gains speed every second.",
       "a": "acceleration",
       "opts": [
        "rest",
        "acceleration",
        "deceleration",
        "displacement"
       ],
       "explain": "Velocity rising as time passes is acceleration. A line sloping <b>down</b> would show deceleration."
      }
     ]
    },
    {
     "w": "deceleration",
     "meaning": "How quickly velocity decreases (slowing down).",
     "example": "Braking caused a sharp deceleration.",
     "parts": [
      {
       "surface": "de",
       "type": "prefix",
       "meaning": "down, reverse",
       "tr": {
        "am": "ወደ ታች፣ ተቃራኒ",
        "ar": "للأسفل، عكس",
        "es": "hacia abajo/inverso",
        "fa": "پایین، برعکس",
        "fr": "vers le bas, inverse",
        "hi": "नीचे, विपरीत",
        "ja": "下へ、逆に",
        "ko": "아래로, 반대로",
        "ml": "താഴേക്ക്, വിപരീതം",
        "ps": "ښکته، برعکس",
        "ro": "în jos, invers",
        "ru": "вниз, обратно",
        "ta": "கீழே, தலைகீழ்",
        "tl": "pababa, kabaligtaran",
        "ur": "نیچے، الٹا",
        "vi": "xuống, ngược lại",
        "zh-Hans": "向下，相反",
        "zh-Hant": "向下，相反"
       }
      },
      {
       "surface": "celer",
       "type": "root",
       "meaning": "fast",
       "tr": {
        "am": "ፈጣን",
        "ar": "سريع",
        "es": "rápido",
        "fa": "سریع",
        "fr": "rapide",
        "hi": "तेज़",
        "ja": "速い",
        "ko": "빠른",
        "ml": "വേഗമുള്ള",
        "ps": "تېز",
        "ro": "rapid",
        "ru": "быстрый",
        "ta": "வேகமான",
        "tl": "mabilis",
        "ur": "تیز",
        "vi": "nhanh",
        "zh-Hans": "快",
        "zh-Hant": "快"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "act of (noun)",
       "tr": {
        "am": "ተግባር",
        "ar": "فعل",
        "es": "acción de",
        "fa": "عمل",
        "fr": "action de",
        "hi": "क्रिया",
        "ja": "行為",
        "ko": "행위",
        "ml": "പ്രവൃത്തി",
        "ps": "عمل",
        "ro": "acțiune de",
        "ru": "действие",
        "ta": "செயல்",
        "tl": "kilos",
        "ur": "عمل",
        "vi": "hành động",
        "zh-Hans": "行为",
        "zh-Hant": "行為"
       }
      }
     ],
     "tr": {
      "am": "ፍጥነት መቀነስ",
      "ar": "التباطؤ",
      "es": "desaceleración",
      "fa": "شتاب منفی",
      "fr": "décélération",
      "hi": "मंदन",
      "ja": "減速度",
      "ko": "감속도",
      "ml": "പ്രതിത്വരണം",
      "ps": "منفي شتاب",
      "ro": "decelerație",
      "ru": "замедление",
      "ta": "முடுக்கக் குறைவு",
      "tl": "deselerasyon",
      "ur": "منفی اسراع",
      "vi": "sự giảm tốc",
      "zh-Hans": "减速度",
      "zh-Hant": "減速度"
     },
     "note": "Same <i>celer</i> (fast) as in acceleration, but Latin <i>de-</i> (down, reverse) turns it around: going <b>down</b> from fast. Same <i>de-</i> in <b>decrease</b> and <b>descend</b>. Physics tip: deceleration is simply negative acceleration — a slowing tram can be written as an acceleration of −2 m/s².",
     "apply": [
      {
       "id": "kin1_dec_calc",
       "type": "scenario",
       "q": "A cyclist slows from 8 m/s to 2 m/s in 3 seconds. How big is her deceleration?",
       "a": "2 m/s²",
       "opts": [
        "6 m/s²",
        "3 m/s²",
        "10 m/s²",
        "2 m/s²"
       ],
       "explain": "(8 − 2) ÷ 3 = 2 m/s². As an acceleration you would write it as −2 m/s²."
      },
      {
       "id": "kin1_dec_cloze",
       "type": "cloze",
       "before": "The train began braking well before the station, so the last part of its velocity-time graph shows",
       "after": "down to 0 m/s.",
       "a": "deceleration",
       "opts": [
        "acceleration",
        "displacement",
        "deceleration",
        "correlation"
       ],
       "explain": "<i>de-</i> (down) + <i>celer</i> (fast): the velocity comes down towards zero."
      }
     ]
    },
    {
     "w": "position",
     "meaning": "Where something is located compared to a fixed point.",
     "example": "Her position is 5 metres from the wall.",
     "parts": [
      {
       "surface": "posit",
       "type": "root",
       "meaning": "place",
       "tr": {
        "fa": "قرار دادن",
        "am": "ማስቀመጥ",
        "ar": "يضع",
        "es": "colocar",
        "fr": "placer",
        "hi": "रखना",
        "ja": "置く",
        "ko": "놓다",
        "ml": "വയ്ക്കുക",
        "ps": "ایښودل",
        "ro": "a pune",
        "ru": "помещать",
        "ta": "வைத்தல்",
        "tl": "maglagay",
        "ur": "رکھنا",
        "vi": "đặt",
        "zh-Hans": "放置",
        "zh-Hant": "放置",
        "other": "قرار دادن"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "ቦታ",
      "ar": "الموقع",
      "es": "posición",
      "fa": "موقعیت",
      "fr": "position",
      "hi": "स्थिति",
      "ja": "位置",
      "ko": "위치",
      "ml": "സ്ഥാനം",
      "ps": "ځای",
      "ro": "poziție",
      "ru": "положение",
      "ta": "நிலை",
      "tl": "posisyon",
      "ur": "مقام",
      "vi": "vị trí",
      "zh-Hans": "位置",
      "zh-Hant": "位置"
     },
     "note": "Latin <i>ponere/posit</i> (to place) + <i>-ion</i> (act of): where a thing has been placed. Same <i>posit</i> in <b>deposit</b> (place money down) and <b>positive</b>. Physics tip: on a <b>position-time graph</b> the gradient gives you the velocity.",
     "apply": [
      {
       "id": "kin1_pos_desc",
       "type": "desc",
       "q": "A marker is set down on the track. Mai stands 3 m right of it, Tom stands 2 m left of it. Which word describes where each student is compared with the marker?",
       "a": "Position",
       "opts": [
        "Distance",
        "Position",
        "Speed",
        "Acceleration"
       ],
       "explain": "Position is always measured from a fixed point — here, the marker."
      },
      {
       "id": "kin1_pos_cloze",
       "type": "cloze",
       "before": "At 3 pm the bus was 500 m north of the school, and that measurement gives its",
       "after": "at that moment.",
       "a": "position",
       "opts": [
        "position",
        "force",
        "ratio",
        "domain"
       ],
       "explain": "<i>posit</i> = place: where the bus is placed compared with the school."
      }
     ]
    },
    {
     "w": "direction",
     "meaning": "The line or course along which something moves (e.g. north, left).",
     "example": "The wind changed direction suddenly.",
     "parts": [
      {
       "surface": "di",
       "type": "prefix",
       "meaning": "apart",
       "tr": {
        "fa": "جدا/نفی",
        "am": "መለያየት/አይ",
        "ar": "غير",
        "es": "aparte/no",
        "fr": "séparé/non",
        "hi": "अलग/नहीं",
        "ja": "分離",
        "ko": "분리/부정",
        "ml": "വേർപെട്ട്/അല്ല",
        "ps": "بېل",
        "ro": "des",
        "ru": "раздельно/не",
        "ta": "பிரி/இல்லை",
        "tl": "hiwalay/hindi",
        "ur": "الگ/نہیں",
        "vi": "tách/không",
        "zh-Hans": "分开",
        "zh-Hant": "分開",
        "other": "دو"
       }
      },
      {
       "surface": "rect",
       "type": "root",
       "meaning": "straight/guide",
       "tr": {
        "am": "ቀጥተኛ፣ መምራት",
        "ar": "مستقيم، توجيه",
        "es": "recto / guiar",
        "fa": "مستقیم، راهنما",
        "fr": "droit, guider",
        "hi": "सीधा, मार्गदर्शन",
        "ja": "まっすぐ、導く",
        "ko": "곧은, 안내하다",
        "ml": "നേരായ, വഴികാട്ടുക",
        "ps": "سیده، لارښوونه",
        "ro": "drept, a ghida",
        "ru": "прямой, направлять",
        "ta": "நேரான, வழிநடத்துதல்",
        "tl": "tuwid, gabayan",
        "ur": "سیدھا، رہنمائی",
        "vi": "thẳng, hướng dẫn",
        "zh-Hans": "直，引导",
        "zh-Hant": "直，引導"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "አቅጣጫ",
      "ar": "الاتجاه",
      "es": "dirección",
      "fa": "جهت",
      "fr": "direction",
      "hi": "दिशा",
      "ja": "方向",
      "ko": "방향",
      "ml": "ദിശ",
      "ps": "لوری",
      "ro": "direcție",
      "ru": "направление",
      "ta": "திசை",
      "tl": "direksyon",
      "ur": "سمت",
      "vi": "hướng",
      "zh-Hans": "方向",
      "zh-Hant": "方向"
     },
     "note": "Latin <i>di-</i> (apart) + <i>rect</i> (straight, to guide) + <i>-ion</i> (process): guiding something along a straight line. Same <i>rect</i> in <b>correct</b> (make straight) and <b>rectangle</b>. Exam tip: direction is exactly what turns speed into <b>velocity</b> and distance into <b>displacement</b>.",
     "apply": [
      {
       "id": "kin1_dir_desc",
       "type": "desc",
       "q": "Adding this to a speed turns it into a velocity. What is it?",
       "a": "Direction",
       "opts": [
        "Time",
        "Distance",
        "Direction",
        "Force"
       ],
       "explain": "Speed + direction = velocity. Distance + direction = displacement."
      },
      {
       "id": "kin1_dir_cloze",
       "type": "cloze",
       "before": "The report said the tram was doing 30 km/h. When it added the",
       "after": "— north — the number became a velocity.",
       "a": "direction",
       "opts": [
        "direction",
        "position",
        "gradient",
        "ratio"
       ],
       "explain": "<i>di-</i> + <i>rect</i> (straight): the line along which the tram is guided."
      }
     ]
    },
    {
     "w": "motion",
     "meaning": "The state of moving; a change of position over time.",
     "example": "The ball was in constant motion.",
     "parts": [
      {
       "surface": "mot",
       "type": "root",
       "meaning": "move",
       "tr": {
        "am": "መንቀሳቀስ",
        "ar": "يتحرك",
        "es": "movimiento",
        "fa": "حرکت",
        "fr": "mouvement",
        "hi": "संचलन",
        "ja": "動き",
        "ko": "움직임",
        "ml": "ചലിക്കുക",
        "ps": "حرکت",
        "ro": "mișcare",
        "ru": "движение",
        "ta": "இயக்கம்",
        "tl": "galaw",
        "ur": "حرکت",
        "vi": "chuyển động",
        "zh-Hans": "运动",
        "zh-Hant": "運動"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act, result (noun)",
       "tr": {
        "am": "ተግባር፣ ውጤት",
        "ar": "فعل، نتيجة",
        "es": "acción/resultado",
        "fa": "عمل، نتیجه",
        "fr": "action, résultat",
        "hi": "क्रिया, परिणाम",
        "ja": "行為・結果",
        "ko": "행위·결과",
        "ml": "പ്രവൃത്തി, ഫലം",
        "ps": "عمل، پایله",
        "ro": "acțiune, rezultat",
        "ru": "действие, результат",
        "ta": "செயல், விளைவு",
        "tl": "kilos, resulta",
        "ur": "عمل، نتیجہ",
        "vi": "hành động, kết quả",
        "zh-Hans": "行为、结果",
        "zh-Hant": "行為、結果"
       }
      }
     ],
     "tr": {
      "am": "እንቅስቃሴ",
      "ar": "الحركة",
      "es": "movimiento",
      "fa": "حرکت",
      "fr": "mouvement",
      "hi": "गति",
      "ja": "運動",
      "ko": "운동",
      "ml": "ചലനം",
      "ps": "حرکت",
      "ro": "mișcare",
      "ru": "движение",
      "ta": "இயக்கம்",
      "tl": "paggalaw",
      "ur": "حرکت",
      "vi": "chuyển động",
      "zh-Hans": "运动",
      "zh-Hant": "運動"
     },
     "note": "Latin <i>movere/mot</i> (to move) + <i>-ion</i> (act, result): the act of moving. Same <i>mot</i> in <b>motor</b>, <b>remote</b> (moved far back) and <b>motion picture</b>. The whole topic name <b>kinematics</b> means the study of motion.",
     "apply": [
      {
       "id": "kin1_mot_desc",
       "type": "desc",
       "q": "Which word means the state of moving — a change of position over time?",
       "a": "Motion",
       "opts": [
        "Rest",
        "Motion",
        "Force",
        "Ratio"
       ],
       "explain": "<i>mot</i> = move. Its opposite in physics is <b>rest</b>, which means not moving at all."
      },
      {
       "id": "kin1_mot_cloze",
       "type": "cloze",
       "before": "The soccer ball sitting still on the oval is not in",
       "after": "until someone kicks it.",
       "a": "motion",
       "opts": [
        "position",
        "direction",
        "motion",
        "data"
       ],
       "explain": "Before the kick the ball is at rest; after it, its position changes with time, so it is in motion."
      }
     ]
    }
   ]
  },
  {
   "id": "kin2",
   "area": "kin",
   "title": "Graphs & lines",
   "focus": "The words for straight-line graphs and the motion they show.",
   "words": [
    {
     "w": "gradient",
     "meaning": "How steep a line is; the slope of a graph.",
     "example": "A steep gradient means the object is speeding up quickly.",
     "parts": [
      {
       "surface": "grad",
       "type": "root",
       "meaning": "step",
       "tr": {
        "am": "ደረጃ",
        "ar": "خطوة",
        "es": "paso",
        "fa": "گام",
        "fr": "pas",
        "hi": "कदम",
        "ja": "段階",
        "ko": "단계",
        "ml": "പടി",
        "ps": "ګام",
        "ro": "pas",
        "ru": "шаг",
        "ta": "படி",
        "tl": "hakbang",
        "ur": "قدم",
        "vi": "bước",
        "zh-Hans": "步",
        "zh-Hant": "步"
       }
      },
      {
       "surface": "ient",
       "type": "suffix",
       "meaning": "doing (noun/adj)",
       "tr": {
        "am": "የሚያደርግ",
        "ar": "فاعل",
        "es": "que hace",
        "fa": "انجام‌دهنده",
        "fr": "faisant",
        "hi": "करने वाला",
        "ja": "～するもの",
        "ko": "~하는 것",
        "ml": "ചെയ്യുന്ന",
        "ps": "کوونکی",
        "ro": "care face",
        "ru": "делающий",
        "ta": "செய்பவர்",
        "tl": "gumagawa",
        "ur": "کرنے والا",
        "vi": "đang làm",
        "zh-Hans": "…的 / …者",
        "zh-Hant": "…的 / …者"
       }
      }
     ],
     "tr": {
      "am": "ቁልቁለት",
      "ar": "الميل",
      "es": "pendiente",
      "fa": "شیب",
      "fr": "pente",
      "hi": "ढाल",
      "ja": "傾き",
      "ko": "기울기",
      "ml": "ചരിവ്",
      "ps": "مايل",
      "ro": "pantă",
      "ru": "наклон",
      "ta": "சாய்வு",
      "tl": "dahilis",
      "ur": "ڈھلان",
      "vi": "độ dốc",
      "zh-Hans": "斜率",
      "zh-Hant": "斜率"
     },
     "note": "Latin <i>gradus</i> (a step) gives <i>grad</i> + <i>-ient</i>: how big a step up the line takes. Same <i>grad</i> in <b>gradual</b> (step by step) and <b>graduate</b>. Exam tip: gradient = rise ÷ run, and on a <b>position-time graph</b> the gradient is the velocity.",
     "apply": [
      {
       "id": "kin2_grad_calc",
       "type": "scenario",
       "q": "A straight line passes through (1, 2) and (4, 11). What is its gradient?",
       "a": "3",
       "opts": [
        "9",
        "3",
        "1/3",
        "−3"
       ],
       "explain": "Rise ÷ run = (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = <b>3</b>."
      },
      {
       "id": "kin2_grad_scn",
       "type": "scenario",
       "q": "On a position-time graph a straight line rises 20 m over 5 seconds. What does its gradient tell you?",
       "a": "The velocity is 4 m/s",
       "opts": [
        "The velocity is 4 m/s",
        "The distance is 4 m",
        "The acceleration is 4 m/s²",
        "The time is 4 s"
       ],
       "explain": "Gradient = rise ÷ run = 20 m ÷ 5 s = 4 m/s. On a position-time graph, gradient <b>is</b> velocity."
      },
      {
       "id": "kin2_grad_cloze",
       "type": "cloze",
       "before": "Over the same run, line A rises 6 units while line B rises only 2, so line A has the bigger",
       "after": "and looks steeper.",
       "a": "gradient",
       "opts": [
        "intercept",
        "domain",
        "gradient",
        "ratio"
       ],
       "explain": "A bigger step up for the same step across means a steeper line — a bigger gradient."
      }
     ]
    },
    {
     "w": "intercept",
     "meaning": "The point where a line crosses an axis of a graph.",
     "example": "The y-intercept shows the starting position.",
     "parts": [
      {
       "surface": "inter",
       "type": "prefix",
       "meaning": "between",
       "tr": {
        "am": "በ…መካከል",
        "ar": "بين",
        "es": "entre",
        "fa": "بین",
        "fr": "entre",
        "hi": "के बीच",
        "ja": "間",
        "ko": "사이",
        "ml": "ഇടയിൽ",
        "ps": "تر منځ",
        "ro": "între",
        "ru": "между",
        "ta": "இடையில்",
        "tl": "pagitan",
        "ur": "درمیان",
        "vi": "giữa",
        "zh-Hans": "之间",
        "zh-Hant": "之間"
       }
      },
      {
       "surface": "cept",
       "type": "root",
       "meaning": "take, hold",
       "tr": {
        "am": "መያዝ",
        "ar": "إمساك",
        "es": "tomar/sostener",
        "fa": "گرفتن",
        "fr": "prendre",
        "hi": "पकड़ना",
        "ja": "つかむ",
        "ko": "잡다",
        "ml": "പിടിക്കുക",
        "ps": "نیول",
        "ro": "a prinde",
        "ru": "хватать",
        "ta": "பிடி",
        "tl": "hawak",
        "ur": "پکڑنا",
        "vi": "cầm",
        "zh-Hans": "抓住",
        "zh-Hant": "抓住"
       }
      }
     ],
     "tr": {
      "am": "የዘንግ መገናኛ ነጥብ",
      "ar": "التقاطع مع المحور",
      "es": "intercepto",
      "fa": "نقطه تقاطع با محور",
      "fr": "point d'intersection avec l'axe",
      "hi": "अक्ष के साथ प्रतिच्छेद बिंदु",
      "ja": "切片",
      "ko": "절편",
      "ml": "അക്ഷഖണ്ഡം",
      "ps": "د محور پرې کوونکی ټکی",
      "ro": "intersecția cu axa",
      "ru": "точка пересечения с осью",
      "ta": "அச்சு வெட்டுப்புள்ளி",
      "tl": "puntong pinagsalubungan sa aksis",
      "ur": "محور کے ساتھ نقطہ تقاطع",
      "vi": "giao điểm với trục",
      "zh-Hans": "截距",
      "zh-Hant": "截距"
     },
     "note": "Latin <i>inter-</i> (between) + <i>capere/cept</i> (to catch, take): the axis <b>catches</b> the line at this point. Same <i>cept</i> in <b>accept</b> (take to yourself) and in <b>intercepting</b> a pass in football. Exam tip: the y-intercept is <i>c</i> in y = mx + c, and on a position-time graph it is the <b>starting position</b>.",
     "apply": [
      {
       "id": "kin2_int_desc",
       "type": "desc",
       "q": "Which word names the point where a line crosses an axis?",
       "a": "Intercept",
       "opts": [
        "Gradient",
        "Domain",
        "Intercept",
        "Function"
       ],
       "explain": "<i>inter-</i> (between) + <i>cept</i> (catch): the axis catches the line as it passes through."
      },
      {
       "id": "kin2_int_calc",
       "type": "scenario",
       "q": "Where does the line y = 2x − 6 cross the y-axis?",
       "a": "(0, −6)",
       "opts": [
        "(0, −6)",
        "(0, 2)",
        "(−6, 0)",
        "(3, 0)"
       ],
       "explain": "On the y-axis, x = 0, so y = 2(0) − 6 = −6. Careful: (3, 0) is the <b>x</b>-intercept."
      },
      {
       "id": "kin2_int_scn",
       "type": "scenario",
       "q": "Anh's position-time graph is a straight line that crosses the vertical axis at 10 m. What does that intercept tell you?",
       "a": "She started 10 m from the marker",
       "opts": [
        "She walked at 10 m/s",
        "She started 10 m from the marker",
        "She walked for 10 seconds",
        "She stopped after 10 m"
       ],
       "explain": "The y-intercept is the value when time = 0 — that is, where she was before she began."
      }
     ]
    },
    {
     "w": "linear",
     "meaning": "Making or relating to a straight line.",
     "example": "The graph was linear, so the speed stayed constant.",
     "parts": [
      {
       "surface": "line",
       "type": "root",
       "meaning": "line",
       "tr": {
        "am": "መስመር",
        "ar": "خط",
        "es": "línea",
        "fa": "خط",
        "fr": "ligne",
        "hi": "रेखा",
        "ja": "線",
        "ko": "선",
        "ml": "രേഖ",
        "ps": "کرښه",
        "ro": "linie",
        "ru": "линия",
        "ta": "கோடு",
        "tl": "linya",
        "ur": "لکیر",
        "vi": "đường",
        "zh-Hans": "线",
        "zh-Hant": "線"
       }
      },
      {
       "surface": "ar",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "am": "የተያያዘ",
        "ar": "متعلق بـ",
        "es": "relativo a",
        "fa": "مربوط به",
        "fr": "relatif à",
        "hi": "से संबंधित",
        "ja": "～に関する",
        "ko": "~에 관한",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்புடைய",
        "tl": "may kaugnayan sa",
        "ur": "سے متعلق",
        "vi": "liên quan",
        "zh-Hans": "与…有关的",
        "zh-Hant": "與…有關的"
       }
      }
     ],
     "tr": {
      "am": "ቀጥተኛ",
      "ar": "خطي",
      "es": "lineal",
      "fa": "خطی",
      "fr": "linéaire",
      "hi": "रैखिक",
      "ja": "線形の",
      "ko": "선형의",
      "ml": "രേഖീയ",
      "ps": "خطي",
      "ro": "liniar",
      "ru": "линейный",
      "ta": "நேரியல்",
      "tl": "tuwid",
      "ur": "خطی",
      "vi": "tuyến tính",
      "zh-Hans": "线性的",
      "zh-Hant": "線性的"
     },
     "note": "Latin <i>linea</i> (a line, first a stretched flax thread) + <i>-ar</i> (relating to): relating to a straight line. Same <i>line</i> in <b>outline</b> and <b>linen</b>, the cloth made from flax. Exam tip: a rule is linear only when x is by itself (power 1) — y = 3x + 2 is linear, y = x² is not.",
     "apply": [
      {
       "id": "kin2_lin_scn",
       "type": "scenario",
       "q": "Which rule is linear, so that its graph is a straight line?",
       "a": "y = 4x − 1",
       "opts": [
        "y = x²",
        "y = 1/x",
        "y = 4x − 1",
        "y = x² + 3"
       ],
       "explain": "Only y = 4x − 1 has x on its own. Squares and fractions of x bend the graph into a curve."
      },
      {
       "id": "kin2_lin_cloze",
       "type": "cloze",
       "before": "Every point sat exactly on one straight line, so Mai wrote that the relationship between time and distance is",
       "after": "and can be written as y = mx + c.",
       "a": "linear",
       "opts": [
        "linear",
        "piecewise",
        "negative",
        "uniform"
       ],
       "explain": "<i>line</i> + <i>-ar</i>: relating to a line. Straight graph, so the rule fits y = mx + c."
      }
     ]
    },
    {
     "w": "slope",
     "meaning": "The steepness of a line; another word for gradient.",
     "example": "The slope of the line tells you the velocity.",
     "parts": [
      {
       "surface": "slope",
       "type": "root",
       "meaning": "slope",
       "tr": {
        "am": "ቁልቁለት",
        "ar": "ميل",
        "es": "pendiente",
        "fa": "شیب",
        "fr": "pente",
        "hi": "ढलान",
        "ja": "傾き",
        "ko": "기울기",
        "ml": "ചരിവ്",
        "ps": "میلان",
        "ro": "pantă",
        "ru": "наклон",
        "ta": "சரிவு",
        "tl": "dahilig",
        "ur": "ڈھلان",
        "vi": "độ dốc",
        "zh-Hans": "斜率",
        "zh-Hant": "斜率"
       }
      }
     ],
     "tr": {
      "am": "ቁልቁለት",
      "ar": "الميل",
      "es": "pendiente",
      "fa": "شیب",
      "fr": "pente",
      "hi": "ढाल",
      "ja": "傾き",
      "ko": "기울기",
      "ml": "ചരിവ്",
      "ps": "ډډه",
      "ro": "pantă",
      "ru": "наклон",
      "ta": "சாய்வு",
      "tl": "dahilis",
      "ur": "ڈھلان",
      "vi": "độ dốc",
      "zh-Hans": "斜率",
      "zh-Hant": "斜率"
     },
     "note": "<b>Slope</b> has no Latin parts to cut. It comes from an old English verb meaning <i>to slip away</i> — a slope is a surface things slip down. Exam tip: Australian textbooks usually say <b>gradient</b>, American books say <b>slope</b>; they are the same thing, rise ÷ run.",
     "apply": [
      {
       "id": "kin2_slope_desc",
       "type": "desc",
       "q": "Your teacher says gradient; a maths website says slope. Which American word means exactly the same thing — rise divided by run?",
       "a": "Slope",
       "opts": [
        "Slope",
        "Domain",
        "Intercept",
        "Ratio"
       ],
       "explain": "Two words, one idea. Both measure how much the line steps up for each step across."
      },
      {
       "id": "kin2_slope_calc",
       "type": "scenario",
       "q": "A wheelchair ramp rises 1 m for every 8 m along the ground. What is its slope?",
       "a": "1/8",
       "opts": [
        "8",
        "1/8",
        "1",
        "9"
       ],
       "explain": "Slope = rise ÷ run = 1 ÷ 8 = <b>1/8</b>. A small slope means a gentle, safe ramp."
      }
     ]
    },
    {
     "w": "uniform",
     "meaning": "Staying the same; not changing.",
     "example": "Uniform motion means the speed never changes.",
     "parts": [
      {
       "surface": "uni",
       "type": "prefix",
       "meaning": "one",
       "tr": {
        "am": "አንድ",
        "ar": "واحد",
        "es": "uno",
        "fa": "یک",
        "fr": "un",
        "hi": "एक",
        "ja": "一",
        "ko": "하나",
        "ml": "ഒന്ന്",
        "ps": "یو",
        "ro": "unu",
        "ru": "один",
        "ta": "ஒன்று",
        "tl": "isa",
        "ur": "ایک",
        "vi": "một",
        "zh-Hans": "一",
        "zh-Hant": "一"
       }
      },
      {
       "surface": "form",
       "type": "root",
       "meaning": "shape",
       "tr": {
        "am": "ቅርጽ",
        "ar": "شكل",
        "es": "forma",
        "fa": "شکل",
        "fr": "forme",
        "hi": "आकार",
        "ja": "形",
        "ko": "모양",
        "ml": "രൂപം",
        "ps": "بڼه",
        "ro": "formă",
        "ru": "форма",
        "ta": "வடிவம்",
        "tl": "hugis",
        "ur": "شکل",
        "vi": "hình dạng",
        "zh-Hans": "形状",
        "zh-Hant": "形狀"
       }
      }
     ],
     "tr": {
      "am": "ተመሳሳይ",
      "ar": "منتظم",
      "es": "uniforme",
      "fa": "یکنواخت",
      "fr": "uniforme",
      "hi": "एकसमान",
      "ja": "等速の",
      "ko": "등속의",
      "ml": "സ്ഥിരമായ",
      "ps": "یو شان",
      "ro": "uniform",
      "ru": "равномерный",
      "ta": "சீரான",
      "tl": "pantay",
      "ur": "یکساں",
      "vi": "đều",
      "zh-Hans": "匀速的",
      "zh-Hant": "勻速的"
     },
     "note": "Latin <i>uni-</i> (one) + <i>forma</i> (shape): one shape for everyone — which is why school clothes are called a <b>uniform</b>. Same <i>uni-</i> in <b>unicycle</b> (one wheel). Physics tip: uniform motion means the velocity never changes, so the position-time graph is one straight line.",
     "apply": [
      {
       "id": "kin2_uni_scn",
       "type": "scenario",
       "q": "A tram travels at exactly 10 m/s for two minutes, never speeding up or slowing down. Its motion is described as…",
       "a": "Uniform",
       "opts": [
        "Accelerating",
        "Uniform",
        "Decelerating",
        "At rest"
       ],
       "explain": "One speed the whole time — <i>uni-</i> (one) + <i>form</i> (shape): the motion keeps one shape."
      },
      {
       "id": "kin2_uni_cloze",
       "type": "cloze",
       "before": "Everyone at school wears the same shirt: one shape, one colour. The same",
       "after": "idea in physics means the velocity never changes.",
       "a": "uniform",
       "opts": [
        "piecewise",
        "negative",
        "uniform",
        "circular"
       ],
       "explain": "<i>uni-</i> + <i>form</i> = one shape, staying the same."
      }
     ]
    },
    {
     "w": "rest",
     "meaning": "Not moving; being still.",
     "example": "The ball was at rest before I kicked it.",
     "parts": [
      {
       "surface": "rest",
       "type": "root",
       "meaning": "rest",
       "tr": {
        "am": "ዕረፍት",
        "ar": "سكون",
        "es": "reposo",
        "fa": "سکون",
        "fr": "repos",
        "hi": "विराम",
        "ja": "静止",
        "ko": "정지",
        "ml": "വിശ്രമം",
        "ps": "آرام",
        "ro": "repaus",
        "ru": "покой",
        "ta": "ஓய்வு",
        "tl": "pahinga",
        "ur": "آرام",
        "vi": "nghỉ",
        "zh-Hans": "静止",
        "zh-Hant": "靜止"
       }
      }
     ],
     "tr": {
      "am": "ዕረፍት",
      "ar": "السكون",
      "es": "reposo",
      "fa": "سکون",
      "fr": "repos",
      "hi": "विराम",
      "ja": "静止",
      "ko": "정지",
      "ml": "വിശ്രമാവസ്ഥ",
      "ps": "سکون",
      "ro": "repaus",
      "ru": "покой",
      "ta": "ஓய்வு நிலை",
      "tl": "nakatigil",
      "ur": "سکون",
      "vi": "đứng yên",
      "zh-Hans": "静止",
      "zh-Hant": "靜止"
     },
     "note": "<b>Rest</b> has no Latin cuts — it is the everyday Old English word for stopping and being still, used in physics with a very exact meaning: velocity = 0. Physics tip: on a position-time graph, a <b>flat horizontal line</b> means the object is at rest.",
     "apply": [
      {
       "id": "kin2_rest_scn",
       "type": "scenario",
       "q": "On a position-time graph, Tom's line is flat and horizontal between 4 s and 7 s. What was he doing?",
       "a": "At rest — not moving",
       "opts": [
        "Moving forwards",
        "At rest — not moving",
        "Moving backwards",
        "Speeding up"
       ],
       "explain": "Flat line means the position does not change, so the gradient is 0 and the velocity is 0."
      },
      {
       "id": "kin2_rest_cloze",
       "type": "cloze",
       "before": "The soccer ball sat still on the oval; it was at",
       "after": "until Layla kicked it.",
       "a": "rest",
       "opts": [
        "motion",
        "velocity",
        "force",
        "rest"
       ],
       "explain": "At rest = not moving at all. A force was needed to start the motion."
      }
     ]
    },
    {
     "w": "force",
     "meaning": "A push or a pull that can change how something moves.",
     "example": "A force was needed to stop the trolley.",
     "parts": [
      {
       "surface": "force",
       "type": "root",
       "meaning": "force",
       "tr": {
        "am": "ኃይል",
        "ar": "قوة",
        "es": "fuerza",
        "fa": "نیرو",
        "fr": "force",
        "hi": "बल",
        "ja": "力",
        "ko": "힘",
        "ml": "ബലം",
        "ps": "ځواک",
        "ro": "forță",
        "ru": "сила",
        "ta": "விசை",
        "tl": "puwersa",
        "ur": "قوت",
        "vi": "lực",
        "zh-Hans": "力",
        "zh-Hant": "力"
       }
      }
     ],
     "tr": {
      "am": "ኃይል",
      "ar": "القوة",
      "es": "fuerza",
      "fa": "نیرو",
      "fr": "force",
      "hi": "बल",
      "ja": "力",
      "ko": "힘",
      "ml": "ബലം",
      "ps": "ځواک",
      "ro": "forță",
      "ru": "сила",
      "ta": "விசை",
      "tl": "puwersa",
      "ur": "قوت",
      "vi": "lực",
      "zh-Hans": "力",
      "zh-Hant": "力"
     },
     "note": "<b>Force</b> comes whole from Latin <i>fortis</i> (strong) — the same <i>fort</i> hiding in <b>fort</b> (a strong place), <b>comfort</b> and <b>effort</b>. Physics tip: kinematics only <b>describes</b> motion; force belongs to dynamics, which <b>explains</b> why the motion changes.",
     "apply": [
      {
       "id": "kin2_force_desc",
       "type": "desc",
       "q": "Which word means a push or a pull that can change how something moves?",
       "a": "Force",
       "opts": [
        "Motion",
        "Force",
        "Velocity",
        "Gradient"
       ],
       "explain": "From Latin <i>fortis</i> (strong). A force can start, stop or turn a moving object."
      },
      {
       "id": "kin2_force_cloze",
       "type": "cloze",
       "before": "The trolley kept rolling until Anh put out her hand. Her push was the",
       "after": "that stopped it.",
       "a": "force",
       "opts": [
        "distance",
        "domain",
        "force",
        "trend"
       ],
       "explain": "A push or a pull is a force, and here it changed the trolley's motion to rest."
      }
     ]
    },
    {
     "w": "domain",
     "meaning": "All the input values (x-values) a function can take.",
     "example": "The domain of the graph is time from 0 to 10 seconds.",
     "parts": [
      {
       "surface": "domain",
       "type": "root",
       "meaning": "territory",
       "tr": {
        "am": "ግዛት",
        "ar": "مجال",
        "es": "territorio",
        "fa": "قلمرو",
        "fr": "domaine",
        "hi": "क्षेत्र",
        "ja": "領域",
        "ko": "영역",
        "ml": "മേഖല",
        "ps": "قلمرو",
        "ro": "domeniu",
        "ru": "область",
        "ta": "பிரதேசம்",
        "tl": "teritoryo",
        "ur": "علاقہ",
        "vi": "lãnh thổ",
        "zh-Hans": "领域",
        "zh-Hant": "領域"
       }
      }
     ],
     "tr": {
      "am": "የትርጓሜ ክልል",
      "ar": "المجال",
      "es": "dominio",
      "fa": "دامنه",
      "fr": "domaine de définition",
      "hi": "प्रांत",
      "ja": "定義域",
      "ko": "정의역",
      "ml": "നിർവചന മണ്ഡലം",
      "ps": "د تعریف ساحه",
      "ro": "domeniu de definiție",
      "ru": "область определения",
      "ta": "சார்பகம்",
      "tl": "dominyo",
      "ur": "دامنہ",
      "vi": "tập xác định",
      "zh-Hans": "定义域",
      "zh-Hant": "定義域"
     },
     "note": "Latin <i>dominus</i> (master) → <i>dominium</i> (the land a master rules): a domain is a <b>territory</b>. Same idea in a website's <b>domain name</b> — the patch of the internet it owns. Exam tip: the domain is the set of allowed <b>x</b>-values (inputs); the matching word for the y-values is the <b>range</b>.",
     "apply": [
      {
       "id": "kin2_dom_scn",
       "type": "scenario",
       "q": "A graph shows a tram journey from t = 0 seconds to t = 60 seconds. Which word names the set of time values the graph covers?",
       "a": "Domain",
       "opts": [
        "Range",
        "Domain",
        "Gradient",
        "Intercept"
       ],
       "explain": "Time is the input, so 0 to 60 s is the territory the function rules over — its domain."
      },
      {
       "id": "kin2_dom_cloze",
       "type": "cloze",
       "before": "The phone plan only sells whole gigabytes of data from 0 to 50, so the",
       "after": "of this function is 0 to 50.",
       "a": "domain",
       "opts": [
        "domain",
        "gradient",
        "intercept",
        "ratio"
       ],
       "explain": "The domain is every input value that is allowed — here, the gigabytes you may buy."
      }
     ]
    },
    {
     "w": "function",
     "meaning": "A rule that links each input to exactly one output.",
     "example": "Distance is a function of time.",
     "parts": [
      {
       "surface": "funct",
       "type": "root",
       "meaning": "perform",
       "tr": {
        "am": "መስራት",
        "ar": "أداء",
        "es": "funcionar",
        "fa": "عمل‌کردن",
        "fr": "fonctionner",
        "hi": "कार्य करना",
        "ja": "機能する",
        "ko": "기능하다",
        "ml": "പ്രവർത്തിക്കുക",
        "ps": "کار کول",
        "ro": "a funcționa",
        "ru": "выполнять",
        "ta": "செயல்படுக",
        "tl": "gumana",
        "ur": "کام کرنا",
        "vi": "hoạt động",
        "zh-Hans": "执行",
        "zh-Hant": "執行"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act, result (noun)",
       "tr": {
        "am": "ተግባር፣ ውጤት",
        "ar": "فعل، نتيجة",
        "es": "acción/resultado",
        "fa": "عمل، نتیجه",
        "fr": "action, résultat",
        "hi": "क्रिया, परिणाम",
        "ja": "行為・結果",
        "ko": "행위·결과",
        "ml": "പ്രവൃത്തി, ഫലം",
        "ps": "عمل، پایله",
        "ro": "acțiune, rezultat",
        "ru": "действие, результат",
        "ta": "செயல், விளைவு",
        "tl": "kilos, resulta",
        "ur": "عمل، نتیجہ",
        "vi": "hành động, kết quả",
        "zh-Hans": "行为、结果",
        "zh-Hant": "行為、結果"
       }
      }
     ],
     "tr": {
      "am": "ተግባር",
      "ar": "الدالة",
      "es": "función",
      "fa": "تابع",
      "fr": "fonction",
      "hi": "फलन",
      "ja": "関数",
      "ko": "함수",
      "ml": "ഫലനം",
      "ps": "تابع",
      "ro": "funcție",
      "ru": "функция",
      "ta": "சார்பு",
      "tl": "tungkulin",
      "ur": "تفاعل",
      "vi": "hàm số",
      "zh-Hans": "函数",
      "zh-Hant": "函數"
     },
     "note": "Latin <i>fungi/funct</i> (to perform, carry out) + <i>-ion</i> (act, result): a rule that performs a job on every number you give it. Same <i>funct</i> in <b>malfunction</b> (performs badly). Exam tip: a function gives exactly <b>one</b> output for each input — “distance is a function of time” means each time has one distance.",
     "apply": [
      {
       "id": "kin2_func_desc",
       "type": "desc",
       "q": "Which word means a rule that gives exactly one output for every input?",
       "a": "Function",
       "opts": [
        "Variable",
        "Correlation",
        "Function",
        "Intercept"
       ],
       "explain": "One input in, one output out. <i>funct</i> = perform: the rule performs the same job every time."
      },
      {
       "id": "kin2_func_cloze",
       "type": "cloze",
       "before": "The canteen machine gives one drink for each button you press, so it behaves like a",
       "after": "— one input, one output.",
       "a": "function",
       "opts": [
        "function",
        "domain",
        "gradient",
        "trend"
       ],
       "explain": "Press the same button, get the same drink: exactly one output per input."
      }
     ]
    },
    {
     "w": "piecewise",
     "meaning": "A function built from different pieces over different intervals.",
     "example": "The piecewise graph was flat, then sloped upward.",
     "parts": [
      {
       "surface": "piece",
       "type": "root",
       "meaning": "part",
       "tr": {
        "am": "ቁራጭ",
        "ar": "قطعة",
        "es": "parte",
        "fa": "تکه",
        "fr": "partie",
        "hi": "टुकड़ा",
        "ja": "部分",
        "ko": "부분",
        "ml": "ഭാഗം",
        "ps": "ټوټه",
        "ro": "parte",
        "ru": "часть",
        "ta": "பகுதி",
        "tl": "bahagi",
        "ur": "ٹکڑا",
        "vi": "phần",
        "zh-Hans": "部分",
        "zh-Hant": "部分"
       }
      },
      {
       "surface": "wise",
       "type": "suffix",
       "meaning": "in the manner of",
       "tr": {
        "am": "በ…መንገድ",
        "ar": "بطريقة",
        "es": "a la manera de",
        "fa": "به شیوه",
        "fr": "à la manière de",
        "hi": "की तरह",
        "ja": "～のように",
        "ko": "~식으로",
        "ml": "രീതിയിൽ",
        "ps": "په ډول",
        "ro": "în felul",
        "ru": "по способу",
        "ta": "விதத்தில்",
        "tl": "sa paraan ng",
        "ur": "کی طرح",
        "vi": "theo kiểu",
        "zh-Hans": "以…方式",
        "zh-Hant": "以…方式"
       }
      }
     ],
     "tr": {
      "am": "በክፋይ",
      "ar": "متعدد الأجزاء",
      "es": "por partes",
      "fa": "تکه‌ای",
      "fr": "par morceaux",
      "hi": "खंडवार",
      "ja": "区分的な",
      "ko": "구간별",
      "ml": "ഖണ്ഡശഃ",
      "ps": "ټوټه ټوټه",
      "ro": "pe porțiuni",
      "ru": "кусочно",
      "ta": "துண்டு வாரியான",
      "tl": "bawat bahagi",
      "ur": "ٹکڑوں میں",
      "vi": "từng khúc",
      "zh-Hans": "分段的",
      "zh-Hant": "分段的"
     },
     "note": "<i>piece</i> (part) + <i>-wise</i> (in the manner of): built part by part. The same old <i>-wise</i> is in <b>clockwise</b> and <b>otherwise</b>. Exam tip: each piece has its own gradient, so describe the pieces one at a time — “first she walks, then she stops, then she runs”.",
     "apply": [
      {
       "id": "kin2_pw_scn",
       "type": "scenario",
       "q": "Amara's position-time graph rises steadily for 10 s, then goes flat for 5 s, then rises steeply for 5 s. Which word describes a graph made of separate parts like this?",
       "a": "Piecewise",
       "opts": [
        "Uniform",
        "Curved",
        "Piecewise",
        "At rest"
       ],
       "explain": "Three straight pieces joined together, each with its own gradient — a piecewise graph."
      },
      {
       "id": "kin2_pw_scn2",
       "type": "scenario",
       "q": "On a piecewise position-time graph, the middle piece is a flat horizontal line lasting 6 seconds. What is happening in that piece?",
       "a": "The object is at rest",
       "opts": [
        "The object is speeding up",
        "The object is going backwards",
        "The object has constant acceleration",
        "The object is at rest"
       ],
       "explain": "Flat piece = no change in position = velocity 0. Read each piece on its own."
      },
      {
       "id": "kin2_pw_cloze",
       "type": "cloze",
       "before": "The word",
       "after": "uses the same -wise as clockwise: the graph is built part by part.",
       "a": "piecewise",
       "opts": [
        "piecewise",
        "uniform",
        "linear",
        "function"
       ],
       "explain": "<i>piece</i> (part) + <i>-wise</i> (in the manner of): in the manner of separate pieces."
      }
     ]
    }
   ]
  },
  {
   "id": "kin3",
   "area": "kin",
   "title": "Data, trends & correlation",
   "focus": "The words for collecting data, plotting it and describing the pattern.",
   "words": [
    {
     "w": "variable",
     "meaning": "A quantity that can change or take different values.",
     "example": "Time is the variable on the horizontal axis.",
     "parts": [
      {
       "surface": "vari",
       "type": "root",
       "meaning": "change",
       "tr": {
        "am": "ለውጥ",
        "ar": "يغير",
        "es": "cambio",
        "fa": "تغییر",
        "fr": "changement",
        "hi": "परिवर्तन",
        "ja": "変わる",
        "ko": "변화",
        "ml": "മാറ്റം",
        "ps": "بدلون",
        "ro": "varia",
        "ru": "изменять",
        "ta": "மாற்றம்",
        "tl": "pagbabago",
        "ur": "تبدیلی",
        "vi": "thay đổi",
        "zh-Hans": "变化",
        "zh-Hant": "變化"
       }
      },
      {
       "surface": "able",
       "type": "suffix",
       "meaning": "able to be",
       "tr": {
        "am": "የሚችል",
        "ar": "قابل",
        "es": "capaz de ser",
        "fa": "قابل",
        "fr": "capable de",
        "hi": "योग्य",
        "ja": "できる",
        "ko": "가능한",
        "ml": "കഴിയുന്ന",
        "ps": "وړ",
        "ro": "care poate fi",
        "ru": "способный",
        "ta": "முடியும்",
        "tl": "kaya",
        "ur": "قابل",
        "vi": "có thể",
        "zh-Hans": "可以…的",
        "zh-Hant": "可以…的"
       }
      }
     ],
     "tr": {
      "am": "ተለዋዋጭ",
      "ar": "متغيّر",
      "es": "variable",
      "fa": "متغیر",
      "fr": "variable",
      "hi": "चर",
      "ja": "変数",
      "ko": "변수",
      "ml": "ചരം",
      "ps": "متغیر",
      "ro": "variabilă",
      "ru": "переменная",
      "ta": "மாறி",
      "tl": "variable",
      "ur": "متغیر",
      "vi": "biến số",
      "zh-Hans": "变量",
      "zh-Hant": "變量"
     },
     "note": "Latin <i>variare</i> (to change) + <i>-able</i> (able to be): a quantity that is able to change. Same <i>vari</i> in <b>variety</b> and <b>various</b>. Exam tip: in y = mx + c the <b>variables</b> are x and y; m and c are constants that stay fixed for that line.",
     "apply": [
      {
       "id": "kin3_var_desc",
       "type": "desc",
       "q": "In the rule y = 3x + 5, which letters are the variables?",
       "a": "x and y",
       "opts": [
        "3 and 5",
        "x and y",
        "y only",
        "3 and x"
       ],
       "explain": "x and y change from point to point. The numbers 3 and 5 stay the same for this line."
      },
      {
       "id": "kin3_var_cloze",
       "type": "cloze",
       "before": "The number of trams passing the stop is different every hour, so it is a",
       "after": "and not a fixed number.",
       "a": "variable",
       "opts": [
        "constant",
        "variable",
        "gradient",
        "ratio"
       ],
       "explain": "<i>vari</i> (change) + <i>-able</i> (able to be): it is able to change."
      }
     ]
    },
    {
     "w": "correlation",
     "meaning": "How strongly two variables are related.",
     "example": "There is a positive correlation between time and distance.",
     "parts": [
      {
       "surface": "cor",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "አብሮ",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ",
        "ja": "共に",
        "ko": "함께",
        "ml": "ഒരുമിച്ച്",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "اکٹھا",
        "vi": "cùng",
        "zh-Hans": "共同",
        "zh-Hant": "共同",
        "other": "باهم"
       }
      },
      {
       "surface": "relat",
       "type": "root",
       "meaning": "relate/bring back",
       "tr": {
        "am": "ማገናኘት",
        "ar": "ربط",
        "es": "relacionar",
        "fa": "ارتباط",
        "fr": "relier",
        "hi": "जोड़ना",
        "ja": "関連",
        "ko": "관련",
        "ml": "ബന്ധിപ്പിക്കുക",
        "ps": "اړیکه",
        "ro": "a lega",
        "ru": "связывать",
        "ta": "தொடர்பு",
        "tl": "iugnay",
        "ur": "جوڑنا",
        "vi": "liên hệ",
        "zh-Hans": "联系",
        "zh-Hant": "聯繫"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "ትስስር / ግንኙነት",
      "ar": "ارتباط",
      "es": "correlación",
      "fa": "همبستگی",
      "fr": "corrélation",
      "hi": "सहसंबंध",
      "ja": "相関",
      "ko": "상관관계",
      "ml": "പരസ്പരബന്ധം",
      "ps": "اړیکه / همتړاو",
      "ro": "corelație",
      "ru": "корреляция",
      "ta": "தொடர்பு / ஒப்புறவு",
      "tl": "ugnayan / korelasyon",
      "ur": "باہمی تعلق",
      "vi": "mối tương quan",
      "zh-Hans": "相关性",
      "zh-Hant": "相關性"
     },
     "note": "Latin <i>com-/cor-</i> (together) + <i>relat</i> (to relate) + <i>-ion</i> (process): how two things are related together. Same <i>relat</i> in <b>relative</b> and <b>relationship</b>. Exam tip: correlation is <b>not</b> cause — two things can rise together without one causing the other.",
     "apply": [
      {
       "id": "kin3_corr_scn",
       "type": "scenario",
       "q": "In Mai's survey, the more hours students studied, the higher their test scores. What kind of correlation is this?",
       "a": "Positive correlation",
       "opts": [
        "Positive correlation",
        "Negative correlation",
        "No correlation",
        "Perpendicular correlation"
       ],
       "explain": "Both go up together, so the points rise to the right: positive correlation."
      },
      {
       "id": "kin3_corr_scn2",
       "type": "scenario",
       "q": "The more hours Tom works at his part-time job, the fewer hours he sleeps. Which correlation does his data show?",
       "a": "Negative correlation",
       "opts": [
        "Positive correlation",
        "No correlation",
        "Negative correlation",
        "Uniform correlation"
       ],
       "explain": "One goes up while the other goes down, so the points fall to the right: negative correlation."
      },
      {
       "id": "kin3_corr_desc",
       "type": "desc",
       "q": "Ice cream sales and sunburn cases both rise every summer, but ice cream does not cause sunburn. What does this show?",
       "a": "Correlation does not prove cause",
       "opts": [
        "Ice cream causes sunburn",
        "There is no correlation",
        "Correlation does not prove cause",
        "The correlation is negative"
       ],
       "explain": "Hot weather causes both. Related <b>together</b> is not the same as one making the other happen."
      }
     ]
    },
    {
     "w": "positive",
     "meaning": "Greater than zero; going up or to the right.",
     "example": "A positive gradient means the object moves forward.",
     "parts": [
      {
       "surface": "posit",
       "type": "root",
       "meaning": "place",
       "tr": {
        "fa": "قرار دادن",
        "am": "ማስቀመጥ",
        "ar": "يضع",
        "es": "colocar",
        "fr": "placer",
        "hi": "रखना",
        "ja": "置く",
        "ko": "놓다",
        "ml": "വയ്ക്കുക",
        "ps": "ایښودل",
        "ro": "a pune",
        "ru": "помещать",
        "ta": "வைத்தல்",
        "tl": "maglagay",
        "ur": "رکھنا",
        "vi": "đặt",
        "zh-Hans": "放置",
        "zh-Hant": "放置",
        "other": "قرار دادن"
       }
      },
      {
       "surface": "ive",
       "type": "suffix",
       "meaning": "tending to",
       "tr": {
        "am": "ዝንባሌ",
        "ar": "ذو",
        "es": "que tiende a",
        "fa": "گرایش به",
        "fr": "tendance à",
        "hi": "प्रवृत्ति",
        "ja": "的な",
        "ko": "경향",
        "ml": "പ്രവണത",
        "ps": "لرونکی",
        "ro": "care are",
        "ru": "склонный к",
        "ta": "போக்கு",
        "tl": "hilig",
        "ur": "رجحان",
        "vi": "có xu hướng",
        "zh-Hans": "有…性质的",
        "zh-Hant": "有…性質的"
       }
      }
     ],
     "tr": {
      "am": "አዎንታዊ",
      "ar": "موجب",
      "es": "positivo",
      "fa": "مثبت",
      "fr": "positif",
      "hi": "धनात्मक",
      "ja": "正の",
      "ko": "양의",
      "ml": "ധനാത്മകം",
      "ps": "مثبت",
      "ro": "pozitiv",
      "ru": "положительный",
      "ta": "நேர்",
      "tl": "positibo",
      "ur": "مثبت",
      "vi": "dương",
      "zh-Hans": "正的",
      "zh-Hant": "正的"
     },
     "note": "Latin <i>ponere/posit</i> (to place) + <i>-ive</i> (tending to): a positive number is placed <b>above</b> zero on the number line. Same <i>posit</i> in <b>position</b> and <b>deposit</b>. Exam tip: a positive gradient means the line goes uphill as you read from left to right.",
     "apply": [
      {
       "id": "kin3_pos_calc",
       "type": "scenario",
       "q": "A line passes through (0, 1) and (2, 7). Is its gradient positive or negative, and what is it?",
       "a": "Positive, 3",
       "opts": [
        "Negative, 3",
        "Positive, 3",
        "Positive, 6",
        "Negative, −3"
       ],
       "explain": "(7 − 1) ÷ (2 − 0) = 6 ÷ 2 = 3. It is above zero, so the line climbs to the right."
      },
      {
       "id": "kin3_pos_cloze",
       "type": "cloze",
       "before": "Reading the graph from left to right, the line goes uphill, so we say the gradient is",
       "after": "and the object is moving forwards.",
       "a": "positive",
       "opts": [
        "negative",
        "uniform",
        "positive",
        "piecewise"
       ],
       "explain": "Uphill to the right = above zero = positive."
      }
     ]
    },
    {
     "w": "negative",
     "meaning": "Less than zero; going down or to the left.",
     "example": "A negative velocity means moving backward.",
     "parts": [
      {
       "surface": "neg",
       "type": "prefix",
       "meaning": "deny, no",
       "tr": {
        "am": "አሉታ",
        "ar": "نفي",
        "es": "negación",
        "fa": "نفی",
        "fr": "négation",
        "hi": "निषेध",
        "ja": "否定",
        "ko": "부정",
        "ml": "നിഷേധം",
        "ps": "نفي",
        "ro": "negație",
        "ru": "отрицание",
        "ta": "மறுப்பு",
        "tl": "pagtanggi",
        "ur": "نفی",
        "vi": "phủ định",
        "zh-Hans": "否定",
        "zh-Hant": "否定"
       }
      },
      {
       "surface": "at",
       "type": "root",
       "meaning": "state",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado",
        "fa": "حالت",
        "fr": "état",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      },
      {
       "surface": "ive",
       "type": "suffix",
       "meaning": "having the quality of",
       "tr": {
        "am": "ባህሪ ያለው",
        "ar": "صفة",
        "es": "que tiene la cualidad de",
        "fa": "ویژگی",
        "fr": "ayant la qualité de",
        "hi": "गुण वाला",
        "ja": "性質",
        "ko": "성질의",
        "ml": "സ്വഭാവമുള്ള",
        "ps": "د خاصیت لرونکی",
        "ro": "cu calitatea de",
        "ru": "имеющий свойство",
        "ta": "குணமுள்ள",
        "tl": "may katangian ng",
        "ur": "خاصیت والا",
        "vi": "có tính chất",
        "zh-Hans": "具有…性质的",
        "zh-Hant": "具有…性質的"
       }
      }
     ],
     "tr": {
      "am": "አሉታዊ",
      "ar": "سالب",
      "es": "negativo",
      "fa": "منفی",
      "fr": "négatif",
      "hi": "ऋणात्मक",
      "ja": "負の",
      "ko": "음의",
      "ml": "ഋണാത്മകം",
      "ps": "منفي",
      "ro": "negativ",
      "ru": "отрицательный",
      "ta": "எதிர்",
      "tl": "negatibo",
      "ur": "منفی",
      "vi": "âm",
      "zh-Hans": "负的",
      "zh-Hant": "負的"
     },
     "note": "Latin <i>negare</i> (to say no) gives <i>neg</i> + <i>-at</i> + <i>-ive</i>: having the quality of saying no. Same <i>neg</i> in <b>negate</b> (to cancel out). Exam tip: a negative gradient goes downhill left to right, and on a position-time graph a negative velocity means moving back towards the start.",
     "apply": [
      {
       "id": "kin3_neg_calc",
       "type": "scenario",
       "q": "A line passes through (1, 8) and (3, 2). What is its gradient?",
       "a": "−3",
       "opts": [
        "3",
        "−3",
        "−6",
        "−1/3"
       ],
       "explain": "(2 − 8) ÷ (3 − 1) = −6 ÷ 2 = <b>−3</b>. Keep the same order top and bottom."
      },
      {
       "id": "kin3_neg_scn",
       "type": "scenario",
       "q": "On a position-time graph, Hiro's line slopes downwards. What does that mean?",
       "a": "He is moving back towards the start",
       "opts": [
        "He is speeding up",
        "He is standing still",
        "He is moving back towards the start",
        "He is moving forwards"
       ],
       "explain": "His position is getting smaller as time passes, so his velocity is negative."
      },
      {
       "id": "kin3_neg_cloze",
       "type": "cloze",
       "before": "The temperature dropped a little every hour, so a graph of temperature against time has a",
       "after": "gradient.",
       "a": "negative",
       "opts": [
        "positive",
        "uniform",
        "linear",
        "negative"
       ],
       "explain": "Down to the right means below zero — the graph says no to going up."
      }
     ]
    },
    {
     "w": "data",
     "meaning": "Facts and numbers collected for study.",
     "example": "We plotted the data on a graph.",
     "parts": [
      {
       "surface": "dat",
       "type": "root",
       "meaning": "given",
       "tr": {
        "am": "መረጃ",
        "ar": "بيانات",
        "es": "datos",
        "fa": "داده‌ها",
        "fr": "données",
        "hi": "आँकड़े",
        "ja": "データ",
        "ko": "자료",
        "ml": "വിവരങ്ങൾ",
        "ps": "معلومات",
        "ro": "date",
        "ru": "данные",
        "ta": "தரவு",
        "tl": "datos",
        "ur": "اعداد و شمار",
        "vi": "dữ liệu",
        "zh-Hans": "数据",
        "zh-Hant": "數據"
       }
      },
      {
       "surface": "a",
       "type": "suffix",
       "meaning": "plural marker",
       "tr": {
        "am": "የብዙ ቁጥር ምልክት",
        "ar": "علامة الجمع",
        "es": "marcador de plural",
        "fa": "نشانه جمع",
        "fr": "marqueur du pluriel",
        "hi": "बहुवचन चिह्न",
        "ja": "複数形マーカー",
        "ko": "복수형 표시",
        "ml": "ബഹുവചന അടയാളം",
        "ps": "د جمع نښه",
        "ro": "marcaj de plural",
        "ru": "маркер множественного числа",
        "ta": "பன்மை குறியீடு",
        "tl": "tanda ng maramihan",
        "ur": "جمع کی علامت",
        "vi": "dấu hiệu số nhiều",
        "zh-Hans": "复数标记",
        "zh-Hant": "複數標記"
       }
      }
     ],
     "tr": {
      "am": "ውሂብ",
      "ar": "بيانات",
      "es": "datos",
      "fa": "داده‌ها",
      "fr": "données",
      "hi": "आंकड़े",
      "ja": "データ",
      "ko": "데이터",
      "ml": "ഡാറ്റ",
      "ps": "ډاټا",
      "ro": "date",
      "ru": "данные",
      "ta": "தரவு",
      "tl": "datos",
      "ur": "ڈیٹا",
      "vi": "dữ liệu",
      "zh-Hans": "数据",
      "zh-Hant": "數據"
     },
     "note": "<b>Data</b> is honestly Latin: <i>datum</i> means “a thing given”, and <i>data</i> is its plural — “the things given”. The same word is on your phone plan. Exam tip: data is what you collect; the next step is to <b>plot</b> it as points and look for a trend.",
     "apply": [
      {
       "id": "kin3_data_desc",
       "type": "desc",
       "q": "The word data is the Latin plural of datum. What does datum mean?",
       "a": "A thing given",
       "opts": [
        "A number line",
        "A thing given",
        "A straight line",
        "A measuring error"
       ],
       "explain": "Each measurement is a thing the experiment <b>gives</b> you; many of them are data."
      },
      {
       "id": "kin3_data_cloze",
       "type": "cloze",
       "before": "Mai's class timed 20 paper planes and wrote every number in a table. Those numbers are their",
       "after": "and the next step is to plot them.",
       "a": "data",
       "opts": [
        "domain",
        "gradient",
        "data",
        "trend"
       ],
       "explain": "Collected facts and numbers = data, the things the experiment gave them."
      }
     ]
    },
    {
     "w": "plot",
     "meaning": "To mark points on a graph.",
     "example": "Plot each point where time meets distance.",
     "parts": [
      {
       "surface": "plot",
       "type": "root",
       "meaning": "mark out",
       "tr": {
        "am": "መሳል",
        "ar": "رسم",
        "es": "marcar",
        "fa": "ترسیم",
        "fr": "tracer",
        "hi": "अंकित करना",
        "ja": "プロットする",
        "ko": "표시하다",
        "ml": "അടയാളപ്പെടുത്തുക",
        "ps": "نښه کول",
        "ro": "a trasa",
        "ru": "отмечать",
        "ta": "குறித்தல்",
        "tl": "markahan",
        "ur": "نشان لگانا",
        "vi": "đánh dấu",
        "zh-Hans": "标出",
        "zh-Hant": "標出"
       }
      }
     ],
     "tr": {
      "am": "ግራፍ መሳል",
      "ar": "رسم",
      "es": "graficar",
      "fa": "رسم کردن",
      "fr": "tracer",
      "hi": "आलेखित करना",
      "ja": "プロットする",
      "ko": "점을 찍다",
      "ml": "വരയ്ക്കുക",
      "ps": "رسمول",
      "ro": "a trasa",
      "ru": "строить (график)",
      "ta": "வரைதல்",
      "tl": "iplot",
      "ur": "ترسیم کرنا",
      "vi": "vẽ đồ thị",
      "zh-Hans": "绘制",
      "zh-Hant": "繪製"
     },
     "note": "<b>Plot</b> has no Latin pieces: it is an old English word for a small patch of ground — a garden <b>plot</b>. Marking a point on a grid is like marking out a patch of ground, and the same word gives the <b>plot</b> of a story (a plan mapped out). Exam tip: plot means mark the points; only join them with a ruler if the rule really is linear.",
     "apply": [
      {
       "id": "kin3_plot_desc",
       "type": "desc",
       "q": "What does it mean to plot points on a graph?",
       "a": "Mark each point at its (x, y) place",
       "opts": [
        "Work out the gradient",
        "Mark each point at its (x, y) place",
        "Write the equation",
        "Draw the axes"
       ],
       "explain": "Plotting is marking. Working out the gradient comes afterwards."
      },
      {
       "id": "kin3_plot_scn",
       "type": "scenario",
       "q": "Amara must plot the point (4, −2). Starting from (0, 0), where does she put her mark?",
       "a": "4 across to the right, then 2 down",
       "opts": [
        "4 up, then 2 across",
        "2 across, then 4 down",
        "4 across to the right, then 2 down",
        "4 to the left, then 2 up"
       ],
       "explain": "Coordinates are always (x, y): across first, then up or down. Here 4 right and 2 down."
      }
     ]
    },
    {
     "w": "equation",
     "meaning": "A maths statement that two things are equal, using an = sign.",
     "example": "The equation v = d/t links velocity, distance and time.",
     "parts": [
      {
       "surface": "equ",
       "type": "root",
       "meaning": "equal",
       "tr": {
        "am": "እኩል",
        "ar": "متساو",
        "es": "igual",
        "fa": "برابر",
        "fr": "égal",
        "hi": "समान",
        "ja": "等しい",
        "ko": "동등",
        "ml": "തുല്യം",
        "ps": "برابر",
        "ro": "egal",
        "ru": "равный",
        "ta": "சமமான",
        "tl": "pantay",
        "ur": "برابر",
        "vi": "bằng",
        "zh-Hans": "相等",
        "zh-Hant": "相等"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "am": "እኩልታ",
      "ar": "معادلة",
      "es": "ecuación",
      "fa": "معادله",
      "fr": "équation",
      "hi": "समीकरण",
      "ja": "方程式",
      "ko": "방정식",
      "ml": "സമവാക്യം",
      "ps": "معادله",
      "ro": "ecuație",
      "ru": "уравнение",
      "ta": "சமன்பாடு",
      "tl": "ekwasyon",
      "ur": "مساوات",
      "vi": "phương trình",
      "zh-Hans": "方程",
      "zh-Hant": "方程式"
     },
     "note": "Latin <i>aequus</i> (level, equal) gives <i>equ</i> + <i>-ation</i> (process of): the process of making two sides level. Same <i>equ</i> in <b>equal</b> and <b>equator</b>, the line that cuts Earth into equal halves. Exam tip: an equation always has an <b>=</b> sign; 2x + 3 with no equals sign is only an <b>expression</b>.",
     "apply": [
      {
       "id": "kin3_eq_calc",
       "type": "scenario",
       "q": "Solve the equation 3x + 4 = 19.",
       "a": "x = 5",
       "opts": [
        "x = 5",
        "x = 7",
        "x = 15",
        "x = 23"
       ],
       "explain": "Take 4 from both sides: 3x = 15. Divide by 3: x = <b>5</b>. Both sides stay level."
      },
      {
       "id": "kin3_eq_desc",
       "type": "desc",
       "q": "Which one of these is an equation, not just an expression?",
       "a": "2x + 3 = 11",
       "opts": [
        "2x + 3",
        "3x",
        "2x + 3 = 11",
        "x² + 1"
       ],
       "explain": "Only one has an equals sign, which says the two sides are equal."
      },
      {
       "id": "kin3_eq_cloze",
       "type": "cloze",
       "before": "The rule v = d ÷ t is an",
       "after": "because it says that two things are equal.",
       "a": "equation",
       "opts": [
        "expression",
        "equation",
        "intercept",
        "variable"
       ],
       "explain": "<i>equ</i> (equal) + <i>-ation</i>: the = sign is the whole point of the word."
      }
     ]
    },
    {
     "w": "predict",
     "meaning": "To say what will happen before it does, using evidence.",
     "example": "We can predict the position using the equation.",
     "parts": [
      {
       "surface": "pre",
       "type": "prefix",
       "meaning": "before",
       "tr": {
        "am": "ቅድመ",
        "ar": "قبل",
        "es": "antes",
        "fa": "پیش",
        "fr": "avant",
        "hi": "पूर्व",
        "ja": "前",
        "ko": "이전",
        "ml": "മുമ്പ്",
        "ps": "مخکې",
        "ro": "înainte",
        "ru": "перед",
        "ta": "முன்",
        "tl": "bago",
        "ur": "پیش",
        "vi": "trước",
        "zh-Hans": "前",
        "zh-Hant": "前"
       }
      },
      {
       "surface": "dict",
       "type": "root",
       "meaning": "say, speak",
       "tr": {
        "am": "መናገር",
        "ar": "قول",
        "es": "decir/hablar",
        "fa": "گفتن",
        "fr": "dire",
        "hi": "कहना",
        "ja": "言う",
        "ko": "말하다",
        "ml": "പറയുക",
        "ps": "ویل",
        "ro": "a spune",
        "ru": "говорить",
        "ta": "சொல்லுதல்",
        "tl": "magsabi",
        "ur": "کہنا",
        "vi": "nói",
        "zh-Hans": "说",
        "zh-Hant": "說"
       }
      }
     ],
     "tr": {
      "am": "መተንበይ",
      "ar": "يتنبأ",
      "es": "predecir",
      "fa": "پیش‌بینی کردن",
      "fr": "prédire",
      "hi": "भविष्यवाणी करना",
      "ja": "予測する",
      "ko": "예측하다",
      "ml": "പ്രവചിക്കുക",
      "ps": "وړاندوینه کول",
      "ro": "a prezice",
      "ru": "предсказывать",
      "ta": "முன்னறிவி",
      "tl": "hulaan",
      "ur": "پیش گوئی کرنا",
      "vi": "dự đoán",
      "zh-Hans": "预测",
      "zh-Hant": "預測"
     },
     "note": "Latin <i>prae/pre-</i> (before) + <i>dicere/dict</i> (to say): to say it before it happens. Same <i>dict</i> in <b>dictionary</b> (a book of sayings) and <b>verdict</b>. Exam tip: use the line of best fit or the equation to predict — but predicting far outside your data is risky.",
     "apply": [
      {
       "id": "kin3_pred_calc",
       "type": "scenario",
       "q": "A tram's distance follows d = 12t, where d is in metres and t in seconds. Predict the distance after 5 seconds.",
       "a": "60 m",
       "opts": [
        "12 m",
        "17 m",
        "60 m",
        "5 m"
       ],
       "explain": "Substitute t = 5: d = 12 × 5 = <b>60 m</b>. The equation lets you say the answer before measuring."
      },
      {
       "id": "kin3_pred_cloze",
       "type": "cloze",
       "before": "Because the points formed a clear straight line, Hiro could",
       "after": "the distance at 10 seconds without measuring it.",
       "a": "predict",
       "opts": [
        "plot",
        "measure",
        "correlate",
        "predict"
       ],
       "explain": "<i>pre-</i> (before) + <i>dict</i> (say): say the answer before it happens."
      }
     ]
    },
    {
     "w": "trend",
     "meaning": "The general direction that data is heading.",
     "example": "The upward trend shows the object is speeding up.",
     "parts": [
      {
       "surface": "trend",
       "type": "root",
       "meaning": "turn, direction",
       "tr": {
        "am": "አዝማሚያ",
        "ar": "اتجاه",
        "es": "giro/dirección",
        "fa": "روند",
        "fr": "tendance",
        "hi": "रुझान",
        "ja": "傾向",
        "ko": "경향",
        "ml": "പ്രവണത",
        "ps": "تمایل",
        "ro": "tendință",
        "ru": "тенденция",
        "ta": "போக்கு",
        "tl": "kalakaran",
        "ur": "رجحان",
        "vi": "xu hướng",
        "zh-Hans": "趋势",
        "zh-Hant": "趨勢"
       }
      }
     ],
     "tr": {
      "am": "አዝማሚያ",
      "ar": "اتجاه",
      "es": "tendencia",
      "fa": "روند",
      "fr": "tendance",
      "hi": "प्रवृत्ति",
      "ja": "傾向",
      "ko": "추세",
      "ml": "പ്രവണത",
      "ps": "رجحان / تمایل",
      "ro": "tendință",
      "ru": "тенденция",
      "ta": "போக்கு",
      "tl": "kalakaran",
      "ur": "رجحان",
      "vi": "xu hướng",
      "zh-Hans": "趋势",
      "zh-Hant": "趨勢"
     },
     "note": "<b>Trend</b> has no Latin cuts — it comes from an old English verb <i>trendan</i>, meaning to turn or roll, so a trend is the way the data turns. You already know it from a video <b>trending</b> online. Exam tip: describe a trend in a full sentence — “as time increases, distance increases” — not just “it goes up”.",
     "apply": [
      {
       "id": "kin3_trend_scn",
       "type": "scenario",
       "q": "Over five weeks the number of students riding bikes to school was 10, 14, 19, 23, 28. Which sentence describes the trend best?",
       "a": "As the weeks increase, the number of riders increases",
       "opts": [
        "The number of riders stays the same",
        "As the weeks increase, the number of riders increases",
        "As the weeks increase, the number of riders decreases",
        "There is no pattern"
       ],
       "explain": "Each week the number is bigger, so the data turns upward. Say it as “as … increases, … increases”."
      },
      {
       "id": "kin3_trend_cloze",
       "type": "cloze",
       "before": "The dots rose steadily from left to right, so Layla wrote that the",
       "after": "is upward.",
       "a": "trend",
       "opts": [
        "trend",
        "domain",
        "intercept",
        "ratio"
       ],
       "explain": "The trend is the general direction the data is heading, even if a few points are off the line."
      }
     ]
    }
   ]
  },
  {
   "id": "kin4",
   "area": "kin",
   "title": "Triangles & trigonometry",
   "focus": "The words for right-angled triangles and their ratios.",
   "words": [
    {
     "w": "angle",
     "meaning": "The amount of turn between two lines, measured in degrees.",
     "example": "The ramp meets the ground at a 30° angle.",
     "parts": [
      {
       "surface": "angle",
       "type": "root",
       "meaning": "corner",
       "tr": {
        "am": "ማዕዘን",
        "ar": "ركن",
        "es": "esquina",
        "fa": "گوشه",
        "fr": "coin",
        "hi": "कोना",
        "ja": "かど",
        "ko": "모서리",
        "ml": "മൂല",
        "ps": "کنج",
        "ro": "colț",
        "ru": "угол",
        "ta": "மூலை",
        "tl": "sulok",
        "ur": "کونا",
        "vi": "góc",
        "zh-Hans": "角",
        "zh-Hant": "角"
       }
      }
     ],
     "tr": {
      "am": "ማዕዘን",
      "ar": "زاوية",
      "es": "ángulo",
      "fa": "زاویه",
      "fr": "angle",
      "hi": "कोण",
      "ja": "角度",
      "ko": "각도",
      "ml": "കോണ്",
      "ps": "زاویه",
      "ro": "unghi",
      "ru": "угол",
      "ta": "கோணம்",
      "tl": "anggulo",
      "ur": "زاویہ",
      "vi": "góc",
      "zh-Hans": "角",
      "zh-Hant": "角"
     },
     "note": "Latin <i>angulus</i> means a <b>corner</b> — and the same old root gives your <b>ankle</b>, the corner of your leg. Same <i>angle</i> in <b>triangle</b> (three corners) and <b>rectangle</b> (upright corners). Exam tip: the three angles inside any triangle add up to 180°.",
     "apply": [
      {
       "id": "kin4_ang_calc",
       "type": "scenario",
       "q": "In a right-angled triangle, one angle is 90° and another is 35°. What is the third angle?",
       "a": "55°",
       "opts": [
        "65°",
        "45°",
        "55°",
        "125°"
       ],
       "explain": "180° − 90° − 35° = <b>55°</b>. Every triangle's angles add to 180°."
      },
      {
       "id": "kin4_ang_cloze",
       "type": "cloze",
       "before": "The skate ramp meets the flat ground at a 30°",
       "after": "which is not very steep.",
       "a": "angle",
       "opts": [
        "ratio",
        "angle",
        "area",
        "side"
       ],
       "explain": "An angle measures the amount of turn between two lines, in degrees."
      }
     ]
    },
    {
     "w": "theta",
     "meaning": "The Greek letter θ, often used to name an unknown angle.",
     "example": "Find the value of theta in the triangle.",
     "parts": [
      {
       "surface": "theta",
       "type": "root",
       "meaning": "Greek letter θ",
       "tr": {
        "am": "የግሪክ ፊደል θ",
        "ar": "حرف يوناني θ",
        "es": "letra griega θ",
        "fa": "حرف یونانی θ",
        "fr": "lettre grecque θ",
        "hi": "यूनानी अक्षर θ",
        "ja": "ギリシャ文字θ",
        "ko": "그리스 문자 θ",
        "ml": "ഗ്രീക്ക് അക്ഷരം θ",
        "ps": "یوناني حرف θ",
        "ro": "litera grecească θ",
        "ru": "греческая буква θ",
        "ta": "கிரேக்க எழுத்து θ",
        "tl": "titik Griyego θ",
        "ur": "یونانی حرف θ",
        "vi": "chữ cái Hy Lạp θ",
        "zh-Hans": "希腊字母θ",
        "zh-Hant": "希臘字母θ"
       }
      }
     ],
     "tr": {
      "am": "ቴታ",
      "ar": "ثيتا",
      "es": "theta",
      "fa": "تتا",
      "fr": "thêta",
      "hi": "थीटा",
      "ja": "シータ",
      "ko": "세타",
      "ml": "തീറ്റ",
      "ps": "تیټا",
      "ro": "theta",
      "ru": "тета",
      "ta": "தீட்டா",
      "tl": "theta",
      "ur": "تھیٹا",
      "vi": "theta",
      "zh-Hans": "西塔",
      "zh-Hant": "西塔"
     },
     "note": "<b>Theta</b> (θ) is simply the eighth letter of the Greek alphabet, borrowed by maths as a name for an unknown angle — just as π (pi) names the circle number. Exam tip: θ marks the angle you are working <b>from</b>, so the opposite and adjacent sides are named relative to θ.",
     "apply": [
      {
       "id": "kin4_theta_desc",
       "type": "desc",
       "q": "Why do maths books use the Greek letter θ for an angle?",
       "a": "So angles are not confused with side lengths like a, b, c",
       "opts": [
        "Because θ always means 90°",
        "So angles are not confused with side lengths like a, b, c",
        "Because θ is a number",
        "Because θ means the longest side"
       ],
       "explain": "Greek letters name angles, Latin letters name sides. It keeps your working clear."
      },
      {
       "id": "kin4_theta_cloze",
       "type": "cloze",
       "before": "The side across from angle",
       "after": "is called the opposite side.",
       "a": "theta",
       "opts": [
        "delta",
        "theta",
        "hypotenuse",
        "ratio"
       ],
       "explain": "Everything in SOH CAH TOA is named from θ: change θ and the sides change names."
      }
     ]
    },
    {
     "w": "adjacent",
     "meaning": "Next to; the side lying beside the angle you are using.",
     "example": "The adjacent side is next to the angle theta.",
     "parts": [
      {
       "surface": "ad",
       "type": "prefix",
       "meaning": "to, toward",
       "tr": {
        "am": "ወደ",
        "ar": "إلى/نحو",
        "es": "a/hacia",
        "fa": "به سوی",
        "fr": "vers",
        "hi": "की ओर",
        "ja": "〜へ",
        "ko": "~쪽으로",
        "ml": "നേരെ",
        "ps": "پر لور",
        "ro": "către",
        "ru": "к",
        "ta": "நோக்கி",
        "tl": "papunta sa",
        "ur": "کی طرف",
        "vi": "hướng tới",
        "zh-Hans": "向；朝",
        "zh-Hant": "向；朝",
        "other": "به"
       }
      },
      {
       "surface": "jac",
       "type": "root",
       "meaning": "lie, throw",
       "tr": {
        "am": "ማረፍ / መወርወር",
        "ar": "يستلقي / يرمي",
        "es": "yacer/lanzar",
        "fa": "دراز کشیدن / پرتاب",
        "fr": "être couché / jeter",
        "hi": "लेटना / फेंकना",
        "ja": "横たわる／投げる",
        "ko": "눕다 / 던지다",
        "ml": "കിടക്കുക / എറിയുക",
        "ps": "غورځول",
        "ro": "a sta întins / a arunca",
        "ru": "лежать / бросать",
        "ta": "படுத்தல் / எறிதல்",
        "tl": "mahiga / maghagis",
        "ur": "لیٹنا / پھینکنا",
        "vi": "nằm / ném",
        "zh-Hans": "躺 / 投掷",
        "zh-Hant": "躺 / 投擲"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "being",
       "tr": {
        "am": "-ነት",
        "ar": "ـي",
        "es": "siendo",
        "fa": "بودن",
        "fr": "étant",
        "hi": "होने वाला",
        "ja": "である",
        "ko": "존재",
        "ml": "-ത്വം",
        "ps": "کېدونکی",
        "ro": "fiind",
        "ru": "будучи",
        "ta": "இருத்தல்",
        "tl": "pagiging",
        "ur": "ہونا",
        "vi": "đang",
        "zh-Hans": "的",
        "zh-Hant": "的",
        "other": "بودن"
       }
      }
     ],
     "tr": {
      "am": "ተጓዳኝ ጎን",
      "ar": "الضلع المجاور",
      "es": "cateto adyacente",
      "fa": "ضلع مجاور",
      "fr": "côté adjacent",
      "hi": "आसन्न भुजा",
      "ja": "隣辺",
      "ko": "인접변",
      "ml": "അടുത്തുള്ള വശം",
      "ps": "نږدې څنګ",
      "ro": "latura adiacentă",
      "ru": "прилежащий катет",
      "ta": "அடுத்துள்ள பக்கம்",
      "tl": "katabing gilid",
      "ur": "ملحقہ ضلع",
      "vi": "cạnh kề",
      "zh-Hans": "邻边",
      "zh-Hant": "鄰邊"
     },
     "note": "Latin <i>ad-</i> (towards) + <i>jacere/jac</i> (to lie, throw) + <i>-ent</i> (being): lying next to. Same <i>jac/jec</i> in <b>eject</b> (throw out) and <b>project</b> (throw forward); in everyday English, two <b>adjacent</b> classrooms are side by side. Exam tip: the adjacent side is the one touching θ that is <b>not</b> the hypotenuse.",
     "apply": [
      {
       "id": "kin4_adj_scn",
       "type": "scenario",
       "q": "In a right-angled triangle, θ is one of the two smaller angles. Which side is the adjacent side?",
       "a": "The side next to θ that is not the hypotenuse",
       "opts": [
        "The longest side",
        "The side next to θ that is not the hypotenuse",
        "The side across from θ",
        "Any side you choose"
       ],
       "explain": "Two sides touch θ, but the hypotenuse already has its own name, so the other one is adjacent."
      },
      {
       "id": "kin4_adj_cloze",
       "type": "cloze",
       "before": "In the classroom block, room 5 is right next to room 6, so the two rooms are",
       "after": "— just like the side lying next to angle θ.",
       "a": "adjacent",
       "opts": [
        "opposite",
        "perpendicular",
        "parallel",
        "adjacent"
       ],
       "explain": "<i>ad-</i> (towards) + <i>jac</i> (lie): lying next to something."
      }
     ]
    },
    {
     "w": "opposite",
     "meaning": "Across from; the side facing the angle you are using.",
     "example": "The opposite side is across from angle theta.",
     "parts": [
      {
       "surface": "op",
       "type": "prefix",
       "meaning": "against, facing",
       "tr": {
        "am": "በተቃራኒ",
        "ar": "ضد",
        "es": "contra",
        "fa": "در برابر",
        "fr": "contre",
        "hi": "के विरुद्ध",
        "ja": "〜に対して",
        "ko": "~에 반대하여",
        "ml": "എതിരെ",
        "ps": "پر ضد",
        "ro": "împotriva",
        "ru": "против",
        "ta": "எதிராக",
        "tl": "laban sa",
        "ur": "کے خلاف",
        "vi": "chống lại",
        "zh-Hans": "反对",
        "zh-Hant": "反對"
       }
      },
      {
       "surface": "posit",
       "type": "root",
       "meaning": "place",
       "tr": {
        "fa": "قرار دادن",
        "am": "ማስቀመጥ",
        "ar": "يضع",
        "es": "colocar",
        "fr": "placer",
        "hi": "रखना",
        "ja": "置く",
        "ko": "놓다",
        "ml": "വയ്ക്കുക",
        "ps": "ایښودل",
        "ro": "a pune",
        "ru": "помещать",
        "ta": "வைத்தல்",
        "tl": "maglagay",
        "ur": "رکھنا",
        "vi": "đặt",
        "zh-Hans": "放置",
        "zh-Hant": "放置",
        "other": "قرار دادن"
       }
      },
      {
       "surface": "e",
       "type": "suffix",
       "meaning": "noun ending",
       "tr": {
        "fa": "اسم",
        "am": "ስም",
        "ar": "اسم",
        "es": "forma de sustantivo",
        "fr": "nom",
        "hi": "संज्ञा",
        "ja": "名詞形",
        "ko": "명사형",
        "ml": "നാമരൂപം",
        "ps": "نوم",
        "ro": "formă de substantiv",
        "ru": "форма существительного",
        "ta": "பெயர்ச்சொல்",
        "tl": "pangngalan",
        "ur": "اسم",
        "vi": "dạng danh từ",
        "zh-Hans": "名词形式",
        "zh-Hant": "名詞形式"
       }
      }
     ],
     "tr": {
      "am": "ተቃራኒ ጎን",
      "ar": "الضلع المقابل",
      "es": "cateto opuesto",
      "fa": "ضلع مقابل",
      "fr": "côté opposé",
      "hi": "सम्मुख भुजा",
      "ja": "対辺",
      "ko": "대변",
      "ml": "എതിർവശം",
      "ps": "مقابل اړخ",
      "ro": "latura opusă",
      "ru": "противолежащий катет",
      "ta": "எதிர்ப் பக்கம்",
      "tl": "tapat na gilid",
      "ur": "مقابل ضلع",
      "vi": "cạnh đối",
      "zh-Hans": "对边",
      "zh-Hant": "對邊"
     },
     "note": "Latin <i>ob/op-</i> (against, facing) + <i>ponere/posit</i> (to place): placed facing you across the triangle. Same <i>posit</i> in <b>position</b> and <b>positive</b>. Exam tip: opposite is always measured from θ — if you switch to the other small angle, opposite and adjacent <b>swap</b>.",
     "apply": [
      {
       "id": "kin4_opp_scn",
       "type": "scenario",
       "q": "A right-angled triangle has θ at the bottom-left corner and the right angle at the bottom-right corner. Which side is opposite θ?",
       "a": "The vertical side on the right",
       "opts": [
        "The bottom side",
        "The longest side",
        "The vertical side on the right",
        "The side touching θ"
       ],
       "explain": "The opposite side is the one θ is looking straight at: the vertical side across the triangle."
      },
      {
       "id": "kin4_opp_desc",
       "type": "desc",
       "q": "If you change which angle you call θ, what happens to the opposite and adjacent sides?",
       "a": "They swap",
       "opts": [
        "They swap",
        "They stay the same",
        "Both become the hypotenuse",
        "The hypotenuse changes too"
       ],
       "explain": "Only the hypotenuse keeps its name, because it is fixed by the <b>right angle</b>, not by θ."
      }
     ]
    },
    {
     "w": "hypotenuse",
     "meaning": "The longest side of a right triangle, opposite the right angle.",
     "example": "The hypotenuse is always across from the 90° angle.",
     "parts": [
      {
       "surface": "hypo",
       "type": "prefix",
       "meaning": "under",
       "tr": {
        "am": "ከስር",
        "ar": "تحت",
        "es": "debajo",
        "fa": "زیر",
        "fr": "sous",
        "hi": "नीचे",
        "ja": "下に",
        "ko": "아래",
        "ml": "താഴെ",
        "ps": "لاندې",
        "ro": "sub",
        "ru": "под",
        "ta": "கீழ்",
        "tl": "ilalim",
        "ur": "نیچے",
        "vi": "dưới",
        "zh-Hans": "下",
        "zh-Hant": "下"
       }
      },
      {
       "surface": "tenuse",
       "type": "root",
       "meaning": "stretch",
       "tr": {
        "zh-Hans": "伸展",
        "zh-Hant": "伸展",
        "ja": "伸びる",
        "ko": "늘이다",
        "vi": "kéo dài/căng ra",
        "ar": "يمتد",
        "fa": "کشیدن",
        "ur": "کھینچنا",
        "am": "መዘርጋት",
        "ml": "നീട്ടുക",
        "ta": "நீட்டுதல்",
        "tl": "unatin",
        "ps": "غځول",
        "ro": "a întinde",
        "ru": "растягивать",
        "fr": "étirer",
        "hi": "खींचना",
        "es": "estirar"
       }
      }
     ],
     "tr": {
      "am": "ሃይፖቴኑዝ",
      "ar": "الوتر",
      "es": "hipotenusa",
      "fa": "وتر",
      "fr": "hypoténuse",
      "hi": "कर्ण",
      "ja": "斜辺",
      "ko": "빗변",
      "ml": "കര്‍ണ്ണം",
      "ps": "وتر",
      "ro": "ipotenuză",
      "ru": "гипотенуза",
      "ta": "கர்ணம்",
      "tl": "hypotenuse",
      "ur": "وتر",
      "vi": "cạnh huyền",
      "zh-Hans": "斜边",
      "zh-Hant": "斜邊"
     },
     "note": "Greek <i>hypo-</i> (under) + <i>teinein/tenuse</i> (to stretch): the side <b>stretching under</b> the right angle. Same <i>hypo-</i> in <b>hypothermia</b> (heat under normal). Exam tip: the hypotenuse is always the longest side and always opposite the right angle — and in SOH and CAH it is always on the <b>bottom</b> of the fraction.",
     "apply": [
      {
       "id": "kin4_hyp_desc",
       "type": "desc",
       "q": "Which side of a right-angled triangle is the hypotenuse?",
       "a": "The longest side, opposite the right angle",
       "opts": [
        "The side next to θ",
        "The longest side, opposite the right angle",
        "The shortest side",
        "The bottom side"
       ],
       "explain": "It stretches under the 90° corner, which makes it the longest side every time."
      },
      {
       "id": "kin4_hyp_calc",
       "type": "scenario",
       "q": "A right-angled triangle has short sides of 3 cm and 4 cm. How long is the hypotenuse?",
       "a": "5 cm",
       "opts": [
        "7 cm",
        "12 cm",
        "5 cm",
        "25 cm"
       ],
       "explain": "Pythagoras: 3² + 4² = 9 + 16 = 25, and √25 = <b>5 cm</b>. The 3-4-5 triangle is worth remembering."
      },
      {
       "id": "kin4_hyp_scn",
       "type": "scenario",
       "q": "In sin θ = opposite ÷ hypotenuse, where does the hypotenuse always sit?",
       "a": "On the bottom of the fraction",
       "opts": [
        "On the bottom of the fraction",
        "On the top of the fraction",
        "It is not used",
        "It depends on θ"
       ],
       "explain": "In SOH and CAH the hypotenuse is the divider. Only TOA leaves it out."
      }
     ]
    },
    {
     "w": "sine",
     "meaning": "In a right triangle, opposite side divided by hypotenuse.",
     "example": "Use sine to find the height of the ramp.",
     "parts": [
      {
       "surface": "sine",
       "type": "root",
       "meaning": "curve, fold",
       "tr": {
        "am": "ማጠፍ",
        "ar": "انحناء",
        "es": "curva",
        "fa": "خم",
        "fr": "courbe",
        "hi": "वक्र",
        "ja": "曲線",
        "ko": "곡선",
        "ml": "വളവ്",
        "ps": "کږوالی",
        "ro": "curbă",
        "ru": "изгиб",
        "ta": "வளைவு",
        "tl": "kurba",
        "ur": "خم",
        "vi": "đường cong",
        "zh-Hans": "曲线",
        "zh-Hant": "曲線"
       }
      }
     ],
     "tr": {
      "am": "ሳይን",
      "ar": "الجيب",
      "es": "seno",
      "fa": "سینوس",
      "fr": "sinus",
      "hi": "ज्या",
      "ja": "正弦",
      "ko": "사인",
      "ml": "സൈൻ",
      "ps": "سائن",
      "ro": "sinus",
      "ru": "синус",
      "ta": "சைன்",
      "tl": "sine",
      "ur": "جیب",
      "vi": "sin",
      "zh-Hans": "正弦",
      "zh-Hant": "正弦"
     },
     "note": "<b>Sine</b> has a travelling history: Sanskrit <i>jya-ardha</i> (half-chord) became Arabic <i>jayb</i>, which Latin translators read as <i>sinus</i> — a fold or curve of cloth. That is why the hollow curves in your face are also called <b>sinuses</b>. Exam tip: <b>SOH</b> — Sine = Opposite ÷ Hypotenuse.",
     "apply": [
      {
       "id": "kin4_sin_calc",
       "type": "scenario",
       "q": "A ramp is 10 m long (the hypotenuse) and rises 5 m (the opposite side). What is sin θ?",
       "a": "0.5",
       "opts": [
        "2",
        "0.5",
        "5",
        "10"
       ],
       "explain": "SOH: sin θ = opposite ÷ hypotenuse = 5 ÷ 10 = <b>0.5</b>."
      },
      {
       "id": "kin4_sin_desc",
       "type": "desc",
       "q": "In SOH CAH TOA, what does SOH tell you?",
       "a": "Sine = Opposite ÷ Hypotenuse",
       "opts": [
        "Sine = Adjacent ÷ Hypotenuse",
        "Sine = Opposite ÷ Hypotenuse",
        "Sine = Opposite ÷ Adjacent",
        "Sine = Hypotenuse ÷ Opposite"
       ],
       "explain": "S-O-H reads in order: Sine, Opposite, Hypotenuse — top then bottom."
      },
      {
       "id": "kin4_sin_cloze",
       "type": "cloze",
       "before": "Mai knows the hypotenuse and needs the side opposite θ, so she uses",
       "after": "— the S in SOH CAH TOA.",
       "a": "sine",
       "opts": [
        "cosine",
        "tangent",
        "sine",
        "ratio"
       ],
       "explain": "Opposite and hypotenuse together always point to sine."
      }
     ]
    },
    {
     "w": "cosine",
     "meaning": "In a right triangle, adjacent side divided by hypotenuse.",
     "example": "Cosine links the adjacent side and the hypotenuse.",
     "parts": [
      {
       "surface": "co",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "አብሮ",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ",
        "ja": "共に",
        "ko": "함께",
        "ml": "ഒരുമിച്ച്",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "اکٹھا",
        "vi": "cùng",
        "zh-Hans": "共同",
        "zh-Hant": "共同",
        "other": "باهم"
       }
      },
      {
       "surface": "sine",
       "type": "root",
       "meaning": "curve, fold",
       "tr": {
        "am": "ማጠፍ",
        "ar": "انحناء",
        "es": "curva",
        "fa": "خم",
        "fr": "courbe",
        "hi": "वक्र",
        "ja": "曲線",
        "ko": "곡선",
        "ml": "വളവ്",
        "ps": "کږوالی",
        "ro": "curbă",
        "ru": "изгиб",
        "ta": "வளைவு",
        "tl": "kurba",
        "ur": "خم",
        "vi": "đường cong",
        "zh-Hans": "曲线",
        "zh-Hant": "曲線"
       }
      }
     ],
     "tr": {
      "am": "ኮሳይን",
      "ar": "جيب التمام",
      "es": "coseno",
      "fa": "کسینوس",
      "fr": "cosinus",
      "hi": "कोज्या",
      "ja": "余弦",
      "ko": "코사인",
      "ml": "കോസൈൻ",
      "ps": "کوسائن",
      "ro": "cosinus",
      "ru": "косинус",
      "ta": "கொசைன்",
      "tl": "cosine",
      "ur": "کوسائن",
      "vi": "cos",
      "zh-Hans": "余弦",
      "zh-Hant": "餘弦"
     },
     "note": "<b>Co-</b> means partner or together (as in <b>co-worker</b>), so cosine is the <b>partner of sine</b>: it is the sine of the other small angle, the one that completes 90° with θ. Exam tip: <b>CAH</b> — Cosine = Adjacent ÷ Hypotenuse.",
     "apply": [
      {
       "id": "kin4_cos_calc",
       "type": "scenario",
       "q": "A 4 m ladder leans against a wall. Its foot is 2 m from the wall, which is the adjacent side. What is cos θ?",
       "a": "0.5",
       "opts": [
        "0.5",
        "2",
        "4",
        "8"
       ],
       "explain": "CAH: cos θ = adjacent ÷ hypotenuse = 2 ÷ 4 = <b>0.5</b>. The ladder is the hypotenuse."
      },
      {
       "id": "kin4_cos_desc",
       "type": "desc",
       "q": "Which ratio does cosine use?",
       "a": "Adjacent ÷ Hypotenuse",
       "opts": [
        "Opposite ÷ Hypotenuse",
        "Adjacent ÷ Hypotenuse",
        "Opposite ÷ Adjacent",
        "Hypotenuse ÷ Adjacent"
       ],
       "explain": "C-A-H: Cosine, Adjacent, Hypotenuse. Sine takes the opposite side; cosine takes the one beside θ."
      }
     ]
    },
    {
     "w": "tangent",
     "meaning": "In a right triangle, opposite side divided by adjacent side.",
     "example": "Tangent connects the two shorter sides of the triangle.",
     "parts": [
      {
       "surface": "tang",
       "type": "root",
       "meaning": "touch",
       "tr": {
        "am": "መንካት",
        "ar": "لمس",
        "es": "tocar",
        "fa": "لمس",
        "fr": "toucher",
        "hi": "स्पर्श",
        "ja": "接触",
        "ko": "접촉",
        "ml": "സ്പർശിക്കുക",
        "ps": "لمس کول",
        "ro": "atingere",
        "ru": "прикосновение",
        "ta": "தொடுதல்",
        "tl": "hipo",
        "ur": "چھونا",
        "vi": "chạm",
        "zh-Hans": "接触",
        "zh-Hant": "接觸"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "being",
       "tr": {
        "am": "-ነት",
        "ar": "ـي",
        "es": "siendo",
        "fa": "بودن",
        "fr": "étant",
        "hi": "होने वाला",
        "ja": "である",
        "ko": "존재",
        "ml": "-ത്വം",
        "ps": "کېدونکی",
        "ro": "fiind",
        "ru": "будучи",
        "ta": "இருத்தல்",
        "tl": "pagiging",
        "ur": "ہونا",
        "vi": "đang",
        "zh-Hans": "的",
        "zh-Hant": "的",
        "other": "بودن"
       }
      }
     ],
     "tr": {
      "am": "ታንጀንት",
      "ar": "الظل",
      "es": "tangente",
      "fa": "تانژانت",
      "fr": "tangente",
      "hi": "स्पर्शज्या",
      "ja": "正接",
      "ko": "탄젠트",
      "ml": "ടാൻജെന്റ്",
      "ps": "ټینجنټ",
      "ro": "tangentă",
      "ru": "тангенс",
      "ta": "டேன்ஜென்ட்",
      "tl": "tangent",
      "ur": "ٹینجنٹ",
      "vi": "tan",
      "zh-Hans": "正切",
      "zh-Hant": "正切"
     },
     "note": "Latin <i>tangere/tang</i> (to touch) + <i>-ent</i> (being): a tangent is a line that just <b>touches</b> a curve. Same <i>tang</i> in <b>tangible</b> (able to be touched) and <b>contact</b>. Exam tip: <b>TOA</b> — Tangent = Opposite ÷ Adjacent. It is the only ratio with no hypotenuse, and tan θ is exactly the <b>gradient</b> of a line that makes angle θ with the horizontal.",
     "apply": [
      {
       "id": "kin4_tan_calc",
       "type": "scenario",
       "q": "In a right-angled triangle the opposite side is 6 cm and the adjacent side is 3 cm. What is tan θ?",
       "a": "2",
       "opts": [
        "0.5",
        "2",
        "18",
        "3"
       ],
       "explain": "TOA: tan θ = opposite ÷ adjacent = 6 ÷ 3 = <b>2</b>."
      },
      {
       "id": "kin4_tan_desc",
       "type": "desc",
       "q": "Which trig ratio does NOT use the hypotenuse?",
       "a": "Tangent",
       "opts": [
        "Sine",
        "Cosine",
        "Tangent",
        "All of them use it"
       ],
       "explain": "TOA uses only the two short sides, so tangent leaves the hypotenuse out."
      },
      {
       "id": "kin4_tan_scn",
       "type": "scenario",
       "q": "A straight line rises 4 units for every 2 units across, making an angle θ with the horizontal. What is tan θ?",
       "a": "2",
       "opts": [
        "0.5",
        "4",
        "2",
        "8"
       ],
       "explain": "Rise ÷ run = 4 ÷ 2 = 2, and rise ÷ run is opposite ÷ adjacent. So tan θ <b>is</b> the gradient."
      }
     ]
    },
    {
     "w": "perpendicular",
     "meaning": "At a right angle (90°) to something.",
     "example": "The wall is perpendicular to the floor.",
     "parts": [
      {
       "surface": "per",
       "type": "prefix",
       "meaning": "through",
       "tr": {
        "am": "በ...በኩል / ሙሉ በሙሉ",
        "ar": "عبر / تمامًا",
        "es": "a través de/completamente",
        "fa": "از میان / کاملاً",
        "fr": "à travers / complètement",
        "hi": "के माध्यम से / पूरी तरह",
        "ja": "通して／徹底的に",
        "ko": "~을 통하여 / 철저히",
        "ml": "വഴി / പൂർണ്ണമായി",
        "ps": "له لارې / بشپړ",
        "ro": "prin / complet",
        "ru": "через / полностью",
        "ta": "வழியாக / முழுமையாக",
        "tl": "sa pamamagitan / lubusan",
        "ur": "کے ذریعے / مکمل طور پر",
        "vi": "xuyên qua / triệt để",
        "zh-Hans": "穿过／彻底",
        "zh-Hant": "穿過／徹底",
        "other": "در هر"
       }
      },
      {
       "surface": "pend",
       "type": "root",
       "meaning": "hang",
       "tr": {
        "am": "መስቀል / መተማመን",
        "ar": "يعلّق / يعتمد",
        "es": "colgar/depender",
        "fa": "آویزان شدن / وابسته بودن",
        "fr": "pendre / dépendre",
        "hi": "लटकना / निर्भर होना",
        "ja": "掛かる / 頼る",
        "ko": "매달리다 / 의존하다",
        "ml": "തൂങ്ങുക / ആശ്രയിക്കുക",
        "ps": "ځړول / تکیه کول",
        "ro": "a atârna / a depinde",
        "ru": "висеть / зависеть",
        "ta": "தொங்குதல் / சார்ந்திருத்தல்",
        "tl": "sumabit / umasa",
        "ur": "لٹکنا / انحصار کرنا",
        "vi": "treo / phụ thuộc",
        "zh-Hans": "悬挂 / 依赖",
        "zh-Hant": "懸掛 / 依賴"
       }
      },
      {
       "surface": "icul",
       "type": "root",
       "meaning": "small part",
       "tr": {
        "ur": "چھوٹا حصہ",
        "fa": "بخش کوچک",
        "zh-Hans": "小部分",
        "tl": "maliit na bahagi",
        "zh-Hant": "小部分",
        "ps": "وړه برخه",
        "am": "ትንሽ ክፍል",
        "ar": "جزء صغير",
        "es": "parte pequeña",
        "fr": "petite partie",
        "hi": "छोटा भाग",
        "ja": "小さな部分",
        "ko": "작은 부분",
        "ml": "ചെറിയ ഭാഗം",
        "ro": "parte mică",
        "ru": "маленькая часть",
        "ta": "சிறிய பகுதி",
        "vi": "phần nhỏ"
       }
      },
      {
       "surface": "ar",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "مربوط",
        "am": "የሚመለከት",
        "ar": "متعلق بـ",
        "es": "relacionado con",
        "fr": "relatif à",
        "hi": "से संबंधित",
        "ja": "～の",
        "ko": "관련된",
        "ml": "സംബന്ധിച്ച",
        "ps": "اړوند",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "may kaugnayan sa",
        "ur": "سے متعلق",
        "vi": "thuộc về",
        "zh-Hans": "与…有关的",
        "zh-Hant": "與…有關的"
       }
      }
     ],
     "tr": {
      "am": "ቀጥተኛ",
      "ar": "عمودي",
      "es": "perpendicular",
      "fa": "عمود",
      "fr": "perpendiculaire",
      "hi": "लंबवत",
      "ja": "垂直",
      "ko": "수직",
      "ml": "ലംബമായ",
      "ps": "عمودي",
      "ro": "perpendicular",
      "ru": "перпендикулярный",
      "ta": "செங்குத்தான",
      "tl": "patayo",
      "ur": "عمودی",
      "vi": "vuông góc",
      "zh-Hans": "垂直",
      "zh-Hant": "垂直"
     },
     "note": "Latin <i>per-</i> (through) + <i>pendere/pend</i> (to hang) + <i>-icul</i> (small) + <i>-ar</i> (relating to): from <i>perpendiculum</i>, the builder's small hanging weight on a string. It hangs at exactly 90° to level ground. Same <i>pend</i> in <b>pendulum</b> and <b>pendant</b>. Exam tip: perpendicular lines meet at 90°, and their gradients multiply to −1.",
     "apply": [
      {
       "id": "kin4_perp_desc",
       "type": "desc",
       "q": "A builder hangs a small weight on a string to check a wall. The string hangs at 90° to level ground. Which word comes from that hanging weight?",
       "a": "Perpendicular",
       "opts": [
        "Parallel",
        "Adjacent",
        "Perpendicular",
        "Tangent"
       ],
       "explain": "<i>per-</i> (through) + <i>pend</i> (hang): the plumb line that hangs straight down."
      },
      {
       "id": "kin4_perp_cloze",
       "type": "cloze",
       "before": "The flagpole stands straight up from the flat oval, so it is",
       "after": "to the ground — the two meet at 90°.",
       "a": "perpendicular",
       "opts": [
        "perpendicular",
        "parallel",
        "adjacent",
        "opposite"
       ],
       "explain": "Perpendicular always means a right angle, 90°."
      }
     ]
    },
    {
     "w": "ratio",
     "meaning": "A comparison of two amounts, like 3 to 1.",
     "example": "Sine is the ratio of the opposite side to the hypotenuse.",
     "parts": [
      {
       "surface": "ratio",
       "type": "root",
       "meaning": "reckoning",
       "tr": {
        "am": "ስሌት",
        "ar": "حساب",
        "es": "cálculo",
        "fa": "محاسبه",
        "fr": "calcul",
        "hi": "गणना",
        "ja": "計算",
        "ko": "계산",
        "ml": "കണക്ക്",
        "ps": "حساب",
        "ro": "calcul",
        "ru": "расчёт",
        "ta": "கணக்கு",
        "tl": "pagkalkula",
        "ur": "حساب",
        "vi": "tính toán",
        "zh-Hans": "计算",
        "zh-Hant": "計算"
       }
      }
     ],
     "tr": {
      "am": "ጥምርታ",
      "ar": "نسبة",
      "es": "razón",
      "fa": "نسبت",
      "fr": "rapport",
      "hi": "अनुपात",
      "ja": "比",
      "ko": "비율",
      "ml": "അനുപാതം",
      "ps": "نسبت",
      "ro": "raport",
      "ru": "отношение",
      "ta": "விகிதம்",
      "tl": "ratio",
      "ur": "نسبت",
      "vi": "tỉ số",
      "zh-Hans": "比率",
      "zh-Hant": "比率"
     },
     "note": "Latin <i>ratio</i> means a reckoning or a reasoning — from <i>reri</i>, to count or think. Same <i>rat</i> in <b>rational</b> (able to reason) and <b>rate</b>. Exam tip: sine, cosine and tangent are all ratios, one side divided by another, so the metres cancel and the answer has <b>no units</b>.",
     "apply": [
      {
       "id": "kin4_ratio_calc",
       "type": "scenario",
       "q": "In a class of 30 students, 12 catch the tram and 18 walk. What is the ratio of tram to walking students in its simplest form?",
       "a": "2 : 3",
       "opts": [
        "12 : 18",
        "2 : 3",
        "3 : 2",
        "2 : 5"
       ],
       "explain": "Divide both parts by 6: 12 : 18 becomes <b>2 : 3</b>. Order matters — tram first."
      },
      {
       "id": "kin4_ratio_desc",
       "type": "desc",
       "q": "Why do sine, cosine and tangent have no units?",
       "a": "They are ratios, so the units cancel when you divide",
       "opts": [
        "They are always in degrees",
        "They are ratios, so the units cancel when you divide",
        "They are always in metres",
        "They are angles"
       ],
       "explain": "5 m ÷ 10 m = 0.5, with no metres left. A ratio compares two amounts of the same kind."
      }
     ]
    }
   ]
  },
  {
   "id": "kin5",
   "area": "kin",
   "title": "Curves & projectiles",
   "focus": "The words the Keg Toss and the Tennis Serve are made of — a thrown thing follows a curve, and the curve has a rule.",
   "words": [
    {
     "w": "parabola",
     "meaning": "The U-shaped curve you get from a squared relationship.",
     "example": "The path of a thrown ball is a parabola.",
     "parts": [
      {
       "surface": "para",
       "type": "prefix",
       "meaning": "beside",
       "tr": {
        "am": "አጠገብ",
        "ar": "بجانب",
        "es": "al lado de",
        "fa": "کنار",
        "fr": "à côté",
        "hi": "पास",
        "ja": "そば",
        "ko": "옆",
        "ml": "അരികിൽ",
        "ps": "څنګ",
        "ro": "lângă",
        "ru": "рядом",
        "ta": "அருகில்",
        "tl": "tabi",
        "ur": "پاس",
        "vi": "bên cạnh",
        "zh-Hans": "旁边",
        "zh-Hant": "旁邊"
       }
      },
      {
       "surface": "bol",
       "type": "root",
       "meaning": "throw",
       "tr": {
        "am": "መወርወር",
        "ar": "رمي",
        "es": "lanzar",
        "fa": "پرتاب",
        "fr": "lancer",
        "hi": "फेंकना",
        "ja": "投げる",
        "ko": "던지다",
        "ml": "എറിയൽ",
        "ps": "غورځول",
        "ro": "aruncare",
        "ru": "бросать",
        "ta": "எறிதல்",
        "tl": "paghagis",
        "ur": "پھینکنا",
        "vi": "ném",
        "zh-Hans": "投掷",
        "zh-Hant": "投擲"
       }
      }
     ],
     "tr": {
      "zh-Hans": "抛物线",
      "zh-Hant": "拋物線",
      "ja": "放物線",
      "ko": "포물선",
      "vi": "parabol",
      "ar": "القطع المكافئ",
      "fa": "سهمی (پارابولا)",
      "ur": "شلجمی خط (پیرابولا)",
      "am": "ፓራቦላ",
      "ml": "പരവലയം",
      "ta": "பரவளையம்",
      "tl": "parabola",
      "ps": "پارابولا",
      "ro": "parabolă",
      "ru": "парабола",
      "fr": "parabole",
      "hi": "परवलय",
      "es": "parábola"
     },
     "note": "Greek <i>para-</i> (beside) + <i>bol</i> (throw): the curve that lies beside a throw. The same <i>bol</i> is in <b>symbol</b> (thrown together) and <b>hyperbola</b>. Every thrown ball, keg or shot put draws one, and the rule behind it always has an x² in it.",
     "apply": [
      {
       "id": "kin5_par_desc",
       "type": "desc",
       "q": "Which word names the U-shaped curve that a thrown ball traces through the air?",
       "a": "Parabola",
       "opts": [
        "Parabola",
        "Coefficient",
        "Symmetry",
        "Projectile"
       ],
       "explain": "<i>para-</i> (beside) + <i>bol</i> (throw): the curve beside a throw. The projectile is the object; this is the shape of its path."
      },
      {
       "id": "kin5_par_scn",
       "type": "scenario",
       "q": "A graph of height against distance for a thrown keg rises, turns over and comes down again, and its rule contains x². What shape is the graph?",
       "a": "A parabola",
       "opts": [
        "A parabola",
        "A straight line",
        "A circle",
        "A step"
       ],
       "explain": "An x² in the rule bends the graph: up one side, over a turning point, down the other. That shape is a parabola."
      },
      {
       "id": "kin5_par_cloze",
       "type": "cloze",
       "before": "Because there is an x² in the rule, the graph is not a straight line but a",
       "after": "with exactly one turning point.",
       "a": "parabola",
       "opts": [
        "parabola",
        "gradient",
        "perimeter",
        "ratio"
       ],
       "explain": "A squared term bends the graph into a curve with exactly one turning point."
      }
     ]
    },
    {
     "w": "quadratic",
     "meaning": "Describes a rule where the highest power of the letter is 2. Its graph is a parabola.",
     "example": "y = a(x − h)² + k is a quadratic rule, so its graph curves.",
     "parts": [
      {
       "surface": "quadr",
       "type": "root",
       "meaning": "four",
       "tr": {
        "zh-Hans": "四",
        "ja": "四",
        "vi": "bốn",
        "zh-Hant": "四",
        "am": "አራት",
        "ar": "أربعة",
        "es": "cuatro",
        "fa": "چهار",
        "fr": "quatre",
        "hi": "चार",
        "ko": "넷",
        "ml": "നാല്",
        "ps": "څلور",
        "ro": "patru",
        "ru": "четыре",
        "ta": "நான்கு",
        "tl": "apat",
        "ur": "چار"
       }
      },
      {
       "surface": "at",
       "type": "suffix",
       "meaning": "make/cause",
       "tr": {
        "vi": "làm, gây ra",
        "am": "ማድረግ",
        "ar": "جعل",
        "es": "hacer/causar",
        "fa": "سبب شدن",
        "fr": "faire / causer",
        "hi": "बनाना / कारण बनना",
        "ja": "～にする",
        "ko": "만들다/일으키다",
        "ml": "ചെയ്യുക",
        "ps": "جوړول / لامل کېدل",
        "ro": "a face / a cauza",
        "ru": "делать / вызывать",
        "ta": "உண்டாக்க",
        "tl": "gawin / maging sanhi",
        "ur": "بنانا / سبب بننا",
        "zh-Hans": "使",
        "zh-Hant": "使"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "مربوط به",
        "am": "ተያያዥ",
        "ar": "متعلّق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "am": "ካሬያዊ",
      "ar": "تربيعي",
      "es": "cuadrático",
      "fa": "درجه دوم",
      "fr": "quadratique",
      "hi": "द्विघात",
      "ja": "二次",
      "ko": "이차",
      "ml": "രണ്ടാം കൃതി",
      "ps": "دویمه درجه",
      "ro": "pătratic",
      "ru": "квадратичный",
      "ta": "இருபடி",
      "tl": "kwadratiko",
      "ur": "درجہ دوم",
      "vi": "bậc hai",
      "zh-Hans": "二次",
      "zh-Hant": "二次"
     },
     "note": "Latin <i>quadr-</i> (four) + <i>-at-</i> + <i>-ic</i> (relating to): squaring a length is what makes a four-sided square, so a rule with a square in it is quadratic. The same <i>quadr</i> is in <b>quadrilateral</b> (four sides) and <b>quad bike</b> (four wheels). The test is simple: the highest power of the letter is <b>2</b> — never 1, never 3.",
     "apply": [
      {
       "id": "kin5_quad_desc",
       "type": "desc",
       "q": "In which of these rules is the highest power of the letter equal to 2?",
       "a": "y = 2x² − 5x + 1",
       "opts": [
        "y = 2x² − 5x + 1",
        "y = 2x − 5",
        "y = 2x³ + 1",
        "y = 2 ÷ x"
       ],
       "explain": "Highest power 2 makes it quadratic. The second rule is linear (power 1) and the third is cubic (power 3)."
      },
      {
       "id": "kin5_quad_scn",
       "type": "scenario",
       "q": "A group plots drop height against fall time and gets a curve. When they square the time and plot again, the points fall on a straight line. What kind of relationship is it?",
       "a": "A quadratic relationship",
       "opts": [
        "A quadratic relationship",
        "A linear relationship",
        "A ratio",
        "No relationship at all"
       ],
       "explain": "A curve that straightens when one variable is squared is the signature of a squared term — highest power 2."
      },
      {
       "id": "kin5_quad_cloze",
       "type": "cloze",
       "before": "The highest power of x in y = 3x² + 4 is two, so this rule is",
       "after": "and its graph is a curve, not a straight line.",
       "a": "quadratic",
       "opts": [
        "quadratic",
        "linear",
        "perpendicular",
        "uniform"
       ],
       "explain": "<i>quadr</i> = four, from the square: a squared term is what makes the rule this kind, and the graph curves."
      }
     ]
    },
    {
     "w": "coefficient",
     "meaning": "the number multiplying a variable in a term, e.g. the 3 in 3x².",
     "example": "In the term 4x² the coefficient is 4.",
     "parts": [
      {
       "surface": "co",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "አብሮ",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ",
        "ja": "共に",
        "ko": "함께",
        "ml": "ഒരുമിച്ച്",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "اکٹھا",
        "vi": "cùng",
        "zh-Hans": "共同",
        "zh-Hant": "共同",
        "other": "باهم"
       }
      },
      {
       "surface": "effic",
       "type": "root",
       "meaning": "make/do",
       "tr": {
        "zh-Hans": "制作/做",
        "zh-Hant": "製作/做",
        "ja": "作る/する",
        "ko": "만들다/하다",
        "vi": "làm/tạo ra",
        "ar": "يصنع/يفعل",
        "fa": "ساختن/انجام دادن",
        "ur": "بنانا/کرنا",
        "am": "መስራት",
        "ml": "ഉണ്ടാക്കുക/ചെയ്യുക",
        "ta": "செய்தல்",
        "tl": "gumawa",
        "ps": "جوړول/کول",
        "ro": "a face",
        "ru": "делать/создавать",
        "fr": "faire",
        "hi": "बनाना/करना",
        "es": "hacer"
       }
      },
      {
       "surface": "ient",
       "type": "suffix",
       "meaning": "having the quality of",
       "tr": {
        "am": "ባህሪ ያለው",
        "ar": "ذو صفة",
        "es": "que tiene la cualidad de",
        "fa": "دارای",
        "fr": "ayant",
        "hi": "गुण वाला",
        "ja": "〜性",
        "ko": "~성",
        "ml": "ഉള്ള",
        "ps": "لرونکی",
        "ro": "care are",
        "ru": "обладающий",
        "ta": "தன்மை உடைய",
        "tl": "may katangian",
        "ur": "کا حامل",
        "vi": "có tính chất",
        "zh-Hans": "…性的",
        "zh-Hant": "…性的"
       }
      }
     ],
     "tr": {
      "am": "ተባባሪ",
      "ar": "معامل",
      "es": "coeficiente",
      "fa": "ضریب",
      "fr": "coefficient",
      "hi": "गुणांक",
      "ja": "係数",
      "ko": "계수",
      "ml": "ഗുണാങ്കം",
      "ps": "ضریب",
      "ro": "coeficient",
      "ru": "коэффициент",
      "ta": "குணகம்",
      "tl": "koepisyent",
      "ur": "ضریب",
      "vi": "hệ số",
      "zh-Hans": "系数",
      "zh-Hant": "係數"
     },
     "note": "Latin <i>co-</i> (together) + <i>effic</i> (make, do) + <i>-ient</i>: the number that works together with the letter to make the term. The same <i>effic</i> is in <b>efficient</b> and <b>effect</b>. In y = a(x − h)² + k the coefficient <b>a</b> decides how wide the curve is, and a negative <b>a</b> turns the whole curve upside down.",
     "apply": [
      {
       "id": "kin5_coef_desc",
       "type": "desc",
       "q": "In the term 7x², which part is the coefficient?",
       "a": "7",
       "opts": [
        "7",
        "x",
        "2",
        "x²"
       ],
       "explain": "The coefficient is the number multiplying the letter: 7. The small 2 is the power, not the coefficient."
      },
      {
       "id": "kin5_coef_scn",
       "type": "scenario",
       "q": "In y = −0.025(x − 4)² + 3.6, the number in front of the bracket is negative. What does that tell you about the curve?",
       "a": "It opens downwards",
       "opts": [
        "It opens downwards",
        "It opens upwards",
        "It is a straight line",
        "It has no turning point"
       ],
       "explain": "A negative number in front of the squared bracket flips the parabola over, so the arc rises and then comes back down."
      },
      {
       "id": "kin5_coef_cloze",
       "type": "cloze",
       "before": "In the term 5x the number 5 multiplies the letter next to it, so 5 is the",
       "after": "of that term.",
       "a": "coefficient",
       "opts": [
        "coefficient",
        "parabola",
        "symmetry",
        "projectile"
       ],
       "explain": "<i>co-</i> (together) + <i>effic</i> (make): the number that works together with the letter to make the term."
      }
     ]
    },
    {
     "w": "substitute",
     "meaning": "Put a number in place of a letter in a formula.",
     "example": "Substitute x = 3 into the equation.",
     "parts": [
      {
       "surface": "sub",
       "type": "prefix",
       "meaning": "under",
       "tr": {
        "am": "ከታች / በምትክ",
        "ar": "تحت / بدلاً من",
        "es": "bajo / en lugar de",
        "fa": "زیر / به‌جای",
        "fr": "sous / à la place de",
        "hi": "नीचे / के स्थान पर",
        "ja": "下に・代わりに",
        "ko": "아래/대신",
        "ml": "താഴെ / പകരം",
        "ps": "لاندې / پرځای",
        "ro": "sub / în locul",
        "ru": "под / вместо",
        "ta": "கீழ் / பதிலாக",
        "tl": "sa ilalim / kapalit",
        "ur": "نیچے / بجائے",
        "vi": "dưới / thay thế",
        "zh-Hans": "下/替代",
        "zh-Hant": "下/替代"
       }
      },
      {
       "surface": "stitut",
       "type": "root",
       "meaning": "set up/establish",
       "tr": {
        "am": "መመስረት",
        "ar": "يؤسس",
        "es": "establecer",
        "fa": "تأسیس کردن",
        "fr": "établir",
        "hi": "स्थापित करना",
        "ja": "設立する",
        "ko": "설립하다",
        "ml": "സ്ഥാപിക്കുക",
        "ps": "تاسیس کول",
        "ro": "a înființa",
        "ru": "учреждать",
        "ta": "நிறுவு",
        "tl": "itatag",
        "ur": "قائم کرنا",
        "vi": "thiết lập",
        "zh-Hans": "建立",
        "zh-Hant": "建立"
       }
      }
     ],
     "tr": {
      "zh-Hans": "代入",
      "zh-Hant": "代入",
      "ja": "代入する",
      "ko": "대입하다",
      "vi": "thay thế (thế vào)",
      "ar": "يعوّض (يستبدل)",
      "fa": "جایگذاری کردن",
      "ur": "متبادل رکھنا (تبدیل کرنا)",
      "am": "መተካት",
      "ml": "പകരം വയ്ക്കുക",
      "ta": "பதிலீடு செய்",
      "tl": "ipalit (substitute)",
      "ps": "ځای پرځای کول",
      "ro": "a substitui",
      "ru": "подставлять",
      "fr": "substituer",
      "hi": "प्रतिस्थापित करना",
      "es": "sustituir"
     },
     "note": "Latin <i>sub-</i> (under) + <i>stitut</i> (set up): to set one thing up in place of another. The same <i>stitut</i> is in <b>institute</b> and <b>constitution</b>. In maths you substitute a <b>number</b> in place of a <b>letter</b> — exactly the way a substitute player comes on in place of another player.",
     "apply": [
      {
       "id": "kin5_sub_scn",
       "type": "scenario",
       "q": "You know the rule y = 2x + 1 and you are told that x = 4. What is the first thing you do to find y?",
       "a": "Put 4 in place of x",
       "opts": [
        "Put 4 in place of x",
        "Put 4 in place of y",
        "Divide both sides by 2",
        "Draw the graph first"
       ],
       "explain": "Set the number up in place of the letter, then work it out: y = 2(4) + 1 = 9."
      },
      {
       "id": "kin5_sub_desc",
       "type": "desc",
       "q": "Which word means to put a number in place of a letter in a rule?",
       "a": "Substitute",
       "opts": [
        "Substitute",
        "Sketch",
        "Simplify",
        "Symmetry"
       ],
       "explain": "<i>sub-</i> (under) + <i>stitut</i> (set up): set the number up in place of the letter. Simplify means tidy an expression up, not swap numbers in."
      },
      {
       "id": "kin5_sub_cloze",
       "type": "cloze",
       "before": "The rule is y = a(x − 8)² + 3.6 and the ball is known to pass through (0, 2), so",
       "after": "those two numbers and solve for a.",
       "a": "substitute",
       "opts": [
        "substitute",
        "sketch",
        "measure",
        "label"
       ],
       "explain": "Set the two known numbers up in place of x and y, and the only unknown left is a."
      }
     ]
    },
    {
     "w": "projectile",
     "meaning": "an object, such as a bullet, that is thrown or fired forward through the air.",
     "example": "A thrown ball is a projectile — once it leaves the hand, only gravity acts on it.",
     "parts": [
      {
       "surface": "pro",
       "type": "prefix",
       "meaning": "forward",
       "tr": {
        "am": "ወደ ፊት",
        "ar": "إلى الأمام",
        "es": "adelante",
        "fa": "جلو",
        "fr": "avant",
        "hi": "आगे",
        "ja": "前へ",
        "ko": "앞으로",
        "ml": "മുന്നോട്ട്",
        "ps": "مخ ته",
        "ro": "înainte",
        "ru": "вперёд",
        "ta": "முன்னோக்கி",
        "tl": "pasulong",
        "ur": "آگے",
        "vi": "tiến về",
        "zh-Hans": "向前",
        "zh-Hant": "向前"
       }
      },
      {
       "surface": "ject",
       "type": "root",
       "meaning": "throw",
       "tr": {
        "am": "መወርወር",
        "ar": "رمي",
        "es": "lanzar",
        "fa": "پرتاب کردن",
        "fr": "jeter",
        "hi": "फेंकना",
        "ja": "投げる",
        "ko": "던지다",
        "ml": "എറിയുക",
        "ps": "غورځول",
        "ro": "a arunca",
        "ru": "бросать",
        "ta": "வீசு",
        "tl": "ihagis",
        "ur": "پھینکنا",
        "vi": "ném",
        "zh-Hans": "投射",
        "zh-Hant": "投射"
       }
      },
      {
       "surface": "ile",
       "type": "suffix",
       "meaning": "capable of / a thing that",
       "tr": {
        "am": "የሚችል",
        "ar": "قابل لـ",
        "es": "capaz de / cosa que",
        "fa": "قابلِ",
        "fr": "capable de",
        "hi": "योग्य",
        "ja": "…できる",
        "ko": "…할 수 있는",
        "ml": "കഴിവുള്ള",
        "ps": "د … وړ",
        "ro": "capabil de",
        "ru": "способный",
        "ta": "தகுதியுள்ள",
        "tl": "kayang",
        "ur": "کے قابل",
        "vi": "có thể",
        "zh-Hans": "能……的",
        "zh-Hant": "能……的"
       }
      }
     ],
     "tr": {
      "am": "ተወንጫፊ ነገር (ጥይት የመሳሰለ)",
      "ar": "مقذوف",
      "es": "proyectil",
      "fa": "پرتابه",
      "fr": "projectile",
      "hi": "प्रक्षेप्य",
      "ja": "発射体",
      "ko": "발사체",
      "ml": "പ്രക്ഷേപ്യവസ്തു",
      "ps": "پرتاب شوی جسم، مرمۍ",
      "ro": "proiectil",
      "ru": "снаряд",
      "ta": "எறிபொருள்",
      "tl": "proyektil",
      "ur": "پرتابی شے، گولی",
      "vi": "vật phóng",
      "zh-Hans": "抛射体；弹丸",
      "zh-Hant": "拋射體；彈丸"
     },
     "note": "Latin <i>pro-</i> (forward) + <i>ject</i> (throw) + <i>-ile</i> (a thing that): a thing thrown forward. The same <i>ject</i> is in <b>eject</b> (throw out) and <b>inject</b> (throw in). Keep the pair straight: the projectile is the <b>object</b>, and the curved path it takes is its <b>trajectory</b>.",
     "apply": [
      {
       "id": "kin5_proj_desc",
       "type": "desc",
       "q": "Which word names the object itself — the thing that is thrown or fired?",
       "a": "Projectile",
       "opts": [
        "Projectile",
        "Trajectory",
        "Parabola",
        "Symmetry"
       ],
       "explain": "<i>pro-</i> (forward) + <i>ject</i> (throw) + <i>-ile</i> (a thing that): the thing thrown forward. Its path is the trajectory."
      },
      {
       "id": "kin5_proj_scn",
       "type": "scenario",
       "q": "A keg is thrown from the back of a truck and nothing pushes it after it leaves the hand. Which name fits the keg itself?",
       "a": "It is a projectile",
       "opts": [
        "It is a projectile",
        "It is a trajectory",
        "It is a coefficient",
        "It is a parabola"
       ],
       "explain": "Once it is in the air with nothing pushing it, the keg is the object thrown forward. The curve it draws is the trajectory."
      }
     ]
    },
    {
     "w": "trajectory",
     "meaning": "The curved path an object follows through the air after it is thrown or fired.",
     "example": "The ball's trajectory took it just over the net and down inside the line.",
     "parts": [
      {
       "surface": "tra",
       "type": "prefix",
       "meaning": "across",
       "tr": {
        "am": "ማዶ / አቋርጦ",
        "ar": "عبر",
        "es": "a través de",
        "fa": "از میان / عبور",
        "fr": "à travers",
        "hi": "के पार / आर-पार",
        "ja": "横切って・越えて",
        "ko": "가로질러",
        "ml": "കുറുകെ",
        "ps": "پار / عبور",
        "ro": "peste / transversal",
        "ru": "через / поперёк",
        "ta": "குறுக்கே",
        "tl": "patawid / sa kabila",
        "ur": "پار / آر پار",
        "vi": "ngang qua",
        "zh-Hans": "穿过／横过",
        "zh-Hant": "穿過／橫過"
       }
      },
      {
       "surface": "ject",
       "type": "root",
       "meaning": "throw",
       "tr": {
        "am": "መወርወር",
        "ar": "رمي",
        "es": "lanzar",
        "fa": "پرتاب کردن",
        "fr": "jeter",
        "hi": "फेंकना",
        "ja": "投げる",
        "ko": "던지다",
        "ml": "എറിയുക",
        "ps": "غورځول",
        "ro": "a arunca",
        "ru": "бросать",
        "ta": "வீசு",
        "tl": "ihagis",
        "ur": "پھینکنا",
        "vi": "ném",
        "zh-Hans": "投射",
        "zh-Hant": "投射"
       }
      },
      {
       "surface": "ory",
       "type": "suffix",
       "meaning": "relating to (makes a noun)",
       "tr": {
        "am": "የተመለከተ",
        "ar": "متعلق بـ",
        "es": "relativo a",
        "fa": "مربوط به",
        "fr": "relatif à",
        "hi": "संबंधित",
        "ja": "…に関する",
        "ko": "…에 관한",
        "ml": "സംബന്ധിച്ച",
        "ps": "اړوند",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "may kaugnayan sa",
        "ur": "متعلق",
        "vi": "liên quan đến",
        "zh-Hans": "与……有关的",
        "zh-Hant": "與……有關的"
       }
      }
     ],
     "tr": {
      "am": "የጥይት አቅጣጫ",
      "ar": "مسار المقذوف",
      "es": "trayectoria",
      "fa": "مسیر گلوله",
      "fr": "trajectoire",
      "hi": "प्रक्षेप-पथ",
      "ja": "弾道",
      "ko": "탄도",
      "ml": "സഞ്ചാരപഥം",
      "ps": "د مرمۍ لار",
      "ro": "traiectorie",
      "ru": "траектория",
      "ta": "எறிபொருள் பாதை",
      "tl": "trayektorya",
      "ur": "گولی کا مسیر",
      "vi": "quỹ đạo đạn",
      "zh-Hans": "弹道",
      "zh-Hant": "彈道"
     },
     "note": "Latin <i>tra-</i> (across) + <i>ject</i> (throw) + <i>-ory</i> (a thing relating to): the throw across. Same <i>ject</i> as in <b>projectile</b> and <b>eject</b>. Learn the three together: the projectile is the object, the trajectory is the path it takes, and drawn on a graph that path is a parabola.",
     "apply": [
      {
       "id": "kin5_traj_desc",
       "type": "desc",
       "q": "Which word names the path — the line an object traces through the air?",
       "a": "Trajectory",
       "opts": [
        "Trajectory",
        "Projectile",
        "Coefficient",
        "Substitute"
       ],
       "explain": "<i>tra-</i> (across) + <i>ject</i> (throw): the throw across, which is the path. The projectile is the object that follows it."
      },
      {
       "id": "kin5_traj_scn",
       "type": "scenario",
       "q": "A coach films a serve and draws the shape the ball made in the air from racket to court. What has the coach drawn?",
       "a": "Its trajectory",
       "opts": [
        "Its trajectory",
        "Its coefficient",
        "Its symmetry",
        "Its gradient"
       ],
       "explain": "The shape traced through the air is the trajectory. Plotted on axes, it comes out as a parabola."
      },
      {
       "id": "kin5_traj_cloze",
       "type": "cloze",
       "before": "A camera followed the ball from the racket to the court and drew its",
       "after": "as a smooth curve on the screen.",
       "a": "trajectory",
       "opts": [
        "trajectory",
        "coefficient",
        "symmetry",
        "substitute"
       ],
       "explain": "<i>tra-</i> (across) + <i>ject</i> (throw): the path thrown across the air."
      }
     ]
    },
    {
     "w": "symmetry",
     "meaning": "When one half of a shape matches the other half.",
     "example": "A square has four lines of symmetry.",
     "parts": [
      {
       "surface": "sym",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "አንድ ላይ",
        "ar": "معاً",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "एक साथ",
        "ja": "共に",
        "ko": "함께",
        "ml": "ഒരുമിച്ച്",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "اکٹھے",
        "vi": "cùng",
        "zh-Hans": "一起",
        "zh-Hant": "一起"
       }
      },
      {
       "surface": "metr",
       "type": "root",
       "meaning": "measure",
       "tr": {
        "am": "መለኪያ",
        "ar": "قياس",
        "es": "medida",
        "fa": "اندازه‌گیری",
        "fr": "mesure",
        "hi": "माप",
        "ja": "測定",
        "ko": "측정",
        "ml": "അളവ്",
        "ps": "اندازه",
        "ro": "măsură",
        "ru": "мера",
        "ta": "அளவீடு",
        "tl": "sukat",
        "ur": "پیمائش",
        "vi": "đo lường",
        "zh-Hans": "测量",
        "zh-Hant": "測量"
       }
      }
     ],
     "tr": {
      "zh-Hans": "对称",
      "zh-Hant": "對稱",
      "ja": "対称性",
      "ko": "대칭",
      "vi": "sự đối xứng",
      "ar": "التماثل",
      "fa": "تقارن",
      "ur": "توازن (سمیٹری)",
      "am": "ተመጣጣኝነት",
      "ml": "സമമിതി",
      "ta": "சமச்சீர்",
      "tl": "simetriya",
      "ps": "تناظر",
      "ro": "simetrie",
      "ru": "симметрия",
      "fr": "symétrie",
      "hi": "सममिति",
      "es": "simetría"
     },
     "note": "Greek <i>sym-</i> (together) + <i>metr</i> (measure): measuring the same on both sides. The same <i>metr</i> is in <b>metre</b> and <b>thermometer</b>. A parabola has exactly one line of symmetry — a vertical line straight down through the turning point — so the two ground crossings sit the same distance either side of it.",
     "apply": [
      {
       "id": "kin5_sym_scn",
       "type": "scenario",
       "q": "A thrown ball leaves the ground at x = 2 and lands at x = 14. Where is the vertical line that cuts its curve into two matching halves?",
       "a": "x = 8",
       "opts": [
        "x = 8",
        "x = 6",
        "x = 12",
        "x = 16"
       ],
       "explain": "Halfway between the two crossings: (2 + 14) ÷ 2 = 8. The line of symmetry always sits midway, and the turning point sits on it."
      },
      {
       "id": "kin5_sym_desc",
       "type": "desc",
       "q": "Which word describes one half of a shape matching the other half exactly?",
       "a": "Symmetry",
       "opts": [
        "Symmetry",
        "Substitution",
        "Trajectory",
        "Coefficient"
       ],
       "explain": "<i>sym-</i> (together) + <i>metr</i> (measure): the two halves measure the same."
      },
      {
       "id": "kin5_sym_cloze",
       "type": "cloze",
       "before": "Fold a parabola along the vertical line through its turning point and the two halves land exactly on each other:",
       "after": "is what puts the two ground crossings the same distance out.",
       "a": "symmetry",
       "opts": [
        "symmetry",
        "gravity",
        "substitution",
        "correlation"
       ],
       "explain": "<i>sym-</i> + <i>metr</i>: measured the same on both sides of the line through the turning point."
      }
     ]
    },
    {
     "w": "model",
     "meaning": "A rule or equation that describes something real closely enough to predict it.",
     "example": "We model the flight of the ball with y = a(x − h)² + k.",
     "parts": [
      {
       "surface": "model",
       "type": "root",
       "meaning": "representation",
       "tr": {
        "zh-Hans": "模型",
        "ja": "モデル",
        "vi": "mô hình",
        "zh-Hant": "模型",
        "am": "ሞዴል",
        "ar": "نموذج",
        "es": "modelo",
        "fa": "مدل",
        "fr": "modèle",
        "hi": "मॉडल",
        "ko": "모형",
        "ml": "മാതൃക",
        "ps": "ماډل",
        "ro": "model",
        "ru": "модель",
        "ta": "மாதிரி",
        "tl": "modelo",
        "ur": "نمونہ"
       }
      }
     ],
     "tr": {
      "am": "ሞዴል",
      "ar": "نموذج",
      "es": "modelo",
      "fa": "مدل",
      "fr": "modèle",
      "hi": "मॉडल",
      "ja": "モデル",
      "ko": "모형",
      "ml": "മാതൃക",
      "ps": "ماډل",
      "ro": "model",
      "ru": "модель",
      "ta": "மாதிரி",
      "tl": "modelo",
      "ur": "ماڈل",
      "vi": "mô hình",
      "zh-Hans": "模型",
      "zh-Hant": "模型"
     },
     "note": "From Latin <i>modulus</i>, a small measure — a small thing that stands for a big real one. In maths a model is a <b>rule</b>, not a toy: y = a(x − h)² + k is a model of a thrown ball. A model is never perfect; it only has to be close enough to predict. (In business the same word means a plan of the money — the same idea doing a different job.)",
     "apply": [
      {
       "id": "kin5_mod_desc",
       "type": "desc",
       "q": "In maths and science, what is a model?",
       "a": "A rule you can put numbers into to predict what happens",
       "opts": [
        "A rule you can put numbers into to predict what happens",
        "A small plastic copy of a real object",
        "A perfect and exact copy of the real thing",
        "A drawing of the equipment you used"
       ],
       "explain": "In maths a model is a rule, not an object. It is judged by how well it predicts, not by being perfect."
      },
      {
       "id": "kin5_mod_scn",
       "type": "scenario",
       "q": "Your group fits y = −0.025(x − 4)² + 3.6 to a serve, then uses it to work out the height of the ball at the net. What have you just done?",
       "a": "Used a model to predict",
       "opts": [
        "Used a model to predict",
        "Measured the height at the net directly",
        "Proved the rule is exactly correct",
        "Changed the independent variable"
       ],
       "explain": "The rule stands in for the real serve, so it answers a question about the ball without another ball being hit. That is modelling."
      },
      {
       "id": "kin5_mod_cloze",
       "type": "cloze",
       "before": "No equation matches a real throw perfectly, but y = a(x − h)² + k is close enough to be a useful",
       "after": "of the flight.",
       "a": "model",
       "opts": [
        "model",
        "trajectory",
        "coefficient",
        "symmetry"
       ],
       "explain": "A rule that stands in for the real thing is judged by how well it predicts, not by being perfect."
      }
     ]
    }
   ]
  },
  {
   "id": "prac",
   "area": "kin",
   "title": "Writing up a practical",
   "focus": "The words a report is marked on: which variable you changed, which you measured, and how far to trust the answer.",
   "words": [
    {
     "w": "independent",
     "meaning": "The variable you choose and change yourself in an experiment.",
     "example": "Drop height was the independent variable, because we chose it.",
     "parts": [
      {
       "surface": "in",
       "type": "prefix",
       "meaning": "not",
       "tr": {
        "zh-Hans": "不",
        "ja": "不",
        "vi": "không",
        "zh-Hant": "不",
        "am": "አይ",
        "ar": "غير",
        "es": "no",
        "fa": "نه",
        "fr": "non",
        "hi": "नहीं",
        "ko": "아닌",
        "ml": "അല്ല",
        "ps": "نه",
        "ro": "nu",
        "ru": "не",
        "ta": "இல்லாத",
        "tl": "hindi",
        "ur": "نہیں",
        "other": "نه"
       }
      },
      {
       "surface": "depend",
       "type": "root",
       "meaning": "rely on",
       "tr": {
        "zh-Hans": "依靠",
        "ja": "依存する",
        "vi": "phụ thuộc",
        "zh-Hant": "依靠",
        "am": "መደገፍ",
        "ar": "يعتمد على",
        "es": "depender de",
        "fa": "وابسته بودن",
        "fr": "dépendre de",
        "hi": "निर्भर",
        "ko": "의존",
        "ml": "ആശ്രയിക്കുക",
        "ps": "تکیه",
        "ro": "a depinde de",
        "ru": "зависеть",
        "ta": "சார்ந்திருத்தல்",
        "tl": "umasa",
        "ur": "انحصار"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "person / quality",
       "tr": {
        "zh-Hans": "人",
        "ja": "性質",
        "vi": "người",
        "zh-Hant": "人",
        "am": "ሰው/ባህርይ",
        "ar": "شخص/صفة",
        "es": "persona/cualidad",
        "fa": "شخص/ویژگی",
        "fr": "personne/qualité",
        "hi": "व्यक्ति/गुण",
        "ko": "사람/성질",
        "ml": "വ്യക്തി/ഗുണം",
        "ps": "کس/خاصیت",
        "ro": "persoană/calitate",
        "ru": "человек/качество",
        "ta": "நபர்/பண்பு",
        "tl": "tao/katangian",
        "ur": "شخص/خاصیت",
        "other": "بودن"
       }
      }
     ],
     "tr": {
      "am": "ነጻ",
      "ar": "مستقل",
      "es": "independiente",
      "fa": "مستقل",
      "fr": "indépendant",
      "hi": "स्वतंत्र",
      "ja": "独立の",
      "ko": "독립적인",
      "ml": "സ്വതന്ത്രം",
      "ps": "خپلواک",
      "ro": "independent",
      "ru": "независимый",
      "ta": "சார்பிலா",
      "tl": "independiyente",
      "ur": "آزاد",
      "vi": "độc lập",
      "zh-Hans": "自变",
      "zh-Hant": "自變"
     },
     "note": "Latin <i>in-</i> (not) + <i>depend</i> (hang from, rely on) + <i>-ent</i>: not hanging on anything else. In a practical it is the one <b>you</b> decide before you start, and it goes across the bottom axis of the graph. Same <i>depend</i> as in <b>dependent</b> — the two together are your whole variables sentence.",
     "apply": [
      {
       "id": "prac_ind_scn",
       "type": "scenario",
       "q": "Your group sets the ball at 2 m, 4 m, 6 m and 8 m and times each fall. Which quantity did the group decide before starting?",
       "a": "The height of the drop",
       "opts": [
        "The height of the drop",
        "The time of the fall",
        "The mass of the ball",
        "The temperature of the room"
       ],
       "explain": "The heights were decided in advance, so height is the independent variable. The time came out of the stopwatch instead."
      },
      {
       "id": "prac_ind_desc",
       "type": "desc",
       "q": "Which variable goes across the bottom axis of your results graph?",
       "a": "The one you chose and changed",
       "opts": [
        "The one you chose and changed",
        "The one you measured",
        "The one you kept the same",
        "The one with the biggest numbers"
       ],
       "explain": "The independent variable — the one you set yourself — goes on the horizontal axis. The measured one goes up the side."
      },
      {
       "id": "prac_ind_cloze",
       "type": "cloze",
       "before": "We chose the drop height ourselves and changed it for every run, so drop height was the",
       "after": "variable in this experiment.",
       "a": "independent",
       "opts": [
        "independent",
        "dependent",
        "controlled",
        "reliable"
       ],
       "explain": "<i>in-</i> (not) + <i>depend</i>: it does not hang on anything else in the experiment, because you decide it."
      }
     ]
    },
    {
     "w": "dependent",
     "meaning": "The variable you measure; its value follows from the one you changed.",
     "example": "Fall time was the dependent variable, because it depended on the height.",
     "parts": [
      {
       "surface": "depend",
       "type": "root",
       "meaning": "rely on",
       "tr": {
        "zh-Hans": "依靠",
        "ja": "依存する",
        "vi": "phụ thuộc",
        "zh-Hant": "依靠",
        "am": "መደገፍ",
        "ar": "يعتمد على",
        "es": "depender de",
        "fa": "وابسته بودن",
        "fr": "dépendre de",
        "hi": "निर्भर",
        "ko": "의존",
        "ml": "ആശ്രയിക്കുക",
        "ps": "تکیه",
        "ro": "a depinde de",
        "ru": "зависеть",
        "ta": "சார்ந்திருத்தல்",
        "tl": "umasa",
        "ur": "انحصار"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "person / quality",
       "tr": {
        "zh-Hans": "人",
        "ja": "性質",
        "vi": "người",
        "zh-Hant": "人",
        "am": "ሰው/ባህርይ",
        "ar": "شخص/صفة",
        "es": "persona/cualidad",
        "fa": "شخص/ویژگی",
        "fr": "personne/qualité",
        "hi": "व्यक्ति/गुण",
        "ko": "사람/성질",
        "ml": "വ്യക്തി/ഗുണം",
        "ps": "کس/خاصیت",
        "ro": "persoană/calitate",
        "ru": "человек/качество",
        "ta": "நபர்/பண்பு",
        "tl": "tao/katangian",
        "ur": "شخص/خاصیت",
        "other": "بودن"
       }
      }
     ],
     "tr": {
      "am": "ጥገኛ",
      "ar": "تابع",
      "es": "dependiente",
      "fa": "وابسته",
      "fr": "dépendant",
      "hi": "आश्रित",
      "ja": "従属の",
      "ko": "종속의",
      "ml": "ആശ്രിതം",
      "ps": "تابع",
      "ro": "dependent",
      "ru": "зависимый",
      "ta": "சார்பு",
      "tl": "dependent",
      "ur": "منحصر",
      "vi": "phụ thuộc",
      "zh-Hans": "因变",
      "zh-Hant": "因變"
     },
     "note": "Latin <i>depend</i> (hang from) + <i>-ent</i>: it hangs on something else. In a practical it is the one you <b>measure</b>, and it goes up the side axis. Say the sentence in this order and you cannot get it wrong: <i>we changed the independent variable and measured the dependent variable</i>.",
     "apply": [
      {
       "id": "prac_dep_scn",
       "type": "scenario",
       "q": "You set four different heights, then read the stopwatch after every drop. Which quantity did you measure?",
       "a": "The fall time",
       "opts": [
        "The fall time",
        "The height",
        "The mass of the ball",
        "The number of people in the group"
       ],
       "explain": "The stopwatch reading is the measured quantity, so fall time is the dependent variable: it hangs on the height you chose."
      },
      {
       "id": "prac_dep_desc",
       "type": "desc",
       "q": "Which variable is plotted up the side axis of a results graph?",
       "a": "The one you measured",
       "opts": [
        "The one you measured",
        "The one you chose",
        "The one you kept the same",
        "The one that was hardest to read"
       ],
       "explain": "The measured variable goes up the vertical axis. The one you chose goes across the bottom."
      },
      {
       "id": "prac_dep_cloze",
       "type": "cloze",
       "before": "We measured the fall time, and it changed only because we changed the height, so time was the",
       "after": "variable.",
       "a": "dependent",
       "opts": [
        "dependent",
        "independent",
        "controlled",
        "average"
       ],
       "explain": "It hangs on the variable you chose — change the height and the time changes with it."
      }
     ]
    },
    {
     "w": "controlled",
     "meaning": "Kept the same on purpose, so it cannot change the result.",
     "example": "The same ball was used every time, so its mass was a controlled variable.",
     "parts": [
      {
       "surface": "control",
       "type": "root",
       "meaning": "regulate",
       "tr": {
        "zh-Hans": "控制",
        "ja": "制御",
        "vi": "kiểm soát",
        "zh-Hant": "控制",
        "am": "መቆጣጠር",
        "ar": "ينظّم",
        "es": "regular",
        "fa": "تنظیم کردن",
        "fr": "réguler",
        "hi": "नियंत्रित करना",
        "ko": "조절하다",
        "ml": "നിയന്ത്രിക്കുക",
        "ps": "کنټرولول / تنظیمول",
        "ro": "a regla",
        "ru": "регулировать",
        "ta": "கட்டுப்படுத்துதல்",
        "tl": "kontrolin",
        "ur": "قابو کرنا"
       }
      },
      {
       "surface": "led",
       "type": "suffix",
       "meaning": "past form",
       "tr": {
        "zh-Hans": "过去式",
        "ja": "過去形",
        "vi": "quá khứ",
        "zh-Hant": "過去式",
        "am": "ኃላፊ ጊዜ",
        "ar": "صيغة الماضي",
        "es": "forma pasada",
        "fa": "شکل گذشته",
        "fr": "forme du passé",
        "hi": "भूतकाल रूप",
        "ko": "과거형",
        "ml": "ഭൂതകാല രൂപം",
        "ps": "تېر مهال بڼه",
        "ro": "formă de trecut",
        "ru": "прошедшая форма",
        "ta": "இறந்தகால வடிவம்",
        "tl": "pangnagdaang anyo",
        "ur": "ماضی کی شکل"
       }
      }
     ],
     "tr": {
      "am": "ቁጥጥር የተደረገበት",
      "ar": "متحكم فيه",
      "es": "controlado",
      "fa": "کنترل‌شده",
      "fr": "contrôlé",
      "hi": "नियंत्रित",
      "ja": "制御された",
      "ko": "통제된",
      "ml": "നിയന്ത്രിത",
      "ps": "کنټرول شوی",
      "ro": "controlat",
      "ru": "контролируемый",
      "ta": "கட்டுப்படுத்தப்பட்ட",
      "tl": "kontrolado",
      "ur": "کنٹرول شدہ",
      "vi": "được kiểm soát",
      "zh-Hans": "控制",
      "zh-Hant": "控制"
     },
     "note": "<b>control</b> + <b>-led</b> (past form): held steady on purpose. A controlled variable is one you deliberately keep the same so that the only thing changing is the variable you chose. Change two things at once and you can no longer say which one caused the result — which is why every report names at least two of them.",
     "apply": [
      {
       "id": "prac_ctrl_scn",
       "type": "scenario",
       "q": "You use the same ball, the same stopwatch and the same timekeeper for every drop. What are those three called?",
       "a": "Controlled variables",
       "opts": [
        "Controlled variables",
        "Independent variables",
        "Dependent variables",
        "Anomalies"
       ],
       "explain": "They were kept the same on purpose so that the height was the only thing changing from run to run."
      },
      {
       "id": "prac_ctrl_desc",
       "type": "desc",
       "q": "Why do you keep some quantities exactly the same all the way through an experiment?",
       "a": "So the only thing changing is the variable you chose",
       "opts": [
        "So the only thing changing is the variable you chose",
        "So the experiment is quicker",
        "So the graph looks neater",
        "So you need fewer trials"
       ],
       "explain": "If two things change at once you cannot say which one caused the result. That is why some quantities are held steady."
      },
      {
       "id": "prac_ctrl_cloze",
       "type": "cloze",
       "before": "Halfway through, one group swapped to a heavier ball. Mass was supposed to be a",
       "after": "variable, so their results can no longer be compared.",
       "a": "controlled",
       "opts": [
        "controlled",
        "independent",
        "dependent",
        "reliable"
       ],
       "explain": "It was supposed to be held the same on purpose. Change it halfway through and the runs can no longer be compared."
      }
     ]
    },
    {
     "w": "trendline",
     "meaning": "One straight guide drawn through a set of plotted points to show the overall pattern.",
     "example": "We added a trendline and read its gradient to find g.",
     "parts": [
      {
       "surface": "trend",
       "type": "root",
       "meaning": "direction / general change",
       "tr": {
        "zh-Hans": "趋势",
        "ja": "傾向",
        "vi": "xu hướng",
        "zh-Hant": "趨勢",
        "am": "አዝማሚያ",
        "ar": "اتجاه",
        "es": "dirección/tendencia",
        "fa": "روند",
        "fr": "tendance",
        "hi": "प्रवृत्ति",
        "ko": "경향",
        "ml": "പ്രവണത",
        "ps": "رجحان",
        "ro": "tendință",
        "ru": "тенденция",
        "ta": "போக்கு",
        "tl": "tendensiya",
        "ur": "رجحان"
       }
      },
      {
       "surface": "line",
       "type": "root",
       "meaning": "line",
       "tr": {
        "zh-Hans": "线",
        "ja": "線",
        "vi": "đường",
        "zh-Hant": "線",
        "am": "መስመር",
        "ar": "خط",
        "es": "línea",
        "fa": "خط",
        "fr": "ligne",
        "hi": "रेखा",
        "ko": "선",
        "ml": "രേഖ",
        "ps": "کرښه",
        "ro": "linie",
        "ru": "линия",
        "ta": "கோடு",
        "tl": "linya",
        "ur": "لکیر"
       }
      }
     ],
     "tr": {
      "am": "የአዝማሚያ መስመር",
      "ar": "خط الاتجاه",
      "es": "línea de tendencia",
      "fa": "خط روند",
      "fr": "ligne de tendance",
      "hi": "प्रवृत्ति रेखा",
      "ja": "トレンドライン",
      "ko": "추세선",
      "ml": "പ്രവണതാരേഖ",
      "ps": "د رجحان کرښه",
      "ro": "linie de tendință",
      "ru": "линия тренда",
      "ta": "போக்குக் கோடு",
      "tl": "linya ng tendensiya",
      "ur": "رجحان کی لکیر",
      "vi": "đường xu hướng",
      "zh-Hans": "趋势线",
      "zh-Hant": "趨勢線"
     },
     "note": "<b>trend</b> (the general direction) + <b>line</b>: one straight line drawn through a cloud of points so the whole pattern can be read as a single number — its gradient. It does not have to touch every point; it should have points either side of it. A spreadsheet will add one for you and print its equation.",
     "apply": [
      {
       "id": "prac_trend_scn",
       "type": "scenario",
       "q": "Your points are a little scattered but rise steadily. What is the best line to draw through them?",
       "a": "One straight line with points on both sides of it",
       "opts": [
        "One straight line with points on both sides of it",
        "A line joining every point, dot to dot",
        "A line through the highest point only",
        "No line at all — just the points"
       ],
       "explain": "One straight line shows the overall pattern and gives you a gradient. Joining the dots hides the pattern instead."
      },
      {
       "id": "prac_trend_desc",
       "type": "desc",
       "q": "Which line shows the overall pattern of a scatter of points?",
       "a": "A trendline",
       "opts": [
        "A trendline",
        "An axis",
        "An anomaly",
        "An outlier"
       ],
       "explain": "<b>trend</b> means the general direction. One straight line through the points shows it, and its gradient is the number you want."
      },
      {
       "id": "prac_trend_cloze",
       "type": "cloze",
       "before": "The points did not sit exactly on a line, so we drew a single straight",
       "after": "through the middle of them and read its gradient.",
       "a": "trendline",
       "opts": [
        "trendline",
        "outlier",
        "anomaly",
        "average"
       ],
       "explain": "One straight line through the middle of the points, not a line joining them."
      }
     ]
    },
    {
     "w": "gravity",
     "meaning": "the non-contact force that pulls objects with mass towards each other.",
     "example": "Gravity makes a dropped ball speed up by about 9.8 m/s every second.",
     "parts": [
      {
       "surface": "grav",
       "type": "root",
       "meaning": "heavy",
       "tr": {
        "am": "ከባድ",
        "ar": "ثقيل",
        "es": "pesado",
        "fa": "سنگین",
        "fr": "lourd",
        "hi": "भारी",
        "ja": "重い",
        "ko": "무거운",
        "ml": "ഭാരമുള്ള",
        "ps": "دروند",
        "ro": "greu",
        "ru": "тяжёлый",
        "ta": "கனமான",
        "tl": "mabigat",
        "ur": "بھاری",
        "vi": "nặng",
        "zh-Hans": "重",
        "zh-Hant": "重"
       }
      },
      {
       "surface": "ity",
       "type": "suffix",
       "meaning": "state of (makes a noun)",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de (forma un sustantivo)",
        "fa": "حالت",
        "fr": "état de",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態",
        "other": "حالت"
       }
      }
     ],
     "tr": {
      "am": "ስበት",
      "ar": "جاذبية",
      "es": "gravedad",
      "fa": "گرانش",
      "fr": "gravité",
      "hi": "गुरुत्वाकर्षण",
      "ja": "重力",
      "ko": "중력",
      "ml": "ഗുരുത്വാകർഷണം",
      "ps": "جاذبه",
      "ro": "gravitație",
      "ru": "гравитация",
      "ta": "புவியீர்ப்பு",
      "tl": "grabidad",
      "ur": "کشش ثقل",
      "vi": "trọng lực",
      "zh-Hans": "重力",
      "zh-Hant": "重力"
     },
     "note": "Latin <i>grav</i> (heavy) + <i>-ity</i> (state of): the state of being heavy. The same <i>grav</i> is in <b>grave</b> (serious, weighty) and <b>gravel</b>. On Earth gravity gives every falling object the same acceleration, about <b>9.8 m/s²</b>, whatever it weighs — and that number is what the Ball Drop report sets out to measure.",
     "apply": [
      {
       "id": "prac_grav_scn",
       "type": "scenario",
       "q": "A heavy ball and a light ball are released at the same moment from the same height, with no air resistance. Which lands first?",
       "a": "They land together",
       "opts": [
        "They land together",
        "The heavy one lands first",
        "The light one lands first",
        "It depends on their colour"
       ],
       "explain": "Gravity gives both the same acceleration, about 9.8 m/s². There is no mass anywhere in h = ½gt²."
      },
      {
       "id": "prac_grav_desc",
       "type": "desc",
       "q": "Which force pulls a dropped object towards the ground?",
       "a": "Gravity",
       "opts": [
        "Gravity",
        "Mass",
        "Symmetry",
        "Correlation"
       ],
       "explain": "<i>grav</i> = heavy. Mass is the amount of matter in the object; this is the force that pulls on it."
      },
      {
       "id": "prac_grav_cloze",
       "type": "cloze",
       "before": "A ball dropped on the Moon takes longer to fall than the same ball on Earth, because",
       "after": "there is weaker.",
       "a": "gravity",
       "opts": [
        "gravity",
        "mass",
        "average",
        "symmetry"
       ],
       "explain": "The pull on the Moon is weaker, so g there is about 1.6 m/s² instead of 9.8 m/s²."
      }
     ]
    },
    {
     "w": "mass",
     "meaning": "the amount of matter in an object, measured in kilograms; it does not change with location.",
     "example": "The mass of the ball was 0.2 kg on the balance.",
     "parts": [],
     "tr": {
      "am": "ግዝፈት",
      "ar": "الكتلة",
      "es": "masa",
      "fa": "جرم",
      "fr": "masse",
      "hi": "द्रव्यमान",
      "ja": "質量",
      "ko": "질량",
      "ml": "പിണ്ഡം",
      "ps": "کتله",
      "ro": "masă",
      "ru": "масса",
      "ta": "நிறை",
      "tl": "masa",
      "ur": "کمیت",
      "vi": "khối lượng",
      "zh-Hans": "质量",
      "zh-Hant": "質量"
     },
     "note": "From Latin <i>massa</i>, a lump of dough: how much stuff there is in something. Mass is measured in <b>kilograms</b> and it is the same on Earth, on the Moon or in space. Weight is a different word: weight is the pull of gravity on that mass, so weight changes when gravity changes and mass does not.",
     "apply": [
      {
       "id": "prac_mass_scn",
       "type": "scenario",
       "q": "An astronaut carries a toolbox with a mass of two kilograms to the Moon. What is its mass once she is standing on the Moon?",
       "a": "2 kg",
       "opts": [
        "2 kg",
        "0 kg",
        "12 kg",
        "0.33 kg"
       ],
       "explain": "Mass is the amount of matter, so it does not change with location. The weight becomes about six times less, but weight is a different word."
      },
      {
       "id": "prac_mass_desc",
       "type": "desc",
       "q": "Which quantity is measured in kilograms and stays the same wherever you take the object?",
       "a": "Mass",
       "opts": [
        "Mass",
        "Gravity",
        "Trial",
        "Average"
       ],
       "explain": "Mass is the amount of matter, measured in kilograms. Gravity is the force pulling on it, and that changes from place to place."
      },
      {
       "id": "prac_mass_cloze",
       "type": "cloze",
       "before": "We used the same ball for every drop, so its",
       "after": "was controlled — and in any case it does not appear in h = ½gt².",
       "a": "mass",
       "opts": [
        "mass",
        "gravity",
        "trial",
        "trendline"
       ],
       "explain": "There is no letter for it in h = ½gt², so a heavy ball and a light ball fall together."
      }
     ]
    },
    {
     "w": "average",
     "meaning": "The one number that stands for a whole set: add them all up and divide by how many there are.",
     "example": "Three trials gave 1.08 s, 1.13 s and 1.09 s, so the average was 1.10 s.",
     "parts": [
      {
       "surface": "average",
       "type": "root",
       "meaning": "middle value",
       "tr": {
        "zh-Hans": "平均",
        "ja": "平均",
        "vi": "trung bình",
        "zh-Hant": "平均",
        "am": "አማካይ",
        "ar": "متوسط",
        "es": "promedio",
        "fa": "میانگین",
        "fr": "moyenne",
        "hi": "औसत",
        "ko": "평균",
        "ml": "ശരാശരി",
        "ps": "اوسط",
        "ro": "medie",
        "ru": "среднее",
        "ta": "சராசரி",
        "tl": "average",
        "ur": "اوسط"
       }
      }
     ],
     "tr": {
      "am": "አማካይ",
      "ar": "متوسط",
      "es": "promedio",
      "fa": "میانگین",
      "fr": "moyenne",
      "hi": "औसत",
      "ja": "平均",
      "ko": "평균",
      "ml": "ശരാശരി",
      "ps": "منځنی",
      "ro": "medie",
      "ru": "среднее",
      "ta": "சராசரி",
      "tl": "karaniwan",
      "ur": "اوسط",
      "vi": "trung bình",
      "zh-Hans": "平均",
      "zh-Hant": "平均"
     },
     "note": "The average is the one number that stands for a whole set of readings: add them up and divide by how many there are. A report asks for an average precisely because one reading can be wrong — three trials averaged sit closer to the truth than the best single go. The exact maths name for this average is the <b>mean</b>.",
     "apply": [
      {
       "id": "prac_avg_scn",
       "type": "scenario",
       "q": "Three timings of the same drop are 1.08 s, 1.13 s and 1.09 s. What single number should go in the results table?",
       "a": "1.10 s",
       "opts": [
        "1.10 s",
        "1.08 s",
        "1.13 s",
        "3.30 s"
       ],
       "explain": "Add them: 1.08 + 1.13 + 1.09 = 3.30. Divide by how many there are: 3.30 ÷ 3 = 1.10 s."
      },
      {
       "id": "prac_avg_desc",
       "type": "desc",
       "q": "Why does a report ask you to time each height three times instead of once?",
       "a": "So one bad reading matters less",
       "opts": [
        "So one bad reading matters less",
        "So the experiment takes longer",
        "So the graph has more points along the bottom axis",
        "So you can choose the fastest time"
       ],
       "explain": "Averaging three readings pulls the result closer to the truth, because one late thumb on the stopwatch is shared out between three."
      },
      {
       "id": "prac_avg_cloze",
       "type": "cloze",
       "before": "One stopwatch reading can easily be late or early, so we timed each height three times and used the",
       "after": "of the three.",
       "a": "average",
       "opts": [
        "average",
        "anomaly",
        "outlier",
        "trial"
       ],
       "explain": "Add the three readings and divide by three — one number that stands for all of them."
      }
     ]
    },
    {
     "w": "mean",
     "meaning": "the average: add all the values and divide by how many there are",
     "example": "The mean of 4, 6 and 8 is 6.",
     "parts": [
      {
       "surface": "mean",
       "type": "root",
       "meaning": "middle",
       "tr": {
        "zh-Hans": "中间",
        "zh-Hant": "中間",
        "ja": "中間",
        "ko": "중간",
        "vi": "giữa",
        "ar": "وسط",
        "fa": "میانه",
        "ur": "درمیانی",
        "am": "መካከለኛ",
        "ml": "മധ്യം",
        "ta": "நடு",
        "tl": "gitna",
        "ps": "منځنی",
        "ro": "mijloc",
        "ru": "середина",
        "fr": "milieu",
        "hi": "मध्य",
        "es": "medio"
       }
      }
     ],
     "tr": {
      "am": "አማካይ",
      "ar": "المتوسط الحسابي",
      "es": "media",
      "fa": "میانگین",
      "fr": "moyenne",
      "hi": "माध्य",
      "ja": "平均値",
      "ko": "평균",
      "ml": "ശരാശരി",
      "ps": "اوسط",
      "ro": "medie",
      "ru": "среднее значение",
      "ta": "சராசரி",
      "tl": "katamtaman",
      "ur": "اوسط",
      "vi": "trung bình cộng",
      "zh-Hans": "平均数",
      "zh-Hant": "平均數"
     },
     "note": "In maths and science <b>mean</b> is the exact name for the average: add every value, then divide by how many there are. The root is <i>mean</i> = middle, the same idea as in <b>meantime</b> and <b>medium</b>. It has nothing to do with mean = unkind, and nothing to do with 'what does this word mean'. In a results table it is the column you plot.",
     "apply": [
      {
       "id": "prac_mean_scn",
       "type": "scenario",
       "q": "One row of your results table reads 4 s, 6 s and 8 s for three trials at the same height. What is the mean?",
       "a": "6 s",
       "opts": [
        "6 s",
        "18 s",
        "4 s",
        "9 s"
       ],
       "explain": "Add the three readings: 4 + 6 + 8 = 18. Divide by how many there are: 18 ÷ 3 = 6 s."
      },
      {
       "id": "prac_mean_desc",
       "type": "desc",
       "q": "In a maths or science report, which word is the exact name for the average of a set of values?",
       "a": "Mean",
       "opts": [
        "Mean",
        "Median",
        "Range",
        "Trial"
       ],
       "explain": "The mean is the add-them-up-and-divide average. The median is the middle one when they are put in order, and the range is the biggest minus the smallest."
      },
      {
       "id": "prac_mean_cloze",
       "type": "cloze",
       "before": "Add the three readings and divide by three, then write the",
       "after": "in the last column of the table — that is the number you plot.",
       "a": "mean",
       "opts": [
        "mean",
        "anomaly",
        "gradient",
        "trial"
       ],
       "explain": "Add up and divide: one value that stands for that whole row, and the one you plot on the graph."
      }
     ]
    },
    {
     "w": "trial",
     "meaning": "One single go of an experiment. You repeat it so you can take a mean.",
     "example": "We timed three trials at each height and took the mean.",
     "parts": [
      {
       "surface": "tri",
       "type": "root",
       "meaning": "attempt",
       "tr": {
        "am": "ሙከራ",
        "ar": "محاولة",
        "es": "intento",
        "fa": "تلاش",
        "fr": "tentative",
        "hi": "प्रयास",
        "ja": "試み",
        "ko": "시도",
        "ml": "ശ്രമം",
        "ps": "هڅه",
        "ro": "încercare",
        "ru": "попытка",
        "ta": "முயற்சி",
        "tl": "pagsubok",
        "ur": "کوشش",
        "vi": "cố gắng",
        "zh-Hans": "尝试",
        "zh-Hant": "嘗試"
       }
      },
      {
       "surface": "al",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "وابسته به",
        "am": "ተያያዥ",
        "ar": "متعلق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "may kaugnayan sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "am": "ሙከራ",
      "ar": "تجربة",
      "es": "prueba",
      "fa": "آزمون",
      "fr": "essai",
      "hi": "परीक्षण",
      "ja": "試行",
      "ko": "시행",
      "ml": "ശ്രമം",
      "ps": "ازموینه",
      "ro": "încercare",
      "ru": "испытание",
      "ta": "முயற்சி",
      "tl": "pagsubok",
      "ur": "آزمائش",
      "vi": "phép thử",
      "zh-Hans": "试验",
      "zh-Hant": "試驗"
     },
     "note": "Latin <i>tri</i> (attempt) + <i>-al</i> (relating to): one attempt. In a practical, one trial is one go — one release, one timing. You repeat trials so you have something to average, which is why the method says 'repeat three times'. (In the news the same word means a case in court; in the laboratory it only ever means one attempt.)",
     "apply": [
      {
       "id": "prac_trial_scn",
       "type": "scenario",
       "q": "The method says: release the ball, time the fall, and repeat until you have three timings at each height. What is one single release-and-time called?",
       "a": "One trial",
       "opts": [
        "One trial",
        "One anomaly",
        "One average",
        "One outlier"
       ],
       "explain": "Each single go is one trial. Three of them at the same height give you something to average."
      },
      {
       "id": "prac_trial_desc",
       "type": "desc",
       "q": "Why does a method ask you to repeat the same measurement several times?",
       "a": "So a single bad go does not decide the result",
       "opts": [
        "So a single bad go does not decide the result",
        "So the table looks longer",
        "So the trendline is steeper",
        "So the independent variable changes"
       ],
       "explain": "More goes means you can take a mean, so one late thumb on the stopwatch matters much less."
      },
      {
       "id": "prac_trial_cloze",
       "type": "cloze",
       "before": "The stopwatch is never exact, so the method asks for three goes at every height. Each single release-and-time is one",
       "after": "of the three we averaged.",
       "a": "trial",
       "opts": [
        "trial",
        "anomaly",
        "trendline",
        "gradient"
       ],
       "explain": "<i>tri</i> = attempt. One attempt is one go, and the three goes are averaged."
      }
     ]
    },
    {
     "w": "reliable",
     "meaning": "You can trust it — it gives the same result again and again.",
     "example": "Three trials that agree closely make the result more reliable.",
     "parts": [
      {
       "surface": "re",
       "type": "prefix",
       "meaning": "again",
       "tr": {
        "fa": "دوباره/باز",
        "am": "እንደገና",
        "ar": "مرة أخرى",
        "es": "de nuevo / atrás",
        "fr": "de nouveau / en arrière",
        "hi": "फिर से / वापस",
        "ja": "再び / 戻る",
        "ko": "다시 / 뒤로",
        "ml": "വീണ്ടും",
        "ps": "بیا / شاته",
        "ro": "din nou / înapoi",
        "ru": "снова / назад",
        "ta": "மீண்டும் / பின்",
        "tl": "muli / pabalik",
        "ur": "دوبارہ / واپس",
        "vi": "lại",
        "zh-Hans": "再次；回",
        "zh-Hant": "再次；回"
       }
      },
      {
       "surface": "li",
       "type": "root",
       "meaning": "bind",
       "tr": {
        "zh-Hans": "捆绑",
        "zh-Hant": "綁",
        "ja": "縛る",
        "ko": "묶다",
        "vi": "buộc",
        "ar": "ربط",
        "fa": "بستن",
        "ur": "باندھنا",
        "am": "ማሰር",
        "ml": "ബന്ധിക്കുക",
        "ta": "கட்டு",
        "tl": "igapos",
        "ps": "تړل",
        "ro": "a lega",
        "ru": "связывать",
        "fr": "lier",
        "hi": "बांधना",
        "es": "atar"
       }
      },
      {
       "surface": "able",
       "type": "suffix",
       "meaning": "can be",
       "tr": {
        "fa": "قابل",
        "am": "የሚችል",
        "ar": "قادر على",
        "es": "capaz de",
        "fr": "capable de",
        "hi": "योग्य",
        "ja": "できる",
        "ko": "할 수 있는",
        "ml": "കഴിയുന്ന",
        "ps": "وړ",
        "ro": "capabil",
        "ru": "способный",
        "ta": "முடியும்",
        "tl": "kaya",
        "ur": "قابل",
        "vi": "có thể",
        "zh-Hans": "能够",
        "zh-Hant": "能夠"
       }
      }
     ],
     "tr": {
      "zh-Hans": "可靠的",
      "zh-Hant": "可靠的",
      "ja": "信頼できる",
      "ko": "신뢰할 수 있는",
      "vi": "đáng tin cậy",
      "ar": "موثوق",
      "fa": "قابل اعتماد",
      "ur": "قابل اعتماد",
      "am": "አስተማማኝ",
      "ml": "വിശ്വസനീയമായ",
      "ta": "நம்பகமான",
      "tl": "maaasahan",
      "ps": "باوري",
      "ro": "fiabil",
      "ru": "надёжный",
      "fr": "fiable",
      "hi": "विश्वसनीय",
      "es": "fiable"
     },
     "note": "Latin <i>re-</i> (again) + <i>li</i> (bind) + <i>-able</i> (can be): something you can bind yourself to again and again. In a practical, a result is reliable when repeating it gives nearly the same answer every time. Careful: reliable is about <b>repeating</b>, not about being right — a bent ruler will give you reliably wrong answers.",
     "apply": [
      {
       "id": "prac_rel_scn",
       "type": "scenario",
       "q": "Group A's three timings are 1.09 s, 1.10 s and 1.11 s. Group B's are 0.9 s, 1.4 s and 1.1 s. Whose results can be trusted to repeat?",
       "a": "Group A's",
       "opts": [
        "Group A's",
        "Group B's",
        "Neither group's",
        "Both are equally trustworthy"
       ],
       "explain": "Group A's three readings sit very close together, so repeating gives nearly the same answer. Group B's are spread right out."
      },
      {
       "id": "prac_rel_desc",
       "type": "desc",
       "q": "What makes a set of measurements trustworthy to repeat?",
       "a": "Repeating them gives nearly the same answer",
       "opts": [
        "Repeating them gives nearly the same answer",
        "They were taken very quickly",
        "They were taken by the oldest student in the group",
        "They all came from one careful go"
       ],
       "explain": "<i>re-</i> (again) + <i>li</i> (bind): you can bind yourself to it again. Note that this is about repeating, not about being correct."
      },
      {
       "id": "prac_rel_cloze",
       "type": "cloze",
       "before": "Our three timings at each height agreed to within 0.03 s, so we could write that our results were",
       "after": "and record the mean with confidence.",
       "a": "reliable",
       "opts": [
        "reliable",
        "independent",
        "controlled",
        "quadratic"
       ],
       "explain": "Repeat it and you get nearly the same number again — that is what the word claims, and nothing more."
      }
     ]
    },
    {
     "w": "anomaly",
     "meaning": "A value or result that does not fit the pattern.",
     "example": "The reading of 92 is an anomaly and should be checked.",
     "parts": [
      {
       "surface": "an",
       "type": "prefix",
       "meaning": "not/without",
       "tr": {
        "am": "ያለ",
        "ar": "بدون",
        "es": "sin",
        "fa": "بدون",
        "fr": "sans",
        "hi": "बिना",
        "ja": "無",
        "ko": "무",
        "ml": "ഇല്ലാതെ",
        "ps": "پرته",
        "ro": "fără",
        "ru": "без",
        "ta": "இல்லாமல்",
        "tl": "walang",
        "ur": "بغیر",
        "vi": "vô",
        "zh-Hans": "无",
        "zh-Hant": "無"
       }
      },
      {
       "surface": "omal",
       "type": "root",
       "meaning": "even/same",
       "tr": {
        "zh-Hans": "均匀/相同",
        "zh-Hant": "均勻/相同",
        "ja": "均一な/同じ",
        "ko": "균일한/같은",
        "vi": "đều/giống nhau",
        "ar": "متساوٍ",
        "fa": "یکنواخت",
        "ur": "یکساں",
        "am": "ተመሳሳይ",
        "ml": "സമമായ",
        "ta": "சமமான",
        "tl": "pantay",
        "ps": "یو شان",
        "ro": "egal/uniform",
        "ru": "равный/одинаковый",
        "fr": "égal/uniforme",
        "hi": "समान",
        "es": "igual/uniforme"
       }
      }
     ],
     "tr": {
      "zh-Hans": "异常值",
      "zh-Hant": "異常值",
      "ja": "異常値",
      "ko": "이상치",
      "vi": "giá trị bất thường",
      "ar": "الشذوذ (القيمة الشاذة)",
      "fa": "ناهنجاری (مقدار غیرعادی)",
      "ur": "غیر معمولی قدر",
      "am": "ያልተለመደ (ውጭ የሆነ) ዋጋ",
      "ml": "അസാധാരണ മൂല്യം",
      "ta": "முரண்பாடு (இயல்பிலிருந்து விலகல்)",
      "tl": "kakaibang halaga (anomaly)",
      "ps": "غیر معمولي ارزښت",
      "ro": "anomalie",
      "ru": "аномалия",
      "fr": "anomalie",
      "hi": "विसंगति",
      "es": "anomalía"
     },
     "note": "Greek <i>an-</i> (not) + <i>omal</i> (even, same): not even with the rest. An anomaly is a reading that does not fit the pattern the others make, usually because something went wrong in that one go. In a report you name it, say what probably caused it, and leave it out of the mean — you never quietly delete it.",
     "apply": [
      {
       "id": "prac_anom_scn",
       "type": "scenario",
       "q": "Four timings at the same height read 1.09 s, 1.10 s, 1.11 s and 2.40 s. What should your report do with the last one?",
       "a": "It should be named and left out of the mean",
       "opts": [
        "It should be named and left out of the mean",
        "It is the most accurate of the four readings",
        "It should be averaged in with the other three",
        "It proves the drop height was measured wrongly"
       ],
       "explain": "2.40 s does not fit the pattern of the other three — most likely the stopwatch was stopped late. Name it, explain it, and leave it out."
      },
      {
       "id": "prac_anom_desc",
       "type": "desc",
       "q": "Which word names a single result that does not fit the pattern of the others?",
       "a": "Anomaly",
       "opts": [
        "Anomaly",
        "Average",
        "Trendline",
        "Trial"
       ],
       "explain": "<i>an-</i> (not) + <i>omal</i> (even): not even with the rest, because something went wrong in that one reading."
      },
      {
       "id": "prac_anom_cloze",
       "type": "cloze",
       "before": "One timing was three times longer than the other three at that height, so we called it an",
       "after": "and left it out of the mean.",
       "a": "anomaly",
       "opts": [
        "anomaly",
        "average",
        "interval",
        "axis"
       ],
       "explain": "<i>an-</i> + <i>omal</i>: not even with the rest of the set, so it is named and set aside."
      }
     ]
    },
    {
     "w": "outlier",
     "meaning": "A value that sits far away from the rest of the data.",
     "example": "The value 210 is an outlier in this data set.",
     "parts": [
      {
       "surface": "out",
       "type": "prefix",
       "meaning": "outside",
       "tr": {
        "am": "ውጭ",
        "ar": "خارج",
        "es": "afuera",
        "fa": "بیرون",
        "fr": "dehors",
        "hi": "बाहर",
        "ja": "外",
        "ko": "밖",
        "ml": "പുറത്ത്",
        "ps": "بهر",
        "ro": "afară",
        "ru": "снаружи",
        "ta": "வெளியே",
        "tl": "labas",
        "ur": "باہر",
        "vi": "bên ngoài",
        "zh-Hans": "外",
        "zh-Hant": "外"
       }
      },
      {
       "surface": "li",
       "type": "root",
       "meaning": "lie/rest",
       "tr": {
        "zh-Hans": "躺/休息",
        "zh-Hant": "躺/休息",
        "ja": "横たわる",
        "ko": "눕다",
        "vi": "nằm/nghỉ",
        "ar": "استلقاء",
        "fa": "دراز کشیدن",
        "ur": "لیٹنا",
        "am": "መተኛት",
        "ml": "കിടക്കുക",
        "ta": "படு",
        "tl": "humiga",
        "ps": "پراته کیدل",
        "ro": "a se întinde",
        "ru": "лежать",
        "fr": "s'allonger",
        "hi": "लेटना",
        "es": "yacer"
       }
      },
      {
       "surface": "er",
       "type": "suffix",
       "meaning": "one who",
       "tr": {
        "vi": "người",
        "am": "ሰው",
        "ar": "شخص",
        "es": "persona que",
        "fa": "شخص",
        "fr": "personne qui",
        "hi": "व्यक्ति जो",
        "ja": "~する人",
        "ko": "~하는 사람",
        "ml": "ആൾ",
        "ps": "هغه څوک چې",
        "ro": "persoană care",
        "ru": "тот, кто",
        "ta": "செய்பவர்",
        "tl": "taong",
        "ur": "کرنے والا",
        "zh-Hans": "人",
        "zh-Hant": "人",
        "other": "کننده"
       }
      }
     ],
     "tr": {
      "zh-Hans": "离群值",
      "zh-Hant": "離群值",
      "ja": "外れ値",
      "ko": "이상치",
      "vi": "giá trị ngoại lai",
      "ar": "القيمة الشاذة",
      "fa": "داده پرت",
      "ur": "غیر معمولی قدر",
      "am": "ወጣ ያለ ውጤት (አውትላየር)",
      "ml": "പുറംതള്ളൽ മൂല്യം",
      "ta": "விலகல் மதிப்பு",
      "tl": "kakaibang datos (outlier)",
      "ps": "بهرنی ارزښت",
      "ro": "valoare aberantă",
      "ru": "выброс (аномальное значение)",
      "fr": "valeur aberrante",
      "hi": "अपवाद मान",
      "es": "valor atípico"
     },
     "note": "<i>out</i> (outside) + <i>li</i> (lie) + <i>-er</i> (one that): the one that lies outside. An outlier is a point sitting far away from the rest of the data on the graph. Anomaly and outlier often point at the same dot, but they say different things: <b>anomaly</b> says something went wrong in that reading, <b>outlier</b> only says where the point sits.",
     "apply": [
      {
       "id": "prac_out_scn",
       "type": "scenario",
       "q": "On your scatter plot, nine points sit close to a rising line and one sits far above everything else. What is that lonely point called?",
       "a": "An outlier",
       "opts": [
        "An outlier",
        "A trendline",
        "A controlled variable",
        "An average"
       ],
       "explain": "<i>out</i> + <i>li</i> (lie): it lies outside the rest of the data, a long way from where the others sit."
      },
      {
       "id": "prac_out_desc",
       "type": "desc",
       "q": "A data set reads 12, 13, 14, 13 and 96. Which value lies far outside the rest?",
       "a": "96",
       "opts": [
        "96",
        "12",
        "13",
        "14"
       ],
       "explain": "The other four values are all around 13, so 96 sits a very long way outside the group."
      },
      {
       "id": "prac_out_cloze",
       "type": "cloze",
       "before": "Most of the class measured between 148 cm and 162 cm, but one value of 210 cm sits far from the rest and is marked as an",
       "after": "on the dot plot.",
       "a": "outlier",
       "opts": [
        "outlier",
        "trendline",
        "trial",
        "gradient"
       ],
       "explain": "<i>out</i> + <i>li</i> (lie): a point that lies well outside the group the others form."
      }
     ]
    }
   ]
  },
  {
   "id": "rev",
   "area": "kin",
   "title": "Linear graphs — quiz language (revision)",
   "focus": "The exact words the Linear Equations Progress Quiz uses. Master these before the retest.",
   "words": [
    {
     "w": "gradient",
     "meaning": "how steep a line is: rise divided by run",
     "example": "The gradient of this line is 3.",
     "parts": [
      {
       "surface": "grad",
       "type": "root",
       "meaning": "step",
       "tr": {
        "ur": "قدم",
        "fa": "گام",
        "zh-Hans": "步骤",
        "tl": "hakbang",
        "zh-Hant": "步驟",
        "ps": "ګام",
        "am": "ደረጃ",
        "ar": "خطوة",
        "es": "paso",
        "fr": "pas",
        "hi": "कदम",
        "ja": "段階",
        "ko": "단계",
        "ml": "പടി",
        "ro": "pas",
        "ru": "шаг",
        "ta": "படி",
        "vi": "bước"
       }
      },
      {
       "surface": "ient",
       "type": "suffix",
       "meaning": "quality",
       "tr": {
        "ur": "خصوصیت",
        "fa": "ویژگی",
        "zh-Hans": "特性",
        "tl": "katangian",
        "zh-Hant": "特性",
        "ps": "ځانګړنه",
        "am": "ባህርይ",
        "ar": "صفة",
        "es": "cualidad",
        "fr": "qualité",
        "hi": "गुण",
        "ja": "特性",
        "ko": "성질",
        "ml": "ഗുണം",
        "ro": "caracteristică",
        "ru": "качество",
        "ta": "பண்பு",
        "vi": "tính chất"
       }
      }
     ],
     "tr": {
      "am": "ተዳፋት",
      "ar": "الميل",
      "es": "pendiente",
      "fa": "شیب",
      "fr": "pente",
      "hi": "ढलान",
      "ja": "傾き",
      "ko": "기울기",
      "ml": "ചരിവ്",
      "ps": "شیب",
      "ro": "pantă",
      "ru": "наклон",
      "ta": "சாய்வு",
      "tl": "gradyent",
      "ur": "ڈھلوان",
      "vi": "độ dốc",
      "zh-Hans": "斜率",
      "zh-Hant": "斜率"
     },
     "note": "Latin <i>gradus</i> (a step): <i>grad</i> + <i>-ient</i> tells you how big a step up the line takes for each step across. Same <i>grad</i> in <b>gradual</b> and <b>graduate</b>. Quiz tip: m = (y₂ − y₁) ÷ (x₂ − x₁) — subtract in the <b>same order</b> on the top and the bottom.",
     "apply": [
      {
       "id": "rev_grad_calc",
       "type": "scenario",
       "q": "A line passes through (2, 3) and (5, 12). Using m = (y₂ − y₁) ÷ (x₂ − x₁), what is the gradient?",
       "a": "3",
       "opts": [
        "9",
        "3",
        "1/3",
        "−3"
       ],
       "explain": "(12 − 3) ÷ (5 − 2) = 9 ÷ 3 = <b>3</b>. y on top, x on the bottom."
      },
      {
       "id": "rev_grad_read",
       "type": "scenario",
       "q": "On the quiz graph, a line goes up 2 squares for every 1 square across. What is its gradient?",
       "a": "2",
       "opts": [
        "2",
        "1/2",
        "−2",
        "1"
       ],
       "explain": "Rise ÷ run = 2 ÷ 1 = <b>2</b>. Counting squares is the fastest way to read a gradient."
      },
      {
       "id": "rev_grad_neg",
       "type": "scenario",
       "q": "A line passes through (−1, 5) and (3, 1). What is the gradient?",
       "a": "−1",
       "opts": [
        "1",
        "−4",
        "−1",
        "4"
       ],
       "explain": "(1 − 5) ÷ (3 − (−1)) = −4 ÷ 4 = <b>−1</b>. Take care: 3 − (−1) = 4, not 2."
      }
     ]
    },
    {
     "w": "slope",
     "meaning": "The steepness of a line; another word for gradient.",
     "example": "The slope of the line tells you the velocity.",
     "parts": [
      {
       "surface": "slope",
       "type": "root",
       "meaning": "slope",
       "tr": {
        "am": "ቁልቁለት",
        "ar": "ميل",
        "es": "pendiente",
        "fa": "شیب",
        "fr": "pente",
        "hi": "ढलान",
        "ja": "傾き",
        "ko": "기울기",
        "ml": "ചരിവ്",
        "ps": "میلان",
        "ro": "pantă",
        "ru": "наклон",
        "ta": "சரிவு",
        "tl": "dahilig",
        "ur": "ڈھلان",
        "vi": "độ dốc",
        "zh-Hans": "斜率",
        "zh-Hant": "斜率"
       }
      }
     ],
     "tr": {
      "am": "ቁልቁለት",
      "ar": "الميل",
      "es": "pendiente",
      "fa": "شیب",
      "fr": "pente",
      "hi": "ढाल",
      "ja": "傾き",
      "ko": "기울기",
      "ml": "ചരിവ്",
      "ps": "ډډه",
      "ro": "pantă",
      "ru": "наклон",
      "ta": "சாய்வு",
      "tl": "dahilis",
      "ur": "ڈھلان",
      "vi": "độ dốc",
      "zh-Hans": "斜率",
      "zh-Hant": "斜率"
     },
     "note": "<b>Slope</b> has no Latin parts to cut — it grew from an old English verb meaning to slip away, and a slope is what you slip down. Quiz tip: your quiz says <b>gradient</b>, but websites and videos often say <b>slope</b>. They mean exactly the same thing: rise ÷ run.",
     "apply": [
      {
       "id": "rev_slope_desc",
       "type": "desc",
       "q": "Your quiz says gradient. A maths website says slope. What is the difference?",
       "a": "No difference — they mean the same thing",
       "opts": [
        "Slope is only for graphs",
        "No difference — they mean the same thing",
        "Gradient is always positive",
        "Slope is the y-intercept"
       ],
       "explain": "Two words for one idea: how much the line rises for each step across."
      },
      {
       "id": "rev_slope_calc",
       "type": "scenario",
       "q": "A line goes through (0, 2) and (4, 6). What is its slope?",
       "a": "1",
       "opts": [
        "4",
        "1",
        "2",
        "1/2"
       ],
       "explain": "(6 − 2) ÷ (4 − 0) = 4 ÷ 4 = <b>1</b>. The line rises one unit for each unit across."
      }
     ]
    },
    {
     "w": "equation",
     "meaning": "a number sentence with an equals sign, such as 2x + 3 = 11",
     "example": "Solve the equation to find the value of x.",
     "parts": [
      {
       "surface": "equ",
       "type": "root",
       "meaning": "equal",
       "tr": {
        "am": "እኩል",
        "ar": "متساو",
        "es": "igual",
        "fa": "برابر",
        "fr": "égal",
        "hi": "समान",
        "ja": "等しい",
        "ko": "동등",
        "ml": "തുല്യം",
        "ps": "برابر",
        "ro": "egal",
        "ru": "равный",
        "ta": "சமமான",
        "tl": "pantay",
        "ur": "برابر",
        "vi": "bằng",
        "zh-Hans": "相等",
        "zh-Hant": "相等"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "am": "እኩልታ",
      "ar": "معادلة",
      "es": "ecuación",
      "fa": "معادله",
      "fr": "équation",
      "hi": "समीकरण",
      "ja": "方程式",
      "ko": "방정식",
      "ml": "സമവാക്യം",
      "ps": "معادله",
      "ro": "ecuație",
      "ru": "уравнение",
      "ta": "சமன்பாடு",
      "tl": "ekwasyon",
      "ur": "مساوات",
      "vi": "phương trình",
      "zh-Hans": "方程",
      "zh-Hant": "方程"
     },
     "note": "Latin <i>aequus</i> (level, equal) + <i>-ation</i> (process of): making both sides level. Same <i>equ</i> in <b>equal</b> and <b>equator</b>. Quiz tip: to write the equation of a line, find <b>m</b> (the gradient) and <b>c</b> (the y-intercept), then put them into y = mx + c.",
     "apply": [
      {
       "id": "rev_eq_write",
       "type": "scenario",
       "q": "A line has a gradient of 2 and a y-intercept of −3. Write its equation.",
       "a": "y = 2x − 3",
       "opts": [
        "y = −3x + 2",
        "y = 2x + 3",
        "y = 2x − 3",
        "y = 3x − 2"
       ],
       "explain": "y = mx + c with m = 2 and c = −3 gives <b>y = 2x − 3</b>. m sits next to x; c stands alone."
      },
      {
       "id": "rev_eq_write2",
       "type": "scenario",
       "q": "A line has a gradient of 4 and passes through (0, 1). What is its equation?",
       "a": "y = 4x + 1",
       "opts": [
        "y = 4x + 1",
        "y = x + 4",
        "y = 4x − 1",
        "y = 4x"
       ],
       "explain": "The point (0, 1) is on the y-axis, so c = 1. With m = 4 the equation is <b>y = 4x + 1</b>."
      }
     ]
    },
    {
     "w": "linear",
     "meaning": "making a straight line when you graph it",
     "example": "The rule y = 2x + 1 is linear.",
     "parts": [
      {
       "surface": "line",
       "type": "root",
       "meaning": "line",
       "tr": {
        "ur": "لکیر",
        "fa": "خط",
        "zh-Hans": "直线",
        "tl": "linya",
        "zh-Hant": "直線",
        "ps": "کرښه",
        "am": "መስመር",
        "ar": "خط",
        "es": "línea",
        "fr": "ligne",
        "hi": "रेखा",
        "ja": "線",
        "ko": "선",
        "ml": "രേഖ",
        "ro": "linie",
        "ru": "линия",
        "ta": "கோடு",
        "vi": "đường"
       }
      },
      {
       "surface": "ar",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "ur": "سے متعلق",
        "fa": "مربوط به",
        "zh-Hans": "与…有关的",
        "tl": "may kaugnayan sa",
        "zh-Hant": "與…有關的",
        "ps": "اړوند",
        "am": "የሚመለከት",
        "ar": "متعلق بـ",
        "es": "relacionado con",
        "fr": "relatif à",
        "hi": "से संबंधित",
        "ja": "～の",
        "ko": "관련된",
        "ml": "സംബന്ധിച്ച",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "vi": "thuộc về"
       }
      }
     ],
     "tr": {
      "am": "መስመራዊ",
      "ar": "خطي",
      "es": "lineal",
      "fa": "خطی",
      "fr": "linéaire",
      "hi": "रैखिक",
      "ja": "線形の",
      "ko": "선형의",
      "ml": "രേഖീയം",
      "ps": "خطي",
      "ro": "liniar",
      "ru": "линейный",
      "ta": "நேரியல்",
      "tl": "linear",
      "ur": "خطی",
      "vi": "tuyến tính",
      "zh-Hans": "线性的",
      "zh-Hant": "線性的"
     },
     "note": "Latin <i>linea</i> (a line) + <i>-ar</i> (relating to). Same <i>line</i> in <b>outline</b>. Quiz tip: a rule is linear when x is on its own, with no x² and no x on the bottom of a fraction. Its graph is one straight line, so <b>two points and a ruler</b> are enough.",
     "apply": [
      {
       "id": "rev_lin_desc",
       "type": "desc",
       "q": "Which of these is a linear equation?",
       "a": "y = 5x − 2",
       "opts": [
        "y = x² − 2",
        "y = 2/x",
        "y = 5x − 2",
        "y = x³"
       ],
       "explain": "Only y = 5x − 2 has plain x. The others curve when you graph them."
      },
      {
       "id": "rev_lin_cloze",
       "type": "cloze",
       "before": "Because the rule y = 3x + 1 is",
       "after": ", Anh only needed two points and a ruler to draw it.",
       "a": "linear",
       "opts": [
        "simultaneous",
        "linear",
        "perpendicular",
        "piecewise"
       ],
       "explain": "Straight-line rules need just two correct points — a third one is a useful check."
      }
     ]
    },
    {
     "w": "substitution",
     "meaning": "putting a number in place of a letter to work out the value",
     "example": "Use substitution to find y when x = 3.",
     "parts": [
      {
       "surface": "sub",
       "type": "prefix",
       "meaning": "under",
       "tr": {
        "am": "ከታች / በምትክ",
        "ar": "تحت / بدلاً من",
        "es": "bajo / en lugar de",
        "fa": "زیر / به‌جای",
        "fr": "sous / à la place de",
        "hi": "नीचे / के स्थान पर",
        "ja": "下に・代わりに",
        "ko": "아래/대신",
        "ml": "താഴെ / പകരം",
        "ps": "لاندې / پرځای",
        "ro": "sub / în locul",
        "ru": "под / вместо",
        "ta": "கீழ் / பதிலாக",
        "tl": "sa ilalim / kapalit",
        "ur": "نیچے / بجائے",
        "vi": "dưới / thay thế",
        "zh-Hans": "下/替代",
        "zh-Hant": "下/替代"
       }
      },
      {
       "surface": "stitut",
       "type": "root",
       "meaning": "set up/establish",
       "tr": {
        "am": "መመስረት",
        "ar": "يؤسس",
        "es": "establecer",
        "fa": "تأسیس کردن",
        "fr": "établir",
        "hi": "स्थापित करना",
        "ja": "設立する",
        "ko": "설립하다",
        "ml": "സ്ഥാപിക്കുക",
        "ps": "تاسیس کول",
        "ro": "a înființa",
        "ru": "учреждать",
        "ta": "நிறுவு",
        "tl": "itatag",
        "ur": "قائم کرنا",
        "vi": "thiết lập",
        "zh-Hans": "建立",
        "zh-Hant": "建立"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "መተካት",
      "ar": "تعويض",
      "es": "sustitución",
      "fa": "جایگذاری",
      "fr": "substitution",
      "hi": "प्रतिस्थापन",
      "ja": "代入",
      "ko": "대입",
      "ml": "പകരം വയ്ക്കൽ",
      "ps": "ځای پرځای کول",
      "ro": "substituție",
      "ru": "подстановка",
      "ta": "பதிலீடு",
      "tl": "pagpapalit",
      "ur": "متبادلہ",
      "vi": "phép thế",
      "zh-Hans": "代入",
      "zh-Hant": "代入"
     },
     "note": "Latin <i>sub-</i> (under) + <i>statuere/stitut</i> (to set up) + <i>-ion</i> (act of): setting one thing up in place of another. Same <i>stitut</i> in <b>institution</b>, and the same idea in a <b>substitute</b> player who goes on in place of a teammate. Quiz tip: to complete a table of values, substitute each x into the rule and work out y.",
     "apply": [
      {
       "id": "rev_sub_calc",
       "type": "scenario",
       "q": "Complete the table for y = 2x + 1. When x = 4, what is y?",
       "a": "9",
       "opts": [
        "8",
        "9",
        "7",
        "2"
       ],
       "explain": "Put 4 in place of x: y = 2(4) + 1 = 8 + 1 = <b>9</b>. Multiply before you add."
      },
      {
       "id": "rev_sub_cloze",
       "type": "cloze",
       "before": "To fill in the table of values, Hiro used",
       "after": ": he put each x-value into the rule and worked out y.",
       "a": "substitution",
       "opts": [
        "intersection",
        "substitution",
        "simultaneous",
        "correlation"
       ],
       "explain": "<i>sub-</i> (under) + <i>stitut</i> (set up): the number is set up in place of the letter."
      }
     ]
    },
    {
     "w": "coordinate",
     "meaning": "a pair of numbers (x, y) that gives the position of a point on a grid",
     "example": "Plot the coordinate (3, -1) on the grid.",
     "parts": [
      {
       "surface": "co",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "አብሮ",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ",
        "ja": "共に",
        "ko": "함께",
        "ml": "ഒരുമിച്ച്",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "اکٹھا",
        "vi": "cùng",
        "zh-Hans": "共同",
        "zh-Hant": "共同",
        "other": "باهم"
       }
      },
      {
       "surface": "ordin",
       "type": "root",
       "meaning": "order",
       "tr": {
        "am": "ተራ/ደረጃ",
        "ar": "ترتيب/رتبة",
        "es": "orden/rango",
        "fa": "ترتیب/رتبه",
        "fr": "ordre/rang",
        "hi": "क्रम/श्रेणी",
        "ja": "順序・順位",
        "ko": "순서/순위",
        "ml": "ക്രമം/സ്ഥാനം",
        "ps": "ترتیب/درجه",
        "ro": "ordine/rang",
        "ru": "порядок/ранг",
        "ta": "வரிசை/தரம்",
        "tl": "ayos/ranggo",
        "ur": "ترتیب/درجہ",
        "vi": "thứ tự/thứ hạng",
        "zh-Hans": "顺序/等级",
        "zh-Hant": "順序/等級"
       }
      },
      {
       "surface": "ate",
       "type": "suffix",
       "meaning": "to make/do",
       "tr": {
        "am": "ማድረግ",
        "ar": "جعل",
        "es": "tener/hacer",
        "fa": "ساختن",
        "fr": "rendre",
        "hi": "बनाना",
        "ja": "〜化する",
        "ko": "만들다",
        "ml": "ഉണ്ടാക്കുക",
        "ps": "لرونکی/جوړونکی",
        "ro": "a face",
        "ru": "делать",
        "ta": "செய்தல்",
        "tl": "gumawa",
        "ur": "بنانا",
        "vi": "làm",
        "zh-Hans": "使…化",
        "zh-Hant": "使…化"
       }
      }
     ],
     "tr": {
      "am": "መጋጠሚያ",
      "ar": "إحداثي",
      "es": "coordenada",
      "fa": "مختصات",
      "fr": "coordonnée",
      "hi": "निर्देशांक",
      "ja": "座標",
      "ko": "좌표",
      "ml": "നിർദ്ദേശാങ്കം",
      "ps": "کوارډینېټ",
      "ro": "coordonată",
      "ru": "координата",
      "ta": "ஆயம்",
      "tl": "koordinada",
      "ur": "احداثیہ",
      "vi": "tọa độ",
      "zh-Hans": "坐标",
      "zh-Hant": "座標"
     },
     "note": "Latin <i>co-</i> (together) + <i>ordo/ordin</i> (order) + <i>-ate</i>: two numbers put together in order to fix one point. Same <i>ordin</i> in <b>order</b> and <b>ordinary</b>. Quiz tip: coordinates are always (x, y) — <b>across first</b>, then up or down.",
     "apply": [
      {
       "id": "rev_coord_scn",
       "type": "scenario",
       "q": "Layla plots the coordinate (−2, 3). Starting from (0, 0), where does she go?",
       "a": "2 left, then 3 up",
       "opts": [
        "3 left, then 2 up",
        "2 right, then 3 up",
        "2 left, then 3 up",
        "2 up, then 3 left"
       ],
       "explain": "x = −2 means 2 to the left; y = 3 means 3 up. Order matters: x always first."
      },
      {
       "id": "rev_coord_cloze",
       "type": "cloze",
       "before": "A",
       "after": "always gives the x-value first and the y-value second.",
       "a": "coordinate",
       "opts": [
        "gradient",
        "coordinate",
        "solution",
        "equation"
       ],
       "explain": "Two numbers ordered together — that is what <i>co-</i> + <i>ordin</i> means."
      }
     ]
    },
    {
     "w": "intersection",
     "meaning": "the point where two lines cross on a graph",
     "example": "The intersection of the two lines is at (2, 5).",
     "parts": [
      {
       "surface": "inter",
       "type": "prefix",
       "meaning": "between",
       "tr": {
        "ur": "درمیان",
        "fa": "میان",
        "zh-Hans": "在…之间",
        "tl": "pagitan",
        "zh-Hant": "在…之間",
        "ps": "ترمنځ",
        "am": "በ…መካከል",
        "ar": "بين",
        "es": "entre",
        "fr": "entre",
        "hi": "बीच में",
        "ja": "間",
        "ko": "사이",
        "ml": "ഇടയിൽ",
        "ro": "între",
        "ru": "между",
        "ta": "இடையே",
        "vi": "giữa"
       }
      },
      {
       "surface": "sect",
       "type": "root",
       "meaning": "cut",
       "tr": {
        "ur": "کاٹنا",
        "fa": "بریدن",
        "zh-Hans": "切割",
        "tl": "putulin",
        "zh-Hant": "切割",
        "ps": "پرې کول",
        "am": "መቁረጥ",
        "ar": "يقطع",
        "es": "cortar",
        "fr": "couper",
        "hi": "काटना",
        "ja": "切る",
        "ko": "자르다",
        "ml": "മുറിക്കുക",
        "ro": "a tăia",
        "ru": "резать",
        "ta": "வெட்டு",
        "vi": "cắt"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "ur": "عمل",
        "fa": "فرآیند",
        "zh-Hans": "过程",
        "tl": "proseso",
        "zh-Hant": "過程",
        "ps": "بهير",
        "am": "ተግባር/ሂደት",
        "ar": "عملية",
        "es": "acto/proceso",
        "fr": "action/processus",
        "hi": "क्रिया/प्रक्रिया",
        "ja": "過程",
        "ko": "행위/과정",
        "ml": "പ്രവൃത്തി/പ്രക്രിയ",
        "ro": "proces",
        "ru": "действие/процесс",
        "ta": "செயல்/செயல்முறை",
        "vi": "kết quả/quá trình"
       }
      }
     ],
     "tr": {
      "am": "የጋራ ክፍል",
      "ar": "التقاطع",
      "es": "intersección",
      "fa": "اشتراک",
      "fr": "intersection",
      "hi": "प्रतिच्छेदन",
      "ja": "共通部分",
      "ko": "교집합",
      "ml": "സംഗമം",
      "ps": "تقاطع",
      "ro": "intersecție",
      "ru": "пересечение",
      "ta": "வெட்டு",
      "tl": "interseksyon",
      "ur": "اشتراک",
      "vi": "tập hợp giao",
      "zh-Hans": "交集",
      "zh-Hant": "交集"
     },
     "note": "Latin <i>inter-</i> (between) + <i>secare/sect</i> (to cut) + <i>-ion</i> (act of): one line cutting across another. Same <i>sect</i> in <b>section</b> and <b>insect</b> (a body cut into parts) — and in a road <b>intersection</b>. Quiz tip: the point of intersection is the <b>solution of both equations at once</b>, because it sits on both lines.",
     "apply": [
      {
       "id": "rev_inter_desc",
       "type": "desc",
       "q": "On the quiz graph, the lines y = x + 1 and y = 5 − x cross at one point. What is that point called?",
       "a": "The point of intersection",
       "opts": [
        "The y-intercept",
        "The point of intersection",
        "The gradient",
        "The starting point"
       ],
       "explain": "<i>inter-</i> (between) + <i>sect</i> (cut): where the two lines cut across each other."
      },
      {
       "id": "rev_inter_calc",
       "type": "scenario",
       "q": "Where do the lines y = x + 1 and y = 5 − x meet?",
       "a": "(2, 3)",
       "opts": [
        "(2, 3)",
        "(3, 2)",
        "(1, 5)",
        "(2, 4)"
       ],
       "explain": "Set them equal: x + 1 = 5 − x, so 2x = 4 and x = 2. Then y = 2 + 1 = 3, giving <b>(2, 3)</b>."
      }
     ]
    },
    {
     "w": "axis",
     "meaning": "One of the two lines on a graph that you measure from. The x-axis goes across and the y-axis goes up. Two or more of them are called axes.",
     "example": "Put time on the x-axis and distance on the y-axis.",
     "parts": [],
     "origin": "From Greek axōn, an axle — the rod a wheel turns on; a graph turns around its two axes in the same way.",
     "tr": {
      "zh-Hans": "坐标轴（轴）",
      "zh-Hant": "座標軸（軸）",
      "ja": "軸（座標軸）",
      "ko": "축(좌표축)",
      "vi": "trục (trục tọa độ)",
      "ar": "محور",
      "fa": "محور",
      "ur": "محور",
      "am": "ዘንግ",
      "ml": "അക്ഷം",
      "ta": "அச்சு",
      "tl": "aksis (ehe)",
      "ps": "محور",
      "ro": "axă",
      "ru": "ось (координатная ось)",
      "fr": "axe",
      "hi": "अक्ष",
      "es": "eje"
     },
     "note": "Greek <i>axōn</i> = <b>axle</b>, the rod a wheel turns on: a graph turns around its two axes. One line is an <b>axis</b>; two are <b>axes</b> (say “AK-seez”) — same ending change as <b>crisis → crises</b>. In physics the axis also fixes direction: on a velocity–time graph, points <b>below</b> the time axis mean the object is moving the other way.",
     "apply": [
      {
       "id": "rev_axis_desc",
       "type": "desc",
       "q": "On Mai's graph, one line runs across the bottom and one runs up the side. What is the name for these two lines together?",
       "a": "axes",
       "opts": [
        "axes",
        "origins",
        "gradients",
        "intercepts"
       ],
       "explain": "One line is an <b>axis</b>; two are <b>axes</b>. Greek <i>axōn</i> (axle) — the graph turns around them."
      },
      {
       "id": "rev_axis_cloze",
       "type": "cloze",
       "before": "Hiro records how far his tram travels every minute. Time goes on the horizontal",
       "after": ", so the gradient of his line gives the speed of the tram.",
       "a": "axis",
       "opts": [
        "axis",
        "axes",
        "origin",
        "gradient"
       ],
       "explain": "One line = one <b>axis</b>. Time on the x-axis and distance on the y-axis makes the gradient distance ÷ time, which is speed."
      }
     ]
    },
    {
     "w": "y-intercept",
     "meaning": "the point where a line crosses the vertical (y) axis.",
     "example": "",
     "parts": [
      {
       "surface": "inter",
       "type": "prefix",
       "meaning": "between",
       "tr": {
        "am": "በ…መካከል",
        "ar": "بين",
        "es": "entre",
        "fa": "میان",
        "fr": "entre",
        "hi": "बीच में",
        "ja": "間",
        "ko": "사이",
        "ml": "ഇടയിൽ",
        "ps": "ترمنځ",
        "ro": "între",
        "ru": "между",
        "ta": "இடையே",
        "tl": "pagitan",
        "ur": "درمیان",
        "vi": "giữa",
        "zh-Hans": "之间",
        "zh-Hant": "之間"
       }
      },
      {
       "surface": "cept",
       "type": "root",
       "meaning": "take / seize",
       "tr": {
        "am": "መያዝ",
        "ar": "أخذ/إمساك",
        "es": "tomar/agarrar",
        "fa": "گرفتن",
        "fr": "prendre/saisir",
        "hi": "लेना/पकड़ना",
        "ja": "取る/つかむ",
        "ko": "잡다/취하다",
        "ml": "എടുക്കുക/പിടിക്കുക",
        "ps": "نیول",
        "ro": "a lua/a apuca",
        "ru": "брать/хватать",
        "ta": "எடுத்தல்/பிடித்தல்",
        "tl": "kunin/hulihin",
        "ur": "لینا/پکڑنا",
        "vi": "lấy/nắm giữ",
        "zh-Hans": "取/抓",
        "zh-Hant": "取/抓"
       }
      }
     ],
     "tr": {
      "am": "የ y ዘንግ መገናኛ ነጥብ",
      "ar": "نقطة تقاطع y",
      "es": "ordenada al origen",
      "fa": "عرض از مبدأ",
      "fr": "ordonnée à l'origine",
      "hi": "y-अंतःखंड",
      "ja": "y切片",
      "ko": "y절편",
      "ml": "y-അക്ഷ ഖണ്ഡബിന്ദു",
      "ps": "د y محور تقاطع",
      "ro": "ordonata la origine",
      "ru": "точка пересечения с осью y",
      "ta": "y-அச்சு வெட்டுத்துண்டு",
      "tl": "puntong tawiran sa y-axis",
      "ur": "y محور کا تقاطع",
      "vi": "tung độ gốc",
      "zh-Hans": "y轴截距",
      "zh-Hant": "y軸截距"
     },
     "note": "The <b>y</b> names the vertical axis; Latin <i>inter-</i> (between) + <i>capere/cept</i> (to catch) says the axis <b>catches</b> the line here. Same <i>cept</i> in <b>accept</b> and <b>receipt</b>. Quiz tip: the y-intercept is <i>c</i> in y = mx + c and always has x = 0 — read it off the graph, or find it by substituting a point and solving for c.",
     "apply": [
      {
       "id": "rev_yint_calc",
       "type": "scenario",
       "q": "A line has a gradient of 3 and passes through (2, 11). What is its y-intercept?",
       "a": "5",
       "opts": [
        "11",
        "5",
        "2",
        "−5"
       ],
       "explain": "Substitute into y = mx + c: 11 = 3(2) + c, so 11 = 6 + c and c = <b>5</b>."
      },
      {
       "id": "rev_yint_read",
       "type": "scenario",
       "q": "Where does the line y = −2x + 7 cross the y-axis?",
       "a": "(0, 7)",
       "opts": [
        "(7, 0)",
        "(0, −2)",
        "(0, 7)",
        "(0, −7)"
       ],
       "explain": "On the y-axis x = 0, so y = −2(0) + 7 = 7. The point is <b>(0, 7)</b> — c is the y-intercept."
      },
      {
       "id": "rev_yint_calc2",
       "type": "scenario",
       "q": "A line has a gradient of 2 and passes through (3, 4). What is its y-intercept?",
       "a": "−2",
       "opts": [
        "−2",
        "4",
        "10",
        "2"
       ],
       "explain": "4 = 2(3) + c, so 4 = 6 + c and c = <b>−2</b>. The equation is y = 2x − 2."
      }
     ]
    },
    {
     "w": "x-intercept",
     "meaning": "The point where a line crosses the x-axis. At that point y = 0, so you find it by putting y = 0 into the equation and solving for x.",
     "example": "The line y = 2x − 6 has its x-intercept at (3, 0).",
     "parts": [
      {
       "surface": "x",
       "type": "prefix",
       "meaning": "the horizontal axis",
       "tr": {
        "zh-Hans": "横轴",
        "zh-Hant": "橫軸",
        "ja": "横軸",
        "ko": "가로축",
        "vi": "trục ngang (trục hoành)",
        "ar": "المحور الأفقي",
        "fa": "محور افقی",
        "ur": "افقی محور",
        "am": "አግድም ዘንግ",
        "ml": "തിരശ്ചീന അക്ഷം",
        "ta": "கிடைமட்ட அச்சு",
        "tl": "pahigang aksis",
        "ps": "افقي محور",
        "ro": "axa orizontală",
        "ru": "горизонтальная ось",
        "fr": "axe horizontal",
        "hi": "क्षैतिज अक्ष",
        "es": "eje horizontal"
       }
      },
      {
       "surface": "inter",
       "type": "prefix",
       "meaning": "between",
       "tr": {
        "am": "በ…መካከል",
        "ar": "بين",
        "es": "entre",
        "fa": "میان",
        "fr": "entre",
        "hi": "बीच में",
        "ja": "間",
        "ko": "사이",
        "ml": "ഇടയിൽ",
        "ps": "ترمنځ",
        "ro": "între",
        "ru": "между",
        "ta": "இடையே",
        "tl": "pagitan",
        "ur": "درمیان",
        "vi": "giữa",
        "zh-Hans": "之间",
        "zh-Hant": "之間"
       }
      },
      {
       "surface": "cept",
       "type": "root",
       "meaning": "take / seize",
       "tr": {
        "am": "መያዝ",
        "ar": "أخذ/إمساك",
        "es": "tomar/agarrar",
        "fa": "گرفتن",
        "fr": "prendre/saisir",
        "hi": "लेना/पकड़ना",
        "ja": "取る/つかむ",
        "ko": "잡다/취하다",
        "ml": "എടുക്കുക/പിടിക്കുക",
        "ps": "نیول",
        "ro": "a lua/a apuca",
        "ru": "брать/хватать",
        "ta": "எடுத்தல்/பிடித்தல்",
        "tl": "kunin/hulihin",
        "ur": "لینا/پکڑنا",
        "vi": "lấy/nắm giữ",
        "zh-Hans": "取/抓",
        "zh-Hant": "取/抓"
       }
      }
     ],
     "tr": {
      "zh-Hans": "x轴截距",
      "zh-Hant": "x軸截距",
      "ja": "x切片",
      "ko": "x절편",
      "vi": "hoành độ gốc",
      "ar": "نقطة تقاطع x",
      "fa": "طول از مبدأ",
      "ur": "x محور کا تقاطع",
      "am": "የ x ዘንግ መገናኛ ነጥብ",
      "ml": "x-അക്ഷ ഖണ്ഡബിന്ദു",
      "ta": "x-அச்சு வெட்டுத்துண்டு",
      "tl": "puntong tawiran sa x-axis",
      "ps": "د x محور تقاطع",
      "ro": "abscisa la origine (intersecția cu axa Ox)",
      "ru": "точка пересечения с осью x",
      "fr": "abscisse à l'origine",
      "hi": "x-अंतःखंड",
      "es": "abscisa al origen (corte con el eje x)"
     },
     "note": "Latin <i>inter-</i> (between) + <i>capere/cept</i> (to catch): the line <b>catches</b> the x-axis at this point. Same <i>cept</i> in <b>intercept</b> a pass on the oval — catching the ball on its way through. Exam tip: for the <b>x</b>-intercept put <b>y = 0</b>; for the <b>y</b>-intercept put <b>x = 0</b>. Swapping them is the most common lost mark.",
     "apply": [
      {
       "id": "rev_xint_scn",
       "type": "scenario",
       "q": "A line has the equation y = 2x − 6. Where does it cross the x-axis?",
       "a": "(3, 0)",
       "opts": [
        "(3, 0)",
        "(0, −6)",
        "(−6, 0)",
        "(0, 3)"
       ],
       "explain": "Every point on the x-axis has y = 0. So 0 = 2x − 6, 2x = 6, x = 3. The point is (3, 0)."
      },
      {
       "id": "rev_xint_scn2",
       "type": "scenario",
       "q": "Layla's line is y = −x + 4. What is its x-intercept?",
       "a": "x = 4",
       "opts": [
        "x = 4",
        "x = −4",
        "y = 4",
        "x = 1"
       ],
       "explain": "Put y = 0: 0 = −x + 4, so x = 4. The line <b>catches</b> the x-axis at (4, 0)."
      },
      {
       "id": "rev_xint_cloze",
       "type": "cloze",
       "before": "To find the",
       "after": "of y = 5x − 10, make y = 0 and solve for x.",
       "a": "x-intercept",
       "opts": [
        "x-intercept",
        "y-intercept",
        "gradient",
        "origin"
       ],
       "explain": "The x-intercept is where the line catches the x-axis, and y is always 0 there. Here 0 = 5x − 10, so x = 2."
      }
     ]
    },
    {
     "w": "origin",
     "meaning": "The point (0, 0) on a graph, where the x-axis and the y-axis cross. Every coordinate is measured from here.",
     "example": "The line y = 4x passes through the origin.",
     "parts": [
      {
       "surface": "orig",
       "type": "root",
       "meaning": "rise, begin",
       "tr": {
        "zh-Hans": "起源",
        "zh-Hant": "起源",
        "ja": "起こる/始まる",
        "ko": "일어나다/시작하다",
        "vi": "khởi nguồn",
        "ar": "نشوء/بدء",
        "fa": "برخاستن/آغاز کردن",
        "ur": "اٹھنا/شروع ہونا",
        "am": "መነሳት/መጀመር",
        "ml": "ഉദയം/തുടക്കം",
        "ta": "தொடக்கம்",
        "tl": "mag-umpisa",
        "ps": "پیل کیدل",
        "ro": "a se ridica/începe",
        "ru": "возникать/начинаться",
        "fr": "surgir/commencer",
        "hi": "उदय होना/शुरू होना",
        "es": "surgir/comenzar"
       }
      },
      {
       "surface": "in",
       "type": "suffix",
       "meaning": "the thing that",
       "tr": {
        "zh-Hans": "…的东西",
        "zh-Hant": "…的東西",
        "ja": "〜であるもの",
        "ko": "~인 것",
        "vi": "thứ mà",
        "ar": "الشيء الذي",
        "fa": "چیزی که",
        "ur": "وہ چیز جو",
        "am": "ነገር",
        "ml": "ഒരു കാര്യം",
        "ta": "ஒன்று",
        "tl": "bagay na",
        "ps": "هغه شی چې",
        "ro": "lucrul care",
        "ru": "то, что",
        "fr": "chose qui",
        "hi": "वह चीज़ जो",
        "es": "cosa que"
       }
      }
     ],
     "tr": {
      "zh-Hans": "原点",
      "zh-Hant": "原點",
      "ja": "原点",
      "ko": "원점",
      "vi": "gốc tọa độ",
      "ar": "نقطة الأصل",
      "fa": "مبدأ مختصات",
      "ur": "مبدأ (نقطۂ آغاز)",
      "am": "መነሻ ነጥብ (0, 0)",
      "ml": "ആദിബിന്ദു",
      "ta": "ஆதிப்புள்ளி (மூலப்புள்ளி)",
      "tl": "origin (pinagmulang punto)",
      "ps": "مبدأ (د محورونو د پیل ټکی)",
      "ro": "origine",
      "ru": "начало координат",
      "fr": "origine",
      "hi": "मूल बिंदु",
      "es": "origen"
     },
     "note": "Latin <i>orīrī</i> (to rise, to begin), stem <i>orīgin-</i>: the origin is where the graph <b>begins</b>. Same <i>orig</i> in <b>original</b> and <b>originate</b>. Exam tip: “passes through the origin” tells you c = 0 in y = mx + c — and on a distance–time graph it means the object started at zero distance at zero time.",
     "apply": [
      {
       "id": "rev_origin_desc",
       "type": "desc",
       "q": "Which word names the point (0, 0), where the x-axis and the y-axis cross?",
       "a": "origin",
       "opts": [
        "origin",
        "gradient",
        "coordinate",
        "axis"
       ],
       "explain": "Latin <i>orīrī</i> (to rise, to begin): the graph <b>begins</b> here. Same root as <b>original</b>."
      },
      {
       "id": "rev_origin_scn",
       "type": "scenario",
       "q": "Amara's line passes through the origin and has a gradient of 3. What is y when x = 5?",
       "a": "15",
       "opts": [
        "15",
        "8",
        "3",
        "0"
       ],
       "explain": "Through the origin means c = 0, so y = mx + c becomes y = 3x. When x = 5, y = 3 × 5 = 15."
      }
     ]
    },
    {
     "w": "sketch",
     "meaning": "To draw a quick graph that shows the important features, such as where the line crosses the axes and which way it slopes. A sketch does not have to be exact.",
     "example": "Sketch y = 3x − 6 by marking (0, −6) and (2, 0), then joining them with a ruler.",
     "parts": [],
     "origin": "English borrowed sketch from Dutch schets, itself from Italian schizzo — a quick splash of a drawing made on the spot.",
     "tr": {
      "zh-Hans": "草图（画草图）",
      "zh-Hant": "草圖（作草圖）",
      "ja": "概形をかく（スケッチ）",
      "ko": "개형을 그리다(스케치)",
      "vi": "vẽ phác (phác họa đồ thị)",
      "ar": "رسم تخطيطي (يرسم تخطيطياً)",
      "fa": "طرح کلی (رسم تقریبی)",
      "ur": "خاکہ (خاکہ بنانا)",
      "am": "ንድፍ (ንድፍ መሳል)",
      "ml": "രൂപരേഖ (ഏകദേശ ചിത്രം വരയ്ക്കുക)",
      "ta": "மேலோட்டமாக வரைதல் (கோட்டுரு)",
      "tl": "iskets (magaspang na guhit)",
      "ps": "خاکه (خاکه جوړول)",
      "ro": "schiță (a schița)",
      "ru": "эскиз (схематически построить график)",
      "fr": "esquisse (esquisser)",
      "hi": "रेखाचित्र (मोटा चित्र बनाना)",
      "es": "esbozo (esbozar)"
     },
     "note": "<b>Sketch</b> came into English from Dutch <i>schets</i>, from Italian <i>schizzo</i> — a quick splash of a drawing done on the spot. Same idea in <b>sketchy</b> (rough, not finished). Exam tip: <b>sketch</b> means show the key features — both intercepts and the direction of the slope — while <b>plot</b> means mark exact points on the grid, carefully.",
     "apply": [
      {
       "id": "rev_sketch_desc",
       "type": "desc",
       "q": "Your teacher writes: “Sketch the graph of y = 2x + 1.” What does she want you to do?",
       "a": "Draw a quick line showing the intercepts and which way it slopes",
       "opts": [
        "Draw a quick line showing the intercepts and which way it slopes",
        "Measure every point exactly on grid paper",
        "Write a table of ten values and stop there",
        "Explain the line in words with no diagram"
       ],
       "explain": "A sketch is a fast drawing of the key features — from Italian <i>schizzo</i>, a quick splash. <b>Plot</b> is the careful, exact one."
      },
      {
       "id": "rev_sketch_scn",
       "type": "scenario",
       "q": "Tom has 30 seconds to sketch y = x − 3. Which two facts are enough?",
       "a": "The points (0, −3) and (3, 0)",
       "opts": [
        "The points (0, −3) and (3, 0)",
        "The gradient only",
        "Ten pairs of x and y values",
        "The origin and the scale"
       ],
       "explain": "Two points fix a straight line. Put x = 0 → y = −3; put y = 0 → x = 3. Mark both and join them."
      }
     ]
    },
    {
     "w": "plot",
     "meaning": "To mark points on a graph.",
     "example": "Plot each point where time meets distance.",
     "parts": [
      {
       "surface": "plot",
       "type": "root",
       "meaning": "mark out",
       "tr": {
        "am": "መሳል",
        "ar": "رسم",
        "es": "marcar",
        "fa": "ترسیم",
        "fr": "tracer",
        "hi": "अंकित करना",
        "ja": "プロットする",
        "ko": "표시하다",
        "ml": "അടയാളപ്പെടുത്തുക",
        "ps": "نښه کول",
        "ro": "a trasa",
        "ru": "отмечать",
        "ta": "குறித்தல்",
        "tl": "markahan",
        "ur": "نشان لگانا",
        "vi": "đánh dấu",
        "zh-Hans": "标出",
        "zh-Hant": "標出"
       }
      }
     ],
     "tr": {
      "am": "ግራፍ መሳል",
      "ar": "رسم",
      "es": "graficar",
      "fa": "رسم کردن",
      "fr": "tracer",
      "hi": "आलेखित करना",
      "ja": "プロットする",
      "ko": "점을 찍다",
      "ml": "വരയ്ക്കുക",
      "ps": "رسمول",
      "ro": "a trasa",
      "ru": "строить (график)",
      "ta": "வரைதல்",
      "tl": "iplot",
      "ur": "ترسیم کرنا",
      "vi": "vẽ đồ thị",
      "zh-Hans": "绘制",
      "zh-Hant": "繪製"
     },
     "note": "<b>Plot</b> has no Latin pieces — it is an old English word for a small patch of ground (a garden <b>plot</b>), and marking a point on a grid is like marking out that patch. Quiz tip: plot every point from your table of values, then join them with a <b>ruler</b> if the rule is linear.",
     "apply": [
      {
       "id": "rev_plot_scn",
       "type": "scenario",
       "q": "Anh's table shows x = 0, 1, 2 and y = 1, 3, 5. Which points does she plot?",
       "a": "(0, 1), (1, 3), (2, 5)",
       "opts": [
        "(1, 0), (3, 1), (5, 2)",
        "(0, 1), (1, 3), (2, 5)",
        "(0, 0), (1, 1), (2, 2)",
        "(1, 1), (3, 3), (5, 5)"
       ],
       "explain": "Pair each x with the y under it, and always write x first: (0, 1), (1, 3), (2, 5)."
      },
      {
       "id": "rev_plot_desc",
       "type": "desc",
       "q": "After plotting three points from a linear rule, what should you do next on the quiz?",
       "a": "Join them with a straight line using a ruler",
       "opts": [
        "Join them with a curve",
        "Join them with a straight line using a ruler",
        "Leave them as separate dots",
        "Rub out the middle point"
       ],
       "explain": "A linear rule always gives one straight line. If your three points do not line up, check your substitution."
      }
     ]
    },
    {
     "w": "solution",
     "meaning": "the value of the variable that makes the equation true",
     "example": "The solution to 2x = 10 is x = 5.",
     "parts": [
      {
       "surface": "solut",
       "type": "root",
       "meaning": "loosen/solve",
       "tr": {
        "am": "መፍታት",
        "ar": "حل",
        "es": "resolver",
        "fa": "حل",
        "fr": "résoudre",
        "hi": "सुलझाना",
        "ja": "解く",
        "ko": "풀다",
        "ml": "പരിഹരിക്കുക",
        "ps": "حل کول",
        "ro": "a rezolva",
        "ru": "решать",
        "ta": "தீர்த்தல்",
        "tl": "lutasin",
        "ur": "حل کرنا",
        "vi": "giải",
        "zh-Hans": "解",
        "zh-Hant": "解"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "መፍትሔ",
      "ar": "حل",
      "es": "solución",
      "fa": "جواب",
      "fr": "solution",
      "hi": "हल",
      "ja": "解",
      "ko": "해",
      "ml": "നിർദ്ധാരണം",
      "ps": "حل",
      "ro": "soluție",
      "ru": "решение",
      "ta": "தீர்வு",
      "tl": "solusyon",
      "ur": "حل",
      "vi": "nghiệm",
      "zh-Hans": "解",
      "zh-Hant": "解"
     },
     "note": "Latin <i>solvere/solut</i> (to loosen, set free) + <i>-ion</i> (act of): solving loosens the letter until x stands alone. Same <i>solut</i> in <b>dissolve</b> and <b>solvent</b> — sugar loosens into water. Quiz tip: for two lines, the solution is the coordinate where they <b>meet</b>.",
     "apply": [
      {
       "id": "rev_sol_calc",
       "type": "scenario",
       "q": "What is the solution of 4x = 20?",
       "a": "x = 5",
       "opts": [
        "x = 16",
        "x = 5",
        "x = 24",
        "x = 80"
       ],
       "explain": "Divide both sides by 4: x = 20 ÷ 4 = <b>5</b>. That value makes the equation true."
      },
      {
       "id": "rev_sol_check",
       "type": "scenario",
       "q": "Is x = 3 a solution of 2x + 1 = 7?",
       "a": "Yes, because 2(3) + 1 = 7",
       "opts": [
        "No, because 2(3) + 1 = 5",
        "Yes, because 2(3) + 1 = 7",
        "Yes, because 3 + 1 = 7",
        "No, because x must be 4"
       ],
       "explain": "Substitute and check: 2 × 3 = 6, and 6 + 1 = 7. Both sides match, so x = 3 is the solution."
      }
     ]
    },
    {
     "w": "simultaneous",
     "meaning": "two equations solved together to find values that fit both",
     "example": "Solve these simultaneous equations to find x and y.",
     "parts": [
      {
       "surface": "simul",
       "type": "root",
       "meaning": "at same time",
       "tr": {
        "ur": "ایک ہی وقت میں",
        "fa": "همزمان",
        "zh-Hans": "同时",
        "tl": "sabay",
        "zh-Hant": "同時",
        "ps": "يو وخت",
        "am": "በተመሳሳይ ጊዜ",
        "ar": "في نفس الوقت",
        "es": "al mismo tiempo",
        "fr": "en même temps",
        "hi": "एक ही समय पर",
        "ja": "同時に",
        "ko": "동시에",
        "ml": "ഒരേ സമയത്ത്",
        "ro": "în același timp",
        "ru": "одновременно",
        "ta": "ஒரே நேரத்தில்",
        "vi": "cùng lúc"
       }
      },
      {
       "surface": "tane",
       "type": "root",
       "meaning": "stretch",
       "tr": {
        "ur": "پھیلانا",
        "fa": "گسترش",
        "zh-Hans": "延伸",
        "tl": "palawakin",
        "zh-Hant": "延伸",
        "ps": "غځول",
        "am": "መዘርጋት",
        "ar": "يمد",
        "es": "estirar",
        "fr": "étirer",
        "hi": "फैलाना",
        "ja": "伸ばす",
        "ko": "늘이다",
        "ml": "നീട്ടുക",
        "ro": "a întinde",
        "ru": "растягивать",
        "ta": "நீட்டுதல்",
        "vi": "kéo dài"
       }
      },
      {
       "surface": "ous",
       "type": "suffix",
       "meaning": "full of",
       "tr": {
        "ur": "سے بھرا",
        "fa": "دارای",
        "zh-Hans": "充满…的",
        "tl": "puno ng",
        "zh-Hant": "充滿…的",
        "ps": "ډک له",
        "am": "የተሞላ",
        "ar": "مليء بـ",
        "es": "lleno de",
        "fr": "plein de",
        "hi": "से भरा",
        "ja": "～に満ちた",
        "ko": "~로 가득한",
        "ml": "നിറഞ്ഞ",
        "ro": "plin de",
        "ru": "полный",
        "ta": "நிறைந்த",
        "vi": "đầy"
       }
      }
     ],
     "tr": {
      "am": "ተመሳሳይ ጊዜ",
      "ar": "متزامن",
      "es": "simultáneo",
      "fa": "هم‌زمان",
      "fr": "simultané",
      "hi": "युगपत",
      "ja": "連立の",
      "ko": "연립",
      "ml": "ഒരേസമയ",
      "ps": "همزمان",
      "ro": "simultan",
      "ru": "одновременный",
      "ta": "ஒரேநேர",
      "tl": "sabay-sabay",
      "ur": "بیک وقت",
      "vi": "đồng thời",
      "zh-Hans": "联立的",
      "zh-Hant": "聯立的"
     },
     "note": "Latin <i>simul</i> (at the same time) + <i>-tane</i> + <i>-ous</i> (full of): happening at the same time. Same <i>simul</i> in <b>simulcast</b>, a show broadcast on TV and radio at the same time. Quiz tip: the answer to simultaneous equations is <b>one pair</b> (x, y) that makes both equations true — on a graph it is where the two lines cross.",
     "apply": [
      {
       "id": "rev_simul_calc",
       "type": "scenario",
       "q": "x + y = 10 and x − y = 2. Which pair fits BOTH equations?",
       "a": "x = 6, y = 4",
       "opts": [
        "x = 5, y = 5",
        "x = 6, y = 4",
        "x = 8, y = 2",
        "x = 4, y = 6"
       ],
       "explain": "6 + 4 = 10 ✓ and 6 − 4 = 2 ✓. Careful: x = 4, y = 6 fits the first equation but not the second."
      },
      {
       "id": "rev_simul_scn",
       "type": "scenario",
       "q": "Two lines drawn on the same grid cross at (1, 4). What is the solution of these simultaneous equations?",
       "a": "x = 1, y = 4",
       "opts": [
        "x = 4, y = 1",
        "x = 1 only",
        "x = 1, y = 4",
        "There is no solution"
       ],
       "explain": "The crossing point sits on both lines, so its coordinates make both equations true."
      },
      {
       "id": "rev_simul_cloze",
       "type": "cloze",
       "before": "Because both rules must be true at the same time, we call them",
       "after": "equations.",
       "a": "simultaneous",
       "opts": [
        "linear",
        "simultaneous",
        "perpendicular",
        "piecewise"
       ],
       "explain": "<i>simul</i> = at the same time. One answer has to satisfy both equations together."
      }
     ]
    },
    {
     "w": "perpendicular",
     "meaning": "meeting at a right angle; the two gradients multiply to make -1",
     "example": "The line y = -2x is perpendicular to y = 0.5x.",
     "parts": [
      {
       "surface": "per",
       "type": "prefix",
       "meaning": "through",
       "tr": {
        "ur": "کے ذریعے",
        "fa": "از طریق",
        "zh-Hans": "通过",
        "tl": "sa pamamagitan ng",
        "zh-Hant": "通過",
        "ps": "له لارې",
        "am": "በኩል",
        "ar": "خلال",
        "es": "a través de",
        "fr": "à travers",
        "hi": "के माध्यम से",
        "ja": "通して",
        "ko": "통해",
        "ml": "വഴി",
        "ro": "prin",
        "ru": "через",
        "ta": "மூலம்",
        "vi": "qua",
        "other": "در هر"
       }
      },
      {
       "surface": "pend",
       "type": "root",
       "meaning": "hang",
       "tr": {
        "ur": "لٹکنا",
        "fa": "آویختن",
        "zh-Hans": "悬挂",
        "tl": "nakabitin",
        "zh-Hant": "懸掛",
        "ps": "ځوړندول",
        "am": "መስቀል",
        "ar": "يعلّق",
        "es": "colgar",
        "fr": "pendre",
        "hi": "लटकना",
        "ja": "ぶら下がる",
        "ko": "매달리다",
        "ml": "തൂക്കുക",
        "ro": "a atârna",
        "ru": "висеть",
        "ta": "தொங்குதல்",
        "vi": "treo"
       }
      },
      {
       "surface": "icul",
       "type": "root",
       "meaning": "small part",
       "tr": {
        "ur": "چھوٹا حصہ",
        "fa": "بخش کوچک",
        "zh-Hans": "小部分",
        "tl": "maliit na bahagi",
        "zh-Hant": "小部分",
        "ps": "وړه برخه",
        "am": "ትንሽ ክፍል",
        "ar": "جزء صغير",
        "es": "parte pequeña",
        "fr": "petite partie",
        "hi": "छोटा भाग",
        "ja": "小さな部分",
        "ko": "작은 부분",
        "ml": "ചെറിയ ഭാഗം",
        "ro": "parte mică",
        "ru": "маленькая часть",
        "ta": "சிறிய பகுதி",
        "vi": "phần nhỏ"
       }
      },
      {
       "surface": "ar",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "ur": "سے متعلق",
        "fa": "مربوط به",
        "zh-Hans": "与…有关的",
        "tl": "may kaugnayan sa",
        "zh-Hant": "與…有關的",
        "ps": "اړوند",
        "am": "የሚመለከት",
        "ar": "متعلق بـ",
        "es": "relacionado con",
        "fr": "relatif à",
        "hi": "से संबंधित",
        "ja": "～の",
        "ko": "관련된",
        "ml": "സംബന്ധിച്ച",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "vi": "thuộc về"
       }
      }
     ],
     "tr": {
      "am": "ቀጥ ያለ / ቋሚ",
      "ar": "عمودي",
      "es": "perpendicular",
      "fa": "عمودی",
      "fr": "perpendiculaire",
      "hi": "लंबवत",
      "ja": "垂直",
      "ko": "수직",
      "ml": "ലംബം",
      "ps": "عمودي",
      "ro": "perpendicular",
      "ru": "перпендикулярный",
      "ta": "செங்குத்து",
      "tl": "perpendikular",
      "ur": "عمود",
      "vi": "vuông góc",
      "zh-Hans": "垂直的",
      "zh-Hant": "垂直的"
     },
     "note": "Latin <i>per-</i> (through) + <i>pendere/pend</i> (to hang) + <i>-icul</i> (small) + <i>-ar</i>: from the builder's small hanging plumb weight, which points at 90° to level ground. Same <i>pend</i> in <b>pendulum</b>. Quiz tip: perpendicular gradients multiply to <b>−1</b> — flip the fraction upside down and change the sign.",
     "apply": [
      {
       "id": "rev_perp_calc",
       "type": "scenario",
       "q": "Line A has a gradient of 2. What is the gradient of a line perpendicular to it?",
       "a": "−1/2",
       "opts": [
        "2",
        "−1/2",
        "1/2",
        "−2"
       ],
       "explain": "Flip 2 to 1/2 and change the sign: −1/2. Check: 2 × (−1/2) = <b>−1</b>."
      },
      {
       "id": "rev_perp_check",
       "type": "scenario",
       "q": "Is y = 3x + 1 perpendicular to y = −(1/3)x + 4?",
       "a": "Yes — 3 × (−1/3) = −1",
       "opts": [
        "No — the gradients are different",
        "Yes — 3 × (−1/3) = −1",
        "Yes — both are linear",
        "No — 3 × (−1/3) = 1"
       ],
       "explain": "Multiply the two gradients. If the answer is −1, the lines meet at 90°."
      }
     ]
    }
   ]
  },
  {
   "id": "bio1",
   "area": "bio",
   "title": "Cells & DNA",
   "focus": "The words for the parts of a cell and the code inside it.",
   "words": [
    {
     "w": "cell",
     "meaning": "the smallest living unit that all living things are made of.",
     "example": "A plant cell has a strong cell wall around it.",
     "parts": [
      {
       "surface": "cell",
       "type": "root",
       "meaning": "small basic unit",
       "tr": {
        "ja": "細胞",
        "am": "ሕዋስ",
        "ar": "خلية",
        "es": "célula",
        "fa": "سلول",
        "fr": "cellule",
        "hi": "कोशिका",
        "ko": "세포",
        "ml": "കോശം",
        "ps": "حجره",
        "ro": "celulă",
        "ru": "клетка",
        "ta": "உயிரணு",
        "tl": "selula",
        "ur": "خلیہ",
        "vi": "tế bào",
        "zh-Hans": "细胞",
        "zh-Hant": "細胞"
       }
      }
     ],
     "tr": {
      "am": "ሕዋስ",
      "ar": "خلية",
      "es": "célula",
      "fa": "سلول",
      "fr": "cellule",
      "hi": "कोशिका",
      "ja": "細胞",
      "ko": "세포",
      "ml": "കോശം",
      "ps": "حجره",
      "ro": "celulă",
      "ru": "клетка",
      "ta": "உயிரணு",
      "tl": "selula",
      "ur": "خلیہ",
      "vi": "tế bào",
      "zh-Hans": "细胞",
      "zh-Hant": "細胞"
     },
     "note": "Latin <i>cella</i> = a small room. In 1665 Robert Hooke looked at cork under an early microscope, saw rows of tiny boxes, and said they looked like the small rooms monks slept in. Same <i>cell</i> in <b>cellar</b> (a small room under a house) and <b>prison cell</b>.",
     "apply": [
      {
       "id": "bio1_cell_desc",
       "type": "desc",
       "q": "Which word means the smallest living unit that every living thing is made of?",
       "a": "Cell",
       "opts": [
        "Nucleus",
        "Cell",
        "Protein",
        "Chromosome"
       ],
       "explain": "A <i>cell</i> is a small room. Everything else here sits <b>inside</b> a cell."
      },
      {
       "id": "bio1_cell_scn",
       "type": "scenario",
       "q": "Mai puts a thin piece of onion skin under the microscope. She sees rows of small boxes, each with a wall around it. What is she looking at?",
       "a": "Plant cells",
       "opts": [
        "Plant cells",
        "Chromosomes",
        "Proteins",
        "Gametes"
       ],
       "explain": "The boxes are cells — the same 'small rooms' Hooke saw in cork. A strong cell wall around each box tells you they are plant cells."
      }
     ]
    },
    {
     "w": "chromosome",
     "meaning": "a long thread of DNA in the nucleus that carries many genes.",
     "example": "Humans have 46 chromosomes in most cells.",
     "parts": [
      {
       "surface": "chromo",
       "type": "root",
       "meaning": "colour",
       "tr": {
        "ja": "色",
        "am": "ቀለም",
        "ar": "لون",
        "es": "color",
        "fa": "رنگ",
        "fr": "couleur",
        "hi": "रंग",
        "ko": "색",
        "ml": "നിറം",
        "ps": "رنګ",
        "ro": "culoare",
        "ru": "цвет",
        "ta": "நிறம்",
        "tl": "kulay",
        "ur": "رنگ",
        "vi": "màu sắc",
        "zh-Hans": "颜色",
        "zh-Hant": "顏色"
       }
      },
      {
       "surface": "some",
       "type": "suffix",
       "meaning": "body",
       "tr": {
        "fa": "جسم",
        "ja": "体",
        "zh-Hans": "体 / 體",
        "zh-Hant": "體 / 體",
        "tl": "katawan",
        "ur": "جسم",
        "am": "ሰውነት",
        "ar": "جسم",
        "es": "cuerpo",
        "fr": "corps",
        "hi": "शरीर",
        "ko": "몸 / 신체",
        "ml": "ശരീരം",
        "ps": "بدن",
        "ro": "corp",
        "ru": "тело",
        "ta": "உடல்",
        "vi": "cơ thể"
       }
      }
     ],
     "tr": {
      "am": "ክሮሞዞም",
      "ar": "كروموسوم",
      "es": "cromosoma",
      "fa": "کروموزوم",
      "fr": "chromosome",
      "hi": "गुणसूत्र",
      "ja": "染色体",
      "ko": "염색체",
      "ml": "ക്രോമസോം",
      "ps": "کروموزوم",
      "ro": "cromozom",
      "ru": "хромосома",
      "ta": "குரோமோசோம்",
      "tl": "kromosom",
      "ur": "کروموسوم",
      "vi": "nhiễm sắc thể",
      "zh-Hans": "染色体",
      "zh-Hant": "染色體"
     },
     "note": "Greek <i>chroma</i> (colour) + <i>soma</i> (body) = 'coloured body'. Early scientists stained cells with dye, and these long threads soaked up the colour strongly, so they were named after it. Same <i>chroma</i> in <b>chromatic</b>. Exam tip: a gene is only a short <b>section</b> of one chromosome — humans have 46 chromosomes but about 20,000 genes.",
     "apply": [
      {
       "id": "bio1_chrom_desc",
       "type": "desc",
       "q": "Which word literally means 'coloured body' and names a long thread of DNA that carries many genes?",
       "a": "Chromosome",
       "opts": [
        "Allele",
        "Cytoplasm",
        "Protein",
        "Chromosome"
       ],
       "explain": "<i>chromo</i> (colour) + <i>some</i> (body): the threads took up the stain, so they got the colour name."
      },
      {
       "id": "bio1_chrom_scn",
       "type": "scenario",
       "q": "A human body cell contains 46 long DNA threads, arranged in 23 pairs. What are these threads called?",
       "a": "Chromosomes",
       "opts": [
        "Genes",
        "Chromosomes",
        "Gametes",
        "Proteins"
       ],
       "explain": "46 chromosomes = 23 pairs, one of each pair from each parent. A gamete (egg or sperm) carries only 23."
      },
      {
       "id": "bio1_chrom_cloze",
       "type": "cloze",
       "before": "A gene is only a short section of one",
       "after": ", so a single chromosome can carry hundreds of genes.",
       "a": "chromosome",
       "opts": [
        "chromosome",
        "cytoplasm",
        "phenotype",
        "protein"
       ],
       "explain": "Think of the chromosome as a long book and each gene as one page in it."
      }
     ]
    },
    {
     "w": "cytoplasm",
     "meaning": "the jelly-like fluid inside a cell where the organelles sit and reactions happen.",
     "example": "The organelles float in the cytoplasm.",
     "parts": [
      {
       "surface": "cyto",
       "type": "root",
       "meaning": "cell",
       "tr": {
        "fa": "سلول",
        "ja": "細胞",
        "zh-Hans": "细胞 / 細胞",
        "zh-Hant": "細胞 / 細胞",
        "tl": "selula",
        "ur": "خلیہ",
        "am": "ሕዋስ",
        "ar": "خلية",
        "es": "célula",
        "fr": "cellule",
        "hi": "कोशिका",
        "ko": "세포",
        "ml": "കോശം",
        "ps": "حجره",
        "ro": "celulă",
        "ru": "клетка",
        "ta": "உயிரணு",
        "vi": "tế bào"
       }
      },
      {
       "surface": "plasm",
       "type": "root",
       "meaning": "formed substance",
       "tr": {
        "fa": "مایع",
        "ja": "形成された物質",
        "zh-Hans": "浆 / 漿",
        "zh-Hant": "漿 / 漿",
        "tl": "plasma",
        "ur": "مائع",
        "am": "የተፈጠረ ንጥረ ነገር",
        "ar": "مادة مشكّلة",
        "es": "sustancia formada",
        "fr": "substance formée",
        "hi": "निर्मित पदार्थ",
        "ko": "형성된 물질",
        "ml": "രൂപപ്പെട്ട പദാർത്ഥം",
        "ps": "جوړ شوی ماده",
        "ro": "substanță formată",
        "ru": "сформированное вещество",
        "ta": "உருவான பொருள்",
        "vi": "chất được tạo thành"
       }
      }
     ],
     "tr": {
      "am": "ሳይቶፕላዝም",
      "ar": "السيتوبلازم",
      "es": "citoplasma",
      "fa": "سیتوپلاسم",
      "fr": "cytoplasme",
      "hi": "कोशिकाद्रव्य",
      "ja": "細胞質",
      "ko": "세포질",
      "ml": "കോശദ്രവ്യം",
      "ps": "سایتوپلازم",
      "ro": "citoplasmă",
      "ru": "цитоплазма",
      "ta": "சைட்டோபிளாசம்",
      "tl": "sitoplasma",
      "ur": "سائٹوپلازم",
      "vi": "tế bào chất",
      "zh-Hans": "细胞质",
      "zh-Hant": "細胞質"
     },
     "note": "Greek <i>kytos</i> (hollow vessel, cell) + <i>plasma</i> (something moulded or formed): the moulded jelly that fills the cell. Same <i>plasm</i> in <b>plasma</b>, the liquid part of blood. Exam tip: in plant and animal cells the DNA is in the <b>nucleus</b>, not in the cytoplasm.",
     "apply": [
      {
       "id": "bio1_cyto_scn",
       "type": "scenario",
       "q": "Hiro is labelling a diagram of an animal cell. He needs the word for the jelly-like fluid that fills the cell and holds the organelles. Which word does he write?",
       "a": "Cytoplasm",
       "opts": [
        "Cell wall",
        "Nucleus",
        "Chromosome",
        "Cytoplasm"
       ],
       "explain": "<i>cyto</i> (cell) + <i>plasm</i> (formed substance): the formed jelly of the cell."
      },
      {
       "id": "bio1_cyto_cloze",
       "type": "cloze",
       "before": "The nucleus holds the DNA, and the other organelles float in the jelly-like",
       "after": "around it.",
       "a": "cytoplasm",
       "opts": [
        "cytoplasm",
        "chromosome",
        "protein",
        "gene"
       ],
       "explain": "The cytoplasm is where most chemical reactions in the cell happen."
      }
     ]
    },
    {
     "w": "dna",
     "meaning": "the molecule that carries the coded instructions for building and running a living thing.",
     "example": "DNA is shaped like a twisted ladder.",
     "parts": [],
     "tr": {
      "am": "ዲ ኤን ኤ",
      "ar": "دي إن إيه",
      "es": "ADN",
      "fa": "دنا",
      "fr": "ADN",
      "hi": "डीएनए",
      "ja": "DNA",
      "ko": "DNA",
      "ml": "ഡിഎൻഎ",
      "ps": "ډي این اې",
      "ro": "ADN",
      "ru": "ДНК",
      "ta": "டிஎன்ஏ",
      "tl": "DNA",
      "ur": "ڈی این اے",
      "vi": "ADN",
      "zh-Hans": "脱氧核糖核酸",
      "zh-Hant": "去氧核糖核酸"
     },
     "note": "DNA is short for <b>d</b>eoxyribo<b>n</b>ucleic <b>a</b>cid — the name is a description: an acid found in the <i>nucleus</i>, built on the sugar ribose with one oxygen missing (<i>de-oxy</i>). So <i>nucleic</i> shares <i>nucle</i> with <b>nucleus</b>. Exam tip: DNA is the molecule; a chromosome is that molecule folded up into a thread; a gene is one section of it.",
     "apply": [
      {
       "id": "bio1_dna_desc",
       "type": "desc",
       "q": "DNA stands for deoxyribonucleic acid. The 'nucleic' part tells you where it was first found. Where was that?",
       "a": "In the nucleus",
       "opts": [
        "In the cytoplasm",
        "In the nucleus",
        "In the blood",
        "In the cell wall"
       ],
       "explain": "<i>nucle</i> is the same piece as in <b>nucleus</b>. The name of the molecule tells you its address."
      },
      {
       "id": "bio1_dna_scn",
       "type": "scenario",
       "q": "Layla describes a molecule shaped like a twisted ladder that carries the coded instructions for building a living thing. What is she describing?",
       "a": "DNA",
       "opts": [
        "A protein",
        "A trait",
        "Cytoplasm",
        "DNA"
       ],
       "explain": "The twisted ladder (double helix) is DNA. A chromosome is DNA folded up; a protein is what the code builds."
      }
     ]
    },
    {
     "w": "gene",
     "meaning": "a section of DNA that carries the instructions for one trait or protein.",
     "example": "A gene controls whether the pea plant is tall or short.",
     "parts": [
      {
       "surface": "gen",
       "type": "root",
       "meaning": "produce / create",
       "tr": {
        "ja": "生み出す",
        "am": "ማመንጨት",
        "ar": "يولّد",
        "es": "producir/crear",
        "fa": "تولید کردن",
        "fr": "produire / créer",
        "hi": "उत्पन्न करना",
        "ko": "생성하다",
        "ml": "ഉത്പാദിപ്പിക്കുക",
        "ps": "رامنځته کول",
        "ro": "a produce / a genera",
        "ru": "производить / создавать",
        "ta": "உருவாக்கு",
        "tl": "lumikha",
        "ur": "پیدا کرنا",
        "vi": "tạo ra / sản sinh",
        "zh-Hans": "产生",
        "zh-Hant": "產生"
       }
      }
     ],
     "tr": {
      "am": "ጅን",
      "ar": "جين",
      "es": "gen",
      "fa": "ژن",
      "fr": "gène",
      "hi": "जीन",
      "ja": "遺伝子",
      "ko": "유전자",
      "ml": "ജീൻ",
      "ps": "جین",
      "ro": "genă",
      "ru": "ген",
      "ta": "மரபணு",
      "tl": "gene",
      "ur": "جین",
      "vi": "gen",
      "zh-Hans": "基因",
      "zh-Hant": "基因"
     },
     "note": "Greek <i>genos</i> (birth, kind): a gene is the piece of DNA that <b>produces</b> one feature. Same <i>gen</i> in <b>generate</b>, <b>generation</b> and <b>genetics</b>. Exam tip: a gene is the slot (eye colour); an <b>allele</b> is one version that can sit in that slot (brown or blue).",
     "apply": [
      {
       "id": "bio1_gene_desc",
       "type": "desc",
       "q": "Which word means a section of DNA that carries the instructions for one trait or protein?",
       "a": "Gene",
       "opts": [
        "Gene",
        "Chromosome",
        "Cytoplasm",
        "Phenotype"
       ],
       "explain": "<i>gen</i> = produce. A gene produces one feature; a chromosome carries hundreds of genes."
      },
      {
       "id": "bio1_gene_cloze",
       "type": "cloze",
       "before": "Eye colour is controlled by one",
       "after": ", and each version of it — brown or blue — is called an allele.",
       "a": "gene",
       "opts": [
        "gene",
        "trait",
        "protein",
        "nucleus"
       ],
       "explain": "Gene = the instruction slot. Allele = one version of that instruction."
      }
     ]
    },
    {
     "w": "genotype",
     "meaning": "the set of alleles an organism carries for a trait.",
     "example": "The genotype Bb gives brown eyes.",
     "parts": [
      {
       "surface": "geno",
       "type": "root",
       "meaning": "produce / origin",
       "tr": {
        "fa": "منشأ",
        "ja": "起源",
        "zh-Hans": "起源 / 起源",
        "zh-Hant": "起源 / 起源",
        "tl": "pinagmulan",
        "ur": "اصل",
        "am": "ምንጭ",
        "ar": "أصل",
        "es": "origen",
        "fr": "origine",
        "hi": "उत्पत्ति",
        "ko": "기원",
        "ml": "ഉത്ഭവം",
        "ps": "اصل",
        "ro": "origine",
        "ru": "происхождение",
        "ta": "மூலம்",
        "vi": "nguồn gốc"
       }
      },
      {
       "surface": "type",
       "type": "root",
       "meaning": "form / kind",
       "tr": {
        "ja": "型",
        "am": "ዓይነት",
        "ar": "نوع",
        "es": "forma/tipo",
        "fa": "نوع",
        "fr": "type/sorte",
        "hi": "प्रकार",
        "ko": "유형",
        "ml": "തരം",
        "ps": "ډول",
        "ro": "tip/fel",
        "ru": "тип",
        "ta": "வகை",
        "tl": "uri",
        "ur": "قسم",
        "vi": "loại",
        "zh-Hans": "类型",
        "zh-Hant": "類型"
       }
      }
     ],
     "tr": {
      "am": "ጂኖታይፕ",
      "ar": "النمط الجيني",
      "es": "genotipo",
      "fa": "ژنوتیپ",
      "fr": "génotype",
      "hi": "जीनप्ररूप",
      "ja": "遺伝子型",
      "ko": "유전자형",
      "ml": "ജനിതകരൂപം",
      "ps": "جینوټایپ",
      "ro": "genotip",
      "ru": "генотип",
      "ta": "மரபணு வகை",
      "tl": "genotype",
      "ur": "جینوٹائپ",
      "vi": "kiểu gen",
      "zh-Hans": "基因型",
      "zh-Hant": "基因型"
     },
     "note": "Greek <i>genos</i> (birth, origin) + <i>typos</i> (a stamp, a model): the kind of instructions you were stamped with — the letters BB, Bb or bb. Same <i>typos</i> in <b>phenotype</b> and <b>typical</b>. Exam tip: genotype = the <b>letters</b>; phenotype = what you can <b>see</b>. Aa × Aa gives a 1 : 2 : 1 genotype ratio.",
     "apply": [
      {
       "id": "bio1_geno_scn",
       "type": "scenario",
       "q": "A pea plant carries one tall allele (T) and one short allele (t). What is its genotype?",
       "a": "Tt",
       "opts": [
        "tt",
        "tall",
        "TT",
        "Tt"
       ],
       "explain": "The genotype is the pair of letters the plant carries: Tt. 'Tall' is the phenotype — what you see."
      },
      {
       "id": "bio1_geno_desc",
       "type": "desc",
       "q": "Which word names the set of alleles an organism carries, written with letters like BB, Bb or bb?",
       "a": "Genotype",
       "opts": [
        "Phenotype",
        "Trait",
        "Genotype",
        "Gamete"
       ],
       "explain": "<i>geno</i> (origin) + <i>type</i> (kind): the kind of instructions you started with."
      },
      {
       "id": "bio1_geno_scn2",
       "type": "scenario",
       "q": "Two brown-eyed parents are both Bb. What genotype ratio does the Punnett square predict for their children?",
       "a": "1 BB : 2 Bb : 1 bb",
       "opts": [
        "1 BB : 2 Bb : 1 bb",
        "3 BB : 1 bb",
        "1 BB : 1 bb",
        "2 BB : 2 Bb"
       ],
       "explain": "The four boxes are BB, Bb, Bb, bb — so 1 : 2 : 1 by genotype. By phenotype it is 3 brown : 1 blue."
      }
     ]
    },
    {
     "w": "nucleus",
     "meaning": "in biology: the control centre of a cell, which holds its DNA.",
     "example": "The nucleus contains the chromosomes.",
     "parts": [
      {
       "surface": "nucle",
       "type": "root",
       "meaning": "nucleus",
       "tr": {
        "fa": "هسته",
        "ja": "核",
        "zh-Hans": "核心 / 核心",
        "zh-Hant": "核心 / 核心",
        "tl": "sentro",
        "ur": "مرکز",
        "am": "ኒውክሊየስ",
        "ar": "نواة",
        "es": "núcleo",
        "fr": "noyau",
        "hi": "नाभिक",
        "ko": "핵",
        "ml": "ന്യൂക്ലിയസ്",
        "ps": "هسته",
        "ro": "nucleu",
        "ru": "ядро",
        "ta": "கரு",
        "vi": "hạt nhân"
       }
      },
      {
       "surface": "us",
       "type": "suffix",
       "meaning": "structure",
       "tr": {
        "fa": "پسوند اسمی",
        "ja": "構造",
        "zh-Hans": "名词词尾 / 名詞詞尾",
        "zh-Hant": "名詞詞尾 / 名詞詞尾",
        "tl": "pangngalan",
        "ur": "اسم کا لاحقہ",
        "am": "መዋቅር",
        "ar": "بنية",
        "es": "estructura",
        "fr": "structure",
        "hi": "संरचना",
        "ko": "구조",
        "ml": "ഘടന",
        "ps": "جوړښت",
        "ro": "structură",
        "ru": "структура",
        "ta": "அமைப்பு",
        "vi": "cấu trúc"
       }
      }
     ],
     "tr": {
      "am": "ኒውክሊየስ",
      "ar": "النواة",
      "es": "núcleo",
      "fa": "هسته",
      "fr": "noyau",
      "hi": "केंद्रक",
      "ja": "核",
      "ko": "핵",
      "ml": "അണുകേന്ദ്രം",
      "ps": "نیوکلیس",
      "ro": "nucleu",
      "ru": "ядро",
      "ta": "உட்கரு",
      "tl": "nucleus",
      "ur": "مرکزہ",
      "vi": "nhân tế bào",
      "zh-Hans": "细胞核",
      "zh-Hant": "細胞核"
     },
     "note": "Latin <i>nucleus</i> = 'little nut', from <i>nux</i> (nut): the little nut at the centre of the cell. The same word is used in physics for the centre of an atom, and in <b>nuclear</b>. Exam tip: the plural is <b>nuclei</b>, and in biology the nucleus is where the chromosomes are kept.",
     "apply": [
      {
       "id": "bio1_nuc_desc",
       "type": "desc",
       "q": "Which part of a cell is the control centre and holds the chromosomes?",
       "a": "The nucleus",
       "opts": [
        "The cytoplasm",
        "The protein",
        "The cell wall",
        "The nucleus"
       ],
       "explain": "<i>nucleus</i> = little nut: the hard centre where the DNA is stored."
      },
      {
       "id": "bio1_nuc_cloze",
       "type": "cloze",
       "before": "Latin <i>nucleus</i> means 'little nut'. In an animal cell, the",
       "after": "sits near the middle and holds all the DNA.",
       "a": "nucleus",
       "opts": [
        "nucleus",
        "cytoplasm",
        "gamete",
        "gene"
       ],
       "explain": "Same idea in physics: the nucleus of an atom is its small, dense centre."
      }
     ]
    },
    {
     "w": "phenotype",
     "meaning": "the features you can actually see in an organism, produced by its genes and its environment.",
     "example": "Both BB and Bb give the same phenotype: brown eyes.",
     "parts": [
      {
       "surface": "pheno",
       "type": "root",
       "meaning": "show / appear",
       "tr": {
        "fa": "ظاهر",
        "ja": "現れる",
        "zh-Hans": "外表 / 外表",
        "zh-Hant": "外表 / 外表",
        "tl": "anyo",
        "ur": "ظاہری شکل",
        "am": "መታየት",
        "ar": "ظهور",
        "es": "mostrar/aparecer",
        "fr": "apparaître",
        "hi": "प्रकट होना",
        "ko": "나타남",
        "ml": "പ്രത്യക്ഷപ്പെടുക",
        "ps": "ښکاره کېدل",
        "ro": "a apărea",
        "ru": "проявление",
        "ta": "தோன்றுதல்",
        "vi": "biểu hiện"
       }
      },
      {
       "surface": "type",
       "type": "root",
       "meaning": "form / kind",
       "tr": {
        "ja": "型",
        "am": "ዓይነት",
        "ar": "نوع",
        "es": "forma/tipo",
        "fa": "نوع",
        "fr": "type/sorte",
        "hi": "प्रकार",
        "ko": "유형",
        "ml": "തരം",
        "ps": "ډول",
        "ro": "tip/fel",
        "ru": "тип",
        "ta": "வகை",
        "tl": "uri",
        "ur": "قسم",
        "vi": "loại",
        "zh-Hans": "类型",
        "zh-Hant": "類型"
       }
      }
     ],
     "tr": {
      "am": "ፌኖታይፕ",
      "ar": "النمط الظاهري",
      "es": "fenotipo",
      "fa": "فنوتیپ",
      "fr": "phénotype",
      "hi": "लक्षणप्ररूप",
      "ja": "表現型",
      "ko": "표현형",
      "ml": "ഫിനോടൈപ്പ്",
      "ps": "فینوټایپ",
      "ro": "fenotip",
      "ru": "фенотип",
      "ta": "பினோடைப்",
      "tl": "phenotype",
      "ur": "فینوٹائپ",
      "vi": "kiểu hình",
      "zh-Hans": "表现型",
      "zh-Hant": "表現型"
     },
     "note": "Greek <i>phainein</i> (to show) + <i>typos</i> (form): the form that <b>shows</b> on the outside. Same <i>pheno</i> in <b>phenomenon</b> (a thing that appears). Exam tip: BB and Bb look exactly the same — one phenotype, two genotypes. Aa × Aa gives a 3 : 1 phenotype ratio for a dominant trait.",
     "apply": [
      {
       "id": "bio1_pheno_desc",
       "type": "desc",
       "q": "Which word means the features you can actually see, such as brown eyes or a tall stem?",
       "a": "Phenotype",
       "opts": [
        "Genotype",
        "Phenotype",
        "Allele",
        "Gamete"
       ],
       "explain": "<i>pheno</i> = show. The phenotype is the part that shows."
      },
      {
       "id": "bio1_pheno_scn",
       "type": "scenario",
       "q": "Two pea plants have the genotypes TT and Tt. Tall (T) is dominant. What is true about these two plants?",
       "a": "Same phenotype, different genotypes",
       "opts": [
        "Different genotypes and different phenotypes",
        "Same genotype, different phenotypes",
        "Same genotype and same phenotype",
        "Same phenotype, different genotypes"
       ],
       "explain": "One T is enough to make a plant tall, so both look tall. The letters they carry are different."
      },
      {
       "id": "bio1_pheno_scn2",
       "type": "scenario",
       "q": "Amara crosses two heterozygous tall pea plants (Tt × Tt). What phenotype ratio should she expect in the offspring?",
       "a": "3 tall : 1 short",
       "opts": [
        "1 : 2 : 1",
        "3 tall : 1 short",
        "1 tall : 1 short",
        "4 tall : 0 short"
       ],
       "explain": "The boxes are TT, Tt, Tt, tt. Three plants show tall, one shows short. 1 : 2 : 1 is the <b>genotype</b> ratio."
      }
     ]
    },
    {
     "w": "protein",
     "meaning": "a large molecule built from amino acids that does most of the work in a cell.",
     "example": "Enzymes are proteins that speed up reactions.",
     "parts": [
      {
       "surface": "prote",
       "type": "root",
       "meaning": "protein",
       "tr": {
        "am": "ፕሮቲን",
        "ar": "بروتين",
        "es": "proteína",
        "fa": "پروتئین",
        "fr": "protéine",
        "hi": "प्रोटीन",
        "ja": "タンパク質",
        "ko": "단백질",
        "ml": "പ്രോട്ടീൻ",
        "ps": "پروټین",
        "ro": "proteină",
        "ru": "белок",
        "ta": "புரதம்",
        "tl": "protina",
        "ur": "پروٹین",
        "vi": "protein / chất đạm",
        "zh-Hans": "蛋白质",
        "zh-Hant": "蛋白質"
       }
      },
      {
       "surface": "in",
       "type": "suffix",
       "meaning": "a substance",
       "tr": {
        "am": "ንጥረ ነገር",
        "ar": "مادة",
        "es": "una sustancia",
        "fa": "ماده",
        "fr": "substance",
        "hi": "पदार्थ",
        "ja": "物質",
        "ko": "물질",
        "ml": "പദാർത്ഥം",
        "ps": "ماده",
        "ro": "substanță",
        "ru": "вещество",
        "ta": "பொருள்",
        "tl": "sangkap",
        "ur": "مادہ",
        "vi": "chất",
        "zh-Hans": "物质/素",
        "zh-Hant": "物質/素"
       }
      }
     ],
     "tr": {
      "am": "ፕሮቲን",
      "ar": "البروتين",
      "es": "proteína",
      "fa": "پروتئین",
      "fr": "protéine",
      "hi": "प्रोटीन",
      "ja": "タンパク質",
      "ko": "단백질",
      "ml": "പ്രോട്ടീൻ",
      "ps": "پروټین",
      "ro": "proteină",
      "ru": "белок",
      "ta": "புரதம்",
      "tl": "protina",
      "ur": "پروٹین",
      "vi": "protein",
      "zh-Hans": "蛋白质",
      "zh-Hant": "蛋白質"
     },
     "note": "The ending <i>-in</i> is the chemistry ending for a substance, as in <b>insulin</b> and <b>keratin</b>. The first part goes back to Greek <i>protos</i> (first): when the word was made in 1838, scientists thought proteins were the most important substance in living things. Exam tip: a gene is the instruction for building one protein — that is how DNA controls a trait.",
     "apply": [
      {
       "id": "bio1_prot_desc",
       "type": "desc",
       "q": "Which word names the large molecules, built from amino acids, that do most of the work in a cell?",
       "a": "Proteins",
       "opts": [
        "Proteins",
        "Chromosomes",
        "Gametes",
        "Traits"
       ],
       "explain": "Enzymes are one important kind of protein. The <i>-in</i> ending marks a substance."
      },
      {
       "id": "bio1_prot_cloze",
       "type": "cloze",
       "before": "A gene carries the instructions for building one",
       "after": ", and enzymes are the kind that speed up reactions.",
       "a": "protein",
       "opts": [
        "nucleus",
        "chromosome",
        "allele",
        "protein"
       ],
       "explain": "DNA → protein → trait. That chain is how the code becomes something you can see."
      }
     ]
    },
    {
     "w": "trait",
     "meaning": "a feature of a living thing, such as eye colour, that can be passed on to offspring.",
     "example": "Tongue rolling is a trait controlled by one gene.",
     "parts": [
      {
       "surface": "trait",
       "type": "root",
       "meaning": "a quality or characteristic",
       "tr": {
        "zh-Hans": "特质",
        "zh-Hant": "特質",
        "ja": "特徴",
        "ko": "특성",
        "vi": "đặc điểm",
        "ar": "سمة",
        "fa": "ویژگی",
        "ur": "خصوصیت",
        "am": "ባህርይ",
        "ml": "സ്വഭാവവിശേഷം",
        "ta": "பண்பு",
        "tl": "katangian",
        "ps": "ځانګړتیا",
        "ro": "trăsătură",
        "ru": "черта",
        "fr": "trait",
        "hi": "विशेषता",
        "es": "rasgo"
       }
      }
     ],
     "tr": {
      "am": "ባህርይ",
      "ar": "صفة",
      "es": "rasgo",
      "fa": "صفت",
      "fr": "caractère",
      "hi": "लक्षण",
      "ja": "形質",
      "ko": "형질",
      "ml": "ലക്ഷണം",
      "ps": "ځانګړتیا",
      "ro": "trăsătură",
      "ru": "признак",
      "ta": "பண்பு",
      "tl": "katangian",
      "ur": "خاصیت",
      "vi": "tính trạng",
      "zh-Hans": "性状",
      "zh-Hant": "性狀"
     },
     "note": "French <i>trait</i> = 'a line, a stroke of a pen', from Latin <i>trahere</i> (to pull, to draw). A trait is one drawn line in the description of a living thing. Same <i>trahere</i> in <b>tractor</b> (it pulls) and <b>attract</b>. Exam tip: the trait is the feature (tongue rolling); the gene is the instruction for it.",
     "apply": [
      {
       "id": "bio1_trait_desc",
       "type": "desc",
       "q": "Tongue rolling, eye colour and plant height are all examples of what?",
       "a": "Traits",
       "opts": [
        "Genes",
        "Traits",
        "Alleles",
        "Gametes"
       ],
       "explain": "A trait is a feature that can be passed to offspring. The gene is the instruction behind it."
      },
      {
       "id": "bio1_trait_cloze",
       "type": "cloze",
       "before": "Eye colour is a",
       "after": "that can be passed from parents to their children.",
       "a": "trait",
       "opts": [
        "trait",
        "gamete",
        "nucleus",
        "protein"
       ],
       "explain": "<i>trait</i> = one drawn line of the description — one feature of the living thing."
      }
     ]
    }
   ]
  },
  {
   "id": "bio2",
   "area": "bio",
   "title": "Inheritance",
   "focus": "The words for how traits pass from parents to offspring.",
   "words": [
    {
     "w": "allele",
     "meaning": "one of the different versions of the same gene.",
     "example": "The plant carries one tall allele and one short allele.",
     "parts": [
      {
       "surface": "allel",
       "type": "root",
       "meaning": "one another",
       "tr": {
        "zh-Hans": "彼此",
        "zh-Hant": "彼此",
        "ja": "お互いに",
        "ko": "서로",
        "vi": "lẫn nhau",
        "ar": "بعضهم البعض",
        "fa": "یکدیگر",
        "ur": "ایک دوسرے",
        "am": "እርስ በርስ",
        "ml": "പരസ്പരം",
        "ta": "ஒருவரையொருவர்",
        "tl": "isa't isa",
        "ps": "یو له بل سره",
        "ro": "unul altuia",
        "ru": "друг друга",
        "fr": "l'un l'autre",
        "hi": "एक दूसरे",
        "es": "uno al otro"
       }
      }
     ],
     "tr": {
      "am": "አሌል",
      "ar": "أليل",
      "es": "alelo",
      "fa": "آلل",
      "fr": "allèle",
      "hi": "युग्मविकल्पी",
      "ja": "対立遺伝子",
      "ko": "대립유전자",
      "ml": "അല്ലീൽ",
      "ps": "الیل",
      "ro": "alelă",
      "ru": "аллель",
      "ta": "அல்லீல்",
      "tl": "alelo",
      "ur": "ایلیل",
      "vi": "alen",
      "zh-Hans": "等位基因",
      "zh-Hant": "對偶基因"
     },
     "note": "Greek <i>allelon</i> = 'of one another', from <i>allos</i> (other): alleles are the different versions of one gene that pair up with <b>each other</b>. Same <i>allos</i> in <b>parallel</b> (lines beside one another) and <b>allergy</b> (a reaction to something other). Exam tip: gene = eye colour; alleles = B and b, the two versions of it.",
     "apply": [
      {
       "id": "bio2_allele_desc",
       "type": "desc",
       "q": "Which word means one of the different versions of the same gene?",
       "a": "Allele",
       "opts": [
        "Trait",
        "Gene",
        "Chromosome",
        "Allele"
       ],
       "explain": "<i>allel</i> = one another. B and b are two alleles of one gene."
      },
      {
       "id": "bio2_allele_scn",
       "type": "scenario",
       "q": "A pea plant is written Tt. T means tall and t means short. How many alleles for height does this plant carry?",
       "a": "Two — one T and one t",
       "opts": [
        "One — just T",
        "Two — one T and one t",
        "Four",
        "None"
       ],
       "explain": "A body cell carries two alleles of each gene, one from each parent. A gamete carries only one."
      }
     ]
    },
    {
     "w": "carrier",
     "meaning": "a person who carries a recessive allele for a condition but does not show it.",
     "example": "Both parents were carriers of cystic fibrosis.",
     "parts": [
      {
       "surface": "carr",
       "type": "root",
       "meaning": "carry",
       "tr": {
        "ja": "運ぶ",
        "am": "መሸከም",
        "ar": "يحمل",
        "es": "llevar",
        "fa": "حمل کردن",
        "fr": "porter",
        "hi": "ले जाना",
        "ko": "운반하다",
        "ml": "വഹിക്കുക",
        "ps": "وړل",
        "ro": "a purta",
        "ru": "нести",
        "ta": "சுமத்தல்",
        "tl": "dalhin",
        "ur": "لے جانا",
        "vi": "mang",
        "zh-Hans": "携带",
        "zh-Hant": "攜帶"
       }
      },
      {
       "surface": "i",
       "type": "suffix",
       "meaning": "agent vowel",
       "tr": {
        "ja": "連結母音",
        "am": "አገናኝ አናባቢ",
        "ar": "حرف علة رابط",
        "es": "vocal de enlace",
        "fa": "مصوت رابط",
        "fr": "voyelle de liaison",
        "hi": "संयोजक स्वर",
        "ko": "연결 모음",
        "ml": "ബന്ധിപ്പിക്കുന്ന സ്വരം",
        "ps": "د تړلو غږلرونکی",
        "ro": "vocală de legătură",
        "ru": "соединительная гласная",
        "ta": "இணைப்பு உயிரெழுத்து",
        "tl": "patinig na pang-ugnay",
        "ur": "جوڑنے والا حرفِ علت",
        "vi": "nguyên âm nối",
        "zh-Hans": "连接元音",
        "zh-Hant": "連接元音"
       }
      },
      {
       "surface": "er",
       "type": "suffix",
       "meaning": "person or thing",
       "tr": {
        "fa": "شخص",
        "ja": "人・物",
        "zh-Hans": "人 / 人",
        "zh-Hant": "人 / 人",
        "tl": "gumagawa",
        "ur": "کرنے والا",
        "am": "ሰው",
        "ar": "شخص",
        "es": "persona o cosa",
        "fr": "personne / chose",
        "hi": "व्यक्ति या वस्तु",
        "ko": "사람 / 사물",
        "ml": "വ്യക്തി",
        "ps": "کس یا شی",
        "ro": "persoană / lucru",
        "ru": "человек / предмет",
        "ta": "நபர் / பொருள்",
        "vi": "người / vật",
        "other": "کننده"
       }
      }
     ],
     "tr": {
      "am": "ተሸካሚ",
      "ar": "حامل",
      "es": "portador",
      "fa": "ناقل",
      "fr": "porteur",
      "hi": "वाहक",
      "ja": "保因者",
      "ko": "보인자",
      "ml": "വാഹകൻ",
      "ps": "حامل",
      "ro": "purtător",
      "ru": "носитель",
      "ta": "கேரியர்",
      "tl": "carrier",
      "ur": "حامل",
      "vi": "người mang gen",
      "zh-Hans": "携带者",
      "zh-Hant": "帶因者"
     },
     "note": "Simply <i>carry</i> + <i>-er</i> (the person or thing that does it), with a linking <i>i</i> when <b>carry</b> becomes <b>carrier</b>. Same <i>-er</i> in <b>teacher</b> and <b>driver</b>. Exam tip: for a recessive condition, a carrier is always <b>heterozygous</b> (Ff) — the one working allele hides the faulty one.",
     "apply": [
      {
       "id": "bio2_carrier_desc",
       "type": "desc",
       "q": "Which word describes a person who has one recessive allele for a condition but does not show the condition?",
       "a": "A carrier",
       "opts": [
        "A carrier",
        "A hybrid",
        "A gamete",
        "A phenotype"
       ],
       "explain": "They <b>carry</b> the allele and can pass it on, but the dominant allele hides it."
      },
      {
       "id": "bio2_carrier_scn",
       "type": "scenario",
       "q": "Cystic fibrosis is recessive (f). Mai's genotype is Ff and she is healthy. What is she?",
       "a": "A carrier",
       "opts": [
        "Homozygous recessive",
        "Affected by the condition",
        "Free of the f allele",
        "A carrier"
       ],
       "explain": "One F is enough to stay healthy, so the f is carried, not shown. Only ff shows the condition."
      }
     ]
    },
    {
     "w": "dominant",
     "meaning": "the allele that shows in the organism even when only one copy is present.",
     "example": "Brown eyes are dominant over blue.",
     "parts": [
      {
       "surface": "domin",
       "type": "root",
       "meaning": "rule / control",
       "tr": {
        "fa": "سلطه",
        "ja": "支配",
        "zh-Hans": "支配 / 支配",
        "zh-Hant": "支配 / 支配",
        "tl": "mangibabaw",
        "ur": "غالب ہونا",
        "am": "መግዛት",
        "ar": "سيطرة",
        "es": "dominar/controlar",
        "fr": "dominer",
        "hi": "नियंत्रण",
        "ko": "지배",
        "ml": "ആധിപത്യം",
        "ps": "واکمني",
        "ro": "dominare",
        "ru": "доминирование",
        "ta": "மேலாதிக்கம்",
        "vi": "chi phối"
       }
      },
      {
       "surface": "ant",
       "type": "suffix",
       "meaning": "state / quality",
       "tr": {
        "fa": "دارای",
        "ja": "性質",
        "zh-Hans": "具有…的 / 具有…的",
        "zh-Hant": "具有…的 / 具有…的",
        "tl": "may katangiang",
        "ur": "والا",
        "am": "ባለ",
        "ar": "ذو صفة",
        "es": "estado/cualidad",
        "fr": "qui a la qualité de",
        "hi": "वाला",
        "ko": "성질을 가진",
        "ml": "ഗുണമുള്ള",
        "ps": "لرونکی",
        "ro": "care are calitatea de",
        "ru": "обладающий свойством",
        "ta": "பண்புடைய",
        "vi": "có tính chất"
       }
      }
     ],
     "tr": {
      "am": "የበላይ",
      "ar": "سائد",
      "es": "dominante",
      "fa": "غالب",
      "fr": "dominant",
      "hi": "प्रभावी",
      "ja": "顕性",
      "ko": "우성",
      "ml": "പ്രബലം",
      "ps": "غالب",
      "ro": "dominant",
      "ru": "доминантный",
      "ta": "மேலோங்கிய",
      "tl": "dominante",
      "ur": "غالب",
      "vi": "trội",
      "zh-Hans": "显性",
      "zh-Hant": "顯性"
     },
     "note": "Latin <i>dominus</i> (master) → <i>dominare</i> (to rule): the dominant allele <b>rules</b>, so one copy is enough for it to show. Same <i>domin</i> in <b>dominate</b>. Exam tip: always write the dominant allele as a CAPITAL letter (B) and the recessive one as the small letter (b) — markers look for this.",
     "apply": [
      {
       "id": "bio2_dom_cloze",
       "type": "cloze",
       "before": "Brown eyes are",
       "after": "over blue, so a person with the genotype Bb has brown eyes.",
       "a": "dominant",
       "opts": [
        "dominant",
        "recessive",
        "heterozygous",
        "hybrid"
       ],
       "explain": "<i>domin</i> = rule. One dominant allele rules over the other one."
      },
      {
       "id": "bio2_dom_scn",
       "type": "scenario",
       "q": "In guinea pigs, black fur (B) is dominant and white fur (b) is recessive. What colour is a guinea pig with the genotype Bb?",
       "a": "Black",
       "opts": [
        "White",
        "Black",
        "Grey",
        "Half black, half white"
       ],
       "explain": "The B rules, so the animal is black. Alleles do not mix into grey."
      }
     ]
    },
    {
     "w": "heterozygous",
     "meaning": "having two different alleles for a gene, such as Bb.",
     "example": "Heterozygous plants are tall but carry the short allele.",
     "parts": [
      {
       "surface": "hetero",
       "type": "prefix",
       "meaning": "different",
       "tr": {
        "fa": "متفاوت",
        "ja": "異なる",
        "zh-Hans": "不同 / 不同",
        "zh-Hant": "不同 / 不同",
        "tl": "magkaiba",
        "ur": "مختلف",
        "am": "የተለያየ",
        "ar": "مختلف",
        "es": "diferente",
        "fr": "différent",
        "hi": "भिन्न",
        "ko": "다른",
        "ml": "വ്യത്യസ്തം",
        "ps": "بېل/مختلف",
        "ro": "diferit",
        "ru": "разный",
        "ta": "வேறுபட்ட",
        "vi": "khác nhau"
       }
      },
      {
       "surface": "zyg",
       "type": "root",
       "meaning": "join",
       "tr": {
        "fa": "پیوند",
        "ja": "結合",
        "zh-Hans": "结合 / 結合",
        "zh-Hant": "結合 / 結合",
        "tl": "pagdurugtong",
        "ur": "جوڑ",
        "am": "ማገናኘት",
        "ar": "ربط",
        "es": "unir",
        "fr": "joindre",
        "hi": "जोड़ना",
        "ko": "결합",
        "ml": "ചേരുക",
        "ps": "نښلول",
        "ro": "a uni",
        "ru": "соединять",
        "ta": "இணைத்தல்",
        "vi": "nối"
       }
      },
      {
       "surface": "ous",
       "type": "suffix",
       "meaning": "full of",
       "tr": {
        "fa": "دارای",
        "ja": "～に満ちた",
        "zh-Hans": "充满…的 / 充滿…的",
        "zh-Hant": "充滿…的 / 充滿…的",
        "tl": "may",
        "ur": "سے بھرپور",
        "am": "የተሞላ",
        "ar": "مليء بـ",
        "es": "lleno de",
        "fr": "plein de",
        "hi": "से भरा",
        "ko": "~로 가득한",
        "ml": "നിറഞ്ഞ",
        "ps": "ډک له",
        "ro": "plin de",
        "ru": "полный",
        "ta": "நிறைந்த",
        "vi": "đầy"
       }
      }
     ],
     "tr": {
      "am": "ሄትሮዚጎት",
      "ar": "متغاير الجينات",
      "es": "heterocigoto",
      "fa": "هتروزیگوت",
      "fr": "hétérozygote",
      "hi": "विषमयुग्मजी",
      "ja": "ヘテロ接合の",
      "ko": "이형접합의",
      "ml": "ഹെറ്ററോസൈഗസ്",
      "ps": "هېټرو زایګوت",
      "ro": "heterozigot",
      "ru": "гетерозиготный",
      "ta": "ஹெட்டரோசைகஸ்",
      "tl": "heterozygous",
      "ur": "ہیٹروزائیگس",
      "vi": "dị hợp tử",
      "zh-Hans": "杂合的",
      "zh-Hant": "雜合的"
     },
     "note": "Greek <i>heteros</i> (different) + <i>zygon</i> (a yoke — the wooden bar that joins two oxen) + <i>-ous</i> (full of): the two alleles yoked together are <b>different</b>, like Bb. Same <i>zyg</i> in <b>zygote</b> (the joined cell made by egg + sperm). Exam tip: heterozygous always means two different letters.",
     "apply": [
      {
       "id": "bio2_het_desc",
       "type": "desc",
       "q": "Which word describes a genotype with two different alleles, such as Bb?",
       "a": "Heterozygous",
       "opts": [
        "Homozygous",
        "Dominant",
        "Recessive",
        "Heterozygous"
       ],
       "explain": "<i>hetero</i> = different. Two different letters = heterozygous."
      },
      {
       "id": "bio2_het_scn",
       "type": "scenario",
       "q": "Which of these genotypes is heterozygous?",
       "a": "Rr",
       "opts": [
        "RR",
        "rr",
        "Rr",
        "R"
       ],
       "explain": "RR and rr have two of the same letter, so they are homozygous. Rr has two different alleles."
      },
      {
       "id": "bio2_het_scn2",
       "type": "scenario",
       "q": "Two heterozygous pea plants (Tt × Tt) are crossed. What fraction of the offspring are expected to be heterozygous?",
       "a": "1/2",
       "opts": [
        "1/4",
        "1/2",
        "3/4",
        "1"
       ],
       "explain": "The four boxes are TT, Tt, Tt, tt. Two of the four are Tt, so 2/4 = 1/2."
      }
     ]
    },
    {
     "w": "homozygous",
     "meaning": "having two identical alleles for a gene, such as BB or bb.",
     "example": "A homozygous recessive plant is short.",
     "parts": [
      {
       "surface": "homo",
       "type": "prefix",
       "meaning": "same",
       "tr": {
        "fa": "همان",
        "ja": "同じ",
        "zh-Hans": "相同 / 相同",
        "zh-Hant": "相同 / 相同",
        "tl": "pareho",
        "ur": "ایک جیسا",
        "am": "ተመሳሳይ",
        "ar": "متماثل",
        "es": "igual",
        "fr": "même",
        "hi": "समान",
        "ko": "동일",
        "ml": "സമാനം",
        "ps": "ورته",
        "ro": "același",
        "ru": "одинаковый",
        "ta": "ஒரே",
        "vi": "giống nhau"
       }
      },
      {
       "surface": "zyg",
       "type": "root",
       "meaning": "join",
       "tr": {
        "fa": "پیوند",
        "ja": "結合",
        "zh-Hans": "结合 / 結合",
        "zh-Hant": "結合 / 結合",
        "tl": "pagdurugtong",
        "ur": "جوڑ",
        "am": "ማገናኘት",
        "ar": "ربط",
        "es": "unir",
        "fr": "joindre",
        "hi": "जोड़ना",
        "ko": "결합",
        "ml": "ചേരുക",
        "ps": "نښلول",
        "ro": "a uni",
        "ru": "соединять",
        "ta": "இணைத்தல்",
        "vi": "nối"
       }
      },
      {
       "surface": "ous",
       "type": "suffix",
       "meaning": "full of",
       "tr": {
        "fa": "دارای",
        "ja": "～に満ちた",
        "zh-Hans": "充满…的 / 充滿…的",
        "zh-Hant": "充滿…的 / 充滿…的",
        "tl": "may",
        "ur": "سے بھرپور",
        "am": "የተሞላ",
        "ar": "مليء بـ",
        "es": "lleno de",
        "fr": "plein de",
        "hi": "से भरा",
        "ko": "~로 가득한",
        "ml": "നിറഞ്ഞ",
        "ps": "ډک له",
        "ro": "plin de",
        "ru": "полный",
        "ta": "நிறைந்த",
        "vi": "đầy"
       }
      }
     ],
     "tr": {
      "am": "ሆሞዚጎት",
      "ar": "متماثل الجينات",
      "es": "homocigoto",
      "fa": "هموزیگوت",
      "fr": "homozygote",
      "hi": "समयुग्मजी",
      "ja": "ホモ接合の",
      "ko": "동형접합의",
      "ml": "ഹോമോസൈഗസ്",
      "ps": "همو زایګوت",
      "ro": "homozigot",
      "ru": "гомозиготный",
      "ta": "ஹோமோசைகஸ்",
      "tl": "homozygous",
      "ur": "ہوموزائیگس",
      "vi": "đồng hợp tử",
      "zh-Hans": "纯合的",
      "zh-Hant": "純合的"
     },
     "note": "Greek <i>homos</i> (same) + <i>zygon</i> (yoke) + <i>-ous</i> (full of): the two alleles joined together are the <b>same</b> — BB or bb. Same <i>homo-</i> in <b>homograph</b> (words written the same). Careful: this <i>homo-</i> means 'same', not the Latin <i>homo</i> meaning 'man'. Exam tip: say <b>homozygous dominant</b> (BB) or <b>homozygous recessive</b> (bb) to be precise.",
     "apply": [
      {
       "id": "bio2_hom_desc",
       "type": "desc",
       "q": "Which word describes a genotype with two identical alleles, such as TT or tt?",
       "a": "Homozygous",
       "opts": [
        "Carrier",
        "Heterozygous",
        "Hybrid",
        "Homozygous"
       ],
       "explain": "<i>homo</i> = same. Two of the same letter = homozygous."
      },
      {
       "id": "bio2_hom_scn",
       "type": "scenario",
       "q": "A short pea plant has the genotype tt, because short is recessive. Which term describes it best?",
       "a": "Homozygous recessive",
       "opts": [
        "Homozygous dominant",
        "Heterozygous",
        "Homozygous recessive",
        "A carrier"
       ],
       "explain": "Two identical alleles (homozygous) and both are the small letter (recessive)."
      },
      {
       "id": "bio2_hom_scn2",
       "type": "scenario",
       "q": "Anh crosses a homozygous tall plant (TT) with a homozygous short plant (tt). What are the offspring?",
       "a": "All Tt, and all tall",
       "opts": [
        "All TT, and all tall",
        "All Tt, and all tall",
        "Half tall, half short",
        "All tt, and all short"
       ],
       "explain": "Every offspring gets a T from one parent and a t from the other, so all are Tt. T is dominant, so all look tall."
      }
     ]
    },
    {
     "w": "inheritance",
     "meaning": "the passing of genes, and the traits they control, from parents to offspring.",
     "example": "We drew a diagram to show the inheritance of eye colour.",
     "parts": [
      {
       "surface": "in",
       "type": "prefix",
       "meaning": "into",
       "tr": {
        "am": "ወደ",
        "ar": "نحو",
        "es": "hacia",
        "fa": "سمت",
        "fr": "vers",
        "hi": "ओर",
        "ja": "へ",
        "ko": "향해",
        "ml": "നേരെ",
        "ps": "طرف ته",
        "ro": "spre",
        "ru": "к",
        "ta": "நோக்கி",
        "tl": "patungo",
        "ur": "طرف",
        "vi": "hướng",
        "zh-Hans": "向",
        "zh-Hant": "向",
        "other": "نه"
       }
      },
      {
       "surface": "herit",
       "type": "root",
       "meaning": "inherit",
       "tr": {
        "fa": "میراث",
        "ja": "受け継ぐ",
        "zh-Hans": "继承 / 繼承",
        "zh-Hant": "繼承 / 繼承",
        "tl": "mana",
        "ur": "وراثت",
        "am": "መውረስ",
        "ar": "يرث",
        "es": "heredar",
        "fr": "hériter",
        "hi": "विरासत में पाना",
        "ko": "물려받다",
        "ml": "അനന്തരാവകാശമായി ലഭിക്കുക",
        "ps": "میراث وړل",
        "ro": "a moșteni",
        "ru": "наследовать",
        "ta": "மரபுரிமையாகப் பெறுதல்",
        "vi": "thừa kế"
       }
      },
      {
       "surface": "ance",
       "type": "suffix",
       "meaning": "state",
       "tr": {
        "fa": "وضعیت",
        "ja": "状態",
        "zh-Hans": "状态 / 狀態",
        "zh-Hant": "狀態 / 狀態",
        "tl": "kalagayan",
        "ur": "حالت",
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado",
        "fr": "état",
        "hi": "अवस्था",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare",
        "ru": "состояние",
        "ta": "நிலை",
        "vi": "trạng thái"
       }
      }
     ],
     "tr": {
      "am": "ውርስ",
      "ar": "الوراثة",
      "es": "herencia",
      "fa": "وراثت",
      "fr": "hérédité",
      "hi": "वंशानुक्रम",
      "ja": "遺伝",
      "ko": "유전",
      "ml": "പാരമ്പര്യം",
      "ps": "میراث",
      "ro": "moștenire",
      "ru": "наследование",
      "ta": "பரம்பரை பெறல்",
      "tl": "pagmamana",
      "ur": "وراثت",
      "vi": "sự di truyền",
      "zh-Hans": "遗传",
      "zh-Hant": "遺傳"
     },
     "note": "Latin <i>in-</i> (into) + <i>heres/hered-</i> (an heir) + <i>-ance</i> (state): what comes <b>in</b> to you from the family before you. Same <i>herit</i> in <b>heritage</b> and <b>inherit</b>. Exam tip: only genes are inherited. A skill you practised, like riding a bike, is learned — it does not change your DNA.",
     "apply": [
      {
       "id": "bio2_inher_desc",
       "type": "desc",
       "q": "Which word names the passing of genes, and the traits they control, from parents to offspring?",
       "a": "Inheritance",
       "opts": [
        "Transmission",
        "Immunity",
        "Generation",
        "Inheritance"
       ],
       "explain": "<i>in-</i> (into) + <i>herit</i> (heir): what passes into the next generation."
      },
      {
       "id": "bio2_inher_scn",
       "type": "scenario",
       "q": "Tom is very good at basketball because he trains on the oval every afternoon. Is that skill inherited?",
       "a": "No — it is learned, not carried in his genes",
       "opts": [
        "Yes — all skills are inherited",
        "No — it is learned, not carried in his genes",
        "Yes, if his parents played too",
        "Only if he is homozygous"
       ],
       "explain": "Inheritance passes alleles, not practice. Training changes his muscles, not his DNA."
      }
     ]
    },
    {
     "w": "offspring",
     "meaning": "the young produced by a parent or a pair of parents.",
     "example": "The two tall plants had one short offspring.",
     "parts": [
      {
       "surface": "off",
       "type": "prefix",
       "meaning": "away / separate",
       "tr": {
        "fa": "دور از",
        "ja": "離れて",
        "zh-Hans": "离开 / 離開",
        "zh-Hant": "離開 / 離開",
        "tl": "mula sa",
        "ur": "سے دور",
        "am": "ራቅ / ተለይቶ",
        "ar": "بعيداً / منفصل",
        "es": "lejos/separado",
        "fr": "loin / séparé",
        "hi": "दूर / अलग",
        "ko": "떨어져 / 분리",
        "ml": "അകലെ / വേറിട്ട്",
        "ps": "لرې / جلا",
        "ro": "departe / separat",
        "ru": "прочь / отдельно",
        "ta": "விலகி / தனி",
        "vi": "rời / tách"
       }
      },
      {
       "surface": "spring",
       "type": "root",
       "meaning": "origin / source",
       "tr": {
        "fa": "به‌وجود آمدن",
        "ja": "起源",
        "zh-Hans": "产生 / 產生",
        "zh-Hant": "產生 / 產生",
        "tl": "sumibol",
        "ur": "پیدا ہونا",
        "am": "ምንጭ",
        "ar": "منشأ",
        "es": "origen",
        "fr": "origine",
        "hi": "उद्गम",
        "ko": "기원",
        "ml": "ഉറവിടം",
        "ps": "سرچینه",
        "ro": "origine",
        "ru": "источник",
        "ta": "மூலம்",
        "vi": "nguồn gốc"
       }
      }
     ],
     "tr": {
      "am": "ልጅ",
      "ar": "النسل",
      "es": "descendencia",
      "fa": "نسل",
      "fr": "descendance",
      "hi": "संतान",
      "ja": "子孫",
      "ko": "자손",
      "ml": "സന്തതി",
      "ps": "اولاد",
      "ro": "urmași",
      "ru": "потомство",
      "ta": "சந்ததி",
      "tl": "supling",
      "ur": "اولاد",
      "vi": "con cái",
      "zh-Hans": "后代",
      "zh-Hant": "後代"
     },
     "note": "Old English <i>ofspring</i>: the ones who have <b>sprung off</b> the parents — the same <i>spring</i> as water springing out of the ground. Exam tip: the word does not change in the plural (one offspring, six offspring), and it is used for plants and animals as well as people.",
     "apply": [
      {
       "id": "bio2_off_cloze",
       "type": "cloze",
       "before": "The two tall pea plants had four",
       "after": ", and one of them was short.",
       "a": "offspring",
       "opts": [
        "offspring",
        "generations",
        "gametes",
        "alleles"
       ],
       "explain": "Offspring = the young produced by the parents. The word looks the same for one or for many."
      },
      {
       "id": "bio2_off_desc",
       "type": "desc",
       "q": "Which word means the young produced by a pair of parents, and keeps the same spelling in the plural?",
       "a": "Offspring",
       "opts": [
        "Hybrid",
        "Gamete",
        "Generation",
        "Offspring"
       ],
       "explain": "They have sprung off the parents. One offspring, six offspring — no -s."
      }
     ]
    },
    {
     "w": "parent",
     "meaning": "An organism that produces offspring. In a Punnett square the parents' alleles are written outside the grid, one parent along the top and one down the side.",
     "example": "Both parents were carriers, so one in four of their offspring had the recessive trait.",
     "parts": [
      {
       "surface": "par",
       "type": "root",
       "meaning": "give birth, produce",
       "tr": {
        "zh-Hans": "生育/产生",
        "zh-Hant": "生育/產生",
        "ja": "産む/生じさせる",
        "ko": "낳다/생기게 하다",
        "vi": "sinh ra/tạo ra",
        "ar": "يلد/ينتج",
        "fa": "زاییدن/تولید کردن",
        "ur": "جنم دینا/پیدا کرنا",
        "am": "መውለድ",
        "ml": "ജന്മം നൽകുക",
        "ta": "பெற்றெடுத்தல்",
        "tl": "manganak/lumikha",
        "ps": "زیږول",
        "ro": "a naște/a produce",
        "ru": "рождать/производить",
        "fr": "enfanter/produire",
        "hi": "जन्म देना",
        "es": "engendrar/producir"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "one who",
       "tr": {
        "zh-Hans": "…的人",
        "zh-Hant": "…的人",
        "ja": "〜する人",
        "ko": "~하는 사람",
        "vi": "người mà",
        "ar": "الشخص الذي",
        "fa": "کسی که",
        "ur": "وہ جو",
        "am": "የሚያደርግ ሰው",
        "ml": "ചെയ്യുന്നയാൾ",
        "ta": "செய்பவர்",
        "tl": "ang gumagawa",
        "ps": "هغه څوک چې",
        "ro": "cel care",
        "ru": "тот, кто",
        "fr": "celui qui",
        "hi": "करने वाला",
        "es": "el que"
       }
      }
     ],
     "tr": {
      "zh-Hans": "亲本（亲代）",
      "zh-Hant": "親代（親本）",
      "ja": "親（親世代）",
      "ko": "어버이(부모 세대)",
      "vi": "bố mẹ (thế hệ P)",
      "ar": "الأب أو الأم (الجيل الأبوي)",
      "fa": "والد (نسل والد)",
      "ur": "والدین (پیدا کرنے والا جاندار)",
      "am": "ወላጅ",
      "ml": "മാതാപിതാവ് (ജനക ജീവി)",
      "ta": "பெற்றோர்",
      "tl": "magulang",
      "ps": "والد (مور/پلار)",
      "ro": "părinte (generația parentală)",
      "ru": "родитель (родительское поколение)",
      "fr": "parent (génération parentale)",
      "hi": "जनक (माता-पिता)",
      "es": "progenitor (padre o madre)"
     },
     "note": "Latin <i>parere</i> (to give birth, to produce) + <i>-ent</i> (one who): a parent is <b>the one who produces</b> the offspring. Same <i>par</i> in <b>parental</b>. Exam tip: in a Punnett square the two <b>parents'</b> alleles go outside the grid — one parent across the top, one down the side — and the boxes inside show the possible offspring.",
     "apply": [
      {
       "id": "bio2_parent_desc",
       "type": "desc",
       "q": "In a Punnett square, whose alleles are written outside the grid, along the top and down the side?",
       "a": "the parents'",
       "opts": [
        "the parents'",
        "the offspring's",
        "the dominant ones only",
        "the recessive ones only"
       ],
       "explain": "Each parent gives one allele, so the parents go outside. <i>par</i> (produce) + <i>-ent</i> (one who): the ones who produce. The boxes inside are the possible offspring."
      },
      {
       "id": "bio2_parent_scn",
       "type": "scenario",
       "q": "Two pea plants are crossed. Each parent is Tt (tall, heterozygous). What fraction of the offspring is expected to be short (tt)?",
       "a": "1 in 4",
       "opts": [
        "1 in 4",
        "1 in 2",
        "3 in 4",
        "none"
       ],
       "explain": "Each parent can pass on T or t. The four boxes are TT, Tt, Tt and tt — so one box in four is tt, the short plant."
      }
     ]
    },
    {
     "w": "Punnett square",
     "meaning": "a grid used to work out the possible allele combinations in the offspring of a cross.",
     "example": "Draw a Punnett square to predict the offspring.",
     "parts": [],
     "tr": {
      "am": "የፑኔት ካሬ",
      "ar": "مربع بونيت",
      "es": "cuadro de Punnett",
      "fa": "جدول پانت",
      "fr": "échiquier de Punnett",
      "hi": "पनेट वर्ग",
      "ja": "パネット表",
      "ko": "퍼넷 사각형",
      "ml": "പണ്ണെറ്റ് സ്ക്വയർ",
      "ps": "د پونیټ مربع",
      "ro": "pătratul lui Punnett",
      "ru": "решётка Пеннета",
      "ta": "பன்னட் சதுரம்",
      "tl": "Punnett square",
      "ur": "پنیٹ اسکوائر",
      "vi": "bảng Punnett",
      "zh-Hans": "庞尼特方格",
      "zh-Hant": "龐尼特方格"
     },
     "note": "There are no morphemes to cut here: it is named after Reginald Punnett, the British geneticist who drew the first one in 1905 — like a <b>bunsen burner</b> or a <b>petri dish</b>. Watch the spelling: two n's, two t's. Exam tip: put one parent's alleles along the top and the other parent's down the side, then fill each box with one letter from each.",
     "apply": [
      {
       "id": "bio2_punn_desc",
       "type": "desc",
       "q": "What is a Punnett square used for?",
       "a": "Working out the possible allele combinations of the offspring",
       "opts": [
        "Showing a family tree across several generations",
        "Working out the possible allele combinations of the offspring",
        "Measuring the size of a cell",
        "Counting chromosomes"
       ],
       "explain": "The family-tree chart is a <b>pedigree</b>. The Punnett square predicts one cross."
      },
      {
       "id": "bio2_punn_scn",
       "type": "scenario",
       "q": "Mai draws a Punnett square for Bb × Bb. What are the four boxes?",
       "a": "BB, Bb, Bb, bb",
       "opts": [
        "BB, Bb, Bb, bb",
        "BB, BB, bb, bb",
        "Bb, Bb, Bb, bb",
        "BB, Bb, bb, bb"
       ],
       "explain": "Each parent gives B or b, so you get BB, Bb, Bb, bb — a 1 : 2 : 1 genotype ratio and 3 : 1 by phenotype."
      },
      {
       "id": "bio2_punn_scn2",
       "type": "scenario",
       "q": "In a Bb × bb cross, what percentage of the offspring are expected to show the recessive trait?",
       "a": "50%",
       "opts": [
        "25%",
        "50%",
        "75%",
        "100%"
       ],
       "explain": "The boxes are Bb, Bb, bb, bb. Two of the four are bb, and 2/4 = 50%."
      }
     ]
    },
    {
     "w": "recessive",
     "meaning": "an allele that only shows when the organism has two copies of it.",
     "example": "Blue eyes are recessive, so you need two blue alleles.",
     "parts": [
      {
       "surface": "re",
       "type": "prefix",
       "meaning": "again",
       "tr": {
        "fa": "دوباره",
        "ja": "再び",
        "zh-Hans": "再 / 再",
        "zh-Hant": "再 / 再",
        "tl": "muli",
        "ur": "دوبارہ",
        "am": "እንደገና",
        "ar": "مرة أخرى",
        "es": "de nuevo",
        "fr": "de nouveau",
        "hi": "फिर से / पुनः",
        "ko": "다시",
        "ml": "വീണ്ടും",
        "ps": "بيا",
        "ro": "din nou",
        "ru": "снова",
        "ta": "மீண்டும்",
        "vi": "lại"
       }
      },
      {
       "surface": "cess",
       "type": "root",
       "meaning": "go / yield",
       "tr": {
        "fa": "عقب‌نشینی",
        "ja": "進む",
        "zh-Hans": "退让 / 退讓",
        "zh-Hant": "退讓 / 退讓",
        "tl": "umuurong",
        "ur": "پیچھے ہٹنا",
        "am": "መሄድ",
        "ar": "تراجع",
        "es": "ceder",
        "fr": "céder",
        "hi": "जाना",
        "ko": "물러남",
        "ml": "പോകുക",
        "ps": "تلل",
        "ro": "a ceda",
        "ru": "уступать",
        "ta": "செல்லுதல்",
        "vi": "lùi"
       }
      },
      {
       "surface": "ive",
       "type": "suffix",
       "meaning": "having quality",
       "tr": {
        "fa": "دارای ویژگی",
        "ja": "性質をもつ",
        "zh-Hans": "倾向…的 / 傾向…的",
        "zh-Hant": "傾向…的 / 傾向…的",
        "tl": "may katangiang",
        "ur": "رجحان رکھنے والا",
        "am": "ባሕርይ ያለው",
        "ar": "ذو صفة",
        "es": "que tiene cualidad de",
        "fr": "qui a la qualité de",
        "hi": "गुण वाला",
        "ko": "성질을 가진",
        "ml": "ഗുണമുള്ള",
        "ps": "خاصیت لرونکی",
        "ro": "care are calitatea",
        "ru": "имеющий свойство",
        "ta": "பண்புடைய",
        "vi": "có tính"
       }
      }
     ],
     "tr": {
      "am": "ድብቅ",
      "ar": "متنحي",
      "es": "recesivo",
      "fa": "مغلوب",
      "fr": "récessif",
      "hi": "अप्रभावी",
      "ja": "劣性",
      "ko": "열성",
      "ml": "അപ്രബലം",
      "ps": "مغلوب",
      "ro": "recesiv",
      "ru": "рецессивный",
      "ta": "ஒடுங்கிய",
      "tl": "resesibo",
      "ur": "مغلوب",
      "vi": "lặn",
      "zh-Hans": "隐性",
      "zh-Hant": "隱性"
     },
     "note": "Latin <i>re-</i> (back) + <i>cedere/cess-</i> (to go) + <i>-ive</i>: a recessive allele <b>goes back</b> and hides whenever a dominant one is present. Same <i>cess</i> in <b>recess</b>, <b>process</b> and <b>access</b>. Exam tip: a recessive trait only shows in the homozygous recessive genotype (bb) — two copies are needed.",
     "apply": [
      {
       "id": "bio2_rec_cloze",
       "type": "cloze",
       "before": "Blue eyes are",
       "after": ", so you only have blue eyes if you inherit two blue alleles (bb).",
       "a": "recessive",
       "opts": [
        "recessive",
        "dominant",
        "homozygous",
        "infectious"
       ],
       "explain": "<i>re-</i> (back) + <i>cess</i> (go): the allele steps back and hides behind a dominant B."
      },
      {
       "id": "bio2_rec_scn",
       "type": "scenario",
       "q": "Two brown-eyed parents, both Bb, have a blue-eyed child. How is this possible?",
       "a": "Each parent passed on a hidden b allele, giving bb",
       "opts": [
        "One parent must really have blue eyes",
        "Each parent passed on a hidden b allele, giving bb",
        "The child has only one allele",
        "Blue must be dominant"
       ],
       "explain": "A recessive allele can hide for a generation. The Punnett square gives a 1 in 4 chance of bb."
      }
     ]
    },
    {
     "w": "gamete",
     "meaning": "a haploid reproductive cell (egg or sperm) that fuses with another to form a new organism.",
     "example": "",
     "parts": [
      {
       "surface": "gam",
       "type": "root",
       "meaning": "marriage / union",
       "tr": {
        "am": "ጋብቻ",
        "ar": "اتحاد",
        "es": "unión",
        "fa": "پیوند",
        "fr": "union",
        "hi": "मिलन",
        "ja": "結合",
        "ko": "결합",
        "ml": "സംയോജനം",
        "ps": "یووالی",
        "ro": "unire",
        "ru": "слияние",
        "ta": "இணைப்பு",
        "tl": "pagsasanib",
        "ur": "اتحاد",
        "vi": "kết hợp",
        "zh-Hans": "结合",
        "zh-Hant": "結合"
       }
      },
      {
       "surface": "ete",
       "type": "suffix",
       "meaning": "one that is/does",
       "tr": {
        "am": "የሚያደርግ",
        "ar": "فاعل",
        "es": "el que es/hace",
        "fa": "انجام‌دهنده",
        "fr": "celui qui",
        "hi": "करने वाला",
        "ja": "〜するもの",
        "ko": "~하는 이",
        "ml": "ചെയ്യുന്നത്",
        "ps": "کوونکی",
        "ro": "cel care",
        "ru": "тот, кто",
        "ta": "செய்பவர்",
        "tl": "gumagawa",
        "ur": "کرنے والا",
        "vi": "vật làm",
        "zh-Hans": "…者",
        "zh-Hant": "…者"
       }
      }
     ],
     "tr": {
      "am": "ጋሜት",
      "ar": "مشيج",
      "es": "gameto",
      "fa": "گامت",
      "fr": "gamète",
      "hi": "युग्मक",
      "ja": "配偶子",
      "ko": "생식세포",
      "ml": "ജന്യു",
      "ps": "جنسي حجره",
      "ro": "gamet",
      "ru": "гамета",
      "ta": "இனச்செல்",
      "tl": "gamete",
      "ur": "گیمیٹ",
      "vi": "giao tử",
      "zh-Hans": "配子",
      "zh-Hant": "配子"
     },
     "note": "Greek <i>gamos</i> (marriage) + <i>-ete</i> (one that does): gametes are the cells that 'marry' — an egg and a sperm join to make one new cell. Same <i>gam</i> in <b>monogamy</b> (one marriage). Exam tip: a gamete carries only <b>one</b> allele of each gene (23 chromosomes in humans); a body cell carries two of each (46).",
     "apply": [
      {
       "id": "bio2_gam_desc",
       "type": "desc",
       "q": "Which word names a sex cell such as an egg or a sperm?",
       "a": "Gamete",
       "opts": [
        "Zygote",
        "Hybrid",
        "Allele",
        "Gamete"
       ],
       "explain": "<i>gam</i> = marriage: two gametes join. The cell they make is the zygote."
      },
      {
       "id": "bio2_gam_scn",
       "type": "scenario",
       "q": "A pea plant has the genotype Tt. Which alleles do its gametes carry?",
       "a": "Half carry T, half carry t",
       "opts": [
        "All carry Tt",
        "Half carry T, half carry t",
        "All carry T",
        "All carry t"
       ],
       "explain": "Each gamete gets only one allele from the pair, so the plant makes T gametes and t gametes."
      }
     ]
    },
    {
     "w": "generation",
     "meaning": "all the members of a family line born at the same step, such as the parents or their children.",
     "example": "The F1 generation were all tall.",
     "parts": [
      {
       "surface": "gener",
       "type": "root",
       "meaning": "produce",
       "tr": {
        "am": "ማመንጨት",
        "ar": "يُنتج",
        "es": "producir",
        "fa": "تولید",
        "fr": "produire",
        "hi": "उत्पन्न करना",
        "ja": "生む",
        "ko": "생성",
        "ml": "ഉത്പാദിപ്പിക്കുക",
        "ps": "تولید",
        "ro": "a produce",
        "ru": "производить",
        "ta": "உற்பத்தி",
        "tl": "lumikha",
        "ur": "پیدا کرنا",
        "vi": "sinh ra",
        "zh-Hans": "产生",
        "zh-Hant": "產生"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "am": "ትውልድ",
      "ar": "جيل",
      "es": "generación",
      "fa": "نسل",
      "fr": "génération",
      "hi": "पीढ़ी",
      "ja": "世代",
      "ko": "세대",
      "ml": "തലമുറ",
      "ps": "نسل",
      "ro": "generație",
      "ru": "поколение",
      "ta": "தலைமுறை",
      "tl": "henerasyon",
      "ur": "نسل",
      "vi": "thế hệ",
      "zh-Hans": "代",
      "zh-Hant": "代"
     },
     "note": "Latin <i>generare</i> (to produce) + <i>-ation</i> (process of): each generation is one round of producing new life. Same <i>gener</i> in <b>generate</b> and <b>gene</b>. Exam tip: in genetics the parents are labelled P, their children F1 and the next lot F2 — the F is for <i>filial</i>, Latin for 'of the children'.",
     "apply": [
      {
       "id": "bio2_gen_cloze",
       "type": "cloze",
       "before": "Mendel crossed a pure tall plant with a pure short plant, and the whole F1",
       "after": "turned out tall.",
       "a": "generation",
       "opts": [
        "generation",
        "genotype",
        "gamete",
        "pedigree"
       ],
       "explain": "<i>gener</i> (produce) + <i>-ation</i>: one step of producing offspring. F1 = the first children."
      },
      {
       "id": "bio2_gen_desc",
       "type": "desc",
       "q": "In a pedigree chart, each row shows one step of a family: grandparents, then parents, then children. What is each row called?",
       "a": "A generation",
       "opts": [
        "A phenotype",
        "A gamete",
        "A subset",
        "A generation"
       ],
       "explain": "Each row is one generation. Pedigrees usually number them I, II, III from the top."
      }
     ]
    },
    {
     "w": "hybrid",
     "meaning": "the offspring of two parents that carry different alleles or come from different varieties.",
     "example": "Mendel crossed tall and short peas to make hybrids.",
     "parts": [
      {
       "surface": "hybrid",
       "type": "root",
       "meaning": "mixed offspring of two different types",
       "tr": {
        "am": "ድቅል",
        "ar": "هجين",
        "es": "híbrido",
        "fa": "دورگه",
        "fr": "hybride",
        "hi": "संकर",
        "ja": "雑種",
        "ko": "잡종",
        "ml": "സങ്കരം",
        "ps": "دوه رګی",
        "ro": "hibrid",
        "ru": "гибрид",
        "ta": "கலப்பினம்",
        "tl": "hibrido",
        "ur": "ہائبرڈ",
        "vi": "giống lai",
        "zh-Hans": "杂交种",
        "zh-Hant": "雜交種"
       }
      }
     ],
     "tr": {
      "am": "ድቅል",
      "ar": "هجين",
      "es": "híbrido",
      "fa": "دورگه",
      "fr": "hybride",
      "hi": "संकर",
      "ja": "雑種",
      "ko": "잡종",
      "ml": "സങ്കരയിനം",
      "ps": "دوه رګی",
      "ro": "hibrid",
      "ru": "гибрид",
      "ta": "கலப்பினம்",
      "tl": "hybrid",
      "ur": "ہائبرڈ",
      "vi": "con lai",
      "zh-Hans": "杂种",
      "zh-Hant": "雜種"
     },
     "note": "Latin <i>hybrida</i> was the word for the young of a tame pig and a wild boar — a mix of two different types. It now means the offspring of any two different varieties. You meet the same word outside biology in a <b>hybrid car</b> (petrol + electric). Exam tip: in Mendel's crosses the F1 hybrids were all heterozygous, like Tt.",
     "apply": [
      {
       "id": "bio2_hyb_desc",
       "type": "desc",
       "q": "Which word means the offspring of two parents that come from different varieties or carry different alleles?",
       "a": "Hybrid",
       "opts": [
        "Carrier",
        "Gamete",
        "Hybrid",
        "Clone"
       ],
       "explain": "A hybrid mixes two types. A clone is an exact copy of one parent."
      },
      {
       "id": "bio2_hyb_scn",
       "type": "scenario",
       "q": "Mendel crossed a pure tall plant (TT) with a pure short plant (tt), and every offspring was Tt. What are those Tt plants called?",
       "a": "Hybrids",
       "opts": [
        "Hybrids",
        "Clones",
        "Gametes",
        "Carriers"
       ],
       "explain": "They mix alleles from two different pure types. Tt is also the heterozygous genotype."
      }
     ]
    },
    {
     "w": "pedigree",
     "meaning": "a chart showing how a trait has been inherited across generations of a family.",
     "example": "",
     "parts": [],
     "tr": {
      "am": "የዘር ሐረግ",
      "ar": "شجرة النسب",
      "es": "árbol genealógico",
      "fa": "شجره‌نامه",
      "fr": "arbre généalogique",
      "hi": "वंशावली",
      "ja": "家系図",
      "ko": "가계도",
      "ml": "വംശാവലി",
      "ps": "د کورنۍ شجره",
      "ro": "arbore genealogic",
      "ru": "родословная",
      "ta": "வம்சாவளி",
      "tl": "puno ng angkan",
      "ur": "شجرہ نسب",
      "vi": "phả hệ",
      "zh-Hans": "系谱图",
      "zh-Hant": "系譜圖"
     },
     "note": "No morphemes here — it comes from Old French <i>pié de grue</i>, 'foot of a crane'. The three branching lines of a family chart looked like a bird's footprint to the clerks who drew them. Exam tip: in a pedigree, squares are males, circles are females, and a filled-in shape means that person shows the trait.",
     "apply": [
      {
       "id": "bio2_ped_desc",
       "type": "desc",
       "q": "Which chart shows how a trait has been passed down through several generations of one family?",
       "a": "A pedigree",
       "opts": [
        "A Punnett square",
        "A Venn diagram",
        "A sample space",
        "A pedigree"
       ],
       "explain": "A pedigree looks back over real generations. A Punnett square predicts one cross."
      },
      {
       "id": "bio2_ped_scn",
       "type": "scenario",
       "q": "In a pedigree, two parents who do not show a condition have a daughter who does. What does this tell you about the allele?",
       "a": "It is recessive",
       "opts": [
        "It is recessive",
        "It is dominant",
        "It is only in gametes",
        "It cannot be inherited"
       ],
       "explain": "The allele hid in both parents, so they must both be carriers (Aa × Aa) and the daughter is aa."
      }
     ]
    }
   ]
  },
  {
   "id": "bio3",
   "area": "bio",
   "title": "Probability for genetics",
   "focus": "The maths words you need for Punnett squares and predicting offspring.",
   "words": [
    {
     "w": "combination",
     "meaning": "A selection where the order does not matter.",
     "example": "How many combinations of 3 students from 10?",
     "parts": [
      {
       "surface": "com",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "አብሮ",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ",
        "ja": "共に",
        "ko": "함께",
        "ml": "ഒരുമിച്ച്",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "اکٹھا",
        "vi": "cùng",
        "zh-Hans": "共同",
        "zh-Hant": "共同",
        "other": "باهم"
       }
      },
      {
       "surface": "bin",
       "type": "root",
       "meaning": "two at a time",
       "tr": {
        "zh-Hans": "每次两个",
        "zh-Hant": "每次兩個",
        "ja": "二つずつ",
        "ko": "두 개씩",
        "vi": "hai cái một lần",
        "ar": "اثنان في كل مرة",
        "fa": "دوتایی",
        "ur": "دو دو کر کے",
        "am": "ሁለት ሁለት",
        "ml": "രണ്ടു വീതം",
        "ta": "இரண்டு இரண்டாக",
        "tl": "dalawa-dalawa",
        "ps": "دوه دوه",
        "ro": "câte doi",
        "ru": "по два",
        "fr": "deux à la fois",
        "hi": "दो-दो करके",
        "es": "de dos en dos"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "zh-Hans": "组合",
      "zh-Hant": "組合",
      "ja": "組み合わせ",
      "ko": "조합",
      "vi": "tổ hợp",
      "ar": "التوافيق",
      "fa": "ترکیب (کومبیناسیون)",
      "ur": "امتزاج (کمبی نیشن)",
      "am": "ውህድ (ኮምቢኔሽን)",
      "ml": "സഞ്ചയം",
      "ta": "சேர்வு (கோம்பினேஷன்)",
      "tl": "kombinasyon",
      "ps": "ترکیب",
      "ro": "combinare",
      "ru": "сочетание",
      "fr": "combinaison",
      "hi": "संचय",
      "es": "combinación"
     },
     "note": "Latin <i>com-</i> (together) + <i>bini</i> (two at a time) + <i>-ation</i> (process of): putting things together in pairs. Same <i>bin</i> in <b>binary</b> and <b>binoculars</b> (two eyes). Exam tip: in a combination the <b>order does not matter</b> — choosing Mai then Tom is the same combination as Tom then Mai.",
     "apply": [
      {
       "id": "bio3_comb_desc",
       "type": "desc",
       "q": "A team of 3 students is chosen from a class and the order of choosing does not matter. Is this a combination or a permutation?",
       "a": "A combination",
       "opts": [
        "A combination",
        "A permutation",
        "A sample space",
        "An intersection"
       ],
       "explain": "Order does not matter, so it is a combination. <i>com-</i> + <i>bini</i> = put together."
      },
      {
       "id": "bio3_comb_scn",
       "type": "scenario",
       "q": "Two helpers are needed for the canteen roster, chosen from Mai, Tom and Anh. How many different pairs are possible?",
       "a": "3",
       "opts": [
        "6",
        "3",
        "2",
        "9"
       ],
       "explain": "The pairs are Mai–Tom, Mai–Anh and Tom–Anh, so 3. Mai–Tom and Tom–Mai are the same combination."
      },
      {
       "id": "bio3_comb_scn2",
       "type": "scenario",
       "q": "The canteen has 4 different fillings. Layla picks 2 different fillings for her roll. How many combinations are possible?",
       "a": "6",
       "opts": [
        "4",
        "8",
        "6",
        "12"
       ],
       "explain": "Call them A, B, C, D. The pairs are AB, AC, AD, BC, BD, CD = 6. AB and BA count once."
      }
     ]
    },
    {
     "w": "frequency",
     "meaning": "how many times a result actually happened",
     "example": "The frequency of heads was 27 out of 50 tosses.",
     "parts": [
      {
       "surface": "frequ",
       "type": "root",
       "meaning": "often",
       "tr": {
        "vi": "tần",
        "am": "ብዙ ጊዜ",
        "ar": "كثيراً",
        "es": "a menudo",
        "fa": "مکرر",
        "fr": "souvent",
        "hi": "अक्सर",
        "ja": "しばしば",
        "ko": "자주",
        "ml": "പതിവായി",
        "ps": "ډېر ځله",
        "ro": "adesea",
        "ru": "часто",
        "ta": "அடிக்கடி",
        "tl": "madalas",
        "ur": "اکثر",
        "zh-Hans": "经常",
        "zh-Hant": "經常"
       }
      },
      {
       "surface": "ency",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "स्थिति",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      }
     ],
     "tr": {
      "am": "ድግግሞሽ",
      "ar": "تكرار",
      "es": "frecuencia",
      "fa": "فراوانی",
      "fr": "effectif",
      "hi": "बारंबारता",
      "ja": "度数",
      "ko": "도수",
      "ml": "ആവൃത്തി",
      "ro": "frecvență",
      "ru": "частота",
      "tl": "dalas",
      "ur": "تعدد",
      "vi": "tần số",
      "zh-Hans": "频数",
      "zh-Hant": "次數",
      "ta": "அதிர்வெண்",
      "ps": "کثرت"
     },
     "note": "Latin <i>frequens</i> (crowded, happening often) + <i>-ency</i> (state of): the frequency is how <b>often</b> a result actually happened. Same <i>frequ</i> in <b>frequent</b> and <b>frequently</b>. Exam tip: frequency <b>counts what happened</b>; probability <b>predicts what should happen</b>. They are usually close but not equal.",
     "apply": [
      {
       "id": "bio3_freq_scn",
       "type": "scenario",
       "q": "Hiro tossed a coin 50 times and got 27 heads. What is the 27?",
       "a": "The frequency of heads",
       "opts": [
        "The probability of heads",
        "The frequency of heads",
        "The sample space",
        "The ratio of the coin"
       ],
       "explain": "27 is the count of what really happened. The probability of heads is still 0.5, or 25 out of 50."
      },
      {
       "id": "bio3_freq_cloze",
       "type": "cloze",
       "before": "The tally chart shows the",
       "after": "of each result: how many times it actually happened.",
       "a": "frequency",
       "opts": [
        "union",
        "probability",
        "outcome",
        "frequency"
       ],
       "explain": "<i>frequ</i> = often. A frequency is always a whole number of times."
      }
     ]
    },
    {
     "w": "intersection",
     "meaning": "the outcomes that are in both sets, shown where the circles overlap",
     "example": "The intersection of A and B is written A and B.",
     "parts": [
      {
       "surface": "inter",
       "type": "prefix",
       "meaning": "between",
       "tr": {
        "am": "በ…መካከል",
        "ar": "بين",
        "es": "entre",
        "fa": "میان",
        "fr": "entre",
        "hi": "बीच में",
        "ja": "間",
        "ko": "사이",
        "ml": "ഇടയിൽ",
        "ps": "ترمنځ",
        "ro": "între",
        "ru": "между",
        "ta": "இடையே",
        "tl": "pagitan",
        "ur": "درمیان",
        "vi": "giữa",
        "zh-Hans": "之间",
        "zh-Hant": "之間"
       }
      },
      {
       "surface": "sect",
       "type": "root",
       "meaning": "cut",
       "tr": {
        "vi": "cắt, phần",
        "am": "መቁረጥ",
        "ar": "قطع",
        "es": "cortar / parte",
        "fa": "بریدن",
        "fr": "couper",
        "hi": "काटना",
        "ja": "切る",
        "ko": "자르다",
        "ml": "മുറിക്കുക",
        "ps": "پرې کول",
        "ro": "a tăia",
        "ru": "резать",
        "ta": "வெட்டுதல்",
        "tl": "hatiin",
        "ur": "کاٹنا",
        "zh-Hans": "切割",
        "zh-Hant": "切割"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "የጋራ ክፍል",
      "ar": "التقاطع",
      "es": "intersección",
      "fa": "اشتراک",
      "fr": "intersection",
      "hi": "प्रतिच्छेदन",
      "ja": "共通部分",
      "ko": "교집합",
      "ml": "സംഗമം",
      "ps": "تقاطع",
      "ro": "intersecție",
      "ru": "пересечение",
      "ta": "வெட்டு",
      "tl": "interseksyon",
      "ur": "اشتراک",
      "vi": "tập hợp giao",
      "zh-Hans": "交集",
      "zh-Hant": "交集"
     },
     "note": "Latin <i>inter-</i> (between) + <i>secare/sect-</i> (to cut) + <i>-ion</i>: two things that cut across each other. Same <i>sect</i> in <b>section</b> and <b>dissect</b> — and you wait at a road <b>intersection</b> where two streets cut across. Exam tip: in a Venn diagram the intersection is the overlap. The word <b>and</b> means intersection.",
     "apply": [
      {
       "id": "bio3_inter_desc",
       "type": "desc",
       "q": "In a Venn diagram, which part shows the intersection of A and B?",
       "a": "The overlap, where the two circles cross",
       "opts": [
        "Everything inside either circle",
        "The overlap, where the two circles cross",
        "The part outside both circles",
        "Only the part of A that is not in B"
       ],
       "explain": "<i>inter-</i> (between) + <i>sect</i> (cut): the piece the two circles cut out of each other."
      },
      {
       "id": "bio3_inter_scn",
       "type": "scenario",
       "q": "Roll one dice. Set A = even numbers {2, 4, 6}. Set B = numbers greater than 3 {4, 5, 6}. What is the intersection of A and B?",
       "a": "{4, 6}",
       "opts": [
        "{2, 4, 5, 6}",
        "{4, 6}",
        "{2}",
        "{5}"
       ],
       "explain": "You need even AND greater than 3. That is 4 and 6 only."
      }
     ]
    },
    {
     "w": "outcome",
     "meaning": "one possible result of a chance experiment",
     "example": "Tossing a coin has two outcomes: heads or tails.",
     "parts": [
      {
       "surface": "out",
       "type": "prefix",
       "meaning": "away from/resulting",
       "tr": {
        "am": "ወደ ውጭ",
        "ar": "للخارج، بعيدًا عن",
        "es": "hacia afuera",
        "fa": "به بیرون، دور از",
        "fr": "vers l'extérieur, loin de",
        "hi": "बाहर की ओर",
        "ja": "外へ",
        "ko": "밖으로",
        "ml": "പുറത്തേക്ക്",
        "ps": "بهر ته",
        "ro": "spre exterior, departe de",
        "ru": "наружу, прочь от",
        "ta": "வெளியே",
        "tl": "palabas",
        "ur": "باہر کی طرف",
        "vi": "ra ngoài",
        "zh-Hans": "向外，离开",
        "zh-Hant": "向外，離開"
       }
      },
      {
       "surface": "come",
       "type": "root",
       "meaning": "to arrive/happen",
       "tr": {
        "am": "መድረስ / መከሰት",
        "ar": "الوصول / الحدوث",
        "es": "llegar / suceder",
        "fa": "رسیدن / اتفاق افتادن",
        "fr": "arriver / se produire",
        "hi": "पहुँचना / घटित होना",
        "ja": "到着する／起こる",
        "ko": "도착하다 / 일어나다",
        "ml": "എത്തുക / സംഭവിക്കുക",
        "ps": "رسېدل / پېښېدل",
        "ro": "a sosi / a se întâmpla",
        "ru": "прибывать / происходить",
        "ta": "வருதல் / நிகழ்தல்",
        "tl": "dumating / mangyari",
        "ur": "پہنچنا / واقع ہونا",
        "vi": "đến / xảy ra",
        "zh-Hans": "到达 / 发生",
        "zh-Hant": "到達 / 發生"
       }
      }
     ],
     "tr": {
      "am": "ውጤት",
      "ar": "نتيجة",
      "es": "resultado",
      "fa": "نتیجه",
      "fr": "résultat",
      "hi": "परिणाम",
      "ja": "結果",
      "ko": "결과",
      "ml": "ഫലം",
      "ps": "پایله",
      "ro": "rezultat",
      "ru": "исход",
      "ta": "முடிவு",
      "tl": "kinalabasan",
      "ur": "نتیجہ",
      "vi": "kết quả",
      "zh-Hans": "结果",
      "zh-Hant": "結果"
     },
     "note": "Plain English <i>out</i> + <i>come</i>: an outcome is what <b>comes out</b> of a chance experiment. Same <i>come</i> in <b>income</b> (money that comes in). Exam tip: one outcome is one single result (rolling a 4); an <b>event</b> can be made of several outcomes ('an even number' is 2, 4 and 6).",
     "apply": [
      {
       "id": "bio3_out_desc",
       "type": "desc",
       "q": "Tossing a coin has two possible results: heads or tails. What is each single result called?",
       "a": "An outcome",
       "opts": [
        "A sample space",
        "A ratio",
        "A frequency",
        "An outcome"
       ],
       "explain": "An outcome is one thing that can come out. All the outcomes together make the sample space."
      },
      {
       "id": "bio3_out_cloze",
       "type": "cloze",
       "before": "When two coins are tossed, HT is one possible",
       "after": ", and there are four of them altogether.",
       "a": "outcome",
       "opts": [
        "outcome",
        "frequency",
        "subset",
        "trend"
       ],
       "explain": "The four outcomes are HH, HT, TH and TT."
      }
     ]
    },
    {
     "w": "permutation",
     "meaning": "An arrangement where the order does matter.",
     "example": "A permutation matrix reorders the rows.",
     "parts": [
      {
       "surface": "per",
       "type": "prefix",
       "meaning": "through",
       "tr": {
        "am": "በ...በኩል / ሙሉ በሙሉ",
        "ar": "عبر / تمامًا",
        "es": "a través de/completamente",
        "fa": "از میان / کاملاً",
        "fr": "à travers / complètement",
        "hi": "के माध्यम से / पूरी तरह",
        "ja": "通して／徹底的に",
        "ko": "~을 통하여 / 철저히",
        "ml": "വഴി / പൂർണ്ണമായി",
        "ps": "له لارې / بشپړ",
        "ro": "prin / complet",
        "ru": "через / полностью",
        "ta": "வழியாக / முழுமையாக",
        "tl": "sa pamamagitan / lubusan",
        "ur": "کے ذریعے / مکمل طور پر",
        "vi": "xuyên qua / triệt để",
        "zh-Hans": "穿过／彻底",
        "zh-Hant": "穿過／徹底",
        "other": "در هر"
       }
      },
      {
       "surface": "mut",
       "type": "root",
       "meaning": "change",
       "tr": {
        "am": "ለውጥ",
        "ar": "تغيير",
        "es": "cambio",
        "fa": "تغییر",
        "fr": "changement",
        "hi": "परिवर्तन",
        "ja": "変化",
        "ko": "변화",
        "ml": "മാറ്റം",
        "ps": "بدلون",
        "ro": "schimbare",
        "ru": "изменение",
        "ta": "மாற்றம்",
        "tl": "pagbabago",
        "ur": "تبدیلی",
        "vi": "thay đổi",
        "zh-Hans": "变化",
        "zh-Hant": "變化"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "zh-Hans": "排列",
      "zh-Hant": "排列",
      "ja": "順列",
      "ko": "순열",
      "vi": "hoán vị",
      "ar": "التباديل (الترتيب)",
      "fa": "جایگشت (ترتیب)",
      "ur": "ترتیب بندی (پرمیوٹیشن)",
      "am": "ቅደም ተከተል (ፐርሙቴሽን)",
      "ml": "ക്രമചയം",
      "ta": "வரிசைமாற்று",
      "tl": "permutasyon",
      "ps": "ترتیب",
      "ro": "permutare",
      "ru": "перестановка",
      "fr": "permutation",
      "hi": "क्रमचय",
      "es": "permutación"
     },
     "note": "Latin <i>per-</i> (through) + <i>mutare</i> (to change) + <i>-ation</i>: to change things all the way through, which means to rearrange them. Same <i>mut</i> in <b>mutation</b> (a change in DNA) and <b>mutual</b>. Exam tip: in a permutation the <b>order matters</b>; in a combination it does not.",
     "apply": [
      {
       "id": "bio3_perm_desc",
       "type": "desc",
       "q": "In which one does the ORDER of the items matter?",
       "a": "A permutation",
       "opts": [
        "A combination",
        "A permutation",
        "An intersection",
        "A subset"
       ],
       "explain": "<i>per-</i> + <i>mut</i> = changed right through, so a new order is a new permutation."
      },
      {
       "id": "bio3_perm_scn",
       "type": "scenario",
       "q": "Mai, Tom and Anh line up at the canteen. How many different orders are possible?",
       "a": "6",
       "opts": [
        "3",
        "6",
        "9",
        "1"
       ],
       "explain": "3 choices for first place × 2 for second × 1 for last = 6 permutations."
      },
      {
       "id": "bio3_perm_cloze",
       "type": "cloze",
       "before": "The order of the items matters in a",
       "after": ", but it does not matter in a combination.",
       "a": "permutation",
       "opts": [
        "permutation",
        "combination",
        "frequency",
        "union"
       ],
       "explain": "Remember it by <b>mutation</b>: change the order and you have changed the permutation."
      }
     ]
    },
    {
     "w": "probability",
     "meaning": "how likely something is to happen, written as a number from 0 to 1",
     "example": "The probability of rolling a 6 on a dice is 1/6.",
     "parts": [
      {
       "surface": "prob",
       "type": "root",
       "meaning": "provable",
       "tr": {
        "am": "የሚረጋገጥ",
        "ar": "قابل للإثبات",
        "es": "demostrable",
        "fa": "قابل اثبات",
        "fr": "prouvable",
        "hi": "सिद्ध करने योग्य",
        "ja": "証明可能な",
        "ko": "증명 가능한",
        "ml": "തെളിയിക്കാവുന്ന",
        "ps": "د ثبوت وړ",
        "ro": "demonstrabil",
        "ru": "доказуемый",
        "ta": "நிரூபிக்கக்கூடிய",
        "tl": "mapapatunayan",
        "ur": "قابل ثبوت",
        "vi": "có thể chứng minh",
        "zh-Hans": "可证明的",
        "zh-Hant": "可證明的"
       }
      },
      {
       "surface": "ability",
       "type": "suffix",
       "meaning": "capable of",
       "tr": {
        "am": "ችሎታ ያለው",
        "ar": "قادر على",
        "es": "capaz de",
        "fa": "قادر به",
        "fr": "capable de",
        "hi": "सक्षम",
        "ja": "できる",
        "ko": "가능한",
        "ml": "കഴിവുള്ള",
        "ps": "وړ",
        "ro": "capabil de",
        "ru": "способный",
        "ta": "தகுதியான",
        "tl": "kaya",
        "ur": "قابل",
        "vi": "có khả năng",
        "zh-Hans": "能够",
        "zh-Hant": "能夠"
       }
      }
     ],
     "tr": {
      "am": "ዕድል",
      "ar": "احتمال",
      "es": "probabilidad",
      "fa": "احتمال",
      "fr": "probabilité",
      "hi": "प्रायिकता",
      "ja": "確率",
      "ko": "확률",
      "ml": "സാധ്യത",
      "ps": "احتمال",
      "ro": "probabilitate",
      "ru": "вероятность",
      "ta": "நிகழ்தகவு",
      "tl": "posibilidad",
      "ur": "احتمال",
      "vi": "xác suất",
      "zh-Hans": "概率",
      "zh-Hant": "機率"
     },
     "note": "Latin <i>probare</i> (to prove, to test) + <i>-ability</i> (capable of): probability is how provable, or how likely, a result is. Same <i>prob</i> in <b>probable</b>, <b>prove</b> and <b>probe</b>. Exam tip: probability is always between 0 (impossible) and 1 (certain), and equals favourable outcomes ÷ total outcomes.",
     "apply": [
      {
       "id": "bio3_prob_scn",
       "type": "scenario",
       "q": "A Punnett square for Bb × Bb gives BB, Bb, Bb and bb. What is the probability that a child has the genotype bb?",
       "a": "1/4",
       "opts": [
        "1/2",
        "1/4",
        "3/4",
        "1"
       ],
       "explain": "One of the four boxes is bb, so the probability is 1/4 = 0.25."
      },
      {
       "id": "bio3_prob_scn2",
       "type": "scenario",
       "q": "Two coins are tossed. The sample space is {HH, HT, TH, TT}. What is the probability of getting exactly one head?",
       "a": "1/2",
       "opts": [
        "1/4",
        "1/2",
        "1/3",
        "3/4"
       ],
       "explain": "HT and TH each have exactly one head, so 2 out of 4 = 1/2."
      }
     ]
    },
    {
     "w": "ratio",
     "meaning": "a way of comparing two amounts, written like 3:2",
     "example": "The ratio of red to blue counters is 3:2.",
     "parts": [
      {
       "surface": "ratio",
       "type": "root",
       "meaning": "reckoning",
       "tr": {
        "am": "ስሌት",
        "ar": "حساب",
        "es": "cálculo",
        "fa": "محاسبه",
        "fr": "calcul",
        "hi": "गणना",
        "ja": "計算",
        "ko": "계산",
        "ml": "കണക്ക്",
        "ps": "حساب",
        "ro": "calcul",
        "ru": "расчёт",
        "ta": "கணக்கு",
        "tl": "pagkalkula",
        "ur": "حساب",
        "vi": "tính toán",
        "zh-Hans": "计算",
        "zh-Hant": "計算"
       }
      }
     ],
     "tr": {
      "am": "ጥምርታ",
      "ar": "نسبة",
      "es": "razón",
      "fa": "نسبت",
      "fr": "rapport",
      "hi": "अनुपात",
      "ja": "比",
      "ko": "비율",
      "ml": "അനുപാതം",
      "ps": "نسبت",
      "ro": "raport",
      "ru": "отношение",
      "ta": "விகிதம்",
      "tl": "ratio",
      "ur": "نسبت",
      "vi": "tỷ số",
      "zh-Hans": "比率",
      "zh-Hant": "比率"
     },
     "note": "No prefix or suffix to cut: Latin <i>ratio</i> meant 'a reckoning, a calculation', from <i>reri</i> (to count). The same root gives <b>rate</b>, <b>reason</b> and <b>rational</b>. Exam tip: a ratio compares part to part (3 red : 2 blue); a fraction compares part to whole (3/5 are red). Aa × Aa gives 3 : 1 by phenotype and 1 : 2 : 1 by genotype.",
     "apply": [
      {
       "id": "bio3_ratio_scn",
       "type": "scenario",
       "q": "A Punnett square for Tt × Tt gives TT, Tt, Tt and tt. Tall is dominant. What is the phenotype ratio?",
       "a": "3 tall : 1 short",
       "opts": [
        "1 : 2 : 1",
        "3 tall : 1 short",
        "1 tall : 1 short",
        "2 tall : 2 short"
       ],
       "explain": "Three boxes contain at least one T, so three plants look tall and one is short."
      },
      {
       "id": "bio3_ratio_scn2",
       "type": "scenario",
       "q": "A bag holds 6 red counters and 4 blue counters. What is the ratio of red to blue in its simplest form?",
       "a": "3 : 2",
       "opts": [
        "6 : 10",
        "3 : 2",
        "2 : 3",
        "3 : 5"
       ],
       "explain": "Divide both numbers by 2: 6 : 4 = 3 : 2. The answer 3 : 5 would be red compared to the whole bag."
      }
     ]
    },
    {
     "w": "sample space",
     "meaning": "the list of all the possible outcomes of an experiment",
     "example": "The sample space for one dice is 1, 2, 3, 4, 5, 6.",
     "parts": [
      {
       "surface": "sample",
       "type": "root",
       "meaning": "a piece taken out",
       "tr": {
        "zh-Hans": "样本",
        "zh-Hant": "樣本",
        "ja": "標本",
        "ko": "표본",
        "vi": "mẫu",
        "ar": "عينة",
        "fa": "نمونه",
        "ur": "نمونہ",
        "am": "ናሙና",
        "ml": "സാമ്പിൾ",
        "ta": "மாதிரி",
        "tl": "sampol",
        "ps": "بیلګه",
        "ro": "eșantion",
        "ru": "образец",
        "fr": "échantillon",
        "hi": "नमूना",
        "es": "muestra"
       }
      },
      {
       "surface": "spac",
       "type": "root",
       "meaning": "gap/area",
       "tr": {
        "zh-Hans": "空间",
        "zh-Hant": "空間",
        "vi": "khoảng cách",
        "ar": "فراغ",
        "fa": "فضا",
        "ml": "ഇടവ്",
        "am": "ቦታ",
        "es": "espacio",
        "fr": "espace",
        "hi": "स्थान / अंतराल",
        "ja": "空間",
        "ko": "공간",
        "ps": "تشه / ساحه",
        "ro": "spațiu",
        "ru": "пространство",
        "ta": "இடைவெளி / பரப்பு",
        "tl": "espasyo / puwang",
        "ur": "خلا / جگہ"
       }
      }
     ],
     "tr": {
      "am": "የናሙና ክፍተት",
      "ar": "فضاء العينة",
      "es": "espacio muestral",
      "fa": "فضای نمونه",
      "fr": "univers",
      "hi": "प्रतिदर्श समष्टि",
      "ja": "標本空間",
      "ko": "표본 공간",
      "ml": "മാതൃകാ സ്ഥലം",
      "ps": "د نمونې ځای",
      "ro": "spațiu eșantion",
      "ru": "пространство элементарных событий",
      "ta": "மாதிரி வெளி",
      "tl": "sample space",
      "ur": "نمونہ خلا",
      "vi": "không gian mẫu",
      "zh-Hans": "样本空间",
      "zh-Hant": "樣本空間"
     },
     "note": "<i>Sample</i> comes from Latin <i>exemplum</i> (an example, a piece taken out), and <i>space</i> is the whole area of possibilities — so the sample space is the full area of every outcome you could get. Exam tip: write it as a list in curly brackets. Two coins give {HH, HT, TH, TT} — four outcomes, not three, because HT and TH are different.",
     "apply": [
      {
       "id": "bio3_samp_desc",
       "type": "desc",
       "q": "Which term means the list of ALL the possible outcomes of an experiment?",
       "a": "Sample space",
       "opts": [
        "Frequency",
        "Intersection",
        "Subset",
        "Sample space"
       ],
       "explain": "Every possible sample, gathered in one space. One item from that list is an outcome."
      },
      {
       "id": "bio3_samp_scn",
       "type": "scenario",
       "q": "Anh tosses two coins. What is the sample space?",
       "a": "{HH, HT, TH, TT}",
       "opts": [
        "{HH, HT, TT}",
        "{HH, HT, TH, TT}",
        "{H, T}",
        "{HH, TT}"
       ],
       "explain": "HT (first coin heads) and TH (first coin tails) are different outcomes, so there are 4, not 3."
      },
      {
       "id": "bio3_samp_scn2",
       "type": "scenario",
       "q": "A Punnett square for Bb × Bb is really a sample space. How many outcomes does it show?",
       "a": "4: BB, Bb, Bb, bb",
       "opts": [
        "4: BB, Bb, Bb, bb",
        "3: BB, Bb, bb",
        "2: B and b",
        "4: BB, BB, bb, bb"
       ],
       "explain": "Each box is one possible pairing of one allele from each parent. Bb appears twice, which is why the ratio is 1 : 2 : 1."
      }
     ]
    },
    {
     "w": "subset",
     "meaning": "a smaller group taken from inside a larger set",
     "example": "The Year 10 students are a subset of the whole school.",
     "parts": [
      {
       "surface": "sub",
       "type": "prefix",
       "meaning": "under",
       "tr": {
        "am": "ከታች / በምትክ",
        "ar": "تحت / بدلاً من",
        "es": "bajo / en lugar de",
        "fa": "زیر / به‌جای",
        "fr": "sous / à la place de",
        "hi": "नीचे / के स्थान पर",
        "ja": "下に・代わりに",
        "ko": "아래/대신",
        "ml": "താഴെ / പകരം",
        "ps": "لاندې / پرځای",
        "ro": "sub / în locul",
        "ru": "под / вместо",
        "ta": "கீழ் / பதிலாக",
        "tl": "sa ilalim / kapalit",
        "ur": "نیچے / بجائے",
        "vi": "dưới / thay thế",
        "zh-Hans": "下/替代",
        "zh-Hant": "下/替代"
       }
      },
      {
       "surface": "set",
       "type": "root",
       "meaning": "place",
       "tr": {
        "zh-Hans": "放置",
        "vi": "đặt",
        "fa": "قرار دادن",
        "zh-Hant": "放置",
        "am": "ማስቀመጥ",
        "ar": "يضع",
        "es": "colocar",
        "fr": "placer",
        "hi": "रखना",
        "ja": "置く",
        "ko": "놓다",
        "ml": "സ്ഥാപിക്കുക",
        "ps": "اېښودل",
        "ro": "a plasa",
        "ru": "помещать",
        "ta": "வைத்தல்",
        "tl": "ilagay",
        "ur": "رکھنا"
       }
      }
     ],
     "tr": {
      "am": "ንዑስ ስብስብ",
      "ar": "مجموعة جزئية",
      "es": "subconjunto",
      "fa": "زیرمجموعه",
      "fr": "sous-ensemble",
      "hi": "उपसमुच्चय",
      "ja": "部分集合",
      "ko": "부분집합",
      "ml": "ഉപഗണം",
      "ro": "submulțime",
      "ru": "подмножество",
      "ta": "துணைக்கணம்",
      "ur": "ذیلی مجموعہ",
      "vi": "tập hợp con",
      "zh-Hans": "子集",
      "zh-Hant": "子集",
      "tl": "subset (bahagi ng set)",
      "ps": "فرعي سیټ"
     },
     "note": "Latin <i>sub-</i> (under) + <i>set</i>: a subset sits <b>under</b> a bigger set, because every member of it is also in the bigger set. Same <i>sub-</i> in <b>submarine</b> (under the sea) and <b>subway</b>. Exam tip: the symbol is ⊂, and any set counts as a subset of itself.",
     "apply": [
      {
       "id": "bio3_sub_cloze",
       "type": "cloze",
       "before": "The Year 10 students are a",
       "after": "of the whole school: every one of them is also a student of the school.",
       "a": "subset",
       "opts": [
        "frequency",
        "union",
        "sample space",
        "subset"
       ],
       "explain": "<i>sub-</i> = under. A smaller group taken from inside a bigger group."
      },
      {
       "id": "bio3_sub_scn",
       "type": "scenario",
       "q": "Roll one dice, so the sample space is {1, 2, 3, 4, 5, 6}. Which of these is a subset of it?",
       "a": "{2, 4, 6}",
       "opts": [
        "{0, 1, 2}",
        "{2, 4, 6}",
        "{6, 7}",
        "{heads, tails}"
       ],
       "explain": "Every member of {2, 4, 6} is inside the sample space. The others contain something that is not."
      }
     ]
    },
    {
     "w": "union",
     "meaning": "all the outcomes that are in one set, the other set, or both",
     "example": "The union of A and B includes everything in either circle.",
     "parts": [
      {
       "surface": "uni",
       "type": "prefix",
       "meaning": "one",
       "tr": {
        "am": "አንድ",
        "ar": "واحد",
        "es": "uno",
        "fa": "یک",
        "fr": "un",
        "hi": "एक",
        "ja": "単一",
        "ko": "단일",
        "ml": "ഒന്ന്",
        "ps": "یو",
        "ro": "unu",
        "ru": "один",
        "ta": "ஒன்று",
        "tl": "isa",
        "ur": "ایک",
        "vi": "một",
        "zh-Hans": "单一",
        "zh-Hant": "單一"
       }
      }
     ],
     "tr": {
      "ar": "الاتحاد",
      "es": "unión",
      "fa": "اجتماع",
      "fr": "union",
      "hi": "संघ",
      "ja": "和集合",
      "ko": "합집합",
      "ro": "reuniune",
      "ru": "объединение",
      "ta": "ஒன்றிணைப்பு",
      "tl": "unyon",
      "ur": "اجتماع",
      "vi": "tập hợp hợp",
      "zh-Hans": "并集",
      "zh-Hant": "聯集",
      "am": "ውህደት (ስብስቦች)",
      "ml": "സംഘാതം (യൂണിയൻ)",
      "ps": "یووالی (سیټونه)"
     },
     "note": "Latin <i>unus</i> (one) → <i>unio</i>: joining many things into <b>one</b>. Same <i>uni-</i> in <b>unicycle</b> (one wheel), <b>uniform</b> (one form) and <b>united</b>. Exam tip: the word <b>or</b> means union (A ∪ B) — everything in A, in B, or in both. The word <b>and</b> means intersection.",
     "apply": [
      {
       "id": "bio3_union_scn",
       "type": "scenario",
       "q": "Roll one dice. A = {2, 4, 6} and B = {4, 5, 6}. What is the union of A and B?",
       "a": "{2, 4, 5, 6}",
       "opts": [
        "{4, 6}",
        "{2, 4, 5, 6}",
        "{2}",
        "{1, 3}"
       ],
       "explain": "Take everything in either set and list each number once: 2, 4, 5, 6. {4, 6} is the intersection."
      },
      {
       "id": "bio3_union_desc",
       "type": "desc",
       "q": "Which word means all the outcomes that are in set A, in set B, or in both?",
       "a": "Union",
       "opts": [
        "Intersection",
        "Frequency",
        "Subset",
        "Union"
       ],
       "explain": "<i>uni</i> = one: the two sets are joined into one bigger group."
      }
     ]
    }
   ]
  },
  {
   "id": "pan",
   "area": "bio",
   "title": "Pandemic — data literacy",
   "focus": "The words for reading pandemic news and checking the maths behind the claims.",
   "words": [
    {
     "w": "pandemic",
     "meaning": "an outbreak of a disease that spreads across many countries at the same time.",
     "example": "COVID-19 became a pandemic in 2020.",
     "parts": [
      {
       "surface": "pan",
       "type": "prefix",
       "meaning": "all",
       "tr": {
        "zh-Hans": "全",
        "zh-Hant": "全",
        "ja": "すべて",
        "ko": "모든",
        "vi": "tất cả",
        "ar": "الكل",
        "fa": "همه",
        "ur": "سب",
        "am": "ሁሉም",
        "ml": "എല്ലാം",
        "ta": "அனைத்தும்",
        "tl": "lahat",
        "ps": "ټول",
        "ro": "tot",
        "ru": "весь",
        "fr": "tout",
        "hi": "सब",
        "es": "todo"
       }
      },
      {
       "surface": "dem",
       "type": "root",
       "meaning": "people",
       "tr": {
        "zh-Hans": "人民",
        "zh-Hant": "人民",
        "ja": "人々",
        "ko": "사람들",
        "vi": "nhân dân",
        "ar": "الناس",
        "fa": "مردم",
        "ur": "لوگ",
        "am": "ህዝብ",
        "ml": "ജനങ്ങൾ",
        "ta": "மக்கள்",
        "tl": "mga tao",
        "ps": "خلک",
        "ro": "popor",
        "ru": "народ",
        "fr": "peuple",
        "hi": "लोग",
        "es": "pueblo"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "مربوط به",
        "am": "ተያያዥ",
        "ar": "متعلّق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "am": "ዓለም አቀፍ ወረርሽኝ",
      "ar": "جائحة",
      "es": "pandemia",
      "fa": "پاندمی",
      "fr": "pandémie",
      "hi": "वैश्विक महामारी",
      "ja": "パンデミック",
      "ko": "팬데믹",
      "ml": "മഹാമാരി",
      "ps": "نړیواله ناروغي",
      "ro": "pandemie",
      "ru": "пандемия",
      "ta": "பெருந்தொற்று",
      "tl": "pandemya",
      "ur": "عالمی وبا",
      "vi": "đại dịch",
      "zh-Hans": "大流行",
      "zh-Hant": "大流行"
     },
     "note": "Greek <i>pan</i> (all) + <i>demos</i> (people) + <i>-ic</i> (relating to): a disease over <b>all</b> the people, in many countries at once. Same <i>pan-</i> in <b>panorama</b> (a view of everything); same <i>dem</i> in <b>democracy</b> (rule by the people). Exam tip: epidemic = one area; pandemic = many countries.",
     "apply": [
      {
       "id": "pan_pand_desc",
       "type": "desc",
       "q": "A new flu spreads to Australia, Japan, Kenya and Brazil within two months. What is this called?",
       "a": "A pandemic",
       "opts": [
        "An epidemic",
        "A pandemic",
        "An endemic disease",
        "An infection"
       ],
       "explain": "<i>pan</i> = all. Many countries at the same time makes it a pandemic."
      },
      {
       "id": "pan_pand_cloze",
       "type": "cloze",
       "before": "<i>Pan</i> means 'all', so a",
       "after": "is a disease that has spread across many countries at the same time.",
       "a": "pandemic",
       "opts": [
        "pandemic",
        "epidemic",
        "pathogen",
        "vaccine"
       ],
       "explain": "Same <i>dem</i> (people) sits inside pandemic, epidemic and endemic. Only the first piece changes."
      }
     ]
    },
    {
     "w": "epidemic",
     "meaning": "a sudden rise in the number of cases of a disease in one area or country.",
     "example": "There was a measles epidemic in the city.",
     "parts": [
      {
       "surface": "epi",
       "type": "prefix",
       "meaning": "on/over",
       "tr": {
        "am": "ላይ",
        "ar": "على",
        "es": "sobre",
        "fa": "روی",
        "fr": "sur",
        "hi": "ऊपर",
        "ja": "上に",
        "ko": "위에",
        "ml": "മേൽ",
        "ps": "پر",
        "ro": "pe",
        "ru": "на",
        "ta": "மேல்",
        "tl": "sa ibabaw",
        "ur": "اوپر",
        "vi": "trên",
        "zh-Hans": "在…上",
        "zh-Hant": "在…上"
       }
      },
      {
       "surface": "dem",
       "type": "root",
       "meaning": "people",
       "tr": {
        "zh-Hans": "人民",
        "zh-Hant": "人民",
        "ja": "人々",
        "ko": "사람들",
        "vi": "nhân dân",
        "ar": "الناس",
        "fa": "مردم",
        "ur": "لوگ",
        "am": "ህዝብ",
        "ml": "ജനങ്ങൾ",
        "ta": "மக்கள்",
        "tl": "mga tao",
        "ps": "خلک",
        "ro": "popor",
        "ru": "народ",
        "fr": "peuple",
        "hi": "लोग",
        "es": "pueblo"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "مربوط به",
        "am": "ተያያዥ",
        "ar": "متعلّق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "am": "ወረርሽኝ",
      "ar": "وباء",
      "es": "epidemia",
      "fa": "اپیدمی",
      "fr": "épidémie",
      "hi": "महामारी",
      "ja": "流行病",
      "ko": "유행병",
      "ml": "പകർച്ചവ്യാധി",
      "ps": "وبا",
      "ro": "epidemie",
      "ru": "эпидемия",
      "ta": "தொற்றுநோய்ப் பரவல்",
      "tl": "epidemya",
      "ur": "وبا",
      "vi": "dịch bệnh",
      "zh-Hans": "流行病",
      "zh-Hant": "流行病"
     },
     "note": "Greek <i>epi-</i> (upon, over) + <i>demos</i> (people) + <i>-ic</i>: a disease that has come down <b>upon the people</b> of one place. Same <i>epi-</i> in <b>epicentre</b> (the point on top of an earthquake) and <b>epidermis</b> (the skin on top). Exam tip: an epidemic that crosses many countries becomes a pandemic.",
     "apply": [
      {
       "id": "pan_epi_scn",
       "type": "scenario",
       "q": "Measles cases rise sharply in one city over three weeks, but nowhere else in the world. What is this?",
       "a": "An epidemic",
       "opts": [
        "A pandemic",
        "Immunity",
        "An endemic disease",
        "An epidemic"
       ],
       "explain": "<i>epi-</i> (upon) + <i>dem</i> (people): a sudden rise upon the people of one area."
      },
      {
       "id": "pan_epi_cloze",
       "type": "cloze",
       "before": "An",
       "after": "is a sudden rise in cases in one area, while a pandemic covers many countries.",
       "a": "epidemic",
       "opts": [
        "epidemic",
        "endemic",
        "infection",
        "immunity"
       ],
       "explain": "Change the prefix, change the size: <i>epi-</i> (upon one place) vs <i>pan-</i> (all places)."
      }
     ]
    },
    {
     "w": "endemic",
     "meaning": "always present in a particular place or population at a steady level.",
     "example": "Malaria is endemic in some tropical countries.",
     "parts": [
      {
       "surface": "en",
       "type": "prefix",
       "meaning": "in",
       "tr": {
        "am": "ወደ ውስጥ",
        "ar": "في",
        "es": "en / hacia dentro",
        "fa": "در",
        "fr": "dans",
        "hi": "में",
        "ja": "中に",
        "ko": "안으로",
        "ml": "അകത്ത്",
        "ps": "دننه",
        "ro": "în",
        "ru": "в",
        "ta": "உள்ளே",
        "tl": "sa loob",
        "ur": "میں",
        "vi": "trong",
        "zh-Hans": "在 / 进入",
        "zh-Hant": "在 / 進入",
        "other": "نه"
       }
      },
      {
       "surface": "dem",
       "type": "root",
       "meaning": "people",
       "tr": {
        "zh-Hans": "人民",
        "zh-Hant": "人民",
        "ja": "人々",
        "ko": "사람들",
        "vi": "nhân dân",
        "ar": "الناس",
        "fa": "مردم",
        "ur": "لوگ",
        "am": "ህዝብ",
        "ml": "ജനങ്ങൾ",
        "ta": "மக்கள்",
        "tl": "mga tao",
        "ps": "خلک",
        "ro": "popor",
        "ru": "народ",
        "fr": "peuple",
        "hi": "लोग",
        "es": "pueblo"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "مربوط به",
        "am": "ተያያዥ",
        "ar": "متعلّق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "am": "በአካባቢው ብቻ የሚገኝ",
      "ar": "متوطن",
      "es": "endémico",
      "fa": "بومی",
      "fr": "endémique",
      "hi": "स्थानिक",
      "ja": "風土病",
      "ko": "풍토병",
      "ml": "തദ്ദേശീയമായ",
      "ps": "سیمه ییز",
      "ro": "endemic",
      "ru": "эндемичный",
      "ta": "இடங்குடி",
      "tl": "endemya",
      "ur": "مقامی",
      "vi": "bệnh lưu hành",
      "zh-Hans": "地方性",
      "zh-Hant": "地方性"
     },
     "note": "Greek <i>en-</i> (in) + <i>demos</i> (people) + <i>-ic</i>: a disease that lives permanently <b>in</b> a population, at a steady level. Same <i>en-</i> in <b>enclose</b>. Exam tip: endemic does not mean 'very serious' and it does not mean 'finished' — it means 'always there, at a steady level'.",
     "apply": [
      {
       "id": "pan_end_scn",
       "type": "scenario",
       "q": "Malaria is present in one tropical region every year at about the same level. It never disappears and it never suddenly explodes. Which word fits?",
       "a": "Endemic",
       "opts": [
        "Epidemic",
        "Endemic",
        "Pandemic",
        "Infectious"
       ],
       "explain": "<i>en-</i> (in) + <i>dem</i> (people): settled inside that population at a steady level."
      },
      {
       "id": "pan_end_desc",
       "type": "desc",
       "q": "Which word means 'always present in one place at a steady level'?",
       "a": "Endemic",
       "opts": [
        "Exponential",
        "Epidemic",
        "Pandemic",
        "Endemic"
       ],
       "explain": "Three <i>dem</i> words, three prefixes: in (endemic), upon one area (epidemic), all countries (pandemic)."
      },
      {
       "id": "pan_end_scn2",
       "type": "scenario",
       "q": "A news article says 'the virus is now endemic'. What does that actually mean?",
       "a": "It is still here, but at a steady level",
       "opts": [
        "It has gone completely",
        "It is still here, but at a steady level",
        "It is spreading faster than ever",
        "It is now in every country"
       ],
       "explain": "Endemic is not the same as gone. The pathogen stays in the population, but case numbers are steady rather than rising."
      }
     ]
    },
    {
     "w": "pathogen",
     "meaning": "any organism or particle that causes disease, such as a virus or bacterium.",
     "example": "Washing your hands removes pathogens.",
     "parts": [
      {
       "surface": "patho",
       "type": "root",
       "meaning": "disease/suffering",
       "tr": {
        "am": "በሽታ/ስቃይ",
        "ar": "مرض/معاناة",
        "es": "enfermedad/sufrimiento",
        "fa": "بیماری/رنج",
        "fr": "maladie/souffrance",
        "hi": "रोग/पीड़ा",
        "ja": "病気/苦しみ",
        "ko": "질병/고통",
        "ml": "രോഗം/വേദന",
        "ps": "ناروغي/رنځ",
        "ro": "boală/suferință",
        "ru": "болезнь/страдание",
        "ta": "நோய்/துன்பம்",
        "tl": "sakit/paghihirap",
        "ur": "بیماری/تکلیف",
        "vi": "bệnh/đau",
        "zh-Hans": "疾病/痛苦",
        "zh-Hant": "疾病/痛苦"
       }
      },
      {
       "surface": "gen",
       "type": "root",
       "meaning": "origin/birth",
       "tr": {
        "am": "መገኛ",
        "ar": "أصل",
        "es": "origen",
        "fa": "منشأ",
        "fr": "origine",
        "hi": "उत्पत्ति",
        "ja": "起源",
        "ko": "기원",
        "ml": "ഉത്ഭവം",
        "ps": "زېږون",
        "ro": "origine",
        "ru": "происхождение",
        "ta": "தோற்றம்",
        "tl": "pinagmulan",
        "ur": "اصل",
        "vi": "nguồn gốc",
        "zh-Hans": "起源",
        "zh-Hant": "起源"
       }
      }
     ],
     "tr": {
      "am": "በሽታ አምጪ",
      "ar": "مسبب المرض",
      "es": "patógeno",
      "fa": "عامل بیماری‌زا",
      "fr": "agent pathogène",
      "hi": "रोगजनक",
      "ja": "病原体",
      "ko": "병원체",
      "ml": "രോഗാണു",
      "ps": "پتوجن",
      "ro": "agent patogen",
      "ru": "патоген",
      "ta": "நோய்க்கிருமி",
      "tl": "pathogen",
      "ur": "جراثیم",
      "vi": "mầm bệnh",
      "zh-Hans": "病原体",
      "zh-Hant": "病原體"
     },
     "note": "Greek <i>pathos</i> (suffering, disease) + <i>genes</i> (producing, born): the thing that <b>produces</b> the suffering. Same <i>patho</i> in <b>sympathy</b> (suffering with someone); same <i>gen</i> in <b>gene</b> and <b>generate</b>. Exam tip: the pathogen is the organism (a virus or bacterium); the illness it causes is the disease. Do not swap the two words.",
     "apply": [
      {
       "id": "pan_path_desc",
       "type": "desc",
       "q": "Which word means any organism or particle that causes disease?",
       "a": "Pathogen",
       "opts": [
        "Vaccine",
        "Pathogen",
        "Immunity",
        "Infection"
       ],
       "explain": "<i>patho</i> (disease) + <i>gen</i> (produce): the disease-producer."
      },
      {
       "id": "pan_path_cloze",
       "type": "cloze",
       "before": "Washing your hands with soap removes",
       "after": "such as viruses and bacteria from your skin.",
       "a": "pathogens",
       "opts": [
        "traits",
        "vaccines",
        "antibodies",
        "pathogens"
       ],
       "explain": "Not all microbes are pathogens — only the ones that produce disease."
      }
     ]
    },
    {
     "w": "infection",
     "meaning": "when a pathogen enters the body and multiplies, causing illness.",
     "example": "The cut became red because of an infection.",
     "parts": [
      {
       "surface": "in",
       "type": "prefix",
       "meaning": "into",
       "tr": {
        "am": "ወደ ውስጥ",
        "ar": "في",
        "es": "en / hacia dentro",
        "fa": "در",
        "fr": "dans",
        "hi": "में",
        "ja": "中に",
        "ko": "안으로",
        "ml": "അകത്ത്",
        "ps": "دننه",
        "ro": "în",
        "ru": "в",
        "ta": "உள்ளே",
        "tl": "sa loob",
        "ur": "میں",
        "vi": "trong",
        "zh-Hans": "在 / 进入",
        "zh-Hant": "在 / 進入",
        "other": "نه"
       }
      },
      {
       "surface": "fect",
       "type": "root",
       "meaning": "make/do",
       "tr": {
        "am": "መስራት / ማድረግ",
        "ar": "يصنع",
        "es": "hacer",
        "fa": "ساختن / انجام دادن",
        "fr": "faire",
        "hi": "बनाना / करना",
        "ja": "作る",
        "ko": "만들다 / 하다",
        "ml": "ഉണ്ടാക്കുക / ചെയ്യുക",
        "ps": "جوړول",
        "ro": "face",
        "ru": "делать / совершать",
        "ta": "செய்தல் / ஆக்குதல்",
        "tl": "gumawa",
        "ur": "بنانا / کرنا",
        "vi": "làm / thực hiện",
        "zh-Hans": "做",
        "zh-Hant": "做",
        "other": "عامل"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "am": "ኢንፌክሽን",
      "ar": "عدوى",
      "es": "infección",
      "fa": "عفونت",
      "fr": "infection",
      "hi": "संक्रमण",
      "ja": "感染",
      "ko": "감염",
      "ml": "അണുബാധ",
      "ps": "انتان",
      "ro": "infecție",
      "ru": "инфекция",
      "ta": "தொற்று",
      "tl": "impeksyon",
      "ur": "عفونت",
      "vi": "nhiễm trùng",
      "zh-Hans": "感染",
      "zh-Hant": "感染"
     },
     "note": "Latin <i>in-</i> (into) + <i>facere/fect-</i> (to make, to put) + <i>-ion</i> (process): something has been put <b>into</b> the body and is now multiplying there. Same <i>fect</i> in <b>perfect</b> (made thoroughly) and <b>affect</b>. Exam tip: <b>infection</b> is the noun (the thing you have); <b>infectious</b> is the adjective (able to spread).",
     "apply": [
      {
       "id": "pan_inf_cloze",
       "type": "cloze",
       "before": "Tom's cut went red and sore because of an",
       "after": ": bacteria had got in and multiplied.",
       "a": "infection",
       "opts": [
        "infection",
        "immunity",
        "epidemic",
        "evidence"
       ],
       "explain": "<i>in-</i> (into) + <i>fect</i> (put): a pathogen has been put into the body."
      },
      {
       "id": "pan_inf_desc",
       "type": "desc",
       "q": "Which word names what happens when a pathogen enters the body and multiplies there?",
       "a": "Infection",
       "opts": [
        "Transmission",
        "Infection",
        "Immunity",
        "Vaccine"
       ],
       "explain": "Transmission is the journey between people; infection is what happens once it is inside."
      }
     ]
    },
    {
     "w": "infectious",
     "meaning": "caused by a pathogen and able to be passed on to other people.",
     "example": "Influenza is an infectious disease.",
     "parts": [
      {
       "surface": "in",
       "type": "prefix",
       "meaning": "into",
       "tr": {
        "am": "ወደ ውስጥ",
        "ar": "في",
        "es": "en / hacia dentro",
        "fa": "در",
        "fr": "dans",
        "hi": "में",
        "ja": "中に",
        "ko": "안으로",
        "ml": "അകത്ത്",
        "ps": "دننه",
        "ro": "în",
        "ru": "в",
        "ta": "உள்ளே",
        "tl": "sa loob",
        "ur": "میں",
        "vi": "trong",
        "zh-Hans": "在 / 进入",
        "zh-Hant": "在 / 進入",
        "other": "نه"
       }
      },
      {
       "surface": "fect",
       "type": "root",
       "meaning": "make/do",
       "tr": {
        "am": "መስራት / ማድረግ",
        "ar": "يصنع",
        "es": "hacer",
        "fa": "ساختن / انجام دادن",
        "fr": "faire",
        "hi": "बनाना / करना",
        "ja": "作る",
        "ko": "만들다 / 하다",
        "ml": "ഉണ്ടാക്കുക / ചെയ്യുക",
        "ps": "جوړول",
        "ro": "face",
        "ru": "делать / совершать",
        "ta": "செய்தல் / ஆக்குதல்",
        "tl": "gumawa",
        "ur": "بنانا / کرنا",
        "vi": "làm / thực hiện",
        "zh-Hans": "做",
        "zh-Hant": "做",
        "other": "عامل"
       }
      },
      {
       "surface": "ious",
       "type": "suffix",
       "meaning": "full of",
       "tr": {
        "am": "የተሞላ / የሚታወቅበት",
        "ar": "مليء بـ / يتميز بـ",
        "es": "lleno de/caracterizado por",
        "fa": "پر از / دارای ویژگی",
        "fr": "plein de / caractérisé par",
        "hi": "से भरा / द्वारा विशेषित",
        "ja": "〜に満ちた／〜を特徴とする",
        "ko": "가득한 / 특징적인",
        "ml": "നിറഞ്ഞ / സവിശേഷതയുള്ള",
        "ps": "له ... ډک / ځانګړی",
        "ro": "plin de / caracterizat prin",
        "ru": "полный / характеризующийся",
        "ta": "நிறைந்த / சிறப்பியல்பு கொண்ட",
        "tl": "puno ng / katangian ng",
        "ur": "سے بھرا / خصوصیت رکھنے والا",
        "vi": "đầy / có đặc điểm",
        "zh-Hans": "充满；以…为特征",
        "zh-Hant": "充滿；以…為特徵"
       }
      }
     ],
     "tr": {
      "am": "ተላላፊ",
      "ar": "معدٍ",
      "es": "infeccioso",
      "fa": "عفونی",
      "fr": "infectieux",
      "hi": "संक्रामक",
      "ja": "感染性",
      "ko": "감염성",
      "ml": "പകരുന്ന",
      "ps": "ساري",
      "ro": "infecțios",
      "ru": "инфекционный",
      "ta": "தொற்றக்கூடிய",
      "tl": "nakakahawa",
      "ur": "متعدی",
      "vi": "truyền nhiễm",
      "zh-Hans": "传染性",
      "zh-Hant": "傳染性"
     },
     "note": "The same <i>in-</i> (into) + <i>fect</i> (make, put) as <b>infection</b>, with <i>-ious</i> (full of) turning it into an adjective. Same <i>-ous</i> in <b>dangerous</b> and <b>famous</b>. Exam tip: infectious means it can be passed to other people. Not every illness is infectious — asthma is not.",
     "apply": [
      {
       "id": "pan_infs_scn",
       "type": "scenario",
       "q": "Layla has the flu and stays home so she does not pass it to her class. Which word describes the flu?",
       "a": "Infectious",
       "opts": [
        "Inherited",
        "Immune",
        "Endemic",
        "Infectious"
       ],
       "explain": "It can be passed on to other people. Inherited illnesses come from genes, not from other people."
      },
      {
       "id": "pan_infs_desc",
       "type": "desc",
       "q": "Which of these is the adjective meaning 'able to be passed on to other people'?",
       "a": "Infectious",
       "opts": [
        "Infection",
        "Infectious",
        "Immunity",
        "Transmission"
       ],
       "explain": "<i>-ious</i> (full of) makes an adjective. <b>Infection</b> is the noun, so you say 'an infectious disease'."
      }
     ]
    },
    {
     "w": "transmission",
     "meaning": "in disease: the way a pathogen spreads from one host to another.",
     "example": "",
     "parts": [
      {
       "surface": "trans",
       "type": "prefix",
       "meaning": "across",
       "tr": {
        "am": "አቋርጦ",
        "ar": "عبر",
        "es": "a través de",
        "fa": "از میان",
        "fr": "à travers",
        "hi": "पार",
        "ja": "横切る",
        "ko": "가로질러",
        "ml": "കുറുകെ",
        "ps": "تېرېدنه",
        "ro": "peste",
        "ru": "через",
        "ta": "குறுக்கே",
        "tl": "kabila",
        "ur": "پار",
        "vi": "qua",
        "zh-Hans": "穿过",
        "zh-Hant": "穿過"
       }
      },
      {
       "surface": "miss",
       "type": "root",
       "meaning": "send",
       "tr": {
        "am": "መላክ",
        "ar": "إرسال",
        "es": "enviar",
        "fa": "فرستادن",
        "fr": "envoyer",
        "hi": "भेजना",
        "ja": "送る",
        "ko": "보냄",
        "ml": "അയക്കൽ",
        "ps": "لیږل",
        "ro": "a trimite",
        "ru": "посылать",
        "ta": "அனுப்புதல்",
        "tl": "ipadala",
        "ur": "بھیجنا",
        "vi": "gửi",
        "zh-Hans": "传",
        "zh-Hant": "傳"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus de",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces de",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso ng",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "am": "ስርጭት",
      "ar": "انتقال",
      "es": "transmisión",
      "fa": "انتقال",
      "fr": "transmission",
      "hi": "संचरण",
      "ja": "伝播",
      "ko": "전파",
      "ml": "പകർച്ച",
      "ps": "لیږد",
      "ro": "transmitere",
      "ru": "передача",
      "ta": "பரவல்",
      "tl": "paghahatid",
      "ur": "انتقال",
      "vi": "lây truyền",
      "zh-Hans": "传播",
      "zh-Hant": "傳播"
     },
     "note": "Latin <i>trans-</i> (across) + <i>mittere/miss-</i> (to send) + <i>-ion</i> (process): the pathogen is <b>sent across</b> from one host to the next. Same <i>miss</i> in <b>missile</b> (something sent flying) and <b>dismiss</b>; same <i>trans-</i> in <b>transport</b>. Exam tip: a car's transmission sends power across to the wheels — same pieces, different subject.",
     "apply": [
      {
       "id": "pan_trans_desc",
       "type": "desc",
       "q": "Which word names the way a pathogen spreads from one person to another?",
       "a": "Transmission",
       "opts": [
        "Immunity",
        "Transmission",
        "Infection",
        "Frequency"
       ],
       "explain": "<i>trans-</i> (across) + <i>miss</i> (send): sent across from host to host."
      },
      {
       "id": "pan_trans_cloze",
       "type": "cloze",
       "before": "Open windows on a crowded tram reduce the",
       "after": "of the virus from one passenger to another.",
       "a": "transmission",
       "opts": [
        "pathogen",
        "infection",
        "immunity",
        "transmission"
       ],
       "explain": "Fresh air breaks the journey <b>across</b> from person to person."
      }
     ]
    },
    {
     "w": "immunity",
     "meaning": "the body's ability to resist a particular infection or disease.",
     "example": "You gain immunity after a vaccination.",
     "parts": [
      {
       "surface": "immun",
       "type": "root",
       "meaning": "exempt/protected",
       "tr": {
        "am": "የተጠበቀ",
        "ar": "محصّن",
        "es": "protegido / exento",
        "fa": "مصون",
        "fr": "protégé",
        "hi": "प्रतिरक्षित",
        "ja": "免疫",
        "ko": "면역",
        "ml": "പ്രതിരോധം",
        "ps": "معافه",
        "ro": "imun",
        "ru": "защищённый",
        "ta": "எதிர்ப்பு",
        "tl": "protektado",
        "ur": "محفوظ",
        "vi": "được bảo vệ",
        "zh-Hans": "免疫",
        "zh-Hant": "免疫"
       }
      },
      {
       "surface": "ity",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "…的状态",
        "zh-Hant": "…的狀態",
        "other": "حالت"
       }
      }
     ],
     "tr": {
      "am": "በሽታ የመከላከል አቅም",
      "ar": "مناعة",
      "es": "inmunidad",
      "fa": "ایمنی",
      "fr": "immunité",
      "hi": "प्रतिरक्षा",
      "ja": "免疫",
      "ko": "면역",
      "ml": "പ്രതിരോധശേഷി",
      "ps": "معافیت",
      "ro": "imunitate",
      "ru": "иммунитет",
      "ta": "நோய் எதிர்ப்பு சக்தி",
      "tl": "imyunidad",
      "ur": "قوت مدافعت",
      "vi": "miễn dịch",
      "zh-Hans": "免疫力",
      "zh-Hant": "免疫力"
     },
     "note": "Latin <i>immunis</i> = 'free from duty' (<i>in-</i> not + <i>munus</i> a public duty or tax) + <i>-ity</i> (state of): your body is excused from that disease. Same <i>munus</i> in <b>community</b> (people who share duties). Exam tip: protections multiply, they do not add — a vaccine leaving 40% of the risk plus a mask leaving 50% leaves 0.4 × 0.5 = 20% risk, so 80% protection.",
     "apply": [
      {
       "id": "pan_imm_cloze",
       "type": "cloze",
       "before": "After a vaccination your body builds",
       "after": ", so it can fight that pathogen quickly next time.",
       "a": "immunity",
       "opts": [
        "immunity",
        "infection",
        "transmission",
        "evidence"
       ],
       "explain": "<i>immunis</i> = excused from duty: your body is excused from getting badly sick."
      },
      {
       "id": "pan_imm_desc",
       "type": "desc",
       "q": "Which word names the body's ability to resist one particular disease?",
       "a": "Immunity",
       "opts": [
        "Infection",
        "Immunity",
        "Transmission",
        "Evidence"
       ],
       "explain": "Immunity does not always mean you never catch it. It means your body already knows how to fight it."
      }
     ]
    },
    {
     "w": "vaccine",
     "meaning": "a medicine that trains the immune system to fight a disease before you catch it.",
     "example": "The flu vaccine is given every year.",
     "parts": [
      {
       "surface": "vac",
       "type": "root",
       "meaning": "cow (origin of vaccine)",
       "tr": {
        "zh-Hans": "牛（词源）",
        "zh-Hant": "牛（詞源）",
        "ja": "牛（語源）",
        "am": "ላም",
        "ar": "بقرة",
        "es": "vaca (origen de vacuna)",
        "fa": "گاو",
        "fr": "vache",
        "hi": "गाय",
        "ko": "소",
        "ml": "പശു",
        "ps": "غوا",
        "ro": "vacă",
        "ru": "корова",
        "ta": "பசு",
        "tl": "baka",
        "ur": "گائے",
        "vi": "bò"
       }
      },
      {
       "surface": "ine",
       "type": "suffix",
       "meaning": "makes a noun",
       "tr": {
        "am": "ስም ሰሪ",
        "ar": "لتكوين اسم",
        "es": "forma un sustantivo",
        "fa": "اسم‌ساز",
        "fr": "forme un nom",
        "hi": "संज्ञा बनाता है",
        "ja": "名詞をつくる",
        "ko": "명사를 만듦",
        "ml": "നാമം ഉണ്ടാക്കുന്നു",
        "ps": "نوم جوړوي",
        "ro": "formează substantiv",
        "ru": "образует существительное",
        "ta": "பெயர்ச்சொல் ஆக்கி",
        "tl": "bumubuo ng pangngalan",
        "ur": "اسم بنانے والا",
        "vi": "tạo danh từ",
        "zh-Hans": "构成名词",
        "zh-Hant": "構成名詞"
       }
      }
     ],
     "tr": {
      "am": "ክትባት",
      "ar": "لقاح",
      "es": "vacuna",
      "fa": "واکسن",
      "fr": "vaccin",
      "hi": "टीका",
      "ja": "ワクチン",
      "ko": "백신",
      "ml": "വാക്സിൻ",
      "ps": "واکسین",
      "ro": "vaccin",
      "ru": "вакцина",
      "ta": "தடுப்பூசி",
      "tl": "bakuna",
      "ur": "ویکسین",
      "vi": "vắc-xin",
      "zh-Hans": "疫苗",
      "zh-Hant": "疫苗"
     },
     "note": "Latin <i>vacca</i> = 'cow' + <i>-ine</i> (a substance). In 1796 Edward Jenner used cowpox, a mild cow disease, to protect people from deadly smallpox, so the method was named after the cow. Same <i>vacca</i> in Spanish <b>vaca</b>. Exam tip: a vaccine trains the immune system <b>before</b> you meet the real pathogen — it is not a cure taken afterwards.",
     "apply": [
      {
       "id": "pan_vac_scn",
       "type": "scenario",
       "q": "Which statement about a vaccine is correct?",
       "a": "It trains the immune system before you meet the pathogen",
       "opts": [
        "It kills the pathogen after you are already sick",
        "It removes pathogens from your hands",
        "It is the same thing as an antibiotic",
        "It trains the immune system before you meet the pathogen"
       ],
       "explain": "A vaccine is preparation, not treatment. It shows the immune system the pathogen safely, in advance."
      },
      {
       "id": "pan_vac_desc",
       "type": "desc",
       "q": "The word vaccine comes from the Latin word for which animal?",
       "a": "Cow",
       "opts": [
        "Dog",
        "Cow",
        "Horse",
        "Sheep"
       ],
       "explain": "<i>vacca</i> = cow. The very first vaccine used cowpox to protect against smallpox."
      }
     ]
    },
    {
     "w": "exponential",
     "meaning": "Growth that gets faster and faster as the amount gets bigger.",
     "example": "The population showed exponential growth after 1950.",
     "parts": [
      {
       "surface": "ex",
       "type": "prefix",
       "meaning": "out",
       "tr": {
        "am": "ውጭ",
        "ar": "خارج",
        "es": "fuera",
        "fa": "بیرون",
        "fr": "hors de",
        "hi": "बाहर",
        "ja": "外へ",
        "ko": "밖으로",
        "ml": "പുറത്തേക്ക്",
        "ps": "بهر",
        "ro": "afară",
        "ru": "из",
        "ta": "வெளியே",
        "tl": "palabas",
        "ur": "باہر",
        "vi": "ra",
        "zh-Hans": "向外",
        "zh-Hant": "向外",
        "other": "خارج"
       }
      },
      {
       "surface": "pon",
       "type": "root",
       "meaning": "place",
       "tr": {
        "fa": "قرار دادن",
        "am": "ማስቀመጥ",
        "ar": "يضع",
        "es": "colocar",
        "fr": "placer",
        "hi": "रखना",
        "ja": "置く",
        "ko": "놓다",
        "ml": "വയ്ക്കുക",
        "ps": "ایښودل",
        "ro": "a pune",
        "ru": "помещать",
        "ta": "வைத்தல்",
        "tl": "maglagay",
        "ur": "رکھنا",
        "vi": "đặt",
        "zh-Hans": "放置",
        "zh-Hant": "放置",
        "other": "قرار دادن"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "having the quality of",
       "tr": {
        "vi": "trạng thái",
        "fa": "چیز",
        "am": "ባሕርይ",
        "ar": "صفة",
        "es": "cualidad",
        "fr": "qualité",
        "hi": "गुण",
        "ja": "性質",
        "ko": "성질",
        "ml": "ഗുണം",
        "ps": "ځانګړتیا",
        "ro": "calitate",
        "ru": "качество",
        "ta": "பண்பு",
        "tl": "katangian",
        "ur": "خاصیت",
        "zh-Hans": "性质",
        "zh-Hant": "性質",
        "other": "بودن"
       }
      },
      {
       "surface": "ial",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "zh-Hans": "与……有关的",
        "zh-Hant": "與……有關的",
        "vi": "liên quan",
        "am": "የ… ያለ",
        "ar": "متعلق بـ",
        "es": "relativo a",
        "fa": "مربوط به",
        "fr": "relatif à",
        "hi": "से संबंधित",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ur": "سے متعلق"
       }
      }
     ],
     "tr": {
      "zh-Hans": "指数式的",
      "zh-Hant": "指數式的",
      "ja": "指数関数的な",
      "ko": "지수적인",
      "vi": "theo hàm mũ",
      "ar": "أُسّي",
      "fa": "نمایی (تصاعدی)",
      "ur": "اسّی (تیزی سے بڑھتا ہوا)",
      "am": "አክሳሪ (በፍጥነት የሚያድግ)",
      "ml": "ഘാതീയമായ",
      "ta": "அடுக்குக்குறி வளர்ச்சி",
      "tl": "exponential (mabilis na paglaki)",
      "ro": "exponențial",
      "ru": "экспоненциальный",
      "fr": "exponentiel",
      "hi": "चरघातांकी",
      "es": "exponencial",
      "ps": "نمایی (چټک ودې)"
     },
     "note": "Latin <i>ex-</i> (out) + <i>ponere</i> (to place): the exponent is the small number <b>placed out</b> at the top right, as in 2⁵. Exponential growth multiplies again and again, so it gets faster and faster. Same <i>pon</i> in <b>position</b> and <b>postpone</b>. Exam tip: linear growth <b>adds</b> the same amount each step (10, 20, 30, 40); exponential growth <b>multiplies</b> (10, 20, 40, 80).",
     "apply": [
      {
       "id": "pan_exp_scn",
       "type": "scenario",
       "q": "A news graph shows weekly cases as 10, 20, 40, 80. What kind of growth is this?",
       "a": "Exponential",
       "opts": [
        "Linear",
        "Exponential",
        "Steady",
        "Decreasing"
       ],
       "explain": "Each week is multiplied by 2, so the jump gets bigger every week: +10, then +20, then +40."
      },
      {
       "id": "pan_exp_scn2",
       "type": "scenario",
       "q": "Cases double every 3 days. There are 40 cases today. How many are expected in 9 days?",
       "a": "320",
       "opts": [
        "120",
        "320",
        "160",
        "80"
       ],
       "explain": "Doubling every 3 days: 40 → 80 (day 3) → 160 (day 6) → <b>320</b> (day 9). <b>Adding</b> 40 each time (linear thinking) would give only 160 by day 9 — exponential growth races ahead of it."
      },
      {
       "id": "pan_exp_scn3",
       "type": "scenario",
       "q": "Which list shows LINEAR growth, not exponential growth?",
       "a": "10, 20, 30, 40",
       "opts": [
        "10, 20, 40, 80",
        "10, 20, 30, 40",
        "3, 9, 27, 81",
        "2, 4, 8, 16"
       ],
       "explain": "Linear adds the same amount each step (+10). The other three multiply each step (×2, ×3, ×2)."
      }
     ]
    },
    {
     "w": "percentage",
     "meaning": "A number out of 100. 25% means 25 out of every 100, which is the same as the decimal 0.25. To find a percentage of an amount, multiply by that decimal: 20% of 60 = 0.2 × 60 = 12.",
     "example": "",
     "parts": [
      {
       "surface": "per",
       "type": "prefix",
       "meaning": "per/for each",
       "tr": {
        "ar": "لكل",
        "fa": "در هر",
        "zh-Hans": "每",
        "zh-Hant": "每",
        "other": "در هر",
        "am": "በየ",
        "es": "por",
        "fr": "par",
        "hi": "प्रति",
        "ja": "～につき",
        "ko": "～당",
        "ml": "പ്രതി",
        "ps": "فی",
        "ro": "pe",
        "ru": "на каждый",
        "ta": "ஒவ்வொன்றுக்கும்",
        "tl": "kada",
        "ur": "فی",
        "vi": "mỗi"
       }
      },
      {
       "surface": "cent",
       "type": "root",
       "meaning": "hundred",
       "tr": {
        "ar": "مئة",
        "fa": "صد",
        "zh-Hans": "百分",
        "zh-Hant": "百分",
        "other": "صد",
        "am": "መቶ",
        "es": "cien",
        "fr": "cent",
        "hi": "सौ",
        "ja": "百",
        "ko": "백",
        "ml": "നൂറ്",
        "ps": "سل",
        "ro": "sută",
        "ru": "сто",
        "ta": "நூறு",
        "tl": "daan",
        "ur": "سو",
        "vi": "trăm"
       }
      },
      {
       "surface": "age",
       "type": "suffix",
       "meaning": "state/amount",
       "tr": {
        "ar": "نسبة",
        "fa": "درصد",
        "zh-Hans": "状态",
        "zh-Hant": "狀態",
        "other": "درصد",
        "am": "መጠን",
        "es": "estado/cantidad",
        "fr": "taux / quantité",
        "hi": "मात्रा / दर",
        "ja": "割合／量",
        "ko": "비율 / 양",
        "ml": "അളവ്",
        "ps": "کچه / اندازه",
        "ro": "proporție / cantitate",
        "ru": "доля / количество",
        "ta": "விகிதம் / அளவு",
        "tl": "dami / proporsiyon",
        "ur": "مقدار / شرح",
        "vi": "tỷ lệ"
       }
      }
     ],
     "tr": {
      "am": "መቶኛ",
      "ar": "نسبة مئوية",
      "es": "porcentaje",
      "fa": "درصد",
      "fr": "pourcentage",
      "hi": "प्रतिशत",
      "ja": "百分率",
      "ko": "백분율",
      "ml": "ശതമാനം",
      "ps": "سلنه",
      "ro": "procentaj",
      "ru": "процент",
      "ta": "சதவீதம்",
      "tl": "porsyento",
      "ur": "فیصد",
      "vi": "phần trăm",
      "zh-Hans": "百分比",
      "zh-Hant": "百分比"
     },
     "note": "Latin <i>per centum</i> = 'for each hundred', plus <i>-age</i> (an amount, as in <b>mileage</b>). Same <i>cent</i> in <b>century</b> (100 years), <b>centimetre</b> (1/100 of a metre) and <b>cent</b> (1/100 of a dollar). Exam tip: percentages of protection do <b>not</b> add up — you multiply what is left over instead.",
     "apply": [
      {
       "id": "pan_pct_scn",
       "type": "scenario",
       "q": "An article says masks cut your risk by 50% and the vaccine cuts it by 60%, so together you are '110% protected'. Why is this wrong?",
       "a": "Risks multiply, not add: 0.5 × 0.4 = 0.2, so 80% protected",
       "opts": [
        "Risks multiply, not add: 0.5 × 0.4 = 0.2, so 80% protected",
        "The two numbers should be averaged to 55%",
        "The vaccine number must be wrong",
        "Nothing is wrong — 50 + 60 = 110"
       ],
       "explain": "Nobody can be more than 100% protected. Masks leave 50% of the risk; the vaccine leaves 40% of that. 0.5 × 0.4 = 0.2, so 20% risk is left — that is 80% protection."
      },
      {
       "id": "pan_pct_scn2",
       "type": "scenario",
       "q": "60 Year 10 students answered a survey and 15 of them ride a bike to school. What percentage is that?",
       "a": "25%",
       "opts": [
        "15%",
        "25%",
        "40%",
        "4%"
       ],
       "explain": "15 ÷ 60 = 0.25, and 0.25 × 100 = 25%. Per centum means 'for each hundred'."
      },
      {
       "id": "pan_pct_scn3",
       "type": "scenario",
       "q": "500 people went to the Sunday market and 20% of them wore a mask. How many people wore a mask?",
       "a": "100",
       "opts": [
        "20",
        "100",
        "80",
        "250"
       ],
       "explain": "20% = 0.2, and 0.2 × 500 = 100. Turn the percentage into a decimal, then multiply."
      }
     ]
    },
    {
     "w": "rate",
     "meaning": "How fast something changes. A rate is an amount for each unit of time, such as 60 new cases per day.",
     "example": "The rate of new infections fell from 60 per day to 20 per day.",
     "parts": [],
     "origin": "From Latin rata (reckoned, calculated), in the phrase pro rata parte — “according to the calculated part”.",
     "tr": {
      "zh-Hans": "率（速率）",
      "zh-Hant": "率（速率）",
      "ja": "率（割合・変化の速さ）",
      "ko": "비율(율, 변화 속도)",
      "vi": "tỉ lệ (tốc độ)",
      "ar": "معدل",
      "fa": "نرخ (میزان)",
      "ur": "شرح (نرخ)",
      "am": "ምጣኔ (መጠን)",
      "ml": "നിരക്ക്",
      "ta": "வீதம் (விகிதம்)",
      "tl": "rate (tantos)",
      "ps": "نرخ (کچه)",
      "ro": "rată",
      "ru": "темп (скорость изменения)",
      "fr": "taux",
      "hi": "दर",
      "es": "tasa"
     },
     "note": "From Latin <i>rata</i> (reckoned, calculated), from <i>pro rata parte</i> — “according to the calculated part”. You meet the same <i>rata</i> at a part-time job: <b>pro rata</b> pay is worked out per hour you actually work. Data tip: a rate is always an amount <b>per</b> something — per day, per week, per 100 000 people — so check the “per” before you compare two rates.",
     "apply": [
      {
       "id": "pan_rate_scn",
       "type": "scenario",
       "q": "A clinic recorded 420 new cases over 7 days. What was the rate of new cases?",
       "a": "60 cases per day",
       "opts": [
        "60 cases per day",
        "420 cases per day",
        "7 cases per day",
        "60 cases per week"
       ],
       "explain": "A rate is an amount for each unit of time: 420 ÷ 7 = 60 cases per day. The words <b>per</b> or <b>each</b> tell you a rate is coming."
      },
      {
       "id": "pan_rate_cloze",
       "type": "cloze",
       "before": "The total number of cases is still going up, but fewer are added each week, so the",
       "after": "of new cases is falling.",
       "a": "rate",
       "opts": [
        "rate",
        "total",
        "sample",
        "trend"
       ],
       "explain": "The <b>total</b> is how many altogether; the <b>rate</b> is how many are added per day or per week. A falling rate still adds cases — just fewer of them."
      }
     ]
    },
    {
     "w": "claim",
     "meaning": "A statement that someone says is true but has not proved yet. In a news article, the claim is the point the writer wants you to believe — your job is to check it against the evidence.",
     "example": "",
     "parts": [
      {
       "surface": "claim",
       "type": "root",
       "meaning": "cry out/demand",
       "tr": {
        "am": "መጮህ/መጠየቅ",
        "ar": "يصرخ/يطالب",
        "es": "gritar / exigir",
        "fa": "فریاد زدن/خواستن",
        "fr": "crier/exiger",
        "hi": "चिल्लाना/मांग करना",
        "ja": "叫ぶ・要求する",
        "ko": "외치다/요구하다",
        "ml": "ഉച്ചത്തിൽ വിളിക്കുക/ആവശ്യപ്പെടുക",
        "ps": "چیغه وهل/غوښتنه کول",
        "ro": "a striga/a cere",
        "ru": "кричать/требовать",
        "ta": "கூச்சலிடுதல்/கோருதல்",
        "tl": "sumigaw/humingi",
        "ur": "پکارنا/مطالبہ کرنا",
        "vi": "kêu lên/đòi hỏi",
        "zh-Hans": "呼喊/要求",
        "zh-Hant": "呼喊/要求"
       }
      }
     ],
     "tr": {
      "ja": "主張",
      "zh-Hans": "声称",
      "fa": "ادعا",
      "vi": "tuyên bố / đòi hỏi",
      "zh-Hant": "聲稱",
      "am": "የይገባኛል ጥያቄ",
      "ar": "المطالبة (الادعاء)",
      "es": "reclamación (reclamo)",
      "fr": "revendication",
      "hi": "दावा",
      "ko": "주장(청구)",
      "ml": "അവകാശവാദം",
      "ps": "ادعا",
      "ro": "revendicare",
      "ru": "притязание (заявка)",
      "ta": "உரிமைகோரல்",
      "tl": "paghahabol (claim)",
      "ur": "دعویٰ"
     },
     "note": "Latin <i>clamare</i> (to cry out, to shout) → Old French <i>clamer</i>: a claim is something you <b>shout out</b> as true. Same <i>clam</i> in <b>exclaim</b>, <b>proclaim</b> and <b>clamour</b>. Exam tip: in data literacy, always find the claim first, then ask what evidence supports it.",
     "apply": [
      {
       "id": "pan_claim_desc",
       "type": "desc",
       "q": "A news article says: 'Cases will drop by half next month.' No data is given. What is that sentence?",
       "a": "A claim",
       "opts": [
        "Evidence",
        "A claim",
        "A trend",
        "A sample space"
       ],
       "explain": "It is shouted out as true but nothing supports it yet. A claim without evidence is only a claim."
      },
      {
       "id": "pan_claim_scn",
       "type": "scenario",
       "q": "Anh reads the headline 'This tea stops the flu'. What should she look for next?",
       "a": "Evidence — data or a study that supports the claim",
       "opts": [
        "Another headline saying the same thing",
        "A photo of the tea",
        "How many people shared the post",
        "Evidence — data or a study that supports the claim"
       ],
       "explain": "A claim is a shout until evidence backs it up. Shares and repeats are not evidence."
      }
     ]
    },
    {
     "w": "evidence",
     "meaning": "Facts, data or quotations that show your point is true.",
     "example": "Support each idea with evidence from the text.",
     "parts": [
      {
       "surface": "e",
       "type": "prefix",
       "meaning": "out",
       "tr": {
        "am": "ውጭ",
        "ar": "خارج",
        "es": "fuera",
        "fa": "بیرون",
        "fr": "hors de",
        "hi": "बाहर",
        "ja": "外へ",
        "ko": "밖으로",
        "ml": "പുറത്തേക്ക്",
        "ps": "بهر",
        "ro": "afară",
        "ru": "из",
        "ta": "வெளியே",
        "tl": "palabas",
        "ur": "باہر",
        "vi": "ra",
        "zh-Hans": "向外",
        "zh-Hant": "向外",
        "other": "خارج"
       }
      },
      {
       "surface": "vid",
       "type": "root",
       "meaning": "see",
       "tr": {
        "vi": "nhìn",
        "am": "ማየት",
        "ar": "يرى",
        "es": "ver",
        "fa": "دیدن",
        "fr": "voir",
        "hi": "देखना",
        "ja": "見る",
        "ko": "보다",
        "ml": "കാണുക",
        "ps": "کتل",
        "ro": "a vedea",
        "ru": "видеть",
        "ta": "பார்த்தல்",
        "tl": "makita",
        "ur": "دیکھنا",
        "zh-Hans": "看",
        "zh-Hant": "看"
       }
      },
      {
       "surface": "ence",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      }
     ],
     "tr": {
      "zh-Hans": "证据",
      "zh-Hant": "證據",
      "ja": "証拠",
      "ko": "증거",
      "vi": "bằng chứng",
      "ar": "الدليل",
      "fa": "شواهد",
      "ur": "ثبوت",
      "am": "ማስረጃ",
      "ml": "തെളിവ്",
      "ta": "சான்று",
      "tl": "ebidensya",
      "ps": "شواهد",
      "ro": "dovezi",
      "ru": "доказательства",
      "fr": "preuve",
      "hi": "साक्ष्य",
      "es": "evidencia"
     },
     "note": "Latin <i>e-</i> (out) + <i>videre</i> (to see) + <i>-ence</i> (state of): evidence is what brings the truth <b>out where you can see it</b>. Same <i>vid</i> in <b>video</b>, <b>visible</b> and <b>supervise</b>. Exam tip: in a data-literacy answer, quote the number and where it came from — 'the graph shows cases rose from 40 to 320 in nine days'.",
     "apply": [
      {
       "id": "pan_evid_desc",
       "type": "desc",
       "q": "Which word means the facts, data or quotations that show a point is true?",
       "a": "Evidence",
       "opts": [
        "Claim",
        "Evidence",
        "Trend",
        "Immunity"
       ],
       "explain": "<i>e-</i> (out) + <i>vid</i> (see): what you can see for yourself."
      },
      {
       "id": "pan_evid_scn",
       "type": "scenario",
       "q": "Which is the strongest evidence for the claim 'more students ride bikes to school in summer'?",
       "a": "A count of the bikes in the bike shed each month for a year",
       "opts": [
        "One student saying she rides more in summer",
        "A count of the bikes in the bike shed each month for a year",
        "A photo of a full bike shed on one day",
        "A headline about bikes"
       ],
       "explain": "Good evidence is data anyone can check, over enough time. One person or one day is too small a sample."
      }
     ]
    },
    {
     "w": "misleading",
     "meaning": "Describing something that makes you believe a wrong thing, even when it does not exactly tell a lie.",
     "example": "The graph was misleading because the y-axis started at 90, not at 0.",
     "parts": [
      {
       "surface": "mis",
       "type": "prefix",
       "meaning": "wrongly",
       "tr": {
        "zh-Hans": "错误地",
        "zh-Hant": "錯誤地",
        "ja": "誤って",
        "ko": "잘못",
        "vi": "sai, nhầm",
        "ar": "بشكل خاطئ",
        "fa": "به اشتباه",
        "ur": "غلط طور پر",
        "am": "በስህተት",
        "ml": "തെറ്റായി",
        "ta": "தவறாக",
        "tl": "mali",
        "ps": "په غلط ډول",
        "ro": "greșit",
        "ru": "неправильно",
        "fr": "à tort",
        "hi": "गलत तरीके से",
        "es": "erróneamente"
       }
      },
      {
       "surface": "lead",
       "type": "root",
       "meaning": "guide, take somewhere",
       "tr": {
        "zh-Hans": "引导",
        "zh-Hant": "引導",
        "ja": "導く",
        "ko": "이끌다",
        "vi": "dẫn dắt",
        "ar": "يقود/يرشد",
        "fa": "هدایت کردن",
        "ur": "رہنمائی کرنا",
        "am": "መምራት",
        "ml": "നയിക്കുക",
        "ta": "வழிநடத்துதல்",
        "tl": "umakay/gumabay",
        "ps": "لارښوونه کول",
        "ro": "a conduce/a ghida",
        "ru": "вести/направлять",
        "fr": "guider/mener",
        "hi": "मार्गदर्शन करना",
        "es": "guiar/conducir"
       }
      },
      {
       "surface": "ing",
       "type": "suffix",
       "meaning": "doing, describing",
       "tr": {
        "zh-Hans": "…的（正在做）",
        "zh-Hant": "…的（正在做）",
        "ja": "〜している",
        "ko": "~하는",
        "vi": "đang, mang tính",
        "ar": "صيغة اسم الفاعل",
        "fa": "کننده",
        "ur": "کرنے والا",
        "am": "የሚያደርግ",
        "ml": "ചെയ്യുന്ന",
        "ta": "செய்கிற",
        "tl": "na gumagawa",
        "ps": "کوونکی",
        "ro": "care face",
        "ru": "делающий",
        "fr": "qui fait",
        "hi": "करने वाला",
        "es": "que hace"
       }
      }
     ],
     "tr": {
      "zh-Hans": "误导性的",
      "zh-Hant": "誤導性的",
      "ja": "誤解を招く",
      "ko": "오해를 부르는(오도하는)",
      "vi": "gây hiểu lầm",
      "ar": "مضلل",
      "fa": "گمراه‌کننده",
      "ur": "گمراہ کن",
      "am": "አሳሳች",
      "ml": "തെറ്റിദ്ധരിപ്പിക്കുന്ന",
      "ta": "தவறான எண்ணத்தைத் தரும்",
      "tl": "nakalilinlang",
      "ps": "ګمراه کوونکی",
      "ro": "înșelător",
      "ru": "вводящий в заблуждение",
      "fr": "trompeur",
      "hi": "भ्रामक",
      "es": "engañoso"
     },
     "note": "<i>mis-</i> (wrongly) + <i>lead</i> (guide) + <i>-ing</i>: it <b>guides you the wrong way</b>. Same <i>mis-</i> in <b>mistake</b>, <b>misread</b> and <b>misuse</b>. Data tip: a misleading graph can use only true numbers — check where the y-axis starts, check the scale, and check whether it shows a <b>total</b> or a <b>rate</b>.",
     "apply": [
      {
       "id": "pan_mis_scn",
       "type": "scenario",
       "q": "A news graph shows weekly cases of 100, 102 and 104. The y-axis starts at 98, so the last bar looks three times as tall as the first. What is this graph?",
       "a": "misleading",
       "opts": [
        "misleading",
        "exponential",
        "accurate",
        "impossible"
       ],
       "explain": "The numbers are true, but the picture guides you wrongly: cases rose by only 4 in 100, which is 4%. Starting the y-axis at 98 makes bar heights of 2, 4 and 6."
      },
      {
       "id": "pan_mis_desc",
       "type": "desc",
       "q": "Which word describes information that makes you believe something wrong, without telling an actual lie?",
       "a": "misleading",
       "opts": [
        "misleading",
        "reliable",
        "relevant",
        "estimated"
       ],
       "explain": "<i>mis-</i> (wrongly) + <i>lead</i> (guide): it guides the reader to the wrong idea. Same <i>mis-</i> as in <b>mistake</b>."
      },
      {
       "id": "pan_mis_cloze",
       "type": "cloze",
       "before": "The headline said “Cases double!”, but the numbers went from 3 to 6 in a town of 50 000. The headline is true but",
       "after": ", because it hides how small the numbers are.",
       "a": "misleading",
       "opts": [
        "misleading",
        "accurate",
        "random",
        "impossible"
       ],
       "explain": "3 to 6 really is double, but 6 out of 50 000 is about 0.01% of the town. The words <b>lead you wrongly</b> — <i>mis-</i> + <i>lead</i>."
      }
     ]
    },
    {
     "w": "trend",
     "meaning": "the overall pattern shown by data, such as increasing, decreasing or staying the same.",
     "example": "",
     "parts": [],
     "tr": {
      "am": "አዝማሚያ",
      "ar": "اتجاه",
      "es": "tendencia",
      "fa": "روند",
      "fr": "tendance",
      "hi": "प्रवृत्ति",
      "ja": "傾向",
      "ko": "추세",
      "ml": "പ്രവണത",
      "ps": "رجحان / تمایل",
      "ro": "tendință",
      "ru": "тенденция",
      "ta": "போக்கு",
      "tl": "kalakaran",
      "ur": "رجحان",
      "vi": "xu hướng",
      "zh-Hans": "趋势",
      "zh-Hant": "趨勢"
     },
     "note": "No prefix or suffix here: <i>trend</i> comes from Old English <i>trendan</i>, 'to turn or roll'. A trend is the way the data turns — up, down or flat. The same word gives <b>trendy</b> (what fashion is turning towards). Exam tip: describe a trend as increasing, decreasing or staying about the same, and check whether a rise is linear (+10 each week) or exponential (doubling).",
     "apply": [
      {
       "id": "pan_trend_scn",
       "type": "scenario",
       "q": "A graph of weekly cases shows 40, 55, 48, 70, 85, 92. Two weeks dipped slightly. What is the trend?",
       "a": "Increasing",
       "opts": [
        "Exponential",
        "Decreasing",
        "No trend at all",
        "Increasing"
       ],
       "explain": "A trend is the overall direction, not each single step, so small dips do not change it. The numbers are not doubling, so it is not exponential."
      },
      {
       "id": "pan_trend_cloze",
       "type": "cloze",
       "before": "The graph shows a clear downward",
       "after": ": cases fell in every month from March to August.",
       "a": "trend",
       "opts": [
        "trend",
        "outcome",
        "claim",
        "ratio"
       ],
       "explain": "<i>trendan</i> = to turn. Here the data turns downwards month after month."
      }
     ]
    }
   ]
  },
  {
   "id": "lab1",
   "area": "lab",
   "title": "In the laboratory",
   "focus": "The room, the rules and the equipment: what everything is called and what it is for.",
   "words": [
    {
     "w": "laboratory",
     "meaning": "a room specially equipped for scientific experiments and practical work.",
     "example": "We do our practical work in the science laboratory, not in a normal classroom.",
     "parts": [
      {
       "surface": "labor",
       "type": "root",
       "meaning": "work",
       "tr": {
        "am": "ስራ",
        "ar": "عمل",
        "es": "trabajo",
        "fa": "کار",
        "fr": "travail",
        "hi": "काम",
        "ja": "働く",
        "ko": "노동",
        "ml": "ജോലി",
        "ps": "کار",
        "ro": "muncă",
        "ru": "труд",
        "ta": "வேலை",
        "tl": "trabaho",
        "ur": "کام",
        "vi": "lao động",
        "zh-Hans": "工作",
        "zh-Hant": "工作"
       }
      },
      {
       "surface": "atory",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "am": "የተያያዘ",
        "ar": "متعلق بـ",
        "es": "relacionado con",
        "fa": "مربوط به",
        "fr": "relatif à",
        "hi": "से संबंधित",
        "ja": "〜に関する",
        "ko": "관련된",
        "ml": "സംബന്ധിച്ച",
        "ps": "اړوند",
        "ro": "referitor la",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "kaugnay",
        "ur": "متعلق",
        "vi": "liên quan đến",
        "zh-Hans": "…性的",
        "zh-Hant": "…性的"
       }
      }
     ],
     "tr": {
      "zh-Hans": "实验室",
      "zh-Hant": "實驗室",
      "ja": "実験室",
      "ko": "실험실",
      "vi": "phòng thí nghiệm",
      "ar": "مختبر",
      "fa": "آزمایشگاه",
      "ur": "تجربہ گاہ",
      "ps": "لابراتوار",
      "am": "ላቦራቶሪ",
      "ml": "പരീക്ഷണശാല",
      "ta": "ஆய்வகம்",
      "hi": "प्रयोगशाला",
      "tl": "laboratoryo",
      "ro": "laborator",
      "fr": "laboratoire",
      "ru": "лаборатория",
      "es": "laboratorio"
     },
     "note": "<i>labor</i> (work) + <i>-atory</i> (a place for): a place for work. The same <i>labor</i> is in <b>collaborate</b> (work together) and <b>elaborate</b>. Everyone shortens it to <b>lab</b>, but the full word is what you write in a report.",
     "apply": [
      {
       "id": "lab1_laby_desc",
       "type": "desc",
       "q": "Which word names a room specially fitted out for experiments and practical work?",
       "a": "Laboratory",
       "opts": [
        "Laboratory",
        "Equipment",
        "Hazard",
        "Beaker"
       ],
       "explain": "<i>labor</i> (work) + <i>-atory</i> (place for). Equipment is the tools inside it, not the room."
      },
      {
       "id": "lab1_laby_scn",
       "type": "scenario",
       "q": "A door sign says: no food or drink, safety glasses must be worn, bags on the hooks. Which room is behind the door?",
       "a": "The laboratory",
       "opts": [
        "The laboratory",
        "The library",
        "The canteen",
        "The gym"
       ],
       "explain": "Those rules are there because the room is set up for experiments — that is a laboratory."
      }
     ]
    },
    {
     "w": "hazard",
     "meaning": "something in the environment that could cause harm.",
     "example": "The open gas tap was a hazard, so we turned it off.",
     "parts": [],
     "tr": {
      "zh-Hans": "危险源",
      "zh-Hant": "危險源",
      "ja": "危険源",
      "ko": "위험 요소",
      "vi": "mối nguy hiểm",
      "ar": "خطر",
      "fa": "خطر",
      "ur": "خطرہ",
      "ps": "خطر",
      "am": "አደጋ",
      "ml": "അപകടസാധ്യത",
      "ta": "அபாயம்",
      "hi": "खतरा",
      "tl": "panganib",
      "ro": "pericol",
      "fr": "danger",
      "ru": "опасность",
      "es": "peligro"
     },
     "note": "<b>Hazard</b> came into English from an old French word for a dice game, so it has carried the idea of <b>chance</b> for hundreds of years. In science it is now exact: the hazard is the <b>thing</b> that could cause harm — the acid, the flame, the broken glass.",
     "apply": [
      {
       "id": "lab1_haz_desc",
       "type": "desc",
       "q": "Which word means something that could cause harm?",
       "a": "Hazard",
       "opts": [
        "Hazard",
        "Risk",
        "Equipment",
        "Safety flame"
       ],
       "explain": "A hazard is the thing itself. The chance that it actually hurts someone is the risk."
      },
      {
       "id": "lab1_haz_scn",
       "type": "scenario",
       "q": "A bottle of acid is standing open near the edge of the bench. What is the open bottle?",
       "a": "A hazard",
       "opts": [
        "A hazard",
        "A risk",
        "A method",
        "A result"
       ],
       "explain": "The acid is the thing that could cause harm, so it is the hazard."
      },
      {
       "id": "lab1_haz_cloze",
       "type": "cloze",
       "before": "Boiling water, broken glass and an open gas tap could all cause harm, so each one is a",
       "after": "in the laboratory.",
       "a": "hazard",
       "opts": [
        "hazard",
        "risk",
        "beaker",
        "tripod"
       ],
       "explain": "They are the things that could hurt you — hazards. How likely the harm is would be the risk."
      }
     ]
    },
    {
     "w": "risk",
     "meaning": "the chance that a hazard will actually cause harm.",
     "example": "Wearing safety glasses lowers the risk of getting acid in your eyes.",
     "parts": [],
     "tr": {
      "zh-Hans": "风险",
      "zh-Hant": "風險",
      "ja": "リスク",
      "ko": "위험(가능성)",
      "vi": "nguy cơ",
      "ar": "احتمال الخطر",
      "fa": "ریسک/احتمال خطر",
      "ur": "خطرے کا امکان",
      "ps": "خطر",
      "am": "አደጋ ተጋላጭነት",
      "ml": "അപകടസാധ്യത",
      "ta": "ஆபத்து வாய்ப்பு",
      "hi": "जोखिम",
      "tl": "panganib na maaaring mangyari",
      "ro": "risc",
      "fr": "risque",
      "ru": "риск",
      "es": "riesgo"
     },
     "note": "<b>Risk</b> reached English through French <i>risque</i> and Italian <i>risco</i>, meaning danger. Keep the pair straight: the <b>hazard</b> is the thing, the <b>risk</b> is the chance of harm. Safety rules do not remove the hazard — they lower the risk.",
     "apply": [
      {
       "id": "lab1_risk_desc",
       "type": "desc",
       "q": "Which word means the chance that something harmful will actually happen?",
       "a": "Risk",
       "opts": [
        "Risk",
        "Hazard",
        "Equipment",
        "Laboratory"
       ],
       "explain": "Risk is the chance. The dangerous thing itself is the hazard."
      },
      {
       "id": "lab1_risk_scn",
       "type": "scenario",
       "q": "The open bottle of acid is closed and put back in the cupboard. What has changed?",
       "a": "The risk is lower, but the acid is still a hazard",
       "opts": [
        "The risk is lower, but the acid is still a hazard",
        "The hazard is gone, but the risk is the same",
        "The risk is higher",
        "Nothing has changed"
       ],
       "explain": "The acid can still cause harm, so it stays a hazard. Closing it makes harm much less likely, so the risk drops."
      }
     ]
    },
    {
     "w": "safety glasses",
     "meaning": "glasses worn in a laboratory to protect the eyes from chemicals and heat.",
     "example": "Put your safety glasses on before you light the Bunsen burner.",
     "parts": [
      {
       "surface": "safe",
       "type": "root",
       "meaning": "free from danger",
       "tr": {
        "zh-Hans": "安全",
        "zh-Hant": "安全",
        "ja": "安全な",
        "ko": "안전한",
        "vi": "an toàn",
        "ar": "آمن",
        "fa": "ایمن",
        "ur": "محفوظ",
        "am": "ደኅንነቱ የተጠበቀ",
        "ml": "സുരക്ഷിതം",
        "ta": "பாதுகாப்பான",
        "tl": "ligtas",
        "ps": "خوندي",
        "ro": "sigur",
        "ru": "безопасный",
        "fr": "sûr",
        "hi": "सुरक्षित",
        "es": "seguro"
       }
      },
      {
       "surface": "ty",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      },
      {
       "surface": "glass",
       "type": "root",
       "meaning": "hard clear material",
       "tr": {
        "zh-Hans": "玻璃",
        "zh-Hant": "玻璃",
        "ja": "ガラス",
        "ko": "유리",
        "vi": "thủy tinh",
        "ar": "زجاج",
        "fa": "شیشه",
        "ur": "شیشہ",
        "am": "መስታወት",
        "ml": "ഗ്ലാസ്",
        "ta": "கண்ணாடி",
        "tl": "salamin",
        "ps": "ښیښه",
        "ro": "sticlă",
        "ru": "стекло",
        "fr": "verre",
        "hi": "काँच",
        "es": "vidrio"
       }
      },
      {
       "surface": "es",
       "type": "suffix",
       "meaning": "plural",
       "tr": {
        "fa": "جمع",
        "am": "ብዙ ቁጥር",
        "ar": "جمع",
        "es": "plural",
        "fr": "pluriel",
        "hi": "बहुवचन",
        "ja": "複数",
        "ko": "복수",
        "ml": "ബഹുവചനം",
        "ps": "جمع",
        "ro": "plural",
        "ru": "множественное число",
        "ta": "பன்மை",
        "tl": "maramihan",
        "ur": "جمع",
        "vi": "số nhiều",
        "zh-Hans": "复数",
        "zh-Hant": "複數"
       }
      }
     ],
     "tr": {
      "zh-Hans": "安全眼镜",
      "zh-Hant": "安全眼鏡",
      "ja": "安全眼鏡",
      "ko": "보안경",
      "vi": "kính bảo hộ",
      "ar": "نظارات السلامة",
      "fa": "عینک ایمنی",
      "ur": "حفاظتی چشمہ",
      "ps": "د خوندیتوب عینکې",
      "am": "የደህንነት መነጽር",
      "ml": "സുരക്ഷാ കണ്ണട",
      "ta": "பாதுகாப்பு கண்ணாடி",
      "hi": "सुरक्षा चश्मा",
      "tl": "salaming pangkaligtasan",
      "ro": "ochelari de protecție",
      "fr": "lunettes de sécurité",
      "ru": "защитные очки",
      "es": "gafas de seguridad"
     },
     "note": "A compound of <b>safety</b> (<i>safe</i> + <i>-ty</i>, the state of being safe) and <b>glasses</b>. Like <b>scissors</b> and <b>tongs</b>, glasses is always plural — you say <i>a pair of safety glasses</i>, never <i>a safety glass</i>.",
     "apply": [
      {
       "id": "lab1_sg_desc",
       "type": "desc",
       "q": "Which piece of equipment protects your eyes from chemicals and heat?",
       "a": "Safety glasses",
       "opts": [
        "Safety glasses",
        "Tongs",
        "A spatula",
        "The collar"
       ],
       "explain": "Safety glasses are worn over the eyes. Tongs protect your hands, not your eyes."
      },
      {
       "id": "lab1_sg_scn",
       "type": "scenario",
       "q": "You are about to heat a test tube of liquid. What goes on first?",
       "a": "Safety glasses",
       "opts": [
        "Safety glasses",
        "A gauze mat",
        "Tongs",
        "A heatproof mat"
       ],
       "explain": "Heated liquid can spit. Eyes are protected before anything is lit."
      }
     ]
    },
    {
     "w": "equipment",
     "meaning": "the tools and instruments used to carry out scientific work.",
     "example": "We collected our equipment from the trolley: a beaker, a tripod and a thermometer.",
     "parts": [
      {
       "surface": "equip",
       "type": "root",
       "meaning": "supply what is needed",
       "tr": {
        "zh-Hans": "装备",
        "zh-Hant": "裝備",
        "ja": "備え付ける",
        "ko": "갖추다",
        "vi": "trang bị",
        "ar": "يجهّز",
        "fa": "تجهیز کردن",
        "ur": "سازوسامان مہیا کرنا",
        "am": "ማስታጠቅ",
        "ml": "സജ്ജമാക്കുക",
        "ta": "தளவாடம் வழங்குதல்",
        "tl": "bigyan ng kagamitan",
        "ps": "سمبالول",
        "ro": "a echipa",
        "ru": "снаряжать",
        "fr": "équiper",
        "hi": "सुसज्जित करना",
        "es": "equipar"
       }
      },
      {
       "surface": "ment",
       "type": "suffix",
       "meaning": "result of",
       "tr": {
        "am": "ውጤት",
        "ar": "نتيجة",
        "es": "resultado de",
        "fa": "نتیجه",
        "fr": "résultat de",
        "hi": "परिणाम",
        "ja": "結果",
        "ko": "결과",
        "ml": "ഫലം",
        "ps": "پایله",
        "ro": "rezultat",
        "ru": "результат",
        "ta": "விளைவு",
        "tl": "resulta",
        "ur": "نتیجہ",
        "vi": "kết quả",
        "zh-Hans": "结果",
        "zh-Hant": "結果"
       }
      }
     ],
     "tr": {
      "zh-Hans": "设备",
      "zh-Hant": "設備",
      "ja": "器具",
      "ko": "기구/장비",
      "vi": "thiết bị",
      "ar": "معدات",
      "fa": "تجهیزات",
      "ur": "سامان/آلات",
      "ps": "تجهیزات",
      "am": "መሳሪያ",
      "ml": "ഉപകരണങ്ങൾ",
      "ta": "கருவிகள்",
      "hi": "उपकरण",
      "tl": "kagamitan",
      "ro": "echipament",
      "fr": "équipement",
      "ru": "оборудование",
      "es": "equipo"
     },
     "note": "From French <i>équiper</i>, first used for fitting out a ship: <i>equip</i> + <i>-ment</i> (the thing that results). <b>Equipment</b> is uncountable — say <i>three pieces of equipment</i>, not <i>three equipments</i>.",
     "apply": [
      {
       "id": "lab1_eq_desc",
       "type": "desc",
       "q": "Which word names all the tools and instruments used to do scientific work?",
       "a": "Equipment",
       "opts": [
        "Equipment",
        "Laboratory",
        "Hazard",
        "Risk"
       ],
       "explain": "Equipment is the tools. The laboratory is the room they live in."
      },
      {
       "id": "lab1_eq_cloze",
       "type": "cloze",
       "before": "Beakers, tongs and thermometers are all",
       "after": "that we use in the laboratory.",
       "a": "equipment",
       "opts": [
        "equipment",
        "hazards",
        "risks",
        "laboratories"
       ],
       "explain": "They are tools for doing the work, so they are equipment."
      }
     ]
    },
    {
     "w": "beaker",
     "meaning": "a container with a wide base, used to hold or heat liquids.",
     "example": "We poured 100 mL of water into the beaker and heated it.",
     "parts": [],
     "tr": {
      "zh-Hans": "烧杯",
      "zh-Hant": "燒杯",
      "ja": "ビーカー",
      "ko": "비커",
      "vi": "cốc thủy tinh",
      "ar": "كأس مخبري",
      "fa": "بشر آزمایشگاهی",
      "ur": "بیکر",
      "ps": "بیکر",
      "am": "ቢከር",
      "ml": "ബീക്കർ",
      "ta": "பீக்கர்",
      "hi": "बीकर",
      "tl": "beaker",
      "ro": "pahar de laborator",
      "fr": "bécher",
      "ru": "химический стакан",
      "es": "vaso de precipitados"
     },
     "note": "<b>Beaker</b> is an old northern European word for a drinking cup, and the lab version keeps the shape: wide base, straight sides, a lip for pouring. The marks on the side are rough only — for an accurate volume you need a <b>measuring cylinder</b>.",
     "apply": [
      {
       "id": "lab1_bkr_desc",
       "type": "desc",
       "q": "Which container has a wide base and is used to hold or heat liquids?",
       "a": "A beaker",
       "opts": [
        "A beaker",
        "A test tube",
        "A measuring cylinder",
        "A tripod"
       ],
       "explain": "The wide base makes a beaker steady on a gauze mat and easy to heat."
      },
      {
       "id": "lab1_bkr_scn",
       "type": "scenario",
       "q": "Your group must heat 100 mL of water over a Bunsen burner. Which container do you use?",
       "a": "A beaker",
       "opts": [
        "A beaker",
        "A measuring cylinder",
        "A test tube",
        "A spatula"
       ],
       "explain": "A beaker is made to be heated. A measuring cylinder is for measuring a volume, not for heating."
      }
     ]
    },
    {
     "w": "measuring cylinder",
     "meaning": "a tall, narrow container marked with a scale, used to measure the volume of a liquid accurately.",
     "example": "We used a measuring cylinder to measure exactly 25 mL of water.",
     "parts": [
      {
       "surface": "measur",
       "type": "root",
       "meaning": "measure",
       "tr": {
        "zh-Hans": "测量",
        "zh-Hant": "測量",
        "ja": "測る",
        "ko": "측정하다",
        "vi": "đo lường",
        "ar": "قياس",
        "fa": "اندازه‌گیری کردن",
        "ur": "پیمائش کرنا",
        "am": "መለካት",
        "ml": "അളക്കുക",
        "ta": "அளவிடு",
        "tl": "sukatin",
        "ps": "اندازه کول",
        "ro": "a măsura",
        "ru": "измерять",
        "fr": "mesurer",
        "hi": "मापना",
        "es": "medir"
       }
      },
      {
       "surface": "ing",
       "type": "suffix",
       "meaning": "action/process",
       "tr": {
        "am": "ተግባር",
        "ar": "فعل",
        "es": "el acto de",
        "fa": "عمل",
        "fr": "action de",
        "hi": "क्रिया",
        "ja": "動作",
        "ko": "행위",
        "ml": "പ്രവൃത്തി",
        "ps": "کړنه",
        "ro": "acțiunea de",
        "ru": "действие",
        "ta": "செயல்",
        "tl": "kilos",
        "ur": "فعل",
        "vi": "hành động",
        "zh-Hans": "行为",
        "zh-Hant": "行為"
       }
      }
     ],
     "tr": {
      "zh-Hans": "量筒",
      "zh-Hant": "量筒",
      "ja": "メスシリンダー",
      "ko": "메스실린더",
      "vi": "ống đong",
      "ar": "أسطوانة قياس",
      "fa": "استوانه مدرج",
      "ur": "پیمائشی سلنڈر",
      "ps": "اندازه‌کوونکی سلنډر",
      "am": "መለኪያ ሲሊንደር",
      "ml": "അളവ് സിലിണ്ടർ",
      "ta": "அளவீட்டு உருளை",
      "hi": "मापन बेलन",
      "tl": "panukat na silindro",
      "ro": "cilindru gradat",
      "fr": "éprouvette graduée",
      "ru": "мерный цилиндр",
      "es": "probeta graduada"
     },
     "note": "<i>measur</i> (measure) + <i>-ing</i> (the action), plus <b>cylinder</b>, from Greek <i>kylindros</i>, a roller — the tube shape. Tall and narrow means the scale is fine, so small differences in volume show up clearly.",
     "apply": [
      {
       "id": "lab1_mc_desc",
       "type": "desc",
       "q": "Which container is tall and narrow, with a scale up the side for reading volume?",
       "a": "A measuring cylinder",
       "opts": [
        "A measuring cylinder",
        "A beaker",
        "A test tube",
        "A thermometer"
       ],
       "explain": "A thermometer also has a scale, but it measures temperature, not volume."
      },
      {
       "id": "lab1_mc_scn",
       "type": "scenario",
       "q": "You need exactly 25 mL of water. Which piece of equipment gives the most accurate measurement?",
       "a": "A measuring cylinder",
       "opts": [
        "A measuring cylinder",
        "A beaker",
        "A test tube",
        "A gauze mat"
       ],
       "explain": "Only the measuring cylinder is marked with an accurate scale for volume."
      }
     ]
    },
    {
     "w": "test tube",
     "meaning": "a small glass tube, open at one end, used for heating small samples or mixing chemicals.",
     "example": "We mixed the two liquids in a test tube and watched for a colour change.",
     "parts": [],
     "tr": {
      "zh-Hans": "试管",
      "zh-Hant": "試管",
      "ja": "試験管",
      "ko": "시험관",
      "vi": "ống nghiệm",
      "ar": "أنبوب اختبار",
      "fa": "لوله آزمایش",
      "ur": "ٹیسٹ ٹیوب",
      "ps": "ازموینې پایپ",
      "am": "የሙከራ ቱቦ",
      "ml": "ടെസ്റ്റ് ട്യൂബ്",
      "ta": "சோதனைக் குழாய்",
      "hi": "परखनली",
      "tl": "test tube",
      "ro": "eprubetă",
      "fr": "tube à essai",
      "ru": "пробирка",
      "es": "tubo de ensayo"
     },
     "note": "A plain compound: a <b>tube</b> for a <b>test</b>. It is small on purpose — a few drops are enough to see a colour change, and a small sample is a smaller hazard. Test tubes go in a rack, never left lying on the bench.",
     "apply": [
      {
       "id": "lab1_tt_desc",
       "type": "desc",
       "q": "Which piece of equipment is a small glass tube, open at one end?",
       "a": "A test tube",
       "opts": [
        "A test tube",
        "A beaker",
        "A measuring cylinder",
        "An air hole"
       ],
       "explain": "A test tube holds a small sample for heating or mixing."
      },
      {
       "id": "lab1_tt_scn",
       "type": "scenario",
       "q": "Your group must mix two chemicals, only a few drops of each. Which container fits the job?",
       "a": "A test tube",
       "opts": [
        "A test tube",
        "A beaker",
        "A measuring cylinder",
        "A heatproof mat"
       ],
       "explain": "A few drops would be lost in a beaker. A test tube is made for small samples."
      }
     ]
    },
    {
     "w": "thermometer",
     "meaning": "an instrument used to measure temperature.",
     "example": "We put the thermometer in the water and read 63 °C.",
     "parts": [
      {
       "surface": "therm",
       "type": "root",
       "meaning": "heat",
       "tr": {
        "vi": "nhiệt",
        "fa": "گرما",
        "am": "ሙቀት",
        "ar": "حرارة",
        "es": "calor",
        "fr": "chaleur",
        "hi": "ऊष्मा",
        "ja": "熱",
        "ko": "열",
        "ml": "താപം",
        "ps": "تودوخه",
        "ro": "căldură",
        "ru": "тепло",
        "ta": "வெப்பம்",
        "tl": "init",
        "ur": "حرارت",
        "zh-Hans": "热",
        "zh-Hant": "熱"
       }
      },
      {
       "surface": "meter",
       "type": "root",
       "meaning": "measure",
       "tr": {
        "am": "መለኪያ",
        "ar": "قياس",
        "es": "medida",
        "fa": "اندازه‌گیری",
        "fr": "mesure",
        "hi": "माप",
        "ja": "測定",
        "ko": "측정",
        "ml": "അളവ്",
        "ps": "اندازه",
        "ro": "măsură",
        "ru": "мера",
        "ta": "அளவீடு",
        "tl": "sukat",
        "ur": "پیمائش",
        "vi": "đo lường",
        "zh-Hans": "测量",
        "zh-Hant": "測量"
       }
      }
     ],
     "tr": {
      "zh-Hans": "温度计",
      "zh-Hant": "溫度計",
      "ja": "温度計",
      "ko": "온도계",
      "vi": "nhiệt kế",
      "ar": "مقياس الحرارة",
      "fa": "دماسنج",
      "ur": "تھرمامیٹر",
      "ps": "تودرجه پیمانه",
      "am": "ቴርሞሜትር",
      "ml": "താപമാപിനി",
      "ta": "வெப்பமானி",
      "hi": "तापमापी",
      "tl": "thermometer",
      "ro": "termometru",
      "fr": "thermomètre",
      "ru": "термометр",
      "es": "termómetro"
     },
     "note": "<i>therm</i> (heat) + <i>meter</i> (measure): a heat-measurer. The same <i>therm</i> is in <b>thermos</b> and <b>thermal</b>; the same <i>meter</i> is in <b>speedometer</b>. Read it with the bulb still in the liquid and your eye level with the line.",
     "apply": [
      {
       "id": "lab1_th_desc",
       "type": "desc",
       "q": "<i>therm</i> means heat and <i>meter</i> means measure, so a thermometer measures…",
       "a": "Temperature",
       "opts": [
        "Temperature",
        "Volume",
        "Mass",
        "Time"
       ],
       "explain": "Heat + measure. Volume is measured with a measuring cylinder."
      },
      {
       "id": "lab1_th_scn",
       "type": "scenario",
       "q": "Your group heats water and must write down how hot it is every 30 seconds. Which instrument do you use?",
       "a": "A thermometer",
       "opts": [
        "A thermometer",
        "A measuring cylinder",
        "A beaker",
        "A tripod"
       ],
       "explain": "Only the thermometer reads temperature."
      }
     ]
    },
    {
     "w": "tripod",
     "meaning": "a three-legged stand placed over a Bunsen burner to support equipment being heated.",
     "example": "The beaker sat on a gauze mat on top of the tripod.",
     "parts": [
      {
       "surface": "tri",
       "type": "prefix",
       "meaning": "three",
       "tr": {
        "am": "ሶስት",
        "ar": "ثلاثة",
        "es": "tres",
        "fa": "سه",
        "fr": "trois",
        "hi": "तीन",
        "ja": "三",
        "ko": "삼",
        "ml": "മൂന്ന്",
        "ps": "درې",
        "ro": "trei",
        "ru": "три",
        "ta": "மூன்று",
        "tl": "tatlo",
        "ur": "تین",
        "vi": "ba",
        "zh-Hans": "三",
        "zh-Hant": "三"
       }
      },
      {
       "surface": "pod",
       "type": "root",
       "meaning": "foot",
       "tr": {
        "zh-Hans": "脚",
        "zh-Hant": "腳",
        "ja": "足",
        "ko": "발",
        "vi": "bàn chân",
        "ar": "قدم",
        "fa": "پا",
        "ur": "پاؤں",
        "am": "እግር",
        "ml": "കാൽ",
        "ta": "கால்",
        "tl": "paa",
        "ps": "پښه",
        "ro": "picior",
        "ru": "нога/стопа",
        "fr": "pied",
        "hi": "पैर",
        "es": "pie"
       }
      }
     ],
     "tr": {
      "zh-Hans": "三脚架",
      "zh-Hant": "三腳架",
      "ja": "三脚架",
      "ko": "삼각대",
      "vi": "chân đế ba chân",
      "ar": "حامل ثلاثي القوائم",
      "fa": "سه‌پایه",
      "ur": "تپائی",
      "ps": "دری پښې والا سټینډ",
      "am": "ትሪፖድ",
      "ml": "ത്രിക്കാൽ സ്റ്റാൻഡ്",
      "ta": "முக்காலி",
      "hi": "तिपाई",
      "tl": "tripod",
      "ro": "trepied",
      "fr": "trépied",
      "ru": "штатив",
      "es": "trípode"
     },
     "note": "<i>tri</i> (three) + <i>pod</i> (foot): three feet. The same <i>tri</i> is in <b>triangle</b>, the same <i>pod</i> in <b>podium</b> and <b>octopus</b> (eight feet). Three legs never rock, so the beaker above the flame stays still.",
     "apply": [
      {
       "id": "lab1_tri_desc",
       "type": "desc",
       "q": "Which piece of equipment is a three-legged stand that holds things above a Bunsen burner?",
       "a": "A tripod",
       "opts": [
        "A tripod",
        "A gauze mat",
        "A heatproof mat",
        "The collar"
       ],
       "explain": "<i>tri</i> (three) + <i>pod</i> (foot). The gauze mat sits on top of it."
      },
      {
       "id": "lab1_tri_cloze",
       "type": "cloze",
       "before": "<i>tri</i> means three and <i>pod</i> means foot, so the three-legged stand we put over the Bunsen burner is a",
       "after": ".",
       "a": "tripod",
       "opts": [
        "tripod",
        "spatula",
        "beaker",
        "collar"
       ],
       "explain": "Three (<i>tri</i>) plus foot (<i>pod</i>) gives the three-legged stand: a tripod."
      }
     ]
    },
    {
     "w": "gauze mat",
     "meaning": "a metal mesh mat placed on a tripod to spread heat evenly under a beaker.",
     "example": "The gauze mat spreads the heat so the beaker does not crack.",
     "parts": [],
     "tr": {
      "zh-Hans": "石棉网",
      "zh-Hant": "石棉網",
      "ja": "金網",
      "ko": "석면망",
      "vi": "tấm lưới thép",
      "ar": "شبكة سلكية للتسخين",
      "fa": "توری حرارتی",
      "ur": "تار کی جالی",
      "ps": "د تودوخې ټوکر",
      "am": "ገመድ ማጣሪያ",
      "ml": "ചൂട് വല",
      "ta": "கம்பி வலை",
      "hi": "तार की जाली",
      "tl": "gauze mat",
      "ro": "plasă de sârmă pentru încălzire",
      "fr": "toile métallique",
      "ru": "асбестовая сетка",
      "es": "rejilla metálica"
     },
     "note": "<b>Gauze</b> is a thin, open-weave material; the lab version is woven metal. Laid on the tripod, the mesh spreads the flame's heat across the whole base of the beaker, so the glass does not get one very hot spot and crack.",
     "apply": [
      {
       "id": "lab1_gm_desc",
       "type": "desc",
       "q": "Which piece of equipment is a metal mesh that spreads heat evenly under a beaker?",
       "a": "A gauze mat",
       "opts": [
        "A gauze mat",
        "A heatproof mat",
        "A tripod",
        "The collar"
       ],
       "explain": "The gauze mat goes on the tripod, between the flame and the glass."
      },
      {
       "id": "lab1_gm_scn",
       "type": "scenario",
       "q": "A beaker is sitting straight on the tripod and the glass is heating in one small spot. What should be between the beaker and the tripod?",
       "a": "A gauze mat",
       "opts": [
        "A gauze mat",
        "A heatproof mat",
        "Tongs",
        "A spatula"
       ],
       "explain": "The mesh spreads the heat out. A heatproof mat protects the bench, not the beaker."
      }
     ]
    },
    {
     "w": "tongs",
     "meaning": "a tool with two arms, used to safely pick up and hold hot objects.",
     "example": "Use tongs to move the hot beaker, never your fingers.",
     "parts": [],
     "tr": {
      "zh-Hans": "坩埚钳",
      "zh-Hant": "坩堝鉗",
      "ja": "トング",
      "ko": "집게",
      "vi": "kẹp gắp",
      "ar": "ملقط",
      "fa": "انبرک",
      "ur": "چمٹا",
      "ps": "پینسه",
      "am": "መጭመቂያ",
      "ml": "ചവണ (ടോങ്സ്)",
      "ta": "இடுக்கி",
      "hi": "चिमटा",
      "tl": "tenacillas",
      "ro": "clește",
      "fr": "pince",
      "ru": "щипцы",
      "es": "pinzas"
     },
     "note": "An old English word, and always plural like <b>scissors</b> and <b>pliers</b>: you use <i>a pair of tongs</i>. Two arms that grip mean your fingers never touch the hot object — the whole point of the tool.",
     "apply": [
      {
       "id": "lab1_tg_desc",
       "type": "desc",
       "q": "Which tool has two arms and is made for picking up hot objects?",
       "a": "Tongs",
       "opts": [
        "Tongs",
        "A spatula",
        "A tripod",
        "A gauze mat"
       ],
       "explain": "Tongs grip. A spatula only scoops small amounts of solid."
      },
      {
       "id": "lab1_tg_scn",
       "type": "scenario",
       "q": "The beaker is hot and has to come off the tripod. What do you use?",
       "a": "Tongs",
       "opts": [
        "Tongs",
        "A spatula",
        "The collar",
        "Safety glasses"
       ],
       "explain": "Tongs are the tool made for holding hot things safely."
      }
     ]
    },
    {
     "w": "spatula",
     "meaning": "a small flat tool used to scoop, move or mix solid chemicals.",
     "example": "We used a spatula to add one small scoop of salt to the water.",
     "parts": [
      {
       "surface": "spat",
       "type": "root",
       "meaning": "broad blade",
       "tr": {
        "zh-Hans": "宽刃",
        "zh-Hant": "寬刃",
        "ja": "幅広の刃",
        "ko": "넓은 날",
        "vi": "lưỡi rộng",
        "ar": "نصل عريض",
        "fa": "تیغه پهن",
        "ur": "چوڑا پھل",
        "am": "ሰፊ ስለት",
        "ml": "വീതിയുള്ള ബ്ലേഡ്",
        "ta": "அகன்ற கத்தி",
        "tl": "malapad na talim",
        "ps": "پلن تیغه",
        "ro": "lamă lată",
        "ru": "широкое лезвие",
        "fr": "lame large",
        "hi": "चौड़ी धार",
        "es": "hoja ancha"
       }
      },
      {
       "surface": "ula",
       "type": "suffix",
       "meaning": "little form",
       "tr": {
        "vi": "dạng nhỏ",
        "zh-Hans": "小形式",
        "ja": "小さい形",
        "zh-Hant": "小形式",
        "am": "ትንሽ ቅርፅ",
        "ar": "صيغة صغيرة",
        "es": "forma pequeña",
        "fa": "شکل کوچک",
        "fr": "petite forme",
        "hi": "छोटा रूप",
        "ko": "작은 형태",
        "ml": "ചെറിയ രൂപം",
        "ps": "کوچنی شکل",
        "ro": "formă mică",
        "ru": "маленькая форма",
        "ta": "சிறிய வடிவம்",
        "tl": "maliit na anyo",
        "ur": "چھوٹی شکل"
       }
      }
     ],
     "tr": {
      "zh-Hans": "药匙",
      "zh-Hant": "藥匙",
      "ja": "薬さじ",
      "ko": "약주걱",
      "vi": "thìa xúc hóa chất",
      "ar": "ملعقة مخبرية",
      "fa": "اسپاتول",
      "ur": "اسپیچولا",
      "ps": "سپاچوله",
      "am": "ስፓቱላ",
      "ml": "സ്പാറ്റുല",
      "ta": "ஸ்பேட்டுலா",
      "hi": "स्पैचुला",
      "tl": "spatula",
      "ro": "spatulă",
      "fr": "spatule",
      "ru": "шпатель",
      "es": "espátula"
     },
     "note": "<i>spat</i> (broad blade) + <i>-ula</i> (little): a little broad blade — the same family as <b>spade</b>. It handles <b>solids</b> only: one small scoop of powder at a time, so you never tip half the jar into the beaker.",
     "apply": [
      {
       "id": "lab1_sp_desc",
       "type": "desc",
       "q": "Which small flat tool is used to scoop or move solid chemicals?",
       "a": "A spatula",
       "opts": [
        "A spatula",
        "Tongs",
        "A beaker",
        "A gauze mat"
       ],
       "explain": "<i>spat</i> (broad blade) + <i>-ula</i> (little). Tongs are for hot objects."
      },
      {
       "id": "lab1_sp_scn",
       "type": "scenario",
       "q": "You must move a small amount of salt powder from the jar into the beaker. Which tool?",
       "a": "A spatula",
       "opts": [
        "A spatula",
        "Tongs",
        "A measuring cylinder",
        "A thermometer"
       ],
       "explain": "A spatula is made for small amounts of solid."
      }
     ]
    },
    {
     "w": "Bunsen burner",
     "meaning": "a piece of laboratory equipment that burns gas to produce a flame for heating.",
     "example": "We lit the Bunsen burner and turned the collar to get a blue flame.",
     "parts": [
      {
       "surface": "burn",
       "type": "root",
       "meaning": "be on fire",
       "tr": {
        "zh-Hans": "燃烧",
        "zh-Hant": "燃燒",
        "ja": "燃える",
        "ko": "타다",
        "vi": "cháy",
        "ar": "يحترق",
        "fa": "سوختن",
        "ur": "جلنا",
        "am": "ማቃጠል",
        "ml": "കത്തുക",
        "ta": "எரிதல்",
        "tl": "masunog",
        "ps": "سوځېدل",
        "ro": "a arde",
        "ru": "гореть",
        "fr": "brûler",
        "hi": "जलना",
        "es": "arder"
       }
      },
      {
       "surface": "er",
       "type": "suffix",
       "meaning": "thing that does",
       "tr": {
        "am": "የሚሠራ ሰው/ነገር",
        "ar": "فاعل",
        "es": "cosa que hace",
        "fa": "انجام‌دهنده",
        "fr": "celui qui fait",
        "hi": "करने वाला",
        "ja": "〜する人・物",
        "ko": "~하는 사람/것",
        "ml": "കർത്താവ്",
        "ps": "کوونکی",
        "ro": "făcător",
        "ru": "деятель",
        "ta": "செய்பவர்",
        "tl": "tagagawa",
        "ur": "کرنے والا",
        "vi": "người/vật thực hiện",
        "zh-Hans": "做…的人或物",
        "zh-Hant": "做…的人或物",
        "other": "کننده"
       }
      }
     ],
     "tr": {
      "zh-Hans": "本生灯",
      "zh-Hant": "本生燈",
      "ja": "ガスバーナー",
      "ko": "분젠 버너",
      "vi": "đèn Bunsen",
      "ar": "موقد بنسن",
      "fa": "مشعل بونزن",
      "ur": "بنسن برنر",
      "ps": "بنسن بلپ",
      "am": "የቡንሰን ማቃጠያ",
      "ml": "ബൺസൻ ബർണർ",
      "ta": "பன்சன் பர்னர்",
      "hi": "बुनसेन बर्नर",
      "tl": "Bunsen burner",
      "ro": "arzător Bunsen",
      "fr": "bec Bunsen",
      "ru": "горелка Бунзена",
      "es": "mechero Bunsen"
     },
     "note": "Named after the nineteenth-century chemist Bunsen, who worked on this burner design — so it keeps a capital <b>B</b>, like <b>degrees Celsius</b>. It burns gas, and how much air you let in decides whether the flame is a safety flame or a heating flame.",
     "apply": [
      {
       "id": "lab1_bb_desc",
       "type": "desc",
       "q": "Which piece of equipment burns gas to make a flame for heating?",
       "a": "A Bunsen burner",
       "opts": [
        "A Bunsen burner",
        "A thermometer",
        "A heatproof mat",
        "A tripod"
       ],
       "explain": "The burner makes the flame; the tripod and mat just hold things around it."
      },
      {
       "id": "lab1_bb_cloze",
       "type": "cloze",
       "before": "Once the heatproof mat was on the bench we lit the",
       "after": "and turned the collar until the flame went blue.",
       "a": "Bunsen burner",
       "opts": [
        "Bunsen burner",
        "thermometer",
        "measuring cylinder",
        "gauze mat"
       ],
       "explain": "Only the burner has a flame and a collar."
      }
     ]
    },
    {
     "w": "collar",
     "meaning": "the part of a Bunsen burner that turns to open or close the air hole.",
     "example": "Turn the collar to open the air hole and the flame turns blue.",
     "parts": [],
     "tr": {
      "zh-Hans": "气孔调节环",
      "zh-Hant": "氣孔調節環",
      "ja": "カラー（空気調節環）",
      "ko": "공기 조절 고리",
      "vi": "vòng điều chỉnh khí",
      "ar": "طوق ضبط الهواء",
      "fa": "حلقه تنظیم هوا",
      "ur": "ہوا کنٹرول کالر",
      "ps": "د هوا تنظیم حلقه",
      "am": "የአየር መቆጣጠሪያ ቀለበት",
      "ml": "വായു നിയന്ത്രണ വളയം",
      "ta": "காற்று கட்டுப்பாட்டு வளையம்",
      "hi": "हवा नियंत्रण छल्ला",
      "tl": "kwelyo ng hangin",
      "ro": "guler de reglare a aerului",
      "fr": "collerette d'air",
      "ru": "воздушное кольцо",
      "es": "anillo de aire"
     },
     "note": "From Latin <i>collum</i>, neck — the same collar that sits round the neck of a shirt. On a Bunsen burner it is the ring you <b>turn</b>; turning it uncovers or covers the air hole underneath.",
     "apply": [
      {
       "id": "lab1_col_desc",
       "type": "desc",
       "q": "Which part of a Bunsen burner do you turn to open or close the air hole?",
       "a": "The collar",
       "opts": [
        "The collar",
        "The air hole",
        "The tripod",
        "The safety flame"
       ],
       "explain": "The collar is the moving ring. The air hole is the opening it covers."
      },
      {
       "id": "lab1_col_scn",
       "type": "scenario",
       "q": "The flame is yellow and you need it hot and blue. Which part do you turn?",
       "a": "The collar",
       "opts": [
        "The collar",
        "The tripod",
        "The gauze mat",
        "The heatproof mat"
       ],
       "explain": "Turning the collar opens the air hole, more air mixes with the gas, and the flame goes blue."
      }
     ]
    },
    {
     "w": "air hole",
     "meaning": "the opening on a Bunsen burner that lets air mix with the gas.",
     "example": "With the air hole closed, the flame is yellow and easy to see.",
     "parts": [],
     "tr": {
      "zh-Hans": "进气孔",
      "zh-Hant": "進氣孔",
      "ja": "空気孔",
      "ko": "공기 구멍",
      "vi": "lỗ thông khí",
      "ar": "فتحة الهواء",
      "fa": "سوراخ هوا",
      "ur": "ہوا کا سوراخ",
      "ps": "د هوا سوری",
      "am": "የአየር ቀዳዳ",
      "ml": "വായു ദ്വാരം",
      "ta": "காற்று துளை",
      "hi": "हवा का छिद्र",
      "tl": "butas ng hangin",
      "ro": "orificiu de aer",
      "fr": "trou d'air",
      "ru": "воздушное отверстие",
      "es": "orificio de aire"
     },
     "note": "A plain compound — the <b>hole</b> that lets <b>air</b> in. Do not mix it up with the collar: the collar is the ring you turn, the air hole is the opening that ends up open or closed. More air in means a hotter, bluer flame.",
     "apply": [
      {
       "id": "lab1_ah_desc",
       "type": "desc",
       "q": "Which part of a Bunsen burner lets air mix with the gas?",
       "a": "The air hole",
       "opts": [
        "The air hole",
        "The collar",
        "The gauze mat",
        "The tripod"
       ],
       "explain": "Air comes in through the hole. The collar is what you turn to open it."
      },
      {
       "id": "lab1_ah_cloze",
       "type": "cloze",
       "before": "The collar has been turned so that the",
       "after": "is closed, no air mixes with the gas and the flame stays yellow.",
       "a": "air hole",
       "opts": [
        "air hole",
        "collar",
        "tripod",
        "heatproof mat"
       ],
       "explain": "No air can get in, so the gas burns without it and the flame stays yellow and cool."
      }
     ]
    },
    {
     "w": "safety flame",
     "meaning": "the yellow, quiet flame of a Bunsen burner, used when it's lit but not heating anything.",
     "example": "Leave the burner on the safety flame while you are not heating anything.",
     "parts": [
      {
       "surface": "safe",
       "type": "root",
       "meaning": "free from danger",
       "tr": {
        "zh-Hans": "安全",
        "zh-Hant": "安全",
        "ja": "安全な",
        "ko": "안전한",
        "vi": "an toàn",
        "ar": "آمن",
        "fa": "ایمن",
        "ur": "محفوظ",
        "am": "ደኅንነቱ የተጠበቀ",
        "ml": "സുരക്ഷിതം",
        "ta": "பாதுகாப்பான",
        "tl": "ligtas",
        "ps": "خوندي",
        "ro": "sigur",
        "ru": "безопасный",
        "fr": "sûr",
        "hi": "सुरक्षित",
        "es": "seguro"
       }
      },
      {
       "surface": "ty",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      }
     ],
     "tr": {
      "zh-Hans": "安全火焰",
      "zh-Hant": "安全火燄",
      "ja": "安全炎",
      "ko": "안전 불꽃",
      "vi": "ngọn lửa an toàn",
      "ar": "لهب الأمان",
      "fa": "شعله ایمنی",
      "ur": "حفاظتی شعلہ",
      "ps": "خوندي لمبه",
      "am": "የደህንነት ነበልባል",
      "ml": "സുരക്ഷാ ജ്വാല",
      "ta": "பாதுகாப்பு சுடர்",
      "hi": "सुरक्षा ज्वाला",
      "tl": "ligtas na apoy",
      "ro": "flacără de siguranță",
      "fr": "flamme de sécurité",
      "ru": "защитное пламя",
      "es": "llama de seguridad"
     },
     "note": "The <b>yellow</b>, quiet, easy-to-see flame you get with the air hole closed. It is the flame the burner waits on: cool enough to be safe, bright enough that nobody walks into it by accident.",
     "apply": [
      {
       "id": "lab1_sf_desc",
       "type": "desc",
       "q": "Which flame is yellow and quiet, and used when the burner is lit but not heating?",
       "a": "The safety flame",
       "opts": [
        "The safety flame",
        "The heating flame",
        "The air hole",
        "The collar"
       ],
       "explain": "Yellow, quiet and easy to see — that is the safety flame."
      },
      {
       "id": "lab1_sf_scn",
       "type": "scenario",
       "q": "Your group has lit the burner but is not ready to heat anything yet. Which flame should it show?",
       "a": "The safety flame",
       "opts": [
        "The safety flame",
        "The heating flame",
        "Either one",
        "It does not matter"
       ],
       "explain": "A yellow flame is visible and cooler, so nothing is heated by accident."
      }
     ]
    },
    {
     "w": "heating flame",
     "meaning": "the hot, blue, roaring flame of a Bunsen burner, used to heat things quickly.",
     "example": "Open the air hole to get the blue heating flame before you boil the water.",
     "parts": [
      {
       "surface": "heat",
       "type": "root",
       "meaning": "high temperature",
       "tr": {
        "zh-Hans": "热",
        "zh-Hant": "熱",
        "vi": "nhiệt",
        "ar": "حرارة",
        "fa": "گرما",
        "ml": "ചൂട്",
        "am": "ሙቀት",
        "es": "calor",
        "fr": "chaleur",
        "hi": "ऊष्मा",
        "ja": "熱",
        "ko": "열",
        "ps": "تودوخه",
        "ro": "căldură",
        "ru": "тепло",
        "ta": "வெப்பம்",
        "tl": "init",
        "ur": "حرارت"
       }
      },
      {
       "surface": "ing",
       "type": "suffix",
       "meaning": "action / process",
       "tr": {
        "vi": "hành động / quá trình",
        "zh-Hans": "行为 / 过程",
        "ja": "行為 / 過程",
        "zh-Hant": "行爲 / 過程",
        "am": "ሂደት",
        "ar": "عملية",
        "es": "acción/proceso",
        "fa": "فرآیند / عمل",
        "fr": "action de",
        "hi": "क्रिया",
        "ko": "행위",
        "ml": "പ്രക്രിയ",
        "ps": "بهير",
        "ro": "acțiunea de",
        "ru": "действие",
        "ta": "செயல்",
        "tl": "kilos",
        "ur": "عمل"
       }
      }
     ],
     "tr": {
      "zh-Hans": "加热火焰",
      "zh-Hant": "加熱火燄",
      "ja": "加熱炎",
      "ko": "가열 불꽃",
      "vi": "ngọn lửa gia nhiệt",
      "ar": "لهب التسخين",
      "fa": "شعله حرارتی",
      "ur": "حرارتی شعلہ",
      "ps": "تودولو لمبه",
      "am": "የማሞቂያ ነበልባል",
      "ml": "ചൂടാക്കൽ ജ്വാല",
      "ta": "வெப்பமூட்டும் சுடர்",
      "hi": "तापन ज्वाला",
      "tl": "apoy na pampainit",
      "ro": "flacără de încălzire",
      "fr": "flamme de chauffe",
      "ru": "нагревающее пламя",
      "es": "llama de calentamiento"
     },
     "note": "The <b>blue</b>, roaring flame you get with the air hole open. Air mixes with the gas, the gas burns completely, and the flame is much hotter than the yellow one — so it is the flame you use to boil, and only while you are actually heating.",
     "apply": [
      {
       "id": "lab1_hf_desc",
       "type": "desc",
       "q": "Which flame is blue and roaring, and used to heat things quickly?",
       "a": "The heating flame",
       "opts": [
        "The heating flame",
        "The safety flame",
        "The collar",
        "The gauze mat"
       ],
       "explain": "Blue and roaring means air is mixing with the gas, and that flame is hot."
      },
      {
       "id": "lab1_hf_scn",
       "type": "scenario",
       "q": "The water must boil as fast as possible. Which flame, and how do you get it?",
       "a": "The heating flame — open the air hole",
       "opts": [
        "The heating flame — open the air hole",
        "The heating flame — close the air hole",
        "The safety flame — open the air hole",
        "The safety flame — close the air hole"
       ],
       "explain": "Air in through the open hole gives the hot blue flame. Closing the hole gives the yellow safety flame."
      }
     ]
    },
    {
     "w": "heatproof mat",
     "meaning": "a mat placed on the bench to protect it from hot equipment.",
     "example": "The Bunsen burner stands on a heatproof mat to protect the bench.",
     "parts": [
      {
       "surface": "heat",
       "type": "root",
       "meaning": "high temperature",
       "tr": {
        "zh-Hans": "热",
        "zh-Hant": "熱",
        "vi": "nhiệt",
        "ar": "حرارة",
        "fa": "گرما",
        "ml": "ചൂട്",
        "am": "ሙቀት",
        "es": "calor",
        "fr": "chaleur",
        "hi": "ऊष्मा",
        "ja": "熱",
        "ko": "열",
        "ps": "تودوخه",
        "ro": "căldură",
        "ru": "тепло",
        "ta": "வெப்பம்",
        "tl": "init",
        "ur": "حرارت"
       }
      },
      {
       "surface": "proof",
       "type": "suffix",
       "meaning": "protected against",
       "tr": {
        "zh-Hans": "防…的",
        "zh-Hant": "防…的",
        "ja": "〜に強い",
        "ko": "…을 막는",
        "vi": "chống…",
        "ar": "مقاوم لـ",
        "fa": "ضدِ",
        "ur": "…سے محفوظ",
        "am": "የሚከላከል",
        "ml": "പ്രതിരോധിക്കുന്ന",
        "ta": "தாங்கக்கூடிய",
        "tl": "hindi tinatablan ng",
        "ps": "ضد",
        "ro": "rezistent la",
        "ru": "стойкий к",
        "fr": "résistant à",
        "hi": "…रोधी",
        "es": "resistente a"
       }
      }
     ],
     "tr": {
      "zh-Hans": "隔热垫",
      "zh-Hant": "隔熱墊",
      "ja": "耐熱マット",
      "ko": "내열 매트",
      "vi": "tấm lót chịu nhiệt",
      "ar": "حصيرة مقاومة للحرارة",
      "fa": "زیرانداز نسوز",
      "ur": "حرارت مزاحم چٹائی",
      "ps": "د تودوخې ضد چوکاټ",
      "am": "የሙቀት መከላከያ ምንጣፍ",
      "ml": "ചൂട് പ്രതിരോധ പായ",
      "ta": "வெப்ப எதிர்ப்பு பாய்",
      "hi": "ऊष्मारोधी चटाई",
      "tl": "hindi-nasusunog na banig",
      "ro": "suport termorezistent",
      "fr": "tapis résistant à la chaleur",
      "ru": "термостойкий коврик",
      "es": "estera resistente al calor"
     },
     "note": "<b>Heat</b> + <b>proof</b>, where <i>-proof</i> means able to keep something out — as in <b>waterproof</b> and <b>fireproof</b>. It lies on the <b>bench</b> under the burner. The gauze mat does a different job, on the tripod.",
     "apply": [
      {
       "id": "lab1_hm_desc",
       "type": "desc",
       "q": "Which mat goes on the bench to protect it from hot equipment?",
       "a": "A heatproof mat",
       "opts": [
        "A heatproof mat",
        "A gauze mat",
        "Safety glasses",
        "A tripod"
       ],
       "explain": "<i>-proof</i> means keeps it out, as in waterproof. The gauze mat goes on the tripod instead."
      },
      {
       "id": "lab1_hm_scn",
       "type": "scenario",
       "q": "You are setting the Bunsen burner up on the bench. What goes underneath it?",
       "a": "A heatproof mat",
       "opts": [
        "A heatproof mat",
        "A gauze mat",
        "A measuring cylinder",
        "A spatula"
       ],
       "explain": "Under the burner, on the bench: heatproof mat. On the tripod, under the beaker: gauze mat."
      }
     ]
    }
   ]
  },
  {
   "id": "lab2",
   "area": "lab",
   "title": "Measuring & graphs",
   "focus": "Taking readings, recording them with units, and describing what the graph shows.",
   "words": [
    {
     "w": "temperature",
     "meaning": "a measure of how hot or cold something is.",
     "example": "The temperature of the water rose from 20 °C to 80 °C.",
     "parts": [
      {
       "surface": "temper",
       "type": "root",
       "meaning": "heat",
       "tr": {
        "vi": "nhiệt độ",
        "am": "ሙቀት",
        "ar": "حرارة",
        "es": "calor",
        "fa": "دما",
        "fr": "chaleur",
        "hi": "ताप",
        "ja": "熱",
        "ko": "열",
        "ml": "ചൂട്",
        "ps": "تودوخه",
        "ro": "căldură",
        "ru": "тепло",
        "ta": "வெப்பம்",
        "tl": "init",
        "ur": "حرارت",
        "zh-Hans": "热",
        "zh-Hant": "熱"
       }
      },
      {
       "surface": "at",
       "type": "suffix",
       "meaning": "process",
       "tr": {
        "vi": "quá trình",
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "بهیر",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "zh-Hans": "过程",
        "zh-Hant": "過程",
        "other": "عمل"
       }
      },
      {
       "surface": "ure",
       "type": "suffix",
       "meaning": "result",
       "tr": {
        "vi": "kết quả",
        "am": "ውጤት",
        "ar": "نتيجة",
        "es": "resultado",
        "fa": "نتیجه",
        "fr": "résultat",
        "hi": "परिणाम",
        "ja": "結果",
        "ko": "결과",
        "ml": "ഫലം",
        "ps": "پایله",
        "ro": "rezultat",
        "ru": "результат",
        "ta": "முடிவு",
        "tl": "resulta",
        "ur": "نتیجہ",
        "zh-Hans": "结果",
        "zh-Hant": "結果",
        "other": "構造"
       }
      }
     ],
     "tr": {
      "am": "የሙቀት መጠን",
      "ar": "درجة الحرارة",
      "es": "temperatura",
      "fa": "دما",
      "fr": "température",
      "hi": "तापमान",
      "ja": "温度",
      "ko": "온도",
      "ml": "താപനില",
      "ps": "تودوخه درجه",
      "ro": "temperatură",
      "ru": "температура",
      "ta": "வெப்பநிலை",
      "tl": "temperatura",
      "ur": "درجہ حرارت",
      "vi": "nhiệt độ",
      "zh-Hans": "温度",
      "zh-Hant": "溫度"
     },
     "note": "<i>temper</i> (heat, mixture) + <i>-at-</i> + <i>-ure</i> (the result): the state of heat something is in. The same <i>temper</i> is in <b>temperate</b> (mild weather). Temperature is <b>not</b> the same as heat — it is the number a thermometer gives you.",
     "apply": [
      {
       "id": "lab2_temp_desc",
       "type": "desc",
       "q": "Which word means how hot or cold something is?",
       "a": "Temperature",
       "opts": [
        "Temperature",
        "Time interval",
        "Data",
        "Trend"
       ],
       "explain": "Temperature is the hot-or-cold measurement itself."
      },
      {
       "id": "lab2_temp_scn",
       "type": "scenario",
       "q": "Your thermometer reads 63 °C. What have you just measured?",
       "a": "The temperature of the water",
       "opts": [
        "The temperature of the water",
        "The time interval",
        "The trend",
        "The uncertainty"
       ],
       "explain": "A thermometer gives temperature. The gap between readings would be the time interval."
      }
     ]
    },
    {
     "w": "degrees Celsius",
     "meaning": "the unit used to measure temperature, written °C.",
     "example": "We wrote every reading in degrees Celsius, for example 63 °C.",
     "parts": [],
     "tr": {
      "zh-Hans": "摄氏度",
      "zh-Hant": "攝氏度",
      "ja": "摂氏度",
      "ko": "섭씨도",
      "vi": "độ Celsius",
      "ar": "درجة مئوية",
      "fa": "درجه سلسیوس",
      "ur": "سیلسیس درجہ",
      "ps": "سیلسیس درجه",
      "am": "ዲግሪ ሴልስየስ",
      "ml": "സെൽഷ്യസ് ഡിഗ്രി",
      "ta": "செல்சியஸ் டிகிரி",
      "hi": "सेल्सियस डिग्री",
      "tl": "digri Celsius",
      "ro": "grade Celsius",
      "fr": "degrés Celsius",
      "ru": "градус Цельсия",
      "es": "grados Celsius"
     },
     "note": "<b>Degree</b> comes from Latin <i>gradus</i>, a step — the steps marked up a scale. <b>Celsius</b> is the name of the astronomer whose scale we use, so it keeps a capital <b>C</b>. Written °C, and a number without it is not a finished measurement.",
     "apply": [
      {
       "id": "lab2_dc_desc",
       "type": "desc",
       "q": "Which unit is used for temperature and written °C?",
       "a": "Degrees Celsius",
       "opts": [
        "Degrees Celsius",
        "Seconds",
        "Millilitres",
        "Grams"
       ],
       "explain": "Seconds measure time, millilitres volume, grams mass."
      },
      {
       "id": "lab2_dc_scn",
       "type": "scenario",
       "q": "You write 63 in your results table and are told the measurement is not finished. What is missing?",
       "a": "The unit, °C",
       "opts": [
        "The unit, °C",
        "The title",
        "The time",
        "Nothing — 63 is complete"
       ],
       "explain": "63 on its own could be anything. Temperature is written in degrees Celsius: 63 °C."
      }
     ]
    },
    {
     "w": "time interval",
     "meaning": "an equal amount of time between one measurement and the next.",
     "example": "We read the thermometer every 30 seconds, so our time interval was 30 seconds.",
     "parts": [
      {
       "surface": "time",
       "type": "root",
       "meaning": "time",
       "tr": {
        "zh-Hans": "时间",
        "zh-Hant": "時間",
        "am": "ጊዜ",
        "ar": "وقت",
        "es": "tiempo",
        "fa": "زمان",
        "fr": "temps",
        "hi": "समय",
        "ja": "時間",
        "ko": "시간",
        "ml": "സമയം",
        "ps": "وخت",
        "ro": "timp",
        "ru": "время",
        "ta": "நேரம்",
        "tl": "oras",
        "ur": "وقت",
        "vi": "thời gian"
       }
      },
      {
       "surface": "inter",
       "type": "prefix",
       "meaning": "between",
       "tr": {
        "am": "በ…መካከል",
        "ar": "بين",
        "es": "entre",
        "fa": "میان",
        "fr": "entre",
        "hi": "बीच में",
        "ja": "間",
        "ko": "사이",
        "ml": "ഇടയിൽ",
        "ps": "ترمنځ",
        "ro": "între",
        "ru": "между",
        "ta": "இடையே",
        "tl": "pagitan",
        "ur": "درمیان",
        "vi": "giữa",
        "zh-Hans": "之间",
        "zh-Hant": "之間"
       }
      },
      {
       "surface": "val",
       "type": "root",
       "meaning": "wall/boundary",
       "tr": {
        "am": "ግድግዳ",
        "ar": "جدار",
        "es": "muro/límite",
        "fa": "دیوار",
        "fr": "mur",
        "hi": "दीवार",
        "ja": "壁",
        "ko": "벽",
        "ml": "മതിൽ",
        "ps": "دیوال",
        "ro": "zid",
        "ru": "стена",
        "ta": "சுவர்",
        "tl": "pader",
        "ur": "دیوار",
        "vi": "bức tường",
        "zh-Hans": "墙",
        "zh-Hant": "牆"
       }
      }
     ],
     "tr": {
      "zh-Hans": "时间间隔",
      "zh-Hant": "時間間隔",
      "ja": "時間間隔",
      "ko": "시간 간격",
      "vi": "khoảng thời gian",
      "ar": "الفاصل الزمني",
      "fa": "بازه زمانی",
      "ur": "وقت کا وقفہ",
      "ps": "د وخت وقفه",
      "am": "የጊዜ ክፍተት",
      "ml": "സമയ ഇടവേള",
      "ta": "கால இடைவெளி",
      "hi": "समय अंतराल",
      "tl": "agwat ng oras",
      "ro": "interval de timp",
      "fr": "intervalle de temps",
      "ru": "временной интервал",
      "es": "intervalo de tiempo"
     },
     "note": "<b>Time</b> plus <i>inter</i> (between) + <i>val</i> (wall): the space between two walls — here, the gap between one reading and the next. The intervals must be <b>equal</b>, or the shape of your graph is wrong.",
     "apply": [
      {
       "id": "lab2_ti_scn",
       "type": "scenario",
       "q": "Your group reads the thermometer at 0 s, 30 s, 60 s and 90 s. What is the time interval?",
       "a": "30 seconds",
       "opts": [
        "30 seconds",
        "90 seconds",
        "4 readings",
        "0 seconds"
       ],
       "explain": "The interval is the equal gap between one reading and the next: 30 seconds."
      },
      {
       "id": "lab2_ti_cloze",
       "type": "cloze",
       "before": "We took one reading every 30 seconds, so our",
       "after": "was 30 seconds.",
       "a": "time interval",
       "opts": [
        "time interval",
        "temperature",
        "trend",
        "anomaly"
       ],
       "explain": "<i>inter</i> (between) + <i>val</i>: the gap between readings."
      }
     ]
    },
    {
     "w": "data",
     "meaning": "information — usually numbers — collected during an experiment or investigation.",
     "example": "We wrote all our data in a results table with the units at the top.",
     "parts": [
      {
       "surface": "dat",
       "type": "root",
       "meaning": "given",
       "tr": {
        "am": "መረጃ",
        "ar": "بيانات",
        "es": "datos",
        "fa": "داده‌ها",
        "fr": "données",
        "hi": "आँकड़े",
        "ja": "データ",
        "ko": "자료",
        "ml": "വിവരങ്ങൾ",
        "ps": "معلومات",
        "ro": "date",
        "ru": "данные",
        "ta": "தரவு",
        "tl": "datos",
        "ur": "اعداد و شمار",
        "vi": "dữ liệu",
        "zh-Hans": "数据",
        "zh-Hant": "數據"
       }
      },
      {
       "surface": "a",
       "type": "suffix",
       "meaning": "plural marker",
       "tr": {
        "am": "የብዙ ቁጥር ምልክት",
        "ar": "علامة الجمع",
        "es": "marcador de plural",
        "fa": "نشانه جمع",
        "fr": "marqueur du pluriel",
        "hi": "बहुवचन चिह्न",
        "ja": "複数形マーカー",
        "ko": "복수형 표시",
        "ml": "ബഹുവചന അടയാളം",
        "ps": "د جمع نښه",
        "ro": "marcaj de plural",
        "ru": "маркер множественного числа",
        "ta": "பன்மை குறியீடு",
        "tl": "tanda ng maramihan",
        "ur": "جمع کی علامت",
        "vi": "dấu hiệu số nhiều",
        "zh-Hans": "复数标记",
        "zh-Hant": "複數標記"
       }
      }
     ],
     "tr": {
      "am": "ውሂብ",
      "ar": "بيانات",
      "es": "datos",
      "fa": "داده‌ها",
      "fr": "données",
      "hi": "आंकड़े",
      "ja": "データ",
      "ko": "데이터",
      "ml": "ഡാറ്റ",
      "ps": "ډاټا",
      "ro": "date",
      "ru": "данные",
      "ta": "தரவு",
      "tl": "datos",
      "ur": "ڈیٹا",
      "vi": "dữ liệu",
      "zh-Hans": "数据",
      "zh-Hant": "數據"
     },
     "note": "From Latin <i>datum</i>, a thing given: <i>dat</i> (given) + <i>-a</i> (the plural ending). So data is strictly plural — one reading is a <b>datum</b>. In this course it means the numbers you collected, before you have said anything about them.",
     "apply": [
      {
       "id": "lab2_data_desc",
       "type": "desc",
       "q": "Which word means the information, usually numbers, collected during an experiment?",
       "a": "Data",
       "opts": [
        "Data",
        "Trend",
        "Variable",
        "Uncertainty"
       ],
       "explain": "Data is what you collected. The pattern you see in it afterwards is the trend."
      },
      {
       "id": "lab2_data_cloze",
       "type": "cloze",
       "before": "The numbers we wrote in our results table are our",
       "after": ", and we used them to draw the graph.",
       "a": "data",
       "opts": [
        "data",
        "anomaly",
        "uncertainty",
        "trend"
       ],
       "explain": "Collected numbers = data. One number that does not fit would be an anomaly."
      }
     ]
    },
    {
     "w": "variable",
     "meaning": "a factor in an experiment that can change or be changed.",
     "example": "Time is the variable we changed and temperature is the variable we measured.",
     "parts": [
      {
       "surface": "vari",
       "type": "root",
       "meaning": "change",
       "tr": {
        "am": "ለውጥ",
        "ar": "يغير",
        "es": "cambio",
        "fa": "تغییر",
        "fr": "changement",
        "hi": "परिवर्तन",
        "ja": "変わる",
        "ko": "변화",
        "ml": "മാറ്റം",
        "ps": "بدلون",
        "ro": "varia",
        "ru": "изменять",
        "ta": "மாற்றம்",
        "tl": "pagbabago",
        "ur": "تبدیلی",
        "vi": "thay đổi",
        "zh-Hans": "变化",
        "zh-Hant": "變化"
       }
      },
      {
       "surface": "able",
       "type": "suffix",
       "meaning": "capable of",
       "tr": {
        "am": "ብቁ",
        "ar": "قابل",
        "es": "capaz de",
        "fa": "قابل",
        "fr": "capable",
        "hi": "सक्षम",
        "ja": "可能な",
        "ko": "가능한",
        "ml": "കഴിവുള്ള",
        "ps": "وړ",
        "ro": "capabil",
        "ru": "способный",
        "ta": "திறமையான",
        "tl": "kaya",
        "ur": "قابل",
        "vi": "có thể",
        "zh-Hans": "能够",
        "zh-Hant": "能夠"
       }
      }
     ],
     "tr": {
      "am": "ተለዋዋጭ",
      "ar": "متغير",
      "es": "variable",
      "fa": "متغیر",
      "fr": "variable",
      "hi": "चर",
      "ja": "変数",
      "ko": "변수",
      "ml": "ചരം",
      "ps": "متغیر",
      "ro": "variabilă",
      "ru": "переменная",
      "ta": "மாறி",
      "tl": "baryabol",
      "ur": "متغیر",
      "vi": "biến số",
      "zh-Hans": "变量",
      "zh-Hant": "變量"
     },
     "note": "<i>vari</i> (change) + <i>-able</i> (capable of): something capable of changing. The same <i>vari</i> is in <b>variety</b> and <b>various</b>. In a practical there are two you care about — the one you <b>change</b> and the one you <b>measure</b>.",
     "apply": [
      {
       "id": "lab2_var_desc",
       "type": "desc",
       "q": "Which word means a factor in an experiment that can change or be changed?",
       "a": "Variable",
       "opts": [
        "Variable",
        "Data",
        "Trend",
        "Time interval"
       ],
       "explain": "<i>vari</i> (change) + <i>-able</i> (capable of)."
      },
      {
       "id": "lab2_var_scn",
       "type": "scenario",
       "q": "In the heating-water practical you change the time and you measure the temperature. What are time and temperature?",
       "a": "Both are variables",
       "opts": [
        "Both are variables",
        "Both are units",
        "Both are trends",
        "Neither is a variable"
       ],
       "explain": "Any factor that changes in the experiment is a variable — the changed one and the measured one both count."
      }
     ]
    },
    {
     "w": "line graph",
     "meaning": "a graph that uses a line to show how something changes over time.",
     "example": "We drew a line graph of temperature against time.",
     "parts": [
      {
       "surface": "line",
       "type": "root",
       "meaning": "line",
       "tr": {
        "am": "መስመር/ቅደም ተከተል",
        "ar": "خط / تسلسل",
        "es": "línea/secuencia",
        "fa": "خط / دنباله",
        "fr": "ligne / séquence",
        "hi": "रेखा / क्रम",
        "ja": "線／順序",
        "ko": "선/순서",
        "ml": "വര / ക്രമം",
        "ps": "کرښه / ترتیب",
        "ro": "linie / secvență",
        "ru": "линия / последовательность",
        "ta": "கோடு / வரிசை",
        "tl": "linya / pagkakasunod-sunod",
        "ur": "لکیر / ترتیب",
        "vi": "đường / trình tự",
        "zh-Hans": "线／顺序",
        "zh-Hant": "線／順序"
       }
      },
      {
       "surface": "graph",
       "type": "root",
       "meaning": "write",
       "tr": {
        "fa": "نوشتن",
        "am": "መጻፍ",
        "ar": "كتابة",
        "es": "escribir",
        "fr": "écrire",
        "hi": "लिखना",
        "ja": "書く",
        "ko": "쓰다",
        "ml": "എഴുതുക",
        "ps": "لیکل",
        "ro": "a scrie",
        "ru": "писать",
        "ta": "எழுதுதல்",
        "tl": "sumulat",
        "ur": "لکھنا",
        "vi": "ghi chép",
        "zh-Hans": "写",
        "zh-Hant": "寫"
       }
      }
     ],
     "tr": {
      "zh-Hans": "折线图",
      "zh-Hant": "折線圖",
      "ja": "折れ線グラフ",
      "ko": "꺾은선 그래프",
      "vi": "biểu đồ đường",
      "ar": "رسم بياني خطي",
      "fa": "نمودار خطی",
      "ur": "لائن گراف",
      "ps": "کرښه ییز چارت",
      "am": "የመስመር ግራፍ",
      "ml": "രേഖാ ഗ്രാഫ്",
      "ta": "கோட்டு வரைபடம்",
      "hi": "रेखा आलेख",
      "tl": "linear na graph",
      "ro": "grafic liniar",
      "fr": "graphique linéaire",
      "ru": "линейный график",
      "es": "gráfico lineal"
     },
     "note": "<b>Line</b> plus <i>graph</i>, from Greek <i>graphein</i> (to write or draw) — the same <i>graph</i> as in <b>autograph</b> and <b>paragraph</b>. Check it with <b>TAILS</b>: Title, Axes, Intervals, Labels, Scale.",
     "apply": [
      {
       "id": "lab2_lg_desc",
       "type": "desc",
       "q": "Which graph uses a line to show how something changes over time?",
       "a": "A line graph",
       "opts": [
        "A line graph",
        "A bar chart",
        "A pie chart",
        "A results table"
       ],
       "explain": "A line joins the points so you can see the change."
      },
      {
       "id": "lab2_lg_scn",
       "type": "scenario",
       "q": "You have the temperature of the water every 30 seconds for five minutes. Which shows the change best?",
       "a": "A line graph",
       "opts": [
        "A line graph",
        "A pie chart",
        "A photograph",
        "A list of the numbers"
       ],
       "explain": "The readings run over time, so a line graph shows the change clearly."
      }
     ]
    },
    {
     "w": "horizontal axis",
     "meaning": "the flat, sideways line (x-axis) on a graph, often showing the variable that was changed.",
     "example": "Time goes on the horizontal axis, along the bottom of the graph.",
     "parts": [
      {
       "surface": "horizont",
       "type": "root",
       "meaning": "boundary/limit",
       "tr": {
        "zh-Hans": "边界/界限",
        "zh-Hant": "邊界/界限",
        "ja": "境界/限界",
        "ko": "경계/한계",
        "vi": "ranh giới",
        "ar": "حدود",
        "fa": "مرز/حد",
        "ur": "حد",
        "am": "ወሰን",
        "ml": "അതിർത്തി",
        "ta": "எல்லை",
        "tl": "hangganan",
        "ps": "پوله/حد",
        "ro": "graniță/limită",
        "ru": "граница/предел",
        "fr": "limite/frontière",
        "hi": "सीमा",
        "es": "límite/frontera"
       }
      },
      {
       "surface": "al",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "وابسته به",
        "am": "ተያያዥ",
        "ar": "متعلق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "may kaugnayan sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "zh-Hans": "横轴",
      "zh-Hant": "橫軸",
      "ja": "横軸",
      "ko": "가로축",
      "vi": "trục hoành",
      "ar": "المحور الأفقي",
      "fa": "محور افقی",
      "ur": "افقی محور",
      "ps": "افقي محور",
      "am": "አግድም ዘንግ",
      "ml": "തിരശ്ചീന അക്ഷം",
      "ta": "கிடைமட்ட அச்சு",
      "hi": "क्षैतिज अक्ष",
      "tl": "pahalang na aksis",
      "ro": "axa orizontală",
      "fr": "axe horizontal",
      "ru": "горизонтальная ось",
      "es": "eje horizontal"
     },
     "note": "<i>horizont</i> (boundary) + <i>-al</i> (relating to) — the horizon is the flat line where the land meets the sky, so horizontal means flat and sideways. It is also called the <b>x-axis</b>, and it usually carries the variable you <b>changed</b>.",
     "apply": [
      {
       "id": "lab2_hax_desc",
       "type": "desc",
       "q": "Which line on a graph runs flat and sideways?",
       "a": "The horizontal axis",
       "opts": [
        "The horizontal axis",
        "The vertical axis",
        "The trend line",
        "The anomaly"
       ],
       "explain": "Flat like the horizon. The vertical axis runs up and down."
      },
      {
       "id": "lab2_hax_scn",
       "type": "scenario",
       "q": "You are graphing temperature against time. Time is the variable you changed. Which axis does time go on?",
       "a": "The horizontal axis",
       "opts": [
        "The horizontal axis",
        "The vertical axis",
        "Either axis",
        "Neither — time is not a variable"
       ],
       "explain": "The changed variable goes along the bottom, on the horizontal (x) axis."
      }
     ]
    },
    {
     "w": "vertical axis",
     "meaning": "the up-and-down line (y-axis) on a graph, often showing the variable that was measured.",
     "example": "Temperature goes on the vertical axis, up the side of the graph.",
     "parts": [
      {
       "surface": "vert",
       "type": "root",
       "meaning": "turn",
       "tr": {
        "am": "መዞር",
        "ar": "دوران",
        "es": "girar",
        "fa": "چرخش",
        "fr": "tourner",
        "hi": "मुड़ना",
        "ja": "回転",
        "ko": "회전",
        "ml": "തിരിയുക",
        "ps": "ګرځېدل",
        "ro": "a întoarce",
        "ru": "поворот",
        "ta": "திரும்புதல்",
        "tl": "ikot",
        "ur": "مڑنا",
        "vi": "xoay",
        "zh-Hans": "转",
        "zh-Hant": "轉"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "مربوط به",
        "am": "ተያያዥ",
        "ar": "متعلّق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      },
      {
       "surface": "al",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "fa": "وابسته به",
        "am": "ተያያዥ",
        "ar": "متعلق بـ",
        "es": "relativo a",
        "fr": "relatif à",
        "hi": "संबंधी",
        "ja": "～の",
        "ko": "관련된",
        "ml": "ബന്ധപ്പെട്ട",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся к",
        "ta": "தொடர்பான",
        "tl": "may kaugnayan sa",
        "ur": "متعلق",
        "vi": "thuộc về",
        "zh-Hans": "……的",
        "zh-Hant": "……的"
       }
      }
     ],
     "tr": {
      "zh-Hans": "纵轴",
      "zh-Hant": "縱軸",
      "ja": "縦軸",
      "ko": "세로축",
      "vi": "trục tung",
      "ar": "المحور الرأسي",
      "fa": "محور عمودی",
      "ur": "عمودی محور",
      "ps": "عمودي محور",
      "am": "ቀጥ ያለ ዘንግ",
      "ml": "ലംബ അക്ഷം",
      "ta": "செங்குத்து அச்சு",
      "hi": "ऊर्ध्वाधर अक्ष",
      "tl": "patayong aksis",
      "ro": "axa verticală",
      "fr": "axe vertical",
      "ru": "вертикальная ось",
      "es": "eje vertical"
     },
     "note": "<i>vert</i> (turn) + <i>-ic</i> + <i>-al</i>: the same <i>vert</i> as in <b>convert</b> and <b>reverse</b>, and in <b>vertex</b>, the point a shape turns at. Vertical means straight up. It is the <b>y-axis</b>, and it usually carries the variable you <b>measured</b>.",
     "apply": [
      {
       "id": "lab2_vax_desc",
       "type": "desc",
       "q": "Which line on a graph runs up and down, and usually carries the measured variable?",
       "a": "The vertical axis",
       "opts": [
        "The vertical axis",
        "The horizontal axis",
        "The trend",
        "The time interval"
       ],
       "explain": "Vertical means straight up — the y-axis up the side."
      },
      {
       "id": "lab2_vax_scn",
       "type": "scenario",
       "q": "Same graph: temperature is the variable you measured. Which axis does temperature go on?",
       "a": "The vertical axis",
       "opts": [
        "The vertical axis",
        "The horizontal axis",
        "Either axis",
        "It goes in the title"
       ],
       "explain": "The measured variable goes up the side, on the vertical (y) axis."
      }
     ]
    },
    {
     "w": "trend",
     "meaning": "the overall pattern shown by data, such as increasing, decreasing or staying the same.",
     "example": "The trend was clear: as time increased, the temperature increased.",
     "parts": [],
     "tr": {
      "am": "አዝማሚያ",
      "ar": "اتجاه",
      "es": "tendencia",
      "fa": "روند",
      "fr": "tendance",
      "hi": "प्रवृत्ति",
      "ja": "傾向",
      "ko": "추세",
      "ml": "പ്രവണത",
      "ps": "رجحان / تمایل",
      "ro": "tendință",
      "ru": "тенденция",
      "ta": "போக்கு",
      "tl": "kalakaran",
      "ur": "رجحان",
      "vi": "xu hướng",
      "zh-Hans": "趋势",
      "zh-Hant": "趨勢"
     },
     "note": "An old word meaning to turn or roll — a trend is which way your data turns. Say it as a sentence, not a word: <i>As the time increased, the temperature increased.</i> A trend describes <b>all</b> the data, so one odd point does not change it.",
     "apply": [
      {
       "id": "lab2_tr_desc",
       "type": "desc",
       "q": "Which word means the overall pattern shown by a set of data?",
       "a": "Trend",
       "opts": [
        "Trend",
        "Anomaly",
        "Data",
        "Uncertainty"
       ],
       "explain": "The trend is the pattern in all the readings. An anomaly is one reading that breaks it."
      },
      {
       "id": "lab2_tr_scn",
       "type": "scenario",
       "q": "Your graph line rises steadily from 20 °C to 80 °C. How do you state the trend?",
       "a": "As time increased, the temperature increased",
       "opts": [
        "As time increased, the temperature increased",
        "As time increased, the temperature decreased",
        "The temperature stayed the same",
        "There is no trend"
       ],
       "explain": "A rising line means the measured variable went up as the changed variable went up."
      }
     ]
    },
    {
     "w": "uncertainty",
     "meaning": "a limit on how exact a measurement or result can be.",
     "example": "The marks on the thermometer are 1 °C apart, so every reading has some uncertainty.",
     "parts": [
      {
       "surface": "un",
       "type": "prefix",
       "meaning": "not",
       "tr": {
        "am": "ያልሆነ",
        "ar": "غير",
        "es": "no",
        "fa": "نا / غیر",
        "fr": "non-",
        "hi": "अ-",
        "ja": "否定",
        "ko": "비-",
        "ml": "അല്ല",
        "ps": "نا",
        "ro": "ne-",
        "ru": "не-",
        "ta": "இல்லை",
        "tl": "hindi / di-",
        "ur": "نا / غیر",
        "vi": "không",
        "zh-Hans": "不",
        "zh-Hant": "不"
       }
      },
      {
       "surface": "certain",
       "type": "root",
       "meaning": "sure / fixed",
       "tr": {
        "am": "እርግጠኛ፣ የተወሰነ",
        "ar": "متأكد، ثابت",
        "es": "seguro / fijo",
        "fa": "مطمئن، ثابت",
        "fr": "sûr, fixe",
        "hi": "निश्चित, स्थिर",
        "ja": "確かな、一定の",
        "ko": "확실한, 고정된",
        "ml": "ഉറപ്പുള്ള, നിശ്ചിതമായ",
        "ps": "ډاډه، ثابت",
        "ro": "sigur, fix",
        "ru": "уверенный, определённый",
        "ta": "உறுதியான, நிலையான",
        "tl": "sigurado, tiyak",
        "ur": "یقینی، مقرر",
        "vi": "chắc chắn, cố định",
        "zh-Hans": "确定的、固定的",
        "zh-Hant": "確定的、固定的"
       }
      },
      {
       "surface": "ty",
       "type": "suffix",
       "meaning": "state of",
       "tr": {
        "am": "ሁኔታ",
        "ar": "حالة",
        "es": "estado de",
        "fa": "حالت",
        "fr": "état de",
        "hi": "अवस्था",
        "ja": "状態",
        "ko": "상태",
        "ml": "അവസ്ഥ",
        "ps": "حالت",
        "ro": "stare de",
        "ru": "состояние",
        "ta": "நிலை",
        "tl": "kalagayan",
        "ur": "حالت",
        "vi": "trạng thái",
        "zh-Hans": "状态",
        "zh-Hant": "狀態"
       }
      }
     ],
     "tr": {
      "zh-Hans": "不确定性",
      "zh-Hant": "不確定性",
      "ja": "不確かさ",
      "ko": "불확실성",
      "vi": "độ không chắc chắn",
      "ar": "عدم اليقين",
      "fa": "عدم قطعیت",
      "ur": "غیریقینیت",
      "ps": "نامعلومیت",
      "am": "እርግጠኛ አለመሆን",
      "ml": "അനിശ്ചിതത്വം",
      "ta": "நிச்சயமின்மை",
      "hi": "अनिश्चितता",
      "tl": "kawalang-katiyakan",
      "ro": "incertitudine",
      "fr": "incertitude",
      "ru": "неопределённость",
      "es": "incertidumbre"
     },
     "note": "<i>un-</i> (not) + <i>certain</i> (sure) + <i>-ty</i> (the state of): the state of not being sure. In science it is not a mistake — every instrument has a limit, so every reading has some uncertainty. Say it with the smallest mark on your scale.",
     "apply": [
      {
       "id": "lab2_unc_desc",
       "type": "desc",
       "q": "Which word means a limit on how exact a measurement can be?",
       "a": "Uncertainty",
       "opts": [
        "Uncertainty",
        "Anomaly",
        "Trend",
        "Variable"
       ],
       "explain": "<i>un-</i> + <i>certain</i> + <i>-ty</i>: the state of not being completely sure."
      },
      {
       "id": "lab2_unc_scn",
       "type": "scenario",
       "q": "The smallest marks on your thermometer are 1 °C apart, so you cannot read it perfectly. What does that give every reading?",
       "a": "Some uncertainty",
       "opts": [
        "Some uncertainty",
        "An anomaly",
        "A trend",
        "An extra variable"
       ],
       "explain": "Uncertainty is about the limits of the measuring. An anomaly is one single odd result."
      }
     ]
    },
    {
     "w": "anomaly",
     "meaning": "a result in a set of data that does not fit the general pattern.",
     "example": "One point sat far above the line, so we circled it as an anomaly.",
     "parts": [
      {
       "surface": "an",
       "type": "prefix",
       "meaning": "not/without",
       "tr": {
        "am": "ያለ",
        "ar": "بدون",
        "es": "sin",
        "fa": "بدون",
        "fr": "sans",
        "hi": "बिना",
        "ja": "無",
        "ko": "무",
        "ml": "ഇല്ലാതെ",
        "ps": "پرته",
        "ro": "fără",
        "ru": "без",
        "ta": "இல்லாமல்",
        "tl": "walang",
        "ur": "بغیر",
        "vi": "vô",
        "zh-Hans": "无",
        "zh-Hant": "無"
       }
      },
      {
       "surface": "omal",
       "type": "root",
       "meaning": "even/same",
       "tr": {
        "zh-Hans": "均匀/相同",
        "zh-Hant": "均勻/相同",
        "ja": "均一な/同じ",
        "ko": "균일한/같은",
        "vi": "đều/giống nhau",
        "ar": "متساوٍ",
        "fa": "یکنواخت",
        "ur": "یکساں",
        "am": "ተመሳሳይ",
        "ml": "സമമായ",
        "ta": "சமமான",
        "tl": "pantay",
        "ps": "یو شان",
        "ro": "egal/uniform",
        "ru": "равный/одинаковый",
        "fr": "égal/uniforme",
        "hi": "समान",
        "es": "igual/uniforme"
       }
      }
     ],
     "tr": {
      "zh-Hans": "异常值",
      "zh-Hant": "異常值",
      "ja": "異常値",
      "ko": "이상값",
      "vi": "giá trị bất thường",
      "ar": "قيمة شاذة",
      "fa": "مقدار نامتعارف",
      "ur": "غیرمعمولی نتیجہ",
      "ps": "غیر معمولي پایله",
      "am": "ያልተለመደ ውጤት",
      "ml": "അസാധാരണ ഫലം",
      "ta": "விதிவிலக்கு முடிவு",
      "hi": "असामान्य परिणाम",
      "tl": "hindi pangkaraniwang resulta",
      "ro": "anomalie",
      "fr": "anomalie",
      "ru": "аномалия",
      "es": "anomalía"
     },
     "note": "<i>an-</i> (not) + <i>omal</i> (even, the same): not the same as the rest — the odd one out. The same <i>an-</i> is in <b>anonymous</b> (no name). Circle an anomaly on the graph, but do not rub it out: you report it and say why it may have happened.",
     "apply": [
      {
       "id": "lab2_an_scn",
       "type": "scenario",
       "q": "Your readings are 20, 30, 40, 95, 60, 70 °C. Which one is the anomaly?",
       "a": "95 °C",
       "opts": [
        "95 °C",
        "20 °C",
        "70 °C",
        "There is no anomaly"
       ],
       "explain": "The others climb by about 10 each time, so 95 should have been about 50. It does not fit the pattern."
      },
      {
       "id": "lab2_an_desc",
       "type": "desc",
       "q": "<i>an-</i> means not and <i>omal</i> means the same, so an anomaly is a result that…",
       "a": "Does not fit the pattern",
       "opts": [
        "Does not fit the pattern",
        "Was measured twice",
        "Has no unit",
        "Is the largest number"
       ],
       "explain": "Not the same as the others — the odd one out. The largest number often fits the pattern perfectly."
      },
      {
       "id": "lab2_an_cloze",
       "type": "cloze",
       "before": "Every point sits on the line except one, which is far above it, so that point is an",
       "after": "and we circled it.",
       "a": "anomaly",
       "opts": [
        "anomaly",
        "uncertainty",
        "trend",
        "variable"
       ],
       "explain": "One point off the pattern is an anomaly; the pattern itself is the trend."
      }
     ]
    }
   ]
  },
  {
   "id": "lab3",
   "area": "lab",
   "title": "Atoms & bonding",
   "focus": "What everything is made of, and the words for how the particles hold together.",
   "words": [
    {
     "w": "atom",
     "meaning": "a very small particle that makes up matter.",
     "example": "Everything on the bench — the glass, the water, the air — is made of atoms.",
     "parts": [
      {
       "surface": "a",
       "type": "prefix",
       "meaning": "not/without",
       "tr": {
        "am": "ያለ / አይ",
        "ar": "بدون / لا",
        "es": "no/sin",
        "fa": "بدون / نه",
        "fr": "sans / non",
        "hi": "बिना / अ",
        "ja": "ない",
        "ko": "없음 / 아님",
        "ml": "ഇല്ലാതെ / അല്ല",
        "ps": "پرته / نه",
        "ro": "fără / non",
        "ru": "без / не",
        "ta": "இல்லாமல் / அல்ல",
        "tl": "walang / hindi",
        "ur": "بغیر / نہ",
        "vi": "không",
        "zh-Hans": "无",
        "zh-Hant": "無"
       }
      },
      {
       "surface": "tom",
       "type": "root",
       "meaning": "cut",
       "tr": {
        "zh-Hans": "切/切",
        "zh-Hant": "切/切",
        "am": "መቁረጥ",
        "ar": "يقطع",
        "es": "cortar",
        "fa": "بریدن",
        "fr": "couper",
        "hi": "काटना",
        "ja": "切る",
        "ko": "자르다",
        "ml": "മുറിക്കുക",
        "ps": "پرېکول",
        "ro": "a tăia",
        "ru": "резать",
        "ta": "வெட்டுதல்",
        "tl": "gupitin",
        "ur": "کاٹنا",
        "vi": "cắt"
       }
      }
     ],
     "tr": {
      "am": "አቶም",
      "ar": "ذرة",
      "es": "átomo",
      "fa": "اتم",
      "fr": "atome",
      "hi": "परमाणु",
      "ja": "原子",
      "ko": "원자",
      "ml": "അണു",
      "ps": "اتوم",
      "ro": "atom",
      "ru": "атом",
      "ta": "அணு",
      "tl": "atomo",
      "ur": "ایٹم",
      "vi": "nguyên tử",
      "zh-Hans": "原子",
      "zh-Hant": "原子"
     },
     "note": "<i>a-</i> (not) + <i>tom</i> (cut): the thing that cannot be cut. The same <i>tom</i> is in <b>anatomy</b> (cutting a body up). The Greeks were wrong — we now know an atom has a nucleus and electrons inside it — but the name stuck.",
     "apply": [
      {
       "id": "lab3_atom_desc",
       "type": "desc",
       "q": "Which word names the very small particle that all matter is made of?",
       "a": "Atom",
       "opts": [
        "Atom",
        "Element",
        "Compound",
        "Lattice"
       ],
       "explain": "An atom is the particle. An element is a substance made of one kind of atom."
      },
      {
       "id": "lab3_atom_part",
       "type": "desc",
       "q": "<i>a-</i> means not and <i>tom</i> means cut, so the name atom first meant…",
       "a": "It cannot be cut up",
       "opts": [
        "It cannot be cut up",
        "It is very heavy",
        "It is made of metal",
        "It is full of water"
       ],
       "explain": "Not-cuttable. The Greeks thought it was the smallest possible piece of matter."
      },
      {
       "id": "lab3_atom_cloze",
       "type": "cloze",
       "before": "Matter is built from very small particles called",
       "after": ", and each one has a nucleus at its centre.",
       "a": "atoms",
       "opts": [
        "atoms",
        "bonds",
        "lattices",
        "ions"
       ],
       "explain": "Atoms are the particles; bonds are what hold them together."
      }
     ]
    },
    {
     "w": "nucleus",
     "meaning": "the centre of an atom, containing protons and neutrons.",
     "example": "The protons and neutrons are packed together in the nucleus.",
     "parts": [
      {
       "surface": "nucle",
       "type": "root",
       "meaning": "nucleus",
       "tr": {
        "fa": "هسته",
        "ja": "核",
        "zh-Hans": "核心 / 核心",
        "zh-Hant": "核心 / 核心",
        "tl": "sentro",
        "ur": "مرکز",
        "am": "ኒውክሊየስ",
        "ar": "نواة",
        "es": "núcleo",
        "fr": "noyau",
        "hi": "नाभिक",
        "ko": "핵",
        "ml": "ന്യൂക്ലിയസ്",
        "ps": "هسته",
        "ro": "nucleu",
        "ru": "ядро",
        "ta": "கரு",
        "vi": "hạt nhân"
       }
      },
      {
       "surface": "us",
       "type": "suffix",
       "meaning": "structure",
       "tr": {
        "fa": "پسوند اسمی",
        "ja": "構造",
        "zh-Hans": "名词词尾 / 名詞詞尾",
        "zh-Hant": "名詞詞尾 / 名詞詞尾",
        "tl": "pangngalan",
        "ur": "اسم کا لاحقہ",
        "am": "መዋቅር",
        "ar": "بنية",
        "es": "estructura",
        "fr": "structure",
        "hi": "संरचना",
        "ko": "구조",
        "ml": "ഘടന",
        "ps": "جوړښت",
        "ro": "structură",
        "ru": "структура",
        "ta": "அமைப்பு",
        "vi": "cấu trúc"
       }
      }
     ],
     "tr": {
      "am": "ኒውክሊየስ",
      "ar": "نواة",
      "es": "núcleo atómico",
      "fa": "هسته",
      "fr": "noyau",
      "hi": "नाभिक",
      "ja": "原子核",
      "ko": "원자핵",
      "ml": "അണുകേന്ദ്രം",
      "ps": "نیوکلیوس",
      "ro": "nucleu",
      "ru": "ядро",
      "ta": "அணுக்கரு",
      "tl": "nucleus",
      "ur": "مرکزہ",
      "vi": "hạt nhân",
      "zh-Hans": "原子核",
      "zh-Hant": "原子核"
     },
     "note": "From Latin <i>nucula</i>, a little nut: <i>nucle</i> (nucleus, kernel) + <i>-us</i>. It is the hard centre — the same word is used for the centre of a cell in biology, and gives us <b>nuclear</b>. Plural: <b>nuclei</b>.",
     "apply": [
      {
       "id": "lab3_nuc_desc",
       "type": "desc",
       "q": "Which part of an atom is at the centre and holds the protons and neutrons?",
       "a": "The nucleus",
       "opts": [
        "The nucleus",
        "The electron",
        "The bond",
        "The lattice"
       ],
       "explain": "Nucleus = the kernel at the centre. Electrons move around outside it."
      },
      {
       "id": "lab3_nuc_scn",
       "type": "scenario",
       "q": "An atom has 6 protons and 6 neutrons. Where are all twelve of those particles?",
       "a": "In the nucleus",
       "opts": [
        "In the nucleus",
        "Moving around the outside",
        "Half in each place",
        "In the bonds"
       ],
       "explain": "Protons and neutrons both sit in the nucleus. Only electrons move around it."
      }
     ]
    },
    {
     "w": "proton",
     "meaning": "a positively charged particle in the nucleus of an atom.",
     "example": "A carbon atom has six protons in its nucleus.",
     "parts": [
      {
       "surface": "prot",
       "type": "root",
       "meaning": "first",
       "tr": {
        "vi": "đầu tiên",
        "zh-Hans": "第一",
        "ja": "最初",
        "zh-Hant": "第一",
        "am": "መጀመሪያ",
        "ar": "أول",
        "es": "primero",
        "fa": "اول",
        "fr": "premier",
        "hi": "पहला",
        "ko": "첫 번째",
        "ml": "ആദ്യത്തെ",
        "ps": "لومړی",
        "ro": "primul",
        "ru": "первый",
        "ta": "முதல்",
        "tl": "una",
        "ur": "پہلا"
       }
      },
      {
       "surface": "on",
       "type": "suffix",
       "meaning": "particle",
       "tr": {
        "vi": "hạt",
        "zh-Hans": "粒子",
        "ja": "粒子",
        "zh-Hant": "粒子",
        "am": "ቅንጣት",
        "ar": "جسيم",
        "es": "partícula",
        "fa": "ذره",
        "fr": "particule",
        "hi": "कण",
        "ko": "입자",
        "ml": "കണിക",
        "ps": "ذره",
        "ro": "particulă",
        "ru": "частица",
        "ta": "துகள்",
        "tl": "partikulo",
        "ur": "ذرہ"
       }
      }
     ],
     "tr": {
      "am": "ፕሮቶን",
      "ar": "بروتون",
      "es": "protón",
      "fa": "پروتون",
      "fr": "proton",
      "hi": "प्रोटॉन",
      "ja": "陽子",
      "ko": "양성자",
      "ml": "പ്രോട്ടോൺ",
      "ps": "پروتون",
      "ro": "proton",
      "ru": "протон",
      "ta": "புரோட்டான்",
      "tl": "proton",
      "ur": "پروٹون",
      "vi": "proton",
      "zh-Hans": "质子",
      "zh-Hant": "質子"
     },
     "note": "<i>prot</i> (first) + <i>-on</i> (particle): the first particle. The same <i>prot</i> is in <b>prototype</b> (the first model). Its charge is <b>positive</b>, and the number of protons is what decides which element an atom is.",
     "apply": [
      {
       "id": "lab3_pro_desc",
       "type": "desc",
       "q": "Which particle sits in the nucleus and carries a positive charge?",
       "a": "Proton",
       "opts": [
        "Proton",
        "Neutron",
        "Electron",
        "Ion"
       ],
       "explain": "Positive and in the nucleus: proton. The neutron is also in the nucleus but has no charge."
      },
      {
       "id": "lab3_pro_scn",
       "type": "scenario",
       "q": "A neutral atom has 8 electrons. The positive and negative charges must cancel exactly. How many protons does it have?",
       "a": "8",
       "opts": [
        "8",
        "0",
        "4",
        "16"
       ],
       "explain": "Each proton is +1 and each electron is −1. To cancel 8 negatives you need 8 positives."
      }
     ]
    },
    {
     "w": "neutron",
     "meaning": "a neutral particle (no charge) in the nucleus of an atom.",
     "example": "The neutron has no charge, so it does not pull on the electrons.",
     "parts": [
      {
       "surface": "neutr",
       "type": "root",
       "meaning": "neutral",
       "tr": {
        "vi": "trung hòa",
        "zh-Hans": "中性",
        "ja": "中性",
        "zh-Hant": "中性",
        "am": "ገለልተኛ",
        "ar": "محايد",
        "es": "neutro",
        "fa": "خنثی",
        "fr": "neutre",
        "hi": "उदासीन",
        "ko": "중성",
        "ml": "നിഷ്പക്ഷം",
        "ps": "بې پرې",
        "ro": "neutru",
        "ru": "нейтральный",
        "ta": "நடுநிலை",
        "tl": "neutral",
        "ur": "غیر جانبدار"
       }
      },
      {
       "surface": "on",
       "type": "suffix",
       "meaning": "particle",
       "tr": {
        "vi": "hạt",
        "zh-Hans": "粒子",
        "ja": "粒子",
        "zh-Hant": "粒子",
        "am": "ቅንጣት",
        "ar": "جسيم",
        "es": "partícula",
        "fa": "ذره",
        "fr": "particule",
        "hi": "कण",
        "ko": "입자",
        "ml": "കണിക",
        "ps": "ذره",
        "ro": "particulă",
        "ru": "частица",
        "ta": "துகள்",
        "tl": "partikulo",
        "ur": "ذرہ"
       }
      }
     ],
     "tr": {
      "am": "ኒውትሮን",
      "ar": "نيوترون",
      "es": "neutrón",
      "fa": "نوترون",
      "fr": "neutron",
      "hi": "न्यूट्रॉन",
      "ja": "中性子",
      "ko": "중성자",
      "ml": "ന്യൂട്രോൺ",
      "ps": "نیوترون",
      "ro": "neutron",
      "ru": "нейтрон",
      "ta": "நியூட்ரான்",
      "tl": "neutron",
      "ur": "نیوٹران",
      "vi": "neutron",
      "zh-Hans": "中子",
      "zh-Hant": "中子"
     },
     "note": "<i>neutr</i> (neutral) + <i>-on</i> (particle): the neutral particle. The same <i>neutr</i> is in <b>neutral</b> on the pH scale. It sits in the nucleus beside the protons and carries <b>no charge at all</b> — not positive, not negative.",
     "apply": [
      {
       "id": "lab3_neu_desc",
       "type": "desc",
       "q": "Which particle is in the nucleus and has no charge?",
       "a": "Neutron",
       "opts": [
        "Neutron",
        "Proton",
        "Electron",
        "Ion"
       ],
       "explain": "<i>neutr</i> means neutral: no charge. The proton beside it is positive."
      },
      {
       "id": "lab3_neu_cloze",
       "type": "cloze",
       "before": "Of the three particles in the simple model, the",
       "after": "sits in the nucleus next to the protons, but it carries no charge at all.",
       "a": "neutron",
       "opts": [
        "neutron",
        "proton",
        "electron",
        "molecule"
       ],
       "explain": "In the nucleus and neutral — that is the neutron."
      }
     ]
    },
    {
     "w": "electron",
     "meaning": "a negatively charged particle that moves around the nucleus of an atom.",
     "example": "An atom becomes a positive ion when it loses an electron.",
     "parts": [
      {
       "surface": "electr",
       "type": "root",
       "meaning": "electricity",
       "tr": {
        "vi": "điện",
        "zh-Hans": "电",
        "ja": "電気",
        "zh-Hant": "電",
        "am": "ኤሌክትሪክ",
        "ar": "كهرباء",
        "es": "electricidad",
        "fa": "الکتریسیته",
        "fr": "électricité",
        "hi": "बिजली",
        "ko": "전기",
        "ml": "വൈദ്യുതി",
        "ps": "بریښنا",
        "ro": "electricitate",
        "ru": "электричество",
        "ta": "மின்சாரம்",
        "tl": "kuryente",
        "ur": "بجلی"
       }
      },
      {
       "surface": "on",
       "type": "suffix",
       "meaning": "particle",
       "tr": {
        "vi": "hạt",
        "zh-Hans": "粒子",
        "ja": "粒子",
        "zh-Hant": "粒子",
        "am": "ቅንጣት",
        "ar": "جسيم",
        "es": "partícula",
        "fa": "ذره",
        "fr": "particule",
        "hi": "कण",
        "ko": "입자",
        "ml": "കണിക",
        "ps": "ذره",
        "ro": "particulă",
        "ru": "частица",
        "ta": "துகள்",
        "tl": "partikulo",
        "ur": "ذرہ"
       }
      }
     ],
     "tr": {
      "am": "ኤሌክትሮን",
      "ar": "إلكترون",
      "es": "electrón",
      "fa": "الکترون",
      "fr": "électron",
      "hi": "इलेक्ट्रॉन",
      "ja": "電子",
      "ko": "전자",
      "ml": "ഇലക്ട്രോൺ",
      "ps": "الکترون",
      "ro": "electron",
      "ru": "электрон",
      "ta": "எலக்ட்ரான்",
      "tl": "elektron",
      "ur": "الیکٹران",
      "vi": "electron",
      "zh-Hans": "电子",
      "zh-Hant": "電子"
     },
     "note": "<i>electr</i> (electricity) + <i>-on</i> (particle), from Greek <i>elektron</i>, amber — rubbed amber picks up dust, the first electricity anyone noticed. Electrons are <b>negative</b> and move <b>around</b> the nucleus, which is why atoms can lose or gain them.",
     "apply": [
      {
       "id": "lab3_ele_desc",
       "type": "desc",
       "q": "Which particle is negatively charged and moves around the nucleus?",
       "a": "Electron",
       "opts": [
        "Electron",
        "Proton",
        "Neutron",
        "Nucleus"
       ],
       "explain": "Negative and outside the nucleus: the electron."
      },
      {
       "id": "lab3_ele_scn",
       "type": "scenario",
       "q": "A neutral atom loses one electron. What happens to its charge?",
       "a": "It becomes positive",
       "opts": [
        "It becomes positive",
        "It becomes negative",
        "It stays neutral",
        "It becomes a neutron"
       ],
       "explain": "Taking away a negative particle leaves one more positive than negative, so the atom is now a positive ion."
      }
     ]
    },
    {
     "w": "element",
     "meaning": "a pure substance made from only one type of atom.",
     "example": "Copper is an element, because it is made of copper atoms only.",
     "parts": [],
     "tr": {
      "am": "ንጥረ ነገር",
      "ar": "عنصر",
      "es": "elemento",
      "fa": "عنصر",
      "fr": "élément",
      "hi": "तत्व",
      "ja": "元素",
      "ko": "원소",
      "ml": "മൂലകം",
      "ps": "عنصر",
      "ro": "element",
      "ru": "элемент",
      "ta": "தனிமம்",
      "tl": "elemento",
      "ur": "عنصر",
      "vi": "nguyên tố",
      "zh-Hans": "元素",
      "zh-Hant": "元素"
     },
     "note": "From Latin <i>elementum</i>, a first or basic part. An element is as simple as a substance gets: <b>one type of atom only</b>. Copper, oxygen and carbon are elements; water is not, because it has two types of atom in it.",
     "apply": [
      {
       "id": "lab3_el_desc",
       "type": "desc",
       "q": "Which word means a pure substance made from only one type of atom?",
       "a": "Element",
       "opts": [
        "Element",
        "Compound",
        "Molecule",
        "Ion"
       ],
       "explain": "One type of atom = element. Two or more types chemically joined = compound."
      },
      {
       "id": "lab3_el_scn",
       "type": "scenario",
       "q": "A copper wire is made of copper atoms and nothing else. What is copper?",
       "a": "An element",
       "opts": [
        "An element",
        "A compound",
        "A mixture",
        "An ion"
       ],
       "explain": "Only one type of atom, so it is an element."
      }
     ]
    },
    {
     "w": "molecule",
     "meaning": "two or more atoms joined together.",
     "example": "A water molecule is two hydrogen atoms joined to one oxygen atom.",
     "parts": [
      {
       "surface": "molec",
       "type": "root",
       "meaning": "small mass",
       "tr": {
        "fa": "جرم کوچک",
        "zh-Hans": "小质量",
        "vi": "khối nhỏ",
        "zh-Hant": "小質量",
        "am": "ትንሽ ክብደት",
        "ar": "كتلة صغيرة",
        "es": "masa pequeña",
        "fr": "petite masse",
        "hi": "छोटा द्रव्यमान",
        "ja": "小さな塊",
        "ko": "작은 덩어리",
        "ml": "ചെറിയ പിണ്ഡം",
        "ps": "کوچنی کتله",
        "ro": "masă mică",
        "ru": "малая масса",
        "ta": "சிறிய திணிவு",
        "tl": "maliit na masa",
        "ur": "چھوٹا کمیت"
       }
      },
      {
       "surface": "ule",
       "type": "suffix",
       "meaning": "small",
       "tr": {
        "fa": "کوچک",
        "zh-Hans": "小",
        "vi": "nhỏ",
        "zh-Hant": "小",
        "am": "ትንሽ",
        "ar": "صغير",
        "es": "pequeño",
        "fr": "petit",
        "hi": "छोटा",
        "ja": "小さい",
        "ko": "작은",
        "ml": "ചെറിയ",
        "ps": "کوچنی",
        "ro": "mic",
        "ru": "маленький",
        "ta": "சிறிய",
        "tl": "maliit",
        "ur": "چھوٹا"
       }
      }
     ],
     "tr": {
      "am": "ሞለኪውል",
      "ar": "جزيء",
      "es": "molécula",
      "fa": "مولکول",
      "fr": "molécule",
      "hi": "अणु",
      "ja": "分子",
      "ko": "분자",
      "ml": "തന്മാത്ര",
      "ps": "مالیکول",
      "ro": "moleculă",
      "ru": "молекула",
      "ta": "மூலக்கூறு",
      "tl": "molekula",
      "ur": "سالمہ / مالیکیول",
      "vi": "phân tử",
      "zh-Hans": "分子",
      "zh-Hant": "分子"
     },
     "note": "<i>molec</i> (small mass) + <i>-ule</i> (small): a little mass — the same <i>-ule</i> as in <b>capsule</b> and <b>granule</b>. A molecule is simply <b>atoms joined together</b>. They can be the same type (O₂) or different types (H₂O).",
     "apply": [
      {
       "id": "lab3_mol_desc",
       "type": "desc",
       "q": "Which word means two or more atoms joined together?",
       "a": "Molecule",
       "opts": [
        "Molecule",
        "Element",
        "Ion",
        "Lattice"
       ],
       "explain": "Atoms joined = molecule. An ion is a particle with a charge."
      },
      {
       "id": "lab3_mol_scn",
       "type": "scenario",
       "q": "O₂ is two oxygen atoms joined together. Is it an element, a molecule, or both?",
       "a": "Both — a molecule of an element",
       "opts": [
        "Both — a molecule of an element",
        "A compound only",
        "An ion only",
        "Neither"
       ],
       "explain": "Atoms joined makes it a molecule; only one type of atom makes it an element too."
      }
     ]
    },
    {
     "w": "compound",
     "meaning": "a substance made from two or more different elements chemically joined together.",
     "example": "Water is a compound of hydrogen and oxygen.",
     "parts": [
      {
       "surface": "com",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "vi": "cùng nhau",
        "zh-Hans": "共同",
        "ja": "共に",
        "zh-Hant": "共同",
        "am": "አብሮ",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ",
        "ko": "함께",
        "ml": "കൂടെ",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "sama-sama",
        "ur": "ساتھ",
        "other": "باهم"
       }
      },
      {
       "surface": "pound",
       "type": "root",
       "meaning": "put / place",
       "tr": {
        "vi": "đặt / ghép",
        "zh-Hans": "放置",
        "ja": "置く",
        "zh-Hant": "放置",
        "am": "ማስቀመጥ",
        "ar": "وضع",
        "es": "poner / colocar",
        "fa": "گذاشتن/قرار دادن",
        "fr": "mettre / placer",
        "hi": "रखना/स्थापित करना",
        "ko": "놓다/두다",
        "ml": "വയ്ക്കുക / സ്ഥാപിക്കുക",
        "ps": "ایښودل / ځای پرځای کول",
        "ro": "a pune / a plasa",
        "ru": "класть / помещать",
        "ta": "வைத்தல் / வைக்க",
        "tl": "ilagay / maglagay",
        "ur": "رکھنا/جگہ دینا",
        "other": "قرار دادن"
       }
      }
     ],
     "tr": {
      "am": "ውህድ",
      "ar": "مركّب",
      "es": "compuesto",
      "fa": "ترکیب",
      "fr": "composé",
      "hi": "यौगिक",
      "ja": "化合物",
      "ko": "화합물",
      "ml": "സംയുക്തം",
      "ps": "مرکب",
      "ro": "compus",
      "ru": "соединение",
      "ta": "சேர்மம்",
      "tl": "kompuwesto",
      "ur": "مرکب",
      "vi": "hợp chất",
      "zh-Hans": "化合物",
      "zh-Hant": "化合物"
     },
     "note": "<i>com-</i> (together) + <i>pound</i> (put, place): put together. The same idea is in <b>component</b>. A compound is not a mixture — the different elements are <b>chemically joined</b>, so you cannot separate them by stirring or filtering.",
     "apply": [
      {
       "id": "lab3_cmp_desc",
       "type": "desc",
       "q": "Which word means a substance made from two or more different elements chemically joined?",
       "a": "Compound",
       "opts": [
        "Compound",
        "Element",
        "Molecule",
        "Lattice"
       ],
       "explain": "Different elements, chemically joined. An element has only one type of atom."
      },
      {
       "id": "lab3_cmp_scn",
       "type": "scenario",
       "q": "Water (H₂O) has hydrogen atoms and oxygen atoms chemically joined. What is water?",
       "a": "A compound",
       "opts": [
        "A compound",
        "An element",
        "A mixture",
        "An ion"
       ],
       "explain": "Two different elements joined chemically, so it is a compound."
      },
      {
       "id": "lab3_cmp_cloze",
       "type": "cloze",
       "before": "<i>com-</i> means together and <i>pound</i> means put, so a",
       "after": "is two or more different elements put together chemically.",
       "a": "compound",
       "opts": [
        "compound",
        "element",
        "electron",
        "lattice"
       ],
       "explain": "Put together — and chemically joined, which is what makes it a compound and not a mixture."
      }
     ]
    },
    {
     "w": "bond",
     "meaning": "a force that holds atoms or ions together.",
     "example": "A bond holds each hydrogen atom to the oxygen atom in a water molecule.",
     "parts": [],
     "tr": {
      "zh-Hans": "化学键",
      "zh-Hant": "化學鍵",
      "ja": "結合（化学結合）",
      "ko": "결합(화학 결합)",
      "vi": "liên kết (hóa học)",
      "ar": "رابطة (كيميائية)",
      "fa": "پیوند (شیمیایی)",
      "ur": "بندھن (کیمیائی بانڈ)",
      "am": "ትስስር (ኬሚካላዊ ትስስር)",
      "ml": "ബന്ധനം (രാസബന്ധനം)",
      "ta": "பிணைப்பு (வேதிப் பிணைப்பு)",
      "tl": "bigkis (chemical bond)",
      "ps": "تړاو (کیمیاوي تړاو)",
      "ro": "legătură (chimică)",
      "ru": "связь (химическая связь)",
      "fr": "liaison (chimique)",
      "hi": "बंध (रासायनिक बंध)",
      "es": "enlace (químico)"
     },
     "origin": "“Bond” is an old everyday word for a tie or a band — the same word as “band” — so it has no smaller word parts to cut.",
     "note": "<b>Bond</b> is an old everyday word for a tie or a band — it is in fact the same word as <b>band</b> — so there are no smaller pieces to cut it into. In chemistry it is the <b>force</b> that holds particles together, not a thing you could pick up.",
     "apply": [
      {
       "id": "lab3_bond_desc",
       "type": "desc",
       "q": "Which word means the force that holds atoms or ions together?",
       "a": "Bond",
       "opts": [
        "Bond",
        "Lattice",
        "Ion",
        "Nucleus"
       ],
       "explain": "A bond is the holding force. A lattice is the repeating pattern it can build."
      },
      {
       "id": "lab3_bond_cloze",
       "type": "cloze",
       "before": "In a water molecule, a",
       "after": "holds each hydrogen atom to the oxygen atom.",
       "a": "bond",
       "opts": [
        "bond",
        "lattice",
        "nucleus",
        "neutron"
       ],
       "explain": "What holds two atoms together is a bond."
      }
     ]
    },
    {
     "w": "covalent bond",
     "meaning": "a bond where two atoms share a pair of electrons.",
     "example": "In a hydrogen molecule (H₂), a covalent bond joins the two atoms.",
     "parts": [
      {
       "surface": "co",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "zh-Hans": "共同",
        "zh-Hant": "共同",
        "ja": "共に",
        "ko": "함께",
        "vi": "cùng",
        "ar": "معًا",
        "fa": "باهم",
        "ur": "اکٹھا",
        "am": "አብሮ",
        "ml": "ഒരുമിച്ച്",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ps": "يوځای",
        "ro": "împreună",
        "ru": "вместе",
        "fr": "ensemble",
        "hi": "साथ",
        "es": "juntos"
       }
      },
      {
       "surface": "val",
       "type": "root",
       "meaning": "strength / worth",
       "tr": {
        "zh-Hans": "价值 / 强度",
        "zh-Hant": "價值 / 強度",
        "ja": "価値 / 強さ",
        "ko": "힘・가치",
        "vi": "giá trị / độ mạnh",
        "ar": "قوة/قيمة",
        "fa": "قدرت/ارزش",
        "ur": "طاقت/قدر",
        "am": "ጥንካሬ/ዋጋ",
        "ml": "ശക്തി/മൂല്യം",
        "ta": "வலிமை/மதிப்பு",
        "tl": "lakas/halaga",
        "ps": "ځواک/ارزښت",
        "ro": "forță/valoare",
        "ru": "сила/ценность",
        "fr": "force/valeur",
        "hi": "शक्ति/मूल्य",
        "es": "fuerza/valor"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "having the quality of",
       "tr": {
        "zh-Hans": "具有…性质",
        "zh-Hant": "具有…性質",
        "ja": "性質を持つ",
        "ko": "가진",
        "vi": "có tính chất",
        "ar": "ذو",
        "fa": "دارای",
        "ur": "رکھنے والا",
        "am": "ያለው",
        "ml": "ഉള്ള",
        "ta": "உடைய",
        "tl": "may",
        "ps": "لرونکی",
        "ro": "având",
        "ru": "обладающий",
        "fr": "doté de",
        "hi": "युक्त",
        "es": "que tiene la cualidad de"
       }
      }
     ],
     "tr": {
      "zh-Hans": "共价键",
      "zh-Hant": "共價鍵",
      "ja": "共有結合",
      "ko": "공유 결합",
      "vi": "liên kết cộng hóa trị",
      "ar": "رابطة تساهمية",
      "fa": "پیوند کووالانسی (اشتراکی)",
      "ur": "اشتراکی بندھن",
      "am": "የጋራ ኤሌክትሮን ትስስር",
      "ml": "സഹസംയോജക ബന്ധനം",
      "ta": "சகப்பிணைப்பு",
      "tl": "covalent bond (magkasalong elektron)",
      "ps": "کوواليني تړاو",
      "ro": "legătură covalentă",
      "ru": "ковалентная связь",
      "fr": "liaison covalente",
      "hi": "सहसंयोजक बंध",
      "es": "enlace covalente"
     },
     "origin": "Only “covalent” can be cut up: co + val + ent, “having strength together”. “Bond” is an old everyday word for a tie.",
     "note": "Only <b>covalent</b> can be cut up: <i>co-</i> (together) + <i>val</i> (strength) + <i>-ent</i> — strength held together. Remember it by the <i>co-</i>: <b>co</b>valent means <b>co</b>-operating, and the two atoms <b>share</b> a pair of electrons rather than giving them away.",
     "apply": [
      {
       "id": "lab3_cov_desc",
       "type": "desc",
       "q": "In which bond do two atoms share a pair of electrons?",
       "a": "A covalent bond",
       "opts": [
        "A covalent bond",
        "An ionic bond",
        "Metallic bonding",
        "No bond at all"
       ],
       "explain": "<i>co-</i> means together: sharing. In an ionic bond an electron is transferred instead."
      },
      {
       "id": "lab3_cov_scn",
       "type": "scenario",
       "q": "Two hydrogen atoms join by sharing one pair of electrons between them. What kind of bond is that?",
       "a": "Covalent",
       "opts": [
        "Covalent",
        "Ionic",
        "Metallic",
        "It is not a bond"
       ],
       "explain": "Sharing electrons is what covalent means."
      }
     ]
    },
    {
     "w": "ionic bond",
     "meaning": "the attraction between a positive ion and a negative ion.",
     "example": "Table salt is held together by ionic bonds between sodium ions and chloride ions.",
     "parts": [
      {
       "surface": "ion",
       "type": "root",
       "meaning": "charged particle",
       "tr": {
        "zh-Hans": "离子",
        "zh-Hant": "離子",
        "ja": "イオン",
        "ko": "이온",
        "vi": "ion",
        "ar": "أيون",
        "fa": "یون",
        "ur": "آئن",
        "am": "አዮን",
        "ml": "അയോൺ",
        "ta": "அயனி",
        "tl": "ion",
        "ps": "آیون",
        "ro": "ion",
        "ru": "ион",
        "fr": "ion",
        "hi": "आयन",
        "es": "partícula cargada"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "zh-Hans": "～的",
        "zh-Hant": "～的",
        "ja": "～の",
        "ko": "관련된",
        "vi": "thuộc về",
        "ar": "متعلّق بـ",
        "fa": "مربوط به",
        "ur": "متعلق",
        "am": "ተያያዥ",
        "ml": "ബന്ധപ്പെട്ട",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "fr": "relatif à",
        "hi": "संबंधी",
        "es": "relativo a"
       }
      }
     ],
     "tr": {
      "zh-Hans": "离子键",
      "zh-Hant": "離子鍵",
      "ja": "イオン結合",
      "ko": "이온 결합",
      "vi": "liên kết ion",
      "ar": "رابطة أيونية",
      "fa": "پیوند یونی",
      "ur": "آیونی بندھن",
      "am": "የአዮን ትስስር",
      "ml": "അയോണിക ബന്ധനം",
      "ta": "அயனிப் பிணைப்பு",
      "tl": "ionic bond (bigkis ng magkasalungat na ion)",
      "ps": "یوني تړاو",
      "ro": "legătură ionică",
      "ru": "ионная связь",
      "fr": "liaison ionique",
      "hi": "आयनिक बंध",
      "es": "enlace iónico"
     },
     "origin": "Only “ionic” can be cut up: ion + ic. “Bond” is an old everyday word for a tie.",
     "note": "Only <b>ionic</b> can be cut up: <i>ion</i> (charged particle) + <i>-ic</i> (relating to). Ionic bonding starts with a <b>transfer</b>: one atom gives an electron away and becomes positive, the other takes it and becomes negative — and opposite charges pull together.",
     "apply": [
      {
       "id": "lab3_ion_b_desc",
       "type": "desc",
       "q": "Which bond is the attraction between a positive ion and a negative ion?",
       "a": "An ionic bond",
       "opts": [
        "An ionic bond",
        "A covalent bond",
        "Metallic bonding",
        "A lattice"
       ],
       "explain": "Ions pulling on each other. A covalent bond shares electrons instead."
      },
      {
       "id": "lab3_ion_b_scn",
       "type": "scenario",
       "q": "A sodium atom gives one electron to a chlorine atom. One is now positive, the other negative, and they pull together. What holds them?",
       "a": "An ionic bond",
       "opts": [
        "An ionic bond",
        "A covalent bond",
        "Metallic bonding",
        "Nothing holds them"
       ],
       "explain": "The electron was transferred, not shared, so the two ions attract each other: an ionic bond."
      }
     ]
    },
    {
     "w": "metallic bonding",
     "meaning": "the bonding in a metal, where metal ions sit in a sea of electrons that can move.",
     "example": "Metallic bonding is the reason a copper wire can carry electricity.",
     "parts": [
      {
       "surface": "metal",
       "type": "root",
       "meaning": "metal",
       "tr": {
        "zh-Hans": "金属",
        "zh-Hant": "金屬",
        "ja": "金属",
        "ko": "금속",
        "vi": "kim loại",
        "ar": "معدن",
        "fa": "فلز",
        "ur": "دھات",
        "am": "ብረት",
        "ml": "ലോഹം",
        "ta": "உலோகம்",
        "tl": "metal",
        "ps": "فلز",
        "ro": "metal",
        "ru": "металл",
        "fr": "métal",
        "hi": "धातु",
        "es": "metal"
       }
      },
      {
       "surface": "ic",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "zh-Hans": "～的",
        "zh-Hant": "～的",
        "ja": "～の",
        "ko": "관련된",
        "vi": "thuộc về",
        "ar": "متعلّق بـ",
        "fa": "مربوط به",
        "ur": "متعلق",
        "am": "ተያያዥ",
        "ml": "ബന്ധപ്പെട്ട",
        "ta": "தொடர்பான",
        "tl": "kaugnay sa",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся",
        "fr": "relatif à",
        "hi": "संबंधी",
        "es": "relativo a"
       }
      }
     ],
     "tr": {
      "zh-Hans": "金属键",
      "zh-Hant": "金屬鍵",
      "ja": "金属結合",
      "ko": "금속 결합",
      "vi": "liên kết kim loại",
      "ar": "الرابطة الفلزية",
      "fa": "پیوند فلزی",
      "ur": "دھاتی بندھن",
      "am": "የብረት ትስስር",
      "ml": "ലോഹ ബന്ധനം",
      "ta": "உலோகப் பிணைப்பு",
      "tl": "metallic bonding (bigkis ng mga metal)",
      "ps": "فلزي تړاو",
      "ro": "legătură metalică",
      "ru": "металлическая связь",
      "fr": "liaison métallique",
      "hi": "धात्विक बंध",
      "es": "enlace metálico"
     },
     "origin": "Only “metallic” can be cut up: metal + ic. “Bonding” is the everyday word “bond” with -ing on the end.",
     "note": "Only <b>metallic</b> can be cut up: <i>metal</i> + <i>-ic</i> (relating to). The picture to hold on to is a <b>sea of electrons</b>: the metal ions sit still in rows while loose electrons move freely between them — which is exactly why metals conduct electricity.",
     "apply": [
      {
       "id": "lab3_met_desc",
       "type": "desc",
       "q": "Which bonding has metal ions sitting in a sea of electrons that can move?",
       "a": "Metallic bonding",
       "opts": [
        "Metallic bonding",
        "Covalent bonding",
        "Ionic bonding",
        "No bonding"
       ],
       "explain": "Only metallic bonding has electrons free to move through the whole solid."
      },
      {
       "id": "lab3_met_scn",
       "type": "scenario",
       "q": "A copper wire carries electricity from one end to the other. Which bonding explains that?",
       "a": "Metallic bonding",
       "opts": [
        "Metallic bonding",
        "Covalent bonding",
        "Ionic bonding",
        "Copper has no bonds"
       ],
       "explain": "The electrons in the sea can move, and moving charge is a current."
      }
     ]
    },
    {
     "w": "ion",
     "meaning": "an atom, or a group of atoms, that has an electric charge.",
     "example": "When an atom loses one electron, it becomes a positive ion.",
     "parts": [],
     "tr": {
      "zh-Hans": "离子",
      "zh-Hant": "離子",
      "ja": "イオン",
      "ko": "이온",
      "vi": "ion",
      "ar": "أيون",
      "fa": "یون",
      "ur": "آئن",
      "am": "አዮን",
      "ml": "അയോൺ",
      "ta": "அயனி",
      "tl": "ion",
      "ps": "آیون",
      "ro": "ion",
      "ru": "ион",
      "fr": "ion",
      "hi": "आयन",
      "es": "ion"
     },
     "origin": "From the Greek word ion, “going”: these particles were named in the 1830s because they travel through a liquid to the electrodes.",
     "note": "From Greek <i>ion</i>, going: these particles were named in the 1830s because they <b>travel</b> through a liquid towards the electrodes. An ion is just an atom (or group of atoms) that has lost or gained electrons, so it is no longer neutral.",
     "apply": [
      {
       "id": "lab3_ion_desc",
       "type": "desc",
       "q": "Which word means an atom, or group of atoms, that carries an electric charge?",
       "a": "Ion",
       "opts": [
        "Ion",
        "Atom",
        "Molecule",
        "Element"
       ],
       "explain": "A plain atom is neutral. Once it has a charge it is an ion."
      },
      {
       "id": "lab3_ion_scn",
       "type": "scenario",
       "q": "A neutral atom loses one electron. What is it now?",
       "a": "A positive ion",
       "opts": [
        "A positive ion",
        "A negative ion",
        "A neutron",
        "A molecule"
       ],
       "explain": "It has lost a negative particle, so the positive charge is no longer cancelled."
      }
     ]
    },
    {
     "w": "lattice",
     "meaning": "a repeating pattern of particles in a solid.",
     "example": "A salt crystal has a lattice of sodium ions and chloride ions.",
     "parts": [
      {
       "surface": "latt",
       "type": "root",
       "meaning": "frame/structure",
       "tr": {
        "zh-Hans": "框架/结构",
        "zh-Hant": "框架/結構",
        "ja": "枠組み/構造",
        "ko": "틀/구조",
        "vi": "khung/cấu trúc",
        "ar": "إطار/هيكل",
        "fa": "چارچوب/ساختار",
        "ur": "ڈھانچہ/ساخت",
        "am": "መዋቅር",
        "ml": "ചട്ടക്കൂട്/ഘടന",
        "ta": "கட்டமைப்பு",
        "tl": "balangkas/istruktura",
        "ps": "چوکاټ/جوړښت",
        "ro": "cadru/structură",
        "ru": "каркас/структура",
        "fr": "cadre/structure",
        "hi": "ढांचा/संरचना",
        "es": "marco/estructura"
       }
      },
      {
       "surface": "ice",
       "type": "suffix",
       "meaning": "(noun form)",
       "tr": {
        "am": "(ስም መልክ)",
        "ar": "(صيغة الاسم)",
        "es": "(forma sustantiva)",
        "fa": "(شکل اسمی)",
        "fr": "(forme nominale)",
        "hi": "(संज्ञा रूप)",
        "ja": "(名詞形)",
        "ko": "(명사형)",
        "ml": "(നാമരൂപം)",
        "ps": "(اسمي بڼه)",
        "ro": "(formă substantivală)",
        "ru": "(форма существительного)",
        "ta": "(பெயர்ச்சொல் வடிவம்)",
        "tl": "(anyong pangngalan)",
        "ur": "(اسمی شکل)",
        "vi": "(dạng danh từ)",
        "zh-Hans": "(名词形式)",
        "zh-Hant": "(名詞形式)"
       }
      }
     ],
     "tr": {
      "zh-Hans": "晶格（点阵）",
      "zh-Hant": "晶格（晶體格子）",
      "ja": "格子（結晶格子）",
      "ko": "격자(결정 격자)",
      "vi": "mạng tinh thể",
      "ar": "شبكة بلورية",
      "fa": "شبکه بلوری",
      "ur": "قلمی جالی",
      "am": "የክሪስታል ጥልፍ",
      "ml": "ക്രിസ്റ്റൽ ജാലിക",
      "ta": "படிக அணி",
      "tl": "latis (paulit-ulit na ayos)",
      "ps": "کرسټالي جالۍ",
      "ro": "rețea cristalină",
      "ru": "кристаллическая решётка",
      "fr": "réseau cristallin",
      "hi": "जालक (क्रिस्टल जालक)",
      "es": "red cristalina"
     },
     "origin": "From the Old French word latte, a thin strip of wood: a garden lattice is a criss-cross of strips, and a crystal lattice repeats in the same regular way.",
     "note": "From Old French <i>latte</i>, a thin strip of wood: a garden lattice is a criss-cross of strips repeating the same shape. A crystal lattice repeats in the same regular way — which is why salt crystals come out as neat little cubes.",
     "apply": [
      {
       "id": "lab3_lat_desc",
       "type": "desc",
       "q": "Which word means a repeating pattern of particles in a solid?",
       "a": "Lattice",
       "opts": [
        "Lattice",
        "Bond",
        "Molecule",
        "Element"
       ],
       "explain": "The repeating pattern is the lattice; each bond is one link inside it."
      },
      {
       "id": "lab3_lat_scn",
       "type": "scenario",
       "q": "Under a lens, a salt crystal shows the same cube pattern over and over. What is that arrangement called?",
       "a": "A lattice",
       "opts": [
        "A lattice",
        "A bond",
        "A molecule",
        "An element"
       ],
       "explain": "A regular repeating arrangement of particles in a solid is a lattice."
      }
     ]
    }
   ]
  },
  {
   "id": "lab4",
   "area": "lab",
   "title": "Mixtures & pH",
   "focus": "Dissolving, mixtures that are not solutions, and where a substance sits on the pH scale.",
   "words": [
    {
     "w": "mixture",
     "meaning": "two or more substances combined together without a new chemical being formed.",
     "example": "Sand stirred into salt is a mixture, because no new substance is made.",
     "parts": [
      {
       "surface": "mix",
       "type": "root",
       "meaning": "combine",
       "tr": {
        "fa": "مخلوط کردن",
        "zh-Hans": "混合",
        "vi": "trộn",
        "zh-Hant": "混合",
        "am": "መቀላቀል",
        "ar": "يخلط",
        "es": "mezclar",
        "fr": "mélanger",
        "hi": "मिलाना",
        "ja": "混ぜる",
        "ko": "섞다",
        "ml": "കലർത്തുക",
        "ps": "ګډول",
        "ro": "a amesteca",
        "ru": "смешивать",
        "ta": "கலக்கு",
        "tl": "haluin",
        "ur": "ملانا"
       }
      },
      {
       "surface": "ture",
       "type": "suffix",
       "meaning": "state / result",
       "tr": {
        "fa": "وضعیت",
        "zh-Hans": "结果",
        "vi": "trạng thái",
        "zh-Hant": "結果",
        "am": "ሁኔታ / ውጤት",
        "ar": "حالة / نتيجة",
        "es": "estado/resultado",
        "fr": "état / résultat",
        "hi": "स्थिति / परिणाम",
        "ja": "状態 / 結果",
        "ko": "상태 / 결과",
        "ml": "അവസ്ഥ / ഫലം",
        "ps": "حالت / پایله",
        "ro": "stare / rezultat",
        "ru": "состояние / результат",
        "ta": "நிலை / விளைவு",
        "tl": "kalagayan / resulta",
        "ur": "حالت / نتیجہ"
       }
      }
     ],
     "tr": {
      "am": "ድብልቅ",
      "ar": "خليط",
      "es": "mezcla",
      "fa": "مخلوط",
      "fr": "mélange",
      "hi": "मिश्रण",
      "ja": "混合物",
      "ko": "혼합물",
      "ml": "മിശ്രിതം",
      "ps": "مخلوط",
      "ro": "amestec",
      "ru": "смесь",
      "ta": "கலவை",
      "tl": "timpla",
      "ur": "آمیزہ",
      "vi": "hỗn hợp",
      "zh-Hans": "混合物",
      "zh-Hant": "混合物"
     },
     "note": "<i>mix</i> (combine) + <i>-ture</i> (the state or result) — the same <i>-ture</i> as in <b>texture</b> and <b>structure</b>. The test for a mixture is that <b>no new substance is made</b>: the parts keep their own properties, so you can often separate them again.",
     "apply": [
      {
       "id": "lab4_mix_desc",
       "type": "desc",
       "q": "Which word means two or more substances combined with no new chemical formed?",
       "a": "Mixture",
       "opts": [
        "Mixture",
        "Compound",
        "Solute",
        "Pure substance"
       ],
       "explain": "In a compound the elements are chemically joined. In a mixture nothing new is made."
      },
      {
       "id": "lab4_mix_scn",
       "type": "scenario",
       "q": "You stir sand and salt together in a beaker. No new substance is made and you could pick them apart again. What have you got?",
       "a": "A mixture",
       "opts": [
        "A mixture",
        "A compound",
        "A pure substance",
        "An element"
       ],
       "explain": "Combined but not chemically joined — that is a mixture."
      }
     ]
    },
    {
     "w": "solution",
     "meaning": "a mixture formed when one substance (the solute) dissolves completely into another (the solvent).",
     "example": "Salt water is a solution of salt in water.",
     "parts": [
      {
       "surface": "solut",
       "type": "root",
       "meaning": "loosen/solve",
       "tr": {
        "am": "መፍታት",
        "ar": "حل",
        "es": "resolver",
        "fa": "حل",
        "fr": "résoudre",
        "hi": "सुलझाना",
        "ja": "解く",
        "ko": "풀다",
        "ml": "പരിഹരിക്കുക",
        "ps": "حل کول",
        "ro": "a rezolva",
        "ru": "решать",
        "ta": "தீர்த்தல்",
        "tl": "lutasin",
        "ur": "حل کرنا",
        "vi": "giải",
        "zh-Hans": "解",
        "zh-Hant": "解"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "act/process",
       "tr": {
        "fa": "فرایند/عمل",
        "am": "ሂደት/ድርጊት",
        "ar": "عملية/فعل",
        "es": "proceso/acción",
        "fr": "processus/action",
        "hi": "प्रक्रिया/क्रिया",
        "ja": "過程/作用",
        "ko": "과정/작용",
        "ml": "പ്രക്രിയ/പ്രവർത്തനം",
        "ps": "بهیر/کړنه",
        "ro": "proces/acțiune",
        "ru": "процесс/действие",
        "ta": "செயல்முறை/செயல்",
        "tl": "proseso/kilos",
        "ur": "عمل/فعل",
        "vi": "quá trình/hành động",
        "zh-Hans": "过程/动作",
        "zh-Hant": "過程/動作"
       }
      }
     ],
     "tr": {
      "zh-Hans": "溶液",
      "zh-Hant": "溶液",
      "ja": "溶液",
      "ko": "용액",
      "vi": "dung dịch",
      "ar": "محلول",
      "fa": "محلول",
      "ur": "محلول",
      "ps": "محلول",
      "am": "መፍትሔ (ኬሚካላዊ)",
      "ml": "ലായനി",
      "ta": "கரைசல்",
      "hi": "विलयन",
      "tl": "solusyon",
      "ro": "soluție",
      "fr": "solution",
      "ru": "раствор",
      "es": "disolución"
     },
     "note": "<i>solut</i> (loosen, dissolve) + <i>-ion</i> (the act of). The everyday <b>solution to a problem</b> is the same word: something knotted gets loosened. A chemical solution looks <b>clear</b> — if you can still see bits floating, it is a suspension, not a solution.",
     "apply": [
      {
       "id": "lab4_soln_desc",
       "type": "desc",
       "q": "Which word means the mixture you get when a solute dissolves completely in a solvent?",
       "a": "Solution",
       "opts": [
        "Solution",
        "Suspension",
        "Solute",
        "Solvent"
       ],
       "explain": "The whole mixture is the solution. The solute and solvent are its two parts."
      },
      {
       "id": "lab4_soln_scn",
       "type": "scenario",
       "q": "You stir sugar into water until you cannot see any sugar at all and the liquid is clear. What is the liquid now?",
       "a": "A solution",
       "opts": [
        "A solution",
        "A suspension",
        "A pure substance",
        "An element"
       ],
       "explain": "The sugar has dissolved completely, so the clear liquid is a solution."
      }
     ]
    },
    {
     "w": "solute",
     "meaning": "the substance that dissolves in a solution.",
     "example": "In salt water, the salt is the solute.",
     "parts": [
      {
       "surface": "solu",
       "type": "root",
       "meaning": "loosen/solve",
       "tr": {
        "am": "መፍታት",
        "ar": "حل",
        "es": "resolver",
        "fa": "حل",
        "fr": "résoudre",
        "hi": "सुलझाना",
        "ja": "解く",
        "ko": "풀다",
        "ml": "പരിഹരിക്കുക",
        "ps": "حل کول",
        "ro": "a rezolva",
        "ru": "решать",
        "ta": "தீர்த்தல்",
        "tl": "lutasin",
        "ur": "حل کرنا",
        "vi": "giải",
        "zh-Hans": "解",
        "zh-Hant": "解"
       }
      },
      {
       "surface": "te",
       "type": "suffix",
       "meaning": "verb ending",
       "tr": {
        "ro": "sufix verb",
        "ar": "لاحقة فعل",
        "ps": "د فعل وروستاړی",
        "zh-Hans": "动词词尾",
        "zh-Hant": "動詞詞尾",
        "ja": "動詞語尾",
        "am": "የግስ መድረሻ",
        "es": "terminación verbal",
        "fa": "پایانه فعل",
        "fr": "terminaison verbale",
        "hi": "क्रिया प्रत्यय",
        "ko": "동사 어미",
        "ml": "ക്രിയാ പ്രത്യയം",
        "ru": "глагольное окончание",
        "ta": "வினை விகுதி",
        "tl": "hulapi ng pandiwa",
        "ur": "فعل کا لاحقہ",
        "vi": "hậu tố động từ"
       }
      }
     ],
     "tr": {
      "zh-Hans": "溶质",
      "zh-Hant": "溶質",
      "ja": "溶質",
      "ko": "용질",
      "vi": "chất tan",
      "ar": "المذاب",
      "fa": "حل‌شونده",
      "ur": "حل پذیر مادہ",
      "ps": "منحل شوونکې ماده",
      "am": "የሚሟሟ ንጥረ ነገር",
      "ml": "ലയിക്കുന്ന പദാർത്ഥം",
      "ta": "கரையும் பொருள்",
      "hi": "विलेय",
      "tl": "natutunaw na sangkap",
      "ro": "substanță dizolvată",
      "fr": "soluté",
      "ru": "растворённое вещество",
      "es": "soluto"
     },
     "note": "<i>solu</i> (loosen, dissolve) + <i>-te</i>. Keep the three <i>solu-</i> words apart by their endings: the <b>solute</b> is dissolved, the <b>solvent</b> does the dissolving, and the <b>solution</b> is what you end up with.",
     "apply": [
      {
       "id": "lab4_slte_desc",
       "type": "desc",
       "q": "In a solution, which part is the substance that dissolves?",
       "a": "The solute",
       "opts": [
        "The solute",
        "The solvent",
        "The suspension",
        "The mixture"
       ],
       "explain": "Solute = the one that disappears into the liquid."
      },
      {
       "id": "lab4_slte_scn",
       "type": "scenario",
       "q": "Salt water is made by dissolving salt in water. Which one is the solute?",
       "a": "The salt",
       "opts": [
        "The salt",
        "The water",
        "Both of them",
        "Neither of them"
       ],
       "explain": "The salt is what dissolves, so the salt is the solute."
      }
     ]
    },
    {
     "w": "solvent",
     "meaning": "the substance that dissolves the solute in a solution — often water.",
     "example": "In salt water, the water is the solvent.",
     "parts": [
      {
       "surface": "solv",
       "type": "root",
       "meaning": "loosen/solve",
       "tr": {
        "am": "መፍታት",
        "ar": "حل",
        "es": "resolver",
        "fa": "حل",
        "fr": "résoudre",
        "hi": "सुलझाना",
        "ja": "解く",
        "ko": "풀다",
        "ml": "പരിഹരിക്കുക",
        "ps": "حل کول",
        "ro": "a rezolva",
        "ru": "решать",
        "ta": "தீர்த்தல்",
        "tl": "lutasin",
        "ur": "حل کرنا",
        "vi": "giải",
        "zh-Hans": "解",
        "zh-Hant": "解"
       }
      },
      {
       "surface": "ent",
       "type": "suffix",
       "meaning": "having the quality of",
       "tr": {
        "vi": "trạng thái",
        "fa": "چیز",
        "am": "ባሕርይ",
        "ar": "صفة",
        "es": "cualidad",
        "fr": "qualité",
        "hi": "गुण",
        "ja": "性質",
        "ko": "성질",
        "ml": "ഗുണം",
        "ps": "ځانګړتیا",
        "ro": "calitate",
        "ru": "качество",
        "ta": "பண்பு",
        "tl": "katangian",
        "ur": "خاصیت",
        "zh-Hans": "性质",
        "zh-Hant": "性質",
        "other": "بودن"
       }
      }
     ],
     "tr": {
      "zh-Hans": "溶剂",
      "zh-Hant": "溶劑",
      "ja": "溶媒",
      "ko": "용매",
      "vi": "dung môi",
      "ar": "المذيب",
      "fa": "حلال",
      "ur": "حل کرنے والا مادہ",
      "ps": "منحلوونکې ماده",
      "am": "አሟሟቂ",
      "ml": "ലായകം",
      "ta": "கரைப்பான்",
      "hi": "विलायक",
      "tl": "tagatunaw",
      "ro": "solvent",
      "fr": "solvant",
      "ru": "растворитель",
      "es": "disolvente"
     },
     "note": "<i>solv</i> (loosen, dissolve) + <i>-ent</i>, the ending that marks the <b>doer</b> — as in <b>student</b> and <b>president</b>. So the solvent is the one <b>doing</b> the dissolving. In this course it is nearly always water.",
     "apply": [
      {
       "id": "lab4_slvt_desc",
       "type": "desc",
       "q": "In a solution, which part does the dissolving — usually water?",
       "a": "The solvent",
       "opts": [
        "The solvent",
        "The solute",
        "The suspension",
        "The concentration"
       ],
       "explain": "<i>-ent</i> marks the doer, so the solvent does the dissolving."
      },
      {
       "id": "lab4_slvt_scn",
       "type": "scenario",
       "q": "Salt water again. Which one is the solvent?",
       "a": "The water",
       "opts": [
        "The water",
        "The salt",
        "Both of them",
        "Neither of them"
       ],
       "explain": "The water does the dissolving, so it is the solvent."
      },
      {
       "id": "lab4_slvt_cloze",
       "type": "cloze",
       "before": "<i>-ent</i> marks the thing that does the job, so the",
       "after": "is the liquid that does the dissolving.",
       "a": "solvent",
       "opts": [
        "solvent",
        "solute",
        "solution",
        "solubility"
       ],
       "explain": "The <i>-ent</i> ending marks the doer, so the solvent is the one doing the dissolving."
      }
     ]
    },
    {
     "w": "solubility",
     "meaning": "how much of a solute can dissolve in a solvent at a given temperature.",
     "example": "At 20 °C the solubility of salt is about 36 g in 100 g of water.",
     "parts": [
      {
       "surface": "solu",
       "type": "root",
       "meaning": "dissolve",
       "tr": {
        "am": "መሟሟት",
        "ar": "ذوبان",
        "es": "disolver",
        "fa": "حل شدن",
        "fr": "dissoudre",
        "hi": "घुलना",
        "ja": "溶ける",
        "ko": "녹다",
        "ml": "അലിയുക",
        "ps": "منحل کیدل",
        "ro": "a dizolva",
        "ru": "растворять",
        "ta": "கரைத்தல்",
        "tl": "matunaw",
        "ur": "تحلیل ہونا",
        "vi": "hòa tan",
        "zh-Hans": "溶解",
        "zh-Hant": "溶解"
       }
      },
      {
       "surface": "bility",
       "type": "suffix",
       "meaning": "capable of",
       "tr": {
        "am": "ችሎታ ያለው",
        "ar": "قادر على",
        "es": "capaz de",
        "fa": "قابل / توانایی",
        "fr": "capable de",
        "hi": "करने में सक्षम",
        "ja": "〜できる能力",
        "ko": "~할 수 있는",
        "ml": "കഴിവുള്ള",
        "ps": "توان لرونکی",
        "ro": "capabil de",
        "ru": "способный к",
        "ta": "திறன் உடைய",
        "tl": "may kakayahang",
        "ur": "قابل / صلاحیت رکھنے والا",
        "vi": "có khả năng",
        "zh-Hans": "能够…的",
        "zh-Hant": "能夠…的"
       }
      }
     ],
     "tr": {
      "am": "መሟሟት ችሎታ",
      "ar": "قابلية الذوبان",
      "es": "solubilidad",
      "fa": "حلالیت",
      "fr": "solubilité",
      "hi": "घुलनशीलता",
      "ja": "溶解度",
      "ko": "용해도",
      "ml": "ലയനക്ഷമത",
      "ps": "منحلوالی",
      "ro": "solubilitate",
      "ru": "растворимость",
      "ta": "கரைதிறன்",
      "tl": "solubilidad",
      "ur": "حل پذیری",
      "vi": "độ tan",
      "zh-Hans": "溶解度",
      "zh-Hant": "溶解度"
     },
     "note": "<i>solu</i> (dissolve) + <i>-bility</i> (capable of). It is a <b>number with a temperature attached</b>: how much solute will dissolve in a set amount of solvent at that temperature. Warm the solvent and the solubility usually goes up.",
     "apply": [
      {
       "id": "lab4_slb_desc",
       "type": "desc",
       "q": "Which word means how much solute can dissolve in a solvent at a given temperature?",
       "a": "Solubility",
       "opts": [
        "Solubility",
        "Concentration",
        "Suspension",
        "Solvent"
       ],
       "explain": "Solubility is the maximum possible. Concentration is how much is actually in there right now."
      },
      {
       "id": "lab4_slb_scn",
       "type": "scenario",
       "q": "At 20 °C, 36 g of salt will dissolve in 100 g of water and no more. What does that number tell you?",
       "a": "The solubility of salt at 20 °C",
       "opts": [
        "The solubility of salt at 20 °C",
        "The concentration of the sea",
        "The pH of salt water",
        "How fast salt dissolves"
       ],
       "explain": "The most that will dissolve at a stated temperature is the solubility."
      }
     ]
    },
    {
     "w": "dissolve",
     "meaning": "to mix completely into a liquid, forming a solution.",
     "example": "Sugar will dissolve in water, but sand will not.",
     "parts": [
      {
       "surface": "dis",
       "type": "prefix",
       "meaning": "apart",
       "tr": {
        "fa": "جدا/نفی",
        "am": "መለያየት/አይ",
        "ar": "غير",
        "es": "aparte/no",
        "fr": "séparé/non",
        "hi": "अलग/नहीं",
        "ja": "分離",
        "ko": "분리/부정",
        "ml": "വേർപെട്ട്/അല്ല",
        "ps": "بېل",
        "ro": "des",
        "ru": "раздельно/не",
        "ta": "பிரி/இல்லை",
        "tl": "hiwalay/hindi",
        "ur": "الگ/نہیں",
        "vi": "tách/không",
        "zh-Hans": "分开",
        "zh-Hant": "分開",
        "other": "دو"
       }
      },
      {
       "surface": "solv",
       "type": "root",
       "meaning": "loosen/solve",
       "tr": {
        "am": "መፍታት",
        "ar": "حل",
        "es": "resolver",
        "fa": "حل",
        "fr": "résoudre",
        "hi": "सुलझाना",
        "ja": "解く",
        "ko": "풀다",
        "ml": "പരിഹരിക്കുക",
        "ps": "حل کول",
        "ro": "a rezolva",
        "ru": "решать",
        "ta": "தீர்த்தல்",
        "tl": "lutasin",
        "ur": "حل کرنا",
        "vi": "giải",
        "zh-Hans": "解",
        "zh-Hant": "解"
       }
      }
     ],
     "tr": {
      "zh-Hans": "溶解",
      "zh-Hant": "溶解",
      "ja": "溶解する",
      "ko": "용해되다",
      "vi": "hòa tan",
      "ar": "يذوب",
      "fa": "حل شدن",
      "ur": "حل ہونا",
      "ps": "منحل کیدل",
      "am": "መሟሟት",
      "ml": "ലയിക്കുക",
      "ta": "கரைதல்",
      "hi": "घुलना",
      "tl": "matunaw",
      "ro": "a se dizolva",
      "fr": "se dissoudre",
      "ru": "растворяться",
      "es": "disolver"
     },
     "note": "<i>dis-</i> (apart) + <i>solv</i> (loosen): loosened apart. Do not swap it with <b>melt</b> — melting is a solid turning into a liquid because of heat, while dissolving is a solid spreading out inside a liquid that is already there.",
     "apply": [
      {
       "id": "lab4_dis_desc",
       "type": "desc",
       "q": "Which word means to mix completely into a liquid and form a solution?",
       "a": "Dissolve",
       "opts": [
        "Dissolve",
        "Melt",
        "Settle",
        "Float"
       ],
       "explain": "Melting needs heat and no liquid to mix into. Dissolving spreads a solid through a liquid."
      },
      {
       "id": "lab4_dis_scn",
       "type": "scenario",
       "q": "You stir sugar into hot tea and the sugar disappears from view. What has the sugar done?",
       "a": "It has dissolved",
       "opts": [
        "It has dissolved",
        "It has melted",
        "It has settled",
        "It has evaporated"
       ],
       "explain": "It has spread out through the liquid. It is still there — taste the tea."
      }
     ]
    },
    {
     "w": "concentration",
     "meaning": "how much solute is dissolved in a given amount of solvent.",
     "example": "Four spoons of salt in the same glass of water gives a higher concentration than one spoon.",
     "parts": [
      {
       "surface": "con",
       "type": "prefix",
       "meaning": "together",
       "tr": {
        "am": "ከ… ጋር",
        "ar": "معًا",
        "es": "juntos",
        "fa": "باهم",
        "fr": "ensemble",
        "hi": "साथ में",
        "ja": "一緒に",
        "ko": "함께",
        "ml": "കൂടെ",
        "ps": "یوځای",
        "ro": "împreună",
        "ru": "вместе",
        "ta": "ஒன்றாக",
        "tl": "magkasama",
        "ur": "ساتھ",
        "vi": "cùng",
        "zh-Hans": "一起",
        "zh-Hant": "一起",
        "other": "باهم"
       }
      },
      {
       "surface": "centr",
       "type": "root",
       "meaning": "centre",
       "tr": {
        "am": "ማዕከል",
        "ar": "مركز",
        "es": "centro",
        "fa": "مرکز",
        "fr": "centre",
        "hi": "केंद्र",
        "ja": "中心",
        "ko": "중심",
        "ml": "കേന്ദ്രം",
        "ps": "مرکز",
        "ro": "centru",
        "ru": "центр",
        "ta": "மையம்",
        "tl": "sentro",
        "ur": "مرکز",
        "vi": "trung tâm",
        "zh-Hans": "中心",
        "zh-Hant": "中心"
       }
      },
      {
       "surface": "ation",
       "type": "suffix",
       "meaning": "process of",
       "tr": {
        "am": "ሂደት",
        "ar": "عملية",
        "es": "proceso de",
        "fa": "فرآیند",
        "fr": "processus",
        "hi": "प्रक्रिया",
        "ja": "過程",
        "ko": "과정",
        "ml": "പ്രക്രിയ",
        "ps": "پروسه",
        "ro": "proces",
        "ru": "процесс",
        "ta": "செயல்முறை",
        "tl": "proseso",
        "ur": "عمل",
        "vi": "quá trình",
        "zh-Hans": "过程",
        "zh-Hant": "過程"
       }
      }
     ],
     "tr": {
      "am": "ክምችት",
      "ar": "تركيز",
      "es": "concentración",
      "fa": "غلظت",
      "fr": "concentration",
      "hi": "सांद्रता",
      "ja": "濃度",
      "ko": "농도",
      "ml": "സാന്ദ്രത",
      "ps": "تمرکز",
      "ro": "concentrație",
      "ru": "концентрация",
      "ta": "செறிவு",
      "tl": "konsentrasyon",
      "ur": "ارتکاز",
      "vi": "nồng độ",
      "zh-Hans": "浓度",
      "zh-Hant": "濃度"
     },
     "note": "<i>con-</i> (together) + <i>centr</i> (centre) + <i>-ation</i> (process of): brought together in one place. A <b>concentrated</b> drink has a lot of solute in a little solvent. Concentration is what you actually have; solubility is the most you <b>could</b> have.",
     "apply": [
      {
       "id": "lab4_conc_desc",
       "type": "desc",
       "q": "Which word means how much solute is dissolved in a given amount of solvent?",
       "a": "Concentration",
       "opts": [
        "Concentration",
        "Solubility",
        "Suspension",
        "Solute"
       ],
       "explain": "Concentration is what is in the glass now. Solubility is the maximum that would ever dissolve."
      },
      {
       "id": "lab4_conc_scn",
       "type": "scenario",
       "q": "Two glasses each hold 100 mL of water. One has 1 spoon of salt dissolved in it, the other has 4. Which has the higher concentration?",
       "a": "The one with 4 spoons",
       "opts": [
        "The one with 4 spoons",
        "The one with 1 spoon",
        "They are the same",
        "You cannot tell"
       ],
       "explain": "Same amount of solvent, more solute, so more solute per 100 mL."
      }
     ]
    },
    {
     "w": "saturated",
     "meaning": "describes a solution that has dissolved the maximum amount of solute it can hold at that temperature.",
     "example": "The extra salt sat on the bottom, so the solution was saturated.",
     "parts": [
      {
       "surface": "satur",
       "type": "root",
       "meaning": "full/filled",
       "tr": {
        "am": "የሞላ",
        "ar": "ممتلئ / مشبع",
        "es": "lleno / saturado",
        "fa": "پر / اشباع‌شده",
        "fr": "plein / saturé",
        "hi": "भरा हुआ",
        "ja": "満・飽和",
        "ko": "포화",
        "ml": "നിറഞ്ഞ",
        "ps": "ډک",
        "ro": "plin / saturat",
        "ru": "полный / насыщенный",
        "ta": "நிறைந்த",
        "tl": "puno",
        "ur": "بھرا ہوا",
        "vi": "đầy / bão hòa",
        "zh-Hans": "满/饱和",
        "zh-Hant": "滿/飽和"
       }
      },
      {
       "surface": "ated",
       "type": "suffix",
       "meaning": "to make/do",
       "tr": {
        "am": "ማድረግ",
        "ar": "جعل",
        "es": "tener/hacer",
        "fa": "ساختن",
        "fr": "rendre",
        "hi": "बनाना",
        "ja": "〜化する",
        "ko": "만들다",
        "ml": "ഉണ്ടാക്കുക",
        "ps": "لرونکی/جوړونکی",
        "ro": "a face",
        "ru": "делать",
        "ta": "செய்தல்",
        "tl": "gumawa",
        "ur": "بنانا",
        "vi": "làm",
        "zh-Hans": "使…化",
        "zh-Hant": "使…化"
       }
      }
     ],
     "tr": {
      "zh-Hans": "饱和的",
      "zh-Hant": "飽和的",
      "ja": "飽和した",
      "ko": "포화된",
      "vi": "bão hòa",
      "ar": "مشبع",
      "fa": "اشباع‌شده",
      "ur": "سیر شدہ",
      "ps": "ډک شوی",
      "am": "የተሟላ (ኬሚካላዊ)",
      "ml": "പൂരിതമായ",
      "ta": "நிறைவுற்ற",
      "hi": "संतृप्त",
      "tl": "saturado",
      "ro": "saturat",
      "fr": "saturé",
      "ru": "насыщенный",
      "es": "saturado"
     },
     "note": "<i>satur</i> (full) + <i>-ated</i>: made full. The same word is used for <b>saturated fat</b> and for ground that is saturated after rain — full, and it cannot take any more. A saturated solution is full <b>at that temperature</b>; heat it and it can take more.",
     "apply": [
      {
       "id": "lab4_sat_desc",
       "type": "desc",
       "q": "Which word describes a solution that cannot dissolve any more solute at that temperature?",
       "a": "Saturated",
       "opts": [
        "Saturated",
        "Insoluble",
        "Neutral",
        "Pure"
       ],
       "explain": "<i>satur</i> means full. Insoluble describes a substance that never dissolves at all."
      },
      {
       "id": "lab4_sat_scn",
       "type": "scenario",
       "q": "You keep adding salt to water and stirring. In the end the extra salt just sits on the bottom and will not go. What is the solution now?",
       "a": "Saturated",
       "opts": [
        "Saturated",
        "Insoluble",
        "Neutral",
        "A suspension"
       ],
       "explain": "It has taken the maximum it can hold at that temperature, so it is saturated."
      }
     ]
    },
    {
     "w": "pure substance",
     "meaning": "matter made of one substance only, with nothing else mixed in.",
     "example": "Distilled water is a pure substance, but sea water is a mixture.",
     "parts": [
      {
       "surface": "pure",
       "type": "root",
       "meaning": "clean/unmixed",
       "tr": {
        "zh-Hans": "纯净",
        "zh-Hant": "純淨",
        "ja": "純粋な",
        "ko": "순수한",
        "vi": "tinh khiết",
        "ar": "نقي",
        "fa": "خالص",
        "ur": "خالص",
        "am": "ንፁህ",
        "ml": "ശുദ്ധമായ",
        "ta": "தூய்மையான",
        "tl": "dalisay",
        "ps": "پاک",
        "ro": "pur",
        "ru": "чистый",
        "fr": "pur",
        "hi": "शुद्ध",
        "es": "puro"
       }
      }
     ],
     "tr": {
      "zh-Hans": "纯净物",
      "zh-Hant": "純物質",
      "ja": "純物質",
      "ko": "순물질",
      "vi": "chất tinh khiết",
      "ar": "مادة نقية",
      "fa": "مادهٔ خالص",
      "ur": "خالص مادہ",
      "am": "ንጹህ ንጥረ ነገር",
      "ml": "ശുദ്ധ പദാർത്ഥം",
      "ta": "தூயப் பொருள்",
      "tl": "purong substansiya",
      "ps": "سوچه ماده",
      "ro": "substanță pură",
      "ru": "чистое вещество",
      "fr": "corps pur",
      "hi": "शुद्ध पदार्थ",
      "es": "sustancia pura"
     },
     "origin": "Only “pure” goes back to a root: Latin purus, “clean, unmixed”. “Substance” is kept as a whole word here.",
     "note": "Only <b>pure</b> goes back to a root: Latin <i>purus</i>, clean and unmixed. In science <i>pure</i> does not mean healthy or natural — it means <b>one substance only</b>. Distilled water is pure; spring water is a mixture, however natural it is.",
     "apply": [
      {
       "id": "lab4_pure_desc",
       "type": "desc",
       "q": "Which term means matter made of one substance only, with nothing else mixed in?",
       "a": "Pure substance",
       "opts": [
        "Pure substance",
        "Mixture",
        "Solution",
        "Suspension"
       ],
       "explain": "One substance and nothing else. A solution always has at least two."
      },
      {
       "id": "lab4_pure_scn",
       "type": "scenario",
       "q": "Which of these is a pure substance?",
       "a": "Distilled water",
       "opts": [
        "Distilled water",
        "Sea water",
        "Muddy water",
        "Salt water"
       ],
       "explain": "The other three all have something else mixed in, so they are mixtures."
      }
     ]
    },
    {
     "w": "insoluble",
     "meaning": "not able to dissolve in a liquid such as water.",
     "example": "Sand is insoluble in water, so it stays on the bottom of the beaker.",
     "parts": [
      {
       "surface": "in",
       "type": "prefix",
       "meaning": "not",
       "tr": {
        "zh-Hans": "不/非",
        "zh-Hant": "不/非",
        "ja": "不",
        "ko": "비-",
        "vi": "không",
        "ar": "غير",
        "fa": "غیر",
        "ur": "غیر",
        "am": "ያልሆነ",
        "ml": "അല്ലാത്ത",
        "ta": "இல்லாத",
        "tl": "hindi",
        "ps": "نه",
        "ro": "ne-",
        "ru": "не-",
        "fr": "non",
        "hi": "अ-",
        "es": "no / opuesto"
       }
      },
      {
       "surface": "solu",
       "type": "root",
       "meaning": "loosen / dissolve",
       "tr": {
        "zh-Hans": "溶解 / 松开",
        "zh-Hant": "溶解 / 鬆開",
        "ja": "溶かす / 緩める",
        "ko": "녹이다 / 풀다",
        "vi": "hòa tan / nới lỏng",
        "ar": "إذابة / حَلّ",
        "fa": "حل کردن / باز کردن",
        "ur": "گھولنا / ڈھیلا کرنا",
        "am": "መፍታት / ማሟሟት",
        "ml": "അലിയിക്കുക / അഴിക്കുക",
        "ta": "கரைத்தல் / தளர்த்துதல்",
        "tl": "matunaw / luwagan",
        "ps": "حل کول / خلاصول",
        "ro": "a dizolva / a slăbi",
        "ru": "растворять / ослаблять",
        "fr": "dissoudre / desserrer",
        "hi": "घोलना / ढीला करना",
        "es": "aflojar / disolver"
       }
      },
      {
       "surface": "ble",
       "type": "suffix",
       "meaning": "able to",
       "tr": {
        "zh-Hans": "能够",
        "zh-Hant": "能夠",
        "ja": "できる",
        "ko": "할 수 있는",
        "vi": "có thể",
        "ar": "قادر على",
        "fa": "قادر به",
        "ur": "قابل",
        "am": "መቻል",
        "ml": "കഴിയുന്ന",
        "ta": "முடியக்கூடிய",
        "tl": "kaya",
        "ps": "وړ",
        "ro": "capabil",
        "ru": "способный",
        "fr": "capable de",
        "hi": "सक्षम",
        "es": "capaz de"
       }
      }
     ],
     "tr": {
      "zh-Hans": "不溶的",
      "zh-Hant": "不溶的",
      "ja": "不溶性の",
      "ko": "불용성의(녹지 않는)",
      "vi": "không hòa tan được",
      "ar": "غير قابل للذوبان",
      "fa": "حل‌نشدنی",
      "ur": "ناقابلِ حل",
      "am": "የማይሟሟ",
      "ml": "ലയിക്കാത്ത",
      "ta": "கரையாத",
      "tl": "hindi natutunaw",
      "ps": "د حل کیدو نه وړ",
      "ro": "insolubil",
      "ru": "нерастворимый",
      "fr": "insoluble",
      "hi": "अघुलनशील",
      "es": "insoluble"
     },
     "note": "<i>in-</i> (not) + <i>solu</i> (dissolve) + <i>-ble</i> (able to): not able to dissolve. The same <i>in-</i> that flips a word is in <b>invisible</b>. An insoluble solid does not disappear — it sinks, and you can filter it out again.",
     "apply": [
      {
       "id": "lab4_insol_desc",
       "type": "desc",
       "q": "Which word means not able to dissolve in a liquid?",
       "a": "Insoluble",
       "opts": [
        "Insoluble",
        "Soluble",
        "Saturated",
        "Neutral"
       ],
       "explain": "<i>in-</i> flips the meaning: soluble means it dissolves, insoluble means it does not."
      },
      {
       "id": "lab4_insol_scn",
       "type": "scenario",
       "q": "You stir sand into water. The sand sinks and stays on the bottom of the beaker. Sand is…",
       "a": "Insoluble in water",
       "opts": [
        "Insoluble in water",
        "Soluble in water",
        "Saturated",
        "Corrosive"
       ],
       "explain": "It will not dissolve, so it is insoluble."
      }
     ]
    },
    {
     "w": "suspension",
     "meaning": "a mixture with small solid pieces floating in a liquid. You can see the pieces, and they slowly settle.",
     "example": "Muddy water is a suspension, and the mud settles at the bottom of the test tube.",
     "parts": [
      {
       "surface": "sus",
       "type": "prefix",
       "meaning": "under",
       "tr": {
        "zh-Hans": "下/替代",
        "zh-Hant": "下/替代",
        "ja": "下に・代わりに",
        "ko": "아래/대신",
        "vi": "dưới / thay thế",
        "ar": "تحت / بدلاً من",
        "fa": "زیر / به‌جای",
        "ur": "نیچے / بجائے",
        "am": "ከታች / በምትክ",
        "ml": "താഴെ / പകരം",
        "ta": "கீழ் / பதிலாக",
        "tl": "sa ilalim / kapalit",
        "ps": "لاندې / پرځای",
        "ro": "sub / în locul",
        "ru": "под / вместо",
        "fr": "sous / à la place de",
        "hi": "नीचे / के स्थान पर",
        "es": "bajo / en lugar de"
       }
      },
      {
       "surface": "pens",
       "type": "root",
       "meaning": "hang",
       "tr": {
        "zh-Hans": "悬挂 / 依赖",
        "zh-Hant": "懸掛 / 依賴",
        "ja": "掛かる / 頼る",
        "ko": "매달리다 / 의존하다",
        "vi": "treo / phụ thuộc",
        "ar": "يعلّق / يعتمد",
        "fa": "آویزان شدن / وابسته بودن",
        "ur": "لٹکنا / انحصار کرنا",
        "am": "መስቀል / መተማመን",
        "ml": "തൂങ്ങുക / ആശ്രയിക്കുക",
        "ta": "தொங்குதல் / சார்ந்திருத்தல்",
        "tl": "sumabit / umasa",
        "ps": "ځړول / تکیه کول",
        "ro": "a atârna / a depinde",
        "ru": "висеть / зависеть",
        "fr": "pendre / dépendre",
        "hi": "लटकना / निर्भर होना",
        "es": "colgar/depender"
       }
      },
      {
       "surface": "ion",
       "type": "suffix",
       "meaning": "the act of (makes a noun)",
       "tr": {
        "zh-Hans": "……的行为（名词后缀）",
        "zh-Hant": "……的行為（名詞後綴）",
        "ja": "～する行為（名詞化）",
        "ko": "~하는 행위 (명사화)",
        "vi": "hành động (hậu tố danh từ)",
        "ar": "فعل / عملية (لاحقة اسم)",
        "fa": "عملِ ... (پسوند اسم)",
        "ur": "عمل (اسمی لاحقہ)",
        "am": "የ...ተግባር (ስም መስሪያ)",
        "ml": "പ്രവൃത്തി (നാമപ്രത്യയം)",
        "ta": "செயல் (பெயர்ச்சொல் ஈறு)",
        "tl": "ang pagkilos (panlaping pangngalan)",
        "ps": "عمل (نومي روستاړی)",
        "ro": "actul de (sufix substantival)",
        "ru": "действие (суффикс существительного)",
        "fr": "l'action de (suffixe nominal)",
        "hi": "क्रिया / कार्य (संज्ञा प्रत्यय)",
        "es": "la acción de (forma un sustantivo)"
       }
      }
     ],
     "tr": {
      "zh-Hans": "悬浊液（悬浮液）",
      "zh-Hant": "懸浮液",
      "ja": "懸濁液",
      "ko": "현탁액",
      "vi": "huyền phù",
      "ar": "مخلوط معلَّق",
      "fa": "سوسپانسیون (مخلوط معلق)",
      "ur": "معلق آمیزہ (سسپنشن)",
      "am": "ተንጠልጣይ ቅልቅል (ሳስፔንሽን)",
      "ml": "സസ്പെൻഷൻ (തങ്ങിനിൽക്കുന്ന മിശ്രിതം)",
      "ta": "சஸ்பென்ஷன் (மிதவைக் கலவை)",
      "tl": "suspensyon (halong may lumulutang na piraso)",
      "ps": "ځوړنده ګډوله",
      "ro": "suspensie",
      "ru": "суспензия",
      "fr": "suspension",
      "hi": "निलंबन",
      "es": "suspensión"
     },
     "note": "<i>sus-</i> (under) + <i>pens</i> (hang) + <i>-ion</i>: hanging underneath — the same <i>pens/pend</i> as in <b>pendulum</b> and <b>suspend</b>. The solid is hanging in the liquid, not dissolved: you can <b>see</b> the pieces, and they settle if you wait.",
     "apply": [
      {
       "id": "lab4_susp_desc",
       "type": "desc",
       "q": "Which mixture has small solid pieces floating in a liquid that slowly settle?",
       "a": "A suspension",
       "opts": [
        "A suspension",
        "A solution",
        "A pure substance",
        "An indicator"
       ],
       "explain": "In a solution you cannot see the solute at all. In a suspension you can, and it settles."
      },
      {
       "id": "lab4_susp_scn",
       "type": "scenario",
       "q": "You shake muddy water and it goes cloudy. Ten minutes later the mud is on the bottom. What is muddy water?",
       "a": "A suspension",
       "opts": [
        "A suspension",
        "A solution",
        "A pure substance",
        "A saturated solution"
       ],
       "explain": "The pieces were visible and they settled, so the mud was never dissolved."
      }
     ]
    },
    {
     "w": "acid",
     "meaning": "a substance with a pH below 7. An acid turns blue litmus paper red.",
     "example": "Lemon juice is an acid with a pH of about 2.",
     "parts": [],
     "tr": {
      "zh-Hans": "酸",
      "zh-Hant": "酸",
      "ja": "酸",
      "ko": "산",
      "vi": "axit",
      "ar": "حمض",
      "fa": "اسید",
      "ur": "تیزاب",
      "am": "አሲድ",
      "ml": "അമ്ലം",
      "ta": "அமிலம்",
      "tl": "asido",
      "ps": "تېزاب",
      "ro": "acid",
      "ru": "кислота",
      "fr": "acide",
      "hi": "अम्ल (एसिड)",
      "es": "ácido"
     },
     "origin": "From the Latin word acidus, “sour” — the same family as “acute” (sharp), because an acid tastes sharp and sour.",
     "note": "From Latin <i>acidus</i>, sour — the same family as <b>acute</b> (sharp), because an acid tastes sharp and sour. In the lab you judge an acid by its <b>pH below 7</b>, never by tasting. Blue litmus paper going red is the classic test.",
     "apply": [
      {
       "id": "lab4_acid_desc",
       "type": "desc",
       "q": "Which word means a substance with a pH below 7?",
       "a": "Acid",
       "opts": [
        "Acid",
        "Base",
        "Indicator",
        "Neutral"
       ],
       "explain": "Below 7 is acidic. Above 7 is a base and exactly 7 is neutral."
      },
      {
       "id": "lab4_acid_scn",
       "type": "scenario",
       "q": "You test a liquid and the pH meter reads 2. What is the liquid?",
       "a": "An acid",
       "opts": [
        "An acid",
        "A base",
        "Neutral",
        "You cannot tell from pH"
       ],
       "explain": "2 is below 7, so it is an acid — and a strong one."
      },
      {
       "id": "lab4_acid_cloze",
       "type": "cloze",
       "before": "The blue litmus paper turned red in the lemon juice, so the lemon juice is an",
       "after": ".",
       "a": "acid",
       "opts": [
        "acid",
        "base",
        "indicator",
        "ion"
       ],
       "explain": "Blue litmus going red is the acid test."
      }
     ]
    },
    {
     "w": "base",
     "meaning": "in chemistry: a substance with a pH above 7. A base is the opposite of an acid, and it cancels acids out.",
     "example": "Bicarbonate of soda is a base, so it cancels out the acid in vinegar.",
     "parts": [],
     "tr": {
      "zh-Hans": "碱",
      "zh-Hant": "鹼",
      "ja": "塩基",
      "ko": "염기",
      "vi": "bazơ",
      "ar": "قاعدة (مادة قلوية)",
      "fa": "باز (قلیا)",
      "ur": "اساس (الکلی)",
      "am": "ቤዝ (አልካላይን)",
      "ml": "ക്ഷാരം",
      "ta": "காரம்",
      "tl": "base (alkalina)",
      "ps": "قلیا (بېس)",
      "ro": "bază (chimie)",
      "ru": "основание (щёлочь)",
      "fr": "base (chimie)",
      "hi": "क्षार (बेस)",
      "es": "base (química)"
     },
     "origin": "In chemistry, “base” comes from the Greek word basis, “a step or foundation”: early chemists saw the base as the foundation a salt is built on when it meets an acid. This is a different word from the “base” of a power in maths.",
     "note": "In chemistry, from Greek <i>basis</i>, a step or foundation: early chemists saw the base as the foundation a salt is built on when it meets an acid. This is a <b>different word</b> from the base of a power in maths, or the base of a triangle.",
     "apply": [
      {
       "id": "lab4_base_desc",
       "type": "desc",
       "q": "In chemistry, which word means a substance with a pH above 7?",
       "a": "Base",
       "opts": [
        "Base",
        "Acid",
        "Indicator",
        "Solute"
       ],
       "explain": "Above 7 is a base, and a base cancels an acid out."
      },
      {
       "id": "lab4_base_scn",
       "type": "scenario",
       "q": "Vinegar (an acid) is spilled, and bicarbonate of soda is added to cancel it out. What is the bicarbonate of soda?",
       "a": "A base",
       "opts": [
        "A base",
        "An acid",
        "A neutral substance",
        "An indicator"
       ],
       "explain": "The substance that cancels an acid out is a base."
      }
     ]
    },
    {
     "w": "neutral",
     "meaning": "not acidic and not basic; a pH of exactly 7.",
     "example": "Pure water is neutral, so universal indicator turns green in it.",
     "parts": [
      {
       "surface": "neutr",
       "type": "root",
       "meaning": "neither / neutral",
       "tr": {
        "zh-Hans": "两者都不 / 中性",
        "zh-Hant": "兩者都不 / 中性",
        "ja": "どちらでもない / 中性",
        "ko": "둘 다 아닌 / 중성",
        "vi": "không bên nào / trung tính",
        "ar": "لا هذا ولا ذاك / محايد",
        "fa": "هیچ‌کدام از آن دو / خنثی",
        "ur": "دونوں میں سے کوئی نہیں / غیر جانبدار",
        "am": "ሁለቱም ያልሆነ / ገለልተኛ",
        "ml": "രണ്ടും അല്ലാത്ത / നിഷ്പക്ഷം",
        "ta": "இரண்டும் அல்லாத / நடுநிலை",
        "tl": "wala sa dalawa / neutral",
        "ps": "له دواړو هیڅ یو نه / بې طرفه",
        "ro": "niciunul dintre cele două / neutru",
        "ru": "ни тот, ни другой / нейтральный",
        "fr": "ni l'un ni l'autre / neutre",
        "hi": "दोनों में से कोई नहीं / तटस्थ",
        "es": "ninguno de los dos / neutro"
       }
      },
      {
       "surface": "al",
       "type": "suffix",
       "meaning": "relating to",
       "tr": {
        "zh-Hans": "……的",
        "zh-Hant": "……的",
        "ja": "～の",
        "ko": "관련된",
        "vi": "thuộc về",
        "ar": "متعلق بـ",
        "fa": "وابسته به",
        "ur": "متعلق",
        "am": "ተያያዥ",
        "ml": "ബന്ധപ്പെട്ട",
        "ta": "தொடர்பான",
        "tl": "may kaugnayan sa",
        "ps": "اړوند",
        "ro": "legat de",
        "ru": "относящийся к",
        "fr": "relatif à",
        "hi": "संबंधी",
        "es": "relativo a"
       }
      }
     ],
     "tr": {
      "zh-Hans": "中性",
      "zh-Hant": "中性",
      "ja": "中性",
      "ko": "중성",
      "vi": "trung tính",
      "ar": "متعادل",
      "fa": "خنثی",
      "ur": "غیر جانبدار (نہ تیزابی نہ اساسی)",
      "am": "ገለልተኛ",
      "ml": "ഉദാസീനം (ന്യൂട്രൽ)",
      "ta": "நடுநிலை",
      "tl": "neutral (hindi asido, hindi base)",
      "ps": "بې طرفه",
      "ro": "neutru",
      "ru": "нейтральный",
      "fr": "neutre",
      "hi": "उदासीन",
      "es": "neutro"
     },
     "note": "<i>neutr</i> (neither) + <i>-al</i> (relating to): neither one nor the other — the same <i>neutr</i> as in <b>neutron</b>, the particle with neither charge. On the pH scale it means <b>exactly 7</b>: not acidic, not basic. Universal indicator turns green.",
     "apply": [
      {
       "id": "lab4_neut_desc",
       "type": "desc",
       "q": "Which word describes a substance with a pH of exactly 7?",
       "a": "Neutral",
       "opts": [
        "Neutral",
        "Acidic",
        "Basic",
        "Corrosive"
       ],
       "explain": "<i>neutr</i> means neither: neither acid nor base."
      },
      {
       "id": "lab4_neut_scn",
       "type": "scenario",
       "q": "You add universal indicator to pure water and it turns green. What does that tell you?",
       "a": "The water is neutral",
       "opts": [
        "The water is neutral",
        "The water is an acid",
        "The water is a base",
        "The water is corrosive"
       ],
       "explain": "Green is the middle of the scale, pH 7 — neither acidic nor basic."
      }
     ]
    },
    {
     "w": "pH",
     "meaning": "a scale from 0 to 14 that shows how acidic or basic a substance is.",
     "example": "We measured the pH of the lemon juice and wrote the number in our results table.",
     "parts": [],
     "tr": {
      "zh-Hans": "酸碱度（pH值）",
      "zh-Hant": "酸鹼值（pH值）",
      "ja": "水素イオン指数（pH）",
      "ko": "수소 이온 농도 지수(pH)",
      "vi": "độ pH",
      "ar": "الأس الهيدروجيني (pH)",
      "fa": "پی‌اچ (درجهٔ اسیدی و بازی)",
      "ur": "پی ایچ (تیزابیت اور اساسیت کا پیمانہ)",
      "am": "የአሲድና የቤዝ መለኪያ (pH)",
      "ml": "പി.എച്ച്. (അമ്ല-ക്ഷാര മാപിനി)",
      "ta": "பி.எச். (அமில–கார அளவை)",
      "tl": "pH (sukat ng asido at base)",
      "ps": "پی ایچ (د تېزابیت او قلیایت کچه)",
      "ro": "pH-ul (scara acid–bază)",
      "ru": "водородный показатель (pH)",
      "fr": "le pH",
      "hi": "पी.एच. मान (अम्ल–क्षार मान)",
      "es": "el pH"
     },
     "origin": "A symbol, not a word: the small p stands for “power” and the capital H is the symbol for hydrogen, so pH means “power of hydrogen”.",
     "note": "A symbol, not a word: the small <b>p</b> stands for power and the capital <b>H</b> is the symbol for hydrogen, so pH means power of hydrogen. Keep the capital H when you write it. Low pH means lots of hydrogen ions; high pH means very few.",
     "apply": [
      {
       "id": "lab4_ph_desc",
       "type": "desc",
       "q": "What does the pH scale show?",
       "a": "How acidic or basic a substance is",
       "opts": [
        "How acidic or basic a substance is",
        "How hot a substance is",
        "How much solute is dissolved",
        "How fast something dissolves"
       ],
       "explain": "pH runs from 0 to 14 and tells you where a substance sits between acid and base."
      },
      {
       "id": "lab4_ph_scn",
       "type": "scenario",
       "q": "Three liquids have pH 3, pH 7 and pH 11. Which one is the base?",
       "a": "The pH 11 liquid",
       "opts": [
        "The pH 11 liquid",
        "The pH 3 liquid",
        "The pH 7 liquid",
        "All three"
       ],
       "explain": "Above 7 is basic, below 7 is acidic, and 7 exactly is neutral."
      }
     ]
    },
    {
     "w": "indicator",
     "meaning": "in chemistry: a substance that changes colour to show whether something is an acid or a base.",
     "example": "We added universal indicator to the vinegar and it turned red.",
     "parts": [
      {
       "surface": "in",
       "type": "prefix",
       "meaning": "into",
       "tr": {
        "zh-Hans": "在 / 进入",
        "zh-Hant": "在 / 進入",
        "ja": "中に",
        "ko": "안으로",
        "vi": "trong",
        "ar": "في",
        "fa": "در",
        "ur": "میں",
        "am": "ወደ ውስጥ",
        "ml": "അകത്ത്",
        "ta": "உள்ளே",
        "tl": "sa loob",
        "ps": "دننه",
        "ro": "în",
        "ru": "в",
        "fr": "dans",
        "hi": "में",
        "es": "en / hacia dentro"
       }
      },
      {
       "surface": "dic",
       "type": "root",
       "meaning": "point out/declare",
       "tr": {
        "zh-Hans": "说",
        "zh-Hant": "說",
        "ja": "言う",
        "ko": "말함",
        "vi": "nói / tuyên bố",
        "ar": "يعلن",
        "fa": "گفتن",
        "ur": "کہنا",
        "am": "መናገር",
        "ml": "പറയുക",
        "ta": "சொல்லுதல்",
        "tl": "magsabi",
        "ps": "ویل",
        "ro": "a declara",
        "ru": "говорить",
        "fr": "déclarer",
        "hi": "कहना",
        "es": "decir/declarar"
       }
      },
      {
       "surface": "ator",
       "type": "suffix",
       "meaning": "agent or thing that does",
       "tr": {
        "zh-Hans": "……者/……物",
        "zh-Hant": "……者/……物",
        "ja": "…する人・物",
        "ko": "…하는 사람/것",
        "vi": "người/vật",
        "ar": "فاعل",
        "fa": "کننده",
        "ur": "کرنے والا",
        "am": "የሚያደርግ",
        "ml": "ചെയ്യുന്ന ആൾ/വസ്തു",
        "ta": "செய்பவர்/பொருள்",
        "tl": "tagagawa",
        "ps": "کوونکی",
        "ro": "cel care face",
        "ru": "тот, кто делает",
        "fr": "celui qui fait",
        "hi": "करने वाला/वस्तु",
        "es": "quien/lo que"
       }
      }
     ],
     "tr": {
      "zh-Hans": "酸碱指示剂",
      "zh-Hant": "酸鹼指示劑",
      "ja": "指示薬",
      "ko": "지시약",
      "vi": "chất chỉ thị (axit–bazơ)",
      "ar": "كاشف حمضي قاعدي",
      "fa": "شناساگر (معرف اسید و باز)",
      "ur": "اشاریہ محلول (اظہاریہ)",
      "am": "አመልካች ኬሚካል",
      "ml": "അമ്ല-ക്ഷാര സൂചകം",
      "ta": "அமில–கார நிறங்காட்டி",
      "tl": "indicator (kemikal na nagpapalit ng kulay)",
      "ps": "ښودونکی محلول",
      "ro": "indicator acido-bazic",
      "ru": "кислотно-основный индикатор",
      "fr": "indicateur coloré",
      "hi": "अम्ल–क्षार सूचक",
      "es": "indicador ácido-base"
     },
     "note": "<i>in-</i> (into) + <i>dic</i> (point out) + <i>-ator</i> (the thing that does it): the thing that points something out — the same <i>dic</i> as in <b>dictionary</b> and <b>predict</b>. It points out acid or base by <b>changing colour</b>, so you read the colour, not the liquid.",
     "apply": [
      {
       "id": "lab4_ind_desc",
       "type": "desc",
       "q": "Which substance changes colour to show whether something is an acid or a base?",
       "a": "An indicator",
       "opts": [
        "An indicator",
        "A solvent",
        "A solute",
        "A suspension"
       ],
       "explain": "<i>dic</i> means point out: the colour points out the answer."
      },
      {
       "id": "lab4_ind_scn",
       "type": "scenario",
       "q": "You add a few drops of a liquid to vinegar and the vinegar turns red. What was the liquid you added?",
       "a": "An indicator",
       "opts": [
        "An indicator",
        "A base",
        "A solvent",
        "A pure substance"
       ],
       "explain": "It changed colour to reveal that the vinegar is acidic, so it is an indicator."
      }
     ]
    },
    {
     "w": "hydrogen ion",
     "meaning": "a hydrogen atom that has lost its electron, written H⁺. Acids make hydrogen ions in water.",
     "example": "The more hydrogen ions a solution has, the lower its pH.",
     "parts": [
      {
       "surface": "hydr",
       "type": "root",
       "meaning": "water",
       "tr": {
        "zh-Hans": "水",
        "zh-Hant": "水",
        "ja": "水",
        "ko": "물",
        "vi": "nước",
        "ar": "ماء",
        "fa": "آب",
        "ur": "پانی",
        "am": "ውሃ",
        "ml": "ജലം",
        "ta": "நீர்",
        "tl": "tubig",
        "ps": "اوبه",
        "ro": "apă",
        "ru": "вода",
        "fr": "eau",
        "hi": "जल",
        "es": "agua"
       }
      },
      {
       "surface": "gen",
       "type": "suffix",
       "meaning": "produce",
       "tr": {
        "zh-Hans": "产生",
        "zh-Hant": "產生",
        "ja": "生む",
        "ko": "생성",
        "vi": "sinh ra",
        "ar": "يُنتج",
        "fa": "تولید",
        "ur": "پیدا کرنا",
        "am": "ማመንጨት",
        "ml": "ഉത്പാദിപ്പിക്കുക",
        "ta": "உற்பத்தி",
        "tl": "lumikha",
        "ps": "تولید",
        "ro": "a produce",
        "ru": "производить",
        "fr": "produire",
        "hi": "उत्पन्न करना",
        "es": "producir"
       }
      }
     ],
     "tr": {
      "zh-Hans": "氢离子（H⁺）",
      "zh-Hant": "氫離子（H⁺）",
      "ja": "水素イオン（H⁺）",
      "ko": "수소 이온(H⁺)",
      "vi": "ion hiđro (H⁺)",
      "ar": "أيون الهيدروجين (H⁺)",
      "fa": "یون هیدروژن (H⁺)",
      "ur": "ہائیڈروجن آئن (H⁺)",
      "am": "የሃይድሮጅን አዮን (H⁺)",
      "ml": "ഹൈഡ്രജൻ അയോൺ (H⁺)",
      "ta": "ஹைட்ரஜன் அயனி (H⁺)",
      "tl": "hydrogen ion (H⁺)",
      "ps": "د هایدروجن آیون (H⁺)",
      "ro": "ion de hidrogen (H⁺)",
      "ru": "ион водорода (H⁺)",
      "fr": "ion hydrogène (H⁺)",
      "hi": "हाइड्रोजन आयन (H⁺)",
      "es": "ion hidrógeno (H⁺)"
     },
     "origin": "Only “hydrogen” can be cut up: hydr + gen, “water maker”, because burning hydrogen makes water. “Ion” is a whole word from Greek for “going”.",
     "note": "Only <b>hydrogen</b> can be cut up: <i>hydr</i> (water) + <i>-gen</i> (produce) — the water maker, because burning hydrogen makes water. <b>Ion</b> stays whole. Written <b>H⁺</b>: acids make these in water, and the more there are, the lower the pH.",
     "apply": [
      {
       "id": "lab4_hion_desc",
       "type": "desc",
       "q": "Which ion is written H⁺ and is made by acids in water?",
       "a": "The hydrogen ion",
       "opts": [
        "The hydrogen ion",
        "The hydroxide ion",
        "The electron",
        "The neutron"
       ],
       "explain": "H is the symbol for hydrogen, and the + shows it has lost its electron."
      },
      {
       "id": "lab4_hion_scn",
       "type": "scenario",
       "q": "One solution has far more hydrogen ions in it than another. What does that mean about its pH?",
       "a": "Its pH is lower",
       "opts": [
        "Its pH is lower",
        "Its pH is higher",
        "Its pH is exactly 7",
        "pH does not change"
       ],
       "explain": "More hydrogen ions means more acidic, and more acidic means a lower pH number."
      }
     ]
    },
    {
     "w": "hydroxide ion",
     "meaning": "an ion made of one oxygen atom and one hydrogen atom, written OH⁻. Bases make hydroxide ions in water.",
     "example": "Sodium hydroxide makes hydroxide ions when it dissolves in water.",
     "parts": [
      {
       "surface": "hydr",
       "type": "root",
       "meaning": "water",
       "tr": {
        "zh-Hans": "水",
        "zh-Hant": "水",
        "ja": "水",
        "ko": "물",
        "vi": "nước",
        "ar": "ماء",
        "fa": "آب",
        "ur": "پانی",
        "am": "ውሃ",
        "ml": "ജലം",
        "ta": "நீர்",
        "tl": "tubig",
        "ps": "اوبه",
        "ro": "apă",
        "ru": "вода",
        "fr": "eau",
        "hi": "जल",
        "es": "agua"
       }
      },
      {
       "surface": "ox",
       "type": "root",
       "meaning": "oxygen",
       "tr": {
        "zh-Hans": "氧",
        "zh-Hant": "氧",
        "ja": "酸素",
        "ko": "산소",
        "vi": "oxy",
        "ar": "أكسجين",
        "fa": "اکسیژن",
        "ur": "آکسیجن",
        "am": "ኦክስጅን",
        "ml": "ഓക്സിജൻ",
        "ta": "ஆக்ஸிஜன்",
        "tl": "oxygen",
        "ps": "اکسیجن",
        "ro": "oxigen",
        "ru": "кислород",
        "fr": "oxygène",
        "hi": "ऑक्सीजन",
        "es": "oxígeno"
       }
      },
      {
       "surface": "ide",
       "type": "suffix",
       "meaning": "chemical compound",
       "tr": {
        "zh-Hans": "化合物",
        "zh-Hant": "化合物",
        "ja": "化合物",
        "ko": "화합물",
        "vi": "hợp chất hóa học",
        "ar": "مركب كيميائي",
        "fa": "ترکیب شیمیایی",
        "ur": "کیمیائی مرکب",
        "am": "ኬሚካላዊ ውህድ",
        "ml": "രാസ സംയുക്തം",
        "ta": "வேதியியல் சேர்மம்",
        "tl": "kemikal na compound",
        "ps": "کیمیاوي مرکب",
        "ro": "compus chimic",
        "ru": "химическое соединение",
        "fr": "composé chimique",
        "hi": "रासायनिक यौगिक",
        "es": "compuesto químico"
       }
      }
     ],
     "tr": {
      "zh-Hans": "氢氧根离子（OH⁻）",
      "zh-Hant": "氫氧根離子（OH⁻）",
      "ja": "水酸化物イオン（OH⁻）",
      "ko": "수산화 이온(OH⁻)",
      "vi": "ion hiđroxit (OH⁻)",
      "ar": "أيون الهيدروكسيد (OH⁻)",
      "fa": "یون هیدروکسید (OH⁻)",
      "ur": "ہائیڈرو آکسائیڈ آئن (OH⁻)",
      "am": "የሃይድሮክሳይድ አዮን (OH⁻)",
      "ml": "ഹൈഡ്രോക്സൈഡ് അയോൺ (OH⁻)",
      "ta": "ஹைட்ராக்சைடு அயனி (OH⁻)",
      "tl": "hydroxide ion (OH⁻)",
      "ps": "د هایدروکسایډ آیون (OH⁻)",
      "ro": "ion hidroxid (OH⁻)",
      "ru": "гидроксид-ион (OH⁻)",
      "fr": "ion hydroxyde (OH⁻)",
      "hi": "हाइड्रॉक्साइड आयन (OH⁻)",
      "es": "ion hidróxido (OH⁻)"
     },
     "origin": "Only “hydroxide” can be cut up: hydr + ox + ide, the water-and-oxygen part of a compound. “Ion” is a whole word from Greek for “going”.",
     "note": "Only <b>hydroxide</b> can be cut up: <i>hydr</i> (water) + <i>ox</i> (oxygen) + <i>-ide</i> (a compound). <b>Ion</b> stays whole. Written <b>OH⁻</b> — one oxygen and one hydrogen, carrying a negative charge. Bases make these in water, the mirror image of an acid.",
     "apply": [
      {
       "id": "lab4_ohion_desc",
       "type": "desc",
       "q": "Which ion is written OH⁻ and is made by bases in water?",
       "a": "The hydroxide ion",
       "opts": [
        "The hydroxide ion",
        "The hydrogen ion",
        "The solute",
        "The indicator"
       ],
       "explain": "O for oxygen and H for hydrogen, with a negative charge."
      },
      {
       "id": "lab4_ohion_scn",
       "type": "scenario",
       "q": "A solution turns out to be full of OH⁻ particles. What are they, and what made them?",
       "a": "Hydroxide ions, made by a base",
       "opts": [
        "Hydroxide ions, made by a base",
        "Hydroxide ions, made by an acid",
        "Hydrogen ions, made by a base",
        "Hydrogen ions, made by an acid"
       ],
       "explain": "OH⁻ is one oxygen and one hydrogen with a negative charge — the hydroxide ion — and it is bases, not acids, that make it in water."
      }
     ]
    },
    {
     "w": "corrosive",
     "meaning": "able to damage skin, eyes or materials by attacking them chemically.",
     "example": "The bottle had a corrosive hazard symbol, so we wore safety glasses and gloves.",
     "parts": [
      {
       "surface": "cor",
       "type": "prefix",
       "meaning": "completely",
       "tr": {
        "zh-Hans": "完全",
        "zh-Hant": "完全",
        "ja": "完全に",
        "ko": "완전히",
        "vi": "hoàn toàn",
        "ar": "تماماً",
        "fa": "کاملاً",
        "ur": "مکمل طور پر",
        "am": "ሙሉ በሙሉ",
        "ml": "പൂർണ്ണമായി",
        "ta": "முழுமையாக",
        "tl": "lubusan",
        "ps": "بشپړ",
        "ro": "complet",
        "ru": "полностью",
        "fr": "complètement",
        "hi": "पूरी तरह",
        "es": "completamente"
       }
      },
      {
       "surface": "ros",
       "type": "root",
       "meaning": "gnaw / eat",
       "tr": {
        "zh-Hans": "啃 / 吃",
        "zh-Hant": "啃 / 吃",
        "ja": "かじる / 食べる",
        "ko": "갉아먹다 / 먹다",
        "vi": "gặm / ăn",
        "ar": "قرض / أكل",
        "fa": "جویدن / خوردن",
        "ur": "کترنا / کھانا",
        "am": "መጋጥ / መብላት",
        "ml": "കരളുക / തിന്നുക",
        "ta": "கடித்தல் / தின்னுதல்",
        "tl": "ngatngat / kain",
        "ps": "ژول / خوړل",
        "ro": "a roade / a mânca",
        "ru": "грызть / есть",
        "fr": "ronger / manger",
        "hi": "कुतरना / खाना",
        "es": "roer / comer"
       }
      },
      {
       "surface": "ive",
       "type": "suffix",
       "meaning": "tending to",
       "tr": {
        "zh-Hans": "有…性质的",
        "zh-Hant": "有…性質的",
        "ja": "的な",
        "ko": "경향",
        "vi": "có xu hướng",
        "ar": "ذو",
        "fa": "گرایش به",
        "ur": "رجحان",
        "am": "ዝንባሌ",
        "ml": "പ്രവണത",
        "ta": "போக்கு",
        "tl": "hilig",
        "ps": "لرونکی",
        "ro": "care are",
        "ru": "склонный к",
        "fr": "tendance à",
        "hi": "प्रवृत्ति",
        "es": "que tiende a"
       }
      }
     ],
     "tr": {
      "zh-Hans": "腐蚀性的",
      "zh-Hant": "腐蝕性的",
      "ja": "腐食性の",
      "ko": "부식성의",
      "vi": "có tính ăn mòn",
      "ar": "أكّال (مادة كاوية)",
      "fa": "خورنده",
      "ur": "کاٹ کھانے والا (تآکلی)",
      "am": "የሚያበላሽ (ቆዳንና ብረትን የሚበላ)",
      "ml": "ദ്രവിപ്പിക്കുന്ന (നശിപ്പിക്കുന്ന)",
      "ta": "அரிக்கும் தன்மையுள்ள",
      "tl": "nakakasira / nakakatunaw (corrosive)",
      "ps": "خوړونکی (زیانمنونکی)",
      "ro": "coroziv",
      "ru": "едкий",
      "fr": "corrosif",
      "hi": "संक्षारक",
      "es": "corrosivo"
     },
     "note": "<i>cor-</i> (completely) + <i>ros</i> (gnaw, eat) + <i>-ive</i> (tending to): tending to eat right through something. The same gnawing root is in <b>rodent</b> and <b>erode</b>. On a bottle it is a <b>hazard warning</b>, so safety glasses go on before the lid comes off.",
     "apply": [
      {
       "id": "lab4_corr_desc",
       "type": "desc",
       "q": "Which word describes a substance that can damage skin, eyes or materials by attacking them chemically?",
       "a": "Corrosive",
       "opts": [
        "Corrosive",
        "Soluble",
        "Neutral",
        "Saturated"
       ],
       "explain": "<i>ros</i> means gnaw: a corrosive substance eats into what it touches."
      },
      {
       "id": "lab4_corr_scn",
       "type": "scenario",
       "q": "A bottle carries the corrosive hazard symbol. What does that tell you to do before using it?",
       "a": "Put on safety glasses and follow the teacher's instructions",
       "opts": [
        "Put on safety glasses and follow the teacher's instructions",
        "Smell it to check what it is",
        "Pour it quickly so it is over with",
        "Nothing special is needed"
       ],
       "explain": "Corrosive means it can attack skin and eyes, so eye protection and the teacher's instructions come first."
      }
     ]
    },
    {
     "w": "soluble",
     "meaning": "able to dissolve in a liquid such as water.",
     "example": "Sugar is soluble in water, so it disappears when you stir it.",
     "parts": [
      {
       "surface": "solu",
       "type": "root",
       "meaning": "loosen / dissolve",
       "tr": {
        "am": "መፍታት / ማሟሟት",
        "ar": "إذابة / حَلّ",
        "es": "aflojar / disolver",
        "fa": "حل کردن / باز کردن",
        "fr": "dissoudre / desserrer",
        "hi": "घोलना / ढीला करना",
        "ja": "溶かす / 緩める",
        "ko": "녹이다 / 풀다",
        "ml": "അലിയിക്കുക / അഴിക്കുക",
        "ps": "حل کول / خلاصول",
        "ro": "a dizolva / a slăbi",
        "ru": "растворять / ослаблять",
        "ta": "கரைத்தல் / தளர்த்துதல்",
        "tl": "matunaw / luwagan",
        "ur": "گھولنا / ڈھیلا کرنا",
        "vi": "hòa tan / nới lỏng",
        "zh-Hans": "溶解 / 松开",
        "zh-Hant": "溶解 / 鬆開"
       }
      },
      {
       "surface": "ble",
       "type": "suffix",
       "meaning": "able to",
       "tr": {
        "am": "መቻል",
        "ar": "قادر على",
        "es": "capaz de",
        "fa": "قادر به",
        "fr": "capable de",
        "hi": "सक्षम",
        "ja": "できる",
        "ko": "할 수 있는",
        "ml": "കഴിയുന്ന",
        "ps": "وړ",
        "ro": "capabil",
        "ru": "способный",
        "ta": "முடியக்கூடிய",
        "tl": "kaya",
        "ur": "قابل",
        "vi": "có thể",
        "zh-Hans": "能够",
        "zh-Hant": "能夠"
       }
      }
     ],
     "tr": {
      "am": "የሚሟሟ",
      "ar": "قابل للذوبان",
      "es": "soluble",
      "fa": "حل‌شدنی",
      "fr": "soluble",
      "hi": "घुलनशील",
      "ja": "可溶性",
      "ko": "가용성",
      "ml": "ലയിക്കുന്ന",
      "ps": "د حل کیدو وړ",
      "ro": "solubil",
      "ru": "растворимый",
      "ta": "கரையக்கூடிய",
      "tl": "natutunaw",
      "ur": "حل پذیر",
      "vi": "hòa tan được",
      "zh-Hans": "可溶的",
      "zh-Hant": "可溶的"
     },
     "note": "<i>solu</i> (dissolve) + <i>-ble</i> (able to): able to dissolve. Always say what it is soluble <b>in</b> — sugar is soluble in water, and that is a fact about the pair, not about the sugar on its own.",
     "apply": [
      {
       "id": "lab4_sol_desc",
       "type": "desc",
       "q": "Which word means able to dissolve in a liquid?",
       "a": "Soluble",
       "opts": [
        "Soluble",
        "Insoluble",
        "Saturated",
        "Corrosive"
       ],
       "explain": "<i>-ble</i> means able to. Insoluble is the opposite."
      },
      {
       "id": "lab4_sol_scn",
       "type": "scenario",
       "q": "Sugar disappears completely when you stir it into water. Sugar is…",
       "a": "Soluble in water",
       "opts": [
        "Soluble in water",
        "Insoluble in water",
        "Neutral",
        "A pure substance"
       ],
       "explain": "It dissolved, so it is soluble in water."
      }
     ]
    }
   ]
  }
 ]
};
