const dataSurat=[
  {
    "id": 1,
    "nama": "Al-Fatihah",
    "tempat": "makkah",
    "ayat": 7,
    "namaarab": "الفاتحة",
    "namaarti": "Pembukaan",
    "urutan": 5
  },
  {
    "id": 2,
    "nama": "Al-Baqarah",
    "tempat": "madinah",
    "ayat": 286,
    "namaarab": "البقرة",
    "namaarti": "Sapi Betina",
    "urutan": 87
  },
  {
    "id": 3,
    "nama": "Ali 'Imran",
    "tempat": "madinah",
    "ayat": 200,
    "namaarab": "آل عمران",
    "namaarti": "Keluarga Imran",
    "urutan": 89
  },
  {
    "id": 4,
    "nama": "An-Nisa",
    "tempat": "madinah",
    "ayat": 176,
    "namaarab": "النساء",
    "namaarti": "Wanita",
    "urutan": 92
  },
  {
    "id": 5,
    "nama": "Al-Ma'idah",
    "tempat": "madinah",
    "ayat": 120,
    "namaarab": "المائدة",
    "namaarti": "Jamuan (Hidangan Makanan)",
    "urutan": 112
  },
  {
    "id": 6,
    "nama": "Al-An'am",
    "tempat": "makkah",
    "ayat": 165,
    "namaarab": "الأنعام",
    "namaarti": "Binatang Ternak",
    "urutan": 55
  },
  {
    "id": 7,
    "nama": "Al-A'raf",
    "tempat": "makkah",
    "ayat": 206,
    "namaarab": "الأعراف",
    "namaarti": "Tempat-tempat Tinggi",
    "urutan": 39
  },
  {
    "id": 8,
    "nama": "Al-Anfal",
    "tempat": "madinah",
    "ayat": 75,
    "namaarab": "الأنفال",
    "namaarti": "Rampasan Perang",
    "urutan": 88
  },
  {
    "id": 9,
    "nama": "At-Tawbah",
    "tempat": "madinah",
    "ayat": 129,
    "namaarab": "التوبة",
    "namaarti": "Pengampunan",
    "urutan": 113
  },
  {
    "id": 10,
    "nama": "Yunus",
    "tempat": "makkah",
    "ayat": 109,
    "namaarab": "يونس",
    "namaarti": "Yunus",
    "urutan": 51
  },
  {
    "id": 11,
    "nama": "Hud",
    "tempat": "makkah",
    "ayat": 123,
    "namaarab": "هود",
    "namaarti": "Hud",
    "urutan": 52
  },
  {
    "id": 12,
    "nama": "Yusuf",
    "tempat": "makkah",
    "ayat": 111,
    "namaarab": "يوسف",
    "namaarti": "Yusuf",
    "urutan": 53
  },
  {
    "id": 13,
    "nama": "Ar-Ra'd",
    "tempat": "madinah",
    "ayat": 43,
    "namaarab": "الرعد",
    "namaarti": "Guruh (Petir)",
    "urutan": 96
  },
  {
    "id": 14,
    "nama": "Ibrahim",
    "tempat": "makkah",
    "ayat": 52,
    "namaarab": "ابراهيم",
    "namaarti": "Ibrahim",
    "urutan": 72
  },
  {
    "id": 15,
    "nama": "Al-Hijr",
    "tempat": "makkah",
    "ayat": 99,
    "namaarab": "الحجر",
    "namaarti": "Bukit",
    "urutan": 54
  },
  {
    "id": 16,
    "nama": "An-Nahl",
    "tempat": "makkah",
    "ayat": 128,
    "namaarab": "النحل",
    "namaarti": "Lebah Madu",
    "urutan": 70
  },
  {
    "id": 17,
    "nama": "Al-Isra",
    "tempat": "makkah",
    "ayat": 111,
    "namaarab": "الإسراء",
    "namaarti": "Perjalanan Malam",
    "urutan": 50
  },
  {
    "id": 18,
    "nama": "Al-Kahf",
    "tempat": "makkah",
    "ayat": 110,
    "namaarab": "الكهف",
    "namaarti": "Para Penghuni Gua",
    "urutan": 69
  },
  {
    "id": 19,
    "nama": "Maryam",
    "tempat": "makkah",
    "ayat": 98,
    "namaarab": "مريم",
    "namaarti": "Maryam",
    "urutan": 44
  },
  {
    "id": 20,
    "nama": "Taha",
    "tempat": "makkah",
    "ayat": 135,
    "namaarab": "طه",
    "namaarti": "Tha-Ha",
    "urutan": 45
  },
  {
    "id": 21,
    "nama": "Al-Anbya",
    "tempat": "makkah",
    "ayat": 112,
    "namaarab": "الأنبياء",
    "namaarti": "Para Nabi",
    "urutan": 73
  },
  {
    "id": 22,
    "nama": "Al-Hajj",
    "tempat": "madinah",
    "ayat": 78,
    "namaarab": "الحج",
    "namaarti": "Haji",
    "urutan": 103
  },
  {
    "id": 23,
    "nama": "Al-Mu'minun",
    "tempat": "makkah",
    "ayat": 118,
    "namaarab": "المؤمنون",
    "namaarti": "Orang-orang Mukmin",
    "urutan": 74
  },
  {
    "id": 24,
    "nama": "An-Nur",
    "tempat": "madinah",
    "ayat": 64,
    "namaarab": "النور",
    "namaarti": "Cahaya",
    "urutan": 102
  },
  {
    "id": 25,
    "nama": "Al-Furqan",
    "tempat": "makkah",
    "ayat": 77,
    "namaarab": "الفرقان",
    "namaarti": "Pembeda",
    "urutan": 42
  },
  {
    "id": 26,
    "nama": "Ash-Shu'ara",
    "tempat": "makkah",
    "ayat": 227,
    "namaarab": "الشعراء",
    "namaarti": "Penyair",
    "urutan": 47
  },
  {
    "id": 27,
    "nama": "An-Naml",
    "tempat": "makkah",
    "ayat": 93,
    "namaarab": "النمل",
    "namaarti": "Semut",
    "urutan": 48
  },
  {
    "id": 28,
    "nama": "Al-Qasas",
    "tempat": "makkah",
    "ayat": 88,
    "namaarab": "القصص",
    "namaarti": "Kisah-kisah",
    "urutan": 49
  },
  {
    "id": 29,
    "nama": "Al-'Ankabut",
    "tempat": "makkah",
    "ayat": 69,
    "namaarab": "العنكبوت",
    "namaarti": "Laba-laba",
    "urutan": 85
  },
  {
    "id": 30,
    "nama": "Ar-Rum",
    "tempat": "makkah",
    "ayat": 60,
    "namaarab": "الروم",
    "namaarti": "Bangsa Romawi",
    "urutan": 84
  },
  {
    "id": 31,
    "nama": "Luqman",
    "tempat": "makkah",
    "ayat": 34,
    "namaarab": "لقمان",
    "namaarti": "Luqman",
    "urutan": 57
  },
  {
    "id": 32,
    "nama": "As-Sajdah",
    "tempat": "makkah",
    "ayat": 30,
    "namaarab": "السجدة",
    "namaarti": "Sujud",
    "urutan": 75
  },
  {
    "id": 33,
    "nama": "Al-Ahzab",
    "tempat": "madinah",
    "ayat": 73,
    "namaarab": "الأحزاب",
    "namaarti": "Golongan yang Bersekutu",
    "urutan": 90
  },
  {
    "id": 34,
    "nama": "Saba",
    "tempat": "makkah",
    "ayat": 54,
    "namaarab": "سبإ",
    "namaarti": "Saba\\'",
    "urutan": 58
  },
  {
    "id": 35,
    "nama": "Fatir",
    "tempat": "makkah",
    "ayat": 45,
    "namaarab": "فاطر",
    "namaarti": "Pencipta",
    "urutan": 43
  },
  {
    "id": 36,
    "nama": "Ya-Sin",
    "tempat": "makkah",
    "ayat": 83,
    "namaarab": "يس",
    "namaarti": "Yas Sin",
    "urutan": 41
  },
  {
    "id": 37,
    "nama": "As-Saffat",
    "tempat": "makkah",
    "ayat": 182,
    "namaarab": "الصافات",
    "namaarti": "Barisan-barisan",
    "urutan": 56
  },
  {
    "id": 38,
    "nama": "Sad",
    "tempat": "makkah",
    "ayat": 88,
    "namaarab": "ص",
    "namaarti": "Shad",
    "urutan": 38
  },
  {
    "id": 39,
    "nama": "Az-Zumar",
    "tempat": "makkah",
    "ayat": 75,
    "namaarab": "الزمر",
    "namaarti": "Para Rombongan",
    "urutan": 59
  },
  {
    "id": 40,
    "nama": "Ghafir",
    "tempat": "makkah",
    "ayat": 85,
    "namaarab": "غافر",
    "namaarti": "Sang Maha Pengampun",
    "urutan": 60
  },
  {
    "id": 41,
    "nama": "Fussilat",
    "tempat": "makkah",
    "ayat": 54,
    "namaarab": "فصلت",
    "namaarti": "Yang Dijelaskan",
    "urutan": 61
  },
  {
    "id": 42,
    "nama": "Ash-Shuraa",
    "tempat": "makkah",
    "ayat": 53,
    "namaarab": "الشورى",
    "namaarti": "Musyawarah",
    "urutan": 62
  },
  {
    "id": 43,
    "nama": "Az-Zukhruf",
    "tempat": "makkah",
    "ayat": 89,
    "namaarab": "الزخرف",
    "namaarti": "Perhiasan",
    "urutan": 63
  },
  {
    "id": 44,
    "nama": "Ad-Dukhan",
    "tempat": "makkah",
    "ayat": 59,
    "namaarab": "الدخان",
    "namaarti": "Kabut",
    "urutan": 64
  },
  {
    "id": 45,
    "nama": "Al-Jathiyah",
    "tempat": "makkah",
    "ayat": 37,
    "namaarab": "الجاثية",
    "namaarti": "Yang Bertekuk Lutut",
    "urutan": 65
  },
  {
    "id": 46,
    "nama": "Al-Ahqaf",
    "tempat": "makkah",
    "ayat": 35,
    "namaarab": "الأحقاف",
    "namaarti": "Bukit-bukir Pasir",
    "urutan": 66
  },
  {
    "id": 47,
    "nama": "Muhammad",
    "tempat": "madinah",
    "ayat": 38,
    "namaarab": "محمد",
    "namaarti": "Muhammad",
    "urutan": 95
  },
  {
    "id": 48,
    "nama": "Al-Fath",
    "tempat": "madinah",
    "ayat": 29,
    "namaarab": "الفتح",
    "namaarti": "Kemenangan",
    "urutan": 111
  },
  {
    "id": 49,
    "nama": "Al-Hujurat",
    "tempat": "madinah",
    "ayat": 18,
    "namaarab": "الحجرات",
    "namaarti": "Kamar-kamar",
    "urutan": 106
  },
  {
    "id": 50,
    "nama": "Qaf",
    "tempat": "makkah",
    "ayat": 45,
    "namaarab": "ق",
    "namaarti": "Qaf",
    "urutan": 34
  },
  {
    "id": 51,
    "nama": "Adh-Dhariyat",
    "tempat": "makkah",
    "ayat": 60,
    "namaarab": "الذاريات",
    "namaarti": "Angin yang Menerbangkan",
    "urutan": 67
  },
  {
    "id": 52,
    "nama": "At-Tur",
    "tempat": "makkah",
    "ayat": 49,
    "namaarab": "الطور",
    "namaarti": "Bukit",
    "urutan": 76
  },
  {
    "id": 53,
    "nama": "An-Najm",
    "tempat": "makkah",
    "ayat": 62,
    "namaarab": "النجم",
    "namaarti": "Bintang",
    "urutan": 23
  },
  {
    "id": 54,
    "nama": "Al-Qamar",
    "tempat": "makkah",
    "ayat": 55,
    "namaarab": "القمر",
    "namaarti": "Bulan",
    "urutan": 37
  },
  {
    "id": 55,
    "nama": "Ar-Rahman",
    "tempat": "madinah",
    "ayat": 78,
    "namaarab": "الرحمن",
    "namaarti": "Yang Maha Pemurah",
    "urutan": 97
  },
  {
    "id": 56,
    "nama": "Al-Waqi'ah",
    "tempat": "makkah",
    "ayat": 96,
    "namaarab": "الواقعة",
    "namaarti": "Hari Kiamat",
    "urutan": 46
  },
  {
    "id": 57,
    "nama": "Al-Hadid",
    "tempat": "madinah",
    "ayat": 29,
    "namaarab": "الحديد",
    "namaarti": "Besi",
    "urutan": 94
  },
  {
    "id": 58,
    "nama": "Al-Mujadila",
    "tempat": "madinah",
    "ayat": 22,
    "namaarab": "المجادلة",
    "namaarti": "Wanita yang Menggugat",
    "urutan": 105
  },
  {
    "id": 59,
    "nama": "Al-Hashr",
    "tempat": "madinah",
    "ayat": 24,
    "namaarab": "الحشر",
    "namaarti": "Pengusiran",
    "urutan": 101
  },
  {
    "id": 60,
    "nama": "Al-Mumtahanah",
    "tempat": "madinah",
    "ayat": 13,
    "namaarab": "الممتحنة",
    "namaarti": "Wanita yang Diuji",
    "urutan": 91
  },
  {
    "id": 61,
    "nama": "As-Saf",
    "tempat": "madinah",
    "ayat": 14,
    "namaarab": "الصف",
    "namaarti": "Barisan",
    "urutan": 109
  },
  {
    "id": 62,
    "nama": "Al-Jumu'ah",
    "tempat": "madinah",
    "ayat": 11,
    "namaarab": "الجمعة",
    "namaarti": "Hari Jum\\'at",
    "urutan": 110
  },
  {
    "id": 63,
    "nama": "Al-Munafiqun",
    "tempat": "madinah",
    "ayat": 11,
    "namaarab": "المنافقون",
    "namaarti": "Kaum Munafik",
    "urutan": 104
  },
  {
    "id": 64,
    "nama": "At-Taghabun",
    "tempat": "madinah",
    "ayat": 18,
    "namaarab": "التغابن",
    "namaarti": "Hari Dinampakkan Kesalahan",
    "urutan": 108
  },
  {
    "id": 65,
    "nama": "At-Talaq",
    "tempat": "madinah",
    "ayat": 12,
    "namaarab": "الطلاق",
    "namaarti": "Perceraian",
    "urutan": 99
  },
  {
    "id": 66,
    "nama": "At-Tahrim",
    "tempat": "madinah",
    "ayat": 12,
    "namaarab": "التحريم",
    "namaarti": "Mengharamkan",
    "urutan": 107
  },
  {
    "id": 67,
    "nama": "Al-Mulk",
    "tempat": "makkah",
    "ayat": 30,
    "namaarab": "الملك",
    "namaarti": "Kerajaan",
    "urutan": 77
  },
  {
    "id": 68,
    "nama": "Al-Qalam",
    "tempat": "makkah",
    "ayat": 52,
    "namaarab": "القلم",
    "namaarti": "Pena",
    "urutan": 2
  },
  {
    "id": 69,
    "nama": "Al-Haqqah",
    "tempat": "makkah",
    "ayat": 52,
    "namaarab": "الحاقة",
    "namaarti": "Kenyataan (Hari Kiamat)",
    "urutan": 78
  },
  {
    "id": 70,
    "nama": "Al-Ma'arij",
    "tempat": "makkah",
    "ayat": 44,
    "namaarab": "المعارج",
    "namaarti": "Tempat yang Naik",
    "urutan": 79
  },
  {
    "id": 71,
    "nama": "Nuh",
    "tempat": "makkah",
    "ayat": 28,
    "namaarab": "نوح",
    "namaarti": "Nuh",
    "urutan": 71
  },
  {
    "id": 72,
    "nama": "Al-Jinn",
    "tempat": "makkah",
    "ayat": 28,
    "namaarab": "الجن",
    "namaarti": "Jin",
    "urutan": 40
  },
  {
    "id": 73,
    "nama": "Al-Muzzammil",
    "tempat": "makkah",
    "ayat": 20,
    "namaarab": "المزمل",
    "namaarti": "Orang yang Berselimut",
    "urutan": 3
  },
  {
    "id": 74,
    "nama": "Al-Muddaththir",
    "tempat": "makkah",
    "ayat": 56,
    "namaarab": "المدثر",
    "namaarti": "Orang yang Berkemul",
    "urutan": 4
  },
  {
    "id": 75,
    "nama": "Al-Qiyamah",
    "tempat": "makkah",
    "ayat": 40,
    "namaarab": "القيامة",
    "namaarti": "Hari Berbangkit",
    "urutan": 31
  },
  {
    "id": 76,
    "nama": "Al-Insan",
    "tempat": "madinah",
    "ayat": 31,
    "namaarab": "الانسان",
    "namaarti": "Manusia",
    "urutan": 98
  },
  {
    "id": 77,
    "nama": "Al-Mursalat",
    "tempat": "makkah",
    "ayat": 50,
    "namaarab": "المرسلات",
    "namaarti": "Malaikat-malaikan yang Diutus",
    "urutan": 33
  },
  {
    "id": 78,
    "nama": "An-Naba",
    "tempat": "makkah",
    "ayat": 40,
    "namaarab": "النبإ",
    "namaarti": "Berita Besar",
    "urutan": 80
  },
  {
    "id": 79,
    "nama": "An-Nazi'at",
    "tempat": "makkah",
    "ayat": 46,
    "namaarab": "النازعات",
    "namaarti": "Malaikat yang Mencabut",
    "urutan": 81
  },
  {
    "id": 80,
    "nama": "'Abasa",
    "tempat": "makkah",
    "ayat": 42,
    "namaarab": "عبس",
    "namaarti": "Ia Bermuka Masam",
    "urutan": 24
  },
  {
    "id": 81,
    "nama": "At-Takwir",
    "tempat": "makkah",
    "ayat": 29,
    "namaarab": "التكوير",
    "namaarti": "Menggulung",
    "urutan": 7
  },
  {
    "id": 82,
    "nama": "Al-Infitar",
    "tempat": "makkah",
    "ayat": 19,
    "namaarab": "الإنفطار",
    "namaarti": "Terbelah",
    "urutan": 82
  },
  {
    "id": 83,
    "nama": "Al-Mutaffifin",
    "tempat": "makkah",
    "ayat": 36,
    "namaarab": "المطففين",
    "namaarti": "Orang-orang Curang",
    "urutan": 86
  },
  {
    "id": 84,
    "nama": "Al-Inshiqaq",
    "tempat": "makkah",
    "ayat": 25,
    "namaarab": "الإنشقاق",
    "namaarti": "Terbelah",
    "urutan": 83
  },
  {
    "id": 85,
    "nama": "Al-Buruj",
    "tempat": "makkah",
    "ayat": 22,
    "namaarab": "البروج",
    "namaarti": "Gugusan Bintang",
    "urutan": 27
  },
  {
    "id": 86,
    "nama": "At-Tariq",
    "tempat": "makkah",
    "ayat": 17,
    "namaarab": "الطارق",
    "namaarti": "Yang Datang di Malam Hari",
    "urutan": 36
  },
  {
    "id": 87,
    "nama": "Al-A'la",
    "tempat": "makkah",
    "ayat": 19,
    "namaarab": "الأعلى",
    "namaarti": "Yang Paling Tinggi",
    "urutan": 8
  },
  {
    "id": 88,
    "nama": "Al-Ghashiyah",
    "tempat": "makkah",
    "ayat": 26,
    "namaarab": "الغاشية",
    "namaarti": "Hari Pembalasan",
    "urutan": 68
  },
  {
    "id": 89,
    "nama": "Al-Fajr",
    "tempat": "makkah",
    "ayat": 30,
    "namaarab": "الفجر",
    "namaarti": "Fajar",
    "urutan": 10
  },
  {
    "id": 90,
    "nama": "Al-Balad",
    "tempat": "makkah",
    "ayat": 20,
    "namaarab": "البلد",
    "namaarti": "Negeri",
    "urutan": 35
  },
  {
    "id": 91,
    "nama": "Ash-Shams",
    "tempat": "makkah",
    "ayat": 15,
    "namaarab": "الشمس",
    "namaarti": "Matahari",
    "urutan": 26
  },
  {
    "id": 92,
    "nama": "Al-Layl",
    "tempat": "makkah",
    "ayat": 21,
    "namaarab": "الليل",
    "namaarti": "Malam",
    "urutan": 9
  },
  {
    "id": 93,
    "nama": "Ad-Duhaa",
    "tempat": "makkah",
    "ayat": 11,
    "namaarab": "الضحى",
    "namaarti": "Waktu Dhuha",
    "urutan": 11
  },
  {
    "id": 94,
    "nama": "Ash-Sharh",
    "tempat": "makkah",
    "ayat": 8,
    "namaarab": "الشرح",
    "namaarti": "Melapangkan",
    "urutan": 12
  },
  {
    "id": 95,
    "nama": "At-Tin",
    "tempat": "makkah",
    "ayat": 8,
    "namaarab": "التين",
    "namaarti": "Buah Tin",
    "urutan": 28
  },
  {
    "id": 96,
    "nama": "Al-'Alaq",
    "tempat": "makkah",
    "ayat": 19,
    "namaarab": "العلق",
    "namaarti": "Segumpal Darah",
    "urutan": 1
  },
  {
    "id": 97,
    "nama": "Al-Qadr",
    "tempat": "makkah",
    "ayat": 5,
    "namaarab": "القدر",
    "namaarti": "Kemuliaan",
    "urutan": 25
  },
  {
    "id": 98,
    "nama": "Al-Bayyinah",
    "tempat": "madinah",
    "ayat": 8,
    "namaarab": "البينة",
    "namaarti": "Pembuktian",
    "urutan": 100
  },
  {
    "id": 99,
    "nama": "Az-Zalzalah",
    "tempat": "madinah",
    "ayat": 8,
    "namaarab": "الزلزلة",
    "namaarti": "Kegoncangan",
    "urutan": 93
  },
  {
    "id": 100,
    "nama": "Al-'Adiyat",
    "tempat": "makkah",
    "ayat": 11,
    "namaarab": "العاديات",
    "namaarti": "Berlari Kencang",
    "urutan": 14
  },
  {
    "id": 101,
    "nama": "Al-Qari'ah",
    "tempat": "makkah",
    "ayat": 11,
    "namaarab": "القارعة",
    "namaarti": "Hari Kiamat",
    "urutan": 30
  },
  {
    "id": 102,
    "nama": "At-Takathur",
    "tempat": "makkah",
    "ayat": 8,
    "namaarab": "التكاثر",
    "namaarti": "Bermegah-megahan",
    "urutan": 16
  },
  {
    "id": 103,
    "nama": "Al-'Asr",
    "tempat": "makkah",
    "ayat": 3,
    "namaarab": "العصر",
    "namaarti": "Waktu Sore",
    "urutan": 13
  },
  {
    "id": 104,
    "nama": "Al-Humazah",
    "tempat": "makkah",
    "ayat": 9,
    "namaarab": "الهمزة",
    "namaarti": "Pengumpat",
    "urutan": 32
  },
  {
    "id": 105,
    "nama": "Al-Fil",
    "tempat": "makkah",
    "ayat": 5,
    "namaarab": "الفيل",
    "namaarti": "Gajah",
    "urutan": 19
  },
  {
    "id": 106,
    "nama": "Quraysh",
    "tempat": "makkah",
    "ayat": 4,
    "namaarab": "قريش",
    "namaarti": "Suku Quraisy",
    "urutan": 29
  },
  {
    "id": 107,
    "nama": "Al-Ma'un",
    "tempat": "makkah",
    "ayat": 7,
    "namaarab": "الماعون",
    "namaarti": "Barang yang Berguna",
    "urutan": 17
  },
  {
    "id": 108,
    "nama": "Al-Kawthar",
    "tempat": "makkah",
    "ayat": 3,
    "namaarab": "الكوثر",
    "namaarti": "Nikmat Berlimpah",
    "urutan": 15
  },
  {
    "id": 109,
    "nama": "Al-Kafirun",
    "tempat": "makkah",
    "ayat": 6,
    "namaarab": "الكافرون",
    "namaarti": "Orang-orang Kafir",
    "urutan": 18
  },
  {
    "id": 110,
    "nama": "An-Nasr",
    "tempat": "madinah",
    "ayat": 3,
    "namaarab": "النصر",
    "namaarti": "Pertolongan",
    "urutan": 114
  },
  {
    "id": 111,
    "nama": "Al-Masad",
    "tempat": "makkah",
    "ayat": 5,
    "namaarab": "المسد",
    "namaarti": "Gejolak Api (Sabut)",
    "urutan": 6
  },
  {
    "id": 112,
    "nama": "Al-Ikhlas",
    "tempat": "makkah",
    "ayat": 4,
    "namaarab": "الإخلاص",
    "namaarti": "Ikhlash",
    "urutan": 22
  },
  {
    "id": 113,
    "nama": "Al-Falaq",
    "tempat": "makkah",
    "ayat": 5,
    "namaarab": "الفلق",
    "namaarti": "Waktu Shubuh",
    "urutan": 20
  },
  {
    "id": 114,
    "nama": "An-Nas",
    "tempat": "makkah",
    "ayat": 6,
    "namaarab": "الناس",
    "namaarti": "Umat Manusia",
    "urutan": 21
  }
]

