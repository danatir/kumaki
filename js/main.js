const vocabData = {};
const kanjiData = {};
vocabData['S1'] = {
  "L1": [
    {word:"私",reading:"わたし",def:"I, me",pos:"Noun",sub:"1-2"},
    {word:"あなた",def:"you",pos:"Noun",sub:"1-2"},
    {word:"彼",reading:"かれ",def:"he, him",pos:"Noun",sub:"1-2"},
    {word:"彼女",reading:"かのじょ",def:"she, her",pos:"Noun",sub:"1-2"},
    {word:"日本人",reading:"にほんじん",def:"Japanese person",pos:"Noun",sub:"1-2"},
    {word:"韓国",reading:"かんこく",def:"South Korea",pos:"Noun",sub:"1-2"},
    {word:"中国",reading:"ちゅうごく",def:"China",pos:"Noun",sub:"1-2"},
    {word:"イギリス",def:"UK, England",pos:"Noun",sub:"1-2"},
    {word:"フランス",def:"France",pos:"Noun",sub:"1-2"},
    {word:"アメリカ",def:"USA",pos:"Noun",sub:"1-2"},
    {word:"学生",reading:"がくせい",def:"student",pos:"Noun",sub:"1-2"},
    {word:"会社員",reading:"かいしゃいん",def:"office worker",pos:"Noun",sub:"1-2"},
    {word:"先生",reading:"せんせい",def:"teacher",pos:"Noun",sub:"1-2"},
    {word:"医者",reading:"いしゃ",def:"doctor",pos:"Noun",sub:"1-2"},
    {word:"歌手",reading:"かしゅ",def:"singer",pos:"Noun",sub:"1-2"},
    {word:"警察官",reading:"けいさつかん",def:"police officer",pos:"Noun",sub:"1-2"},
    {word:"(お)国",reading:"(お)くに",def:"country, nation",pos:"Noun",sub:"1-2"},
    {word:"ドイツ",def:"Germany",pos:"Noun",sub:"1-2"},
  ],
  "L2": [
    {word:"電話番号",reading:"でんわばんごう",def:"telephone number",pos:"Noun",sub:"2-1"},
    {word:"何番",reading:"なんばん",def:"What number",pos:"Expr",sub:"2-1",exprKey:"でんわばんごうは なんばん ですか"},
    {word:"牛",reading:"うし",def:"cow, cattle",pos:"Noun",sub:"2-2"},
    {word:"果物",reading:"くだもの",def:"fruit",pos:"Noun",sub:"2-2"},
    {word:"本",reading:"ほん",def:"book",pos:"Noun",sub:"2-2"},
    {word:"辞書",reading:"じしょ",def:"dictionary",pos:"Noun",sub:"2-2"},
    {word:"魚",reading:"さかな",def:"fish",pos:"Noun",sub:"2-2"},
    {word:"鳥",reading:"とり",def:"bird, chicken",pos:"Noun",sub:"2-2"},
    {word:"飛行機",reading:"ひこうき",def:"airplane",pos:"Noun",sub:"2-2"},
    {word:"（お）茶",reading:"（お）ちゃ",def:"tea",pos:"Noun",sub:"2-2"},
    {word:"切手",reading:"きって",def:"stamp",pos:"Noun",sub:"2-2"},
    {word:"いす",def:"chair",pos:"Noun",sub:"2-2"},
    {word:"机",reading:"つくえ",def:"desk",pos:"Noun",sub:"2-2"},
    {word:"傘",reading:"かさ",def:"umbrella",pos:"Noun",sub:"2-2"},
    {word:"時計",reading:"とけい",def:"watch, clock",pos:"Noun",sub:"2-2"},
    {word:"猫",reading:"ねこ",def:"cat",pos:"Noun",sub:"2-2"},
    {word:"犬",reading:"いぬ",def:"dog",pos:"Noun",sub:"2-2"},
    {word:"雑誌",reading:"ざっし",def:"magazine",pos:"Noun",sub:"2-2"},
    {word:"帽子",reading:"ぼうし",def:"hat, cap",pos:"Noun",sub:"2-2"},
    {word:"鍵",reading:"かぎ",def:"key",pos:"Noun",sub:"2-2"},
    {word:"ペン",def:"pen",pos:"Noun",sub:"2-2"},
    {word:"えんぴつ",def:"pencil",pos:"Noun",sub:"2-2"},
    {word:"かばん",def:"bag",pos:"Noun",sub:"2-2"},
    {word:"くつ",def:"shoes",pos:"Noun",sub:"2-2"},
    {word:"りんご",def:"apple",pos:"Noun",sub:"2-2"},
    {word:"電話",reading:"でんわ",def:"telephone",pos:"Noun",sub:"2-2"},
    {word:"新聞",reading:"しんぶん",def:"newspaper",pos:"Noun",sub:"2-2"},
    {word:"何",reading:"なに",def:"What (なに ・ なん)",pos:"Expr",sub:"2-2",exprKey:"なにを しますか"},
    {word:"お金",reading:"おかね",def:"money",pos:"Noun",sub:"2-3"},
    {word:"鉛筆",reading:"えんぴつ",def:"pencil",pos:"Noun",sub:"2-3"},
    {word:"教科書",reading:"きょうかしょ",def:"textbook",pos:"Noun",sub:"2-3"},
    {word:"パイナップル",def:"pineapple",pos:"Noun",sub:"2-3"},
    {word:"みかん",def:"mandarin orange",pos:"Noun",sub:"2-3"},
    {word:"バナナ",def:"banana",pos:"Noun",sub:"2-3"},
    {word:"切符",reading:"きっぷ",def:"ticket",pos:"Noun",sub:"2-3"},
    {word:"テレビ",def:"television",pos:"Noun",sub:"2-3"},
    {word:"パン",def:"bread",pos:"Noun",sub:"2-3"},
    {word:"ノート",def:"notebook",pos:"Noun",sub:"2-3"},
    {word:"車",reading:"くるま",def:"car",pos:"Noun",sub:"2-3"},
    {word:"いくら",reading:"いくら",def:"How much (cost)",pos:"Expr",sub:"2-3",exprKey:"いくら かかりますか"},
    {word:"指輪",reading:"ゆびわ",def:"ring",pos:"Noun",sub:"2-4"},
    {word:"シャツ",def:"shirt",pos:"Noun",sub:"2-4"},
    {word:"服",reading:"ふく",def:"clothes",pos:"Noun",sub:"2-4"},
    {word:"眼鏡",reading:"めがね",def:"glasses",pos:"Noun",sub:"2-4"},
    {word:"鞄",reading:"かばん",def:"bag",pos:"Noun",sub:"2-5"},
    {word:"パソコン",def:"computer",pos:"Noun",sub:"2-5"},
    {word:"スイス",def:"Switzerland",pos:"Noun",sub:"2-5"},
    {word:"イタリア",def:"Italy",pos:"Noun",sub:"2-5"},
    {word:"カメラ",def:"camera",pos:"Noun",sub:"2-5"},
    {word:"（お）酒",reading:"（お）さけ",def:"alcohol, sake",pos:"Noun",sub:"2-5"},
    {word:"カップ",def:"cup",pos:"Noun",sub:"2-5"},
    {word:"どこの",reading:"どこの",def:"Where is it from",pos:"Expr",sub:"2-5",exprKey:"どこの くるま ですか"},
  ],
  "L3": [
    {word:"アパート",def:"apartment",pos:"Noun",sub:"3-1"},
    {word:"だれ",reading:"だれ",def:"Who",pos:"Expr",sub:"3-1",exprKey:"だれと 飲みますか"},
    {word:"うち",def:"home, house",pos:"Noun",sub:"3-2"},
    {word:"テスト",def:"test, exam",pos:"Noun",sub:"3-2"},
    {word:"髪",reading:"かみ",def:"hair",pos:"Noun",sub:"3-2"},
    {word:"ケーキ",def:"cake",pos:"Noun",sub:"3-2"},
    {word:"木",reading:"き",def:"tree",pos:"Noun",sub:"3-2"},
    {word:"部屋",reading:"へや",def:"room",pos:"Noun",sub:"3-2"},
    {word:"大きい",reading:"おおきい",def:"big, large",pos:"Adj",sub:"3-2",ex:"山田さんの車は大きいです。"},
    {word:"小さい",reading:"ちいさい",def:"small, little",pos:"Adj",sub:"3-2",ex:"このねこは小さいです。"},
    {word:"高い",reading:"たかい",def:"tall, expensive",pos:"Adj",sub:"3-2",ex:"めがねはたかいです。"},
    {word:"安い",reading:"やすい",def:"cheap",pos:"Adj",sub:"3-2",ex:"きってはやすいです。"},
    {word:"低い",reading:"ひくい",def:"low; short (height)",pos:"Adj",sub:"3-2",ex:"あの木はひくいです。"},
    {word:"長い",reading:"ながい",def:"long",pos:"Adj",sub:"3-2",ex:"わたしのかみはながいです。"},
    {word:"短い",reading:"みじかい",def:"short (length)",pos:"Adj",sub:"3-2",ex:"かれのかみはみじかいです。"},
    {word:"新しい",reading:"あたらしい",def:"new",pos:"Adj",sub:"3-2",ex:"このカメラはあたらしいです。"},
    {word:"古い",reading:"ふるい",def:"old (thing)",pos:"Adj",sub:"3-2",ex:"この本はふるいです。"},
    {word:"おいしい",def:"delicious",pos:"Adj",sub:"3-2",ex:"このりんごはおいしいです。"},
    {word:"まずい",def:"bad tasting",pos:"Adj",sub:"3-2",ex:"そのおさけはまずいです。"},
    {word:"難しい",reading:"むずかしい",def:"difficult",pos:"Adj",sub:"3-2",ex:"このテストはむずかしいです。"},
    {word:"易しい",reading:"やさしい",def:"easy",pos:"Adj",sub:"3-2",ex:"この本はやさしいです。"},
    {word:"暑い",reading:"あつい",def:"hot (weather)",pos:"Adj",sub:"3-2",ex:"今日はあついです。"},
    {word:"寒い",reading:"さむい",def:"cold (weather)",pos:"Adj",sub:"3-2",ex:"このへやはさむいです。"},
    {word:"いい",def:"good",pos:"Adj",sub:"3-2",ex:"そのじしょはいいです。"},
    {word:"悪い",reading:"わるい",def:"bad; wrong",pos:"Adj",sub:"3-2",ex:"そのじしょはわるいです。"},
    {word:"面白い",reading:"おもしろい",def:"interesting; funny",pos:"Adj",sub:"3-2",ex:"このテレビはおもしろいです。"},
    {word:"つまらない",def:"boring",pos:"Adj",sub:"3-2",ex:"この本はつまらないです。"},
    {word:"重い",reading:"おもい",def:"heavy",pos:"Adj",sub:"3-2",ex:"このつくえはおもいです。"},
    {word:"軽い",reading:"かるい",def:"light (weight)",pos:"Adj",sub:"3-2",ex:"このいすはかるいです。"},
    {word:"白い",reading:"しろい",def:"white",pos:"Adj",sub:"3-2",ex:"あのとりはしろいです。"},
    {word:"黒い",reading:"くろい",def:"black",pos:"Adj",sub:"3-2",ex:"このねこはくろいです。"},
    {word:"うるさい",def:"noisy, loud",pos:"Adj",sub:"3-2",ex:"大きい犬はうるさいです。"},
    {word:"忙しい",reading:"いそがしい",def:"busy",pos:"Adj",sub:"3-2",ex:"このアルバイトはとてもいそがしいです。"},
    {word:"汚い",reading:"きたない",def:"dirty; messy",pos:"Adj",sub:"3-2",ex:"彼のへやはきたないです。"},
    {word:"どう",reading:"どう",def:"How",pos:"Expr",sub:"3-2",exprKey:"えいがは どう でしたか"},
    {word:"公園",reading:"こうえん",def:"park",pos:"Noun",sub:"3-3"},
    {word:"東京",reading:"とうきょう",def:"Tokyo",pos:"Noun",sub:"3-3"},
    {word:"地下鉄",reading:"ちかてつ",def:"subway",pos:"Noun",sub:"3-3"},
    {word:"（お）金",reading:"（お）かね",def:"money",pos:"Noun",sub:"3-3"},
    {word:"目",reading:"め",def:"eye",pos:"Noun",sub:"3-3"},
    {word:"とても",def:"very",pos:"Adv",sub:"3-3",ex:"わたしのかばんはとても大きいです。"},
    {word:"親切",reading:"しんせつ",def:"kind, friendly",pos:"Adj",sub:"3-3",ex:"彼はしんせつです。"},
    {word:"便利",reading:"べんり",def:"convenient; useful",pos:"Adj",sub:"3-3",ex:"コンピューターはべんりです。"},
    {word:"きれい",def:"pretty, clean",pos:"Adj",sub:"3-3",ex:"彼女はきれいです。"},
    {word:"静か",reading:"しずか",def:"quiet; calm",pos:"Adj",sub:"3-3",ex:"まちはしずかです。"},
    {word:"元気",reading:"げんき",def:"healthy, energetic",pos:"Adj",sub:"3-3",ex:"彼はげんきです。"},
    {word:"大切",reading:"たいせつ",def:"important",pos:"Adj",sub:"3-3",ex:"じしょはたいせつです。"},
    {word:"ハンサム",def:"handsome",pos:"Adj",sub:"3-3",ex:"アンドリューさんはハンサムです。"},
    {word:"暇",reading:"ひま",def:"free time; not busy",pos:"Adj",sub:"3-3",ex:"私はあしたひまです。"},
    {word:"大変",reading:"たいへん",def:"tough; hard; terrible",pos:"Adj",sub:"3-3"},
    {word:"人",reading:"ひと",def:"person",pos:"Noun",sub:"3-4"},
    {word:"クラスメート",def:"classmate",pos:"Noun",sub:"3-4"},
    {word:"どんな",reading:"どんな",def:"What kind of",pos:"Expr",sub:"3-4",exprKey:"どんな ＋ [Noun] ＋ ですか"},
    {word:"駅",reading:"えき",def:"station",pos:"Noun",sub:"3·Reading"},
    {word:"隣",reading:"となり",def:"next door",pos:"Noun",sub:"3·Reading"},
    {word:"大家さん",reading:"おおやさん",def:"landlord",pos:"Noun",sub:"3·Reading"},
    {word:"近い",reading:"ちかい",def:"near; close",pos:"Adj",sub:"3·Reading",ex:"家はとても近いです。"},
    {word:"でも",def:"but, however",pos:"Conj",sub:"3·Reading",ex:"私のかばんはちいさいです。 でも、おもいです。"},
  ],
  "L4": [
    {word:"スケジュール",def:"schedule",pos:"Noun",sub:"4-1"},
    {word:"〜時",reading:"〜じ",def:"~ o clock",pos:"Noun",sub:"4-1"},
    {word:"〜分",reading:"〜ふん",def:"~minutes",pos:"Noun",sub:"4-1"},
    {word:"半",reading:"はん",def:"half",pos:"Noun",sub:"4-1"},
    {word:"何時",reading:"なんじ",def:"What time",pos:"Expr",sub:"4-1",exprKey:"なんじに おきますか"},
    {word:"銀行",reading:"ぎんこう",def:"bank",pos:"Noun",sub:"4-2"},
    {word:"クラス",def:"class",pos:"Noun",sub:"4-2"},
    {word:"郵便局",reading:"ゆうびんきょく",def:"post office",pos:"Noun",sub:"4-2"},
    {word:"レストラン",def:"restaurant",pos:"Noun",sub:"4-2"},
    {word:"コンサート",def:"concert",pos:"Noun",sub:"4-2"},
    {word:"デパート",def:"department store",pos:"Noun",sub:"4-2"},
    {word:"映画",reading:"えいが",def:"movie, film",pos:"Noun",sub:"4-2"},
    {word:"学校",reading:"がっこう",def:"school",pos:"Noun",sub:"4-3"},
    {word:"ソウル",def:"Seoul",pos:"Noun",sub:"4-3"},
    {word:"コンビニ",def:"convenience store",pos:"Noun",sub:"4-3"},
    {word:"カフェ",def:"café",pos:"Noun",sub:"4-3"},
    {word:"喫茶店",reading:"きっさてん",def:"coffee shop",pos:"Noun",sub:"4-3"},
    {word:"病院",reading:"びょういん",def:"hospital",pos:"Noun",sub:"4-3"},
    {word:"どのぐらい",reading:"どのぐらい / どのくらい",def:"How long / How much",pos:"Expr",sub:"4-3",exprKey:"どのぐらい かかりますか"},
    {word:"何時間",reading:"なんじかん",def:"How many hours",pos:"Expr",sub:"4-3",exprKey:"なんじかん かかりますか"},
    {word:"何日間",reading:"なんにちかん",def:"How many days",pos:"Expr",sub:"4-3",exprKey:"なんにちかん かかりますか"},
    {word:"月曜日",reading:"げつようび",def:"Monday",pos:"Noun",sub:"4-4"},
    {word:"火曜日",reading:"かようび",def:"Tuesday",pos:"Noun",sub:"4-4"},
    {word:"水曜日",reading:"すいようび",def:"Wednesday",pos:"Noun",sub:"4-4"},
    {word:"木曜日",reading:"もくようび",def:"Thursday",pos:"Noun",sub:"4-4"},
    {word:"金曜日",reading:"きんようび",def:"Friday",pos:"Noun",sub:"4-4"},
    {word:"土曜日",reading:"どようび",def:"Saturday",pos:"Noun",sub:"4-4"},
    {word:"日曜日",reading:"にちようび",def:"Sunday",pos:"Noun",sub:"4-4"},
    {word:"曜日",reading:"ようび",def:"day of week",pos:"Noun",sub:"4-4"},
    {word:"今日",reading:"きょう",def:"today",pos:"Noun",sub:"4-4"},
    {word:"パーティ",def:"party",pos:"Noun",sub:"4-4"},
    {word:"休み",reading:"やすみ",def:"holiday, day off",pos:"Noun",sub:"4-4"},
    {word:"デート",def:"date",pos:"Noun",sub:"4-4"},
    {word:"旅行",reading:"りょこう",def:"travel, trip",pos:"Noun",sub:"4-4"},
    {word:"何曜日",reading:"なんようび",def:"What day of the week",pos:"Expr",sub:"4-4",exprKey:"なんようび ですか"},
    {word:"誕生日",reading:"たんじょうび",def:"birthday",pos:"Noun",sub:"4-5"},
    {word:"夏休み",reading:"なつやすみ",def:"summer vacation",pos:"Noun",sub:"4-5"},
    {word:"〜月",reading:"〜がつ",def:"~month",pos:"Noun",sub:"4-5"},
    {word:"〜日",reading:"〜にち",def:"~day of month",pos:"Noun",sub:"4-5"},
    {word:"ピクニック",def:"picnic",pos:"Noun",sub:"4-5"},
    {word:"ゴールデンウィーク",def:"Golden Week",pos:"Noun",sub:"4-5"},
    {word:"いつ",reading:"いつ",def:"When",pos:"Expr",sub:"4-5",exprKey:"パーティは いつですか"},
    {word:"何月",reading:"なんがつ",def:"What month",pos:"Expr",sub:"4-5",exprKey:"なんがつ ですか"},
    {word:"何日",reading:"なんにち",def:"What day of the month",pos:"Expr",sub:"4-5",exprKey:"なんにち ですか"},
  ],
  "L5": [
    {word:"毎日",reading:"まいにち",def:"every day",pos:"Noun",sub:"5-1"},
    {word:"コーヒー",def:"coffee",pos:"Noun",sub:"5-1"},
    {word:"英語",reading:"えいご",def:"English (language)",pos:"Noun",sub:"5-1"},
    {word:"ビデオ",def:"video",pos:"Noun",sub:"5-1"},
    {word:"てんぷら",def:"tempura",pos:"Noun",sub:"5-1"},
    {word:"夜",reading:"よる",def:"night",pos:"Noun",sub:"5-1"},
    {word:"午後",reading:"ごご",def:"PM, afternoon",pos:"Noun",sub:"5-1"},
    {word:"今晩",reading:"こんばん",def:"tonight, this evening",pos:"Noun",sub:"5-1"},
    {word:"たばこ",def:"cigarette, tobacco",pos:"Noun",sub:"5-1"},
    {word:"スパゲティ",def:"spaghetti",pos:"Noun",sub:"5-1"},
    {word:"明日",reading:"あした",def:"tomorrow",pos:"Noun",sub:"5-1"},
    {word:"食べます",reading:"たべます",def:"to eat",pos:"Verb",grp:"G2",sub:"5-1",ex:"私はケーキを食べます。"},
    {word:"飲みます",reading:"のみます",def:"to drink",pos:"Verb",grp:"G1",sub:"5-1",ex:"田中さんはコーヒーを飲みます。"},
    {word:"読みます",reading:"よみます",def:"to read",pos:"Verb",grp:"G1",sub:"5-1",ex:"ワンさんは本を読みます。"},
    {word:"見ます",reading:"みます",def:"to see",pos:"Verb",grp:"G2",sub:"5-1",ex:"私はビデオを見ます。"},
    {word:"書きます",reading:"かきます",def:"to write",pos:"Verb",grp:"G1",sub:"5-1",ex:"彼は英語を書きます。"},
    {word:"聞きます",reading:"ききます",def:"to listen",pos:"Verb",grp:"G1",sub:"5-1",ex:"私はラジオを聞きます。"},
    {word:"話します",reading:"はなします",def:"to speak",pos:"Verb",grp:"G1",sub:"5-1",ex:"彼女は英語を話します。"},
    {word:"買います",reading:"かいます",def:"to buy",pos:"Verb",grp:"G1",sub:"5-1",ex:"田中さんはゆびわを買います。"},
    {word:"します",def:"to do",pos:"Verb",grp:"G3",sub:"5-1",ex:"こうえんでピクニックをします。"},
    {word:"勉強をします",reading:"べんきょうをします",def:"to study",pos:"Verb",grp:"G3",sub:"5-1",ex:"毎日、勉強をします。"},
    {word:"テニスをします",def:"to play tennis",pos:"Verb",grp:"G3",sub:"5-1",ex:"日曜日にテニスをします。"},
    {word:"仕事をします",reading:"しごとをします",def:"to work",pos:"Verb",grp:"G3",sub:"5-1",ex:"田中さんは仕事をします。"},
    {word:"吸います",reading:"すいます",def:"to smoke; to inhale",pos:"Verb",grp:"G1",sub:"5-1",ex:"彼はたばこをすいます。"},
    {word:"晩ごはん",reading:"ばんごはん",def:"dinner, evening meal",pos:"Noun",sub:"5-2"},
    {word:"新宿",reading:"しんじゅく",def:"Shinjuku",pos:"Noun",sub:"5-2"},
    {word:"会社",reading:"かいしゃ",def:"company, office",pos:"Noun",sub:"5-2"},
    {word:"図書館",reading:"としょかん",def:"library",pos:"Noun",sub:"5-2"},
    {word:"本屋",reading:"ほんや",def:"bookstore",pos:"Noun",sub:"5-2"},
    {word:"サッカー",def:"soccer",pos:"Noun",sub:"5-2"},
    {word:"中野",reading:"なかの",def:"Nakano",pos:"Noun",sub:"5-2"},
    {word:"秋葉原",reading:"あきはばら",def:"Akihabara",pos:"Noun",sub:"5-2"},
    {word:"上野",reading:"うえの",def:"Ueno",pos:"Noun",sub:"5-2"},
    {word:"六本木",reading:"ろっぽんぎ",def:"Roppongi",pos:"Noun",sub:"5-2"},
    {word:"仕事",reading:"しごと",def:"work, job",pos:"Noun",sub:"5-2"},
    {word:"ステーキ",def:"steak",pos:"Noun",sub:"5-2"},
    {word:"買い物",reading:"かいもの",def:"shopping",pos:"Noun",sub:"5-2"},
    {word:"花見",reading:"はなみ",def:"flower viewing",pos:"Noun",sub:"5-2"},
    {word:"どこ",reading:"どこ",def:"Where",pos:"Expr",sub:"5-2",exprKey:"どこで 食べますか"},
    {word:"なにで",reading:"なにで",def:"By what means / transport",pos:"Expr",sub:"5-2",exprKey:"なにで 行きますか"},
    {word:"京都",reading:"きょうと",def:"Kyoto",pos:"Noun",sub:"5-3"},
    {word:"友達",reading:"ともだち",def:"friend",pos:"Noun",sub:"5-3"},
    {word:"来月",reading:"らいげつ",def:"next month",pos:"Noun",sub:"5-3"},
    {word:"北海道",reading:"ほっかいどう",def:"Hokkaido",pos:"Noun",sub:"5-3"},
    {word:"海",reading:"うみ",def:"sea, ocean",pos:"Noun",sub:"5-3"},
    {word:"香港",reading:"ほんこん",def:"Hong Kong",pos:"Noun",sub:"5-3"},
    {word:"スキー",def:"skiing",pos:"Noun",sub:"5-3"},
    {word:"絵",reading:"え",def:"picture, painting",pos:"Noun",sub:"5-3"},
    {word:"（お）寺",reading:"（お）てら",def:"temple",pos:"Noun",sub:"5-3"},
    {word:"昼ごはん",reading:"ひるごはん",def:"lunch",pos:"Noun",sub:"5-3"},
    {word:"ときどき",def:"sometimes",pos:"Adv",sub:"5-3",ex:"中野さんはときどきとしょかんへ行きます。"},
    {word:"行きます",reading:"いきます",def:"to go",pos:"Verb",grp:"G1",sub:"5-3",ex:"私はレストランへ行きます。"},
    {word:"来ます",reading:"きます",def:"to come",pos:"Verb",grp:"G3",sub:"5-3",ex:"私は学校へ来ます。"},
    {word:"帰ります",reading:"かえります",def:"to return",pos:"Verb",grp:"G1",sub:"5-3",ex:"彼はうちへかえります。"},
    {word:"泳ぎます",reading:"およぎます",def:"to swim",pos:"Verb",grp:"G1",sub:"5-3",ex:"海で泳ぎます。"},
    {word:"電車",reading:"でんしゃ",def:"train",pos:"Noun",sub:"5-4"},
    {word:"歯",reading:"は",def:"tooth, teeth",pos:"Noun",sub:"5-4"},
    {word:"（お）風呂",reading:"（お）ふろ",def:"bath",pos:"Noun",sub:"5-4"},
    {word:"それから",def:"and then, after that",pos:"Conj",sub:"5-4",ex:"彼女はひるごはんを食べます。 それから、こうえんへ行きます。"},
    {word:"起きます",reading:"おきます",def:"to wake up",pos:"Verb",grp:"G2",sub:"5-4",ex:"私は７時におきます。"},
    {word:"磨きます",reading:"みがきます",def:"to brush; to polish",pos:"Verb",grp:"G1",sub:"5-4",ex:"彼は歯をみがきます。"},
    {word:"入ります",reading:"はいります",def:"to enter",pos:"Verb",grp:"G1",sub:"5-4",ex:"私はおふろにはいります。"},
    {word:"寝ます",reading:"ねます",def:"to sleep; to go to bed",pos:"Verb",grp:"G2",sub:"5-4",ex:"私は１０時にねます。"},
    {word:"スポーツ",def:"sports",pos:"Noun",sub:"5-5"},
    {word:"よく",def:"often, well",pos:"Adv",sub:"5-5",ex:"よく映画を見ますか。"},
    {word:"あまり",def:"not very (+ negative)",pos:"Adv",sub:"5-5",ex:"私はあまり旅行をしません。"},
    {word:"全然",reading:"ぜんぜん",def:"not at all (+ negative)",pos:"Adv",sub:"5-5",ex:"私はぜんぜんそうじをしません。"},
    {word:"さしみ",def:"sashimi",pos:"Noun",sub:"5-6"},
    {word:"寿司",reading:"すし",def:"sushi",pos:"Noun",sub:"5-6"},
    {word:"ウィスキー",def:"whiskey",pos:"Noun",sub:"5-6"},
    {word:"ビール",def:"beer",pos:"Noun",sub:"5-6"},
    {word:"ドイツ語",reading:"どいつご",def:"German (language)",pos:"Noun",sub:"5-6"},
    {word:"日本酒",reading:"にほんしゅ",def:"Japanese sake",pos:"Noun",sub:"5-6"},
    {word:"紅茶",reading:"こうちゃ",def:"black tea",pos:"Noun",sub:"5-6"},
    {word:"フランス語",reading:"フランスご",def:"French (language)",pos:"Noun",sub:"5-6"},
    {word:"掃除",reading:"そうじ",def:"cleaning, sweeping",pos:"Noun",sub:"5-6"},
    {word:"洗濯",reading:"せんたく",def:"laundry, washing",pos:"Noun",sub:"5-6"},
    {word:"音楽",reading:"おんがく",def:"music",pos:"Noun",sub:"5-6"},
    {word:"アニメ",def:"anime",pos:"Noun",sub:"5-6"},
    {word:"ドラマ",def:"drama, TV drama",pos:"Noun",sub:"5-6"},
    {word:"料理",reading:"りょうり",def:"cooking, cuisine",pos:"Noun",sub:"5-6"},
    {word:"韓国語",reading:"かんこくご",def:"Korean (language)",pos:"Noun",sub:"5-6"},
    {word:"ジャズ",def:"jazz",pos:"Noun",sub:"5-6"},
    {word:"クラシック",def:"classical music",pos:"Noun",sub:"5-6"},
    {word:"RPGゲーム",def:"RPG game",pos:"Noun",sub:"5-6"},
    {word:"アクションゲーム",def:"action game",pos:"Noun",sub:"5-6"},
    {word:"渋谷",reading:"しぶや",def:"Shibuya",pos:"Noun",sub:"5-6"},
    {word:"朝ごはん",reading:"あさごはん",def:"breakfast",pos:"Noun",sub:"5·Reading"},
    {word:"パン屋",reading:"ぱんや",def:"bakery",pos:"Noun",sub:"5·Reading"},
    {word:"アルバイト",def:"part-time job",pos:"Noun",sub:"5·Reading"},
    {word:"手紙",reading:"てがみ",def:"letter (written)",pos:"Noun",sub:"5·Reading"},
    {word:"宿題",reading:"しゅくだい",def:"homework",pos:"Noun",sub:"5·Reading"},
    {word:"一緒",reading:"いっしょ",def:"together",pos:"Noun",sub:"5·Reading"},
    {word:"大変",reading:"たいへん",def:"tough; hard; terrible",pos:"Adj",sub:"5·Reading",ex:"日本語の勉強はたいへんです。"},
    {word:"少し",reading:"すこし",def:"a little",pos:"Adv",sub:"5·Reading",ex:"私はおさけをすこし飲みます。"},
    {word:"〜頃",reading:"〜ごろ",def:"around ~ (time)",pos:"Noun",sub:"5·Reading"},
  ],
  "L6": [
    {word:"昨日",reading:"きのう",def:"yesterday",pos:"Noun",sub:"6-1"},
    {word:"昨夜",reading:"さくや",def:"last night (formal)",pos:"Noun",sub:"6-1"},
    {word:"サラダ",def:"salad",pos:"Noun",sub:"6-1"},
    {word:"外国人",reading:"がいこくじん",def:"foreigner",pos:"Noun",sub:"6-1"},
    {word:"銀座",reading:"ぎんざ",def:"Ginza",pos:"Noun",sub:"6-1"},
    {word:"山",reading:"やま",def:"mountain",pos:"Noun",sub:"6-1"},
    {word:"海",reading:"うみ",def:"sea, ocean",pos:"Noun",sub:"6-1"},
    {word:"キャンプ",def:"camping",pos:"Noun",sub:"6-1"},
    {word:"おととい",def:"day before yesterday",pos:"Noun",sub:"6-1"},
    {word:"あさって",def:"day after tomorrow",pos:"Noun",sub:"6-1"},
    {word:"今週",reading:"こんしゅう",def:"this week",pos:"Noun",sub:"6-1"},
    {word:"先週",reading:"せんしゅう",def:"last week",pos:"Noun",sub:"6-1"},
    {word:"来週",reading:"らいしゅう",def:"next week",pos:"Noun",sub:"6-1"},
    {word:"先月",reading:"せんげつ",def:"last month",pos:"Noun",sub:"6-1"},
    {word:"今月",reading:"こんげつ",def:"this month",pos:"Noun",sub:"6-1"},
    {word:"来月",reading:"らいげつ",def:"next month",pos:"Noun",sub:"6-1"},
    {word:"去年",reading:"きょねん",def:"last year",pos:"Noun",sub:"6-1"},
    {word:"今年",reading:"ことし",def:"this year",pos:"Noun",sub:"6-1"},
    {word:"来年",reading:"らいねん",def:"next year",pos:"Noun",sub:"6-1"},
    {word:"季節",reading:"きせつ",def:"season",pos:"Noun",sub:"6-1"},
    {word:"春",reading:"はる",def:"spring",pos:"Noun",sub:"6-1"},
    {word:"夏",reading:"なつ",def:"summer",pos:"Noun",sub:"6-1"},
    {word:"秋",reading:"あき",def:"autumn, fall",pos:"Noun",sub:"6-1"},
    {word:"冬",reading:"ふゆ",def:"winter",pos:"Noun",sub:"6-1"},
    {word:"だけ",def:"only, just",pos:"Expr",sub:"6-1",ex:"私は週末だけパンやでアルバイトします。"},
    {word:"あとで",def:"later, afterwards",pos:"Expr",sub:"6-1"},
    {word:"そうじをします",def:"to clean",pos:"Verb",grp:"G3",sub:"6-1",ex:"私は日曜日にそうじをします。"},
    {word:"作ります",reading:"つくります",def:"to make; to create",pos:"Verb",grp:"G1",sub:"6-1",ex:"彼女は料理をつくります。"},
    {word:"夕べ",reading:"ゆうべ",def:"last night",pos:"Noun",sub:"6-1"},
    {word:"今朝",reading:"けさ",def:"this morning",pos:"Noun",sub:"6-1"},
    {word:"天気",reading:"てんき",def:"weather",pos:"Noun",sub:"6-2"},
    {word:"フランス料理",reading:"フランスりょうり",def:"French cuisine",pos:"Noun",sub:"6-2"},
    {word:"歌",reading:"うた",def:"song",pos:"Noun",sub:"6-2"},
    {word:"桜",reading:"さくら",def:"cherry blossom",pos:"Noun",sub:"6-2"},
    {word:"食べ物",reading:"たべもの",def:"food",pos:"Noun",sub:"6-2"},
    {word:"そして",def:"and then, and also",pos:"Conj",sub:"6-2",ex:"彼女はきれいです。そして、しんせつです"},
    {word:"楽しい",reading:"たのしい",def:"fun; enjoyable",pos:"Adj",sub:"6-2",ex:"パーティは楽しかったですか。"},
    {word:"上手",reading:"じょうず",def:"good at; skilled",pos:"Adj",sub:"6-2",ex:"田中さんは歌がじょうずです。"},
    {word:"にぎやか",def:"lively, bustling",pos:"Adj",sub:"6-2",ex:"渋谷はにぎやかです。"},
    {word:"暖かい",reading:"あたたかい",def:"warm (also written 温かい)",pos:"Adj",sub:"6-2",ex:"はるはあたたかいです。"},
    {word:"会います",reading:"あいます",def:"to meet",pos:"Verb",grp:"G1",sub:"6-2",ex:"私は彼に会いました。"},
    {word:"チケット",def:"ticket",pos:"Noun",sub:"6-2"},
    {word:"サンドイッチ",def:"sandwich",pos:"Noun",sub:"6-2"},
    {word:"旅館",reading:"りょかん",def:"Japanese inn",pos:"Noun",sub:"6·Reading"},
    {word:"ホテル",def:"hotel",pos:"Noun",sub:"6·Reading"},
    {word:"お土産",reading:"おみやげ",def:"souvenir",pos:"Noun",sub:"6·Reading"},
    {word:"おまんじゅう",def:"sweet bun",pos:"Noun",sub:"6·Reading"},
    {word:"泊まります",reading:"とまります",def:"to stay (overnight)",pos:"Verb",grp:"G1",sub:"6·Reading",ex:"私は彼のうちにとまります。"},
  ],
  "L7": [
    {word:"花",reading:"はな",def:"flower",pos:"Noun",sub:"7-1"},
    {word:"テーブル",def:"table",pos:"Noun",sub:"7-1"},
    {word:"本だな",reading:"ほんだな",def:"bookshelf",pos:"Noun",sub:"7-1"},
    {word:"たくさん",def:"many, a lot",pos:"Expr",sub:"7-1"},
    {word:"庭",reading:"にわ",def:"garden, yard",pos:"Noun",sub:"7-1"},
    {word:"れいぞうこ",def:"refrigerator",pos:"Noun",sub:"7-1"},
    {word:"チーズ",def:"cheese",pos:"Noun",sub:"7-1"},
    {word:"ポケット",def:"pocket",pos:"Noun",sub:"7-1"},
    {word:"トマト",def:"tomato",pos:"Noun",sub:"7-1"},
    {word:"台所",reading:"だいどころ",def:"kitchen",pos:"Noun",sub:"7-1"},
    {word:"居間",reading:"いま",def:"living room",pos:"Noun",sub:"7-1"},
    {word:"子ども部屋",reading:"こどもべや",def:"children's room",pos:"Noun",sub:"7-1"},
    {word:"トイレ",def:"toilet, bathroom",pos:"Noun",sub:"7-1"},
    {word:"お母さん",reading:"おかあさん",def:"mother (someone else's)",pos:"Noun",sub:"7-1"},
    {word:"ゴキブリ",def:"cockroach",pos:"Noun",sub:"7-1"},
    {word:"たまご",def:"egg",pos:"Noun",sub:"7-1"},
    {word:"ネズミ",def:"mouse, rat",pos:"Noun",sub:"7-1"},
    {word:"ソファー",def:"sofa",pos:"Noun",sub:"7-1"},
    {word:"金庫",reading:"きんこ",def:"safe, vault",pos:"Noun",sub:"7-1"},
    {word:"どろぼう",def:"thief, burglar",pos:"Noun",sub:"7-1"},
    {word:"ベッド",def:"bed",pos:"Noun",sub:"7-1"},
    {word:"子ども",reading:"こども",def:"child, children",pos:"Noun",sub:"7-1"},
    {word:"おもちゃ",def:"toy",pos:"Noun",sub:"7-1"},
    {word:"スリッパ",def:"slippers",pos:"Noun",sub:"7-1"},
    {word:"タオル",def:"towel",pos:"Noun",sub:"7-1"},
    {word:"自転車",reading:"じてんしゃ",def:"bicycle",pos:"Noun",sub:"7-1"},
    {word:"池",reading:"いけ",def:"pond",pos:"Noun",sub:"7-1"},
    {word:"蛙",reading:"かえる",def:"frog",pos:"Noun",sub:"7-1"},
    {word:"あります",def:"to be (inanimate)",pos:"Verb",grp:"G1",sub:"7-1",ex:"へやにテーブルがあります。"},
    {word:"います",def:"to be (animate)",pos:"Verb",grp:"G2",sub:"7-1",ex:"へやに田中さんがいます。"},
    {word:"何か",reading:"なにか",def:"Something / Anything",pos:"Expr",sub:"7-1",exprKey:"なにか ありますか"},
    {word:"ケーキ",def:"cake",pos:"Noun",sub:"7-2"},
    {word:"ハンバーガー",def:"hamburger",pos:"Noun",sub:"7-2"},
    {word:"ジュース",def:"juice",pos:"Noun",sub:"7-2"},
    {word:"オレンジジュース",def:"orange juice",pos:"Noun",sub:"7-2"},
    {word:"男",reading:"おとこ",def:"man, male",pos:"Noun",sub:"7-2"},
    {word:"女",reading:"おんな",def:"woman, female",pos:"Noun",sub:"7-2"},
    {word:"コーラ",def:"cola",pos:"Noun",sub:"7-2"},
    {word:"全部",reading:"ぜんぶ",def:"all, everything",pos:"Noun",sub:"7-2"},
    {word:"円",reading:"えん",def:"yen",pos:"Noun",sub:"7-2"},
    {word:"おつり",def:"change (money)",pos:"Noun",sub:"7-2"},
    {word:"ファーストフード",def:"fast food",pos:"Noun",sub:"7-2"},
    {word:"ケーキ屋",reading:"ケーキや",def:"cake shop",pos:"Noun",sub:"7-2"},
    {word:"何人",reading:"なんにん",def:"How many people",pos:"Expr",sub:"7-2",exprKey:"なんにん ですか"},
    {word:"椅子",reading:"いす",def:"chair",pos:"Noun",sub:"7-3"},
    {word:"箱",reading:"はこ",def:"box",pos:"Noun",sub:"7-3"},
    {word:"上",reading:"うえ",def:"above, on top",pos:"Noun",sub:"7-3"},
    {word:"下",reading:"した",def:"below, under",pos:"Noun",sub:"7-3"},
    {word:"中",reading:"なか",def:"inside, middle",pos:"Noun",sub:"7-3"},
    {word:"横",reading:"よこ",def:"beside, next to",pos:"Noun",sub:"7-3"},
    {word:"ここ",def:"here",pos:"Noun",sub:"7-3"},
    {word:"そこ",def:"there",pos:"Noun",sub:"7-3"},
    {word:"あそこ",def:"over there",pos:"Noun",sub:"7-3"},
    {word:"前",reading:"まえ",def:"in front, before",pos:"Noun",sub:"7-3"},
    {word:"後ろ",reading:"うしろ",def:"behind, back",pos:"Noun",sub:"7-3"},
    {word:"となり",def:"next door",pos:"Noun",sub:"7-3"},
    {word:"ごみ",def:"garbage, trash",pos:"Noun",sub:"7-3"},
    {word:"ごみばこ",def:"trash can",pos:"Noun",sub:"7-3"},
    {word:"空",reading:"そら",def:"sky",pos:"Noun",sub:"7-3"},
    {word:"さいふ",def:"wallet, purse",pos:"Noun",sub:"7-3"},
    {word:"駐車場",reading:"ちゅうしゃじょう",def:"parking lot",pos:"Noun",sub:"7-3"},
    {word:"蕎麦屋",reading:"そばや",def:"soba restaurant",pos:"Noun",sub:"7-3"},
    {word:"そば",def:"near, beside, soba noodles",pos:"Noun",sub:"7-3",ex:"病院は家のそばにあります。"},
    {word:"地図",reading:"ちず",def:"map",pos:"Noun",sub:"7-3"},
    {word:"本州",reading:"ほんしゅう",def:"Honshu",pos:"Noun",sub:"7-3"},
    {word:"四国",reading:"しこく",def:"Shikoku",pos:"Noun",sub:"7-3"},
    {word:"九州",reading:"きゅうしゅう",def:"Kyushu",pos:"Noun",sub:"7-3"},
    {word:"右",reading:"みぎ",def:"right",pos:"Noun",sub:"7-3"},
    {word:"左",reading:"ひだり",def:"left",pos:"Noun",sub:"7-3"},
    {word:"北",reading:"きた",def:"north",pos:"Noun",sub:"7-3"},
    {word:"南",reading:"みなみ",def:"south",pos:"Noun",sub:"7-3"},
    {word:"西",reading:"にし",def:"west",pos:"Noun",sub:"7-3"},
    {word:"東",reading:"ひがし",def:"east",pos:"Noun",sub:"7-3"},
    {word:"スキー場",reading:"スキーじょう",def:"ski resort",pos:"Noun",sub:"7-3"},
    {word:"ビル",def:"building",pos:"Noun",sub:"7-3"},
    {word:"神社",reading:"じんじゃ",def:"shrine",pos:"Noun",sub:"7-3"},
    {word:"観光客",reading:"かんこうきゃく",def:"tourist",pos:"Noun",sub:"7-3"},
    {word:"火山",reading:"かざん",def:"volcano",pos:"Noun",sub:"7-3"},
    {word:"温泉",reading:"おんせん",def:"hot spring",pos:"Noun",sub:"7-3"},
    {word:"有名",reading:"ゆうめい",def:"famous",pos:"Adj",sub:"7-3",ex:"彼は有名な歌手です。"},
    {word:"北口",reading:"きたぐち",def:"north exit",pos:"Noun",sub:"7·Reading"},
    {word:"南口",reading:"みなみぐち",def:"south exit",pos:"Noun",sub:"7·Reading"},
  ],
  "L8": [
    {word:"父",reading:"ちち",def:"father (own)",pos:"Noun",sub:"8-1"},
    {word:"母",reading:"はは",def:"mother (own)",pos:"Noun",sub:"8-1"},
    {word:"妹",reading:"いもうと",def:"younger sister",pos:"Noun",sub:"8-1"},
    {word:"象",reading:"ぞう",def:"elephant",pos:"Noun",sub:"8-1"},
    {word:"きりん",def:"giraffe",pos:"Noun",sub:"8-1"},
    {word:"鼻",reading:"はな",def:"nose",pos:"Noun",sub:"8-1"},
    {word:"首",reading:"くび",def:"neck",pos:"Noun",sub:"8-1"},
    {word:"足",reading:"あし",def:"leg, foot",pos:"Noun",sub:"8-1"},
    {word:"発音",reading:"はつおん",def:"pronunciation",pos:"Noun",sub:"8-1"},
    {word:"心",reading:"こころ",def:"heart, mind",pos:"Noun",sub:"8-1"},
    {word:"耳",reading:"みみ",def:"ear",pos:"Noun",sub:"8-1"},
    {word:"サービス",def:"service",pos:"Noun",sub:"8-1"},
    {word:"物価",reading:"ぶっか",def:"prices, cost of living",pos:"Noun",sub:"8-1"},
    {word:"家賃",reading:"やちん",def:"rent",pos:"Noun",sub:"8-1"},
    {word:"うさぎ",def:"rabbit",pos:"Noun",sub:"8-1"},
    {word:"背",reading:"せ",def:"height, stature",pos:"Noun",sub:"8-1"},
    {word:"国",reading:"くに",def:"country, nation",pos:"Noun",sub:"8-1"},
    {word:"窓",reading:"まど",def:"window",pos:"Noun",sub:"8-1"},
    {word:"店員",reading:"てんいん",def:"shop staff",pos:"Noun",sub:"8-1"},
    {word:"多い",reading:"おおい",def:"many, a lot",pos:"Adj",sub:"8-1",ex:"中国は人が多いです。"},
    {word:"広い",reading:"ひろい",def:"wide, spacious",pos:"Adj",sub:"8-1",ex:"このへやはとてもひろいです。"},
    {word:"狭い",reading:"せまい",def:"narrow; small (space)",pos:"Adj",sub:"8-1",ex:"私のへやはせまいです。"},
    {word:"赤い",reading:"あかい",def:"red",pos:"Adj",sub:"8-1",ex:"りんごはあかいです。"},
    {word:"茶色い",reading:"ちゃいろい",def:"brown",pos:"Adj",sub:"8-1",ex:"チョコレートはちゃいろいです。"},
    {word:"数学",reading:"すうがく",def:"mathematics",pos:"Noun",sub:"8-2"},
    {word:"甘い物",reading:"あまいもの",def:"sweets, sweet things",pos:"Noun",sub:"8-2"},
    {word:"ふとん",def:"futon",pos:"Noun",sub:"8-2"},
    {word:"洋食",reading:"ようしょく",def:"Western food",pos:"Noun",sub:"8-2"},
    {word:"和食",reading:"わしょく",def:"Japanese food",pos:"Noun",sub:"8-2"},
    {word:"都会",reading:"とかい",def:"city, urban area",pos:"Noun",sub:"8-2"},
    {word:"田舎",reading:"いなか",def:"countryside, rural area",pos:"Noun",sub:"8-2"},
    {word:"肉",reading:"にく",def:"meat",pos:"Noun",sub:"8-2"},
    {word:"〜タイプ",def:"~type",pos:"Noun",sub:"8-2"},
    {word:"猿",reading:"さる",def:"monkey",pos:"Noun",sub:"8-2"},
    {word:"ライオン",def:"lion",pos:"Noun",sub:"8-2"},
    {word:"好き",reading:"すき",def:"like, fond of",pos:"Adj",sub:"8-2",ex:"私はあまいものが好きです。"},
    {word:"嫌い",reading:"きらい",def:"dislike; hate",pos:"Adj",sub:"8-2",ex:"私は犬がきらいです。"},
    {word:"セーター",def:"sweater",pos:"Noun",sub:"8-3"},
    {word:"四角い",reading:"しかくい",def:"square; rectangular",pos:"Adj",sub:"8-3",ex:"このビルはしかくいです。"},
    {word:"黄色い",reading:"きいろい",def:"yellow",pos:"Adj",sub:"8-3",ex:"バナナはきいろいです。"},
    {word:"丸い",reading:"まるい",def:"round; circular",pos:"Adj",sub:"8-3",ex:"このケーキはまるいです。"},
    {word:"ハンサム",def:"handsome",pos:"Adj",sub:"8-3",ex:"本田さんはハンサムな人です。"},
    {word:"新鮮",reading:"しんせん",def:"fresh",pos:"Adj",sub:"8-3",ex:"このさかなはしんせんです。"},
    {word:"〜才",reading:"〜さい",def:"~years old",pos:"Noun",sub:"8-3"},
    {word:"タクシー",def:"taxi",pos:"Noun",sub:"8-4"},
    {word:"バス",def:"bus",pos:"Noun",sub:"8-4"},
    {word:"アイスクリーム",def:"ice cream",pos:"Noun",sub:"8-4"},
    {word:"ほしい",def:"want, desire",pos:"Adj",sub:"8-4",ex:"私はお金がほしいです。"},
    {word:"早く",reading:"はやく",def:"quickly, early",pos:"Adv",sub:"8-4",ex:"はやく学校へ行きたいです。"},
    {word:"乗ります",reading:"のります",def:"to ride; to get on",pos:"Verb",grp:"G1",sub:"8-4",ex:"私は今日、ひこうきにのります。"},
    {word:"洋服",reading:"ようふく",def:"Western clothes",pos:"Noun",sub:"8-5"},
    {word:"一人",reading:"ひとり",def:"one person, alone",pos:"Noun",sub:"8-5"},
    {word:"漢字",reading:"かんじ",def:"kanji",pos:"Noun",sub:"8-5"},
    {word:"ピアノ",def:"piano",pos:"Noun",sub:"8-5"},
    {word:"釣り",reading:"つり",def:"fishing",pos:"Noun",sub:"8-5"},
    {word:"写真",reading:"しゃしん",def:"photo, photograph",pos:"Noun",sub:"8-5"},
    {word:"描きます",reading:"かきます",def:"to draw; to paint",pos:"Verb",grp:"G1",sub:"8-5"},
    {word:"育てます",reading:"そだてます",def:"to raise; to bring up",pos:"Verb",grp:"G2",sub:"8-5",ex:"ジョンさんは花をそだてます。"},
    {word:"編みます",reading:"あみます",def:"to knit; to braid",pos:"Verb",grp:"G1",sub:"8-5",ex:"彼女はセーターをあみます。"},
    {word:"弾きます",reading:"ひきます",def:"to play (instrument)",pos:"Verb",grp:"G1",sub:"8-5",ex:"山本さんはピアノをひきます。"},
    {word:"釣りをします",reading:"つりをします",def:"to fish; go fishing",pos:"Verb",grp:"G3",sub:"8-5",ex:"田中さんは海でつりをします。"},
    {word:"待ちます",reading:"まちます",def:"to wait",pos:"Verb",grp:"G1",sub:"8-5",ex:"私はリーさんをまちます。"},
    {word:"死にます",reading:"しにます",def:"to die",pos:"Verb",grp:"G1",sub:"8-5",ex:"人はしにます。"},
    {word:"呼びます",reading:"よびます",def:"to call; to invite",pos:"Verb",grp:"G1",sub:"8-5",ex:"先生は山田さんを呼びました。"},
    {word:"あけます",def:"to open",pos:"Verb",grp:"G2",sub:"8-5",ex:"私はまどをあけます。"},
    {word:"歌います",reading:"うたいます",def:"to sing",pos:"Verb",grp:"G1",sub:"8-5",ex:"本田さんはよくうたいます。"},
    {word:"本当に",reading:"ほんとうに",def:"really, truly",pos:"Adv",sub:"8-6",ex:"彼はほんとうにやさしい人です。"},
    {word:"アプリ",def:"app",pos:"Noun",sub:"8-6"},
    {word:"コート",def:"coat",pos:"Noun",sub:"8-6"},
    {word:"強い",reading:"つよい",def:"strong",pos:"Adj",sub:"8-6",ex:"田中さんはつよいです。"},
    {word:"気持ちいい",reading:"きもちいい",def:"feels good, comfortable",pos:"Adj",sub:"8-6",ex:"彼はとてもきもちよさそうです。"},
    {word:"苦い",reading:"にがい",def:"bitter",pos:"Adj",sub:"8-6",ex:"このコーヒーはにがいです。"},
    {word:"寂しい",reading:"さびしい",def:"lonely",pos:"Adj",sub:"8-6",ex:"私はとてもさびしいです。"},
    {word:"悲しい",reading:"かなしい",def:"sad",pos:"Adj",sub:"8-6",ex:"彼女はとてもかなしそうです。"},
    {word:"苦しい",reading:"くるしい",def:"painful; hard (suffering)",pos:"Adj",sub:"8-6",ex:"田中さんは苦しそうです。"},
    {word:"嬉しい",reading:"うれしい",def:"happy; glad",pos:"Adj",sub:"8-6",ex:"彼はうれしそうです。"},
    {word:"痛い",reading:"いたい",def:"painful; sore",pos:"Adj",sub:"8-6",ex:"私は足がいたいです。"},
    {word:"自己紹介",reading:"じこしょうかい",def:"self-introduction",pos:"Noun",sub:"8·Reading"},
    {word:"趣味",reading:"しゅみ",def:"hobby",pos:"Noun",sub:"8·Reading"},
    {word:"所",reading:"ところ",def:"place",pos:"Noun",sub:"8·Reading"},
    {word:"家族",reading:"かぞく",def:"family",pos:"Noun",sub:"8·Reading"},
    {word:"スポーツマン",def:"sportsman",pos:"Noun",sub:"8·Reading"},
    {word:"高校生",reading:"こうこうせい",def:"high school student",pos:"Noun",sub:"8·Reading"},
    {word:"色々",reading:"いろいろ",def:"various; all kinds of",pos:"Adj",sub:"8·Reading",ex:"私はいろいろなおさけを飲みます。"},
  ],
  "L9": [
    {word:"消しゴム",reading:"けしゴム",def:"eraser",pos:"Noun",sub:"9-1"},
    {word:"ラジオ",def:"radio",pos:"Noun",sub:"9-1"},
    {word:"エアコン",def:"air conditioner",pos:"Noun",sub:"9-1"},
    {word:"電気",reading:"でんき",def:"electricity, light",pos:"Noun",sub:"9-1"},
    {word:"ひっこし",def:"moving (house)",pos:"Noun",sub:"9-1"},
    {word:"暗い",reading:"くらい",def:"dark; gloomy",pos:"Adj",sub:"9-1",ex:"この部屋は暗いです。"},
    {word:"持ちます",reading:"もちます",def:"to have/hold",pos:"Verb",grp:"G1",sub:"9-1",ex:"かばんを持ちます。"},
    {word:"貸します",reading:"かします",def:"to lend",pos:"Verb",grp:"G1",sub:"9-1",ex:"私は林さんに本をかします。"},
    {word:"借ります",reading:"かります",def:"to borrow",pos:"Verb",grp:"G2",sub:"9-1",ex:"林さんは私に本をかります。"},
    {word:"手伝います",reading:"てつだいます",def:"to help; to assist",pos:"Verb",grp:"G1",sub:"9-1",ex:"私は先生をてつだいます。"},
    {word:"しめます",def:"to close; to shut",pos:"Verb",grp:"G2",sub:"9-1",ex:"ドアをしめます。"},
    {word:"消します",reading:"けします",def:"to turn off; to erase",pos:"Verb",grp:"G1",sub:"9-1",ex:"字を消します。"},
    {word:"点けます",reading:"つけます",def:"to turn on (a light / device)",pos:"Verb",grp:"G2",sub:"9-1",ex:"電気をつけます。"},
    {word:"忘れます",reading:"わすれます",def:"to forget",pos:"Verb",grp:"G2",sub:"9-1",ex:"私はよく漢字をわすれます。"},
    {word:"ひっこします",def:"to move (house)",pos:"Verb",grp:"G1",sub:"9-1",ex:"山田さんは明日ひっこします。"},
    {word:"大丈夫",reading:"だいじょうぶ",def:"OK; all right; fine",pos:"Adj",sub:"9-1",ex:"だいじょうぶです。ありがとう。"},
    {word:"ましょうか",reading:"〜ましょうか",def:"Offering to do / Shall I?",pos:"Expr",sub:"9-1",exprKey:"かばんを 持ちましょうか"},
    {word:"塩",reading:"しお",def:"salt",pos:"Noun",sub:"9-2"},
    {word:"カメラマン",def:"photographer",pos:"Noun",sub:"9-2"},
    {word:"モデル",def:"model",pos:"Noun",sub:"9-2"},
    {word:"ゆっくり",def:"slowly; take your time",pos:"Adj",sub:"9-2",ex:"父はゆっくりと歩きます。"},
    {word:"立ちます",reading:"たちます",def:"to stand",pos:"Verb",grp:"G1",sub:"9-2",ex:"みなさん、たってください。"},
    {word:"飛びます",reading:"とびます",def:"to fly; to jump",pos:"Verb",grp:"G1",sub:"9-2",ex:"とりがとびます。"},
    {word:"言います",reading:"いいます",def:"to say",pos:"Verb",grp:"G1",sub:"9-2",ex:"先生が言いました。"},
    {word:"教えます",reading:"おしえます",def:"to teach/tell",pos:"Verb",grp:"G2",sub:"9-2",ex:"電話番号をおしえてください。"},
    {word:"見せます",reading:"みせます",def:"to show",pos:"Verb",grp:"G2",sub:"9-2",ex:"そのカメラをみせてください。"},
    {word:"歩きます",reading:"あるきます",def:"to walk",pos:"Verb",grp:"G1",sub:"9-2",ex:"はやく歩きます。"},
    {word:"取ります",reading:"とります",def:"to take; to get",pos:"Verb",grp:"G1",sub:"9-2",ex:"そこのペンを取ってください。"},
    {word:"笑います",reading:"わらいます",def:"to laugh; to smile",pos:"Verb",grp:"G1",sub:"9-2",ex:"私はわらいます。"},
    {word:"散歩",reading:"さんぽ",def:"walk, stroll",pos:"Noun",sub:"9-3"},
    {word:"ロビー",def:"lobby",pos:"Noun",sub:"9-3"},
    {word:"ギター",def:"guitar",pos:"Noun",sub:"9-3"},
    {word:"遊びます",reading:"あそびます",def:"to play; to have fun",pos:"Verb",grp:"G1",sub:"9-3",ex:"私はこうえんであそびます。"},
    {word:"踊ります",reading:"おどります",def:"to dance",pos:"Verb",grp:"G1",sub:"9-3",ex:"私はパーティでおどります。"},
    {word:"走ります",reading:"はしります",def:"to run",pos:"Verb",grp:"G1",sub:"9-3",ex:"私は夜、はしります。"},
    {word:"（お）宅",reading:"（お）たく",def:"your home (polite)",pos:"Noun",sub:"9·Reading"},
    {word:"もう一度",reading:"もういちど",def:"once more, again",pos:"Adv",sub:"9·Reading",ex:"もう一度言ってください。"},
    {word:"出ます",reading:"でます",def:"to leave",pos:"Verb",grp:"G2",sub:"9·Reading",ex:"田中さんは電話にでます。"},
  ],
  "L10": [
    {word:"熱",reading:"ねつ",def:"fever",pos:"Noun",sub:"10-1"},
    {word:"たぶん",def:"probably, maybe",pos:"Adv",sub:"10-1",ex:"明日はたぶんさむいです。"},
    {word:"受けます",reading:"うけます",def:"to take (exam); to receive",pos:"Verb",grp:"G2",sub:"10-1",ex:"あしたテストをうけます。"},
    {word:"てもいいですか",reading:"〜てもいいですか",def:"Asking for permission",pos:"Expr",sub:"10-1",exprKey:"写真を とってもいいですか"},
    {word:"薬",reading:"くすり",def:"medicine",pos:"Noun",sub:"10-2"},
    {word:"美術館",reading:"びじゅつかん",def:"art museum",pos:"Noun",sub:"10-2"},
    {word:"川",reading:"かわ",def:"river",pos:"Noun",sub:"10-2"},
    {word:"カンニング",def:"cheating (on exam)",pos:"Noun",sub:"10-2"},
    {word:"ルール",def:"rule",pos:"Noun",sub:"10-2"},
    {word:"ゴミ",def:"garbage, trash",pos:"Noun",sub:"10-2"},
    {word:"ペット",def:"pet",pos:"Noun",sub:"10-2"},
    {word:"止めます",reading:"とめます",def:"to stop; to park",pos:"Verb",grp:"G2",sub:"10-2",ex:"私はじてんしゃをとめます。"},
    {word:"出します",reading:"だします",def:"to take out",pos:"Verb",grp:"G1",sub:"10-2",ex:"私はゴミをだします。"},
    {word:"顔",reading:"かお",def:"face",pos:"Noun",sub:"10-3"},
    {word:"掃除",reading:"そうじ",def:"cleaning, sweeping",pos:"Noun",sub:"10-3"},
    {word:"洗濯",reading:"せんたく",def:"laundry, washing",pos:"Noun",sub:"10-3"},
    {word:"今朝",reading:"けさ",def:"this morning",pos:"Noun",sub:"10-3"},
    {word:"ジョギング",def:"jogging",pos:"Noun",sub:"10-3"},
    {word:"ハム",def:"ham",pos:"Noun",sub:"10-3"},
    {word:"牛乳",reading:"ぎゅうにゅう",def:"milk",pos:"Noun",sub:"10-3"},
    {word:"恋人",reading:"こいびと",def:"lover, partner",pos:"Noun",sub:"10-3"},
    {word:"シャワー",def:"shower",pos:"Noun",sub:"10-3"},
    {word:"歯",reading:"は",def:"tooth, teeth",pos:"Noun",sub:"10-3"},
    {word:"食事",reading:"しょくじ",def:"meal",pos:"Noun",sub:"10-3"},
    {word:"入ります",reading:"はいります",def:"to enter",pos:"Verb",grp:"G1",sub:"10-3",ex:"あぶないです。ここに入らないでください。"},
    {word:"洗います",reading:"あらいます",def:"to wash",pos:"Verb",grp:"G1",sub:"10-3",ex:"私は顔をあらいます。"},
    {word:"浴びます",reading:"あびます",def:"to take (shower); to bathe",pos:"Verb",grp:"G2",sub:"10-3",ex:"朝、シャワーを浴びます。"},
    {word:"手",reading:"て",def:"hand",pos:"Noun",sub:"10-4"},
    {word:"乗ります",reading:"のります",def:"to ride; to get on",pos:"Verb",grp:"G1",sub:"10-4",ex:"電車にのります。"},
    {word:"降ります",reading:"おります",def:"to get off; to get out",pos:"Verb",grp:"G2",sub:"10-4",ex:"タクシーをおります。"},
    {word:"乗り換えます",reading:"のりかえます",def:"to transfer (transport)",pos:"Verb",grp:"G2",sub:"10-4",ex:"私は中央線にのりかえます。"},
    {word:"かかります",def:"to take (time/money)",pos:"Verb",grp:"G1",sub:"10-4",ex:"えきからうちまで３０分かかります。"},
    {word:"まず",def:"first, to begin with",pos:"Adv",sub:"10-4",ex:"まず、新大久保で山手線にのります。"},
    {word:"どうやって",reading:"どうやって",def:"How / By what route",pos:"Expr",sub:"10-4",exprKey:"どうやって 行きますか"},
    {word:"雨",reading:"あめ",def:"rain",pos:"Noun",sub:"10-5"},
    {word:"ミルク",def:"milk",pos:"Noun",sub:"10-5"},
    {word:"無人島",reading:"むじんとう",def:"deserted island",pos:"Noun",sub:"10-5"},
    {word:"水着",reading:"みずぎ",def:"swimsuit",pos:"Noun",sub:"10-5"},
    {word:"文房具屋",reading:"ぶんぼうぐや",def:"stationery shop",pos:"Noun",sub:"10-5"},
    {word:"薬屋",reading:"くすりや",def:"pharmacy, drug store",pos:"Noun",sub:"10-5"},
    {word:"目薬",reading:"めぐすり",def:"eye drops",pos:"Noun",sub:"10-5"},
    {word:"おにぎり",def:"rice ball",pos:"Noun",sub:"10-5"},
    {word:"飲み物",reading:"のみもの",def:"drink, beverage",pos:"Noun",sub:"10-5"},
    {word:"持って行きます",reading:"もっていきます",def:"to take (something)",pos:"Verb",grp:"G1",sub:"10-5",ex:"学校に本を持って行きます。"},
    {word:"買って行きます",reading:"かっていきます",def:"to buy and go",pos:"Verb",grp:"G1",sub:"10-5",ex:"切符を買って行きます。"},
    {word:"作って行きます",reading:"つくっていきます",def:"to make and bring",pos:"Verb",grp:"G1",sub:"10-5",ex:"料理を作って行きます。"},
    {word:"つれて行きます",reading:"つれていきます",def:"to take someone along",pos:"Verb",grp:"G1",sub:"10-5",ex:"パーティにともだちをつれて行きます。"},
    {word:"持って来ます",reading:"もってきます",def:"to bring (something)",pos:"Verb",grp:"G3",sub:"10-5",ex:"学校へ辞書を持って来ます。"},
    {word:"買って来ます",reading:"かってきます",def:"to buy and come",pos:"Verb",grp:"G3",sub:"10-5",ex:"たばこを買って来ます。"},
    {word:"買って帰ります",reading:"かってかえります",def:"to buy and return",pos:"Verb",grp:"G1",sub:"10-5",ex:"おみやげを買って帰ります。"},
    {word:"行って来ます",reading:"いってきます",def:"to go and come back",pos:"Verb",grp:"G3",sub:"10-5",ex:"郵便局へ行って来ます。"},
    {word:"持って帰ります",reading:"もってかえります",def:"to take home",pos:"Verb",grp:"G1",sub:"10-5",ex:"ケーキをもって帰ります。"},
    {word:"ボールペン",def:"ballpoint pen",pos:"Noun",sub:"10·Reading"},
    {word:"テスト中",reading:"テストちゅう",def:"during the exam",pos:"Noun",sub:"10·Reading"},
  ],
  "L11": [
    {word:"牛肉",reading:"ぎゅうにく",def:"beef",pos:"Noun",sub:"11-1"},
    {word:"ぶた肉",reading:"ぶたにく",def:"pork",pos:"Noun",sub:"11-1"},
    {word:"人口",reading:"じんこう",def:"population",pos:"Noun",sub:"11-1"},
    {word:"店",reading:"みせ",def:"shop, store",pos:"Noun",sub:"11-1"},
    {word:"読書",reading:"どくしょ",def:"reading (books)",pos:"Noun",sub:"11-1"},
    {word:"歴史",reading:"れきし",def:"history",pos:"Noun",sub:"11-1"},
    {word:"洋酒",reading:"ようしゅ",def:"Western liquor",pos:"Noun",sub:"11-1"},
    {word:"給料",reading:"きゅうりょう",def:"salary",pos:"Noun",sub:"11-1"},
    {word:"身長",reading:"しんちょう",def:"height (body)",pos:"Noun",sub:"11-1"},
    {word:"体重",reading:"たいじゅう",def:"body weight",pos:"Noun",sub:"11-1"},
    {word:"年齢",reading:"ねんれい",def:"age",pos:"Noun",sub:"11-1"},
    {word:"駅前",reading:"えきまえ",def:"in front of the station",pos:"Noun",sub:"11-1"},
    {word:"デザイン",def:"design",pos:"Noun",sub:"11-1"},
    {word:"色",reading:"いろ",def:"color",pos:"Noun",sub:"11-1"},
    {word:"牛丼",reading:"ぎゅうどん",def:"beef bowl",pos:"Noun",sub:"11-1"},
    {word:"うどん",def:"udon noodles",pos:"Noun",sub:"11-1"},
    {word:"ずっと",def:"all along, the whole time",pos:"Adv",sub:"11-1",ex:"この店のほうがずっとやすいです。"},
    {word:"速い",reading:"はやい",def:"fast; quick",pos:"Adj",sub:"11-1",ex:"くるまはとてもはやいです。"},
    {word:"若い",reading:"わかい",def:"young",pos:"Adj",sub:"11-1",ex:"彼女はとても若いです。"},
    {word:"かっこいい",def:"cool, stylish",pos:"Adj",sub:"11-1",ex:"新幹線はかっこいいです。"},
    {word:"決めます",reading:"きめます",def:"to decide",pos:"Verb",grp:"G2",sub:"11-1"},
    {word:"あげます",def:"to raise, give",pos:"Verb",grp:"G2",sub:"11-1",ex:"私は田中さんに本をあげます。"},
    {word:"どちら",reading:"どちら",def:"Which (of two options)",pos:"Expr",sub:"11-1",exprKey:"AとBと どちらが 好きですか"},
    {word:"空気",reading:"くうき",def:"air",pos:"Noun",sub:"11-2"},
    {word:"美容院",reading:"びよういん",def:"beauty salon, hair salon",pos:"Noun",sub:"11-2"},
    {word:"相撲",reading:"すもう",def:"sumo wrestling",pos:"Noun",sub:"11-2"},
    {word:"砂糖",reading:"さとう",def:"sugar",pos:"Noun",sub:"11-2"},
    {word:"初め",reading:"はじめ",def:"beginning, first time",pos:"Noun",sub:"11-2"},
    {word:"最近",reading:"さいきん",def:"recently, lately",pos:"Noun",sub:"11-2"},
    {word:"甘い",reading:"あまい",def:"sweet",pos:"Adj",sub:"11-2",ex:"あまいお菓子を食べます。"},
    {word:"足ります",reading:"たります",def:"to be enough; to suffice",pos:"Verb",grp:"G2",sub:"11-2",ex:"お金が足りません。"},
    {word:"町",reading:"まち",def:"town, city (also written 街)",pos:"Noun",sub:"11-3"},
    {word:"すきやき",def:"sukiyaki",pos:"Noun",sub:"11-3"},
    {word:"野球",reading:"やきゅう",def:"baseball",pos:"Noun",sub:"11-3"},
    {word:"どれ",reading:"どれ",def:"Which one (3+ options)",pos:"Expr",sub:"11-3",exprKey:"どれが いちばん 好きですか"},
    {word:"スカート",def:"skirt",pos:"Noun",sub:"11-4"},
    {word:"ズボン",def:"trousers, pants",pos:"Noun",sub:"11-4"},
    {word:"ふどうさんや",def:"real estate agency",pos:"Noun",sub:"11-4"},
    {word:"二日よい",reading:"ふつかよい",def:"hangover",pos:"Noun",sub:"11-4"},
    {word:"派手",reading:"はで",def:"showy; flashy",pos:"Adj",sub:"11-4",ex:"このぼうしははでです。"},
    {word:"地味",reading:"じみ",def:"plain; modest",pos:"Adj",sub:"11-4",ex:"このセーターはじみです。"},
    {word:"ちょうど",def:"exactly",pos:"Adv",sub:"11-4",ex:"このくつはちょうどいいです。"},
    {word:"字",reading:"じ",def:"character, handwriting",pos:"Noun",sub:"11-5"},
    {word:"説明",reading:"せつめい",def:"explanation",pos:"Noun",sub:"11-5"},
    {word:"ファイル",def:"file",pos:"Noun",sub:"11-5"},
    {word:"プリントアウト",def:"printout",pos:"Noun",sub:"11-5"},
    {word:"デジカメ",def:"digital camera",pos:"Noun",sub:"11-5"},
    {word:"マニュアル",def:"manual",pos:"Noun",sub:"11-5"},
    {word:"セットアップ",def:"setup",pos:"Noun",sub:"11-5"},
    {word:"靴屋",reading:"くつや",def:"shoe store",pos:"Noun",sub:"11-5"},
    {word:"分かりやすい",reading:"わかりやすい",def:"easy to understand",pos:"Adj",sub:"11-5",ex:"この教科書はわかりやすいです。"},
    {word:"間違えます",reading:"まちがえます",def:"to make a mistake",pos:"Verb",grp:"G2",sub:"11-5",ex:"答えを間違えました。"},
    {word:"履きます",reading:"はきます",def:"to wear (shoes / trousers)",pos:"Verb",grp:"G1",sub:"11-5",ex:"くつをはきます。"},
    {word:"使います",reading:"つかいます",def:"to use",pos:"Verb",grp:"G1",sub:"11-5",ex:"パソコンをつかいます。"},
    {word:"覚えます",reading:"おぼえます",def:"to memorise; to remember",pos:"Verb",grp:"G2",sub:"11-5",ex:"漢字をおぼえます。"},
    {word:"住みます",reading:"すみます",def:"to live; to reside",pos:"Verb",grp:"G1",sub:"11-5",ex:"日本にすみます。"},
    {word:"いくら",def:"how much",pos:"Noun",sub:"11·Reading"},
    {word:"席",reading:"せき",def:"seat",pos:"Noun",sub:"11·Reading"},
    {word:"カラオケ",def:"karaoke",pos:"Noun",sub:"11·Reading"},
    {word:"歌舞伎",reading:"かぶき",def:"kabuki",pos:"Noun",sub:"11·Reading"},
  ],
  "L12": [
    {word:"お菓子",reading:"おかし",def:"snacks, sweets",pos:"Noun",sub:"12-1"},
    {word:"芝生",reading:"しばふ",def:"lawn, grass",pos:"Noun",sub:"12-1"},
    {word:"ダイエット",def:"diet",pos:"Noun",sub:"12-1"},
    {word:"電話代",reading:"でんわだい",def:"phone bill",pos:"Noun",sub:"12-1"},
    {word:"危ない",reading:"あぶない",def:"dangerous",pos:"Adj",sub:"12-1",ex:"都会はべんりですが、あぶないです。"},
    {word:"はずかしい",def:"embarrassing, shy",pos:"Adj",sub:"12-1",ex:"私はとてもはずかしかったです。"},
    {word:"おします",def:"to push",pos:"Verb",grp:"G1",sub:"12-1"},
    {word:"遅れます",reading:"おくれます",def:"to be late; to be delayed",pos:"Verb",grp:"G2",sub:"12-1",ex:"田中さんはクラスにおくれます。"},
    {word:"座ります",reading:"すわります",def:"to sit down",pos:"Verb",grp:"G1",sub:"12-1",ex:"席に座ります。"},
    {word:"捨てます",reading:"すてます",def:"to throw away; to discard",pos:"Verb",grp:"G2",sub:"12-1",ex:"ゴミをすてます。"},
    {word:"触ります",reading:"さわります",def:"to touch",pos:"Verb",grp:"G1",sub:"12-1",ex:"彼は犬をさわっています。"},
    {word:"授業中",reading:"じゅぎょうちゅう",def:"during class",pos:"Noun",sub:"12-1"},
    {word:"作文",reading:"さくぶん",def:"essay, composition",pos:"Noun",sub:"12-2"},
    {word:"キッチン",def:"kitchen",pos:"Noun",sub:"12-2"},
    {word:"さっき",def:"a little while ago",pos:"Adv",sub:"12-2",ex:"さっき田中さんに会いました。"},
    {word:"じっと",def:"still, motionless",pos:"Adv",sub:"12-2",ex:"田中さんはじっとすわっています。"},
    {word:"変",reading:"へん",def:"strange; odd",pos:"Adj",sub:"12-2",ex:"見て！あそこに変な人がいるよ。"},
    {word:"片付けます",reading:"かたづけます",def:"to tidy up; to put away",pos:"Verb",grp:"G2",sub:"12-2",ex:"へやをかたづけます。"},
    {word:"着ます",reading:"きます",def:"to wear; to put on (clothes)",pos:"Verb",grp:"G2",sub:"12-2"},
    {word:"入れます",reading:"いれます",def:"to put in; to insert",pos:"Verb",grp:"G2",sub:"12-2",ex:"コーヒーにミルクをいれます。"},
    {word:"降ります",reading:"ふります",def:"to fall (rain, snow)",pos:"Verb",grp:"G1",sub:"12-3",ex:"きのう雨がふりました。"},
    {word:"初めて",reading:"はじめて",def:"for the first time",pos:"Adv",sub:"12-3",ex:"きのう、はじめて彼に会いました。"},
    {word:"台風",reading:"たいふう",def:"typhoon",pos:"Noun",sub:"12-3"},
    {word:"ちょっと",def:"a little; just a moment",pos:"Adv",sub:"12-3",ex:"このコートはちょっとたかいです。"},
    {word:"美人",reading:"びじん",def:"beautiful woman",pos:"Noun",sub:"12-4"},
    {word:"金持ち",reading:"かねもち",def:"rich person",pos:"Noun",sub:"12-4"},
    {word:"しょうゆ",def:"soy sauce",pos:"Noun",sub:"12-4"},
    {word:"ヘルシー",def:"healthy",pos:"Noun",sub:"12-4"},
    {word:"サッカー選手",reading:"さっかーせんしゅ",def:"soccer player",pos:"Noun",sub:"12-4"},
    {word:"石けん",reading:"せっけん",def:"soap",pos:"Noun",sub:"12-4"},
    {word:"時間通り",reading:"じかんどおり",def:"on time, punctual",pos:"Expr",sub:"12-4"},
    {word:"出かけます",reading:"でかけます",def:"to go out",pos:"Verb",grp:"G2",sub:"12-4",ex:"あした出かけます。"},
    {word:"人気",reading:"にんき",def:"popularity",pos:"Noun",sub:"12-4"},
    {word:"せまい",def:"narrow",pos:"Adj",sub:"12-4"},
    {word:"優しい",reading:"やさしい",def:"kind; gentle",pos:"Adj",sub:"12-4",ex:"山田さんはやさしいです。"},
    {word:"体",reading:"からだ",def:"body",pos:"Noun",sub:"12-5"},
    {word:"品物",reading:"しなもの",def:"goods, items",pos:"Noun",sub:"12-5"},
    {word:"自然",reading:"しぜん",def:"nature",pos:"Noun",sub:"12-5"},
    {word:"一日中",reading:"いちにちじゅう",def:"all day long",pos:"Noun",sub:"12-5"},
    {word:"残業",reading:"ざんぎょう",def:"overtime work",pos:"Noun",sub:"12-5"},
    {word:"生活",reading:"せいかつ",def:"daily life, lifestyle",pos:"Noun",sub:"12-5"},
    {word:"文法",reading:"ぶんぽう",def:"grammar",pos:"Noun",sub:"12-5"},
    {word:"ストーリー",def:"story",pos:"Noun",sub:"12-5"},
    {word:"電車代",reading:"でんしゃだい",def:"train fare",pos:"Noun",sub:"12-5"},
    {word:"すてき",def:"wonderful, lovely",pos:"Adj",sub:"12-5",ex:"すてきなセーターですね。"},
    {word:"美しい",reading:"うつくしい",def:"beautiful",pos:"Adj",sub:"12-5",ex:"山本さんは美しいです。"},
    {word:"辞めます",reading:"やめます",def:"to quit",pos:"Verb",grp:"G2",sub:"12-5",ex:"アルバイトをやめます。"},
    {word:"疲れます",reading:"つかれます",def:"to get tired",pos:"Verb",grp:"G2",sub:"12-5",ex:"水泳はとても疲れます。"},
    {word:"方",reading:"かた",def:"person (polite), way of doing",pos:"Noun",sub:"12·Reading"},
    {word:"外国",reading:"がいこく",def:"foreign country",pos:"Noun",sub:"12·Reading"},
    {word:"おじいさん",def:"grandfather, old man",pos:"Noun",sub:"12·Reading"},
    {word:"教室",reading:"きょうしつ",def:"classroom",pos:"Noun",sub:"12·Reading"},
    {word:"きゅうり",def:"cucumber",pos:"Noun",sub:"12·Reading"},
    {word:"ぶどう",def:"grapes",pos:"Noun",sub:"12·Reading"},
    {word:"めずらしい",def:"rare, unusual",pos:"Adj",sub:"12·Reading",ex:"これはめずらしいおさけです。"},
    {word:"遠い",reading:"とおい",def:"far; distant",pos:"Adj",sub:"12·Reading",ex:"学校はとても遠いです。"},
    {word:"迷います",reading:"まよいます",def:"to get lost; to be lost",pos:"Verb",grp:"G1",sub:"12·Reading",ex:"私は道にまよいました。"},
    {word:"答えます",reading:"こたえます",def:"to answer; to reply",pos:"Verb",grp:"G2",sub:"12·Reading",ex:"私は日本はおもしろいとこたえました。"},
    {word:"〜について",def:"about ~, regarding ~",pos:"Expr",sub:"12·Reading",ex:"日本についておしえてください。"},
  ],
  "EXPR": [
    {word:"おはようございます",reading:"",def:"Good morning (polite)",pos:"Expr",kind:"Greeting"},
    {word:"こんにちは",reading:"",def:"Hello / Good afternoon",pos:"Expr",kind:"Greeting"},
    {word:"こんばんは",reading:"",def:"Good evening",pos:"Expr",kind:"Greeting"},
    {word:"おやすみなさい",reading:"",def:"Good night",pos:"Expr",kind:"Greeting"},
    {word:"ありがとうございます",reading:"",def:"Thank you",pos:"Expr",kind:"Greeting"},
    {word:"すみません",reading:"",def:"Excuse me / Sorry",pos:"Expr",kind:"Greeting"},
    {word:"おめでとうございます",reading:"",def:"Congratulations",pos:"Expr",kind:"Greeting"},
    {word:"いただきます",reading:"",def:"(said before eating)",pos:"Expr",kind:"Greeting"},
    {word:"ごちそうさまでした",reading:"",def:"(said after eating)",pos:"Expr",kind:"Greeting"},
    {word:"いってきます",reading:"",def:"I’m off (said by the one leaving)",pos:"Expr",kind:"Greeting"},
    {word:"いってらっしゃい",reading:"",def:"See you (said to the one leaving)",pos:"Expr",kind:"Greeting"},
    {word:"ただいま",reading:"",def:"I’m home (said by the one arriving)",pos:"Expr",kind:"Greeting"},
    {word:"おかえりなさい",reading:"",def:"Welcome back (said to the one arriving)",pos:"Expr",kind:"Greeting"},
    {word:"どうして",reading:"どうして",def:"Why",pos:"Expr",sub:"Question",exprKey:"どうしてですか"},
    {word:"どうしましたか",reading:"どうしましたか",def:"What happened?",pos:"Expr",sub:"Question",exprKey:"どうしましたか"},
  ],
};
const oppData = {};
kanjiData['S1'] = {
  'KL1': [
    {kanji:'一',reading:'いち',meaning:'one',mode:'write',part:1},
    {kanji:'一つ',reading:'ひとつ',meaning:'one (counter)',mode:'write',part:1},
    {kanji:'一月',reading:'いちがつ',meaning:'January',mode:'read',part:1},
    {kanji:'二',reading:'に',meaning:'two',mode:'write',part:1},
    {kanji:'二つ',reading:'ふたつ',meaning:'two (counter)',mode:'write',part:1},
    {kanji:'二月',reading:'にがつ',meaning:'February',mode:'read',part:1},
    {kanji:'三',reading:'さん',meaning:'three',mode:'write',part:1},
    {kanji:'三つ',reading:'みっつ',meaning:'three (counter)',mode:'write',part:1},
    {kanji:'三月',reading:'さんがつ',meaning:'March',mode:'read',part:1},
    {kanji:'四',reading:'よん',meaning:'four',mode:'write',part:1},
    {kanji:'四つ',reading:'よっつ',meaning:'four (counter)',mode:'write',part:1},
    {kanji:'四月',reading:'しがつ',meaning:'April',mode:'read',part:1},
    {kanji:'五',reading:'ご',meaning:'five',mode:'write',part:1},
    {kanji:'五つ',reading:'いつつ',meaning:'five (counter)',mode:'write',part:1},
    {kanji:'五月',reading:'ごがつ',meaning:'May',mode:'read',part:1},
    {kanji:'六',reading:'ろく',meaning:'six',mode:'write',part:1},
    {kanji:'六つ',reading:'むっつ',meaning:'six (counter)',mode:'write',part:1},
    {kanji:'六百',reading:'ろっぴゃく',meaning:'600',mode:'write',part:1},
    {kanji:'六月',reading:'ろくがつ',meaning:'June',mode:'read',part:1},
    {kanji:'七',reading:'なな',meaning:'seven',mode:'write',part:1},
    {kanji:'七つ',reading:'ななつ',meaning:'seven (counter)',mode:'write',part:1},
    {kanji:'七月',reading:'しちがつ',meaning:'July',mode:'read',part:1},
    {kanji:'八',reading:'はち',meaning:'eight',mode:'write',part:1},
    {kanji:'八つ',reading:'やっつ',meaning:'eight (counter)',mode:'write',part:1},
    {kanji:'八百',reading:'はっぴゃく',meaning:'800',mode:'write',part:1},
    {kanji:'八月',reading:'はちがつ',meaning:'August',mode:'read',part:1},
    {kanji:'九',reading:'きゅう',meaning:'nine',mode:'write',part:2},
    {kanji:'九つ',reading:'ここのつ',meaning:'nine (counter)',mode:'write',part:2},
    {kanji:'九月',reading:'くがつ',meaning:'September',mode:'read',part:2},
    {kanji:'十',reading:'じゅう',meaning:'ten',mode:'write',part:2},
    {kanji:'十月',reading:'じゅうがつ',meaning:'October',mode:'read',part:2},
    {kanji:'十一月',reading:'じゅういちがつ',meaning:'November',mode:'read',part:2},
    {kanji:'十二月',reading:'じゅうにがつ',meaning:'December',mode:'read',part:2},
    {kanji:'百',reading:'ひゃく',meaning:'hundred',mode:'write',part:2},
    {kanji:'二百',reading:'にひゃく',meaning:'200',mode:'write',part:2},
    {kanji:'三百',reading:'さんびゃく',meaning:'300',mode:'write',part:2},
    {kanji:'六百',reading:'ろっぴゃく',meaning:'600',mode:'write',part:2},
    {kanji:'八百',reading:'はっぴゃく',meaning:'800',mode:'write',part:2},
    {kanji:'千',reading:'せん',meaning:'thousand',mode:'write',part:2},
    {kanji:'二千',reading:'にせん',meaning:'2000',mode:'write',part:2},
    {kanji:'三千',reading:'さんぜん',meaning:'3000',mode:'write',part:2},
    {kanji:'八千',reading:'はっせん',meaning:'8000',mode:'write',part:2},
    {kanji:'千円',reading:'せんえん',meaning:'1000 yen',mode:'write',part:2},
    {kanji:'一万',reading:'いちまん',meaning:'10,000',mode:'write',part:2},
    {kanji:'百万',reading:'ひゃくまん',meaning:'one million',mode:'write',part:2},
    {kanji:'百円',reading:'ひゃくえん',meaning:'100 yen',mode:'write',part:2},
    {kanji:'口',reading:'くち',meaning:'mouth',mode:'write',part:2},
    {kanji:'入口',reading:'いりぐち',meaning:'entrance',mode:'read',part:2},
    {kanji:'出口',reading:'でぐち',meaning:'exit',mode:'read',part:2},
    {kanji:'目',reading:'め',meaning:'eye',mode:'write',part:2},
  ],
  'KL2': [
    {kanji:'一日',reading:'ついたち',meaning:'1st (of month)',mode:'write',part:1},
    {kanji:'二日',reading:'ふつか',meaning:'2nd',mode:'write',part:1},
    {kanji:'日曜日',reading:'にちようび',meaning:'Sunday',mode:'write',part:1},
    {kanji:'日本',reading:'にほん',meaning:'Japan',mode:'write',part:1},
    {kanji:'今日',reading:'きょう',meaning:'today',mode:'write',part:1},
    {kanji:'三日',reading:'みっか',meaning:'3rd',mode:'read',part:1},
    {kanji:'一月',reading:'いちがつ',meaning:'January',mode:'write',part:1},
    {kanji:'月曜日',reading:'げつようび',meaning:'Monday',mode:'write',part:1},
    {kanji:'今月',reading:'こんげつ',meaning:'this month',mode:'write',part:1},
    {kanji:'月',reading:'つき',meaning:'moon, month',mode:'write',part:1},
    {kanji:'一か月',reading:'いっかげつ',meaning:'one month',mode:'read',part:1},
    {kanji:'火曜日',reading:'かようび',meaning:'Tuesday',mode:'write',part:1},
    {kanji:'火',reading:'ひ',meaning:'fire, Tuesday',mode:'write',part:1},
    {kanji:'水曜日',reading:'すいようび',meaning:'Wednesday',mode:'write',part:1},
    {kanji:'水',reading:'みず',meaning:'water, Wednesday',mode:'write',part:1},
    {kanji:'木曜日',reading:'もくようび',meaning:'Thursday',mode:'write',part:1},
    {kanji:'木',reading:'き',meaning:'tree',mode:'write',part:1},
    {kanji:'金曜日',reading:'きんようび',meaning:'Friday',mode:'write',part:1},
    {kanji:'お金',reading:'おかね',meaning:'money',mode:'write',part:1},
    {kanji:'土曜日',reading:'どようび',meaning:'Saturday',mode:'write',part:1},
    {kanji:'土',reading:'つち',meaning:'earth, Saturday',mode:'read',part:1},
    {kanji:'曜日',reading:'ようび',meaning:'day of week',mode:'write',part:1},
    {kanji:'本',reading:'ほん',meaning:'book, origin',mode:'write',part:2},
    {kanji:'日本',reading:'にほん',meaning:'Japan',mode:'write',part:2},
    {kanji:'一本',reading:'いっぽん',meaning:'1 (long thing)',mode:'write',part:2},
    {kanji:'二本',reading:'にほん',meaning:'2',mode:'write',part:2},
    {kanji:'三本',reading:'さんぼん',meaning:'3',mode:'write',part:2},
    {kanji:'山本さん',reading:'やまもとさん',meaning:'Yamamoto (name)',mode:'read',part:2},
    {kanji:'人',reading:'ひと',meaning:'person',mode:'write',part:2},
    {kanji:'日本人',reading:'にほんじん',meaning:'Japanese person',mode:'write',part:2},
    {kanji:'一人',reading:'ひとり',meaning:'one person, alone',mode:'write',part:2},
    {kanji:'二人',reading:'ふたり',meaning:'two people',mode:'write',part:2},
    {kanji:'三人',reading:'さんにん',meaning:'three people',mode:'write',part:2},
    {kanji:'大人',reading:'おとな',meaning:'adult',mode:'read',part:2},
    {kanji:'今',reading:'いま',meaning:'now',mode:'write',part:2},
    {kanji:'今月',reading:'こんげつ',meaning:'this month',mode:'write',part:2},
    {kanji:'今日',reading:'きょう',meaning:'today',mode:'write',part:2},
    {kanji:'（お）寺',reading:'おてら',meaning:'temple',mode:'write',part:2},
    {kanji:'一時',reading:'いちじ',meaning:'1 o\'clock',mode:'write',part:2},
    {kanji:'時々',reading:'ときどき',meaning:'sometimes',mode:'read',part:2},
    {kanji:'三時半',reading:'さんじはん',meaning:'3:30',mode:'write',part:2},
    {kanji:'半分',reading:'はんぶん',meaning:'half',mode:'write',part:2},
    {kanji:'刀',reading:'かたな',meaning:'sword, katana',mode:'read',part:2},
    {kanji:'五分',reading:'ごふん',meaning:'5 minutes',mode:'write',part:2},
    {kanji:'十分',reading:'じゅっぷん',meaning:'10 minutes',mode:'write',part:2},
    {kanji:'半分',reading:'はんぶん',meaning:'half',mode:'write',part:2},
    {kanji:'分かる',reading:'わかる',meaning:'to understand',mode:'write',part:2},
  ],
  'KL3': [
    {kanji:'上',reading:'うえ',meaning:'above, up',mode:'write',part:1},
    {kanji:'上げる',reading:'あげる',meaning:'to raise, to give',mode:'write',part:1},
    {kanji:'下',reading:'した',meaning:'below, down',mode:'write',part:1},
    {kanji:'下げる',reading:'さげる',meaning:'to lower',mode:'write',part:1},
    {kanji:'下さい',reading:'ください',meaning:'please give me',mode:'read',part:1},
    {kanji:'上下',reading:'じょうげ',meaning:'up and down',mode:'read',part:1},
    {kanji:'中',reading:'なか',meaning:'inside, middle',mode:'write',part:1},
    {kanji:'中国',reading:'ちゅうごく',meaning:'China',mode:'read',part:1},
    {kanji:'一年中',reading:'いちねんじゅう',meaning:'all year long',mode:'read',part:1},
    {kanji:'一日中',reading:'いちにちじゅう',meaning:'all day long',mode:'read',part:1},
    {kanji:'外',reading:'そと',meaning:'outside',mode:'write',part:1},
    {kanji:'外国',reading:'がいこく',meaning:'foreign country',mode:'read',part:1},
    {kanji:'外国人',reading:'がいこくじん',meaning:'foreigner',mode:'read',part:1},
    {kanji:'右',reading:'みぎ',meaning:'right',mode:'write',part:1},
    {kanji:'右側',reading:'みぎがわ',meaning:'right side',mode:'read',part:1},
    {kanji:'左右',reading:'さゆう',meaning:'left and right',mode:'read',part:1},
    {kanji:'工事中',reading:'こうじちゅう',meaning:'under construction',mode:'read',part:1},
    {kanji:'左',reading:'ひだり',meaning:'left',mode:'write',part:1},
    {kanji:'左側',reading:'ひだりがわ',meaning:'left side',mode:'read',part:1},
    {kanji:'前',reading:'まえ',meaning:'front, before',mode:'write',part:1},
    {kanji:'午前',reading:'ごぜん',meaning:'AM, morning',mode:'write',part:1},
    {kanji:'午前中',reading:'ごぜんちゅう',meaning:'during the morning',mode:'write',part:1},
    {kanji:'名前',reading:'なまえ',meaning:'name',mode:'read',part:1},
    {kanji:'後ろ',reading:'うしろ',meaning:'behind, back',mode:'write',part:2},
    {kanji:'クラスの後',reading:'あと',meaning:'after class',mode:'write',part:2},
    {kanji:'後で',reading:'あとで',meaning:'later',mode:'write',part:2},
    {kanji:'午後',reading:'ごご',meaning:'PM, afternoon',mode:'write',part:2},
    {kanji:'午前',reading:'ごぜん',meaning:'AM, morning',mode:'write',part:2},
    {kanji:'午前中',reading:'ごぜんちゅう',meaning:'during the morning',mode:'write',part:2},
    {kanji:'門',reading:'もん',meaning:'gate',mode:'write',part:2},
    {kanji:'間',reading:'あいだ',meaning:'between, space',mode:'write',part:2},
    {kanji:'時間',reading:'じかん',meaning:'hours',mode:'write',part:2},
    {kanji:'二時間',reading:'にじかん',meaning:'two hours',mode:'write',part:2},
    {kanji:'東',reading:'ひがし',meaning:'east',mode:'write',part:2},
    {kanji:'東口',reading:'ひがしぐち',meaning:'east exit',mode:'write',part:2},
    {kanji:'東京',reading:'とうきょう',meaning:'Tokyo',mode:'read',part:2},
    {kanji:'西',reading:'にし',meaning:'west',mode:'write',part:2},
    {kanji:'西口',reading:'にしぐち',meaning:'west exit',mode:'write',part:2},
    {kanji:'南',reading:'みなみ',meaning:'south',mode:'write',part:2},
    {kanji:'南口',reading:'みなみぐち',meaning:'south exit',mode:'write',part:2},
    {kanji:'東南アジア',reading:'とうなんアジア',meaning:'Southeast Asia',mode:'write',part:2},
    {kanji:'北',reading:'きた',meaning:'north',mode:'write',part:2},
    {kanji:'北口',reading:'きたぐち',meaning:'north exit',mode:'write',part:2},
  ],
  'KL4': [
    {kanji:'田中さん',reading:'たなかさん',meaning:'Tanaka (name)',mode:'write',part:1},
    {kanji:'山田さん',reading:'やまださん',meaning:'Yamada (name)',mode:'read',part:1},
    {kanji:'力',reading:'ちから',meaning:'power, strength',mode:'write',part:1},
    {kanji:'協力する',reading:'きょうりょくする',meaning:'to cooperate',mode:'read',part:1},
    {kanji:'男の子',reading:'おとこのこ',meaning:'boy',mode:'write',part:1},
    {kanji:'男の人',reading:'おとこのひと',meaning:'man',mode:'write',part:1},
    {kanji:'男性',reading:'だんせい',meaning:'male',mode:'read',part:1},
    {kanji:'女の子',reading:'おんなのこ',meaning:'girl',mode:'write',part:1},
    {kanji:'女の人',reading:'おんなのひと',meaning:'woman',mode:'write',part:1},
    {kanji:'女性',reading:'じょせい',meaning:'female',mode:'read',part:1},
    {kanji:'子供',reading:'こども',meaning:'child',mode:'read',part:1},
    {kanji:'学生',reading:'がくせい',meaning:'student',mode:'write',part:1},
    {kanji:'大学',reading:'だいがく',meaning:'university',mode:'read',part:1},
    {kanji:'学校',reading:'がっこう',meaning:'school',mode:'read',part:1},
    {kanji:'先生',reading:'せんせい',meaning:'teacher',mode:'write',part:1},
    {kanji:'生まれる',reading:'うまれる',meaning:'to be born',mode:'write',part:1},
    {kanji:'生きる',reading:'いきる',meaning:'to live',mode:'write',part:1},
    {kanji:'誕生日',reading:'たんじょうび',meaning:'birthday',mode:'read',part:1},
    {kanji:'先月',reading:'せんげつ',meaning:'last month',mode:'write',part:1},
    {kanji:'先に',reading:'さきに',meaning:'ahead, first',mode:'read',part:1},
    {kanji:'何',reading:'なに',meaning:'what',mode:'write',part:2},
    {kanji:'何か',reading:'なにか',meaning:'something',mode:'write',part:2},
    {kanji:'何人',reading:'なんにん',meaning:'how many people',mode:'write',part:2},
    {kanji:'何時',reading:'なんじ',meaning:'what time',mode:'write',part:2},
    {kanji:'父',reading:'ちち',meaning:'(my) father',mode:'write',part:2},
    {kanji:'お父さん',reading:'おとうさん',meaning:'father',mode:'write',part:2},
    {kanji:'母',reading:'はは',meaning:'(my) mother',mode:'write',part:2},
    {kanji:'お母さん',reading:'おかあさん',meaning:'mother (someone else\'s)',mode:'write',part:2},
    {kanji:'一年',reading:'いちねん',meaning:'one year',mode:'write',part:2},
    {kanji:'今年',reading:'ことし',meaning:'this year',mode:'write',part:2},
    {kanji:'年',reading:'とし',meaning:'year',mode:'write',part:2},
    {kanji:'去年',reading:'きょねん',meaning:'last year',mode:'write',part:2},
    {kanji:'毎日',reading:'まいにち',meaning:'every day',mode:'write',part:2},
    {kanji:'毎月',reading:'まいつき',meaning:'every month',mode:'write',part:2},
    {kanji:'毎年',reading:'まいとし',meaning:'every year',mode:'write',part:2},
    {kanji:'国王',reading:'こくおう',meaning:'king',mode:'read',part:2},
    {kanji:'国',reading:'くに',meaning:'country, nation',mode:'write',part:2},
    {kanji:'外国',reading:'がいこく',meaning:'foreign country',mode:'write',part:2},
    {kanji:'中国',reading:'ちゅうごく',meaning:'China',mode:'write',part:2},
    {kanji:'国籍',reading:'こくせき',meaning:'nationality',mode:'read',part:2},
  ],
  'KL5': [
    {kanji:'見る',reading:'みる',meaning:'to see',mode:'write',part:1},
    {kanji:'見せる',reading:'みせる',meaning:'to show',mode:'write',part:1},
    {kanji:'行く',reading:'いく',meaning:'to go',mode:'write',part:1},
    {kanji:'銀行',reading:'ぎんこう',meaning:'bank',mode:'read',part:1},
    {kanji:'旅行',reading:'りょこう',meaning:'travel',mode:'read',part:1},
    {kanji:'お米',reading:'おこめ',meaning:'rice (uncooked)',mode:'write',part:1},
    {kanji:'欧米',reading:'おうべい',meaning:'Europe and America',mode:'read',part:1},
    {kanji:'来る',reading:'くる',meaning:'to come',mode:'write',part:1},
    {kanji:'来ます',reading:'きます',meaning:'to come (polite)',mode:'write',part:1},
    {kanji:'来ない',reading:'こない',meaning:'does not come',mode:'write',part:1},
    {kanji:'来年',reading:'らいねん',meaning:'next year',mode:'write',part:1},
    {kanji:'来週',reading:'らいしゅう',meaning:'next week',mode:'write',part:1},
    {kanji:'良い',reading:'よい',meaning:'good',mode:'read',part:1},
    {kanji:'食べる',reading:'たべる',meaning:'to eat',mode:'write',part:1},
    {kanji:'食べ物',reading:'たべもの',meaning:'food',mode:'read',part:1},
    {kanji:'食事',reading:'しょくじ',meaning:'meal',mode:'read',part:1},
    {kanji:'飲む',reading:'のむ',meaning:'to drink',mode:'write',part:1},
    {kanji:'飲み物',reading:'のみもの',meaning:'drink, beverage',mode:'read',part:1},
    {kanji:'飲食店',reading:'いんしょくてん',meaning:'restaurant, eatery',mode:'read',part:1},
    {kanji:'会う',reading:'あう',meaning:'to meet',mode:'write',part:1},
    {kanji:'会話',reading:'かいわ',meaning:'conversation',mode:'write',part:1},
    {kanji:'会社',reading:'かいしゃ',meaning:'company; office',mode:'read',part:1},
    {kanji:'耳',reading:'みみ',meaning:'ear',mode:'write',part:2},
    {kanji:'聞く',reading:'きく',meaning:'to listen, hear',mode:'write',part:2},
    {kanji:'新聞',reading:'しんぶん',meaning:'newspaper',mode:'read',part:2},
    {kanji:'言う',reading:'いう',meaning:'to say',mode:'write',part:2},
    {kanji:'話す',reading:'はなす',meaning:'to speak',mode:'write',part:2},
    {kanji:'話',reading:'はなし',meaning:'story, talk',mode:'write',part:2},
    {kanji:'電話',reading:'でんわ',meaning:'telephone',mode:'read',part:2},
    {kanji:'話し合う',reading:'はなしあう',meaning:'to discuss',mode:'read',part:2},
    {kanji:'立つ',reading:'たつ',meaning:'to stand',mode:'write',part:2},
    {kanji:'国立大学',reading:'こくりつだいがく',meaning:'national university',mode:'read',part:2},
    {kanji:'待つ',reading:'まつ',meaning:'to wait',mode:'write',part:2},
    {kanji:'待ち合わせ',reading:'まちあわせ',meaning:'meeting up',mode:'read',part:2},
    {kanji:'周り',reading:'まわり',meaning:'surroundings',mode:'read',part:2},
    {kanji:'一周',reading:'いっしゅう',meaning:'1 lap',mode:'read',part:2},
    {kanji:'今週',reading:'こんしゅう',meaning:'this week',mode:'write',part:2},
    {kanji:'先週',reading:'せんしゅう',meaning:'last week',mode:'write',part:2},
    {kanji:'毎週',reading:'まいしゅう',meaning:'every week',mode:'write',part:2},
    {kanji:'一週間',reading:'いっしゅうかん',meaning:'one week',mode:'write',part:2},
    {kanji:'週末',reading:'しゅうまつ',meaning:'weekend',mode:'read',part:2},
  ],
  'KL6': [
    {kanji:'大きい',reading:'おおきい',meaning:'big',mode:'write',part:1},
    {kanji:'大学生',reading:'だいがくせい',meaning:'university student',mode:'write',part:1},
    {kanji:'大好きな',reading:'だいすきな',meaning:'like very much',mode:'write',part:1},
    {kanji:'大切な',reading:'たいせつな',meaning:'important',mode:'read',part:1},
    {kanji:'小さい',reading:'ちいさい',meaning:'small',mode:'write',part:1},
    {kanji:'小学校',reading:'しょうがっこう',meaning:'elementary school',mode:'read',part:1},
    {kanji:'高い',reading:'たかい',meaning:'tall, expensive',mode:'write',part:1},
    {kanji:'高校',reading:'こうこう',meaning:'high school',mode:'read',part:1},
    {kanji:'円高',reading:'えんだか',meaning:'strong yen',mode:'read',part:1},
    {kanji:'安い',reading:'やすい',meaning:'cheap',mode:'write',part:1},
    {kanji:'安全',reading:'あんぜん',meaning:'safe, safety',mode:'read',part:1},
    {kanji:'円安',reading:'えんやす',meaning:'weak yen',mode:'read',part:1},
    {kanji:'新しい',reading:'あたらしい',meaning:'new',mode:'write',part:1},
    {kanji:'新聞',reading:'しんぶん',meaning:'newspaper',mode:'write',part:1},
    {kanji:'古い',reading:'ふるい',meaning:'old',mode:'write',part:1},
    {kanji:'中古',reading:'ちゅうこ',meaning:'second-hand',mode:'read',part:1},
    {kanji:'元気な',reading:'げんきな',meaning:'healthy, energetic',mode:'write',part:1},
    {kanji:'気をつける',reading:'きをつける',meaning:'to be careful',mode:'write',part:1},
    {kanji:'天気',reading:'てんき',meaning:'weather',mode:'read',part:1},
    {kanji:'電気',reading:'でんき',meaning:'electricity; light (electric)',mode:'read',part:1},
    {kanji:'気持ち',reading:'きもち',meaning:'feeling; mood',mode:'read',part:1},
    {kanji:'人気',reading:'にんき',meaning:'popularity',mode:'read',part:1},
    {kanji:'多い',reading:'おおい',meaning:'many',mode:'write',part:2},
    {kanji:'少し',reading:'すこし',meaning:'a little',mode:'write',part:2},
    {kanji:'少ない',reading:'すくない',meaning:'few',mode:'write',part:2},
    {kanji:'少々',reading:'しょうしょう',meaning:'a little (formal)',mode:'read',part:2},
    {kanji:'広い',reading:'ひろい',meaning:'wide',mode:'write',part:2},
    {kanji:'早い',reading:'はやい',meaning:'fast, early',mode:'write',part:2},
    {kanji:'早く',reading:'はやく',meaning:'quickly, early',mode:'write',part:2},
    {kanji:'長い',reading:'ながい',meaning:'long',mode:'write',part:2},
    {kanji:'社長',reading:'しゃちょう',meaning:'company president',mode:'read',part:2},
    {kanji:'明るい',reading:'あかるい',meaning:'bright',mode:'write',part:2},
    {kanji:'明日',reading:'あした',meaning:'tomorrow',mode:'write',part:2},
    {kanji:'説明',reading:'せつめい',meaning:'explanation',mode:'read',part:2},
    {kanji:'好きな',reading:'すきな',meaning:'liked',mode:'write',part:2},
    {kanji:'大好きな',reading:'だいすきな',meaning:'like very much',mode:'write',part:2},
    {kanji:'友だち',reading:'ともだち',meaning:'friend',mode:'write',part:2},
    {kanji:'友人',reading:'ゆうじん',meaning:'friend (formal)',mode:'read',part:2},
    {kanji:'親友',reading:'しんゆう',meaning:'close friend',mode:'read',part:2},
  ],
  'KL7': [
    {kanji:'入る',reading:'はいる',meaning:'to enter',mode:'write',part:1},
    {kanji:'入れる',reading:'いれる',meaning:'to put in',mode:'write',part:1},
    {kanji:'入学する',reading:'にゅうがくする',meaning:'to enrol',mode:'write',part:1},
    {kanji:'出る',reading:'でる',meaning:'to leave',mode:'write',part:1},
    {kanji:'出かける',reading:'でかける',meaning:'to go out',mode:'write',part:1},
    {kanji:'出す',reading:'だす',meaning:'to take out',mode:'write',part:1},
    {kanji:'出席する',reading:'しゅっせきする',meaning:'to attend',mode:'read',part:1},
    {kanji:'つくば市',reading:'つくばし',meaning:'Tsukuba City',mode:'write',part:1},
    {kanji:'市役所',reading:'しやくしょ',meaning:'city hall',mode:'read',part:1},
    {kanji:'町',reading:'まち',meaning:'town',mode:'write',part:1},
    {kanji:'田町',reading:'たまち',meaning:'Tamachi',mode:'read',part:1},
    {kanji:'本町',reading:'ほんちょう',meaning:'Honcho',mode:'read',part:1},
    {kanji:'村',reading:'むら',meaning:'village',mode:'write',part:1},
    {kanji:'市町村',reading:'しちょうそん',meaning:'municipalities',mode:'read',part:1},
    {kanji:'雨',reading:'あめ',meaning:'rain',mode:'write',part:1},
    {kanji:'大雨',reading:'おおあめ',meaning:'heavy rain',mode:'read',part:1},
    {kanji:'電気',reading:'でんき',meaning:'electricity; light (electric)',mode:'write',part:1},
    {kanji:'電車',reading:'でんしゃ',meaning:'train',mode:'write',part:1},
    {kanji:'電話',reading:'でんわ',meaning:'telephone',mode:'write',part:1},
    {kanji:'電力',reading:'でんりょく',meaning:'electricity, power',mode:'read',part:1},
    {kanji:'電池',reading:'でんち',meaning:'battery',mode:'read',part:1},
    {kanji:'電源',reading:'でんげん',meaning:'power source',mode:'read',part:1},
    {kanji:'車',reading:'くるま',meaning:'car',mode:'write',part:1},
    {kanji:'自転車',reading:'じてんしゃ',meaning:'bicycle',mode:'read',part:1},
    {kanji:'駐車場',reading:'ちゅうしゃじょう',meaning:'parking lot',mode:'read',part:1},
    {kanji:'馬',reading:'うま',meaning:'horse',mode:'write',part:2},
    {kanji:'駅',reading:'えき',meaning:'station',mode:'write',part:2},
    {kanji:'駅員',reading:'えきいん',meaning:'station staff',mode:'read',part:2},
    {kanji:'会社',reading:'かいしゃ',meaning:'company; office',mode:'write',part:2},
    {kanji:'社会',reading:'しゃかい',meaning:'society',mode:'write',part:2},
    {kanji:'社長',reading:'しゃちょう',meaning:'company president',mode:'write',part:2},
    {kanji:'学校',reading:'がっこう',meaning:'school',mode:'write',part:2},
    {kanji:'校長',reading:'こうちょう',meaning:'school principal',mode:'write',part:2},
    {kanji:'店',reading:'みせ',meaning:'shop, store',mode:'write',part:2},
    {kanji:'店員',reading:'てんいん',meaning:'shop staff',mode:'read',part:2},
    {kanji:'売店',reading:'ばいてん',meaning:'kiosk, stand',mode:'read',part:2},
    {kanji:'店長',reading:'てんちょう',meaning:'store manager',mode:'read',part:2},
    {kanji:'銀行',reading:'ぎんこう',meaning:'bank',mode:'write',part:2},
    {kanji:'病気',reading:'びょうき',meaning:'illness, disease',mode:'write',part:2},
    {kanji:'病院',reading:'びょういん',meaning:'hospital',mode:'read',part:2},
    {kanji:'入院する',reading:'にゅういんする',meaning:'to be hospitalised',mode:'write',part:2},
    {kanji:'大学院',reading:'だいがくいん',meaning:'graduate school',mode:'write',part:2},
    {kanji:'退院する',reading:'たいいんする',meaning:'to be discharged (hospital)',mode:'read',part:2},
    {kanji:'美容院',reading:'びよういん',meaning:'beauty salon, hair salon',mode:'read',part:2},
  ],
  'KL8': [
    {kanji:'休む',reading:'やすむ',meaning:'to rest',mode:'write',part:1},
    {kanji:'休み',reading:'やすみ',meaning:'rest, holiday',mode:'write',part:1},
    {kanji:'休日',reading:'きゅうじつ',meaning:'holiday',mode:'read',part:1},
    {kanji:'定休日',reading:'ていきゅうび',meaning:'regular holiday (closed day)',mode:'read',part:1},
    {kanji:'走る',reading:'はしる',meaning:'to run',mode:'write',part:1},
    {kanji:'起きる',reading:'おきる',meaning:'to wake up',mode:'write',part:1},
    {kanji:'起こす',reading:'おこす',meaning:'to wake someone up',mode:'write',part:1},
    {kanji:'貝',reading:'かい',meaning:'shellfish',mode:'write',part:1},
    {kanji:'買う',reading:'かう',meaning:'to buy',mode:'write',part:1},
    {kanji:'買い物',reading:'かいもの',meaning:'shopping',mode:'read',part:1},
    {kanji:'売る',reading:'うる',meaning:'to sell',mode:'write',part:1},
    {kanji:'売り切れる',reading:'うりきれる',meaning:'to sell out',mode:'read',part:1},
    {kanji:'売り場',reading:'うりば',meaning:'sales floor',mode:'read',part:1},
    {kanji:'売店',reading:'ばいてん',meaning:'kiosk, stand',mode:'read',part:1},
    {kanji:'読む',reading:'よむ',meaning:'to read',mode:'write',part:1},
    {kanji:'書く',reading:'かく',meaning:'to write',mode:'write',part:1},
    {kanji:'読書',reading:'どくしょ',meaning:'reading (books)',mode:'read',part:1},
    {kanji:'図書館',reading:'としょかん',meaning:'library',mode:'read',part:1},
    {kanji:'辞書',reading:'じしょ',meaning:'dictionary',mode:'read',part:1},
    {kanji:'教科書',reading:'きょうかしょ',meaning:'textbook',mode:'read',part:1},
    {kanji:'帰る',reading:'かえる',meaning:'to return',mode:'write',part:2},
    {kanji:'帰国',reading:'きこく',meaning:'return to country',mode:'read',part:2},
    {kanji:'日帰り旅行',reading:'ひがえりりょこう',meaning:'day trip',mode:'read',part:2},
    {kanji:'弓',reading:'ゆみ',meaning:'bow (archery)',mode:'write',part:2},
    {kanji:'虫',reading:'むし',meaning:'insect, bug',mode:'write',part:2},
    {kanji:'強い',reading:'つよい',meaning:'strong',mode:'write',part:2},
    {kanji:'勉強する',reading:'べんきょうする',meaning:'to study',mode:'write',part:2},
    {kanji:'持つ',reading:'もつ',meaning:'to hold, have',mode:'write',part:2},
    {kanji:'お金持ち',reading:'おかねもち',meaning:'rich person',mode:'write',part:2},
    {kanji:'気持ち',reading:'きもち',meaning:'feeling; mood',mode:'write',part:2},
    {kanji:'持ち物',reading:'もちもの',meaning:'belongings',mode:'read',part:2},
    {kanji:'名前',reading:'なまえ',meaning:'name',mode:'write',part:2},
    {kanji:'有名な',reading:'ゆうめいな',meaning:'famous',mode:'read',part:2},
    {kanji:'氏名',reading:'しめい',meaning:'full name',mode:'read',part:2},
    {kanji:'名字',reading:'みょうじ',meaning:'surname, family name',mode:'read',part:2},
    {kanji:'名詞',reading:'めいし',meaning:'noun',mode:'read',part:2},
    {kanji:'日本語',reading:'にほんご',meaning:'Japanese',mode:'write',part:2},
    {kanji:'中国語',reading:'ちゅうごくご',meaning:'Chinese',mode:'write',part:2},
    {kanji:'英語',reading:'えいご',meaning:'English (language)',mode:'read',part:2},
    {kanji:'外国語',reading:'がいこくご',meaning:'foreign language',mode:'read',part:2},
  ],
  'SIGN': [
    {kanji:'押',reading:'おす',meaning:'push (door sign · PUSH)',mode:'read',part:1},
    {kanji:'引',reading:'ひく',meaning:'pull (door sign · PULL)',mode:'read',part:1},
    {kanji:'開',reading:'あく / ひらく',meaning:'open (lift button · door sign)',mode:'read',part:1},
    {kanji:'閉',reading:'しまる / しめる',meaning:'close (lift button · closed)',mode:'read',part:1},
    {kanji:'自動',reading:'じどう',meaning:'automatic',mode:'read',part:1},
    {kanji:'自動ドア',reading:'じどうドア',meaning:'automatic door',mode:'read',part:1},
    {kanji:'運転',reading:'うんてん',meaning:'operation (switch label)',mode:'read',part:2},
    {kanji:'入',reading:'いり',meaning:'ON (switch · 運転 入)',mode:'read',part:2},
    {kanji:'切',reading:'きり',meaning:'OFF (switch · 運転 切)',mode:'read',part:2},
    {kanji:'入口',reading:'いりぐち',meaning:'entrance',mode:'read',part:2},
    {kanji:'出口',reading:'でぐち',meaning:'exit',mode:'read',part:2},
    {kanji:'東',reading:'ひがし',meaning:'east',mode:'read',part:2},
    {kanji:'西',reading:'にし',meaning:'west',mode:'read',part:2},
    {kanji:'南',reading:'みなみ',meaning:'south',mode:'read',part:2},
    {kanji:'北',reading:'きた',meaning:'north',mode:'read',part:2},
  ],
};
const grammarData = {};
const conjLookup = {
  '大きい':[{label:'Pres. +',jp:'おおきいです'},{label:'Pres. −',jp:'おおきくありません'},{label:'Past +',jp:'おおきかったです'},{label:'Past −',jp:'おおきくありませんでした'},{label:'Adverb',jp:'おおきく'}],
  'おおきい':[{label:'Pres. +',jp:'おおきいです'},{label:'Pres. −',jp:'おおきくありません'},{label:'Past +',jp:'おおきかったです'},{label:'Past −',jp:'おおきくありませんでした'},{label:'Adverb',jp:'おおきく'}],
  '小さい':[{label:'Pres. +',jp:'ちいさいです'},{label:'Pres. −',jp:'ちいさくありません'},{label:'Past +',jp:'ちいさかったです'},{label:'Past −',jp:'ちいさくありませんでした'},{label:'Adverb',jp:'ちいさく'}],
  'ちいさい':[{label:'Pres. +',jp:'ちいさいです'},{label:'Pres. −',jp:'ちいさくありません'},{label:'Past +',jp:'ちいさかったです'},{label:'Past −',jp:'ちいさくありませんでした'},{label:'Adverb',jp:'ちいさく'}],
  '高い':[{label:'Pres. +',jp:'たかいです'},{label:'Pres. −',jp:'たかくありません'},{label:'Past +',jp:'たかかったです'},{label:'Past −',jp:'たかくありませんでした'},{label:'Adverb',jp:'たかく'}],
  'たかい':[{label:'Pres. +',jp:'たかいです'},{label:'Pres. −',jp:'たかくありません'},{label:'Past +',jp:'たかかったです'},{label:'Past −',jp:'たかくありませんでした'},{label:'Adverb',jp:'たかく'}],
  '安い':[{label:'Pres. +',jp:'やすいです'},{label:'Pres. −',jp:'やすくありません'},{label:'Past +',jp:'やすかったです'},{label:'Past −',jp:'やすくありませんでした'},{label:'Adverb',jp:'やすく'}],
  'やすい':[{label:'Pres. +',jp:'やすいです'},{label:'Pres. −',jp:'やすくありません'},{label:'Past +',jp:'やすかったです'},{label:'Past −',jp:'やすくありませんでした'},{label:'Adverb',jp:'やすく'}],
  '低い':[{label:'Pres. +',jp:'ひくいです'},{label:'Pres. −',jp:'ひくくありません'},{label:'Past +',jp:'ひくかったです'},{label:'Past −',jp:'ひくくありませんでした'},{label:'Adverb',jp:'ひくく'}],
  'ひくい':[{label:'Pres. +',jp:'ひくいです'},{label:'Pres. −',jp:'ひくくありません'},{label:'Past +',jp:'ひくかったです'},{label:'Past −',jp:'ひくくありませんでした'},{label:'Adverb',jp:'ひくく'}],
  '長い':[{label:'Pres. +',jp:'ながいです'},{label:'Pres. −',jp:'ながくありません'},{label:'Past +',jp:'ながかったです'},{label:'Past −',jp:'ながくありませんでした'},{label:'Adverb',jp:'ながく'}],
  'ながい':[{label:'Pres. +',jp:'ながいです'},{label:'Pres. −',jp:'ながくありません'},{label:'Past +',jp:'ながかったです'},{label:'Past −',jp:'ながくありませんでした'},{label:'Adverb',jp:'ながく'}],
  '短い':[{label:'Pres. +',jp:'みじかいです'},{label:'Pres. −',jp:'みじかくありません'},{label:'Past +',jp:'みじかかったです'},{label:'Past −',jp:'みじかくありませんでした'},{label:'Adverb',jp:'みじかく'}],
  'みじかい':[{label:'Pres. +',jp:'みじかいです'},{label:'Pres. −',jp:'みじかくありません'},{label:'Past +',jp:'みじかかったです'},{label:'Past −',jp:'みじかくありませんでした'},{label:'Adverb',jp:'みじかく'}],
  '新しい':[{label:'Pres. +',jp:'あたらしいです'},{label:'Pres. −',jp:'あたらしくありません'},{label:'Past +',jp:'あたらしかったです'},{label:'Past −',jp:'あたらしくありませんでした'},{label:'Adverb',jp:'あたらしく'}],
  'あたらしい':[{label:'Pres. +',jp:'あたらしいです'},{label:'Pres. −',jp:'あたらしくありません'},{label:'Past +',jp:'あたらしかったです'},{label:'Past −',jp:'あたらしくありませんでした'},{label:'Adverb',jp:'あたらしく'}],
  '古い':[{label:'Pres. +',jp:'ふるいです'},{label:'Pres. −',jp:'ふるくありません'},{label:'Past +',jp:'ふるかったです'},{label:'Past −',jp:'ふるくありませんでした'},{label:'Adverb',jp:'ふるく'}],
  'ふるい':[{label:'Pres. +',jp:'ふるいです'},{label:'Pres. −',jp:'ふるくありません'},{label:'Past +',jp:'ふるかったです'},{label:'Past −',jp:'ふるくありませんでした'},{label:'Adverb',jp:'ふるく'}],
  'おいしい':[{label:'Pres. +',jp:'おいしいです'},{label:'Pres. −',jp:'おいしくありません'},{label:'Past +',jp:'おいしかったです'},{label:'Past −',jp:'おいしくありませんでした'},{label:'Adverb',jp:'おいしく'}],
  'まずい':[{label:'Pres. +',jp:'まずいです'},{label:'Pres. −',jp:'まずくありません'},{label:'Past +',jp:'まずかったです'},{label:'Past −',jp:'まずくありませんでした'},{label:'Adverb',jp:'まずく'}],
  '難しい':[{label:'Pres. +',jp:'むずかしいです'},{label:'Pres. −',jp:'むずかしくありません'},{label:'Past +',jp:'むずかしかったです'},{label:'Past −',jp:'むずかしくありませんでした'},{label:'Adverb',jp:'むずかしく'}],
  'むずかしい':[{label:'Pres. +',jp:'むずかしいです'},{label:'Pres. −',jp:'むずかしくありません'},{label:'Past +',jp:'むずかしかったです'},{label:'Past −',jp:'むずかしくありませんでした'},{label:'Adverb',jp:'むずかしく'}],
  '易しい':[{label:'Pres. +',jp:'やさしいです'},{label:'Pres. −',jp:'やさしくありません'},{label:'Past +',jp:'やさしかったです'},{label:'Past −',jp:'やさしくありませんでした'},{label:'Adverb',jp:'やさしく'}],
  'やさしい':[{label:'Pres. +',jp:'やさしいです'},{label:'Pres. −',jp:'やさしくありません'},{label:'Past +',jp:'やさしかったです'},{label:'Past −',jp:'やさしくありませんでした'},{label:'Adverb',jp:'やさしく'}],
  '暑い':[{label:'Pres. +',jp:'あついです'},{label:'Pres. −',jp:'あつくありません'},{label:'Past +',jp:'あつかったです'},{label:'Past −',jp:'あつくありませんでした'},{label:'Adverb',jp:'あつく'}],
  'あつい':[{label:'Pres. +',jp:'あついです'},{label:'Pres. −',jp:'あつくありません'},{label:'Past +',jp:'あつかったです'},{label:'Past −',jp:'あつくありませんでした'},{label:'Adverb',jp:'あつく'}],
  '寒い':[{label:'Pres. +',jp:'さむいです'},{label:'Pres. −',jp:'さむくありません'},{label:'Past +',jp:'さむかったです'},{label:'Past −',jp:'さむくありませんでした'},{label:'Adverb',jp:'さむく'}],
  'さむい':[{label:'Pres. +',jp:'さむいです'},{label:'Pres. −',jp:'さむくありません'},{label:'Past +',jp:'さむかったです'},{label:'Past −',jp:'さむくありませんでした'},{label:'Adverb',jp:'さむく'}],
  'いい':[{label:'Pres. +',jp:'いいです'},{label:'Pres. −',jp:'よくありません'},{label:'Past +',jp:'よかったです'},{label:'Past −',jp:'よくありませんでした'},{label:'Adverb',jp:'よく'}],
  '悪い':[{label:'Pres. +',jp:'わるいです'},{label:'Pres. −',jp:'わるくありません'},{label:'Past +',jp:'わるかったです'},{label:'Past −',jp:'わるくありませんでした'},{label:'Adverb',jp:'わるく'}],
  'わるい':[{label:'Pres. +',jp:'わるいです'},{label:'Pres. −',jp:'わるくありません'},{label:'Past +',jp:'わるかったです'},{label:'Past −',jp:'わるくありませんでした'},{label:'Adverb',jp:'わるく'}],
  '面白い':[{label:'Pres. +',jp:'おもしろいです'},{label:'Pres. −',jp:'おもしろくありません'},{label:'Past +',jp:'おもしろかったです'},{label:'Past −',jp:'おもしろくありませんでした'},{label:'Adverb',jp:'おもしろく'}],
  'おもしろい':[{label:'Pres. +',jp:'おもしろいです'},{label:'Pres. −',jp:'おもしろくありません'},{label:'Past +',jp:'おもしろかったです'},{label:'Past −',jp:'おもしろくありませんでした'},{label:'Adverb',jp:'おもしろく'}],
  'つまらない':[{label:'Pres. +',jp:'つまらないです'},{label:'Pres. −',jp:'つまらなくありません'},{label:'Past +',jp:'つまらなかったです'},{label:'Past −',jp:'つまらなくありませんでした'},{label:'Adverb',jp:'つまらなく'}],
  '重い':[{label:'Pres. +',jp:'おもいです'},{label:'Pres. −',jp:'おもくありません'},{label:'Past +',jp:'おもかったです'},{label:'Past −',jp:'おもくありませんでした'},{label:'Adverb',jp:'おもく'}],
  'おもい':[{label:'Pres. +',jp:'おもいです'},{label:'Pres. −',jp:'おもくありません'},{label:'Past +',jp:'おもかったです'},{label:'Past −',jp:'おもくありませんでした'},{label:'Adverb',jp:'おもく'}],
  '軽い':[{label:'Pres. +',jp:'かるいです'},{label:'Pres. −',jp:'かるくありません'},{label:'Past +',jp:'かるかったです'},{label:'Past −',jp:'かるくありませんでした'},{label:'Adverb',jp:'かるく'}],
  'かるい':[{label:'Pres. +',jp:'かるいです'},{label:'Pres. −',jp:'かるくありません'},{label:'Past +',jp:'かるかったです'},{label:'Past −',jp:'かるくありませんでした'},{label:'Adverb',jp:'かるく'}],
  '白い':[{label:'Pres. +',jp:'しろいです'},{label:'Pres. −',jp:'しろくありません'},{label:'Past +',jp:'しろかったです'},{label:'Past −',jp:'しろくありませんでした'},{label:'Adverb',jp:'しろく'}],
  'しろい':[{label:'Pres. +',jp:'しろいです'},{label:'Pres. −',jp:'しろくありません'},{label:'Past +',jp:'しろかったです'},{label:'Past −',jp:'しろくありませんでした'},{label:'Adverb',jp:'しろく'}],
  '黒い':[{label:'Pres. +',jp:'くろいです'},{label:'Pres. −',jp:'くろくありません'},{label:'Past +',jp:'くろかったです'},{label:'Past −',jp:'くろくありませんでした'},{label:'Adverb',jp:'くろく'}],
  'くろい':[{label:'Pres. +',jp:'くろいです'},{label:'Pres. −',jp:'くろくありません'},{label:'Past +',jp:'くろかったです'},{label:'Past −',jp:'くろくありませんでした'},{label:'Adverb',jp:'くろく'}],
  'うるさい':[{label:'Pres. +',jp:'うるさいです'},{label:'Pres. −',jp:'うるさくありません'},{label:'Past +',jp:'うるさかったです'},{label:'Past −',jp:'うるさくありませんでした'},{label:'Adverb',jp:'うるさく'}],
  '忙しい':[{label:'Pres. +',jp:'いそがしいです'},{label:'Pres. −',jp:'いそがしくありません'},{label:'Past +',jp:'いそがしかったです'},{label:'Past −',jp:'いそがしくありませんでした'},{label:'Adverb',jp:'いそがしく'}],
  'いそがしい':[{label:'Pres. +',jp:'いそがしいです'},{label:'Pres. −',jp:'いそがしくありません'},{label:'Past +',jp:'いそがしかったです'},{label:'Past −',jp:'いそがしくありませんでした'},{label:'Adverb',jp:'いそがしく'}],
  '汚い':[{label:'Pres. +',jp:'きたないです'},{label:'Pres. −',jp:'きたなくありません'},{label:'Past +',jp:'きたなかったです'},{label:'Past −',jp:'きたなくありませんでした'},{label:'Adverb',jp:'きたなく'}],
  'きたない':[{label:'Pres. +',jp:'きたないです'},{label:'Pres. −',jp:'きたなくありません'},{label:'Past +',jp:'きたなかったです'},{label:'Past −',jp:'きたなくありませんでした'},{label:'Adverb',jp:'きたなく'}],
  '親切':[{label:'Pres. +',jp:'しんせつです'},{label:'Pres. −',jp:'しんせつじゃありません'},{label:'Past +',jp:'しんせつでした'},{label:'Past −',jp:'しんせつじゃありませんでした'},{label:'+ Noun',jp:'しんせつな＋N'}],
  'しんせつ':[{label:'Pres. +',jp:'しんせつです'},{label:'Pres. −',jp:'しんせつじゃありません'},{label:'Past +',jp:'しんせつでした'},{label:'Past −',jp:'しんせつじゃありませんでした'},{label:'+ Noun',jp:'しんせつな＋N'}],
  '便利':[{label:'Pres. +',jp:'べんりです'},{label:'Pres. −',jp:'べんりじゃありません'},{label:'Past +',jp:'べんりでした'},{label:'Past −',jp:'べんりじゃありませんでした'},{label:'+ Noun',jp:'べんりな＋N'}],
  'べんり':[{label:'Pres. +',jp:'べんりです'},{label:'Pres. −',jp:'べんりじゃありません'},{label:'Past +',jp:'べんりでした'},{label:'Past −',jp:'べんりじゃありませんでした'},{label:'+ Noun',jp:'べんりな＋N'}],
  'きれい':[{label:'Pres. +',jp:'きれいです'},{label:'Pres. −',jp:'きれいじゃありません'},{label:'Past +',jp:'きれいでした'},{label:'Past −',jp:'きれいじゃありませんでした'},{label:'+ Noun',jp:'きれいな＋N'}],
  '静か':[{label:'Pres. +',jp:'しずかです'},{label:'Pres. −',jp:'しずかじゃありません'},{label:'Past +',jp:'しずかでした'},{label:'Past −',jp:'しずかじゃありませんでした'},{label:'+ Noun',jp:'しずかな＋N'}],
  'しずか':[{label:'Pres. +',jp:'しずかです'},{label:'Pres. −',jp:'しずかじゃありません'},{label:'Past +',jp:'しずかでした'},{label:'Past −',jp:'しずかじゃありませんでした'},{label:'+ Noun',jp:'しずかな＋N'}],
  '元気':[{label:'Pres. +',jp:'げんきです'},{label:'Pres. −',jp:'げんきじゃありません'},{label:'Past +',jp:'げんきでした'},{label:'Past −',jp:'げんきじゃありませんでした'},{label:'+ Noun',jp:'げんきな＋N'}],
  'げんき':[{label:'Pres. +',jp:'げんきです'},{label:'Pres. −',jp:'げんきじゃありません'},{label:'Past +',jp:'げんきでした'},{label:'Past −',jp:'げんきじゃありませんでした'},{label:'+ Noun',jp:'げんきな＋N'}],
  '大切':[{label:'Pres. +',jp:'たいせつです'},{label:'Pres. −',jp:'たいせつじゃありません'},{label:'Past +',jp:'たいせつでした'},{label:'Past −',jp:'たいせつじゃありませんでした'},{label:'+ Noun',jp:'たいせつな＋N'}],
  'たいせつ':[{label:'Pres. +',jp:'たいせつです'},{label:'Pres. −',jp:'たいせつじゃありません'},{label:'Past +',jp:'たいせつでした'},{label:'Past −',jp:'たいせつじゃありませんでした'},{label:'+ Noun',jp:'たいせつな＋N'}],
  'ハンサム':[{label:'Pres. +',jp:'ハンサムです'},{label:'Pres. −',jp:'ハンサムじゃありません'},{label:'Past +',jp:'ハンサムでした'},{label:'Past −',jp:'ハンサムじゃありませんでした'},{label:'+ Noun',jp:'ハンサムな＋N'}],
  '暇':[{label:'Pres. +',jp:'ひまです'},{label:'Pres. −',jp:'ひまじゃありません'},{label:'Past +',jp:'ひまでした'},{label:'Past −',jp:'ひまじゃありませんでした'},{label:'+ Noun',jp:'ひまな＋N'}],
  'ひま':[{label:'Pres. +',jp:'ひまです'},{label:'Pres. −',jp:'ひまじゃありません'},{label:'Past +',jp:'ひまでした'},{label:'Past −',jp:'ひまじゃありませんでした'},{label:'+ Noun',jp:'ひまな＋N'}],
  '大変':[{label:'Pres. +',jp:'たいへんです'},{label:'Pres. −',jp:'たいへんじゃありません'},{label:'Past +',jp:'たいへんでした'},{label:'Past −',jp:'たいへんじゃありませんでした'},{label:'+ Noun',jp:'たいへんな＋N'}],
  'たいへん':[{label:'Pres. +',jp:'たいへんです'},{label:'Pres. −',jp:'たいへんじゃありません'},{label:'Past +',jp:'たいへんでした'},{label:'Past −',jp:'たいへんじゃありませんでした'},{label:'+ Noun',jp:'たいへんな＋N'}],
  '近い':[{label:'Pres. +',jp:'ちかいです'},{label:'Pres. −',jp:'ちかくありません'},{label:'Past +',jp:'ちかかったです'},{label:'Past −',jp:'ちかくありませんでした'},{label:'Adverb',jp:'ちかく'}],
  'ちかい':[{label:'Pres. +',jp:'ちかいです'},{label:'Pres. −',jp:'ちかくありません'},{label:'Past +',jp:'ちかかったです'},{label:'Past −',jp:'ちかくありませんでした'},{label:'Adverb',jp:'ちかく'}],
  '食べます':[{label:'Pres. +',jp:'食べます'},{label:'Pres. −',jp:'食べません'},{label:'Past +',jp:'食べました'},{label:'Past −',jp:'食べませんでした'},{label:'Dictionary',jp:'たべる'},{label:'て-form',jp:'たべて'},{label:'ない form',jp:'たべない'}],
  '食べます#G2':[{label:'Pres. +',jp:'食べます'},{label:'Pres. −',jp:'食べません'},{label:'Past +',jp:'食べました'},{label:'Past −',jp:'食べませんでした'},{label:'Dictionary',jp:'たべる'},{label:'て-form',jp:'たべて'},{label:'ない form',jp:'たべない'}],
  'たべます#G2':[{label:'Pres. +',jp:'たべます'},{label:'Pres. −',jp:'たべません'},{label:'Past +',jp:'たべました'},{label:'Past −',jp:'たべませんでした'},{label:'Dictionary',jp:'たべる'},{label:'て-form',jp:'たべて'},{label:'ない form',jp:'たべない'}],
  'たべます':[{label:'Pres. +',jp:'たべます'},{label:'Pres. −',jp:'たべません'},{label:'Past +',jp:'たべました'},{label:'Past −',jp:'たべませんでした'},{label:'Dictionary',jp:'たべる'},{label:'て-form',jp:'たべて'},{label:'ない form',jp:'たべない'}],
  '飲みます':[{label:'Pres. +',jp:'飲みます'},{label:'Pres. −',jp:'飲みません'},{label:'Past +',jp:'飲みました'},{label:'Past −',jp:'飲みませんでした'},{label:'Dictionary',jp:'のむ'},{label:'て-form',jp:'のんで'},{label:'ない form',jp:'のまない'}],
  '飲みます#G1':[{label:'Pres. +',jp:'飲みます'},{label:'Pres. −',jp:'飲みません'},{label:'Past +',jp:'飲みました'},{label:'Past −',jp:'飲みませんでした'},{label:'Dictionary',jp:'のむ'},{label:'て-form',jp:'のんで'},{label:'ない form',jp:'のまない'}],
  'のみます#G1':[{label:'Pres. +',jp:'のみます'},{label:'Pres. −',jp:'のみません'},{label:'Past +',jp:'のみました'},{label:'Past −',jp:'のみませんでした'},{label:'Dictionary',jp:'のむ'},{label:'て-form',jp:'のんで'},{label:'ない form',jp:'のまない'}],
  'のみます':[{label:'Pres. +',jp:'のみます'},{label:'Pres. −',jp:'のみません'},{label:'Past +',jp:'のみました'},{label:'Past −',jp:'のみませんでした'},{label:'Dictionary',jp:'のむ'},{label:'て-form',jp:'のんで'},{label:'ない form',jp:'のまない'}],
  '読みます':[{label:'Pres. +',jp:'読みます'},{label:'Pres. −',jp:'読みません'},{label:'Past +',jp:'読みました'},{label:'Past −',jp:'読みませんでした'},{label:'Dictionary',jp:'よむ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よまない'}],
  '読みます#G1':[{label:'Pres. +',jp:'読みます'},{label:'Pres. −',jp:'読みません'},{label:'Past +',jp:'読みました'},{label:'Past −',jp:'読みませんでした'},{label:'Dictionary',jp:'よむ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よまない'}],
  'よみます#G1':[{label:'Pres. +',jp:'よみます'},{label:'Pres. −',jp:'よみません'},{label:'Past +',jp:'よみました'},{label:'Past −',jp:'よみませんでした'},{label:'Dictionary',jp:'よむ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よまない'}],
  'よみます':[{label:'Pres. +',jp:'よみます'},{label:'Pres. −',jp:'よみません'},{label:'Past +',jp:'よみました'},{label:'Past −',jp:'よみませんでした'},{label:'Dictionary',jp:'よむ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よまない'}],
  '見ます':[{label:'Pres. +',jp:'見ます'},{label:'Pres. −',jp:'見ません'},{label:'Past +',jp:'見ました'},{label:'Past −',jp:'見ませんでした'},{label:'Dictionary',jp:'みる'},{label:'て-form',jp:'みて'},{label:'ない form',jp:'みない'}],
  '見ます#G2':[{label:'Pres. +',jp:'見ます'},{label:'Pres. −',jp:'見ません'},{label:'Past +',jp:'見ました'},{label:'Past −',jp:'見ませんでした'},{label:'Dictionary',jp:'みる'},{label:'て-form',jp:'みて'},{label:'ない form',jp:'みない'}],
  'みます#G2':[{label:'Pres. +',jp:'みます'},{label:'Pres. −',jp:'みません'},{label:'Past +',jp:'みました'},{label:'Past −',jp:'みませんでした'},{label:'Dictionary',jp:'みる'},{label:'て-form',jp:'みて'},{label:'ない form',jp:'みない'}],
  'みます':[{label:'Pres. +',jp:'みます'},{label:'Pres. −',jp:'みません'},{label:'Past +',jp:'みました'},{label:'Past −',jp:'みませんでした'},{label:'Dictionary',jp:'みる'},{label:'て-form',jp:'みて'},{label:'ない form',jp:'みない'}],
  '書きます':[{label:'Pres. +',jp:'書きます'},{label:'Pres. −',jp:'書きません'},{label:'Past +',jp:'書きました'},{label:'Past −',jp:'書きませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  '書きます#G1':[{label:'Pres. +',jp:'書きます'},{label:'Pres. −',jp:'書きません'},{label:'Past +',jp:'書きました'},{label:'Past −',jp:'書きませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  'かきます#G1':[{label:'Pres. +',jp:'かきます'},{label:'Pres. −',jp:'かきません'},{label:'Past +',jp:'かきました'},{label:'Past −',jp:'かきませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  'かきます':[{label:'Pres. +',jp:'かきます'},{label:'Pres. −',jp:'かきません'},{label:'Past +',jp:'かきました'},{label:'Past −',jp:'かきませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  '聞きます':[{label:'Pres. +',jp:'聞きます'},{label:'Pres. −',jp:'聞きません'},{label:'Past +',jp:'聞きました'},{label:'Past −',jp:'聞きませんでした'},{label:'Dictionary',jp:'きく'},{label:'て-form',jp:'きいて'},{label:'ない form',jp:'きかない'}],
  '聞きます#G1':[{label:'Pres. +',jp:'聞きます'},{label:'Pres. −',jp:'聞きません'},{label:'Past +',jp:'聞きました'},{label:'Past −',jp:'聞きませんでした'},{label:'Dictionary',jp:'きく'},{label:'て-form',jp:'きいて'},{label:'ない form',jp:'きかない'}],
  'ききます#G1':[{label:'Pres. +',jp:'ききます'},{label:'Pres. −',jp:'ききません'},{label:'Past +',jp:'ききました'},{label:'Past −',jp:'ききませんでした'},{label:'Dictionary',jp:'きく'},{label:'て-form',jp:'きいて'},{label:'ない form',jp:'きかない'}],
  'ききます':[{label:'Pres. +',jp:'ききます'},{label:'Pres. −',jp:'ききません'},{label:'Past +',jp:'ききました'},{label:'Past −',jp:'ききませんでした'},{label:'Dictionary',jp:'きく'},{label:'て-form',jp:'きいて'},{label:'ない form',jp:'きかない'}],
  '話します':[{label:'Pres. +',jp:'話します'},{label:'Pres. −',jp:'話しません'},{label:'Past +',jp:'話しました'},{label:'Past −',jp:'話しませんでした'},{label:'Dictionary',jp:'はなす'},{label:'て-form',jp:'はなして'},{label:'ない form',jp:'はなさない'}],
  '話します#G1':[{label:'Pres. +',jp:'話します'},{label:'Pres. −',jp:'話しません'},{label:'Past +',jp:'話しました'},{label:'Past −',jp:'話しませんでした'},{label:'Dictionary',jp:'はなす'},{label:'て-form',jp:'はなして'},{label:'ない form',jp:'はなさない'}],
  'はなします#G1':[{label:'Pres. +',jp:'はなします'},{label:'Pres. −',jp:'はなしません'},{label:'Past +',jp:'はなしました'},{label:'Past −',jp:'はなしませんでした'},{label:'Dictionary',jp:'はなす'},{label:'て-form',jp:'はなして'},{label:'ない form',jp:'はなさない'}],
  'はなします':[{label:'Pres. +',jp:'はなします'},{label:'Pres. −',jp:'はなしません'},{label:'Past +',jp:'はなしました'},{label:'Past −',jp:'はなしませんでした'},{label:'Dictionary',jp:'はなす'},{label:'て-form',jp:'はなして'},{label:'ない form',jp:'はなさない'}],
  '買います':[{label:'Pres. +',jp:'買います'},{label:'Pres. −',jp:'買いません'},{label:'Past +',jp:'買いました'},{label:'Past −',jp:'買いませんでした'},{label:'Dictionary',jp:'かう'},{label:'て-form',jp:'かって'},{label:'ない form',jp:'かわない'}],
  '買います#G1':[{label:'Pres. +',jp:'買います'},{label:'Pres. −',jp:'買いません'},{label:'Past +',jp:'買いました'},{label:'Past −',jp:'買いませんでした'},{label:'Dictionary',jp:'かう'},{label:'て-form',jp:'かって'},{label:'ない form',jp:'かわない'}],
  'かいます#G1':[{label:'Pres. +',jp:'かいます'},{label:'Pres. −',jp:'かいません'},{label:'Past +',jp:'かいました'},{label:'Past −',jp:'かいませんでした'},{label:'Dictionary',jp:'かう'},{label:'て-form',jp:'かって'},{label:'ない form',jp:'かわない'}],
  'かいます':[{label:'Pres. +',jp:'かいます'},{label:'Pres. −',jp:'かいません'},{label:'Past +',jp:'かいました'},{label:'Past −',jp:'かいませんでした'},{label:'Dictionary',jp:'かう'},{label:'て-form',jp:'かって'},{label:'ない form',jp:'かわない'}],
  'します':[{label:'Pres. +',jp:'します'},{label:'Pres. −',jp:'しません'},{label:'Past +',jp:'しました'},{label:'Past −',jp:'しませんでした'},{label:'Dictionary',jp:'する'},{label:'て-form',jp:'して'},{label:'ない form',jp:'しない'}],
  'します#G3':[{label:'Pres. +',jp:'します'},{label:'Pres. −',jp:'しません'},{label:'Past +',jp:'しました'},{label:'Past −',jp:'しませんでした'},{label:'Dictionary',jp:'する'},{label:'て-form',jp:'して'},{label:'ない form',jp:'しない'}],
  '勉強をします':[{label:'Pres. +',jp:'勉強をします'},{label:'Pres. −',jp:'勉強をしません'},{label:'Past +',jp:'勉強をしました'},{label:'Past −',jp:'勉強をしませんでした'},{label:'Dictionary',jp:'べんきょうをする'},{label:'て-form',jp:'べんきょうをして'},{label:'ない form',jp:'べんきょうをしない'}],
  '勉強をします#G3':[{label:'Pres. +',jp:'勉強をします'},{label:'Pres. −',jp:'勉強をしません'},{label:'Past +',jp:'勉強をしました'},{label:'Past −',jp:'勉強をしませんでした'},{label:'Dictionary',jp:'べんきょうをする'},{label:'て-form',jp:'べんきょうをして'},{label:'ない form',jp:'べんきょうをしない'}],
  'べんきょうをします#G3':[{label:'Pres. +',jp:'べんきょうをします'},{label:'Pres. −',jp:'べんきょうをしません'},{label:'Past +',jp:'べんきょうをしました'},{label:'Past −',jp:'べんきょうをしませんでした'},{label:'Dictionary',jp:'べんきょうをする'},{label:'て-form',jp:'べんきょうをして'},{label:'ない form',jp:'べんきょうをしない'}],
  'べんきょうをします':[{label:'Pres. +',jp:'べんきょうをします'},{label:'Pres. −',jp:'べんきょうをしません'},{label:'Past +',jp:'べんきょうをしました'},{label:'Past −',jp:'べんきょうをしませんでした'},{label:'Dictionary',jp:'べんきょうをする'},{label:'て-form',jp:'べんきょうをして'},{label:'ない form',jp:'べんきょうをしない'}],
  'テニスをします':[{label:'Pres. +',jp:'テニスをします'},{label:'Pres. −',jp:'テニスをしません'},{label:'Past +',jp:'テニスをしました'},{label:'Past −',jp:'テニスをしませんでした'},{label:'Dictionary',jp:'テニスをする'},{label:'て-form',jp:'テニスをして'},{label:'ない form',jp:'テニスをしない'}],
  'テニスをします#G3':[{label:'Pres. +',jp:'テニスをします'},{label:'Pres. −',jp:'テニスをしません'},{label:'Past +',jp:'テニスをしました'},{label:'Past −',jp:'テニスをしませんでした'},{label:'Dictionary',jp:'テニスをする'},{label:'て-form',jp:'テニスをして'},{label:'ない form',jp:'テニスをしない'}],
  '仕事をします':[{label:'Pres. +',jp:'仕事をします'},{label:'Pres. −',jp:'仕事をしません'},{label:'Past +',jp:'仕事をしました'},{label:'Past −',jp:'仕事をしませんでした'},{label:'Dictionary',jp:'しごとをする'},{label:'て-form',jp:'しごとをして'},{label:'ない form',jp:'しごとをしない'}],
  '仕事をします#G3':[{label:'Pres. +',jp:'仕事をします'},{label:'Pres. −',jp:'仕事をしません'},{label:'Past +',jp:'仕事をしました'},{label:'Past −',jp:'仕事をしませんでした'},{label:'Dictionary',jp:'しごとをする'},{label:'て-form',jp:'しごとをして'},{label:'ない form',jp:'しごとをしない'}],
  'しごとをします#G3':[{label:'Pres. +',jp:'しごとをします'},{label:'Pres. −',jp:'しごとをしません'},{label:'Past +',jp:'しごとをしました'},{label:'Past −',jp:'しごとをしませんでした'},{label:'Dictionary',jp:'しごとをする'},{label:'て-form',jp:'しごとをして'},{label:'ない form',jp:'しごとをしない'}],
  'しごとをします':[{label:'Pres. +',jp:'しごとをします'},{label:'Pres. −',jp:'しごとをしません'},{label:'Past +',jp:'しごとをしました'},{label:'Past −',jp:'しごとをしませんでした'},{label:'Dictionary',jp:'しごとをする'},{label:'て-form',jp:'しごとをして'},{label:'ない form',jp:'しごとをしない'}],
  '吸います':[{label:'Pres. +',jp:'吸います'},{label:'Pres. −',jp:'吸いません'},{label:'Past +',jp:'吸いました'},{label:'Past −',jp:'吸いませんでした'},{label:'Dictionary',jp:'すう'},{label:'て-form',jp:'すって'},{label:'ない form',jp:'すわない'}],
  '吸います#G1':[{label:'Pres. +',jp:'吸います'},{label:'Pres. −',jp:'吸いません'},{label:'Past +',jp:'吸いました'},{label:'Past −',jp:'吸いませんでした'},{label:'Dictionary',jp:'すう'},{label:'て-form',jp:'すって'},{label:'ない form',jp:'すわない'}],
  'すいます#G1':[{label:'Pres. +',jp:'すいます'},{label:'Pres. −',jp:'すいません'},{label:'Past +',jp:'すいました'},{label:'Past −',jp:'すいませんでした'},{label:'Dictionary',jp:'すう'},{label:'て-form',jp:'すって'},{label:'ない form',jp:'すわない'}],
  'すいます':[{label:'Pres. +',jp:'すいます'},{label:'Pres. −',jp:'すいません'},{label:'Past +',jp:'すいました'},{label:'Past −',jp:'すいませんでした'},{label:'Dictionary',jp:'すう'},{label:'て-form',jp:'すって'},{label:'ない form',jp:'すわない'}],
  '行きます':[{label:'Pres. +',jp:'行きます'},{label:'Pres. −',jp:'行きません'},{label:'Past +',jp:'行きました'},{label:'Past −',jp:'行きませんでした'},{label:'Dictionary',jp:'いく'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いかない'}],
  '行きます#G1':[{label:'Pres. +',jp:'行きます'},{label:'Pres. −',jp:'行きません'},{label:'Past +',jp:'行きました'},{label:'Past −',jp:'行きませんでした'},{label:'Dictionary',jp:'いく'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いかない'}],
  'いきます#G1':[{label:'Pres. +',jp:'いきます'},{label:'Pres. −',jp:'いきません'},{label:'Past +',jp:'いきました'},{label:'Past −',jp:'いきませんでした'},{label:'Dictionary',jp:'いく'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いかない'}],
  'いきます':[{label:'Pres. +',jp:'いきます'},{label:'Pres. −',jp:'いきません'},{label:'Past +',jp:'いきました'},{label:'Past −',jp:'いきませんでした'},{label:'Dictionary',jp:'いく'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いかない'}],
  '来ます':[{label:'Pres. +',jp:'来ます'},{label:'Pres. −',jp:'来ません'},{label:'Past +',jp:'来ました'},{label:'Past −',jp:'来ませんでした'},{label:'Dictionary',jp:'くる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'こない'}],
  '来ます#G3':[{label:'Pres. +',jp:'来ます'},{label:'Pres. −',jp:'来ません'},{label:'Past +',jp:'来ました'},{label:'Past −',jp:'来ませんでした'},{label:'Dictionary',jp:'くる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'こない'}],
  'きます#G3':[{label:'Pres. +',jp:'きます'},{label:'Pres. −',jp:'きません'},{label:'Past +',jp:'きました'},{label:'Past −',jp:'きませんでした'},{label:'Dictionary',jp:'くる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'こない'}],
  'きます':[{label:'Pres. +',jp:'きます'},{label:'Pres. −',jp:'きません'},{label:'Past +',jp:'きました'},{label:'Past −',jp:'きませんでした'},{label:'Dictionary',jp:'きる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'きない'}],
  '帰ります':[{label:'Pres. +',jp:'帰ります'},{label:'Pres. −',jp:'帰りません'},{label:'Past +',jp:'帰りました'},{label:'Past −',jp:'帰りませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえって'},{label:'ない form',jp:'かえらない'}],
  '帰ります#G1':[{label:'Pres. +',jp:'帰ります'},{label:'Pres. −',jp:'帰りません'},{label:'Past +',jp:'帰りました'},{label:'Past −',jp:'帰りませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえって'},{label:'ない form',jp:'かえらない'}],
  'かえります#G1':[{label:'Pres. +',jp:'かえります'},{label:'Pres. −',jp:'かえりません'},{label:'Past +',jp:'かえりました'},{label:'Past −',jp:'かえりませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえって'},{label:'ない form',jp:'かえらない'}],
  'かえります':[{label:'Pres. +',jp:'かえります'},{label:'Pres. −',jp:'かえりません'},{label:'Past +',jp:'かえりました'},{label:'Past −',jp:'かえりませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえって'},{label:'ない form',jp:'かえらない'}],
  '泳ぎます':[{label:'Pres. +',jp:'泳ぎます'},{label:'Pres. −',jp:'泳ぎません'},{label:'Past +',jp:'泳ぎました'},{label:'Past −',jp:'泳ぎませんでした'},{label:'Dictionary',jp:'およぐ'},{label:'て-form',jp:'およいで'},{label:'ない form',jp:'およがない'}],
  '泳ぎます#G1':[{label:'Pres. +',jp:'泳ぎます'},{label:'Pres. −',jp:'泳ぎません'},{label:'Past +',jp:'泳ぎました'},{label:'Past −',jp:'泳ぎませんでした'},{label:'Dictionary',jp:'およぐ'},{label:'て-form',jp:'およいで'},{label:'ない form',jp:'およがない'}],
  'およぎます#G1':[{label:'Pres. +',jp:'およぎます'},{label:'Pres. −',jp:'およぎません'},{label:'Past +',jp:'およぎました'},{label:'Past −',jp:'およぎませんでした'},{label:'Dictionary',jp:'およぐ'},{label:'て-form',jp:'およいで'},{label:'ない form',jp:'およがない'}],
  'およぎます':[{label:'Pres. +',jp:'およぎます'},{label:'Pres. −',jp:'およぎません'},{label:'Past +',jp:'およぎました'},{label:'Past −',jp:'およぎませんでした'},{label:'Dictionary',jp:'およぐ'},{label:'て-form',jp:'およいで'},{label:'ない form',jp:'およがない'}],
  '起きます':[{label:'Pres. +',jp:'起きます'},{label:'Pres. −',jp:'起きません'},{label:'Past +',jp:'起きました'},{label:'Past −',jp:'起きませんでした'},{label:'Dictionary',jp:'おきる'},{label:'て-form',jp:'おきて'},{label:'ない form',jp:'おきない'}],
  '起きます#G2':[{label:'Pres. +',jp:'起きます'},{label:'Pres. −',jp:'起きません'},{label:'Past +',jp:'起きました'},{label:'Past −',jp:'起きませんでした'},{label:'Dictionary',jp:'おきる'},{label:'て-form',jp:'おきて'},{label:'ない form',jp:'おきない'}],
  'おきます#G2':[{label:'Pres. +',jp:'おきます'},{label:'Pres. −',jp:'おきません'},{label:'Past +',jp:'おきました'},{label:'Past −',jp:'おきませんでした'},{label:'Dictionary',jp:'おきる'},{label:'て-form',jp:'おきて'},{label:'ない form',jp:'おきない'}],
  'おきます':[{label:'Pres. +',jp:'おきます'},{label:'Pres. −',jp:'おきません'},{label:'Past +',jp:'おきました'},{label:'Past −',jp:'おきませんでした'},{label:'Dictionary',jp:'おきる'},{label:'て-form',jp:'おきて'},{label:'ない form',jp:'おきない'}],
  '磨きます':[{label:'Pres. +',jp:'磨きます'},{label:'Pres. −',jp:'磨きません'},{label:'Past +',jp:'磨きました'},{label:'Past −',jp:'磨きませんでした'},{label:'Dictionary',jp:'みがく'},{label:'て-form',jp:'みがいて'},{label:'ない form',jp:'みがかない'}],
  '磨きます#G1':[{label:'Pres. +',jp:'磨きます'},{label:'Pres. −',jp:'磨きません'},{label:'Past +',jp:'磨きました'},{label:'Past −',jp:'磨きませんでした'},{label:'Dictionary',jp:'みがく'},{label:'て-form',jp:'みがいて'},{label:'ない form',jp:'みがかない'}],
  'みがきます#G1':[{label:'Pres. +',jp:'みがきます'},{label:'Pres. −',jp:'みがきません'},{label:'Past +',jp:'みがきました'},{label:'Past −',jp:'みがきませんでした'},{label:'Dictionary',jp:'みがく'},{label:'て-form',jp:'みがいて'},{label:'ない form',jp:'みがかない'}],
  'みがきます':[{label:'Pres. +',jp:'みがきます'},{label:'Pres. −',jp:'みがきません'},{label:'Past +',jp:'みがきました'},{label:'Past −',jp:'みがきませんでした'},{label:'Dictionary',jp:'みがく'},{label:'て-form',jp:'みがいて'},{label:'ない form',jp:'みがかない'}],
  '入ります':[{label:'Pres. +',jp:'入ります'},{label:'Pres. −',jp:'入りません'},{label:'Past +',jp:'入りました'},{label:'Past −',jp:'入りませんでした'},{label:'Dictionary',jp:'はいる'},{label:'て-form',jp:'はいって'},{label:'ない form',jp:'はいらない'}],
  '入ります#G1':[{label:'Pres. +',jp:'入ります'},{label:'Pres. −',jp:'入りません'},{label:'Past +',jp:'入りました'},{label:'Past −',jp:'入りませんでした'},{label:'Dictionary',jp:'はいる'},{label:'て-form',jp:'はいって'},{label:'ない form',jp:'はいらない'}],
  'はいります#G1':[{label:'Pres. +',jp:'はいります'},{label:'Pres. −',jp:'はいりません'},{label:'Past +',jp:'はいりました'},{label:'Past −',jp:'はいりませんでした'},{label:'Dictionary',jp:'はいる'},{label:'て-form',jp:'はいって'},{label:'ない form',jp:'はいらない'}],
  'はいります':[{label:'Pres. +',jp:'はいります'},{label:'Pres. −',jp:'はいりません'},{label:'Past +',jp:'はいりました'},{label:'Past −',jp:'はいりませんでした'},{label:'Dictionary',jp:'はいる'},{label:'て-form',jp:'はいって'},{label:'ない form',jp:'はいらない'}],
  '寝ます':[{label:'Pres. +',jp:'寝ます'},{label:'Pres. −',jp:'寝ません'},{label:'Past +',jp:'寝ました'},{label:'Past −',jp:'寝ませんでした'},{label:'Dictionary',jp:'ねる'},{label:'て-form',jp:'ねて'},{label:'ない form',jp:'ねない'}],
  '寝ます#G2':[{label:'Pres. +',jp:'寝ます'},{label:'Pres. −',jp:'寝ません'},{label:'Past +',jp:'寝ました'},{label:'Past −',jp:'寝ませんでした'},{label:'Dictionary',jp:'ねる'},{label:'て-form',jp:'ねて'},{label:'ない form',jp:'ねない'}],
  'ねます#G2':[{label:'Pres. +',jp:'ねます'},{label:'Pres. −',jp:'ねません'},{label:'Past +',jp:'ねました'},{label:'Past −',jp:'ねませんでした'},{label:'Dictionary',jp:'ねる'},{label:'て-form',jp:'ねて'},{label:'ない form',jp:'ねない'}],
  'ねます':[{label:'Pres. +',jp:'ねます'},{label:'Pres. −',jp:'ねません'},{label:'Past +',jp:'ねました'},{label:'Past −',jp:'ねませんでした'},{label:'Dictionary',jp:'ねる'},{label:'て-form',jp:'ねて'},{label:'ない form',jp:'ねない'}],
  'そうじをします':[{label:'Pres. +',jp:'そうじをします'},{label:'Pres. −',jp:'そうじをしません'},{label:'Past +',jp:'そうじをしました'},{label:'Past −',jp:'そうじをしませんでした'},{label:'Dictionary',jp:'そうじをする'},{label:'て-form',jp:'そうじをして'},{label:'ない form',jp:'そうじをしない'}],
  'そうじをします#G3':[{label:'Pres. +',jp:'そうじをします'},{label:'Pres. −',jp:'そうじをしません'},{label:'Past +',jp:'そうじをしました'},{label:'Past −',jp:'そうじをしませんでした'},{label:'Dictionary',jp:'そうじをする'},{label:'て-form',jp:'そうじをして'},{label:'ない form',jp:'そうじをしない'}],
  '作ります':[{label:'Pres. +',jp:'作ります'},{label:'Pres. −',jp:'作りません'},{label:'Past +',jp:'作りました'},{label:'Past −',jp:'作りませんでした'},{label:'Dictionary',jp:'つくる'},{label:'て-form',jp:'つくって'},{label:'ない form',jp:'つくらない'}],
  '作ります#G1':[{label:'Pres. +',jp:'作ります'},{label:'Pres. −',jp:'作りません'},{label:'Past +',jp:'作りました'},{label:'Past −',jp:'作りませんでした'},{label:'Dictionary',jp:'つくる'},{label:'て-form',jp:'つくって'},{label:'ない form',jp:'つくらない'}],
  'つくります#G1':[{label:'Pres. +',jp:'つくります'},{label:'Pres. −',jp:'つくりません'},{label:'Past +',jp:'つくりました'},{label:'Past −',jp:'つくりませんでした'},{label:'Dictionary',jp:'つくる'},{label:'て-form',jp:'つくって'},{label:'ない form',jp:'つくらない'}],
  'つくります':[{label:'Pres. +',jp:'つくります'},{label:'Pres. −',jp:'つくりません'},{label:'Past +',jp:'つくりました'},{label:'Past −',jp:'つくりませんでした'},{label:'Dictionary',jp:'つくる'},{label:'て-form',jp:'つくって'},{label:'ない form',jp:'つくらない'}],
  '楽しい':[{label:'Pres. +',jp:'たのしいです'},{label:'Pres. −',jp:'たのしくありません'},{label:'Past +',jp:'たのしかったです'},{label:'Past −',jp:'たのしくありませんでした'},{label:'Adverb',jp:'たのしく'}],
  'たのしい':[{label:'Pres. +',jp:'たのしいです'},{label:'Pres. −',jp:'たのしくありません'},{label:'Past +',jp:'たのしかったです'},{label:'Past −',jp:'たのしくありませんでした'},{label:'Adverb',jp:'たのしく'}],
  '上手':[{label:'Pres. +',jp:'じょうずです'},{label:'Pres. −',jp:'じょうずじゃありません'},{label:'Past +',jp:'じょうずでした'},{label:'Past −',jp:'じょうずじゃありませんでした'},{label:'+ Noun',jp:'じょうずな＋N'}],
  'じょうず':[{label:'Pres. +',jp:'じょうずです'},{label:'Pres. −',jp:'じょうずじゃありません'},{label:'Past +',jp:'じょうずでした'},{label:'Past −',jp:'じょうずじゃありませんでした'},{label:'+ Noun',jp:'じょうずな＋N'}],
  'にぎやか':[{label:'Pres. +',jp:'にぎやかです'},{label:'Pres. −',jp:'にぎやかじゃありません'},{label:'Past +',jp:'にぎやかでした'},{label:'Past −',jp:'にぎやかじゃありませんでした'},{label:'+ Noun',jp:'にぎやかな＋N'}],
  '暖かい/温かい':[{label:'Pres. +',jp:'あたたかいです'},{label:'Pres. −',jp:'あたたかくありません'},{label:'Past +',jp:'あたたかかったです'},{label:'Past −',jp:'あたたかくありませんでした'},{label:'Adverb',jp:'あたたかく'}],
  'あたたかい':[{label:'Pres. +',jp:'あたたかいです'},{label:'Pres. −',jp:'あたたかくありません'},{label:'Past +',jp:'あたたかかったです'},{label:'Past −',jp:'あたたかくありませんでした'},{label:'Adverb',jp:'あたたかく'}],
  '会います':[{label:'Pres. +',jp:'会います'},{label:'Pres. −',jp:'会いません'},{label:'Past +',jp:'会いました'},{label:'Past −',jp:'会いませんでした'},{label:'Dictionary',jp:'あう'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'あわない'}],
  '会います#G1':[{label:'Pres. +',jp:'会います'},{label:'Pres. −',jp:'会いません'},{label:'Past +',jp:'会いました'},{label:'Past −',jp:'会いませんでした'},{label:'Dictionary',jp:'あう'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'あわない'}],
  'あいます#G1':[{label:'Pres. +',jp:'あいます'},{label:'Pres. −',jp:'あいません'},{label:'Past +',jp:'あいました'},{label:'Past −',jp:'あいませんでした'},{label:'Dictionary',jp:'あう'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'あわない'}],
  'あいます':[{label:'Pres. +',jp:'あいます'},{label:'Pres. −',jp:'あいません'},{label:'Past +',jp:'あいました'},{label:'Past −',jp:'あいませんでした'},{label:'Dictionary',jp:'あう'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'あわない'}],
  '泊まります':[{label:'Pres. +',jp:'泊まります'},{label:'Pres. −',jp:'泊まりません'},{label:'Past +',jp:'泊まりました'},{label:'Past −',jp:'泊まりませんでした'},{label:'Dictionary',jp:'とまる'},{label:'て-form',jp:'とまって'},{label:'ない form',jp:'とまらない'}],
  '泊まります#G1':[{label:'Pres. +',jp:'泊まります'},{label:'Pres. −',jp:'泊まりません'},{label:'Past +',jp:'泊まりました'},{label:'Past −',jp:'泊まりませんでした'},{label:'Dictionary',jp:'とまる'},{label:'て-form',jp:'とまって'},{label:'ない form',jp:'とまらない'}],
  'とまります#G1':[{label:'Pres. +',jp:'とまります'},{label:'Pres. −',jp:'とまりません'},{label:'Past +',jp:'とまりました'},{label:'Past −',jp:'とまりませんでした'},{label:'Dictionary',jp:'とまる'},{label:'て-form',jp:'とまって'},{label:'ない form',jp:'とまらない'}],
  'とまります':[{label:'Pres. +',jp:'とまります'},{label:'Pres. −',jp:'とまりません'},{label:'Past +',jp:'とまりました'},{label:'Past −',jp:'とまりませんでした'},{label:'Dictionary',jp:'とまる'},{label:'て-form',jp:'とまって'},{label:'ない form',jp:'とまらない'}],
  'あります':[{label:'Pres. +',jp:'あります'},{label:'Pres. −',jp:'ありません'},{label:'Past +',jp:'ありました'},{label:'Past −',jp:'ありませんでした'},{label:'Dictionary',jp:'ある'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'ない'}],
  'あります#G1':[{label:'Pres. +',jp:'あります'},{label:'Pres. −',jp:'ありません'},{label:'Past +',jp:'ありました'},{label:'Past −',jp:'ありませんでした'},{label:'Dictionary',jp:'ある'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'ない'}],
  'います':[{label:'Pres. +',jp:'います'},{label:'Pres. −',jp:'いません'},{label:'Past +',jp:'いました'},{label:'Past −',jp:'いませんでした'},{label:'Dictionary',jp:'いる'},{label:'て-form',jp:'いて'},{label:'ない form',jp:'いない'}],
  'います#G2':[{label:'Pres. +',jp:'います'},{label:'Pres. −',jp:'いません'},{label:'Past +',jp:'いました'},{label:'Past −',jp:'いませんでした'},{label:'Dictionary',jp:'いる'},{label:'て-form',jp:'いて'},{label:'ない form',jp:'いない'}],
  '有名':[{label:'Pres. +',jp:'ゆうめいです'},{label:'Pres. −',jp:'ゆうめいじゃありません'},{label:'Past +',jp:'ゆうめいでした'},{label:'Past −',jp:'ゆうめいじゃありませんでした'},{label:'+ Noun',jp:'ゆうめいな＋N'}],
  'ゆうめい':[{label:'Pres. +',jp:'ゆうめいです'},{label:'Pres. −',jp:'ゆうめいじゃありません'},{label:'Past +',jp:'ゆうめいでした'},{label:'Past −',jp:'ゆうめいじゃありませんでした'},{label:'+ Noun',jp:'ゆうめいな＋N'}],
  '多い':[{label:'Pres. +',jp:'おおいです'},{label:'Pres. −',jp:'おおくありません'},{label:'Past +',jp:'おおかったです'},{label:'Past −',jp:'おおくありませんでした'},{label:'Adverb',jp:'おおく'}],
  'おおい':[{label:'Pres. +',jp:'おおいです'},{label:'Pres. −',jp:'おおくありません'},{label:'Past +',jp:'おおかったです'},{label:'Past −',jp:'おおくありませんでした'},{label:'Adverb',jp:'おおく'}],
  '広い':[{label:'Pres. +',jp:'ひろいです'},{label:'Pres. −',jp:'ひろくありません'},{label:'Past +',jp:'ひろかったです'},{label:'Past −',jp:'ひろくありませんでした'},{label:'Adverb',jp:'ひろく'}],
  'ひろい':[{label:'Pres. +',jp:'ひろいです'},{label:'Pres. −',jp:'ひろくありません'},{label:'Past +',jp:'ひろかったです'},{label:'Past −',jp:'ひろくありませんでした'},{label:'Adverb',jp:'ひろく'}],
  '狭い':[{label:'Pres. +',jp:'せまいです'},{label:'Pres. −',jp:'せまくありません'},{label:'Past +',jp:'せまかったです'},{label:'Past −',jp:'せまくありませんでした'},{label:'Adverb',jp:'せまく'}],
  'せまい':[{label:'Pres. +',jp:'せまいです'},{label:'Pres. −',jp:'せまくありません'},{label:'Past +',jp:'せまかったです'},{label:'Past −',jp:'せまくありませんでした'},{label:'Adverb',jp:'せまく'}],
  '赤い':[{label:'Pres. +',jp:'あかいです'},{label:'Pres. −',jp:'あかくありません'},{label:'Past +',jp:'あかかったです'},{label:'Past −',jp:'あかくありませんでした'},{label:'Adverb',jp:'あかく'}],
  'あかい':[{label:'Pres. +',jp:'あかいです'},{label:'Pres. −',jp:'あかくありません'},{label:'Past +',jp:'あかかったです'},{label:'Past −',jp:'あかくありませんでした'},{label:'Adverb',jp:'あかく'}],
  '茶色い':[{label:'Pres. +',jp:'ちゃいろいです'},{label:'Pres. −',jp:'ちゃいろくありません'},{label:'Past +',jp:'ちゃいろかったです'},{label:'Past −',jp:'ちゃいろくありませんでした'},{label:'Adverb',jp:'ちゃいろく'}],
  'ちゃいろい':[{label:'Pres. +',jp:'ちゃいろいです'},{label:'Pres. −',jp:'ちゃいろくありません'},{label:'Past +',jp:'ちゃいろかったです'},{label:'Past −',jp:'ちゃいろくありませんでした'},{label:'Adverb',jp:'ちゃいろく'}],
  '好き':[{label:'Pres. +',jp:'すきです'},{label:'Pres. −',jp:'すきじゃありません'},{label:'Past +',jp:'すきでした'},{label:'Past −',jp:'すきじゃありませんでした'},{label:'+ Noun',jp:'すきな＋N'}],
  'すき':[{label:'Pres. +',jp:'すきです'},{label:'Pres. −',jp:'すきじゃありません'},{label:'Past +',jp:'すきでした'},{label:'Past −',jp:'すきじゃありませんでした'},{label:'+ Noun',jp:'すきな＋N'}],
  '嫌い':[{label:'Pres. +',jp:'きらいです'},{label:'Pres. −',jp:'きらいじゃありません'},{label:'Past +',jp:'きらいでした'},{label:'Past −',jp:'きらいじゃありませんでした'},{label:'+ Noun',jp:'きらいな＋N'}],
  'きらい':[{label:'Pres. +',jp:'きらいです'},{label:'Pres. −',jp:'きらいじゃありません'},{label:'Past +',jp:'きらいでした'},{label:'Past −',jp:'きらいじゃありませんでした'},{label:'+ Noun',jp:'きらいな＋N'}],
  '四角い':[{label:'Pres. +',jp:'しかくいです'},{label:'Pres. −',jp:'しかくくありません'},{label:'Past +',jp:'しかくかったです'},{label:'Past −',jp:'しかくくありませんでした'},{label:'Adverb',jp:'しかくく'}],
  'しかくい':[{label:'Pres. +',jp:'しかくいです'},{label:'Pres. −',jp:'しかくくありません'},{label:'Past +',jp:'しかくかったです'},{label:'Past −',jp:'しかくくありませんでした'},{label:'Adverb',jp:'しかくく'}],
  '黄色い':[{label:'Pres. +',jp:'きいろいです'},{label:'Pres. −',jp:'きいろくありません'},{label:'Past +',jp:'きいろかったです'},{label:'Past −',jp:'きいろくありませんでした'},{label:'Adverb',jp:'きいろく'}],
  'きいろい':[{label:'Pres. +',jp:'きいろいです'},{label:'Pres. −',jp:'きいろくありません'},{label:'Past +',jp:'きいろかったです'},{label:'Past −',jp:'きいろくありませんでした'},{label:'Adverb',jp:'きいろく'}],
  '丸い':[{label:'Pres. +',jp:'まるいです'},{label:'Pres. −',jp:'まるくありません'},{label:'Past +',jp:'まるかったです'},{label:'Past −',jp:'まるくありませんでした'},{label:'Adverb',jp:'まるく'}],
  'まるい':[{label:'Pres. +',jp:'まるいです'},{label:'Pres. −',jp:'まるくありません'},{label:'Past +',jp:'まるかったです'},{label:'Past −',jp:'まるくありませんでした'},{label:'Adverb',jp:'まるく'}],
  '新鮮':[{label:'Pres. +',jp:'しんせんです'},{label:'Pres. −',jp:'しんせんじゃありません'},{label:'Past +',jp:'しんせんでした'},{label:'Past −',jp:'しんせんじゃありませんでした'},{label:'+ Noun',jp:'しんせんな＋N'}],
  'しんせん':[{label:'Pres. +',jp:'しんせんです'},{label:'Pres. −',jp:'しんせんじゃありません'},{label:'Past +',jp:'しんせんでした'},{label:'Past −',jp:'しんせんじゃありませんでした'},{label:'+ Noun',jp:'しんせんな＋N'}],
  'ほしい':[{label:'Pres. +',jp:'ほしいです'},{label:'Pres. −',jp:'ほしくありません'},{label:'Past +',jp:'ほしかったです'},{label:'Past −',jp:'ほしくありませんでした'},{label:'Adverb',jp:'ほしく'}],
  '乗ります':[{label:'Pres. +',jp:'乗ります'},{label:'Pres. −',jp:'乗りません'},{label:'Past +',jp:'乗りました'},{label:'Past −',jp:'乗りませんでした'},{label:'Dictionary',jp:'のる'},{label:'て-form',jp:'のって'},{label:'ない form',jp:'のらない'}],
  '乗ります#G1':[{label:'Pres. +',jp:'乗ります'},{label:'Pres. −',jp:'乗りません'},{label:'Past +',jp:'乗りました'},{label:'Past −',jp:'乗りませんでした'},{label:'Dictionary',jp:'のる'},{label:'て-form',jp:'のって'},{label:'ない form',jp:'のらない'}],
  'のります#G1':[{label:'Pres. +',jp:'のります'},{label:'Pres. −',jp:'のりません'},{label:'Past +',jp:'のりました'},{label:'Past −',jp:'のりませんでした'},{label:'Dictionary',jp:'のる'},{label:'て-form',jp:'のって'},{label:'ない form',jp:'のらない'}],
  'のります':[{label:'Pres. +',jp:'のります'},{label:'Pres. −',jp:'のりません'},{label:'Past +',jp:'のりました'},{label:'Past −',jp:'のりませんでした'},{label:'Dictionary',jp:'のる'},{label:'て-form',jp:'のって'},{label:'ない form',jp:'のらない'}],
  '描きます':[{label:'Pres. +',jp:'描きます'},{label:'Pres. −',jp:'描きません'},{label:'Past +',jp:'描きました'},{label:'Past −',jp:'描きませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  '描きます#G1':[{label:'Pres. +',jp:'描きます'},{label:'Pres. −',jp:'描きません'},{label:'Past +',jp:'描きました'},{label:'Past −',jp:'描きませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  '育てます':[{label:'Pres. +',jp:'育てます'},{label:'Pres. −',jp:'育てません'},{label:'Past +',jp:'育てました'},{label:'Past −',jp:'育てませんでした'},{label:'Dictionary',jp:'そだてる'},{label:'て-form',jp:'そだてて'},{label:'ない form',jp:'そだてない'}],
  '育てます#G2':[{label:'Pres. +',jp:'育てます'},{label:'Pres. −',jp:'育てません'},{label:'Past +',jp:'育てました'},{label:'Past −',jp:'育てませんでした'},{label:'Dictionary',jp:'そだてる'},{label:'て-form',jp:'そだてて'},{label:'ない form',jp:'そだてない'}],
  'そだてます#G2':[{label:'Pres. +',jp:'そだてます'},{label:'Pres. −',jp:'そだてません'},{label:'Past +',jp:'そだてました'},{label:'Past −',jp:'そだてませんでした'},{label:'Dictionary',jp:'そだてる'},{label:'て-form',jp:'そだてて'},{label:'ない form',jp:'そだてない'}],
  'そだてます':[{label:'Pres. +',jp:'そだてます'},{label:'Pres. −',jp:'そだてません'},{label:'Past +',jp:'そだてました'},{label:'Past −',jp:'そだてませんでした'},{label:'Dictionary',jp:'そだてる'},{label:'て-form',jp:'そだてて'},{label:'ない form',jp:'そだてない'}],
  '編みます':[{label:'Pres. +',jp:'編みます'},{label:'Pres. −',jp:'編みません'},{label:'Past +',jp:'編みました'},{label:'Past −',jp:'編みませんでした'},{label:'Dictionary',jp:'あむ'},{label:'て-form',jp:'あんで'},{label:'ない form',jp:'あまない'}],
  '編みます#G1':[{label:'Pres. +',jp:'編みます'},{label:'Pres. −',jp:'編みません'},{label:'Past +',jp:'編みました'},{label:'Past −',jp:'編みませんでした'},{label:'Dictionary',jp:'あむ'},{label:'て-form',jp:'あんで'},{label:'ない form',jp:'あまない'}],
  'あみます#G1':[{label:'Pres. +',jp:'あみます'},{label:'Pres. −',jp:'あみません'},{label:'Past +',jp:'あみました'},{label:'Past −',jp:'あみませんでした'},{label:'Dictionary',jp:'あむ'},{label:'て-form',jp:'あんで'},{label:'ない form',jp:'あまない'}],
  'あみます':[{label:'Pres. +',jp:'あみます'},{label:'Pres. −',jp:'あみません'},{label:'Past +',jp:'あみました'},{label:'Past −',jp:'あみませんでした'},{label:'Dictionary',jp:'あむ'},{label:'て-form',jp:'あんで'},{label:'ない form',jp:'あまない'}],
  '弾きます':[{label:'Pres. +',jp:'弾きます'},{label:'Pres. −',jp:'弾きません'},{label:'Past +',jp:'弾きました'},{label:'Past −',jp:'弾きませんでした'},{label:'Dictionary',jp:'ひく'},{label:'て-form',jp:'ひいて'},{label:'ない form',jp:'ひかない'}],
  '弾きます#G1':[{label:'Pres. +',jp:'弾きます'},{label:'Pres. −',jp:'弾きません'},{label:'Past +',jp:'弾きました'},{label:'Past −',jp:'弾きませんでした'},{label:'Dictionary',jp:'ひく'},{label:'て-form',jp:'ひいて'},{label:'ない form',jp:'ひかない'}],
  'ひきます#G1':[{label:'Pres. +',jp:'ひきます'},{label:'Pres. −',jp:'ひきません'},{label:'Past +',jp:'ひきました'},{label:'Past −',jp:'ひきませんでした'},{label:'Dictionary',jp:'ひく'},{label:'て-form',jp:'ひいて'},{label:'ない form',jp:'ひかない'}],
  'ひきます':[{label:'Pres. +',jp:'ひきます'},{label:'Pres. −',jp:'ひきません'},{label:'Past +',jp:'ひきました'},{label:'Past −',jp:'ひきませんでした'},{label:'Dictionary',jp:'ひく'},{label:'て-form',jp:'ひいて'},{label:'ない form',jp:'ひかない'}],
  '釣りをします':[{label:'Pres. +',jp:'釣りをします'},{label:'Pres. −',jp:'釣りをしません'},{label:'Past +',jp:'釣りをしました'},{label:'Past −',jp:'釣りをしませんでした'},{label:'Dictionary',jp:'つりをする'},{label:'て-form',jp:'つりをして'},{label:'ない form',jp:'つりをしない'}],
  '釣りをします#G3':[{label:'Pres. +',jp:'釣りをします'},{label:'Pres. −',jp:'釣りをしません'},{label:'Past +',jp:'釣りをしました'},{label:'Past −',jp:'釣りをしませんでした'},{label:'Dictionary',jp:'つりをする'},{label:'て-form',jp:'つりをして'},{label:'ない form',jp:'つりをしない'}],
  'つりをします#G3':[{label:'Pres. +',jp:'つりをします'},{label:'Pres. −',jp:'つりをしません'},{label:'Past +',jp:'つりをしました'},{label:'Past −',jp:'つりをしませんでした'},{label:'Dictionary',jp:'つりをする'},{label:'て-form',jp:'つりをして'},{label:'ない form',jp:'つりをしない'}],
  'つりをします':[{label:'Pres. +',jp:'つりをします'},{label:'Pres. −',jp:'つりをしません'},{label:'Past +',jp:'つりをしました'},{label:'Past −',jp:'つりをしませんでした'},{label:'Dictionary',jp:'つりをする'},{label:'て-form',jp:'つりをして'},{label:'ない form',jp:'つりをしない'}],
  '待ちます':[{label:'Pres. +',jp:'待ちます'},{label:'Pres. −',jp:'待ちません'},{label:'Past +',jp:'待ちました'},{label:'Past −',jp:'待ちませんでした'},{label:'Dictionary',jp:'まつ'},{label:'て-form',jp:'まって'},{label:'ない form',jp:'またない'}],
  '待ちます#G1':[{label:'Pres. +',jp:'待ちます'},{label:'Pres. −',jp:'待ちません'},{label:'Past +',jp:'待ちました'},{label:'Past −',jp:'待ちませんでした'},{label:'Dictionary',jp:'まつ'},{label:'て-form',jp:'まって'},{label:'ない form',jp:'またない'}],
  'まちます#G1':[{label:'Pres. +',jp:'まちます'},{label:'Pres. −',jp:'まちません'},{label:'Past +',jp:'まちました'},{label:'Past −',jp:'まちませんでした'},{label:'Dictionary',jp:'まつ'},{label:'て-form',jp:'まって'},{label:'ない form',jp:'またない'}],
  'まちます':[{label:'Pres. +',jp:'まちます'},{label:'Pres. −',jp:'まちません'},{label:'Past +',jp:'まちました'},{label:'Past −',jp:'まちませんでした'},{label:'Dictionary',jp:'まつ'},{label:'て-form',jp:'まって'},{label:'ない form',jp:'またない'}],
  '死にます':[{label:'Pres. +',jp:'死にます'},{label:'Pres. −',jp:'死にません'},{label:'Past +',jp:'死にました'},{label:'Past −',jp:'死にませんでした'},{label:'Dictionary',jp:'しぬ'},{label:'て-form',jp:'しんで'},{label:'ない form',jp:'しなない'}],
  '死にます#G1':[{label:'Pres. +',jp:'死にます'},{label:'Pres. −',jp:'死にません'},{label:'Past +',jp:'死にました'},{label:'Past −',jp:'死にませんでした'},{label:'Dictionary',jp:'しぬ'},{label:'て-form',jp:'しんで'},{label:'ない form',jp:'しなない'}],
  'しにます#G1':[{label:'Pres. +',jp:'しにます'},{label:'Pres. −',jp:'しにません'},{label:'Past +',jp:'しにました'},{label:'Past −',jp:'しにませんでした'},{label:'Dictionary',jp:'しぬ'},{label:'て-form',jp:'しんで'},{label:'ない form',jp:'しなない'}],
  'しにます':[{label:'Pres. +',jp:'しにます'},{label:'Pres. −',jp:'しにません'},{label:'Past +',jp:'しにました'},{label:'Past −',jp:'しにませんでした'},{label:'Dictionary',jp:'しぬ'},{label:'て-form',jp:'しんで'},{label:'ない form',jp:'しなない'}],
  '呼びます':[{label:'Pres. +',jp:'呼びます'},{label:'Pres. −',jp:'呼びません'},{label:'Past +',jp:'呼びました'},{label:'Past −',jp:'呼びませんでした'},{label:'Dictionary',jp:'よぶ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よばない'}],
  '呼びます#G1':[{label:'Pres. +',jp:'呼びます'},{label:'Pres. −',jp:'呼びません'},{label:'Past +',jp:'呼びました'},{label:'Past −',jp:'呼びませんでした'},{label:'Dictionary',jp:'よぶ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よばない'}],
  'よびます#G1':[{label:'Pres. +',jp:'よびます'},{label:'Pres. −',jp:'よびません'},{label:'Past +',jp:'よびました'},{label:'Past −',jp:'よびませんでした'},{label:'Dictionary',jp:'よぶ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よばない'}],
  'よびます':[{label:'Pres. +',jp:'よびます'},{label:'Pres. −',jp:'よびません'},{label:'Past +',jp:'よびました'},{label:'Past −',jp:'よびませんでした'},{label:'Dictionary',jp:'よぶ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よばない'}],
  '開けます':[{label:'Pres. +',jp:'開けます'},{label:'Pres. −',jp:'開けません'},{label:'Past +',jp:'開けました'},{label:'Past −',jp:'開けませんでした'},{label:'Dictionary',jp:'あける'},{label:'て-form',jp:'あけて'},{label:'ない form',jp:'あけない'}],
  '開けます#G2':[{label:'Pres. +',jp:'開けます'},{label:'Pres. −',jp:'開けません'},{label:'Past +',jp:'開けました'},{label:'Past −',jp:'開けませんでした'},{label:'Dictionary',jp:'あける'},{label:'て-form',jp:'あけて'},{label:'ない form',jp:'あけない'}],
  'あけます#G2':[{label:'Pres. +',jp:'あけます'},{label:'Pres. −',jp:'あけません'},{label:'Past +',jp:'あけました'},{label:'Past −',jp:'あけませんでした'},{label:'Dictionary',jp:'あける'},{label:'て-form',jp:'あけて'},{label:'ない form',jp:'あけない'}],
  'あけます':[{label:'Pres. +',jp:'あけます'},{label:'Pres. −',jp:'あけません'},{label:'Past +',jp:'あけました'},{label:'Past −',jp:'あけませんでした'},{label:'Dictionary',jp:'あける'},{label:'て-form',jp:'あけて'},{label:'ない form',jp:'あけない'}],
  '歌います':[{label:'Pres. +',jp:'歌います'},{label:'Pres. −',jp:'歌いません'},{label:'Past +',jp:'歌いました'},{label:'Past −',jp:'歌いませんでした'},{label:'Dictionary',jp:'うたう'},{label:'て-form',jp:'うたって'},{label:'ない form',jp:'うたわない'}],
  '歌います#G1':[{label:'Pres. +',jp:'歌います'},{label:'Pres. −',jp:'歌いません'},{label:'Past +',jp:'歌いました'},{label:'Past −',jp:'歌いませんでした'},{label:'Dictionary',jp:'うたう'},{label:'て-form',jp:'うたって'},{label:'ない form',jp:'うたわない'}],
  'うたいます#G1':[{label:'Pres. +',jp:'うたいます'},{label:'Pres. −',jp:'うたいません'},{label:'Past +',jp:'うたいました'},{label:'Past −',jp:'うたいませんでした'},{label:'Dictionary',jp:'うたう'},{label:'て-form',jp:'うたって'},{label:'ない form',jp:'うたわない'}],
  'うたいます':[{label:'Pres. +',jp:'うたいます'},{label:'Pres. −',jp:'うたいません'},{label:'Past +',jp:'うたいました'},{label:'Past −',jp:'うたいませんでした'},{label:'Dictionary',jp:'うたう'},{label:'て-form',jp:'うたって'},{label:'ない form',jp:'うたわない'}],
  '強い':[{label:'Pres. +',jp:'つよいです'},{label:'Pres. −',jp:'つよくありません'},{label:'Past +',jp:'つよかったです'},{label:'Past −',jp:'つよくありませんでした'},{label:'Adverb',jp:'つよく'}],
  'つよい':[{label:'Pres. +',jp:'つよいです'},{label:'Pres. −',jp:'つよくありません'},{label:'Past +',jp:'つよかったです'},{label:'Past −',jp:'つよくありませんでした'},{label:'Adverb',jp:'つよく'}],
  '気持ちいい':[{label:'Pres. +',jp:'きもちいいです'},{label:'Pres. −',jp:'きもちいくありません'},{label:'Past +',jp:'きもちいかったです'},{label:'Past −',jp:'きもちいくありませんでした'},{label:'Adverb',jp:'きもちいく'}],
  'きもちいい':[{label:'Pres. +',jp:'きもちいいです'},{label:'Pres. −',jp:'きもちいくありません'},{label:'Past +',jp:'きもちいかったです'},{label:'Past −',jp:'きもちいくありませんでした'},{label:'Adverb',jp:'きもちいく'}],
  '苦い':[{label:'Pres. +',jp:'にがいです'},{label:'Pres. −',jp:'にがくありません'},{label:'Past +',jp:'にがかったです'},{label:'Past −',jp:'にがくありませんでした'},{label:'Adverb',jp:'にがく'}],
  'にがい':[{label:'Pres. +',jp:'にがいです'},{label:'Pres. −',jp:'にがくありません'},{label:'Past +',jp:'にがかったです'},{label:'Past −',jp:'にがくありませんでした'},{label:'Adverb',jp:'にがく'}],
  '寂しい':[{label:'Pres. +',jp:'さびしいです'},{label:'Pres. −',jp:'さびしくありません'},{label:'Past +',jp:'さびしかったです'},{label:'Past −',jp:'さびしくありませんでした'},{label:'Adverb',jp:'さびしく'}],
  'さびしい':[{label:'Pres. +',jp:'さびしいです'},{label:'Pres. −',jp:'さびしくありません'},{label:'Past +',jp:'さびしかったです'},{label:'Past −',jp:'さびしくありませんでした'},{label:'Adverb',jp:'さびしく'}],
  '悲しい':[{label:'Pres. +',jp:'かなしいです'},{label:'Pres. −',jp:'かなしくありません'},{label:'Past +',jp:'かなしかったです'},{label:'Past −',jp:'かなしくありませんでした'},{label:'Adverb',jp:'かなしく'}],
  'かなしい':[{label:'Pres. +',jp:'かなしいです'},{label:'Pres. −',jp:'かなしくありません'},{label:'Past +',jp:'かなしかったです'},{label:'Past −',jp:'かなしくありませんでした'},{label:'Adverb',jp:'かなしく'}],
  '苦しい':[{label:'Pres. +',jp:'くるしいです'},{label:'Pres. −',jp:'くるしくありません'},{label:'Past +',jp:'くるしかったです'},{label:'Past −',jp:'くるしくありませんでした'},{label:'Adverb',jp:'くるしく'}],
  'くるしい':[{label:'Pres. +',jp:'くるしいです'},{label:'Pres. −',jp:'くるしくありません'},{label:'Past +',jp:'くるしかったです'},{label:'Past −',jp:'くるしくありませんでした'},{label:'Adverb',jp:'くるしく'}],
  '嬉しい':[{label:'Pres. +',jp:'うれしいです'},{label:'Pres. −',jp:'うれしくありません'},{label:'Past +',jp:'うれしかったです'},{label:'Past −',jp:'うれしくありませんでした'},{label:'Adverb',jp:'うれしく'}],
  'うれしい':[{label:'Pres. +',jp:'うれしいです'},{label:'Pres. −',jp:'うれしくありません'},{label:'Past +',jp:'うれしかったです'},{label:'Past −',jp:'うれしくありませんでした'},{label:'Adverb',jp:'うれしく'}],
  '痛い':[{label:'Pres. +',jp:'いたいです'},{label:'Pres. −',jp:'いたくありません'},{label:'Past +',jp:'いたかったです'},{label:'Past −',jp:'いたくありませんでした'},{label:'Adverb',jp:'いたく'}],
  'いたい':[{label:'Pres. +',jp:'いたいです'},{label:'Pres. −',jp:'いたくありません'},{label:'Past +',jp:'いたかったです'},{label:'Past −',jp:'いたくありませんでした'},{label:'Adverb',jp:'いたく'}],
  '色々':[{label:'Pres. +',jp:'いろいろです'},{label:'Pres. −',jp:'いろいろじゃありません'},{label:'Past +',jp:'いろいろでした'},{label:'Past −',jp:'いろいろじゃありませんでした'},{label:'+ Noun',jp:'いろいろな＋N'}],
  'いろいろ':[{label:'Pres. +',jp:'いろいろです'},{label:'Pres. −',jp:'いろいろじゃありません'},{label:'Past +',jp:'いろいろでした'},{label:'Past −',jp:'いろいろじゃありませんでした'},{label:'+ Noun',jp:'いろいろな＋N'}],
  '暗い':[{label:'Pres. +',jp:'くらいです'},{label:'Pres. −',jp:'くらくありません'},{label:'Past +',jp:'くらかったです'},{label:'Past −',jp:'くらくありませんでした'},{label:'Adverb',jp:'くらく'}],
  'くらい':[{label:'Pres. +',jp:'くらいです'},{label:'Pres. −',jp:'くらくありません'},{label:'Past +',jp:'くらかったです'},{label:'Past −',jp:'くらくありませんでした'},{label:'Adverb',jp:'くらく'}],
  '持ちます':[{label:'Pres. +',jp:'持ちます'},{label:'Pres. −',jp:'持ちません'},{label:'Past +',jp:'持ちました'},{label:'Past −',jp:'持ちませんでした'},{label:'Dictionary',jp:'もつ'},{label:'て-form',jp:'もって'},{label:'ない form',jp:'もたない'}],
  '持ちます#G1':[{label:'Pres. +',jp:'持ちます'},{label:'Pres. −',jp:'持ちません'},{label:'Past +',jp:'持ちました'},{label:'Past −',jp:'持ちませんでした'},{label:'Dictionary',jp:'もつ'},{label:'て-form',jp:'もって'},{label:'ない form',jp:'もたない'}],
  'もちます#G1':[{label:'Pres. +',jp:'もちます'},{label:'Pres. −',jp:'もちません'},{label:'Past +',jp:'もちました'},{label:'Past −',jp:'もちませんでした'},{label:'Dictionary',jp:'もつ'},{label:'て-form',jp:'もって'},{label:'ない form',jp:'もたない'}],
  'もちます':[{label:'Pres. +',jp:'もちます'},{label:'Pres. −',jp:'もちません'},{label:'Past +',jp:'もちました'},{label:'Past −',jp:'もちませんでした'},{label:'Dictionary',jp:'もつ'},{label:'て-form',jp:'もって'},{label:'ない form',jp:'もたない'}],
  '貸します':[{label:'Pres. +',jp:'貸します'},{label:'Pres. −',jp:'貸しません'},{label:'Past +',jp:'貸しました'},{label:'Past −',jp:'貸しませんでした'},{label:'Dictionary',jp:'かす'},{label:'て-form',jp:'かして'},{label:'ない form',jp:'かさない'}],
  '貸します#G1':[{label:'Pres. +',jp:'貸します'},{label:'Pres. −',jp:'貸しません'},{label:'Past +',jp:'貸しました'},{label:'Past −',jp:'貸しませんでした'},{label:'Dictionary',jp:'かす'},{label:'て-form',jp:'かして'},{label:'ない form',jp:'かさない'}],
  'かします#G1':[{label:'Pres. +',jp:'かします'},{label:'Pres. −',jp:'かしません'},{label:'Past +',jp:'かしました'},{label:'Past −',jp:'かしませんでした'},{label:'Dictionary',jp:'かす'},{label:'て-form',jp:'かして'},{label:'ない form',jp:'かさない'}],
  'かします':[{label:'Pres. +',jp:'かします'},{label:'Pres. −',jp:'かしません'},{label:'Past +',jp:'かしました'},{label:'Past −',jp:'かしませんでした'},{label:'Dictionary',jp:'かす'},{label:'て-form',jp:'かして'},{label:'ない form',jp:'かさない'}],
  '借ります':[{label:'Pres. +',jp:'借ります'},{label:'Pres. −',jp:'借りません'},{label:'Past +',jp:'借りました'},{label:'Past −',jp:'借りませんでした'},{label:'Dictionary',jp:'かりる'},{label:'て-form',jp:'かりて'},{label:'ない form',jp:'かりない'}],
  '借ります#G2':[{label:'Pres. +',jp:'借ります'},{label:'Pres. −',jp:'借りません'},{label:'Past +',jp:'借りました'},{label:'Past −',jp:'借りませんでした'},{label:'Dictionary',jp:'かりる'},{label:'て-form',jp:'かりて'},{label:'ない form',jp:'かりない'}],
  'かります#G2':[{label:'Pres. +',jp:'かります'},{label:'Pres. −',jp:'かりません'},{label:'Past +',jp:'かりました'},{label:'Past −',jp:'かりませんでした'},{label:'Dictionary',jp:'かりる'},{label:'て-form',jp:'かりて'},{label:'ない form',jp:'かりない'}],
  'かります':[{label:'Pres. +',jp:'かります'},{label:'Pres. −',jp:'かりません'},{label:'Past +',jp:'かりました'},{label:'Past −',jp:'かりませんでした'},{label:'Dictionary',jp:'かりる'},{label:'て-form',jp:'かりて'},{label:'ない form',jp:'かりない'}],
  '手伝います':[{label:'Pres. +',jp:'手伝います'},{label:'Pres. −',jp:'手伝いません'},{label:'Past +',jp:'手伝いました'},{label:'Past −',jp:'手伝いませんでした'},{label:'Dictionary',jp:'てつだう'},{label:'て-form',jp:'てつだって'},{label:'ない form',jp:'てつだわない'}],
  '手伝います#G1':[{label:'Pres. +',jp:'手伝います'},{label:'Pres. −',jp:'手伝いません'},{label:'Past +',jp:'手伝いました'},{label:'Past −',jp:'手伝いませんでした'},{label:'Dictionary',jp:'てつだう'},{label:'て-form',jp:'てつだって'},{label:'ない form',jp:'てつだわない'}],
  'てつだいます#G1':[{label:'Pres. +',jp:'てつだいます'},{label:'Pres. −',jp:'てつだいません'},{label:'Past +',jp:'てつだいました'},{label:'Past −',jp:'てつだいませんでした'},{label:'Dictionary',jp:'てつだう'},{label:'て-form',jp:'てつだって'},{label:'ない form',jp:'てつだわない'}],
  'てつだいます':[{label:'Pres. +',jp:'てつだいます'},{label:'Pres. −',jp:'てつだいません'},{label:'Past +',jp:'てつだいました'},{label:'Past −',jp:'てつだいませんでした'},{label:'Dictionary',jp:'てつだう'},{label:'て-form',jp:'てつだって'},{label:'ない form',jp:'てつだわない'}],
  '閉めます':[{label:'Pres. +',jp:'閉めます'},{label:'Pres. −',jp:'閉めません'},{label:'Past +',jp:'閉めました'},{label:'Past −',jp:'閉めませんでした'},{label:'Dictionary',jp:'しめる'},{label:'て-form',jp:'しめて'},{label:'ない form',jp:'しめない'}],
  '閉めます#G2':[{label:'Pres. +',jp:'閉めます'},{label:'Pres. −',jp:'閉めません'},{label:'Past +',jp:'閉めました'},{label:'Past −',jp:'閉めませんでした'},{label:'Dictionary',jp:'しめる'},{label:'て-form',jp:'しめて'},{label:'ない form',jp:'しめない'}],
  'しめます#G2':[{label:'Pres. +',jp:'しめます'},{label:'Pres. −',jp:'しめません'},{label:'Past +',jp:'しめました'},{label:'Past −',jp:'しめませんでした'},{label:'Dictionary',jp:'しめる'},{label:'て-form',jp:'しめて'},{label:'ない form',jp:'しめない'}],
  'しめます':[{label:'Pres. +',jp:'しめます'},{label:'Pres. −',jp:'しめません'},{label:'Past +',jp:'しめました'},{label:'Past −',jp:'しめませんでした'},{label:'Dictionary',jp:'しめる'},{label:'て-form',jp:'しめて'},{label:'ない form',jp:'しめない'}],
  '消します':[{label:'Pres. +',jp:'消します'},{label:'Pres. −',jp:'消しません'},{label:'Past +',jp:'消しました'},{label:'Past −',jp:'消しませんでした'},{label:'Dictionary',jp:'けす'},{label:'て-form',jp:'けして'},{label:'ない form',jp:'けさない'}],
  '消します#G1':[{label:'Pres. +',jp:'消します'},{label:'Pres. −',jp:'消しません'},{label:'Past +',jp:'消しました'},{label:'Past −',jp:'消しませんでした'},{label:'Dictionary',jp:'けす'},{label:'て-form',jp:'けして'},{label:'ない form',jp:'けさない'}],
  'けします#G1':[{label:'Pres. +',jp:'けします'},{label:'Pres. −',jp:'けしません'},{label:'Past +',jp:'けしました'},{label:'Past −',jp:'けしませんでした'},{label:'Dictionary',jp:'けす'},{label:'て-form',jp:'けして'},{label:'ない form',jp:'けさない'}],
  'けします':[{label:'Pres. +',jp:'けします'},{label:'Pres. −',jp:'けしません'},{label:'Past +',jp:'けしました'},{label:'Past −',jp:'けしませんでした'},{label:'Dictionary',jp:'けす'},{label:'て-form',jp:'けして'},{label:'ない form',jp:'けさない'}],
  '点けます':[{label:'Pres. +',jp:'点けます'},{label:'Pres. −',jp:'点けません'},{label:'Past +',jp:'点けました'},{label:'Past −',jp:'点けませんでした'},{label:'Dictionary',jp:'つける'},{label:'て-form',jp:'つけて'},{label:'ない form',jp:'つけない'}],
  '点けます#G2':[{label:'Pres. +',jp:'点けます'},{label:'Pres. −',jp:'点けません'},{label:'Past +',jp:'点けました'},{label:'Past −',jp:'点けませんでした'},{label:'Dictionary',jp:'つける'},{label:'て-form',jp:'つけて'},{label:'ない form',jp:'つけない'}],
  'つけます#G2':[{label:'Pres. +',jp:'つけます'},{label:'Pres. −',jp:'つけません'},{label:'Past +',jp:'つけました'},{label:'Past −',jp:'つけませんでした'},{label:'Dictionary',jp:'つける'},{label:'て-form',jp:'つけて'},{label:'ない form',jp:'つけない'}],
  'つけます':[{label:'Pres. +',jp:'つけます'},{label:'Pres. −',jp:'つけません'},{label:'Past +',jp:'つけました'},{label:'Past −',jp:'つけませんでした'},{label:'Dictionary',jp:'つける'},{label:'て-form',jp:'つけて'},{label:'ない form',jp:'つけない'}],
  '忘れます':[{label:'Pres. +',jp:'忘れます'},{label:'Pres. −',jp:'忘れません'},{label:'Past +',jp:'忘れました'},{label:'Past −',jp:'忘れませんでした'},{label:'Dictionary',jp:'わすれる'},{label:'て-form',jp:'わすれて'},{label:'ない form',jp:'わすれない'}],
  '忘れます#G2':[{label:'Pres. +',jp:'忘れます'},{label:'Pres. −',jp:'忘れません'},{label:'Past +',jp:'忘れました'},{label:'Past −',jp:'忘れませんでした'},{label:'Dictionary',jp:'わすれる'},{label:'て-form',jp:'わすれて'},{label:'ない form',jp:'わすれない'}],
  'わすれます#G2':[{label:'Pres. +',jp:'わすれます'},{label:'Pres. −',jp:'わすれません'},{label:'Past +',jp:'わすれました'},{label:'Past −',jp:'わすれませんでした'},{label:'Dictionary',jp:'わすれる'},{label:'て-form',jp:'わすれて'},{label:'ない form',jp:'わすれない'}],
  'わすれます':[{label:'Pres. +',jp:'わすれます'},{label:'Pres. −',jp:'わすれません'},{label:'Past +',jp:'わすれました'},{label:'Past −',jp:'わすれませんでした'},{label:'Dictionary',jp:'わすれる'},{label:'て-form',jp:'わすれて'},{label:'ない form',jp:'わすれない'}],
  '引っ越します':[{label:'Pres. +',jp:'引っ越します'},{label:'Pres. −',jp:'引っ越しません'},{label:'Past +',jp:'引っ越しました'},{label:'Past −',jp:'引っ越しませんでした'},{label:'Dictionary',jp:'ひっこす'},{label:'て-form',jp:'ひっこして'},{label:'ない form',jp:'ひっこさない'}],
  '引っ越します#G1':[{label:'Pres. +',jp:'引っ越します'},{label:'Pres. −',jp:'引っ越しません'},{label:'Past +',jp:'引っ越しました'},{label:'Past −',jp:'引っ越しませんでした'},{label:'Dictionary',jp:'ひっこす'},{label:'て-form',jp:'ひっこして'},{label:'ない form',jp:'ひっこさない'}],
  'ひっこします#G1':[{label:'Pres. +',jp:'ひっこします'},{label:'Pres. −',jp:'ひっこしません'},{label:'Past +',jp:'ひっこしました'},{label:'Past −',jp:'ひっこしませんでした'},{label:'Dictionary',jp:'ひっこす'},{label:'て-form',jp:'ひっこして'},{label:'ない form',jp:'ひっこさない'}],
  'ひっこします':[{label:'Pres. +',jp:'ひっこします'},{label:'Pres. −',jp:'ひっこしません'},{label:'Past +',jp:'ひっこしました'},{label:'Past −',jp:'ひっこしませんでした'},{label:'Dictionary',jp:'ひっこす'},{label:'て-form',jp:'ひっこして'},{label:'ない form',jp:'ひっこさない'}],
  '大丈夫':[{label:'Pres. +',jp:'だいじょうぶです'},{label:'Pres. −',jp:'だいじょうぶじゃありません'},{label:'Past +',jp:'だいじょうぶでした'},{label:'Past −',jp:'だいじょうぶじゃありませんでした'},{label:'+ Noun',jp:'だいじょうぶな＋N'}],
  'だいじょうぶ':[{label:'Pres. +',jp:'だいじょうぶです'},{label:'Pres. −',jp:'だいじょうぶじゃありません'},{label:'Past +',jp:'だいじょうぶでした'},{label:'Past −',jp:'だいじょうぶじゃありませんでした'},{label:'+ Noun',jp:'だいじょうぶな＋N'}],
  'ゆっくり':[{label:'Pres. +',jp:'ゆっくりです'},{label:'Pres. −',jp:'ゆっくりじゃありません'},{label:'Past +',jp:'ゆっくりでした'},{label:'Past −',jp:'ゆっくりじゃありませんでした'},{label:'+ Noun',jp:'ゆっくりな＋N'}],
  '立ちます':[{label:'Pres. +',jp:'立ちます'},{label:'Pres. −',jp:'立ちません'},{label:'Past +',jp:'立ちました'},{label:'Past −',jp:'立ちませんでした'},{label:'Dictionary',jp:'たつ'},{label:'て-form',jp:'たって'},{label:'ない form',jp:'たたない'}],
  '立ちます#G1':[{label:'Pres. +',jp:'立ちます'},{label:'Pres. −',jp:'立ちません'},{label:'Past +',jp:'立ちました'},{label:'Past −',jp:'立ちませんでした'},{label:'Dictionary',jp:'たつ'},{label:'て-form',jp:'たって'},{label:'ない form',jp:'たたない'}],
  'たちます#G1':[{label:'Pres. +',jp:'たちます'},{label:'Pres. −',jp:'たちません'},{label:'Past +',jp:'たちました'},{label:'Past −',jp:'たちませんでした'},{label:'Dictionary',jp:'たつ'},{label:'て-form',jp:'たって'},{label:'ない form',jp:'たたない'}],
  'たちます':[{label:'Pres. +',jp:'たちます'},{label:'Pres. −',jp:'たちません'},{label:'Past +',jp:'たちました'},{label:'Past −',jp:'たちませんでした'},{label:'Dictionary',jp:'たつ'},{label:'て-form',jp:'たって'},{label:'ない form',jp:'たたない'}],
  '飛びます':[{label:'Pres. +',jp:'飛びます'},{label:'Pres. −',jp:'飛びません'},{label:'Past +',jp:'飛びました'},{label:'Past −',jp:'飛びませんでした'},{label:'Dictionary',jp:'とぶ'},{label:'て-form',jp:'とんで'},{label:'ない form',jp:'とばない'}],
  '飛びます#G1':[{label:'Pres. +',jp:'飛びます'},{label:'Pres. −',jp:'飛びません'},{label:'Past +',jp:'飛びました'},{label:'Past −',jp:'飛びませんでした'},{label:'Dictionary',jp:'とぶ'},{label:'て-form',jp:'とんで'},{label:'ない form',jp:'とばない'}],
  'とびます#G1':[{label:'Pres. +',jp:'とびます'},{label:'Pres. −',jp:'とびません'},{label:'Past +',jp:'とびました'},{label:'Past −',jp:'とびませんでした'},{label:'Dictionary',jp:'とぶ'},{label:'て-form',jp:'とんで'},{label:'ない form',jp:'とばない'}],
  'とびます':[{label:'Pres. +',jp:'とびます'},{label:'Pres. −',jp:'とびません'},{label:'Past +',jp:'とびました'},{label:'Past −',jp:'とびませんでした'},{label:'Dictionary',jp:'とぶ'},{label:'て-form',jp:'とんで'},{label:'ない form',jp:'とばない'}],
  '言います':[{label:'Pres. +',jp:'言います'},{label:'Pres. −',jp:'言いません'},{label:'Past +',jp:'言いました'},{label:'Past −',jp:'言いませんでした'},{label:'Dictionary',jp:'いう'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いわない'}],
  '言います#G1':[{label:'Pres. +',jp:'言います'},{label:'Pres. −',jp:'言いません'},{label:'Past +',jp:'言いました'},{label:'Past −',jp:'言いませんでした'},{label:'Dictionary',jp:'いう'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いわない'}],
  'いいます#G1':[{label:'Pres. +',jp:'いいます'},{label:'Pres. −',jp:'いいません'},{label:'Past +',jp:'いいました'},{label:'Past −',jp:'いいませんでした'},{label:'Dictionary',jp:'いう'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いわない'}],
  'いいます':[{label:'Pres. +',jp:'いいます'},{label:'Pres. −',jp:'いいません'},{label:'Past +',jp:'いいました'},{label:'Past −',jp:'いいませんでした'},{label:'Dictionary',jp:'いう'},{label:'て-form',jp:'いって'},{label:'ない form',jp:'いわない'}],
  '教えます':[{label:'Pres. +',jp:'教えます'},{label:'Pres. −',jp:'教えません'},{label:'Past +',jp:'教えました'},{label:'Past −',jp:'教えませんでした'},{label:'Dictionary',jp:'おしえる'},{label:'て-form',jp:'おしえて'},{label:'ない form',jp:'おしえない'}],
  '教えます#G2':[{label:'Pres. +',jp:'教えます'},{label:'Pres. −',jp:'教えません'},{label:'Past +',jp:'教えました'},{label:'Past −',jp:'教えませんでした'},{label:'Dictionary',jp:'おしえる'},{label:'て-form',jp:'おしえて'},{label:'ない form',jp:'おしえない'}],
  'おしえます#G2':[{label:'Pres. +',jp:'おしえます'},{label:'Pres. −',jp:'おしえません'},{label:'Past +',jp:'おしえました'},{label:'Past −',jp:'おしえませんでした'},{label:'Dictionary',jp:'おしえる'},{label:'て-form',jp:'おしえて'},{label:'ない form',jp:'おしえない'}],
  'おしえます':[{label:'Pres. +',jp:'おしえます'},{label:'Pres. −',jp:'おしえません'},{label:'Past +',jp:'おしえました'},{label:'Past −',jp:'おしえませんでした'},{label:'Dictionary',jp:'おしえる'},{label:'て-form',jp:'おしえて'},{label:'ない form',jp:'おしえない'}],
  '見せます':[{label:'Pres. +',jp:'見せます'},{label:'Pres. −',jp:'見せません'},{label:'Past +',jp:'見せました'},{label:'Past −',jp:'見せませんでした'},{label:'Dictionary',jp:'みせる'},{label:'て-form',jp:'みせて'},{label:'ない form',jp:'みせない'}],
  '見せます#G2':[{label:'Pres. +',jp:'見せます'},{label:'Pres. −',jp:'見せません'},{label:'Past +',jp:'見せました'},{label:'Past −',jp:'見せませんでした'},{label:'Dictionary',jp:'みせる'},{label:'て-form',jp:'みせて'},{label:'ない form',jp:'みせない'}],
  'みせます#G2':[{label:'Pres. +',jp:'みせます'},{label:'Pres. −',jp:'みせません'},{label:'Past +',jp:'みせました'},{label:'Past −',jp:'みせませんでした'},{label:'Dictionary',jp:'みせる'},{label:'て-form',jp:'みせて'},{label:'ない form',jp:'みせない'}],
  'みせます':[{label:'Pres. +',jp:'みせます'},{label:'Pres. −',jp:'みせません'},{label:'Past +',jp:'みせました'},{label:'Past −',jp:'みせませんでした'},{label:'Dictionary',jp:'みせる'},{label:'て-form',jp:'みせて'},{label:'ない form',jp:'みせない'}],
  '歩きます':[{label:'Pres. +',jp:'歩きます'},{label:'Pres. −',jp:'歩きません'},{label:'Past +',jp:'歩きました'},{label:'Past −',jp:'歩きませんでした'},{label:'Dictionary',jp:'あるく'},{label:'て-form',jp:'あるいて'},{label:'ない form',jp:'あるかない'}],
  '歩きます#G1':[{label:'Pres. +',jp:'歩きます'},{label:'Pres. −',jp:'歩きません'},{label:'Past +',jp:'歩きました'},{label:'Past −',jp:'歩きませんでした'},{label:'Dictionary',jp:'あるく'},{label:'て-form',jp:'あるいて'},{label:'ない form',jp:'あるかない'}],
  'あるきます#G1':[{label:'Pres. +',jp:'あるきます'},{label:'Pres. −',jp:'あるきません'},{label:'Past +',jp:'あるきました'},{label:'Past −',jp:'あるきませんでした'},{label:'Dictionary',jp:'あるく'},{label:'て-form',jp:'あるいて'},{label:'ない form',jp:'あるかない'}],
  'あるきます':[{label:'Pres. +',jp:'あるきます'},{label:'Pres. −',jp:'あるきません'},{label:'Past +',jp:'あるきました'},{label:'Past −',jp:'あるきませんでした'},{label:'Dictionary',jp:'あるく'},{label:'て-form',jp:'あるいて'},{label:'ない form',jp:'あるかない'}],
  '取ります':[{label:'Pres. +',jp:'取ります'},{label:'Pres. −',jp:'取りません'},{label:'Past +',jp:'取りました'},{label:'Past −',jp:'取りませんでした'},{label:'Dictionary',jp:'とる'},{label:'て-form',jp:'とって'},{label:'ない form',jp:'とらない'}],
  '取ります#G1':[{label:'Pres. +',jp:'取ります'},{label:'Pres. −',jp:'取りません'},{label:'Past +',jp:'取りました'},{label:'Past −',jp:'取りませんでした'},{label:'Dictionary',jp:'とる'},{label:'て-form',jp:'とって'},{label:'ない form',jp:'とらない'}],
  'とります#G1':[{label:'Pres. +',jp:'とります'},{label:'Pres. −',jp:'とりません'},{label:'Past +',jp:'とりました'},{label:'Past −',jp:'とりませんでした'},{label:'Dictionary',jp:'とる'},{label:'て-form',jp:'とって'},{label:'ない form',jp:'とらない'}],
  'とります':[{label:'Pres. +',jp:'とります'},{label:'Pres. −',jp:'とりません'},{label:'Past +',jp:'とりました'},{label:'Past −',jp:'とりませんでした'},{label:'Dictionary',jp:'とる'},{label:'て-form',jp:'とって'},{label:'ない form',jp:'とらない'}],
  '笑います':[{label:'Pres. +',jp:'笑います'},{label:'Pres. −',jp:'笑いません'},{label:'Past +',jp:'笑いました'},{label:'Past −',jp:'笑いませんでした'},{label:'Dictionary',jp:'わらう'},{label:'て-form',jp:'わらって'},{label:'ない form',jp:'わらわない'}],
  '笑います#G1':[{label:'Pres. +',jp:'笑います'},{label:'Pres. −',jp:'笑いません'},{label:'Past +',jp:'笑いました'},{label:'Past −',jp:'笑いませんでした'},{label:'Dictionary',jp:'わらう'},{label:'て-form',jp:'わらって'},{label:'ない form',jp:'わらわない'}],
  'わらいます#G1':[{label:'Pres. +',jp:'わらいます'},{label:'Pres. −',jp:'わらいません'},{label:'Past +',jp:'わらいました'},{label:'Past −',jp:'わらいませんでした'},{label:'Dictionary',jp:'わらう'},{label:'て-form',jp:'わらって'},{label:'ない form',jp:'わらわない'}],
  'わらいます':[{label:'Pres. +',jp:'わらいます'},{label:'Pres. −',jp:'わらいません'},{label:'Past +',jp:'わらいました'},{label:'Past −',jp:'わらいませんでした'},{label:'Dictionary',jp:'わらう'},{label:'て-form',jp:'わらって'},{label:'ない form',jp:'わらわない'}],
  '遊びます':[{label:'Pres. +',jp:'遊びます'},{label:'Pres. −',jp:'遊びません'},{label:'Past +',jp:'遊びました'},{label:'Past −',jp:'遊びませんでした'},{label:'Dictionary',jp:'あそぶ'},{label:'て-form',jp:'あそんで'},{label:'ない form',jp:'あそばない'}],
  '遊びます#G1':[{label:'Pres. +',jp:'遊びます'},{label:'Pres. −',jp:'遊びません'},{label:'Past +',jp:'遊びました'},{label:'Past −',jp:'遊びませんでした'},{label:'Dictionary',jp:'あそぶ'},{label:'て-form',jp:'あそんで'},{label:'ない form',jp:'あそばない'}],
  'あそびます#G1':[{label:'Pres. +',jp:'あそびます'},{label:'Pres. −',jp:'あそびません'},{label:'Past +',jp:'あそびました'},{label:'Past −',jp:'あそびませんでした'},{label:'Dictionary',jp:'あそぶ'},{label:'て-form',jp:'あそんで'},{label:'ない form',jp:'あそばない'}],
  'あそびます':[{label:'Pres. +',jp:'あそびます'},{label:'Pres. −',jp:'あそびません'},{label:'Past +',jp:'あそびました'},{label:'Past −',jp:'あそびませんでした'},{label:'Dictionary',jp:'あそぶ'},{label:'て-form',jp:'あそんで'},{label:'ない form',jp:'あそばない'}],
  '踊ります':[{label:'Pres. +',jp:'踊ります'},{label:'Pres. −',jp:'踊りません'},{label:'Past +',jp:'踊りました'},{label:'Past −',jp:'踊りませんでした'},{label:'Dictionary',jp:'おどる'},{label:'て-form',jp:'おどって'},{label:'ない form',jp:'おどらない'}],
  '踊ります#G1':[{label:'Pres. +',jp:'踊ります'},{label:'Pres. −',jp:'踊りません'},{label:'Past +',jp:'踊りました'},{label:'Past −',jp:'踊りませんでした'},{label:'Dictionary',jp:'おどる'},{label:'て-form',jp:'おどって'},{label:'ない form',jp:'おどらない'}],
  'おどります#G1':[{label:'Pres. +',jp:'おどります'},{label:'Pres. −',jp:'おどりません'},{label:'Past +',jp:'おどりました'},{label:'Past −',jp:'おどりませんでした'},{label:'Dictionary',jp:'おどる'},{label:'て-form',jp:'おどって'},{label:'ない form',jp:'おどらない'}],
  'おどります':[{label:'Pres. +',jp:'おどります'},{label:'Pres. −',jp:'おどりません'},{label:'Past +',jp:'おどりました'},{label:'Past −',jp:'おどりませんでした'},{label:'Dictionary',jp:'おどる'},{label:'て-form',jp:'おどって'},{label:'ない form',jp:'おどらない'}],
  '走ります':[{label:'Pres. +',jp:'走ります'},{label:'Pres. −',jp:'走りません'},{label:'Past +',jp:'走りました'},{label:'Past −',jp:'走りませんでした'},{label:'Dictionary',jp:'はしる'},{label:'て-form',jp:'はしって'},{label:'ない form',jp:'はしらない'}],
  '走ります#G1':[{label:'Pres. +',jp:'走ります'},{label:'Pres. −',jp:'走りません'},{label:'Past +',jp:'走りました'},{label:'Past −',jp:'走りませんでした'},{label:'Dictionary',jp:'はしる'},{label:'て-form',jp:'はしって'},{label:'ない form',jp:'はしらない'}],
  'はしります#G1':[{label:'Pres. +',jp:'はしります'},{label:'Pres. −',jp:'はしりません'},{label:'Past +',jp:'はしりました'},{label:'Past −',jp:'はしりませんでした'},{label:'Dictionary',jp:'はしる'},{label:'て-form',jp:'はしって'},{label:'ない form',jp:'はしらない'}],
  'はしります':[{label:'Pres. +',jp:'はしります'},{label:'Pres. −',jp:'はしりません'},{label:'Past +',jp:'はしりました'},{label:'Past −',jp:'はしりませんでした'},{label:'Dictionary',jp:'はしる'},{label:'て-form',jp:'はしって'},{label:'ない form',jp:'はしらない'}],
  '出ます':[{label:'Pres. +',jp:'出ます'},{label:'Pres. −',jp:'出ません'},{label:'Past +',jp:'出ました'},{label:'Past −',jp:'出ませんでした'},{label:'Dictionary',jp:'でる'},{label:'て-form',jp:'でて'},{label:'ない form',jp:'でない'}],
  '出ます#G2':[{label:'Pres. +',jp:'出ます'},{label:'Pres. −',jp:'出ません'},{label:'Past +',jp:'出ました'},{label:'Past −',jp:'出ませんでした'},{label:'Dictionary',jp:'でる'},{label:'て-form',jp:'でて'},{label:'ない form',jp:'でない'}],
  'でます#G2':[{label:'Pres. +',jp:'でます'},{label:'Pres. −',jp:'でません'},{label:'Past +',jp:'でました'},{label:'Past −',jp:'でませんでした'},{label:'Dictionary',jp:'でる'},{label:'て-form',jp:'でて'},{label:'ない form',jp:'でない'}],
  'でます':[{label:'Pres. +',jp:'でます'},{label:'Pres. −',jp:'でません'},{label:'Past +',jp:'でました'},{label:'Past −',jp:'でませんでした'},{label:'Dictionary',jp:'でる'},{label:'て-form',jp:'でて'},{label:'ない form',jp:'でない'}],
  '受けます':[{label:'Pres. +',jp:'受けます'},{label:'Pres. −',jp:'受けません'},{label:'Past +',jp:'受けました'},{label:'Past −',jp:'受けませんでした'},{label:'Dictionary',jp:'うける'},{label:'て-form',jp:'うけて'},{label:'ない form',jp:'うけない'}],
  '受けます#G2':[{label:'Pres. +',jp:'受けます'},{label:'Pres. −',jp:'受けません'},{label:'Past +',jp:'受けました'},{label:'Past −',jp:'受けませんでした'},{label:'Dictionary',jp:'うける'},{label:'て-form',jp:'うけて'},{label:'ない form',jp:'うけない'}],
  'うけます#G2':[{label:'Pres. +',jp:'うけます'},{label:'Pres. −',jp:'うけません'},{label:'Past +',jp:'うけました'},{label:'Past −',jp:'うけませんでした'},{label:'Dictionary',jp:'うける'},{label:'て-form',jp:'うけて'},{label:'ない form',jp:'うけない'}],
  'うけます':[{label:'Pres. +',jp:'うけます'},{label:'Pres. −',jp:'うけません'},{label:'Past +',jp:'うけました'},{label:'Past −',jp:'うけませんでした'},{label:'Dictionary',jp:'うける'},{label:'て-form',jp:'うけて'},{label:'ない form',jp:'うけない'}],
  '止めます':[{label:'Pres. +',jp:'止めます'},{label:'Pres. −',jp:'止めません'},{label:'Past +',jp:'止めました'},{label:'Past −',jp:'止めませんでした'},{label:'Dictionary',jp:'とめる'},{label:'て-form',jp:'とめて'},{label:'ない form',jp:'とめない'}],
  '止めます#G2':[{label:'Pres. +',jp:'止めます'},{label:'Pres. −',jp:'止めません'},{label:'Past +',jp:'止めました'},{label:'Past −',jp:'止めませんでした'},{label:'Dictionary',jp:'とめる'},{label:'て-form',jp:'とめて'},{label:'ない form',jp:'とめない'}],
  'とめます#G2':[{label:'Pres. +',jp:'とめます'},{label:'Pres. −',jp:'とめません'},{label:'Past +',jp:'とめました'},{label:'Past −',jp:'とめませんでした'},{label:'Dictionary',jp:'とめる'},{label:'て-form',jp:'とめて'},{label:'ない form',jp:'とめない'}],
  'とめます':[{label:'Pres. +',jp:'とめます'},{label:'Pres. −',jp:'とめません'},{label:'Past +',jp:'とめました'},{label:'Past −',jp:'とめませんでした'},{label:'Dictionary',jp:'とめる'},{label:'て-form',jp:'とめて'},{label:'ない form',jp:'とめない'}],
  '出します':[{label:'Pres. +',jp:'出します'},{label:'Pres. −',jp:'出しません'},{label:'Past +',jp:'出しました'},{label:'Past −',jp:'出しませんでした'},{label:'Dictionary',jp:'だす'},{label:'て-form',jp:'だして'},{label:'ない form',jp:'ださない'}],
  '出します#G1':[{label:'Pres. +',jp:'出します'},{label:'Pres. −',jp:'出しません'},{label:'Past +',jp:'出しました'},{label:'Past −',jp:'出しませんでした'},{label:'Dictionary',jp:'だす'},{label:'て-form',jp:'だして'},{label:'ない form',jp:'ださない'}],
  'だします#G1':[{label:'Pres. +',jp:'だします'},{label:'Pres. −',jp:'だしません'},{label:'Past +',jp:'だしました'},{label:'Past −',jp:'だしませんでした'},{label:'Dictionary',jp:'だす'},{label:'て-form',jp:'だして'},{label:'ない form',jp:'ださない'}],
  'だします':[{label:'Pres. +',jp:'だします'},{label:'Pres. −',jp:'だしません'},{label:'Past +',jp:'だしました'},{label:'Past −',jp:'だしませんでした'},{label:'Dictionary',jp:'だす'},{label:'て-form',jp:'だして'},{label:'ない form',jp:'ださない'}],
  '洗います':[{label:'Pres. +',jp:'洗います'},{label:'Pres. −',jp:'洗いません'},{label:'Past +',jp:'洗いました'},{label:'Past −',jp:'洗いませんでした'},{label:'Dictionary',jp:'あらう'},{label:'て-form',jp:'あらって'},{label:'ない form',jp:'あらわない'}],
  '洗います#G1':[{label:'Pres. +',jp:'洗います'},{label:'Pres. −',jp:'洗いません'},{label:'Past +',jp:'洗いました'},{label:'Past −',jp:'洗いませんでした'},{label:'Dictionary',jp:'あらう'},{label:'て-form',jp:'あらって'},{label:'ない form',jp:'あらわない'}],
  'あらいます#G1':[{label:'Pres. +',jp:'あらいます'},{label:'Pres. −',jp:'あらいません'},{label:'Past +',jp:'あらいました'},{label:'Past −',jp:'あらいませんでした'},{label:'Dictionary',jp:'あらう'},{label:'て-form',jp:'あらって'},{label:'ない form',jp:'あらわない'}],
  'あらいます':[{label:'Pres. +',jp:'あらいます'},{label:'Pres. −',jp:'あらいません'},{label:'Past +',jp:'あらいました'},{label:'Past −',jp:'あらいませんでした'},{label:'Dictionary',jp:'あらう'},{label:'て-form',jp:'あらって'},{label:'ない form',jp:'あらわない'}],
  '浴びます':[{label:'Pres. +',jp:'浴びます'},{label:'Pres. −',jp:'浴びません'},{label:'Past +',jp:'浴びました'},{label:'Past −',jp:'浴びませんでした'},{label:'Dictionary',jp:'あびる'},{label:'て-form',jp:'あびて'},{label:'ない form',jp:'あびない'}],
  '浴びます#G2':[{label:'Pres. +',jp:'浴びます'},{label:'Pres. −',jp:'浴びません'},{label:'Past +',jp:'浴びました'},{label:'Past −',jp:'浴びませんでした'},{label:'Dictionary',jp:'あびる'},{label:'て-form',jp:'あびて'},{label:'ない form',jp:'あびない'}],
  'あびます#G2':[{label:'Pres. +',jp:'あびます'},{label:'Pres. −',jp:'あびません'},{label:'Past +',jp:'あびました'},{label:'Past −',jp:'あびませんでした'},{label:'Dictionary',jp:'あびる'},{label:'て-form',jp:'あびて'},{label:'ない form',jp:'あびない'}],
  'あびます':[{label:'Pres. +',jp:'あびます'},{label:'Pres. −',jp:'あびません'},{label:'Past +',jp:'あびました'},{label:'Past −',jp:'あびませんでした'},{label:'Dictionary',jp:'あびる'},{label:'て-form',jp:'あびて'},{label:'ない form',jp:'あびない'}],
  '降ります':[{label:'Pres. +',jp:'降ります'},{label:'Pres. −',jp:'降りません'},{label:'Past +',jp:'降りました'},{label:'Past −',jp:'降りませんでした'},{label:'Dictionary',jp:'ふる'},{label:'て-form',jp:'ふって'},{label:'ない form',jp:'ふらない'}],
  '降ります#G2':[{label:'Pres. +',jp:'降ります'},{label:'Pres. −',jp:'降りません'},{label:'Past +',jp:'降りました'},{label:'Past −',jp:'降りませんでした'},{label:'Dictionary',jp:'おりる'},{label:'て-form',jp:'おりて'},{label:'ない form',jp:'おりない'}],
  'おります#G2':[{label:'Pres. +',jp:'おります'},{label:'Pres. −',jp:'おりません'},{label:'Past +',jp:'おりました'},{label:'Past −',jp:'おりませんでした'},{label:'Dictionary',jp:'おりる'},{label:'て-form',jp:'おりて'},{label:'ない form',jp:'おりない'}],
  'おります':[{label:'Pres. +',jp:'おります'},{label:'Pres. −',jp:'おりません'},{label:'Past +',jp:'おりました'},{label:'Past −',jp:'おりませんでした'},{label:'Dictionary',jp:'おりる'},{label:'て-form',jp:'おりて'},{label:'ない form',jp:'おりない'}],
  '乗り換えます':[{label:'Pres. +',jp:'乗り換えます'},{label:'Pres. −',jp:'乗り換えません'},{label:'Past +',jp:'乗り換えました'},{label:'Past −',jp:'乗り換えませんでした'},{label:'Dictionary',jp:'のりかえる'},{label:'て-form',jp:'のりかえて'},{label:'ない form',jp:'のりかえない'}],
  '乗り換えます#G2':[{label:'Pres. +',jp:'乗り換えます'},{label:'Pres. −',jp:'乗り換えません'},{label:'Past +',jp:'乗り換えました'},{label:'Past −',jp:'乗り換えませんでした'},{label:'Dictionary',jp:'のりかえる'},{label:'て-form',jp:'のりかえて'},{label:'ない form',jp:'のりかえない'}],
  'のりかえます#G2':[{label:'Pres. +',jp:'のりかえます'},{label:'Pres. −',jp:'のりかえません'},{label:'Past +',jp:'のりかえました'},{label:'Past −',jp:'のりかえませんでした'},{label:'Dictionary',jp:'のりかえる'},{label:'て-form',jp:'のりかえて'},{label:'ない form',jp:'のりかえない'}],
  'のりかえます':[{label:'Pres. +',jp:'のりかえます'},{label:'Pres. −',jp:'のりかえません'},{label:'Past +',jp:'のりかえました'},{label:'Past −',jp:'のりかえませんでした'},{label:'Dictionary',jp:'のりかえる'},{label:'て-form',jp:'のりかえて'},{label:'ない form',jp:'のりかえない'}],
  'かかります':[{label:'Pres. +',jp:'かかります'},{label:'Pres. −',jp:'かかりません'},{label:'Past +',jp:'かかりました'},{label:'Past −',jp:'かかりませんでした'},{label:'Dictionary',jp:'かかる'},{label:'て-form',jp:'かかって'},{label:'ない form',jp:'かからない'}],
  'かかります#G1':[{label:'Pres. +',jp:'かかります'},{label:'Pres. −',jp:'かかりません'},{label:'Past +',jp:'かかりました'},{label:'Past −',jp:'かかりませんでした'},{label:'Dictionary',jp:'かかる'},{label:'て-form',jp:'かかって'},{label:'ない form',jp:'かからない'}],
  '持って行きます':[{label:'Pres. +',jp:'持って行きます'},{label:'Pres. −',jp:'持って行きません'},{label:'Past +',jp:'持って行きました'},{label:'Past −',jp:'持って行きませんでした'},{label:'Dictionary',jp:'もっていく'},{label:'て-form',jp:'もっていって'},{label:'ない form',jp:'もっていかない'}],
  '持って行きます#G1':[{label:'Pres. +',jp:'持って行きます'},{label:'Pres. −',jp:'持って行きません'},{label:'Past +',jp:'持って行きました'},{label:'Past −',jp:'持って行きませんでした'},{label:'Dictionary',jp:'もっていく'},{label:'て-form',jp:'もっていって'},{label:'ない form',jp:'もっていかない'}],
  'もっていきます#G1':[{label:'Pres. +',jp:'もっていきます'},{label:'Pres. −',jp:'もっていきません'},{label:'Past +',jp:'もっていきました'},{label:'Past −',jp:'もっていきませんでした'},{label:'Dictionary',jp:'もっていく'},{label:'て-form',jp:'もっていって'},{label:'ない form',jp:'もっていかない'}],
  'もっていきます':[{label:'Pres. +',jp:'もっていきます'},{label:'Pres. −',jp:'もっていきません'},{label:'Past +',jp:'もっていきました'},{label:'Past −',jp:'もっていきませんでした'},{label:'Dictionary',jp:'もっていく'},{label:'て-form',jp:'もっていって'},{label:'ない form',jp:'もっていかない'}],
  '買って行きます':[{label:'Pres. +',jp:'買って行きます'},{label:'Pres. −',jp:'買って行きません'},{label:'Past +',jp:'買って行きました'},{label:'Past −',jp:'買って行きませんでした'},{label:'Dictionary',jp:'かっていく'},{label:'て-form',jp:'かっていって'},{label:'ない form',jp:'かっていかない'}],
  '買って行きます#G1':[{label:'Pres. +',jp:'買って行きます'},{label:'Pres. −',jp:'買って行きません'},{label:'Past +',jp:'買って行きました'},{label:'Past −',jp:'買って行きませんでした'},{label:'Dictionary',jp:'かっていく'},{label:'て-form',jp:'かっていって'},{label:'ない form',jp:'かっていかない'}],
  'かっていきます#G1':[{label:'Pres. +',jp:'かっていきます'},{label:'Pres. −',jp:'かっていきません'},{label:'Past +',jp:'かっていきました'},{label:'Past −',jp:'かっていきませんでした'},{label:'Dictionary',jp:'かっていく'},{label:'て-form',jp:'かっていって'},{label:'ない form',jp:'かっていかない'}],
  'かっていきます':[{label:'Pres. +',jp:'かっていきます'},{label:'Pres. −',jp:'かっていきません'},{label:'Past +',jp:'かっていきました'},{label:'Past −',jp:'かっていきませんでした'},{label:'Dictionary',jp:'かっていく'},{label:'て-form',jp:'かっていって'},{label:'ない form',jp:'かっていかない'}],
  '作って行きます':[{label:'Pres. +',jp:'作って行きます'},{label:'Pres. −',jp:'作って行きません'},{label:'Past +',jp:'作って行きました'},{label:'Past −',jp:'作って行きませんでした'},{label:'Dictionary',jp:'つくっていく'},{label:'て-form',jp:'つくっていって'},{label:'ない form',jp:'つくっていかない'}],
  '作って行きます#G1':[{label:'Pres. +',jp:'作って行きます'},{label:'Pres. −',jp:'作って行きません'},{label:'Past +',jp:'作って行きました'},{label:'Past −',jp:'作って行きませんでした'},{label:'Dictionary',jp:'つくっていく'},{label:'て-form',jp:'つくっていって'},{label:'ない form',jp:'つくっていかない'}],
  'つくっていきます#G1':[{label:'Pres. +',jp:'つくっていきます'},{label:'Pres. −',jp:'つくっていきません'},{label:'Past +',jp:'つくっていきました'},{label:'Past −',jp:'つくっていきませんでした'},{label:'Dictionary',jp:'つくっていく'},{label:'て-form',jp:'つくっていって'},{label:'ない form',jp:'つくっていかない'}],
  'つくっていきます':[{label:'Pres. +',jp:'つくっていきます'},{label:'Pres. −',jp:'つくっていきません'},{label:'Past +',jp:'つくっていきました'},{label:'Past −',jp:'つくっていきませんでした'},{label:'Dictionary',jp:'つくっていく'},{label:'て-form',jp:'つくっていって'},{label:'ない form',jp:'つくっていかない'}],
  'つれて行きます':[{label:'Pres. +',jp:'つれて行きます'},{label:'Pres. −',jp:'つれて行きません'},{label:'Past +',jp:'つれて行きました'},{label:'Past −',jp:'つれて行きませんでした'},{label:'Dictionary',jp:'つれていく'},{label:'て-form',jp:'つれていって'},{label:'ない form',jp:'つれていかない'}],
  'つれて行きます#G1':[{label:'Pres. +',jp:'つれて行きます'},{label:'Pres. −',jp:'つれて行きません'},{label:'Past +',jp:'つれて行きました'},{label:'Past −',jp:'つれて行きませんでした'},{label:'Dictionary',jp:'つれていく'},{label:'て-form',jp:'つれていって'},{label:'ない form',jp:'つれていかない'}],
  'つれていきます#G1':[{label:'Pres. +',jp:'つれていきます'},{label:'Pres. −',jp:'つれていきません'},{label:'Past +',jp:'つれていきました'},{label:'Past −',jp:'つれていきませんでした'},{label:'Dictionary',jp:'つれていく'},{label:'て-form',jp:'つれていって'},{label:'ない form',jp:'つれていかない'}],
  'つれていきます':[{label:'Pres. +',jp:'つれていきます'},{label:'Pres. −',jp:'つれていきません'},{label:'Past +',jp:'つれていきました'},{label:'Past −',jp:'つれていきませんでした'},{label:'Dictionary',jp:'つれていく'},{label:'て-form',jp:'つれていって'},{label:'ない form',jp:'つれていかない'}],
  '持って来ます':[{label:'Pres. +',jp:'持って来ます'},{label:'Pres. −',jp:'持って来ません'},{label:'Past +',jp:'持って来ました'},{label:'Past −',jp:'持って来ませんでした'},{label:'Dictionary',jp:'もってくる'},{label:'て-form',jp:'もってきて'},{label:'ない form',jp:'もってこない'}],
  '持って来ます#G3':[{label:'Pres. +',jp:'持って来ます'},{label:'Pres. −',jp:'持って来ません'},{label:'Past +',jp:'持って来ました'},{label:'Past −',jp:'持って来ませんでした'},{label:'Dictionary',jp:'もってくる'},{label:'て-form',jp:'もってきて'},{label:'ない form',jp:'もってこない'}],
  'もってきます#G3':[{label:'Pres. +',jp:'もってきます'},{label:'Pres. −',jp:'もってきません'},{label:'Past +',jp:'もってきました'},{label:'Past −',jp:'もってきませんでした'},{label:'Dictionary',jp:'もってくる'},{label:'て-form',jp:'もってきて'},{label:'ない form',jp:'もってこない'}],
  'もってきます':[{label:'Pres. +',jp:'もってきます'},{label:'Pres. −',jp:'もってきません'},{label:'Past +',jp:'もってきました'},{label:'Past −',jp:'もってきませんでした'},{label:'Dictionary',jp:'もってくる'},{label:'て-form',jp:'もってきて'},{label:'ない form',jp:'もってこない'}],
  '買って来ます':[{label:'Pres. +',jp:'買って来ます'},{label:'Pres. −',jp:'買って来ません'},{label:'Past +',jp:'買って来ました'},{label:'Past −',jp:'買って来ませんでした'},{label:'Dictionary',jp:'かってくる'},{label:'て-form',jp:'かってきて'},{label:'ない form',jp:'かってこない'}],
  '買って来ます#G3':[{label:'Pres. +',jp:'買って来ます'},{label:'Pres. −',jp:'買って来ません'},{label:'Past +',jp:'買って来ました'},{label:'Past −',jp:'買って来ませんでした'},{label:'Dictionary',jp:'かってくる'},{label:'て-form',jp:'かってきて'},{label:'ない form',jp:'かってこない'}],
  'かってきます#G3':[{label:'Pres. +',jp:'かってきます'},{label:'Pres. −',jp:'かってきません'},{label:'Past +',jp:'かってきました'},{label:'Past −',jp:'かってきませんでした'},{label:'Dictionary',jp:'かってくる'},{label:'て-form',jp:'かってきて'},{label:'ない form',jp:'かってこない'}],
  'かってきます':[{label:'Pres. +',jp:'かってきます'},{label:'Pres. −',jp:'かってきません'},{label:'Past +',jp:'かってきました'},{label:'Past −',jp:'かってきませんでした'},{label:'Dictionary',jp:'かってくる'},{label:'て-form',jp:'かってきて'},{label:'ない form',jp:'かってこない'}],
  '買って帰ります':[{label:'Pres. +',jp:'買って帰ります'},{label:'Pres. −',jp:'買って帰りません'},{label:'Past +',jp:'買って帰りました'},{label:'Past −',jp:'買って帰りませんでした'},{label:'Dictionary',jp:'かってかえる'},{label:'て-form',jp:'かってかえって'},{label:'ない form',jp:'かってかえらない'}],
  '買って帰ります#G1':[{label:'Pres. +',jp:'買って帰ります'},{label:'Pres. −',jp:'買って帰りません'},{label:'Past +',jp:'買って帰りました'},{label:'Past −',jp:'買って帰りませんでした'},{label:'Dictionary',jp:'かってかえる'},{label:'て-form',jp:'かってかえって'},{label:'ない form',jp:'かってかえらない'}],
  'かってかえります#G1':[{label:'Pres. +',jp:'かってかえります'},{label:'Pres. −',jp:'かってかえりません'},{label:'Past +',jp:'かってかえりました'},{label:'Past −',jp:'かってかえりませんでした'},{label:'Dictionary',jp:'かってかえる'},{label:'て-form',jp:'かってかえって'},{label:'ない form',jp:'かってかえらない'}],
  'かってかえります':[{label:'Pres. +',jp:'かってかえります'},{label:'Pres. −',jp:'かってかえりません'},{label:'Past +',jp:'かってかえりました'},{label:'Past −',jp:'かってかえりませんでした'},{label:'Dictionary',jp:'かってかえる'},{label:'て-form',jp:'かってかえって'},{label:'ない form',jp:'かってかえらない'}],
  '行って来ます':[{label:'Pres. +',jp:'行って来ます'},{label:'Pres. −',jp:'行って来ません'},{label:'Past +',jp:'行って来ました'},{label:'Past −',jp:'行って来ませんでした'},{label:'Dictionary',jp:'いってくる'},{label:'て-form',jp:'いってきて'},{label:'ない form',jp:'いってこない'}],
  '行って来ます#G3':[{label:'Pres. +',jp:'行って来ます'},{label:'Pres. −',jp:'行って来ません'},{label:'Past +',jp:'行って来ました'},{label:'Past −',jp:'行って来ませんでした'},{label:'Dictionary',jp:'いってくる'},{label:'て-form',jp:'いってきて'},{label:'ない form',jp:'いってこない'}],
  'いってきます#G3':[{label:'Pres. +',jp:'いってきます'},{label:'Pres. −',jp:'いってきません'},{label:'Past +',jp:'いってきました'},{label:'Past −',jp:'いってきませんでした'},{label:'Dictionary',jp:'いってくる'},{label:'て-form',jp:'いってきて'},{label:'ない form',jp:'いってこない'}],
  'いってきます':[{label:'Pres. +',jp:'いってきます'},{label:'Pres. −',jp:'いってきません'},{label:'Past +',jp:'いってきました'},{label:'Past −',jp:'いってきませんでした'},{label:'Dictionary',jp:'いってくる'},{label:'て-form',jp:'いってきて'},{label:'ない form',jp:'いってこない'}],
  '持って帰ります':[{label:'Pres. +',jp:'持って帰ります'},{label:'Pres. −',jp:'持って帰りません'},{label:'Past +',jp:'持って帰りました'},{label:'Past −',jp:'持って帰りませんでした'},{label:'Dictionary',jp:'もってかえる'},{label:'て-form',jp:'もってかえって'},{label:'ない form',jp:'もってかえらない'}],
  '持って帰ります#G1':[{label:'Pres. +',jp:'持って帰ります'},{label:'Pres. −',jp:'持って帰りません'},{label:'Past +',jp:'持って帰りました'},{label:'Past −',jp:'持って帰りませんでした'},{label:'Dictionary',jp:'もってかえる'},{label:'て-form',jp:'もってかえって'},{label:'ない form',jp:'もってかえらない'}],
  'もってかえります#G1':[{label:'Pres. +',jp:'もってかえります'},{label:'Pres. −',jp:'もってかえりません'},{label:'Past +',jp:'もってかえりました'},{label:'Past −',jp:'もってかえりませんでした'},{label:'Dictionary',jp:'もってかえる'},{label:'て-form',jp:'もってかえって'},{label:'ない form',jp:'もってかえらない'}],
  'もってかえります':[{label:'Pres. +',jp:'もってかえります'},{label:'Pres. −',jp:'もってかえりません'},{label:'Past +',jp:'もってかえりました'},{label:'Past −',jp:'もってかえりませんでした'},{label:'Dictionary',jp:'もってかえる'},{label:'て-form',jp:'もってかえって'},{label:'ない form',jp:'もってかえらない'}],
  '速い':[{label:'Pres. +',jp:'はやいです'},{label:'Pres. −',jp:'はやくありません'},{label:'Past +',jp:'はやかったです'},{label:'Past −',jp:'はやくありませんでした'},{label:'Adverb',jp:'はやく'}],
  'はやい':[{label:'Pres. +',jp:'はやいです'},{label:'Pres. −',jp:'はやくありません'},{label:'Past +',jp:'はやかったです'},{label:'Past −',jp:'はやくありませんでした'},{label:'Adverb',jp:'はやく'}],
  '若い':[{label:'Pres. +',jp:'わかいです'},{label:'Pres. −',jp:'わかくありません'},{label:'Past +',jp:'わかかったです'},{label:'Past −',jp:'わかくありませんでした'},{label:'Adverb',jp:'わかく'}],
  'わかい':[{label:'Pres. +',jp:'わかいです'},{label:'Pres. −',jp:'わかくありません'},{label:'Past +',jp:'わかかったです'},{label:'Past −',jp:'わかくありませんでした'},{label:'Adverb',jp:'わかく'}],
  'かっこいい':[{label:'Pres. +',jp:'かっこいいです'},{label:'Pres. −',jp:'かっこいくありません'},{label:'Past +',jp:'かっこいかったです'},{label:'Past −',jp:'かっこいくありませんでした'},{label:'Adverb',jp:'かっこいく'}],
  '決めます':[{label:'Pres. +',jp:'決めます'},{label:'Pres. −',jp:'決めません'},{label:'Past +',jp:'決めました'},{label:'Past −',jp:'決めませんでした'},{label:'Dictionary',jp:'きめる'},{label:'て-form',jp:'きめて'},{label:'ない form',jp:'きめない'}],
  '決めます#G2':[{label:'Pres. +',jp:'決めます'},{label:'Pres. −',jp:'決めません'},{label:'Past +',jp:'決めました'},{label:'Past −',jp:'決めませんでした'},{label:'Dictionary',jp:'きめる'},{label:'て-form',jp:'きめて'},{label:'ない form',jp:'きめない'}],
  'きめます#G2':[{label:'Pres. +',jp:'きめます'},{label:'Pres. −',jp:'きめません'},{label:'Past +',jp:'きめました'},{label:'Past −',jp:'きめませんでした'},{label:'Dictionary',jp:'きめる'},{label:'て-form',jp:'きめて'},{label:'ない form',jp:'きめない'}],
  'きめます':[{label:'Pres. +',jp:'きめます'},{label:'Pres. −',jp:'きめません'},{label:'Past +',jp:'きめました'},{label:'Past −',jp:'きめませんでした'},{label:'Dictionary',jp:'きめる'},{label:'て-form',jp:'きめて'},{label:'ない form',jp:'きめない'}],
  'あげます':[{label:'Pres. +',jp:'あげます'},{label:'Pres. −',jp:'あげません'},{label:'Past +',jp:'あげました'},{label:'Past −',jp:'あげませんでした'},{label:'Dictionary',jp:'あげる'},{label:'て-form',jp:'あげて'},{label:'ない form',jp:'あげない'}],
  'あげます#G2':[{label:'Pres. +',jp:'あげます'},{label:'Pres. −',jp:'あげません'},{label:'Past +',jp:'あげました'},{label:'Past −',jp:'あげませんでした'},{label:'Dictionary',jp:'あげる'},{label:'て-form',jp:'あげて'},{label:'ない form',jp:'あげない'}],
  '甘い':[{label:'Pres. +',jp:'あまいです'},{label:'Pres. −',jp:'あまくありません'},{label:'Past +',jp:'あまかったです'},{label:'Past −',jp:'あまくありませんでした'},{label:'Adverb',jp:'あまく'}],
  'あまい':[{label:'Pres. +',jp:'あまいです'},{label:'Pres. −',jp:'あまくありません'},{label:'Past +',jp:'あまかったです'},{label:'Past −',jp:'あまくありませんでした'},{label:'Adverb',jp:'あまく'}],
  '足ります':[{label:'Pres. +',jp:'足ります'},{label:'Pres. −',jp:'足りません'},{label:'Past +',jp:'足りました'},{label:'Past −',jp:'足りませんでした'},{label:'Dictionary',jp:'たりる'},{label:'て-form',jp:'たりて'},{label:'ない form',jp:'たりない'}],
  '足ります#G2':[{label:'Pres. +',jp:'足ります'},{label:'Pres. −',jp:'足りません'},{label:'Past +',jp:'足りました'},{label:'Past −',jp:'足りませんでした'},{label:'Dictionary',jp:'たりる'},{label:'て-form',jp:'たりて'},{label:'ない form',jp:'たりない'}],
  'たります#G2':[{label:'Pres. +',jp:'たります'},{label:'Pres. −',jp:'たりません'},{label:'Past +',jp:'たりました'},{label:'Past −',jp:'たりませんでした'},{label:'Dictionary',jp:'たりる'},{label:'て-form',jp:'たりて'},{label:'ない form',jp:'たりない'}],
  'たります':[{label:'Pres. +',jp:'たります'},{label:'Pres. −',jp:'たりません'},{label:'Past +',jp:'たりました'},{label:'Past −',jp:'たりませんでした'},{label:'Dictionary',jp:'たりる'},{label:'て-form',jp:'たりて'},{label:'ない form',jp:'たりない'}],
  '派手':[{label:'Pres. +',jp:'はでです'},{label:'Pres. −',jp:'はでじゃありません'},{label:'Past +',jp:'はででした'},{label:'Past −',jp:'はでじゃありませんでした'},{label:'+ Noun',jp:'はでな＋N'}],
  'はで':[{label:'Pres. +',jp:'はでです'},{label:'Pres. −',jp:'はでじゃありません'},{label:'Past +',jp:'はででした'},{label:'Past −',jp:'はでじゃありませんでした'},{label:'+ Noun',jp:'はでな＋N'}],
  '地味':[{label:'Pres. +',jp:'じみです'},{label:'Pres. −',jp:'じみじゃありません'},{label:'Past +',jp:'じみでした'},{label:'Past −',jp:'じみじゃありませんでした'},{label:'+ Noun',jp:'じみな＋N'}],
  'じみ':[{label:'Pres. +',jp:'じみです'},{label:'Pres. −',jp:'じみじゃありません'},{label:'Past +',jp:'じみでした'},{label:'Past −',jp:'じみじゃありませんでした'},{label:'+ Noun',jp:'じみな＋N'}],
  '分かりやすい':[{label:'Pres. +',jp:'わかりやすいです'},{label:'Pres. −',jp:'わかりやすくありません'},{label:'Past +',jp:'わかりやすかったです'},{label:'Past −',jp:'わかりやすくありませんでした'},{label:'Adverb',jp:'わかりやすく'}],
  'わかりやすい':[{label:'Pres. +',jp:'わかりやすいです'},{label:'Pres. −',jp:'わかりやすくありません'},{label:'Past +',jp:'わかりやすかったです'},{label:'Past −',jp:'わかりやすくありませんでした'},{label:'Adverb',jp:'わかりやすく'}],
  '間違えます':[{label:'Pres. +',jp:'間違えます'},{label:'Pres. −',jp:'間違えません'},{label:'Past +',jp:'間違えました'},{label:'Past −',jp:'間違えませんでした'},{label:'Dictionary',jp:'まちがえる'},{label:'て-form',jp:'まちがえて'},{label:'ない form',jp:'まちがえない'}],
  '間違えます#G2':[{label:'Pres. +',jp:'間違えます'},{label:'Pres. −',jp:'間違えません'},{label:'Past +',jp:'間違えました'},{label:'Past −',jp:'間違えませんでした'},{label:'Dictionary',jp:'まちがえる'},{label:'て-form',jp:'まちがえて'},{label:'ない form',jp:'まちがえない'}],
  'まちがえます#G2':[{label:'Pres. +',jp:'まちがえます'},{label:'Pres. −',jp:'まちがえません'},{label:'Past +',jp:'まちがえました'},{label:'Past −',jp:'まちがえませんでした'},{label:'Dictionary',jp:'まちがえる'},{label:'て-form',jp:'まちがえて'},{label:'ない form',jp:'まちがえない'}],
  'まちがえます':[{label:'Pres. +',jp:'まちがえます'},{label:'Pres. −',jp:'まちがえません'},{label:'Past +',jp:'まちがえました'},{label:'Past −',jp:'まちがえませんでした'},{label:'Dictionary',jp:'まちがえる'},{label:'て-form',jp:'まちがえて'},{label:'ない form',jp:'まちがえない'}],
  '履きます':[{label:'Pres. +',jp:'履きます'},{label:'Pres. −',jp:'履きません'},{label:'Past +',jp:'履きました'},{label:'Past −',jp:'履きませんでした'},{label:'Dictionary',jp:'はく'},{label:'て-form',jp:'はいて'},{label:'ない form',jp:'はかない'}],
  '履きます#G1':[{label:'Pres. +',jp:'履きます'},{label:'Pres. −',jp:'履きません'},{label:'Past +',jp:'履きました'},{label:'Past −',jp:'履きませんでした'},{label:'Dictionary',jp:'はく'},{label:'て-form',jp:'はいて'},{label:'ない form',jp:'はかない'}],
  'はきます#G1':[{label:'Pres. +',jp:'はきます'},{label:'Pres. −',jp:'はきません'},{label:'Past +',jp:'はきました'},{label:'Past −',jp:'はきませんでした'},{label:'Dictionary',jp:'はく'},{label:'て-form',jp:'はいて'},{label:'ない form',jp:'はかない'}],
  'はきます':[{label:'Pres. +',jp:'はきます'},{label:'Pres. −',jp:'はきません'},{label:'Past +',jp:'はきました'},{label:'Past −',jp:'はきませんでした'},{label:'Dictionary',jp:'はく'},{label:'て-form',jp:'はいて'},{label:'ない form',jp:'はかない'}],
  '使います':[{label:'Pres. +',jp:'使います'},{label:'Pres. −',jp:'使いません'},{label:'Past +',jp:'使いました'},{label:'Past −',jp:'使いませんでした'},{label:'Dictionary',jp:'つかう'},{label:'て-form',jp:'つかって'},{label:'ない form',jp:'つかわない'}],
  '使います#G1':[{label:'Pres. +',jp:'使います'},{label:'Pres. −',jp:'使いません'},{label:'Past +',jp:'使いました'},{label:'Past −',jp:'使いませんでした'},{label:'Dictionary',jp:'つかう'},{label:'て-form',jp:'つかって'},{label:'ない form',jp:'つかわない'}],
  'つかいます#G1':[{label:'Pres. +',jp:'つかいます'},{label:'Pres. −',jp:'つかいません'},{label:'Past +',jp:'つかいました'},{label:'Past −',jp:'つかいませんでした'},{label:'Dictionary',jp:'つかう'},{label:'て-form',jp:'つかって'},{label:'ない form',jp:'つかわない'}],
  'つかいます':[{label:'Pres. +',jp:'つかいます'},{label:'Pres. −',jp:'つかいません'},{label:'Past +',jp:'つかいました'},{label:'Past −',jp:'つかいませんでした'},{label:'Dictionary',jp:'つかう'},{label:'て-form',jp:'つかって'},{label:'ない form',jp:'つかわない'}],
  '覚えます':[{label:'Pres. +',jp:'覚えます'},{label:'Pres. −',jp:'覚えません'},{label:'Past +',jp:'覚えました'},{label:'Past −',jp:'覚えませんでした'},{label:'Dictionary',jp:'おぼえる'},{label:'て-form',jp:'おぼえて'},{label:'ない form',jp:'おぼえない'}],
  '覚えます#G2':[{label:'Pres. +',jp:'覚えます'},{label:'Pres. −',jp:'覚えません'},{label:'Past +',jp:'覚えました'},{label:'Past −',jp:'覚えませんでした'},{label:'Dictionary',jp:'おぼえる'},{label:'て-form',jp:'おぼえて'},{label:'ない form',jp:'おぼえない'}],
  'おぼえます#G2':[{label:'Pres. +',jp:'おぼえます'},{label:'Pres. −',jp:'おぼえません'},{label:'Past +',jp:'おぼえました'},{label:'Past −',jp:'おぼえませんでした'},{label:'Dictionary',jp:'おぼえる'},{label:'て-form',jp:'おぼえて'},{label:'ない form',jp:'おぼえない'}],
  'おぼえます':[{label:'Pres. +',jp:'おぼえます'},{label:'Pres. −',jp:'おぼえません'},{label:'Past +',jp:'おぼえました'},{label:'Past −',jp:'おぼえませんでした'},{label:'Dictionary',jp:'おぼえる'},{label:'て-form',jp:'おぼえて'},{label:'ない form',jp:'おぼえない'}],
  '住みます':[{label:'Pres. +',jp:'住みます'},{label:'Pres. −',jp:'住みません'},{label:'Past +',jp:'住みました'},{label:'Past −',jp:'住みませんでした'},{label:'Dictionary',jp:'すむ'},{label:'て-form',jp:'すんで'},{label:'ない form',jp:'すまない'}],
  '住みます#G1':[{label:'Pres. +',jp:'住みます'},{label:'Pres. −',jp:'住みません'},{label:'Past +',jp:'住みました'},{label:'Past −',jp:'住みませんでした'},{label:'Dictionary',jp:'すむ'},{label:'て-form',jp:'すんで'},{label:'ない form',jp:'すまない'}],
  'すみます#G1':[{label:'Pres. +',jp:'すみます'},{label:'Pres. −',jp:'すみません'},{label:'Past +',jp:'すみました'},{label:'Past −',jp:'すみませんでした'},{label:'Dictionary',jp:'すむ'},{label:'て-form',jp:'すんで'},{label:'ない form',jp:'すまない'}],
  'すみます':[{label:'Pres. +',jp:'すみます'},{label:'Pres. −',jp:'すみません'},{label:'Past +',jp:'すみました'},{label:'Past −',jp:'すみませんでした'},{label:'Dictionary',jp:'すむ'},{label:'て-form',jp:'すんで'},{label:'ない form',jp:'すまない'}],
  '危ない':[{label:'Pres. +',jp:'あぶないです'},{label:'Pres. −',jp:'あぶなくありません'},{label:'Past +',jp:'あぶなかったです'},{label:'Past −',jp:'あぶなくありませんでした'},{label:'Adverb',jp:'あぶなく'}],
  'あぶない':[{label:'Pres. +',jp:'あぶないです'},{label:'Pres. −',jp:'あぶなくありません'},{label:'Past +',jp:'あぶなかったです'},{label:'Past −',jp:'あぶなくありませんでした'},{label:'Adverb',jp:'あぶなく'}],
  'はずかしい':[{label:'Pres. +',jp:'はずかしいです'},{label:'Pres. −',jp:'はずかしくありません'},{label:'Past +',jp:'はずかしかったです'},{label:'Past −',jp:'はずかしくありませんでした'},{label:'Adverb',jp:'はずかしく'}],
  '押します':[{label:'Pres. +',jp:'押します'},{label:'Pres. −',jp:'押しません'},{label:'Past +',jp:'押しました'},{label:'Past −',jp:'押しませんでした'},{label:'Dictionary',jp:'おす'},{label:'て-form',jp:'おして'},{label:'ない form',jp:'おさない'}],
  '押します#G1':[{label:'Pres. +',jp:'押します'},{label:'Pres. −',jp:'押しません'},{label:'Past +',jp:'押しました'},{label:'Past −',jp:'押しませんでした'},{label:'Dictionary',jp:'おす'},{label:'て-form',jp:'おして'},{label:'ない form',jp:'おさない'}],
  'おします#G1':[{label:'Pres. +',jp:'おします'},{label:'Pres. −',jp:'おしません'},{label:'Past +',jp:'おしました'},{label:'Past −',jp:'おしませんでした'},{label:'Dictionary',jp:'おす'},{label:'て-form',jp:'おして'},{label:'ない form',jp:'おさない'}],
  'おします':[{label:'Pres. +',jp:'おします'},{label:'Pres. −',jp:'おしません'},{label:'Past +',jp:'おしました'},{label:'Past −',jp:'おしませんでした'},{label:'Dictionary',jp:'おす'},{label:'て-form',jp:'おして'},{label:'ない form',jp:'おさない'}],
  '遅れます':[{label:'Pres. +',jp:'遅れます'},{label:'Pres. −',jp:'遅れません'},{label:'Past +',jp:'遅れました'},{label:'Past −',jp:'遅れませんでした'},{label:'Dictionary',jp:'おくれる'},{label:'て-form',jp:'おくれて'},{label:'ない form',jp:'おくれない'}],
  '遅れます#G2':[{label:'Pres. +',jp:'遅れます'},{label:'Pres. −',jp:'遅れません'},{label:'Past +',jp:'遅れました'},{label:'Past −',jp:'遅れませんでした'},{label:'Dictionary',jp:'おくれる'},{label:'て-form',jp:'おくれて'},{label:'ない form',jp:'おくれない'}],
  'おくれます#G2':[{label:'Pres. +',jp:'おくれます'},{label:'Pres. −',jp:'おくれません'},{label:'Past +',jp:'おくれました'},{label:'Past −',jp:'おくれませんでした'},{label:'Dictionary',jp:'おくれる'},{label:'て-form',jp:'おくれて'},{label:'ない form',jp:'おくれない'}],
  'おくれます':[{label:'Pres. +',jp:'おくれます'},{label:'Pres. −',jp:'おくれません'},{label:'Past +',jp:'おくれました'},{label:'Past −',jp:'おくれませんでした'},{label:'Dictionary',jp:'おくれる'},{label:'て-form',jp:'おくれて'},{label:'ない form',jp:'おくれない'}],
  '座ります':[{label:'Pres. +',jp:'座ります'},{label:'Pres. −',jp:'座りません'},{label:'Past +',jp:'座りました'},{label:'Past −',jp:'座りませんでした'},{label:'Dictionary',jp:'すわる'},{label:'て-form',jp:'すわって'},{label:'ない form',jp:'すわらない'}],
  '座ります#G1':[{label:'Pres. +',jp:'座ります'},{label:'Pres. −',jp:'座りません'},{label:'Past +',jp:'座りました'},{label:'Past −',jp:'座りませんでした'},{label:'Dictionary',jp:'すわる'},{label:'て-form',jp:'すわって'},{label:'ない form',jp:'すわらない'}],
  'すわります#G1':[{label:'Pres. +',jp:'すわります'},{label:'Pres. −',jp:'すわりません'},{label:'Past +',jp:'すわりました'},{label:'Past −',jp:'すわりませんでした'},{label:'Dictionary',jp:'すわる'},{label:'て-form',jp:'すわって'},{label:'ない form',jp:'すわらない'}],
  'すわります':[{label:'Pres. +',jp:'すわります'},{label:'Pres. −',jp:'すわりません'},{label:'Past +',jp:'すわりました'},{label:'Past −',jp:'すわりませんでした'},{label:'Dictionary',jp:'すわる'},{label:'て-form',jp:'すわって'},{label:'ない form',jp:'すわらない'}],
  '捨てます':[{label:'Pres. +',jp:'捨てます'},{label:'Pres. −',jp:'捨てません'},{label:'Past +',jp:'捨てました'},{label:'Past −',jp:'捨てませんでした'},{label:'Dictionary',jp:'すてる'},{label:'て-form',jp:'すてて'},{label:'ない form',jp:'すてない'}],
  '捨てます#G2':[{label:'Pres. +',jp:'捨てます'},{label:'Pres. −',jp:'捨てません'},{label:'Past +',jp:'捨てました'},{label:'Past −',jp:'捨てませんでした'},{label:'Dictionary',jp:'すてる'},{label:'て-form',jp:'すてて'},{label:'ない form',jp:'すてない'}],
  'すてます#G2':[{label:'Pres. +',jp:'すてます'},{label:'Pres. −',jp:'すてません'},{label:'Past +',jp:'すてました'},{label:'Past −',jp:'すてませんでした'},{label:'Dictionary',jp:'すてる'},{label:'て-form',jp:'すてて'},{label:'ない form',jp:'すてない'}],
  'すてます':[{label:'Pres. +',jp:'すてます'},{label:'Pres. −',jp:'すてません'},{label:'Past +',jp:'すてました'},{label:'Past −',jp:'すてませんでした'},{label:'Dictionary',jp:'すてる'},{label:'て-form',jp:'すてて'},{label:'ない form',jp:'すてない'}],
  '触ります':[{label:'Pres. +',jp:'触ります'},{label:'Pres. −',jp:'触りません'},{label:'Past +',jp:'触りました'},{label:'Past −',jp:'触りませんでした'},{label:'Dictionary',jp:'さわる'},{label:'て-form',jp:'さわって'},{label:'ない form',jp:'さわらない'}],
  '触ります#G1':[{label:'Pres. +',jp:'触ります'},{label:'Pres. −',jp:'触りません'},{label:'Past +',jp:'触りました'},{label:'Past −',jp:'触りませんでした'},{label:'Dictionary',jp:'さわる'},{label:'て-form',jp:'さわって'},{label:'ない form',jp:'さわらない'}],
  'さわります#G1':[{label:'Pres. +',jp:'さわります'},{label:'Pres. −',jp:'さわりません'},{label:'Past +',jp:'さわりました'},{label:'Past −',jp:'さわりませんでした'},{label:'Dictionary',jp:'さわる'},{label:'て-form',jp:'さわって'},{label:'ない form',jp:'さわらない'}],
  'さわります':[{label:'Pres. +',jp:'さわります'},{label:'Pres. −',jp:'さわりません'},{label:'Past +',jp:'さわりました'},{label:'Past −',jp:'さわりませんでした'},{label:'Dictionary',jp:'さわる'},{label:'て-form',jp:'さわって'},{label:'ない form',jp:'さわらない'}],
  '変':[{label:'Pres. +',jp:'へんです'},{label:'Pres. −',jp:'へんじゃありません'},{label:'Past +',jp:'へんでした'},{label:'Past −',jp:'へんじゃありませんでした'},{label:'+ Noun',jp:'へんな＋N'}],
  'へん':[{label:'Pres. +',jp:'へんです'},{label:'Pres. −',jp:'へんじゃありません'},{label:'Past +',jp:'へんでした'},{label:'Past −',jp:'へんじゃありませんでした'},{label:'+ Noun',jp:'へんな＋N'}],
  '片付けます':[{label:'Pres. +',jp:'片付けます'},{label:'Pres. −',jp:'片付けません'},{label:'Past +',jp:'片付けました'},{label:'Past −',jp:'片付けませんでした'},{label:'Dictionary',jp:'かたづける'},{label:'て-form',jp:'かたづけて'},{label:'ない form',jp:'かたづけない'}],
  '片付けます#G2':[{label:'Pres. +',jp:'片付けます'},{label:'Pres. −',jp:'片付けません'},{label:'Past +',jp:'片付けました'},{label:'Past −',jp:'片付けませんでした'},{label:'Dictionary',jp:'かたづける'},{label:'て-form',jp:'かたづけて'},{label:'ない form',jp:'かたづけない'}],
  'かたづけます#G2':[{label:'Pres. +',jp:'かたづけます'},{label:'Pres. −',jp:'かたづけません'},{label:'Past +',jp:'かたづけました'},{label:'Past −',jp:'かたづけませんでした'},{label:'Dictionary',jp:'かたづける'},{label:'て-form',jp:'かたづけて'},{label:'ない form',jp:'かたづけない'}],
  'かたづけます':[{label:'Pres. +',jp:'かたづけます'},{label:'Pres. −',jp:'かたづけません'},{label:'Past +',jp:'かたづけました'},{label:'Past −',jp:'かたづけませんでした'},{label:'Dictionary',jp:'かたづける'},{label:'て-form',jp:'かたづけて'},{label:'ない form',jp:'かたづけない'}],
  '着ます':[{label:'Pres. +',jp:'着ます'},{label:'Pres. −',jp:'着ません'},{label:'Past +',jp:'着ました'},{label:'Past −',jp:'着ませんでした'},{label:'Dictionary',jp:'きる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'きない'}],
  '着ます#G2':[{label:'Pres. +',jp:'着ます'},{label:'Pres. −',jp:'着ません'},{label:'Past +',jp:'着ました'},{label:'Past −',jp:'着ませんでした'},{label:'Dictionary',jp:'きる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'きない'}],
  'きます#G2':[{label:'Pres. +',jp:'きます'},{label:'Pres. −',jp:'きません'},{label:'Past +',jp:'きました'},{label:'Past −',jp:'きませんでした'},{label:'Dictionary',jp:'きる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'きない'}],
  '入れます':[{label:'Pres. +',jp:'入れます'},{label:'Pres. −',jp:'入れません'},{label:'Past +',jp:'入れました'},{label:'Past −',jp:'入れませんでした'},{label:'Dictionary',jp:'いれる'},{label:'て-form',jp:'いれて'},{label:'ない form',jp:'いれない'}],
  '入れます#G2':[{label:'Pres. +',jp:'入れます'},{label:'Pres. −',jp:'入れません'},{label:'Past +',jp:'入れました'},{label:'Past −',jp:'入れませんでした'},{label:'Dictionary',jp:'いれる'},{label:'て-form',jp:'いれて'},{label:'ない form',jp:'いれない'}],
  'いれます#G2':[{label:'Pres. +',jp:'いれます'},{label:'Pres. −',jp:'いれません'},{label:'Past +',jp:'いれました'},{label:'Past −',jp:'いれませんでした'},{label:'Dictionary',jp:'いれる'},{label:'て-form',jp:'いれて'},{label:'ない form',jp:'いれない'}],
  'いれます':[{label:'Pres. +',jp:'いれます'},{label:'Pres. −',jp:'いれません'},{label:'Past +',jp:'いれました'},{label:'Past −',jp:'いれませんでした'},{label:'Dictionary',jp:'いれる'},{label:'て-form',jp:'いれて'},{label:'ない form',jp:'いれない'}],
  '降ります#G1':[{label:'Pres. +',jp:'降ります'},{label:'Pres. −',jp:'降りません'},{label:'Past +',jp:'降りました'},{label:'Past −',jp:'降りませんでした'},{label:'Dictionary',jp:'ふる'},{label:'て-form',jp:'ふって'},{label:'ない form',jp:'ふらない'}],
  'ふります#G1':[{label:'Pres. +',jp:'ふります'},{label:'Pres. −',jp:'ふりません'},{label:'Past +',jp:'ふりました'},{label:'Past −',jp:'ふりませんでした'},{label:'Dictionary',jp:'ふる'},{label:'て-form',jp:'ふって'},{label:'ない form',jp:'ふらない'}],
  'ふります':[{label:'Pres. +',jp:'ふります'},{label:'Pres. −',jp:'ふりません'},{label:'Past +',jp:'ふりました'},{label:'Past −',jp:'ふりませんでした'},{label:'Dictionary',jp:'ふる'},{label:'て-form',jp:'ふって'},{label:'ない form',jp:'ふらない'}],
  '出かけます':[{label:'Pres. +',jp:'出かけます'},{label:'Pres. −',jp:'出かけません'},{label:'Past +',jp:'出かけました'},{label:'Past −',jp:'出かけませんでした'},{label:'Dictionary',jp:'でかける'},{label:'て-form',jp:'でかけて'},{label:'ない form',jp:'でかけない'}],
  '出かけます#G2':[{label:'Pres. +',jp:'出かけます'},{label:'Pres. −',jp:'出かけません'},{label:'Past +',jp:'出かけました'},{label:'Past −',jp:'出かけませんでした'},{label:'Dictionary',jp:'でかける'},{label:'て-form',jp:'でかけて'},{label:'ない form',jp:'でかけない'}],
  'でかけます#G2':[{label:'Pres. +',jp:'でかけます'},{label:'Pres. −',jp:'でかけません'},{label:'Past +',jp:'でかけました'},{label:'Past −',jp:'でかけませんでした'},{label:'Dictionary',jp:'でかける'},{label:'て-form',jp:'でかけて'},{label:'ない form',jp:'でかけない'}],
  'でかけます':[{label:'Pres. +',jp:'でかけます'},{label:'Pres. −',jp:'でかけません'},{label:'Past +',jp:'でかけました'},{label:'Past −',jp:'でかけませんでした'},{label:'Dictionary',jp:'でかける'},{label:'て-form',jp:'でかけて'},{label:'ない form',jp:'でかけない'}],
  '優しい':[{label:'Pres. +',jp:'やさしいです'},{label:'Pres. −',jp:'やさしくありません'},{label:'Past +',jp:'やさしかったです'},{label:'Past −',jp:'やさしくありませんでした'},{label:'Adverb',jp:'やさしく'}],
  'すてき':[{label:'Pres. +',jp:'すてきです'},{label:'Pres. −',jp:'すてきじゃありません'},{label:'Past +',jp:'すてきでした'},{label:'Past −',jp:'すてきじゃありませんでした'},{label:'+ Noun',jp:'すてきな＋N'}],
  '美しい':[{label:'Pres. +',jp:'うつくしいです'},{label:'Pres. −',jp:'うつくしくありません'},{label:'Past +',jp:'うつくしかったです'},{label:'Past −',jp:'うつくしくありませんでした'},{label:'Adverb',jp:'うつくしく'}],
  'うつくしい':[{label:'Pres. +',jp:'うつくしいです'},{label:'Pres. −',jp:'うつくしくありません'},{label:'Past +',jp:'うつくしかったです'},{label:'Past −',jp:'うつくしくありませんでした'},{label:'Adverb',jp:'うつくしく'}],
  '辞めます':[{label:'Pres. +',jp:'辞めます'},{label:'Pres. −',jp:'辞めません'},{label:'Past +',jp:'辞めました'},{label:'Past −',jp:'辞めませんでした'},{label:'Dictionary',jp:'やめる'},{label:'て-form',jp:'やめて'},{label:'ない form',jp:'やめない'}],
  '辞めます#G2':[{label:'Pres. +',jp:'辞めます'},{label:'Pres. −',jp:'辞めません'},{label:'Past +',jp:'辞めました'},{label:'Past −',jp:'辞めませんでした'},{label:'Dictionary',jp:'やめる'},{label:'て-form',jp:'やめて'},{label:'ない form',jp:'やめない'}],
  'やめます#G2':[{label:'Pres. +',jp:'やめます'},{label:'Pres. −',jp:'やめません'},{label:'Past +',jp:'やめました'},{label:'Past −',jp:'やめませんでした'},{label:'Dictionary',jp:'やめる'},{label:'て-form',jp:'やめて'},{label:'ない form',jp:'やめない'}],
  'やめます':[{label:'Pres. +',jp:'やめます'},{label:'Pres. −',jp:'やめません'},{label:'Past +',jp:'やめました'},{label:'Past −',jp:'やめませんでした'},{label:'Dictionary',jp:'やめる'},{label:'て-form',jp:'やめて'},{label:'ない form',jp:'やめない'}],
  '疲れます':[{label:'Pres. +',jp:'疲れます'},{label:'Pres. −',jp:'疲れません'},{label:'Past +',jp:'疲れました'},{label:'Past −',jp:'疲れませんでした'},{label:'Dictionary',jp:'つかれる'},{label:'て-form',jp:'つかれて'},{label:'ない form',jp:'つかれない'}],
  '疲れます#G2':[{label:'Pres. +',jp:'疲れます'},{label:'Pres. −',jp:'疲れません'},{label:'Past +',jp:'疲れました'},{label:'Past −',jp:'疲れませんでした'},{label:'Dictionary',jp:'つかれる'},{label:'て-form',jp:'つかれて'},{label:'ない form',jp:'つかれない'}],
  'つかれます#G2':[{label:'Pres. +',jp:'つかれます'},{label:'Pres. −',jp:'つかれません'},{label:'Past +',jp:'つかれました'},{label:'Past −',jp:'つかれませんでした'},{label:'Dictionary',jp:'つかれる'},{label:'て-form',jp:'つかれて'},{label:'ない form',jp:'つかれない'}],
  'つかれます':[{label:'Pres. +',jp:'つかれます'},{label:'Pres. −',jp:'つかれません'},{label:'Past +',jp:'つかれました'},{label:'Past −',jp:'つかれませんでした'},{label:'Dictionary',jp:'つかれる'},{label:'て-form',jp:'つかれて'},{label:'ない form',jp:'つかれない'}],
  'めずらしい':[{label:'Pres. +',jp:'めずらしいです'},{label:'Pres. −',jp:'めずらしくありません'},{label:'Past +',jp:'めずらしかったです'},{label:'Past −',jp:'めずらしくありませんでした'},{label:'Adverb',jp:'めずらしく'}],
  '遠い':[{label:'Pres. +',jp:'とおいです'},{label:'Pres. −',jp:'とおくありません'},{label:'Past +',jp:'とおかったです'},{label:'Past −',jp:'とおくありませんでした'},{label:'Adverb',jp:'とおく'}],
  'とおい':[{label:'Pres. +',jp:'とおいです'},{label:'Pres. −',jp:'とおくありません'},{label:'Past +',jp:'とおかったです'},{label:'Past −',jp:'とおくありませんでした'},{label:'Adverb',jp:'とおく'}],
  '迷います':[{label:'Pres. +',jp:'迷います'},{label:'Pres. −',jp:'迷いません'},{label:'Past +',jp:'迷いました'},{label:'Past −',jp:'迷いませんでした'},{label:'Dictionary',jp:'まよう'},{label:'て-form',jp:'まよって'},{label:'ない form',jp:'まよわない'}],
  '迷います#G1':[{label:'Pres. +',jp:'迷います'},{label:'Pres. −',jp:'迷いません'},{label:'Past +',jp:'迷いました'},{label:'Past −',jp:'迷いませんでした'},{label:'Dictionary',jp:'まよう'},{label:'て-form',jp:'まよって'},{label:'ない form',jp:'まよわない'}],
  'まよいます#G1':[{label:'Pres. +',jp:'まよいます'},{label:'Pres. −',jp:'まよいません'},{label:'Past +',jp:'まよいました'},{label:'Past −',jp:'まよいませんでした'},{label:'Dictionary',jp:'まよう'},{label:'て-form',jp:'まよって'},{label:'ない form',jp:'まよわない'}],
  'まよいます':[{label:'Pres. +',jp:'まよいます'},{label:'Pres. −',jp:'まよいません'},{label:'Past +',jp:'まよいました'},{label:'Past −',jp:'まよいませんでした'},{label:'Dictionary',jp:'まよう'},{label:'て-form',jp:'まよって'},{label:'ない form',jp:'まよわない'}],
  '答えます':[{label:'Pres. +',jp:'答えます'},{label:'Pres. −',jp:'答えません'},{label:'Past +',jp:'答えました'},{label:'Past −',jp:'答えませんでした'},{label:'Dictionary',jp:'こたえる'},{label:'て-form',jp:'こたえて'},{label:'ない form',jp:'こたえない'}],
  '答えます#G2':[{label:'Pres. +',jp:'答えます'},{label:'Pres. −',jp:'答えません'},{label:'Past +',jp:'答えました'},{label:'Past −',jp:'答えませんでした'},{label:'Dictionary',jp:'こたえる'},{label:'て-form',jp:'こたえて'},{label:'ない form',jp:'こたえない'}],
  'こたえます#G2':[{label:'Pres. +',jp:'こたえます'},{label:'Pres. −',jp:'こたえません'},{label:'Past +',jp:'こたえました'},{label:'Past −',jp:'こたえませんでした'},{label:'Dictionary',jp:'こたえる'},{label:'て-form',jp:'こたえて'},{label:'ない form',jp:'こたえない'}],
  'こたえます':[{label:'Pres. +',jp:'こたえます'},{label:'Pres. −',jp:'こたえません'},{label:'Past +',jp:'こたえました'},{label:'Past −',jp:'こたえませんでした'},{label:'Dictionary',jp:'こたえる'},{label:'て-form',jp:'こたえて'},{label:'ない form',jp:'こたえない'}],
};
const countersData = {
  'numbers':{label:'Numbers',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"/><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"/></svg>",desc:'Cardinal numbers used for counting and math.',items:[
    {jp:'一',reading:'いち',def:'1'},{jp:'二',reading:'に',def:'2'},{jp:'三',reading:'さん',def:'3'},
    {jp:'四',reading:'し / よん',def:'4'},{jp:'五',reading:'ご',def:'5'},{jp:'六',reading:'ろく',def:'6'},
    {jp:'七',reading:'しち / なな',def:'7'},{jp:'八',reading:'はち',def:'8'},{jp:'九',reading:'く / きゅう',def:'9'},
    {jp:'十',reading:'じゅう',def:'10'},
    {jp:'百',reading:'ひゃく',def:'100'},
    {jp:'二百',reading:'にひゃく',def:'200'},
    {jp:'三百',reading:'さんびゃく',def:'300 ⚠'},{jp:'四百',reading:'よんひゃく',def:'400'},
    {jp:'五百',reading:'ごひゃく',def:'500'},
    {jp:'六百',reading:'ろっぴゃく',def:'600 ⚠'},{jp:'七百',reading:'ななひゃく',def:'700'},
    {jp:'八百',reading:'はっぴゃく',def:'800 ⚠'},{jp:'九百',reading:'きゅうひゃく',def:'900'},
    {jp:'千',reading:'せん',def:'1,000'},
    {jp:'二千',reading:'にせん',def:'2,000'},
    {jp:'三千',reading:'さんぜん',def:'3,000 ⚠'},{jp:'四千',reading:'よんせん',def:'4,000'},
    {jp:'五千',reading:'ごせん',def:'5,000'},{jp:'六千',reading:'ろくせん',def:'6,000'},
    {jp:'七千',reading:'ななせん',def:'7,000'},
    {jp:'八千',reading:'はっせん',def:'8,000 ⚠'},{jp:'九千',reading:'きゅうせん',def:'9,000'},
    {jp:'一万',reading:'いちまん',def:'10,000'},
    {jp:'百万',reading:'ひゃくまん',def:'1,000,000'},
  ]},
  'native':{label:'Native counting',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v10\"/><path d=\"M7 12h10\"/></svg>",desc:'Traditional Japanese counting (ひとつ、ふたつ…) for general items up to 10.',items:[
    {jp:'一つ',reading:'ひとつ',def:'1'},{jp:'二つ',reading:'ふたつ',def:'2'},{jp:'三つ',reading:'みっつ',def:'3'},
    {jp:'四つ',reading:'よっつ',def:'4'},{jp:'五つ',reading:'いつつ',def:'5'},{jp:'六つ',reading:'むっつ',def:'6'},
    {jp:'七つ',reading:'ななつ',def:'7'},{jp:'八つ',reading:'やっつ',def:'8'},{jp:'九つ',reading:'ここのつ',def:'9'},
    {jp:'十',reading:'とお',def:'10'},
  ]},
  'months':{label:'Months',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/></svg>",desc:'Used to say which month of the year (January = 一月).',items:[
    {jp:'一月',reading:'いちがつ',def:'January'},{jp:'二月',reading:'にがつ',def:'February'},
    {jp:'三月',reading:'さんがつ',def:'March'},{jp:'四月',reading:'しがつ',def:'April'},
    {jp:'五月',reading:'ごがつ',def:'May'},{jp:'六月',reading:'ろくがつ',def:'June'},
    {jp:'七月',reading:'しちがつ',def:'July'},{jp:'八月',reading:'はちがつ',def:'August'},
    {jp:'九月',reading:'くがつ',def:'September'},{jp:'十月',reading:'じゅうがつ',def:'October'},
    {jp:'十一月',reading:'じゅういちがつ',def:'November'},{jp:'十二月',reading:'じゅうにがつ',def:'December'},
  ]},
  'weekdays':{label:'Days of Week',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><path d=\"M7 14h2\"/><path d=\"M11 14h2\"/><path d=\"M15 14h2\"/><path d=\"M7 18h2\"/><path d=\"M11 18h2\"/></svg>",desc:'Days of the week. Each ends in 曜日 (ようび).',items:[
    {jp:'月曜日',reading:'げつようび',def:'Monday'},{jp:'火曜日',reading:'かようび',def:'Tuesday'},
    {jp:'水曜日',reading:'すいようび',def:'Wednesday'},{jp:'木曜日',reading:'もくようび',def:'Thursday'},
    {jp:'金曜日',reading:'きんようび',def:'Friday'},{jp:'土曜日',reading:'どようび',def:'Saturday'},
    {jp:'日曜日',reading:'にちようび',def:'Sunday'},
  ]},
  'days':{label:'Days of Month',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><path d=\"M12 14v4\"/><path d=\"M10 16h4\"/></svg>",desc:'Dates in the month. 1st–10th are irregular; rest follow the pattern.',items:[
    {jp:'一日',reading:'ついたち',def:'1st'},{jp:'二日',reading:'ふつか',def:'2nd'},
    {jp:'三日',reading:'みっか',def:'3rd'},{jp:'四日',reading:'よっか',def:'4th'},
    {jp:'五日',reading:'いつか',def:'5th'},{jp:'六日',reading:'むいか',def:'6th'},
    {jp:'七日',reading:'なのか',def:'7th'},{jp:'八日',reading:'ようか',def:'8th'},
    {jp:'九日',reading:'ここのか',def:'9th'},{jp:'十日',reading:'とおか',def:'10th'},
    {jp:'十四日',reading:'じゅうよっか',def:'14th'},{jp:'二十日',reading:'はつか',def:'20th'},
    {jp:'二十四日',reading:'にじゅうよっか',def:'24th'},
  ]},
  'minutes':{label:'Minutes',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><polyline points=\"12 7 12 12 16 12\"/><path d=\"M12 3v2\"/></svg>",desc:'Minutes past the hour. Irregular: 1, 3, 4, 6, 8, 10 min.',items:[
    {jp:'一分',reading:'いっぷん',def:'1 min'},{jp:'二分',reading:'にふん',def:'2 min'},
    {jp:'三分',reading:'さんぷん',def:'3 min'},{jp:'四分',reading:'よんぷん',def:'4 min'},
    {jp:'五分',reading:'ごふん',def:'5 min'},{jp:'六分',reading:'ろっぷん',def:'6 min'},
    {jp:'七分',reading:'ななふん',def:'7 min'},{jp:'八分',reading:'はっぷん',def:'8 min'},
    {jp:'九分',reading:'きゅうふん',def:'9 min'},{jp:'十分',reading:'じゅっぷん',def:'10 min'},
    {jp:'三十分',reading:'さんじゅっぷん',def:'30 min'},{jp:'何分',reading:'なんぷん',def:'how many min?'},
  ]},
  'hours':{label:'Hours (o\'clock)',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><polyline points=\"12 6 12 12 15 15\"/></svg>",desc:'Time on the clock. 4 o\' clock = よじ (irregular).',items:[
    {jp:'一時',reading:'いちじ',def:'1:00'},{jp:'二時',reading:'にじ',def:'2:00'},
    {jp:'三時',reading:'さんじ',def:'3:00'},{jp:'四時',reading:'よじ',def:'4:00 ⚠'},
    {jp:'五時',reading:'ごじ',def:'5:00'},{jp:'六時',reading:'ろくじ',def:'6:00'},
    {jp:'七時',reading:'しちじ',def:'7:00'},{jp:'八時',reading:'はちじ',def:'8:00'},
    {jp:'九時',reading:'くじ',def:'9:00 ⚠'},{jp:'十時',reading:'じゅうじ',def:'10:00'},
    {jp:'十一時',reading:'じゅういちじ',def:'11:00'},{jp:'十二時',reading:'じゅうにじ',def:'12:00'},
    {jp:'何時',reading:'なんじ',def:'what time?'},
  ]},
  'duration':{label:'Hours (duration)',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 2h12\"/><path d=\"M6 22h12\"/><path d=\"M8 2v4a4 4 0 0 0 8 0V2\"/><path d=\"M8 22v-4a4 4 0 0 1 8 0v4\"/></svg>",desc:'Length of time in hours. Add 時間 after the number.',items:[
    {jp:'一時間',reading:'いちじかん',def:'1 hour'},{jp:'二時間',reading:'にじかん',def:'2 hours'},
    {jp:'三時間',reading:'さんじかん',def:'3 hours'},{jp:'四時間',reading:'よじかん',def:'4 hours'},
    {jp:'五時間',reading:'ごじかん',def:'5 hours'},{jp:'六時間',reading:'ろくじかん',def:'6 hours'},
    {jp:'七時間',reading:'しちじかん',def:'7 hours'},{jp:'八時間',reading:'はちじかん',def:'8 hours'},
    {jp:'九時間',reading:'くじかん',def:'9 hours'},{jp:'十時間',reading:'じゅうじかん',def:'10 hours'},
    {jp:'何時間',reading:'なんじかん',def:'how many hours?'},
  ]},
  'weeks':{label:'Weeks',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><rect x=\"6\" y=\"13\" width=\"12\" height=\"4\" rx=\"1\"/></svg>",desc:'Duration in weeks (〜週間). Note: いっ- for 1 week.',items:[
    {jp:'一週間',reading:'いっしゅうかん',def:'1 week'},{jp:'二週間',reading:'にしゅうかん',def:'2 weeks'},
    {jp:'三週間',reading:'さんしゅうかん',def:'3 weeks'},{jp:'四週間',reading:'よんしゅうかん',def:'4 weeks'},
    {jp:'五週間',reading:'ごしゅうかん',def:'5 weeks'},{jp:'六週間',reading:'ろくしゅうかん',def:'6 weeks'},
    {jp:'七週間',reading:'ななしゅうかん',def:'7 weeks'},{jp:'八週間',reading:'はっしゅうかん',def:'8 weeks'},
    {jp:'九週間',reading:'きゅうしゅうかん',def:'9 weeks'},{jp:'十週間',reading:'じゅっしゅうかん',def:'10 weeks'},
    {jp:'何週間',reading:'なんしゅうかん',def:'how many weeks?'},
  ]},
  'years':{label:'Years',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18\"/><path d=\"M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z\"/></svg>",desc:'Duration in years (〜年). Mostly regular.',items:[
    {jp:'一年',reading:'いちねん',def:'1 year'},{jp:'二年',reading:'にねん',def:'2 years'},
    {jp:'三年',reading:'さんねん',def:'3 years'},{jp:'四年',reading:'よねん',def:'4 years'},
    {jp:'五年',reading:'ごねん',def:'5 years'},{jp:'六年',reading:'ろくねん',def:'6 years'},
    {jp:'七年',reading:'ななねん',def:'7 years'},{jp:'八年',reading:'はちねん',def:'8 years'},
    {jp:'九年',reading:'きゅうねん',def:'9 years'},{jp:'十年',reading:'じゅうねん',def:'10 years'},
    {jp:'何年',reading:'なんねん',def:'how many years?'},
  ]},
  'people':{label:'People',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>",desc:'Counting people. 1 and 2 are highly irregular (ひとり、ふたり).',items:[
    {jp:'一人',reading:'ひとり',def:'1 person ⚠'},{jp:'二人',reading:'ふたり',def:'2 people ⚠'},
    {jp:'三人',reading:'さんにん',def:'3 people'},{jp:'四人',reading:'よにん',def:'4 people'},
    {jp:'五人',reading:'ごにん',def:'5 people'},{jp:'六人',reading:'ろくにん',def:'6 people'},
    {jp:'七人',reading:'しちにん / ななにん',def:'7 people'},{jp:'八人',reading:'はちにん',def:'8 people'},
    {jp:'九人',reading:'くにん / きゅうにん',def:'9 people'},{jp:'十人',reading:'じゅうにん',def:'10 people'},
    {jp:'何人',reading:'なんにん',def:'how many people?'},
  ]},
  'long':{label:'Long thin things',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17L17 3\"/><path d=\"M14 3h6v6\"/><path d=\"M7 13l1.5 1.5\"/><path d=\"M10.5 9.5L12 11\"/></svg>",desc:'Counting long, thin objects: pens, bottles, roads, trees. 本 (ほん).',items:[
    {jp:'一本',reading:'いっぽん',def:'1 ⚠'},{jp:'二本',reading:'にほん',def:'2'},
    {jp:'三本',reading:'さんぼん',def:'3 ⚠'},{jp:'四本',reading:'よんほん',def:'4'},
    {jp:'五本',reading:'ごほん',def:'5'},{jp:'六本',reading:'ろっぽん',def:'6 ⚠'},
    {jp:'七本',reading:'ななほん',def:'7'},{jp:'八本',reading:'はっぽん',def:'8 ⚠'},
    {jp:'九本',reading:'きゅうほん',def:'9'},{jp:'十本',reading:'じゅっぽん',def:'10 ⚠'},
    {jp:'何本',reading:'なんぼん',def:'how many?'},
  ]},
  'small':{label:'Small items',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"13\" r=\"7\"/><path d=\"M12 6c0-2 1-3 3-3\"/></svg>",desc:'Small, roughly round items — an alternative to つ. 個 (こ).',items:[
    {jp:'一個',reading:'いっこ',def:'1 ⚠'},{jp:'二個',reading:'にこ',def:'2'},
    {jp:'三個',reading:'さんこ',def:'3'},{jp:'四個',reading:'よんこ',def:'4'},
    {jp:'五個',reading:'ごこ',def:'5'},{jp:'六個',reading:'ろっこ',def:'6 ⚠'},
    {jp:'七個',reading:'ななこ',def:'7'},{jp:'八個',reading:'はちこ / はっこ',def:'8'},
    {jp:'九個',reading:'きゅうこ',def:'9'},{jp:'十個',reading:'じゅっこ',def:'10 ⚠'},
    {jp:'何個',reading:'なんこ',def:'how many?'},
  ]},
  'cups':{label:'Cups & bowls',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8h12v6a6 6 0 0 1-12 0z\"/><path d=\"M16 9h2a3 3 0 0 1 0 6h-2\"/><path d=\"M4 21h12\"/></svg>",desc:'Cupfuls, glassfuls and bowlfuls: カップ、グラス、ちゃわん. 杯 (はい).',items:[
    {jp:'一杯',reading:'いっぱい',def:'1 ⚠'},{jp:'二杯',reading:'にはい',def:'2'},
    {jp:'三杯',reading:'さんばい',def:'3 ⚠'},{jp:'四杯',reading:'よんはい',def:'4'},
    {jp:'五杯',reading:'ごはい',def:'5'},{jp:'六杯',reading:'ろっぱい',def:'6 ⚠'},
    {jp:'七杯',reading:'ななはい',def:'7'},{jp:'八杯',reading:'はっぱい',def:'8 ⚠'},
    {jp:'九杯',reading:'きゅうはい',def:'9'},{jp:'十杯',reading:'じゅっぱい',def:'10 ⚠'},
    {jp:'何杯',reading:'なんばい',def:'how many?'},
  ]},
  'flat':{label:'Thin flat things',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h9l5 5v11H5z\"/><polyline points=\"14 4 14 9 19 9\"/></svg>",desc:'うすいもの — paper, tickets, shirts, pizza. 枚 (まい).',items:[
    {jp:'一枚',reading:'いちまい',def:'1'},{jp:'二枚',reading:'にまい',def:'2'},
    {jp:'三枚',reading:'さんまい',def:'3'},{jp:'四枚',reading:'よんまい',def:'4'},
    {jp:'五枚',reading:'ごまい',def:'5'},{jp:'六枚',reading:'ろくまい',def:'6'},
    {jp:'七枚',reading:'ななまい',def:'7'},{jp:'八枚',reading:'はちまい',def:'8'},
    {jp:'九枚',reading:'きゅうまい',def:'9'},{jp:'十枚',reading:'じゅうまい',def:'10'},
    {jp:'何枚',reading:'なんまい',def:'how many?'},
  ]},
  'books':{label:'Books',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 4h5a2 2 0 0 1 2 2v14H4z\"/><path d=\"M20 4h-5a2 2 0 0 0-2 2v14h7z\"/></svg>",desc:'Bound things: books, magazines, notebooks. 冊 (さつ).',items:[
    {jp:'一冊',reading:'いっさつ',def:'1 ⚠'},{jp:'二冊',reading:'にさつ',def:'2'},
    {jp:'三冊',reading:'さんさつ',def:'3'},{jp:'四冊',reading:'よんさつ',def:'4'},
    {jp:'五冊',reading:'ごさつ',def:'5'},{jp:'六冊',reading:'ろくさつ',def:'6'},
    {jp:'七冊',reading:'ななさつ',def:'7'},{jp:'八冊',reading:'はっさつ',def:'8 ⚠'},
    {jp:'九冊',reading:'きゅうさつ',def:'9'},{jp:'十冊',reading:'じゅっさつ',def:'10 ⚠'},
    {jp:'何冊',reading:'なんさつ',def:'how many?'},
  ]},
  'laps':{label:'Laps / Times around',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 12a8 8 0 1 1-3-6.2\"/><polyline points=\"20 4 20 9 15 9\"/></svg>",desc:'Counting laps or times around something. 周 (しゅう).',items:[
    {jp:'一周',reading:'いっしゅう',def:'1 lap ⚠'},{jp:'二周',reading:'にしゅう',def:'2 laps'},
    {jp:'三周',reading:'さんしゅう',def:'3 laps'},{jp:'四周',reading:'よんしゅう',def:'4 laps'},
    {jp:'五周',reading:'ごしゅう',def:'5 laps'},{jp:'六周',reading:'ろくしゅう',def:'6 laps'},
    {jp:'七周',reading:'ななしゅう',def:'7 laps'},{jp:'八周',reading:'はっしゅう',def:'8 laps ⚠'},
    {jp:'九周',reading:'きゅうしゅう',def:'9 laps'},{jp:'十周',reading:'じゅっしゅう',def:'10 laps ⚠'},
    {jp:'何周',reading:'なんしゅう',def:'how many laps?'},
  ]},
  'front_back':{label:'Front & Back',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18\"/><polyline points=\"8 7 12 3 16 7\"/><polyline points=\"8 17 12 21 16 17\"/></svg>",desc:'Position from the front or back of a line/row.',items:[
    {jp:'まえ',reading:'まえ',def:'front / in front'},
    {jp:'うしろ',reading:'うしろ',def:'back / behind'},
    {jp:'まえから１ばんめ',reading:'まえからいちばんめ',def:'1st from the front'},
    {jp:'まえから２ばんめ',reading:'まえからにばんめ',def:'2nd from the front'},
    {jp:'まえから３ばんめ',reading:'まえからさんばんめ',def:'3rd from the front'},
    {jp:'まえから４ばんめ',reading:'まえからよんばんめ',def:'4th from the front'},
    {jp:'まえから５ばんめ',reading:'まえからごばんめ',def:'5th from the front'},
    {jp:'うしろから１ばんめ',reading:'うしろからいちばんめ',def:'1st from the back'},
    {jp:'うしろから２ばんめ',reading:'うしろからにばんめ',def:'2nd from the back'},
    {jp:'うしろから３ばんめ',reading:'うしろからさんばんめ',def:'3rd from the back'},
  ]},
  'left_right':{label:'Left & Right',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h18\"/><polyline points=\"7 8 3 12 7 16\"/><polyline points=\"17 8 21 12 17 16\"/></svg>",desc:'Position from the left or right side.',items:[
    {jp:'ひだり',reading:'ひだり',def:'left'},
    {jp:'みぎ',reading:'みぎ',def:'right'},
    {jp:'ひだりから１ばんめ',reading:'ひだりからいちばんめ',def:'1st from the left'},
    {jp:'ひだりから２ばんめ',reading:'ひだりからにばんめ',def:'2nd from the left'},
    {jp:'ひだりから３ばんめ',reading:'ひだりからさんばんめ',def:'3rd from the left'},
    {jp:'ひだりから４ばんめ',reading:'ひだりからよんばんめ',def:'4th from the left'},
    {jp:'ひだりから５ばんめ',reading:'ひだりからごばんめ',def:'5th from the left'},
    {jp:'みぎから１ばんめ',reading:'みぎからいちばんめ',def:'1st from the right'},
    {jp:'みぎから２ばんめ',reading:'みぎからにばんめ',def:'2nd from the right'},
    {jp:'みぎから３ばんめ',reading:'みぎからさんばんめ',def:'3rd from the right'},
  ]},
  'rows':{label:'Row number',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"4\" rx=\"1\"/><rect x=\"3\" y=\"10\" width=\"18\" height=\"4\" rx=\"1\"/><rect x=\"3\" y=\"16\" width=\"18\" height=\"4\" rx=\"1\"/></svg>",desc:'Counting rows (れつ) in a classroom or venue.',items:[
    {jp:'いちれつめ',reading:'いちれつめ',def:'1st row'},{jp:'にれつめ',reading:'にれつめ',def:'2nd row'},
    {jp:'さんれつめ',reading:'さんれつめ',def:'3rd row'},{jp:'よんれつめ',reading:'よんれつめ',def:'4th row'},
    {jp:'ごれつめ',reading:'ごれつめ',def:'5th row'},{jp:'ろくれつめ',reading:'ろくれつめ',def:'6th row'},
    {jp:'ななれつめ',reading:'ななれつめ',def:'7th row'},{jp:'はちれつめ',reading:'はちれつめ',def:'8th row'},
    {jp:'きゅうれつめ',reading:'きゅうれつめ',def:'9th row'},{jp:'じゅうれつめ',reading:'じゅうれつめ',def:'10th row'},
  ]},
};

const questionsData = [
  {jp:'なに / なん',reading:'なに / なん',eng:'What',cat:'Basic',example:'なにを しますか。'},
  {jp:'なにか',reading:'なにか',eng:'Something, Anything',cat:'Basic',example:'なにか ありますか。'},
  {jp:'だれ',reading:'だれ',eng:'Who',cat:'People',example:'だれと のみますか。'},
  {jp:'どこ',reading:'どこ',eng:'Where',cat:'Place',example:'どこで たべますか / どこへ いきますか。'},
  {jp:'どこの',reading:'どこの',eng:'Where is it from',cat:'Place',example:'どこの くるま ですか。'},
  {jp:'いつ',reading:'いつ',eng:'When',cat:'Time',example:'いつ ですか。'},
  {jp:'どう',reading:'どう',eng:'How',cat:'Description',example:'えいがは どう でしたか。'},
  {jp:'どうして',reading:'どうして',eng:'Why',cat:'Reason',example:'どうして ですか。'},
  {jp:'いくら',reading:'いくら',eng:'How much (cost)',cat:'Number',example:'いくら かかりますか / いくら ですか。'},
  {jp:'どれ',reading:'どれ',eng:'Which one (3+ options)',cat:'Selection',example:'３つの中で どれが いちばん 好きですか。'},
  {jp:'どちら',reading:'どちら',eng:'Which (of two options)',cat:'Selection',example:'AとBと どちらが 好きですか。'},
  {jp:'どんな',reading:'どんな',eng:'What kind of',cat:'Description',example:'どんな がっこう ですか / どんな いぬ ですか。'},
  {jp:'どうやって',reading:'どうやって',eng:'How, By what route',cat:'Method',example:'どうやって 行きますか。'},
  {jp:'どのぐらい / どのくらい',reading:'どのぐらい / どのくらい',eng:'How long, How much (duration)',cat:'Number',example:'どのぐらい かかりますか。'},
  {jp:'なにで',reading:'なにで',eng:'By what means, transportation',cat:'Method',example:'なにで 行きますか。'},
  {jp:'何時',reading:'なんじ',eng:'What time',cat:'Time',example:'なんじに おきますか。'},
  {jp:'何曜日',reading:'なんようび',eng:'What day of the week',cat:'Time',example:'なんようび ですか。'},
  {jp:'何月',reading:'なんがつ',eng:'What month',cat:'Time',example:'なんがつ ですか。'},
  {jp:'何日',reading:'なんにち',eng:'What day of the month',cat:'Time',example:'なんにち ですか。'},
  {jp:'何時間',reading:'なんじかん',eng:'How many hours',cat:'Number',example:'なんじかん かかりますか。'},
  {jp:'何日間',reading:'なんにちかん',eng:'How many days',cat:'Number',example:'なんにちかん かかりますか。'},
  {jp:'何人',reading:'なんにん',eng:'How many people',cat:'Number',example:'なんにん ですか。'},
  {jp:'何番',reading:'なんばん',eng:'What number',cat:'Number',example:'でんわばんごうは なんばん ですか。'},
  {jp:'どうしましたか',reading:'どうしましたか',eng:'What happened?',cat:'Conversational',example:'どうしましたか。'},
  {jp:'〜てもいいですか',reading:'〜てもいいですか',eng:'Asking for permission (May I ~?)',cat:'Permission',example:'写真を とってもいいですか。'},
  {jp:'〜ましょうか',reading:'〜ましょうか',eng:'Offering to do, Shall I?',cat:'Invitation',example:'かばんを 持ちましょうか。'},
];
const extraCounterMap = {
  '一':'numbers','二':'numbers','三':'numbers','四':'numbers','五':'numbers','六':'numbers',
  '七':'numbers','八':'numbers','九':'numbers','十':'numbers','百':'numbers','千':'numbers','万':'numbers','一万':'numbers','百万':'numbers',
  '一つ':'native','二つ':'native','三つ':'native','四つ':'native','五つ':'native',
  '六つ':'native','七つ':'native','八つ':'native','九つ':'native',
  '一月':'months','二月':'months','三月':'months','四月':'months','五月':'months','六月':'months',
  '七月':'months','八月':'months','九月':'months','十月':'months','十一月':'months','十二月':'months',
  '今月':'months','来月':'months','先月':'months','毎月':'months','〜月':'months',
  '月曜日':'weekdays','火曜日':'weekdays','水曜日':'weekdays','木曜日':'weekdays',
  '金曜日':'weekdays','土曜日':'weekdays','日曜日':'weekdays','曜日':'weekdays',
  '一日':'days','二日':'days','三日':'days','四日':'days','五日':'days','六日':'days',
  '七日':'days','八日':'days','九日':'days','十日':'days','十四日':'days','二十日':'days',
  '今日':'days','毎日':'days','〜日':'days',
  '一分':'minutes','二分':'minutes','三分':'minutes','四分':'minutes','五分':'minutes',
  '六分':'minutes','七分':'minutes','八分':'minutes','九分':'minutes','十分':'minutes','三十分':'minutes','〜分':'minutes',
  '一時':'hours','二時':'hours','三時':'hours','何時':'hours',
  '一時間':'duration','二時間':'duration','三時間':'duration','時間':'duration','何時間':'duration',
  '一周':'laps','二周':'laps','三周':'laps','四周':'laps','五周':'laps',
  '六周':'laps','七周':'laps','八周':'laps','九周':'laps','十周':'laps',
  '一週間':'weeks','二週間':'weeks','先週':'weeks','今週':'weeks','来週':'weeks','毎週':'weeks',
  '一年':'years','二年':'years','三年':'years','今年':'years','来年':'years','去年':'years','毎年':'years',
  '一人':'people','二人':'people','三人':'people','四人':'people','五人':'people',
  '六人':'people','七人':'people','八人':'people','九人':'people','十人':'people',
  '一本':'long','二本':'long','三本':'long','四本':'long','五本':'long',
  '六本':'long','七本':'long','八本':'long','九本':'long','十本':'long',
  '一個':'small','二個':'small','三個':'small','何個':'small',
  '一杯':'cups','二杯':'cups','三杯':'cups','何杯':'cups',
  '一枚':'flat','二枚':'flat','三枚':'flat','何枚':'flat',
  '一冊':'books','二冊':'books','三冊':'books','何冊':'books',
  'まえ':'front_back','うしろ':'front_back','ひだり':'left_right','みぎ':'left_right',
  'いちれつめ':'rows','にれつめ':'rows','さんれつめ':'rows',
  '前':'front_back','後ろ':'front_back','右':'left_right','左':'left_right',
};
const sem = 'S1';
let currentTab = 'words';
const scrollPositions = {words:0,grammar:0,sheets:0};
let currentSearch = '';
let preSearchScrollPos = null; // scroll position saved before renderAll() takes over
// Every filter is an independent switch: picking Verb does not un-pick Noun,
// and several may be on at once. Within a set the members are alternatives
// (Noun OR Verb); across sets they narrow (Noun AND kanji level 3).
const activeFilters = new Set();     // Noun, Verb, … and Kanji (list membership)
const activeSubFilters = new Set();  // G1–G3 for verbs, i/na for adjectives
// Hide the kanji you only have to read, leaving the ones you must write.
let hideReadOnly = false;
let activeCounterOnly = false;   // show only words that have a counter table
const activeKinds = new Set();   // Question, Counter, Greeting, … on an expression
const activeKanjiLevels = new Set(); // KL1–KL8 / SIGN filter chips in the Words tab
const activeGramLevels = new Set();  // L1–L12 chips in the Grammar tab

// Per-tab state memory
const tabState = {
  words:   {search:'', filter:null, subFilter:null, showRead:true, showWrite:true},
  grammar: {search:'', filter:null, subFilter:null},
  sheets:  {search:'', sheetType:'verbs', sheetLvls:new Set(), kanjiModes:new Set(['read','write'])}
};
// Per-sheet-sub-tab state: remembers level filters and kanji modes independently per sheet tab
const sheetTabStates = {
  verbs:  {lvls: new Set()},
  adj:    {lvls: new Set()},
  nouns:  {lvls: new Set()},
  kanji:  {lvls: new Set(), modes: new Set(['read','write'])},
  expr:   {lvls: new Set()},
};
function saveTabState(tab){
  if(!tabState[tab]) return;
  tabState[tab].search    = currentSearch;
  tabState[tab].filter    = [...activeFilters];
  tabState[tab].subFilter = [...activeSubFilters];
  if(tab === 'words'){
    tabState[tab].readOnly  = hideReadOnly;
  }
  if(tab === 'sheets'){
    tabState[tab].sheetType  = currentSheetType;
    // Save active tab's live state into sheetTabStates before persisting
    if(sheetTabStates[currentSheetType]){
      sheetTabStates[currentSheetType].lvls = new Set(activeSheetLvls);
      if(currentSheetType === 'kanji') sheetTabStates['kanji'].modes = new Set(activeKanjiModes);
    }
    // Snapshot all sheet tab states
    tabState[tab].sheetTabStates = {};
    for(const k of Object.keys(sheetTabStates)){
      tabState[tab].sheetTabStates[k] = {lvls: new Set(sheetTabStates[k].lvls)};
      if(k === 'kanji') tabState[tab].sheetTabStates[k].modes = new Set(sheetTabStates['kanji'].modes);
    }
  }
}
function restoreTabState(tab){
  if(!tabState[tab]) return;
  currentSearch   = tabState[tab].search    || '';
  activeFilters.clear();    (tabState[tab].filter    || []).forEach(x=>activeFilters.add(x));
  activeSubFilters.clear(); (tabState[tab].subFilter || []).forEach(x=>activeSubFilters.add(x));
  if(tab === 'words'){
    hideReadOnly  = tabState[tab].readOnly === true;
  }
  if(tab === 'sheets'){
    currentSheetType = tabState[tab].sheetType  || 'verbs';
    // Restore all sheet tab states if saved
    if(tabState[tab].sheetTabStates){
      for(const k of Object.keys(sheetTabStates)){
        if(tabState[tab].sheetTabStates[k]){
          sheetTabStates[k].lvls = new Set(tabState[tab].sheetTabStates[k].lvls);
          if(k === 'kanji' && tabState[tab].sheetTabStates[k].modes)
            sheetTabStates['kanji'].modes = new Set(tabState[tab].sheetTabStates[k].modes);
        }
      }
    }
    // Restore the active sheet tab's state into live variables
    activeSheetLvls  = new Set((sheetTabStates[currentSheetType]||{}).lvls);
    activeKanjiModes = new Set((sheetTabStates['kanji']||{modes:new Set(['read','write'])}).modes);
  }
  const searchEl = document.getElementById('main-search');
  const clearEl  = document.getElementById('search-clear');
  if(searchEl) searchEl.value = currentSearch;
  if(clearEl)  clearEl.classList.toggle('visible', currentSearch.length > 0);
}
function applyFilterVisuals(){
  // clear all non-kanji filter buttons and sub-panels
  document.querySelectorAll('.float-btn').forEach(b=>{ if(!b.id.startsWith('kflt')) b.classList.remove('active'); });
  document.querySelectorAll('.ff-subs').forEach(s=>s.classList.remove('visible'));
  // restore pos filter button
  activeFilters.forEach(f=>{
    const fb = document.getElementById('flt-'+f);
    if(fb) fb.classList.add('active');
  });
  activeSubFilters.forEach(sub=>{
    const sb = document.getElementById('flt-'+sub);
    if(sb) sb.classList.add('active');
  });
  _syncSubRows();
  // restore the read-only chip
  _syncEyeBtn();
  if(activeFilters.has('Kanji') || activeKanjiLevels.size || hideReadOnly){
    const sk=document.getElementById('sub-Kanji'); if(sk) sk.classList.add('visible');
  }
  const cf = document.getElementById('flt-coun');
  if(cf) cf.classList.toggle('active', activeCounterOnly);
  document.querySelectorAll('[data-kindfilter]').forEach(b=>b.classList.toggle('active', activeKinds.has(b.dataset.kindfilter)));
  // a chosen kind keeps its row out, the way a kanji level keeps sub-Kanji out
  if(activeKinds.size){ const se=document.getElementById('sub-Expr'); if(se) se.classList.add('visible'); }
  KANJI_LEVELS.forEach(kl=>{
    const b = document.getElementById('kflt-'+kl);
    if(b) b.classList.toggle('active', activeKanjiLevels.has(kl));
  });
  _updateFilterBadge();
}

// What an expression actually does. Without it the Expr pile is one flat
// heap of 45 unrelated things: a greeting, a question word and a sentence
// pattern all read the same. Greetings already carried a kind; the rest are
// named here so every expression can be told apart and filtered.
const EXPR_KIND = {
  "何":"Question",
  "いくら":"Question",
  "どこの":"Question",
  "だれ":"Question",
  "どう":"Question",
  "どんな":"Question",
  "どのぐらい":"Question",
  "いつ":"Question",
  "どこ":"Question",
  "なにで":"Question",
  "どうやって":"Question",
  "どちら":"Question",
  "どれ":"Question",
  "どうして":"Question",
  "どうしましたか":"Question",
  "何番":"Counter",
  "何時":"Counter",
  "何時間":"Counter",
  "何日間":"Counter",
  "何曜日":"Counter",
  "何月":"Counter",
  "何日":"Counter",
  "何人":"Counter",
  "ましょうか":"Pattern",
  "てもいいですか":"Pattern",
  "〜について":"Pattern",
  "下さい":"Pattern",
  "クラスの後":"Time",
  "だけ":"Amount",
  "たくさん":"Amount",
  "何か":"Amount",
  "あとで":"Time",
  "時間通り":"Time",
};
const _exprKind = w => w.kind || (w.pos==='Expr' ? (EXPR_KIND[w.word] || EXPR_KIND[w.reading] || '') : '');
const EXPR_KINDS = ['Question','Counter','Greeting','Pattern','Amount','Time'];

// Adj type lookup (い vs な)
const adjType = {};
(function(){
  const v = vocabData[sem] || {};
  for(const lvl of Object.keys(v)){
    for(const w of v[lvl]){
      if(w.pos === 'Adj'){
        // Use explicit adj field from source, fallback to ending check
        if(w.adj) adjType[w.word] = w.adj;
        else {
          const check = w.reading || w.word;
          adjType[w.word] = check.endsWith('い') ? 'i' : 'na';
        }
      }
    }
  }
})();

// Counter type for each word
// Study sheets are derived from the same lists the Words tab uses, so the two
// can never drift apart. lvl is the lesson number; 'EXPR' for the leftovers.
const sheetData = (function(){
  const lvlNum = l => l==='EXPR' ? 'EXPR' : l.replace('L','');
  const verbs=[], adj=[], nouns=[];
  for(const [lvl,arr] of Object.entries(vocabData[sem]||{})){
    for(const w of arr){
      const base={word:w.word, reading:w.reading||'', eng:w.def, lvl:lvlNum(lvl)};
      if(w.pos==='Verb'){
        const t=(w.grp&&(conjLookup[w.word+'#'+w.grp]||conjLookup[w.reading+'#'+w.grp]))||conjLookup[w.word]||conjLookup[w.reading]||[];
        const f=l=>{const x=t.find(y=>y.label===l);return x?x.jp:'';};
        verbs.push({...base, dict:f('Dictionary'), te:f('て-form'), grp:(w.grp||'G1').replace('G','')});
      } else if(w.pos==='Adj'){
        adj.push({...base, adj:adjType[w.word]||'na'});
      } else if(w.pos==='Noun'){
        nouns.push(base);
      }
    }
  }
  const kanji=[];
  for(const [kl,arr] of Object.entries(kanjiData[sem]||{}))
    for(const k of arr) kanji.push({kanji:k.kanji, reading:k.reading||'', meaning:k.meaning||'', mode:k.mode, kl});
  return {verbs, adj, nouns, kanji};
})();

const counTypeMap = {};
(function(){
  for(const [key,cat] of Object.entries(countersData)){
    for(const item of cat.items){
      counTypeMap[item.jp] = {key,label:cat.label,icon:cat.icon};
    }
  }
})();

function hasKanji(str){return /[\u4e00-\u9faf\u3400-\u4dbf]/.test(str);}
function rubyHTML(word,reading,style){const hasRd=hasKanji(word)&&reading;const rtStyle=hasRd&&[...reading].length===1?' style="text-align:center;text-align-last:center"':'';const rt=hasRd?'<rt'+rtStyle+'>'+reading+'</rt>':'';const st=style?' style="'+style+'"':'';return '<ruby class="card-ruby notranslate" translate="no"'+st+'>'+word+rt+'</ruby>';}
function toggleTranslator(){
  const panel=document.getElementById('translator-panel');
  const btn=document.querySelector('.translator-toggle');
  const isHidden=panel.classList.contains('hidden');
  if(isHidden){
    // open: hide button, animate panel in
    btn.style.display='none';
    panel.classList.remove('hidden');
    panel.classList.add('animating');
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      panel.classList.remove('animating');
      panel.classList.add('open');
    }));
  } else {
    // close: animate out, then hide panel and show button
    panel.classList.remove('open');
    panel.classList.add('animating');
    setTimeout(()=>{
      panel.classList.remove('animating');
      panel.classList.add('hidden');
      btn.style.display='flex';
    },220);
  }
}
function switchTool(tool,btn){}

let transDir='ja-en',transTimer=null;
function setDir(dir,btn){transDir=dir;document.querySelectorAll('.trans-dir-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');translate();}
function onTransInput(){clearTimeout(transTimer);transTimer=setTimeout(translate,600);}
async function translate(){const input=document.getElementById('trans-input').value.trim();const output=document.getElementById('trans-output');if(!input){output.innerHTML='<span class="trans-placeholder">Translation will appear here</span>';return;}output.innerHTML='<span class="trans-placeholder">Translating…</span>';const prompt=transDir==='ja-en'?'Translate to English, reply ONLY with translation:\n'+input:'Translate to Japanese, reply ONLY with Japanese:\n'+input;try{const res=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC9p7uPtOA4Y9BLqBbZCNrMFnGmBz8WVXA',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})});const data=await res.json();output.textContent=data.candidates?.[0]?.content?.parts?.[0]?.text||'Failed';}catch(e){output.innerHTML='<span class="trans-placeholder">Failed</span>';}}
function toggleSidebar(){ document.body.classList.toggle('open'); }

function setTab(tab, btn){
  // Tab change invalidates any in-progress search snapshot and pending retranslate
  _contentSnapshot = null; _snapshotMeta = null;
  clearTimeout(_suggRetranslateTimer);
  document.querySelectorAll('.s-btn').forEach(b=>b.classList.remove('active'));
  // Sync mobile bottom nav active state
  document.querySelectorAll('.mnav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  if(btn){
    btn.classList.add('active');
    // inject fresh ripple every click
    const old = btn.querySelector('.s-btn-ripple');
    if(old) old.remove();
    const ripple = document.createElement('span');
    ripple.className = 's-btn-ripple';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', ()=>ripple.remove(), {once:true});
  }

  const homeScreen = document.getElementById('home-screen');
  const content = document.getElementById('content');
  const transToggle = document.querySelector('.translator-toggle');
  const stickySearch = document.querySelector('.sticky-search');
  const prevTab = currentTab;

  // save state of tab we're leaving
  if(prevTab !== 'home') saveTabState(prevTab);

  currentTab = tab;

  // restore state of tab we're entering (or clear if home)
  if(tab !== 'home'){
    restoreTabState(tab);
  } else {
    currentSearch = ''; activeFilters.clear(); activeSubFilters.clear();
  }
  const _stb = document.getElementById('scroll-top-btn');
  if(_stb && tab === 'sheets') _stb.classList.remove('visible');

  function applyTab(){
    // Clear the outgoing-page class here, not in a requestAnimationFrame. rAF
    // is skipped when the tab is backgrounded, and page-exiting carries
    // pointer-events:none — leaving it stuck made the whole content area
    // unclickable, which is what killed the collapse toggle.
    content.classList.remove('page-exiting');
    if(tab === 'home'){
      homeScreen.style.display = 'flex';
      content.style.display = 'none';
      if(transToggle) transToggle.classList.remove('tt-visible');
      if(stickySearch) stickySearch.classList.add('ss-hidden');
      document.getElementById('words-floats').classList.remove('ff-visible');
      document.getElementById('gram-floats').classList.remove('ff-visible');
      _syncSecToggle();
      // reset bear bubble to replay its initial delay
      if(typeof window._restartBubble === 'function') window._restartBubble();
      // replay hs-logo-pop entrance animation on home re-entry
      var logo = document.getElementById('home-logo');
      if(logo){
        logo.style.animation = '';
        logo.style.opacity = '';
        logo.style.transform = '';
        void logo.offsetWidth; // force reflow so animation restarts
        logo.addEventListener('animationend', function refreezePop(e){
          if(e.animationName === 'hs-logo-pop'){
            logo.removeEventListener('animationend', refreezePop);
            logo.style.opacity = '1';
            logo.style.transform = 'none';
            logo.style.animation = 'none';
          }
        });
      }
      // fade home back in
      requestAnimationFrame(()=>{ homeScreen.classList.remove('fading'); });
      return;
    }
    if(typeof window._leaveBubble==='function') window._leaveBubble();
    homeScreen.style.display = 'none';
    homeScreen.classList.remove('fading');
    content.style.display = 'block';
    if(transToggle) setTimeout(()=>transToggle.classList.add('tt-visible'), 80);
    if(stickySearch) setTimeout(()=>stickySearch.classList.remove('ss-hidden'), 60);
    setTimeout(()=>{
      document.getElementById('words-floats').classList.toggle('ff-visible', tab==='words');
      document.getElementById('gram-floats').classList.toggle('ff-visible', tab==='grammar');
    }, 80);
    _syncSecToggle();
    applyFilterVisuals();
    render();
    requestAnimationFrame(()=>{
      document.getElementById('main').scrollTop = scrollPositions[tab]||0;
      content.classList.remove('page-exiting');
      content.classList.add('page-entering');
      content.addEventListener('animationend', ()=>content.classList.remove('page-entering'), {once:true});
    });
  }

  // --- transition out ---
  if(prevTab === 'home' && tab !== 'home'){
    // home → section: fade home out, then show section
    homeScreen.classList.add('fading');
    setTimeout(applyTab, 160);
  } else if(prevTab !== 'home' && tab === 'home'){
    // section → home: slide content out, show home
    // If leaving during a search, save the pre-search scroll (not the renderAll scroll)
    scrollPositions[prevTab] = preSearchScrollPos !== null ? preSearchScrollPos : document.getElementById('main').scrollTop;
    preSearchScrollPos = null;
    content.classList.add('page-exiting');
    setTimeout(applyTab, 120);
  } else if(prevTab !== 'home' && tab !== 'home'){
    // section → section: quick slide
    scrollPositions[prevTab] = preSearchScrollPos !== null ? preSearchScrollPos : document.getElementById('main').scrollTop;
    preSearchScrollPos = null;
    content.classList.add('page-exiting');
    setTimeout(applyTab, 120);
  } else {
    applyTab();
  }
}

// On the Words tab a filter is a display pass; elsewhere it still re-renders.
function _refilter(){ if(currentTab==='words') applyWordFilters(); else render(); }
// A sub-row is out whenever its own button is on or one of its chips is
// picked, so a chip stays reachable after you un-pick its parent.
const _SUB_OF = {Verb:['G1','G2','G3'], Adj:['i','na']};
function _syncSubRows(){
  const out = (id,on)=>{ const el=document.getElementById(id); if(el) el.classList.toggle('visible', !!on); };
  out('sub-Verb',  activeFilters.has('Verb')  || _SUB_OF.Verb.some(x=>activeSubFilters.has(x)));
  out('sub-Adj',   activeFilters.has('Adj')   || _SUB_OF.Adj.some(x=>activeSubFilters.has(x)));
  out('sub-Kanji', activeFilters.has('Kanji') || activeKanjiLevels.size || hideReadOnly);
  out('sub-Expr',  activeFilters.has('Expr')  || activeKinds.size);
}
function toggleFilter(pos, btn){
  if(activeFilters.has(pos)) activeFilters.delete(pos); else activeFilters.add(pos);
  btn.classList.toggle('active', activeFilters.has(pos));
  _syncSubRows();
  _updateFilterBadge();
  _refilter();
}

function toggleSubFilter(sub, btn){
  if(activeSubFilters.has(sub)) activeSubFilters.delete(sub); else activeSubFilters.add(sub);
  btn.classList.toggle('active', activeSubFilters.has(sub));
  _updateFilterBadge();
  _refilter();
}

// The Words filters live in a menu; the badge shows how many are active.
let _ffOpen = false;
function toggleCounterFilter(btn){
  activeCounterOnly = !activeCounterOnly;
  btn.classList.toggle('active', activeCounterOnly);
  _updateFilterBadge(); _refilter();
}
function toggleKindFilter(kind, btn){
  if(activeKinds.has(kind)) activeKinds.delete(kind); else activeKinds.add(kind);
  document.querySelectorAll('[data-kindfilter]').forEach(b=>b.classList.toggle('active', activeKinds.has(b.dataset.kindfilter)));
  _syncSubRows(); _updateFilterBadge(); _refilter();
}
// ── Grammar tab filters ───────────────────────────────────────────────────
// The same menu the Words tab uses, filtering on the lesson a rule is taught
// in. Filtering is a display pass over the rendered cards, not a re-render,
// so open sections and loaded slides survive it.
let _gfOpen = false;
function toggleGramFilterMenu(){
  _gfOpen = !_gfOpen;
  const p=document.getElementById('gf-panel'), t=document.getElementById('gf-toggle');
  if(p) p.classList.toggle('open', _gfOpen);
  if(t) t.classList.toggle('open', _gfOpen);
}
function toggleGramLevel(lv, btn){
  if(activeGramLevels.has(lv)) activeGramLevels.delete(lv); else activeGramLevels.add(lv);
  btn.classList.toggle('active', activeGramLevels.has(lv));
  _updateGramBadge(); applyGramFilters(true);
}
function clearGramFilters(){
  activeGramLevels.clear();
  document.querySelectorAll('#gf-panel .float-btn').forEach(b=>b.classList.remove('active'));
  _updateGramBadge(); applyGramFilters();
}
function _updateGramBadge(){
  const b=document.getElementById('gf-count');
  if(!b) return;
  const n=activeGramLevels.size;
  b.textContent = n ? String(n) : '';
  b.classList.toggle('on', n>0);
}
// autoOpen only when the user just changed the selection. Opening on every
// call meant any re-render — a keystroke, a tab return — forced the sections
// back open, so Collapse all could never stick.
function applyGramFilters(autoOpen){
  const on = activeGramLevels.size>0;
  document.querySelectorAll('.gram-section').forEach(sec=>{
    let shown=0;
    sec.querySelectorAll('.gram-fc').forEach(card=>{
      const pass = !on || activeGramLevels.has(card.dataset.lv);
      card.style.display = pass ? '' : 'none';
      if(pass) shown++;
    });
    // a section with nothing left in it does not show at all
    sec.style.display = shown ? '' : 'none';
    const c=sec.querySelector('.lt-count');
    if(c) c.textContent = shown+(shown===1?' rule':' rules');
    // Picking a level is a request to read those rules, so the sections that
    // still have some open themselves — a filter that leaves twelve collapsed
    // headers has not answered anything.
    const head=sec.querySelector('.gram-section-header');
    if(autoOpen && on && shown && head && !head.classList.contains('open')) toggleGramSection(head);
  });
  _syncSecToggle();
}
function toggleFilterMenu(){
  _ffOpen = !_ffOpen;
  const p=document.getElementById('ff-panel'), t=document.getElementById('ff-toggle');
  if(p) p.classList.toggle('open', _ffOpen);
  if(t) t.classList.toggle('open', _ffOpen);
}
function _activeFilterCount(){
  return activeFilters.size + activeSubFilters.size + (hideReadOnly?1:0) +
         (activeCounterOnly?1:0) + activeKinds.size + activeKanjiLevels.size;
}
function _updateFilterBadge(){
  const b=document.getElementById('ff-count');
  if(!b) return;
  const n=_activeFilterCount();
  b.textContent = n ? String(n) : '';
  b.classList.toggle('on', n>0);
}
function clearAllFilters(){
  activeFilters.clear(); activeSubFilters.clear(); activeKinds.clear(); activeKanjiLevels.clear();
  hideReadOnly=false; activeCounterOnly=false;
  _syncSubRows();
  applyFilterVisuals(); _refilter();
}
const _EYE_ON  = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
const _EYE_OFF = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.9 17.9A10.4 10.4 0 0 1 12 20C5 20 1 12 1 12a19 19 0 0 1 5.1-5.9M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 11 8 11 8a19 19 0 0 1-2.2 3.2M9.9 9.9a3 3 0 0 0 4.2 4.2"/><line x1="2" y1="2" x2="22" y2="22"/></svg>';
// The eye is a state, not a pressed button: the glyph says whether the
// read-only kanji are on screen or hidden. It never changes colour.
function toggleKanjiMode(mode, btn){
  hideReadOnly = !hideReadOnly;
  _syncEyeBtn();
  _syncSubRows();
  _updateFilterBadge();
  _refilter();
}
function _syncEyeBtn(){
  const b = document.getElementById('kflt-read');
  if(!b) return;
  b.innerHTML = hideReadOnly ? _EYE_OFF : _EYE_ON;
  b.title = hideReadOnly ? 'Read-only kanji hidden — click to show them' : 'Hide the read-only kanji';
  b.classList.remove('active');
}

// ── Romaji conversion ──
const _H2R=(()=>{
  const t={
    'あ':'a','い':'i','う':'u','え':'e','お':'o',
    'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
    'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
    'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
    'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
    'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
    'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
    'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
    'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
    'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
    'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
    'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
    'や':'ya','ゆ':'yu','よ':'yo',
    'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
    'わ':'wa','ゐ':'i','ゑ':'e','を':'wo','ん':'n',
    // digraphs
    'きゃ':'kya','きゅ':'kyu','きょ':'kyo',
    'しゃ':'sha','しゅ':'shu','しょ':'sho',
    'ちゃ':'cha','ちゅ':'chu','ちょ':'cho',
    'にゃ':'nya','にゅ':'nyu','にょ':'nyo',
    'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo',
    'みゃ':'mya','みゅ':'myu','みょ':'myo',
    'りゃ':'rya','りゅ':'ryu','りょ':'ryo',
    'ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo',
    'じゃ':'ja','じゅ':'ju','じょ':'jo',
    'びゃ':'bya','びゅ':'byu','びょ':'byo',
    'ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo',
    'ふぁ':'fa','ふぃ':'fi','ふぇ':'fe','ふぉ':'fo',
    'てぃ':'ti','でぃ':'di','とぅ':'tu','どぅ':'du',
    'うぁ':'wa','うぃ':'wi','うぇ':'we','うぉ':'wo',
    // katakana (map to same as hiragana via offset)
  };
  // build katakana map from hiragana offset 0x60
  const extra={};
  for(const[k,v] of Object.entries(t)){
    const kata=Array.from(k).map(c=>{const cp=c.codePointAt(0);return cp>=0x3041&&cp<=0x3096?String.fromCodePoint(cp+0x60):c;}).join('');
    extra[kata]=v;
  }
  Object.assign(t,extra);
  // katakana-only entries
  t['ヴ']='vu';t['ヴぁ']='va';t['ヴぃ']='vi';t['ヴぇ']='ve';t['ヴぉ']='vo';
  t['ア']='a';t['イ']='i';t['ウ']='u';t['エ']='e';t['オ']='o';
  return t;
})();

function _toRomajiRaw(str){
  if(!str) return '';
  str=str.toLowerCase();
  let r='',i=0;
  while(i<str.length){
    // try digraph first
    const two=str.slice(i,i+2);
    if(_H2R[two]){r+=_H2R[two];i+=2;continue;}
    const one=str[i];
    // small tsu → double next consonant
    if(one==='っ'||one==='ッ'){
      const nxt=str[i+1]?_H2R[str.slice(i+1,i+3)]||_H2R[str[i+1]]||'':'';
      r+=nxt?nxt[0]:'';i++;continue;
    }
    if(_H2R[one]){r+=_H2R[one];i++;continue;}
    // long vowel mark
    if(one==='ー'){r+=(r.slice(-1)||'');i++;continue;}
    // skip non-kana (spaces, kanji, punctuation) but keep latin as-is
    const cp=one.codePointAt(0);
    if(cp<0x3000) r+=one; // latin/ascii pass through
    i++;
  }
  return r;
}
// The suggestion scan converts the same few thousand forms on every keystroke.
// Converting each one once and remembering it turns that into a map lookup.
const _romajiCache = new Map();
function toRomaji(str){
  let v = _romajiCache.get(str);
  if(v === undefined){ v = _toRomajiRaw(str); _romajiCache.set(str, v); }
  return v;
}


const _NUMERAL_WORDS = {'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten','11':'eleven','12':'twelve','20':'twenty','100':'hundred','200':'two hundred','300':'three hundred','1000':'thousand','10000':'ten thousand'};
function matchesSearch(q, ...fields){
  if(!q) return true;
  const numWord = /^\d+$/.test(q) ? (_NUMERAL_WORDS[q]||null) : null;
  for(const f of fields){
    if(!f) continue;
    const s=f.toLowerCase();
    if(s.includes(q)) return true;
    if(toRomaji(s).includes(q)) return true;
    if(numWord && s.includes(numWord)) return true;
  }
  return false;
}


function clearSearch(){
  document.getElementById('main-search').value='';
  document.getElementById('search-clear').classList.remove('visible');
  document.getElementById('search-suggestions').classList.remove('visible');
  // Use preSearchScrollPos — scrollPositions[currentTab] may have been clobbered to 0
  // by the scroll listener when renderAll() reset the DOM and scrollTop
  const restorePos = preSearchScrollPos !== null ? preSearchScrollPos : scrollPositions[currentTab]||0;
  doSearch('');
  const mainEl = document.getElementById('main');
  if(mainEl) requestAnimationFrame(()=>{ mainEl.scrollTop = restorePos; });
}
let _renderTimer = null;
let _suggRetranslateTimer = null; // debounced retranslate for suggestions after typing stops
// Snapshot of the already-translated content div, taken on first search keystroke.
// Restored instantly when clearing search so GT doesn't need to re-translate.
let _contentSnapshot = null;
let _snapshotMeta = null; // {tab, sem, filter} — invalidate if these change

function doSearch(val){
  const wasEmpty = !currentSearch;
  currentSearch = val.trim().toLowerCase();
  const clr = document.getElementById('search-clear');
  if(clr) clr.classList.toggle('visible', currentSearch.length>0);
  updateSuggestions(val.trim());

  // Snapshot scroll on very first keystroke
  if(currentSearch && wasEmpty){
    const mainEl = document.getElementById('main');
    if(mainEl) preSearchScrollPos = mainEl.scrollTop;
    scrollPositions[currentTab] = preSearchScrollPos;
  }

  // Vocab/kanji: filterCardsInPlace is pure CSS show/hide so it can be nearly instant.
  // setTimeout(0) creates a task boundary so GTranSlate's MutationObserver processes
  // new suggestion nodes before card mutations arrive (works for single-char searches).
  // For multi-char searches typed quickly, suggestions rebuild multiple times before
  // GTranSlate can respond. _suggRetranslateTimer fires 300ms after typing stops and
  // explicitly retranslates whatever suggestion nodes are currently visible.
  if(currentTab==='words'){
    if(!currentSearch){ preSearchScrollPos = null; }
    clearTimeout(_renderTimer);
    _renderTimer = setTimeout(applyWordFilters, 0);
    // Debounced explicit retranslate for suggestions — fires after user pauses typing
    clearTimeout(_suggRetranslateTimer);
    if(currentSearch){
      _suggRetranslateTimer = setTimeout(()=>{ // 100ms: fast enough to feel instant, long enough to debounce rapid typing
        try {
          const m = document.cookie.match(/googtrans=\/[a-z-]+\/([a-z-]+)/i);
          if(!m || m[1]==='en') return;
          const lang = m[1];
          // Try clicking the GTranSlate language link directly
          let link = null;
          document.querySelectorAll('a').forEach(a=>{
            if(link) return;
            const oc = a.getAttribute('onclick')||'';
            const hr = a.getAttribute('href')||'';
            if(oc.includes("'en|"+lang+"'") || hr.includes("'en|"+lang+"'")) link = a;
          });
          if(link){ link.click(); return; }
          // Fallback: call doGTranslate directly
          if(typeof window.doGTranslate==='function') window.doGTranslate('en|'+lang);
        } catch(e){}
      }, 100);
    }
    return;
  }

  // Grammar/sheets rebuild the DOM so debounce to avoid overwhelming GTranSlate
  // Also snapshot the translated content on first keystroke for fast restore on clear
  if(currentSearch && wasEmpty){
    const contentEl = document.getElementById('content');
    if(contentEl){ _contentSnapshot = contentEl.innerHTML; _snapshotMeta = {tab:currentTab, sem, filter:[...activeFilters].sort().join(',')}; }
  }
  clearTimeout(_renderTimer);
  _renderTimer = setTimeout(()=>{
    if(currentSearch){
      renderAll();
      _retranslate();
    } else {
      preSearchScrollPos = null;
      const contentEl = document.getElementById('content');
      const meta = _snapshotMeta;
      if(contentEl && _contentSnapshot && meta &&
         meta.tab===currentTab && meta.sem===sem && meta.filter===[...activeFilters].sort().join(',')){
        contentEl.innerHTML = _contentSnapshot;
      } else {
        render();
      }
      _contentSnapshot = null; _snapshotMeta = null;
    }
  }, 180);
}

// Ask GTranSlate to re-translate the page after dynamic DOM changes.
// Rather than calling doGTranslate() raw (which GTranSlate may short-circuit),
// we find the hidden language link in the widget and click it — exactly what
// the user does manually, which is known to work.
function _retranslate(){
  setTimeout(()=>{
    try {
      const m = document.cookie.match(/googtrans=\/[a-z-]+\/([a-z-]+)/i);
      if(!m || m[1]==='en') return;
      const lang = m[1];
      // Find the GTranSlate anchor for the current language and click it
      let link = null;
      document.querySelectorAll('a').forEach(a=>{
        if(link) return;
        const oc = a.getAttribute('onclick')||'';
        const hr = a.getAttribute('href')||'';
        if(oc.includes("'en|"+lang+"'") || hr.includes("'en|"+lang+"'")) link = a;
      });
      if(link){ link.click(); return; }
      // Fallback: direct call if no link found
      if(typeof window.doGTranslate==='function') window.doGTranslate('en|'+lang);
    } catch(e){}
  }, 300);
}

// ── AUTOCOMPLETE ──
let _suggIndex = null;
let _suggActive = -1;
let _suggHits = [];

// The suggestion index costs ~2s to build. Doing that on the first keystroke
// is what made search feel stuck, so warm it while the browser is idle.
let _suggWarmed = false;
function _warmSuggIndex(){
  if(_suggWarmed) return;
  _suggWarmed = true;
  const go = () => {
    try{
      buildSuggIndex();
      // Convert every form now too, so the first keystroke is a map lookup
      // rather than a few thousand conversions.
      for(const item of (_suggIndex||[])) for(const f of item.searchForms) if(f) toRomaji(f.toLowerCase());
    }catch(e){}
  };
  if(window.requestIdleCallback) requestIdleCallback(go, {timeout:4000});
  else setTimeout(go, 1200);
}
function buildSuggIndex(){
  if(_suggIndex) return;
  _suggIndex = [];

  // ── VOCAB (with all conjugation forms) ──
  const vd = vocabData[sem]||{};
  for(const lvl of Object.keys(vd)){
    for(const w of vd[lvl]){
      const forms = [w.word, w.reading||'', w.def||''];
      const conj = conjLookup[w.word] || conjLookup[w.reading];
      if(conj) for(const f of conj) if(f.jp) forms.push(f.jp);
      if(w.pos==='Adj'){
        const base = w.reading||w.word;
        if(adjType[w.word]==='i'){
          const stem=base.replace(/い$/,'');
          forms.push(stem+'くない',stem+'かった',stem+'くなかった',stem+'くて');
        }
      }
      const _d = displayForm(w);
      if(_d!==w.word) forms.push(_d);
      _suggIndex.push({type:'vocab', jp:_d, read:w.reading||'', en:w.def, badge:w.pos, pos:w.pos, grp:w.grp||'', adjt:adjType[w.word]||'', exprKey:w.exprKey||'', searchForms:forms});
    }
  }

  // ── KANJI ──
  const kd = kanjiData[sem]||{};
  for(const lvl of Object.keys(kd)){
    for(const k of kd[lvl]){
      _suggIndex.push({type:'vocab', jp:k.kanji, read:k.reading||'', en:k.meaning, badge:'Kanji', pos:'Kanji', exprKey:'', searchForms:[k.kanji, k.reading||'', k.meaning||'']});
    }
  }

  // ── GRAMMAR RULES ──
  for(const sec of grammarSections){
    const isParticle = sec.id === 'REF1';
    // card-level entries only (no section-level)
    for(const card of sec.cards){
      const cForms = [card.label, card.meaning||'', card.pattern||'', card.note||'', sec.title, sec.en];
      (card.rows||[]).forEach(r=>{ cForms.push(r.jp, r.en); });
      // particles: show label (has JP particle + EN); others: show meaning (English only)
      const displayJp = isParticle ? card.label : '';
      const displayEn = isParticle ? '' : (card.meaning||card.label);
      _suggIndex.push({type:'grammar', jp:displayJp, read:'', en:displayEn, badge:'Grammar', secTitle:sec.title, cardLabel:card.label, searchForms:cForms});
    }
  }
}

function updateSuggestions(raw){
  const box = document.getElementById('search-suggestions');
  if(!raw || raw.length < 1){ box.classList.remove('visible'); return; }
  buildSuggIndex();
  const q = raw.toLowerCase();
  const qr = toRomaji(q);
  const numWord = /^\d+$/.test(q) ? (_NUMERAL_WORDS[q]||null) : null;

  const scoreItem = (item) => {
    for(const f of item.searchForms){
      if(!f) continue;
      const fl = f.toLowerCase();
      const fr = toRomaji(fl);
      if(fl === q || fr === q || fr === qr) return 3;
      if(numWord && fl === numWord) return 3;
      if(fl.startsWith(q) || fr.startsWith(q) || fr.startsWith(qr)) return 2;
      if(numWord && fl.startsWith(numWord)) return 2;
      if(fl.includes(q) || fr.includes(q) || fr.includes(qr)) return 1;
      if(numWord && fl.includes(numWord)) return 1;
    }
    return 0;
  };

  const seen = new Set();
  const scored = [];
  for(const item of _suggIndex){
    const key = item.type+'|'+item.jp+'|'+item.en;
    if(seen.has(key)) continue;
    const s = scoreItem(item);
    if(s > 0){ seen.add(key); scored.push({item, s}); }
  }
  scored.sort((a,b)=>b.s-a.s);

  const vocabHits = scored.filter(x=>x.item.type==='vocab').slice(0,4).map(x=>x.item);
  // For grammar: deduplicate by section - prefer card-level (has cardLabel) over section-level
  const gramScored = scored.filter(x=>x.item.type==='grammar');
  const seenSec = new Set();
  const gramHits = [];
  for(const {item} of gramScored){
    if(gramHits.length >= 2) break;
    const key = item.secTitle + '|' + (item.cardLabel||'');
    if(seenSec.has(key)) continue;
    // If we already have a card-level entry for this section, skip section-level
    if(!item.cardLabel && seenSec.has(item.secTitle+'|card')) continue;
    if(item.cardLabel) seenSec.add(item.secTitle+'|card');
    seenSec.add(key);
    gramHits.push(item);
  }
  const hits = [...vocabHits, ...gramHits];

  if(!hits.length){ box.classList.remove('visible'); return; }
  _suggActive = -1;
  _suggHits = hits;

  box.innerHTML = hits.map((h,i)=>{
    const jp=(h.jp||'').replace(/"/g,'&quot;');
    const read=(h.read||'').replace(/"/g,'&quot;');
    const en=(h.en||'').replace(/"/g,'&quot;');
    const pos=(h.pos||'').replace(/"/g,'&quot;');
    const ek=(h.exprKey||'').replace(/"/g,'&quot;');
    const secTitle=(h.secTitle||'').replace(/"/g,'&quot;');
    const cardLabel=(h.cardLabel||'').replace(/"/g,'&quot;');
    const isGram = h.type==='grammar';
    const badgeStyle = isGram ? 'background:var(--red);color:#fff;' : '';
    let innerHtml;
    if(isGram && !h.jp){
      // non-particle grammar: show English-only title (strip Japanese pattern if "JP — EN" format)
      const rawLabel = h.cardLabel || h.en || '';
      const engLabel = rawLabel.includes(' — ') ? rawLabel.split(' — ').slice(1).join(' — ') : rawLabel;
      innerHtml = `<span class="sugg-en" style="flex:1">${engLabel}</span>`;
    } else if(isGram && h.jp){
      // particles: label contains Japanese, no separate sugg-en
      innerHtml = `<span class="sugg-jp notranslate" translate="no" style="flex:1">${h.jp}</span>`;
    } else {
      innerHtml = `<span class="sugg-jp notranslate" translate="no">${h.jp}</span><span class="sugg-en">${h.en}</span>`;
    }
    return `<div class="sugg-item${isGram?' sugg-gram':''}" data-jp="${jp}" data-read="${read}" data-en="${en}" data-pos="${pos}" data-ek="${ek}" data-sec="${secTitle}" data-card="${cardLabel}" data-type="${h.type}" data-grp="${h.grp||''}" data-adjt="${h.adjt||''}" onpointerdown="event.preventDefault();suggPick(this)">
      ${innerHtml}
      <span class="sugg-badge" style="${badgeStyle}">${h.badge}</span>
    </div>`;
  }).join('');
  box.classList.add('visible');
}

function suggPick(el){
  const type=el.dataset.type;
  document.getElementById('search-suggestions').classList.remove('visible');
  document.getElementById('main-search').value='';
  document.getElementById('search-clear').classList.remove('visible');
  // Clear search state so the page restores to its pre-search state
  currentSearch = '';
  if(tabState[currentTab]) tabState[currentTab].search = '';

  if(type==='grammar'){
    const gramBtn = document.querySelector(".s-btn[onclick*=\"'grammar'\"]");
    const alreadyOnGrammar = currentTab === 'grammar';
    const secTitle = el.dataset.sec;
    const cardLabel = el.dataset.card;

    function doGramNav(){
      const headers = document.querySelectorAll('.gram-section-header');
      for(const h of headers){
        const titleEl = h.querySelector('.gram-section-title');
        if(titleEl && titleEl.textContent.trim()===secTitle){
          const wasOpen = h.classList.contains('open');
          if(!wasOpen) toggleGramSection(h);
          const mainEl = document.getElementById('main');
          const section = h.closest('.gram-section');
          // Wait for section-open transition (320ms) before scrolling
          setTimeout(()=>{
            if(mainEl && section){
              const top = section.getBoundingClientRect().top - mainEl.getBoundingClientRect().top + mainEl.scrollTop - 16;
              mainEl.scrollTo({top: Math.max(0, top), behavior:'smooth'});
            }
            if(cardLabel){
              setTimeout(()=>{
                const cards = h.nextElementSibling.querySelectorAll('.gram-fc');
                for(const card of cards){
                  const lbl = card.querySelector('.gram-fc-label');
                  if(lbl && lbl.textContent.trim()===cardLabel){
                    card.style.outline='2px solid var(--red)';
                    card.style.boxShadow='0 0 0 4px rgba(224,103,92,.15)';
                    const isLast = card === cards[cards.length - 1];
                    if(isLast && mainEl){
                      mainEl.scrollTo({top: mainEl.scrollHeight, behavior:'smooth'});
                    } else {
                      card.scrollIntoView({behavior:'smooth', block:'nearest'});
                    }
                    setTimeout(()=>{
                      card.style.outline='2px solid transparent';
                      card.style.boxShadow='0 0 0 4px rgba(224,103,92,0)';
                      setTimeout(()=>{ card.style.outline=''; card.style.boxShadow=''; }, 700);
                    }, 2000);
                    break;
                  }
                }
              }, 80);
            }
          }, wasOpen ? 20 : 360);
          break;
        }
      }
    }

    if(alreadyOnGrammar){
      // Use persistent set — survives re-renders caused by search filtering
      const openTitles = new Set(_gramOpenSections);
      currentSearch = '';
      renderGrammar();
      // Re-open sections that were open before
      document.querySelectorAll('.gram-section-header').forEach(h=>{
        const t = h.querySelector('.gram-section-title');
        if(t && openTitles.has(t.textContent.trim()) && !h.classList.contains('open')) toggleGramSection(h);
      });
      setTimeout(doGramNav, 30);
    } else {
      // search already cleared above; calling setTab will saveTabState(prevTab) with empty search
      if(gramBtn) setTab('grammar', gramBtn);
      // applyTab runs at ~120ms (page-exiting delay), then render() is synchronous.
      // Wait 200ms to guarantee renderGrammar() has populated the DOM before navigating.
      setTimeout(doGramNav, 200);
    }
  } else {
    // Re-render the current page (restores tabs/filters after renderAll replaced content)
    const restorePos = preSearchScrollPos !== null ? preSearchScrollPos : scrollPositions[currentTab]||0;
    render();
    const mainEl = document.getElementById('main');
    if(mainEl) requestAnimationFrame(()=>{ mainEl.scrollTop = restorePos; });
    openConjPopup(el.dataset.jp, el.dataset.read, el.dataset.en, el.dataset.pos, el.dataset.ek, '', el.dataset.grp||'', el.dataset.adjt||'');
  }
}

function pickSugg(idx){
  const item = _suggHits[idx];
  if(!item) return;
  const items = document.getElementById('search-suggestions').querySelectorAll('.sugg-item');
  if(items[idx]) suggPick(items[idx]);
}

function searchKeyNav(e){
  const box = document.getElementById('search-suggestions');
  // Enter: pick highlighted suggestion, or dismiss dropdown if nothing is highlighted
  if(e.key==='Enter'){
    const items = box.querySelectorAll('.sugg-item');
    if(_suggActive>=0 && items[_suggActive]){ e.preventDefault(); suggPick(items[_suggActive]); }
    else { box.classList.remove('visible'); }
    return;
  }
  if(e.key==='Escape'){ box.classList.remove('visible'); return; }
  const items = box.querySelectorAll('.sugg-item');
  if(!items.length) return;
  if(e.key==='ArrowDown'){ e.preventDefault(); _suggActive=Math.min(_suggActive+1,items.length-1); items.forEach((el,i)=>el.classList.toggle('active',i===_suggActive)); }
  else if(e.key==='ArrowUp'){ e.preventDefault(); _suggActive=Math.max(_suggActive-1,0); items.forEach((el,i)=>el.classList.toggle('active',i===_suggActive)); }
}

document.addEventListener('click', e=>{ if(!e.target.closest('.sticky-search')) document.getElementById('search-suggestions').classList.remove('visible'); });
// A menu left hanging open covers the cards behind it, so a click anywhere
// that is not the menu itself closes it.
document.addEventListener('click', e=>{
  if(_ffOpen && !e.target.closest('#words-floats')) toggleFilterMenu();
  if(_gfOpen && !e.target.closest('#gram-floats')) toggleGramFilterMenu();
});

function render(){
  if(currentTab==='words') renderWords();
  else if(currentTab==='grammar') renderGrammar();
  else if(currentTab==='sheets') renderSheets();
  // After building DOM for the Words tab, apply any active search in-place
  if(currentSearch && currentTab==='words') filterCardsInPlace(currentSearch);
}

// Show/hide existing vocab/kanji cards based on query, without rebuilding the DOM.
// This preserves GTranSlate's translations on the card elements.
function filterCardsInPlace(q){
  const el = document.getElementById('content');
  if(!el) return;
  let anyVisible = false;

  el.querySelectorAll('.vocab-card[data-sw], .kanji-card[data-sw]').forEach(card=>{
    const show = !q || matchesSearch(q, card.dataset.sw, card.dataset.sr, card.dataset.sd);
    card.style.display = show ? '' : 'none';
    if(show) anyVisible = true;
  });

  // Collapsible lesson sections: hide the ones with no hit, and open the ones
  // that have one so the matches are actually on screen. Without a query the
  // sections go back to whatever the user had open.
  // a kanji-level heading whose grid has no visible card must hide with it
  el.querySelectorAll('.kanji-sub-tag').forEach(tag=>{
    const grid = tag.nextElementSibling;
    const has = grid && [...grid.querySelectorAll('.vocab-card')].some(c=>c.style.display!=='none');
    tag.style.display = has ? '' : 'none';
    if(grid) grid.style.display = has ? '' : 'none';
  });
  el.querySelectorAll('.words-sec').forEach(sec=>{
    const header = sec.querySelector('.words-sec-header');
    const body   = sec.querySelector('.words-sec-body');
    if(!header || !body) return;
    const hasVisible = Array.from(body.querySelectorAll('.vocab-card')).some(c=>c.style.display!=='none');
    sec.style.display = (q && !hasVisible) ? 'none' : '';
    const shouldOpen = q ? hasVisible : _wordsOpenSections.has(header.dataset.lvl);
    header.classList.toggle('open', shouldOpen);
    body.classList.toggle('open', shouldOpen);
    sec.classList.toggle('open', shouldOpen);
  });

  // Empty state
  let emptyEl = el.querySelector('.search-no-results');
  if(!anyVisible && q){
    if(!emptyEl){
      emptyEl = document.createElement('div');
      emptyEl.className = 'search-no-results empty';
      emptyEl.innerHTML = `<span class="empty-jp">？</span>No results for "${q}".`;
      el.appendChild(emptyEl);
    }
  } else if(emptyEl){ emptyEl.remove(); }
}

const _KANJI_NUM = {'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10,'百':100,'千':1000,'万':10000};
function _kanjiSortVal(k){
  const n = _KANJI_NUM[k.kanji[0]];
  if(n !== undefined) return n * 100 + [...k.kanji].length;
  return 99900 + [...k.kanji].length;
}
function _sortKanjiLevel(arr){
  const NUM={'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10,'百':100,'千':1000,'万':10000};
  // Compute numeric prefix: val = number value, end = chars consumed
  function npx(k){const ch=[...k];let v=0,c=0,i=0;for(;i<ch.length;i++){if(NUM[ch[i]]===undefined)break;if(NUM[ch[i]]>=10){v+=(c||1)*NUM[ch[i]];c=0;}else c=NUM[ch[i]];}return{val:v+c,end:i};}
  // Group key: strip leading number kanji → use remainder as key; if no num prefix → use last char
  function gk(k){const{end}=npx(k),ch=[...k];return end>0&&end<ch.length?ch.slice(end).join(''):ch[ch.length-1];}
  const singles=arr.filter(e=>[...e.kanji].length===1);
  const compounds=arr.filter(e=>[...e.kanji].length>1);
  // Sort singles: numbers 1→∞ first, then others by reading
  singles.sort((a,b)=>{const na=NUM[a.kanji],nb=NUM[b.kanji];if(na!=null&&nb!=null)return na-nb;if(na!=null)return -1;if(nb!=null)return 1;return a.reading.localeCompare(b.reading,'ja');});
  // Build suffix groups
  const groups=new Map();
  for(const e of compounds){const k=gk(e.kanji);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(e);}
  // Sort within each group: sub-base entries first (if A's kanji is a proper suffix of B → A before B), then by numeric prefix value, then reading
  for(const[,grp] of groups){
    grp.sort((a,b)=>{
      const al=[...a.kanji].length,bl=[...b.kanji].length;
      if(al<bl&&b.kanji.endsWith(a.kanji))return -1;
      if(bl<al&&a.kanji.endsWith(b.kanji))return 1;
      const na=npx(a.kanji).val,nb=npx(b.kanji).val;
      if(na!==nb)return na-nb;
      return a.reading.localeCompare(b.reading,'ja');
    });
  }
  const singlesSet=new Set(singles.map(e=>e.kanji));
  const out=[]; const emitted=new Set();
  // Emit each single followed immediately by its matching suffix group
  for(const s of singles){
    out.push(s);
    if(groups.has(s.kanji)){out.push(...groups.get(s.kanji));emitted.add(s.kanji);}
  }
  // Remaining groups (suffix not a standalone): sort by group key locale
  [...groups.entries()].filter(([k])=>!emitted.has(k)).sort(([a],[b])=>a.localeCompare(b,'ja')).forEach(([,grp])=>out.push(...grp));
  return out;
}
// ── Words tab (vocabulary + kanji merged) ────────────────────────────────────
const WORD_LEVELS = ['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10','L11','L12','EXPR'];

// Every kanji character that appears anywhere in the class kanji list (L1–L8 + signs).
// A vocabulary word is written in kanji only when all of its kanji are in this set;
// anything else is shown in kana, exactly as the course expects you to read it.
const TAUGHT_KANJI = (function(){
  const set = new Set();
  const kd = kanjiData[sem]||{};
  for(const lv of Object.keys(kd)) for(const k of kd[lv]) for(const ch of k.kanji) if(hasKanji(ch)) set.add(ch);
  return set;
})();
function taughtWriting(word){
  const ks = [...word].filter(hasKanji);
  return ks.length>0 && ks.every(c=>TAUGHT_KANJI.has(c));
}
// Form actually shown on the card: kanji when taught, otherwise the kana reading.
function displayForm(w){
  if(!hasKanji(w.word)) return w.word;
  if(taughtWriting(w.word)) return w.word;
  return w.reading || w.word;
}
const _WARN='<svg class="warn-ico" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
// Sound-change marker: stored as ⚠ in the data, rendered as an icon.
const _warn = s => (s||'').split('⚠').join(_WARN);
const _ea = s=>(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
const _eq = s=>(s||'').replace(/'/g,"\\'");

// ── Kanji-list index ───────────────────────────────────────────────────────
// Every entry on the class kanji list, keyed by its surface form, so a word
// that is BOTH a vocabulary item and a kanji-list item can show both badges.
const KANJI_INDEX = (function(){
  const m = new Map();
  const kd = kanjiData[sem] || {};
  for(const kl of Object.keys(kd)) for(const k of kd[kl]){
    if(!m.has(k.kanji)) m.set(k.kanji, []);
    m.get(k.kanji).push({kl, mode:k.mode, part:k.part});
  }
  return m;
})();
const KANJI_LEVELS = ['KL1','KL2','KL3','KL4','KL5','KL6','KL7','KL8','SIGN'];
// Kanji-list entries that are NOT also vocabulary, grouped by kanji level.
const KANJI_BY_LEVEL = (function(){
  const byLvl = {};
  const vocab = new Set();
  for(const lvl of Object.keys(vocabData[sem]||{})) for(const w of vocabData[sem][lvl]) vocab.add(w.word);
  const kd = kanjiData[sem] || {};
  for(const kl of Object.keys(kd)) for(const k of kd[kl]){
    if(vocab.has(k.kanji)) continue;
    (byLvl[kl] = byLvl[kl] || []).push(k);
  }
  return byLvl;
})();
// Merge every KL badge a term carries: 電話 sits on both the KL5 and KL7 lists.
const _klNum = kl => kl==='SIGN' ? 99 : parseInt(kl.slice(2),10);
function _kanjiInfo(word){
  const hits = KANJI_INDEX.get(word);
  if(!hits) return null;
  const byLvl = new Map();
  for(const h of hits) if(!byLvl.has(h.kl)) byLvl.set(h.kl, h.mode);
  const entries = [...byLvl.entries()].map(([kl,mode])=>({kl,mode}))
                    .sort((a,b)=>_klNum(a.kl)-_klNum(b.kl));
  return {
    entries,
    levels: entries.map(e=>e.kl),
    // Shown by default: the level you first meet it at, and the final thing
    // asked of you — writing, if any level asks for writing.
    mode: entries.some(e=>e.mode==='write') ? 'write' : 'read',
  };
}
// Which level/mode a card shows: the one you picked, else the earliest.
function _klShown(entries){
  // entries run lowest level first
  const overall = entries.some(e=>e.mode==='write') ? 'write' : 'read';
  if(activeKanjiLevels.size){
    const sel = entries.filter(e=>activeKanjiLevels.has(e.kl));
    if(sel.length){
      // KL1–KL8 are a progression: 新聞 really is reading-only at KL5 and a
      // writing word at KL6, so the requirement comes from the highest level
      // you picked. サイン is not a stage in that progression — it is a
      // separate deck that reuses kanji you already write — so it must never
      // downgrade a term to read-only. 東 stays a writing kanji under サイン.
      const staged = sel.filter(e=>e.kl!=='SIGN');
      const mode = staged.length ? staged[staged.length-1].mode : overall;
      return {kl: sel[0].kl, mode};
    }
  }
  return {kl: entries[0].kl, mode: overall};
}
function _klBadge(kl){
  const label = kl==='SIGN' ? 'サイン' : kl;
  return `<span class="vc-kl-tag" title="Kanji list ${label}">${label}</span>`;
}

// Several parts of speech at once are alternatives, so a card need only match
// one of them. "Kanji" is not a part of speech but membership of the kanji
// list, so it is answered separately.
function _posPasses(pos, onKanjiList){
  if(!activeFilters.size) return true;
  for(const f of activeFilters){
    if(f==='Kanji' ? onKanjiList : pos===f) return true;
  }
  return false;
}
// Group and type chips narrow only the cards they can describe: picking G1
// says nothing about an adjective, so adjectives are left alone by it.
function _subPasses(pos, grp, adj){
  if(!activeSubFilters.size) return true;
  if(pos==='Verb'){
    const picked = _SUB_OF.Verb.filter(x=>activeSubFilters.has(x));
    return !picked.length || picked.includes(grp);
  }
  if(pos==='Adj'){
    const picked = _SUB_OF.Adj.filter(x=>activeSubFilters.has(x));
    return !picked.length || picked.includes(adj);
  }
  return true;
}
function _wordPasses(w){
  if(activeCounterOnly && !(extraCounterMap[w.word]||extraCounterMap[w.reading]||(counTypeMap[w.word]||{}).key)) return false;
  if(activeKinds.size && !activeKinds.has(_exprKind(w))) return false;
  // "Kanji" means "on the kanji list" — it must not short-circuit the level
  // and read-only chips that sit under it.
  if(!_posPasses(w.pos, !!KANJI_INDEX.get(w.word))) return false;
  if(!_subPasses(w.pos, w.grp, adjType[w.word])) return false;
  const ki = _kanjiInfo(w.word);
  // Kanji-level filter: when any level is picked, only kanji-list words show.
  if(activeKanjiLevels.size){
    if(!ki || !ki.levels.some(l=>activeKanjiLevels.has(l))) return false;
  }
  // Read-only is a kanji filter: it hides anything that is not a read-only
  // kanji, words that are not on the kanji list included.
  if(hideReadOnly && (!ki || ki.mode!=='read')) return false;
  return true;
}
function _kanjiPasses(k, kl){
  if(activeKinds.size && !activeKinds.has(EXPR_KIND[k.kanji]||'')) return false;
  if(activeCounterOnly && !(extraCounterMap[k.kanji]||extraCounterMap[k.reading]||(counTypeMap[k.kanji]||{}).key)) return false;
  // A kanji entry now states its real part of speech, so Noun or Verb must
  // reach it the same way it reaches a word. "Kanji" stays list membership.
  const kp = _kpos(k.kanji);
  if(!_posPasses(kp.pos, true)) return false;
  if(!_subPasses(kp.pos, kp.grp, kp.adj)) return false;
  if(activeKanjiLevels.size && !activeKanjiLevels.has(kl)) return false;
  if(hideReadOnly && k.mode==='read') return false;
  return true;
}
function _counterBadge(word,reading){
  const key = extraCounterMap[word] || extraCounterMap[reading] || (counTypeMap[word]||{}).key;
  if(!key || !countersData[key]) return '';
  const cat = countersData[key];
  return `<span class="vc-badge vc-coun-badge" title="${_ea(cat.label)} counter — tap for the table" onclick="openCounterPopup('${_eq(key)}','${_eq(cat.label)}',event)">${cat.icon}</span>`;
}
const _EYE='<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
const _PEN='<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
// The eye means read-only. A kanji you must write, you obviously must also
// read, so those carry no mark at all — the KL badge already says it is on
// the list.
function _kanjiDot(mode){
  return mode==='read'
    ? `<span class="vc-ind-dot dot-read" title="Read only — よみ, no writing">${_EYE}</span>`
    : '';
}


// A card's Japanese must fit the card. Long words step the type down, and
// kana-only ones may wrap, so nothing can spill past the border.
function _jpStyle(text){
  const n=[...String(text||'')].length;
  const fs = n<=4 ? 36 : n<=6 ? 29 : n<=8 ? 23 : n<=11 ? 19 : 16;
  return 'font-size:'+fs+'px';
}
function wordCardHTML(w, lvl){
  const at = adjType[w.word];
  const adjTag = w.pos==='Adj' ? `<span class="vc-adj-tag adj-${at||'na'}">${at==='i'?'い':'な'}</span>` : '';
  const grpTag = w.grp ? `<span class="vc-grp-tag grp-${w.grp}">${w.grp}</span>` : '';
  const coun   = _counterBadge(w.word, w.reading);
  const kind   = _exprKind(w);
  const kindTag= kind ? `<span class="vc-kind-tag" title="${_ea(kind)}">${_ea(kind)}</span>` : '';
  const ki     = _kanjiInfo(w.word);
  const shown  = ki ? _klShown(ki.entries) : null;
  const modeDot = shown ? _kanjiDot(shown.mode) : '';
  const klTag   = shown ? _klBadge(shown.kl) : '';
  const klModes = (ki && ki.entries.length>1)
    ? ' data-klmodes="'+ki.entries.map(e=>e.kl+':'+e.mode).join('|')+'"' : '';
  const disp   = displayForm(w);
  const rd     = (disp===w.reading) ? '' : (w.reading||'');
  const klData = ki ? ki.levels.join(' ') : '';
  return `<div class="vocab-card${ki?' is-kanji':''}" onclick="openConjPopup('${_eq(disp)}','${_eq(w.reading||'')}','${_eq(w.def)}','${w.pos}','${_eq(w.exprKey||'')}','${ki?ki.mode:''}','${w.grp||''}','${at||''}')" data-pos="${w.pos}" data-grp="${w.grp||''}" data-adjt="${at||''}" data-kl="${_ea(klData)}"${klModes} data-kmode="${shown?shown.mode:''}" data-kind="${_ea(kind||'')}" data-coun="${coun?'1':''}" data-sw="${_ea(w.word)} ${_ea(disp)}" data-sr="${_ea(w.reading||'')}" data-sd="${_ea(w.def)}">
    <div class="vc-left${rd?'':' vc-left-wrap'} notranslate" translate="no">${rubyHTML(disp,rd,_jpStyle(disp))}</div>
    <div class="vc-sep"></div>
    <div class="vc-right"><span class="vc-def">${w.def}</span></div>
    <div class="vc-badges">${coun}${adjTag}${grpTag}${kindTag}<span class="vc-badge pos-${w.pos}" style="position:static;">${w.pos}</span></div>
    <div class="vc-indicators">${modeDot}${klTag}<span class="vc-lvl-tag" title="Level ${lvl}">${lvl}</span></div>
  </div>`;
}

// Part of speech for kanji-list entries that are not also vocabulary. Without
// it a kanji card could only say "Kanji", which describes the list it comes
// from, not what the word does in a sentence. Anything absent is a noun —
// numbers, dates, places and compounds are the bulk of the list.
const KANJI_POS = {
  "分かる":{pos:"Verb",grp:"G1"},
  "会う":{pos:"Verb",grp:"G1"},
  "言う":{pos:"Verb",grp:"G1"},
  "話し合う":{pos:"Verb",grp:"G1"},
  "行く":{pos:"Verb",grp:"G1"},
  "聞く":{pos:"Verb",grp:"G1"},
  "話す":{pos:"Verb",grp:"G1"},
  "立つ":{pos:"Verb",grp:"G1"},
  "待つ":{pos:"Verb",grp:"G1"},
  "飲む":{pos:"Verb",grp:"G1"},
  "出す":{pos:"Verb",grp:"G1"},
  "入る":{pos:"Verb",grp:"G1"},
  "買う":{pos:"Verb",grp:"G1"},
  "書く":{pos:"Verb",grp:"G1"},
  "起こす":{pos:"Verb",grp:"G1"},
  "持つ":{pos:"Verb",grp:"G1"},
  "休む":{pos:"Verb",grp:"G1"},
  "読む":{pos:"Verb",grp:"G1"},
  "売る":{pos:"Verb",grp:"G1"},
  "帰る":{pos:"Verb",grp:"G1"},
  "走る":{pos:"Verb",grp:"G1"},
  "押":{pos:"Verb",grp:"G1"},
  "引":{pos:"Verb",grp:"G1"},
  "上げる":{pos:"Verb",grp:"G2"},
  "下げる":{pos:"Verb",grp:"G2"},
  "生きる":{pos:"Verb",grp:"G2"},
  "生まれる":{pos:"Verb",grp:"G2"},
  "入れる":{pos:"Verb",grp:"G2"},
  "出かける":{pos:"Verb",grp:"G2"},
  "出る":{pos:"Verb",grp:"G2"},
  "食べる":{pos:"Verb",grp:"G2"},
  "見せる":{pos:"Verb",grp:"G2"},
  "見る":{pos:"Verb",grp:"G2"},
  "起きる":{pos:"Verb",grp:"G2"},
  "売り切れる":{pos:"Verb",grp:"G2"},
  "気をつける":{pos:"Verb",grp:"G2"},
  "協力する":{pos:"Verb",grp:"G3"},
  "出席する":{pos:"Verb",grp:"G3"},
  "退院する":{pos:"Verb",grp:"G3"},
  "入院する":{pos:"Verb",grp:"G3"},
  "入学する":{pos:"Verb",grp:"G3"},
  "勉強する":{pos:"Verb",grp:"G3"},
  "来る":{pos:"Verb",grp:"G3"},
  "来ない":{pos:"Verb",grp:"G3"},
  "開":{pos:"Verb"},
  "閉":{pos:"Verb"},
  "良い":{pos:"Adj",adj:"i"},
  "明るい":{pos:"Adj",adj:"i"},
  "少ない":{pos:"Adj",adj:"i"},
  "早い":{pos:"Adj",adj:"i"},
  "元気な":{pos:"Adj",adj:"na"},
  "好きな":{pos:"Adj",adj:"na"},
  "大好きな":{pos:"Adj",adj:"na"},
  "大切な":{pos:"Adj",adj:"na"},
  "有名な":{pos:"Adj",adj:"na"},
  "先に":{pos:"Adv"},
  "少々":{pos:"Adv"},
  "後で":{pos:"Adv"},
  "時々":{pos:"Adv"},
  "クラスの後":{pos:"Expr"},
  "下さい":{pos:"Expr"},
};
const _kpos = w => KANJI_POS[w] || {pos:"Noun"};
// Kanji that are not also vocabulary. The level badge IS the kanji level here,
// so it is written once — no second copy of the same tag.
function kanjiCardHTML(k, kl){
  const coun = _counterBadge(k.kanji, k.reading);
  const label = kl==='SIGN' ? 'サイン' : kl;
  const kp = _kpos(k.kanji);
  const adjTag = kp.pos==='Adj' ? `<span class="vc-adj-tag adj-${kp.adj||'na'}">${kp.adj==='i'?'い':'な'}</span>` : '';
  const grpTag = kp.grp ? `<span class="vc-grp-tag grp-${kp.grp}">${kp.grp}</span>` : '';
  const kind = kp.pos==='Expr' ? (EXPR_KIND[k.kanji]||'') : '';
  const kindTag = kind ? `<span class="vc-kind-tag" title="${_ea(kind)}">${_ea(kind)}</span>` : '';
  return `<div class="vocab-card kanji-card is-kanji" onclick="openConjPopup('${_eq(k.kanji)}','${_eq(k.reading||'')}','${_eq(k.meaning||'')}','${kp.pos}','','${k.mode||''}','${kp.grp||''}','${kp.adj||''}')" data-pos="${kp.pos}" data-grp="${kp.grp||''}" data-adjt="${kp.adj||''}" data-kl="${kl}" data-kmode="${k.mode||''}" data-kind="${_ea(kind)}" data-coun="${coun?'1':''}" data-sw="${_ea(k.kanji)}" data-sr="${_ea(k.reading||'')}" data-sd="${_ea(k.meaning||'')}">
    <div class="vc-left notranslate" translate="no">${rubyHTML(k.kanji,k.reading||"",_jpStyle(k.kanji))}</div>
    <div class="vc-sep"></div>
    <div class="vc-right"><span class="vc-def">${k.meaning||''}</span></div>
    <div class="vc-badges">${coun}${adjTag}${grpTag}${kindTag}<span class="vc-badge pos-${kp.pos}" style="position:static;">${kp.pos}</span></div>
    <div class="vc-indicators">${_kanjiDot(k.mode)}<span class="vc-lvl-tag" title="Kanji list ${label}">${label}</span></div>
  </div>`;
}

const _wordsOpenSections = new Set();
let _wordsTouched = false; // until the user collapses something, everything is open
function toggleWordSection(el){
  _wordsTouched = true;
  el.classList.toggle('open');
  el.nextElementSibling.classList.toggle('open');
  el.closest('.words-sec').classList.toggle('open');
  const k = el.dataset.lvl;
  if(el.classList.contains('open')) _wordsOpenSections.add(k); else _wordsOpenSections.delete(k);
}
function toggleAllWords(){
  const anyClosed = [...document.querySelectorAll('.words-sec-header')].some(h=>!h.classList.contains('open'));
  if(anyClosed) openAllWords(); else closeAllWords();
  _syncSecToggle();
}
function closeAllWords(){
  _wordsTouched = true;
  document.querySelectorAll('.words-sec-header.open').forEach(h=>{
    h.classList.remove('open'); h.nextElementSibling.classList.remove('open');
    h.closest('.words-sec').classList.remove('open');
  });
  _wordsOpenSections.clear();
}
function openAllWords(){
  _wordsTouched = true;
  document.querySelectorAll('.words-sec-header').forEach(h=>{
    if(h.classList.contains('open')) return;
    h.classList.add('open'); h.nextElementSibling.classList.add('open');
    h.closest('.words-sec').classList.add('open');
    _wordsOpenSections.add(h.dataset.lvl);
  });
}
function toggleKanjiLevel(kl, btn){
  if(activeKanjiLevels.has(kl)) activeKanjiLevels.delete(kl); else activeKanjiLevels.add(kl);
  btn.classList.toggle('active', activeKanjiLevels.has(kl));
  _syncSubRows();
  _updateFilterBadge();
  _refilter();
}

// ── Filtering without re-rendering ────────────────────────────────────────
// Every card is in the DOM once. Changing a filter used to rebuild all 950 of
// them, which is what made the tab stutter. Now a filter only flips display.
function _cardPasses(el){
  const pos = el.dataset.pos || '';
  const kl  = el.dataset.kl  || '';
  if(activeCounterOnly && !el.dataset.coun) return false;
  if(activeKinds.size && !activeKinds.has(el.dataset.kind||'')) return false;
  if(!_posPasses(pos, !!kl)) return false;
  if(!_subPasses(pos, el.dataset.grp, el.dataset.adjt)) return false;
  if(activeKanjiLevels.size){
    if(!kl || !kl.split(' ').some(l => activeKanjiLevels.has(l))) return false;
  }
  if(hideReadOnly && el.dataset.kmode === 'read') return false;
  return true;
}
function applyWordFilters(){
  const el = document.getElementById('content');
  if(!el || currentTab !== 'words') return;
  const q = currentSearch;
  const anyFilter = !!(q || activeFilters.size || activeSubFilters.size || hideReadOnly ||
                       activeCounterOnly || activeKinds.size || activeKanjiLevels.size);
  // A term taught over two levels shows the level you filtered to, with that
  // level's own requirement: 新聞 is KL5 + read-only under a KL5 filter and
  // KL6 with no mark under KL6. With no filter it shows the level you first
  // meet it at and the final requirement.
  el.querySelectorAll('.vocab-card[data-klmodes]').forEach(card => {
    if(!card.dataset.klmodes) return;
    const entries = card.dataset.klmodes.split('|').map(x=>{
      const [kl,mode] = x.split(':'); return {kl,mode};
    });
    const shown = _klShown(entries);
    const tag = card.querySelector('.vc-kl-tag');
    if(tag){
      const label = shown.kl==='SIGN' ? 'サイン' : shown.kl;
      if(tag.textContent !== label){ tag.textContent = label; tag.title = 'Kanji list '+label; }
    }
    const dot = card.querySelector('.dot-read');
    const wantsDot = shown.mode === 'read';
    if(wantsDot && !dot){
      card.querySelector('.vc-indicators').insertAdjacentHTML('afterbegin', _kanjiDot('read'));
    } else if(!wantsDot && dot){ dot.remove(); }
    card.dataset.kmode = shown.mode;
  });

  let anyVisible = false;
  el.querySelectorAll('.vocab-card').forEach(card => {
    const show = _cardPasses(card) &&
                 (!q || matchesSearch(q, card.dataset.sw, card.dataset.sr, card.dataset.sd));
    card.style.display = show ? '' : 'none';
    if(show) anyVisible = true;
  });
  // a kanji-level heading goes when its grid empties
  el.querySelectorAll('.kanji-sub-tag').forEach(tag => {
    const grid = tag.nextElementSibling;
    const has = grid && [...grid.querySelectorAll('.vocab-card')].some(c => c.style.display !== 'none');
    tag.style.display = has ? '' : 'none';
    if(grid) grid.style.display = has ? '' : 'none';
  });
  // section: hide when empty, count what is left, and open it when filtering
  el.querySelectorAll('.words-sec').forEach(sec => {
    const header = sec.querySelector('.words-sec-header');
    const body   = sec.querySelector('.words-sec-body');
    if(!header || !body) return;
    const cards = [...body.querySelectorAll('.vocab-card')];
    const n = cards.filter(c => c.style.display !== 'none').length;
    sec.style.display = (anyFilter && !n) ? 'none' : '';
    const cnt = header.querySelector('.lt-count');
    if(cnt) cnt.textContent = n + ' ' + (header.dataset.lvl === 'KANJI' ? 'kanji' : 'words');
    const open = anyFilter ? n > 0 : _wordsOpenSections.has(header.dataset.lvl);
    header.classList.toggle('open', open);
    body.classList.toggle('open', open);
    sec.classList.toggle('open', open);
  });
  let empty = el.querySelector('.search-no-results');
  if(!anyVisible && anyFilter){
    if(!empty){
      empty = document.createElement('div');
      empty.className = 'search-no-results empty';
      empty.innerHTML = `<span class="empty-jp">？</span>Nothing matches those filters.`;
      el.appendChild(empty);
    }
  } else if(empty){ empty.remove(); }
  _syncSecToggle();
}
// The chevron must show the action that is left, from what is actually open.
// One control for both tabs now that it lives in the search bar.
function toggleAllSections(){
  if(currentTab==='grammar') toggleAllGram();
  else if(currentTab==='words') toggleAllWords();
}
function _syncSecToggle(){
  const btn = document.querySelector('.sec-toggle');
  if(!btn) return;
  btn.classList.toggle('st-visible', currentTab==='words' || currentTab==='grammar');
  const heads = [...document.querySelectorAll('.words-sec-header, .gram-section-header')]
                  .filter(h => h.closest('[style*="display: none"]') === null);
  const anyClosed = heads.some(h => !h.classList.contains('open'));
  btn.classList.toggle('open', !anyClosed);
  btn.title = anyClosed ? 'Expand all' : 'Collapse all';
}

function renderWords(){
  const vData = vocabData[sem]||{};
  const el = document.getElementById('content');

  // Word sections are the vocabulary levels, nothing else. Kanji is only ever
  // an indicator on a word; the kanji that are not vocabulary collect in their
  // own section at the end, grouped by kanji level.
  const groups = [];
  for(const lvl of WORD_LEVELS){
    const words = vData[lvl]||[];
    if(!words.length) continue;
    groups.push({
      key: lvl, label: lvl, sub: '',
      count: words.length+' words',
      cards: words.map(w=>wordCardHTML(w, lvl)).join(''),
    });
  }
  // Kanji with no vocabulary entry, KL1–KL8 then サイン.
  const koCards = [];
  let koCount = 0;
  for(const kl of KANJI_LEVELS){
    const list = _sortKanjiLevel(KANJI_BY_LEVEL[kl]||[]);
    if(!list.length) continue;
    koCount += list.length;
    koCards.push(`<div class="kanji-sub-tag">${kl==='SIGN'?'サイン':kl}</div><div class="vocab-grid">${
      list.map(k=>kanjiCardHTML(k, kl)).join('')}</div>`);
  }
  if(koCards.length) groups.push({
    key:'KANJI', label:'KANJI', sub:'漢字',
    count: koCount+' kanji', cards: koCards.join(''), raw:true,
  });

  if(!groups.length){
    el.innerHTML = `<div class="empty"><span class="empty-jp">語</span>No words found.</div>`;
    return;
  }
  el.innerHTML = groups.map(g=>
    `<div class="words-sec">
      <div class="words-sec-header" data-lvl="${g.key}" onclick="toggleWordSection(this)">
        <span class="gram-section-arrow">›</span>
        <span class="lt-key">${g.label}</span>${g.sub?`<span class="lt-sub notranslate" translate="no">${g.sub}</span>`:''}
        <span class="lt-line"></span>
        <span class="lt-count">${g.count}</span>
      </div>
      <div class="words-sec-body">${g.raw?g.cards:`<div class="vocab-grid">${g.cards}</div>`}</div>
    </div>`
  ).join('');

  // Everything is open on arrival; after that the user's own state wins.
  if(!_wordsTouched) groups.forEach(g=>_wordsOpenSections.add(g.key));
  applyWordFilters();
  _warmSuggIndex();
}

// back-compat aliases
function renderVocab(){ renderWords(); }
function renderKanji(){ renderWords(); }

const _gramOpenSections = new Set();
function _loadSectionImages(el){
  const body = el.nextElementSibling;
  if(!body) return;
  body.querySelectorAll('img.gc-img[data-src]').forEach(img=>{ img.src = img.dataset.src; img.removeAttribute('data-src'); });
  body.querySelectorAll('iframe[data-src]').forEach(f=>{ f.src = f.dataset.src; f.removeAttribute('data-src'); });
}
function toggleGramSection(el){
  if(!el.classList.contains('open')) _loadSectionImages(el);
  el.classList.toggle('open');
  el.nextElementSibling.classList.toggle('open');
  el.closest('.gram-section').classList.toggle('open');
  const t = el.querySelector('.gram-section-title');
  if(t){ const title=t.textContent.trim(); if(el.classList.contains('open')) _gramOpenSections.add(title); else _gramOpenSections.delete(title); }
}
function openMaterial(src){
  let ov=document.getElementById('material-lightbox');
  if(!ov){
    ov=document.createElement('div');
    ov.id='material-lightbox';
    ov.className='material-lightbox';
    ov.addEventListener('click',()=>{ov.classList.remove('visible');setTimeout(()=>{ov.style.display='none';},200);});
    document.body.appendChild(ov);
  }
  ov.innerHTML='<img src="'+src+'" alt="Class slide"><button class="ml-close" aria-label="Close">\u2715</button>';
  ov.style.display='flex';
  requestAnimationFrame(()=>ov.classList.add('visible'));
}
// Only the sections a filter still shows. Counting the hidden ones made the
// toggle see "some are closed" forever, so under a filter it opened instead
// of closing, every time.
function _gramHeads(){
  return [...document.querySelectorAll('.gram-section-header')]
           .filter(h => h.closest('[style*="display: none"]') === null);
}
function openAllGram(){
  _gramHeads().forEach(h=>{
    if(h.classList.contains('open')) return;
    _loadSectionImages(h);
    h.classList.add('open'); h.nextElementSibling.classList.add('open');
    h.closest('.gram-section').classList.add('open');
    const t=h.querySelector('.gram-section-title'); if(t)_gramOpenSections.add(t.textContent.trim());
  });
}
function toggleAllGram(){
  const anyClosed=_gramHeads().some(h=>!h.classList.contains('open'));
  if(anyClosed) openAllGram(); else closeAllGram();
  _syncSecToggle();
}
function closeAllGram(){
  _gramHeads().filter(h=>h.classList.contains('open')).forEach(h=>{
    h.classList.remove('open'); h.nextElementSibling.classList.remove('open');
    h.closest('.gram-section').classList.remove('open');
    const t=h.querySelector('.gram-section-title'); if(t) _gramOpenSections.delete(t.textContent.trim());
  });
}
const _gicon = {
  intro:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  shop:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  adj:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  verb:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  past:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>',
  place:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  heart:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  hand:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
  rule:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  compare:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  joshi:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  count:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/></svg>',
  question:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  pen:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  wave:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  kana:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V5h16v2"/><path d="M9 5v14"/><path d="M6 19h6"/><path d="M15 12h5"/><path d="M17.5 9.5v7"/></svg>',
  person:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M12 11v0"/></svg>',
  point:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11.5V6a1.5 1.5 0 0 1 3 0v5"/><path d="M12 11V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M15 11V7.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a5 5 0 0 1-3.6-1.5L4 15.5a1.5 1.5 0 0 1 2.2-2L9 16"/></svg>',
  link:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  hash:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
  chain:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h8a4 4 0 0 1 0 8h-2"/><path d="M16 18H8a4 4 0 0 1 0-8h2"/></svg>',
  date:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>',
  sched:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>',
  gauge:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 1 9-9"/><path d="M12 12l5-3"/><path d="M12 12v0"/><path d="M21 12h-2"/></svg>',
  exist:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M12 13v3"/></svg>',
  compass:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  split:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h6"/><path d="M4 12h16"/><path d="M4 18h6"/><circle cx="16" cy="6" r="2"/><circle cx="16" cy="18" r="2"/></svg>',
  dict:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h7"/></svg>',
  want:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/><path d="M12 8.4V13"/></svg>',
  eye:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  teform:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M12 6v12"/><path d="M12 18c0 1.5-1 2-2.5 2"/></svg>',
  shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  progress:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 15 14"/><path d="M12 2a10 10 0 0 1 8.6 5"/></svg>',
  steps:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h5v-5"/><path d="M8 15h5v-5"/><path d="M13 10h5V5"/><path d="M18 5h3"/></svg>',
  train:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 11h14"/><path d="M8 20l-2 2"/><path d="M16 20l2 2"/><circle cx="9" cy="14" r="0.6"/><circle cx="15" cy="14" r="0.6"/><path d="M7 16h10"/></svg>',
  chat:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-4-.9L3 21l1.9-4.6A8.4 8.4 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/></svg>',
  book:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z"/><path d="M22 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/></svg>',
  sign:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3"/><path d="M12 19v3"/><rect x="3" y="5" width="18" height="7" rx="1"/><path d="M7 8.5h7"/><path d="M12 12v7"/></svg>',
  practice:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><polyline points="14 4 14 9 19 9"/><path d="M7 13h8"/><path d="M7 17h5"/></svg>',
  test:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z"/><rect x="4" y="5" width="16" height="16" rx="2"/><polyline points="9 13 11 15 15 11"/></svg>',
};

const grammarSections=[
{id:"G-JOSHI",title:"じょし",en:"Particles",goal:"は・が・を・で・へ・に・も・と — which particle marks what, and the pairs that get confused.",vid:{"u":"https://www.youtube.com/watch?v=ufxBFUb4-7g","t":"Basic Japanese particles"},emoji:_gicon.joshi,cards:[
  {label:"The basic sentence",jp:"〜は ⚪︎⚪︎ です",lv:"L1",
   meaning:"The basic Japanese sentence. は marks the topic (what you are talking about); です closes the sentence politely.",
   pattern:"[Topic] は [Noun] です。",
   rows:[{jp:"わたしは がくせいです。",en:"I am a student."},{jp:"わたしは にほんじんです。",en:"I am Japanese."},{jp:"ミラーさんは かいしゃいんです。",en:"Mr./Ms. Miller is an office worker."}],
   note:"は as a particle is written は but pronounced わ.",
   imgs:["1-2-1.webp"]},
  {label:"Yes / no questions",jp:"〜ですか ／ はい・いいえ",lv:"L1",
   meaning:"Add か to the end of a sentence to make it a question. Answer with はい (yes) or いいえ + じゃありません (no).",
   pattern:"Q: [Topic] は [Noun] ですか。　A: はい、[Noun] です。／ いいえ、[Noun] じゃありません。",
   rows:[{jp:"Q：ミンスさんは かんこく人ですか。",en:"Is Min-su Korean?"},{jp:"A：はい、かんこく人です。",en:"Yes, he is Korean."},{jp:"Q：ミシェルさんは かいしゃいんですか。",en:"Is Michelle an office worker?"},{jp:"A：いいえ、かいしゃいんじゃありません。がくせいです。",en:"No, she is not an office worker. She is a student."}],
   note:"じゃありません is the polite spoken negative. In writing you may also see ではありません.",
   imgs:["1-2-2.webp","1-2-3.webp"]},
  {label:"Particle round-up",jp:"じょしのせいり",lv:"L5",vid:"ufxBFUb4-7g",
   meaning:"The Lesson 5 particle summary: は・の・を・で・へ・に・も・と. Learn which one goes with which kind of word.",
   pattern:"は topic ｜ の links nouns ｜ を object ｜ で place of action / means ｜ へ direction ｜ に time, destination, existence ｜ も also ｜ と with / and",
   rows:[{jp:"コーヒーを のみます。→ コーヒーは のみます。",en:"を becomes は when the object is contrasted."},{jp:"を→は　へ→へは　で→では　に→には　×→×は",en:"How each particle changes when は is added."}],
   note:"Contrast pattern: 「Aさん、ワインを のみますか。」「いいえ、ワインは のみません。じゃあ、ビールは？」「はい、（ビールは）のみます。」",
   imgs:["5-6-2.webp","5-6-3.webp","5-6-4.webp"]},
  {label:"Topic marker",jp:"は",lv:"L1",
   meaning:"Sets what the sentence is about. Written は, pronounced わ. Also used for contrast.",
   pattern:"[Topic] は …",
   rows:[{jp:"わたしは ミハエルです。ドイツ人です。がくせいです。げんきです。コーヒーを のみます。",en:"One topic, many comments."},{jp:"コーヒーは のみます。（でも、おちゃは のみません。）",en:"Contrast: coffee I do drink (but not tea)."}],
   imgs:["ref-joshi-2.webp"]},
  {label:"Time · Destination · Existence",jp:"に",lv:"L5",
   meaning:"に marks a clock time, a destination you enter or arrive at, the person receiving an action, and where something exists.",
   pattern:"[Time] に [Verb] ｜ [Place] に あります／います ｜ [Person] に [Verb]",
   rows:[{jp:"へやに はながあります。",en:"There are flowers in the room."},{jp:"山田さんは きょうしつに います。",en:"Mr. Yamada is in the classroom."},{jp:"ともだちに てがみを かきます。",en:"I write a letter to my friend."},{jp:"ゆうべ 新宿で 山本さんに あいました。",en:"Last night I met Mr. Yamamoto in Shinjuku."}],
   note:"に is NOT used with まいにち・あした・きのう・きょう・けさ・こんばん。",
   imgs:["ref-joshi-3.webp","ref-joshi-4.webp"]},
  {label:"The difference",jp:"に と で",lv:"L5",
   meaning:"Is there an action happening at the place? Yes → で. No (it just exists / you arrive there) → に.",
   pattern:"に① arrival point ｜ に② point in time ｜ で① place of action ｜ で② means / method",
   rows:[{jp:"まいばん、おふろに はいります。",en:"に① — entering."},{jp:"金曜日に アルバイトをします。",en:"に② — point in time."},{jp:"まいにち、うちで しんぶんを よみます。",en:"で① — place of action."},{jp:"でんしゃで 学校へ 行きます。／ はしで たべます。",en:"で② — means / tool."}],
   note:"ポイント：そのばしょ（Place）で アクション（Action）が ある？ → Yes：で　No：に",
   imgs:["ref-degoro-1.webp","ref-degoro-2.webp"]},
  {label:"About",jp:"ごろ と ぐらい",lv:"L5",
   meaning:"ごろ = about a point in time. ぐらい = about a length or quantity.",
   pattern:"[Point in time] ごろ ｜ [Duration / Quantity] ぐらい",
   rows:[{jp:"7じごろに あさごはんを たべます。",en:"ごろ → OK (point in time)"},{jp:"1じかんぐらい ひるごはんを たべます。",en:"ぐらい → OK (duration)"},{jp:"3にんぐらい きます。",en:"ぐらい → OK (quantity)"},{jp:"5がつごろ くにへ かえります。",en:"ごろ → OK (point in time)"}],
   imgs:["ref-degoro-3.webp"]},
  {label:"Place of action",jp:"〜で [Verb]ます",lv:"L5",
   meaning:"で marks where an action happens. どこで asks where.",
   pattern:"[Place] で [Verb]ます。　Q: どこで [Verb]ますか。",
   rows:[{jp:"うちで しゅくだいを します。",en:"I do homework at home."},{jp:"Q：どこで ごはんを たべますか。 A：うちで たべます。",en:"Where do you eat? — At home."},{jp:"Q：どこで よみますか。 A：としょかんで よみます。",en:"Where do you read? — At the library."}],
   imgs:["5-2-2.webp","5-2-4.webp"]},
  {label:"Going, coming, going home",jp:"〜へ いきます・きます・かえります",lv:"L5",
   meaning:"へ marks the destination of movement. Used with いきます / きます / かえります.",
   pattern:"[Place] へ いきます / きます / かえります。",
   rows:[{jp:"私は レストランへ 行きます。",en:"I go to a restaurant."},{jp:"私は 学校へ 来ます。",en:"I come to school."},{jp:"彼は うちへ かえります。",en:"He returns home."},{jp:"北海道へ ひこうきで 行きます。",en:"I go to Hokkaido by plane."}],
   note:"へ as a particle is written へ but pronounced え. に can replace it for movement.",
   imgs:["5-3-4.webp"]},
  {label:"Time + それから",jp:"〜に [Verb]ます",lv:"L5",
   meaning:"に marks a specific clock time or date. それから links the next action (\"after that\").",
   pattern:"[Time] に [Verb]ます。　[Sentence]。それから、[Sentence]。",
   rows:[{jp:"私は 7時に おきます。",en:"I get up at 7:00."},{jp:"私は 10時に ねます。",en:"I go to bed at 10:00."},{jp:"彼女はひるごはんを 食べます。それから、こうえんへ 行きます。",en:"She eats lunch. After that, she goes to the park."}],
   note:"に is NOT used with まいにち・あした・きのう・きょう・けさ・こんばん。",
   imgs:["5-4-2.webp"]},
  {label:"Double subject",jp:"〜は 〜が [Adj]です",lv:"L8",
   meaning:"は sets the whole topic; が marks the part being described.",
   pattern:"[Noun] は [Noun] が [Adj] です。",
   rows:[{jp:"ぞうは はなが ながいです。",en:"Elephants have long noses."},{jp:"東京は 人が おおいです。",en:"Tokyo has many people."},{jp:"Aさんは かみが ながいです。",en:"A has long hair."}],
   imgs:["8-1-1.webp","8-1-3.webp"]},
  {label:"Asking about a part of something",jp:"〜は 〜が [Adj]ですか",lv:"L8",
   meaning:"The question and answer pattern for the same structure.",
   pattern:"Q: [Noun] は [Noun] が [Adj] ですか。　A: はい、[Adj] です。／ いいえ、[Adj] ありません。",
   rows:[{jp:"Q：日本は 物価が たかいですか。",en:"Are prices high in Japan?"},{jp:"A：はい、たかいです。／ いいえ、たかくありません。",en:"Yes / No."}],
   imgs:["8-1-4.webp","8-1-2.webp"]},
  {label:"Reading text",jp:"〜について",lv:"L12",
   meaning:"〜について = about / regarding. Used when asking or explaining about a topic.",
   pattern:"[Topic] について [Verb]",
   rows:[{jp:"日本について おしえてください。",en:"Please tell me about Japan."},{jp:"私は 日本は おもしろいと こたえました。",en:"I answered that Japan is interesting."},{jp:"私は 道に まよいました。",en:"I got lost."}]},
  {label:"Transport",jp:"のります・おります・のりかえます",lv:"L10",
   meaning:"に marks what you board or change onto; で marks the station where you get off or change.",
   pattern:"[Line] に のります ｜ [Station] で おります ｜ [Station] で [Line] に のりかえます",
   rows:[{jp:"新大久保で 山手線に のって、あきはばらで おります。",en:"Board the Yamanote Line at Shin-Okubo and get off at Akihabara."},{jp:"私は 中央線に のりかえます。",en:"I transfer to the Chuo Line."},{jp:"えきからうちまで 30分 かかります。",en:"It takes 30 minutes from the station to my house."}],
   imgs:["10-4-1.webp","10-4-2.webp"]},
]},

{id:"G-NOUN",title:"めいし",en:"This, that, whose, from where",goal:"これ・それ・あれ stand alone, この・その・あの need a noun, and の links one noun to another.",vid:{"u":"https://www.youtube.com/watch?v=jSVmeco5kJM","t":"この・その・あの — short explanation"},emoji:_gicon.point,cards:[
  {label:"This one, that one, that one over there",jp:"これ・それ・あれ",lv:"L2",vid:"jSVmeco5kJM",
   meaning:"Three demonstratives that stand alone as nouns: これ = near me, それ = near you, あれ = away from both of us.",
   pattern:"これ / それ / あれ は [Noun] です。",
   rows:[{jp:"これは りんごです。",en:"This is an apple."},{jp:"それは シャンプーですか。",en:"Is that (near you) shampoo?"},{jp:"あれは ホテルです。",en:"That over there is a hotel."}],
   imgs:["2-2-1.webp","2-2-2.webp"]},
  {label:"Asking what something is",jp:"〜は なんですか",lv:"L2",
   meaning:"なん = what. Use it in the noun slot to ask what something is.",
   pattern:"Q: これ / それ / あれ は なんですか。　A: [Noun] です。",
   rows:[{jp:"Q：それは なんですか。",en:"What is that?"},{jp:"A：（これは）りんごです。",en:"It is an apple."},{jp:"Q：にほんごで なんですか。",en:"What is it in Japanese?"}],
   note:"In the answer you can drop これは and just say りんごです。",
   imgs:["2-2-3.webp"]},
  {label:"This / that + noun",jp:"この・その・あの ＋ Noun",lv:"L2",vid:"jSVmeco5kJM",
   meaning:"Same three distances as これ・それ・あれ, but these must be followed by a noun.",
   pattern:"この / その / あの ＋ [Noun] は ⚪︎⚪︎ えんです。",
   rows:[{jp:"このかさは 1200えんです。",en:"This umbrella is 1,200 yen."},{jp:"Q：このゆびわは いくらですか。",en:"How much is this ring?"},{jp:"A：30000えんです。",en:"It is 30,000 yen."}],
   note:"これ = a pronoun (stands alone). この = a modifier (always + noun). Never say ×これかさ.",
   imgs:["2-4-2.webp","3-1-1.webp"]},
  {label:"Where it is from",jp:"どこの N",lv:"L2",
   meaning:"の links two nouns. [Country] の [Noun] = a [Noun] from [Country]. どこの asks which country / maker.",
   pattern:"[Noun] は [Country] の [Noun] です。　Q: 〜は どこの [Noun] ですか。",
   rows:[{jp:"これは にほんの くるまです。",en:"This is a Japanese car."},{jp:"Q：それは どこの くるまですか。",en:"Where is that car from?"},{jp:"A：イタリアの くるまです。",en:"It is an Italian car."}],
   imgs:["2-5-3.webp","2-5-4.webp"]},
  {label:"Whose",jp:"だれの N",lv:"L3",
   meaning:"The same の as 2-5, but with a person: [Person] の [Noun] = someone’s thing. だれの asks whose.",
   pattern:"[Noun] は [Person] の [Noun] です。　Q: 〜は だれの [Noun] ですか。",
   rows:[{jp:"これは さとうさんの ぼうしです。",en:"This is Mr./Ms. Sato’s hat."},{jp:"Q：それは だれの ぼうしですか。",en:"Whose hat is that?"},{jp:"A：さとうさんの（ぼうし）です。",en:"It is Sato’s."}],
   note:"You can drop the repeated noun: さとうさんのです。",
   imgs:["3-1-3.webp"]},
]},

{id:"G-ADJ",title:"けいようし",en:"Adjectives",goal:"The two families, how each attaches to a noun, how to join two, and how to say what something looks like.",vid:{"u":"https://www.youtube.com/watch?v=1VwyXw1gUwA","t":"い-adjectives and な-adjectives"},emoji:_gicon.adj,cards:[
  {label:"い-adjectives",jp:"い形容詞",lv:"L3",vid:"1VwyXw1gUwA",
   meaning:"い-adjectives end in い. Positive: 〜いです。 Negative: drop い → 〜くありません。",
   pattern:"[Noun] は [い-adj] です。／ [い-adj minus い] ＋ くありません。",
   rows:[{jp:"このねこは 小さいです。",en:"This cat is small."},{jp:"おおきい → おおきくありません",en:"big → is not big"},{jp:"このテストは むずかしいです。",en:"This test is difficult."}],
   note:"※いい is irregular: いいです → よくありません（×いくありません）。",
   imgs:["3-2-1.webp","3-2-2.webp"]},
  {label:"な-adjectives",jp:"な形容詞",lv:"L3",vid:"1VwyXw1gUwA",
   meaning:"な-adjectives behave like nouns. Positive: 〜です。 Negative: 〜じゃありません。",
   pattern:"[Noun] は [な-adj] です。／ [な-adj] じゃありません。",
   rows:[{jp:"このこうえんは しずかです。",en:"This park is quiet."},{jp:"このこうえんは しずかじゃありません。",en:"This park is not quiet."},{jp:"かれは しんせつです。",en:"He is kind."}],
   note:"とても = very. Put it before the adjective: とても大きいです。",
   imgs:["3-3-1.webp","3-3-4.webp"]},
  {label:"Describing a noun",jp:"Adj ＋ Noun",lv:"L3",
   meaning:"Put the adjective in front of the noun. い-adjectives attach directly; な-adjectives need な.",
   pattern:"[い-adj] ＋ [Noun]　／　[な-adj] ＋ な ＋ [Noun]",
   rows:[{jp:"やすいくるまです。",en:"It is a cheap car."},{jp:"くろいかばんです。",en:"It is a black bag."},{jp:"きれいな ひとです。",en:"She is a beautiful person."},{jp:"べんりな でんわです。",en:"It is a convenient phone."}],
   imgs:["3-4-1.webp","3-4-2.webp","3-4-3.webp"]},
  {label:"Asking what something is like",jp:"〜は どうですか",lv:"L3",
   meaning:"Ask for an impression. Answer with an adjective.",
   pattern:"Q: [Noun] は どうですか。　A: [Adj] です。",
   rows:[{jp:"Q：にほんごは どうですか。",en:"How is Japanese (for you)?"},{jp:"A：むずかしいです。",en:"It is difficult."},{jp:"Q：このケーキは おいしいですか。 A：はい、おいしいです。",en:"Is this cake tasty? — Yes, it is."}],
   imgs:["3-2-3.webp","3-2-4.webp"]},
  {label:"Asking what kind of thing",jp:"どんな N ですか",lv:"L3",
   meaning:"どんな asks what kind of thing it is. The answer is an adjective + the noun.",
   pattern:"Q: [Noun] は どんな [Noun] ですか。　A: [Adj(＋な)] [Noun] です。",
   rows:[{jp:"Q：Aさんのくるまは どんな くるまですか。",en:"What kind of car is A’s car?"},{jp:"A：あたらしい くるまです。／ きれいな くるまです。",en:"It is a new car. / It is a clean car."},{jp:"Q：カイスクールは どんながっこうですか。",en:"What kind of school is KAI?"}],
   imgs:["3-4-4.webp"]},
  {label:"Joining adjectives",jp:"〜くて／〜で",lv:"L8",vid:"1ucR-mWVOxY",
   meaning:"Join two adjectives in one sentence: い-adj → drop い + くて; な-adj / noun → + で.",
   pattern:"[い-adj]くて ＋ [Adj] です。　／　[な-adj]で ＋ [Adj] です。",
   rows:[{jp:"このかばんは しかくくて ちゃいろいです。",en:"This bag is square and brown."},{jp:"たなかさんは せが たかくて ハンサムです。",en:"Mr. Tanaka is tall and handsome."},{jp:"※いい → よくて",en:"いい is irregular."}],
   imgs:["8-3-1.webp","8-3-2.webp","8-3-3.webp"]},
  {label:"What kind of thing — with two adjectives",jp:"どんな N ですか（２つの形容詞）",lv:"L8",
   meaning:"Answer どんな with two joined adjectives + the noun.",
   pattern:"[い-adj]くて ＋ [Adj] ＋ [Noun] です。／ [な-adj]で ＋ [Adj] ＋ [Noun] です。",
   rows:[{jp:"Q：〇〇は どんな ところですか。",en:"What kind of place is it?"},{jp:"A：しずかで きれいな ところです。",en:"It is a quiet, beautiful place."}],
   note:"✗ な-adj ＋ くて。な-adjectives always use で。",
   imgs:["8-3-4.webp"]},
  {label:"Looks like",jp:"〜そうです",lv:"L8",
   meaning:"Describe how something looks. Drop い from an い-adjective, use a な-adjective as it is, then add そうです.",
   pattern:"[Adj] ＋ そうです。　／　[Adj] ＋ そうな ＋ [Noun]",
   rows:[{jp:"このケーキは おいしそうです。",en:"This cake looks delicious."},{jp:"これは おいしそうなケーキです。",en:"This is a delicious-looking cake."},{jp:"かれは うれしそうです。",en:"He looks happy."},{jp:"※いい → よさそうです",en:"いい is irregular."}],
   note:"Negative impression: あまり おもしろそうじゃありません。",
   imgs:["8-6-1.webp","8-6-2.webp","8-6-3.webp","8-6-4.webp"]},
]},

{id:"G-VERB",title:"どうし",en:"Verbs & their forms",goal:"The three groups and the forms they take: ます, dictionary, て, and 〜ています.",vid:{"u":"https://www.youtube.com/watch?v=ZEEe4rweLAQ","t":"Spotting the verb group from ます"},emoji:_gicon.verb,cards:[
  {label:"Verb groups",jp:"どうし",lv:"L8",vid:"ZEEe4rweLAQ",
   meaning:"Every verb belongs to Group 1, 2 or 3. The group decides every later form (て-form, dictionary form, ない-form).",
   pattern:"①Group 1 ｜ ②Group 2 ｜ ③Group 3 (します・きます)",
   rows:[{jp:"①のみます → のむ ／ のんで",en:"Group 1"},{jp:"②たべます → たべる ／ たべて",en:"Group 2"},{jp:"③します → する ／ して　きます → くる ／ きて",en:"Group 3 (irregular)"}],
   note:"Every verb card in the Words tab shows its group; tap it for the full conjugation table."},
  {label:"Object + verb",jp:"〜を [Verb]ます",lv:"L5",
   meaning:"を marks the object the action is done to. The verb comes last.",
   pattern:"[Topic] は [Object] を [Verb]ます。",
   rows:[{jp:"私は ケーキを 食べます。",en:"I eat cake."},{jp:"田中さんは コーヒーを 飲みます。",en:"Mr. Tanaka drinks coffee."},{jp:"彼女は 英語を 話します。",en:"She speaks English."}],
   note:"[〜をします] verbs: べんきょうをします、しごとをします、テニスをします、そうじをします。",
   imgs:["5-1-1.webp"]},
  {label:"Asking and answering with a verb",jp:"〜ますか ／ 〜ません",lv:"L5",
   meaning:"Question = ますか. Negative answer = ません.",
   pattern:"Q: 〜を [Verb]ますか。　A: はい、[Verb]ます。／ いいえ、[Verb]ません。",
   rows:[{jp:"Q：コーヒーを のみますか。 A：はい、のみます。",en:"Do you drink coffee? — Yes, I do."},{jp:"Q：なっとうを たべますか。 A：いいえ、たべません。",en:"Do you eat natto? — No, I don’t."}],
   imgs:["5-1-2.webp"]},
  {label:"Asking what someone does",jp:"なにを しますか",lv:"L5",
   meaning:"なに in the object slot asks what someone does.",
   pattern:"Q: [Topic] は なにを しますか。　A: [Verb]ます。",
   rows:[{jp:"Q：あした、なにを しますか。 A：えいがを みます。",en:"What will you do tomorrow? — I’ll watch a film."},{jp:"Q：しゅうまつ、なにを しますか。 A：しごとへ いきます。",en:"What will you do at the weekend? — I go to work."}],
   imgs:["5-1-3.webp"]},
  {label:"Dictionary form",jp:"じしょけい",lv:"L8",vid:"FHAAs8lo-lc",
   meaning:"The plain (dictionary) form of each verb group — the base for many later patterns.",
   pattern:"①かいます→かう ｜ ②ねます→ねる ｜ ③きます→くる・します→する",
   rows:[{jp:"①かいます→かう、かきます→かく、およぎます→およぐ、はなします→はなす、あそびます→あそぶ",en:"Group 1: い-row → う-row"},{jp:"②ねます→ねる、たべます→たべる、おきます→おきる、みます→みる、あびます→あびる",en:"Group 2: ます → る"},{jp:"③きます→くる、します→する",en:"Group 3: irregular"}],
   imgs:["8-5-1.webp","8-5-2.webp","8-5-3.webp"]},
  {label:"The て-form",jp:"てけい",lv:"L9",vid:"HAdmKhVjVs8",
   meaning:"The て-form is built from the verb group. It is the base for てください, ています, てもいいですか and more.",
   pattern:"①き→いて、ぎ→いで、し→して、ち・り・い→って、に・び・み→んで ｜ ②ます→て ｜ ③きます→きて、します→して",
   rows:[{jp:"かきます→かいて、およぎます→およいで、はなします→はなして",en:"Group 1"},{jp:"まちます→まって、とります→とって、かいます→かって",en:"Group 1 (っ)"},{jp:"のみます→のんで、よびます→よんで、しにます→しんで",en:"Group 1 (ん)"},{jp:"たべます→たべて、みます→みて",en:"Group 2"},{jp:"※いきます→いって",en:"Irregular"}]},
  {label:"Doing right now",jp:"〜ています",lv:"L9",vid:"GFIPvAP_L28",
   meaning:"て-form + います describes an action in progress at this moment.",
   pattern:"[Verb て-form] ＋ います。　Q: なにを していますか。",
   rows:[{jp:"さとう先生は 電話を しています。",en:"Ms. Sato is on the phone."},{jp:"Q：田中さんは なにを していますか。",en:"What is Mr. Tanaka doing?"},{jp:"A：本を よんでいます。",en:"He is reading a book."}],
   imgs:["9-3-1.webp","9-3-2.webp","9-3-3.webp"]},
]},

{id:"G-PAST",title:"かこけい",en:"Past tense",goal:"Past and past-negative for verbs, い-adjectives, な-adjectives and nouns.",vid:{"u":"https://www.youtube.com/watch?v=C6BghJTnpvM","t":"Past tense ました"},emoji:_gicon.past,cards:[
  {label:"Verb past",jp:"〜ました ／ 〜ませんでした",lv:"L6",vid:"C6BghJTnpvM",
   meaning:"Past of a ます-verb: ました (did) and ませんでした (did not).",
   pattern:"[Verb]ます → [Verb]ました　／　[Verb]ません → [Verb]ませんでした",
   rows:[{jp:"ゆうべ、ラーメンを たべました。",en:"Last night I ate ramen."},{jp:"きのう、がっこうへ いきませんでした。",en:"Yesterday I did not go to school."},{jp:"せんしゅう、えいがを みました。",en:"Last week I watched a film."}],
   note:"Time words: おととい・きのう・きょう・あした・あさって／せんしゅう・こんしゅう・らいしゅう／せんげつ・こんげつ・らいげつ／きょねん・ことし・らいねん。",
   imgs:["6-1-1.webp"]},
  {label:"い-adj past",jp:"い形容詞 の かこ",lv:"L6",
   meaning:"い-adjectives: drop い → かったです (past) / くありませんでした (past negative).",
   pattern:"たのしい → たのしかったです ／ たのしくありませんでした",
   rows:[{jp:"パーティは たのしかったですか。",en:"Was the party fun?"},{jp:"てんきは よくありませんでした。",en:"The weather was not good."},{jp:"※いい → よかったです ／ よくありませんでした",en:"いい is irregular."}],
   imgs:["6-2-1.webp","6-2-2.webp"]},
  {label:"な-adj & noun past",jp:"な形容詞・めいし の かこ",lv:"L6",
   meaning:"な-adjectives and nouns take でした / じゃありませんでした in the past.",
   pattern:"げんきです → げんきでした ／ げんきじゃありませんでした",
   rows:[{jp:"ホテルのスタッフは しんせつでした。",en:"The hotel staff were kind."},{jp:"きのうは、げんきじゃありませんでした。",en:"Yesterday I was not well."},{jp:"2000年、わたしは がくせいでした。今は がくせいじゃありません。",en:"In 2000 I was a student. Now I am not."}],
   imgs:["6-1-2.webp","6-1-3.webp"]},
  {label:"Asking how something was",jp:"〜は どうでしたか",lv:"L6",
   meaning:"Ask for an impression of something that has already happened.",
   pattern:"Q: [Noun] は どうでしたか。　A: [Adj past] です。",
   rows:[{jp:"Q：パーティは どうでしたか。 A：たのしかったです。",en:"How was the party? — It was fun."},{jp:"Q：てんきは どうでしたか。 A：よくありませんでした。",en:"How was the weather? — It was not good."},{jp:"Q：日本語のべんきょうは どうですか。",en:"How is studying Japanese?"}],
   imgs:["6-2-3.webp","6-2-4.webp","6-1-4.webp"]},
]},

{id:"G-EXIST",title:"そんざい・いち",en:"Existence & position",goal:"あります for things, います for living things, and where one thing sits relative to another.",vid:{"u":"https://www.youtube.com/watch?v=gQMqFixIiwE","t":"あります vs います"},emoji:_gicon.exist,cards:[
  {label:"Saying what is somewhere",jp:"〜に 〜が あります／います",lv:"L7",vid:"gQMqFixIiwE",
   meaning:"あります = a thing exists. います = a living thing exists. に marks the place, が marks the thing.",
   pattern:"[Place] に [Noun] が あります／います。",
   rows:[{jp:"へやに テーブルが あります。",en:"There is a table in the room."},{jp:"へやに 田中さんが います。",en:"Mr. Tanaka is in the room."},{jp:"にわに いぬが います。",en:"There is a dog in the garden."},{jp:"新宿に デパートが たくさん あります。",en:"There are many department stores in Shinjuku."}],
   note:"ポイント：もの・しょくぶつ → あります　／　ひと・どうぶつ → います。",
   imgs:["7-1-1.webp","7-1-3.webp"]},
  {label:"Asking what or who is there",jp:"なに／だれ が ありますか・いますか",lv:"L7",
   meaning:"Ask what or who is in a place. Negative answer uses なにも／だれも ＋ ません.",
   pattern:"Q: [Place] に なに／だれ が ありますか／いますか。　A: [Noun] が あります／います。",
   rows:[{jp:"Q：〇〇さんのへやに なにが ありますか。",en:"What is in your room?"},{jp:"Q：〇〇さんのへやに だれが いますか。",en:"Who is in your room?"},{jp:"A：だれも いません。／ なにも ありません。",en:"There is nobody. / There is nothing."}],
   note:"〜や〜など lists examples: ビールや チーズなどが あります。",
   imgs:["7-1-2.webp","7-1-4.webp"]},
  {label:"Position words",jp:"N の いち",lv:"L7",
   meaning:"Position words sit between の and に: [Thing] の [Position] に.",
   pattern:"[Noun A] は [Noun B] の [Position] に あります／います。",
   rows:[{jp:"めがねは テーブルの 上に あります。",en:"The glasses are on the table."},{jp:"ほんは テーブルの 下に あります。",en:"The book is under the table."},{jp:"びょういんは いえの そばに あります。",en:"The hospital is near the house."}],
   note:"うえ・した・なか・よこ・まえ・うしろ・となり・そば・みぎ・ひだり／きた・みなみ・にし・ひがし。",
   imgs:["7-3-2.webp","7-3-3.webp"]},
  {label:"Asking where something is",jp:"どこに ありますか",lv:"L7",
   meaning:"どこに asks the location; the answer gives the position phrase.",
   pattern:"Q: [Noun] は どこに ありますか／いますか。　A: [Place] の [Position] に あります／います。",
   rows:[{jp:"Q：ぎんこうは どこに ありますか。",en:"Where is the bank?"},{jp:"A：えきの まえに あります。",en:"It is in front of the station."},{jp:"Q：ねこは どこに いますか。 A：テーブルの上に います。",en:"Where is the cat? — On the table."}],
   imgs:["7-3-4.webp","7-3-1.webp"]},
]},

{id:"G-WANT",title:"きぼう・このみ",en:"Wants & likes",goal:"〜たいです, 〜がほしいです, 〜がすきです — the patterns that mark their object with が.",vid:{"u":"https://www.youtube.com/watch?v=nCfLxNUUXbg","t":"〜たいです — saying what you want"},emoji:_gicon.heart,cards:[
  {label:"Want to do",jp:"〜たいです",lv:"L8",vid:"nCfLxNUUXbg",
   meaning:"Take the ます-stem and add たいです. The object may be marked with を or が.",
   pattern:"[Verb ます-stem] ＋ たいです。",
   rows:[{jp:"私は 日本へ 行きたいです。",en:"I want to go to Japan."},{jp:"Q1：どこへ いきたいですか。",en:"Where do you want to go?"},{jp:"Q2：＿＿で なにが たべたいですか。",en:"What do you want to eat in ＿＿?"},{jp:"お母さんのシチューが 食べたい…。",en:"I want to eat my mother’s stew…"}],
   imgs:["8-4-3.webp"]},
  {label:"Want a thing",jp:"〜が ほしいです",lv:"L8",vid:"M7QCUiZxyYo",
   meaning:"ほしい is an い-adjective. The thing you want is marked with が.",
   pattern:"[Noun] が ほしいです。",
   rows:[{jp:"私は お金が ほしいです。",en:"I want money."},{jp:"とけいが ほしいです。",en:"I want a watch."},{jp:"Q：クリスマスに なにが ほしいですか。",en:"What do you want for Christmas?"}],
   note:"ほしい is for things; たい is for actions. Both take が.",
   imgs:["8-4-4.webp","8-4-2.webp"]},
  {label:"Likes & skills",jp:"〜が すきです",lv:"L8",vid:"bhN0a80JC2E",
   meaning:"The thing you like is marked with が, not を. Same structure for きらい・じょうず・へた・とくい・にがて.",
   pattern:"[Person] は [Noun] が すきです／きらいです／じょうずです／へたです。",
   rows:[{jp:"私は あまいものが すきです。",en:"I like sweet things."},{jp:"私は 犬が きらいです。",en:"I dislike dogs."},{jp:"田中さんは 歌が じょうずです。",en:"Mr. Tanaka is good at singing."}],
   note:"Pairs taught in class: すき↔きらい、じょうず↔へた、とくい↔にがて。Past: すきでした／すきじゃありませんでした。",
   imgs:["8-2-1.webp","8-2-2.webp","8-2-3.webp"]},
  {label:"Asking politely",jp:"〜が すきですか",lv:"L8",
   meaning:"Ask about likes; the soft refusal あまり…。 is the natural way to say you do not like something.",
   convo:{title:"すきですか",lines:[["Ａ","〇〇さんは えいがが すきですか。","Do you like films?"],["Ｂ","はい、すきです。","Yes, I do."],["Ｂ","いいえ、えいがは あまり…。","No, films are not really…"]]},
   note:"Topics used in class: えいが・おんがく・スポーツ・ゲーム・アニメ・わしょく・とかい・いなか。",
   imgs:["8-2-4.webp"]},
  {label:"Like doing something",jp:"〜のが すきです",lv:"L8",
   meaning:"Dictionary form + の turns a verb into a noun, so it can take が すきです.",
   pattern:"[Verb dictionary form] ＋ のが すきです。",
   rows:[{jp:"私は サッカーをみるのが すきです。",en:"I like watching football."},{jp:"写真をとるのが すきです。",en:"I like taking photos."},{jp:"ピアノをひくのが じょうずです。",en:"I am good at playing the piano."}],
   imgs:["8-5-4.webp"]},
]},

{id:"G-REQ",title:"いらい・きょか",en:"Requests, offers & permission",goal:"Ask someone to do it, offer to do it yourself, ask whether you may, and state what is not allowed.",vid:{"u":"https://www.youtube.com/watch?v=ZskrDL0LtFc","t":"〜てもいいですか — asking permission"},emoji:_gicon.hand,cards:[
  {label:"Shall I …?",jp:"〜ましょうか",lv:"L9",
   meaning:"Offer to do something for the other person. Take the ます-stem + ましょうか.",
   pattern:"[Verb ます-stem] ＋ ましょうか。",
   rows:[{jp:"かばんを 持ちましょうか。",en:"Shall I carry your bag?"},{jp:"まどを あけましょうか。",en:"Shall I open the window?"},{jp:"てつだいましょうか。",en:"Shall I help you?"},{jp:"かしましょうか。",en:"Shall I lend it to you?"}],
   imgs:["9-1-3.webp"]},
  {label:"Offering help",jp:"もうしでる かいわ",lv:"L9",
   meaning:"The full offer-and-accept exchange practised in class.",
   rows:[{jp:"1）A：おもそうですね。持ちましょうか。 B：ありがとうございます。",en:"That looks heavy — shall I carry it? — Thank you."},{jp:"2）A：あれっ。けしゴムがない！ B：かしましょうか。 A：ありがとう。",en:"Oh, I have no eraser! — Shall I lend you one? — Thanks."},{jp:"3）A：いそがしそうですね。てつだいましょうか。",en:"You look busy. Shall I help?"}],
   convo:{title:"てつだいましょうか",lines:[["Ａ","あついですねぇ！","It’s hot, isn’t it!"],["Ｂ","まどを あけましょうか。","Shall I open the window?"],["Ａ","すみません。おねがいします。","Yes please. Thank you."],["ミシェル","フランチェスカさん、手伝いましょうか。","Francesca, shall I help you?"],["フランチェスカ","あ、だいじょうぶです。","Oh, I’m fine."],["ミシェル","でも、重そうですよ。","But it looks heavy."],["フランチェスカ","ほんとうにだいじょうぶです。ありがとう。","I’m really fine. Thank you."]]},
   imgs:["9-1-4.webp","9-1-5.webp"]},
  {label:"Please do",jp:"〜てください",lv:"L9",vid:"sUQuPPo6XMk",
   meaning:"て-form + ください asks someone to do something, or invites them to go ahead.",
   pattern:"[Verb て-form] ＋ ください。",
   rows:[{jp:"たべてください。",en:"Please eat."},{jp:"そのカメラを みせてください。",en:"Please show me that camera."},{jp:"でんわばんごうを おしえてください。",en:"Please tell me your phone number."},{jp:"もういちど 言ってください。",en:"Please say it once more."}],
   note:"Three uses drilled in class: ①「どうぞ」inviting ②「おねがいします」requesting ③ instruction.",
   imgs:["9-2-2.webp","9-2-4.webp"]},
  {label:"Who does the action?",jp:"Vましょうか・Vてください・Vてもいいですか",lv:"L10",
   meaning:"The three て-form patterns side by side — who does the action changes each time.",
   pattern:"「Vましょうか」= I do it for you ｜「Vてください」= you do it for me ｜「Vてもいいですか」= I want to do it",
   rows:[{jp:"（1）Vましょうか ＝ 私が Vます。",en:"A offers; A does it."},{jp:"（2）Vてください ＝ あなたが Vます、おねがいします。",en:"B is asked; B does it."},{jp:"（3）Vてもいいですか ＝ 私が Vたいです。いいですか。",en:"A asks permission; A does it."},{jp:"A：すみません、エアコンを けしてください。",en:"B does it — A asks B."},{jp:"A：すみません、エアコンを けしてもいいですか。",en:"A does it — A asks permission."},{jp:"A：エアコンを けしましょうか。",en:"A does it — A offers."}],
   imgs:["10-1-4.webp","ref-expr-4.webp","ref-expr-2.webp","ref-expr-3.webp"]},
  {label:"May I …?",jp:"〜てもいいですか",lv:"L10",vid:"ZskrDL0LtFc",
   meaning:"て-form + もいいですか asks permission. Answer はい、どうぞ or すみません、ちょっと….",
   pattern:"[Verb て-form] ＋ もいいですか。",
   rows:[{jp:"いきます ＋ いいですか → いってもいいですか",en:"May I go?"},{jp:"かえります ＋ いいですか → かえってもいいですか",en:"May I go home?"},{jp:"水をのみます ＋ いいですか → 水をのんでもいいですか",en:"May I drink water?"},{jp:"写真を とってもいいですか。",en:"May I take a photo?"}],
   imgs:["10-1-1.webp","10-1-2.webp","10-1-3.webp"]},
  {label:"Must not",jp:"〜てはいけません",lv:"L10",vid:"dwzYWODFdgE",
   meaning:"て-form + はいけません states a prohibition — used for rules and signs.",
   pattern:"[Verb て-form] ＋ はいけません。",
   rows:[{jp:"じてんしゃに のってはいけません。",en:"You must not ride a bicycle (here)."},{jp:"ここに 車を とめてはいけません。",en:"You must not park a car here."},{jp:"ここに ゴミを だしてはいけません。",en:"You must not put out rubbish here."}],
   note:"Used with class rules: カンニング・ペット・ゴミ・たちいりきんし。",
   imgs:["10-2-2.webp","10-2-3.webp","10-2-4.webp"]},
  {label:"Asking for things in a shop",jp:"〜と〜を ください",lv:"L2",
   meaning:"Ask for things in a shop. と joins two nouns (\"and\"); を marks what you want; ください = please give me.",
   pattern:"[Noun] と [Noun] を ください。",
   convo:{title:"おみせで ｜ At the shop",lines:[["A","りんごと バナナを ください。","An apple and a banana, please."],["B","はい。","Certainly."],["A","いくらですか。","How much is it?"],["B","370えんです。","370 yen."]]},
   imgs:["2-3-4.webp"]},
]},

{id:"G-CONN",title:"ぶんをつなぐ",en:"Connecting sentences & actions",goal:"でも・そして for another sentence, and て for one action after another.",vid:{"u":"https://www.youtube.com/watch?v=1ucR-mWVOxY","t":"Joining adjectives with くて／で"},emoji:_gicon.chain,cards:[
  {label:"Reading text",jp:"でも",lv:"L5",
   meaning:"でも joins two sentences with a contrast (\"but\"). It starts the second sentence.",
   pattern:"[Sentence]。 でも、[Sentence]。",
   rows:[{jp:"私のかばんは ちいさいです。でも、おもいです。",en:"My bag is small. But it is heavy."},{jp:"いえは とても近いです。",en:"The house is very close."}]},
  {label:"And also",jp:"そして",lv:"L3",
   meaning:"そして adds a second, similar sentence (\"and also\").",
   pattern:"[Sentence]。そして、[Sentence]。",
   rows:[{jp:"彼女は きれいです。そして、しんせつです。",en:"She is beautiful. And she is kind."}]},
  {label:"Linking actions in order",jp:"V①て、V②ます",lv:"L10",
   meaning:"Join actions in the order they happen: verb 1 in て-form, then verb 2 carries the tense.",
   pattern:"[V1 て-form]、[V2]ます。／ました。",
   rows:[{jp:"私はまいにち、あさおきて、ジョギングをします。",en:"Every day I get up and go jogging."},{jp:"ごはんを 食べて、学校へ 行きます。",en:"I eat and then go to school."},{jp:"こうえんへ いって、えを かきます。",en:"I go to the park and draw a picture."},{jp:"（きのうのよる）テレビをみて、おふろに はいりました。",en:"Last night I watched TV and then took a bath."}],
   note:"Only the last verb shows the tense: おふろにはいって、ねました。",
   imgs:["10-3-1.webp","10-3-2.webp","10-3-3.webp","10-3-4.webp"]},
  {label:"Do and go / do and come",jp:"〜ていきます／〜てきます",lv:"L10",
   meaning:"て-form + いきます = do it then go. て-form + きます = do it and come back.",
   pattern:"[Verb て-form] ＋ いきます／きます／かえります。",
   rows:[{jp:"学校に 本を 持って行きます。",en:"I take a book to school."},{jp:"切符を 買って行きます。",en:"I buy a ticket and go."},{jp:"たばこを 買って来ます。",en:"I’ll go buy cigarettes and come back."},{jp:"ケーキを 持って帰ります。",en:"I’ll take the cake home."},{jp:"郵便局へ 行って来ます。",en:"I’ll go to the post office and come back."}],
   note:"アレンジ：（て形）て 行きたいです／行きましょうか／行ってください／行ってもいいですか。",
   imgs:["10-5-3.webp"]},
]},

{id:"G-COMP",title:"ひかく・ていど",en:"Comparison & degree",goal:"More than, most of all, too much, easy or hard to do, and how often.",vid:{"u":"https://www.youtube.com/shorts/HDgpOAWgfpQ","t":"AのほうがBより — 1-minute short"},emoji:_gicon.compare,cards:[
  {label:"A is more … than B",jp:"〜のほうが 〜より",lv:"L11",vid:"HDgpOAWgfpQ",
   meaning:"のほうが marks the winner of the comparison; より marks the one it beats.",
   pattern:"[A] のほうが [B] より [Adj] です。",
   rows:[{jp:"Aスーパーのほうが Bスーパーより たかいです。",en:"Supermarket A is more expensive than B."},{jp:"バスより でんしゃのほうが はやいです。",en:"The train is faster than the bus."},{jp:"この店のほうが ずっと やすいです。",en:"This shop is far cheaper."}],
   imgs:["11-1-2.webp"]},
  {label:"Which of the two is more…",jp:"AとBと どちらのほうが 〜ですか",lv:"L11",
   meaning:"The question form. Answer with のほうが.",
   pattern:"Q: [A] と [B] と どちら（のほう）が [Adj] ですか。　A: [A] のほうが [Adj] です。",
   rows:[{jp:"Q：AスーパーとBスーパーと どちらのほうが たかいですか。",en:"Which is more expensive, A or B?"},{jp:"A：（Bスーパーより）Aスーパーのほうが たかいです。",en:"A is more expensive (than B)."},{jp:"Q：読書とスポーツと どちらのほうが すきですか。",en:"Which do you prefer, reading or sport?"}],
   imgs:["11-1-3.webp","11-1-1.webp"]},
  {label:"Explaining about A",jp:"AはBより 〜です",lv:"L11",
   meaning:"Same comparison seen from A’s side — used when you are explaining about A.",
   pattern:"[A] は [B] より [Adj] です。",
   rows:[{jp:"東京タワーは スカイツリーより ひくいです。",en:"Tokyo Tower is lower than Skytree."},{jp:"〈ポイント〉Aのことを話します（説明をします）。",en:"The topic is A — you are describing A."}],
   imgs:["11-2-1.webp","11-2-2.webp","11-2-3.webp","11-2-4.webp"]},
  {label:"Superlative",jp:"〜のなかで 〜が いちばん 〜です",lv:"L11",
   meaning:"Pick the top one out of a group of three or more.",
   pattern:"[Group] のなかで [Noun] が いちばん [Adj] です。",
   rows:[{jp:"くだものの中で いちごが いちばん すきです。",en:"Of all fruit I like strawberries best."},{jp:"日本の食べ物の中で そばが いちばん すきです。",en:"Of Japanese foods I like soba best."},{jp:"Q：日本のアニメの中で どれが いちばん おもしろいですか。",en:"Which Japanese anime is the most interesting?"}],
   note:"Question word matches the group: なに／だれ／どこ／いつ／どれ。",
   imgs:["11-3-1.webp","11-3-2.webp","11-3-3.webp","11-3-4.webp"]},
  {label:"Too much",jp:"〜すぎます",lv:"L11",
   meaning:"Attach すぎます to a ます-stem or to an adjective stem to say it is excessive.",
   pattern:"[Verb ます-stem] ＋ すぎます　／　[Adj stem] ＋ すぎます",
   rows:[{jp:"ごぜん7:00の しんじゅくは はやすぎます。",en:"7 a.m. in Shinjuku is too early."},{jp:"このくつは 小さすぎます。",en:"These shoes are too small."},{jp:"ゆうべパーティで のみすぎました。",en:"I drank too much at the party last night."},{jp:"ヒールが 高すぎて、あるきにくいです。",en:"The heels are too high, so they are hard to walk in."}],
   imgs:["11-4-2.webp","11-4-3.webp","11-4-4.webp"]},
  {label:"Easy / hard to do",jp:"〜やすいです／〜にくいです",lv:"L11",vid:"vWj2iurjkSk",
   meaning:"ます-stem + やすい = easy to do; + にくい = hard to do. Both behave like い-adjectives.",
   pattern:"[Verb ます-stem] ＋ やすいです／にくいです。",
   rows:[{jp:"この教科書は わかりやすいです。",en:"This textbook is easy to understand."},{jp:"よみます → よみやすいです／よみにくいです",en:"easy / hard to read"},{jp:"スニーカーは あるきやすいです。ハイヒールは あるきにくいです。",en:"Trainers are easy to walk in; high heels are hard to walk in."}],
   imgs:["11-5-1.webp","11-5-2.webp","11-5-3.webp","11-5-4.webp"]},
  {label:"Frequency",jp:"よく・ときどき・あまり・ぜんぜん",lv:"L5",
   meaning:"Frequency adverbs. あまり and ぜんぜん must be followed by a negative verb.",
   pattern:"よく／まいにち／ときどき ＋ [Verb]ます　｜　あまり／ぜんぜん ＋ [Verb]ません",
   rows:[{jp:"Q：よく えいがを みますか。",en:"Do you often watch films?"},{jp:"A：はい、よく みます。／ まいにち みます。／ ときどき みます。",en:"Yes, often. / Every day. / Sometimes."},{jp:"A：いいえ、あまり みません。／ ぜんぜん みません。",en:"No, not very often. / Not at all."}],
   imgs:["5-5-2.webp","5-5-3.webp","5-5-4.webp"]},
  {label:"Not… anything, not… anywhere",jp:"ぎもんし ＋ も ＋ 〜ません",lv:"L5",
   meaning:"Question word + も + negative verb = \"not … anything / anywhere / with anyone\".",
   pattern:"[Question word] ＋ も ＋ [Verb]ません。",
   rows:[{jp:"なにも たべません。",en:"I don’t eat anything."},{jp:"どこへも いきません。",en:"I don’t go anywhere."},{jp:"だれも いません。",en:"There is nobody."}],
   imgs:["5-1-4.webp"]},
  {label:"Only",jp:"だけ",lv:"L6",
   meaning:"だけ after a noun means \"only / just that much\".",
   pattern:"[Noun] だけ",
   rows:[{jp:"私は しゅうまつだけ パンやで アルバイトします。",en:"I work at the bakery only on weekends."}]},
]},

{id:"G-TIME",title:"じかん",en:"Time & dates",goal:"The clock, から〜まで, the days and months, and asking someone their schedule.",vid:{"u":"https://www.youtube.com/watch?v=M-COP8FZTKA","t":"Telling the time"},emoji:_gicon.clock,cards:[
  {label:"Telling the time",jp:"いま、なんじですか",lv:"L4",vid:"M-COP8FZTKA",
   meaning:"Times are [number]じ [number]ふん. 30 minutes = はん.",
   pattern:"Q: いま、なんじですか。　A: ⚪︎じ⚪︎ふんです。",
   rows:[{jp:"Q：すみません、いま、なんじですか。",en:"Excuse me, what time is it now?"},{jp:"A：ええっと、12じです。",en:"Um… it is 12 o’clock."},{jp:"0：30 → さんじゅっぷん ＝ はん",en:"30 minutes = \"half\""},{jp:"A：どうも ありがとうございました。 B：いいえ。",en:"Thank you very much. — Not at all."}],
   note:"Sound changes: 4じ＝よじ、7じ＝しちじ、9じ＝くじ；1ぷん・3ぷん・4ふん・6ぷん・8ぷん・10ぷん。",
   imgs:["4-1-2.webp","4-1-3.webp","4-1-4.webp"]},
  {label:"From … until …",jp:"〜から 〜まで",lv:"L4",
   meaning:"から = starting point, まで = ending point. Used together for opening hours and schedules.",
   pattern:"[Start] から [End] まで です。",
   rows:[{jp:"Q：ぎんこうは なんじから なんじまで ですか。",en:"From what time until what time is the bank open?"},{jp:"A：9じから 3じまで です。",en:"From 9:00 until 3:00."},{jp:"Q：なんじからですか。 A：11じ40ぷんからです。",en:"From what time? — From 11:40."}],
   convo:{title:"れんしゅう ｜ Asking opening hours",lines:[["Q","〇〇さん、アメリカのぎんこうは なんじからですか。","What time do banks open in the USA?"],["A","＿＿からです。","They open at ＿＿."],["Q","なんじまでですか。","Until what time?"],["A","＿＿までです。","Until ＿＿."],["Q","そうですか。ありがとうございます。","I see. Thank you."]]},
   imgs:["4-2-1.webp","4-2-2.webp","4-2-4.webp"]},
  {label:"Days of the week",jp:"なんようび",lv:"L4",
   meaning:"The seven 曜日 plus なんようび to ask which day.",
   pattern:"Q: [Event] は なんようびですか。　A: ⚪︎ようびです。",
   rows:[{jp:"げつようび・かようび・すいようび・もくようび・きんようび・どようび・にちようび",en:"Mon · Tue · Wed · Thu · Fri · Sat · Sun"},{jp:"Q：テストは なんようびですか。 A：すいようびです。",en:"What day is the test? — Wednesday."}],
   imgs:["4-4-1.webp"]},
  {label:"Dates",jp:"なんがつ・なんにち・いつ",lv:"L4",
   meaning:"なんがつ asks the month, なんにち the day of the month, いつ asks \"when\" in general.",
   pattern:"Q: [Event] は なんがつ／なんにち／いつ ですか。　A: ⚪︎がつ⚪︎にちです。",
   rows:[{jp:"Q：たんじょうびは いつですか。",en:"When is your birthday?"},{jp:"A：5がつ22にちです。",en:"It is May 22nd."},{jp:"Q：なつやすみは なんがつからですか。",en:"What month does summer holiday start?"}],
   note:"Irregular days: 1日ついたち・2日ふつか・3日みっか・4日よっか・5日いつか・6日むいか・7日なのか・8日ようか・9日ここのか・10日とおか・14日じゅうよっか・20日はつか。",
   imgs:["4-5-1.webp","4-5-2.webp","4-5-3.webp","4-5-4.webp","4-4-2.webp"]},
  {label:"Asking a schedule",jp:"スケジュールを きく",lv:"L4",
   meaning:"Combine なんじから／なんじまで to ask about work, class or a film, then make a plan.",
   rows:[{jp:"Q：えいがは なんじからですか。",en:"What time does the film start?"},{jp:"Q：ゆうびんきょくは なんじから なんじまでですか。",en:"From what time to what time is the post office open?"}],
   convo:{title:"さそう ｜ Inviting someone",lines:[["A","しごとは、なんじまでですか。","Until what time is your work?"],["B","19じまでです。","Until 7 p.m."],["A","にちようび、えいがを みませんか。","Would you like to see a film on Sunday?"],["B","にちようびは、しごとです…。","Sunday I have work…"],["A","じゃあ、どようびは？","Then how about Saturday?"],["B","どようびは、だいじょうぶです。","Saturday is fine."]]},
   imgs:["4-3-1.webp","4-3-2.webp","4-3-3.webp"]},
]},

{id:"G-CTR",title:"すうじ・じょすうし",en:"Numbers, prices & counters",goal:"Reading numbers aloud, asking a price, and which counter goes with which kind of thing.",vid:{"u":"https://www.youtube.com/watch?v=9u6e1HkxQCs","t":"助数詞 — counter words"},emoji:_gicon.count,cards:[
  {label:"Phone numbers",jp:"でんわばんごう",lv:"L2",
   meaning:"Read a phone number digit by digit and put の where the hyphen is. Use なんばん to ask which number.",
   pattern:"[Person] の でんわばんごうは ＿＿ です。　Q: でんわばんごうは なんばんですか。",
   rows:[{jp:"080 の 3462 の 9751 です。",en:"080-3462-9751."},{jp:"Q：でんわばんごうは なんばんですか。",en:"What is your phone number?"},{jp:"A：03 の 3328 の 9543 です。",en:"It is 03-3328-9543."}],
   note:"0＝ゼロ／れい、4＝よん、7＝なな、9＝きゅう when reading numbers aloud. If you miss it: すみません、もういちどおねがいします。／ すみません、ゆっくりおねがいします。",
   imgs:["2-1-2.webp","2-1-3.webp"]},
  {label:"Prices",jp:"いくらですか",lv:"L2",
   meaning:"いくら asks the price. Answer with the number + えん.",
   pattern:"Q: [Noun] は いくらですか。　A: ＿＿ えんです。",
   rows:[{jp:"Q：このかさは いくらですか。",en:"How much is this umbrella?"},{jp:"A：1200えんです。",en:"It is 1,200 yen."}],
   note:"Watch the sound changes: 300＝さんびゃく、600＝ろっぴゃく、800＝はっぴゃく、3000＝さんぜん、8000＝はっせん。",
   imgs:["2-3-2.webp","2-3-3.webp","2-4-4.webp"]},
  {label:"1つ、2つ — small & round things",jp:"つ",lv:"L7",vid:"9u6e1HkxQCs",
   meaning:"The native counter used for most small objects when no special counter fits.",
   rows:[{jp:"ひとつ・ふたつ・みっつ・よっつ・いつつ",en:"1–5"},{jp:"むっつ・ななつ・やっつ・ここのつ・とお",en:"6–10"},{jp:"Q：いくつですか。",en:"How many?"}],
   imgs:["ref-counter-1.webp"]},
  {label:"1個、2個 — small items",jp:"こ",lv:"L7",
   meaning:"こ is used for small, roughly round items — an alternative to つ.",
   rows:[{jp:"いっこ・にこ・さんこ・よんこ・ごこ",en:"1–5"},{jp:"ろっこ・ななこ・はちこ（はっこ）・きゅうこ・じゅっこ",en:"6–10 ⚠ sound changes"},{jp:"Q：なんこですか。",en:"How many?"}],
   imgs:["ref-counter-2.webp"]},
  {label:"1本、2本 — long things",jp:"ほん",lv:"L7",
   meaning:"ほん counts long, thin things: pens, bottles, umbrellas, bananas.",
   rows:[{jp:"いっぽん・にほん・さんぼん・よんほん・ごほん",en:"1–5 ⚠"},{jp:"ろっぽん・ななほん・はっぽん・きゅうほん・じゅっぽん",en:"6–10 ⚠"},{jp:"Q：なんぼんですか。",en:"How many?"}],
   imgs:["ref-counter-3.webp"]},
  {label:"1杯、2杯 — cups, glasses & bowls",jp:"はい",lv:"L7",
   meaning:"はい counts what fills a カップ、グラス or ちゃわん — a cup of coffee, a glass of juice, a bowl of rice.",
   rows:[{jp:"いっぱい・にはい・さんばい・よんはい・ごはい",en:"1–5 ⚠"},{jp:"ろっぱい・ななはい・はっぱい・きゅうはい・じゅっぱい",en:"6–10 ⚠"},{jp:"Q：なんばいですか。",en:"How many?"}],
   imgs:["ref-counter-5.webp"]},
  {label:"1枚、2枚 — thin flat things",jp:"まい",lv:"L7",
   meaning:"まい counts うすいもの — paper, tickets, shirts, plates, a slice of pizza. No sound changes at all.",
   rows:[{jp:"いちまい・にまい・さんまい・よんまい・ごまい",en:"1–5"},{jp:"ろくまい・ななまい・はちまい・きゅうまい・じゅうまい",en:"6–10"},{jp:"Q：なんまいですか。",en:"How many?"}],
   imgs:["ref-counter-6.webp"]},
  {label:"1人、2人 — people",jp:"にん",lv:"L7",
   meaning:"にん counts people. 1 and 2 are irregular (ひとり・ふたり) and 4 is よにん.",
   rows:[{jp:"ひとり・ふたり・さんにん・よにん・ごにん",en:"1–5 ⚠"},{jp:"ろくにん・しちにん・はちにん・きゅうにん・じゅうにん",en:"6–10"},{jp:"Q：なんにんですか。",en:"How many?"}],
   imgs:["ref-counter-7.webp"]},
  {label:"1冊、2冊 — books",jp:"さつ",lv:"L7",
   meaning:"さつ counts bound things: books, magazines, notebooks.",
   rows:[{jp:"いっさつ・にさつ・さんさつ・よんさつ・ごさつ",en:"1–5"},{jp:"ろくさつ・ななさつ・はっさつ・きゅうさつ・じゅっさつ",en:"6–10"},{jp:"Q：なんさつですか。",en:"How many?"}],
   note:"オーダーは「つ」でOK！ — ordering at a shop, つ always works: ビール3つ、ラーメン1つ ください。 Tap any number word in the Words tab to open the full counter tables.",
   imgs:["ref-counter-4.webp"]},
]},

{id:"G-CONV",title:"かいわ",en:"Set conversations",goal:"The exchanges drilled whole in class: introducing yourself, shopping, phone numbers and asking the route.",emoji:_gicon.chat,cards:[
  {label:"Self-introduction",jp:"じこしょうかい",lv:"L1",
   meaning:"The self-introduction script practised in class. Fill each blank, then say it straight through.",
   pattern:"はじめまして。／ わたしは ＿＿ です。／ ＿＿ じん です。／ ＿＿ です。／ ＿＿ が すきです。／ どうぞ よろしくおねがいします。",
   convo:{title:"〜じこしょうかい〜",lines:[["","はじめまして。","Nice to meet you."],["","わたしは ジャスティンです。","I am Justin."],["","アメリカじんです。","I am American."],["","がくせいです。","I am a student."],["","すしが すきです。","I like sushi."],["","どうぞ よろしくおねがいします。","Pleased to meet you."]]},
   note:"★ポイント★ ①ぶんぽう grammar ②はつおん pronunciation ③ないよう content — the three things the report is marked on.",
   imgs:["1-2-4.webp","ref-selfintro-1.webp","ref-selfintro-2.webp","ref-selfintro-3.webp"]},
  {label:"Shop conversation",jp:"おみせの かいわ",lv:"L2",
   meaning:"The full shop dialogue practised in class — ask the price, ask where it is from, then buy it.",
   convo:{title:"おみせで ｜ At the shop",lines:[["A","すみません、（この）とけいは（いくらですか）。","Excuse me, how much is this watch?"],["B","ああ、それは（12,000）円です。","Ah, that one is 12,000 yen."],["A","そうですか。どこのとけいですか。","I see. Where is the watch from?"],["B","スイスのとけいです。","It is a Swiss watch."],["A","じゃあ、これを（ください）。","Then I’ll take this one, please."],["B","はい。ありがとうございました。","Certainly. Thank you very much."]]},
   imgs:["2-4-5.webp"]},
  {label:"Ordering at a shop",jp:"おみせの かいわ",lv:"L7",
   meaning:"The full fast-food ordering conversation drilled in class. Order with を…ください, then ask ぜんぶでいくらですか.",
   pattern:"[Item] を [counter] と [Item] を [counter] ください。／ ぜんぶで いくらですか。",
   convo:{title:"ファーストフードで ｜ At the fast-food shop",lines:[["A（てんいん）","いらっしゃいませ。","Welcome!"],["B（きゃく）","ハンバーガーを ふたつと オレンジジュースを みっつ ください。","Two hamburgers and three orange juices, please."],["A","はい。","Certainly."],["B","ぜんぶで いくらですか。","How much is it altogether?"],["A","1120円です。ありがとうございます。","1,120 yen. Thank you very much."]]},
   note:"Practise the same script with the ケーキ屋 menu: チョコレートケーキ・チーズケーキ・モンブラン・ショートケーキ.",
   imgs:["7-2-1.webp","7-2-2.webp","7-2-3.webp","7-2-4.webp"]},
  {label:"Shoe-shop conversation",jp:"くつやの かいわ",lv:"L11",
   meaning:"The information-gap shop conversation using comparison and すぎます.",
   convo:{title:"くつやで ｜ At the shoe shop",lines:[["A","すみません、この黒いパンプスを（みせてください）。","Excuse me, could you show me these black pumps?"],["B","はい、ありますよ。少々お待ちください。","Certainly, we have them. One moment please."],["B","はい、どうぞ。… いかがですか。","Here you are. … How are they?"],["A","うーん。これは、ちょっと…。ヒールが高すぎて、（あるきにくい）です。","Hmm, these are a bit… The heels are too high and hard to walk in."],["B","そうですか…。では、こちらの青いパンプスはどうですか。","I see. Then how about these blue pumps?"],["A","うーん、ちょっとサイズが（小さい）ですね。","Hmm, the size is a little small."],["A","これは、ちょうどいいです！ちょっと（あるいてもいいですか）。","These are just right! May I walk a little?"],["B","もちろんです。どうぞ。","Of course. Go ahead."],["A","ありがとうございます。","Thank you."]]}},
  {label:"Asking the route",jp:"どうやって いきますか",lv:"L10",
   meaning:"The full route-asking conversation: how, how long, how much.",
   convo:{title:"よこはまへ いきたいです",lines:[["Ａ","すみません、横浜へ行きたいですが、どうやって行きますか。","Excuse me, I want to go to Yokohama — how do I get there?"],["Ｂ","横浜ですね。まず、山手線にのります。","Yokohama, right. First, take the Yamanote Line."],["Ａ","山手線ですね。","The Yamanote Line."],["Ｂ","ええ、山手線にのって、新宿でおりてください。","Yes — take the Yamanote Line and get off at Shinjuku."],["Ａ","新宿ですね。","Shinjuku."],["Ｂ","ええ、新宿で湘南新宿ラインにのりかえて、横浜まで行きます。","Yes, change to the Shonan-Shinjuku Line at Shinjuku and go to Yokohama."],["Ａ","あのう、ここから横浜までどのぐらいかかりますか。","Um, how long does it take from here to Yokohama?"],["Ｂ","45分です。","45 minutes."],["Ａ","いくらかかりますか。","How much does it cost?"],["Ｂ","580円です。","580 yen."],["Ａ","わかりました。どうもありがとうございました。","I see. Thank you very much."],["Ｂ","いいえ、どういたしまして。","Not at all."]]},
   imgs:["10-4-3.webp"]},
  {label:"Classroom phrases",jp:"きょうしつの ひょうげん",lv:"L1",
   meaning:"What to say when you did not catch something, or need more time.",
   rows:[{jp:"すみません、もういちど おねがいします。",en:"Sorry, once more please."},{jp:"すみません、ゆっくり おねがいします。",en:"Sorry, more slowly please."},{jp:"ちょっと まってください。",en:"Please wait a moment."},{jp:"わかりました。／ わかりません。",en:"I understand. / I don’t understand."},{jp:"にほんごで なんですか。",en:"What is it in Japanese?"}],
   imgs:["ref-expr-1.webp"]},
]},
];function renderSheets(){
  const el = document.getElementById('content');
  el.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;"><div class="sheets-tabs" style="margin:0;"><button class="sheet-tab active" id="stab-verbs" onclick="switchSheet(\'verbs\',this)">Verbs</button><button class="sheet-tab" id="stab-adj" onclick="switchSheet(\'adj\',this)">Adjectives</button><button class="sheet-tab" id="stab-nouns" onclick="switchSheet(\'nouns\',this)">Nouns</button><button class="sheet-tab" id="stab-kanji" onclick="switchSheet(\'kanji\',this)">Kanji</button><button class="sheet-tab" id="stab-expr" onclick="switchSheet(\'expr\',this)">Expr</button></div><div id="sheet-lvl-filters" style="display:flex;gap:4px;flex-wrap:wrap;align-items:center;min-height:28px;"></div></div><div id="sheet-content"></div><div style="padding:12px 0 8px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><button onclick="copySheet()" id="copy-btn" style="height:36px;padding:0 18px;border-radius:20px;border:none;background:var(--red);color:#fff;font-size:12px;font-weight:700;font-family:Arial,sans-serif;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.15);display:inline-flex;align-items:center;gap:7px;transition:opacity .15s;letter-spacing:.04em;flex-shrink:0;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button><div id="copy-cols" class="copy-cols"></div><div style="margin-left:auto;display:flex;align-items:center;gap:8px;padding:7px 12px;background:var(--rose);border-radius:12px;border-left:3px solid var(--red);font-size:11px;color:var(--sub);font-family:Arial,sans-serif;line-height:1.6;"><img src="https://avatars.githubusercontent.com/u/616547?s=280&v=4" style="width:22px;height:22px;border-radius:4px;flex-shrink:0;" alt="Quizlet"><span><b style="color:var(--red);">Import to Quizlet</b> — Click Copy, then on Quizlet create a <b>new flashcard set</b>, click <b>Import</b>, paste as‑is and you&#39;re done!</span></div></div>';
  // Migrate legacy 'questions' type to 'expr'
  if(currentSheetType === 'questions') currentSheetType = 'expr';
  switchSheet(currentSheetType, document.getElementById('stab-'+currentSheetType) || document.getElementById('stab-verbs'), true);
}

let currentSheetType = 'verbs';
let activeSheetLvls = new Set();
let activeKanjiModes = new Set(['read','write']);

function renderLvlFilters(type){
  const el = document.getElementById('sheet-lvl-filters');
  if(!el) return;
  if(type === 'expr'){ el.innerHTML=''; return; }
  if(type === 'kanji'){
    const kls=['KL1','KL2','KL3','KL4','KL5','KL6','KL7','KL8','SIGN'];
    const pill=(active,label,click)=>'<button onclick="'+click+'" style="height:28px;padding:0 '+(label.length>2?'10':'0')+'px;'+(label.length<=2?'width:28px;':'')+'border-radius:'+(label.length<=2?'50%':'14px')+';border:1.5px solid '+(active?'var(--red)':'var(--dot)')+';background:'+(active?'var(--red)':'var(--white)')+';color:'+(active?'var(--white)':'var(--mid)')+';font-size:'+(label.length<=2?'9':'10')+'px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;'+( label.length<=2?'padding:0;':'')+'">' +label+'</button>';
    const klBtns=kls.map(kl=>pill(activeSheetLvls.has(kl), kl==='SIGN'?'Sign':kl.replace('KL',''), "filterSheetKl('"+kl+"',this)")).join('');
    const sep='<span style="width:6px;display:inline-block;"></span>';
    const mkMode=(mode,svg)=>{const a=activeKanjiModes.has(mode);return '<button onclick="toggleSheetKanjiMode(\''+mode+'\')" title="'+mode[0].toUpperCase()+mode.slice(1)+'" style="width:28px;height:28px;border-radius:50%;border:1.5px solid '+(a?'var(--red)':'var(--dot)')+';background:'+(a?'var(--red)':'var(--white)')+';color:'+(a?'var(--white)':'var(--mid)')+';cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;">'+svg+'</button>';};
    const eyeSvg='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    const penSvg='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
    const mr=mkMode('read',eyeSvg);
    const mw=mkMode('write',penSvg);
    el.innerHTML=klBtns+sep+mr+mw;
    return;
  }
  const src=sheetData[type]||[];
  const lvls=[...new Set(src.map(r=>String(r.lvl)))].sort((a,b)=>(a==='EXPR')-(b==='EXPR')||parseInt(a)-parseInt(b));
  el.innerHTML=lvls.map(lvl=>{
    const a=activeSheetLvls.has(lvl);
    const lab=String(lvl);
    const wide=lab.length>2;
    return '<button onclick="filterSheetLvl(\''+lvl+'\',this)" title="'+(lvl==='EXPR'?'Expressions':'Lesson '+lvl)+'" style="'+(wide?'padding:0 9px;border-radius:14px;':'width:28px;border-radius:50%;padding:0;')+'height:28px;border:1.5px solid '+(a?'var(--red)':'var(--dot)')+';background:'+(a?'var(--red)':'var(--white)')+';color:'+(a?'var(--white)':'var(--mid)')+';font-size:10px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;">'+lab+'</button>';
  }).join('');
}

function toggleSheetKanjiMode(mode){
  if(activeKanjiModes.has(mode)) activeKanjiModes.delete(mode); else activeKanjiModes.add(mode);
  renderLvlFilters('kanji'); renderSheetTable('kanji');
}

function filterSheetKl(kl, btn){
  if(activeSheetLvls.has(kl)) activeSheetLvls.delete(kl); else activeSheetLvls.add(kl);
  renderLvlFilters(currentSheetType);
  renderSheetTable(currentSheetType);
}
function filterSheetLvl(lvl, btn){
  if(activeSheetLvls.has(lvl)) activeSheetLvls.delete(lvl); else activeSheetLvls.add(lvl);
  renderLvlFilters(currentSheetType);
  renderSheetTable(currentSheetType);
}

function switchSheet(type, btn, preserveState){
  document.querySelectorAll('.sheets-tabs .sheet-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  // Save current tab's state before switching
  if(sheetTabStates[currentSheetType]){
    sheetTabStates[currentSheetType].lvls = new Set(activeSheetLvls);
    if(currentSheetType === 'kanji') sheetTabStates['kanji'].modes = new Set(activeKanjiModes);
  }
  currentSheetType = type;
  // Restore new tab's state
  if(sheetTabStates[type]){
    activeSheetLvls = new Set(sheetTabStates[type].lvls);
    if(type === 'kanji') activeKanjiModes = new Set(sheetTabStates['kanji'].modes);
  } else if(!preserveState){
    activeSheetLvls = new Set();
  }
  renderLvlFilters(type); renderCopyCols();
  renderSheetTable(type);
}

function _lvlLabel(l){ return String(l)==='EXPR' ? 'EXPR' : 'L'+l; }
function renderSheetTable(type){
  const el = document.getElementById('sheet-content');
  let src = type==='expr' ? questionsData : (sheetData[type]||[]);
  if(activeSheetLvls.size>0) src = type==='kanji' ? src.filter(r=>activeSheetLvls.has(r.kl)) : src.filter(r=>activeSheetLvls.has(String(r.lvl)));
  let headers, rows;
  if(type==='verbs'){
    headers=['Verb (Masu)','English','Dictionary','て-form','ない form','Group','Level'];
    rows=src.map(r=>{
      const conj=conjLookup[r.word+'#G'+r.grp]||conjLookup[r.reading+'#G'+r.grp]||conjLookup[r.word]||conjLookup[r.reading]||[];
      const nai=(conj.find(f=>f.label==='ない form')||{jp:''}).jp;
      const display=r.reading||r.word;
      return '<tr><td class="jp notranslate" translate="no">'+display+'</td><td>'+r.eng+'</td><td class="jp notranslate" translate="no">/ '+r.dict+'</td><td class="jp notranslate" translate="no">/ '+r.te+'</td><td class="jp notranslate" translate="no">/ '+nai+'</td><td><span class="sheet-grp-G'+r.grp+'">(G'+r.grp+')</span></td><td><span class="sheet-lvl">'+_lvlLabel(r.lvl)+'</span></td></tr>';
    });
  } else if(type==='adj'){
    headers=['Adjective','English','Type','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.reading||r.word)+'</td><td>'+r.eng+'</td><td style="font-family:Chihaya,serif;font-weight:700;color:'+(r.adj==='i'?'#75255f':'#3a1a6a')+'" translate="no">'+(r.adj==='i'?'(い)':'(な)')+'</td><td><span class="sheet-lvl">'+_lvlLabel(r.lvl)+'</span></td></tr>');
  } else if(type==='nouns'){
    headers=['Noun','English','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.word)+(r.reading&&r.reading!==r.word?'　<span class="sm">'+r.reading+'</span>':'')+'</td><td>'+r.eng+'</td><td><span class="sheet-lvl">'+_lvlLabel(r.lvl)+'</span></td></tr>');
  } else if(type==='kanji'){
    if(activeKanjiModes.size>0&&activeKanjiModes.size<2) src=src.filter(r=>activeKanjiModes.has(r.mode));
    headers=['Kanji','Reading','Meaning','Practice','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+r.kanji+'</td><td class="sm notranslate" translate="no">'+r.reading+'</td><td>/ '+r.meaning+'</td><td><span class="sheet-lvl" style="background:'+(r.mode==='write'?'var(--rose)':'rgba(0,0,0,.05)')+'">'+r.mode+'</span></td><td><span class="sheet-lvl">'+r.kl+'</span></td></tr>');
  } else {
    headers=['Expression','English','Category'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.reading||r.jp)+'</td><td>'+r.eng+'</td><td style="color:var(--sub);font-size:11px;">'+(r.cat||'')+'</td></tr>');
  }
  el.innerHTML='<div class="sheet-wrap"><table class="sheet-table" id="main-sheet-table"><thead><tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+rows.join('')+'</tbody></table></div>';
}
// Which columns the Copy button puts on the clipboard, per sheet. Everything
// is on by default; untick a column to copy, say, just the word and its
// て-form into Quizlet.
const SHEET_COLS = {
  verbs: [['word','Word'],['eng','English'],['dict','Dictionary'],['te','て-form'],['nai','ない form'],['grp','Group'],['lvl','Level']],
  adj:   [['word','Word'],['eng','English'],['type','い / な'],['lvl','Level']],
  nouns: [['word','Word'],['eng','English'],['lvl','Level']],
  kanji: [['word','Kanji'],['reading','Reading'],['eng','Meaning'],['lvl','Level']],
  expr:  [['word','Expression'],['eng','English'],['cat','Category']],
};
const _copyCols = {};
function _cols(type){
  if(!_copyCols[type]) _copyCols[type] = new Set((SHEET_COLS[type]||[]).map(c=>c[0]));
  return _copyCols[type];
}
function toggleCopyCol(key, btn){
  const set=_cols(currentSheetType);
  if(set.has(key)) set.delete(key); else set.add(key);
  btn.classList.toggle('active', set.has(key));
}
function renderCopyCols(){
  const el=document.getElementById('copy-cols');
  if(!el) return;
  const defs=SHEET_COLS[currentSheetType]||[];
  const set=_cols(currentSheetType);
  el.innerHTML='<span class="cc-label">Copy</span>'+defs.map(([k,label])=>
    `<button class="cc-chip${set.has(k)?' active':''}" onclick="toggleCopyCol('${k}',this)">${label}</button>`).join('');
}
// One record per row, then the selected columns are picked off it.
function _sheetRecords(){
  const t=currentSheetType;
  if(t==='verbs'){
    let src=sheetData.verbs; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(String(r.lvl)));
    return src.map(r=>{
      const conj=conjLookup[r.word+'#G'+r.grp]||conjLookup[r.reading+'#G'+r.grp]||conjLookup[r.word]||conjLookup[r.reading]||[];
      const nai=(conj.find(f=>f.label==='ない form')||{jp:''}).jp;
      return {word:r.reading||r.word, eng:r.eng, dict:r.dict, te:r.te, nai, grp:'G'+r.grp, lvl:_lvlLabel(r.lvl)};
    });
  }
  if(t==='adj'){
    let src=sheetData.adj; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(String(r.lvl)));
    return src.map(r=>({word:r.reading||r.word, eng:r.eng, type:r.adj==='i'?'い':'な', lvl:_lvlLabel(r.lvl)}));
  }
  if(t==='nouns'){
    let src=sheetData.nouns; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(String(r.lvl)));
    return src.map(r=>({word:r.reading||r.word, eng:r.eng, lvl:_lvlLabel(r.lvl)}));
  }
  if(t==='kanji'){
    let src=sheetData.kanji;
    if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(r.kl));
    if(activeKanjiModes.size>0&&activeKanjiModes.size<2) src=src.filter(r=>activeKanjiModes.has(r.mode));
    return src.map(r=>({word:r.kanji, reading:r.reading, eng:r.meaning, lvl:r.kl}));
  }
  return questionsData.map(r=>({word:r.reading||r.jp, eng:r.eng, cat:r.cat||''}));
}
function copySheet(){
  const btn=document.getElementById('copy-btn');
  const keys=(SHEET_COLS[currentSheetType]||[]).map(c=>c[0]).filter(k=>_cols(currentSheetType).has(k));
  const tsv=_sheetRecords().map(rec=>keys.map(k=>rec[k]||'').join('\t')).join('\n');
  const restore=()=>{btn.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy';btn.style.opacity='1';};
  const done=()=>{btn.innerHTML='&#10003; Copied';btn.style.opacity='.7';setTimeout(restore,2000);};
  if(!keys.length){ btn.innerHTML='Pick a column'; setTimeout(restore,1600); return; }
  navigator.clipboard.writeText(tsv).then(done).catch(()=>{const ta=document.createElement('textarea');ta.value=tsv;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);done();});
}

// ── Colour coding for grammar patterns and examples ───────────────────────
// Particles are only ever highlighted when they stand as their own token —
// after a space or a slot, and before a space or punctuation. A kana that
// happens to sit inside a word is never touched.
const _PARTICLES = ['について','から','まで','より','ごろ','ぐらい','では','には','へは',
                    'は','が','を','に','で','へ','と','も','の'];
const _PBOUND_L = '(^|[\\s　\\]）」／/｜])';
const _PBOUND_R = '($|[\\s　\\[（「／/｜。、])';
const _PRX = new RegExp(_PBOUND_L+'('+_PARTICLES.join('|')+')'+_PBOUND_R,'g');
function _hlParticles(t){
  // run twice: adjacent particles share a boundary character
  const one = s => s.replace(_PRX, (m,a,p,b)=>a+'<b class="hl-p">'+p+'</b>'+b);
  return one(one(t));
}
// ── Pattern renderer ──────────────────────────────────────────────────────
// A pattern is written as one string. Rendering it as one line is what made
// the て-form card unreadable, so it is broken up: ｜ starts a new row, ①②③
// becomes a group badge, and every X→Y becomes its own chip.
function _patRow(seg){
  let s = seg.trim();
  let badge = '';
  const g = s.match(/^([①-⑳])\s*/);
  if(g){ badge = `<span class="pt-g">${g[1]}</span>`; s = s.slice(g[0].length); }
  const qa = s.match(/^([QAＱＡ])\s*[:：]\s*/);
  if(qa){ badge = `<span class="pt-qa">${qa[1]}</span>`; s = s.slice(qa[0].length); }
  // a row that is a list of transformations becomes one chip per arrow
  if(/[→⇒]/.test(s)){
    const items = s.split(/[、,]\s*/).filter(Boolean).map(it=>{
      const m = it.split(/[→⇒]/);
      if(m.length===2) return `<span class="pt-x"><b>${m[0].trim()}</b><i>→</i><em>${m[1].trim()}</em></span>`;
      return `<span class="pt-x pt-x-plain">${_hlSlots(it.trim())}</span>`;
    }).join('');
    return `<div class="pt-row">${badge}<div class="pt-chips">${items}</div></div>`;
  }
  // otherwise it is a sentence frame: colour the slots and the particles
  return `<div class="pt-row">${badge}<div class="pt-frame">${_hlParticles(_hlSlots(s))}</div></div>`;
}
function _hlSlots(s){
  return s.replace(/\[([^\]]+)\]/g, (m,x)=>'<span class="hl-slot">'+x+'</span>')
          .replace(/⚪︎⚪︎|⚪⚪/g, '<span class="hl-slot">◯◯</span>');
}
function _hlPattern(t){
  const esc=_ea(t);
  // 「A ｜ B」 and a wide space both start a new row
  const segs = esc.split(/｜|　+/).map(x=>x.trim()).filter(Boolean);
  return `<div class="pt">${segs.map(_patRow).join('')}</div>`;
}

// Example sentences are NOT auto-coloured. A particle in running text cannot
// be told apart from the same kana inside a word without parsing: an audit of
// this data flagged でも, the て-form of のむ/よむ/およぐ, ちょっと, どうも and
// この as false hits. Only the speaker markers, which are plain ASCII, are
// marked — the rule itself is colour-coded in the pattern line above.
function _hlExample(t){
  return _ea(t).replace(/([QAＱＡ])(\s*[:：])/g, '<span class="hl-qa">$1$2</span>');
}
function renderGrammar(){
  const q = currentSearch;
  const el = document.getElementById('content');
  const sections = grammarSections.filter(sec=>
    !q || matchesSearch(q,sec.title,sec.en) ||
    sec.cards.some(c=>matchesSearch(q,c.label,c.meaning||'',c.pattern||'',c.note||'',(c.rows||[]).map(r=>r.jp+' '+r.en).join(' ')))
  );
  if(!sections.length){ el.innerHTML='<div class="empty"><span class="empty-jp">文</span>No grammar found.</div>'; return; }
  const makeSect=sec=>{
    const cards=!q?sec.cards:sec.cards.filter(c=>matchesSearch(q,c.label,c.meaning||'',c.pattern||'',c.note||'',(c.rows||[]).map(r=>r.jp+' '+r.en).join(' ')));
    const useCards=cards.length?cards:sec.cards;
    const cardsHtml=useCards.map(c=>{
      const meaningHtml=c.meaning?`<div class="gc-meaning">${c.meaning}</div>`:'';
      const patternHtml=c.pattern?`<div class="gc-pattern notranslate" translate="no">${_hlPattern(c.pattern)}</div>`:'';
      const rowsHtml=(c.rows||[]).map(r=>`<span class="gc-ex" translate="no">${_hlExample(r.jp)}<span class="gc-ex-en">${_warn(r.en)}</span></span>`).join('');
      const noteHtml=c.note?`<div class="gc-note">${c.note}</div>`:'';
      const convoHtml=c.convo?`<div class="gc-convo"><div class="gc-convo-title notranslate" translate="no">${c.convo.title}</div>${
        c.convo.lines.map(l=>`<div class="gc-convo-line"><span class="gc-convo-sp notranslate" translate="no">${l[0]||''}</span><span class="gc-convo-jp notranslate" translate="no">${_hlExample(l[1])}</span><span class="gc-convo-en">${l[2]||''}</span></div>`).join('')
      }</div>`:'';
      const imgsHtml=(c.imgs&&c.imgs.length)?`<div class="gc-imgs">${
        c.imgs.map(src=>`<button class="gc-img-btn" onclick="openMaterial('materials/${src}')" title="Class slide — tap to enlarge"><img class="gc-img" loading="lazy" decoding="async" data-src="materials/${src}" alt="Slide from the class material"></button>`).join('')
      }</div>`:'';
      // Drop the lesson-section prefix and split the rest into title + subtitle
      // so the card leads with what it teaches, not with a code.
      // The level badge sits rightmost on the card, the same place and shape
      // it takes on a word card. It is the lesson the material teaches the
      // rule in, so a rule and the words from that lesson carry the same L.
      const lvlTag=c.lv?`<span class="vc-lvl-tag gc-lvl" title="Taught in lesson ${c.lv.slice(1)}">${c.lv}</span>`:'';
      const head=`<div class="gram-fc-head"><div class="gram-fc-label"><span class="gc-t">${c.label}</span>${c.jp?`<span class="gc-t-jp notranslate" translate="no">${c.jp}</span>`:''}</div>${lvlTag}</div>`;
      const body=`${meaningHtml}${patternHtml}${rowsHtml?`<div class="gram-fc-rule notranslate">${rowsHtml}</div>`:''}${convoHtml}`;
      const vidHtml=c.vid?`<div class="gc-vid"><iframe data-src="https://www.youtube-nocookie.com/embed/${c.vid}?rel=0&modestbranding=1" title="Video explanation" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`:'';
      return `<div class="gram-fc" data-lv="${c.lv||''}">${head}${body}<div class="gc-foot">${vidHtml}${imgsHtml}${noteHtml}</div></div>`;
    }).join('');
    const goalHtml=sec.goal?`<div class="gram-goal"><span class="gram-goal-tag">ゴール</span>${sec.goal}</div>`:'';
    const hasPat=useCards.some(c=>c.pattern);
    const legendHtml=hasPat?`<div class="gc-legend"><i><b class="hl-slot">slot</b> what you swap in</i><i><b class="hl-p">は</b> particle</i></div>`:'';
    const vidHtml=sec.vid?`<a class="gram-vid" href="${sec.vid.u}" target="_blank" rel="noopener noreferrer"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15.2V8.8l5.2 3.2z"/></svg><span>${sec.vid.t}</span></a>`:'';
    return `<div class="gram-section"><div class="gram-section-header" onclick="toggleGramSection(this)"><span class="gram-section-arrow">\u203a</span><span class="gram-section-emoji">${sec.emoji}</span><span class="gram-section-en">${sec.en}</span><span class="gram-section-title notranslate" translate="no">${sec.title}</span><span class="lt-line"></span><span class="lt-count">${sec.cards.length} rules</span></div><div class="gram-section-body">${goalHtml}${vidHtml}${legendHtml}<div class="gram-fc-grid">${cardsHtml}</div></div></div>`;
  };
  // Full-width sections stacked, the same shape as the Words tab.
  const all=sections.map(makeSect).join('');
  el.innerHTML=`<div class="gram-sections-grid">${all}</div>`;
  // Restore open sections after re-render
  if(_gramOpenSections.size>0){
    document.querySelectorAll('.gram-section-header').forEach(h=>{
      const t=h.querySelector('.gram-section-title');
      if(t && _gramOpenSections.has(t.textContent.trim()) && !h.classList.contains('open')){
        _loadSectionImages(h);
        h.classList.add('open');
        h.nextElementSibling.classList.add('open');
        h.closest('.gram-section').classList.add('open');
      }
    });
  }
  _syncSecToggle();
  document.querySelectorAll('#gf-panel .float-btn[data-lv]').forEach(b=>b.classList.toggle('active', activeGramLevels.has(b.dataset.lv)));
  _updateGramBadge();
  applyGramFilters();
}

function renderAll(){
  const q = currentSearch;
  const el = document.getElementById('content');
  let html = '';

  // Words (vocabulary + kanji, grouped by lesson)
  const vData = vocabData[sem]||{};
  const kData = kanjiData[sem]||{};
  let wHtml = '';
  for(const lvl of WORD_LEVELS){
    const kl = lvl==='EXPR' ? 'SIGN' : (/^L\d+$/.test(lvl) ? 'KL'+lvl.slice(1) : null);
    const fw = (vData[lvl]||[]).filter(w=>matchesSearch(q,w.word,w.reading,w.def));
    for(const w of fw) wHtml += wordCardHTML(w, lvl);
    if(kl){
      const fk = _sortKanjiLevel((kData[kl]||[]).filter(k=>matchesSearch(q,k.kanji,k.reading,k.meaning)));
      for(const k of fk) wHtml += kanjiCardHTML(k, kl);
    }
  }
  if(wHtml) html += `<div class="level-tag"><span class="lt-key">語 Words</span><span class="lt-line"></span></div><div class="vocab-grid">${wHtml}</div>`;

  // Grammar
  let gHtml = '';
  for(const sec of grammarSections){
    for(const c of sec.cards){
      if(!matchesSearch(q, c.label, c.meaning||'', c.pattern||'', c.note||'', (c.rows||[]).map(r=>r.jp+' '+r.en).join(' '))) continue;
      gHtml += `<div class="grammar-card"><div class="g-pattern">${c.label}</div><div class="g-meaning">${c.meaning||c.pattern||''}</div></div>`;
    }
  }
  if(gHtml) html += `<div class="level-tag"><span class="lt-key">文 Grammar</span><span class="lt-line"></span></div><div class="grammar-list">${gHtml}</div>`;

  el.innerHTML = html || `<div class="empty"><span class="empty-jp">？</span>No results for "${q}".</div>`;
}

const exprData = {
  'なにを しますか':{
    keyword:'なに (What)',
    structure:'[Topic は] + なにを + Verb ますか',
    meaning:'Asks what someone will do or is doing. なに becomes なん before certain sounds.',
    examples:[
      {jp:'あしたは なにを しますか。',en:'What will you do tomorrow?'},
      {jp:'なにを たべますか。',en:'What will you eat?'},
    ]
  },
  'だれと 見ますか':{
    keyword:'だれ (Who)',
    structure:'だれ + と/が/の/に + Verb ますか',
    meaning:'Asks about a person. Use と for "with", が for subject, に for direction/recipient.',
    examples:[
      {jp:'だれと 行きますか。',en:'Who will you go with?'},
      {jp:'だれが きますか。',en:'Who is coming?'},
    ]
  },
  'どこで 食べますか':{
    keyword:'どこ (Where)',
    structure:'どこ + で/へ/に + Verb ますか',
    meaning:'Asks about location. Use で for action location, へ/に for destination.',
    examples:[
      {jp:'どこで かいますか。',en:'Where will you buy it?'},
      {jp:'どこへ 行きますか。',en:'Where are you going?'},
    ]
  },
  'どこへ 行きますか':{
    keyword:'どこ (Where)',
    structure:'どこ + へ/に + 行きます/来ます/帰りますか',
    meaning:'Asks about destination. へ and に are both used for direction; へ is slightly more formal.',
    examples:[
      {jp:'どこへ 行きますか。',en:'Where are you going?'},
      {jp:'どこに すんでいますか。',en:'Where do you live?'},
    ]
  },
  'パーティは いつですか':{
    keyword:'いつ (When)',
    structure:'[Topic は] + いつ + ですか / Verb ますか',
    meaning:'Asks about time. いつ can precede a verb or follow は with a noun.',
    examples:[
      {jp:'しけんは いつですか。',en:'When is the exam?'},
      {jp:'いつ きますか。',en:'When are you coming?'},
    ]
  },
  'どれが いちばん 好きですか':{
    keyword:'どれ (Which one — 3+)',
    structure:'[Scope の中で] + どれが + いちばん + Adjective ですか',
    meaning:'Asks which item is best among three or more options. Use どれが for "which one" as subject.',
    examples:[
      {jp:'３つの中で、どれが いちばん おいしいですか。',en:'Among the three, which is the most delicious?'},
      {jp:'どれが あなたの かさですか。',en:'Which one is your umbrella?'},
    ]
  },
  'AとBと どちらが 好きですか':{
    keyword:'どちら (Which — between 2)',
    structure:'A と B と どちらが + Adjective ですか',
    meaning:'Compares exactly two options. どちら is polite; どっち is casual. Answer with A/B の ほうが.',
    examples:[
      {jp:'コーヒーと おちゃと どちらが すきですか。',en:'Which do you prefer, coffee or tea?'},
      {jp:'バスと でんしゃと どちらが はやいですか。',en:'Which is faster, bus or train?'},
    ]
  },
  'どうやって 行きますか':{
    keyword:'どうやって (How / By what method)',
    structure:'どうやって + 行きます/来ますか',
    meaning:'Asks about the method or means of getting somewhere. Combines どう (how) + やって (doing).',
    examples:[
      {jp:'えきまで どうやって 行きますか。',en:'How do you get to the station?'},
      {jp:'それは どうやって つくりますか。',en:'How do you make that?'},
    ]
  },
  'どのぐらい かかりますか':{
    keyword:'どのぐらい (About how much / long)',
    structure:'どのぐらい + かかりますか',
    meaning:'Asks about duration or distance. かかります means "it takes" or "it costs". Use for time and sometimes money.',
    examples:[
      {jp:'えきまで どのぐらい かかりますか。',en:'About how long does it take to the station?'},
      {jp:'どのぐらい べんきょうしましたか。',en:'About how long did you study?'},
    ]
  },
  'いくら かかりますか':{
    keyword:'いくら (How much — price)',
    structure:'いくら + かかりますか / ですか',
    meaning:'Asks about cost or price. いくら = how much money. Use かかります for "costs", ですか after a noun.',
    examples:[
      {jp:'このかばんは いくらですか。',en:'How much is this bag?'},
      {jp:'りょこうは いくら かかりますか。',en:'How much does the trip cost?'},
    ]
  },
  'どんな ＋ [Noun] ＋ ですか':{
    keyword:'どんな (What kind of)',
    structure:'どんな + [Noun] + ですか',
    meaning:'Asks for a description or type. どんな modifies a noun directly like an adjective.',
    examples:[
      {jp:'どんな おんがくが すきですか。',en:'What kind of music do you like?'},
      {jp:'どんな ひとですか。',en:'What kind of person is he/she?'},
    ]
  },
  'カイスクールは どんな がっこう ですか':{
    keyword:'どんな (What kind of) — example',
    structure:'[Topic は] + どんな + [Noun] + ですか',
    meaning:'Real example: asking someone to describe a place or thing. Answer with adjectives or noun phrases.',
    examples:[
      {jp:'カイスクールは どんな がっこうですか。',en:'What kind of school is Kai School?'},
      {jp:'とうきょうは どんな まちですか。',en:'What kind of city is Tokyo?'},
    ]
  },
  'どんな いぬ ですか':{
    keyword:'どんな (What kind of) — example',
    structure:'どんな + [Noun] + ですか',
    meaning:'Asks for a description. Answer with colour, size, personality adjectives etc.',
    examples:[
      {jp:'どんな いぬですか。',en:'What kind of dog is it?'},
      {jp:'どんな くるまが ほしいですか。',en:'What kind of car do you want?'},
    ]
  },
  'どこの ＋ [Noun] ＋ ですか':{
    keyword:'どこの (Where is ~ from / Where\'s ~ made)',
    structure:'どこの + [Noun] + ですか',
    meaning:'Asks about the origin or brand location of something. の links place to noun like a possessive.',
    examples:[
      {jp:'どこの くるまですか。',en:'Where is this car from?'},
      {jp:'どこの たいがくに いきますか。',en:'Which university are you going to?'},
    ]
  },
  'あれは どこの くるま ですか':{
    keyword:'どこの (Where from) — example',
    structure:'[Topic は] + どこの + [Noun] + ですか',
    meaning:'Points to something at a distance (あれ = that over there) and asks about its origin.',
    examples:[
      {jp:'あれは どこの くるまですか。',en:'Where is that car from?'},
      {jp:'それは どこの おかしですか。',en:'Where are those sweets from?'},
    ]
  },
  'なんじに おきますか':{
    keyword:'なんじに (At what time)',
    structure:'なんじに + Verb ますか',
    meaning:'Asks the specific time of an action. に marks the point in time. なんじ = what o\'clock.',
    examples:[
      {jp:'なんじに ねますか。',en:'What time do you go to sleep?'},
      {jp:'かいぎは なんじに はじまりますか。',en:'What time does the meeting start?'},
    ]
  },
  'なにで 行きますか':{
    keyword:'なにで (By what means)',
    structure:'なにで + 行きます/来ますか',
    meaning:'Asks about the means of transport or tool used. で marks the instrument or method.',
    examples:[
      {jp:'まいにち なにで がっこうへ きますか。',en:'How do you come to school every day?'},
      {jp:'なにで たべますか。はしですか。',en:'What do you eat with? Chopsticks?'},
    ]
  },
  'どうしてですか':{
    keyword:'どうして (Why)',
    structure:'どうして + ですか / Verb ますか',
    meaning:'Asks for a reason. Less formal than なぜ. Answer with〜からです (because~).',
    examples:[
      {jp:'どうして にほんごを べんきょうしますか。',en:'Why do you study Japanese?'},
      {jp:'どうして きませんでしたか。',en:'Why didn\'t you come?'},
    ]
  },
  'どうしましたか':{
    keyword:'どうしましたか (What happened?)',
    structure:'どうしましたか',
    meaning:'Asks what is wrong or what happened. A caring question used when someone looks upset or unwell. どう = how/what + しました = did.',
    examples:[
      {jp:'かおいろが わるいですね。どうしましたか。',en:'You look pale. What\'s wrong?'},
      {jp:'なきましたか。どうしましたか。',en:'Did you cry? What happened?'},
    ]
  },
  'なにか ごようですか':{
    keyword:'なにか ごようですか (Polite: May I help you?)',
    structure:'なにか + ごよう + ですか',
    meaning:'Polite phrase used by shop staff or hosts. ごよう = business/need (honorific). なにか = something.',
    examples:[
      {jp:'なにか ごようですか。',en:'May I help you? / Do you need something?'},
    ]
  },
  'Te-form ＋ もいいですか':{
    keyword:'〜てもいいですか (May I ~?)',
    structure:'Verb Te-form + もいいですか',
    meaning:'Politely asks permission to do something. Answer: はい、〜ても いいです (yes) or いいえ、〜ては いけません (no).',
    examples:[
      {jp:'ここに すわっても いいですか。',en:'May I sit here?'},
      {jp:'まどを あけても いいですか。',en:'May I open the window?'},
    ]
  },
  '写真を とってもいいですか':{
    keyword:'〜てもいいですか (May I ~?) — example',
    structure:'写真を とって + もいいですか',
    meaning:'A common real-world use of the permission pattern. とって is the Te-form of とります (to take).',
    examples:[
      {jp:'写真を とっても いいですか。',en:'May I take a photo?'},
      {jp:'これを つかっても いいですか。',en:'May I use this?'},
    ]
  },
  'なにか ありますか':{
    keyword:'なにか (Something / Anything)',
    structure:'なにか + あります/いますか',
    meaning:'なにか means "something" in positive sentences and "anything" in questions. Used to ask if there is anything.',
    examples:[
      {jp:'なにか ありますか。',en:'Is there anything? / Do you have something?'},
      {jp:'なにか たべますか。',en:'Would you like something to eat?'},
    ]
  },
  'だれと 飲みますか':{
    keyword:'だれ (Who)',
    structure:'だれ + と/が/の/に + Verb ますか',
    meaning:'Asks about a person. Use と for "with", が for subject, の for possession, に for direction/recipient.',
    examples:[
      {jp:'だれと のみますか。',en:'Who will you drink with?'},
      {jp:'だれが きますか。',en:'Who is coming?'},
    ]
  },
  'どこの くるま ですか':{
    keyword:'どこの (Where is ~ from)',
    structure:'どこの + [Noun] + ですか',
    meaning:'Asks about the origin or make of something. の links the place/brand to the noun.',
    examples:[
      {jp:'どこの くるま ですか。',en:'Where is this car from?'},
      {jp:'どこの がっこう ですか。',en:'Which school is it?'},
    ]
  },
  'えいがは どう でしたか':{
    keyword:'どう (How)',
    structure:'[Topic は] + どう + ですか / でしたか',
    meaning:'Asks for an impression or evaluation. どう ですか = How is it? どう でしたか = How was it?',
    examples:[
      {jp:'えいがは どう でしたか。',en:'How was the movie?'},
      {jp:'にほんりょうりは どう ですか。',en:'How is Japanese food?'},
    ]
  },
  'なんようび ですか':{
    keyword:'<ruby>何曜日<rt>なんようび</rt></ruby> (What day of the week)',
    structure:'[Topic は] + 何曜日 + ですか',
    meaning:'Asks which day of the week it is. Days: 月火水木金土日 = Mon–Sun.',
    examples:[
      {jp:'きょうは <ruby>何曜日<rt>なんようび</rt></ruby> ですか。',en:'What day of the week is it today?'},
      {jp:'パーティは <ruby>何曜日<rt>なんようび</rt></ruby> ですか。',en:'What day is the party?'},
    ]
  },
  'なんがつ ですか':{
    keyword:'<ruby>何月<rt>なんがつ</rt></ruby> (What month)',
    structure:'[Topic は] + 何月 + ですか',
    meaning:'Asks which month it is. Months are numbered: いちがつ (January) through じゅうにがつ (December).',
    examples:[
      {jp:'たんじょうびは <ruby>何月<rt>なんがつ</rt></ruby> ですか。',en:'What month is your birthday?'},
      {jp:'いまは <ruby>何月<rt>なんがつ</rt></ruby> ですか。',en:'What month is it now?'},
    ]
  },
  'なんにち ですか':{
    keyword:'<ruby>何日<rt>なんにち</rt></ruby> (What day of the month)',
    structure:'[Topic は] + 何日 + ですか',
    meaning:'Asks the date (day of the month). Note the irregular readings: ついたち (1st), ふつか (2nd) etc.',
    examples:[
      {jp:'きょうは <ruby>何日<rt>なんにち</rt></ruby> ですか。',en:'What date is it today?'},
      {jp:'しけんは <ruby>何日<rt>なんにち</rt></ruby> ですか。',en:'What date is the exam?'},
    ]
  },
  'なんじかん かかりますか':{
    keyword:'<ruby>何時間<rt>なんじかん</rt></ruby> (How many hours)',
    structure:'何時間 + かかりますか',
    meaning:'Asks how many hours something takes. かかります = it takes (time/money).',
    examples:[
      {jp:'とうきょうまで <ruby>何時間<rt>なんじかん</rt></ruby> かかりますか。',en:'How many hours does it take to Tokyo?'},
      {jp:'しごとは <ruby>何時間<rt>なんじかん</rt></ruby> ですか。',en:'How many hours is work?'},
    ]
  },
  'なんにちかん かかりますか':{
    keyword:'<ruby>何日間<rt>なんにちかん</rt></ruby> (How many days)',
    structure:'何日間 + かかりますか',
    meaning:'Asks how many days something takes or lasts.',
    examples:[
      {jp:'りょこうは <ruby>何日間<rt>なんにちかん</rt></ruby> ですか。',en:'How many days is the trip?'},
      {jp:'<ruby>何日間<rt>なんにちかん</rt></ruby> かかりますか。',en:'How many days does it take?'},
    ]
  },
  'なんにん ですか':{
    keyword:'なんにん (How many people)',
    structure:'なんにん + ですか / いますか',
    meaning:'Asks the number of people. なんにん uses the counter にん (人) for people.',
    examples:[
      {jp:'かぞくは なんにん ですか。',en:'How many people are in your family?'},
      {jp:'クラスに なんにん いますか。',en:'How many people are in the class?'},
    ]
  },
  'でんわばんごうは なんばん ですか':{
    keyword:'なんばん (What number)',
    structure:'[Noun] は + なんばん + ですか',
    meaning:'Asks which number something is — a phone number, a room number, a platform. Read the digits one by one and say の where the hyphen is.',
    examples:[
      {jp:'でんわばんごうは なんばん ですか。',en:'What is your phone number?'},
      {jp:'080 の 3462 の 9751 です。',en:'It is 080-3462-9751.'},
    ]
  },
  'かばんを 持ちましょうか':{
    keyword:'〜ましょうか (Shall I ~? / Offering)',
    structure:'Verb ます-stem + ましょうか',
    meaning:'Offers to do something for someone. More polite than 〜ませんか. Answer: おねがいします (please) or だいじょうぶです (it\'s okay).',
    examples:[
      {jp:'かばんを もちましょうか。',en:'Shall I carry your bag?'},
      {jp:'でんきを けしましょうか。',en:'Shall I turn off the light?'},
    ]
  },
};

// POPUP
// ── Universal stroke-animation settings (same colour + speed everywhere) ──
const DMAK_STEP   = 0.03;      // animation speed, seconds per stroke segment
const DMAK_STROKE = '#C03030'; // drawn stroke colour
const DMAK_ACTIVE = '#FF3333'; // stroke currently being drawn
let _prevKanjiArgs = null;
let _dmakInstances = [];
let _dmakIndex = 0;
let _dmakAutoTimer = null;
let _dmakReplayTimer = null;
let _dmakPlaying = false;
let _dmakDimOpacity = parseFloat(localStorage.getItem('kumakey_dmak_opacity')||'1.0');
let _dmakIsKanjiPage = false; // true only for Kanji page popups

function _dmakSetDimOpacity(val){
  _dmakDimOpacity=val;
  localStorage.setItem('kumakey_dmak_opacity',val);
  const row=document.querySelector('.popup-dmak-row');
  if(row){
    [...row.children].forEach(el=>el.style.opacity=String(val));
    const ab=document.getElementById('dmak-box-'+_dmakIndex);
    if(ab)ab.style.opacity='1';
  }
}

function popupWordBlock(word,reading,large){
  const cls='popup-word-block'+(large?' popup-word-block--lg':'');
  const hasRd=hasKanji(word)&&reading;
  const rdChars=[...reading];
  const justify=rdChars.length<=1?'justify-content:center':'justify-content:space-between';
  const rdHtml=hasRd?`<div class="popup-word-reading" style="${justify}">${rdChars.map(c=>`<span>${c}</span>`).join('')}</div>`:'';
  return `<div class="${cls} notranslate" translate="no">${rdHtml}<div class="popup-word-text">${word}</div></div>`;
}

function openConjPopup(word,reading,def,pos,exprKey,mode,grp='',adjT=''){
  const counterKey=extraCounterMap[word]||extraCounterMap[reading]||(counTypeMap[word]?.key);
  if(pos==='Coun'||(counterKey&&pos!=='Kanji'&&pos!=='Expr')){
    let mk=counterKey||null;
    if(!mk)for(const[k,cat]of Object.entries(countersData)){if(cat.items.some(i=>i.jp===word||i.reading===reading)){mk=k;break;}}
    openAllCountersPopup(mk||undefined);return;
  }
  _dmakInstances.forEach(inst=>{if(inst){try{inst.pause();}catch(e){}}}); _dmakInstances=[]; _dmakIndex=0;
  const box=document.getElementById('popup-box');
  const show=(function(){var _p=document.getElementById('conj-popup');_p.classList.remove('hidden');requestAnimationFrame(function(){_p.classList.add('visible');});});

  if(pos==='Kanji'){
    const rdText=(hasKanji(word)&&reading)?reading:'';
    const _modeArg=mode?`'${mode}'`:'null';
    const ctrHtml=counterKey?`<div class="popup-actions"><button class="popup-ctr-btn" onclick="_openCountersFromKanji('${word}','${rdText}','${def.replace(/'/g,"\\'")}',${_modeArg},'${counterKey}')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px"><rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="8" width="6" height="13" rx="1"/><rect x="16" y="13" width="6" height="8" rx="1"/></svg>Counters</button></div>`:'';

    box.innerHTML=
      `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
      `<div class="popup-kanji-above-row">`+
        `<span class="popup-kanji-reading">${rdText}</span>`+
        `<span class="popup-kanji-def">${def}</span>`+
      `</div>`+
      `<div id="popup-dmak-container"></div>`+
      `<div id="popup-dmak-nav"></div>`+
      ctrHtml;
    initDmak(word,mode,'Kanji',grp,adjT);show();return;
  }

  if(pos==='Expr'){
    const e=exprData[exprKey||word];
    const inner=e?
      `<div class="popup-divider"></div>`+
      `<div class="popup-expr-kw">${e.keyword}</div>`+
      `<div class="popup-expr-str">${e.structure}</div>`+
      `<div class="popup-expr-meaning">${e.meaning}</div>`+
      `<div class="popup-expr-label">Examples</div>`+
      `<div class="popup-expr-examples">${e.examples.map(ex=>`<div class="popup-expr-ex"><div class="popup-expr-ex-jp">${ex.jp}</div><div class="popup-expr-ex-en">${ex.en}</div></div>`).join('')}</div>`
      :'';
    const wHasKE=hasKanji(word);
    const rdTextE=(hasKanji(word)&&reading)?reading:'';
    if(wHasKE){
      box.innerHTML=
        `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
        `<div class="popup-kanji-above-row">`+
          `<span class="popup-kanji-reading">${rdTextE}</span>`+
          `<span class="popup-kanji-def">${def}</span>`+
        `</div>`+
        `<div id="popup-dmak-container"></div>`+
        `<div id="popup-dmak-nav"></div>`+
        inner;
      initDmak(word,null,'Expr',grp,adjT);
    } else {
      box.innerHTML=
        `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
        `<div class="popup-kanji-above-row">`+
          `<span class="popup-kanji-reading">${rdTextE}</span>`+
          `<span class="popup-kanji-def">${def}</span>`+
        `</div>`+
        `<div class="popup-word-display">`+
          `<span class="popup-dmak-type-icon pos-Expr">Expr</span>`+
          `<span class="popup-word-display-text" style="font-size:${Math.min(72,Math.floor(500/[...word].length))}px">${word}</span>`+
        `</div>`+
        inner;
    }
    show();return;
  }

  // Standard vocab / grammar
  const wHasK=hasKanji(word);
  const forms=(grp&&(conjLookup[word+'#'+grp]||conjLookup[reading+'#'+grp]))||conjLookup[word]||conjLookup[reading]||null;
  const badge=pos||'Vocab';
  const conjHtml=forms&&forms.length?
    `<div class="popup-divider"></div>`+
    `<div class="popup-section-label">Conjugation</div>`+
    `<div class="conj-sheet notranslate" translate="no">${forms.map(f=>`<div class="conj-cell"><span class="conj-cell-label">${f.label}</span><span class="conj-cell-jp notranslate" translate="no">${f.jp}</span></div>`).join('')}</div>`:'';
  if(wHasK){
    const rdText=(hasKanji(word)&&reading)?reading:'';
    box.innerHTML=
      `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
      `<div class="popup-kanji-above-row">`+
        `<span class="popup-kanji-reading">${rdText}</span>`+
        `<span class="popup-kanji-def">${def}</span>`+
      `</div>`+
      `<div id="popup-dmak-container"></div>`+
      `<div id="popup-dmak-nav"></div>`+
      conjHtml;
    initDmak(word,null,badge,grp,adjT);
    show();return;
  }
  const rdText=(hasKanji(word)&&reading)?reading:'';
  box.innerHTML=
    `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
    `<div class="popup-kanji-above-row">`+
      `<span class="popup-kanji-reading">${rdText}</span>`+
      `<span class="popup-kanji-def">${def}</span>`+
    `</div>`+
    `<div class="popup-word-display">`+
      `<span class="popup-dmak-type-icon pos-${badge}">${badge}</span>`+
      (grp?`<span class="popup-dmak-grp-icon grp-${grp}">${grp}</span>`:adjT?`<span class="popup-dmak-adj-icon adj-${adjT}">${adjT==='i'?'い':'な'}</span>`:'')+
      `<span class="popup-word-display-text" style="font-size:${Math.min(72,Math.floor(500/[...word].length))}px">${word}</span>`+
    `</div>`+
    conjHtml;
  show();
}

function closePopup(e){ if(e.target.id==='conj-popup') closePopupDirect(); }
function closePopupDirect(){
  if(_dmakAutoTimer){clearTimeout(_dmakAutoTimer);_dmakAutoTimer=null;}
  if(_dmakReplayTimer){clearTimeout(_dmakReplayTimer);_dmakReplayTimer=null;}
  _dmakPlaying=false;
  const el=document.getElementById('conj-popup');
  el.classList.remove('visible');
  _dmakInstances.forEach(inst=>{if(inst){try{inst.pause();}catch(e){}}}); _dmakInstances=[]; _dmakIndex=0;
  setTimeout(()=>el.classList.add('hidden'),220);
}

async function initDmak(word,mode=null,posLabel=null,grp='',adjT=''){
  const container=document.getElementById('popup-dmak-container');
  if(!container)return;
  container.innerHTML='';
  if(typeof Dmak==='undefined'){container.innerHTML='<div style="font-size:11px;color:var(--sub);font-family:Arial,sans-serif;padding:12px;">Animation library not loaded.</div>';return;}
  if(_dmakAutoTimer){clearTimeout(_dmakAutoTimer);_dmakAutoTimer=null;}
  _dmakInstances=[]; _dmakIndex=0;
  const isK=ch=>/[一-龯㐀-䶿]/.test(ch);
  const chars=[...word];
  const kanjiList=chars.filter(isK);
  if(!kanjiList.length)return;

  // Kanji box larger than kana font so visible strokes match kana visual size
  // 5-char worst case: 5×80 + 4×6 = 424px = container inner width, fits in one row
  const size=95;
  const kanaSize=70;

  // Build mixed row synchronously (visible immediately when popup opens)
  const row=document.createElement('div');
  row.className='popup-dmak-row';
  let ki=0;
  chars.forEach(ch=>{
    if(isK(ch)){
      const box=document.createElement('div');
      box.id='dmak-box-'+ki;
      // Explicit dimensions so box is visible before DMAK's XHR completes
      box.style.cssText=`width:${size}px;height:${size}px;border-radius:8px;background:var(--white);flex-shrink:0;transition:opacity .2s;`;
      row.appendChild(box);
      ki++;
    } else {
      const span=document.createElement('span');
      span.className='popup-dmak-kana';
      span.style.cssText=`font-size:${kanaSize}px;height:${size}px;display:inline-flex;align-items:center;justify-content:center;`;
      span.textContent=ch;
      row.appendChild(span);
    }
  });
  container.appendChild(row);

  // Pre-fetch all SVGs in parallel so DMAK gets instant cache hits
  await Promise.all(kanjiList.map(ch=>{
    const hex=ch.codePointAt(0).toString(16).padStart(5,'0');
    return fetch('kanji/'+hex+'.svg').catch(()=>{});
  }));

  // Create DMAK instances — SVGs now in cache, renders without waiting
  // Universal stroke colour + speed — identical for every word, kanji or vocab
  _dmakIsKanjiPage = true;
  const _step   = DMAK_STEP;
  const _stroke = {attr:{stroke:DMAK_STROKE,'stroke-width':7.5,'stroke-linecap':'round','stroke-linejoin':'round',active:DMAK_ACTIVE},order:{visible:false}};
  kanjiList.forEach((ch,i)=>{
    try{
      const inst=new Dmak(ch,{
        element:'dmak-box-'+i,
        uri:'kanji/',
        width:size,height:size,step:_step,
        autoplay:false,
        stroke:_stroke,
        grid:{show:true,attr:{stroke:'#ddd','stroke-width':0.5}},
        // Paint the finished character the moment its strokes arrive, so the
        // popup opens with every kanji already drawn. Playing is the user's call.
        loaded:function(){ const me=inst; setTimeout(function(){ _dmakDrawInstant(me); _dmakUpdateNav(); },0); },
        // Last stroke drawn: drop back to idle so the button offers Play again.
        drew:function(index){
          const me=inst;
          if(me && me.strokes && index >= me.strokes.length-1 && _dmakInstances[_dmakIndex]===me){
            setTimeout(function(){ _dmakPlaying=false; _dmakUpdateNav(); },0);
          }
        }
      });
      _dmakInstances.push(inst);
    }catch(e){console.warn('DMAK error:',e);_dmakInstances.push(null);}
  });

  // Set initial visual state: dim all row children, highlight first kanji box
  const _initRow=container.querySelector('.popup-dmak-row');
  if(_initRow)[..._initRow.children].forEach(el=>el.style.opacity=String(_dmakDimOpacity));
  const _firstBox=document.getElementById('dmak-box-0');
  if(_firstBox)_firstBox.style.opacity='1';

  // Type label (Noun/Verb/Kanji/etc.) — top-left inside container
  if(posLabel){
    const _typeEl=document.createElement('span');
    _typeEl.className=`popup-dmak-type-icon pos-${posLabel}`;
    _typeEl.textContent=posLabel;
    container.appendChild(_typeEl);
  }
  // Group badge (G1/G2/G3) or adj type (い/な) — top-right inside container
  if(grp){
    const _grpEl=document.createElement('span');
    _grpEl.className=`popup-dmak-grp-icon grp-${grp}`;
    _grpEl.textContent=grp;
    container.appendChild(_grpEl);
  } else if(adjT){
    const _adjEl=document.createElement('span');
    _adjEl.className=`popup-dmak-adj-icon adj-${adjT}`;
    _adjEl.textContent=adjT==='i'?'い':'な';
    container.appendChild(_adjEl);
  }
  // Mode icon (read/write) — top-right inside container
  if(mode){
    const _modeEl=document.createElement('span');
    _modeEl.className=`popup-dmak-mode-icon mode-${mode}`;
    const _eyeSvg=`<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    const _penSvg=`<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`;
    _modeEl.innerHTML=mode==='write'?_penSvg:_eyeSvg;
    container.appendChild(_modeEl);
  }
  // Nothing animates on open: every kanji is drawn complete and waits for play.
  _dmakPlaying=false;
  _dmakUpdateNav();
}

// Draw a character to its finished state with no animation. DMAK skips every
// timeout when stroke.animated.drawing is false, so this paints in one go.
function _dmakDrawInstant(inst){
  if(!inst) return;
  try{ inst.pause(); }catch(e){}
  try{ inst.erase(); }catch(e){}
  const an = inst.options && inst.options.stroke && inst.options.stroke.animated;
  const wasDraw = an ? an.drawing : null;
  const wasErase = an ? an.erasing : null;
  try{
    if(an){ an.drawing=false; an.erasing=false; }
    inst.pointer = 0;
    inst.render();
  }catch(e){}
  finally{ if(an){ an.drawing=wasDraw; an.erasing=wasErase; } }
}
// Every kanji in the popup sits finished on screen until the user hits play.
function _dmakDrawAllInstant(){
  _dmakInstances.forEach(_dmakDrawInstant);
  _dmakPlaying=false;
  _dmakUpdateNav();
}
function _dmakHighlight(idx){
  const row=document.querySelector('.popup-dmak-row');
  if(row)[...row.children].forEach(el=>el.style.opacity=String(_dmakDimOpacity));
  const box=document.getElementById('dmak-box-'+idx);
  if(box)box.style.opacity='1';
}
function _dmakClearTimers(){
  if(_dmakAutoTimer){clearTimeout(_dmakAutoTimer);_dmakAutoTimer=null;}
  if(_dmakReplayTimer){clearTimeout(_dmakReplayTimer);_dmakReplayTimer=null;}
}

// Animate the selected kanji from the first stroke. Only ever called from the
// play/replay buttons — nothing plays on its own.
function _dmakPlayAt(idx){
  if(idx<0||idx>=_dmakInstances.length)return;
  _dmakClearTimers();
  _dmakIndex=idx;
  _dmakHighlight(idx);
  const inst=_dmakInstances[idx];
  if(inst){try{inst.pause();}catch(e){}try{inst.erase();}catch(e){}try{inst.render();}catch(e){}}
  _dmakPlaying=true;
  _dmakUpdateNav();
}

function _dmakUpdateNav(){
  const _playSvg=`<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
  const _pauseSvg=`<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><rect x="5" y="4" width="4" height="16"/><rect x="15" y="4" width="4" height="16"/></svg>`;
  const _replaySvg=`<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;
  const nav=document.getElementById('popup-dmak-nav');
  if(!nav)return;
  const total=_dmakInstances.length;
  const i=_dmakIndex;
  const ctrlHtml=`<div class="popup-dmak-nav-left"><button class="popup-dmak-ctrl-btn" onclick="replayDmak()" title="Replay from the first stroke">${_replaySvg}</button><button class="popup-dmak-ctrl-btn" onclick="_dmakPausePlay()" title="${_dmakPlaying?'Pause':'Play the stroke order'}">${_dmakPlaying?_pauseSvg:_playSvg}</button></div>`;
  let dotsHtml='';
  if(total>1){
    const dots=[...Array(total)].map((_,d)=>`<span class="popup-dmak-dot${d===i?' active':''}" onclick="_dmakSelect(${d})"></span>`).join('');
    dotsHtml=`<div class="popup-dmak-nav-center"><button class="popup-dmak-nav-btn" onclick="_dmakPrev()"${i===0?' disabled':''}>&lsaquo;</button><div class="popup-dmak-dots">${dots}</div><button class="popup-dmak-nav-btn" onclick="_dmakNext()"${i===total-1?' disabled':''}>&rsaquo;</button></div>`;
  } else {
    dotsHtml=`<div class="popup-dmak-nav-center"></div>`;
  }
  const sliderHtml=`<div class="popup-dmak-nav-right"><input type="range" class="popup-dmak-opacity-slider" min="0.1" max="1" step="0.05" value="${_dmakDimOpacity}" oninput="_dmakSetDimOpacity(parseFloat(this.value))"></div>`;
  nav.innerHTML=`<div class="popup-dmak-bottom-row">${ctrlHtml}${dotsHtml}${sliderHtml}</div>`;
}

// Selecting a different kanji shows it finished — it does not start playing.
function _dmakSelect(idx){
  if(idx<0||idx>=_dmakInstances.length)return;
  _dmakClearTimers();
  const cur=_dmakInstances[_dmakIndex];
  if(cur){try{cur.pause();}catch(e){}}
  _dmakDrawInstant(cur);
  _dmakIndex=idx;
  _dmakDrawInstant(_dmakInstances[idx]);
  _dmakHighlight(idx);
  _dmakPlaying=false;
  _dmakUpdateNav();
}
function _dmakNext(){ if(_dmakIndex<_dmakInstances.length-1) _dmakSelect(_dmakIndex+1); }
function _dmakPrev(){ if(_dmakIndex>0) _dmakSelect(_dmakIndex-1); }

function replayDmak(){ _dmakPlayAt(_dmakIndex); }

function _dmakPausePlay(){
  const inst=_dmakInstances[_dmakIndex];
  if(!inst)return;
  if(_dmakPlaying){
    _dmakClearTimers();
    try{inst.pause();}catch(e){}
    _dmakPlaying=false;
    _dmakUpdateNav();
  } else {
    _dmakPlayAt(_dmakIndex);
  }
}

let _ctrLeftW = 'max-content';
let _ctrDescMinH = 0;

function renderCounterTab(key){
  const cat=countersData[key];if(!cat)return;
  document.querySelectorAll('.ctr-tab').forEach(b=>b.classList.toggle('active',b.dataset.key===key));
  // Always render desc div with consistent height (even if empty) when any tab has a desc
  const descHtml=_ctrDescMinH>0
    ?`<div class="ctr-desc" style="min-height:${_ctrDescMinH}px">${cat.desc||''}</div>`
    :(cat.desc?`<div class="ctr-desc">${cat.desc}</div>`:'');
  const rowsHtml=cat.items.map(item=>{
    const _w=item.jp.replace(/'/g,"\\'"); const _r=(item.reading||'').replace(/'/g,"\\'"); const _d=item.def.replace(/'/g,"\\'");
    return `<div class="ctr-row ctr-row-btn" onclick="openCtrItemPopup('${_w}','${_r}','${_d}')">`+
    `<div class="ctr-row-left notranslate" translate="no">${rubyHTML(item.jp,item.reading||'')}</div>`+
    `<div class="ctr-row-sep"></div>`+
    `<div class="ctr-row-def">${_warn(item.def)}</div>`+
    `</div>`;
  }).join('');
  document.getElementById('ctr-popup-grid').innerHTML=
    descHtml+`<div class="ctr-list" style="grid-template-columns:${_ctrLeftW} 1px 1fr">`+rowsHtml+'</div>';
}
function _openCountersFromKanji(word,rdText,def,mode,counterKey){
  _prevKanjiArgs={word,rdText,def,mode,counterKey};
  closePopupDirect();
  openAllCountersPopup(counterKey);
}
function closeCounterPopupDirect(){
  var _p=document.getElementById('ctr-popup');
  _p.classList.remove('visible');
  setTimeout(function(){
    _p.classList.add('hidden');
    if(_prevKanjiArgs){
      var a=_prevKanjiArgs; _prevKanjiArgs=null;
      // Re-open kanji popup with saved state
      var box=document.getElementById('popup-box');
      var _modeArg=a.mode?`'${a.mode}'`:'null';
      box.innerHTML=
        `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
        `<div class="popup-kanji-above-row">`+
          `<span class="popup-kanji-reading">${a.rdText}</span>`+
          `<span class="popup-kanji-def">${a.def}</span>`+
        `</div>`+
        `<div id="popup-dmak-container"></div>`+
        `<div id="popup-dmak-nav"></div>`+
        (a.counterKey?`<div class="popup-actions"><button class="popup-ctr-btn" onclick="_openCountersFromKanji('${a.word}','${a.rdText}','${a.def.replace(/'/g,"\\'")}',${_modeArg},'${a.counterKey}')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px"><rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="8" width="6" height="13" rx="1"/><rect x="16" y="13" width="6" height="8" rx="1"/></svg>Counters</button></div>`:'');
      var conj=document.getElementById('conj-popup');
      conj.classList.remove('hidden');
      requestAnimationFrame(function(){conj.classList.add('visible');});
      initDmak(a.word,a.mode,'Kanji');
    }
  },220);
}
function openCtrItemPopup(word,reading,def){
  _dmakInstances.forEach(inst=>{if(inst){try{inst.pause();}catch(e){}}}); _dmakInstances=[]; _dmakIndex=0;
  const box=document.getElementById('popup-box');
  const wHasK=hasKanji(word);
  const rdText=(wHasK&&reading)?reading:'';
  if(wHasK){
    box.innerHTML=
      `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
      `<div class="popup-kanji-above-row">`+
        `<span class="popup-kanji-reading">${rdText}</span>`+
        `<span class="popup-kanji-def">${def}</span>`+
      `</div>`+
      `<div id="popup-dmak-container"></div>`+
      `<div id="popup-dmak-nav"></div>`;
    initDmak(word,null,'Coun');
  } else {
    box.innerHTML=
      `<button class="popup-close" onclick="closePopupDirect()">✕</button>`+
      `<div class="popup-kanji-above-row">`+
        `<span class="popup-kanji-reading">${rdText}</span>`+
        `<span class="popup-kanji-def">${def}</span>`+
      `</div>`+
      `<div class="popup-word-display">`+
        `<span class="popup-dmak-type-icon pos-Coun">Coun</span>`+
        `<span class="popup-word-display-text" style="font-size:${Math.min(72,Math.floor(500/[...word].length))}px">${word}</span>`+
      `</div>`;
  }
  const conj=document.getElementById('conj-popup');
  conj.classList.remove('hidden');
  requestAnimationFrame(()=>conj.classList.add('visible'));
}
function openAllCountersPopup(startKey){
  const tabRow=document.getElementById('ctr-tab-row');
  tabRow.innerHTML=Object.entries(countersData).map(([key,cat])=>`<button class="ctr-tab" data-key="${key}" onclick="renderCounterTab('${key}')">${cat.label}</button>`).join('');

  // ── Measure consistent dimensions across ALL tabs once ──────────────────
  // 1. Max left-column width (font-accurate measurement)
  const wProbe=document.createElement('span');
  wProbe.style.cssText='position:fixed;visibility:hidden;font-family:"Chihaya","Noto Serif JP",serif;font-size:18px;white-space:nowrap;top:-9999px;left:-9999px;';
  document.body.appendChild(wProbe);
  let maxW=40;
  Object.values(countersData).forEach(cat=>{cat.items.forEach(item=>{wProbe.textContent=item.jp;maxW=Math.max(maxW,wProbe.offsetWidth);});});
  document.body.removeChild(wProbe);
  _ctrLeftW=(maxW+8)+'px';

  // 2. Max desc height so all tabs reserve the same space
  const dProbe=document.createElement('div');
  dProbe.style.cssText='position:fixed;visibility:hidden;top:-9999px;left:-9999px;width:680px;font-size:11px;font-family:Arial,sans-serif;padding:6px 10px;line-height:1.5;box-sizing:border-box;';
  document.body.appendChild(dProbe);
  let maxH=0;
  Object.values(countersData).forEach(cat=>{dProbe.textContent=cat.desc||'';maxH=Math.max(maxH,dProbe.offsetHeight);});
  document.body.removeChild(dProbe);
  _ctrDescMinH=maxH;
  // ────────────────────────────────────────────────────────────────────────

  renderCounterTab(startKey||Object.keys(countersData)[0]);
  (function(){var _p=document.getElementById('ctr-popup');_p.classList.remove('hidden');requestAnimationFrame(function(){_p.classList.add('visible');});})();
}
function openCounterPopup(key,label,e){if(e&&e.stopPropagation)e.stopPropagation();openAllCountersPopup(key);}
function closeCounterPopup(e){if(e.target.id==='ctr-popup')closeCounterPopupDirect();}

// PERSIST STATE across Elfsight language change reloads
function saveState(){try{sessionStorage.setItem('kd_scroll',document.getElementById('main').scrollTop);sessionStorage.setItem('kd_sidebar',document.body.classList.contains('open')?'1':'0');}catch(e){}}
window.addEventListener('beforeunload', saveState);
function restoreState(){
  try{
    const tab=sessionStorage.getItem('kd_tab');
    const scroll=parseInt(sessionStorage.getItem('kd_scroll'))||0;
    const sidebar=sessionStorage.getItem('kd_sidebar');
    if(sidebar==='1') document.body.classList.add('open');
    if(tab && tab!=='home'){
      const btn=document.querySelector(`.s-btn[onclick*="'${tab}'"]`);
      if(btn){
        document.querySelectorAll('.s-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.mnav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
        currentTab=tab;
        const hs=document.getElementById('home-screen');
        const ct=document.getElementById('content');
        if(hs) hs.style.display='none';
        if(ct) ct.style.display='block';
        document.getElementById('words-floats').classList.toggle('ff-visible', tab==='words');
        document.getElementById('gram-floats').classList.toggle('ff-visible', tab==='grammar');
        
        render();
        if(scroll>0) requestAnimationFrame(()=>{document.getElementById('main').scrollTop=scroll;});
      }
    }
    // if no saved tab or home, stay on home screen (already shown by INIT)
  }catch(e){}
}


// ── BEAR CLICK ───────────────────────────────────────
const _bearSounds = [
  "sounds/sound_0.aac",
  "sounds/sound_1.aac",
  "sounds/sound_2.aac"
];
let _bearIdx = 0;
function bearClick(e){
  // --- shake ---
  if(window._hideBubble) window._hideBubble();
  const img = document.getElementById('home-logo');
  img.classList.remove('logo-shaking');
  void img.offsetWidth;
  img.classList.add('logo-shaking');
  img.addEventListener('animationend', function onShakeEnd(){
    img.removeEventListener('animationend', onShakeEnd);
    img.classList.remove('logo-shaking');
    // float-logo is on the parent wrap — no img animation reset needed
  }, {once:true});

  // --- sound ---
  const _snd = new Audio(_bearSounds[_bearIdx % _bearSounds.length]);
  _snd.volume = 0.7;
  _snd.play().catch(()=>{});
  _bearIdx++;

  // --- particles (rAF physics, bounce off edges) ---
  const chars = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ',
                 'た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ',
                 'ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん',
                 '日','本','語','学','校','文','字','熊','好','大','小','山','川','木'];
  const rainbow = ['#d17d6e'];
  const rect = img.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top  + rect.height/2;
  const count = 22 + Math.floor(Math.random()*10);
  const GRAV = 1400;
  const BOUNCE = 0.45; // energy kept on bounce
  const particles = [];

  for(let i=0;i<count;i++){
    const el = document.createElement('span');
    el.className = 'jp-particle';
    el.textContent = chars[Math.floor(Math.random()*chars.length)];
    const sz = 38 + Math.floor(Math.random()*32); // 38–70px
    el.style.setProperty('--psize', sz+'px');
    el.style.color = rainbow[Math.floor(Math.random()*rainbow.length)];

    // full 360° burst, strong speed
    const rad = (Math.random()*360) * Math.PI/180;
    const speed = 280 + Math.random()*420;
    const vx = Math.cos(rad)*speed;
    const vy = Math.sin(rad)*speed - 120; // slight upward bias
    const spin = (Math.random()-0.5)*500;

    document.body.appendChild(el);
    particles.push({ el, x:cx-sz/2, y:cy-sz/2, vx, vy, spin, angle:0, sz,
      born:performance.now(), life:2.2+Math.random()*1.0 });
  }

  let lastT = performance.now();
  function tickParticles(now){
    const dt = Math.min((now - lastT)/1000, 0.05);
    lastT = now;
    let alive = false;
    const W = window.innerWidth;
    const H = window.innerHeight;
    for(const p of particles){
      if(!p.el.parentNode) continue;
      const age = (now - p.born)/1000;
      if(age > p.life){ p.el.remove(); continue; }
      alive = true;

      p.vy += GRAV * dt;
      p.x  += p.vx * dt;
      p.y  += p.vy * dt;
      p.angle += p.spin * dt;

      // bounce off edges
      if(p.x < 0){              p.x = 0;      p.vx = Math.abs(p.vx)*BOUNCE; p.spin *= -0.7; }
      if(p.x > W - p.sz){      p.x = W-p.sz; p.vx = -Math.abs(p.vx)*BOUNCE; p.spin *= -0.7; }
      if(p.y < 0){              p.y = 0;      p.vy = Math.abs(p.vy)*BOUNCE; }
      if(p.y > H - p.sz){      p.y = H-p.sz; p.vy = -Math.abs(p.vy)*BOUNCE; p.vx *= 0.8; p.spin *= 0.6; }

      // fade only in last 15% of life
      const t = age / p.life;
      const opacity = t > 0.85 ? 1-(t-0.85)/0.15 : 1;

      p.el.style.transform = `translate(${p.x}px,${p.y}px) rotate(${p.angle}deg)`;
      p.el.style.opacity = opacity;
    }
    if(alive) requestAnimationFrame(tickParticles);
  }
  requestAnimationFrame(tickParticles);

}

// ── BEAR BUBBLE ──────────────────────────────────────
function initBearBubble(){
  const bubble = document.getElementById('bear-bubble');
  if(!bubble) return;
  let timer = null;
  function show(){
    bubble.classList.remove('bb-float');
    void bubble.offsetWidth;
    bubble.style.transformOrigin = '0% 100%';
    bubble.style.animation = 'bubble-appear .45s cubic-bezier(.34,1.56,.64,1) both';
    setTimeout(function(){
      bubble.style.opacity = '1';
      bubble.style.animation = '';
      bubble.style.transformOrigin = '';
      bubble.classList.add('bb-float');
    }, 480);
  }
  function scheduleShow(delay){
    clearTimeout(timer);
    timer = setTimeout(show, delay != null ? delay : 4000);
  }
  window._restartBubble = function(){
    clearTimeout(timer);
    bubble.classList.remove('bb-float');
    bubble.style.transition = '';
    bubble.style.opacity = '0';
    scheduleShow(2000);
  };
  window._hideBubble = function(){
    clearTimeout(timer);
    if(parseFloat(bubble.style.opacity||'0') < 0.5){ scheduleShow(2000); return; }
    bubble.classList.remove('bb-float');
    bubble.style.transformOrigin = '0% 100%';
    bubble.style.animation = 'bubble-disappear .25s ease both';
    setTimeout(function(){
      bubble.style.animation = '';
      bubble.style.transformOrigin = '';
      bubble.style.opacity = '0';
      scheduleShow(2000);
    }, 280);
  };
  window._leaveBubble = function(){
    clearTimeout(timer);
    bubble.classList.remove('bb-float');
    bubble.style.transition = '';
    bubble.style.opacity = '0';
  };
  scheduleShow(2000);
}

function initHomeCanvas(){
  var c=document.getElementById('home-canvas');
  if(!c)return;
  var ctx=c.getContext('2d');
  var W,H,pts;
  var chars=['あ','い','う','え','お','か','き','く','け','こ','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','日','本','語','学','校','語','文','字'];
  function resize(){
    W=c.width=c.offsetWidth;
    H=c.height=c.offsetHeight;
    if(!pts||pts.length===0) spawn();
  }
  function spawn(){
    var count=Math.floor(W*H/28000)+8;
    pts=[];
    for(var i=0;i<count;i++) pts.push(mkPt());
  }
  function mkPt(){
    return{
      x:Math.random()*W,
      y:Math.random()*H,
      vy:-.18-Math.random()*.22,
      vx:(Math.random()-.5)*.12,
      size:14+Math.random()*18,
      alpha:0,
      maxAlpha:.28+Math.random()*.18,
      life:0,
      maxLife:180+Math.random()*200,
      ch:chars[Math.floor(Math.random()*chars.length)]
    };
  }
  var raf;
  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.font='serif';
    for(var i=0;i<pts.length;i++){
      var p=pts[i];
      p.x+=p.vx; p.y+=p.vy; p.life++;
      var t=p.life/p.maxLife;
      if(t<.15) p.alpha=p.maxAlpha*(t/.15);
      else if(t>.75) p.alpha=p.maxAlpha*(1-(t-.75)/.25);
      else p.alpha=p.maxAlpha;
      if(p.life>=p.maxLife) pts[i]=mkPt();
      ctx.globalAlpha=p.alpha;
      ctx.font='bold '+p.size+'px "Chihaya", serif';
      ctx.fillStyle='#c0392b';
      ctx.fillText(p.ch,p.x,p.y);
    }
    ctx.globalAlpha=1;
    raf=requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener('resize',function(){cancelAnimationFrame(raf);resize();draw();});
  // pause when home hidden, resume when shown
  var observer=new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      if(m.attributeName==='style'){
        var hs=document.getElementById('home-screen');
        if(hs&&hs.style.display==='none'){cancelAnimationFrame(raf);}
        else if(hs&&hs.style.display!=='none'){cancelAnimationFrame(raf);draw();}
      }
    });
  });
  var _hsEl=document.getElementById('home-screen');
  if(_hsEl) observer.observe(_hsEl,{attributes:true});
}

// INIT
const _hs=document.getElementById('home-screen');
const _ct=document.getElementById('content');
if(_hs) _hs.style.display='flex';
if(_ct) _ct.style.display='none';
document.getElementById('words-floats').classList.remove('ff-visible');
document.getElementById('gram-floats').classList.remove('ff-visible');
const _tt=document.querySelector('.translator-toggle');
// translator-toggle and search bar start hidden via CSS on home
const _ss=document.querySelector('.sticky-search');
if(_ss) _ss.classList.add('ss-hidden');
document.getElementById('main').addEventListener('scroll', ()=>{
  const mainEl = document.getElementById('main');
  scrollPositions[currentTab] = mainEl.scrollTop;
  const btn = document.getElementById('scroll-top-btn');
  if(btn) btn.classList.toggle('visible', currentTab !== 'sheets' && mainEl.scrollTop > 80);
}, {passive:true});
// start canvas animation
initHomeCanvas();
initBearBubble();
restoreState();