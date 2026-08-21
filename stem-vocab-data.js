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
       "surface": "cosine",
       "type": "root",
       "meaning": "complement of sine",
       "tr": {
        "am": "የሳይን ማሟያ",
        "ar": "متمم الجيب",
        "es": "complemento del seno",
        "fa": "متمم سینوس",
        "fr": "complément du sinus",
        "hi": "ज्या का पूरक",
        "ja": "余角の正弦",
        "ko": "여각의 사인",
        "ml": "സൈനിന്റെ പൂരകം",
        "ps": "د ساین بشپړونکی",
        "ro": "complementul sinusului",
        "ru": "синус дополнительного угла",
        "ta": "சைனின் நிரப்பி",
        "tl": "komplemento ng sine",
        "ur": "جیب کا متمم",
        "vi": "phần bù của sin",
        "zh-Hans": "正弦的余角",
        "zh-Hant": "正弦的餘角"
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
  }
 ]
};
