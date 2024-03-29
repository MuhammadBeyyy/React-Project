const namesOfAllah = [
    { arabic: "الرَّحْمَٰنُ", english: "Ar-Rahman (The Most Gracious)" },
    { arabic: "الرَّحِيمُ", english: "Ar-Rahim (The Most Merciful)" },
    { arabic: "الْمَلِكُ", english: "Al-Malik (The King)" },
    { arabic: "الْقُدُّوسُ", english: "Al-Quddus (The Holy)" },
    { arabic: "السَّلَامُ", english: "As-Salam (The Peace)" },
    { arabic: "الْمُؤْمِنُ", english: "Al-Mumin (The Guardian of Faith)" },
    { arabic: "الْمُهَيْمِنُ", english: "Al-Muhaymin (The Protector)" },
    { arabic: "الْعَزِيزُ", english: "Al-Aziz (The Mighty)" },
    { arabic: "الْجَبَّارُ", english: "Al-Jabbar (The Compeller)" },
    { arabic: "الْمُتَكَبِّرُ", english: "Al-Mutakabbir (The Majestic)" },
    { arabic: "الْخَالِقُ", english: "Al-Khaliq (The Creator)" },
    { arabic: "الْبَارِئُ", english: "Al-Bari (The Evolver)" },
    { arabic: "الْمُصَوِّرُ", english: "Al-Musawwir (The Fashioner)" },
    { arabic: "الْغَفَّارُ", english: "Al-Ghaffar (The Forgiver)" },
    { arabic: "الْقَهَّارُ", english: "Al-Qahhar (The Subduer)" },
    { arabic: "الْوَهَّابُ", english: "Al-Wahhab (The Bestower)" },
    { arabic: "الرَّزَّاقُ", english: "Ar-Razzaq (The Provider)" },
    { arabic: "الْفَتَّاحُ", english: "Al-Fattah (The Opener)" },
    { arabic: "الْعَلِيمُ", english: "Al-Alim (The Knower)" },
    { arabic: "الْقَابِضُ", english: "Al-Qabid (The Restrainer)" },
    { arabic: "الْبَاسِطُ", english: "Al-Basit (The Expander)" },
    { arabic: "الْخَافِضُ", english: "Al-Khafid (The Abaser)" },
    { arabic: "الرَّافِعُ", english: "Ar-Rafi (The Exalter)" },
    { arabic: "الْمُعِزُّ", english: "Al-Muizz (The Giver of Honour)" },
    { arabic: "الْمُذِلُّ", english: "Al-Mudhill (The Giver of Dishonour)" },
    { arabic: "السَّمِيعُ", english: "As-Sami (The Hearer)" },
    { arabic: "الْبَصِيرُ", english: "Al-Basir (The Seer)" },
    { arabic: "الْحَكَمُ", english: "Al-Hakam (The Judge)" },
    { arabic: "الْعَدْلُ", english: "Al-Adl (The Just)" },
    { arabic: "اللَّطِيفُ", english: "Al-Latif (The Gentle)" },
    { arabic: "الْخَبِيرُ", english: "Al-Khabir (The All-Aware)" },
    { arabic: "الْحَلِيمُ", english: "Al-Halim (The Forbearing)" },
    { arabic: "الْعَظِيمُ", english: "Al-Azim (The Magnificent)" },
    { arabic: "الْغَفُورُ", english: "Al-Ghafur (The Forgiving)" },
    { arabic: "الشَّكُورُ", english: "Ash-Shakur (The Appreciative)" },
    { arabic: "الْعَلِيُّ", english: "Al-Ali (The Most High)" },
    { arabic: "الْكَبِيرُ", english: "Al-Kabir (The Greatest)" },
    { arabic: "الْحَفِيظُ", english: "Al-Hafiz (The Guardian)" },
    { arabic: "الْمُقِيتُ", english: "Al-Muqit (The Sustainer)" },
    { arabic: "الْحَسِيبُ", english: "Al-Hasib (The Reckoner)" },
    { arabic: "الْجَلِيلُ", english: "Al-Jalil (The Majestic)" },
    { arabic: "الْكَرِيمُ", english: "Al-Karim (The Generous)" },
    { arabic: "الرَّقِيبُ", english: "Ar-Raqib (The Watchful)" },
    { arabic: "الْمُجِيبُ", english: "Al-Mujib (The Responsive)" },
    { arabic: "الْوَاسِعُ", english: "Al-Wasi (The All-Encompassing)" },
    { arabic: "الْحَكِيمُ", english: "Al-Hakim (The Wise)" },
    { arabic: "الْوَدُودُ", english: "Al-Wadud (The Loving)" },
    { arabic: "الْمَجِيدُ", english: "Al-Majid (The Glorious)" },
    { arabic: "الْبَاعِثُ", english: "Al-Baith (The Resurrector)" },
    { arabic: "الشَّهِيدُ", english: "Ash-Shahid (The Witness)" },
    { arabic: "الْحَقُّ", english: "Al-Haqq (The Truth)" },
    { arabic: "الْوَكِيلُ", english: "Al-Wakil (The Trustee)" },
    { arabic: "الْقَوِيُّ", english: "Al-Qawiyy (The Strong)" },
    { arabic: "ٱلْمَتِينُ", english: "Al-Mateen (The Steadfast)" },
    { arabic: "الْمُقْتَدِرُ", english: "Al-Muqtadir (The Powerful)" },
    { arabic: "الْمُقَدِّمُ", english: "Al-Muqaddim (The Expediter)" },
    { arabic: "الْمُؤَخِّرُ", english: "Al-Muakhkhir (The Delayer)" },
    { arabic: "الأوَّلُ", english: "Al-Awwal (The First)" },
    { arabic: "الْآخِرُ", english: "Al-Akhir (The Last)" },
    { arabic: "الظَّاهِرُ", english: "Az-Zahir (The Manifest)" },
    { arabic: "الْبَاطِنُ", english: "Al-Batin (The Hidden)" },
    { arabic: "الْوَالِي", english: "Al-Wali (The Governor)" },
    { arabic: "الْمُتَعَالِي", english: "Al-Mutaali (The Most Exalted)" },
    { arabic: "الْبَرُّ", english: "Al-Barr (The Source of Goodness)" },
    { arabic: "التَّوَابُ", english: "At-Tawwab (The Acceptor of Repentance)" },
    { arabic: "الْمُنتَقِمُ", english: "Al-Muntaqim (The Avenger)" },
    { arabic: "العَفُوُّ", english: "Al-Afuww (The Pardoner)" },
    { arabic: "الرَّءُوفُ", english: "Ar-Rauf (The Compassionate)" },
    {
      arabic: "مَالِكُ الْمُلْكِ",
      english: "Malik ul-Mulk (Owner of the Kingdom)",
    },
    {
      arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
      english: "Dhu al-Jalal wal-Ikram (Possessor of Majesty and Honour)",
    },
    { arabic: "الْمُقْسِطُ", english: "Al-Muqsit (The Just)" },
    { arabic: "الْجَامِعُ", english: "Al-Jami (The Gatherer)" },
    { arabic: "الْغَنِيُّ", english: "Al-Ghani (The Rich)" },
    { arabic: "الْمُغْنِي", english: "Al-Mughni (The Enricher)" },
    { arabic: "الْمَانِعُ", english: "Al-Mani (The Preventer)" },
    { arabic: "الضَّارُّ", english: "Ad-Darr (The Distresser)" },
    { arabic: "النَّافِعُ", english: "An-Nafi (The Propitious)" },
    { arabic: "النُّورُ", english: "An-Nur (The Light)" },
    { arabic: "الْهَادِي", english: "Al-Hadi (The Guide)" },
    { arabic: "الْبَدِيعُ", english: "Al-Badi (The Incomparable)" },
    { arabic: "الْبَاقِي", english: "Al-Baqi (The Everlasting)" },
    { arabic: "الْوَارِثُ", english: "Al-Warith (The Inheritor)" },
    { arabic: "الرَّشِيدُ", english: "Ar-Rashid (The Righteous Teacher)" },
    { arabic: "الصَّبُورُ", english: "As-Sabur (The Patient)" },
  ];
  
  export default namesOfAllah;
  