const dataJuz=[
    {
      "id": 1,
      "suratawal": [
        "Al-Fatihah",
        "1"
      ],
      "suratakhir": [
        "Al-Baqarah",
        "141"
      ]
    },
    {
      "id": 2,
      "suratawal": [
        "Al-Baqarah",
        "142"
      ],
      "suratakhir": [
        "Al-Baqarah",
        "252"
      ]
    },
    {
      "id": 3,
      "suratawal": [
        "Al-Baqarah",
        "253"
      ],
      "suratakhir": [
        "Ali 'Imran",
        "92"
      ]
    },
    {
      "id": 4,
      "suratawal": [
        "Ali 'Imran",
        "93"
      ],
      "suratakhir": [
        "An-Nisa",
        "23"
      ]
    },
    {
      "id": 5,
      "suratawal": [
        "An-Nisa",
        "24"
      ],
      "suratakhir": [
        "An-Nisa",
        "147"
      ]
    },
    {
      "id": 6,
      "suratawal": [
        "An-Nisa",
        "148"
      ],
      "suratakhir": [
        "Al-Ma'idah",
        "81"
      ]
    },
    {
      "id": 7,
      "suratawal": [
        "Al-Ma'idah",
        "82"
      ],
      "suratakhir": [
        "Al-An'am",
        "110"
      ]
    },
    {
      "id": 8,
      "suratawal": [
        "Al-An'am",
        "111"
      ],
      "suratakhir": [
        "Al-A'raf",
        "87"
      ]
    },
    {
      "id": 9,
      "suratawal": [
        "Al-A'raf",
        "88"
      ],
      "suratakhir": [
        "Al-Anfal",
        "40"
      ]
    },
    {
      "id": 10,
      "suratawal": [
        "Al-Anfal",
        "41"
      ],
      "suratakhir": [
        "At-Tawbah",
        "92"
      ]
    },
    {
      "id": 11,
      "suratawal": [
        "At-Tawbah",
        "93"
      ],
      "suratakhir": [
        "Hud",
        "5"
      ]
    },
    {
      "id": 12,
      "suratawal": [
        "Hud",
        "6"
      ],
      "suratakhir": [
        "Yusuf",
        "52"
      ]
    },
    {
      "id": 13,
      "suratawal": [
        "Yusuf",
        "53"
      ],
      "suratakhir": [
        "Ibrahim",
        "52"
      ]
    },
    {
      "id": 14,
      "suratawal": [
        "Al-Hijr",
        "1"
      ],
      "suratakhir": [
        "An-Nahl",
        "128"
      ]
    },
    {
      "id": 15,
      "suratawal": [
        "Al-Isra",
        "1"
      ],
      "suratakhir": [
        "Al-Kahf",
        "74"
      ]
    },
    {
      "id": 16,
      "suratawal": [
        "Al-Kahf",
        "75"
      ],
      "suratakhir": [
        "Taha",
        "135"
      ]
    },
    {
      "id": 17,
      "suratawal": [
        "Al-Anbya",
        "1"
      ],
      "suratakhir": [
        "Al-Hajj",
        "78"
      ]
    },
    {
      "id": 18,
      "suratawal": [
        "Al-Mu'minun",
        "1"
      ],
      "suratakhir": [
        "Al-Furqan",
        "20"
      ]
    },
    {
      "id": 19,
      "suratawal": [
        "Al-Furqan",
        "21"
      ],
      "suratakhir": [
        "An-Naml",
        "55"
      ]
    },
    {
        "id": 20,
        "suratawal": [
          "An-Naml",
          "56"
        ],
        "suratakhir": [
          "Al-'Ankabut",
          "45"
        ]
      },
      {
        "id": 21,
        "suratawal": [
          "Al-'Ankabut",
          "46"
        ],
        "suratakhir": [
          "Al-Ahzab",
          "30"
        ]
      },
      {
        "id": 22,
        "suratawal": [
          "Al-Ahzab",
          "31"
        ],
        "suratakhir": [
          "Ya-Sin",
          "27"
        ]
      },
      {
        "id": 24,
        "suratawal": [
          "Az-Zumar",
          "32"
        ],
        "suratakhir": [
          "Fussilat",
          "46"
        ]
      },
    {
      "id": 23,
      "suratawal": [
        "Ya-Sin",
        "28"
      ],
      "suratakhir": [
        "Az-Zumar",
        "31"
      ]
    },
    {
      "id": 25,
      "suratawal": [
        "Fussilat",
        "47"
      ],
      "suratakhir": [
        "Al-Jathiyah",
        "37"
      ]
    },
    {
      "id": 26,
      "suratawal": [
        "Al-Ahqaf",
        "1"
      ],
      "suratakhir": [
        "Adh-Dhariyat",
        "30"
      ]
    },
    {
      "id": 27,
      "suratawal": [
        "Adh-Dhariyat",
        "31"
      ],
      "suratakhir": [
        "Al-Hadid",
        "29"
      ]
    },
    {
      "id": 28,
      "suratawal": [
        "Al-Mujadila",
        "1"
      ],
      "suratakhir": [
        "At-Tahrim",
        "12"
      ]
    },
    {
      "id": 29,
      "suratawal": [
        "Al-Mulk",
        "1"
      ],
      "suratakhir": [
        "Al-Mursalat",
        "50"
      ]
    },
    {
      "id": 30,
      "suratawal": [
        "An-Naba",
        "1"
      ],
      "suratakhir": [
        "An-Nas",
        "6"
      ]
    }
  ]


// datanya =[]

// fetch('https://api.quran.com/api/v4/chapters?language=id')
// .then(res=>res.json())
// .then(data=>{
//   data =  data.chapters
//   for(i=0;i<data.length;i++){
//     datanya.push(ss(data[i]))
    
//   }
//   let c = JSON.stringify(datanya)
//   console.log(c)

// })

// function ss(x){
//   return {
//     "id": x.id,
//     "nama": x.name_simple ,
//     "tempat": x.revelation_place,
//     "ayat": x.verses_count,
//     "namaarab": x.name_arabic,
//     "namaarti":x.translated_name.name,
//     'urutan':x.revelation_order
  
//   }
// }
  