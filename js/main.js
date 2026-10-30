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
    {word:"言葉",reading:"ことば",def:"word; language",pos:"Noun",sub:"1·Classroom"},
    {word:"単語",reading:"たんご",def:"vocabulary word",pos:"Noun",sub:"1·Classroom"},
    {word:"練習",reading:"れんしゅう",def:"practice",pos:"Noun",sub:"1·Classroom"},
    {word:"練習します",reading:"れんしゅうします",def:"to practise",pos:"Verb",sub:"1·Classroom",grp:"G3"},
    {word:"質問",reading:"しつもん",def:"question",pos:"Noun",sub:"1·Classroom"},
    {word:"質問します",reading:"しつもんします",def:"to ask a question",pos:"Verb",sub:"1·Classroom",grp:"G3"},
    {word:"答え",reading:"こたえ",def:"answer",pos:"Noun",sub:"1·Classroom"},
    {word:"クイズ",def:"quiz",pos:"Noun",sub:"1·Classroom"},
    {word:"文",reading:"ぶん",def:"sentence",pos:"Noun",sub:"1·Classroom"},
    {word:"文型",reading:"ぶんけい",def:"sentence pattern",pos:"Noun",sub:"1·Classroom"},
    {word:"例文",reading:"れいぶん",def:"example sentence",pos:"Noun",sub:"1·Classroom"},
    {word:"会話",reading:"かいわ",def:"conversation",pos:"Noun",sub:"1·Classroom"},
    {word:"ひらがな",def:"hiragana",pos:"Noun",sub:"1·Classroom"},
    {word:"カタカナ",def:"katakana",pos:"Noun",sub:"1·Classroom"},
    {word:"ローマ字",reading:"ローマじ",def:"romaji (Latin letters)",pos:"Noun",sub:"1·Classroom"},
    {word:"品詞",reading:"ひんし",def:"part of speech",pos:"Noun",sub:"1·Classroom"},
    {word:"名詞",reading:"めいし",def:"noun",pos:"Noun",sub:"1·Classroom"},
    {word:"動詞",reading:"どうし",def:"verb",pos:"Noun",sub:"1·Classroom"},
    {word:"形容詞",reading:"けいようし",def:"adjective",pos:"Noun",sub:"1·Classroom"},
    {word:"い形容詞",reading:"いけいようし",def:"い-adjective",pos:"Noun",sub:"1·Classroom"},
    {word:"な形容詞",reading:"なけいようし",def:"な-adjective",pos:"Noun",sub:"1·Classroom"},
    {word:"副詞",reading:"ふくし",def:"adverb",pos:"Noun",sub:"1·Classroom"},
    {word:"接続詞",reading:"せつぞくし",def:"conjunction",pos:"Noun",sub:"1·Classroom"},
    {word:"疑問詞",reading:"ぎもんし",def:"question word",pos:"Noun",sub:"1·Classroom"},
    {word:"助数詞",reading:"じょすうし",def:"counter word",pos:"Noun",sub:"1·Classroom"},
    {word:"ます形",reading:"ますけい",def:"ます-form",pos:"Noun",sub:"1·Classroom"},
    {word:"ない形",reading:"ないけい",def:"ない-form",pos:"Noun",sub:"1·Classroom"},
    {word:"グループ",def:"group",pos:"Noun",sub:"1·Classroom"},
    {word:"ペア",def:"pair",pos:"Noun",sub:"1·Classroom"},
    {word:"カード",def:"card",pos:"Noun",sub:"1·Classroom"},
    {word:"ページ",def:"page",pos:"Noun",sub:"1·Classroom"},
    {word:"プリント",def:"handout",pos:"Noun",sub:"1·Classroom"},
    {word:"ワークブック",def:"workbook",pos:"Noun",sub:"1·Classroom"},
    {word:"予習",reading:"よしゅう",def:"preparation (before class)",pos:"Noun",sub:"1·Classroom"},
    {word:"読解",reading:"どっかい",def:"reading comprehension",pos:"Noun",sub:"1·Classroom"},
    {word:"聴解",reading:"ちょうかい",def:"listening comprehension",pos:"Noun",sub:"1·Classroom"},
    {word:"発表",reading:"はっぴょう",def:"presentation",pos:"Noun",sub:"1·Classroom"},
    {word:"スピーチ",def:"speech",pos:"Noun",sub:"1·Classroom"},
    {word:"インタビュー",def:"interview",pos:"Noun",sub:"1·Classroom"},
    {word:"インタビューテスト",def:"interview test",pos:"Noun",sub:"1·Classroom"},
    {word:"ポスター",def:"poster",pos:"Noun",sub:"1·Classroom"},
    {word:"イベント",def:"event",pos:"Noun",sub:"1·Classroom"},
    {word:"コンテスト",def:"contest",pos:"Noun",sub:"1·Classroom"},
    {word:"ディクテーション",def:"dictation",pos:"Noun",sub:"1·Classroom"},
    {word:"正しい",reading:"ただしい",def:"correct",pos:"Adj",sub:"1·Classroom",adj:"i"},
    {word:"始まります",reading:"はじまります",def:"to begin (intransitive)",pos:"Verb",sub:"1-2",grp:"G1"},
    {word:"さようなら",def:"Goodbye",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"はじめまして",def:"Nice to meet you",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"どうぞよろしくおねがいします",def:"Pleased to meet you",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"よろしくおねがいします",def:"Please treat me well",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"どうぞよろしく",def:"Nice to meet you (short)",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"どうぞ",def:"Please; here you are",pos:"Expr",sub:"1-1",kind:"Reply"},
    {word:"どうも",def:"Thanks; hello (casual)",pos:"Expr",sub:"1-1",kind:"Reply"},
    {word:"はい",def:"Yes",pos:"Expr",sub:"1-1",kind:"Reply"},
    {word:"いいえ",def:"No; not at all",pos:"Expr",sub:"1-1",kind:"Reply"},
    {word:"ええ",def:"Yes (softer than はい)",pos:"Expr",sub:"1-1",kind:"Reply"},
    {word:"ありがとう",def:"Thanks (casual)",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"ありがとうございました",def:"Thank you (for that)",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"どうもありがとうございます",def:"Thank you very much",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"どういたしまして",def:"You’re welcome",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"すみませんでした",def:"I’m sorry (for that)",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"ごめんなさい",def:"I’m sorry",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"失礼します",reading:"しつれいします",def:"Excuse me (leaving)",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"お願いします",reading:"おねがいします",def:"Please (I request)",pos:"Expr",sub:"1-1",kind:"Greeting"},
    {word:"あいさつ",def:"greeting",pos:"Noun",sub:"1-1"},
    {word:"韓国人",reading:"かんこくじん",def:"Korean person",pos:"Noun",sub:"1-2"},
    {word:"中国人",reading:"ちゅうごくじん",def:"Chinese person",pos:"Noun",sub:"1-2"},
    {word:"オーストラリア人",reading:"オーストラリアじん",def:"Australian person",pos:"Noun",sub:"1-2"},
    {word:"オーストラリア",def:"Australia",pos:"Noun",sub:"1-2"},
    {word:"イタリア人",reading:"イタリアじん",def:"Italian person",pos:"Noun",sub:"1-2"},
    {word:"カナダ人",reading:"カナダじん",def:"Canadian person",pos:"Noun",sub:"1-2"},
    {word:"カナダ",def:"Canada",pos:"Noun",sub:"1-2"},
    {word:"タイ",def:"Thailand",pos:"Noun",sub:"1-2"},
    {word:"〜人",reading:"〜じん",def:"person from 〜",pos:"Expr",sub:"1-2",kind:"Pattern"},
    {word:"〜さん",def:"Mr / Ms 〜",pos:"Expr",sub:"1-2",kind:"Pattern"},
    {word:"名前",reading:"なまえ",def:"name",pos:"Noun",sub:"1-2"},
    {word:"エンジニア",def:"engineer",pos:"Noun",sub:"1-2"},
    {word:"お仕事",reading:"おしごと",def:"(your) job, work (polite)",pos:"Noun",sub:"1-2"},
    {word:"こちら",def:"this person; this way",pos:"Noun",sub:"1-2"},
    {word:"そう",def:"so; right",pos:"Expr",sub:"1-2",kind:"Reply"},
    {word:"そうです",def:"That’s right",pos:"Expr",sub:"1-2",kind:"Reply"},
    {word:"そうですか",def:"I see; is that so?",pos:"Expr",sub:"1-2",kind:"Reply"},
    {word:"そうですね",def:"That’s right; let me see",pos:"Expr",sub:"1-2",kind:"Reply"},
    {word:"わかりました",def:"I understand",pos:"Expr",sub:"1-2",kind:"Classroom"},
    {word:"わかりません",def:"I don’t understand",pos:"Expr",sub:"1-2",kind:"Classroom"},
    {word:"分かります",reading:"わかります",def:"to understand; to know",pos:"Verb",sub:"1-2",grp:"G1"},
    {word:"もう一度お願いします",reading:"もういちどおねがいします",def:"Once more, please",pos:"Expr",sub:"1-2",kind:"Classroom"},
    {word:"ゆっくりおねがいします",def:"Slowly, please",pos:"Expr",sub:"1-2",kind:"Classroom"},
    {word:"〜は何ですか",reading:"〜はなんですか",def:"What is 〜?",pos:"Expr",sub:"1-2",kind:"Classroom"},
    {word:"始めます",reading:"はじめます",def:"to begin",pos:"Verb",sub:"1-2",grp:"G2"},
    {word:"終わります",reading:"おわります",def:"to end, to finish",pos:"Verb",sub:"1-2",grp:"G1"},
    {word:"休みます",reading:"やすみます",def:"to rest; to be absent",pos:"Verb",sub:"1-2",grp:"G1"},
    {word:"クラスの日本語",reading:"クラスのにほんご",def:"classroom Japanese",pos:"Noun",sub:"1-2"},
    {word:"日本語",reading:"にほんご",def:"Japanese (language)",pos:"Noun",sub:"1-2"},
    {word:"中国語",reading:"ちゅうごくご",def:"Chinese (language)",pos:"Noun",sub:"1-2"},
    {word:"〜語",reading:"〜ご",def:"〜 language",pos:"Expr",sub:"1-2",kind:"Pattern"},
    {word:"あの、",def:"um…, excuse me…",pos:"Expr",sub:"1-2",kind:"Reply"},
    {word:"えーっと",def:"um…, let me see…",pos:"Expr",sub:"1-2",kind:"Reply"},
    {word:"ミニテスト",def:"mini test",pos:"Noun",sub:"1-2"},
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
    {word:"アイス",def:"ice cream (short)",pos:"Noun",sub:"2·Katakana"},
    {word:"スイカ",def:"watermelon",pos:"Noun",sub:"2·Katakana"},
    {word:"キス",def:"kiss",pos:"Noun",sub:"2·Katakana"},
    {word:"ココア",def:"cocoa",pos:"Noun",sub:"2·Katakana"},
    {word:"キウイ",def:"kiwi",pos:"Noun",sub:"2·Katakana"},
    {word:"コース",def:"course",pos:"Noun",sub:"2·Katakana"},
    {word:"エコ",def:"eco, ecological",pos:"Noun",sub:"2·Katakana"},
    {word:"サーカス",def:"circus",pos:"Noun",sub:"2·Katakana"},
    {word:"ソース",def:"sauce",pos:"Noun",sub:"2·Katakana"},
    {word:"シーソー",def:"seesaw",pos:"Noun",sub:"2·Katakana"},
    {word:"ケース",def:"case",pos:"Noun",sub:"2·Katakana"},
    {word:"ガス",def:"gas",pos:"Noun",sub:"2·Katakana"},
    {word:"クッキー",def:"cookie",pos:"Noun",sub:"2·Katakana"},
    {word:"テニス",def:"tennis",pos:"Noun",sub:"2·Katakana"},
    {word:"テキスト",def:"textbook",pos:"Noun",sub:"2·Katakana"},
    {word:"ピーナッツ",def:"peanuts",pos:"Noun",sub:"2·Katakana"},
    {word:"パスポート",def:"passport",pos:"Noun",sub:"2·Katakana"},
    {word:"レモン",def:"lemon",pos:"Noun",sub:"2·Katakana"},
    {word:"ベランダ",def:"balcony, veranda",pos:"Noun",sub:"2·Katakana"},
    {word:"ニュース",def:"news",pos:"Noun",sub:"2·Katakana"},
    {word:"トルコ",def:"Turkey",pos:"Noun",sub:"2·Katakana"},
    {word:"スペイン",def:"Spain",pos:"Noun",sub:"2·Katakana"},
    {word:"インターネット",def:"internet",pos:"Noun",sub:"2·Katakana"},
    {word:"ミルクティー",def:"milk tea",pos:"Noun",sub:"2·Katakana"},
    {word:"ブラジル",def:"Brazil",pos:"Noun",sub:"2·Katakana"},
    {word:"フォーク",def:"fork",pos:"Noun",sub:"2·Katakana"},
    {word:"パフェ",def:"parfait",pos:"Noun",sub:"2·Katakana"},
    {word:"ノルウェー",def:"Norway",pos:"Noun",sub:"2·Katakana"},
    {word:"ティッシュ",def:"tissue",pos:"Noun",sub:"2·Katakana"},
    {word:"ウェットティッシュ",def:"wet wipes",pos:"Noun",sub:"2·Katakana"},
    {word:"チェーン",def:"chain",pos:"Noun",sub:"2·Katakana"},
    {word:"タトゥー",def:"tattoo",pos:"Noun",sub:"2·Katakana"},
    {word:"スウェーデン",def:"Sweden",pos:"Noun",sub:"2·Katakana"},
    {word:"シェフ",def:"chef",pos:"Noun",sub:"2·Katakana"},
    {word:"サーフィン",def:"surfing",pos:"Noun",sub:"2·Katakana"},
    {word:"ウォッカ",def:"vodka",pos:"Noun",sub:"2·Katakana"},
    {word:"プレゼント",def:"present, gift",pos:"Noun",sub:"2·Katakana"},
    {word:"ブック",def:"book",pos:"Noun",sub:"2·Katakana"},
    {word:"バター",def:"butter",pos:"Noun",sub:"2·Katakana"},
    {word:"ナイジェリア",def:"Nigeria",pos:"Noun",sub:"2·Katakana"},
    {word:"ガーナ",def:"Ghana",pos:"Noun",sub:"2·Katakana"},
    {word:"エジプト",def:"Egypt",pos:"Noun",sub:"2·Katakana"},
    {word:"マンガ",def:"manga",pos:"Noun",sub:"2·Katakana"},
    {word:"パンケーキ",def:"pancake",pos:"Noun",sub:"2·Katakana"},
    {word:"キムチ",def:"kimchi",pos:"Noun",sub:"2·Katakana"},
    {word:"チキン",def:"chicken",pos:"Noun",sub:"2·Katakana"},
    {word:"マッサージ",def:"massage",pos:"Noun",sub:"2·Katakana"},
    {word:"ドライブ",def:"drive",pos:"Noun",sub:"2·Katakana"},
    {word:"ビーチ",def:"beach",pos:"Noun",sub:"2·Katakana"},
    {word:"スノボ",def:"snowboarding",pos:"Noun",sub:"2·Katakana"},
    {word:"クリスマス",def:"Christmas",pos:"Noun",sub:"2·Katakana"},
    {word:"ハロウィン",def:"Halloween",pos:"Noun",sub:"2·Katakana"},
    {word:"バスケットボール",def:"basketball",pos:"Noun",sub:"2·Katakana"},
    {word:"ジーンズ",def:"jeans",pos:"Noun",sub:"2·Katakana"},
    {word:"モノレール",def:"monorail",pos:"Noun",sub:"2·Katakana"},
    {word:"カレンダー",def:"calendar",pos:"Noun",sub:"2·Katakana"},
    {word:"キャラクター",def:"character",pos:"Noun",sub:"2·Katakana"},
    {word:"別",reading:"べつ",def:"separate, different",pos:"Noun",sub:"2-2"},
    {word:"番号",reading:"ばんごう",def:"number (phone, room…)",pos:"Noun",sub:"2-1"},
    {word:"携帯電話",reading:"けいたいでんわ",def:"mobile phone",pos:"Noun",sub:"2-1"},
    {word:"携帯",reading:"けいたい",def:"mobile phone (short)",pos:"Noun",sub:"2-1"},
    {word:"スマホ",def:"smartphone",pos:"Noun",sub:"2-1"},
    {word:"リビング",def:"living room",pos:"Noun",sub:"2-1"},
    {word:"これ",def:"this (near me)",pos:"Noun",sub:"2-2"},
    {word:"それ",def:"that (near you)",pos:"Noun",sub:"2-2"},
    {word:"あれ",def:"that (over there)",pos:"Noun",sub:"2-2"},
    {word:"ラーメン",def:"ramen",pos:"Noun",sub:"2-2"},
    {word:"辛ラーメン",reading:"しんラーメン",def:"Shin ramen (spicy)",pos:"Noun",sub:"2-2"},
    {word:"いちご",def:"strawberry",pos:"Noun",sub:"2-2"},
    {word:"もも",def:"peach",pos:"Noun",sub:"2-2"},
    {word:"メロン",def:"melon",pos:"Noun",sub:"2-2"},
    {word:"すいか",def:"watermelon",pos:"Noun",sub:"2-2"},
    {word:"さくらんぼ",def:"cherry",pos:"Noun",sub:"2-2"},
    {word:"オレンジ",def:"orange",pos:"Noun",sub:"2-2"},
    {word:"にんじん",def:"carrot",pos:"Noun",sub:"2-2"},
    {word:"じゃがいも",def:"potato",pos:"Noun",sub:"2-2"},
    {word:"たまねぎ",def:"onion",pos:"Noun",sub:"2-2"},
    {word:"キャベツ",def:"cabbage",pos:"Noun",sub:"2-2"},
    {word:"ピーマン",def:"green pepper",pos:"Noun",sub:"2-2"},
    {word:"大根",reading:"だいこん",def:"daikon radish",pos:"Noun",sub:"2-2"},
    {word:"野菜",reading:"やさい",def:"vegetables",pos:"Noun",sub:"2-2"},
    {word:"コップ",def:"glass, cup",pos:"Noun",sub:"2-2"},
    {word:"はし",def:"chopsticks",pos:"Noun",sub:"2-2"},
    {word:"ドア",def:"door",pos:"Noun",sub:"2-2"},
    {word:"ソファ",def:"sofa",pos:"Noun",sub:"2-2"},
    {word:"〜円",reading:"〜えん",def:"〜 yen",pos:"Expr",sub:"2-3",kind:"Pattern"},
    {word:"ください",def:"please give me (〜をください)",pos:"Expr",sub:"2-3",kind:"Pattern"},
    {word:"全部で",reading:"ぜんぶで",def:"in total, all together",pos:"Adv",sub:"2-3"},
    {word:"八百屋",reading:"やおや",def:"greengrocer",pos:"Noun",sub:"2-3"},
    {word:"花屋",reading:"はなや",def:"flower shop, florist",pos:"Noun",sub:"2-3"},
    {word:"チューリップ",def:"tulip",pos:"Noun",sub:"2-3"},
    {word:"〜個",reading:"〜こ",def:"counter: small items",pos:"Expr",sub:"2-3",kind:"Counter"},
    {word:"〜本",reading:"〜ほん",def:"counter: long things",pos:"Expr",sub:"2-3",kind:"Counter"},
    {word:"この",def:"this 〜",pos:"Expr",sub:"2-4",kind:"Pattern"},
    {word:"その",def:"that 〜 (near you)",pos:"Expr",sub:"2-4",kind:"Pattern"},
    {word:"あの",def:"that 〜 (over there)",pos:"Expr",sub:"2-4",kind:"Pattern"},
    {word:"どの",def:"which 〜",pos:"Expr",sub:"2-4",kind:"Question"},
    {word:"日本",reading:"にほん",def:"Japan",pos:"Noun",sub:"2-5"},
    {word:"チョコレート",def:"chocolate",pos:"Noun",sub:"2-5"},
    {word:"チョコ",def:"chocolate (short)",pos:"Noun",sub:"2-5"},
    {word:"ワイン",def:"wine",pos:"Noun",sub:"2-5"},
    {word:"じゃあ",def:"well then; in that case",pos:"Conj",sub:"2-6"},
    {word:"じゃ",def:"well then (short)",pos:"Conj",sub:"2-6"},
    {word:"これをください",def:"I’ll take this one",pos:"Expr",sub:"2-6",kind:"Pattern"},
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
    {word:"きれい",def:"pretty, clean",pos:"Adj",adj:"na",sub:"3-3",ex:"彼女はきれいです。"},
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
    {word:"ごめん",def:"Sorry (casual)",pos:"Expr",sub:"3-1",kind:"Greeting"},
    {word:"まあ",def:"well…; oh my",pos:"Expr",sub:"3-1",kind:"Reply"},
    {word:"違います",reading:"ちがいます",def:"to differ; that’s wrong",pos:"Verb",sub:"3-2",grp:"G1"},
    {word:"だれの",def:"whose",pos:"Expr",sub:"3-1",kind:"Question"},
    {word:"同じ",reading:"おなじ",def:"same",pos:"Adj",sub:"3-1",adj:"na"},
    {word:"納豆",reading:"なっとう",def:"natto (fermented soybeans)",pos:"Noun",sub:"3-2"},
    {word:"駅の人",reading:"えきのひと",def:"station attendant",pos:"Noun",sub:"3-3"},
    {word:"お客さん",reading:"おきゃくさん",def:"guest, customer",pos:"Noun",sub:"3-4"},
    {word:"男の人",reading:"おとこのひと",def:"man",pos:"Noun",sub:"3-4"},
    {word:"女の人",reading:"おんなのひと",def:"woman",pos:"Noun",sub:"3-4"},
    {word:"ぐらい",def:"about, approximately",pos:"Expr",sub:"3-4",kind:"Amount"},
    {word:"背が高い",reading:"せがたかい",def:"tall (person)",pos:"Expr",sub:"3-4",kind:"Pattern"},
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
    {word:"またあした",def:"See you tomorrow",pos:"Expr",sub:"4-4",kind:"Greeting"},
    {word:"じゃあね",def:"See you (casual)",pos:"Expr",sub:"4-4",kind:"Greeting"},
    {word:"花火",reading:"はなび",def:"fireworks",pos:"Noun",sub:"4-5"},
    {word:"〜時半",reading:"〜じはん",def:"half past 〜",pos:"Expr",sub:"4-1",kind:"Counter"},
    {word:"音",reading:"おと",def:"sound",pos:"Noun",sub:"4-1"},
    {word:"ノック",def:"knock",pos:"Noun",sub:"4-1"},
    {word:"〜から〜まで",def:"from 〜 to 〜",pos:"Expr",sub:"4-2",kind:"Pattern"},
    {word:"午前",reading:"ごぜん",def:"a.m.; morning",pos:"Noun",sub:"4-2"},
    {word:"午前中",reading:"ごぜんちゅう",def:"in the morning",pos:"Noun",sub:"4-2"},
    {word:"何分",reading:"なんぷん",def:"how many minutes",pos:"Expr",sub:"4-3",kind:"Counter"},
    {word:"〜時間",reading:"〜じかん",def:"〜 hours",pos:"Expr",sub:"4-3",kind:"Counter"},
    {word:"もえないごみ",def:"non-burnable rubbish",pos:"Noun",sub:"4-4"},
    {word:"プラスチック",def:"plastic",pos:"Noun",sub:"4-4"},
    {word:"何年",reading:"なんねん",def:"what year; how many years",pos:"Expr",sub:"4-5",kind:"Counter"},
    {word:"がんばってください",def:"Good luck; do your best",pos:"Expr",sub:"4-5",kind:"Greeting"},
    {word:"がんばってね",def:"Good luck (casual)",pos:"Expr",sub:"4-5",kind:"Greeting"},
    {word:"がんばります",def:"to do one’s best",pos:"Verb",sub:"4-5",grp:"G1"},
    {word:"沖縄",reading:"おきなわ",def:"Okinawa",pos:"Noun",sub:"4-5"},
    {word:"どうもありがとう",def:"Thanks a lot",pos:"Expr",sub:"4-6",kind:"Greeting"},
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
    {word:"選びます",reading:"えらびます",def:"to choose",pos:"Verb",sub:"5-1",grp:"G1"},
    {word:"カレー",def:"curry",pos:"Noun",sub:"5-1"},
    {word:"何も",reading:"なにも",def:"nothing (+ negative)",pos:"Expr",sub:"5-1",kind:"Amount"},
    {word:"Netflix",def:"Netflix",pos:"Noun",sub:"5-1"},
    {word:"ごはん",def:"rice; meal",pos:"Noun",sub:"5-2"},
    {word:"朝",reading:"あさ",def:"morning",pos:"Noun",sub:"5-2"},
    {word:"昼",reading:"ひる",def:"noon, daytime",pos:"Noun",sub:"5-2"},
    {word:"フリーマーケット",def:"flea market",pos:"Noun",sub:"5-2"},
    {word:"秘密",reading:"ひみつ",def:"secret",pos:"Noun",sub:"5-2"},
    {word:"どこへも",def:"nowhere (+ negative)",pos:"Expr",sub:"5-3",kind:"Amount"},
    {word:"次",reading:"つぎ",def:"next",pos:"Noun",sub:"5-3"},
    {word:"バス停",reading:"バスてい",def:"bus stop",pos:"Noun",sub:"5-3"},
    {word:"大好き",reading:"だいすき",def:"love; like a lot",pos:"Adj",sub:"5-5",adj:"na"},
    {word:"味見",reading:"あじみ",def:"tasting (food)",pos:"Noun",sub:"5-5"},
    {word:"味見をします",reading:"あじみをします",def:"to taste (food)",pos:"Verb",sub:"5-5",grp:"G3"},
    {word:"外食",reading:"がいしょく",def:"eating out",pos:"Noun",sub:"5-5"},
    {word:"外食をします",reading:"がいしょくをします",def:"to eat out",pos:"Verb",sub:"5-5",grp:"G3"},
    {word:"僕",reading:"ぼく",def:"I, me (male, casual)",pos:"Noun",sub:"5-5"},
    {word:"イタリア料理",reading:"イタリアりょうり",def:"Italian food",pos:"Noun",sub:"5-5"},
    {word:"一緒に",reading:"いっしょに",def:"together",pos:"Adv",sub:"5-5"},
    {word:"また今度",reading:"またこんど",def:"another time",pos:"Expr",sub:"5-5",kind:"Time"},
    {word:"いいですか",def:"Is it OK? May I?",pos:"Expr",sub:"5-5",kind:"Pattern"},
    {word:"ちょっと…",def:"it’s a bit… (declining)",pos:"Expr",sub:"5-5",kind:"Reply"},
    {word:"ゴルフ",def:"golf",pos:"Noun",sub:"5-6"},
    {word:"ゲーム",def:"game",pos:"Noun",sub:"5-6"},
    {word:"助詞",reading:"じょし",def:"particle (は・を・に…)",pos:"Noun",sub:"5-6"},
    {word:"復習",reading:"ふくしゅう",def:"review",pos:"Noun",sub:"5-6"},
    {word:"復習をします",reading:"ふくしゅうをします",def:"to review",pos:"Verb",sub:"5-6",grp:"G3"},
    {word:"みんな",def:"everyone; all",pos:"Noun",sub:"5·Reading"},
    {word:"皆さん",reading:"みなさん",def:"everyone (polite)",pos:"Noun",sub:"5·Reading"},
    {word:"だから",def:"so, therefore",pos:"Conj",sub:"5·Reading"},
    {word:"いつも",def:"always",pos:"Adv",sub:"5·Reading"},
    {word:"アルバイトをします",def:"to work part-time",pos:"Verb",sub:"5·Reading",grp:"G3"},
    {word:"ジョギングをします",def:"to jog",pos:"Verb",sub:"5·Reading",grp:"G3"},
    {word:"シャワーを浴びます",reading:"シャワーをあびます",def:"to take a shower",pos:"Verb",sub:"5·Reading",grp:"G2"},
    {word:"プロジェクト",def:"project",pos:"Noun",sub:"5·Reading"},
    {word:"リーダー",def:"leader",pos:"Noun",sub:"5·Reading"},
    {word:"クライアント",def:"client",pos:"Noun",sub:"5·Reading"},
    {word:"通訳",reading:"つうやく",def:"interpreting; interpreter",pos:"Noun",sub:"5·Reading"},
    {word:"通訳をします",reading:"つうやくをします",def:"to interpret",pos:"Verb",sub:"5·Reading",grp:"G3"},
    {word:"ピザ",def:"pizza",pos:"Noun",sub:"5·Reading"},
    {word:"残業をします",reading:"ざんぎょうをします",def:"to work overtime",pos:"Verb",sub:"5·Reading",grp:"G3"},
    {word:"シェアハウス",def:"share house",pos:"Noun",sub:"5·Reading"},
    {word:"家",reading:"いえ",def:"house, home",pos:"Noun",sub:"5·Reading"},
    {word:"のんびりします",def:"to relax",pos:"Verb",sub:"5·Reading",grp:"G3"},
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
    {word:"毎朝",reading:"まいあさ",def:"every morning",pos:"Noun",sub:"6-1"},
    {word:"毎晩",reading:"まいばん",def:"every night",pos:"Noun",sub:"6-1"},
    {word:"晩",reading:"ばん",def:"evening",pos:"Noun",sub:"6-1"},
    {word:"一日",reading:"いちにち",def:"one day; all day",pos:"Noun",sub:"6-1"},
    {word:"雪",reading:"ゆき",def:"snow",pos:"Noun",sub:"6-1"},
    {word:"晴れ",reading:"はれ",def:"sunny, clear",pos:"Noun",sub:"6-1"},
    {word:"素晴らしい",reading:"すばらしい",def:"wonderful",pos:"Adj",sub:"6·Reading",adj:"i"},
    {word:"詳しい",reading:"くわしい",def:"detailed; know well",pos:"Adj",sub:"6·Reading",adj:"i"},
    {word:"涼しい",reading:"すずしい",def:"cool (weather)",pos:"Adj",sub:"6-2",adj:"i"},
    {word:"変えます",reading:"かえます",def:"to change",pos:"Verb",sub:"6-2",grp:"G2"},
    {word:"おふろに入ります",reading:"おふろにはいります",def:"to take a bath",pos:"Verb",sub:"6-1",grp:"G1"},
    {word:"〜のあとで",def:"after 〜",pos:"Expr",sub:"6-1",kind:"Time"},
    {word:"区役所",reading:"くやくしょ",def:"ward office",pos:"Noun",sub:"6-1"},
    {word:"薬を飲みます",reading:"くすりをのみます",def:"to take medicine",pos:"Verb",sub:"6-1",grp:"G1"},
    {word:"ディズニーランド",def:"Disneyland",pos:"Noun",sub:"6-2"},
    {word:"浅草",reading:"あさくさ",def:"Asakusa",pos:"Noun",sub:"6-2"},
    {word:"まあまあ",def:"so-so",pos:"Adj",sub:"6-2",adj:"na"},
    {word:"よかったですね",def:"That’s good; I’m glad",pos:"Expr",sub:"6-2",kind:"Reply"},
    {word:"箱根",reading:"はこね",def:"Hakone",pos:"Noun",sub:"6·Reading"},
    {word:"ユニバーサルスタジオ",def:"Universal Studios",pos:"Noun",sub:"6·Reading"},
    {word:"大阪",reading:"おおさか",def:"Osaka",pos:"Noun",sub:"6·Reading"},
    {word:"大阪城",reading:"おおさかじょう",def:"Osaka Castle",pos:"Noun",sub:"6·Reading"},
    {word:"たこやき",def:"takoyaki (octopus balls)",pos:"Noun",sub:"6·Reading"},
    {word:"週末",reading:"しゅうまつ",def:"weekend",pos:"Noun",sub:"6·Reading"},
    {word:"ベビーシッター",def:"babysitter",pos:"Noun",sub:"6·Reading"},
    {word:"抹茶ラテ",reading:"まっちゃラテ",def:"matcha latte",pos:"Noun",sub:"6·Reading"},
    {word:"酔っぱらいます",reading:"よっぱらいます",def:"to get drunk",pos:"Verb",sub:"6·Reading",grp:"G1"},
    {word:"辛い",reading:"からい",def:"spicy, hot",pos:"Adj",sub:"6·Reading",adj:"i"},
    {word:"ホラー映画",reading:"ホラーえいが",def:"horror film",pos:"Noun",sub:"6·Reading"},
    {word:"ホラー",def:"horror",pos:"Noun",sub:"6·Reading"},
    {word:"レンタル",def:"rental",pos:"Noun",sub:"6·Reading"},
    {word:"スーパー",def:"supermarket",pos:"Noun",sub:"6·Reading"},
    {word:"ポテトチップス",def:"potato chips",pos:"Noun",sub:"6·Reading"},
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
    {word:"有名",reading:"ゆうめい",def:"famous",pos:"Adj",adj:"na",sub:"7-3",ex:"彼は有名な歌手です。"},
    {word:"北口",reading:"きたぐち",def:"north exit",pos:"Noun",sub:"7·Reading"},
    {word:"南口",reading:"みなみぐち",def:"south exit",pos:"Noun",sub:"7·Reading"},
    {word:"また",def:"again; also",pos:"Adv",sub:"7-1"},
    {word:"薄い",reading:"うすい",def:"thin; weak (taste)",pos:"Adj",sub:"7-2",adj:"i"},
    {word:"青い",reading:"あおい",def:"blue",pos:"Adj",sub:"7-3",adj:"i"},
    {word:"弁当",reading:"べんとう",def:"boxed lunch",pos:"Noun",sub:"7·Reading"},
    {word:"数えます",reading:"かぞえます",def:"to count",pos:"Verb",sub:"7-2",grp:"G2"},
    {word:"〜や〜など",def:"〜 and 〜, etc.",pos:"Expr",sub:"7-1",kind:"Pattern"},
    {word:"など",def:"etc., and so on",pos:"Expr",sub:"7-1",kind:"Pattern"},
    {word:"外",reading:"そと",def:"outside",pos:"Noun",sub:"7-1"},
    {word:"だれも",def:"nobody (+ negative)",pos:"Expr",sub:"7-1",kind:"Amount"},
    {word:"よろしくね",def:"nice to meet you (casual)",pos:"Expr",sub:"7-1",kind:"Greeting"},
    {word:"いくつ",def:"how many (things); how old",pos:"Expr",sub:"7-2",kind:"Counter"},
    {word:"〜でおねがいします",def:"with 〜, please (paying)",pos:"Expr",sub:"7-2",kind:"Pattern"},
    {word:"母屋",reading:"おもや",def:"main house",pos:"Noun",sub:"7-2"},
    {word:"いや",def:"no; well… (casual)",pos:"Expr",sub:"7-2",kind:"Reply"},
    {word:"日本地図",reading:"にほんちず",def:"map of Japan",pos:"Noun",sub:"7-3"},
    {word:"爪切り",reading:"つめきり",def:"nail clippers",pos:"Noun",sub:"7-3"},
    {word:"引き出し",reading:"ひきだし",def:"drawer",pos:"Noun",sub:"7-3"},
    {word:"リモコン",def:"remote control",pos:"Noun",sub:"7-3"},
    {word:"ありました",def:"Found it! (There it was)",pos:"Expr",sub:"7-3",kind:"Reply"},
    {word:"もしもし",def:"Hello (on the phone)",pos:"Expr",sub:"7·Reading",kind:"Greeting"},
    {word:"JR",reading:"ジェイアール",def:"JR (Japan Railways)",pos:"Noun",sub:"7·Reading"},
    {word:"中野駅",reading:"なかのえき",def:"Nakano Station",pos:"Noun",sub:"7·Reading"},
    {word:"東口",reading:"ひがしぐち",def:"east exit",pos:"Noun",sub:"7·Reading"},
    {word:"西口",reading:"にしぐち",def:"west exit",pos:"Noun",sub:"7·Reading"},
    {word:"気をつけてください",reading:"きをつけてください",def:"Please be careful",pos:"Expr",sub:"7·Reading",kind:"Greeting"},
    {word:"気をつけます",reading:"きをつけます",def:"to be careful",pos:"Verb",sub:"7·Reading",grp:"G2"},
    {word:"お花見",reading:"おはなみ",def:"cherry-blossom viewing",pos:"Noun",sub:"7·Reading"},
    {word:"今度",reading:"こんど",def:"next time; this time",pos:"Noun",sub:"7·Reading"},
    {word:"中庭",reading:"なかにわ",def:"courtyard",pos:"Noun",sub:"7·Reading"},
    {word:"玄関",reading:"げんかん",def:"entrance hall",pos:"Noun",sub:"7·Reading"},
    {word:"オーナー",def:"owner",pos:"Noun",sub:"7·Reading"},
    {word:"お弁当",reading:"おべんとう",def:"boxed lunch",pos:"Noun",sub:"7·Reading"},
    {word:"小石川",reading:"こいしかわ",def:"Koishikawa (Tokyo)",pos:"Noun",sub:"7·Reading"},
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
    {word:"嫌い",reading:"きらい",def:"dislike; hate",pos:"Adj",adj:"na",sub:"8-2",ex:"私は犬がきらいです。"},
    {word:"下手",reading:"へた",def:"bad at; unskilled",pos:"Adj",adj:"na",sub:"8-2",ex:"わたしはりょうりがへたです。"},
    {word:"得意",reading:"とくい",def:"good at; one's strong point",pos:"Adj",adj:"na",sub:"8-2",ex:"わたしはうたがとくいです。"},
    {word:"苦手",reading:"にがて",def:"bad at; not one's strong point",pos:"Adj",adj:"na",sub:"8-2",ex:"わたしはスポーツがにがてです。"},
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
    {word:"すごい",def:"amazing, great",pos:"Adj",sub:"8-1",adj:"i"},
    {word:"弱い",reading:"よわい",def:"weak",pos:"Adj",sub:"8-6",adj:"i"},
    {word:"眠い",reading:"ねむい",def:"sleepy",pos:"Adj",sub:"8-6",adj:"i"},
    {word:"茶色",reading:"ちゃいろ",def:"brown",pos:"Noun",sub:"8-3"},
    {word:"黄色",reading:"きいろ",def:"yellow",pos:"Noun",sub:"8-3"},
    {word:"ほんと",def:"really? (casual)",pos:"Expr",sub:"8-1",kind:"Reply"},
    {word:"まだ",def:"still; not yet",pos:"Adv",sub:"8-3"},
    {word:"腕",reading:"うで",def:"arm",pos:"Noun",sub:"8-1"},
    {word:"しっぽ",def:"tail",pos:"Noun",sub:"8-1"},
    {word:"いとこ",def:"cousin",pos:"Noun",sub:"8·Reading"},
    {word:"おじ",def:"uncle",pos:"Noun",sub:"8·Reading"},
    {word:"おば",def:"aunt",pos:"Noun",sub:"8·Reading"},
    {word:"息子",reading:"むすこ",def:"son",pos:"Noun",sub:"8·Reading"},
    {word:"娘",reading:"むすめ",def:"daughter",pos:"Noun",sub:"8·Reading"},
    {word:"おばあさん",def:"grandmother; old woman",pos:"Noun",sub:"8·Reading"},
    {word:"お父さん",reading:"おとうさん",def:"father (someone else’s)",pos:"Noun",sub:"8·Reading"},
    {word:"登ります",reading:"のぼります",def:"to climb",pos:"Verb",sub:"8-5",grp:"G1"},
    {word:"集めます",reading:"あつめます",def:"to collect",pos:"Verb",sub:"8·Reading",grp:"G2"},
    {word:"頭",reading:"あたま",def:"head",pos:"Noun",sub:"8-1"},
    {word:"頭がいい",reading:"あたまがいい",def:"smart, clever",pos:"Expr",sub:"8-1",kind:"Pattern"},
    {word:"遅い",reading:"おそい",def:"late; slow",pos:"Adj",sub:"8-1",adj:"i"},
    {word:"タクシー代",reading:"タクシーだい",def:"taxi fare",pos:"Noun",sub:"8-1"},
    {word:"〜代",reading:"〜だい",def:"fee for 〜",pos:"Expr",sub:"8-1",kind:"Pattern"},
    {word:"帰り",reading:"かえり",def:"the way home; return",pos:"Noun",sub:"8-1"},
    {word:"本当",reading:"ほんとう",def:"truth; really?",pos:"Noun",sub:"8-1"},
    {word:"もちろん",def:"of course",pos:"Adv",sub:"8-2"},
    {word:"心がせまい",reading:"こころがせまい",def:"narrow-minded",pos:"Expr",sub:"8-3",kind:"Pattern"},
    {word:"厳しい",reading:"きびしい",def:"strict",pos:"Adj",sub:"8-3",adj:"i"},
    {word:"水",reading:"みず",def:"water",pos:"Noun",sub:"8-4"},
    {word:"プール",def:"swimming pool",pos:"Noun",sub:"8-4"},
    {word:"シチュー",def:"stew",pos:"Noun",sub:"8-4"},
    {word:"ホームシック",def:"homesick",pos:"Noun",sub:"8-4"},
    {word:"メニュー",def:"menu",pos:"Noun",sub:"8-4"},
    {word:"写真を撮ります",reading:"しゃしんをとります",def:"to take a photo",pos:"Verb",sub:"8-5",grp:"G1"},
    {word:"絵を描きます",reading:"えをかきます",def:"to draw a picture",pos:"Verb",sub:"8-5",grp:"G1"},
    {word:"花を育てます",reading:"はなをそだてます",def:"to grow flowers",pos:"Verb",sub:"8-5",grp:"G2"},
    {word:"セーターを編みます",reading:"セーターをあみます",def:"to knit a sweater",pos:"Verb",sub:"8-5",grp:"G1"},
    {word:"休みの日",reading:"やすみのひ",def:"day off",pos:"Noun",sub:"8-5"},
    {word:"辞書形",reading:"じしょけい",def:"dictionary form",pos:"Noun",sub:"8-5"},
    {word:"動詞のグループ",reading:"どうしのグループ",def:"verb group",pos:"Noun",sub:"8-5"},
    {word:"ジェスチャー",def:"gesture",pos:"Noun",sub:"8-6"},
    {word:"ジェスチャーゲーム",def:"gesture game",pos:"Noun",sub:"8-6"},
    {word:"アクション",def:"action",pos:"Noun",sub:"8-6"},
    {word:"でしょ？",def:"Right? Isn’t it? (casual)",pos:"Expr",sub:"8-6",kind:"Reply"},
    {word:"しーっ",def:"Shh!",pos:"Expr",sub:"8-6",kind:"Reply"},
    {word:"チェンマイ",def:"Chiang Mai",pos:"Noun",sub:"8·Reading"},
    {word:"いろいろな",def:"various 〜",pos:"Expr",sub:"8·Reading",kind:"Pattern"},
    {word:"弟",reading:"おとうと",def:"younger brother",pos:"Noun",sub:"8·Reading"},
    {word:"兄",reading:"あに",def:"older brother",pos:"Noun",sub:"8·Reading"},
    {word:"姉",reading:"あね",def:"older sister",pos:"Noun",sub:"8·Reading"},
    {word:"兄弟",reading:"きょうだい",def:"siblings",pos:"Noun",sub:"8·Reading"},
    {word:"これから",def:"from now on",pos:"Adv",sub:"8·Reading"},
    {word:"勉強",reading:"べんきょう",def:"study",pos:"Noun",sub:"8·Reading"},
    {word:"紹介",reading:"しょうかい",def:"introduction",pos:"Noun",sub:"8·Reading"},
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
    {word:"ゆっくり",def:"slowly; take your time",pos:"Adv",sub:"9-2",ex:"父はゆっくりと歩きます。"},
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
    {word:"声",reading:"こえ",def:"voice",pos:"Noun",sub:"9-1"},
    {word:"ゴム",def:"rubber",pos:"Noun",sub:"9-1"},
    {word:"送ります",reading:"おくります",def:"to send",pos:"Verb",sub:"9-3",grp:"G1"},
    {word:"泣きます",reading:"なきます",def:"to cry",pos:"Verb",sub:"9-3",grp:"G1"},
    {word:"もっと",def:"more",pos:"Adv",sub:"9-1"},
    {word:"洗剤",reading:"せんざい",def:"detergent",pos:"Noun",sub:"9-2"},
    {word:"自分で",reading:"じぶんで",def:"by oneself",pos:"Adv",sub:"9-2"},
    {word:"自分",reading:"じぶん",def:"oneself",pos:"Noun",sub:"9-2"},
    {word:"て形",reading:"てけい",def:"て-form (of a verb)",pos:"Noun",sub:"9-2"},
    {word:"散歩をします",reading:"さんぽをします",def:"to take a walk",pos:"Verb",sub:"9-3",grp:"G3"},
    {word:"ギターを弾きます",reading:"ギターをひきます",def:"to play the guitar",pos:"Verb",sub:"9-3",grp:"G1"},
    {word:"本箱",reading:"ほんばこ",def:"bookcase",pos:"Noun",sub:"9-3"},
    {word:"そうか",def:"Oh, right; I see (casual)",pos:"Expr",sub:"9-3",kind:"Reply"},
    {word:"〜と申します",reading:"〜ともうします",def:"My name is 〜 (humble)",pos:"Expr",sub:"9·Reading",kind:"Pattern"},
    {word:"いらっしゃいます",def:"to be (honorific)",pos:"Verb",sub:"9·Reading",grp:"G1"},
    {word:"いらっしゃいますか",def:"Is 〜 there? (polite)",pos:"Expr",sub:"9·Reading",kind:"Pattern"},
    {word:"電話に出ます",reading:"でんわにでます",def:"to answer the phone",pos:"Verb",sub:"9·Reading",grp:"G2"},
    {word:"電話をします",reading:"でんわをします",def:"to make a phone call",pos:"Verb",sub:"9·Reading",grp:"G3"},
    {word:"やあ",def:"Hi (casual, male)",pos:"Expr",sub:"9·Reading",kind:"Greeting"},
    {word:"昼休み",reading:"ひるやすみ",def:"lunch break",pos:"Noun",sub:"9·Reading"},
    {word:"メール",def:"e-mail",pos:"Noun",sub:"9·Reading"},
    {word:"おすすめ",def:"recommendation",pos:"Noun",sub:"9·Reading"},
    {word:"ルームメイト",def:"roommate",pos:"Noun",sub:"9·Reading"},
    {word:"返事",reading:"へんじ",def:"reply, answer",pos:"Noun",sub:"9·Reading"},
    {word:"返信メール",reading:"へんしんメール",def:"reply e-mail",pos:"Noun",sub:"9·Reading"},
    {word:"気持ちがいい",reading:"きもちがいい",def:"feels good",pos:"Expr",sub:"9·Reading",kind:"Pattern"},
    {word:"気持ち",reading:"きもち",def:"feeling",pos:"Noun",sub:"9·Reading"},
    {word:"授業",reading:"じゅぎょう",def:"class, lesson",pos:"Noun",sub:"9·Reading"},
    {word:"大学",reading:"だいがく",def:"university",pos:"Noun",sub:"9·Reading"},
    {word:"ぜひ",def:"by all means; definitely",pos:"Adv",sub:"9·Reading"},
    {word:"楽しみ",reading:"たのしみ",def:"thing to look forward to",pos:"Noun",sub:"9·Reading"},
    {word:"楽しみにしています",reading:"たのしみにしています",def:"I look forward to it",pos:"Expr",sub:"9·Reading",kind:"Greeting"},
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
    {word:"鎌倉",reading:"かまくら",def:"Kamakura",pos:"Noun",sub:"10-4"},
    {word:"すぐ",def:"right away, soon",pos:"Adv",sub:"10-4"},
    {word:"まっすぐ",def:"straight ahead",pos:"Adv",sub:"10-4"},
    {word:"考えます",reading:"かんがえます",def:"to think, to consider",pos:"Verb",sub:"10-2",grp:"G2"},
    {word:"着きます",reading:"つきます",def:"to arrive",pos:"Verb",sub:"10-4",grp:"G1"},
    {word:"ロールプレイ",def:"role play",pos:"Noun",sub:"10-1"},
    {word:"頭が痛い",reading:"あたまがいたい",def:"to have a headache",pos:"Expr",sub:"10-1",kind:"Pattern"},
    {word:"熱があります",reading:"ねつがあります",def:"to have a fever",pos:"Expr",sub:"10-1",kind:"Pattern"},
    {word:"テストを受けます",reading:"テストをうけます",def:"to take a test",pos:"Verb",sub:"10-1",grp:"G2"},
    {word:"ホラービデオ",def:"horror video",pos:"Noun",sub:"10-1"},
    {word:"パンフレット",def:"pamphlet, brochure",pos:"Noun",sub:"10-1"},
    {word:"いいですよ",def:"Sure, that’s fine",pos:"Expr",sub:"10-1",kind:"Reply"},
    {word:"それはちょっと…",def:"that’s a bit… (refusal)",pos:"Expr",sub:"10-1",kind:"Reply"},
    {word:"食事をします",reading:"しょくじをします",def:"to have a meal",pos:"Verb",sub:"10-3",grp:"G3"},
    {word:"もう",def:"already; now (もう寝ます)",pos:"Adv",sub:"10-3"},
    {word:"古新聞",reading:"ふるしんぶん",def:"old newspapers",pos:"Noun",sub:"10-3"},
    {word:"袋",reading:"ふくろ",def:"bag (paper/plastic)",pos:"Noun",sub:"10-3"},
    {word:"新大久保",reading:"しんおおくぼ",def:"Shin-Okubo",pos:"Noun",sub:"10-4"},
    {word:"山手線",reading:"やまのてせん",def:"Yamanote Line",pos:"Noun",sub:"10-4"},
    {word:"中央線",reading:"ちゅうおうせん",def:"Chuo Line",pos:"Noun",sub:"10-4"},
    {word:"銀座線",reading:"ぎんざせん",def:"Ginza Line",pos:"Noun",sub:"10-4"},
    {word:"丸ノ内線",reading:"まるのうちせん",def:"Marunouchi Line",pos:"Noun",sub:"10-4"},
    {word:"京葉線",reading:"けいようせん",def:"Keiyo Line",pos:"Noun",sub:"10-4"},
    {word:"ゆりかもめ",def:"Yurikamome (train line)",pos:"Noun",sub:"10-4"},
    {word:"湘南新宿ライン",reading:"しょうなんしんじゅくライン",def:"Shonan-Shinjuku Line",pos:"Noun",sub:"10-4"},
    {word:"〜線",reading:"〜せん",def:"〜 Line (train)",pos:"Expr",sub:"10-4",kind:"Pattern"},
    {word:"高尾",reading:"たかお",def:"Takao",pos:"Noun",sub:"10-4"},
    {word:"新橋",reading:"しんばし",def:"Shimbashi",pos:"Noun",sub:"10-4"},
    {word:"お台場",reading:"おだいば",def:"Odaiba",pos:"Noun",sub:"10-4"},
    {word:"舞浜",reading:"まいはま",def:"Maihama",pos:"Noun",sub:"10-4"},
    {word:"横浜",reading:"よこはま",def:"Yokohama",pos:"Noun",sub:"10-4"},
    {word:"東京駅",reading:"とうきょうえき",def:"Tokyo Station",pos:"Noun",sub:"10-4"},
    {word:"どうやって行きますか",reading:"どうやっていきますか",def:"How do I get there?",pos:"Expr",sub:"10-4",kind:"Question"},
    {word:"〜で降りてください",reading:"〜でおりてください",def:"Get off at 〜, please",pos:"Expr",sub:"10-4",kind:"Pattern"},
    {word:"いくらかかりますか",def:"How much does it cost?",pos:"Expr",sub:"10-4",kind:"Question"},
    {word:"どのぐらいかかりますか",def:"How long does it take?",pos:"Expr",sub:"10-4",kind:"Question"},
    {word:"雨が降ります",reading:"あめがふります",def:"to rain",pos:"Verb",sub:"10-5",grp:"G1"},
    {word:"つれて来ます",reading:"つれてきます",def:"to bring (a person)",pos:"Verb",sub:"10-5",grp:"G3"},
    {word:"デザート",def:"dessert",pos:"Noun",sub:"10-5"},
    {word:"ペプシ",def:"Pepsi",pos:"Noun",sub:"10-5"},
    {word:"お醤油",reading:"おしょうゆ",def:"soy sauce",pos:"Noun",sub:"10-5"},
    {word:"頼みます",reading:"たのみます",def:"to ask; to order",pos:"Verb",sub:"10-5",grp:"G1"},
    {word:"いいですね",def:"Sounds good; nice",pos:"Expr",sub:"10-5",kind:"Reply"},
    {word:"テストの日",reading:"テストのひ",def:"test day",pos:"Noun",sub:"10·Reading"},
    {word:"だめ",def:"no good; not allowed",pos:"Adj",sub:"10·Reading",adj:"na"},
    {word:"だめです",def:"That’s not allowed",pos:"Expr",sub:"10·Reading",kind:"Reply"},
    {word:"それじゃ",def:"well then",pos:"Conj",sub:"10·Reading"},
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
    {word:"一番",reading:"いちばん",def:"the most; number one",pos:"Adv",sub:"11-3"},
    {word:"商品",reading:"しょうひん",def:"goods, product",pos:"Noun",sub:"11-5"},
    {word:"受付",reading:"うけつけ",def:"reception desk",pos:"Noun",sub:"11-5"},
    {word:"どっち",def:"which (of two, casual)",pos:"Expr",sub:"11-1",kind:"Question"},
    {word:"こっち",def:"this one; this way",pos:"Noun",sub:"11-1"},
    {word:"〜にします",def:"I’ll go with 〜",pos:"Expr",sub:"11-1",kind:"Pattern"},
    {word:"〜はどうですか",def:"How about 〜?",pos:"Expr",sub:"11-1",kind:"Pattern"},
    {word:"どちらも",def:"both",pos:"Expr",sub:"11-1",kind:"Amount"},
    {word:"どちらでも",def:"either one",pos:"Expr",sub:"11-1",kind:"Amount"},
    {word:"テーブルクロス",def:"tablecloth",pos:"Noun",sub:"11-1"},
    {word:"グレー",def:"grey",pos:"Noun",sub:"11-1"},
    {word:"ブルー",def:"blue",pos:"Noun",sub:"11-1"},
    {word:"スカイツリー",def:"Tokyo Skytree",pos:"Noun",sub:"11-1"},
    {word:"東京タワー",reading:"とうきょうタワー",def:"Tokyo Tower",pos:"Noun",sub:"11-1"},
    {word:"居酒屋",reading:"いざかや",def:"izakaya (Japanese pub)",pos:"Noun",sub:"11-1"},
    {word:"富士山",reading:"ふじさん",def:"Mt Fuji",pos:"Noun",sub:"11-2"},
    {word:"大きさ",reading:"おおきさ",def:"size",pos:"Noun",sub:"11-2"},
    {word:"長さ",reading:"ながさ",def:"length",pos:"Noun",sub:"11-2"},
    {word:"高さ",reading:"たかさ",def:"height",pos:"Noun",sub:"11-2"},
    {word:"重さ",reading:"おもさ",def:"weight",pos:"Noun",sub:"11-2"},
    {word:"甘さ",reading:"あまさ",def:"sweetness",pos:"Noun",sub:"11-2"},
    {word:"足りません",reading:"たりません",def:"not enough",pos:"Expr",sub:"11-2",kind:"Pattern"},
    {word:"うそ",def:"lie; no way!",pos:"Noun",sub:"11-2"},
    {word:"原宿",reading:"はらじゅく",def:"Harajuku",pos:"Noun",sub:"11-3"},
    {word:"タブレット",def:"tablet",pos:"Noun",sub:"11-3"},
    {word:"定食",reading:"ていしょく",def:"set meal",pos:"Noun",sub:"11-3"},
    {word:"ショートケーキ",def:"shortcake",pos:"Noun",sub:"11-3"},
    {word:"シーフード",def:"seafood",pos:"Noun",sub:"11-3"},
    {word:"カテゴリー",def:"category",pos:"Noun",sub:"11-3"},
    {word:"〜の中で",reading:"〜のなかで",def:"among 〜",pos:"Expr",sub:"11-3",kind:"Pattern"},
    {word:"いかがですか",def:"How about this?",pos:"Expr",sub:"11-4",kind:"Question"},
    {word:"ちょうどいい",def:"just right",pos:"Expr",sub:"11-4",kind:"Pattern"},
    {word:"もう少し",reading:"もうすこし",def:"a little more",pos:"Adv",sub:"11-4"},
    {word:"飲みすぎます",reading:"のみすぎます",def:"to drink too much",pos:"Verb",sub:"11-4",grp:"G2"},
    {word:"食べすぎます",reading:"たべすぎます",def:"to eat too much",pos:"Verb",sub:"11-4",grp:"G2"},
    {word:"焼き肉",reading:"やきにく",def:"yakiniku (grilled meat)",pos:"Noun",sub:"11-4"},
    {word:"〜人分",reading:"〜にんぶん",def:"portions for 〜 people",pos:"Expr",sub:"11-4",kind:"Counter"},
    {word:"マンション",def:"apartment building",pos:"Noun",sub:"11-4"},
    {word:"サンダル",def:"sandals",pos:"Noun",sub:"11-4"},
    {word:"スニーカー",def:"sneakers",pos:"Noun",sub:"11-4"},
    {word:"ハイヒール",def:"high heels",pos:"Noun",sub:"11-4"},
    {word:"パンプス",def:"pumps (shoes)",pos:"Noun",sub:"11-4"},
    {word:"かわいい",def:"cute",pos:"Adj",sub:"11-4",adj:"i"},
    {word:"チャレンジ会話",reading:"チャレンジかいわ",def:"challenge conversation",pos:"Noun",sub:"11-4"},
    {word:"わかりにくい",def:"hard to understand",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"読みにくい",reading:"よみにくい",def:"hard to read",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"読みやすい",reading:"よみやすい",def:"easy to read",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"歩きやすい",reading:"あるきやすい",def:"easy to walk in",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"歩きにくい",reading:"あるきにくい",def:"hard to walk in",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"食べにくい",reading:"たべにくい",def:"hard to eat",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"使いやすい",reading:"つかいやすい",def:"easy to use",pos:"Adj",sub:"11-5",adj:"i"},
    {word:"スタッフ",def:"staff",pos:"Noun",sub:"11-5"},
    {word:"クリックします",def:"to click",pos:"Verb",sub:"11-5",grp:"G3"},
    {word:"センチ",def:"centimetre",pos:"Noun",sub:"11-5"},
    {word:"何センチ",reading:"なんセンチ",def:"how many centimetres",pos:"Expr",sub:"11-5",kind:"Counter"},
    {word:"文字",reading:"もじ",def:"letter, character",pos:"Noun",sub:"11-5"},
    {word:"メモ",def:"memo, note",pos:"Noun",sub:"11-5"},
    {word:"一人で",reading:"ひとりで",def:"alone, by oneself",pos:"Adv",sub:"11·Reading"},
    {word:"うん",def:"yeah (casual yes)",pos:"Expr",sub:"11·Reading",kind:"Reply"},
    {word:"ううん",def:"nah (casual no)",pos:"Expr",sub:"11·Reading",kind:"Reply"},
    {word:"友だちのことば",reading:"ともだちのことば",def:"casual speech",pos:"Noun",sub:"11·Reading"},
    {word:"冗談",reading:"じょうだん",def:"joke",pos:"Noun",sub:"11·Reading"},
    {word:"台湾",reading:"たいわん",def:"Taiwan",pos:"Noun",sub:"11·Reading"},
    {word:"たいわん人",reading:"たいわんじん",def:"Taiwanese person",pos:"Noun",sub:"11·Reading"},
    {word:"パリ",def:"Paris",pos:"Noun",sub:"11·Reading"},
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
    {word:"月日",reading:"がっぴ",def:"date (month and day)",pos:"Noun",sub:"12·Interview"},
    {word:"日時",reading:"にちじ",def:"date and time",pos:"Noun",sub:"12·Interview"},
    {word:"場所",reading:"ばしょ",def:"place, location",pos:"Noun",sub:"12·Interview"},
    {word:"人数",reading:"にんずう",def:"number of people",pos:"Noun",sub:"12·Interview"},
    {word:"集合",reading:"しゅうごう",def:"meeting point / time",pos:"Noun",sub:"12·Interview"},
    {word:"持ち物",reading:"もちもの",def:"things to bring",pos:"Noun",sub:"12·Interview"},
    {word:"在留カード",reading:"ざいりゅうカード",def:"residence card",pos:"Noun",sub:"12·Interview"},
    {word:"飲み放題",reading:"のみほうだい",def:"all-you-can-drink",pos:"Noun",sub:"12·Interview"},
    {word:"コスプレ",def:"cosplay",pos:"Noun",sub:"12·Interview"},
    {word:"リアクション",def:"reaction",pos:"Noun",sub:"12·Interview"},
    {word:"感想",reading:"かんそう",def:"impressions, thoughts",pos:"Noun",sub:"12·Interview"},
    {word:"アイコンタクト",def:"eye contact",pos:"Noun",sub:"12·Interview"},
    {word:"プラン",def:"plan",pos:"Noun",sub:"12·Interview"},
    {word:"トピック",def:"topic",pos:"Noun",sub:"12·Interview"},
    {word:"国籍",reading:"こくせき",def:"nationality",pos:"Noun",sub:"12·Interview"},
    {word:"住所",reading:"じゅうしょ",def:"address",pos:"Noun",sub:"12·Interview"},
    {word:"生年月日",reading:"せいねんがっぴ",def:"date of birth",pos:"Noun",sub:"12·Interview"},
    {word:"個人情報",reading:"こじんじょうほう",def:"personal information",pos:"Noun",sub:"12·Interview"},
    {word:"お名前は？",reading:"おなまえは",def:"Your name?",pos:"Expr",sub:"12·Interview",kind:"Question"},
    {word:"ご出身は？",reading:"ごしゅっしんは",def:"Where are you from?",pos:"Expr",sub:"12·Interview",kind:"Question"},
    {word:"お国はどちらですか",reading:"おくにはどちらですか",def:"Where are you from?",pos:"Expr",sub:"12·Interview",kind:"Question"},
    {word:"簡単",reading:"かんたん",def:"easy, simple",pos:"Adj",sub:"12·Test",adj:"na"},
    {word:"特別",reading:"とくべつ",def:"special",pos:"Adj",sub:"12·Test",adj:"na"},
    {word:"普通",reading:"ふつう",def:"ordinary, usual",pos:"Noun",sub:"12-3"},
    {word:"風邪",reading:"かぜ",def:"a cold (illness)",pos:"Noun",sub:"12-3"},
    {word:"風邪をひきます",reading:"かぜをひきます",def:"to catch a cold",pos:"Verb",sub:"12-3",grp:"G1"},
    {word:"ポスト",def:"postbox, mailbox",pos:"Noun",sub:"12-5"},
    {word:"知ります",reading:"しります",def:"to get to know",pos:"Verb",sub:"12-4",grp:"G1"},
    {word:"知っています",reading:"しっています",def:"I know",pos:"Expr",sub:"12-4",kind:"Pattern"},
    {word:"知りません",reading:"しりません",def:"I don’t know",pos:"Expr",sub:"12-4",kind:"Pattern"},
    {word:"伝えます",reading:"つたえます",def:"to convey, to tell",pos:"Verb",sub:"12·Test",grp:"G2"},
    {word:"断ります",reading:"ことわります",def:"to refuse, to decline",pos:"Verb",sub:"12·Test",grp:"G1"},
    {word:"結びます",reading:"むすびます",def:"to tie; to connect",pos:"Verb",sub:"12-4",grp:"G1"},
    {word:"並べます",reading:"ならべます",def:"to line up, to arrange",pos:"Verb",sub:"12·Test",grp:"G2"},
    {word:"探します",reading:"さがします",def:"to look for",pos:"Verb",sub:"12·Test",grp:"G1"},
    {word:"準備",reading:"じゅんび",def:"preparation",pos:"Noun",sub:"12·Test"},
    {word:"カフェラテ",def:"café latte",pos:"Noun",sub:"12-1"},
    {word:"ダイエット中",reading:"ダイエットちゅう",def:"on a diet",pos:"Noun",sub:"12-1"},
    {word:"体にわるい",reading:"からだにわるい",def:"bad for the body",pos:"Expr",sub:"12-1",kind:"Pattern"},
    {word:"体にいい",reading:"からだにいい",def:"good for the body",pos:"Expr",sub:"12-1",kind:"Pattern"},
    {word:"気にしないで",reading:"きにしないで",def:"Don’t worry about it",pos:"Expr",sub:"12-1",kind:"Reply"},
    {word:"気にします",reading:"きにします",def:"to mind, to worry about",pos:"Verb",sub:"12-1",grp:"G3"},
    {word:"よかった",def:"Thank goodness; I’m glad",pos:"Expr",sub:"12-1",kind:"Reply"},
    {word:"レポート",def:"report",pos:"Noun",sub:"12-2"},
    {word:"どう思いますか",reading:"どうおもいますか",def:"What do you think?",pos:"Expr",sub:"12-3",kind:"Question"},
    {word:"ファッション",def:"fashion",pos:"Noun",sub:"12-3"},
    {word:"レジ袋",reading:"レジぶくろ",def:"plastic shopping bag",pos:"Noun",sub:"12-4"},
    {word:"有料",reading:"ゆうりょう",def:"charged, not free",pos:"Noun",sub:"12-4"},
    {word:"無料",reading:"むりょう",def:"free of charge",pos:"Noun",sub:"12-4"},
    {word:"昔",reading:"むかし",def:"long ago, old days",pos:"Noun",sub:"12-4"},
    {word:"〜枚",reading:"〜まい",def:"counter for flat things",pos:"Expr",sub:"12-4",kind:"Counter"},
    {word:"なんで",def:"why (casual)",pos:"Expr",sub:"12-4",kind:"Question"},
    {word:"どうしても",def:"just because; no matter what",pos:"Expr",sub:"12-4",kind:"Reply"},
    {word:"少ない",reading:"すくない",def:"few, little",pos:"Adj",sub:"12-5",adj:"i"},
    {word:"人気があります",reading:"にんきがあります",def:"to be popular",pos:"Expr",sub:"12-5",kind:"Pattern"},
    {word:"外国の方",reading:"がいこくのかた",def:"foreigner (polite)",pos:"Noun",sub:"12·Reading"},
    {word:"どちらからですか",def:"Where are you from?",pos:"Expr",sub:"12·Reading",kind:"Question"},
    {word:"遠く",reading:"とおく",def:"far away",pos:"Noun",sub:"12·Reading"},
    {word:"道",reading:"みち",def:"road, way",pos:"Noun",sub:"12·Reading"},
    {word:"歌舞伎座",reading:"かぶきざ",def:"Kabuki-za theatre",pos:"Noun",sub:"12·Reading"},
    {word:"おしゃれ",def:"stylish, fashionable",pos:"Adj",sub:"12·Reading",adj:"na"},
    {word:"交差点",reading:"こうさてん",def:"intersection",pos:"Noun",sub:"12·Reading"},
    {word:"ぶつかります",def:"to bump into",pos:"Verb",sub:"12·Reading",grp:"G1"},
    {word:"古本屋",reading:"ふるほんや",def:"second-hand bookshop",pos:"Noun",sub:"12·Reading"},
    {word:"おなかがすきます",def:"to get hungry",pos:"Verb",sub:"12·Reading",grp:"G1"},
    {word:"おなかがすきました",def:"I’m hungry",pos:"Expr",sub:"12·Reading",kind:"Reply"},
    {word:"おなか",def:"stomach, belly",pos:"Noun",sub:"12·Reading"},
    {word:"ミラノ",def:"Milan",pos:"Noun",sub:"12·Reading"},
    {word:"神田",reading:"かんだ",def:"Kanda",pos:"Noun",sub:"12·Reading"},
    {word:"ねこカフェ",def:"cat café",pos:"Noun",sub:"12·Reading"},
    {word:"びっくりします",def:"to be surprised",pos:"Verb",sub:"12·Reading",grp:"G3"},
    {word:"他",reading:"ほか",def:"other; the rest",pos:"Noun",sub:"12·Reading"},
    {word:"ブログ",def:"blog",pos:"Noun",sub:"12·Reading"},
    {word:"彼ら",reading:"かれら",def:"they",pos:"Noun",sub:"12·Reading"},
    {word:"これで終わります",reading:"これでおわります",def:"That’s all for today",pos:"Expr",sub:"12·Reading",kind:"Classroom"},
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
    {word:"文を作りましょう",reading:"ぶんをつくりましょう",def:"Let’s make sentences",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"話しましょう",reading:"はなしましょう",def:"Let’s talk",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"聞きましょう",reading:"ききましょう",def:"Let’s listen",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"読みましょう",reading:"よみましょう",def:"Let’s read",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"書きましょう",reading:"かきましょう",def:"Let’s write",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"見てください",reading:"みてください",def:"Please look",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"聞いてください",reading:"きいてください",def:"Please listen",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"言ってください",reading:"いってください",def:"Please say it",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"書いてください",reading:"かいてください",def:"Please write",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"読んでください",reading:"よんでください",def:"Please read",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"選んでください",reading:"えらんでください",def:"Please choose",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"答えてください",reading:"こたえてください",def:"Please answer",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"質問しましょう",reading:"しつもんしましょう",def:"Let’s ask questions",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"クラスメートにききましょう",def:"Ask your classmates",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"絵を見て",reading:"えをみて",def:"Look at the picture and…",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"覚えましょう",reading:"おぼえましょう",def:"Let’s memorise",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"チェックしましょう",def:"Let’s check",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"わかりますか",def:"Do you understand?",pos:"Expr",sub:"Classroom",kind:"Classroom"},
    {word:"なぜ",def:"why",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"どこか",def:"somewhere",pos:"Expr",sub:"Question",kind:"Amount"},
    {word:"だれか",def:"someone",pos:"Expr",sub:"Question",kind:"Amount"},
    {word:"いつか",def:"someday, sometime",pos:"Expr",sub:"Question",kind:"Amount"},
    {word:"どうですか",def:"How is it? How about it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"どうでしたか",def:"How was it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"何時ですか",reading:"なんじですか",def:"What time is it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"いくらですか",def:"How much is it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"何ですか",reading:"なんですか",def:"What is it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"だれですか",def:"Who is it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"どこですか",def:"Where is it?",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"どんな人",reading:"どんなひと",def:"what kind of person",pos:"Expr",sub:"Question",kind:"Question"},
    {word:"何匹",reading:"なんびき",def:"how many (animals)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜匹",reading:"〜ひき",def:"counter: small animals",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何回",reading:"なんかい",def:"how many times",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜回",reading:"〜かい",def:"〜 times",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何ヶ月",reading:"なんかげつ",def:"how many months",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜ヶ月",reading:"〜かげつ",def:"〜 months (duration)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜日間",reading:"〜にちかん",def:"〜 days (duration)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何週間",reading:"なんしゅうかん",def:"how many weeks",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜週間",reading:"〜しゅうかん",def:"〜 weeks",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜年",reading:"〜ねん",def:"〜 years",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何歳",reading:"なんさい",def:"how old",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"おいくつですか",def:"How old are you?",pos:"Expr",sub:"Counter",kind:"Question"},
    {word:"何冊",reading:"なんさつ",def:"how many (books)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何枚",reading:"なんまい",def:"how many (flat things)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何杯",reading:"なんばい",def:"how many (cups)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何本",reading:"なんぼん",def:"how many (long things)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"何個",reading:"なんこ",def:"how many (small things)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜番目",reading:"〜ばんめ",def:"the 〜th",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜段目",reading:"〜だんめ",def:"the 〜th row (shelf)",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜行目",reading:"〜ぎょうめ",def:"the 〜th line",pos:"Expr",sub:"Counter",kind:"Counter"},
    {word:"〜列目",reading:"〜れつめ",def:"the 〜th row",pos:"Expr",sub:"Counter",kind:"Counter"},
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
  'KL9': [
    {kanji:'春',reading:'はる',meaning:'spring',mode:'write',part:1},
    {kanji:'春休み',reading:'はるやすみ',meaning:'spring vacation',mode:'write',part:1},
    {kanji:'春学期',reading:'はるがっき',meaning:'spring semester',mode:'read',part:1},
    {kanji:'夏',reading:'なつ',meaning:'summer',mode:'write',part:1},
    {kanji:'夏休み',reading:'なつやすみ',meaning:'summer vacation',mode:'write',part:1},
    {kanji:'秋',reading:'あき',meaning:'autumn',mode:'write',part:1},
    {kanji:'冬',reading:'ふゆ',meaning:'winter',mode:'write',part:1},
    {kanji:'冬休み',reading:'ふゆやすみ',meaning:'winter vacation',mode:'write',part:1},
    {kanji:'春夏秋冬',reading:'しゅんかしゅうとう',meaning:'the four seasons',mode:'read',part:1},
    {kanji:'朝',reading:'あさ',meaning:'morning',mode:'write',part:1},
    {kanji:'毎朝',reading:'まいあさ',meaning:'every morning',mode:'write',part:1},
    {kanji:'今朝',reading:'けさ',meaning:'this morning',mode:'write',part:1},
    {kanji:'毎日',reading:'まいにち',meaning:'every day',mode:'write',part:1},
    {kanji:'今日',reading:'きょう',meaning:'today',mode:'write',part:1},
    {kanji:'昼',reading:'ひる',meaning:'noon, daytime',mode:'write',part:1},
    {kanji:'昼間',reading:'ひるま',meaning:'daytime',mode:'write',part:1},
    {kanji:'昼休み',reading:'ひるやすみ',meaning:'lunch break',mode:'write',part:1},
    {kanji:'夕方',reading:'ゆうがた',meaning:'evening',mode:'write',part:1},
    {kanji:'夕食',reading:'ゆうしょく',meaning:'dinner',mode:'write',part:1},
    {kanji:'朝食',reading:'ちょうしょく',meaning:'breakfast',mode:'read',part:1},
    {kanji:'昼食',reading:'ちゅうしょく',meaning:'lunch',mode:'read',part:1},
    {kanji:'読み方',reading:'よみかた',meaning:'way of reading',mode:'write',part:1},
    {kanji:'両方',reading:'りょうほう',meaning:'both',mode:'read',part:1},
    {kanji:'晩',reading:'ばん',meaning:'evening, night',mode:'write',part:1},
    {kanji:'今晩',reading:'こんばん',meaning:'tonight',mode:'write',part:1},
    {kanji:'毎晩',reading:'まいばん',meaning:'every night',mode:'write',part:1},
    {kanji:'夜',reading:'よる',meaning:'night',mode:'write',part:1},
    {kanji:'今夜',reading:'こんや',meaning:'tonight',mode:'write',part:1},
    {kanji:'夜中',reading:'よなか',meaning:'middle of the night',mode:'write',part:1},
    {kanji:'明るい',reading:'あかるい',meaning:'bright',mode:'write',part:1},
    {kanji:'心',reading:'こころ',meaning:'heart, mind',mode:'write',part:1},
    {kanji:'安心する',reading:'あんしんする',meaning:'to feel relieved',mode:'write',part:1},
    {kanji:'心配する',reading:'しんぱいする',meaning:'to worry',mode:'read',part:1},
    {kanji:'手',reading:'て',meaning:'hand',mode:'write',part:1},
    {kanji:'下手な',reading:'へたな',meaning:'bad at, unskillful',mode:'write',part:1},
    {kanji:'上手な',reading:'じょうずな',meaning:'good at, skillful',mode:'write',part:1},
    {kanji:'お手洗い',reading:'おてあらい',meaning:'restroom, toilet',mode:'read',part:1},
    {kanji:'足',reading:'あし',meaning:'foot, leg',mode:'write',part:1},
    {kanji:'足りる',reading:'たりる',meaning:'to be enough',mode:'write',part:1},
    {kanji:'足す',reading:'たす',meaning:'to add',mode:'write',part:1},
    {kanji:'一足',reading:'いっそく',meaning:'one pair (of shoes)',mode:'read',part:1},
    {kanji:'体',reading:'からだ',meaning:'body',mode:'write',part:1},
    {kanji:'体重',reading:'たいじゅう',meaning:'body weight',mode:'read',part:1},
    {kanji:'首',reading:'くび',meaning:'neck',mode:'write',part:1},
    {kanji:'首都',reading:'しゅと',meaning:'capital city',mode:'read',part:1},
    {kanji:'部首',reading:'ぶしゅ',meaning:'kanji radical',mode:'read',part:1},
    {kanji:'道',reading:'みち',meaning:'road, way',mode:'write',part:1},
  ],
  'KL10': [
    {kanji:'山',reading:'やま',meaning:'mountain',mode:'write',part:1},
    {kanji:'山道',reading:'やまみち',meaning:'mountain path',mode:'write',part:1},
    {kanji:'山田さん',reading:'やまださん',meaning:'Yamada (name)',mode:'write',part:1},
    {kanji:'富士山',reading:'ふじさん',meaning:'Mt. Fuji',mode:'read',part:1},
    {kanji:'川',reading:'かわ',meaning:'river',mode:'write',part:1},
    {kanji:'小川さん',reading:'おがわさん',meaning:'Ogawa (name)',mode:'write',part:1},
    {kanji:'林',reading:'はやし',meaning:'woods, grove',mode:'write',part:1},
    {kanji:'森',reading:'もり',meaning:'forest',mode:'write',part:1},
    {kanji:'森田さん',reading:'もりたさん',meaning:'Morita (name)',mode:'write',part:1},
    {kanji:'森林',reading:'しんりん',meaning:'forest, woodland',mode:'read',part:1},
    {kanji:'空',reading:'そら',meaning:'sky',mode:'write',part:1},
    {kanji:'空気',reading:'くうき',meaning:'air',mode:'write',part:1},
    {kanji:'空く',reading:'あく',meaning:'to become empty, free up',mode:'write',part:1},
    {kanji:'海',reading:'うみ',meaning:'sea',mode:'write',part:1},
    {kanji:'北海道',reading:'ほっかいどう',meaning:'Hokkaido',mode:'write',part:1},
    {kanji:'海外',reading:'かいがい',meaning:'overseas, abroad',mode:'read',part:1},
    {kanji:'化学',reading:'かがく',meaning:'chemistry',mode:'write',part:1},
    {kanji:'文化',reading:'ぶんか',meaning:'culture',mode:'read',part:1},
    {kanji:'花',reading:'はな',meaning:'flower',mode:'write',part:1},
    {kanji:'花見',reading:'はなみ',meaning:'flower viewing',mode:'write',part:1},
    {kanji:'花火',reading:'はなび',meaning:'fireworks',mode:'write',part:1},
    {kanji:'天気',reading:'てんき',meaning:'weather',mode:'write',part:1},
    {kanji:'赤',reading:'あか',meaning:'red',mode:'write',part:1},
    {kanji:'赤い',reading:'あかい',meaning:'red',mode:'write',part:1},
    {kanji:'赤ちゃん',reading:'あかちゃん',meaning:'baby',mode:'write',part:1},
    {kanji:'赤道',reading:'せきどう',meaning:'the equator',mode:'write',part:1},
    {kanji:'青',reading:'あお',meaning:'blue',mode:'write',part:1},
    {kanji:'青い',reading:'あおい',meaning:'blue',mode:'write',part:1},
    {kanji:'青空',reading:'あおぞら',meaning:'blue sky',mode:'write',part:1},
    {kanji:'空港',reading:'くうこう',meaning:'airport',mode:'read',part:1},
    {kanji:'白',reading:'しろ',meaning:'white',mode:'write',part:1},
    {kanji:'白い',reading:'しろい',meaning:'white',mode:'write',part:1},
    {kanji:'白紙',reading:'はくし',meaning:'blank paper',mode:'read',part:1},
    {kanji:'黒',reading:'くろ',meaning:'black',mode:'write',part:1},
    {kanji:'黒い',reading:'くろい',meaning:'black',mode:'write',part:1},
    {kanji:'色',reading:'いろ',meaning:'color',mode:'write',part:1},
    {kanji:'水色',reading:'みずいろ',meaning:'light blue',mode:'read',part:1},
    {kanji:'魚',reading:'さかな',meaning:'fish',mode:'write',part:1},
    {kanji:'金魚',reading:'きんぎょ',meaning:'goldfish',mode:'read',part:1},
    {kanji:'犬',reading:'いぬ',meaning:'dog',mode:'write',part:1},
    {kanji:'子犬',reading:'こいぬ',meaning:'puppy',mode:'write',part:1},
  ],
  'KL11': [
    {kanji:'料理',reading:'りょうり',meaning:'cooking, cuisine',mode:'write',part:1},
    {kanji:'無料',reading:'むりょう',meaning:'free of charge',mode:'read',part:1},
    {kanji:'料金',reading:'りょうきん',meaning:'fee, charge',mode:'read',part:1},
    {kanji:'理由',reading:'りゆう',meaning:'reason',mode:'read',part:1},
    {kanji:'ご飯',reading:'ごはん',meaning:'cooked rice, meal',mode:'write',part:1},
    {kanji:'朝ご飯',reading:'あさごはん',meaning:'breakfast',mode:'write',part:1},
    {kanji:'昼ご飯',reading:'ひるごはん',meaning:'lunch',mode:'write',part:1},
    {kanji:'晩ご飯',reading:'ばんごはん',meaning:'dinner',mode:'write',part:1},
    {kanji:'牛',reading:'うし',meaning:'cow',mode:'write',part:1},
    {kanji:'牛肉',reading:'ぎゅうにく',meaning:'beef',mode:'write',part:1},
    {kanji:'牛乳',reading:'ぎゅうにゅう',meaning:'milk',mode:'read',part:1},
    {kanji:'牛丼',reading:'ぎゅうどん',meaning:'beef bowl',mode:'read',part:1},
    {kanji:'豚',reading:'ぶた',meaning:'pig',mode:'write',part:1},
    {kanji:'豚肉',reading:'ぶたにく',meaning:'pork',mode:'write',part:1},
    {kanji:'豚カツ',reading:'とんカツ',meaning:'pork cutlet',mode:'read',part:1},
    {kanji:'鳥',reading:'とり',meaning:'bird',mode:'write',part:1},
    {kanji:'小鳥',reading:'ことり',meaning:'small bird',mode:'write',part:1},
    {kanji:'鳥肉',reading:'とりにく',meaning:'chicken (meat)',mode:'write',part:1},
    {kanji:'焼き鳥',reading:'やきとり',meaning:'grilled chicken skewers',mode:'read',part:1},
    {kanji:'一石二鳥',reading:'いっせきにちょう',meaning:'two birds with one stone',mode:'read',part:1},
    {kanji:'肉',reading:'にく',meaning:'meat',mode:'write',part:1},
    {kanji:'肉屋',reading:'にくや',meaning:'butcher shop',mode:'read',part:1},
    {kanji:'反',reading:'はん',meaning:'oppose, anti-',mode:'write',part:1},
    {kanji:'反対する',reading:'はんたいする',meaning:'to oppose',mode:'read',part:1},
    {kanji:'お茶',reading:'おちゃ',meaning:'tea',mode:'write',part:1},
    {kanji:'茶色',reading:'ちゃいろ',meaning:'brown',mode:'write',part:1},
    {kanji:'予',reading:'よ',meaning:'in advance, beforehand',mode:'write',part:1},
    {kanji:'予定',reading:'よてい',meaning:'plan, schedule',mode:'read',part:1},
    {kanji:'予約',reading:'よやく',meaning:'reservation',mode:'read',part:1},
    {kanji:'予習',reading:'よしゅう',meaning:'class preparation',mode:'read',part:1},
    {kanji:'野菜',reading:'やさい',meaning:'vegetable',mode:'write',part:1},
    {kanji:'長野',reading:'ながの',meaning:'Nagano (place)',mode:'write',part:1},
    {kanji:'切る',reading:'きる',meaning:'to cut',mode:'write',part:1},
    {kanji:'切手',reading:'きって',meaning:'postage stamp',mode:'write',part:1},
    {kanji:'大切な',reading:'たいせつな',meaning:'important',mode:'write',part:1},
    {kanji:'作る',reading:'つくる',meaning:'to make',mode:'write',part:1},
    {kanji:'手作り',reading:'てづくり',meaning:'handmade',mode:'write',part:1},
    {kanji:'作文',reading:'さくぶん',meaning:'essay, composition',mode:'read',part:1},
    {kanji:'未来',reading:'みらい',meaning:'future',mode:'write',part:1},
    {kanji:'味',reading:'あじ',meaning:'taste, flavor',mode:'write',part:1},
    {kanji:'意味',reading:'いみ',meaning:'meaning',mode:'read',part:1},
    {kanji:'趣味',reading:'しゅみ',meaning:'hobby',mode:'read',part:1},
  ],
  'KL12': [
    {kanji:'音',reading:'おと',meaning:'sound',mode:'write',part:1},
    {kanji:'音楽',reading:'おんがく',meaning:'music',mode:'write',part:1},
    {kanji:'楽しい',reading:'たのしい',meaning:'fun, enjoyable',mode:'write',part:1},
    {kanji:'楽しみ',reading:'たのしみ',meaning:'something to look forward to',mode:'write',part:1},
    {kanji:'楽な',reading:'らくな',meaning:'easy, comfortable',mode:'write',part:1},
    {kanji:'歌',reading:'うた',meaning:'song',mode:'write',part:1},
    {kanji:'歌う',reading:'うたう',meaning:'to sing',mode:'write',part:1},
    {kanji:'歌手',reading:'かしゅ',meaning:'singer',mode:'write',part:1},
    {kanji:'自分',reading:'じぶん',meaning:'oneself',mode:'write',part:1},
    {kanji:'自由',reading:'じゆう',meaning:'freedom',mode:'read',part:1},
    {kanji:'転ぶ',reading:'ころぶ',meaning:'to fall down, trip',mode:'write',part:1},
    {kanji:'自転車',reading:'じてんしゃ',meaning:'bicycle',mode:'write',part:1},
    {kanji:'回転ずし',reading:'かいてんずし',meaning:'conveyor-belt sushi',mode:'read',part:1},
    {kanji:'乗る',reading:'のる',meaning:'to ride, get on',mode:'write',part:1},
    {kanji:'乗り換える',reading:'のりかえる',meaning:'to change trains, transfer',mode:'read',part:1},
    {kanji:'乗客',reading:'じょうきゃく',meaning:'passenger',mode:'read',part:1},
    {kanji:'写す',reading:'うつす',meaning:'to copy (down)',mode:'write',part:1},
    {kanji:'写真',reading:'しゃしん',meaning:'photograph',mode:'write',part:1},
    {kanji:'真ん中',reading:'まんなか',meaning:'the very middle',mode:'write',part:1},
    {kanji:'真夜中',reading:'まよなか',meaning:'the middle of the night',mode:'write',part:1},
    {kanji:'二台',reading:'にだい',meaning:'two (cars, machines)',mode:'write',part:1},
    {kanji:'台風',reading:'たいふう',meaning:'typhoon',mode:'read',part:1},
    {kanji:'中央',reading:'ちゅうおう',meaning:'center',mode:'write',part:1},
    {kanji:'中央線',reading:'ちゅうおうせん',meaning:'Chuo Line',mode:'read',part:1},
    {kanji:'映画',reading:'えいが',meaning:'movie',mode:'write',part:1},
    {kanji:'計画',reading:'けいかく',meaning:'plan',mode:'read',part:1},
    {kanji:'羊',reading:'ひつじ',meaning:'sheep',mode:'write',part:1},
    {kanji:'洋服',reading:'ようふく',meaning:'(Western) clothes',mode:'write',part:1},
    {kanji:'西洋',reading:'せいよう',meaning:'the West',mode:'write',part:1},
    {kanji:'東洋',reading:'とうよう',meaning:'the East, the Orient',mode:'write',part:1},
    {kanji:'洋食',reading:'ようしょく',meaning:'Western food',mode:'write',part:1},
    {kanji:'洋書',reading:'ようしょ',meaning:'Western book',mode:'write',part:1},
    {kanji:'服',reading:'ふく',meaning:'clothes',mode:'write',part:1},
    {kanji:'和服',reading:'わふく',meaning:'Japanese clothes, kimono',mode:'read',part:1},
    {kanji:'着る',reading:'きる',meaning:'to wear (above the waist)',mode:'write',part:1},
    {kanji:'上着',reading:'うわぎ',meaning:'jacket, outerwear',mode:'write',part:1},
    {kanji:'下着',reading:'したぎ',meaning:'underwear',mode:'write',part:1},
    {kanji:'着く',reading:'つく',meaning:'to arrive',mode:'write',part:1},
    {kanji:'到着',reading:'とうちゃく',meaning:'arrival',mode:'read',part:1},
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
    {kanji:'禁',reading:'きん',meaning:'prohibited (sign kanji)',mode:'read',part:3},
    {kanji:'禁煙',reading:'きんえん',meaning:'no smoking',mode:'read',part:3},
    {kanji:'立入禁止',reading:'たちいりきんし',meaning:'keep out; no entry',mode:'read',part:3},
    {kanji:'非常',reading:'ひじょう',meaning:'emergency (非常口 emergency exit)',mode:'read',part:3},
    {kanji:'危険',reading:'きけん',meaning:'danger',mode:'read',part:3},
    {kanji:'営業中',reading:'えいぎょうちゅう',meaning:'open (for business)',mode:'read',part:4},
    {kanji:'準備中',reading:'じゅんびちゅう',meaning:'not open yet; preparing',mode:'read',part:4},
    {kanji:'無料',reading:'むりょう',meaning:'free of charge',mode:'read',part:4},
    {kanji:'有料',reading:'ゆうりょう',meaning:'fee required; not free',mode:'read',part:4},
    {kanji:'半額',reading:'はんがく',meaning:'half price (50% OFF)',mode:'read',part:4},
    {kanji:'割引',reading:'わりびき',meaning:'discount (3割引 = 30% OFF)',mode:'read',part:4},
    {kanji:'薬局',reading:'やっきょく',meaning:'pharmacy',mode:'read',part:4},
    {kanji:'工事中',reading:'こうじちゅう',meaning:'under construction (road / building sign)',mode:'read',part:3},
    {kanji:'定休日',reading:'ていきゅうび',meaning:'regular closing day (shop sign)',mode:'read',part:4},
    {kanji:'銀行',reading:'ぎんこう',meaning:'bank (sign)',mode:'read',part:4},
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
  '下手':[{label:'Pres. +',jp:'へたです'},{label:'Pres. −',jp:'へたじゃありません'},{label:'Past +',jp:'へたでした'},{label:'Past −',jp:'へたじゃありませんでした'},{label:'+ Noun',jp:'へたな＋N'}],
  'へた':[{label:'Pres. +',jp:'へたです'},{label:'Pres. −',jp:'へたじゃありません'},{label:'Past +',jp:'へたでした'},{label:'Past −',jp:'へたじゃありませんでした'},{label:'+ Noun',jp:'へたな＋N'}],
  '得意':[{label:'Pres. +',jp:'とくいです'},{label:'Pres. −',jp:'とくいじゃありません'},{label:'Past +',jp:'とくいでした'},{label:'Past −',jp:'とくいじゃありませんでした'},{label:'+ Noun',jp:'とくいな＋N'}],
  'とくい':[{label:'Pres. +',jp:'とくいです'},{label:'Pres. −',jp:'とくいじゃありません'},{label:'Past +',jp:'とくいでした'},{label:'Past −',jp:'とくいじゃありませんでした'},{label:'+ Noun',jp:'とくいな＋N'}],
  '苦手':[{label:'Pres. +',jp:'にがてです'},{label:'Pres. −',jp:'にがてじゃありません'},{label:'Past +',jp:'にがてでした'},{label:'Past −',jp:'にがてじゃありませんでした'},{label:'+ Noun',jp:'にがてな＋N'}],
  'にがて':[{label:'Pres. +',jp:'にがてです'},{label:'Pres. −',jp:'にがてじゃありません'},{label:'Past +',jp:'にがてでした'},{label:'Past −',jp:'にがてじゃありませんでした'},{label:'+ Noun',jp:'にがてな＋N'}],
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
  '練習します':[{label:'Pres. +',jp:'練習します'},{label:'Pres. −',jp:'練習しません'},{label:'Past +',jp:'練習しました'},{label:'Past −',jp:'練習しませんでした'},{label:'Dictionary',jp:'れんしゅうする'},{label:'て-form',jp:'れんしゅうして'},{label:'ない form',jp:'れんしゅうしない'}],
  '練習します#G3':[{label:'Pres. +',jp:'練習します'},{label:'Pres. −',jp:'練習しません'},{label:'Past +',jp:'練習しました'},{label:'Past −',jp:'練習しませんでした'},{label:'Dictionary',jp:'れんしゅうする'},{label:'て-form',jp:'れんしゅうして'},{label:'ない form',jp:'れんしゅうしない'}],
  'れんしゅうします#G3':[{label:'Pres. +',jp:'練習します'},{label:'Pres. −',jp:'練習しません'},{label:'Past +',jp:'練習しました'},{label:'Past −',jp:'練習しませんでした'},{label:'Dictionary',jp:'れんしゅうする'},{label:'て-form',jp:'れんしゅうして'},{label:'ない form',jp:'れんしゅうしない'}],
  'れんしゅうします':[{label:'Pres. +',jp:'練習します'},{label:'Pres. −',jp:'練習しません'},{label:'Past +',jp:'練習しました'},{label:'Past −',jp:'練習しませんでした'},{label:'Dictionary',jp:'れんしゅうする'},{label:'て-form',jp:'れんしゅうして'},{label:'ない form',jp:'れんしゅうしない'}],
  '質問します':[{label:'Pres. +',jp:'質問します'},{label:'Pres. −',jp:'質問しません'},{label:'Past +',jp:'質問しました'},{label:'Past −',jp:'質問しませんでした'},{label:'Dictionary',jp:'しつもんする'},{label:'て-form',jp:'しつもんして'},{label:'ない form',jp:'しつもんしない'}],
  '質問します#G3':[{label:'Pres. +',jp:'質問します'},{label:'Pres. −',jp:'質問しません'},{label:'Past +',jp:'質問しました'},{label:'Past −',jp:'質問しませんでした'},{label:'Dictionary',jp:'しつもんする'},{label:'て-form',jp:'しつもんして'},{label:'ない form',jp:'しつもんしない'}],
  'しつもんします#G3':[{label:'Pres. +',jp:'質問します'},{label:'Pres. −',jp:'質問しません'},{label:'Past +',jp:'質問しました'},{label:'Past −',jp:'質問しませんでした'},{label:'Dictionary',jp:'しつもんする'},{label:'て-form',jp:'しつもんして'},{label:'ない form',jp:'しつもんしない'}],
  'しつもんします':[{label:'Pres. +',jp:'質問します'},{label:'Pres. −',jp:'質問しません'},{label:'Past +',jp:'質問しました'},{label:'Past −',jp:'質問しませんでした'},{label:'Dictionary',jp:'しつもんする'},{label:'て-form',jp:'しつもんして'},{label:'ない form',jp:'しつもんしない'}],
  '簡単':[{label:'Pres. +',jp:'かんたんです'},{label:'Pres. −',jp:'かんたんじゃありません'},{label:'Past +',jp:'かんたんでした'},{label:'Past −',jp:'かんたんじゃありませんでした'},{label:'+ Noun',jp:'かんたんな＋N'}],
  'かんたん':[{label:'Pres. +',jp:'かんたんです'},{label:'Pres. −',jp:'かんたんじゃありません'},{label:'Past +',jp:'かんたんでした'},{label:'Past −',jp:'かんたんじゃありませんでした'},{label:'+ Noun',jp:'かんたんな＋N'}],
  'すごい':[{label:'Pres. +',jp:'すごいです'},{label:'Pres. −',jp:'すごくありません'},{label:'Past +',jp:'すごかったです'},{label:'Past −',jp:'すごくありませんでした'},{label:'Adverb',jp:'すごく'}],
  '素晴らしい':[{label:'Pres. +',jp:'すばらしいです'},{label:'Pres. −',jp:'すばらしくありません'},{label:'Past +',jp:'すばらしかったです'},{label:'Past −',jp:'すばらしくありませんでした'},{label:'Adverb',jp:'すばらしく'}],
  'すばらしい':[{label:'Pres. +',jp:'すばらしいです'},{label:'Pres. −',jp:'すばらしくありません'},{label:'Past +',jp:'すばらしかったです'},{label:'Past −',jp:'すばらしくありませんでした'},{label:'Adverb',jp:'すばらしく'}],
  '弱い':[{label:'Pres. +',jp:'よわいです'},{label:'Pres. −',jp:'よわくありません'},{label:'Past +',jp:'よわかったです'},{label:'Past −',jp:'よわくありませんでした'},{label:'Adverb',jp:'よわく'}],
  'よわい':[{label:'Pres. +',jp:'よわいです'},{label:'Pres. −',jp:'よわくありません'},{label:'Past +',jp:'よわかったです'},{label:'Past −',jp:'よわくありませんでした'},{label:'Adverb',jp:'よわく'}],
  '眠い':[{label:'Pres. +',jp:'ねむいです'},{label:'Pres. −',jp:'ねむくありません'},{label:'Past +',jp:'ねむかったです'},{label:'Past −',jp:'ねむくありませんでした'},{label:'Adverb',jp:'ねむく'}],
  'ねむい':[{label:'Pres. +',jp:'ねむいです'},{label:'Pres. −',jp:'ねむくありません'},{label:'Past +',jp:'ねむかったです'},{label:'Past −',jp:'ねむくありませんでした'},{label:'Adverb',jp:'ねむく'}],
  '薄い':[{label:'Pres. +',jp:'うすいです'},{label:'Pres. −',jp:'うすくありません'},{label:'Past +',jp:'うすかったです'},{label:'Past −',jp:'うすくありませんでした'},{label:'Adverb',jp:'うすく'}],
  'うすい':[{label:'Pres. +',jp:'うすいです'},{label:'Pres. −',jp:'うすくありません'},{label:'Past +',jp:'うすかったです'},{label:'Past −',jp:'うすくありませんでした'},{label:'Adverb',jp:'うすく'}],
  '正しい':[{label:'Pres. +',jp:'ただしいです'},{label:'Pres. −',jp:'ただしくありません'},{label:'Past +',jp:'ただしかったです'},{label:'Past −',jp:'ただしくありませんでした'},{label:'Adverb',jp:'ただしく'}],
  'ただしい':[{label:'Pres. +',jp:'ただしいです'},{label:'Pres. −',jp:'ただしくありません'},{label:'Past +',jp:'ただしかったです'},{label:'Past −',jp:'ただしくありませんでした'},{label:'Adverb',jp:'ただしく'}],
  '詳しい':[{label:'Pres. +',jp:'くわしいです'},{label:'Pres. −',jp:'くわしくありません'},{label:'Past +',jp:'くわしかったです'},{label:'Past −',jp:'くわしくありませんでした'},{label:'Adverb',jp:'くわしく'}],
  'くわしい':[{label:'Pres. +',jp:'くわしいです'},{label:'Pres. −',jp:'くわしくありません'},{label:'Past +',jp:'くわしかったです'},{label:'Past −',jp:'くわしくありませんでした'},{label:'Adverb',jp:'くわしく'}],
  '涼しい':[{label:'Pres. +',jp:'すずしいです'},{label:'Pres. −',jp:'すずしくありません'},{label:'Past +',jp:'すずしかったです'},{label:'Past −',jp:'すずしくありませんでした'},{label:'Adverb',jp:'すずしく'}],
  'すずしい':[{label:'Pres. +',jp:'すずしいです'},{label:'Pres. −',jp:'すずしくありません'},{label:'Past +',jp:'すずしかったです'},{label:'Past −',jp:'すずしくありませんでした'},{label:'Adverb',jp:'すずしく'}],
  '青い':[{label:'Pres. +',jp:'あおいです'},{label:'Pres. −',jp:'あおくありません'},{label:'Past +',jp:'あおかったです'},{label:'Past −',jp:'あおくありませんでした'},{label:'Adverb',jp:'あおく'}],
  'あおい':[{label:'Pres. +',jp:'あおいです'},{label:'Pres. −',jp:'あおくありません'},{label:'Past +',jp:'あおかったです'},{label:'Past −',jp:'あおくありませんでした'},{label:'Adverb',jp:'あおく'}],
  '特別':[{label:'Pres. +',jp:'とくべつです'},{label:'Pres. −',jp:'とくべつじゃありません'},{label:'Past +',jp:'とくべつでした'},{label:'Past −',jp:'とくべつじゃありませんでした'},{label:'+ Noun',jp:'とくべつな＋N'}],
  'とくべつ':[{label:'Pres. +',jp:'とくべつです'},{label:'Pres. −',jp:'とくべつじゃありません'},{label:'Past +',jp:'とくべつでした'},{label:'Past −',jp:'とくべつじゃありませんでした'},{label:'+ Noun',jp:'とくべつな＋N'}],
  '風邪をひきます':[{label:'Pres. +',jp:'風邪をひきます'},{label:'Pres. −',jp:'風邪をひきません'},{label:'Past +',jp:'風邪をひきました'},{label:'Past −',jp:'風邪をひきませんでした'},{label:'Dictionary',jp:'かぜをひく'},{label:'て-form',jp:'かぜをひいて'},{label:'ない form',jp:'かぜをひかない'}],
  '風邪をひきます#G1':[{label:'Pres. +',jp:'風邪をひきます'},{label:'Pres. −',jp:'風邪をひきません'},{label:'Past +',jp:'風邪をひきました'},{label:'Past −',jp:'風邪をひきませんでした'},{label:'Dictionary',jp:'かぜをひく'},{label:'て-form',jp:'かぜをひいて'},{label:'ない form',jp:'かぜをひかない'}],
  'かぜをひきます#G1':[{label:'Pres. +',jp:'風邪をひきます'},{label:'Pres. −',jp:'風邪をひきません'},{label:'Past +',jp:'風邪をひきました'},{label:'Past −',jp:'風邪をひきませんでした'},{label:'Dictionary',jp:'かぜをひく'},{label:'て-form',jp:'かぜをひいて'},{label:'ない form',jp:'かぜをひかない'}],
  'かぜをひきます':[{label:'Pres. +',jp:'風邪をひきます'},{label:'Pres. −',jp:'風邪をひきません'},{label:'Past +',jp:'風邪をひきました'},{label:'Past −',jp:'風邪をひきませんでした'},{label:'Dictionary',jp:'かぜをひく'},{label:'て-form',jp:'かぜをひいて'},{label:'ない form',jp:'かぜをひかない'}],
  '知ります':[{label:'Pres. +',jp:'知ります'},{label:'Pres. −',jp:'知りません'},{label:'Past +',jp:'知りました'},{label:'Past −',jp:'知りませんでした'},{label:'Dictionary',jp:'しる'},{label:'て-form',jp:'しって'},{label:'ない form',jp:'しらない'}],
  '知ります#G1':[{label:'Pres. +',jp:'知ります'},{label:'Pres. −',jp:'知りません'},{label:'Past +',jp:'知りました'},{label:'Past −',jp:'知りませんでした'},{label:'Dictionary',jp:'しる'},{label:'て-form',jp:'しって'},{label:'ない form',jp:'しらない'}],
  'しります#G1':[{label:'Pres. +',jp:'知ります'},{label:'Pres. −',jp:'知りません'},{label:'Past +',jp:'知りました'},{label:'Past −',jp:'知りませんでした'},{label:'Dictionary',jp:'しる'},{label:'て-form',jp:'しって'},{label:'ない form',jp:'しらない'}],
  'しります':[{label:'Pres. +',jp:'知ります'},{label:'Pres. −',jp:'知りません'},{label:'Past +',jp:'知りました'},{label:'Past −',jp:'知りませんでした'},{label:'Dictionary',jp:'しる'},{label:'て-form',jp:'しって'},{label:'ない form',jp:'しらない'}],
  '考えます':[{label:'Pres. +',jp:'考えます'},{label:'Pres. −',jp:'考えません'},{label:'Past +',jp:'考えました'},{label:'Past −',jp:'考えませんでした'},{label:'Dictionary',jp:'かんがえる'},{label:'て-form',jp:'かんがえて'},{label:'ない form',jp:'かんがえない'}],
  '考えます#G2':[{label:'Pres. +',jp:'考えます'},{label:'Pres. −',jp:'考えません'},{label:'Past +',jp:'考えました'},{label:'Past −',jp:'考えませんでした'},{label:'Dictionary',jp:'かんがえる'},{label:'て-form',jp:'かんがえて'},{label:'ない form',jp:'かんがえない'}],
  'かんがえます#G2':[{label:'Pres. +',jp:'考えます'},{label:'Pres. −',jp:'考えません'},{label:'Past +',jp:'考えました'},{label:'Past −',jp:'考えませんでした'},{label:'Dictionary',jp:'かんがえる'},{label:'て-form',jp:'かんがえて'},{label:'ない form',jp:'かんがえない'}],
  'かんがえます':[{label:'Pres. +',jp:'考えます'},{label:'Pres. −',jp:'考えません'},{label:'Past +',jp:'考えました'},{label:'Past −',jp:'考えませんでした'},{label:'Dictionary',jp:'かんがえる'},{label:'て-form',jp:'かんがえて'},{label:'ない form',jp:'かんがえない'}],
  '選びます':[{label:'Pres. +',jp:'選びます'},{label:'Pres. −',jp:'選びません'},{label:'Past +',jp:'選びました'},{label:'Past −',jp:'選びませんでした'},{label:'Dictionary',jp:'えらぶ'},{label:'て-form',jp:'えらんで'},{label:'ない form',jp:'えらばない'}],
  '選びます#G1':[{label:'Pres. +',jp:'選びます'},{label:'Pres. −',jp:'選びません'},{label:'Past +',jp:'選びました'},{label:'Past −',jp:'選びませんでした'},{label:'Dictionary',jp:'えらぶ'},{label:'て-form',jp:'えらんで'},{label:'ない form',jp:'えらばない'}],
  'えらびます#G1':[{label:'Pres. +',jp:'選びます'},{label:'Pres. −',jp:'選びません'},{label:'Past +',jp:'選びました'},{label:'Past −',jp:'選びませんでした'},{label:'Dictionary',jp:'えらぶ'},{label:'て-form',jp:'えらんで'},{label:'ない form',jp:'えらばない'}],
  'えらびます':[{label:'Pres. +',jp:'選びます'},{label:'Pres. −',jp:'選びません'},{label:'Past +',jp:'選びました'},{label:'Past −',jp:'選びませんでした'},{label:'Dictionary',jp:'えらぶ'},{label:'て-form',jp:'えらんで'},{label:'ない form',jp:'えらばない'}],
  '伝えます':[{label:'Pres. +',jp:'伝えます'},{label:'Pres. −',jp:'伝えません'},{label:'Past +',jp:'伝えました'},{label:'Past −',jp:'伝えませんでした'},{label:'Dictionary',jp:'つたえる'},{label:'て-form',jp:'つたえて'},{label:'ない form',jp:'つたえない'}],
  '伝えます#G2':[{label:'Pres. +',jp:'伝えます'},{label:'Pres. −',jp:'伝えません'},{label:'Past +',jp:'伝えました'},{label:'Past −',jp:'伝えませんでした'},{label:'Dictionary',jp:'つたえる'},{label:'て-form',jp:'つたえて'},{label:'ない form',jp:'つたえない'}],
  'つたえます#G2':[{label:'Pres. +',jp:'伝えます'},{label:'Pres. −',jp:'伝えません'},{label:'Past +',jp:'伝えました'},{label:'Past −',jp:'伝えませんでした'},{label:'Dictionary',jp:'つたえる'},{label:'て-form',jp:'つたえて'},{label:'ない form',jp:'つたえない'}],
  'つたえます':[{label:'Pres. +',jp:'伝えます'},{label:'Pres. −',jp:'伝えません'},{label:'Past +',jp:'伝えました'},{label:'Past −',jp:'伝えませんでした'},{label:'Dictionary',jp:'つたえる'},{label:'て-form',jp:'つたえて'},{label:'ない form',jp:'つたえない'}],
  '断ります':[{label:'Pres. +',jp:'断ります'},{label:'Pres. −',jp:'断りません'},{label:'Past +',jp:'断りました'},{label:'Past −',jp:'断りませんでした'},{label:'Dictionary',jp:'ことわる'},{label:'て-form',jp:'ことわって'},{label:'ない form',jp:'ことわらない'}],
  '断ります#G1':[{label:'Pres. +',jp:'断ります'},{label:'Pres. −',jp:'断りません'},{label:'Past +',jp:'断りました'},{label:'Past −',jp:'断りませんでした'},{label:'Dictionary',jp:'ことわる'},{label:'て-form',jp:'ことわって'},{label:'ない form',jp:'ことわらない'}],
  'ことわります#G1':[{label:'Pres. +',jp:'断ります'},{label:'Pres. −',jp:'断りません'},{label:'Past +',jp:'断りました'},{label:'Past −',jp:'断りませんでした'},{label:'Dictionary',jp:'ことわる'},{label:'て-form',jp:'ことわって'},{label:'ない form',jp:'ことわらない'}],
  'ことわります':[{label:'Pres. +',jp:'断ります'},{label:'Pres. −',jp:'断りません'},{label:'Past +',jp:'断りました'},{label:'Past −',jp:'断りませんでした'},{label:'Dictionary',jp:'ことわる'},{label:'て-form',jp:'ことわって'},{label:'ない form',jp:'ことわらない'}],
  '登ります':[{label:'Pres. +',jp:'登ります'},{label:'Pres. −',jp:'登りません'},{label:'Past +',jp:'登りました'},{label:'Past −',jp:'登りませんでした'},{label:'Dictionary',jp:'のぼる'},{label:'て-form',jp:'のぼって'},{label:'ない form',jp:'のぼらない'}],
  '登ります#G1':[{label:'Pres. +',jp:'登ります'},{label:'Pres. −',jp:'登りません'},{label:'Past +',jp:'登りました'},{label:'Past −',jp:'登りませんでした'},{label:'Dictionary',jp:'のぼる'},{label:'て-form',jp:'のぼって'},{label:'ない form',jp:'のぼらない'}],
  'のぼります#G1':[{label:'Pres. +',jp:'登ります'},{label:'Pres. −',jp:'登りません'},{label:'Past +',jp:'登りました'},{label:'Past −',jp:'登りませんでした'},{label:'Dictionary',jp:'のぼる'},{label:'て-form',jp:'のぼって'},{label:'ない form',jp:'のぼらない'}],
  'のぼります':[{label:'Pres. +',jp:'登ります'},{label:'Pres. −',jp:'登りません'},{label:'Past +',jp:'登りました'},{label:'Past −',jp:'登りませんでした'},{label:'Dictionary',jp:'のぼる'},{label:'て-form',jp:'のぼって'},{label:'ない form',jp:'のぼらない'}],
  '結びます':[{label:'Pres. +',jp:'結びます'},{label:'Pres. −',jp:'結びません'},{label:'Past +',jp:'結びました'},{label:'Past −',jp:'結びませんでした'},{label:'Dictionary',jp:'むすぶ'},{label:'て-form',jp:'むすんで'},{label:'ない form',jp:'むすばない'}],
  '結びます#G1':[{label:'Pres. +',jp:'結びます'},{label:'Pres. −',jp:'結びません'},{label:'Past +',jp:'結びました'},{label:'Past −',jp:'結びませんでした'},{label:'Dictionary',jp:'むすぶ'},{label:'て-form',jp:'むすんで'},{label:'ない form',jp:'むすばない'}],
  'むすびます#G1':[{label:'Pres. +',jp:'結びます'},{label:'Pres. −',jp:'結びません'},{label:'Past +',jp:'結びました'},{label:'Past −',jp:'結びませんでした'},{label:'Dictionary',jp:'むすぶ'},{label:'て-form',jp:'むすんで'},{label:'ない form',jp:'むすばない'}],
  'むすびます':[{label:'Pres. +',jp:'結びます'},{label:'Pres. −',jp:'結びません'},{label:'Past +',jp:'結びました'},{label:'Past −',jp:'結びませんでした'},{label:'Dictionary',jp:'むすぶ'},{label:'て-form',jp:'むすんで'},{label:'ない form',jp:'むすばない'}],
  '並べます':[{label:'Pres. +',jp:'並べます'},{label:'Pres. −',jp:'並べません'},{label:'Past +',jp:'並べました'},{label:'Past −',jp:'並べませんでした'},{label:'Dictionary',jp:'ならべる'},{label:'て-form',jp:'ならべて'},{label:'ない form',jp:'ならべない'}],
  '並べます#G2':[{label:'Pres. +',jp:'並べます'},{label:'Pres. −',jp:'並べません'},{label:'Past +',jp:'並べました'},{label:'Past −',jp:'並べませんでした'},{label:'Dictionary',jp:'ならべる'},{label:'て-form',jp:'ならべて'},{label:'ない form',jp:'ならべない'}],
  'ならべます#G2':[{label:'Pres. +',jp:'並べます'},{label:'Pres. −',jp:'並べません'},{label:'Past +',jp:'並べました'},{label:'Past −',jp:'並べませんでした'},{label:'Dictionary',jp:'ならべる'},{label:'て-form',jp:'ならべて'},{label:'ない form',jp:'ならべない'}],
  'ならべます':[{label:'Pres. +',jp:'並べます'},{label:'Pres. −',jp:'並べません'},{label:'Past +',jp:'並べました'},{label:'Past −',jp:'並べませんでした'},{label:'Dictionary',jp:'ならべる'},{label:'て-form',jp:'ならべて'},{label:'ない form',jp:'ならべない'}],
  '数えます':[{label:'Pres. +',jp:'数えます'},{label:'Pres. −',jp:'数えません'},{label:'Past +',jp:'数えました'},{label:'Past −',jp:'数えませんでした'},{label:'Dictionary',jp:'かぞえる'},{label:'て-form',jp:'かぞえて'},{label:'ない form',jp:'かぞえない'}],
  '数えます#G2':[{label:'Pres. +',jp:'数えます'},{label:'Pres. −',jp:'数えません'},{label:'Past +',jp:'数えました'},{label:'Past −',jp:'数えませんでした'},{label:'Dictionary',jp:'かぞえる'},{label:'て-form',jp:'かぞえて'},{label:'ない form',jp:'かぞえない'}],
  'かぞえます#G2':[{label:'Pres. +',jp:'数えます'},{label:'Pres. −',jp:'数えません'},{label:'Past +',jp:'数えました'},{label:'Past −',jp:'数えませんでした'},{label:'Dictionary',jp:'かぞえる'},{label:'て-form',jp:'かぞえて'},{label:'ない form',jp:'かぞえない'}],
  'かぞえます':[{label:'Pres. +',jp:'数えます'},{label:'Pres. −',jp:'数えません'},{label:'Past +',jp:'数えました'},{label:'Past −',jp:'数えませんでした'},{label:'Dictionary',jp:'かぞえる'},{label:'て-form',jp:'かぞえて'},{label:'ない form',jp:'かぞえない'}],
  '探します':[{label:'Pres. +',jp:'探します'},{label:'Pres. −',jp:'探しません'},{label:'Past +',jp:'探しました'},{label:'Past −',jp:'探しませんでした'},{label:'Dictionary',jp:'さがす'},{label:'て-form',jp:'さがして'},{label:'ない form',jp:'さがさない'}],
  '探します#G1':[{label:'Pres. +',jp:'探します'},{label:'Pres. −',jp:'探しません'},{label:'Past +',jp:'探しました'},{label:'Past −',jp:'探しませんでした'},{label:'Dictionary',jp:'さがす'},{label:'て-form',jp:'さがして'},{label:'ない form',jp:'さがさない'}],
  'さがします#G1':[{label:'Pres. +',jp:'探します'},{label:'Pres. −',jp:'探しません'},{label:'Past +',jp:'探しました'},{label:'Past −',jp:'探しませんでした'},{label:'Dictionary',jp:'さがす'},{label:'て-form',jp:'さがして'},{label:'ない form',jp:'さがさない'}],
  'さがします':[{label:'Pres. +',jp:'探します'},{label:'Pres. −',jp:'探しません'},{label:'Past +',jp:'探しました'},{label:'Past −',jp:'探しませんでした'},{label:'Dictionary',jp:'さがす'},{label:'て-form',jp:'さがして'},{label:'ない form',jp:'さがさない'}],
  '送ります':[{label:'Pres. +',jp:'送ります'},{label:'Pres. −',jp:'送りません'},{label:'Past +',jp:'送りました'},{label:'Past −',jp:'送りませんでした'},{label:'Dictionary',jp:'おくる'},{label:'て-form',jp:'おくって'},{label:'ない form',jp:'おくらない'}],
  '送ります#G1':[{label:'Pres. +',jp:'送ります'},{label:'Pres. −',jp:'送りません'},{label:'Past +',jp:'送りました'},{label:'Past −',jp:'送りませんでした'},{label:'Dictionary',jp:'おくる'},{label:'て-form',jp:'おくって'},{label:'ない form',jp:'おくらない'}],
  'おくります#G1':[{label:'Pres. +',jp:'送ります'},{label:'Pres. −',jp:'送りません'},{label:'Past +',jp:'送りました'},{label:'Past −',jp:'送りませんでした'},{label:'Dictionary',jp:'おくる'},{label:'て-form',jp:'おくって'},{label:'ない form',jp:'おくらない'}],
  'おくります':[{label:'Pres. +',jp:'送ります'},{label:'Pres. −',jp:'送りません'},{label:'Past +',jp:'送りました'},{label:'Past −',jp:'送りませんでした'},{label:'Dictionary',jp:'おくる'},{label:'て-form',jp:'おくって'},{label:'ない form',jp:'おくらない'}],
  '変えます':[{label:'Pres. +',jp:'変えます'},{label:'Pres. −',jp:'変えません'},{label:'Past +',jp:'変えました'},{label:'Past −',jp:'変えませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえて'},{label:'ない form',jp:'かえない'}],
  '変えます#G2':[{label:'Pres. +',jp:'変えます'},{label:'Pres. −',jp:'変えません'},{label:'Past +',jp:'変えました'},{label:'Past −',jp:'変えませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえて'},{label:'ない form',jp:'かえない'}],
  'かえます#G2':[{label:'Pres. +',jp:'変えます'},{label:'Pres. −',jp:'変えません'},{label:'Past +',jp:'変えました'},{label:'Past −',jp:'変えませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえて'},{label:'ない form',jp:'かえない'}],
  'かえます':[{label:'Pres. +',jp:'変えます'},{label:'Pres. −',jp:'変えません'},{label:'Past +',jp:'変えました'},{label:'Past −',jp:'変えませんでした'},{label:'Dictionary',jp:'かえる'},{label:'て-form',jp:'かえて'},{label:'ない form',jp:'かえない'}],
  '集めます':[{label:'Pres. +',jp:'集めます'},{label:'Pres. −',jp:'集めません'},{label:'Past +',jp:'集めました'},{label:'Past −',jp:'集めませんでした'},{label:'Dictionary',jp:'あつめる'},{label:'て-form',jp:'あつめて'},{label:'ない form',jp:'あつめない'}],
  '集めます#G2':[{label:'Pres. +',jp:'集めます'},{label:'Pres. −',jp:'集めません'},{label:'Past +',jp:'集めました'},{label:'Past −',jp:'集めませんでした'},{label:'Dictionary',jp:'あつめる'},{label:'て-form',jp:'あつめて'},{label:'ない form',jp:'あつめない'}],
  'あつめます#G2':[{label:'Pres. +',jp:'集めます'},{label:'Pres. −',jp:'集めません'},{label:'Past +',jp:'集めました'},{label:'Past −',jp:'集めませんでした'},{label:'Dictionary',jp:'あつめる'},{label:'て-form',jp:'あつめて'},{label:'ない form',jp:'あつめない'}],
  'あつめます':[{label:'Pres. +',jp:'集めます'},{label:'Pres. −',jp:'集めません'},{label:'Past +',jp:'集めました'},{label:'Past −',jp:'集めませんでした'},{label:'Dictionary',jp:'あつめる'},{label:'て-form',jp:'あつめて'},{label:'ない form',jp:'あつめない'}],
  '始まります':[{label:'Pres. +',jp:'始まります'},{label:'Pres. −',jp:'始まりません'},{label:'Past +',jp:'始まりました'},{label:'Past −',jp:'始まりませんでした'},{label:'Dictionary',jp:'はじまる'},{label:'て-form',jp:'はじまって'},{label:'ない form',jp:'はじまらない'}],
  '始まります#G1':[{label:'Pres. +',jp:'始まります'},{label:'Pres. −',jp:'始まりません'},{label:'Past +',jp:'始まりました'},{label:'Past −',jp:'始まりませんでした'},{label:'Dictionary',jp:'はじまる'},{label:'て-form',jp:'はじまって'},{label:'ない form',jp:'はじまらない'}],
  'はじまります#G1':[{label:'Pres. +',jp:'始まります'},{label:'Pres. −',jp:'始まりません'},{label:'Past +',jp:'始まりました'},{label:'Past −',jp:'始まりませんでした'},{label:'Dictionary',jp:'はじまる'},{label:'て-form',jp:'はじまって'},{label:'ない form',jp:'はじまらない'}],
  'はじまります':[{label:'Pres. +',jp:'始まります'},{label:'Pres. −',jp:'始まりません'},{label:'Past +',jp:'始まりました'},{label:'Past −',jp:'始まりませんでした'},{label:'Dictionary',jp:'はじまる'},{label:'て-form',jp:'はじまって'},{label:'ない form',jp:'はじまらない'}],
  '着きます':[{label:'Pres. +',jp:'着きます'},{label:'Pres. −',jp:'着きません'},{label:'Past +',jp:'着きました'},{label:'Past −',jp:'着きませんでした'},{label:'Dictionary',jp:'つく'},{label:'て-form',jp:'ついて'},{label:'ない form',jp:'つかない'}],
  '着きます#G1':[{label:'Pres. +',jp:'着きます'},{label:'Pres. −',jp:'着きません'},{label:'Past +',jp:'着きました'},{label:'Past −',jp:'着きませんでした'},{label:'Dictionary',jp:'つく'},{label:'て-form',jp:'ついて'},{label:'ない form',jp:'つかない'}],
  'つきます#G1':[{label:'Pres. +',jp:'着きます'},{label:'Pres. −',jp:'着きません'},{label:'Past +',jp:'着きました'},{label:'Past −',jp:'着きませんでした'},{label:'Dictionary',jp:'つく'},{label:'て-form',jp:'ついて'},{label:'ない form',jp:'つかない'}],
  'つきます':[{label:'Pres. +',jp:'着きます'},{label:'Pres. −',jp:'着きません'},{label:'Past +',jp:'着きました'},{label:'Past −',jp:'着きませんでした'},{label:'Dictionary',jp:'つく'},{label:'て-form',jp:'ついて'},{label:'ない form',jp:'つかない'}],
  '泣きます':[{label:'Pres. +',jp:'泣きます'},{label:'Pres. −',jp:'泣きません'},{label:'Past +',jp:'泣きました'},{label:'Past −',jp:'泣きませんでした'},{label:'Dictionary',jp:'なく'},{label:'て-form',jp:'ないて'},{label:'ない form',jp:'なかない'}],
  '泣きます#G1':[{label:'Pres. +',jp:'泣きます'},{label:'Pres. −',jp:'泣きません'},{label:'Past +',jp:'泣きました'},{label:'Past −',jp:'泣きませんでした'},{label:'Dictionary',jp:'なく'},{label:'て-form',jp:'ないて'},{label:'ない form',jp:'なかない'}],
  'なきます#G1':[{label:'Pres. +',jp:'泣きます'},{label:'Pres. −',jp:'泣きません'},{label:'Past +',jp:'泣きました'},{label:'Past −',jp:'泣きませんでした'},{label:'Dictionary',jp:'なく'},{label:'て-form',jp:'ないて'},{label:'ない form',jp:'なかない'}],
  'なきます':[{label:'Pres. +',jp:'泣きます'},{label:'Pres. −',jp:'泣きません'},{label:'Past +',jp:'泣きました'},{label:'Past −',jp:'泣きませんでした'},{label:'Dictionary',jp:'なく'},{label:'て-form',jp:'ないて'},{label:'ない form',jp:'なかない'}],
  '違います':[{label:'Pres. +',jp:'違います'},{label:'Pres. −',jp:'違いません'},{label:'Past +',jp:'違いました'},{label:'Past −',jp:'違いませんでした'},{label:'Dictionary',jp:'ちがう'},{label:'て-form',jp:'ちがって'},{label:'ない form',jp:'ちがわない'}],
  '違います#G1':[{label:'Pres. +',jp:'違います'},{label:'Pres. −',jp:'違いません'},{label:'Past +',jp:'違いました'},{label:'Past −',jp:'違いませんでした'},{label:'Dictionary',jp:'ちがう'},{label:'て-form',jp:'ちがって'},{label:'ない form',jp:'ちがわない'}],
  'ちがいます#G1':[{label:'Pres. +',jp:'違います'},{label:'Pres. −',jp:'違いません'},{label:'Past +',jp:'違いました'},{label:'Past −',jp:'違いませんでした'},{label:'Dictionary',jp:'ちがう'},{label:'て-form',jp:'ちがって'},{label:'ない form',jp:'ちがわない'}],
  'ちがいます':[{label:'Pres. +',jp:'違います'},{label:'Pres. −',jp:'違いません'},{label:'Past +',jp:'違いました'},{label:'Past −',jp:'違いませんでした'},{label:'Dictionary',jp:'ちがう'},{label:'て-form',jp:'ちがって'},{label:'ない form',jp:'ちがわない'}],
  '分かります':[{label:'Pres. +',jp:'分かります'},{label:'Pres. −',jp:'分かりません'},{label:'Past +',jp:'分かりました'},{label:'Past −',jp:'分かりませんでした'},{label:'Dictionary',jp:'わかる'},{label:'て-form',jp:'わかって'},{label:'ない form',jp:'わからない'}],
  '分かります#G1':[{label:'Pres. +',jp:'分かります'},{label:'Pres. −',jp:'分かりません'},{label:'Past +',jp:'分かりました'},{label:'Past −',jp:'分かりませんでした'},{label:'Dictionary',jp:'わかる'},{label:'て-form',jp:'わかって'},{label:'ない form',jp:'わからない'}],
  'わかります#G1':[{label:'Pres. +',jp:'分かります'},{label:'Pres. −',jp:'分かりません'},{label:'Past +',jp:'分かりました'},{label:'Past −',jp:'分かりませんでした'},{label:'Dictionary',jp:'わかる'},{label:'て-form',jp:'わかって'},{label:'ない form',jp:'わからない'}],
  'わかります':[{label:'Pres. +',jp:'分かります'},{label:'Pres. −',jp:'分かりません'},{label:'Past +',jp:'分かりました'},{label:'Past −',jp:'分かりませんでした'},{label:'Dictionary',jp:'わかる'},{label:'て-form',jp:'わかって'},{label:'ない form',jp:'わからない'}],
  '始めます':[{label:'Pres. +',jp:'始めます'},{label:'Pres. −',jp:'始めません'},{label:'Past +',jp:'始めました'},{label:'Past −',jp:'始めませんでした'},{label:'Dictionary',jp:'はじめる'},{label:'て-form',jp:'はじめて'},{label:'ない form',jp:'はじめない'}],
  '始めます#G2':[{label:'Pres. +',jp:'始めます'},{label:'Pres. −',jp:'始めません'},{label:'Past +',jp:'始めました'},{label:'Past −',jp:'始めませんでした'},{label:'Dictionary',jp:'はじめる'},{label:'て-form',jp:'はじめて'},{label:'ない form',jp:'はじめない'}],
  'はじめます#G2':[{label:'Pres. +',jp:'始めます'},{label:'Pres. −',jp:'始めません'},{label:'Past +',jp:'始めました'},{label:'Past −',jp:'始めませんでした'},{label:'Dictionary',jp:'はじめる'},{label:'て-form',jp:'はじめて'},{label:'ない form',jp:'はじめない'}],
  'はじめます':[{label:'Pres. +',jp:'始めます'},{label:'Pres. −',jp:'始めません'},{label:'Past +',jp:'始めました'},{label:'Past −',jp:'始めませんでした'},{label:'Dictionary',jp:'はじめる'},{label:'て-form',jp:'はじめて'},{label:'ない form',jp:'はじめない'}],
  '終わります':[{label:'Pres. +',jp:'終わります'},{label:'Pres. −',jp:'終わりません'},{label:'Past +',jp:'終わりました'},{label:'Past −',jp:'終わりませんでした'},{label:'Dictionary',jp:'おわる'},{label:'て-form',jp:'おわって'},{label:'ない form',jp:'おわらない'}],
  '終わります#G1':[{label:'Pres. +',jp:'終わります'},{label:'Pres. −',jp:'終わりません'},{label:'Past +',jp:'終わりました'},{label:'Past −',jp:'終わりませんでした'},{label:'Dictionary',jp:'おわる'},{label:'て-form',jp:'おわって'},{label:'ない form',jp:'おわらない'}],
  'おわります#G1':[{label:'Pres. +',jp:'終わります'},{label:'Pres. −',jp:'終わりません'},{label:'Past +',jp:'終わりました'},{label:'Past −',jp:'終わりませんでした'},{label:'Dictionary',jp:'おわる'},{label:'て-form',jp:'おわって'},{label:'ない form',jp:'おわらない'}],
  'おわります':[{label:'Pres. +',jp:'終わります'},{label:'Pres. −',jp:'終わりません'},{label:'Past +',jp:'終わりました'},{label:'Past −',jp:'終わりませんでした'},{label:'Dictionary',jp:'おわる'},{label:'て-form',jp:'おわって'},{label:'ない form',jp:'おわらない'}],
  '休みます':[{label:'Pres. +',jp:'休みます'},{label:'Pres. −',jp:'休みません'},{label:'Past +',jp:'休みました'},{label:'Past −',jp:'休みませんでした'},{label:'Dictionary',jp:'やすむ'},{label:'て-form',jp:'やすんで'},{label:'ない form',jp:'やすまない'}],
  '休みます#G1':[{label:'Pres. +',jp:'休みます'},{label:'Pres. −',jp:'休みません'},{label:'Past +',jp:'休みました'},{label:'Past −',jp:'休みませんでした'},{label:'Dictionary',jp:'やすむ'},{label:'て-form',jp:'やすんで'},{label:'ない form',jp:'やすまない'}],
  'やすみます#G1':[{label:'Pres. +',jp:'休みます'},{label:'Pres. −',jp:'休みません'},{label:'Past +',jp:'休みました'},{label:'Past −',jp:'休みませんでした'},{label:'Dictionary',jp:'やすむ'},{label:'て-form',jp:'やすんで'},{label:'ない form',jp:'やすまない'}],
  'やすみます':[{label:'Pres. +',jp:'休みます'},{label:'Pres. −',jp:'休みません'},{label:'Past +',jp:'休みました'},{label:'Past −',jp:'休みませんでした'},{label:'Dictionary',jp:'やすむ'},{label:'て-form',jp:'やすんで'},{label:'ない form',jp:'やすまない'}],
  '同じ':[{label:'Pres. +',jp:'おなじです'},{label:'Pres. −',jp:'おなじじゃありません'},{label:'Past +',jp:'おなじでした'},{label:'Past −',jp:'おなじじゃありませんでした'},{label:'+ Noun',jp:'おなじな＋N'}],
  'おなじ':[{label:'Pres. +',jp:'おなじです'},{label:'Pres. −',jp:'おなじじゃありません'},{label:'Past +',jp:'おなじでした'},{label:'Past −',jp:'おなじじゃありませんでした'},{label:'+ Noun',jp:'おなじな＋N'}],
  'がんばります':[{label:'Pres. +',jp:'がんばります'},{label:'Pres. −',jp:'がんばりません'},{label:'Past +',jp:'がんばりました'},{label:'Past −',jp:'がんばりませんでした'},{label:'Dictionary',jp:'がんばる'},{label:'て-form',jp:'がんばって'},{label:'ない form',jp:'がんばらない'}],
  'がんばります#G1':[{label:'Pres. +',jp:'がんばります'},{label:'Pres. −',jp:'がんばりません'},{label:'Past +',jp:'がんばりました'},{label:'Past −',jp:'がんばりませんでした'},{label:'Dictionary',jp:'がんばる'},{label:'て-form',jp:'がんばって'},{label:'ない form',jp:'がんばらない'}],
  '大好き':[{label:'Pres. +',jp:'だいすきです'},{label:'Pres. −',jp:'だいすきじゃありません'},{label:'Past +',jp:'だいすきでした'},{label:'Past −',jp:'だいすきじゃありませんでした'},{label:'+ Noun',jp:'だいすきな＋N'}],
  'だいすき':[{label:'Pres. +',jp:'だいすきです'},{label:'Pres. −',jp:'だいすきじゃありません'},{label:'Past +',jp:'だいすきでした'},{label:'Past −',jp:'だいすきじゃありませんでした'},{label:'+ Noun',jp:'だいすきな＋N'}],
  '味見をします':[{label:'Pres. +',jp:'味見をします'},{label:'Pres. −',jp:'味見をしません'},{label:'Past +',jp:'味見をしました'},{label:'Past −',jp:'味見をしませんでした'},{label:'Dictionary',jp:'あじみをする'},{label:'て-form',jp:'あじみをして'},{label:'ない form',jp:'あじみをしない'}],
  '味見をします#G3':[{label:'Pres. +',jp:'味見をします'},{label:'Pres. −',jp:'味見をしません'},{label:'Past +',jp:'味見をしました'},{label:'Past −',jp:'味見をしませんでした'},{label:'Dictionary',jp:'あじみをする'},{label:'て-form',jp:'あじみをして'},{label:'ない form',jp:'あじみをしない'}],
  'あじみをします#G3':[{label:'Pres. +',jp:'味見をします'},{label:'Pres. −',jp:'味見をしません'},{label:'Past +',jp:'味見をしました'},{label:'Past −',jp:'味見をしませんでした'},{label:'Dictionary',jp:'あじみをする'},{label:'て-form',jp:'あじみをして'},{label:'ない form',jp:'あじみをしない'}],
  'あじみをします':[{label:'Pres. +',jp:'味見をします'},{label:'Pres. −',jp:'味見をしません'},{label:'Past +',jp:'味見をしました'},{label:'Past −',jp:'味見をしませんでした'},{label:'Dictionary',jp:'あじみをする'},{label:'て-form',jp:'あじみをして'},{label:'ない form',jp:'あじみをしない'}],
  '外食をします':[{label:'Pres. +',jp:'外食をします'},{label:'Pres. −',jp:'外食をしません'},{label:'Past +',jp:'外食をしました'},{label:'Past −',jp:'外食をしませんでした'},{label:'Dictionary',jp:'がいしょくをする'},{label:'て-form',jp:'がいしょくをして'},{label:'ない form',jp:'がいしょくをしない'}],
  '外食をします#G3':[{label:'Pres. +',jp:'外食をします'},{label:'Pres. −',jp:'外食をしません'},{label:'Past +',jp:'外食をしました'},{label:'Past −',jp:'外食をしませんでした'},{label:'Dictionary',jp:'がいしょくをする'},{label:'て-form',jp:'がいしょくをして'},{label:'ない form',jp:'がいしょくをしない'}],
  'がいしょくをします#G3':[{label:'Pres. +',jp:'外食をします'},{label:'Pres. −',jp:'外食をしません'},{label:'Past +',jp:'外食をしました'},{label:'Past −',jp:'外食をしませんでした'},{label:'Dictionary',jp:'がいしょくをする'},{label:'て-form',jp:'がいしょくをして'},{label:'ない form',jp:'がいしょくをしない'}],
  'がいしょくをします':[{label:'Pres. +',jp:'外食をします'},{label:'Pres. −',jp:'外食をしません'},{label:'Past +',jp:'外食をしました'},{label:'Past −',jp:'外食をしませんでした'},{label:'Dictionary',jp:'がいしょくをする'},{label:'て-form',jp:'がいしょくをして'},{label:'ない form',jp:'がいしょくをしない'}],
  '復習をします':[{label:'Pres. +',jp:'復習をします'},{label:'Pres. −',jp:'復習をしません'},{label:'Past +',jp:'復習をしました'},{label:'Past −',jp:'復習をしませんでした'},{label:'Dictionary',jp:'ふくしゅうをする'},{label:'て-form',jp:'ふくしゅうをして'},{label:'ない form',jp:'ふくしゅうをしない'}],
  '復習をします#G3':[{label:'Pres. +',jp:'復習をします'},{label:'Pres. −',jp:'復習をしません'},{label:'Past +',jp:'復習をしました'},{label:'Past −',jp:'復習をしませんでした'},{label:'Dictionary',jp:'ふくしゅうをする'},{label:'て-form',jp:'ふくしゅうをして'},{label:'ない form',jp:'ふくしゅうをしない'}],
  'ふくしゅうをします#G3':[{label:'Pres. +',jp:'復習をします'},{label:'Pres. −',jp:'復習をしません'},{label:'Past +',jp:'復習をしました'},{label:'Past −',jp:'復習をしませんでした'},{label:'Dictionary',jp:'ふくしゅうをする'},{label:'て-form',jp:'ふくしゅうをして'},{label:'ない form',jp:'ふくしゅうをしない'}],
  'ふくしゅうをします':[{label:'Pres. +',jp:'復習をします'},{label:'Pres. −',jp:'復習をしません'},{label:'Past +',jp:'復習をしました'},{label:'Past −',jp:'復習をしませんでした'},{label:'Dictionary',jp:'ふくしゅうをする'},{label:'て-form',jp:'ふくしゅうをして'},{label:'ない form',jp:'ふくしゅうをしない'}],
  'アルバイトをします':[{label:'Pres. +',jp:'アルバイトをします'},{label:'Pres. −',jp:'アルバイトをしません'},{label:'Past +',jp:'アルバイトをしました'},{label:'Past −',jp:'アルバイトをしませんでした'},{label:'Dictionary',jp:'アルバイトをする'},{label:'て-form',jp:'アルバイトをして'},{label:'ない form',jp:'アルバイトをしない'}],
  'アルバイトをします#G3':[{label:'Pres. +',jp:'アルバイトをします'},{label:'Pres. −',jp:'アルバイトをしません'},{label:'Past +',jp:'アルバイトをしました'},{label:'Past −',jp:'アルバイトをしませんでした'},{label:'Dictionary',jp:'アルバイトをする'},{label:'て-form',jp:'アルバイトをして'},{label:'ない form',jp:'アルバイトをしない'}],
  'ジョギングをします':[{label:'Pres. +',jp:'ジョギングをします'},{label:'Pres. −',jp:'ジョギングをしません'},{label:'Past +',jp:'ジョギングをしました'},{label:'Past −',jp:'ジョギングをしませんでした'},{label:'Dictionary',jp:'ジョギングをする'},{label:'て-form',jp:'ジョギングをして'},{label:'ない form',jp:'ジョギングをしない'}],
  'ジョギングをします#G3':[{label:'Pres. +',jp:'ジョギングをします'},{label:'Pres. −',jp:'ジョギングをしません'},{label:'Past +',jp:'ジョギングをしました'},{label:'Past −',jp:'ジョギングをしませんでした'},{label:'Dictionary',jp:'ジョギングをする'},{label:'て-form',jp:'ジョギングをして'},{label:'ない form',jp:'ジョギングをしない'}],
  'シャワーを浴びます':[{label:'Pres. +',jp:'シャワーを浴びます'},{label:'Pres. −',jp:'シャワーを浴びません'},{label:'Past +',jp:'シャワーを浴びました'},{label:'Past −',jp:'シャワーを浴びませんでした'},{label:'Dictionary',jp:'シャワーをあびる'},{label:'て-form',jp:'シャワーをあびて'},{label:'ない form',jp:'シャワーをあびない'}],
  'シャワーを浴びます#G2':[{label:'Pres. +',jp:'シャワーを浴びます'},{label:'Pres. −',jp:'シャワーを浴びません'},{label:'Past +',jp:'シャワーを浴びました'},{label:'Past −',jp:'シャワーを浴びませんでした'},{label:'Dictionary',jp:'シャワーをあびる'},{label:'て-form',jp:'シャワーをあびて'},{label:'ない form',jp:'シャワーをあびない'}],
  'シャワーをあびます#G2':[{label:'Pres. +',jp:'シャワーを浴びます'},{label:'Pres. −',jp:'シャワーを浴びません'},{label:'Past +',jp:'シャワーを浴びました'},{label:'Past −',jp:'シャワーを浴びませんでした'},{label:'Dictionary',jp:'シャワーをあびる'},{label:'て-form',jp:'シャワーをあびて'},{label:'ない form',jp:'シャワーをあびない'}],
  'シャワーをあびます':[{label:'Pres. +',jp:'シャワーを浴びます'},{label:'Pres. −',jp:'シャワーを浴びません'},{label:'Past +',jp:'シャワーを浴びました'},{label:'Past −',jp:'シャワーを浴びませんでした'},{label:'Dictionary',jp:'シャワーをあびる'},{label:'て-form',jp:'シャワーをあびて'},{label:'ない form',jp:'シャワーをあびない'}],
  '通訳をします':[{label:'Pres. +',jp:'通訳をします'},{label:'Pres. −',jp:'通訳をしません'},{label:'Past +',jp:'通訳をしました'},{label:'Past −',jp:'通訳をしませんでした'},{label:'Dictionary',jp:'つうやくをする'},{label:'て-form',jp:'つうやくをして'},{label:'ない form',jp:'つうやくをしない'}],
  '通訳をします#G3':[{label:'Pres. +',jp:'通訳をします'},{label:'Pres. −',jp:'通訳をしません'},{label:'Past +',jp:'通訳をしました'},{label:'Past −',jp:'通訳をしませんでした'},{label:'Dictionary',jp:'つうやくをする'},{label:'て-form',jp:'つうやくをして'},{label:'ない form',jp:'つうやくをしない'}],
  'つうやくをします#G3':[{label:'Pres. +',jp:'通訳をします'},{label:'Pres. −',jp:'通訳をしません'},{label:'Past +',jp:'通訳をしました'},{label:'Past −',jp:'通訳をしませんでした'},{label:'Dictionary',jp:'つうやくをする'},{label:'て-form',jp:'つうやくをして'},{label:'ない form',jp:'つうやくをしない'}],
  'つうやくをします':[{label:'Pres. +',jp:'通訳をします'},{label:'Pres. −',jp:'通訳をしません'},{label:'Past +',jp:'通訳をしました'},{label:'Past −',jp:'通訳をしませんでした'},{label:'Dictionary',jp:'つうやくをする'},{label:'て-form',jp:'つうやくをして'},{label:'ない form',jp:'つうやくをしない'}],
  '残業をします':[{label:'Pres. +',jp:'残業をします'},{label:'Pres. −',jp:'残業をしません'},{label:'Past +',jp:'残業をしました'},{label:'Past −',jp:'残業をしませんでした'},{label:'Dictionary',jp:'ざんぎょうをする'},{label:'て-form',jp:'ざんぎょうをして'},{label:'ない form',jp:'ざんぎょうをしない'}],
  '残業をします#G3':[{label:'Pres. +',jp:'残業をします'},{label:'Pres. −',jp:'残業をしません'},{label:'Past +',jp:'残業をしました'},{label:'Past −',jp:'残業をしませんでした'},{label:'Dictionary',jp:'ざんぎょうをする'},{label:'て-form',jp:'ざんぎょうをして'},{label:'ない form',jp:'ざんぎょうをしない'}],
  'ざんぎょうをします#G3':[{label:'Pres. +',jp:'残業をします'},{label:'Pres. −',jp:'残業をしません'},{label:'Past +',jp:'残業をしました'},{label:'Past −',jp:'残業をしませんでした'},{label:'Dictionary',jp:'ざんぎょうをする'},{label:'て-form',jp:'ざんぎょうをして'},{label:'ない form',jp:'ざんぎょうをしない'}],
  'ざんぎょうをします':[{label:'Pres. +',jp:'残業をします'},{label:'Pres. −',jp:'残業をしません'},{label:'Past +',jp:'残業をしました'},{label:'Past −',jp:'残業をしませんでした'},{label:'Dictionary',jp:'ざんぎょうをする'},{label:'て-form',jp:'ざんぎょうをして'},{label:'ない form',jp:'ざんぎょうをしない'}],
  'のんびりします':[{label:'Pres. +',jp:'のんびりします'},{label:'Pres. −',jp:'のんびりしません'},{label:'Past +',jp:'のんびりしました'},{label:'Past −',jp:'のんびりしませんでした'},{label:'Dictionary',jp:'のんびりする'},{label:'て-form',jp:'のんびりして'},{label:'ない form',jp:'のんびりしない'}],
  'のんびりします#G3':[{label:'Pres. +',jp:'のんびりします'},{label:'Pres. −',jp:'のんびりしません'},{label:'Past +',jp:'のんびりしました'},{label:'Past −',jp:'のんびりしませんでした'},{label:'Dictionary',jp:'のんびりする'},{label:'て-form',jp:'のんびりして'},{label:'ない form',jp:'のんびりしない'}],
  'おふろに入ります':[{label:'Pres. +',jp:'おふろに入ります'},{label:'Pres. −',jp:'おふろに入りません'},{label:'Past +',jp:'おふろに入りました'},{label:'Past −',jp:'おふろに入りませんでした'},{label:'Dictionary',jp:'おふろにはいる'},{label:'て-form',jp:'おふろにはいって'},{label:'ない form',jp:'おふろにはいらない'}],
  'おふろに入ります#G1':[{label:'Pres. +',jp:'おふろに入ります'},{label:'Pres. −',jp:'おふろに入りません'},{label:'Past +',jp:'おふろに入りました'},{label:'Past −',jp:'おふろに入りませんでした'},{label:'Dictionary',jp:'おふろにはいる'},{label:'て-form',jp:'おふろにはいって'},{label:'ない form',jp:'おふろにはいらない'}],
  'おふろにはいります#G1':[{label:'Pres. +',jp:'おふろに入ります'},{label:'Pres. −',jp:'おふろに入りません'},{label:'Past +',jp:'おふろに入りました'},{label:'Past −',jp:'おふろに入りませんでした'},{label:'Dictionary',jp:'おふろにはいる'},{label:'て-form',jp:'おふろにはいって'},{label:'ない form',jp:'おふろにはいらない'}],
  'おふろにはいります':[{label:'Pres. +',jp:'おふろに入ります'},{label:'Pres. −',jp:'おふろに入りません'},{label:'Past +',jp:'おふろに入りました'},{label:'Past −',jp:'おふろに入りませんでした'},{label:'Dictionary',jp:'おふろにはいる'},{label:'て-form',jp:'おふろにはいって'},{label:'ない form',jp:'おふろにはいらない'}],
  '薬を飲みます':[{label:'Pres. +',jp:'薬を飲みます'},{label:'Pres. −',jp:'薬を飲みません'},{label:'Past +',jp:'薬を飲みました'},{label:'Past −',jp:'薬を飲みませんでした'},{label:'Dictionary',jp:'くすりをのむ'},{label:'て-form',jp:'くすりをのんで'},{label:'ない form',jp:'くすりをのまない'}],
  '薬を飲みます#G1':[{label:'Pres. +',jp:'薬を飲みます'},{label:'Pres. −',jp:'薬を飲みません'},{label:'Past +',jp:'薬を飲みました'},{label:'Past −',jp:'薬を飲みませんでした'},{label:'Dictionary',jp:'くすりをのむ'},{label:'て-form',jp:'くすりをのんで'},{label:'ない form',jp:'くすりをのまない'}],
  'くすりをのみます#G1':[{label:'Pres. +',jp:'薬を飲みます'},{label:'Pres. −',jp:'薬を飲みません'},{label:'Past +',jp:'薬を飲みました'},{label:'Past −',jp:'薬を飲みませんでした'},{label:'Dictionary',jp:'くすりをのむ'},{label:'て-form',jp:'くすりをのんで'},{label:'ない form',jp:'くすりをのまない'}],
  'くすりをのみます':[{label:'Pres. +',jp:'薬を飲みます'},{label:'Pres. −',jp:'薬を飲みません'},{label:'Past +',jp:'薬を飲みました'},{label:'Past −',jp:'薬を飲みませんでした'},{label:'Dictionary',jp:'くすりをのむ'},{label:'て-form',jp:'くすりをのんで'},{label:'ない form',jp:'くすりをのまない'}],
  'まあまあ':[{label:'Pres. +',jp:'まあまあです'},{label:'Pres. −',jp:'まあまあじゃありません'},{label:'Past +',jp:'まあまあでした'},{label:'Past −',jp:'まあまあじゃありませんでした'},{label:'+ Noun',jp:'まあまあな＋N'}],
  '酔っぱらいます':[{label:'Pres. +',jp:'酔っぱらいます'},{label:'Pres. −',jp:'酔っぱらいません'},{label:'Past +',jp:'酔っぱらいました'},{label:'Past −',jp:'酔っぱらいませんでした'},{label:'Dictionary',jp:'よっぱらう'},{label:'て-form',jp:'よっぱらって'},{label:'ない form',jp:'よっぱらわない'}],
  '酔っぱらいます#G1':[{label:'Pres. +',jp:'酔っぱらいます'},{label:'Pres. −',jp:'酔っぱらいません'},{label:'Past +',jp:'酔っぱらいました'},{label:'Past −',jp:'酔っぱらいませんでした'},{label:'Dictionary',jp:'よっぱらう'},{label:'て-form',jp:'よっぱらって'},{label:'ない form',jp:'よっぱらわない'}],
  'よっぱらいます#G1':[{label:'Pres. +',jp:'酔っぱらいます'},{label:'Pres. −',jp:'酔っぱらいません'},{label:'Past +',jp:'酔っぱらいました'},{label:'Past −',jp:'酔っぱらいませんでした'},{label:'Dictionary',jp:'よっぱらう'},{label:'て-form',jp:'よっぱらって'},{label:'ない form',jp:'よっぱらわない'}],
  'よっぱらいます':[{label:'Pres. +',jp:'酔っぱらいます'},{label:'Pres. −',jp:'酔っぱらいません'},{label:'Past +',jp:'酔っぱらいました'},{label:'Past −',jp:'酔っぱらいませんでした'},{label:'Dictionary',jp:'よっぱらう'},{label:'て-form',jp:'よっぱらって'},{label:'ない form',jp:'よっぱらわない'}],
  '辛い':[{label:'Pres. +',jp:'からいです'},{label:'Pres. −',jp:'からくありません'},{label:'Past +',jp:'からかったです'},{label:'Past −',jp:'からくありませんでした'},{label:'Adverb',jp:'からく'}],
  'からい':[{label:'Pres. +',jp:'からいです'},{label:'Pres. −',jp:'からくありません'},{label:'Past +',jp:'からかったです'},{label:'Past −',jp:'からくありませんでした'},{label:'Adverb',jp:'からく'}],
  '気をつけます':[{label:'Pres. +',jp:'気をつけます'},{label:'Pres. −',jp:'気をつけません'},{label:'Past +',jp:'気をつけました'},{label:'Past −',jp:'気をつけませんでした'},{label:'Dictionary',jp:'きをつける'},{label:'て-form',jp:'きをつけて'},{label:'ない form',jp:'きをつけない'}],
  '気をつけます#G2':[{label:'Pres. +',jp:'気をつけます'},{label:'Pres. −',jp:'気をつけません'},{label:'Past +',jp:'気をつけました'},{label:'Past −',jp:'気をつけませんでした'},{label:'Dictionary',jp:'きをつける'},{label:'て-form',jp:'きをつけて'},{label:'ない form',jp:'きをつけない'}],
  'きをつけます#G2':[{label:'Pres. +',jp:'気をつけます'},{label:'Pres. −',jp:'気をつけません'},{label:'Past +',jp:'気をつけました'},{label:'Past −',jp:'気をつけませんでした'},{label:'Dictionary',jp:'きをつける'},{label:'て-form',jp:'きをつけて'},{label:'ない form',jp:'きをつけない'}],
  'きをつけます':[{label:'Pres. +',jp:'気をつけます'},{label:'Pres. −',jp:'気をつけません'},{label:'Past +',jp:'気をつけました'},{label:'Past −',jp:'気をつけませんでした'},{label:'Dictionary',jp:'きをつける'},{label:'て-form',jp:'きをつけて'},{label:'ない form',jp:'きをつけない'}],
  '遅い':[{label:'Pres. +',jp:'おそいです'},{label:'Pres. −',jp:'おそくありません'},{label:'Past +',jp:'おそかったです'},{label:'Past −',jp:'おそくありませんでした'},{label:'Adverb',jp:'おそく'}],
  'おそい':[{label:'Pres. +',jp:'おそいです'},{label:'Pres. −',jp:'おそくありません'},{label:'Past +',jp:'おそかったです'},{label:'Past −',jp:'おそくありませんでした'},{label:'Adverb',jp:'おそく'}],
  '厳しい':[{label:'Pres. +',jp:'きびしいです'},{label:'Pres. −',jp:'きびしくありません'},{label:'Past +',jp:'きびしかったです'},{label:'Past −',jp:'きびしくありませんでした'},{label:'Adverb',jp:'きびしく'}],
  'きびしい':[{label:'Pres. +',jp:'きびしいです'},{label:'Pres. −',jp:'きびしくありません'},{label:'Past +',jp:'きびしかったです'},{label:'Past −',jp:'きびしくありませんでした'},{label:'Adverb',jp:'きびしく'}],
  '写真を撮ります':[{label:'Pres. +',jp:'写真を撮ります'},{label:'Pres. −',jp:'写真を撮りません'},{label:'Past +',jp:'写真を撮りました'},{label:'Past −',jp:'写真を撮りませんでした'},{label:'Dictionary',jp:'しゃしんをとる'},{label:'て-form',jp:'しゃしんをとって'},{label:'ない form',jp:'しゃしんをとらない'}],
  '写真を撮ります#G1':[{label:'Pres. +',jp:'写真を撮ります'},{label:'Pres. −',jp:'写真を撮りません'},{label:'Past +',jp:'写真を撮りました'},{label:'Past −',jp:'写真を撮りませんでした'},{label:'Dictionary',jp:'しゃしんをとる'},{label:'て-form',jp:'しゃしんをとって'},{label:'ない form',jp:'しゃしんをとらない'}],
  'しゃしんをとります#G1':[{label:'Pres. +',jp:'写真を撮ります'},{label:'Pres. −',jp:'写真を撮りません'},{label:'Past +',jp:'写真を撮りました'},{label:'Past −',jp:'写真を撮りませんでした'},{label:'Dictionary',jp:'しゃしんをとる'},{label:'て-form',jp:'しゃしんをとって'},{label:'ない form',jp:'しゃしんをとらない'}],
  'しゃしんをとります':[{label:'Pres. +',jp:'写真を撮ります'},{label:'Pres. −',jp:'写真を撮りません'},{label:'Past +',jp:'写真を撮りました'},{label:'Past −',jp:'写真を撮りませんでした'},{label:'Dictionary',jp:'しゃしんをとる'},{label:'て-form',jp:'しゃしんをとって'},{label:'ない form',jp:'しゃしんをとらない'}],
  '絵を描きます':[{label:'Pres. +',jp:'絵を描きます'},{label:'Pres. −',jp:'絵を描きません'},{label:'Past +',jp:'絵を描きました'},{label:'Past −',jp:'絵を描きませんでした'},{label:'Dictionary',jp:'えをかく'},{label:'て-form',jp:'えをかいて'},{label:'ない form',jp:'えをかかない'}],
  '絵を描きます#G1':[{label:'Pres. +',jp:'絵を描きます'},{label:'Pres. −',jp:'絵を描きません'},{label:'Past +',jp:'絵を描きました'},{label:'Past −',jp:'絵を描きませんでした'},{label:'Dictionary',jp:'えをかく'},{label:'て-form',jp:'えをかいて'},{label:'ない form',jp:'えをかかない'}],
  'えをかきます#G1':[{label:'Pres. +',jp:'絵を描きます'},{label:'Pres. −',jp:'絵を描きません'},{label:'Past +',jp:'絵を描きました'},{label:'Past −',jp:'絵を描きませんでした'},{label:'Dictionary',jp:'えをかく'},{label:'て-form',jp:'えをかいて'},{label:'ない form',jp:'えをかかない'}],
  'えをかきます':[{label:'Pres. +',jp:'絵を描きます'},{label:'Pres. −',jp:'絵を描きません'},{label:'Past +',jp:'絵を描きました'},{label:'Past −',jp:'絵を描きませんでした'},{label:'Dictionary',jp:'えをかく'},{label:'て-form',jp:'えをかいて'},{label:'ない form',jp:'えをかかない'}],
  '花を育てます':[{label:'Pres. +',jp:'花を育てます'},{label:'Pres. −',jp:'花を育てません'},{label:'Past +',jp:'花を育てました'},{label:'Past −',jp:'花を育てませんでした'},{label:'Dictionary',jp:'はなをそだてる'},{label:'て-form',jp:'はなをそだてて'},{label:'ない form',jp:'はなをそだてない'}],
  '花を育てます#G2':[{label:'Pres. +',jp:'花を育てます'},{label:'Pres. −',jp:'花を育てません'},{label:'Past +',jp:'花を育てました'},{label:'Past −',jp:'花を育てませんでした'},{label:'Dictionary',jp:'はなをそだてる'},{label:'て-form',jp:'はなをそだてて'},{label:'ない form',jp:'はなをそだてない'}],
  'はなをそだてます#G2':[{label:'Pres. +',jp:'花を育てます'},{label:'Pres. −',jp:'花を育てません'},{label:'Past +',jp:'花を育てました'},{label:'Past −',jp:'花を育てませんでした'},{label:'Dictionary',jp:'はなをそだてる'},{label:'て-form',jp:'はなをそだてて'},{label:'ない form',jp:'はなをそだてない'}],
  'はなをそだてます':[{label:'Pres. +',jp:'花を育てます'},{label:'Pres. −',jp:'花を育てません'},{label:'Past +',jp:'花を育てました'},{label:'Past −',jp:'花を育てませんでした'},{label:'Dictionary',jp:'はなをそだてる'},{label:'て-form',jp:'はなをそだてて'},{label:'ない form',jp:'はなをそだてない'}],
  'セーターを編みます':[{label:'Pres. +',jp:'セーターを編みます'},{label:'Pres. −',jp:'セーターを編みません'},{label:'Past +',jp:'セーターを編みました'},{label:'Past −',jp:'セーターを編みませんでした'},{label:'Dictionary',jp:'セーターをあむ'},{label:'て-form',jp:'セーターをあんで'},{label:'ない form',jp:'セーターをあまない'}],
  'セーターを編みます#G1':[{label:'Pres. +',jp:'セーターを編みます'},{label:'Pres. −',jp:'セーターを編みません'},{label:'Past +',jp:'セーターを編みました'},{label:'Past −',jp:'セーターを編みませんでした'},{label:'Dictionary',jp:'セーターをあむ'},{label:'て-form',jp:'セーターをあんで'},{label:'ない form',jp:'セーターをあまない'}],
  'セーターをあみます#G1':[{label:'Pres. +',jp:'セーターを編みます'},{label:'Pres. −',jp:'セーターを編みません'},{label:'Past +',jp:'セーターを編みました'},{label:'Past −',jp:'セーターを編みませんでした'},{label:'Dictionary',jp:'セーターをあむ'},{label:'て-form',jp:'セーターをあんで'},{label:'ない form',jp:'セーターをあまない'}],
  'セーターをあみます':[{label:'Pres. +',jp:'セーターを編みます'},{label:'Pres. −',jp:'セーターを編みません'},{label:'Past +',jp:'セーターを編みました'},{label:'Past −',jp:'セーターを編みませんでした'},{label:'Dictionary',jp:'セーターをあむ'},{label:'て-form',jp:'セーターをあんで'},{label:'ない form',jp:'セーターをあまない'}],
  '散歩をします':[{label:'Pres. +',jp:'散歩をします'},{label:'Pres. −',jp:'散歩をしません'},{label:'Past +',jp:'散歩をしました'},{label:'Past −',jp:'散歩をしませんでした'},{label:'Dictionary',jp:'さんぽをする'},{label:'て-form',jp:'さんぽをして'},{label:'ない form',jp:'さんぽをしない'}],
  '散歩をします#G3':[{label:'Pres. +',jp:'散歩をします'},{label:'Pres. −',jp:'散歩をしません'},{label:'Past +',jp:'散歩をしました'},{label:'Past −',jp:'散歩をしませんでした'},{label:'Dictionary',jp:'さんぽをする'},{label:'て-form',jp:'さんぽをして'},{label:'ない form',jp:'さんぽをしない'}],
  'さんぽをします#G3':[{label:'Pres. +',jp:'散歩をします'},{label:'Pres. −',jp:'散歩をしません'},{label:'Past +',jp:'散歩をしました'},{label:'Past −',jp:'散歩をしませんでした'},{label:'Dictionary',jp:'さんぽをする'},{label:'て-form',jp:'さんぽをして'},{label:'ない form',jp:'さんぽをしない'}],
  'さんぽをします':[{label:'Pres. +',jp:'散歩をします'},{label:'Pres. −',jp:'散歩をしません'},{label:'Past +',jp:'散歩をしました'},{label:'Past −',jp:'散歩をしませんでした'},{label:'Dictionary',jp:'さんぽをする'},{label:'て-form',jp:'さんぽをして'},{label:'ない form',jp:'さんぽをしない'}],
  'ギターを弾きます':[{label:'Pres. +',jp:'ギターを弾きます'},{label:'Pres. −',jp:'ギターを弾きません'},{label:'Past +',jp:'ギターを弾きました'},{label:'Past −',jp:'ギターを弾きませんでした'},{label:'Dictionary',jp:'ギターをひく'},{label:'て-form',jp:'ギターをひいて'},{label:'ない form',jp:'ギターをひかない'}],
  'ギターを弾きます#G1':[{label:'Pres. +',jp:'ギターを弾きます'},{label:'Pres. −',jp:'ギターを弾きません'},{label:'Past +',jp:'ギターを弾きました'},{label:'Past −',jp:'ギターを弾きませんでした'},{label:'Dictionary',jp:'ギターをひく'},{label:'て-form',jp:'ギターをひいて'},{label:'ない form',jp:'ギターをひかない'}],
  'ギターをひきます#G1':[{label:'Pres. +',jp:'ギターを弾きます'},{label:'Pres. −',jp:'ギターを弾きません'},{label:'Past +',jp:'ギターを弾きました'},{label:'Past −',jp:'ギターを弾きませんでした'},{label:'Dictionary',jp:'ギターをひく'},{label:'て-form',jp:'ギターをひいて'},{label:'ない form',jp:'ギターをひかない'}],
  'ギターをひきます':[{label:'Pres. +',jp:'ギターを弾きます'},{label:'Pres. −',jp:'ギターを弾きません'},{label:'Past +',jp:'ギターを弾きました'},{label:'Past −',jp:'ギターを弾きませんでした'},{label:'Dictionary',jp:'ギターをひく'},{label:'て-form',jp:'ギターをひいて'},{label:'ない form',jp:'ギターをひかない'}],
  'いらっしゃいます':[{label:'Pres. +',jp:'いらっしゃいます'},{label:'Pres. −',jp:'いらっしゃいません'},{label:'Past +',jp:'いらっしゃいました'},{label:'Past −',jp:'いらっしゃいませんでした'},{label:'Dictionary',jp:'いらっしゃる'},{label:'て-form',jp:'いらっしゃって'},{label:'ない form',jp:'いらっしゃらない'}],
  'いらっしゃいます#G1':[{label:'Pres. +',jp:'いらっしゃいます'},{label:'Pres. −',jp:'いらっしゃいません'},{label:'Past +',jp:'いらっしゃいました'},{label:'Past −',jp:'いらっしゃいませんでした'},{label:'Dictionary',jp:'いらっしゃる'},{label:'て-form',jp:'いらっしゃって'},{label:'ない form',jp:'いらっしゃらない'}],
  '電話に出ます':[{label:'Pres. +',jp:'電話に出ます'},{label:'Pres. −',jp:'電話に出ません'},{label:'Past +',jp:'電話に出ました'},{label:'Past −',jp:'電話に出ませんでした'},{label:'Dictionary',jp:'でんわにでる'},{label:'て-form',jp:'でんわにでて'},{label:'ない form',jp:'でんわにでない'}],
  '電話に出ます#G2':[{label:'Pres. +',jp:'電話に出ます'},{label:'Pres. −',jp:'電話に出ません'},{label:'Past +',jp:'電話に出ました'},{label:'Past −',jp:'電話に出ませんでした'},{label:'Dictionary',jp:'でんわにでる'},{label:'て-form',jp:'でんわにでて'},{label:'ない form',jp:'でんわにでない'}],
  'でんわにでます#G2':[{label:'Pres. +',jp:'電話に出ます'},{label:'Pres. −',jp:'電話に出ません'},{label:'Past +',jp:'電話に出ました'},{label:'Past −',jp:'電話に出ませんでした'},{label:'Dictionary',jp:'でんわにでる'},{label:'て-form',jp:'でんわにでて'},{label:'ない form',jp:'でんわにでない'}],
  'でんわにでます':[{label:'Pres. +',jp:'電話に出ます'},{label:'Pres. −',jp:'電話に出ません'},{label:'Past +',jp:'電話に出ました'},{label:'Past −',jp:'電話に出ませんでした'},{label:'Dictionary',jp:'でんわにでる'},{label:'て-form',jp:'でんわにでて'},{label:'ない form',jp:'でんわにでない'}],
  '電話をします':[{label:'Pres. +',jp:'電話をします'},{label:'Pres. −',jp:'電話をしません'},{label:'Past +',jp:'電話をしました'},{label:'Past −',jp:'電話をしませんでした'},{label:'Dictionary',jp:'でんわをする'},{label:'て-form',jp:'でんわをして'},{label:'ない form',jp:'でんわをしない'}],
  '電話をします#G3':[{label:'Pres. +',jp:'電話をします'},{label:'Pres. −',jp:'電話をしません'},{label:'Past +',jp:'電話をしました'},{label:'Past −',jp:'電話をしませんでした'},{label:'Dictionary',jp:'でんわをする'},{label:'て-form',jp:'でんわをして'},{label:'ない form',jp:'でんわをしない'}],
  'でんわをします#G3':[{label:'Pres. +',jp:'電話をします'},{label:'Pres. −',jp:'電話をしません'},{label:'Past +',jp:'電話をしました'},{label:'Past −',jp:'電話をしませんでした'},{label:'Dictionary',jp:'でんわをする'},{label:'て-form',jp:'でんわをして'},{label:'ない form',jp:'でんわをしない'}],
  'でんわをします':[{label:'Pres. +',jp:'電話をします'},{label:'Pres. −',jp:'電話をしません'},{label:'Past +',jp:'電話をしました'},{label:'Past −',jp:'電話をしませんでした'},{label:'Dictionary',jp:'でんわをする'},{label:'て-form',jp:'でんわをして'},{label:'ない form',jp:'でんわをしない'}],
  'テストを受けます':[{label:'Pres. +',jp:'テストを受けます'},{label:'Pres. −',jp:'テストを受けません'},{label:'Past +',jp:'テストを受けました'},{label:'Past −',jp:'テストを受けませんでした'},{label:'Dictionary',jp:'テストをうける'},{label:'て-form',jp:'テストをうけて'},{label:'ない form',jp:'テストをうけない'}],
  'テストを受けます#G2':[{label:'Pres. +',jp:'テストを受けます'},{label:'Pres. −',jp:'テストを受けません'},{label:'Past +',jp:'テストを受けました'},{label:'Past −',jp:'テストを受けませんでした'},{label:'Dictionary',jp:'テストをうける'},{label:'て-form',jp:'テストをうけて'},{label:'ない form',jp:'テストをうけない'}],
  'テストをうけます#G2':[{label:'Pres. +',jp:'テストを受けます'},{label:'Pres. −',jp:'テストを受けません'},{label:'Past +',jp:'テストを受けました'},{label:'Past −',jp:'テストを受けませんでした'},{label:'Dictionary',jp:'テストをうける'},{label:'て-form',jp:'テストをうけて'},{label:'ない form',jp:'テストをうけない'}],
  'テストをうけます':[{label:'Pres. +',jp:'テストを受けます'},{label:'Pres. −',jp:'テストを受けません'},{label:'Past +',jp:'テストを受けました'},{label:'Past −',jp:'テストを受けませんでした'},{label:'Dictionary',jp:'テストをうける'},{label:'て-form',jp:'テストをうけて'},{label:'ない form',jp:'テストをうけない'}],
  '食事をします':[{label:'Pres. +',jp:'食事をします'},{label:'Pres. −',jp:'食事をしません'},{label:'Past +',jp:'食事をしました'},{label:'Past −',jp:'食事をしませんでした'},{label:'Dictionary',jp:'しょくじをする'},{label:'て-form',jp:'しょくじをして'},{label:'ない form',jp:'しょくじをしない'}],
  '食事をします#G3':[{label:'Pres. +',jp:'食事をします'},{label:'Pres. −',jp:'食事をしません'},{label:'Past +',jp:'食事をしました'},{label:'Past −',jp:'食事をしませんでした'},{label:'Dictionary',jp:'しょくじをする'},{label:'て-form',jp:'しょくじをして'},{label:'ない form',jp:'しょくじをしない'}],
  'しょくじをします#G3':[{label:'Pres. +',jp:'食事をします'},{label:'Pres. −',jp:'食事をしません'},{label:'Past +',jp:'食事をしました'},{label:'Past −',jp:'食事をしませんでした'},{label:'Dictionary',jp:'しょくじをする'},{label:'て-form',jp:'しょくじをして'},{label:'ない form',jp:'しょくじをしない'}],
  'しょくじをします':[{label:'Pres. +',jp:'食事をします'},{label:'Pres. −',jp:'食事をしません'},{label:'Past +',jp:'食事をしました'},{label:'Past −',jp:'食事をしませんでした'},{label:'Dictionary',jp:'しょくじをする'},{label:'て-form',jp:'しょくじをして'},{label:'ない form',jp:'しょくじをしない'}],
  '雨が降ります':[{label:'Pres. +',jp:'雨が降ります'},{label:'Pres. −',jp:'雨が降りません'},{label:'Past +',jp:'雨が降りました'},{label:'Past −',jp:'雨が降りませんでした'},{label:'Dictionary',jp:'あめがふる'},{label:'て-form',jp:'あめがふって'},{label:'ない form',jp:'あめがふらない'}],
  '雨が降ります#G1':[{label:'Pres. +',jp:'雨が降ります'},{label:'Pres. −',jp:'雨が降りません'},{label:'Past +',jp:'雨が降りました'},{label:'Past −',jp:'雨が降りませんでした'},{label:'Dictionary',jp:'あめがふる'},{label:'て-form',jp:'あめがふって'},{label:'ない form',jp:'あめがふらない'}],
  'あめがふります#G1':[{label:'Pres. +',jp:'雨が降ります'},{label:'Pres. −',jp:'雨が降りません'},{label:'Past +',jp:'雨が降りました'},{label:'Past −',jp:'雨が降りませんでした'},{label:'Dictionary',jp:'あめがふる'},{label:'て-form',jp:'あめがふって'},{label:'ない form',jp:'あめがふらない'}],
  'あめがふります':[{label:'Pres. +',jp:'雨が降ります'},{label:'Pres. −',jp:'雨が降りません'},{label:'Past +',jp:'雨が降りました'},{label:'Past −',jp:'雨が降りませんでした'},{label:'Dictionary',jp:'あめがふる'},{label:'て-form',jp:'あめがふって'},{label:'ない form',jp:'あめがふらない'}],
  'つれて来ます':[{label:'Pres. +',jp:'つれて来ます'},{label:'Pres. −',jp:'つれて来ません'},{label:'Past +',jp:'つれて来ました'},{label:'Past −',jp:'つれて来ませんでした'},{label:'Dictionary',jp:'つれてくる'},{label:'て-form',jp:'つれてきて'},{label:'ない form',jp:'つれてこない'}],
  'つれて来ます#G3':[{label:'Pres. +',jp:'つれて来ます'},{label:'Pres. −',jp:'つれて来ません'},{label:'Past +',jp:'つれて来ました'},{label:'Past −',jp:'つれて来ませんでした'},{label:'Dictionary',jp:'つれてくる'},{label:'て-form',jp:'つれてきて'},{label:'ない form',jp:'つれてこない'}],
  'つれてきます#G3':[{label:'Pres. +',jp:'つれて来ます'},{label:'Pres. −',jp:'つれて来ません'},{label:'Past +',jp:'つれて来ました'},{label:'Past −',jp:'つれて来ませんでした'},{label:'Dictionary',jp:'つれてくる'},{label:'て-form',jp:'つれてきて'},{label:'ない form',jp:'つれてこない'}],
  'つれてきます':[{label:'Pres. +',jp:'つれて来ます'},{label:'Pres. −',jp:'つれて来ません'},{label:'Past +',jp:'つれて来ました'},{label:'Past −',jp:'つれて来ませんでした'},{label:'Dictionary',jp:'つれてくる'},{label:'て-form',jp:'つれてきて'},{label:'ない form',jp:'つれてこない'}],
  '頼みます':[{label:'Pres. +',jp:'頼みます'},{label:'Pres. −',jp:'頼みません'},{label:'Past +',jp:'頼みました'},{label:'Past −',jp:'頼みませんでした'},{label:'Dictionary',jp:'たのむ'},{label:'て-form',jp:'たのんで'},{label:'ない form',jp:'たのまない'}],
  '頼みます#G1':[{label:'Pres. +',jp:'頼みます'},{label:'Pres. −',jp:'頼みません'},{label:'Past +',jp:'頼みました'},{label:'Past −',jp:'頼みませんでした'},{label:'Dictionary',jp:'たのむ'},{label:'て-form',jp:'たのんで'},{label:'ない form',jp:'たのまない'}],
  'たのみます#G1':[{label:'Pres. +',jp:'頼みます'},{label:'Pres. −',jp:'頼みません'},{label:'Past +',jp:'頼みました'},{label:'Past −',jp:'頼みませんでした'},{label:'Dictionary',jp:'たのむ'},{label:'て-form',jp:'たのんで'},{label:'ない form',jp:'たのまない'}],
  'たのみます':[{label:'Pres. +',jp:'頼みます'},{label:'Pres. −',jp:'頼みません'},{label:'Past +',jp:'頼みました'},{label:'Past −',jp:'頼みませんでした'},{label:'Dictionary',jp:'たのむ'},{label:'て-form',jp:'たのんで'},{label:'ない form',jp:'たのまない'}],
  'だめ':[{label:'Pres. +',jp:'だめです'},{label:'Pres. −',jp:'だめじゃありません'},{label:'Past +',jp:'だめでした'},{label:'Past −',jp:'だめじゃありませんでした'},{label:'+ Noun',jp:'だめな＋N'}],
  '飲みすぎます':[{label:'Pres. +',jp:'飲みすぎます'},{label:'Pres. −',jp:'飲みすぎません'},{label:'Past +',jp:'飲みすぎました'},{label:'Past −',jp:'飲みすぎませんでした'},{label:'Dictionary',jp:'のみすぎる'},{label:'て-form',jp:'のみすぎて'},{label:'ない form',jp:'のみすぎない'}],
  '飲みすぎます#G2':[{label:'Pres. +',jp:'飲みすぎます'},{label:'Pres. −',jp:'飲みすぎません'},{label:'Past +',jp:'飲みすぎました'},{label:'Past −',jp:'飲みすぎませんでした'},{label:'Dictionary',jp:'のみすぎる'},{label:'て-form',jp:'のみすぎて'},{label:'ない form',jp:'のみすぎない'}],
  'のみすぎます#G2':[{label:'Pres. +',jp:'飲みすぎます'},{label:'Pres. −',jp:'飲みすぎません'},{label:'Past +',jp:'飲みすぎました'},{label:'Past −',jp:'飲みすぎませんでした'},{label:'Dictionary',jp:'のみすぎる'},{label:'て-form',jp:'のみすぎて'},{label:'ない form',jp:'のみすぎない'}],
  'のみすぎます':[{label:'Pres. +',jp:'飲みすぎます'},{label:'Pres. −',jp:'飲みすぎません'},{label:'Past +',jp:'飲みすぎました'},{label:'Past −',jp:'飲みすぎませんでした'},{label:'Dictionary',jp:'のみすぎる'},{label:'て-form',jp:'のみすぎて'},{label:'ない form',jp:'のみすぎない'}],
  '食べすぎます':[{label:'Pres. +',jp:'食べすぎます'},{label:'Pres. −',jp:'食べすぎません'},{label:'Past +',jp:'食べすぎました'},{label:'Past −',jp:'食べすぎませんでした'},{label:'Dictionary',jp:'たべすぎる'},{label:'て-form',jp:'たべすぎて'},{label:'ない form',jp:'たべすぎない'}],
  '食べすぎます#G2':[{label:'Pres. +',jp:'食べすぎます'},{label:'Pres. −',jp:'食べすぎません'},{label:'Past +',jp:'食べすぎました'},{label:'Past −',jp:'食べすぎませんでした'},{label:'Dictionary',jp:'たべすぎる'},{label:'て-form',jp:'たべすぎて'},{label:'ない form',jp:'たべすぎない'}],
  'たべすぎます#G2':[{label:'Pres. +',jp:'食べすぎます'},{label:'Pres. −',jp:'食べすぎません'},{label:'Past +',jp:'食べすぎました'},{label:'Past −',jp:'食べすぎませんでした'},{label:'Dictionary',jp:'たべすぎる'},{label:'て-form',jp:'たべすぎて'},{label:'ない form',jp:'たべすぎない'}],
  'たべすぎます':[{label:'Pres. +',jp:'食べすぎます'},{label:'Pres. −',jp:'食べすぎません'},{label:'Past +',jp:'食べすぎました'},{label:'Past −',jp:'食べすぎませんでした'},{label:'Dictionary',jp:'たべすぎる'},{label:'て-form',jp:'たべすぎて'},{label:'ない form',jp:'たべすぎない'}],
  'かわいい':[{label:'Pres. +',jp:'かわいいです'},{label:'Pres. −',jp:'かわよくありません'},{label:'Past +',jp:'かわよかったです'},{label:'Past −',jp:'かわよくありませんでした'},{label:'Adverb',jp:'かわよく'}],
  'わかりにくい':[{label:'Pres. +',jp:'わかりにくいです'},{label:'Pres. −',jp:'わかりにくくありません'},{label:'Past +',jp:'わかりにくかったです'},{label:'Past −',jp:'わかりにくくありませんでした'},{label:'Adverb',jp:'わかりにくく'}],
  '読みにくい':[{label:'Pres. +',jp:'よみにくいです'},{label:'Pres. −',jp:'よみにくくありません'},{label:'Past +',jp:'よみにくかったです'},{label:'Past −',jp:'よみにくくありませんでした'},{label:'Adverb',jp:'よみにくく'}],
  'よみにくい':[{label:'Pres. +',jp:'よみにくいです'},{label:'Pres. −',jp:'よみにくくありません'},{label:'Past +',jp:'よみにくかったです'},{label:'Past −',jp:'よみにくくありませんでした'},{label:'Adverb',jp:'よみにくく'}],
  '読みやすい':[{label:'Pres. +',jp:'よみやすいです'},{label:'Pres. −',jp:'よみやすくありません'},{label:'Past +',jp:'よみやすかったです'},{label:'Past −',jp:'よみやすくありませんでした'},{label:'Adverb',jp:'よみやすく'}],
  'よみやすい':[{label:'Pres. +',jp:'よみやすいです'},{label:'Pres. −',jp:'よみやすくありません'},{label:'Past +',jp:'よみやすかったです'},{label:'Past −',jp:'よみやすくありませんでした'},{label:'Adverb',jp:'よみやすく'}],
  '歩きやすい':[{label:'Pres. +',jp:'あるきやすいです'},{label:'Pres. −',jp:'あるきやすくありません'},{label:'Past +',jp:'あるきやすかったです'},{label:'Past −',jp:'あるきやすくありませんでした'},{label:'Adverb',jp:'あるきやすく'}],
  'あるきやすい':[{label:'Pres. +',jp:'あるきやすいです'},{label:'Pres. −',jp:'あるきやすくありません'},{label:'Past +',jp:'あるきやすかったです'},{label:'Past −',jp:'あるきやすくありませんでした'},{label:'Adverb',jp:'あるきやすく'}],
  '歩きにくい':[{label:'Pres. +',jp:'あるきにくいです'},{label:'Pres. −',jp:'あるきにくくありません'},{label:'Past +',jp:'あるきにくかったです'},{label:'Past −',jp:'あるきにくくありませんでした'},{label:'Adverb',jp:'あるきにくく'}],
  'あるきにくい':[{label:'Pres. +',jp:'あるきにくいです'},{label:'Pres. −',jp:'あるきにくくありません'},{label:'Past +',jp:'あるきにくかったです'},{label:'Past −',jp:'あるきにくくありませんでした'},{label:'Adverb',jp:'あるきにくく'}],
  '食べにくい':[{label:'Pres. +',jp:'たべにくいです'},{label:'Pres. −',jp:'たべにくくありません'},{label:'Past +',jp:'たべにくかったです'},{label:'Past −',jp:'たべにくくありませんでした'},{label:'Adverb',jp:'たべにくく'}],
  'たべにくい':[{label:'Pres. +',jp:'たべにくいです'},{label:'Pres. −',jp:'たべにくくありません'},{label:'Past +',jp:'たべにくかったです'},{label:'Past −',jp:'たべにくくありませんでした'},{label:'Adverb',jp:'たべにくく'}],
  '使いやすい':[{label:'Pres. +',jp:'つかいやすいです'},{label:'Pres. −',jp:'つかいやすくありません'},{label:'Past +',jp:'つかいやすかったです'},{label:'Past −',jp:'つかいやすくありませんでした'},{label:'Adverb',jp:'つかいやすく'}],
  'つかいやすい':[{label:'Pres. +',jp:'つかいやすいです'},{label:'Pres. −',jp:'つかいやすくありません'},{label:'Past +',jp:'つかいやすかったです'},{label:'Past −',jp:'つかいやすくありませんでした'},{label:'Adverb',jp:'つかいやすく'}],
  'クリックします':[{label:'Pres. +',jp:'クリックします'},{label:'Pres. −',jp:'クリックしません'},{label:'Past +',jp:'クリックしました'},{label:'Past −',jp:'クリックしませんでした'},{label:'Dictionary',jp:'クリックする'},{label:'て-form',jp:'クリックして'},{label:'ない form',jp:'クリックしない'}],
  'クリックします#G3':[{label:'Pres. +',jp:'クリックします'},{label:'Pres. −',jp:'クリックしません'},{label:'Past +',jp:'クリックしました'},{label:'Past −',jp:'クリックしませんでした'},{label:'Dictionary',jp:'クリックする'},{label:'て-form',jp:'クリックして'},{label:'ない form',jp:'クリックしない'}],
  '気にします':[{label:'Pres. +',jp:'気にします'},{label:'Pres. −',jp:'気にしません'},{label:'Past +',jp:'気にしました'},{label:'Past −',jp:'気にしませんでした'},{label:'Dictionary',jp:'きにする'},{label:'て-form',jp:'きにして'},{label:'ない form',jp:'きにしない'}],
  '気にします#G3':[{label:'Pres. +',jp:'気にします'},{label:'Pres. −',jp:'気にしません'},{label:'Past +',jp:'気にしました'},{label:'Past −',jp:'気にしませんでした'},{label:'Dictionary',jp:'きにする'},{label:'て-form',jp:'きにして'},{label:'ない form',jp:'きにしない'}],
  'きにします#G3':[{label:'Pres. +',jp:'気にします'},{label:'Pres. −',jp:'気にしません'},{label:'Past +',jp:'気にしました'},{label:'Past −',jp:'気にしませんでした'},{label:'Dictionary',jp:'きにする'},{label:'て-form',jp:'きにして'},{label:'ない form',jp:'きにしない'}],
  'きにします':[{label:'Pres. +',jp:'気にします'},{label:'Pres. −',jp:'気にしません'},{label:'Past +',jp:'気にしました'},{label:'Past −',jp:'気にしませんでした'},{label:'Dictionary',jp:'きにする'},{label:'て-form',jp:'きにして'},{label:'ない form',jp:'きにしない'}],
  '少ない':[{label:'Pres. +',jp:'すくないです'},{label:'Pres. −',jp:'すくなくありません'},{label:'Past +',jp:'すくなかったです'},{label:'Past −',jp:'すくなくありませんでした'},{label:'Adverb',jp:'すくなく'}],
  'すくない':[{label:'Pres. +',jp:'すくないです'},{label:'Pres. −',jp:'すくなくありません'},{label:'Past +',jp:'すくなかったです'},{label:'Past −',jp:'すくなくありませんでした'},{label:'Adverb',jp:'すくなく'}],
  'おしゃれ':[{label:'Pres. +',jp:'おしゃれです'},{label:'Pres. −',jp:'おしゃれじゃありません'},{label:'Past +',jp:'おしゃれでした'},{label:'Past −',jp:'おしゃれじゃありませんでした'},{label:'+ Noun',jp:'おしゃれな＋N'}],
  'ぶつかります':[{label:'Pres. +',jp:'ぶつかります'},{label:'Pres. −',jp:'ぶつかりません'},{label:'Past +',jp:'ぶつかりました'},{label:'Past −',jp:'ぶつかりませんでした'},{label:'Dictionary',jp:'ぶつかる'},{label:'て-form',jp:'ぶつかって'},{label:'ない form',jp:'ぶつからない'}],
  'ぶつかります#G1':[{label:'Pres. +',jp:'ぶつかります'},{label:'Pres. −',jp:'ぶつかりません'},{label:'Past +',jp:'ぶつかりました'},{label:'Past −',jp:'ぶつかりませんでした'},{label:'Dictionary',jp:'ぶつかる'},{label:'て-form',jp:'ぶつかって'},{label:'ない form',jp:'ぶつからない'}],
  'おなかがすきます':[{label:'Pres. +',jp:'おなかがすきます'},{label:'Pres. −',jp:'おなかがすきません'},{label:'Past +',jp:'おなかがすきました'},{label:'Past −',jp:'おなかがすきませんでした'},{label:'Dictionary',jp:'おなかがすく'},{label:'て-form',jp:'おなかがすいて'},{label:'ない form',jp:'おなかがすかない'}],
  'おなかがすきます#G1':[{label:'Pres. +',jp:'おなかがすきます'},{label:'Pres. −',jp:'おなかがすきません'},{label:'Past +',jp:'おなかがすきました'},{label:'Past −',jp:'おなかがすきませんでした'},{label:'Dictionary',jp:'おなかがすく'},{label:'て-form',jp:'おなかがすいて'},{label:'ない form',jp:'おなかがすかない'}],
  'びっくりします':[{label:'Pres. +',jp:'びっくりします'},{label:'Pres. −',jp:'びっくりしません'},{label:'Past +',jp:'びっくりしました'},{label:'Past −',jp:'びっくりしませんでした'},{label:'Dictionary',jp:'びっくりする'},{label:'て-form',jp:'びっくりして'},{label:'ない form',jp:'びっくりしない'}],
  'びっくりします#G3':[{label:'Pres. +',jp:'びっくりします'},{label:'Pres. −',jp:'びっくりしません'},{label:'Past +',jp:'びっくりしました'},{label:'Past −',jp:'びっくりしませんでした'},{label:'Dictionary',jp:'びっくりする'},{label:'て-form',jp:'びっくりして'},{label:'ない form',jp:'びっくりしない'}],
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
  'animals':{label:'Small animals',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"13\" r=\"6\"/><circle cx=\"7\" cy=\"7\" r=\"2\"/><circle cx=\"17\" cy=\"7\" r=\"2\"/></svg>",desc:'Counting small animals: dogs, cats, fish, insects. 匹 (ひき).',items:[
    {jp:'一匹',reading:'いっぴき',def:'1 ⚠'},{jp:'二匹',reading:'にひき',def:'2'},{jp:'三匹',reading:'さんびき',def:'3 ⚠'},{jp:'四匹',reading:'よんひき',def:'4'},{jp:'五匹',reading:'ごひき',def:'5'},{jp:'六匹',reading:'ろっぴき',def:'6 ⚠'},{jp:'七匹',reading:'ななひき',def:'7'},{jp:'八匹',reading:'はっぴき',def:'8 ⚠'},{jp:'九匹',reading:'きゅうひき',def:'9'},{jp:'十匹',reading:'じゅっぴき',def:'10 ⚠'},{jp:'何匹',reading:'なんびき',def:'how many?'},
  ]},
  'times':{label:'Times (occurrences)',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a8 8 0 1 0 3-6.2\"/><polyline points=\"4 4 4 9 9 9\"/></svg>",desc:'How many times something happens. 回 (かい).',items:[
    {jp:'一回',reading:'いっかい',def:'once ⚠'},{jp:'二回',reading:'にかい',def:'twice'},{jp:'三回',reading:'さんかい',def:'3 times'},{jp:'四回',reading:'よんかい',def:'4 times'},{jp:'五回',reading:'ごかい',def:'5 times'},{jp:'六回',reading:'ろっかい',def:'6 times ⚠'},{jp:'七回',reading:'ななかい',def:'7 times'},{jp:'八回',reading:'はっかい',def:'8 times ⚠'},{jp:'九回',reading:'きゅうかい',def:'9 times'},{jp:'十回',reading:'じゅっかい',def:'10 times ⚠'},{jp:'何回',reading:'なんかい',def:'how many times?'},
  ]},
  'months_dur':{label:'Months (duration)',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><path d=\"M8 15h8\"/></svg>",desc:'Length of time in months (〜ヶ月). Not the same as calendar months (〜月).',items:[
    {jp:'一ヶ月',reading:'いっかげつ',def:'1 month ⚠'},{jp:'二ヶ月',reading:'にかげつ',def:'2 months'},{jp:'三ヶ月',reading:'さんかげつ',def:'3 months'},{jp:'四ヶ月',reading:'よんかげつ',def:'4 months'},{jp:'五ヶ月',reading:'ごかげつ',def:'5 months'},{jp:'六ヶ月',reading:'ろっかげつ',def:'6 months ⚠'},{jp:'七ヶ月',reading:'ななかげつ',def:'7 months'},{jp:'八ヶ月',reading:'はっかげつ',def:'8 months ⚠'},{jp:'九ヶ月',reading:'きゅうかげつ',def:'9 months'},{jp:'十ヶ月',reading:'じゅっかげつ',def:'10 months ⚠'},{jp:'何ヶ月',reading:'なんかげつ',def:'how many months?'},
  ]},
  'days_dur':{label:'Days (duration)',icon:"<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><path d=\"M8 15h4\"/></svg>",desc:'Length of time in days (〜日間). Uses the same irregular readings as dates.',items:[
    {jp:'一日',reading:'いちにち',def:'1 day'},{jp:'二日間',reading:'ふつかかん',def:'2 days ⚠'},{jp:'三日間',reading:'みっかかん',def:'3 days ⚠'},{jp:'四日間',reading:'よっかかん',def:'4 days ⚠'},{jp:'五日間',reading:'いつかかん',def:'5 days ⚠'},{jp:'六日間',reading:'むいかかん',def:'6 days ⚠'},{jp:'七日間',reading:'なのかかん',def:'7 days ⚠'},{jp:'八日間',reading:'ようかかん',def:'8 days ⚠'},{jp:'九日間',reading:'ここのかかん',def:'9 days ⚠'},{jp:'十日間',reading:'とおかかん',def:'10 days ⚠'},{jp:'何日間',reading:'なんにちかん',def:'how many days?'},
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
  '一匹':'animals',
  '二匹':'animals',
  '三匹':'animals',
  '四匹':'animals',
  '五匹':'animals',
  '六匹':'animals',
  '七匹':'animals',
  '八匹':'animals',
  '九匹':'animals',
  '十匹':'animals',
  '何匹':'animals',
  '一回':'times',
  '二回':'times',
  '三回':'times',
  '四回':'times',
  '五回':'times',
  '六回':'times',
  '七回':'times',
  '八回':'times',
  '九回':'times',
  '十回':'times',
  '何回':'times',
  '一ヶ月':'months_dur',
  '二ヶ月':'months_dur',
  '三ヶ月':'months_dur',
  '四ヶ月':'months_dur',
  '五ヶ月':'months_dur',
  '六ヶ月':'months_dur',
  '七ヶ月':'months_dur',
  '八ヶ月':'months_dur',
  '九ヶ月':'months_dur',
  '十ヶ月':'months_dur',
  '何ヶ月':'months_dur',
  '一日':'days_dur',
  '二日間':'days_dur',
  '三日間':'days_dur',
  '四日間':'days_dur',
  '五日間':'days_dur',
  '六日間':'days_dur',
  '七日間':'days_dur',
  '八日間':'days_dur',
  '九日間':'days_dur',
  '十日間':'days_dur',
  '何日間':'days_dur',
  '〜匹':'animals',
  '〜回':'times',
  '〜ヶ月':'months_dur',
  '〜か月':'months_dur',
  '〜日間':'days_dur',
};
const sem = 'S1';
// One breakpoint, shared with style.css: under it the page is a phone —
// no sidebar, no suggestion dropdown, the page itself is the result list.
const _phoneMQ = window.matchMedia('(max-width:640px)');
function isPhone(){ return _phoneMQ.matches; }
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
const activeKanjiLevels = new Set(); // KL1–KL12 / SIGN filter chips in the Words tab
const activeGramLevels = new Set();  // L1–L23 chips in the Grammar tab
const activeGramKinds = new Set();   // subject / form / pattern / question / expression

// Per-tab state memory
const tabState = {
  words:   {search:'', filter:null, subFilter:null, showRead:true, showWrite:true},
  grammar: {search:'', filter:null, subFilter:null},
  sheets:  {search:'', sheetType:'verbs', sheetLvls:new Set(), kanjiModes:new Set(['read','write'])}
};
// Per-sheet-sub-tab state: remembers level filters and kanji modes independently per sheet tab
function saveTabState(tab){
  if(!tabState[tab]) return;
  tabState[tab].search    = currentSearch;
  tabState[tab].filter    = [...activeFilters];
  tabState[tab].subFilter = [...activeSubFilters];
  if(tab === 'words'){
    tabState[tab].readOnly  = hideReadOnly;
  }
  if(tab === 'sheets'){
    tabState[tab].sheetType   = currentSheetType;
    tabState[tab].sheets      = [...activeSheets];
    tabState[tab].sheetLvls   = [...activeSheetLvls];
    tabState[tab].kanjiLvls   = [...activeKanjiLvls];
    tabState[tab].kanjiModes  = [...activeKanjiModes];
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
    currentSheetType = tabState[tab].sheetType || 'verbs';
    activeSheets.clear(); activeSheets.add((tabState[tab].sheets || [])[0] || currentSheetType);
    activeSheetLvls  = new Set(tabState[tab].sheetLvls  || []);
    activeKanjiLvls  = new Set(tabState[tab].kanjiLvls  || []);
    activeKanjiModes = new Set(tabState[tab].kanjiModes || ['read','write']);
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
const EXPR_KINDS = ['Question','Counter','Greeting','Reply','Classroom','Pattern','Amount','Time'];

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
  // adverbs, conjunctions and the expressions questionsData does not carry
  // used to fall out of the if/else below and reach no sheet at all
  const verbs=[], adj=[], nouns=[], other=[];
  // the question words already have their own sheet; the leftovers are what
  // no other sheet carries
  const _onExprSheet = new Set();
  for(const r of questionsData){ if(r.jp) _onExprSheet.add(r.jp); if(r.reading) _onExprSheet.add(r.reading); }
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
      } else if(!_onExprSheet.has(w.word) && !_onExprSheet.has(w.reading||'')){
        other.push({...base, pos:w.pos||'Expr'});
      }
    }
  }
  // A term taught as read-only in one kanji level and as write in a later one
  // is two rows on purpose. Two rows identical in kanji, level and mode are
  // not: they are the same term split across the printed sheet's two parts.
  const kanji=[], seen=new Set();
  for(const [kl,arr] of Object.entries(kanjiData[sem]||{}))
    for(const k of arr){
      const key=k.kanji+'#'+kl+'#'+k.mode;
      if(seen.has(key)) continue;
      seen.add(key);
      kanji.push({kanji:k.kanji, reading:k.reading||'', meaning:k.meaning||'', mode:k.mode, kl});
    }
  return {verbs, adj, nouns, kanji, other};
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
  // A phone has no Sheets tab: nothing to copy a table into over there.
  if(tab==='sheets' && isPhone()) tab='words';
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
function toggleGramKind(kind, btn){
  if(activeGramKinds.has(kind)) activeGramKinds.delete(kind); else activeGramKinds.add(kind);
  btn.classList.toggle('active', activeGramKinds.has(kind));
  _updateGramBadge(); applyGramFilters(true);
}
function clearGramFilters(){
  activeGramLevels.clear(); activeGramKinds.clear();
  document.querySelectorAll('#gf-panel .float-btn').forEach(b=>b.classList.remove('active'));
  _updateGramBadge(); applyGramFilters();
}
function _updateGramBadge(){
  const b=document.getElementById('gf-count');
  if(!b) return;
  const n=activeGramLevels.size+activeGramKinds.size;
  b.textContent = n ? String(n) : '';
  b.classList.toggle('on', n>0);
}
// autoOpen only when the user just changed the selection. Opening on every
// call meant any re-render — a keystroke, a tab return — forced the sections
// back open, so Collapse all could never stick.
function applyGramFilters(autoOpen){
  const on = activeGramLevels.size>0;
  const kindsOn = activeGramKinds.size>0;
  // On a phone the search is one more criterion of this same pass, so the two
  // never fight over a card's display. Desktop search rebuilds the page —
  // unless the query is a particle, a form or a related word, which filters
  // the cards where they stand on any screen.
  const inPlace = isPhone() || _isGramTagQuery(currentSearch);
  const q = inPlace ? currentSearch : '';
  const el = document.getElementById('content');
  let anyVisible = false;
  document.querySelectorAll('.gram-section').forEach(sec=>{
    const head=sec.querySelector('.gram-section-header');
    // a hit on the section's own title is a hit on every rule in it
    const secEn = head && head.querySelector('.gram-section-en'), secJp = head && head.querySelector('.gram-section-title');
    const secHit = !!q && matchesSearch(q, secEn && secEn.textContent, secJp && secJp.textContent);
    let shown=0;
    sec.querySelectorAll('.gram-fc').forEach(card=>{
      const pass = (!on || activeGramLevels.has(card.dataset.lv)) &&
                   (!kindsOn || activeGramKinds.has(card.dataset.kind)) &&
                   (!q || secHit || _gramHitEl(q, card));
      card.style.display = pass ? '' : 'none';
      if(pass) shown++;
    });
    // a section with nothing left in it does not show at all
    sec.style.display = shown ? '' : 'none';
    if(shown) anyVisible = true;
    const c=sec.querySelector('.lt-count');
    if(c) c.textContent = shown+(sec.dataset.lvl==='0' ? (shown===1?' card':' cards') : (shown===1?' rule':' rules'));
    // Picking a level is a request to read those rules, so the sections that
    // still have some open themselves — a filter that leaves twelve collapsed
    // headers has not answered anything.
    if(autoOpen && (on||kindsOn) && shown && head && !head.classList.contains('open')) toggleGramSection(head);
    // A search opens what it finds; cleared, it hands the sections back to
    // whatever the reader had open — the same deal the Words tab makes.
    if(inPlace && head){
      const t = head.querySelector('.gram-section-title');
      const open = q ? shown>0 : !!(t && _gramOpenSections.has(t.textContent.trim()));
      if(open && !head.classList.contains('open')) _loadSectionImages(head);
      head.classList.toggle('open', open);
      head.nextElementSibling.classList.toggle('open', open);
      sec.classList.toggle('open', open);
    }
  });
  // a level heading goes when none of its lessons is left
  document.querySelectorAll('.gram-level').forEach(h=>{
    h.style.display = [...document.querySelectorAll(`.gram-section[data-lvl="${h.dataset.lvl}"]`)].some(x=>x.style.display!=='none') ? '' : 'none';
  });
  let emptyEl = el && el.querySelector('.search-no-results');
  if(q && !anyVisible && el){
    if(!emptyEl){
      emptyEl = document.createElement('div');
      emptyEl.className = 'search-no-results empty';
      emptyEl.innerHTML = `<span class="empty-jp">文</span>No grammar found for "${q}".`;
      el.appendChild(emptyEl);
    }
  } else if(emptyEl){ emptyEl.remove(); }
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
  if(isPhone()) document.getElementById('search-suggestions').classList.remove('visible');
  else updateSuggestions(val.trim());

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
    if(currentSearch && !isPhone()){
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

  // On a phone the grammar rules filter where they stand, the way the Words
  // tab does: the full cards stay, the sections with a hit open.
  if(currentTab==='grammar' && (isPhone() || _isGramTagQuery(currentSearch))){
    if(!currentSearch) preSearchScrollPos = null;
    clearTimeout(_renderTimer);
    // a tag query lands on a page the last full render may have filtered
    if(!isPhone() && document.querySelector('.gram-sections-grid')===null) renderGrammar();
    applyGramFilters();
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
    for(const card of sec.cards){
      // the tags first, so a particle or a form scores as an exact hit
      const t = _gramTags(card);
      const cForms = [...t.conn, ...t.f, ...t.w, card.label, card.jp||'', card.meaning||'', card.formula||'', card.note||'', sec.title, sec.en];
      (card.rows||[]).forEach(r=>{ cForms.push(r.jp, r.en); });
      (card.items||[]).forEach(it=>{ cForms.push(it.h); it.uses.forEach(u=>cForms.push(u.n)); });
      _suggIndex.push({type:'grammar', jp:card.jp||'', read:'', en:card.label, badge:_GRAM_KIND[card.kind]||'Grammar', secTitle:sec.id, cardLabel:_gramKey(card), searchForms:cForms});
    }
  }
}

function updateSuggestions(raw){
  const box = document.getElementById('search-suggestions');
  if(!raw || raw.length < 1){ box.classList.remove('visible'); return; }
  buildSuggIndex();
  const q = raw.toLowerCase();
  // toRomaji drops anything that is not kana, so a kanji-only query romanises
  // to the empty string — and "".includes('') is true of every entry, which
  // used to score the whole index 1 and answer 食 with わたし. Only compare the
  // romaji when there is some.
  const qr = toRomaji(q) || null;
  const numWord = /^\d+$/.test(q) ? (_NUMERAL_WORDS[q]||null) : null;

  const scoreItem = (item) => {
    for(const f of item.searchForms){
      if(!f) continue;
      const fl = f.toLowerCase();
      const fr = toRomaji(fl);
      if(fl === q || (fr && (fr === q || (qr && fr === qr)))) return 3;
      if(numWord && fl === numWord) return 3;
      if(fl.startsWith(q) || (fr && (fr.startsWith(q) || (qr && fr.startsWith(qr))))) return 2;
      if(numWord && fl.startsWith(numWord)) return 2;
      if(fl.includes(q) || (fr && (fr.includes(q) || (qr && fr.includes(qr))))) return 1;
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
    if(isGram){
      innerHtml = `<span class="sugg-en" style="flex:1">${h.en}</span>${h.jp?`<span class="sugg-jp notranslate" translate="no" style="font-size:12px;color:var(--mid);">${h.jp}</span>`:''}`;
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
    gotoGramCard(el.dataset.sec, el.dataset.card);
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
    if(isPhone()) e.target.blur(); // the results are already on the page; drop the keyboard
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

// Every kanji character that appears anywhere in the class kanji list (L1–L12 + signs).
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
const KANJI_LEVELS = ['KL1','KL2','KL3','KL4','KL5','KL6','KL7','KL8','KL9','KL10','KL11','KL12','SIGN'];
// Kanji-list entries that are NOT also vocabulary, grouped by kanji level.
// A term is one card. 大好きな is on the KL6 list twice (once per part) and
// 名前 is on both KL3 and KL8; each gets a single card, filed at the level you
// first meet it. Every level it belongs to still rides along in its badge and
// its filter data, so a KL8 filter still finds 名前.
const KANJI_BY_LEVEL = (function(){
  const byLvl = {};
  const vocab = new Set();
  for(const lvl of Object.keys(vocabData[sem]||{})) for(const w of vocabData[sem][lvl]) vocab.add(w.word);
  const kd = kanjiData[sem] || {};
  const placed = new Set();
  for(const kl of KANJI_LEVELS) for(const k of kd[kl]||[]){
    if(vocab.has(k.kanji) || placed.has(k.kanji)) continue;
    placed.add(k.kanji);
    (byLvl[kl] = byLvl[kl] || []).push(k);
  }
  return byLvl;
})();
// Every lesson a vocabulary word is taught in. 降ります is on the L10 and L12
// lists; it gets one card, badged L10, and the badge says where else it turns up.
const VOCAB_LEVELS = (function(){
  const m = new Map();
  const vd = vocabData[sem] || {};
  for(const lvl of WORD_LEVELS) for(const w of vd[lvl]||[]){
    if(!m.has(w.word)) m.set(w.word, []);
    if(!m.get(w.word).includes(lvl)) m.get(w.word).push(lvl);
  }
  return m;
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
      // KL1–KL12 are a progression: 新聞 really is reading-only at KL5 and a
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
const _lvlTitle = (word, lvl) => {
  const all = VOCAB_LEVELS.get(word) || [lvl];
  return all.length > 1 ? 'Taught in lessons ' + all.join(', ') : 'Level ' + lvl;
};
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
    <div class="vc-indicators">${modeDot}${klTag}<span class="vc-lvl-tag" title="${_ea(_lvlTitle(w.word, lvl))}">${lvl}</span></div>
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
  // The card is filed at one level but belongs to every level the term is on,
  // so the badge, the read/write mark and the level filter all read the merged
  // entry — the same way a vocabulary card that is also on the kanji list does.
  const ki    = _kanjiInfo(k.kanji) || {entries:[{kl, mode:k.mode}], levels:[kl]};
  const shown = _klShown(ki.entries);
  const label = shown.kl==='SIGN' ? 'サイン' : shown.kl;
  const klModes = ki.entries.length>1
    ? ' data-klmodes="'+ki.entries.map(e=>e.kl+':'+e.mode).join('|')+'"' : '';
  const kp = _kpos(k.kanji);
  const adjTag = kp.pos==='Adj' ? `<span class="vc-adj-tag adj-${kp.adj||'na'}">${kp.adj==='i'?'い':'な'}</span>` : '';
  const grpTag = kp.grp ? `<span class="vc-grp-tag grp-${kp.grp}">${kp.grp}</span>` : '';
  const kind = kp.pos==='Expr' ? (EXPR_KIND[k.kanji]||'') : '';
  const kindTag = kind ? `<span class="vc-kind-tag" title="${_ea(kind)}">${_ea(kind)}</span>` : '';
  return `<div class="vocab-card kanji-card is-kanji" onclick="openConjPopup('${_eq(k.kanji)}','${_eq(k.reading||'')}','${_eq(k.meaning||'')}','${kp.pos}','','${shown.mode}','${kp.grp||''}','${kp.adj||''}')" data-pos="${kp.pos}" data-grp="${kp.grp||''}" data-adjt="${kp.adj||''}" data-kl="${_ea(ki.levels.join(' '))}"${klModes} data-kmode="${shown.mode}" data-kind="${_ea(kind)}" data-coun="${coun?'1':''}" data-sw="${_ea(k.kanji)}" data-sr="${_ea(k.reading||'')}" data-sd="${_ea(k.meaning||'')}">
    <div class="vc-left notranslate" translate="no">${rubyHTML(k.kanji,k.reading||"",_jpStyle(k.kanji))}</div>
    <div class="vc-sep"></div>
    <div class="vc-right"><span class="vc-def">${k.meaning||''}</span></div>
    <div class="vc-badges">${coun}${adjTag}${grpTag}${kindTag}<span class="vc-badge pos-${kp.pos}" style="position:static;">${kp.pos}</span></div>
    <div class="vc-indicators">${_kanjiDot(shown.mode)}<span class="vc-lvl-tag" title="Kanji list ${ki.levels.join(', ')}">${label}</span></div>
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
    // on a vocabulary card the kanji level is its own badge; on a kanji-only
    // card the level badge IS the kanji level
    const tag = card.querySelector('.vc-kl-tag') ||
                (card.classList.contains('kanji-card') ? card.querySelector('.vc-lvl-tag') : null);
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
  const placed = new Set();
  for(const lvl of WORD_LEVELS){
    // 掃除 is on the L5 and L10 lists, 降ります on L10 and L12 — one card each,
    // under the lesson it is first taught in.
    const words = (vData[lvl]||[]).filter(w=>{
      if(placed.has(w.word)) return false;
      placed.add(w.word); return true;
    });
    if(!words.length) continue;
    groups.push({
      key: lvl, label: lvl, sub: '',
      count: words.length+' words',
      cards: words.map(w=>wordCardHTML(w, lvl)).join(''),
    });
  }
  // Kanji with no vocabulary entry, KL1–KL12 then サイン.
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
  if(!isPhone()) _warmSuggIndex();
}

// back-compat aliases
function renderVocab(){ renderWords(); }
function renderKanji(){ renderWords(); }

const _gramOpenSections = new Set();
function _loadSectionImages(el){
  const body = el.nextElementSibling;
  if(!body) return;
  body.querySelectorAll('img.gc-img[data-src]').forEach(img=>{ img.src = img.dataset.src; img.removeAttribute('data-src'); });
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

const grammarSections=[
{id:"まとめ",n:"★",lvl:0,title:"まとめ",en:"Subjects",goal:"Topics that run through every lesson — every particle, every question word, every counter and the polite forms — each on one card.",cards:[
  {sec:"助詞",kind:"subject",label:"Particles",jp:"助詞（じょし）",lv:"",vid:"ufxBFUb4-7g",
   meaning:"Every particle on one card, use by use — the class handout じょしのまとめ (日本語Ⅰ・Ⅱ・Ⅲ) plus the endings and small particles from the lessons. The tag on each use is the lesson that introduces it.",
   items:[
     {h:"は",vid:"mTws1GwXcx8",uses:[{n:"Topic — what the sentence is about",lv:"L1",fm:"[Topic] {は} [Comment]",ex:[["ミシェル{は}学生です。ミシェル{は}カナダ人です。","Michelle is a student. She is Canadian."]]},{n:"Contrast",lv:"L5",fm:"[A] {は} …。{でも} [B] {は} …",ex:[["ビール{は}飲みます。でも、ウイスキー{は}飲みません。","Beer I drink. But whisky I don’t."],["A：スポーツをしますか。 B：スポーツ{は}あまり…。","Do you play sports? — Sports, not really…"]]},{n:"A は B が … — describing one part of A",lv:"L8",fm:"[A] {は} [B] {が} [Adj]",ex:[["ぞう{は}鼻{が}長いです。","Elephants have long trunks."],["チンさん{は}、とても字{が}きれいです。","Chin’s handwriting is very neat."]]}]},
     {h:"が",uses:[{n:"What exists — あります／います",lv:"L7",fm:"[Place] {に} [Thing] {が} {あります}／{います}",ex:[["机の上に花{が}あります。","There are flowers on the desk."],["庭に大きい犬{が}います。","There is a big dog in the garden."]]},{n:"Likes and wants — すき・ほしい・たい",lv:"L8",fm:"[Noun] {が} {すきです}／{ほしいです}／[Verb:ます-stem] {たいです}",ex:[["私は田中さん{が}好きです。","I like Mr. Tanaka."],["のどがかわきました…。水{が}飲みたいです。","I’m thirsty… I want to drink water."]]},{n:"Skill and ability — じょうず・できる・potential",lv:"L8",fm:"[Noun] {が} {じょうずです}／[Verb:potential]",ex:[["兄は、車の運転{が}上手です。","My brother is good at driving."],["彼女はピアノ{が}弾けます。","She can play the piano."]]},{n:"Things that happen by themselves",lv:"L13",fm:"[Noun] {が} [Verb]",ex:[["もうすぐ映画{が}始まりますよ。急ぎましょう。","The film is about to start. Let’s hurry."],["風でドア{が}閉まりました。","The door shut in the wind."]]},{n:"The doer inside a describing clause",lv:"L14",fm:"[Person] {が} [Verb:plain form] [Noun]",ex:[["ホセさん{が}弾いているギターは、彼のお父さんのです。","The guitar José is playing is his father’s."],["母{が}作ったラザニアは、世界一よ。","The lasagne my mother makes is the best in the world."]]},{n:"The doer inside a とき／たら clause",lv:"L17",fm:"[Person] {が} [Verb] {とき}／{たら}、…",ex:[["彼{が}駅に着いたら、私は田中さんに電話します。","When he gets to the station, I’ll call Mr. Tanaka."],["息子は、私{が}車を運転するとき、いつも隣に座ります。","My son always sits next to me when I drive."]]}]},
     {h:"を",uses:[{n:"Object of the action",lv:"L5",fm:"[Object] {を} [Verb]",ex:[["図書館で本{を}読みます。","I read books at the library."]]},{n:"Starting point — leave, get off",lv:"L10",fm:"[Place] {を} {出ます}／{おります}",ex:[["今朝、7時半に家{を}出ました。","I left home at 7:30 this morning."],["渋谷で電車{を}降ります。","I get off the train at Shibuya."]]},{n:"Passing through — along, across, around",lv:"L15",fm:"[Place] {を} {渡ります}／{まがります}",ex:[["橋{を}わたります。","I cross the bridge."],["かど{を}右にまがります。","I turn right at the corner."]]}]},
     {h:"に",uses:[{n:"Point in time",lv:"L5",fm:"[Time] {に} [Verb]",ex:[["私は毎日6時{に}起きます。","I get up at six every day."],["金曜日{に}テストがあります。","There’s a test on Friday."]]},{n:"Arrival point — enter, get on",lv:"L5",fm:"[Place] {に} {入ります}／{のります}",ex:[["毎晩、おふろ{に}入ります。","I take a bath every night."],["駅で電車{に}乗ります。","I get on the train at the station."]]},{n:"Where something is / someone lives",lv:"L7",fm:"[Place] {に} {あります}／{います}／{住んでいます}",ex:[["へや{に}テレビがあります。","There is a TV in the room."],["姉はカナダ{に}住んでいます。","My sister lives in Canada."]]},{n:"Purpose — go to do",lv:"L13",fm:"[Verb:ます-stem] {に} {行きます}",ex:[["明日、コンサート{に}行きます。","Tomorrow I’m going to a concert."],["新宿へ本を買い{に}行きます。","I’m going to Shinjuku to buy a book."]]},{n:"To a person — give, lend, meet, phone",lv:"L5",fm:"[Person] {に} [Verb]",ex:[["弟{に}チケットをあげました。","I gave my brother a ticket."],["ワンさん{に}ペンを貸しました。","I lent Wang a pen."],["ゆうべ新宿で、リーさん{に}会いました。","I met Lee in Shinjuku last night."]]},{n:"From a person — receive, borrow, hear",lv:"L21",fm:"[Person] {に} {もらいます}／{借ります}／{聞きます}",ex:[["姉{に}辞書をもらいました。","I got a dictionary from my sister."],["カイさん{に}ペンを借りました。","I borrowed a pen from Kai."],["正子さん{に}その話を聞きました。","I heard that story from Masako."]]}]},
     {h:"で",vid:"API_zgpaelE",uses:[{n:"Place where an action happens",lv:"L5",fm:"[Place] {で} [Verb]",ex:[["うち{で}テレビを見ます。","I watch TV at home."],["夏休みに、海{で}泳ぎました。","I swam in the sea in the summer holidays."]]},{n:"Means, tool, language",lv:"L5",fm:"[Tool／Transport／Language] {で} [Verb]",ex:[["ペン{で}名前を書きます。","I write my name with a pen."],["今日は、バス{で}学校へ来ました。","I came to school by bus today."],["これは日本語{で}何と言いますか。","What is this called in Japanese?"]]},{n:"Within a range — the most of all",lv:"L11",fm:"[Things] {の中で} … {いちばん}",ex:[["果物の中{で}ぶどうが一番好きです。","Of all fruit, I like grapes best."],["このクラスの中{で}一番背が高い人はだれですか。","Who is the tallest in this class?"]]}]},
     {h:"へ",uses:[{n:"Direction — towards",lv:"L5",fm:"[Place] {へ} {行きます}／{来ます}／{帰ります}",ex:[["冬休みに北海道{へ}行きます。","I’m going to Hokkaido in the winter holidays."],["6時にうち{へ}帰ります。","I go home at six."]]}]},
     {h:"と",uses:[{n:"And — the complete list",lv:"L2",fm:"[Noun] {と} [Noun]",ex:[["りんご{と}みかんをください。","Apples and mandarins, please."],["教室に、田中さん{と}リーさんがいます。","Mr. Tanaka and Lee are in the classroom."]]},{n:"With — together with someone",lv:"L5",fm:"[Person] {と}（いっしょに） [Verb]",ex:[["日曜日に友だち{と}（いっしょに）映画を見ました。","I watched a film with a friend on Sunday."],["電話で、友だち{と}話しました。","I talked with a friend on the phone."]]},{n:"Quotation — think, say, call",lv:"L12",fm:"[Plain form] {と} {思います}／{言います}",ex:[["日本語はむずかしい{と}思います。","I think Japanese is difficult."],["これは日本語で、はさみ{と}言います。","This is called hasami in Japanese."],["はじめまして。ジョナサンです。ジョン{と}呼んでください。","Nice to meet you. I’m Jonathan. Please call me John."]]},{n:"Whenever A, B — directions, nature, machines",lv:"L15",fm:"[Verb:dictionary form] {と}、[Result]",ex:[["まっすぐ行く{と}、郵便局があります。","Go straight and you’ll find the post office."]]}]},
     {h:"も",uses:[{n:"Also, too — replaces は／が／を",lv:"L1",fm:"[Noun] {も} …",ex:[["私は学生です。彼{も}学生です。","I’m a student. He is a student too."],["今朝、パンを食べました。サラダ{も}食べました。","I ate bread this morning. I ate salad too."]]},{n:"Question word + も + negative — nothing, nowhere, nobody",lv:"L5",fm:"{なにも}／{どこへも}／{だれも} [Verb:ます-stem] {ません}",ex:[["昨日はなに{も}食べませんでした。","I ate nothing yesterday."],["明日はどこへ{も}行きません。","I’m not going anywhere tomorrow."]]}]},
     {h:"の",uses:[{n:"Noun の noun — possession, kind",lv:"L1",fm:"[Noun] {の} [Noun]",ex:[["父{の}車は古いです。","My father’s car is old."],["これは私{の}本です。","This is my book."]]},{n:"Position — 上・下・前・となり",lv:"L7",fm:"[Noun] {の} {上}／{前}… {に}",ex:[["とけいは、机{の}上にあります。","The clock is on the desk."],["駅{の}前に、ラーメン屋があります。","There’s a ramen shop in front of the station."]]}]},
     {h:"か",uses:[{n:"Question — at the end of a sentence",lv:"L1",fm:"[Sentence] {か}",ex:[["ミンスさんはかんこく人です{か}。","Is Min-su Korean?"]]},{n:"Embedded question — whether, who, what",lv:"L23",fm:"[Plain form] {かどうか}／[Question word] … {か} {わかりません}",ex:[["来る{かどうか}わかりません。","I don’t know whether he’s coming."],["大使館はどこにある{か}知っていますか。","Do you know where the embassy is?"]]}]},
     {h:"から",uses:[{n:"From — a starting time or place",lv:"L4",fm:"[Start] {から} [End] {まで}",ex:[["ぎんこうは9じ{から}3じまでです。","The bank is open from 9 to 3."]]},{n:"Because, so — after a sentence",lv:"L12",fm:"[Reason] {から}、[Result]",ex:[["雨がふった{から}、家にいました。","It rained, so I stayed home."]]}]},
     {h:"まで",uses:[{n:"Until, as far as",lv:"L4",fm:"[End] {まで}",ex:[["Q：ぎんこうは なんじから なんじ{まで} ですか。","From what time until what time is the bank open?"],["しごとは、なんじ{まで}ですか。","Until what time is work?"]]}]},
     {h:"より",uses:[{n:"Than — comparison",lv:"L11",fm:"[A] {は} [B] {より} [Adj]",ex:[["先週は今週{より}忙しかったです。","Last week was busier than this week."]]}]},
     {h:"や・など",uses:[{n:"A, B and so on — a few examples out of more",lv:"L7",fm:"[Noun] {や} [Noun] {など}",ex:[["れいぞうこにビール{や}チーズ{など}があります。","In the fridge there’s beer, cheese and so on."],["へやにつくえ{と}いすがあります。（と = that’s all）","There is a desk and a chair in the room (and nothing else)."]]}]},
     {h:"だけ",vid:"LQFjqJo0Wjo",uses:[{n:"Only, just",lv:"L6",fm:"[Noun] {だけ}",ex:[["私はしゅうまつ{だけ}パンやでアルバイトします。","I work at the bakery only at weekends."],["一度{だけ}かぶきを見たことがあります。","I have seen kabuki only once."]]}]},
     {h:"しか",uses:[{n:"Only — always with a negative verb",lv:"L16",fm:"[Noun] {しか} [Verb:ます-stem] {ません}",ex:[["ウイスキーは少し{しか}飲めません。","I can drink only a little whisky."],["今日は500円{しか}持っていません。","I only have 500 yen today."]]}]},
     {h:"ごろ・ぐらい",vid:"0H74hgSySGE",uses:[{n:"ごろ — about a point in time",lv:"L5",fm:"[Point in time] {ごろ}",ex:[["7じ{ごろ}に あさごはんを たべます。","I eat breakfast at about seven."],["5がつ{ごろ} くにへ かえります。","I’ll go home around May."]]},{n:"ぐらい — about a length or amount",lv:"L5",fm:"[Duration／Quantity] {ぐらい}",ex:[["1じかん{ぐらい} ひるごはんを たべます。","I spend about an hour on lunch."],["3にん{ぐらい} きます。","About three people are coming."]]}]},
     {h:"について",vid:"_6a0S9ddXzQ",uses:[{n:"About, regarding a topic",lv:"L12",fm:"[Topic] {について} [Verb]",ex:[["日本{について} おしえてください。","Please tell me about Japan."],["日本の食べ物{について} どう おもいますか。","What do you think about Japanese food?"]]}]},
     {h:"ね・よ・な・かな",uses:[{n:"ね — the same feeling, checking",lv:"L2",fm:"[Sentence] {ね}",ex:[["いい天気です{ね}。","Nice weather, isn’t it."],["A：でんわばんごうは 3205-1356ですよ。 B：3205-1356です{ね}。どうも。","よ gives the number; ね repeats it to confirm."]]},{n:"よ — telling something the listener doesn’t know",lv:"L2",fm:"[Sentence] {よ}",ex:[["ぎんこうは 3時までです{よ}。","The bank is only open until three, you know."],["さっき、駅前でミンスに会った{よ}。","I just ran into Min-su in front of the station."]]},{n:"かな — wondering, asking yourself",lv:"L2",fm:"[Sentence] {かな}",ex:[["ミンス：2人…いや、3人…{かな}。","Two… no, three… I think?"],["明日は、寒い{かな}。","I wonder if it’ll be cold tomorrow."]]},{n:"な — talking to yourself (casual)",lv:"L19",fm:"[Plain form] {な}",ex:[["この漢字、覚えられない{な}。","I just can’t remember this kanji."],["今日は、暑かった{な}。","It was hot today."]]}]}],
   note:"は after another particle: を→は、へ→へは、で→では、に→には — when that part is contrasted (コーヒーは のみます。でも、おちゃは のみません。). Is something happening at the place? Yes → で, no (it just exists / you arrive there) → に.",
   imgs:["joshi-04.webp","joshi-05.webp","joshi-06.webp","joshi-07.webp","joshi-08.webp","joshi-09.webp","joshi-10.webp","joshi-11.webp","joshi-12.webp","joshi-13.webp","joshi-14.webp","joshi-15.webp","joshi-16.webp","joshi-17.webp","joshi-18.webp","ref-degoro-1.webp","ref-degoro-2.webp","ref-degoro-3.webp"],
   w:["助詞","じょし","particle"]},
  {sec:"疑問詞",kind:"subject",label:"Question words",jp:"疑問詞（ぎもんし）",lv:"",
   meaning:"Every question word with the lesson it comes from. A question word sits in the slot of the answer and keeps that slot’s particle: なにを、どこで、だれと、どこへ.",
   items:[
     {h:"なに・なん",uses:[{n:"What — なん before です・じ・がつ・にち・ようび・で, なに before を・が",lv:"L2",ex:[["これは{なん}ですか。いま{なん}じですか。","What is this? What time is it?"],["{なに}を しますか。{なに}が ありますか。","What will you do? What is there?"]]}]},
     {h:"だれ",uses:[{n:"Who — だれの (whose), だれと (with whom)",lv:"L3",ex:[["あの人は{だれ}ですか。{だれ}の ペンですか。","Who is that? Whose pen is it?"],["{だれ}と いきましたか。","Who did you go with?"]]}]},
     {h:"どこ",uses:[{n:"Where — どこの (made where), どこで (action), どこへ (direction)",lv:"L2",ex:[["トイレは{どこ}ですか。{どこ}の かばんですか。","Where is the toilet? Where is the bag from?"],["{どこ}で たべますか。{どこ}へ いきますか。","Where do you eat? Where are you going?"]]}]},
     {h:"いつ",uses:[{n:"When",lv:"L4",ex:[["たんじょうびは{いつ}ですか。{いつ}、きましたか。","When is your birthday? When did you come?"]]}]},
     {h:"いくら",uses:[{n:"How much (price)",lv:"L2",ex:[["これは{いくら}ですか。","How much is this?"]]}]},
     {h:"いくつ",uses:[{n:"How many (things) / how old",lv:"L7",ex:[["りんごが{いくつ} ありますか。","How many apples are there?"]]}]},
     {h:"どんな",uses:[{n:"What kind of",lv:"L3",ex:[["{どんな} くるまですか。","What kind of car is it?"],["{どんな}とき、タクシーに乗りますか。","When (in what situations) do you take a taxi?"]]}]},
     {h:"どう",uses:[{n:"How — an impression, present or past",lv:"L3",ex:[["クラスは{どう}ですか。しゅくだいは{どう}でしたか。","How is the class? How was the homework?"]]}]},
     {h:"どれ・どちら・どの",uses:[{n:"Which — どれ (one of many), どちら (of two), どの + noun",lv:"L2",ex:[["{どれ}が あなたの かさですか。","Which is your umbrella?"],["コーヒーと こうちゃと{どちら}が すきですか。","Which do you like better, coffee or tea?"],["{どの}人が吉田さんですか。","Which person is Ms. Yoshida?"]]}]},
     {h:"どのぐらい",uses:[{n:"How long, how far, how much",lv:"L10",ex:[["ここから横浜まで{どのぐらい}かかりますか。","How long does it take from here to Yokohama?"]]}]},
     {h:"どうやって・なんで",uses:[{n:"How — by what means",lv:"L10",ex:[["{どうやって} いきますか。＝ {なんで} いきますか。","How do you get there?"]]}]},
     {h:"どうして",uses:[{n:"Why — answered with 〜からです",lv:"L12",ex:[["{どうして}日本が好きですか。 — おもしろいからです。","Why do you like Japan? — Because it’s interesting."]]}]},
     {h:"＋も",uses:[{n:"Question word + も + negative — nothing, nowhere, nobody",lv:"L5",fm:"{なにも}／{どこへも}／{だれも} [Verb:ます-stem] {ません}",ex:[["{なにも} たべません。","I don’t eat anything."],["{どこへも} いきません。","I don’t go anywhere."],["{だれも} いません。","There is nobody."]]}]},
     {h:"＋か",uses:[{n:"Question word + か — something, somewhere, someone, some day",lv:"L19",fm:"{何か}／{どこか}／{だれか}／{いつか}",ex:[["あそこに{何か}います。","There’s something over there."],["{いつか}、ピラミッドを見に行きたいです。","Some day I want to see the pyramids."]]}]}],
   note:"Test format: pick the question word for a given answer — Q：トイレは（どこ）ですか。A：あそこです。",
   w:["疑問詞","ぎもんし","question word","なに","なん","だれ","どこ","いつ","いくら","いくつ","どんな","どう","どれ","どちら","どの","どのぐらい","どうやって","どうして"]},
  {sec:"助数詞",kind:"subject",label:"Counters",jp:"助数詞（じょすうし）",lv:"",vid:"wAHhZK91Gdk",
   meaning:"Which counter goes with which kind of thing, and the readings 1–10. ⚠ marks a sound change. Ordering food, つ always works. From the Lesson 7 counters handout and the 10/23 class 「数え方」.",
   items:[
     {h:"つ",uses:[{n:"Small and round things, and anything without its own counter — Q: いくつ",lv:"L7",ex:[["ひとつ・ふたつ・みっつ・よっつ・いつつ・むっつ・ななつ・やっつ・ここのつ・とお",""]]}]},
     {h:"こ 個",uses:[{n:"Small items: apples, eggs, erasers — Q: なんこ ⚠",lv:"L7",ex:[["いっこ・にこ・さんこ・よんこ・ごこ・ろっこ・ななこ・はっこ・きゅうこ・じゅっこ",""]]}]},
     {h:"ほん 本",uses:[{n:"Long thin things: pens, bottles, umbrellas, ties, flowers — Q: なんぼん ⚠",lv:"L7",ex:[["いっぽん・にほん・さんぼん・よんほん・ごほん・ろっぽん・ななほん・はっぽん・きゅうほん・じゅっぽん",""]]}]},
     {h:"まい 枚",uses:[{n:"Thin flat things: paper, tickets, shirts, CDs, plates — Q: なんまい",lv:"L7",ex:[["いちまい・にまい・さんまい・よんまい・ごまい・ろくまい・ななまい・はちまい・きゅうまい・じゅうまい",""]]}]},
     {h:"はい 杯",uses:[{n:"Cups, glasses, bowls: coffee, beer — Q: なんばい ⚠",lv:"L7",ex:[["いっぱい・にはい・さんばい・よんはい・ごはい・ろっぱい・ななはい・はっぱい・きゅうはい・じゅっぱい",""]]}]},
     {h:"にん 人",uses:[{n:"People — Q: なんにん ⚠",lv:"L7",ex:[["ひとり・ふたり・さんにん・よにん・ごにん・ろくにん・しちにん・はちにん・きゅうにん・じゅうにん",""]]}]},
     {h:"さつ 冊",uses:[{n:"Bound things: books, notebooks — Q: なんさつ ⚠",lv:"L7",ex:[["いっさつ・にさつ・さんさつ・よんさつ・ごさつ・ろくさつ・ななさつ・はっさつ・きゅうさつ・じゅっさつ",""]]}]},
     {h:"ひき 匹",uses:[{n:"Small animals, fish, insects — Q: なんびき ⚠",lv:"L13",ex:[["いっぴき・にひき・さんびき・よんひき・ごひき・ろっぴき・ななひき・はっぴき・きゅうひき・じゅっぴき",""]]}]},
     {h:"だい 台",uses:[{n:"Machines and vehicles: cars, computers — Q: なんだい",lv:"L13",ex:[["いちだい・にだい・さんだい・よんだい・ごだい・ろくだい・ななだい・はちだい・きゅうだい・じゅうだい",""]]}]},
     {h:"そく 足",uses:[{n:"Pairs of shoes and socks — Q: なんそく ⚠",lv:"L13",ex:[["いっそく・にそく・さんそく（さんぞく）・よんそく・ごそく・ろくそく・ななそく・はっそく・きゅうそく・じゅっそく",""]]}]},
     {h:"かい 階",uses:[{n:"Floors of a building — Q: なんがい ⚠",lv:"L13",ex:[["いっかい・にかい・さんがい・よんかい・ごかい・ろっかい・ななかい・はっかい・きゅうかい・じゅっかい",""]]}]},
     {h:"がつ 月",uses:[{n:"Months — Q: なんがつ ⚠",lv:"L4",ex:[["いちがつ・にがつ・さんがつ・しがつ・ごがつ・ろくがつ・しちがつ・はちがつ・くがつ・じゅうがつ・じゅういちがつ・じゅうにがつ",""]]}]},
     {h:"にち 日",uses:[{n:"Days of the month — Q: なんにち ⚠ (？月？日 → いつ)",lv:"L4",ex:[["ついたち・ふつか・みっか・よっか・いつか・むいか・なのか・ようか・ここのか・とおか",""],["じゅうよっか（14）・じゅうくにち（19）・はつか（20）・にじゅうよっか（24）・にじゅうくにち（29）",""]]}]}],
   note:"オーダーは「つ」でOK！ — ビール3つ、ラーメン1つ ください。 Tap any number word in the Words tab for the full counter tables, including 回・ヶ月・日間.",
   imgs:["ref-counter-1.webp","ref-counter-2.webp","ref-counter-3.webp","ref-counter-5.webp","ref-counter-6.webp","ref-counter-7.webp","ref-counter-4.webp"],
   w:["助数詞","じょすうし","counter","いくつ","なんこ","なんぼん","なんまい","なんばい","なんにん","なんさつ","なんびき","なんだい","なんそく","なんがい"]},
  {sec:"丁寧形",kind:"subject",label:"Polite forms",jp:"ていねいけい — です・ます",lv:"",
   formula:"[Noun]／[な-adj] {です}・{じゃありません}・{でした}・{じゃありませんでした}｜[い-adj:−い] {いです}・{くありません}・{かったです}・{くありませんでした}｜[Verb:ます-stem] {ます}・{ません}・{ました}・{ませんでした}",
   meaning:"One table for the four word types: present and past, positive and negative. Nouns and な-adjectives share a column; only い-adjectives change inside the word. This is the table the first-half test asks you to fill in.",
   hl:["です","じゃありません","でした","じゃありませんでした","いです","くありません","かったです","くありませんでした","ます","ません","ました","ませんでした","よくありません","よかったです","よくありませんでした"],
   rows:[{"jp":"がくせいです → がくせいじゃありません → がくせいでした → がくせいじゃありませんでした","en":"Noun"},{"jp":"べんりです → べんりじゃありません → べんりでした → べんりじゃありませんでした","en":"な-adjective — identical to the noun."},{"jp":"おいしいです → おいしくありません → おいしかったです → おいしくありませんでした","en":"い-adjective — the い changes."},{"jp":"いいです → よくありません → よかったです → よくありませんでした","en":"いい is the one irregular い-adjective."},{"jp":"たべます → たべません → たべました → たべませんでした","en":"Verb"}],
   note:"An adjective + noun phrase counts as a noun: いいてんきでした、×よかったてんき。",
   w:["です","じゃありません","でした","じゃありませんでした","ます","ません","ました","ませんでした","かったです","くありません","丁寧形","ていねいけい","polite form"]},
]},

{id:"L1",n:1,lvl:1,title:"はじめまして",en:"Lesson 1",goal:"The first sentence: [Noun] は [Noun] です — and how to ask, deny, and introduce yourself with it.",cards:[
  {sec:"1-1",kind:"expression",label:"Greetings",jp:"あいさつ",lv:"L1",
   formula:"{おはようございます}／{こんにちは}／{こんばんは}｜{はじめまして}。…{どうぞよろしくおねがいします}",
   meaning:"The set greetings of Lesson 1-1. Each one belongs to a moment of the day or a situation — learn them as whole phrases, not word by word.",
   hl:["おはようございます","こんにちは","こんばんは","おやすみなさい","さようなら","すみません","どうぞ","いただきます","ごちそうさまでした","はじめまして","おめでとうございます"],
   rows:[{"jp":"おはようございます。／ こんにちは。／ こんばんは。","en":"Good morning. / Hello (daytime). / Good evening."},{"jp":"おやすみなさい。／ さようなら。","en":"Good night. / Goodbye."},{"jp":"すみません。／ どうぞ。／ いいえ。","en":"Excuse me, sorry. / Please, go ahead. / No, not at all."},{"jp":"いただきます。／ ごちそうさまでした。","en":"Before eating. / After eating."},{"jp":"はじめまして。わたしは たなかです。どうぞよろしくおねがいします。","en":"Nice to meet you. I am Tanaka. Pleased to meet you."},{"jp":"おめでとうございます。","en":"Congratulations."}],
   w:["おはようございます","こんにちは","こんばんは","おやすみなさい","さようなら","すみません","どうぞ","いただきます","ごちそうさまでした","はじめまして","よろしくおねがいします","おめでとうございます"]},
  {sec:"1-1",kind:"expression",label:"Classroom phrases",jp:"きょうしつの ひょうげん",lv:"L1",vid:"q1FQZDWa0Z4",
   formula:"すみません、{もういちど} おねがいします｜すみません、{ゆっくり} おねがいします｜にほんごで {なんですか}",
   meaning:"What to say when you did not catch something, or need more time.",
   hl:["もういちど","ゆっくり","おねがいします","まってください","わかりません","にほんごで なんですか"],
   rows:[{"jp":"すみません、もういちど おねがいします。","en":"Sorry, once more please."},{"jp":"すみません、ゆっくり おねがいします。","en":"Sorry, more slowly please."},{"jp":"ちょっと まってください。","en":"Please wait a moment."},{"jp":"わかりました。／ わかりません。","en":"I understand. / I don’t understand."},{"jp":"にほんごで なんですか。","en":"What is it in Japanese?"}],
   w:["もういちど","ゆっくり","おねがいします","まってください","わかりました","わかりません","なんですか"]},
  {sec:"1-2",kind:"pattern",label:"N は N です",jp:"わたしは たなかです",lv:"L1",vid:"EEmWIzJg5GQ",
   formula:"[Topic] {は} [Noun] {です}",
   meaning:"The basic Japanese sentence. は marks the topic (what you are talking about); です closes the sentence politely.",
   hl:["です","わたしは","さんは","はじめまして","じんです","が すきです","どうぞ よろしくおねがいします"],
   rows:[{"jp":"わたしは がくせいです。","en":"I am a student."},{"jp":"わたしは にほんじんです。","en":"I am Japanese."},{"jp":"ミラーさんは かいしゃいんです。","en":"Mr./Ms. Miller is an office worker."},{"jp":"はじめまして。","en":"Nice to meet you."},{"jp":"わたしは ジャスティンです。","en":"I am Justin."},{"jp":"アメリカじんです。","en":"I am American."},{"jp":"がくせいです。","en":"I am a student."},{"jp":"すしが すきです。","en":"I like sushi."},{"jp":"どうぞ よろしくおねがいします。","en":"Pleased to meet you."}],
   note:"は as a particle is written は but pronounced わ. ★ポイント★ ①ぶんぽう grammar ②はつおん pronunciation ③ないよう content — the three things the report is marked on.",
   imgs:["1-2-1.webp","1-2-4.webp","ref-selfintro-2.webp","ref-selfintro-3.webp"],
   w:["わたし","がくせい","かいしゃいん","にほんじん","せんせい","です","はじめまして","じん","すきです","よろしくおねがいします","じこしょうかい"]},
  {sec:"1-2",kind:"question",label:"Is it …? — Yes / No",jp:"〜ですか ／ はい・いいえ",lv:"L1",vid:"qpYJ1bo6syU",
   formula:"Q: [Topic] {は} [Noun] {ですか}｜A: はい、[Noun] {です}｜A: いいえ、[Noun] {じゃありません}",
   meaning:"Add か to the end of a sentence to make it a question. Answer with はい (yes) or いいえ + じゃありません (no).",
   hl:["ですか","はい、","いいえ、","じゃありません"],
   rows:[{"jp":"Q：ミンスさんは かんこく人ですか。","en":"Is Min-su Korean?"},{"jp":"A：はい、かんこく人です。","en":"Yes, he is Korean."},{"jp":"Q：ミシェルさんは かいしゃいんですか。","en":"Is Michelle an office worker?"},{"jp":"A：いいえ、かいしゃいんじゃありません。がくせいです。","en":"No, she is not an office worker. She is a student."}],
   note:"じゃありません is the polite spoken negative. In writing you may also see ではありません.",
   imgs:["1-2-2.webp","1-2-3.webp"],
   w:["はい","いいえ","ですか","じゃありません","ではありません"]},
]},

{id:"L2",n:2,lvl:1,title:"いくらですか",en:"Lesson 2",goal:"Pointing at things: これ・それ・あれ, この・その・あの, どこの — and asking what, how much, and which number.",cards:[
  {sec:"2-1",kind:"question",label:"Phone numbers",jp:"でんわばんごう",lv:"L2",vid:"wDIPlAZKsAM",
   formula:"Q: [Person] {の} でんわばんごう {は} {なんばん} {ですか}｜A: 03 {の} 3205 {の} 1356 {です}",
   meaning:"Read a phone number digit by digit and put の where the hyphen is. Use なんばん to ask which number.",
   hl:["なんばんですか"],
   rows:[{"jp":"080 の 3462 の 9751 です。","en":"080-3462-9751."},{"jp":"Q：でんわばんごうは なんばんですか。","en":"What is your phone number?"},{"jp":"A：03 の 3328 の 9543 です。","en":"It is 03-3328-9543."}],
   note:"0＝ゼロ／れい、4＝よん、7＝なな、9＝きゅう when reading numbers aloud. If you miss it: すみません、もういちどおねがいします。／ すみません、ゆっくりおねがいします。",
   imgs:["2-1-2.webp","2-1-3.webp"],
   w:["でんわばんごう","なんばん","ゼロ","れい","もういちど","ゆっくり"]},
  {sec:"2-2",kind:"pattern",label:"これ・それ・あれ",jp:"これ・それ・あれ",lv:"L2",vid:"hLbhziVKHBY",
   formula:"{これ}／{それ}／{あれ} {は} [Noun] {です}",
   meaning:"Three demonstratives that stand alone as nouns: これ = near me, それ = near you, あれ = away from both of us.",
   hl:["これ","それ","あれ"],
   rows:[{"jp":"これは りんごです。","en":"This is an apple."},{"jp":"それは シャンプーですか。","en":"Is that (near you) shampoo?"},{"jp":"あれは ホテルです。","en":"That over there is a hotel."}],
   imgs:["2-2-1.webp"],
   w:["これ","それ","あれ","どれ"]},
  {sec:"2-2",kind:"question",label:"What is this?",jp:"〜は なんですか",lv:"L2",vid:"hvtCiKBAHbU",
   formula:"Q: {これ}／{それ}／{あれ} {は} {なん} {ですか}｜A: [Noun] {です}",
   meaning:"なん = what. Use it in the noun slot to ask what something is.",
   hl:["なんですか","にほんごで"],
   rows:[{"jp":"Q：それは なんですか。","en":"What is that?"},{"jp":"A：（これは）りんごです。","en":"It is an apple."},{"jp":"Q：にほんごで なんですか。","en":"What is it in Japanese?"}],
   note:"In the answer you can drop これは and just say りんごです。",
   imgs:["2-2-3.webp","2-3-2.webp"],
   w:["なん","なに","これ","それ","あれ"]},
  {sec:"2-3",kind:"question",label:"How much is it?",jp:"いくらですか",lv:"L2",vid:"lKBNwlo3Woo",
   formula:"Q: [Noun] {は} {いくら} {ですか}｜A: [Number] {えん} {です}",
   meaning:"いくら asks the price. Answer with the number + えん.",
   hl:["いくらですか","えんです"],
   rows:[{"jp":"Q：このかさは いくらですか。","en":"How much is this umbrella?"},{"jp":"A：1200えんです。","en":"It is 1,200 yen."}],
   note:"Watch the sound changes: 300＝さんびゃく、600＝ろっぴゃく、800＝はっぴゃく、3000＝さんぜん、8000＝はっせん。",
   imgs:["2-4-4.webp"],
   w:["いくら","えん","ひゃく","せん","まん"]},
  {sec:"2-3",kind:"pattern",label:"Please give me …",jp:"〜と〜を ください",lv:"L2",vid:"LJwdlTnmzyQ",
   formula:"[Noun] {と} [Noun] {を} {ください}",
   meaning:"Ask for things in a shop. と joins two nouns (“and”); を marks what you want; ください = please give me. Add a number with a counter after the noun in Lesson 7.",
   hl:["を ください","いくらですか","どこの","それは","これを","ください"],
   rows:[{"jp":"りんごと バナナを ください。","en":"An apple and a banana, please."},{"jp":"これを ください。","en":"This one, please."},{"jp":"すみません、水を ください。","en":"Excuse me, water please."},{"jp":"A：すみません、（この）とけいは（いくらですか）。","en":"Excuse me, how much is this watch?"},{"jp":"B：ああ、それは（12,000）円です。","en":"Ah, that one is 12,000 yen."},{"jp":"A：そうですか。どこのとけいですか。","en":"I see. Where is the watch from?"},{"jp":"B：スイスのとけいです。","en":"It is a Swiss watch."},{"jp":"A：じゃあ、これを（ください）。","en":"Then I’ll take this one, please."},{"jp":"B：はい。ありがとうございました。","en":"Certainly. Thank you very much."},{"jp":"A：りんごと バナナを ください。","en":"An apple and a banana, please."},{"jp":"B：はい。","en":"Certainly."},{"jp":"A：いくらですか。","en":"How much is it?"},{"jp":"B：370えんです。","en":"370 yen."}],
   imgs:["2-3-4.webp","2-4-5.webp"],
   w:["ください","と","を","りんご","バナナ","いくらですか","どこの","とけい"]},
  {sec:"2-4",kind:"pattern",label:"この・その・あの ＋ N",jp:"この・その・あの ＋ Noun",lv:"L2",vid:"hRTO7EwVzww",
   formula:"{この}／{その}／{あの} [Noun] {は} … {です}",
   meaning:"Same three distances as これ・それ・あれ, but these must be followed by a noun.",
   hl:["この","いくらですか"],
   rows:[{"jp":"このかさは 1200えんです。","en":"This umbrella is 1,200 yen."},{"jp":"Q：このゆびわは いくらですか。","en":"How much is this ring?"},{"jp":"A：30000えんです。","en":"It is 30,000 yen."}],
   note:"これ = a pronoun (stands alone). この = a modifier (always + noun). Never say ×これかさ.",
   imgs:["2-4-2.webp","3-1-1.webp"],
   w:["この","その","あの","どの"]},
  {sec:"2-5",kind:"question",label:"Where is it from?",jp:"どこの N",lv:"L2",vid:"9J4FL1CbXTg",
   formula:"[Noun] {は} [Country] {の} [Noun] {です}｜Q: 〜{は} {どこの} [Noun] {ですか}",
   meaning:"の links two nouns. [Country] の [Noun] = a [Noun] from [Country]. どこの asks which country / maker.",
   hl:["どこの","にほんの","イタリアの"],
   rows:[{"jp":"これは にほんの くるまです。","en":"This is a Japanese car."},{"jp":"Q：それは どこの くるまですか。","en":"Where is that car from?"},{"jp":"A：イタリアの くるまです。","en":"It is an Italian car."}],
   imgs:["2-5-3.webp","2-5-4.webp","3-1-3.webp"],
   w:["どこの","どこ","にほん","イタリア","スイス"]},
]},

{id:"L3",n:3,lvl:1,title:"アパート",en:"Lesson 3",goal:"Describing things: the two adjective families, how each stands before a noun, and asking どうですか・どんな.",cards:[
  {sec:"3-1",kind:"question",label:"Whose is it?",jp:"だれの N",lv:"L3",vid:"J6ziVrPQAv8",
   formula:"[Noun] {は} [Person] {の} [Noun] {です}｜Q: 〜{は} {だれの} [Noun] {ですか}｜A: [Person] {の} {です}",
   meaning:"The same の as 2-5, but with a person: [Person] の [Noun] = someone’s thing. だれの asks whose.",
   hl:["だれの","さとうさんの"],
   rows:[{"jp":"これは さとうさんの ぼうしです。","en":"This is Mr./Ms. Sato’s hat."},{"jp":"Q：それは だれの ぼうしですか。","en":"Whose hat is that?"},{"jp":"A：さとうさんの（ぼうし）です。","en":"It is Sato’s."}],
   note:"You can drop the repeated noun: さとうさんのです。",
   w:["だれの","だれ","わたしの","の"]},
  {sec:"3-2",kind:"form",label:"い-adjectives",jp:"い形容詞",lv:"L3",vid:"rocwClXue_c",
   formula:"[Noun] {は} [い-adj] {です}｜[Noun] {は} [い-adj:−い] {くありません}",
   meaning:"い-adjectives end in い. Positive: 〜いです。 Negative: drop い → 〜くありません。",
   hl:["いです","くありません"],
   rows:[{"jp":"このねこは 小さいです。","en":"This cat is small."},{"jp":"おおきい → おおきくありません","en":"big → is not big"},{"jp":"このテストは むずかしいです。","en":"This test is difficult."}],
   note:"※いい is irregular: いいです → よくありません（×いくありません）。",
   imgs:["3-2-2.webp"],
   w:["おおきい","ちいさい","たかい","やすい","あたらしい","ふるい","おいしい","むずかしい","いい","よくありません"]},
  {sec:"3-2",kind:"question",label:"How is it?",jp:"〜は どうですか",lv:"L3",vid:"Gcc2Sr1MzPA",
   formula:"Q: [Noun] {は} {どう} {ですか}｜A: [Adj] {です}",
   meaning:"Ask for an impression. Answer with an adjective.",
   hl:["どうですか","いですか","はい、おいしいです","むずかしいです"],
   rows:[{"jp":"Q：にほんごは どうですか。","en":"How is Japanese (for you)?"},{"jp":"A：むずかしいです。","en":"It is difficult."},{"jp":"Q：このケーキは おいしいですか。 A：はい、おいしいです。","en":"Is this cake tasty? — Yes, it is."}],
   imgs:["3-2-3.webp","3-2-4.webp"],
   w:["どう","どうですか","とても","あまり"]},
  {sec:"3-3",kind:"form",label:"な-adjectives",jp:"な形容詞",lv:"L3",vid:"ztJSKEM1xDc",
   formula:"[Noun] {は} [な-adj] {です}｜[Noun] {は} [な-adj] {じゃありません}",
   meaning:"な-adjectives behave like nouns. Positive: 〜です。 Negative: 〜じゃありません。",
   hl:["じゃありません","しずかです","しんせつです"],
   rows:[{"jp":"このこうえんは しずかです。","en":"This park is quiet."},{"jp":"このこうえんは しずかじゃありません。","en":"This park is not quiet."},{"jp":"かれは しんせつです。","en":"He is kind."}],
   note:"とても = very. Put it before the adjective: とても大きいです。",
   imgs:["3-3-1.webp"],
   w:["しずか","きれい","しんせつ","べんり","げんき","ゆうめい","にぎやか","ひま","じゃありません"]},
  {sec:"3-4",kind:"pattern",label:"Adjective ＋ Noun",jp:"Adj ＋ Noun",lv:"L3",vid:"sPtonzSZzPE",
   formula:"[い-adj] [Noun]｜[な-adj] {な} [Noun]",
   meaning:"Put the adjective in front of the noun. い-adjectives attach directly; な-adjectives need な.",
   hl:["やすいくるま","くろいかばん","きれいな","べんりな"],
   rows:[{"jp":"やすいくるまです。","en":"It is a cheap car."},{"jp":"くろいかばんです。","en":"It is a black bag."},{"jp":"きれいな ひとです。","en":"She is a beautiful person."},{"jp":"べんりな でんわです。","en":"It is a convenient phone."}],
   imgs:["3-4-1.webp","3-4-2.webp"],
   w:["な","やすい","くろい","きれいな","べんりな"]},
  {sec:"3-4",kind:"question",label:"What kind of …?",jp:"どんな N ですか",lv:"L3",vid:"RIyiCg8xaIU",
   formula:"Q: [Noun] {は} {どんな} [Noun] {ですか}｜A: [い-adj] [Noun] {です}／[な-adj] {な} [Noun] {です}",
   meaning:"どんな asks what kind of thing it is. The answer is an adjective + the noun.",
   hl:["どんな","くるまですか","がっこうですか","あたらしい くるま","きれいな くるま"],
   rows:[{"jp":"Q：Aさんのくるまは どんな くるまですか。","en":"What kind of car is A’s car?"},{"jp":"A：あたらしい くるまです。／ きれいな くるまです。","en":"It is a new car. / It is a clean car."},{"jp":"Q：カイスクールは どんながっこうですか。","en":"What kind of school is KAI?"}],
   imgs:["3-4-4.webp","3-4-3.webp"],
   w:["どんな","あたらしい","きれいな","ひと","くるま","がっこう"]},
  {sec:"3-4",kind:"pattern",label:"And / but",jp:"そして・でも",lv:"L3",vid:"uY8GnjnYLHM",
   formula:"[Sentence]。{そして}、[Sentence]。｜[Sentence]。{でも}、[Sentence]。",
   meaning:"Two sentence openers. そして adds a second point in the same direction (“and also”); でも turns against the first one (“but”). Both start the second sentence; the first sentence ends with です／ます as usual.",
   hl:["そして、","でも、"],
   rows:[{"jp":"彼女は きれいです。そして、しんせつです。","en":"She is beautiful. And she is kind."},{"jp":"私のかばんは ちいさいです。でも、おもいです。","en":"My bag is small. But it is heavy."},{"jp":"あのレストランは おいしいです。そして、やすいです。","en":"That restaurant is good. And it is cheap."},{"jp":"しんじゅくは おもしろいです。でも、うるさいです。","en":"Shinjuku is interesting. But it is noisy."}],
   note:"The third opener, それから (“after that”), joins actions in time — see 5-4. Test question: pick そして・でも・それから for the blank.",
   w:["そして","でも","それから"]},
]},

{id:"L4",n:4,lvl:1,title:"スケジュール",en:"Lesson 4",goal:"The clock and the calendar: なんじ, から〜まで, how many minutes, days of the week, dates, and asking someone’s schedule.",cards:[
  {sec:"4-1",kind:"question",label:"What time is it?",jp:"いま、なんじですか",lv:"L4",vid:"OS9QtmnI39k",
   formula:"Q: いま、{なんじ} {ですか}｜A: ◯{じ} ◯{ふん} {です}",
   meaning:"Times are [number]じ [number]ふん. 30 minutes = はん.",
   hl:["なんじですか","じです","さんじゅっぷん","はん"],
   rows:[{"jp":"Q：すみません、いま、なんじですか。","en":"Excuse me, what time is it now?"},{"jp":"A：ええっと、12じです。","en":"Um… it is 12 o’clock."},{"jp":"0：30 → さんじゅっぷん ＝ はん","en":"30 minutes = \"half\""},{"jp":"A：どうも ありがとうございました。 B：いいえ。","en":"Thank you very much. — Not at all."}],
   note:"Sound changes: 4じ＝よじ、7じ＝しちじ、9じ＝くじ；1ぷん・3ぷん・4ふん・6ぷん・8ぷん・10ぷん。",
   imgs:["4-1-2.webp","4-1-3.webp","4-1-4.webp"],
   w:["なんじ","じ","ふん","ぷん","はん","いま","ごぜん","ごご"]},
  {sec:"4-2",kind:"pattern",label:"From … until …",jp:"〜から 〜まで",lv:"L4",vid:"j9-1J6JmbAA",
   formula:"[Start] {から} [End] {まで} {です}｜Q: {なんじから} {なんじまで} {ですか}",
   meaning:"から = starting point, まで = ending point. Used together for opening hours and schedules.",
   hl:["なんじから","なんじまで","じから","じまで","からです","までです","ませんか","じゃあ"],
   rows:[{"jp":"Q：ぎんこうは なんじから なんじまで ですか。","en":"From what time until what time is the bank open?"},{"jp":"A：9じから 3じまで です。","en":"From 9:00 until 3:00."},{"jp":"Q：なんじからですか。 A：11じ40ぷんからです。","en":"From what time? — From 11:40."},{"jp":"Q：えいがは なんじからですか。","en":"What time does the film start?"},{"jp":"Q：ゆうびんきょくは なんじから なんじまでですか。","en":"From what time to what time is the post office open?"},{"jp":"A：しごとは、なんじまでですか。","en":"Until what time is your work?"},{"jp":"B：19じまでです。","en":"Until 7 p.m."},{"jp":"A：にちようび、えいがを みませんか。","en":"Would you like to see a film on Sunday?"},{"jp":"B：にちようびは、しごとです…。","en":"Sunday I have work…"},{"jp":"A：じゃあ、どようびは？","en":"Then how about Saturday?"},{"jp":"B：どようびは、だいじょうぶです。","en":"Saturday is fine."},{"jp":"Q：〇〇さん、アメリカのぎんこうは なんじからですか。","en":"What time do banks open in the USA?"},{"jp":"A：＿＿からです。","en":"They open at ＿＿."},{"jp":"Q：なんじまでですか。","en":"Until what time?"},{"jp":"A：＿＿までです。","en":"Until ＿＿."},{"jp":"Q：そうですか。ありがとうございます。","en":"I see. Thank you."}],
   imgs:["4-2-1.webp","4-2-4.webp","4-3-2.webp","4-3-3.webp"],
   w:["から","まで","なんじから","なんじまで","ぎんこう","しごと","ませんか","じゃあ","えいが","だいじょうぶ"]},
  {sec:"4-3",kind:"question",label:"How many minutes from A to B?",jp:"〜から〜まで なんぷんですか",lv:"L4",
   formula:"Q: [Place] {から} [Place] {まで} {なんぷん}／{なんじかん} {ですか}｜A: ◯{ぷん}／◯{じかん} {です}",
   meaning:"The same から〜まで, now measuring the stretch between two places. なんぷん asks the minutes, なんじかん the hours; どのぐらい asks either. Add ぐらい for “about”.",
   hl:["なんぷんですか","なんじかんですか","どのぐらいですか","ぷんです","じかんです","ぐらい"],
   rows:[{"jp":"Q：うちから えきまで なんぷんですか。 A：30ぷんです。","en":"How many minutes from home to the station? — 30 minutes."},{"jp":"Q：とうきょうから きょうとまで なんじかんですか。 A：3じかんです。","en":"How many hours from Tokyo to Kyoto? — 3 hours."},{"jp":"Q：がっこうから コンビニまで どのぐらいですか。 A：5ふんぐらいです。","en":"About how far from school to the convenience store? — About 5 minutes."},{"jp":"Q：あなたのくにから 日本まで なんじかんですか。","en":"How many hours from your country to Japan?"}],
   note:"Minute readings: 1ぷん・3ぷん・4ふん・6ぷん・8ぷん・10ぷん. In Lesson 10 the same question gets a verb: どのぐらい かかりますか。",
   imgs:["4-3-1.webp"],
   w:["なんぷん","なんじかん","どのぐらい","ぐらい","ふん","じかん","から","まで"]},
  {sec:"4-4",kind:"question",label:"What day of the week?",jp:"なんようび",lv:"L4",vid:"ZWIUC7J80Yo",
   formula:"Q: [Event] {は} {なんようび} {ですか}｜A: ◯{ようび} {です}",
   meaning:"The seven 曜日 plus なんようび to ask which day.",
   hl:["なんようびですか","ようびです","ようび"],
   rows:[{"jp":"げつようび・かようび・すいようび・もくようび・きんようび・どようび・にちようび","en":"Mon · Tue · Wed · Thu · Fri · Sat · Sun"},{"jp":"Q：テストは なんようびですか。 A：すいようびです。","en":"What day is the test? — Wednesday."}],
   imgs:["4-4-1.webp"],
   w:["なんようび","げつようび","かようび","すいようび","もくようび","きんようび","どようび","にちようび"]},
  {sec:"4-5",kind:"question",label:"What month, what day, when?",jp:"なんがつ・なんにち・いつ",lv:"L4",vid:"_gdwLTkhIoE",
   formula:"Q: [Event] {は} {なんがつ}／{なんにち}／{いつ} {ですか}｜A: ◯{がつ} ◯{にち} {です}｜Q: {いつ}、[Verb:ます-form]{か}",
   meaning:"なんがつ asks the month, なんにち the day of the month, いつ asks \"when\" in general — either as いつですか or as いつ、Vますか.",
   hl:["いつですか","なんがつ","がつ","にちです","いつ、"],
   rows:[{"jp":"Q：たんじょうびは いつですか。","en":"When is your birthday?"},{"jp":"A：5がつ22にちです。","en":"It is May 22nd."},{"jp":"Q：なつやすみは なんがつからですか。","en":"What month does summer holiday start?"},{"jp":"Q：いつ、きましたか。 A：先月、きました。","en":"いつ + verb — when did you come? — Last month."},{"jp":"Q：いつ、くにへ かえりますか。 A：来年の4月に かえります。","en":"When do you go home? — In April next year."}],
   note:"Irregular days: 1日ついたち・2日ふつか・3日みっか・4日よっか・5日いつか・6日むいか・7日なのか・8日ようか・9日ここのか・10日とおか・14日じゅうよっか・20日はつか。",
   imgs:["4-5-1.webp","4-5-2.webp","4-5-4.webp","4-4-2.webp"],
   w:["いつ","なんがつ","なんにち","がつ","にち","たんじょうび","ついたち","ふつか","はつか"]},
]},

{id:"L5",n:5,lvl:1,title:"カイさんの毎日",en:"Lesson 5",goal:"Verbs arrive: を for the object, で for the place, へ for the direction, に for the time — and how often you do it.",cards:[
  {sec:"5-1",kind:"pattern",label:"Object ＋ verb",jp:"〜を [Verb]ます",lv:"L5",vid:"k2lJ87F10Co",
   formula:"[Topic] {は} [Object] {を} [Verb:ます-form]",
   meaning:"を marks the object the action is done to. The verb comes last.",
   hl:["を 食べます","を 飲みます","を 話します"],
   rows:[{"jp":"私は ケーキを 食べます。","en":"I eat cake."},{"jp":"田中さんは コーヒーを 飲みます。","en":"Mr. Tanaka drinks coffee."},{"jp":"彼女は 英語を 話します。","en":"She speaks English."}],
   note:"[〜をします] verbs: べんきょうをします、しごとをします、テニスをします、そうじをします。",
   imgs:["5-1-1.webp"],
   w:["を","たべます","のみます","よみます","かきます","ききます","はなします","かいます","します","みます"]},
  {sec:"5-1",kind:"question",label:"Do you …?",jp:"〜ますか ／ 〜ません",lv:"L5",vid:"mSB6CwdYXjs",
   formula:"Q: [Object] {を} [Verb:ます-stem] {ますか}｜A: はい、[Verb:ます-stem] {ます}｜A: いいえ、[Verb:ます-stem] {ません}",
   meaning:"Question = ますか. Negative answer = ません.",
   hl:["ますか","ます。","ません","はい、","いいえ、"],
   rows:[{"jp":"Q：コーヒーを のみますか。 A：はい、のみます。","en":"Do you drink coffee? — Yes, I do."},{"jp":"Q：なっとうを たべますか。 A：いいえ、たべません。","en":"Do you eat natto? — No, I don’t."}],
   imgs:["5-1-2.webp","5-2-2.webp"],
   w:["ますか","ません","はい","いいえ"]},
  {sec:"5-1",kind:"question",label:"What do you do?",jp:"なにを しますか",lv:"L5",vid:"jxNwnuIytAA",
   formula:"Q: [Topic] {は} {なにを} [Verb:ます-stem] {ますか}｜A: [Object] {を} [Verb:ます-form]",
   meaning:"なに in the object slot asks what someone does.",
   hl:["なにを しますか","みます","いきます"],
   rows:[{"jp":"Q：あした、なにを しますか。 A：えいがを みます。","en":"What will you do tomorrow? — I’ll watch a film."},{"jp":"Q：しゅうまつ、なにを しますか。 A：しごとへ いきます。","en":"What will you do at the weekend? — I go to work."}],
   imgs:["5-1-3.webp"],
   w:["なに","なにを","します","あした","しゅうまつ","こんばん"]},
  {sec:"5-2",kind:"pattern",label:"Where it happens",jp:"〜で [Verb]ます",lv:"L5",vid:"bqsZxKOPXIE",
   formula:"[Place] {で} [Object] {を} [Verb:ます-form]｜Q: {どこで} [Verb:ます-stem] {ますか}",
   meaning:"で marks where an action happens. どこで asks where.",
   hl:["どこで","うちで","としょかんで","で よみます"],
   rows:[{"jp":"うちで しゅくだいを します。","en":"I do homework at home."},{"jp":"Q：どこで ごはんを たべますか。 A：うちで たべます。","en":"Where do you eat? — At home."},{"jp":"Q：どこで よみますか。 A：としょかんで よみます。","en":"Where do you read? — At the library."}],
   imgs:["5-2-4.webp"],
   w:["で","どこで","うち","としょかん","きっさてん","がっこう"]},
  {sec:"5-3",kind:"pattern",label:"Going, coming, going home",jp:"〜へ いきます・きます・かえります",lv:"L5",vid:"OFCX8VdbayA",
   formula:"[Place] {へ} {いきます}／{きます}／{かえります}｜Q: {どこへ} {いきますか}",
   meaning:"へ marks the destination of movement. Used with いきます / きます / かえります.",
   hl:["へ 行きます","へ 来ます","へ かえります","北海道へ"],
   rows:[{"jp":"私は レストランへ 行きます。","en":"I go to a restaurant."},{"jp":"私は 学校へ 来ます。","en":"I come to school."},{"jp":"彼は うちへ かえります。","en":"He returns home."},{"jp":"北海道へ ひこうきで 行きます。","en":"I go to Hokkaido by plane."}],
   note:"へ as a particle is written へ but pronounced え. に can replace it for movement.",
   imgs:["5-3-4.webp"],
   w:["へ","どこへ","いきます","きます","かえります","でんしゃで","ひこうきで"]},
  {sec:"5-4",kind:"pattern",label:"At a time, and after that",jp:"〜に [Verb]ます・それから",lv:"L5",vid:"z268DnNvvQo",
   formula:"[Time] {に} [Verb:ます-form]｜[Sentence]。{それから}、[Sentence]。｜Q: {なんじに} [Verb:ます-stem] {ますか}",
   meaning:"に marks a specific clock time or date. それから links the next action (\"after that\").",
   hl:["時に おきます","時に ねます","それから、","へ 行きます"],
   rows:[{"jp":"私は 7時に おきます。","en":"I get up at 7:00."},{"jp":"私は 10時に ねます。","en":"I go to bed at 10:00."},{"jp":"彼女はひるごはんを 食べます。それから、こうえんへ 行きます。","en":"She eats lunch. After that, she goes to the park."}],
   note:"に is NOT used with まいにち・あした・きのう・きょう・けさ・こんばん。",
   imgs:["5-4-2.webp"],
   w:["に","なんじに","それから","おきます","ねます","まいにち","あした","きょう","けさ","こんばん"]},
  {sec:"5-5",kind:"pattern",label:"How often",jp:"よく・ときどき・あまり・ぜんぜん",lv:"L5",vid:"Cw1NqcHrVQA",
   formula:"{よく}／{まいにち}／{ときどき} [Verb:ます-form]｜{あまり}／{ぜんぜん} [Verb:ます-stem] {ません}",
   meaning:"Frequency adverbs. あまり and ぜんぜん must be followed by a negative verb.",
   hl:["よく","まいにち","ときどき","あまり","ぜんぜん","ません"],
   rows:[{"jp":"Q：よく えいがを みますか。","en":"Do you often watch films?"},{"jp":"A：はい、よく みます。／ まいにち みます。／ ときどき みます。","en":"Yes, often. / Every day. / Sometimes."},{"jp":"A：いいえ、あまり みません。／ ぜんぜん みません。","en":"No, not very often. / Not at all."}],
   imgs:["5-5-2.webp","5-5-3.webp","5-5-4.webp"],
   w:["よく","まいにち","ときどき","あまり","ぜんぜん","ません"]},
]},

{id:"L6",n:6,lvl:1,title:"旅行",en:"Lesson 6",goal:"Talking about yesterday: past forms of verbs, adjectives and nouns, and asking どうでしたか.",cards:[
  {sec:"6-1",kind:"form",label:"Verb past",jp:"〜ました ／ 〜ませんでした",lv:"L6",vid:"EHJF92bKjHk",
   formula:"[Verb:ます-stem] {ました}｜[Verb:ます-stem] {ませんでした}",
   meaning:"Past of a ます-verb: ました (did) and ませんでした (did not).",
   hl:["ませんでした","ました"],
   rows:[{"jp":"ゆうべ、ラーメンを たべました。","en":"Last night I ate ramen."},{"jp":"きのう、がっこうへ いきませんでした。","en":"Yesterday I did not go to school."},{"jp":"せんしゅう、えいがを みました。","en":"Last week I watched a film."}],
   note:"Time words: おととい・きのう・きょう・あした・あさって／せんしゅう・こんしゅう・らいしゅう／せんげつ・こんげつ・らいげつ／きょねん・ことし・らいねん。",
   imgs:["6-1-1.webp","6-2-1.webp"],
   w:["ました","ませんでした","きのう","ゆうべ","せんしゅう","せんげつ","きょねん","おととい"]},
  {sec:"6-2",kind:"form",label:"い-adjective past",jp:"〜かったです ／ 〜くありませんでした",lv:"L6",vid:"RiXd1exyZq8",
   formula:"[い-adj:−い] {かったです}｜[い-adj:−い] {くありませんでした}",
   meaning:"い-adjectives: drop い → かったです (past) / くありませんでした (past negative).",
   hl:["くありませんでした","かったですか","かったです"],
   rows:[{"jp":"パーティは たのしかったですか。","en":"Was the party fun?"},{"jp":"てんきは よくありませんでした。","en":"The weather was not good."},{"jp":"※いい → よかったです ／ よくありませんでした","en":"いい is irregular."}],
   imgs:["6-2-2.webp"],
   w:["かったです","くありませんでした","たのしい","おいしい","いい","よかった","よくありませんでした"]},
  {sec:"6-2",kind:"form",label:"な-adjective & noun past",jp:"〜でした ／ 〜じゃありませんでした",lv:"L6",vid:"2ihynvRTGps",
   formula:"[な-adj]／[Noun] {でした}｜[な-adj]／[Noun] {じゃありませんでした}",
   meaning:"な-adjectives and nouns take でした / じゃありませんでした in the past.",
   hl:["じゃありませんでした","じゃありません","でした"],
   rows:[{"jp":"ホテルのスタッフは しんせつでした。","en":"The hotel staff were kind."},{"jp":"きのうは、げんきじゃありませんでした。","en":"Yesterday I was not well."},{"jp":"2000年、わたしは がくせいでした。今は がくせいじゃありません。","en":"In 2000 I was a student. Now I am not."}],
   note:"な-adjectives and nouns take でした / じゃありませんでした in the past. An adjective + noun phrase counts as a noun: いいてんきでした ／ いいてんきじゃありませんでした（×よかったてんき）。",
   imgs:["6-1-2.webp","6-1-3.webp"],
   w:["でした","じゃありませんでした","げんき","しんせつ","がくせい","てんき"]},
  {sec:"6-2",kind:"question",label:"How was it?",jp:"〜は どうでしたか",lv:"L6",vid:"ihS4jidYjxg",
   formula:"Q: [Noun] {は} {どう} {でしたか}｜A: [い-adj:−い] {かったです}／[な-adj] {でした}",
   meaning:"Ask for an impression of something that has already happened.",
   hl:["どうでしたか","くありませんでした","どうですか","かったです","どこへ","いきましたか","なんにちかん","なにで","どこから","どのぐらい","いくら","だれと","なにを","しましたか","たべましたか"],
   rows:[{"jp":"Q：パーティは どうでしたか。 A：たのしかったです。","en":"How was the party? — It was fun."},{"jp":"Q：てんきは どうでしたか。 A：よくありませんでした。","en":"How was the weather? — It was not good."},{"jp":"Q：日本語のべんきょうは どうですか。","en":"How is studying Japanese?"},{"jp":"Ａ：しゅうまつ、かまくらへ いきました。","en":"At the weekend I went to Kamakura."},{"jp":"あなた：いいですね。なんにちかんですか。","en":"Nice. How many days?"},{"jp":"Ａ：ふつかかんです。","en":"Two days."},{"jp":"あなた：なにで いきましたか。","en":"How did you get there?"},{"jp":"Ａ：でんしゃで いきました。しんじゅくえきから いきました。","en":"By train. From Shinjuku station."},{"jp":"あなた：どのぐらいですか。／ いくらでしたか。","en":"How long? / How much was it?"},{"jp":"Ａ：1じかんはんぐらいです。1000えんぐらいでした。","en":"About an hour and a half. About 1,000 yen."},{"jp":"あなた：だれと いきましたか。","en":"Who did you go with?"},{"jp":"Ａ：アンドリューさんと いきました。","en":"With Andrew."},{"jp":"あなた：てんきは どうでしたか。","en":"How was the weather?"},{"jp":"Ａ：はれでした。でも すこし あつかったです。","en":"Sunny. But a little hot."},{"jp":"あなた：なにを しましたか。／ なにを たべましたか。","en":"What did you do? / What did you eat?"},{"jp":"Ａ：おおきい だいぶつを みました。そして、うみへ いきました。","en":"I saw the big Buddha. And I went to the sea."}],
   note:"Textbook 6-3 (箱根) and the test review both use this script. Every question is a past-tense version of a Lesson 4–5 question.",
   imgs:["6-2-3.webp","6-2-4.webp"],
   w:["どうでしたか","どう","たのしかったです","よかったです","りょこう","どこへ","なんにちかん","なにで","どこから","どのぐらい","いくら","だれと","なにを","いきました","たべました"]},
]},

{id:"L7",n:7,lvl:1,title:"鈴木さんのうち",en:"Lesson 7",goal:"What exists where: あります／います, counting with counters, position words, and the question words all together.",cards:[
  {sec:"7-1",kind:"pattern",label:"There is …",jp:"〜に 〜が あります／います",lv:"L7",vid:"k1HUxI247DM",
   formula:"[Place] {に} [Thing] {が} {あります}｜[Place] {に} [Person／Animal] {が} {います}",
   meaning:"あります = a thing exists. います = a living thing exists. に marks the place, が marks the thing.",
   hl:["が あります","が います","たくさん あります"],
   rows:[{"jp":"へやに テーブルが あります。","en":"There is a table in the room."},{"jp":"へやに 田中さんが います。","en":"Mr. Tanaka is in the room."},{"jp":"にわに いぬが います。","en":"There is a dog in the garden."},{"jp":"新宿に デパートが たくさん あります。","en":"There are many department stores in Shinjuku."}],
   note:"ポイント：もの・しょくぶつ → あります　／　ひと・どうぶつ → います。",
   imgs:["7-1-1.webp","7-1-3.webp","7-1-4.webp"],
   w:["あります","います","が","に","へや","にわ","つくえ","いぬ","ねこ"]},
  {sec:"7-1",kind:"question",label:"What is there? Who is there?",jp:"なに／だれ が ありますか・いますか",lv:"L7",vid:"4YATPME4qrM",
   formula:"Q: [Place] {に} {なにが} {ありますか}｜Q: [Place] {に} {だれが} {いますか}｜A: {なにも} {ありません}／{だれも} {いません}",
   meaning:"Ask what or who is in a place. Negative answer uses なにも／だれも ＋ ません.",
   hl:["なにが ありますか","だれが いますか","だれも いません","なにも ありません"],
   rows:[{"jp":"Q：〇〇さんのへやに なにが ありますか。","en":"What is in your room?"},{"jp":"Q：〇〇さんのへやに だれが いますか。","en":"Who is in your room?"},{"jp":"A：だれも いません。／ なにも ありません。","en":"There is nobody. / There is nothing."}],
   imgs:["7-1-2.webp"],
   w:["なにが","だれが","なにも","だれも","ありますか","いますか"]},
  {sec:"7-2",kind:"pattern",label:"Counting things",jp:"りんごが みっつ あります",lv:"L7",
   formula:"[Noun] {が} [Number＋counter] {あります}／{います}｜[Noun] {を} [Number＋counter] {ください}｜Q: {いくつ}／{なんにん} {ありますか}／{いますか}",
   meaning:"The number goes after the noun and its particle, right before the verb — no particle after the counter. Pick the counter from the thing being counted.",
   hl:["みっつ","よっつ","ふたり","5人","いくつ","なんにん","ください","ふたつ","ぜんぶで いくらですか"],
   rows:[{"jp":"りんごが みっつ あります。","en":"There are three apples."},{"jp":"きょうしつに いすが よっつ あります。","en":"There are four chairs in the classroom."},{"jp":"がくせいが 5人 います。","en":"There are five students."},{"jp":"私のクラスに イギリス人のがくせいが ふたり います。","en":"There are two British students in my class."},{"jp":"ビールを 2ほん ください。","en":"Two beers, please."},{"jp":"Q：りんごが いくつ ありますか。 A：みっつ あります。","en":"How many apples are there? — Three."},{"jp":"A（てんいん）：いらっしゃいませ。","en":"Welcome!"},{"jp":"B（きゃく）：ハンバーガーを ふたつと オレンジジュースを みっつ ください。","en":"Two hamburgers and three orange juices, please."},{"jp":"A：はい。","en":"Certainly."},{"jp":"B：ぜんぶで いくらですか。","en":"How much is it altogether?"},{"jp":"A：1120円です。ありがとうございます。","en":"1,120 yen. Thank you very much."}],
   note:"Practise the same script with the ケーキ屋 menu: チョコレートケーキ・チーズケーキ・モンブラン・ショートケーキ.",
   imgs:["7-2-1.webp","7-2-2.webp","7-2-4.webp"],
   w:["いくつ","なんにん","あります","います","ください","みっつ","ふたり","ぜんぶで","いくらですか","いらっしゃいませ","ふたつ"]},
  {sec:"7-3",kind:"pattern",label:"On, under, next to",jp:"N の うえ・した・なか・となり… に",lv:"L7",vid:"rFRJes0ic8Y",
   formula:"[Noun A] {は} [Noun B] {の} [Position] {に} {あります}／{います}",
   meaning:"Position words sit between の and に: [Thing] の [Position] に.",
   hl:["の 上に あります","の 下に あります","の そばに あります"],
   rows:[{"jp":"めがねは テーブルの 上に あります。","en":"The glasses are on the table."},{"jp":"ほんは テーブルの 下に あります。","en":"The book is under the table."},{"jp":"びょういんは いえの そばに あります。","en":"The hospital is near the house."}],
   note:"うえ・した・なか・よこ・まえ・うしろ・となり・そば・みぎ・ひだり／きた・みなみ・にし・ひがし。",
   imgs:["7-3-2.webp"],
   w:["うえ","した","なか","よこ","まえ","うしろ","となり","そば","みぎ","ひだり","の","に"]},
  {sec:"7-3",kind:"question",label:"Where is it?",jp:"どこに ありますか",lv:"L7",vid:"Ok7eZRUbOY8",
   formula:"Q: [Noun] {は} {どこに} {ありますか}／{いますか}｜A: [Place] {の} [Position] {に} {あります}／{います}｜Q: [Noun] {は} {どこ} {ですか}　A: [Place] {の} [Position] {です}",
   meaning:"どこに asks the location; the answer gives the position phrase. The shorter どこですか ／ 〜の〜です pair says the same thing with です.",
   hl:["どこに ありますか","どこに いますか","の まえに あります","の上に います","どこですか","となりです"],
   rows:[{"jp":"Q：ぎんこうは どこに ありますか。","en":"Where is the bank?"},{"jp":"A：えきの まえに あります。","en":"It is in front of the station."},{"jp":"Q：ねこは どこに いますか。 A：テーブルの上に います。","en":"Where is the cat? — On the table."},{"jp":"Q：ぎんこうは どこですか。 A：ゆうびんきょくの となりです。","en":"どこですか + です — the short form of the same question."}],
   imgs:["7-3-4.webp","7-3-1.webp","7-3-3.webp"],
   w:["どこに","どこ","ありますか","いますか","まえ","となり","うえ"]},
]},

{id:"L8",n:8,lvl:1,title:"自己紹介",en:"Lesson 8",goal:"Likes and wants (が), joining two adjectives, and the dictionary form — the base for everything from here on.",cards:[
  {sec:"8-1",kind:"pattern",label:"A has a long B",jp:"〜は 〜が [Adj]です",lv:"L8",vid:"uq1CZVk-7hg",
   formula:"[Noun] {は} [Noun] {が} [Adj] {です}｜Q: [Noun] {は} [Noun] {が} [Adj] {ですか}　A: はい、[Adj] {です}／いいえ、[い-adj:−い] {くありません}",
   meaning:"は sets the whole topic; が marks the part being described.",
   hl:["は はなが","は 人が","は かみが","が ながいです","が おおいです"],
   rows:[{"jp":"ぞうは はなが ながいです。","en":"Elephants have long noses."},{"jp":"東京は 人が おおいです。","en":"Tokyo has many people."},{"jp":"Aさんは かみが ながいです。","en":"A has long hair."},{"jp":"Q：日本は 物価が たかいですか。","en":"Are prices high in Japan?"},{"jp":"A：はい、たかいです。／ いいえ、たかくありません。","en":"Yes / No."}],
   imgs:["8-1-1.webp","8-1-3.webp","8-1-4.webp","8-1-2.webp"],
   w:["は","が","はな","せ","かみ","ぶっか","ひと","おおい","ながい","たかい"]},
  {sec:"8-2",kind:"pattern",label:"I like …",jp:"〜が すきです",lv:"L8",vid:"96navc8KFcE",
   formula:"[Person] {は} [Noun] {が} {すきです}／{きらいです}／{じょうずです}／{へたです}｜Q: [Noun] {が} {すきですか}　A: はい、{すきです}／いいえ、[Noun] {は} {あまり}…",
   meaning:"The thing you like is marked with が, not を. Same structure for きらい・じょうず・へた・とくい・にがて.",
   hl:["が すきです","が きらいです","が じょうずです"],
   rows:[{"jp":"私は あまいものが すきです。","en":"I like sweet things."},{"jp":"私は 犬が きらいです。","en":"I dislike dogs."},{"jp":"田中さんは 歌が じょうずです。","en":"Mr. Tanaka is good at singing."},{"jp":"Ａ：〇〇さんは えいがが すきですか。","en":"Do you like films?"},{"jp":"Ｂ：はい、すきです。","en":"Yes, I do."},{"jp":"Ｂ：いいえ、えいがは あまり…。","en":"No, films are not really…"}],
   note:"Pairs taught in class: すき↔きらい、じょうず↔へた、とくい↔にがて。Past: すきでした／すきじゃありませんでした。",
   imgs:["8-2-2.webp","8-2-3.webp","8-2-4.webp"],
   w:["すき","きらい","じょうず","へた","とくい","にがて","が","あまり"]},
  {sec:"8-3",kind:"form",label:"Two adjectives in one",jp:"〜くて／〜で",lv:"L8",vid:"0D1c3R3VOoo",
   formula:"[い-adj:−い] {くて} [Adj] {です}｜[な-adj] {で} [Adj] {です}｜[Noun] {で} [Noun／Adj] {です}｜Q: {どんな} [Noun] {ですか}　A: [Adj]{くて}／{で} [Adj] [Noun] {です}",
   meaning:"Join two adjectives in one sentence: い-adj → drop い + くて; な-adj / noun → + で.",
   hl:["しかくくて","たかくて","よくて"],
   rows:[{"jp":"このかばんは しかくくて ちゃいろいです。","en":"This bag is square and brown."},{"jp":"たなかさんは せが たかくて ハンサムです。","en":"Mr. Tanaka is tall and handsome."},{"jp":"※いい → よくて","en":"いい is irregular."},{"jp":"このねこは 白くて 小さいです。","en":"This cat is white and small."},{"jp":"あのレストランは やすくて おいしいです。","en":"That restaurant is cheap and good."},{"jp":"たなかさんは がくせいで、18さいです。","en":"Noun + で: Tanaka is a student and 18 years old."},{"jp":"Q：〇〇は どんな ところですか。 A：しずかで きれいな ところです。","en":"どんな answered with two adjectives."}],
   note:"✗ な-adj ＋ くて。な-adjectives and nouns always use で。The joined phrase then takes the tense at the end: にぎやかで 楽しかったです。",
   imgs:["8-3-1.webp","8-3-2.webp","8-3-3.webp","8-3-4.webp"],
   w:["くて","で","よくて","しかくい","たかい","ハンサム","きれい","しずか","どんな"]},
  {sec:"8-3",kind:"pattern",label:"…, but …",jp:"〜ですが、〜です",lv:"L8",
   formula:"[Adj]／[Noun] {ですが}、[Adj] {です}｜[Verb:ます-form]{が}、…",
   meaning:"が after です／ます joins two halves that pull in opposite directions inside one sentence (“…, but …”). でも does the same job across two sentences.",
   hl:["ですが、","ますが、","ですけど"],
   rows:[{"jp":"わたしのアパートは 古いですが、きれいです。","en":"My flat is old, but clean."},{"jp":"日本語は むずかしいですが、とても おもしろいです。","en":"Japanese is hard, but very interesting."},{"jp":"ちかてつは べんりですが、バスのほうが たのしいです。","en":"The subway is convenient, but the bus is more fun."},{"jp":"すみません、横浜へ 行きたいですが、どうやって 行きますか。","en":"Excuse me, I want to go to Yokohama, but how do I get there? (10-4)"},{"jp":"かれは しんせつそうですが、ほんとうは しんせつじゃありません。","en":"He looks kind, but he is not really kind."}],
   note:"Test task: answer 日本語のべんきょうはどうですか with 〜が、〜 and two adjectives. In casual speech けど does the same job: きらいじゃないけど…。",
   w:["が","ですが","けど","でも"]},
  {sec:"8-4",kind:"pattern",label:"I want to …",jp:"〜たいです",lv:"L8",vid:"fNj0Vm8lFPE",
   formula:"[Noun] {が}／{を} [Verb:ます-stem] {たいです}｜Q: {なにが} [Verb:ます-stem] {たいですか}",
   meaning:"Take the ます-stem and add たいです. The object may be marked with を or が.",
   hl:["行きたいです","いきたいですか","たべたいですか","食べたい","なにが"],
   rows:[{"jp":"私は 日本へ 行きたいです。","en":"I want to go to Japan."},{"jp":"Q1：どこへ いきたいですか。","en":"Where do you want to go?"},{"jp":"Q2：＿＿で なにが たべたいですか。","en":"What do you want to eat in ＿＿?"},{"jp":"お母さんのシチューが 食べたい…。","en":"I want to eat my mother’s stew…"}],
   imgs:["8-4-3.webp"],
   w:["たい","たいです","が","いきたい","たべたい","のみたい","なにが","どこへ"]},
  {sec:"8-4",kind:"pattern",label:"I want a …",jp:"〜が ほしいです",lv:"L8",vid:"s3Zkqi-0NaM",
   formula:"[Noun] {が} {ほしいです}｜Q: {なにが} {ほしいですか}",
   meaning:"ほしい is an い-adjective. The thing you want is marked with が.",
   hl:["ほしいです","なにが"],
   rows:[{"jp":"私は お金が ほしいです。","en":"I want money."},{"jp":"とけいが ほしいです。","en":"I want a watch."},{"jp":"Q：クリスマスに なにが ほしいですか。","en":"What do you want for Christmas?"}],
   note:"ほしい is for things; たい is for actions. Both take が.",
   imgs:["8-4-4.webp","8-4-2.webp"],
   w:["ほしい","ほしいです","が","なにが","おかね","やすみ"]},
  {sec:"8-5",kind:"form",label:"Verb groups ①②③",jp:"どうし",lv:"L8",vid:"nOXuIYVzyL4",
   formula:"{①} [Verb:−i ます] かいます・のみます｜{②} [Verb:−e ます] たべます・ねます｜{②} one kana ＋ ます　みます・います ★おきます・あびます｜{③} {します}・{きます}",
   meaning:"Every verb belongs to Group 1, 2 or 3, and you can tell which from the ます-form alone. The group decides every later form (て-form, dictionary form, ない-form).",
   rules:"①かいます・かえります → i ます｜②たべます・あけます → e ます｜②います・みます・ねます → １かな ＋ ます｜③します・きます",
   hl:["i ます","e ます","ます","のむ","のんで","たべる","たべて","する","して","くる","きて"],
   rows:[{"jp":"①かいます・かえります → i ます","en":"Group 1 — the kana before ます is an i-sound."},{"jp":"②たべます・あけます → e ます","en":"Group 2 — the kana before ます is an e-sound."},{"jp":"②います・みます・ねます → １かな ＋ ます","en":"Group 2 — a one-kana stem, whatever the vowel."},{"jp":"★おきます・あびます","en":"Group 2 exceptions: i-sound but still Group 2."},{"jp":"③します・きます","en":"Group 3 — the two irregulars."},{"jp":"①のみます → のむ ／ のんで","en":"Group 1"},{"jp":"②たべます → たべる ／ たべて","en":"Group 2"},{"jp":"③します → する ／ して　きます → くる ／ きて","en":"Group 3 (irregular)"}],
   note:"Every verb card in the Words tab shows its group; tap it for the full conjugation table.",
   imgs:["8-5-5.webp","8-5-6.webp","8-5-7.webp","8-5-8.webp","8-5-9.webp"],
   w:["グループ","ます","かいます","たべます","みます","おきます","あびます","します","きます"]},
  {sec:"8-5",kind:"form",label:"Dictionary form",jp:"じしょけい",lv:"L8",vid:"su0kg2-BI6E",
   formula:"{①} [Verb:い-row ＋ ます] → う-row｜{②} [Verb:ます-stem] {る}｜{③} {する}・{くる}",
   meaning:"The plain (dictionary) form of each verb group — the base for many later patterns.",
   rules:"①かいます→かう、かきます→かく、およぎます→およぐ、はなします→はなす、あそびます→あそぶ｜②ねます→ねる、たべます→たべる、おきます→おきる｜③きます→くる、します→する",
   hl:["かう","かく","およぐ","はなす","あそぶ","ねる","たべる","おきる","みる","あびる","くる","する"],
   imgs:["8-5-1.webp","8-5-2.webp","8-5-3.webp"],
   w:["じしょけい","かう","かく","およぐ","はなす","あそぶ","ねる","たべる","くる","する"]},
  {sec:"8-5",kind:"pattern",label:"I like doing …",jp:"〜のが すきです",lv:"L8",vid:"2WBh1vkx0HU",
   formula:"[Verb:dictionary form] {のが} {すきです}／{じょうずです}／{にがてです}",
   meaning:"Dictionary form + の turns a verb into a noun, so it can take が すきです.",
   hl:["のが すきです","のが じょうずです"],
   rows:[{"jp":"私は サッカーをみるのが すきです。","en":"I like watching football."},{"jp":"写真をとるのが すきです。","en":"I like taking photos."},{"jp":"ピアノをひくのが じょうずです。","en":"I am good at playing the piano."},{"jp":"作文を 書くのが 苦手です。","en":"I am bad at writing essays. — 〜のが（苦手・大変）です"}],
   imgs:["8-5-4.webp"],
   w:["のが","すき","じょうず","にがて","たいへん","みる","とる","ひく"]},
  {sec:"8-6",kind:"form",label:"Looks …",jp:"〜そうです",lv:"L8",vid:"OUMFUFY6rl0",
   formula:"[い-adj:−い] {そうです}｜[な-adj] {そうです}｜[Adj] {そうな} [Noun]",
   meaning:"Describe how something looks. Drop い from an い-adjective, use a な-adjective as it is, then add そうです.",
   hl:["そうです","そうな","よさそうです"],
   rows:[{"jp":"このケーキは おいしそうです。","en":"This cake looks delicious."},{"jp":"これは おいしそうなケーキです。","en":"This is a delicious-looking cake."},{"jp":"かれは うれしそうです。","en":"He looks happy."},{"jp":"※いい → よさそうです","en":"いい is irregular."}],
   note:"Negative impression: あまり おもしろそうじゃありません。",
   imgs:["8-6-1.webp","8-6-2.webp","8-6-3.webp","8-6-4.webp"],
   w:["そう","そうです","そうな","よさそう","おいしそう","うれしそう","おもそう","いそがしそう"]},
]},

{id:"L9",n:9,lvl:1,title:"電話",en:"Lesson 9",goal:"The て-form and its first three jobs: offering (ましょうか), asking (てください), and what is happening now (ています).",cards:[
  {sec:"9-1",kind:"pattern",label:"Shall I …?",jp:"〜ましょうか",lv:"L9",vid:"KzNf7MeMiUc",
   formula:"[Object] {を} [Verb:ます-stem] {ましょうか}",
   meaning:"Offer to do something for the other person. Take the ます-stem + ましょうか.",
   hl:["ましょうか"],
   rows:[{"jp":"かばんを 持ちましょうか。","en":"Shall I carry your bag?"},{"jp":"まどを あけましょうか。","en":"Shall I open the window?"},{"jp":"てつだいましょうか。","en":"Shall I help you?"},{"jp":"かしましょうか。","en":"Shall I lend it to you?"},{"jp":"Ａ：あついですねぇ！","en":"It’s hot, isn’t it!"},{"jp":"Ｂ：まどを あけましょうか。","en":"Shall I open the window?"},{"jp":"Ａ：すみません。おねがいします。","en":"Yes please. Thank you."},{"jp":"ミシェル：フランチェスカさん、手伝いましょうか。","en":"Francesca, shall I help you?"},{"jp":"フランチェスカ：あ、だいじょうぶです。","en":"Oh, I’m fine."},{"jp":"ミシェル：でも、重そうですよ。","en":"But it looks heavy."},{"jp":"フランチェスカ：ほんとうにだいじょうぶです。ありがとう。","en":"I’m really fine. Thank you."}],
   note:"★だれがしますか — the speaker. Vましょうか ＝ 私が Vますよ。Accept with おねがいします, decline with だいじょうぶです.",
   imgs:["9-1-3.webp","9-1-4.webp","9-1-5.webp"],
   w:["ましょうか","もちます","あけます","てつだいます","かします","おねがいします","だいじょうぶです"]},
  {sec:"9-2",kind:"form",label:"The て-form",jp:"てけい",lv:"L9",vid:"475X4-Ujk1Y",
   formula:"{①} き→{いて}・ぎ→{いで}・し→{して}・ち／り／い→{って}・に／び／み→{んで}｜{②} [Verb:ます-stem] {て}｜{③} {して}・{きて}　※いきます→{いって}",
   meaning:"The て-form is built from the verb group. It is the base for てください, ています, てもいいですか and more.",
   rules:"①かきます→かいて、およぎます→およいで、はなします→はなして、まちます→まって、とります→とって、かいます→かって、のみます→のんで、よびます→よんで、しにます→しんで｜②たべます→たべて、みます→みて｜③します→して、きます→きて、※いきます→いって",
   hl:["かいて","およいで","はなして","まって","とって","かって","のんで","よんで","しんで","たべて","みて","いって"],
   imgs:["9-2-5.webp","9-2-6.webp","9-2-7.webp"],
   w:["てけい","て","かいて","およいで","はなして","まって","とって","かって","のんで","よんで","たべて","みて","して","きて","いって"]},
  {sec:"9-2",kind:"pattern",label:"Please …",jp:"〜てください",lv:"L9",vid:"wWdKRS9jBiU",
   formula:"[Object] {を} [Verb:て-form] {ください}",
   meaning:"て-form + ください asks someone to do something, or invites them to go ahead.",
   hl:["てください"],
   rows:[{"jp":"たべてください。","en":"Please eat."},{"jp":"そのカメラを みせてください。","en":"Please show me that camera."},{"jp":"でんわばんごうを おしえてください。","en":"Please tell me your phone number."},{"jp":"もういちど 言ってください。","en":"Please say it once more."}],
   note:"★だれがしますか — the listener. Vてください ＝ あなたが Vます、おねがいします。Three uses drilled in class: ①「どうぞ」inviting ②「おねがいします」requesting ③ instruction.",
   imgs:["9-2-2.webp","9-2-4.webp"],
   w:["てください","ください","みせてください","おしえてください","まってください","いってください"]},
  {sec:"9-3",kind:"pattern",label:"Doing right now",jp:"〜ています",lv:"L9",vid:"dl0Vlck-pB0",
   formula:"[Object] {を} [Verb:て-form] {います}｜Q: いま、{なにを} {していますか}",
   meaning:"て-form + います describes an action in progress at this moment.",
   hl:["しています。","していますか","よんでいます","なにを","もしもし","おたくですか","ともうしますが","いらっしゃいますか","待ってください","入っています","あとで","電話をしてください","しつれいします"],
   rows:[{"jp":"さとう先生は 電話を しています。","en":"Ms. Sato is on the phone."},{"jp":"Q：田中さんは なにを していますか。","en":"What is Mr. Tanaka doing?"},{"jp":"A：本を よんでいます。","en":"He is reading a book."},{"jp":"カイ：もしもし。","en":"Hello?"},{"jp":"田中：もしもし、すずきさんの おたくですか。田中いちろうと もうしますが、あいこさん いらっしゃいますか。","en":"Hello, is this the Suzuki residence? This is Ichiro Tanaka — is Aiko there?"},{"jp":"カイ：はい。ちょっと 待ってください。","en":"Yes. One moment, please."},{"jp":"カイ：すみません、あいこさんは 今 おふろに 入っています。あとで もういちど 電話を してください。","en":"Sorry, Aiko is in the bath right now. Please call again later."},{"jp":"田中：はい、わかりました。どうも ありがとう。じゃあ、さようなら。","en":"I see. Thank you. Goodbye then."},{"jp":"カイ：しつれいします。","en":"Goodbye. (polite, hanging up)"}],
   note:"いらっしゃいますか is the polite います. しつれいします closes a call; the caller says さようなら.",
   imgs:["9-3-1.webp","9-3-3.webp"],
   w:["ています","いま","しています","よんでいます","たべています","なにを","もしもし","おたく","いらっしゃいます","もうします","あとで","でんわ","しつれいします","まってください"]},
]},

{id:"L10",n:10,lvl:1,title:"テストの日",en:"Lesson 10",goal:"More て-form: permission, prohibition, one action after another, trains and transfers, and doing something then going.",cards:[
  {sec:"10-1",kind:"pattern",label:"May I …?",jp:"〜てもいいですか",lv:"L10",vid:"jhByyxdNaZU",
   formula:"[Object] {を} [Verb:て-form] {もいいですか}｜A: はい、{どうぞ}。／ すみません、{ちょっと}…。",
   meaning:"て-form + もいいですか asks permission. Answer はい、どうぞ or すみません、ちょっと….",
   hl:["てもいいですか","でもいいですか"],
   rows:[{"jp":"いきます ＋ いいですか → いってもいいですか","en":"May I go?"},{"jp":"かえります ＋ いいですか → かえってもいいですか","en":"May I go home?"},{"jp":"水をのみます ＋ いいですか → 水をのんでもいいですか","en":"May I drink water?"},{"jp":"写真を とってもいいですか。","en":"May I take a photo?"}],
   note:"★だれがしますか — the speaker. Vてもいいですか ＝ 私が Vたいです、いいですか？ Compare Vましょうか (I do it for you) and Vてください (you do it for me) — same て-form, three different people acting.",
   imgs:["10-1-1.webp","10-1-2.webp","10-1-3.webp","ref-expr-4.webp","ref-expr-2.webp","ref-expr-3.webp"],
   w:["てもいいですか","いいですか","どうぞ","ちょっと","とってもいいですか","はいってもいいですか"]},
  {sec:"10-2",kind:"pattern",label:"Must not",jp:"〜てはいけません",lv:"L10",vid:"WgBJZlBUzzQ",
   formula:"[Object] {を} [Verb:て-form] {はいけません}",
   meaning:"て-form + はいけません states a prohibition — used for rules and signs.",
   hl:["てはいけません"],
   rows:[{"jp":"じてんしゃに のってはいけません。","en":"You must not ride a bicycle (here)."},{"jp":"ここに 車を とめてはいけません。","en":"You must not park a car here."},{"jp":"ここに ゴミを だしてはいけません。","en":"You must not put out rubbish here."}],
   note:"Used with class rules: カンニング・ペット・ゴミ・たちいりきんし。",
   imgs:["10-2-2.webp","10-2-3.webp","10-2-4.webp"],
   w:["てはいけません","いけません","だめ","たばこ","すいます","とめます","ルール"]},
  {sec:"10-3",kind:"pattern",label:"Do this, then that",jp:"V①て、V②ます",lv:"L10",vid:"UcsAo8Q3iRU",
   formula:"[Verb①:て-form]、[Verb②:ます-form]／{ました}",
   meaning:"Join actions in the order they happen: verb 1 in て-form, then verb 2 carries the tense.",
   hl:["おきて、","食べて、","いって、","みて、"],
   rows:[{"jp":"私はまいにち、あさおきて、ジョギングをします。","en":"Every day I get up and go jogging."},{"jp":"ごはんを 食べて、学校へ 行きます。","en":"I eat and then go to school."},{"jp":"こうえんへ いって、えを かきます。","en":"I go to the park and draw a picture."},{"jp":"（きのうのよる）テレビをみて、おふろに はいりました。","en":"Last night I watched TV and then took a bath."}],
   note:"Only the last verb shows the tense: おふろにはいって、ねました。",
   imgs:["10-3-1.webp","10-3-2.webp","10-3-3.webp","10-3-4.webp"],
   w:["て","おきて","たべて","いって","みて","それから","あさ","ゆうべ"]},
  {sec:"10-4",kind:"pattern",label:"Get on, change, get off",jp:"のります・のりかえます・おります",lv:"L10",vid:"0hc-Dgy9HZI",
   formula:"[Station] {で} [Line] {に} {のります}｜[Station] {で} [Train] {を} {おります}｜[Station] {で} [Line] {に} {のりかえます}｜[Line] {に} {のって}、[Station] {で} {おります}",
   meaning:"に marks the line you board or change onto; を marks the train you get off; で marks the station where it happens.",
   hl:["に のります","を おります","に のりかえます","に のって","で おります","どうやって行きますか","行きたいです","にのります","にのって","でおりてください","にのりかえて","まで行きます","どのぐらいかかりますか","いくらかかりますか"],
   rows:[{"jp":"あきはばらで 山手線に のります。","en":"Board the Yamanote Line at Akihabara."},{"jp":"あきはばらで でんしゃを おります。","en":"Get off the train at Akihabara."},{"jp":"あきはばらで 中央線に のりかえます。","en":"Change to the Chuo Line at Akihabara."},{"jp":"新大久保で 山手線に のって、あきはばらで おります。","en":"Take the Yamanote Line at Shin-Okubo and get off at Akihabara."},{"jp":"新宿で 小田急線に のって、しもきたざわで おります。","en":"Take the Odakyu Line at Shinjuku and get off at Shimokitazawa."},{"jp":"Ａ：すみません、横浜へ行きたいですが、どうやって行きますか。","en":"Excuse me, I want to go to Yokohama — how do I get there?"},{"jp":"Ｂ：横浜ですね。まず、山手線にのります。","en":"Yokohama, right. First, take the Yamanote Line."},{"jp":"Ａ：山手線ですね。","en":"The Yamanote Line."},{"jp":"Ｂ：ええ、山手線にのって、新宿でおりてください。","en":"Yes — take the Yamanote Line and get off at Shinjuku."},{"jp":"Ａ：新宿ですね。","en":"Shinjuku."},{"jp":"Ｂ：ええ、新宿で湘南新宿ラインにのりかえて、横浜まで行きます。","en":"Yes, change to the Shonan-Shinjuku Line at Shinjuku and go to Yokohama."},{"jp":"Ａ：あのう、ここから横浜までどのぐらいかかりますか。","en":"Um, how long does it take from here to Yokohama?"},{"jp":"Ｂ：45分です。","en":"45 minutes."},{"jp":"Ａ：いくらかかりますか。","en":"How much does it cost?"},{"jp":"Ｂ：580円です。","en":"580 yen."},{"jp":"Ａ：わかりました。どうもありがとうございました。","en":"I see. Thank you very much."},{"jp":"Ｂ：いいえ、どういたしまして。","en":"Not at all."}],
   note:"The te-form joins the legs of one journey: 〜にのって、〜でおります。",
   imgs:["10-4-1.webp","10-4-2.webp","10-4-3.webp"],
   w:["のります","おります","のりかえます","に","を","で","やまのてせん","ちゅうおうせん","えき","どうやって","いきたいです","まず","どのぐらい","いくら","かかります"]},
  {sec:"10-4",kind:"question",label:"How long, how much does it take?",jp:"どのぐらい／いくら かかりますか",lv:"L10",vid:"u18cV8p2fns",
   formula:"[A] {から} [B] {まで} {どのぐらい} {かかりますか}｜[A] {から} [B] {まで} {いくら} {かかりますか}",
   meaning:"かかります is what time and money do — it \"takes\". から〜まで marks the stretch being measured.",
   hl:["から","まで","どのぐらい","かかりますか","かかります"],
   rows:[{"jp":"えきから うちまで 30分 かかります。","en":"It takes 30 minutes from the station to my house."},{"jp":"Q：ここから 横浜まで どのぐらい かかりますか。 A：45分です。","en":"How long from here to Yokohama? — 45 minutes."},{"jp":"Q：いくら かかりますか。 A：580円です。","en":"How much does it cost? — 580 yen."}],
   w:["かかります","かかりますか","どのぐらい","いくら","から","まで","ぷん","じかん","えん"]},
  {sec:"10-5",kind:"pattern",label:"Do it and go, come back, go home",jp:"〜ていきます／〜てきます",lv:"L10",vid:"U9so7nPvk9E",
   formula:"[Object] {を} [Verb:て-form] {いきます}／{きます}／{かえります}",
   meaning:"て-form + いきます = do it then go. て-form + きます = do it and come back.",
   hl:["って行きます","って来ます","って帰ります"],
   rows:[{"jp":"学校に 本を 持って行きます。","en":"I take a book to school."},{"jp":"切符を 買って行きます。","en":"I buy a ticket and go."},{"jp":"たばこを 買って来ます。","en":"I’ll go buy cigarettes and come back."},{"jp":"ケーキを 持って帰ります。","en":"I’ll take the cake home."},{"jp":"郵便局へ 行って来ます。","en":"I’ll go to the post office and come back."}],
   note:"アレンジ：（て形）て 行きたいです／行きましょうか／行ってください／行ってもいいですか。",
   imgs:["10-5-3.webp"],
   w:["ていきます","てきます","てかえります","もっていきます","かってきます","つれていきます","もちます","かいます"]},
]},

{id:"L11",n:11,lvl:1,title:"東京①",en:"Lesson 11",goal:"Comparing: which is more, A is more than B, the most of all, too much, easy or hard to do — then the casual speech you use with friends.",cards:[
  {sec:"11-1",kind:"question",label:"Which is more …?",jp:"AとBと どちらのほうが／〜のほうが〜より",lv:"L11",vid:"Mjfj2FppGWo",
   formula:"Q: [A] {と} [B] {と} {どちら}({のほう}){が} [Adj] {ですか}｜A: [A] {のほうが} ([B] {より}) [Adj] {です}",
   meaning:"Line up two things with と…と and ask どちら(のほう)が. The answer marks the winner with のほうが; the loser can be added with より. ずっと = far more.",
   hl:["どちら","のほうが","より"],
   rows:[{"jp":"Q：AスーパーとBスーパーと どちらのほうが たかいですか。","en":"Which is more expensive, A or B?"},{"jp":"A：（Bスーパーより）Aスーパーのほうが たかいです。","en":"A is more expensive (than B)."},{"jp":"Q：読書とスポーツと どちらのほうが すきですか。","en":"Which do you prefer, reading or sport?"},{"jp":"Aスーパーのほうが Bスーパーより たかいです。","en":"Supermarket A is more expensive than B."},{"jp":"バスより でんしゃのほうが はやいです。","en":"The train is faster than the bus."},{"jp":"この店のほうが ずっと やすいです。","en":"This shop is far cheaper."}],
   note:"どちら ＝ どっち in casual speech.",
   imgs:["11-1-3.webp","11-1-2.webp","11-1-1.webp","11-2-2.webp"],
   w:["どちら","どっち","のほうが","より","ずっと","と","が"]},
  {sec:"11-2",kind:"pattern",label:"A is more … than B",jp:"AはBより 〜です",lv:"L11",vid:"Bp929CUm_kM",
   formula:"[A] {は} [B] {より} [Adj] {です}",
   meaning:"Same comparison seen from A’s side — used when you are explaining about A.",
   hl:["より"],
   rows:[{"jp":"東京タワーは スカイツリーより ひくいです。","en":"Tokyo Tower is lower than Skytree."},{"jp":"〈ポイント〉Aのことを話します（説明をします）。","en":"The topic is A — you are describing A."}],
   imgs:["11-2-1.webp","11-2-4.webp"],
   w:["より","は","たかい","さむい","いそがしい"]},
  {sec:"11-3",kind:"pattern",label:"The most of all",jp:"〜のなかで 〜が いちばん 〜です",lv:"L11",vid:"_lBwfPNs5WI",
   formula:"[Group] {のなかで} [Noun] {が} {いちばん} [Adj] {です}｜Q: [Group] {のなかで} {なに}／{だれ}／{どこ}／{いつ}／{どれ} {が} {いちばん} [Adj] {ですか}",
   meaning:"Pick the top one out of a group of three or more.",
   hl:["の中で","いちばん","どれが"],
   rows:[{"jp":"くだものの中で いちごが いちばん すきです。","en":"Of all fruit I like strawberries best."},{"jp":"日本の食べ物の中で そばが いちばん すきです。","en":"Of Japanese foods I like soba best."},{"jp":"Q：日本のアニメの中で どれが いちばん おもしろいですか。","en":"Which Japanese anime is the most interesting?"}],
   note:"Question word matches the group: なに／だれ／どこ／いつ／どれ。",
   imgs:["11-3-1.webp","11-3-2.webp","11-3-3.webp","11-3-4.webp"],
   w:["いちばん","のなかで","なかで","が","なに","だれ","どこ","いつ","どれ","すき"]},
  {sec:"11-4",kind:"form",label:"Too …",jp:"〜すぎます",lv:"L11",vid:"y6SxPj06spc",
   formula:"[い-adj:−い] {すぎます}｜[な-adj] {すぎます}｜[Verb:ます-stem] {すぎます}",
   meaning:"Attach すぎます to a ます-stem or to an adjective stem to say it is excessive.",
   hl:["すぎます","すぎました","すぎて","はいてもいいですか","大きすぎます","小さいのは ありますか","あるいてもいいですか","高すぎて","あるきにくい","あるきやすい","ください"],
   rows:[{"jp":"ごぜん7:00の しんじゅくは はやすぎます。","en":"7 a.m. in Shinjuku is too early."},{"jp":"このくつは 小さすぎます。","en":"These shoes are too small."},{"jp":"ゆうべパーティで のみすぎました。","en":"I drank too much at the party last night."},{"jp":"ヒールが 高すぎて、あるきにくいです。","en":"The heels are too high, so they are hard to walk in."},{"jp":"A：すみません、この黒いパンプスを（はいてもいいですか）。","en":"Excuse me, may I try on these black pumps?"},{"jp":"B：はい、どうぞ。… いかがですか。","en":"Certainly, go ahead. … How are they?"},{"jp":"A：うーん、ちょっとサイズが（大きすぎます）ね。もう少し小さいのは ありますか。","en":"Hmm, the size is a little too big. Do you have a smaller one?"},{"jp":"B：はい、ありますよ。少々お待ちください。…こちらは いかがですか。","en":"Yes, we do. One moment please. … How about these?"},{"jp":"A：これは、ちょうどいいです！ちょっと（あるいてもいいですか）。","en":"These are just right! May I walk a little?"},{"jp":"B：もちろんです。どうぞ。","en":"Of course. Go ahead."},{"jp":"A：うーん。これは、ちょっと…。ヒールが高すぎて、（あるきにくい）です。","en":"Hmm, these are a bit… The heels are too high, so they are hard to walk in."},{"jp":"B：そうですか…。では、こちらの青いパンプスは どうですか。これはヒールが低いですよ。","en":"I see. Then how about these blue pumps? These have low heels."},{"jp":"A：ありがとうございます。これは、（あるきやすい）ですね！これを ください。","en":"Thank you. These are easy to walk in! I will take these."},{"jp":"B：ありがとうございます。","en":"Thank you very much."}],
   note:"「もう少し小さいのは ありますか。」— の stands in for the noun you already said, so you do not repeat パンプス. Same の as 赤いのをください。",
   imgs:["11-4-2.webp","11-4-3.webp","11-4-4.webp","11-5-6.webp"],
   w:["すぎます","すぎる","おおきすぎます","たかすぎます","のみすぎました","はですぎます","のは","ありませんか","あるきやすい","あるきにくい","はいてもいいですか","ください","もうすこし","もっと"]},
  {sec:"11-5",kind:"form",label:"Easy / hard to …",jp:"〜やすいです／〜にくいです",lv:"L11",vid:"PX5KVgcDFZY",
   formula:"[Verb:ます-stem] {やすいです}｜[Verb:ます-stem] {にくいです}",
   meaning:"ます-stem + やすい = easy to do; + にくい = hard to do. Both behave like い-adjectives.",
   hl:["やすいです","にくいです"],
   rows:[{"jp":"この教科書は わかりやすいです。","en":"This textbook is easy to understand."},{"jp":"よみます → よみやすいです／よみにくいです","en":"easy / hard to read"},{"jp":"スニーカーは あるきやすいです。ハイヒールは あるきにくいです。","en":"Trainers are easy to walk in; high heels are hard to walk in."}],
   imgs:["11-5-1.webp","11-5-2.webp","11-5-3.webp","11-5-4.webp"],
   w:["やすい","にくい","わかりやすい","わかりにくい","よみやすい","あるきにくい","すみやすい"]},
  {sec:"友だち①",kind:"form",label:"The ない-form",jp:"ないけい",lv:"L11",vid:"e9AVIq-6hsM",
   formula:"{①} [Verb:i → a] {ない}　かきます→{かかない}　あいます→{あわない}｜{②} [Verb:ます-stem] {ない}｜{③} {しない}・{こない}　※あります→{ない}",
   meaning:"The plain negative of a verb, first used for talking with friends (ううん、飲まない) and then in every Lesson 12 rule: ないでください, ないで, と思います, からです.",
   rules:"①かきます→かかない、のみます→のまない、あいます→あわない｜②たべます→たべない｜③します→しない、きます→こない、※あります→ない",
   hl:["かかない","のまない","あわない","あけない","しない","こない","ない"],
   rows:[{"jp":"かきます → かかない","en":"Group 1: the -i before ます moves to the -a row, then ない."},{"jp":"のみます → のまない","en":"write → not write, drink → not drink."},{"jp":"あいます → あわない","en":"Group 1 special: い becomes わ, never あ."},{"jp":"あります → ない","en":"The one irregular — not あらない."},{"jp":"たべます → たべない","en":"Group 2: drop ます, add ない."},{"jp":"します → しない、きます → こない","en":"Group 3: the two irregular verbs."}],
   note:"Group 1 verbs ending in います take わ (あいます→あわない). あります is the exception with no あ at all: ない.",
   imgs:["ref-nai-1.webp","ref-nai-2.webp","ref-nai-3.webp","ref-nai-4.webp","ref-nai-5.webp"],
   w:["ないけい","ない","かかない","のまない","あわない","たべない","しない","こない"]},
  {sec:"友だち①",kind:"pattern",label:"Talking with friends ① — verbs",jp:"ともだちのことば・どうし",lv:"L11",vid:"C9Pz3qC3v1M",
   formula:"Q: [Noun]、[Verb:dictionary form]？｜A: {うん}、[Verb:dictionary form]。｜A: {ううん}、[Verb:ない-form]。",
   meaning:"The casual register. Say the dictionary form and stop: です・ます go, か goes, and を・が・へ usually drop out. The question is carried by rising intonation.",
   hl:["うん","ううん","飲む","飲まない","食べない","好きじゃない","おいしくない"],
   rows:[{"jp":"コーヒー、飲む？ — うん、飲む。","en":"Coffee? — Yeah, I will."},{"jp":"ケーキ、食べる？ — ううん、食べない。","en":"Cake? — Nah, I won’t."},{"jp":"いすに すわる？ — ううん、すわらない。","en":"Sitting down? — No."},{"jp":"お金、ある？ — ううん、ない。","en":"Got money? — No."},{"jp":"こいびと、いる？ — うん、いる。","en":"Got a partner? — Yeah."},{"jp":"ていねい：コーヒーを のみますか。","en":"Would you like coffee? (polite)"},{"jp":"ともだち：コーヒー、飲む？","en":"Coffee? (casual — を drops, か drops)"},{"jp":"ていねい：はい、のみます。","en":"Yes, I will."},{"jp":"ともだち：うん、飲む。","en":"Yeah."}],
   note:"はい・いいえ become うん・ううん. Textbook 友だちことば①・動詞.",
   imgs:["ref-casual-1.webp","ref-casual-5.webp"],
   w:["うん","ううん","のむ","たべる","ある","いる","ない","ともだち"]},
  {sec:"友だち①",kind:"pattern",label:"Talking with friends ② — adjectives & nouns",jp:"ともだちのことば・けいようし・めいし",lv:"L11",vid:"C9Pz3qC3v1M",
   formula:"Q: [Noun]、[い-adj]？／[な-adj]？／[Noun]？｜A: {うん}、[い-adj]。／[な-adj]。／[Noun]。｜A: {ううん}、[い-adj:−い]{くない}。／[な-adj] {じゃない}。／[Noun] {じゃない}。",
   meaning:"Adjectives and nouns with friends: drop です. The negative is くない for い-adjectives and じゃない for な-adjectives and nouns. There is no だ in a casual question — 学生？ 好き？",
   hl:["うん","ううん","おいしい","おいしくない","すき","すきじゃない","日本人","日本人じゃない","よくない"],
   rows:[{"jp":"コーヒー、おいしい？ — うん、おいしい。／ ううん、おいしくない。","en":"い-adjective"},{"jp":"なっとう、すき？ — うん、すき。／ ううん、すきじゃない。","en":"な-adjective"},{"jp":"あの人、日本人？ — うん、日本人。／ ううん、日本人じゃない。","en":"noun"},{"jp":"いいです → いい ／ よくない","en":"いい is irregular again."},{"jp":"いい天気です → いい天気 ／ いい天気じゃない","en":"adjective + noun counts as a noun."}],
   note:"Textbook 友だちことば①・形容詞・名詞. The same forms are the plain form of Lesson 12-3.",
   imgs:["ref-casual-2.webp","ref-casual-3.webp","ref-casual-4.webp"],
   w:["うん","ううん","くない","じゃない","おいしい","すき","ともだち"]},
]},

{id:"L12",n:12,lvl:1,title:"東京②",en:"Lesson 12",goal:"The ない-form at work, the plain form, and saying what you think and why: と思います, からです, 〜し.",cards:[
  {sec:"12-1",kind:"pattern",label:"Please don’t",jp:"〜ないでください",lv:"L12",vid:"r-ZqD7C_kD4",
   formula:"[Object] {を} [Verb:ない-form] {でください}",
   meaning:"Ask someone not to do something. Used two ways in class: a warning (だめ！あぶない！) and a polite request (〜しません。おねがいします。).",
   hl:["ないでください","はいらないで","つかわないで","のまないで","すわないで","とらないで"],
   rows:[{"jp":"はいらないでください。","en":"Please do not enter."},{"jp":"けいたいを つかわないでください。","en":"Please do not use your phone."},{"jp":"おさけを のまないでください。","en":"Please do not drink alcohol."},{"jp":"たばこを すわないでください。","en":"Please do not smoke."},{"jp":"しゃしんを とらないでください。","en":"Please do not take photos."}],
   note:"〜てはいけません states a rule; 〜ないでください asks a person. Same situation, different weight.",
   imgs:["12-1-1.webp","12-1-2.webp","12-1-3.webp","12-1-4.webp"],
   w:["ないでください","ないで","はいらないで","つかわないで","のまないで","すわないで","とらないで","だめ","あぶない"]},
  {sec:"12-2",kind:"pattern",label:"Without doing",jp:"〜ないで、〜ます",lv:"L12",vid:"NaHQTCwixGg",
   formula:"[Verb①:ない-form] {で}、[Verb②:ます-form]",
   meaning:"Do B without doing A. It is the negative partner of V①て、V②ます — same slot in the sentence, opposite meaning.",
   hl:["ないで","食べないで","しないで","いれないで","のらないで","食べて"],
   rows:[{"jp":"あさごはんを 食べて、会社へ 行きます。","en":"I eat breakfast and then go to the office."},{"jp":"あさごはんを 食べないで、会社へ 行きます。","en":"I go to the office without eating breakfast."},{"jp":"宿題を しないで、ねます。","en":"I go to bed without doing my homework."},{"jp":"コーヒーに ミルクを いれないで、のみます。","en":"I drink my coffee without putting milk in."},{"jp":"でんしゃに のらないで、はしります。","en":"I run instead of taking the train."}],
   note:"て = and then, ないで = without. Compare the two pictures on the slides — same action, one crossed out.",
   imgs:["12-2-1.webp","12-2-2.webp","12-2-3.webp","12-2-4.webp","12-2-5.webp"],
   w:["ないで","たべないで","しないで","いれないで","のらないで","て"]},
  {sec:"12-3",kind:"form",label:"Plain form",jp:"ふつうけい",lv:"L12",vid:"BnGVhpsRLCU",
   formula:"[Verb] → [dictionary form]／[ない-form]｜[い-adj] → [い-adj]／[い-adj:−い]{くない}｜[な-adj] → [な-adj]{だ}／[な-adj]{じゃない}｜[Noun] → [Noun]{だ}／[Noun]{じゃない}",
   meaning:"The plain (short) form of all four word types. と思います, からです and 〜し all take it — です and ます never appear inside those clauses.",
   rules:"V: 来る／来ない、い-adj: おいしい／おいしくない、な-adj: べんりだ／べんりじゃない、N: あめだ／あめじゃない",
   hl:["来る","来ない","おいしくない","べんりだ","べんりじゃない","あめだ","あめじゃない"],
   rows:[{"jp":"来ます → 来る　／　来ません → 来ない","en":"Verb: dictionary form and ない-form."},{"jp":"おいしいです → おいしい　／　おいしくありません → おいしくない","en":"い-adjective: drop です, negative ends in くない."},{"jp":"べんりです → べんりだ　／　べんりじゃありません → べんりじゃない","en":"な-adjective: です becomes だ."},{"jp":"あめです → あめだ　／　あめじゃありません → あめじゃない","en":"Noun: です becomes だ."}],
   note:"な-adjectives and nouns are the ones to watch: the plain affirmative is だ, not nothing.",
   imgs:["12-3-1.webp","12-3-2.webp","12-3-3.webp","12-3-4.webp"],
   w:["ふつうけい","だ","じゃない","くない","くる","こない"]},
  {sec:"12-3",kind:"pattern",label:"I think …",jp:"〜と おもいます",lv:"L12",vid:"e6-nTWx-A1Q",
   formula:"[Plain form] {と} {おもいます}｜[な-adj]／[Noun] {だ}{と} {おもいます}",
   meaning:"State an opinion or a guess. Whatever comes before と is in plain form, never です／ます.",
   hl:["と おもいます","ふると","高いと","中国人だと","分かりやすいと","来ると"],
   rows:[{"jp":"明日、雨が ふると おもいます。","en":"I think it will rain tomorrow."},{"jp":"このテレビは ちょっと 高いと おもいます。","en":"I think this TV is a little expensive."},{"jp":"あの人は 中国人だと おもいます。","en":"I think that person is Chinese. (Noun ＋ だ)"},{"jp":"この教科書は 分かりやすいと おもいます。","en":"I think this textbook is easy to follow."},{"jp":"Q：台風は 明日 来ますか。 A：来ると おもいますよ。","en":"Will the typhoon come tomorrow? — I think it will."}],
   note:"Nouns and な-adjectives keep だ before と: 中国人だと思います、へんだと思います。",
   imgs:["12-3-5.webp","12-3-7.webp"],
   w:["とおもいます","おもいます","と","だと","ふる","たかい","ちゅうごくじん"]},
  {sec:"12-3",kind:"question",label:"What do you think of …?",jp:"〜を どう おもいますか",lv:"L12",vid:"sHcI8tsfUbs",
   formula:"Q: [Noun] {を} {どう} {おもいますか}｜A: [Plain form] {と} {おもいます}",
   meaning:"Ask for someone's opinion about a thing. The thing takes を, and the answer comes back as [plain form] ＋ と思います.",
   hl:["どう おもいますか","と おもいます","すみやすい","すみにくい","分かりやすい"],
   rows:[{"jp":"Q：東京を どう おもいますか。","en":"What do you think of Tokyo?"},{"jp":"A：すみやすいと おもいます。","en":"I think it is easy to live in."},{"jp":"A：私は すみにくいと おもいます。","en":"I think it is hard to live in."},{"jp":"Q：この教科書を どう おもいますか。 A：分かりやすいと おもいます。","en":"What do you think of this textbook? — I think it is easy to follow."}],
   note:"を, not は. どう asks for the opinion itself, so なに is never used here.",
   imgs:["12-3-6.webp"],
   w:["どうおもいますか","どう","を","とおもいます","すみやすい","すみにくい"]},
  {sec:"12-4",kind:"question",label:"Why? Because …",jp:"どうして 〜か。〜からです。",lv:"L12",vid:"Md3swHovVew",
   formula:"Q: {どうして} [Sentence] {ですか}／{ますか}｜Q: {どうして} {ですか}｜A: [Plain form] {からです}｜A: [な-adj]／[Noun] {だ}{からです}",
   meaning:"Ask a reason with どうして, answer with [plain form] ＋ からです.",
   hl:["どうして","からです","おもしろいから","安いから","多いから","きたないから","しんせつだから"],
   rows:[{"jp":"Q：どうして 東京が すきですか。 A：おもしろいからです。","en":"Why do you like Tokyo? — Because it is interesting."},{"jp":"Q：どうして よく 居酒屋へ 行きますか。 A：安いからです。","en":"Why do you often go to izakaya? — Because they are cheap."},{"jp":"Q：どうして きらいですか。 A：人が 多いからです。","en":"Why do you dislike it? — Because there are too many people."},{"jp":"Q：どうして このアパートが きらいですか。 A：きたないからです。","en":"Why do you dislike this flat? — Because it is dirty."},{"jp":"Q：どうして 彼女が すきですか。 A：しんせつだからです。","en":"Why do you like her? — Because she is kind. (な-adj ＋ だ)"},{"jp":"Q：日本が すきですか。 A：はい、すきです。 Q：どうしてですか。 A：おもしろいからです。","en":"どうしてですか on its own asks the reason for what was just said."}],
   note:"からです takes the plain form in front of it: きたないからです、しんせつだからです、来るからです。",
   imgs:["12-4-1.webp","12-4-2.webp","12-4-3.webp"],
   w:["どうして","からです","から","どうしてですか","なんで"]},
  {sec:"12-4",kind:"pattern",label:"Because …, so …",jp:"〜から、〜です／ます",lv:"L12",vid:"MAbTQy-NntA",
   formula:"[Plain form] {から}、[Result:です／ます]",
   meaning:"Put the reason first and the result second, in one sentence. Same から, different position from からです.",
   hl:["から、","ふっているから","多いから","したいから","来るから"],
   rows:[{"jp":"雨が ふっているから、出かけないで 家に います。","en":"Because it is raining, I am staying home instead of going out."},{"jp":"新宿は 人が 多いから、あまり すきじゃありません。","en":"Shinjuku has a lot of people, so I do not much like it."},{"jp":"英語が 勉強したいから、来年 アメリカへ 行きます。","en":"I want to study English, so I am going to America next year."},{"jp":"今晩 友だちが 来るから、たくさん 料理を つくります。","en":"Friends are coming tonight, so I am cooking a lot."}],
   note:"からです answers a どうして question on its own; 〜から、〜 carries the reason and the result in one breath.",
   imgs:["12-4-4.webp","12-4-5.webp","12-4-6.webp"],
   w:["から","から、","ふっている","おおい","したい","くる"]},
  {sec:"12-5",kind:"pattern",label:"More than one reason",jp:"〜し、〜し、〜からです",lv:"L12",vid:"le6az23sDuY",
   formula:"[Plain form] {し}、[Plain form] {し}、… {からです}｜[な-adj]／[Noun] {だ}{し}、…",
   meaning:"Stack reasons with し. The last one usually closes with からです; trailing off after 〜し leaves the rest politely unsaid.",
   hl:["し、","だし","いいし","おもしろいし","忙しいし","あるし","からです"],
   rows:[{"jp":"ハンサムだし、おもしろいし、あたまが いいからです。","en":"Because he is handsome, he is funny, and he is clever."},{"jp":"べんりだし、食べものが おいしいからです。","en":"Because it is convenient and the food is good."},{"jp":"うるさくないし、しずかだからです。","en":"Because it is not noisy and it is quiet."},{"jp":"遠いし 忙しいから、私は 行かない。","en":"It is far and I am busy, so I am not going. (casual)"},{"jp":"来週テストだし、レポートも あるし…。","en":"There is a test next week, and a report too… (reason left hanging)"}],
   note:"し takes the plain form as well: だし for nouns and な-adjectives, いいし for い-adjectives, 来るし for verbs.",
   imgs:["12-5-1.webp","12-5-2.webp","12-5-3.webp","12-5-4.webp","12-5-5.webp"],
   w:["し","だし","からです","ハンサム","おもしろい","いそがしい"]},
]},

{id:"L13",n:13,lvl:2,title:"道で",en:"Lesson 13",goal:"Going somewhere to do something, inviting and accepting, states with ています, and already / not yet.",cards:[
  {sec:"13-1",kind:"pattern",label:"Go somewhere to do something",jp:"〜へ〜に行きます",lv:"L13",vid:"TdZltqLVS78",
   formula:"[Place] {へ} [Verb:ます-stem] {に} {行きます}／{来ます}／{帰ります}",
   meaning:"Say why you are going: the purpose verb drops ます and takes に, then comes the verb of movement.",
   rules:"買います→買いに行きます、飲みます→飲みに行きます、食べます→食べに行きます、勉強します→勉強しに行きます",
   hl:["買いに行きます","泳ぎに行きました","出しに行って","送りに行きます","しに来ました","会いに帰ります","出しに行きます","返しに行きます","食べに行きます"],
   rows:[{"jp":"あした、新宿へくつを買いに行きます。","en":"Tomorrow I am going to Shinjuku to buy shoes."},{"jp":"夏休みに、海へ泳ぎに行きました。","en":"In the summer holidays I went to the sea to swim."},{"jp":"リーさんは、日本へ経済の勉強をしに来ました。","en":"Lee came to Japan to study economics."},{"jp":"来月国へ家族に会いに帰ります。","en":"Next month I am going home to see my family."},{"jp":"あした、成田へ友だちを送りに行きます。","en":"Tomorrow I am going to Narita to see a friend off."},{"jp":"銀行へお金を出しに行って来ます。","en":"I am off to the bank to take out money (and will be back)."},{"jp":"A：Ｂさん、今ひまですか。 B：すみません。これから、郵便局へ手紙を出しに行きます。","en":"Are you free now? — Sorry, I am just going to the post office to send a letter."},{"jp":"一郎：今から図書館へ本を返しに行きます。 カイ：私はひるごはんを食べに行きます。","en":"I am going to the library to return a book. — I am going to eat lunch. (13-6)"}],
   note:"With an action noun you can leave out します: 買い物に行きます、食事に行きます、勉強に来ました。",
   imgs:["t13-1-1.webp"],
   w:["行きます","来ます","帰ります","買い物","郵便局","図書館"]},
  {sec:"13-2",kind:"pattern",label:"Let's …",jp:"〜ましょう",lv:"L13",vid:"wFjBIG4pjhc",
   formula:"[Verb:ます-stem] {ましょう}",
   meaning:"Suggest doing something together, or say yes to an invitation. ます-stem + ましょう.",
   rules:"うたいます→うたいましょう、食べます→食べましょう、休みます→休みましょう、かんぱいします→かんぱいしましょう",
   hl:["行きましょう","うたいましょう","かんぱいしましょう","休みましょう","会いましょう","食べましょう"],
   rows:[{"jp":"今度いっしょに旅行に行きましょう。","en":"Let’s go on a trip together some time."},{"jp":"さあ、いっしょにうたいましょう。","en":"Come on, let’s sing together."},{"jp":"では、かんぱいしましょう。","en":"Well then, let’s make a toast."},{"jp":"疲れましたね。休みましょう。","en":"We’re tired, aren’t we. Let’s take a break."},{"jp":"吉田：じゃあ、何時に会いましょうか。","en":"So what time shall we meet?"}],
   note:"ましょう agrees or proposes; ましょうか (9-1) offers help or asks the other person what to do: 何時に会いましょうか。",
   imgs:["t13-2-1.webp"],
   w:["いっしょに","今度","かんぱい"]},
  {sec:"13-3",kind:"pattern",label:"Won’t you …? — inviting",jp:"〜ませんか",lv:"L13",vid:"kCo6wDkCr6Y",
   formula:"{いっしょに} [Verb:ます-stem] {ませんか}｜A: {いいですね}。[Verb:ます-stem] {ましょう}｜A: [Noun] {は} {ちょっと}…",
   meaning:"Invite someone politely with the negative question ませんか. Accept with いいですね, refuse softly by repeating the thing + はちょっと….",
   rules:"行きます→行きませんか、食べます→食べませんか、します→しませんか、来ます→来ませんか",
   hl:["しませんか","行きませんか","来ませんか","いいですね","行きましょう","はちょっと","さそってください"],
   rows:[{"jp":"吉田さん、いっしょに食事をしませんか。","en":"Ms. Yoshida, won’t you have a meal with me?"},{"jp":"A：じゃあ、映画を見に行きませんか。 B：いいですね。行きましょう。","en":"Then won’t you come and see a film? — Sounds good. Let’s go."},{"jp":"A：小山さん、土曜日に私のうちに来ませんか。 B：土曜日ですか。土曜日はちょっと・・・。","en":"Won’t you come to my place on Saturday? — Saturday… Saturday is a bit…"},{"jp":"山田：山本さん、今晩ひまですか？いっしょに飲みに行きませんか。","en":"Are you free tonight? Won’t you come for a drink?"},{"jp":"田中：今度の土曜日に、いっしょに映画に行きませんか。チケットが２枚あります。","en":"Won’t you come to a film this Saturday? I have two tickets."},{"jp":"吉田：土曜日ですか。土曜日はちょっと・・・。","en":"Saturday? Saturday is a bit…"},{"jp":"田中：そうですか。残念ですね。","en":"I see. That’s a pity."},{"jp":"吉田：また今度さそってください。","en":"Please ask me again another time."}],
   note:"Never refuse with いいえ. Repeat the day or thing + はちょっと… and let it trail off.",
   imgs:["t13-3-1.webp","t13-3-2.webp"],
   w:["いっしょに","ひま","ちょっと","残念","さそう","今度"]},
  {sec:"13-4",kind:"pattern",label:"States: live, be married, know",jp:"〜ています（状態）",lv:"L13",vid:"8OHpKotJ3yQ",
   formula:"[Verb:て-form] {います}",
   meaning:"Besides “doing right now” (9-3), ています describes a lasting state or a regular activity: where you live, your job, being married, knowing someone.",
   rules:"住む→住んでいます、結婚する→結婚しています、知る→知っています、教える→教えています、こむ→こんでいます",
   hl:["住んでいます","結婚していますか","結婚しました","こんでいました","すいていました","教えていますか","教えていない","知っていますか","知りません","アルバイトをしています","勉強していますか"],
   rows:[{"jp":"山田さんは原宿に住んでいます。","en":"Mr. Yamada lives in Harajuku."},{"jp":"A：雪子さんは結婚していますか。 B：ええ、去年結婚しました。","en":"Is Yukiko married? — Yes, she got married last year."},{"jp":"A：今朝、地下鉄がすごくこんでいました。 B：そうですか。JRはすいていましたよ。","en":"The subway was really crowded this morning. — Really? The JR line was empty."},{"jp":"A：ジョンさんは英語を教えていますか。 B：いいえ、教えていないと思いますよ。","en":"Does John teach English? — No, I don’t think he does."},{"jp":"A：田中さんを知っていますか。 B：いいえ、知りません。","en":"Do you know Mr. Tanaka? — No, I don’t."},{"jp":"学校は横浜ですが、私は上野に住んでいます。","en":"My school is in Yokohama, but I live in Ueno."},{"jp":"週末はコンビニでアルバイトをしています。","en":"At weekends I work part-time at a convenience store."}],
   note:"知っていますか is answered はい、知っています or いいえ、知りません — never ×知っていません. 住む takes に: 東京に住んでいます。",
   imgs:["t13-4-1.webp"],
   w:["住む","結婚する","知る","こむ","すく","アルバイト"]},
  {sec:"13-5",kind:"pattern",label:"Already / not yet",jp:"もう〜ました／まだ〜ていません",lv:"L13",vid:"3ujHnk6YSg0",
   formula:"Q: {もう} [Verb:ます-stem] {ましたか}｜A: はい、{もう} [Verb:ます-stem] {ました}｜A: いいえ、{まだ} [Verb:て-form] {いません}",
   meaning:"もう + past = already done. まだ + て-form + いません = not done yet (but still expected to happen).",
   rules:"食べる→まだ食べていません、飲む→まだ飲んでいません、決める→まだ決めていません",
   hl:["もう","まだ","読みました","終わっていません","食べましたか","食べていません","決めましたか","決めていません","予約しましたか","予約しました"],
   rows:[{"jp":"この本はもうぜんぶ読みました。","en":"I have already read all of this book."},{"jp":"宿題はまだ終わっていません。","en":"The homework isn’t finished yet."},{"jp":"A：もう、ひるごはんを食べましたか。 B：いいえ、まだ食べていません。 A：じゃあ、いっしょに食べましょう。","en":"Have you had lunch yet? — No, not yet. — Then let’s eat together."},{"jp":"A：夏休みの予定をもう決めましたか。 B：いいえ、まだ決めていません。","en":"Have you decided your summer plans yet? — No, not yet."},{"jp":"A：もう飛行機の切符を予約しましたか。 B：ええ、きのう電話で予約しました。","en":"Have you booked the plane ticket already? — Yes, I booked it by phone yesterday."}],
   note:"“Not yet” is まだ〜ていません, not ×まだ〜ませんでした (that means “did not”).",
   imgs:["t13-5-1.webp"],
   w:["もう","まだ","終わる","決める","予約する"]},
]},

{id:"L14",n:14,lvl:2,title:"趣味",en:"Lesson 14",goal:"Before doing, asking what a word is, and describing a noun with a whole verb clause.",cards:[
  {sec:"14-1",kind:"pattern",label:"Before doing …",jp:"〜前に",lv:"L14",vid:"964fq7NJKms",
   formula:"[Verb:dictionary form] {前に}、[Sentence]｜[Noun] {の} {前に}、[Sentence]",
   meaning:"The verb in front of 前に is always the dictionary form — even when the whole sentence is in the past.",
   rules:"行く→行く前に、食べる→食べる前に、する→する前に、テスト→テストの前に",
   hl:["寝る前に","来る前に","出かける前に","食べる前に","テストの前に"],
   rows:[{"jp":"寝る前に、歯をみがきます。","en":"I brush my teeth before I go to bed."},{"jp":"（私の）うちに来る前に、電話してください。","en":"Please call before you come to my place."},{"jp":"日本に来る前に、日本語を少し勉強しました。","en":"I studied a little Japanese before coming to Japan."},{"jp":"出かける前に、窓を閉めます。","en":"I close the windows before going out."},{"jp":"テストの前に勉強します。","en":"I study before the test."},{"jp":"A：いただきます！ B：ちょっと待って！食べる前に手をあらってください。","en":"Let’s eat! — Wait! Wash your hands before you eat."}],
   note:"×来た前に — the tense goes on the last verb only: 日本に来る前に…勉強しました。",
   imgs:["t14-1-1.webp"],
   w:["前に","寝る","出かける","みがく"]},
  {sec:"14-2",kind:"question",label:"What do you call it in …?",jp:"〜語で何と言いますか",lv:"L14",vid:"WkGwTX-9lrc",
   formula:"Q: [Noun] {は} [Language] {で} {何と} {言いますか}｜A: 「[Word]」{と} {言います}",
   meaning:"Ask for the word for something. で = in (a language); と quotes the word.",
   hl:["日本語で何と言いますか","語で","と言います","と言いますか"],
   rows:[{"jp":"Q：これは日本語で何と言いますか。 A：やかんと言います。","en":"What is this called in Japanese? — It’s called a yakan (kettle)."},{"jp":"A：すみません、これは日本語で何と言いますか。 B：ああ、それは「はさみ」と言います。","en":"Excuse me, what is this called in Japanese? — Ah, that’s called hasami (scissors)."},{"jp":"「目」はベンガル語で「チョーク」と言います。","en":"“Me” (eye) is “chok” in Bengali."},{"jp":"A：お金を替えることは日本語で何と言いますか。 B：それは両替と言います。","en":"What do you call changing money in Japanese? — That’s ryōgae."}],
   note:"何と is read なんと. The question can also ask about your own language: 「目」は〜語で何と言いますか。",
   imgs:["t14-2-1.webp"],
   w:["何と","言います","〜語","はさみ","両替"]},
  {sec:"14-3",kind:"pattern",label:"The person who is doing …",jp:"〜ている＋N",lv:"L14",vid:"QgeNP5NlsIM",
   formula:"[Verb:て-form] {いる} [Noun]",
   meaning:"A ている clause can sit directly in front of a noun and describe it. Used to point people out by what they are doing or wearing.",
   rules:"飲む→飲んでいる人、食べる→食べている人、する→している人、着る→着ている人",
   hl:["読んでいる人","話している人","着ている人","止まっている車","鳴いている犬","どの人"],
   rows:[{"jp":"本を読んでいる人が吉田さんです。","en":"The person reading a book is Ms. Yoshida."},{"jp":"ジョンさんは、田中さんと話している人です。","en":"John is the person talking with Mr. Tanaka."},{"jp":"赤いセーターを着ている人はだれですか。","en":"Who is the person wearing the red sweater?"},{"jp":"うちの前に止まっている車はだれのですか。","en":"Whose is the car parked in front of the house?"},{"jp":"ワンワン鳴いている犬の名前はムクです。","en":"The dog that is barking is called Muku."},{"jp":"リー：どの人が吉田さんですか。 山本：ベンチにすわって、本を読んでいる人ですよ。","en":"Which one is Ms. Yoshida? — The one sitting on the bench reading a book."},{"jp":"先生：どの人が〇〇さんですか。 学生：赤いシャツを着ている人です。","en":"Which one is …? — The person in the red shirt."}],
   note:"Wearing verbs: かぶる (hat, helmet) ・ 着る (shirt, jacket, kimono) ・ はく (trousers, skirt, shoes, socks) ・ かける (glasses) ・ する (watch, tie, earrings, ring, belt). Taking off: ぬぐ (着る・はく) / とる (かぶる・かける・する).",
   imgs:["t14-3-1.webp","t14-3-2.webp"],
   w:["かぶる","着る","はく","かける","する","ぬぐ","とる","どの人"]},
  {sec:"14-4",kind:"pattern",label:"A verb describing a noun",jp:"動詞＋名詞（名詞修飾）",lv:"L14",vid:"5eHdHwj-qD4",
   formula:"[Verb:dictionary form] [Noun]｜[Verb:ない-form] [Noun]",
   meaning:"Put a plain verb straight in front of a noun to say what it is for or who the person is: 食べるところ (a place for eating), 知らない人 (someone I don’t know).",
   rules:"食べる＋ところ→食べるところ、話す＋人→話す人、知らない＋ところ→知らないところ、わからない＋人→わからない人",
   hl:["入れるもの","勉強するところ","食事をする店","はく物","入ること","吸わない人","わかる人","替えること"],
   rows:[{"jp":"ちゃわんはごはんを入れるものです。","en":"A chawan is a thing you put rice in."},{"jp":"学校は勉強するところです。","en":"A school is a place where you study."},{"jp":"レストランは食事をする店です。","en":"A restaurant is a shop where you have meals."},{"jp":"スリッパはうちの中ではく物です。","en":"Slippers are things you wear inside the house."},{"jp":"入学というのは、学校に入ることです。","en":"Nyūgaku means entering a school."},{"jp":"たばこを吸わない人は何人いますか。","en":"How many people don’t smoke?"},{"jp":"中国語がわかる人は手をあげてください。","en":"People who understand Chinese, raise your hands."}],
   note:"Handy for explaining a word you don’t know: [Noun]は〜るもの／ところ／人です。",
   imgs:["t14-4-1.webp"],
   w:["もの","ところ","人","こと","店"]},
]},

{id:"L15",n:15,lvl:2,title:"私と日本語",en:"Lesson 15",goal:"Changes with なります, “if/when A then always B” with と, giving directions, doing two things at once, and how to do things.",cards:[
  {sec:"15-1",kind:"pattern",label:"Become … (a change)",jp:"〜く／になります",lv:"L15",vid:"4AGovZBdYc4",
   formula:"[い-adj:−い] {く} {なります}｜[な-adj] {に} {なります}｜[Noun] {に} {なります}",
   meaning:"Describes a change of state. い-adjectives swap い for く; な-adjectives and nouns take に.",
   rules:"大きい→大きくなる、古い→古くなる、いい→よくなる、きれい→きれいになる、春→春になる、大人→大人になる",
   hl:["大きくなります","明るくなります","上手になります","いたくなりました","きれいになりました","いそがしくなりました","先生になりました"],
   rows:[{"jp":"子どもは大きくなります。","en":"Children grow up (become big)."},{"jp":"空がだんだん明るくなります。","en":"The sky gradually gets lighter."},{"jp":"カイさんは日本語がどんどん上手になります。","en":"Kai’s Japanese is getting better and better."},{"jp":"たくさんあまいものを食べて、歯がいたくなりました。","en":"I ate a lot of sweets and my teeth started to hurt."},{"jp":"そうじをして、部屋がきれいになりました。","en":"I cleaned and the room became tidy."},{"jp":"前はひまでしたが、今はいそがしくなりました。","en":"I used to be free, but now I’ve become busy."},{"jp":"彼は日本で勉強して、国に帰って、日本語の先生になりました。","en":"He studied in Japan, went home and became a Japanese teacher."}],
   note:"いい → よくなります (never ×いくなります).",
   imgs:["t15-1-1.webp","t15-1-2.webp"],
   w:["なる","だんだん","どんどん"]},
  {sec:"15-2",kind:"pattern",label:"Whenever A, B happens",jp:"〜と、〜",lv:"L15",vid:"nUIBtUPfKL0",
   formula:"[Verb:dictionary form] {と}、[Result]｜[Verb:ない-form] {と}、[Result]",
   meaning:"A always or naturally leads to B: machines, nature, the body, and directions. The second half is a fact — not a request, wish or invitation.",
   rules:"入れる→入れると、行く→行くと、なる→なると、入れない→入れないと、食べない→食べないと",
   hl:["入れると","食べると","なると","飲むと","行くと","食べないと","入れないと"],
   rows:[{"jp":"お金を入れると、きっぷが出ます。","en":"If you put money in, a ticket comes out."},{"jp":"あまいものをたくさん食べると、ふとります。","en":"If you eat a lot of sweets, you put on weight."},{"jp":"春になると、さくらの花が咲きます。","en":"When spring comes, the cherry blossoms bloom."},{"jp":"たくさんお酒を飲むと、顔が赤くなります。","en":"When I drink a lot, my face goes red."},{"jp":"まっすぐ行くと、郵便局があります。","en":"Go straight and you’ll find the post office."},{"jp":"何も食べないと、死にます。","en":"If you eat nothing, you die."},{"jp":"お金を入れないと、切符が出ません。","en":"If you don’t put money in, no ticket comes out."}],
   note:"×〜と、〜てください — と cannot end in a request, wish or plan. For those use たら (22-1, 22-2).",
   imgs:["t15-2-1.webp"],
   w:["と","ふとる","咲く","郵便局"]},
  {sec:"15-2",kind:"expression",label:"Giving directions",jp:"みちあんない",lv:"L15",vid:"eIxrnPyHxGw",
   formula:"[Place] {を} {まっすぐ行くと}、[Place] {が} {あります}｜[Place] {を} {右}／{左} {に} {まがって} {ください}｜[Number] {つ目の} {かど} {を} {まがると}、{右側}／{左側} {に} [Place] {が} {あります}",
   meaning:"Directions are a chain of 〜と: do this, and you will find that. を marks the road, bridge, crossing or corner you move along or turn at.",
   hl:["この辺に","まっすぐ行くと","交差点があります","右にまがって","左にまがると","右側に","つ目の角を","右ですね"],
   rows:[{"jp":"A：あのう…、この辺に交番がありますか？ B：ええ、ありますよ。","en":"Excuse me, is there a police box around here? — Yes, there is."},{"jp":"B：この道をまっすぐ行くと、大きい交差点があります。","en":"Go straight along this road and you’ll come to a big crossing."},{"jp":"A：大きい交差点ですね。 B：ええ、そうです。その交差点を右にまがってください。","en":"A big crossing. — That’s right. Turn right at that crossing."},{"jp":"A：右ですね。 B：はい。それから、５０ｍぐらい歩いて、１つ目の角を左にまがると、右側に交番があります。","en":"Right. — Yes. Then walk about 50 m, turn left at the first corner, and the police box is on the right."},{"jp":"A：右側ですね。わかりました。どうもありがとうございました。 B：いいえ、どういたしまして。","en":"On the right. Got it. Thank you very much. — You’re welcome."}],
   note:"Words: 交差点（こうさてん）crossing ・ 横断歩道（おうだんほどう）pedestrian crossing ・ 橋（はし）を渡る cross a bridge ・ 角（かど）corner ・ ひとつ目・ふたつ目・みっつ目 first, second, third ・ 右側・左側 right / left side. Repeat each step back (右ですね) to confirm.",
   imgs:["t15-2m-1.webp","t15-2m-2.webp"],
   w:["まっすぐ","交差点","横断歩道","橋","渡る","まがる","角","右側","左側","ひとつ目","交番","この辺"]},
  {sec:"15-3",kind:"pattern",label:"While doing …",jp:"〜ながら",lv:"L15",vid:"4KT6rRxLDWo",
   formula:"[Verb①:ます-stem] {ながら}、[Verb②]",
   meaning:"One person doing two things at once. ながら marks the side action; the main action is the last verb.",
   rules:"食べます→食べながら、飲みます→飲みながら、聞きます→聞きながら、話します→話しながら",
   hl:["ききながら","話しながら","歩きながら","見ながら","飲みながら"],
   rows:[{"jp":"田中さんは音楽をききながら、新聞を読んでいます。","en":"Mr. Tanaka is reading the paper while listening to music."},{"jp":"彼は、友だちと話しながら、コーヒーを飲んでいます。","en":"He is drinking coffee while talking with a friend."},{"jp":"公園を歩きながら、アイスクリームを食べました。","en":"I ate ice cream while walking in the park."},{"jp":"テレビを見ながら、ご飯を食べてはいけません。","en":"You must not eat while watching TV."},{"jp":"お酒を飲みながら、いろいろ考えました。","en":"I thought about many things over a drink."}],
   note:"Both actions belong to the same person, and the tense goes on the last verb only.",
   imgs:["t15-3-1.webp"],
   w:["ながら","聞く","歩く"]},
  {sec:"15-4",kind:"pattern",label:"How to … / the way of …",jp:"〜方（かた）",lv:"L15",vid:"tw3MRACgUSk",
   formula:"[Noun] {の} [Verb:ます-stem] {方}",
   meaning:"ます-stem + 方 makes a noun: “the way of doing it”. Because it is a noun, the object takes の, not を.",
   rules:"読みます→読み方、食べます→食べ方、作ります→作り方、使います→使い方、書きます→書き方",
   hl:["作り方","書き方","使い方","考え方","みがき方","読み方"],
   rows:[{"jp":"てんぷらの作り方をおしえてください。","en":"Please teach me how to make tempura."},{"jp":"A：この漢字の書き方をおしえてください。 B：見てください。こう書いて、こう書きます。","en":"Please show me how to write this kanji. — Watch. You write it like this, then like this."},{"jp":"あたらしいパソコンを買いましたが、使い方がよくわかりません。","en":"I bought a new computer, but I don’t really know how to use it."},{"jp":"彼女の考え方はおもしろいです。","en":"Her way of thinking is interesting."},{"jp":"歯医者さんは患者に歯のみがき方をおしえました。","en":"The dentist taught the patient how to brush their teeth."}],
   note:"を becomes の: てんぷらを作る → てんぷらの作り方。",
   imgs:["t15-4-1.webp"],
   w:["方","作り方","使い方","読み方","書き方"]},
]},

{id:"L16",n:16,lvl:2,title:"日本の食生活",en:"Lesson 16",goal:"Can / cannot with the potential form and ことができる, adjectives used as adverbs, and changes over time with ようになる.",cards:[
  {sec:"16-1",kind:"form",label:"The potential form — can",jp:"可能形（かのうけい）",lv:"L16",vid:"Z2UITYrsCPc",
   formula:"[Person] {は} [Noun] {が} [Verb:potential]",
   meaning:"“Can / be able to”. Group 1: the last sound moves from -u to -e + る. Group 2: る → られる. する → できる, 来る → こられる. The object usually switches from を to が.",
   rules:"①会う→会える、行く→行ける、話す→話せる、立つ→立てる、遊ぶ→遊べる、飲む→飲める、帰る→帰れる｜②食べる→食べられる、見る→見られる、起きる→起きられる、浴びる→浴びられる｜③する→できる、来る→こられる",
   hl:["話せます","話せません","食べられません","飲めません","買えますか","行けますか","走れます","思い出せません","できるかな","できるわよ","泳げません"],
   rows:[{"jp":"ジョンさんは日本語が話せます。トムさんは話せません。","en":"John can speak Japanese. Tom can’t."},{"jp":"私はなま卵が食べられません。","en":"I can’t eat raw eggs."},{"jp":"彼は日本語は話せますが、韓国語は話せません。","en":"He can speak Japanese, but not Korean."},{"jp":"ウイスキーは少ししか飲めません。","en":"I can only drink a little whisky."},{"jp":"このペンはどこで買えますか。","en":"Where can I buy this pen?"},{"jp":"ここから空港まで３０分で行けますか。","en":"Can you get from here to the airport in 30 minutes?"},{"jp":"あの選手は１００mを９秒で走れます。","en":"That athlete can run 100 m in 9 seconds."},{"jp":"キャッシュカードの暗証番号が思い出せません。","en":"I can’t remember my cash-card PIN."},{"jp":"ミシェル：私にもできるかな・・・。 正子：できるわよ！","en":"I wonder if I could do it too… — Of course you can!"},{"jp":"彼は50mしか泳げません。","en":"He can only swim 50 m."}],
   note:"Every potential verb is Group 2: 話せる → 話せます／話せない／話せて. わかる already means “can understand”, so it has no potential form. できる and わかる always take が. しか〜ません = only (with a negative verb).",
   imgs:["t16-1-1.webp"],
   w:["できる","わかる","しか","可能形"]},
  {sec:"16-1",kind:"pattern",label:"Can — ことができます",jp:"〜ことができます",lv:"L16",vid:"F5aE0gs0Gu0",
   formula:"[Verb:dictionary form] {ことができます}｜[Verb:dictionary form] {ことはできません}",
   meaning:"A longer, more formal way to say “can”: dictionary form + ことができます. Signs, rules, interviews and writing use it. The negative usually takes は: ことはできません.",
   rules:"買う→買うことができます、話す→話すことができます、見る→見ることができます、する→することができます、吸う→吸うことはできません",
   hl:["することができます","吸うことはできません","話すことができます","生きることはできません","見ることができます","入ることはできません"],
   rows:[{"jp":"18才になると、車の運転をすることができます。","en":"At 18 you can drive a car."},{"jp":"教室ではたばこを吸うことはできません。","en":"You cannot smoke in the classroom."},{"jp":"今は電話で遠いところに住んでいる人と話すことができます。","en":"Today you can talk by phone with people living far away."},{"jp":"人間は空気がないところで生きることはできません。","en":"Humans cannot live where there is no air."},{"jp":"飛行機の中では、映画を見ることができます。","en":"On the plane you can watch films."},{"jp":"立入禁止：入ることはできません。","en":"No entry: you may not go in."}],
   note:"入れます ＝ 入ることができます. In conversation the potential form is more common; ことができる is the written / formal style.",
   imgs:["t16-1k-1.webp","t16-1k-2.webp"],
   w:["こと","できる","禁止"]},
  {sec:"16-2",kind:"pattern",label:"Adjective + verb (how)",jp:"〜くV／〜にV",lv:"L16",vid:"VrDWfzfSkpQ",
   formula:"[い-adj:−い] {く} [Verb]｜[な-adj] {に} [Verb]",
   meaning:"To say how something is done, turn the adjective into an adverb: い → く, な → に.",
   rules:"大きい→大きく、長い→長く、早い→早く、うすい→うすく、しずか→しずかに、きれい→きれいに、元気→元気に",
   hl:["大きく書いて","早く来られますか","うすく切って","元気に遊んで","小さくしてください","からくしないで","静かにしてください"],
   rows:[{"jp":"学生：先生、字が小さいです。もっと大きく書いてください。","en":"Teacher, the writing is small. Please write bigger."},{"jp":"明日の朝、早く来られますか。","en":"Can you come early tomorrow morning?"},{"jp":"ハムときゅうりをうすく切って、パンにはさむとサンドイッチができます。","en":"Slice the ham and cucumber thin, put them in bread, and you have a sandwich."},{"jp":"子どもたちは、外で元気に遊んでいます。","en":"The children are playing happily outside."},{"jp":"彼女の声が聞こえないから、もう少しテレビの音を小さくしてください。","en":"I can’t hear her, so please turn the TV down a little."},{"jp":"これ以上からくしないでよ。食べられないよ。","en":"Don’t make it any hotter. I won’t be able to eat it."},{"jp":"赤ちゃんが寝ているから、静かにしてください。","en":"The baby is sleeping, so please be quiet."}],
   note:"With する it means “make it …”: 小さくする (turn down), 静かにする (keep quiet). Compare なる (15-1): 小さくなる = it becomes small.",
   imgs:["t16-2-1.webp"],
   w:["もっと","する","なる"]},
  {sec:"16-3",kind:"pattern",label:"Now can / no longer — a change over time",jp:"〜ようになりました／〜なくなりました",lv:"L16",vid:"QhGchCAewL4",
   formula:"[Verb:potential] {ようになりました}｜[Verb:dictionary form] {ようになりました}｜[Verb:ない-stem] {なくなりました}",
   meaning:"A change that happened gradually. Potential + ようになる = can do it now (couldn’t before). Dictionary form + ようになる = do it now (didn’t before). ない → なくなる = no longer.",
   rules:"飲む→飲めるようになりました、食べる→食べられるようになりました、作る→作るようになりました、行かない→行かなくなりました、怒らない→怒らなくなりました",
   hl:["話せるようになりました","歩けるようになります","食べられるようになりました","作るようになりました","帰るようになりました","怒らなくなりました","作らなくなりました"],
   rows:[{"jp":"前は日本語が話せませんでした。今は話せます。→ 日本語が話せるようになりました。","en":"I couldn’t speak Japanese before; now I can. → I’ve become able to speak Japanese."},{"jp":"赤ちゃんは１才ぐらいで歩けるようになります。","en":"Babies learn to walk at about one year old."},{"jp":"前は日本料理がぜんぜん食べられませんでしたが、最近食べられるようになりました。","en":"I couldn’t eat Japanese food at all before, but recently I’ve become able to."},{"jp":"彼は一人暮らしを始めて、料理を作るようになりました。","en":"Since he started living alone, he has started cooking."},{"jp":"彼は、結婚して、家に早く帰るようになりました。","en":"Since getting married, he comes home early."},{"jp":"A：最近社長は怒らなくなりましたね。 B：そうですね。どうしてかな？","en":"The boss doesn’t get angry any more, does he? — True. I wonder why."},{"jp":"A：よく料理を作りますか。 B：前は作りませんでしたが、最近は作るようになりました。（前は作りましたが、最近は作らなくなりました。）","en":"Do you cook often? — I didn’t before, but recently I’ve started. (I used to, but recently I’ve stopped.)"}],
   imgs:["t16-3-1.webp","t16-3-2.webp"],
   w:["ように","なる","最近","前は"]},
]},

{id:"L17",n:17,lvl:2,title:"お茶会①",en:"Lesson 17",goal:"When…, after doing…, must, need not — and friends’ talk in the plain past.",cards:[
  {sec:"17-1",kind:"pattern",label:"When …",jp:"〜とき",lv:"L17",vid:"1H7-BkPb3Ew",
   formula:"[Verb:dictionary form／ない-form] {とき}、[Sentence]｜[い-adj] {とき}、[Sentence]｜[な-adj] {な} {とき}、[Sentence]｜[Noun] {の} {とき}、[Sentence]",
   meaning:"とき = (at) the time when. It is a noun, so it connects like one: い-adjectives directly, な-adjectives with な, nouns with の.",
   rules:"飲む→飲むとき、飲まない→飲まないとき、あつい→あついとき、しずか→しずかなとき、元気→元気なとき、雨→雨のとき、子ども→子どものとき",
   hl:["いたいとき","子どものとき","病気のとき","いいとき","ないとき","ひまなとき","わからないとき","行くとき","どんなとき","熱があるとき"],
   rows:[{"jp":"頭がいたいとき、薬を飲みます。","en":"When I have a headache, I take medicine."},{"jp":"子どものとき、よく外で遊びました。","en":"When I was a child, I often played outside."},{"jp":"病気のとき、しずかに寝ます。","en":"When I’m sick, I rest quietly."},{"jp":"天気がいいとき、ドライブに行きます。","en":"When the weather is nice, I go for a drive."},{"jp":"お金がないとき、いつも友だちに借ります。","en":"When I have no money, I always borrow from friends."},{"jp":"ひまなとき、図書館に行って、本を読みます。","en":"When I’m free, I go to the library and read."},{"jp":"漢字の読み方がわからないとき、どうしますか。","en":"What do you do when you don’t know how to read a kanji?"},{"jp":"学校へ行くとき、いつもiPadを持って行きます。","en":"When I go to school I always take my iPad."},{"jp":"医者：それは、熱があるとき、飲んでください。","en":"Take that one when you have a fever."},{"jp":"A：どんなとき、タクシーに乗りますか。 B：時間がないとき、乗ります。","en":"When do you take a taxi? — When I have no time."}],
   note:"Ask with どんなとき: どんなとき、国に帰りたくなりますか。",
   imgs:["t17-1-1.webp","t17-1-2.webp"],
   w:["とき","どんなとき","子ども","病気"]},
  {sec:"17-2",kind:"pattern",label:"After doing … (first A, then B)",jp:"〜てから",lv:"L17",vid:"7Q_DBCdIVmk",
   formula:"[Verb①:て-form] {から}、[Verb②]",
   meaning:"First finish A, then do B. It stresses the order more than a plain て-chain (10-3).",
   rules:"行く→行ってから、飲む→飲んでから、食べる→食べてから、する→してから",
   hl:["食べてから","してから","読んでから","考えてから","みがいてから"],
   rows:[{"jp":"朝ごはんを食べてから、歯をみがきます。","en":"I brush my teeth after eating breakfast."},{"jp":"あなたは歯をみがいてから、朝ご飯を食べますか。","en":"Do you brush your teeth and then eat breakfast?"},{"jp":"宿題をしてから、テレビを見ます。","en":"I watch TV after doing my homework."},{"jp":"よく説明書を読んでから、使ってください。","en":"Please read the instructions carefully before you use it."},{"jp":"大切なことですから、よく考えてから決めてください。","en":"It’s important, so think it over well before you decide."}],
   note:"Don’t mix up てから (after) and から (because, 12-4): 食べてから vs 食べるから.",
   imgs:["t17-2-1.webp"],
   w:["てから","説明書","決める"]},
  {sec:"17-3",kind:"pattern",label:"Must / have to",jp:"〜なくてはいけません",lv:"L17",vid:"ogxZndW0RqE",
   formula:"[Verb:ない-stem] {なくてはいけません}",
   meaning:"Take the ない-form, change ない to なく and add てはいけません — literally “not doing it is not allowed”.",
   rules:"行かない→行かなくてはいけません、飲まない→飲まなくてはいけません、食べない→食べなくてはいけません、しない→しなくてはいけません、こない→来なくてはいけません",
   hl:["しなくてはいけません","払わなくてはいけません","飲まなくてはいけません","起きなくてはいけません","行かなくてはいけません"],
   rows:[{"jp":"会社員は仕事をしなくてはいけません。","en":"Office workers have to work."},{"jp":"国民は税金を払わなくてはいけません。","en":"Citizens must pay taxes."},{"jp":"看護師：この薬はにがいです。でも、飲まなくてはいけません。","en":"This medicine is bitter. But you have to take it."},{"jp":"朝７時の飛行機に乗るから、明日は早く起きなくてはいけません。","en":"I’m taking a 7 a.m. flight, so I have to get up early tomorrow."},{"jp":"A：今晩飲みに行きませんか。 B：すみません。明日テストがあるから勉強しなくてはいけません。","en":"Won’t you come for a drink tonight? — Sorry, I have a test tomorrow, so I have to study."},{"jp":"山田さんは会社員だから、会社に行かなくてはいけません。","en":"Mr. Yamada is an office worker, so he has to go to the office."}],
   note:"Opposite of 10-2 てはいけません (must not). Its answer partner is 17-4 なくてもいいです.",
   imgs:["t17-3-1.webp"],
   w:["なくては","いけません","税金"]},
  {sec:"17-4",kind:"pattern",label:"Don’t have to",jp:"〜なくてもいいです",lv:"L17",vid:"gkdyYcojmBY",
   formula:"[Verb:ない-stem] {なくてもいいです}",
   meaning:"It is not necessary. ない → なくてもいいです. It is the answer to 〜なくてはいけませんか.",
   rules:"行かない→行かなくてもいいです、飲まない→飲まなくてもいいです、食べない→食べなくてもいいです、しない→しなくてもいいです、こない→来なくてもいいです",
   hl:["しなくてもいいです","書かなくてもいいです","予約しなくてもいいです","持って行かなくてはいけませんか","持って行かなくてもいいです","脱がなくてもいいです","あしたでもいいです"],
   rows:[{"jp":"A：このタイプは今日中ですか。 B：いいえ、今日中にしなくてもいいです。あしたでもいいです。","en":"Does this typing have to be done today? — No, you don’t have to do it today. Tomorrow is fine."},{"jp":"名前を書いてください。でも、住所は書かなくてもいいです。","en":"Please write your name. But you don’t have to write your address."},{"jp":"あのホテルはいつもすいているから、予約しなくてもいいです。","en":"That hotel is always empty, so you don’t need to book."},{"jp":"A：お弁当を持って行かなくてはいけませんか。 B：レストランがあるから、持って行かなくてもいいです。","en":"Do I have to take a packed lunch? — There’s a restaurant, so you don’t need to."},{"jp":"このホテルは、部屋の中でくつを脱がなくてもいいです。","en":"In this hotel you don’t have to take your shoes off in the room."}],
   note:"Compare 10-1 てもいいです (you may do it) with なくてもいいです (you need not do it).",
   imgs:["t17-4-1.webp"],
   w:["なくても","いいです","今日中"]},
  {sec:"友だち②",kind:"pattern",label:"Talking with friends ② — the plain past",jp:"友だちのことば②：〜た／〜なかった",lv:"L17",vid:"vWQ_5AnR09U",
   formula:"Q: [Noun]、[Verb:た-form]？｜A: {うん}、[Verb:た-form]。｜A: {ううん}、[Verb:ない-stem] {なかった}。｜[Plain past] {から}／{けど}、[Sentence]",
   meaning:"The plain past. The た-form is the て-form with て→た, で→だ. The negative past turns ない into なかった. Join two clauses with から (so) or けど (but).",
   rules:"①買う→買って→買った、書く→書いて→書いた、話す→話して→話した、飲む→飲んで→飲んだ、乗る→乗って→乗った｜②食べる→食べて→食べた、見る→見て→見た｜③する→して→した、来る→来て→来た｜ない→なかった：買わない→買わなかった、しない→しなかった、来ない→来なかった",
   hl:["見た","見なかった","会った","会わなかった","乗れた","乗れなかった","ふったから","ふったけど","できた","しなかったから","わかったよ","寝られなかった"],
   rows:[{"jp":"A：昨日、テレビ見た？ B：ううん、見なかった。","en":"Did you watch TV yesterday? — No, I didn’t."},{"jp":"A：きのう彼に会った？ B：うん、会った。／ううん、会わなかった。","en":"Did you see him yesterday? — Yeah. / No."},{"jp":"A：子どもの時、自転車に乗れた？ B：うん、乗れた。／ううん、乗れなかった。","en":"Could you ride a bike as a kid? — Yeah. / No, I couldn’t."},{"jp":"きのうは、雨がふったから、家にいました。","en":"It rained yesterday, so I stayed home."},{"jp":"きのうは、雨がふったけど、出かけました。","en":"It rained yesterday, but I went out."},{"jp":"A：昨日のテスト、できた？ B：ううん、ぜんぜん。うちで勉強しなかったから…。","en":"How did yesterday’s test go? — Not at all. I didn’t study at home…"},{"jp":"B：うん。ぜんぜん勉強しなかったけど、全部わかったよ。","en":"Yeah. I didn’t study at all, but I understood everything."}],
   note:"Textbook 友だちのことば② (P116–117). はい・いいえ become うん・ううん, and を／が／へ usually drop out.",
   imgs:["ttomo2-1.webp","ttomo2-2.webp"],
   w:["うん","ううん","から","けど","た形"]},
]},

{id:"L18",n:18,lvl:2,title:"日本人の質問",en:"Lesson 18",goal:"Experiences, things just done, listing actions, still / no longer, and gradual change.",cards:[
  {sec:"18-1",kind:"pattern",label:"Have done before (experience)",jp:"〜たことがあります",lv:"L18",vid:"aDk2PQSTLjE",
   formula:"[Verb:た-form] {ことがあります}｜Q: [Verb:た-form] {ことがありますか}",
   meaning:"Talks about experience: have you ever …? The verb is in the た-form; the answer is just あります／ありません.",
   rules:"行く→行ったことがあります、食べる→食べたことがあります、する→したことがあります、着る→着たことがあります",
   hl:["着たことがありますか","見たことがあります","行ったことがありません","会ったことがありますか","したことがありますか","あたったことがありますか","行ったことがありますか"],
   rows:[{"jp":"A：着物を着たことがありますか。 B：いいえ、ありません。 C：私は１回だけあります。","en":"Have you ever worn a kimono? — No. — I have, just once."},{"jp":"一度だけかぶきを見たことがあります。","en":"I have seen kabuki only once."},{"jp":"私の父は外国へ行ったことがありません。","en":"My father has never been abroad."},{"jp":"A：田中さんのお父さんに会ったことがありますか。 B：はい、ありますよ。いい人ですね。","en":"Have you ever met Mr. Tanaka’s father? — Yes. He’s a nice man."},{"jp":"A：ペルーへ行ったことがありますか。 B：いいえ、まだありませんが、一度行きたいと思います。","en":"Have you been to Peru? — Not yet, but I’d like to go once."},{"jp":"友だちとけんかをしたことがありますか。","en":"Have you ever fought with a friend?"},{"jp":"宝くじにあたったことがありますか。","en":"Have you ever won the lottery?"}],
   note:"Count with 〜回: １回だけ・何回も. Not for things done every day: ×朝ごはんを食べたことがあります。",
   imgs:["t18-1-1.webp"],
   w:["こと","一度","〜回","た形"]},
  {sec:"18-2",kind:"pattern",label:"Have just done",jp:"〜たばかりです",lv:"L18",vid:"usR8R4cLoVo",
   formula:"[Verb:た-form] {ばかりです}",
   meaning:"Something happened only a short while ago — or feels recent to the speaker.",
   hl:["買ったばかりです","入ったばかりです","来たばかりです","来たばかりのとき","食べたばかりだから","寝たばかりだから"],
   rows:[{"jp":"山田：この車は新しいですか。 小山：はい、先月買ったばかりです。","en":"Is this car new? — Yes, I only bought it last month."},{"jp":"彼は新入社員です。きのう会社に入ったばかりです。","en":"He’s a new employee. He just joined the company yesterday."},{"jp":"A：遅くなってすみません。 B：いや、私も今来たばかりです。","en":"Sorry I’m late. — No, I’ve only just arrived myself."},{"jp":"日本に来たばかりのときは、ちょっとさびしかったです。","en":"When I had just come to Japan, I was a bit lonely."},{"jp":"A：私が作ったケーキです。どうぞ。 B：ありがとう。でも、さっきごはんを食べたばかりだから、おなかがいっぱいです。","en":"Here’s a cake I made. — Thanks. But I’ve just eaten, so I’m full."},{"jp":"シーッ、赤ちゃんが寝たばかりだから、静かにしてください。","en":"Shh, the baby has just gone to sleep, so please be quiet."}],
   note:"ばかり works like a noun: たばかりの＋N, たばかりだから.",
   imgs:["t18-2-1.webp"],
   w:["ばかり","さっき","今"]},
  {sec:"18-3",kind:"pattern",label:"Do things like A and B",jp:"〜たり〜たりします",lv:"L18",vid:"COwCYl8gnm4",
   formula:"[Verb①:た-form] {り}、[Verb②:た-form] {り} {します}",
   meaning:"Lists a few examples of what you do — not all of them, and in no special order. The tense goes on the final します.",
   rules:"食べた→食べたり、飲んだ→飲んだり、書いた→書いたり、読んだ→読んだり、した→したり",
   hl:["したり","見たりします","見たり","とったりしました","歌ったり","おどったりして","書いたり","かけたりしません","したり、音楽を聞いたりしています","行ったり来たり"],
   rows:[{"jp":"日よう日にせんたくをしたり、テレビを見たりします。","en":"On Sundays I do things like laundry and watching TV."},{"jp":"旅行では、めずらしい物を見たり、写真をとったりしました。","en":"On the trip I saw unusual things, took photos and so on."},{"jp":"きのうのパーティでは、歌ったり、おどったりして、とても楽しかったです。","en":"At yesterday’s party we sang, danced and so on — it was great fun."},{"jp":"彼はあまり手紙を書いたり、電話をかけたりしません。","en":"He doesn’t really write letters or make phone calls."},{"jp":"若い人は、よくスマホでゲームをしたり、音楽を聞いたりしています。","en":"Young people often play games and listen to music on their phones."},{"jp":"店の前を、人々が行ったり来たりしています。","en":"People are coming and going in front of the shop."}],
   note:"Pairs of opposites show a back-and-forth: 開けたり閉めたり、立ったりすわったり、上がったり下がったり。",
   imgs:["t18-3-1.webp","t18-3-2.webp"],
   w:["たり","します"]},
  {sec:"18-4",kind:"pattern",label:"Still / not any more",jp:"まだ〜／もう〜ません",lv:"L18",vid:"fegfHkF_0ts",
   formula:"Q: {まだ} [Adj／Verb] {ですか}｜A: はい、{まだ} [Adj] {です}／[Verb:て-form] {います}｜A: いいえ、{もう} [Verb:ます-stem] {ません}／[い-adj:−い] {くありません}",
   meaning:"まだ + affirmative = still. もう + negative = not any more. (Compare 13-5: もう + past = already, まだ + ていません = not yet.)",
   hl:["まだ痛いですか","もう痛くありません","まだ雨が降っていますか","もう降っていません","まだいらっしゃいますか","もういません","まだ熱がありますか","もうありません","まだ子供","もう子供じゃない"],
   rows:[{"jp":"Q：まだ痛いですか。 A：もう痛くありません。","en":"Does it still hurt? — It doesn’t hurt any more."},{"jp":"A：まだ雨が降っていますか。ちょっと外を見てください。 B：もう降っていませんよ。太陽が出ています。","en":"Is it still raining? Look outside. — It’s stopped. The sun’s out."},{"jp":"A：もしもし、○○会社です。 B：すみませんが、田中さんはまだいらっしゃいますか。 A：田中はもういません。さっき帰りました。","en":"Is Mr. Tanaka still there? — He’s no longer here. He left a moment ago."},{"jp":"医者：まだ熱がありますか。 患者：いいえ、もうありません。よく寝たから熱が下がりました。","en":"Do you still have a fever? — No, not any more. I slept well and it went down."},{"jp":"母：愛子はまだ子供だから一人で旅行してはいけません。 愛子：もう子供じゃないよ。１５才だよ。","en":"You’re still a child, so you can’t travel alone. — I’m not a child any more. I’m 15!"}],
   note:"The four combinations: もう＋past (already) ・ まだ＋ていません (not yet) ・ まだ＋affirmative (still) ・ もう＋negative (no longer).",
   imgs:["t18-4-1.webp"],
   w:["まだ","もう","痛い","熱"]},
  {sec:"18-5",kind:"pattern",label:"Has been changing / will go on changing",jp:"〜てきました／〜ていきます",lv:"L18",vid:"5XUmIsGslGM",
   formula:"[Verb:て-form] {きました}｜[Verb:て-form] {いきます}",
   meaning:"Change seen along a timeline: てきました = has been happening up to now; ていきます = will keep going from now on. Usually with change verbs (なる, なれる, ふえる, へる).",
   rules:"なります→なってきました／なっていきます、なれます→なれてきました、ふえます→ふえてきました／ふえていきます、へります→へってきました／へっていきます",
   hl:["寒くなってきました","寒くなっていきます","暑くなってきました","上手になってきました","なれてきました","ふえてきました","ふえていく","へってきました","へっていく"],
   rows:[{"jp":"寒くなってきました。（これから）寒くなっていきます。","en":"It has been getting colder. It will keep getting colder."},{"jp":"暑くなってきましたね。","en":"It’s getting hot, isn’t it."},{"jp":"日本語がだんだん上手になってきましたね。","en":"Your Japanese has been gradually improving."},{"jp":"だんだん日本の生活になれてきました。","en":"I’ve gradually got used to life in Japan."},{"jp":"世界の人口はふえてきました。これからもふえていくでしょう。","en":"The world population has been rising. It will probably keep rising."},{"jp":"美しい森がへってきました。これからもへっていくと思いますか。","en":"Beautiful forests have been shrinking. Do you think they will keep shrinking?"}],
   note:"Different from 10-5 てきます (go, do it, and come back): here くる／いく show time, not movement.",
   imgs:["t18-5-1.webp"],
   w:["だんだん","ふえる","へる","なれる"]},
]},

{id:"L19",n:19,lvl:2,title:"博物館",en:"Lesson 19",goal:"Advice, past clauses describing nouns, after doing, something / somewhere / someone — and plain speech for adjectives and nouns.",cards:[
  {sec:"19-1",kind:"pattern",label:"You had better …",jp:"〜たほうがいいです",lv:"L19",vid:"E3AcGCkfZGk",
   formula:"[Verb:た-form] {ほうがいいです}｜[Verb:ない-form] {ほうがいいです}",
   meaning:"Advice. た-form + ほうがいい = you’d better do it; ない-form + ほうがいい = you’d better not.",
   rules:"行く→行ったほうがいい／行かないほうがいい、飲む→飲んだほうがいい／飲まないほうがいい、食べる→食べたほうがいい／食べないほうがいい、する→したほうがいい／しないほうがいい",
   hl:["切ったほうがいいです","切らないほうがいいです","予約したほうがいい","聞いたほうがいいです","見ないほうがいいです","使ったほうがいいです","出ないほうがいい","運動したほうがいい"],
   rows:[{"jp":"A：髪を切ったほうがいいです。 B：切らないほうがいいです。","en":"You should cut your hair. — You’d better not cut it."},{"jp":"クリスマスは混んでいるから、切符を予約したほうがいいと思います。","en":"It’s crowded at Christmas, so I think you’d better book tickets."},{"jp":"授業がわからないときは、先生に聞いたほうがいいです。","en":"When you don’t understand the class, you should ask the teacher."},{"jp":"授業中、辞書は見ないほうがいいです。","en":"You’d better not look at a dictionary during class."},{"jp":"友だちと話すときも日本語を使ったほうがいいです。","en":"You should use Japanese when talking with friends too."},{"jp":"地震のときは、すぐ火を消してください。あぶないからあわてて外へ出ないほうがいいですよ。","en":"In an earthquake, turn off the stove at once. It’s dangerous, so don’t rush outside."},{"jp":"毎日運動したほうがいいですよ。","en":"You should exercise every day."}],
   note:"Softer with と思います: 〜たほうがいいと思います。",
   imgs:["t19-1-1.webp","t19-1-2.webp"],
   w:["ほう","いい","アドバイス"]},
  {sec:"19-2",kind:"pattern",label:"The film I saw yesterday — a past clause on a noun",jp:"た形＋名詞",lv:"L19",vid:"8-vu-qKEuaY",
   formula:"[Verb:た-form] [Noun]｜[Verb:ない-stem] {なかった} [Noun]",
   meaning:"Like 14-4, but in the past: a plain past clause sits in front of the noun. The doer inside the clause takes が.",
   rules:"行った＋ところ→行ったところ、読んだ＋本→読んだ本、見た＋映画→見た映画、行かなかった＋ところ→行かなかったところ、来なかった＋学生→来なかった学生",
   hl:["見た映画","とった写真","買った本","書いた小説","借りたかさ","いた人","来なかった人"],
   rows:[{"jp":"きのう山田さんが見た映画はおもしろかったです。","en":"The film Mr. Yamada saw yesterday was interesting."},{"jp":"これはハワイでとった写真です。","en":"This is a photo I took in Hawaii."},{"jp":"先月買った本はとても役に立ちます。","en":"The book I bought last month is very useful."},{"jp":"これは私の父が書いた小説です。","en":"This is a novel my father wrote."},{"jp":"山田さんは、友だちに借りたかさを電車の中に忘れました。","en":"Mr. Yamada left the umbrella he borrowed from a friend on the train."},{"jp":"A：おとといＢさんといっしょにいた人は、Ｂさんのお兄さんですか。 B：そうですよ。","en":"Was the person with you the day before yesterday your brother? — Yes."},{"jp":"きのう来なかった人の名前をおしえてください。","en":"Please tell me the names of the people who didn’t come yesterday."}],
   note:"Inside the clause は becomes が: 父が書いた小説 (not ×父は書いた小説).",
   imgs:["t19-2-1.webp"],
   w:["た形","名詞修飾"]},
  {sec:"19-3",kind:"pattern",label:"After …",jp:"〜たあとで",lv:"L19",vid:"4LEBMxCRJt4",
   formula:"[Verb:た-form] {あとで}、[Sentence]｜[Noun] {の} {あとで}、[Sentence]",
   meaning:"After A, B. The verb is in the た-form even for future events; a noun takes の.",
   rules:"飲む→飲んだあとで、食べる→食べたあとで、テスト→テストのあとで、仕事→仕事のあとで",
   hl:["食べたあとで","帰ったあとで","授業のあとで","食べる前に"],
   rows:[{"jp":"医者：赤い薬は食べる前に飲んでください。白い薬は食べたあとで飲んでください。","en":"Take the red medicine before eating, and the white one after eating."},{"jp":"田中さんが帰ったあとで、彼に電話がありました。","en":"After Mr. Tanaka went home, there was a phone call for him."},{"jp":"授業のあとで、いっしょに食事をしませんか。","en":"Won’t you have a meal with me after class?"}],
   note:"Partner of 14-1 前に: dictionary form + 前に / た-form + あとで. Compare 17-2 てから, which stresses “first finish A”.",
   imgs:["t19-3-1.webp","t19-3-2.webp"],
   w:["あとで","前に"]},
  {sec:"19-4",kind:"pattern",label:"Something, somewhere, someone, some day",jp:"何か／どこか／だれか／いつか",lv:"L19",vid:"0tvVz-vBMKM",
   formula:"{何か}／{どこか}／{だれか} [Verb]｜Q: {何か} [Verb:ます-stem] {ましたか}｜A: はい、[Answer]｜A: いいえ、{何も}／{どこへも}／{だれも} [Verb:ます-stem] {ません}",
   meaning:"Question word + か = some(thing / where / one / day). Answer a か-question with はい + the thing, or いいえ + question word + も + negative.",
   hl:["何か","どこか","だれか","いつか","何も","だれも","どこへ","だれかに"],
   rows:[{"jp":"あ、あそこに何かいます！","en":"Oh, there’s something over there!"},{"jp":"となりの部屋にだれかいます。","en":"There’s someone in the next room."},{"jp":"A：きのうだれかこのパソコン使った？ B：さあ、だれも使わなかったと思いますよ。","en":"Did anyone use this computer yesterday? — Hmm, I don’t think anyone did."},{"jp":"いつか、ピラミッドを見に行きたいです。","en":"Some day I want to go and see the pyramids."},{"jp":"あそこに何かへんなものがありますよ。","en":"There’s something strange over there."},{"jp":"どこかおもしろいところへ行きたいです。","en":"I want to go somewhere interesting."},{"jp":"だれかドイツ語がわかる人はいますか。","en":"Is there anyone who understands German?"},{"jp":"Q：何か食べましたか。 A：はい、おにぎりを食べました。／いいえ、何も食べませんでした。","en":"Did you eat anything? — Yes, a rice ball. / No, nothing."},{"jp":"Q：先週、どこかへ行きましたか。","en":"Did you go anywhere last week?"}],
   note:"何か＋もの、どこか＋ところ、だれか＋人 can take a description in between: 何かへんなもの、どこかおもしろいところ。 See also the Question words card (まとめ).",
   imgs:["t19-4-1.webp","t19-4-2.webp"],
   w:["何か","どこか","だれか","いつか","何も","だれも"]},
  {sec:"友だち③",kind:"pattern",label:"Talking with friends ③ — plain forms and endings",jp:"友だちのことば③：ふつう形・よ／ね／な／かな",lv:"L19",vid:"o_hexWgIdSo",
   formula:"[Noun]／[な-adj] {だ}・{じゃない}・{だった}・{じゃなかった}｜[い-adj] {い}・{くない}・{かった}・{くなかった}｜[Verb] {る}・{ない}・{た}・{なかった}｜[Sentence] {よ}／{ね}／{な}／{かな}",
   meaning:"Every polite form has a plain partner. Friends drop です／ます and finish with an ending: よ tells something new, ね shares a feeling, な talks to yourself, かな wonders.",
   rules:"休みです→休み（だ）、休みじゃありません→休みじゃない、休みでした→休みだった、休みじゃありませんでした→休みじゃなかった｜元気でした→元気だった、元気じゃありませんでした→元気じゃなかった｜楽しいです→楽しい、楽しくありません→楽しくない、楽しかったです→楽しかった、楽しくありませんでした→楽しくなかった｜食べます→食べる、食べません→食べない、食べました→食べた、食べませんでした→食べなかった",
   hl:["どうだった","よかったよ","よくなかった","おいしかったから","おいしかったけど","会ったよ","おいしいよ","変だよ","勉強したね","おいしかったね","親切だね","覚えられないな","暑かったな","大変だな","食べられるかな","寒いかな","かんたんかな"],
   rows:[{"jp":"A：先週の旅行、どうだった？ B：よかったよ。 A：天気はどうだった？ B：あまりよくなかった。","en":"How was last week’s trip? — It was good. — How was the weather? — Not so good."},{"jp":"A：きのうのレストラン、どうだった？ B：おいしかったから、また行きたい。（おいしかったけど、高かった。）","en":"How was the restaurant yesterday? — It was good, so I want to go again. (It was good, but expensive.)"},{"jp":"よ：さっき、駅前でミンスに会ったよ。／このケーキ、すごくおいしいよ。／あの人、ちょっと変だよ。","en":"よ — telling someone something they don’t know."},{"jp":"ね：この漢字、きのう勉強したね。／ここのラーメン、すごくおいしかったね。／あの人、親切だね。","en":"ね — the same feeling, shared."},{"jp":"な：この漢字、覚えられないな。／今日は、暑かったな。／この仕事、大変だな。","en":"な — talking to yourself."},{"jp":"かな：これ、１人で食べられるかな。／明日は、寒いかな。／期末テスト、かんたんかな。","en":"かな — asking yourself, wondering."}],
   note:"Textbook 友だちのことば③ (P174–179). In plain speech だ is often dropped after a noun or な-adjective: 休み？ — うん、休み。",
   imgs:["ttomo3-1.webp","ttomo3-2.webp"],
   w:["だ","だった","じゃない","よ","ね","な","かな","ふつう形"]},
]},

{id:"L20",n:20,lvl:2,title:"お茶会②",en:"Lesson 20",goal:"Might, explaining with んです, and wanting someone else to do something.",cards:[
  {sec:"20-1",kind:"pattern",label:"Might / may",jp:"〜かもしれません",lv:"L20",vid:"ONaL69N5YPc",
   formula:"[Plain form] {かもしれません}｜[Noun]／[な-adj] {かもしれません}",
   meaning:"A possibility you are not sure of (about 50%). Plain form + かもしれません; after a noun or な-adjective, だ disappears.",
   rules:"行く→行くかもしれません、行かなかった→行かなかったかもしれません、あつい→あついかもしれません、へんだ→へんかもしれません、雨だ→雨かもしれません、雨だった→雨だったかもしれません",
   hl:["カイさんかもしれません","降るかもしれません","事故かもしれません","あるかもしれません","いそがしいかもしれません","知らないかもしれません","帰国したかもしれません","学生かもしれません","学生じゃないかもしれません"],
   rows:[{"jp":"A：あっ、でも服が同じですね。 B：そうですね。やっぱりカイさんかもしれませんね。","en":"Oh, but the clothes are the same. — True. It might be Kai after all."},{"jp":"あしたは雨が降るかもしれません。","en":"It might rain tomorrow."},{"jp":"電車が来ませんね。事故かもしれません。","en":"The train isn’t coming. Maybe there’s been an accident."},{"jp":"神様にお願いしたから、いいことがあるかもしれません。","en":"I prayed, so something good might happen."},{"jp":"A：来週のパーティに行けますか。 B：ううん、来週はちょっといそがしいかもしれません。","en":"Can you come to next week’s party? — Hmm, I might be a bit busy next week."},{"jp":"新しく来た学生は学校の規則を知らないかもしれません。","en":"The new students might not know the school rules."},{"jp":"A：最近リーさんを見ませんね。 B：そうですね。帰国したかもしれませんね。","en":"We haven’t seen Lee lately. — True. Maybe he went home."},{"jp":"彼は学生かもしれません。学生じゃないかもしれません。","en":"He might be a student. He might not be."}],
   imgs:["t20-1-1.webp","t20-1-2.webp"],
   w:["かもしれない","普通形"]},
  {sec:"20-2",kind:"pattern",label:"Explaining — んです",jp:"〜んです",lv:"L20",vid:"SblaSl7ZVY0",
   formula:"[Plain form] {んです}｜[Noun]／[な-adj] {な} {んです}｜Q: {どうしたんですか}",
   meaning:"Gives or asks for an explanation, a reason or background (“you see…”, “the thing is…”). After a noun or な-adjective, だ becomes な.",
   rules:"食べる→食べるんです、食べなかった→食べなかったんです、大きい→大きいんです、しんせつだ→しんせつなんです、雨だ→雨なんです、雨だった→雨だったんです",
   hl:["行ったんです","見に行ったんです","帰国するんです","どうしたんですか","悪いんです","行くんですか","結婚式なんです","便利なんですよ","食べたんですか"],
   rows:[{"jp":"A：うれしそうですね。 B：ええ。きのう、ディズニーランドに行ったんです！","en":"You look happy. — Yes. I went to Disneyland yesterday!"},{"jp":"きのう、すもうを見に行ったんです。","en":"Yesterday I went to see sumo, you see."},{"jp":"A：来週、うちに遊びに来ませんか。 B：実は、来週帰国するんです。","en":"Won’t you visit next week? — Actually, I’m going home next week."},{"jp":"A：どうしたんですか。 B：ちょっと気分が悪いんです。","en":"What’s the matter? — I’m feeling a bit unwell."},{"jp":"A：きれいな服を着て、どこへ行くんですか。 B：今日は友だちの結婚式なんです。","en":"Where are you going all dressed up? — It’s my friend’s wedding today."},{"jp":"A：新しいアパートはどうですか。 B：近くにスーパーがあって、とても便利なんですよ。","en":"How’s the new flat? — There’s a supermarket nearby, so it’s really convenient."},{"jp":"A：きのうラーメンを３杯食べました。 B：ええっ、そんなに食べたんですか。","en":"I ate three bowls of ramen yesterday. — What, you ate that much?"}],
   note:"Asking with んですか shows interest in the situation: どこへ行くんですか。 Don’t overuse it with a teacher — it can sound pushy.",
   imgs:["t20-2-1.webp","t20-2-2.webp"],
   w:["んです","実は","どうしたんですか"]},
  {sec:"20-3",kind:"pattern",label:"I want you to …",jp:"〜てほしいです",lv:"L20",vid:"kXH4NSZrUoM",
   formula:"[Person] {に} [Verb:て-form] {ほしいです}｜[Person] {に} [Verb:ない-form] {でほしいです}",
   meaning:"Wanting someone else to do (or not do) something. The person you want it from takes に.",
   rules:"買う→買ってほしい、見る→見てほしい、する→してほしい、来る→来てほしい、買わない→買わないでほしい、しない→しないでほしい",
   hl:["優勝してほしい","教えてほしいです","やめてほしい","おまけしてほしい","吸わないでほしいです"],
   rows:[{"jp":"A：どのチームが優勝すると思う？ B：さあ・・・。でも、私はAチームに優勝してほしい！","en":"Which team do you think will win? — Hmm… but I want team A to win!"},{"jp":"（私は）スミスさんに英語を教えてほしいです。","en":"I want Mr. Smith to teach me English."},{"jp":"あのくせはやめてほしい！","en":"I wish he’d stop that habit!"},{"jp":"おまけしてほしいんだけど、もう少し安くならない？","en":"I’d like a discount — can’t it be a bit cheaper?"},{"jp":"子どもがいるところでは、たばこを吸わないでほしいです。","en":"I don’t want people to smoke where there are children."}],
   note:"For yourself use たい (8-3): 行きたい = I want to go. 行ってほしい = I want you to go.",
   imgs:["t20-3-1.webp","t20-3-2.webp"],
   w:["ほしい","に","たい"]},
]},

{id:"L21",n:21,lvl:2,title:"カイさんの誕生日",en:"Lesson 21",goal:"Giving and receiving things and favours: あげる・くれる・もらう.",cards:[
  {sec:"21-1",kind:"pattern",label:"Give and receive",jp:"あげます／くれます／もらいます",lv:"L21",vid:"bXkMdHOlvpw",
   formula:"[Giver] {は} [Receiver] {に} [Thing] {を} {あげます}｜[Receiver] {は} [Giver] {に}／{から} [Thing] {を} {もらいます}｜[Giver] {は} {私に} [Thing] {を} {くれます}",
   meaning:"あげる = give (away from me or between others). もらう = receive (the receiver is the topic; the giver takes に or から). くれる = someone gives to me or my family.",
   hl:["あげました","もらいました","もらった","くれます","くれました","がくれた"],
   rows:[{"jp":"ワンさんはカイさんに花をあげました。","en":"Wang gave Kai flowers."},{"jp":"田中さんは吉田さんにプレゼントをあげました。","en":"Mr. Tanaka gave Ms. Yoshida a present."},{"jp":"父の誕生日に、私は（父に）イタリア製のベルトをあげました。","en":"On my father’s birthday I gave him an Italian belt."},{"jp":"村田さんはまりさんに（から）手作りのケーキをもらいました。","en":"Mr. Murata got a home-made cake from Mari."},{"jp":"これは佐藤さんに（から）もらったコーヒーカップです。（＝佐藤さんがくれたコーヒーカップです。）","en":"This is a coffee cup I got from Ms. Sato. (= the cup Ms. Sato gave me)"},{"jp":"母は一週間に一回私にメールをくれます。","en":"My mother sends me an e-mail once a week."},{"jp":"鈴木さんは私の弟にプロ野球のチケットをくれました。","en":"Mr. Suzuki gave my little brother baseball tickets."},{"jp":"A：きれいなスカーフですね。 B：友だちにもらったんです。","en":"What a pretty scarf. — I got it from a friend."}],
   note:"Never ×私にあげる. If the receiver is me or my family, it is くれる.",
   imgs:["t21-1-1.webp"],
   w:["あげる","くれる","もらう","プレゼント"]},
  {sec:"21-2",kind:"pattern",label:"Doing a favour",jp:"〜てあげます／〜てもらいます／〜てくれます",lv:"L21",vid:"Sfi_wws7eQo",
   formula:"[Person] {は} [Person] {に} [Verb:て-form] {あげます}｜[Person] {は} [Person] {に} [Verb:て-form] {もらいます}｜[Person] {は} {私に} [Verb:て-form] {くれます}",
   meaning:"The same three verbs after a て-form give or receive an action as a favour. Who benefits follows the same rule as 21-1.",
   rules:"作ります→作ってあげます、教えます→教えてあげます、します→してあげます、来ます→来てあげます",
   hl:["教えてあげました","あんであげました","作ってあげます","手伝ってもらいます","紹介してもらいました","教えてくれます","助けてくれました","持ってあげました"],
   rows:[{"jp":"山田さんはおばあさんに道を教えてあげました。","en":"Mr. Yamada showed an old lady the way."},{"jp":"愛子さんはカイさんにセーターをあんであげました。","en":"Aiko knitted Kai a sweater."},{"jp":"休みの日には、私はみんなに国の料理を作ってあげます。","en":"On days off I cook food from my country for everyone."},{"jp":"母は妹に家事を手伝ってもらいます。","en":"My mother gets my little sister to help with the housework."},{"jp":"私は友だちにアルバイトを紹介してもらいました。","en":"A friend introduced me to a part-time job."},{"jp":"スミスさんはひまなとき私に英語を教えてくれます。","en":"Mr. Smith teaches me English when he’s free."},{"jp":"知らない男の人が、海で私の妹を助けてくれました。","en":"A man I didn’t know saved my sister at the beach."},{"jp":"鈴木さんは友だちの荷物を持ってあげました。","en":"Mr. Suzuki carried his friend’s bags for him."}],
   note:"With 手伝う・助ける・連れて行く・送る the person takes を, not に: 私を手伝ってくれました。 With a thing that belongs to them: 友だちの荷物を持ってあげました。",
   imgs:["t21-2-1.webp","t21-2-2.webp"],
   w:["あげる","もらう","くれる","手伝う","教える"]},
  {sec:"21-3",kind:"pattern",label:"Could you … for me?",jp:"〜てもらえませんか／〜てくれない？",lv:"L21",vid:"S0TDe23mCqg",
   formula:"[Verb:て-form] {もらえませんか}｜[Verb:て-form] {くれない}？｜[Verb:て-form] {くれて}、{ありがとう}",
   meaning:"Polite request: てもらえませんか (could I have you …?). With friends: てくれない？ Thanks for a favour: てくれてありがとう.",
   rules:"手伝う→手伝ってもらえませんか、貸す→貸してもらえませんか、見せる→見せてくれない？、送る→送ってくれて、ありがとう",
   hl:["貸してもらえませんか","教えてもらえませんか","送ってくれてありがとう","くれない"],
   rows:[{"jp":"すみません、お金を貸してもらえませんか。","en":"Excuse me, could you lend me some money?"},{"jp":"すみません、この漢字の読み方を教えてもらえませんか。","en":"Excuse me, could you tell me how to read this kanji?"},{"jp":"その本を１週間ぐらい貸してもらえませんか。","en":"Could you lend me that book for about a week?"},{"jp":"この間は、送ってくれてありがとう。","en":"Thanks for driving me home the other day."},{"jp":"ちょっと見せてくれない？","en":"Can you show me? (to a friend)"}],
   note:"Softer than てください (9-2), which can sound like an order.",
   imgs:["t21-3-1.webp","t21-3-2.webp"],
   w:["もらえませんか","くれない","ありがとう"]},
]},

{id:"L22",n:22,lvl:2,title:"カイさんのスランプ",en:"Lesson 22",goal:"Once / if with たら, even if with ても, no matter how much, and ending up doing something.",cards:[
  {sec:"22-1",kind:"pattern",label:"Once A happens, (then) B",jp:"〜たら、すぐ〜",lv:"L22",vid:"yxZpa1A1GQo",
   formula:"[Verb:た-form] {ら}、{すぐ} [Sentence]",
   meaning:"A will certainly happen; when it does, do B. Unlike と (15-2), the second half can be a request, plan or invitation.",
   rules:"書く→書いたら、食べる→食べたら、する→したら、終わる→終わったら、なる→なったら",
   hl:["着いたら","終わったら","起きたら","済んだら","なったら","書いたら"],
   rows:[{"jp":"駅に着いたら、すぐ電話してください。","en":"Call me as soon as you arrive at the station."},{"jp":"授業が終わったら、すぐ事務室に来てください。","en":"Come to the office as soon as class finishes."},{"jp":"あした起きたら、すぐこの薬を飲んでください。","en":"Take this medicine as soon as you get up tomorrow."},{"jp":"仕事が済んだら、いっぱい飲みに行きませんか。","en":"When work’s done, shall we go for a drink?"},{"jp":"秋になったら、日光へ行きましょう。","en":"When autumn comes, let’s go to Nikko."},{"jp":"A：作文、書きましたか。 B：いいえ、今書いています。 A：じゃあ、書いたら、見せてくださいね。","en":"Have you written the essay? — No, I’m writing it now. — Then show me when you’ve finished."}],
   note:"Inside the たら clause the doer takes が: 彼が駅に着いたら、私は田中さんに電話します。",
   imgs:["t22-1-1.webp"],
   w:["たら","すぐ"]},
  {sec:"22-2",kind:"pattern",label:"If …",jp:"もし〜たら",lv:"L22",vid:"ZvslUmNw8nc",
   formula:"{もし} [Verb:た-form] {ら}、[Sentence]｜[い-adj:−い] {かったら}｜[な-adj]／[Noun] {だったら}",
   meaning:"A condition that may or may not happen. もし (if) at the start signals it. Every word type takes the past form + ら.",
   rules:"行く→行ったら／行かなかったら、食べる→食べたら／食べなかったら、大きい→大きかったら／大きくなかったら、しずか→しずかだったら／しずかじゃなかったら、雨→雨だったら／雨じゃなかったら",
   hl:["降ったら","起きたら","わからなかったら","いやだったら","うるさかったら","鳥だったら","もらったら","なったら","なかったら"],
   rows:[{"jp":"もし雨が降ったら、試合は中止です。","en":"If it rains, the match is cancelled."},{"jp":"もし地震が起きたら、どうしますか。","en":"What will you do if there’s an earthquake?"},{"jp":"もしわからなかったら、先生に聞いてください。","en":"If you don’t understand, ask the teacher."},{"jp":"いやだったら、食べなくてもいいですよ？","en":"If you don’t like it, you don’t have to eat it."},{"jp":"となりの部屋の人がうるさかったら、どうしますか。","en":"What do you do if the people next door are noisy?"},{"jp":"もし鳥だったら、空を飛びたい。","en":"If I were a bird, I’d want to fly in the sky."},{"jp":"もし百万円もらったら、どうしますか。","en":"What would you do if you got a million yen?"}],
   imgs:["t22-2-1.webp","t22-2-2.webp"],
   w:["もし","たら"]},
  {sec:"22-3",kind:"pattern",label:"Even if …",jp:"もし〜ても",lv:"L22",vid:"ZuE75WP461w",
   formula:"{もし} [Verb:て-form] {も}、[Sentence]｜[い-adj:−い] {くても}｜[な-adj]／[Noun] {でも}",
   meaning:"Even if A happens, B is still true. Verbs: て-form + も; い-adj: くても; な-adj and nouns: でも.",
   rules:"行く→行っても／行かなくても、食べる→食べても／食べなくても、大きい→大きくても／大きくなくても、しずか→しずかでも／しずかじゃなくても、雨→雨でも／雨じゃなくても",
   hl:["来ても","来たら","あっても","結婚しても","帰っても","安かったら","安くても","雨でも"],
   rows:[{"jp":"もし台風が来たら行きません。 → もし台風が来ても行きます。","en":"If a typhoon comes, I won’t go. → Even if a typhoon comes, I’ll go."},{"jp":"明日は大切な会議があるから、熱があっても休めません。","en":"There’s an important meeting tomorrow, so I can’t take the day off even with a fever."},{"jp":"私は結婚しても名字を変えません。","en":"Even if I marry, I won’t change my surname."},{"jp":"国へ帰っても、カイで勉強したことは忘れません。","en":"Even after I go home, I won’t forget what I studied at Kai."},{"jp":"A：安かったら買いますか。 B：いいえ、安くても買いません。","en":"Would you buy it if it were cheap? — No, I wouldn’t buy it even if it were cheap."},{"jp":"明日は雨でもサッカーの試合はあります。","en":"Tomorrow’s football match is on even if it rains."}],
   imgs:["t22-3-1.webp","t22-3-2.webp"],
   w:["ても","でも","もし"]},
  {sec:"22-4",kind:"pattern",label:"No matter how much …",jp:"いくら〜ても",lv:"L22",vid:"2KpG7eEPDzE",
   formula:"{いくら} [Verb:て-form] {も}、[Sentence]",
   meaning:"However much you do A, B does not change. The second half is usually negative or surprising.",
   rules:"飲む→いくら飲んでも、食べる→いくら食べても、練習する→いくら練習しても",
   hl:["いくら飲んでも","いくら練習しても","いくら食べても","いくらしかっても","いくらあやまっても","いくら見ても"],
   rows:[{"jp":"たくさん飲んだらよっぱらいます。 → いくら飲んでも酔っぱらいません。","en":"If I drink a lot I get drunk. → However much I drink, I don’t get drunk."},{"jp":"いくら練習しても上手になりません。","en":"No matter how much I practise, I don’t get better."},{"jp":"彼女はいくら食べてもふとらないね。","en":"She doesn’t put on weight however much she eats."},{"jp":"お母さんがいくらしかっても、あの子は平気です。","en":"However much his mother scolds him, that boy doesn’t care."},{"jp":"私がいくらあやまっても彼女は許してくれません。","en":"No matter how much I apologise, she won’t forgive me."},{"jp":"あの映画はいくら見てもあきません。","en":"I never get tired of that film, however many times I watch it."}],
   imgs:["t22-4-1.webp"],
   w:["いくら","ても"]},
  {sec:"22-5",kind:"pattern",label:"Ended up … / did it completely",jp:"〜てしまいました",lv:"L22",vid:"UGCg-9CTMMY",
   formula:"[Verb:て-form] {しまいました}｜[Verb:て-form] {しまいます}",
   meaning:"Two feelings: regret (something went wrong — I lost it, I broke it), or completion (I finished it off). In casual speech てしまった → ちゃった, でしまった → じゃった.",
   rules:"割る→割ってしまいました、落とす→落としてしまいました、忘れる→忘れてしまいました、読む→読んでしまいました、忘れてしまいました→忘れちゃった、飲んでしまいました→飲んじゃった",
   hl:["割ってしまいました","こわしてしまいました","なくしてしまったんです","忘れてしまいました","読んでしまいました","書いてしまいます"],
   rows:[{"jp":"彼女はお皿を割ってしまいました。","en":"She (accidentally) broke a plate."},{"jp":"誕生日にもらった時計を落としてこわしてしまいました。","en":"I dropped and broke the watch I got for my birthday."},{"jp":"A：どうしたんですか。 B：かぎをなくしてしまったんです。","en":"What’s wrong? — I’ve lost my key."},{"jp":"A：この前行ったレストランの名前、覚えてる？ B：ええと、忘れてしまいました。","en":"Do you remember the restaurant we went to? — Um, I’ve forgotten."},{"jp":"きのう買った本はもう読んでしまいました。","en":"I’ve already finished the book I bought yesterday."},{"jp":"明日先生に作文をなおしてもらいたいから、今晩書いてしまいます。","en":"I want the teacher to correct my essay tomorrow, so I’ll get it written tonight."}],
   note:"反転 lesson (P242). 〜ちゃった／〜じゃった is the friends’ version.",
   imgs:["t22-5-1.webp"],
   w:["しまう","ちゃった","じゃった"]},
]},

{id:"L23",n:23,lvl:2,title:"キャンプ",en:"Lesson 23",goal:"Let’s! with the volitional form, plans with と思っています, and whether or not.",cards:[
  {sec:"23-1",kind:"form",label:"The volitional form — let’s!",jp:"意志形（いしけい）",lv:"L23",vid:"F_wxB8VVg3w",
   formula:"[Verb:volitional]！",
   meaning:"The plain “let’s …” / “I’ll …”. Group 1: the last sound moves from -u to -o + う. Group 2: る → よう. する → しよう, 来る → こよう. It is the friends’ version of ましょう.",
   rules:"①行く→行こう、飲む→飲もう、会う→会おう、帰る→帰ろう、待つ→待とう、話す→話そう｜②食べる→食べよう、見る→見よう、寝る→寝よう｜③する→しよう、来る→こよう",
   hl:["行こう","登ろう","食べよう","しよう"],
   rows:[{"jp":"みんな、行こう！","en":"Everyone, let’s go!"},{"jp":"富士山に登りたい → 登ろう！","en":"I want to climb Mt. Fuji → Let’s climb it!"},{"jp":"A：おなかすいたね。何か食べよう。 B：うん、そうしよう。","en":"I’m hungry. Let’s eat something. — Yeah, let’s."}],
   note:"反転 lesson (P250–251). Polite 行きましょう ＝ plain 行こう.",
   imgs:["t23-1-1.webp"],
   w:["意志形","ましょう"]},
  {sec:"23-2",kind:"pattern",label:"I’m thinking of …",jp:"〜（よ）うと思っています",lv:"L23",vid:"Ju-DLLcDKZA",
   formula:"[Verb:volitional] {と} {思っています}",
   meaning:"Talk about a plan or intention you have been considering for some time.",
   rules:"行く→行こうと思っています、食べる→食べようと思っています、する→しようと思っています、来る→来ようと思っています",
   hl:["のぼろうと思っています","登ろうと思っています","行こうと思っています","受けようと思っています","買おうと思っている","見ようと思っています","しようと思っています"],
   rows:[{"jp":"夏休みは富士山に登ろうと思っています。","en":"I’m thinking of climbing Mt. Fuji in the summer holidays."},{"jp":"今度の日曜日に美術館へ絵を見に行こうと思っています。","en":"I’m thinking of going to the art museum this Sunday."},{"jp":"来年日本語能力試験を受けようと思っています。","en":"I’m thinking of taking the JLPT next year."},{"jp":"来年、車を買おうと思っているから、貯金しなくてはいけません。","en":"I’m planning to buy a car next year, so I have to save."},{"jp":"今日はまっすぐうちに帰らないで、新宿に寄って映画を見ようと思っています。","en":"Today I’m thinking of stopping in Shinjuku for a film instead of going straight home."},{"jp":"A：国に帰って、どんな仕事をしますか。 B：日本語を使う仕事をしようと思っています。","en":"What work will you do back home? — I’m thinking of a job that uses Japanese."}],
   note:"と思っています = a plan held for a while; と思います = decided just now.",
   imgs:["t23-2-1.webp"],
   w:["思う","意志形","予定"]},
  {sec:"23-3",kind:"pattern",label:"Whether or not / I don’t know who, what …",jp:"〜かどうかわかりません",lv:"L23",vid:"te03HwY2goE",
   formula:"[Plain form] {かどうか} {わかりません}｜[Question word] … [Plain form] {か} {わかりません}",
   meaning:"Embeds a question inside a sentence. A yes/no question → かどうか. A question with a question word → just か. After a noun or な-adjective, だ drops.",
   rules:"来ますか→来るかどうか、来ましたか→来たかどうか、おいしいですか→おいしいかどうか、元気ですか→元気かどうか、いつ来ますか→いつ来るか、何を見ましたか→何を見たか、どんな花ですか→どんな花か",
   hl:["来るかどうか","話せるかどうか","よかったかどうか","どこにあるか","どのぐらいか","いくらかかるか","行くかどうか"],
   rows:[{"jp":"ワン：明日のパーティに中村さんも来ますか。 山本：さあ、来るかどうか私はわかりません。","en":"Is Mr. Nakamura coming to the party tomorrow too? — Hmm, I don’t know whether he’s coming."},{"jp":"A：ヤンさんは英語が話せますか。 B：さあ、話せるかどうかわかりません。","en":"Can Yang speak English? — I don’t know whether he can."},{"jp":"先週の日曜日は天気がよかったかどうか覚えていない。","en":"I don’t remember whether the weather was good last Sunday."},{"jp":"大使館はどこにあるか知っていますか。","en":"Do you know where the embassy is?"},{"jp":"東京の人口はどのぐらいか知っていますか。","en":"Do you know how big Tokyo’s population is?"},{"jp":"京都までいくらかかるか調べなくてはいけません。","en":"I have to find out how much it costs to Kyoto."}],
   note:"Works with わかりません, 知っていますか, 覚えていません, 調べます, 教えてください.",
   imgs:["t23-3-1.webp","t23-3-2.webp"],
   w:["かどうか","わかりません","知っています"]},
]},
];
function renderSheets(){
  const el = document.getElementById('content');
  el.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;"><div class="sheets-tabs" style="margin:0;"><button class="sheet-tab active" id="stab-verbs" onclick="switchSheet(\'verbs\',this,true)">Verbs</button><button class="sheet-tab" id="stab-adj" onclick="switchSheet(\'adj\',this,true)">Adjectives</button><button class="sheet-tab" id="stab-nouns" onclick="switchSheet(\'nouns\',this,true)">Nouns</button><button class="sheet-tab" id="stab-kanji" onclick="switchSheet(\'kanji\',this,true)">Kanji</button><button class="sheet-tab" id="stab-expr" onclick="switchSheet(\'expr\',this,true)">Expr</button><button class="sheet-tab" id="stab-other" onclick="switchSheet(\'other\',this,true)">Other</button></div><div id="sheet-lvl-filters" style="display:flex;gap:4px;flex-wrap:wrap;align-items:center;min-height:28px;"></div></div><div id="sheet-content"></div><div style="padding:12px 0 8px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><button onclick="copySheet()" id="copy-btn" style="height:36px;padding:0 18px;border-radius:20px;border:none;background:var(--red);color:#fff;font-size:12px;font-weight:700;font-family:Arial,sans-serif;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.15);display:inline-flex;align-items:center;gap:7px;transition:opacity .15s;letter-spacing:.04em;flex-shrink:0;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button><div id="copy-cols" class="copy-cols"></div><div style="margin-left:auto;display:flex;align-items:center;gap:8px;padding:7px 12px;background:var(--rose);border-radius:12px;border-left:3px solid var(--red);font-size:11px;color:var(--sub);font-family:Arial,sans-serif;line-height:1.6;"><img src="https://avatars.githubusercontent.com/u/616547?s=280&v=4" style="width:22px;height:22px;border-radius:4px;flex-shrink:0;" alt="Quizlet"><span><b style="color:var(--red);">Import to Quizlet</b> — Click Copy, then on Quizlet create a <b>new flashcard set</b>, click <b>Import</b>, paste as‑is and you&#39;re done!</span></div></div>';
  // Migrate legacy 'questions' type to 'expr'
  if(currentSheetType === 'questions') currentSheetType = 'expr';
  if(activeSheets.has('questions')){ activeSheets.delete('questions'); activeSheets.add('expr'); }
  _syncSheetChips(); renderLvlFilters(); renderCopyCols(); renderSheetTable();
}

let currentSheetType = 'verbs';
// Sheets are picked the same way levels are: a chip each, several at once,
// and none picked means all of them.
const activeSheets = new Set(['verbs']);
const SHEET_ORDER = ['verbs','adj','nouns','kanji','expr','other'];
const SHEET_LABEL = {verbs:'Verbs', adj:'Adjectives', nouns:'Nouns', kanji:'Kanji', expr:'Expr', other:'Other'};
const _pickedSheets = () => activeSheets.size ? SHEET_ORDER.filter(t=>activeSheets.has(t)) : SHEET_ORDER.slice();
let activeSheetLvls = new Set();   // lesson numbers, shared by the word sheets
let activeKanjiLvls = new Set();   // KL1–KL12 / SIGN, the kanji sheet only
let activeKanjiModes = new Set(['read','write']);

// The level chips answer to whichever sheets are picked: lesson numbers for
// the word sheets, KL levels and the read/write pair when kanji is among them.
function renderLvlFilters(){
  const el = document.getElementById('sheet-lvl-filters');
  if(!el) return;
  const picked=_pickedSheets();
  const wordSheets=picked.filter(t=>t!=='kanji'&&t!=='expr');
  let html='';
  if(wordSheets.length){
    const lvls=[...new Set(wordSheets.flatMap(t=>(sheetData[t]||[]).map(r=>String(r.lvl))))]
      .sort((a,b)=>(a==='EXPR')-(b==='EXPR')||parseInt(a)-parseInt(b));
    html+=lvls.map(lvl=>{
      const a=activeSheetLvls.has(lvl);
      const lab=String(lvl);
      const wide=lab.length>2;
return '<button onclick="filterSheetLvl(\''+lvl+'\',this)" title="'+(lvl==='EXPR'?'Expressions':'Lesson '+lvl)+'" style="'+(wide?'padding:0 9px;border-radius:14px;':'width:28px;border-radius:50%;padding:0;')+'height:28px;border:1.5px solid '+(a?'var(--red)':'var(--dot)')+';background:'+(a?'var(--red)':'var(--white)')+';color:'+(a?'var(--white)':'var(--mid)')+';font-size:10px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;">'+lab+'</button>';
    }).join('');
  }
  if(picked.includes('kanji')){
    if(html) html+='<span style="width:10px;display:inline-block;"></span>';
    html+=_kanjiLvlChips(wordSheets.length>0);
  }
  el.innerHTML=html;
}
// Beside the lesson numbers a bare 1–8 would read as a lesson, so the kanji
// levels keep their KL when they are not alone.
function _kanjiLvlChips(prefix){
    const kls=['KL1','KL2','KL3','KL4','KL5','KL6','KL7','KL8','KL9','KL10','KL11','KL12','SIGN'];
    const pill=(active,label,click)=>'<button onclick="'+click+'" style="height:28px;padding:0 '+(label.length>2?'10':'0')+'px;'+(label.length<=2?'width:28px;':'')+'border-radius:'+(label.length<=2?'50%':'14px')+';border:1.5px solid '+(active?'var(--red)':'var(--dot)')+';background:'+(active?'var(--red)':'var(--white)')+';color:'+(active?'var(--white)':'var(--mid)')+';font-size:'+(label.length<=2?'9':'10')+'px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;'+( label.length<=2?'padding:0;':'')+'">' +label+'</button>';
    const klBtns=kls.map(kl=>pill(activeKanjiLvls.has(kl), kl==='SIGN'?'Sign':(prefix?kl:kl.replace('KL','')), "filterSheetKl('"+kl+"',this)")).join('');
    const sep='<span style="width:6px;display:inline-block;"></span>';
    const mkMode=(mode,svg)=>{const a=activeKanjiModes.has(mode);return '<button onclick="toggleSheetKanjiMode(\''+mode+'\')" title="'+mode[0].toUpperCase()+mode.slice(1)+'" style="width:28px;height:28px;border-radius:50%;border:1.5px solid '+(a?'var(--red)':'var(--dot)')+';background:'+(a?'var(--red)':'var(--white)')+';color:'+(a?'var(--white)':'var(--mid)')+';cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;">'+svg+'</button>';};
    const eyeSvg='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    const penSvg='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
    const mr=mkMode('read',eyeSvg);
    const mw=mkMode('write',penSvg);
  return klBtns+sep+mr+mw;
}

function toggleSheetKanjiMode(mode){
  if(activeKanjiModes.has(mode)) activeKanjiModes.delete(mode); else activeKanjiModes.add(mode);
  renderLvlFilters(); renderSheetTable();
}

function filterSheetKl(kl, btn){
  if(activeKanjiLvls.has(kl)) activeKanjiLvls.delete(kl); else activeKanjiLvls.add(kl);
  renderLvlFilters(); renderSheetTable();
}
function filterSheetLvl(lvl, btn){
  if(activeSheetLvls.has(lvl)) activeSheetLvls.delete(lvl); else activeSheetLvls.add(lvl);
  renderLvlFilters(); renderSheetTable();
}

// One sheet at a time; levels carry over when you switch.
function switchSheet(type, btn, preserveState){
  activeSheets.clear(); activeSheets.add(type);
  currentSheetType = type;
  if(!preserveState){ activeSheetLvls = new Set(); activeKanjiLvls = new Set(); }
  _syncSheetChips();
  renderLvlFilters(); renderCopyCols();
  renderSheetTable();
}
function _syncSheetChips(){
  const on=_pickedSheets();
  document.querySelectorAll('.sheets-tabs .sheet-tab').forEach(b=>{
    const t=(b.id||'').replace('stab-','');
    b.classList.toggle('active', activeSheets.size ? activeSheets.has(t) : on.includes(t));
  });
}

function _lvlLabel(l){ return String(l)==='EXPR' ? 'EXPR' : 'L'+l; }
// One sheet's rows, after the level chips have had their say.
function _sheetSource(type){
  let src = type==='expr' ? questionsData : (sheetData[type]||[]);
  if(type==='kanji'){
    if(activeKanjiLvls.size>0) src=src.filter(r=>activeKanjiLvls.has(r.kl));
    if(activeKanjiModes.size>0&&activeKanjiModes.size<2) src=src.filter(r=>activeKanjiModes.has(r.mode));
  } else if(type!=='expr' && activeSheetLvls.size>0){
    src=src.filter(r=>activeSheetLvls.has(String(r.lvl)));
  }
  return src;
}
function _sheetTableHTML(type){
  let src = _sheetSource(type);
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
    headers=['Kanji','Reading','Meaning','Practice','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+r.kanji+'</td><td class="sm notranslate" translate="no">'+r.reading+'</td><td>/ '+r.meaning+'</td><td><span class="sheet-lvl" style="background:'+(r.mode==='write'?'var(--rose)':'rgba(0,0,0,.05)')+'">'+r.mode+'</span></td><td><span class="sheet-lvl">'+r.kl+'</span></td></tr>');
  } else if(type==='other'){
    headers=['Word','English','Type','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.word)+(r.reading&&r.reading!==r.word?'\u3000<span class="sm">'+r.reading+'</span>':'')+'</td><td>'+r.eng+'</td><td style="color:var(--sub);font-size:11px;">'+(r.pos==='Adv'?'adverb':r.pos==='Conj'?'conjunction':'expression')+'</td><td><span class="sheet-lvl">'+_lvlLabel(r.lvl)+'</span></td></tr>');
  } else {
    headers=['Expression','English','Category'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.reading||r.jp)+'</td><td>'+r.eng+'</td><td style="color:var(--sub);font-size:11px;">'+(r.cat||'')+'</td></tr>');
  }
  return '<div class="sheet-wrap"><table class="sheet-table"><thead><tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+rows.join('')+'</tbody></table></div>';
}
// Every picked sheet, stacked, each under its own name when more than one is on.
function renderSheetTable(){
  const el = document.getElementById('sheet-content');
  if(!el) return;
  const picked=_pickedSheets();
  el.innerHTML = picked.map((t,i)=>{
    const n=_sheetSource(t).length;
    const cap = picked.length>1
      ? '<div class="sheet-caption"'+(i?' style="margin-top:18px;"':'')+'>'+SHEET_LABEL[t]+'<span class="sheet-caption-n">'+n+'</span></div>'
      : '';
    return cap + _sheetTableHTML(t);
  }).join('');
}
// Which columns the Copy button puts on the clipboard, per sheet. Everything
// is on by default; untick a column to copy, say, just the word and its
// て-form into Quizlet.
const SHEET_COLS = {
  verbs: [['word','Word'],['eng','English'],['dict','Dictionary'],['te','て-form'],['nai','ない form'],['grp','Group'],['lvl','Level']],
  adj:   [['word','Word'],['eng','English'],['type','い / な'],['lvl','Level']],
  nouns: [['word','Word'],['reading','Reading'],['eng','English'],['lvl','Level']],
  kanji: [['word','Kanji'],['reading','Reading'],['eng','Meaning'],['mode','Practice'],['lvl','Level']],
  expr:  [['word','Expression'],['eng','English'],['cat','Category']],
  other: [['word','Word'],['reading','Reading'],['eng','English'],['type','Type'],['lvl','Level']],
};
const _copyCols = {};
function _cols(type){
  if(!_copyCols[type]) _copyCols[type] = new Set((SHEET_COLS[type]||[]).map(c=>c[0]));
  return _copyCols[type];
}
function toggleCopyCol(key, btn, type){
  const set=_cols(type||currentSheetType);
  if(set.has(key)) set.delete(key); else set.add(key);
  btn.classList.toggle('active', set.has(key));
}
function renderCopyCols(){
  const el=document.getElementById('copy-cols');
  if(!el) return;
  const picked=_pickedSheets();
  const many=picked.length>1;
  el.innerHTML='<span class="cc-label">Copy</span>'+picked.map(t=>{
    const set=_cols(t);
    const chips=(SHEET_COLS[t]||[]).map(([k,label])=>
      `<button class="cc-chip${set.has(k)?' active':''}" onclick="toggleCopyCol('${k}',this,'${t}')">${label}</button>`).join('');
    return many ? `<span class="cc-group"><span class="cc-group-name">${SHEET_LABEL[t]}</span>${chips}</span>` : chips;
  }).join('');
}
// One record per row, then the selected columns are picked off it.
// One record per row of a sheet, with the level chips already applied, so the
// copy always carries exactly what the table shows.
function _sheetRecords(type){
  const t=type||currentSheetType;
  const src=_sheetSource(t);
  if(t==='verbs'){
    return src.map(r=>{
      const conj=conjLookup[r.word+'#G'+r.grp]||conjLookup[r.reading+'#G'+r.grp]||conjLookup[r.word]||conjLookup[r.reading]||[];
      const nai=(conj.find(f=>f.label==='\u306a\u3044 form')||{jp:''}).jp;
      return {word:r.reading||r.word, eng:r.eng, dict:r.dict, te:r.te, nai, grp:'G'+r.grp, lvl:_lvlLabel(r.lvl)};
    });
  }
  if(t==='adj')   return src.map(r=>({word:r.reading||r.word, eng:r.eng, type:r.adj==='i'?'\u3044':'\u306a', lvl:_lvlLabel(r.lvl)}));
  if(t==='nouns') return src.map(r=>({word:r.word, reading:(r.reading&&r.reading!==r.word)?r.reading:'', eng:r.eng, lvl:_lvlLabel(r.lvl)}));
  if(t==='other') return src.map(r=>({word:r.word, reading:(r.reading&&r.reading!==r.word)?r.reading:'', eng:r.eng, type:r.pos==='Adv'?'adverb':r.pos==='Conj'?'conjunction':'expression', lvl:_lvlLabel(r.lvl)}));
  if(t==='kanji') return src.map(r=>({word:r.kanji, reading:r.reading, eng:r.meaning, mode:r.mode==='read'?'\u8aad\u307f':'\u66f8\u304d', lvl:r.kl}));
  return src.map(r=>({word:r.reading||r.jp, eng:r.eng, cat:r.cat||''}));
}
function copySheet(){
  const btn=document.getElementById('copy-btn');
  const picked=_pickedSheets();
  let keys=[];
  const blocks=picked.map(t=>{
    const ks=(SHEET_COLS[t]||[]).map(c=>c[0]).filter(k=>_cols(t).has(k));
    if(!ks.length) return '';
    keys=keys.concat(ks);
    return _sheetRecords(t).map(rec=>ks.map(k=>rec[k]||'').join('\t')).join('\n');
  }).filter(Boolean);
  const tsv=blocks.join('\n');
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

// Example sentences are never auto-parsed. A particle in running text cannot
// be told apart from the same kana inside a word without parsing: an audit of
// this data flagged でも, the て-form of のむ/よむ/およぐ, ちょっと, どうも and
// この as false hits. So every card names the forms it teaches in its own `hl`
// list, and only those exact strings are marked. A learner reading the shop
// dialogue sees どうやって行きますか and にのります stand out, and nothing else.
function _hlForms(esc, hl){
  if(!hl || !hl.length) return esc;
  // longest first, so 〜てもいいですか wins over the てください inside a neighbour
  const forms = _ea_forms(hl);
  let out = '', i = 0;
  scan: while(i < esc.length){
    for(const f of forms){
      if(esc.startsWith(f, i)){ out += '<b class="hl-form">' + f + '</b>'; i += f.length; continue scan; }
    }
    out += esc[i++];
  }
  return out;
}
const _formCache = new WeakMap();
function _ea_forms(hl){
  let f = _formCache.get(hl);
  if(!f){ f = hl.map(_ea).filter(Boolean).sort((a,b)=>b.length-a.length); _formCache.set(hl, f); }
  return f;
}
function _hlExample(t, hl){
  return _hlForms(_ea(t), hl).replace(/([QAＱＡ])(\s*[:：])/g, '<span class="hl-qa">$1$2</span>');
}
// ── Formula renderer ──────────────────────────────────────────────────────
// A card's formula is the one line a learner should be able to read off the
// card: which form the word in front takes, and what connects it.
//   [Verb:て-form]  a slot — the word type, with the form it must be in
//   {ください}      a connector — particle, ending or fixed piece
//   ｜              a new line; a leading Q: / A: / ① becomes a badge
const _FM_TOKEN = /\[([^\]]+)\]|\{([^}]+)\}|([^\[\{]+)/g;
// Colour code — one colour per word type, the same everywhere:
//   slots:      noun · verb · い-adj · な-adj · sentence
//   connectors: particle · question word · ending / fixed piece
const _FM_PARTICLE = new Set(['は','が','を','に','で','へ','と','も','の','か','ね','よ','な','かな','から','まで','より','や','など','だけ','しか','ごろ','ぐらい','くらい','し','について','の中で','のなかで','けど','でも','ながら','かどうか']);
const _FM_QWORD = /^(なに|なん|何|どこ|だれ|いつ|いくら|いくつ|どう(?!ぞ)|どんな|どちら|どれ|どの)/;
function _slotType(name){
  const n = name.toLowerCase();
  if(/い-adj|i-adj/.test(n)) return 'i';
  if(/な-adj|na-adj/.test(n)) return 'na';
  if(/sentence|result|plain|clause|answer|reason|comment/.test(n)) return 's';
  if(/verb|form|group|potential|volitional/.test(n)) return 'v';
  if(/adj/.test(n)) return 'i';
  return 'n';
}
function _connType(x){
  const k = x.replace(/[。、．,\s?？！!]+$/,'');
  return _FM_PARTICLE.has(k) ? 'p' : _FM_QWORD.test(k) ? 'q' : 'e';
}
function _fmLine(seg){
  let s = seg.trim(), badge = '';
  const g = s.match(/^([①-⑳])\s*/);
  if(g){ badge = `<span class="fm-b">${g[1]}</span>`; s = s.slice(g[0].length); }
  const qa = s.match(/^([QAＱＡ])\s*[:：]\s*/);
  if(qa){ badge = `<span class="fm-b fm-qa">${qa[1]}</span>`; s = s.slice(qa[0].length); }
  let html = '';
  s.replace(_FM_TOKEN, (m, slot, conn, txt)=>{
    if(slot !== undefined){
      const i = slot.indexOf(':');
      const name = i<0 ? slot : slot.slice(0,i), form = i<0 ? '' : slot.slice(i+1);
      const t = _slotType(name);
      html += form ? `<span class="fm-slot fm-${t} fm-has-form"><small>${_ea(name)}</small><b>${_ea(form)}</b></span>`
                   : `<span class="fm-slot fm-${t}"><b>${_ea(name)}</b></span>`;
    } else if(conn !== undefined){
      html += /^[①-⑳]$/.test(conn) ? `<span class="fm-b">${conn}</span>` : `<span class="fm-c fm-${_connType(conn)}">${_ea(conn)}</span>`;
    } else {
      const t = txt.trim();
      if(t) html += `<span class="fm-t">${_ea(t)}</span>`;
    }
    return '';
  });
  return `<div class="fm-line">${badge}${html}</div>`;
}
function _fm(formula){
  return `<div class="fm notranslate" translate="no">${(formula||'').split('｜').map(_fmLine).join('')}</div>`;
}

// ── What a card can be found by ───────────────────────────────────────────
// Particles and endings come out of the formula's {…} pieces, forms out of
// its slots, and the related words are listed on the card. A query that is
// exactly one of these matches on the tag alone — searching は for the text
// は would light up every card on the page.
const _GRAM_PARTICLES = ['は','が','を','に','で','へ','と','も','の','か','ね','よ','かな','から','まで','より','や','など','だけ','ごろ','ぐらい','くらい','し','て','ないで','について','でも','そして','それから','ですが','けど','のほうが','のなかで','いちばん','と','ください'];
const _GRAM_PARTICLE_SET = new Set(_GRAM_PARTICLES);
const _GRAM_KIND = {subject:'Subject',form:'Form',pattern:'Pattern',question:'Question',expression:'Phrases'};
function _gramTags(c){
  if(c._tags) return c._tags;
  const p = new Set(), f = new Set();
  const fms = [c.formula||'', ...(c.items||[]).flatMap(it=>it.uses.map(u=>u.fm||''))];
  (c.items||[]).forEach(it=>it.h.split(/[・\s]+/).forEach(x=>{ x = x.replace(/^＋/,''); if(x) p.add(x); }));
  fms.join('｜').replace(_FM_TOKEN, (m, slot, conn)=>{
    if(slot !== undefined){ const i = slot.indexOf(':'); if(i>=0) f.add(slot.slice(i+1).trim()); }
    else if(conn !== undefined && !/^[①-⑳]$/.test(conn)) p.add(conn.replace(/[。、．,\s?？]+$/,'').trim());
    return '';
  });
  (c.p||[]).forEach(x=>p.add(x));
  const conn = [...p].filter(Boolean);
  return c._tags = {
    p: conn.filter(x=>_GRAM_PARTICLE_SET.has(x)),   // shown as particle chips
    conn,                                            // every connector, for search
    f: [...f],
    w: c.w || []
  };
}
function _gramKey(c){ return c.sec+'|'+c.label; }
// everything on the card, lowercased, for a plain text search
function _gramText(c){
  if(c._text) return c._text;
  const t = _gramTags(c);
  const bits = [c.sec, c.label, c.jp, c.meaning, c.formula, c.rules, c.note, _GRAM_KIND[c.kind]||'',
    ...(c.rows||[]).map(r=>r.jp+' '+r.en), ...t.conn, ...t.f, ...t.w];
  (c.items||[]).forEach(it=>bits.push(it.h, ...it.uses.flatMap(u=>[u.n, u.lv||'', u.fm||'', ...(u.ex||[]).flat()])));
  return c._text = bits.filter(Boolean).join(' ').replace(/[\[\]{}]/g,' ').toLowerCase();
}
function _gramAllTags(c){ const t=_gramTags(c); return [...t.conn, ...t.f, ...t.w].map(x=>x.toLowerCase()); }
// One rule for every place a query meets a card: a tag hit, else the text.
function _gramHit(q, tags, text){
  if(!q) return true;
  if(_GRAM_PARTICLE_SET.has(q)) return tags.includes(q);
  if(tags.includes(q)) return true;
  return matchesSearch(q, text);
}
function _gramHitCard(q, c){ return _gramHit(q, _gramAllTags(c), _gramText(c)); }
function _gramHitEl(q, el){ return _gramHit(q, (el.dataset.tags||'').split('|'), el.dataset.search||''); }
// A query that names a particle, a form or a related word filters the
// grammar cards where they stand instead of rebuilding the page.
let _gramTagSet = null;
function _isGramTagQuery(q){
  if(!q) return false;
  if(_GRAM_PARTICLE_SET.has(q)) return true;
  if(!_gramTagSet){ _gramTagSet = new Set(); for(const s of grammarSections) for(const c of s.cards) _gramAllTags(c).forEach(x=>_gramTagSet.add(x)); }
  return _gramTagSet.has(q);
}
function gramTagSearch(tag){
  const inp = document.getElementById('main-search');
  if(inp) inp.value = tag;
  doSearch(tag);
  const mainEl = document.getElementById('main');
  if(mainEl) mainEl.scrollTo({top:0, behavior:'smooth'});
}

// A card reads top to bottom in order of importance: the rule itself —
// formula, meaning, how the word changes — centred and in full colour;
// then the examples, quieter; then tags, notes, slides and the video.
function _gramVidHTML(id, label){
  return `<button class="gc-more gc-vid-btn" onclick="toggleGramVideo(this)"><span class="gc-more-show">▶ ${label||'video explanation'}</span><span class="gc-more-hide">－ video</span></button><div class="gc-vid" hidden><iframe data-src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1" title="Video explanation" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}
// {…} inside a subject card's example marks the word being taught
function _hlBraces(t){
  return _ea(t).replace(/\{([^}]+)\}/g,'<b class="hl-form">$1</b>').replace(/([QAＱＡ])(\s*[:：])/g,'<span class="hl-qa">$1$2</span>');
}
const _GS_TONE = {'疑問詞':'q','助数詞':'n'};
function _gramItemsHTML(c){
  const tone = _GS_TONE[c.sec] || 'p';
  return `<div class="gs-list">${c.items.map(it=>`<div class="gs-row"><div class="gs-h gs-h-${tone} notranslate" translate="no">${_ea(it.h)}</div><div class="gs-uses">${
    it.uses.map((u,i)=>`<div class="gs-use"><div class="gs-n">${it.uses.length>1?`<span class="gs-i">${'①②③④⑤⑥⑦⑧⑨'[i]}</span>`:''}<span class="gs-n-t">${u.n}</span>${u.lv?`<span class="gs-lv">${_ea(u.lv)}</span>`:''}</div>${
      u.fm?`<div class="gs-fm">${_fm(u.fm)}</div>`:''}${
      (u.ex||[]).map(e=>`<div class="gs-ex notranslate" translate="no">${_hlBraces(e[0])}${e[1]?`<span class="gc-ex-en">${_ea(e[1])}</span>`:''}</div>`).join('')}</div>`).join('')
  }${it.vid?_gramVidHTML(it.vid,'video: '+_ea(it.h)):''}</div></div>`).join('')}</div>`;
}
function _gramCardHTML(c){
  const tags = _gramTags(c);
  const kindLbl = _GRAM_KIND[c.kind] || '';
  const head = `<div class="gc-head"><span class="gc-sec notranslate" translate="no">${_ea(c.sec)}</span><div class="gc-titles"><span class="gc-t">${c.label}</span>${c.jp?`<span class="gc-t-jp notranslate" translate="no">${c.jp}</span>`:''}</div>${kindLbl?`<span class="gc-kind gc-kind-${c.kind}">${kindLbl}</span>`:''}</div>`;
  const core = (c.formula||c.meaning||c.rules) ? `<div class="gc-core${c.formula?'':' gc-core-plain'}">${
    c.formula ? `<div class="gc-fm">${_fm(c.formula)}</div>` : ''}${
    c.meaning ? `<div class="gc-meaning">${c.meaning}</div>` : ''}${
    c.rules ? `<div class="gc-rules notranslate" translate="no">${_hlPattern(c.rules)}</div>` : ''}</div>` : '';
  const itemsHtml = c.items ? _gramItemsHTML(c) : '';
  const rows = c.rows || [];
  const rowsHtml = rows.map(r=>`<span class="gc-ex" translate="no">${_hlExample(r.jp,c.hl)}${r.en?`<span class="gc-ex-en">${_warn(r.en)}</span>`:''}</span>`).join('');
  // three examples show; the rest wait behind one line
  const fold = rows.length > 3;
  const exHtml = rowsHtml ? `<div class="gc-exs"><div class="gc-lbl">Examples</div><div class="gc-ex-list${fold?' gc-fold':''}">${rowsHtml}</div>${fold?`<button class="gc-more" onclick="this.previousElementSibling.classList.toggle('gc-open');this.previousElementSibling.classList.toggle('gc-fold')"><span class="gc-more-show">＋ ${rows.length-3} more example${rows.length-3>1?'s':''}</span><span class="gc-more-hide">－ fewer</span></button>`:''}</div>` : '';
  const chip = (x, cls) => `<span class="gc-tag ${cls}" onclick="gramTagSearch('${_ea(x).replace(/'/g,'&#39;')}')">${_ea(x)}</span>`;
  const tagHtml = (!c.items && (tags.p.length||tags.f.length||tags.w.length))
    ? `<div class="gc-tags notranslate" translate="no">${tags.p.map(x=>chip(x,'gc-tag-p')).join('')}${tags.f.map(x=>chip(x,'gc-tag-f')).join('')}${tags.w.filter(x=>!tags.p.includes(x)).map(x=>chip(x,'gc-tag-w')).join('')}</div>` : '';
  const imgsHtml = (c.imgs&&c.imgs.length) ? `<div class="gc-imgs">${
    c.imgs.map(src=>`<button class="gc-img-btn" onclick="openMaterial('materials/${src}')" title="Class slide — tap to enlarge"><img class="gc-img" loading="lazy" decoding="async" data-src="materials/${src}" alt="Slide from the class material"></button>`).join('')
  }</div>` : '';
  const noteHtml = c.note ? `<div class="gc-note">${c.note}</div>` : '';
  // the video waits behind one line and only loads when asked for
  const vidHtml = c.vid ? _gramVidHTML(c.vid) : '';
  const search = _ea(_gramText(c));
  const tagAttr = _ea(_gramAllTags(c).join('|'));
  return `<div class="gram-fc gram-fc-${c.kind}" data-key="${_ea(_gramKey(c))}" data-lv="${c.lv||''}" data-kind="${c.kind||''}" data-tags="${tagAttr}" data-search="${search}">${head}${core}${itemsHtml}${exHtml}${tagHtml}<div class="gc-foot">${noteHtml}${imgsHtml}${vidHtml}</div></div>`;
}
function toggleGramVideo(btn){
  const box = btn.nextElementSibling;
  const f = box.querySelector('iframe[data-src]');
  if(f){ f.src = f.dataset.src; f.removeAttribute('data-src'); }
  box.hidden = !box.hidden;
  btn.classList.toggle('gc-vid-open', !box.hidden);
}

function renderGrammar(){
  const q = currentSearch;
  const el = document.getElementById('content');
  const secHit = sec => !!q && matchesSearch(q, sec.title, sec.en, sec.id, 'lesson '+sec.n);
  const sections = grammarSections.filter(sec => !q || secHit(sec) || sec.cards.some(c=>_gramHitCard(q,c)));
  if(!sections.length){ el.innerHTML='<div class="empty"><span class="empty-jp">文</span>No grammar found.</div>'; return; }
  const legendHtml = `<div class="gc-legend"><span class="gl-t">Colour code</span><i class="lg lg-n">Noun</i><i class="lg lg-v">Verb</i><i class="lg lg-i">い-adj</i><i class="lg lg-na">な-adj</i><i class="lg lg-s">Sentence</i><span class="gl-sep"></span><i class="lg lg-p">particle</i><i class="lg lg-q">question word</i><i class="lg lg-e">ending</i></div>`;
  const lvHead = {1:'<div class="gram-level" data-lvl="1"><b>Level 1</b><span class="notranslate" translate="no">日本語１</span><i>Lessons 1–12</i></div>',
                  2:'<div class="gram-level" data-lvl="2"><b>Level 2</b><span class="notranslate" translate="no">日本語２</span><i>Lessons 13–23</i></div>'};
  const makeSect = sec => {
    const cards = (!q || secHit(sec)) ? sec.cards : sec.cards.filter(c=>_gramHitCard(q,c));
    const useCards = cards.length ? cards : sec.cards;
    const cardsHtml = useCards.map(_gramCardHTML).join('');
    const goalHtml = sec.goal ? `<div class="gram-goal"><span class="gram-goal-tag">ゴール</span>${sec.goal}</div>` : '';
    return `<div class="gram-section" data-id="${sec.id}" data-lvl="${sec.lvl||0}"><div class="gram-section-header" onclick="toggleGramSection(this)"><span class="gram-section-arrow">›</span><span class="gram-section-num">${sec.n}</span><span class="gram-section-en">${sec.en}</span><span class="gram-section-title notranslate" translate="no">${sec.title}</span><span class="lt-line"></span><span class="lt-count">${sec.cards.length} ${sec.lvl?'rules':'cards'}</span></div><div class="gram-section-body">${goalHtml}<div class="gram-fc-grid">${cardsHtml}</div></div></div>`;
  };
  let lastLvl = null;
  el.innerHTML = `${legendHtml}<div class="gram-sections-grid">${sections.map(sec=>{
    const h = sec.lvl!==lastLvl ? (lvHead[sec.lvl]||'') : '';
    lastLvl = sec.lvl;
    return h + makeSect(sec);
  }).join('')}</div>`;
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
  document.querySelectorAll('#gf-panel .float-btn[data-kind]').forEach(b=>b.classList.toggle('active', activeGramKinds.has(b.dataset.kind)));
  _updateGramBadge();
  applyGramFilters();
}

// Open the Grammar tab on one card: its lesson unfolds, the page scrolls
// there and the card flashes once. Used by the search list and suggestions.
function gotoGramCard(secId, key){
  const gramBtn = document.querySelector(".s-btn[onclick*=\"'grammar'\"]");
  const alreadyOnGrammar = currentTab === 'grammar';
  currentSearch = '';
  if(tabState[currentTab]) tabState[currentTab].search = '';
  const inp = document.getElementById('main-search'); if(inp) inp.value = '';
  const clr = document.getElementById('search-clear'); if(clr) clr.classList.remove('visible');
  const box = document.getElementById('search-suggestions'); if(box) box.classList.remove('visible');
  function nav(){
    const sec = document.querySelector(`.gram-section[data-id="${secId}"]`);
    if(!sec) return;
    const h = sec.querySelector('.gram-section-header');
    const wasOpen = h.classList.contains('open');
    if(!wasOpen) toggleGramSection(h);
    const mainEl = document.getElementById('main');
    setTimeout(()=>{
      const card = [...sec.querySelectorAll('.gram-fc')].find(c=>c.dataset.key===key);
      const target = card || sec;
      if(mainEl){
        const top = target.getBoundingClientRect().top - mainEl.getBoundingClientRect().top + mainEl.scrollTop - 16;
        mainEl.scrollTo({top: Math.max(0, top), behavior:'smooth'});
      }
      if(card){
        card.style.outline='2px solid var(--red)';
        card.style.boxShadow='0 0 0 4px rgba(224,103,92,.15)';
        setTimeout(()=>{
          card.style.outline='2px solid transparent';
          card.style.boxShadow='0 0 0 4px rgba(224,103,92,0)';
          setTimeout(()=>{ card.style.outline=''; card.style.boxShadow=''; }, 700);
        }, 2000);
      }
    }, wasOpen ? 20 : 360);
  }
  if(alreadyOnGrammar){
    const openTitles = new Set(_gramOpenSections);
    renderGrammar();
    document.querySelectorAll('.gram-section-header').forEach(h=>{
      const t = h.querySelector('.gram-section-title');
      if(t && openTitles.has(t.textContent.trim()) && !h.classList.contains('open')) toggleGramSection(h);
    });
    setTimeout(nav, 30);
  } else {
    if(gramBtn) setTab('grammar', gramBtn);
    setTimeout(nav, 200);
  }
}

function renderAll(){
  const q = currentSearch;
  const el = document.getElementById('content');
  let html = '';

  // Words (vocabulary + kanji, grouped by lesson)
  const vData = vocabData[sem]||{};
  let wHtml = '';
  const seen = new Set();
  for(const lvl of WORD_LEVELS){
    const kl = lvl==='EXPR' ? 'SIGN' : (/^L\d+$/.test(lvl) ? 'KL'+lvl.slice(1) : null);
    const fw = (vData[lvl]||[]).filter(w=>matchesSearch(q,w.word,w.reading,w.def) && !seen.has(w.word));
    for(const w of fw){ seen.add(w.word); wHtml += wordCardHTML(w, lvl); }
    if(kl){
      const fk = _sortKanjiLevel((KANJI_BY_LEVEL[kl]||[]).filter(k=>matchesSearch(q,k.kanji,k.reading,k.meaning) && !seen.has(k.kanji)));
      for(const k of fk){ seen.add(k.kanji); wHtml += kanjiCardHTML(k, kl); }
    }
  }
  if(wHtml) html += `<div class="level-tag"><span class="lt-key">語 Words</span><span class="lt-line"></span></div><div class="vocab-grid">${wHtml}</div>`;

  // Grammar
  let gHtml = '';
  for(const sec of grammarSections){
    for(const c of sec.cards){
      if(!_gramHitCard(q, c)) continue;
      gHtml += `<div class="grammar-card" onclick="gotoGramCard('${sec.id}','${_ea(_gramKey(c)).replace(/'/g,'&#39;')}')"><div class="g-head"><span class="gc-sec notranslate" translate="no">${_ea(c.sec)}</span><span class="g-pattern">${c.label}</span>${c.jp?`<span class="gc-t-jp notranslate" translate="no">${c.jp}</span>`:''}<span class="g-lesson">${sec.en}</span></div>${c.formula?`<div class="gc-fm">${_fm(c.formula)}</div>`:''}</div>`;
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
let _prevPopupArgs = null;   // popup to re-open when the counters sheet closes
let _curPopupArgs  = null;   // args of the popup currently on screen
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

// The counters sheet is a side trip, never a card's destination. Every vocab
// and kanji card opens its own word popup; a card that also belongs to a
// counter family gets a Counters button that goes there and comes back.
function _ctrBtnHtml(counterKey){
  if(!counterKey) return '';
  return `<div class="popup-actions"><button class="popup-ctr-btn" onclick="_openCountersFromCard('${_eq(counterKey)}')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px"><rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="8" width="6" height="13" rx="1"/><rect x="16" y="13" width="6" height="8" rx="1"/></svg>Counters</button></div>`;
}

function openConjPopup(word,reading,def,pos,exprKey,mode,grp='',adjT=''){
  _curPopupArgs=[word,reading,def,pos,exprKey,mode,grp,adjT];
  let counterKey=extraCounterMap[word]||extraCounterMap[reading]||(counTypeMap[word]?.key);
  if(!counterKey&&pos==='Coun'){
    for(const[k,cat]of Object.entries(countersData)){if(cat.items.some(i=>i.jp===word||i.reading===reading)){counterKey=k;break;}}
  }
  const ctrHtml=_ctrBtnHtml(counterKey);
  _dmakInstances.forEach(inst=>{if(inst){try{inst.pause();}catch(e){}}}); _dmakInstances=[]; _dmakIndex=0;
  const box=document.getElementById('popup-box');
  const show=(function(){var _p=document.getElementById('conj-popup');_p.classList.remove('hidden');requestAnimationFrame(function(){_p.classList.add('visible');});_updatePopupNav();});

  if(pos==='Kanji'){
    const rdText=(hasKanji(word)&&reading)?reading:'';

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
        ctrHtml+inner;
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
        ctrHtml+inner;
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
      ctrHtml+conjHtml;
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
    ctrHtml+conjHtml;
  show();
}

// Previous / next card. The card you clicked is remembered, and the arrows
// walk the cards currently on screen in page order (filters and collapsed
// sections already hide the rest). A popup not opened from a card, like a
// search hit or a counter row, has no neighbours and shows no arrows.
let _navCard = null;
document.addEventListener('click',e=>{ const c=e.target.closest&&e.target.closest('.vocab-card'); if(c) _navCard=c; },true);
const _navCards=()=>[...document.querySelectorAll('.vocab-card[onclick]')].filter(c=>c.offsetParent);
function _updatePopupNav(){
  const prev=document.getElementById('popup-prev'), next=document.getElementById('popup-next');
  if(!prev||!next) return;
  const cards=_navCard&&_navCard.isConnected?_navCards():[];
  const i=cards.indexOf(_navCard);
  prev.hidden=next.hidden=i<0;
  if(i>=0){ prev.disabled=i===0; next.disabled=i===cards.length-1; }
}
function popupStep(d){
  const cards=_navCards(), c=cards[cards.indexOf(_navCard)+d];
  if(!c) return;
  c.scrollIntoView({block:'center'});
  c.click();
}
document.addEventListener('keydown',e=>{
  if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight') return;
  if(!document.getElementById('conj-popup').classList.contains('visible')) return;
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
  e.preventDefault(); popupStep(e.key==='ArrowLeft'?-1:1);
});

function closePopup(e){ if(e.target.id==='conj-popup') closePopupDirect(); }
function closePopupDirect(){
  _navCard=null; _updatePopupNav();
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
  // erasing:false is not cosmetic. DMAK's animated erase removes each path in a
  // timeout callback, and render() clears those timeouts before it draws — so an
  // animated erase followed by a replay left the previous strokes on the paper
  // and the new ones drew on top of them.
  const _stroke = {attr:{stroke:DMAK_STROKE,'stroke-width':7.5,'stroke-linecap':'round','stroke-linejoin':'round',active:DMAK_ACTIVE},order:{visible:false},animated:{drawing:true,erasing:false}};
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

// Wipe a character back to an empty grid, synchronously and completely.
// Nothing may draw until this has run to the end: DMAK's own erase() leaves
// half-removed paths behind whenever a render cancels its timeouts, which is
// what made a replay draw over the previous attempt.
function _dmakClear(inst){
  if(!inst) return;
  try{ inst.pause(); }catch(e){}
  for(const id of (inst.timeouts && inst.timeouts.erasing) || []) clearTimeout(id);
  if(inst.timeouts) inst.timeouts.erasing = [];
  const strokes = inst.strokes || [];
  for(const st of strokes){
    const o = st && st.object;
    if(!o) continue;
    if(o.text){ try{ o.text.remove(); }catch(e){} o.text = null; }
    if(o.path){ try{ o.path.remove(); }catch(e){} o.path = null; }
  }
  inst.pointer = 0;
}

// Draw a character to its finished state with no animation. DMAK skips every
// timeout when stroke.animated.drawing is false, so this paints in one go.
function _dmakDrawInstant(inst){
  if(!inst) return;
  _dmakClear(inst);
  const an = inst.options && inst.options.stroke && inst.options.stroke.animated;
  const wasDraw = an ? an.drawing : null;
  try{
    if(an) an.drawing=false;
    inst.render();
  }catch(e){}
  finally{ if(an) an.drawing=wasDraw; }
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
// replay button — nothing plays on its own. The box is wiped to an empty grid
// before a single new stroke is drawn, so a replay never lands on top of the
// previous one.
function _dmakPlayAt(idx){
  if(idx<0||idx>=_dmakInstances.length)return;
  _dmakClearTimers();
  _dmakIndex=idx;
  _dmakHighlight(idx);
  const inst=_dmakInstances[idx];
  if(inst){
    _dmakClear(inst);
    try{ inst.render(); }catch(e){}
  }
  _dmakPlaying=true;
  _dmakUpdateNav();
}

function _dmakUpdateNav(){
  const _replaySvg=`<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;
  const nav=document.getElementById('popup-dmak-nav');
  if(!nav)return;
  const total=_dmakInstances.length;
  const i=_dmakIndex;
  // One control: replay. The character is already drawn when the popup opens,
  // so a separate play button only ever repeated what replay does.
  const ctrlHtml=`<div class="popup-dmak-nav-left"><button class="popup-dmak-ctrl-btn" onclick="replayDmak()" title="Draw the stroke order from the start">${_replaySvg}</button></div>`;
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
// Remember the whole popup, not a hand-rebuilt copy of it: closing the
// counters sheet re-opens the exact card popup you left, whatever kind it was.
function _openCountersFromCard(counterKey){
  _prevPopupArgs=_curPopupArgs;
  closePopupDirect();
  openAllCountersPopup(counterKey);
}
function closeCounterPopupDirect(){
  var _p=document.getElementById('ctr-popup');
  _p.classList.remove('visible');
  setTimeout(function(){
    _p.classList.add('hidden');
    if(_prevPopupArgs){
      var a=_prevPopupArgs; _prevPopupArgs=null;
      openConjPopup.apply(null,a);
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