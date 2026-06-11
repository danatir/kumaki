const vocabData = {};
const kanjiData = {};
vocabData['S1'] = {
  'L1': [
    {word:'わたし',reading:'わたし',def:'I, me',pos:'Noun'},
    {word:'あなた',reading:'',def:'you',pos:'Noun'},
    {word:'かれ',reading:'かれ',def:'he, him',pos:'Noun'},
    {word:'かのじょ',reading:'かのじょ',def:'she, her',pos:'Noun'},
    {word:'日本人',reading:'にほんじん',def:'Japanese person',pos:'Noun'},
    {word:'かんこく',reading:'かんこく',def:'South Korea',pos:'Noun'},
    {word:'中国',reading:'ちゅうごく',def:'China',pos:'Noun'},
    {word:'イギリス',reading:'',def:'UK, England',pos:'Noun'},
    {word:'フランス',reading:'',def:'France',pos:'Noun'},
    {word:'アメリカ',reading:'',def:'USA',pos:'Noun'},
    {word:'学生',reading:'がくせい',def:'student',pos:'Noun'},
    {word:'会社員',reading:'かいしゃいん',def:'office worker',pos:'Noun'},
    {word:'先生',reading:'せんせい',def:'teacher',pos:'Noun'},
    {word:'いしゃ',reading:'いしゃ',def:'doctor',pos:'Noun'},
    {word:'かしゅ',reading:'かしゅ',def:'singer',pos:'Noun'},
    {word:'けいさつかん',reading:'けいさつかん',def:'police officer',pos:'Noun'},
    {word:'(お)国',reading:'(お)くに',def:'country, nation',pos:'Noun'},
    {word:'ドイツ',reading:'',def:'Germany',pos:'Noun'},
  ],
  'L2': [
    {word:'でんわばんごう',reading:'でんわばんごう',def:'telephone number',pos:'Noun'},
    {word:'くだもの',reading:'くだもの',def:'fruit',pos:'Noun'},
    {word:'本',reading:'ほん',def:'book',pos:'Noun'},
    {word:'辞書',reading:'じしょ',def:'dictionary',pos:'Noun'},
    {word:'さかな',reading:'さかな',def:'fish',pos:'Noun'},
    {word:'とり',reading:'とり',def:'bird, chicken',pos:'Noun'},
    {word:'ひこうき',reading:'ひこうき',def:'airplane',pos:'Noun'},
    {word:'（お）ちゃ',reading:'（お）ちゃ',def:'tea',pos:'Noun'},
    {word:'きって',reading:'きって',def:'stamp',pos:'Noun'},
    {word:'いす',reading:'',def:'chair',pos:'Noun'},
    {word:'つくえ',reading:'つくえ',def:'desk',pos:'Noun'},
    {word:'かさ',reading:'かさ',def:'umbrella',pos:'Noun'},
    {word:'とけい',reading:'とけい',def:'watch, clock',pos:'Noun'},
    {word:'ねこ',reading:'ねこ',def:'cat',pos:'Noun'},
    {word:'いぬ',reading:'いぬ',def:'dog',pos:'Noun'},
    {word:'ざっし',reading:'ざっし',def:'magazine',pos:'Noun'},
    {word:'ぼうし',reading:'ぼうし',def:'hat, cap',pos:'Noun'},
    {word:'かぎ',reading:'かぎ',def:'key',pos:'Noun'},
    {word:'ペン',reading:'',def:'pen',pos:'Noun'},
    {word:'えんぴつ',reading:'',def:'pencil',pos:'Noun'},
    {word:'かばん',reading:'',def:'bag',pos:'Noun'},
    {word:'くつ',reading:'',def:'shoes',pos:'Noun'},
    {word:'りんご',reading:'',def:'apple',pos:'Noun'},
    {word:'電話',reading:'でんわ',def:'telephone',pos:'Noun'},
    {word:'新聞',reading:'しんぶん',def:'newspaper',pos:'Noun'},
    {word:'パイナップル',reading:'',def:'pineapple',pos:'Noun'},
    {word:'みかん',reading:'',def:'mandarin orange',pos:'Noun'},
    {word:'バナナ',reading:'',def:'banana',pos:'Noun'},
    {word:'きっぷ',reading:'きっぷ',def:'ticket',pos:'Noun'},
    {word:'テレビ',reading:'',def:'television',pos:'Noun'},
    {word:'パン',reading:'',def:'bread',pos:'Noun'},
    {word:'ノート',reading:'',def:'notebook',pos:'Noun'},
    {word:'車',reading:'くるま',def:'car',pos:'Noun'},
    {word:'ゆびわ',reading:'ゆびわ',def:'ring',pos:'Noun'},
    {word:'シャツ',reading:'',def:'shirt',pos:'Noun'},
    {word:'ふく',reading:'ふく',def:'clothes',pos:'Noun'},
    {word:'めがね',reading:'めがね',def:'glasses',pos:'Noun'},
    {word:'パソコン',reading:'',def:'computer',pos:'Noun'},
    {word:'車',reading:'くるま',def:'car',pos:'Noun'},
    {word:'スイス',reading:'',def:'Switzerland',pos:'Noun'},
    {word:'イタリア',reading:'',def:'Italy',pos:'Noun'},
    {word:'カメラ',reading:'',def:'camera',pos:'Noun'},
    {word:'（お）さけ',reading:'（お）酒',def:'alcohol, sake',pos:'Noun'},
    {word:'カップ',reading:'',def:'cup',pos:'Noun'},
  ],
  'L3': [
    {word:'アパート',reading:'',def:'apartment',pos:'Noun'},
    {word:'うち',reading:'',def:'home, house',pos:'Noun'},
    {word:'テスト',reading:'',def:'test, exam',pos:'Noun'},
    {word:'かみ',reading:'かみ',def:'hair',pos:'Noun'},
    {word:'ケーキ',reading:'',def:'cake',pos:'Noun'},
    {word:'木',reading:'き',def:'tree',pos:'Noun'},
    {word:'へや',reading:'へや',def:'room',pos:'Noun'},
    {word:'大きい',reading:'おおきい',def:'big, large',adj:'i',pos:'Adj'},
    {word:'小さい',reading:'ちいさい',def:'small, little',adj:'i',pos:'Adj'},
    {word:'高い',reading:'たかい',def:'tall, expensive',adj:'i',pos:'Adj'},
    {word:'安い',reading:'やすい',def:'cheap',adj:'i',pos:'Adj'},
    {word:'ひくい',reading:'ひくい',def:'low, short',adj:'i',pos:'Adj'},
    {word:'長い',reading:'ながい',def:'long',adj:'i',pos:'Adj'},
    {word:'みじかい',reading:'みじかい',def:'short',adj:'i',pos:'Adj'},
    {word:'新しい',reading:'あたらしい',def:'new',adj:'i',pos:'Adj'},
    {word:'古い',reading:'ふるい',def:'old (thing)',adj:'i',pos:'Adj'},
    {word:'おいしい',reading:'',def:'delicious',adj:'i',pos:'Adj'},
    {word:'まずい',reading:'',def:'bad tasting',adj:'i',pos:'Adj'},
    {word:'むずかしい',reading:'むずかしい',def:'difficult',adj:'i',pos:'Adj'},
    {word:'やさしい',reading:'やさしい',def:'easy',adj:'i',pos:'Adj'},
    {word:'あつい',reading:'あつい',def:'hot (weather)',adj:'i',pos:'Adj'},
    {word:'さむい',reading:'さむい',def:'cold (weather)',adj:'i',pos:'Adj'},
    {word:'いい',reading:'',def:'good',adj:'i',pos:'Adj'},
    {word:'わるい',reading:'わるい',def:'bad',adj:'i',pos:'Adj'},
    {word:'おもしろい',reading:'おもしろい',def:'interesting, funny',adj:'i',pos:'Adj'},
    {word:'つまらない',reading:'',def:'boring',adj:'i',pos:'Adj'},
    {word:'おもい',reading:'おもい',def:'heavy',adj:'i',pos:'Adj'},
    {word:'かるい',reading:'かるい',def:'light',adj:'i',pos:'Adj'},
    {word:'しろい',reading:'しろい',def:'white',adj:'i',pos:'Adj'},
    {word:'くろい',reading:'くろい',def:'black',adj:'i',pos:'Adj'},
    {word:'こうえん',reading:'こうえん',def:'park',pos:'Noun'},
    {word:'東京',reading:'とうきょう',def:'Tokyo',pos:'Noun'},
    {word:'ちかてつ',reading:'ちかてつ',def:'subway',pos:'Noun'},
    {word:'（お）金',reading:'（お）かね',def:'money',pos:'Noun'},
    {word:'目',reading:'め',def:'eye',pos:'Noun'},
    {word:'とても',reading:'',def:'very',pos:'Adv'},
    {word:'親切',reading:'しんせつ',def:'kind, friendly',adj:'na',pos:'Adj'},
    {word:'べんり',reading:'べんり',def:'convenient',adj:'na',pos:'Adj'},
    {word:'きれい',reading:'',def:'pretty, clean',adj:'na',pos:'Adj'},
    {word:'しずか',reading:'しずか',def:'quiet, calm',adj:'na',pos:'Adj'},
    {word:'元気',reading:'げんき',def:'healthy, energetic',adj:'na',pos:'Adj'},
    {word:'大切',reading:'たいせつ',def:'important',adj:'na',pos:'Adj'},
    {word:'うるさい',reading:'',def:'noisy, loud',adj:'i',pos:'Adj'},
    {word:'人',reading:'ひと',def:'person',pos:'Noun'},
    {word:'クラスメート',reading:'',def:'classmate',pos:'Noun'},
    {word:'駅',reading:'えき',def:'station',pos:'Noun'},
    {word:'となり',reading:'となり',def:'next door',pos:'Noun'},
    {word:'おおやさん',reading:'おおやさん',def:'landlord',pos:'Noun'},
    {word:'ちかい',reading:'ちかい',def:'close, near',adj:'i',pos:'Adj'},
    {word:'でも',reading:'',def:'but, however',pos:'Conj'},
  ],
  'L4': [
    {word:'スケジュール',reading:'',def:'schedule',pos:'Noun'},
    {word:'〜時',reading:'〜じ',def:'~ o clock',pos:'Noun'},
    {word:'〜分',reading:'〜ふん',def:'~minutes',pos:'Noun'},
    {word:'半',reading:'はん',def:'half',pos:'Noun'},
    {word:'銀行',reading:'ぎんこう',def:'bank',pos:'Noun'},
    {word:'クラス',reading:'',def:'class',pos:'Noun'},
    {word:'ゆうびんきょく',reading:'ゆうびんきょく',def:'post office',pos:'Noun'},
    {word:'レストラン',reading:'',def:'restaurant',pos:'Noun'},
    {word:'コンサート',reading:'',def:'concert',pos:'Noun'},
    {word:'デパート',reading:'',def:'department store',pos:'Noun'},
    {word:'えいが',reading:'えいが',def:'movie, film',pos:'Noun'},
    {word:'学校',reading:'がっこう',def:'school',pos:'Noun'},
    {word:'ソウル',reading:'',def:'Seoul',pos:'Noun'},
    {word:'コンビニ',reading:'',def:'convenience store',pos:'Noun'},
    {word:'カフェ',reading:'',def:'café',pos:'Noun'},
    {word:'きっさてん',reading:'きっさてん',def:'coffee shop',pos:'Noun'},
    {word:'病院',reading:'びょういん',def:'hospital',pos:'Noun'},
    {word:'曜日',reading:'ようび',def:'day of week',pos:'Noun'},
    {word:'今日',reading:'きょう',def:'today',pos:'Noun'},
    {word:'パーティ',reading:'',def:'party',pos:'Noun'},
    {word:'休み',reading:'やすみ',def:'holiday, day off',pos:'Noun'},
    {word:'デート',reading:'',def:'date',pos:'Noun'},
    {word:'旅行',reading:'りょこう',def:'travel, trip',pos:'Noun'},
    {word:'誕生日',reading:'たんじょうび',def:'birthday',pos:'Noun'},
    {word:'なつやすみ',reading:'なつやすみ',def:'summer vacation',pos:'Noun'},
    {word:'〜月',reading:'〜がつ',def:'~month',pos:'Noun'},
    {word:'〜日',reading:'〜にち',def:'~day of month',pos:'Noun'},
    {word:'ピクニック',reading:'',def:'picnic',pos:'Noun'},
    {word:'ゴールデンウィーク',reading:'',def:'Golden Week',pos:'Noun'},
  ],
  'L5': [
    {word:'毎日',reading:'まいにち',def:'every day',pos:'Noun'},
    {word:'コーヒー',reading:'',def:'coffee',pos:'Noun'},
    {word:'英語',reading:'えいご',def:'English (language)',pos:'Noun'},
    {word:'ビデオ',reading:'',def:'video',pos:'Noun'},
    {word:'てんぷら',reading:'',def:'tempura',pos:'Noun'},
    {word:'よる',reading:'よる',def:'night',pos:'Noun'},
    {word:'午後',reading:'ごご',def:'PM, afternoon',pos:'Noun'},
    {word:'こんばん',reading:'こんばん',def:'tonight, this evening',pos:'Noun'},
    {word:'たばこ',reading:'',def:'cigarette, tobacco',pos:'Noun'},
    {word:'スパゲティ',reading:'',def:'spaghetti',pos:'Noun'},
    {word:'明日',reading:'あした',def:'tomorrow',pos:'Noun'},
    {word:'食べます',reading:'たべます',def:'to eat',grp:'G2',pos:'Verb'},
    {word:'飲みます',reading:'のみます',def:'to drink',grp:'G1',pos:'Verb'},
    {word:'読みます',reading:'よみます',def:'to read',grp:'G1',pos:'Verb'},
    {word:'見ます',reading:'みます',def:'to see',grp:'G2',pos:'Verb'},
    {word:'書きます',reading:'かきます',def:'to write',grp:'G1',pos:'Verb'},
    {word:'聞きます',reading:'ききます',def:'to listen',grp:'G1',pos:'Verb'},
    {word:'話します',reading:'はなします',def:'to speak',grp:'G1',pos:'Verb'},
    {word:'買います',reading:'かいます',def:'to buy',grp:'G1',pos:'Verb'},
    {word:'します',reading:'',def:'to do',grp:'G3',pos:'Verb'},
    {word:'勉強をします',reading:'べんきょうをします',def:'to study',grp:'G3',pos:'Verb'},
    {word:'テニスをします',reading:'',def:'to play tennis',grp:'G3',pos:'Verb'},
    {word:'すいます',reading:'すいます',def:'to smoke',grp:'G1',pos:'Verb'},
    {word:'ばんごはん',reading:'ばんごはん',def:'dinner, evening meal',pos:'Noun'},
    {word:'しんじゅく',reading:'しんじゅく',def:'Shinjuku',pos:'Noun'},
    {word:'会社',reading:'かいしゃ',def:'company, office',pos:'Noun'},
    {word:'図書館',reading:'としょかん',def:'library',pos:'Noun'},
    {word:'ほんや',reading:'ほんや',def:'bookstore',pos:'Noun'},
    {word:'サッカー',reading:'',def:'soccer',pos:'Noun'},
    {word:'なかの',reading:'なかの',def:'Nakano',pos:'Noun'},
    {word:'あきはばら',reading:'あきはばら',def:'Akihabara',pos:'Noun'},
    {word:'うえの',reading:'うえの',def:'Ueno',pos:'Noun'},
    {word:'六本木',reading:'ろっぽんぎ',def:'Roppongi',pos:'Noun'},
    {word:'しごと',reading:'しごと',def:'work, job',pos:'Noun'},
    {word:'ステーキ',reading:'',def:'steak',pos:'Noun'},
    {word:'買い物',reading:'かいもの',def:'shopping',pos:'Noun'},
    {word:'はなみ',reading:'はなみ',def:'flower viewing',pos:'Noun'},
    {word:'きょうと',reading:'きょうと',def:'Kyoto',pos:'Noun'},
    {word:'友だち',reading:'ともだち',def:'friend',pos:'Noun'},
    {word:'来月',reading:'らいげつ',def:'next month',pos:'Noun'},
    {word:'ほっかいどう',reading:'ほっかいどう',def:'Hokkaido',pos:'Noun'},
    {word:'うみ',reading:'うみ',def:'sea, ocean',pos:'Noun'},
    {word:'ホンコン',reading:'',def:'Hong Kong',pos:'Noun'},
    {word:'スキー',reading:'',def:'skiing',pos:'Noun'},
    {word:'え',reading:'え',def:'picture, painting',pos:'Noun'},
    {word:'（お）寺',reading:'（お）てら',def:'temple',pos:'Noun'},
    {word:'ひるごはん',reading:'ひるごはん',def:'lunch',pos:'Noun'},
    {word:'ときどき',reading:'',def:'sometimes',pos:'Adv'},
    {word:'行きます',reading:'いきます',def:'to go',grp:'G1',pos:'Verb'},
    {word:'来ます',reading:'きます',def:'to come',grp:'G3',pos:'Verb'},
    {word:'帰ります',reading:'かえります',def:'to return',grp:'G1',pos:'Verb'},
    {word:'およぎます',reading:'およぎます',def:'to swim',grp:'G1',pos:'Verb'},
    {word:'電車',reading:'でんしゃ',def:'train',pos:'Noun'},
    {word:'は',reading:'は',def:'tooth, teeth',pos:'Noun'},
    {word:'（お）ふろ',reading:'（お）ふろ',def:'bath',pos:'Noun'},
    {word:'それから',reading:'',def:'and then, after that',pos:'Conj'},
    {word:'起きます',reading:'おきます',def:'to wake up',grp:'G2',pos:'Verb'},
    {word:'みがきます',reading:'みがきます',def:'to brush (teeth)',grp:'G1',pos:'Verb'},
    {word:'入ります',reading:'はいります',def:'to enter',grp:'G1',pos:'Verb'},
    {word:'ねます',reading:'ねます',def:'to sleep',grp:'G2',pos:'Verb'},
    {word:'スポーツ',reading:'',def:'sports',pos:'Noun'},
    {word:'よく',reading:'',def:'often, well',pos:'Adv'},
    {word:'あまり',reading:'',def:'not very (+ negative)',pos:'Adv'},
    {word:'ぜんぜん',reading:'ぜんぜん',def:'not at all (+ negative)',pos:'Adv'},
    {word:'さしみ',reading:'',def:'sashimi',pos:'Noun'},
    {word:'すし',reading:'すし',def:'sushi',pos:'Noun'},
    {word:'ウィスキー',reading:'',def:'whiskey',pos:'Noun'},
    {word:'ビール',reading:'',def:'beer',pos:'Noun'},
    {word:'英語',reading:'えいご',def:'English (language)',pos:'Noun'},
    {word:'ドイツ語',reading:'どいつご',def:'German (language)',pos:'Noun'},
    {word:'にほんしゅ',reading:'にほんしゅ',def:'Japanese sake',pos:'Noun'},
    {word:'こうちゃ',reading:'こうちゃ',def:'black tea',pos:'Noun'},
    {word:'フランス語',reading:'フランスご',def:'French (language)',pos:'Noun'},
    {word:'そうじ',reading:'そうじ',def:'cleaning, sweeping',pos:'Noun'},
    {word:'せんたく',reading:'せんたく',def:'laundry, washing',pos:'Noun'},
    {word:'おんがく',reading:'おんがく',def:'music',pos:'Noun'},
    {word:'アニメ',reading:'',def:'anime',pos:'Noun'},
    {word:'ドラマ',reading:'',def:'drama, TV drama',pos:'Noun'},
    {word:'りょうり',reading:'りょうり',def:'cooking, cuisine',pos:'Noun'},
    {word:'かんこくご',reading:'かんこくご',def:'Korean (language)',pos:'Noun'},
    {word:'ジャズ',reading:'',def:'jazz',pos:'Noun'},
    {word:'クラシック',reading:'',def:'classical music',pos:'Noun'},
    {word:'RPGゲーム',reading:'',def:'RPG game',pos:'Noun'},
    {word:'アクションゲーム',reading:'',def:'action game',pos:'Noun'},
    {word:'しぶや',reading:'しぶや',def:'Shibuya',pos:'Noun'},
    {word:'あさごはん',reading:'あさごはん',def:'breakfast',pos:'Noun'},
    {word:'ぱんや',reading:'ぱんや',def:'bakery',pos:'Noun'},
    {word:'アルバイト',reading:'',def:'part-time job',pos:'Noun'},
    {word:'てがみ',reading:'てがみ',def:'letter (written)',pos:'Noun'},
    {word:'しゅくだい',reading:'しゅくだい',def:'homework',pos:'Noun'},
    {word:'いっしょ',reading:'いっしょ',def:'together',pos:'Noun'},
    {word:'たいへん',reading:'たいへん',def:'tough, hard',adj:'na',pos:'Adj'},
    {word:'いそがしい',reading:'いそがしい',def:'busy',adj:'i',pos:'Adj'},
    {word:'少し',reading:'すこし',def:'a little',pos:'Adv'},
    {word:'〜ごろ',reading:'〜ごろ',def:'around ~ (time)',pos:'Noun'},
  ],
  'L6': [
    {word:'きのう',reading:'きのう',def:'yesterday',pos:'Noun'},
    {word:'先週',reading:'せんしゅう',def:'last week',pos:'Noun'},
    {word:'ゆうべ',reading:'ゆうべ',def:'last night',pos:'Noun'},
    {word:'昨夜',reading:'さくや',def:'last night (formal)',pos:'Noun'},
    {word:'サラダ',reading:'',def:'salad',pos:'Noun'},
    {word:'外国人',reading:'がいこくじん',def:'foreigner',pos:'Noun'},
    {word:'ぎんざ',reading:'ぎんざ',def:'Ginza',pos:'Noun'},
    {word:'山',reading:'やま',def:'mountain',pos:'Noun'},
    {word:'うみ',reading:'うみ',def:'sea, ocean',pos:'Noun'},
    {word:'キャンプ',reading:'',def:'camping',pos:'Noun'},
    {word:'おととい',reading:'',def:'day before yesterday',pos:'Noun'},
    {word:'あさって',reading:'',def:'day after tomorrow',pos:'Noun'},
    {word:'今週',reading:'こんしゅう',def:'this week',pos:'Noun'},
    {word:'先週',reading:'せんしゅう',def:'last week',pos:'Noun'},
    {word:'来週',reading:'らいしゅう',def:'next week',pos:'Noun'},
    {word:'先月',reading:'せんげつ',def:'last month',pos:'Noun'},
    {word:'今月',reading:'こんげつ',def:'this month',pos:'Noun'},
    {word:'来月',reading:'らいげつ',def:'next month',pos:'Noun'},
    {word:'去年',reading:'きょねん',def:'last year',pos:'Noun'},
    {word:'今年',reading:'ことし',def:'this year',pos:'Noun'},
    {word:'来年',reading:'らいねん',def:'next year',pos:'Noun'},
    {word:'きせつ',reading:'きせつ',def:'season',pos:'Noun'},
    {word:'はる',reading:'はる',def:'spring',pos:'Noun'},
    {word:'なつ',reading:'なつ',def:'summer',pos:'Noun'},
    {word:'あき',reading:'あき',def:'autumn, fall',pos:'Noun'},
    {word:'ふゆ',reading:'ふゆ',def:'winter',pos:'Noun'},
    {word:'だけ',reading:'',def:'only, just',pos:'Noun'},
    {word:'あとで',reading:'',def:'later',pos:'Noun'},
    {word:'そうじをします',reading:'',def:'to clean',grp:'G3',pos:'Verb'},
    {word:'つくります',reading:'つくります',def:'to make',grp:'G1',pos:'Verb'},
    {word:'天気',reading:'てんき',def:'weather',pos:'Noun'},
    {word:'ひま',reading:'ひま',def:'free time, not busy',adj:'na',pos:'Adj'},
    {word:'フランスりょうり',reading:'フランスりょうり',def:'French cuisine',pos:'Noun'},
    {word:'うた',reading:'うた',def:'song',pos:'Noun'},
    {word:'さくら',reading:'さくら',def:'cherry blossom',pos:'Noun'},
    {word:'食べ物',reading:'たべもの',def:'food',pos:'Noun'},
    {word:'そして',reading:'',def:'and then, and also',pos:'Conj'},
    {word:'たのしい',reading:'たのしい',def:'fun, enjoyable',adj:'i',pos:'Adj'},
    {word:'じょうず',reading:'じょうず',def:'good at, skilled',adj:'na',pos:'Adj'},
    {word:'にぎやか',reading:'',def:'lively, bustling',adj:'na',pos:'Adj'},
    {word:'たいへん',reading:'たいへん',def:'tough, hard',adj:'na',pos:'Adj'},
    {word:'あたたかい',reading:'あたたかい',def:'warm',adj:'i',pos:'Adj'},
    {word:'会います',reading:'あいます',def:'to meet',grp:'G1',pos:'Verb'},
    {word:'チケット',reading:'',def:'ticket',pos:'Noun'},
    {word:'サンドイッチ',reading:'',def:'sandwich',pos:'Noun'},
    {word:'旅館',reading:'りょかん',def:'Japanese inn',pos:'Noun'},
    {word:'ホテル',reading:'',def:'hotel',pos:'Noun'},
    {word:'おみやげ',reading:'おみやげ',def:'souvenir',pos:'Noun'},
    {word:'おまんじゅう',reading:'',def:'sweet bun',pos:'Noun'},
    {word:'とまります',reading:'とまります',def:'to stay (at a hotel)',grp:'G3',pos:'Verb'},
  ],
  'L7': [
    {word:'はな',reading:'はな',def:'nose, flower',pos:'Noun'},
    {word:'テーブル',reading:'',def:'table',pos:'Noun'},
    {word:'本だな',reading:'ほんだな',def:'bookshelf',pos:'Noun'},
    {word:'たくさん',reading:'',def:'many, a lot',pos:'Noun'},
    {word:'にわ',reading:'にわ',def:'garden, yard',pos:'Noun'},
    {word:'れいぞうこ',reading:'',def:'refrigerator',pos:'Noun'},
    {word:'チーズ',reading:'',def:'cheese',pos:'Noun'},
    {word:'ポケット',reading:'',def:'pocket',pos:'Noun'},
    {word:'トマト',reading:'',def:'tomato',pos:'Noun'},
    {word:'だいどころ',reading:'だいどころ',def:'kitchen',pos:'Noun'},
    {word:'今',reading:'いま',def:'living room',pos:'Noun'},
    {word:'こどもべや',reading:'こどもべや',def:'children\'s room',pos:'Noun'},
    {word:'トイレ',reading:'',def:'toilet, bathroom',pos:'Noun'},
    {word:'お母さん',reading:'おかあさん',def:'mother (someone else\'s)',pos:'Noun'},
    {word:'ゴキブリ',reading:'',def:'cockroach',pos:'Noun'},
    {word:'たまご',reading:'',def:'egg',pos:'Noun'},
    {word:'ネズミ',reading:'',def:'mouse, rat',pos:'Noun'},
    {word:'ソファー',reading:'',def:'sofa',pos:'Noun'},
    {word:'きんこ',reading:'きんこ',def:'safe, vault',pos:'Noun'},
    {word:'どろぼう',reading:'',def:'thief, burglar',pos:'Noun'},
    {word:'ベッド',reading:'',def:'bed',pos:'Noun'},
    {word:'子ども',reading:'こども',def:'child, children',pos:'Noun'},
    {word:'おもちゃ',reading:'',def:'toy',pos:'Noun'},
    {word:'スリッパ',reading:'',def:'slippers',pos:'Noun'},
    {word:'タオル',reading:'',def:'towel',pos:'Noun'},
    {word:'自転車',reading:'じてんしゃ',def:'bicycle',pos:'Noun'},
    {word:'池',reading:'いけ',def:'pond',pos:'Noun'},
    {word:'帰る',reading:'かえる',def:'frog',pos:'Noun'},
    {word:'あります',reading:'',def:'to be (inanimate)',grp:'G1',pos:'Verb'},
    {word:'います',reading:'',def:'to be (animate)',grp:'G1',pos:'Verb'},
    {word:'ケーキ',reading:'',def:'cake',pos:'Noun'},
    {word:'ハンバーガー',reading:'',def:'hamburger',pos:'Noun'},
    {word:'ジュース',reading:'',def:'juice',pos:'Noun'},
    {word:'オレンジジュース',reading:'',def:'orange juice',pos:'Noun'},
    {word:'男',reading:'おとこ',def:'man, male',pos:'Noun'},
    {word:'女',reading:'おんな',def:'woman, female',pos:'Noun'},
    {word:'コーラ',reading:'',def:'cola',pos:'Noun'},
    {word:'ぜんぶ',reading:'ぜんぶ',def:'all, everything',pos:'Noun'},
    {word:'円',reading:'えん',def:'yen',pos:'Noun'},
    {word:'おつり',reading:'',def:'change (money)',pos:'Noun'},
    {word:'ファーストフード',reading:'',def:'fast food',pos:'Noun'},
    {word:'ケーキや',reading:'ケーキや',def:'cake shop',pos:'Noun'},
    {word:'はこ',reading:'はこ',def:'box',pos:'Noun'},
    {word:'上',reading:'うえ',def:'above, on top',pos:'Noun'},
    {word:'下',reading:'した',def:'below, under',pos:'Noun'},
    {word:'中',reading:'なか',def:'inside, middle',pos:'Noun'},
    {word:'よこ',reading:'よこ',def:'beside, next to',pos:'Noun'},
    {word:'ここ',reading:'',def:'here',pos:'Noun'},
    {word:'そこ',reading:'',def:'there',pos:'Noun'},
    {word:'あそこ',reading:'',def:'over there',pos:'Noun'},
    {word:'前',reading:'まえ',def:'in front, before',pos:'Noun'},
    {word:'後ろ',reading:'うしろ',def:'behind, back',pos:'Noun'},
    {word:'となり',reading:'',def:'next door',pos:'Noun'},
    {word:'ごみ',reading:'',def:'garbage, trash',pos:'Noun'},
    {word:'ごみばこ',reading:'',def:'trash can',pos:'Noun'},
    {word:'そら',reading:'そら',def:'sky',pos:'Noun'},
    {word:'さいふ',reading:'',def:'wallet, purse',pos:'Noun'},
    {word:'駐車場',reading:'ちゅうしゃじょう',def:'parking lot',pos:'Noun'},
    {word:'そばや',reading:'そばや',def:'soba restaurant',pos:'Noun'},
    {word:'そば',reading:'',def:'near, beside, soba noodles',pos:'Noun'},
    {word:'ちず',reading:'ちず',def:'map',pos:'Noun'},
    {word:'ほんしゅう',reading:'ほんしゅう',def:'Honshu',pos:'Noun'},
    {word:'四国',reading:'しこく',def:'Shikoku',pos:'Noun'},
    {word:'きゅうしゅう',reading:'きゅうしゅう',def:'Kyushu',pos:'Noun'},
    {word:'右',reading:'みぎ',def:'right',pos:'Noun'},
    {word:'左',reading:'ひだり',def:'left',pos:'Noun'},
    {word:'北',reading:'きた',def:'north',pos:'Noun'},
    {word:'南',reading:'みなみ',def:'south',pos:'Noun'},
    {word:'西',reading:'にし',def:'west',pos:'Noun'},
    {word:'東',reading:'ひがし',def:'east',pos:'Noun'},
    {word:'スキー場',reading:'スキーじょう',def:'ski resort',pos:'Noun'},
    {word:'ビル',reading:'',def:'building',pos:'Noun'},
    {word:'じんじゃ',reading:'じんじゃ',def:'shrine',pos:'Noun'},
    {word:'かんこうきゃく',reading:'かんこうきゃく',def:'tourist',pos:'Noun'},
    {word:'火山',reading:'かざん',def:'volcano',pos:'Noun'},
    {word:'おんせん',reading:'おんせん',def:'hot spring',pos:'Noun'},
    {word:'有名',reading:'ゆうめい',def:'famous',adj:'na',pos:'Adj'},
    {word:'北口',reading:'きたぐち',def:'north exit',pos:'Noun'},
    {word:'南口',reading:'みなみぐち',def:'south exit',pos:'Noun'},
  ],
  'L8': [
    {word:'父',reading:'ちち',def:'father (own)',pos:'Noun'},
    {word:'母',reading:'はは',def:'mother (own)',pos:'Noun'},
    {word:'いもうと',reading:'いもうと',def:'younger sister',pos:'Noun'},
    {word:'ぞう',reading:'ぞう',def:'elephant',pos:'Noun'},
    {word:'きりん',reading:'',def:'giraffe',pos:'Noun'},
    {word:'はな',reading:'はな',def:'nose, flower',pos:'Noun'},
    {word:'くび',reading:'くび',def:'neck',pos:'Noun'},
    {word:'あし',reading:'あし',def:'leg, foot',pos:'Noun'},
    {word:'はつおん',reading:'はつおん',def:'pronunciation',pos:'Noun'},
    {word:'こころ',reading:'こころ',def:'heart, mind',pos:'Noun'},
    {word:'耳',reading:'みみ',def:'ear',pos:'Noun'},
    {word:'サービス',reading:'',def:'service',pos:'Noun'},
    {word:'ぶっか',reading:'ぶっか',def:'prices, cost of living',pos:'Noun'},
    {word:'やちん',reading:'やちん',def:'rent',pos:'Noun'},
    {word:'うさぎ',reading:'',def:'rabbit',pos:'Noun'},
    {word:'せ',reading:'せ',def:'height, stature',pos:'Noun'},
    {word:'国',reading:'くに',def:'country, nation',pos:'Noun'},
    {word:'まど',reading:'まど',def:'window',pos:'Noun'},
    {word:'店員',reading:'てんいん',def:'shop staff',pos:'Noun'},
    {word:'多い',reading:'おおい',def:'many, a lot',adj:'i',pos:'Adj'},
    {word:'広い',reading:'ひろい',def:'wide, spacious',adj:'i',pos:'Adj'},
    {word:'せまい',reading:'せまい',def:'narrow',adj:'i',pos:'Adj'},
    {word:'あかい',reading:'あかい',def:'red',adj:'i',pos:'Adj'},
    {word:'ちゃいろい',reading:'ちゃいろい',def:'brown',adj:'i',pos:'Adj'},
    {word:'セーター',reading:'',def:'sweater',pos:'Noun'},
    {word:'しかくい',reading:'しかくい',def:'square',adj:'i',pos:'Adj'},
    {word:'きたない',reading:'きたない',def:'dirty',adj:'i',pos:'Adj'},
    {word:'きいろい',reading:'きいろい',def:'yellow',adj:'i',pos:'Adj'},
    {word:'まるい',reading:'まるい',def:'round',adj:'i',pos:'Adj'},
    {word:'ハンサム',reading:'',def:'handsome',adj:'na',pos:'Adj'},
    {word:'しんせん',reading:'しんせん',def:'fresh',adj:'na',pos:'Adj'},
    {word:'〜さい',reading:'〜さい',def:'~years old',pos:'Noun'},
    {word:'タクシー',reading:'',def:'taxi',pos:'Noun'},
    {word:'バス',reading:'',def:'bus',pos:'Noun'},
    {word:'アイスクリーム',reading:'',def:'ice cream',pos:'Noun'},
    {word:'ほしい',reading:'',def:'want, desire',adj:'i',pos:'Adj'},
    {word:'早く',reading:'はやく',def:'quickly, early',pos:'Adv'},
    {word:'のります',reading:'のります',def:'to ride',grp:'G1',pos:'Verb'},
    {word:'すうがく',reading:'すうがく',def:'mathematics',pos:'Noun'},
    {word:'あまいもの',reading:'あまいもの',def:'sweets, sweet things',pos:'Noun'},
    {word:'ふとん',reading:'',def:'futon',pos:'Noun'},
    {word:'ようしょく',reading:'ようしょく',def:'Western food',pos:'Noun'},
    {word:'わしょく',reading:'わしょく',def:'Japanese food',pos:'Noun'},
    {word:'とかい',reading:'とかい',def:'city, urban area',pos:'Noun'},
    {word:'いなか',reading:'いなか',def:'countryside, rural area',pos:'Noun'},
    {word:'にく',reading:'にく',def:'meat',pos:'Noun'},
    {word:'〜タイプ',reading:'',def:'~type',pos:'Noun'},
    {word:'さる',reading:'さる',def:'monkey',pos:'Noun'},
    {word:'ライオン',reading:'',def:'lion',pos:'Noun'},
    {word:'好き',reading:'すき',def:'like, fond of',adj:'na',pos:'Adj'},
    {word:'きらい',reading:'きらい',def:'dislike',adj:'na',pos:'Adj'},
    {word:'ようふく',reading:'ようふく',def:'Western clothes',pos:'Noun'},
    {word:'一人',reading:'ひとり',def:'one person, alone',pos:'Noun'},
    {word:'かんじ',reading:'かんじ',def:'kanji',pos:'Noun'},
    {word:'ピアノ',reading:'',def:'piano',pos:'Noun'},
    {word:'つり',reading:'つり',def:'fishing',pos:'Noun'},
    {word:'しゃしん',reading:'しゃしん',def:'photo, photograph',pos:'Noun'},
    {word:'かきます',reading:'かきます',def:'to draw',grp:'G1',pos:'Verb'},
    {word:'そだてます',reading:'そだてます',def:'to raise',grp:'G2',pos:'Verb'},
    {word:'あみます',reading:'あみます',def:'to knit',grp:'G1',pos:'Verb'},
    {word:'ひきます',reading:'ひきます',def:'to play (instrument)',grp:'G1',pos:'Verb'},
    {word:'つりをします',reading:'つりをします',def:'to fish',grp:'G3',pos:'Verb'},
    {word:'待ちます',reading:'まちます',def:'to wait',grp:'G1',pos:'Verb'},
    {word:'しにます',reading:'しにます',def:'to die',grp:'G1',pos:'Verb'},
    {word:'よびます',reading:'よびます',def:'to call',grp:'G1',pos:'Verb'},
    {word:'あけます',reading:'あけます',def:'to open',grp:'G2',pos:'Verb'},
    {word:'うたいます',reading:'うたいます',def:'to sing',grp:'G1',pos:'Verb'},
    {word:'ほんとうに',reading:'ほんとうに',def:'really, truly',pos:'Adv'},
    {word:'アプリ',reading:'',def:'app',pos:'Noun'},
    {word:'コート',reading:'',def:'coat',pos:'Noun'},
    {word:'強い',reading:'つよい',def:'strong',adj:'i',pos:'Adj'},
    {word:'気持ちいい',reading:'きもちいい',def:'feels good, comfortable',adj:'i',pos:'Adj'},
    {word:'にがい',reading:'にがい',def:'bitter',adj:'i',pos:'Adj'},
    {word:'さびしい',reading:'さびしい',def:'lonely',adj:'i',pos:'Adj'},
    {word:'かなしい',reading:'かなしい',def:'sad',adj:'i',pos:'Adj'},
    {word:'くるしい',reading:'くるしい',def:'painful, suffering',adj:'i',pos:'Adj'},
    {word:'うれしい',reading:'うれしい',def:'happy, glad',adj:'i',pos:'Adj'},
    {word:'いたい',reading:'いたい',def:'painful, hurts',adj:'i',pos:'Adj'},
    {word:'じこしょうかい',reading:'じこしょうかい',def:'self-introduction',pos:'Noun'},
    {word:'しゅみ',reading:'しゅみ',def:'hobby',pos:'Noun'},
    {word:'所',reading:'ところ',def:'place',pos:'Noun'},
    {word:'かぞく',reading:'かぞく',def:'family',pos:'Noun'},
    {word:'スポーツマン',reading:'',def:'sportsman',pos:'Noun'},
    {word:'高校生',reading:'こうこうせい',def:'high school student',pos:'Noun'},
    {word:'いろいろ',reading:'いろいろ',def:'various, all kinds',adj:'na',pos:'Adj'},
  ],
  'L9': [
    {word:'けしゴム',reading:'けしゴム',def:'eraser',pos:'Noun'},
    {word:'ラジオ',reading:'',def:'radio',pos:'Noun'},
    {word:'エアコン',reading:'',def:'air conditioner',pos:'Noun'},
    {word:'電気',reading:'でんき',def:'electricity, light',pos:'Noun'},
    {word:'ひっこし',reading:'ひっこし',def:'moving (house)',pos:'Noun'},
    {word:'くらい',reading:'くらい',def:'dark',adj:'i',pos:'Adj'},
    {word:'持ちます',reading:'もちます',def:'to have/hold',grp:'G1',pos:'Verb'},
    {word:'かします',reading:'かします',def:'to lend',grp:'G1',pos:'Verb'},
    {word:'てつだいます',reading:'てつだいます',def:'to help',grp:'G1',pos:'Verb'},
    {word:'しめます',reading:'しめます',def:'to close',grp:'G2',pos:'Verb'},
    {word:'けします',reading:'けします',def:'to turn off',grp:'G1',pos:'Verb'},
    {word:'わすれます',reading:'わすれます',def:'to forget',grp:'G2',pos:'Verb'},
    {word:'ひっこします',reading:'ひっこします',def:'to move house',grp:'G1',pos:'Verb'},
    {word:'だいじょうぶ',reading:'だいじょうぶ',def:'OK, alright',adj:'na',pos:'Adj'},
    {word:'しお',reading:'しお',def:'salt',pos:'Noun'},
    {word:'カメラマン',reading:'',def:'photographer',pos:'Noun'},
    {word:'モデル',reading:'',def:'model',pos:'Noun'},
    {word:'ゆっくり',reading:'',def:'slowly, leisurely',adj:'na',pos:'Adj'},
    {word:'立ちます',reading:'たちます',def:'to stand',grp:'G1',pos:'Verb'},
    {word:'とびます',reading:'とびます',def:'to fly',grp:'G1',pos:'Verb'},
    {word:'言います',reading:'いいます',def:'to say',grp:'G1',pos:'Verb'},
    {word:'教えます',reading:'おしえます',def:'to teach/tell',grp:'G2',pos:'Verb'},
    {word:'見せます',reading:'みせます',def:'to show',grp:'G2',pos:'Verb'},
    {word:'あるきます',reading:'あるきます',def:'to walk',grp:'G1',pos:'Verb'},
    {word:'とります',reading:'とります',def:'to take',grp:'G1',pos:'Verb'},
    {word:'持ちます',reading:'もちます',def:'to have/hold',grp:'G1',pos:'Verb'},
    {word:'わらいます',reading:'わらいます',def:'to laugh',grp:'G1',pos:'Verb'},
    {word:'さんぽ',reading:'さんぽ',def:'walk, stroll',pos:'Noun'},
    {word:'ロビー',reading:'',def:'lobby',pos:'Noun'},
    {word:'ギター',reading:'',def:'guitar',pos:'Noun'},
    {word:'あそびます',reading:'あそびます',def:'to play',grp:'G1',pos:'Verb'},
    {word:'おどります',reading:'おどります',def:'to dance',grp:'G1',pos:'Verb'},
    {word:'走ります',reading:'はしります',def:'to run',grp:'G1',pos:'Verb'},
    {word:'（お）たく',reading:'（お）たく',def:'your home (polite)',pos:'Noun'},
    {word:'もういちど',reading:'もういちど',def:'once more, again',pos:'Adv'},
    {word:'出ます',reading:'でます',def:'to leave',grp:'G2',pos:'Verb'},
  ],
  'L10': [
    {word:'ねつ',reading:'ねつ',def:'fever',pos:'Noun'},
    {word:'たぶん',reading:'',def:'probably, maybe',pos:'Adv'},
    {word:'うけます',reading:'うけます',def:'to take (a test)',grp:'G2',pos:'Verb'},
    {word:'くすり',reading:'くすり',def:'medicine',pos:'Noun'},
    {word:'びじゅつかん',reading:'びじゅつかん',def:'art museum',pos:'Noun'},
    {word:'かわ',reading:'かわ',def:'river',pos:'Noun'},
    {word:'カンニング',reading:'',def:'cheating (on exam)',pos:'Noun'},
    {word:'ルール',reading:'',def:'rule',pos:'Noun'},
    {word:'ゴミ',reading:'',def:'garbage, trash',pos:'Noun'},
    {word:'ペット',reading:'',def:'pet',pos:'Noun'},
    {word:'とめます',reading:'とめます',def:'to stop',grp:'G2',pos:'Verb'},
    {word:'出します',reading:'だします',def:'to take out',grp:'G1',pos:'Verb'},
    {word:'かお',reading:'かお',def:'face',pos:'Noun'},
    {word:'そうじ',reading:'そうじ',def:'cleaning, sweeping',pos:'Noun'},
    {word:'せんたく',reading:'せんたく',def:'laundry, washing',pos:'Noun'},
    {word:'けさ',reading:'けさ',def:'this morning',pos:'Noun'},
    {word:'ジョギング',reading:'',def:'jogging',pos:'Noun'},
    {word:'ハム',reading:'',def:'ham',pos:'Noun'},
    {word:'ぎゅうにゅう',reading:'ぎゅうにゅう',def:'milk',pos:'Noun'},
    {word:'こいびと',reading:'こいびと',def:'lover, partner',pos:'Noun'},
    {word:'シャワー',reading:'',def:'shower',pos:'Noun'},
    {word:'は',reading:'は',def:'tooth, teeth',pos:'Noun'},
    {word:'まず',reading:'',def:'first, to begin with',pos:'Adv'},
    {word:'食事',reading:'しょくじ',def:'meal',pos:'Noun'},
    {word:'入ります',reading:'はいります',def:'to enter',grp:'G1',pos:'Verb'},
    {word:'あらいます',reading:'あらいます',def:'to wash',grp:'G1',pos:'Verb'},
    {word:'あびます',reading:'あびます',def:'to take (a shower)',grp:'G2',pos:'Verb'},
    {word:'おります',reading:'おります',def:'to get off',grp:'G2',pos:'Verb'},
    {word:'のりかえます',reading:'のりかえます',def:'to change trains',grp:'G2',pos:'Verb'},
    {word:'かかります',reading:'',def:'to take (time/money)',grp:'G1',pos:'Verb'},
    {word:'雨',reading:'あめ',def:'rain',pos:'Noun'},
    {word:'ミルク',reading:'',def:'milk',pos:'Noun'},
    {word:'むじんとう',reading:'むじんとう',def:'deserted island',pos:'Noun'},
    {word:'みずぎ',reading:'みずぎ',def:'swimsuit',pos:'Noun'},
    {word:'ぶんぼうぐや',reading:'ぶんぼうぐや',def:'stationery shop',pos:'Noun'},
    {word:'くすりや',reading:'くすりや',def:'pharmacy, drug store',pos:'Noun'},
    {word:'めぐすり',reading:'めぐすり',def:'eye drops',pos:'Noun'},
    {word:'おにぎり',reading:'',def:'rice ball',pos:'Noun'},
    {word:'飲み物',reading:'のみもの',def:'drink, beverage',pos:'Noun'},
    {word:'持って行きます',reading:'もっていきます',def:'to take (something)',grp:'G1',pos:'Verb'},
    {word:'買って行きます',reading:'かっていきます',def:'to buy and go',grp:'G1',pos:'Verb'},
    {word:'つくっていきます',reading:'つくっていきます',def:'to make and take',grp:'G1',pos:'Verb'},
    {word:'つれて行きます',reading:'つれていきます',def:'to take someone along',grp:'G1',pos:'Verb'},
    {word:'持って来ます',reading:'もってきます',def:'to bring (something)',grp:'G3',pos:'Verb'},
    {word:'買って来ます',reading:'かってきます',def:'to buy and come',grp:'G3',pos:'Verb'},
    {word:'買って帰ります',reading:'かってかえります',def:'to buy and return',grp:'G1',pos:'Verb'},
    {word:'行って来ます',reading:'いってきます',def:'to go and come back',grp:'G3',pos:'Verb'},
    {word:'持って帰ります',reading:'もってかえります',def:'to take home',grp:'G1',pos:'Verb'},
    {word:'ボールペン',reading:'',def:'ballpoint pen',pos:'Noun'},
    {word:'テスト中',reading:'テストちゅう',def:'during the exam',pos:'Noun'},
  ],
  'L11': [
    {word:'ぎゅうにく',reading:'ぎゅうにく',def:'beef',pos:'Noun'},
    {word:'ぶたにく',reading:'ぶたにく',def:'pork',pos:'Noun'},
    {word:'人口',reading:'じんこう',def:'population',pos:'Noun'},
    {word:'店',reading:'みせ',def:'shop, store',pos:'Noun'},
    {word:'読書',reading:'どくしょ',def:'reading (books)',pos:'Noun'},
    {word:'れきし',reading:'れきし',def:'history',pos:'Noun'},
    {word:'ようしゅ',reading:'ようしゅ',def:'Western liquor',pos:'Noun'},
    {word:'きゅうりょう',reading:'きゅうりょう',def:'salary',pos:'Noun'},
    {word:'しんちょう',reading:'しんちょう',def:'height (body)',pos:'Noun'},
    {word:'たいじゅう',reading:'たいじゅう',def:'body weight',pos:'Noun'},
    {word:'ねんれい',reading:'ねんれい',def:'age',pos:'Noun'},
    {word:'駅前',reading:'えきまえ',def:'in front of the station',pos:'Noun'},
    {word:'デザイン',reading:'',def:'design',pos:'Noun'},
    {word:'いろ',reading:'いろ',def:'color',pos:'Noun'},
    {word:'ぎゅうどん',reading:'ぎゅうどん',def:'beef bowl',pos:'Noun'},
    {word:'うどん',reading:'',def:'udon noodles',pos:'Noun'},
    {word:'ずっと',reading:'',def:'all along, the whole time',pos:'Adv'},
    {word:'早い',reading:'はやい',def:'fast, early',adj:'i',pos:'Adj'},
    {word:'わかい',reading:'わかい',def:'young',adj:'i',pos:'Adj'},
    {word:'かっこいい',reading:'',def:'cool, stylish',adj:'i',pos:'Adj'},
    {word:'きめます',reading:'きめます',def:'to decide',grp:'G2',pos:'Verb'},
    {word:'あげます',reading:'',def:'to raise, give',grp:'G2',pos:'Verb'},
    {word:'くうき',reading:'くうき',def:'air',pos:'Noun'},
    {word:'美容院',reading:'びよういん',def:'beauty salon, hair salon',pos:'Noun'},
    {word:'すもう',reading:'すもう',def:'sumo wrestling',pos:'Noun'},
    {word:'さとう',reading:'さとう',def:'sugar',pos:'Noun'},
    {word:'はじめ',reading:'はじめ',def:'beginning, first time',pos:'Noun'},
    {word:'さいきん',reading:'さいきん',def:'recently, lately',pos:'Noun'},
    {word:'あまい',reading:'あまい',def:'sweet',adj:'i',pos:'Adj'},
    {word:'たります',reading:'たります',def:'to be enough',grp:'G2',pos:'Verb'},
    {word:'町',reading:'まち',def:'town, city, street',pos:'Noun'},
    {word:'すきやき',reading:'',def:'sukiyaki',pos:'Noun'},
    {word:'やきゅう',reading:'やきゅう',def:'baseball',pos:'Noun'},
    {word:'スカート',reading:'',def:'skirt',pos:'Noun'},
    {word:'ズボン',reading:'',def:'trousers, pants',pos:'Noun'},
    {word:'ふどうさんや',reading:'ふどうさんや',def:'real estate agency',pos:'Noun'},
    {word:'二日よい',reading:'ふつかよい',def:'hangover',pos:'Noun'},
    {word:'はで',reading:'はで',def:'flashy, showy',adj:'na',pos:'Adj'},
    {word:'じみ',reading:'じみ',def:'plain, modest',adj:'na',pos:'Adj'},
    {word:'ちょうど',reading:'',def:'exactly',pos:'Adv'},
    {word:'字',reading:'じ',def:'character, handwriting',pos:'Noun'},
    {word:'説明',reading:'せつめい',def:'explanation',pos:'Noun'},
    {word:'ファイル',reading:'',def:'file',pos:'Noun'},
    {word:'プリントアウト',reading:'',def:'printout',pos:'Noun'},
    {word:'デジカメ',reading:'',def:'digital camera',pos:'Noun'},
    {word:'マニュアル',reading:'',def:'manual',pos:'Noun'},
    {word:'セットアップ',reading:'',def:'setup',pos:'Noun'},
    {word:'くつや',reading:'くつや',def:'shoe store',pos:'Noun'},
    {word:'分かりやすい',reading:'わかりやすい',def:'easy to understand',adj:'i',pos:'Adj'},
    {word:'まちがえます',reading:'まちがえます',def:'to make a mistake',grp:'G2',pos:'Verb'},
    {word:'いくら',reading:'',def:'how much',pos:'Noun'},
    {word:'席',reading:'せき',def:'seat',pos:'Noun'},
    {word:'カラオケ',reading:'',def:'karaoke',pos:'Noun'},
    {word:'かぶき',reading:'かぶき',def:'kabuki',pos:'Noun'},
    {word:'履きます',reading:'はきます',def:'to wear (shoes / trousers)',pos:'Verb',grp:'G1'},
  ],
  'L12': [
    {word:'おかし',reading:'おかし',def:'snacks, sweets',pos:'Noun'},
    {word:'しばふ',reading:'しばふ',def:'lawn, grass',pos:'Noun'},
    {word:'ダイエット',reading:'',def:'diet',pos:'Noun'},
    {word:'でんわだい',reading:'でんわだい',def:'phone bill',pos:'Noun'},
    {word:'あぶない',reading:'あぶない',def:'dangerous',adj:'i',pos:'Adj'},
    {word:'はずかしい',reading:'',def:'embarrassing, shy',adj:'i',pos:'Adj'},
    {word:'おします',reading:'おします',def:'to push',grp:'G1',pos:'Verb'},
    {word:'おくれます',reading:'おくれます',def:'to be late',grp:'G2',pos:'Verb'},
    {word:'すわります',reading:'すわります',def:'to sit',grp:'G1',pos:'Verb'},
    {word:'すてます',reading:'すてます',def:'to throw away',grp:'G2',pos:'Verb'},
    {word:'さわります',reading:'さわります',def:'to touch',grp:'G1',pos:'Verb'},
    {word:'じゅぎょうちゅう',reading:'じゅぎょうちゅう',def:'during class',pos:'Noun'},
    {word:'さくぶん',reading:'さくぶん',def:'essay, composition',pos:'Noun'},
    {word:'キッチン',reading:'',def:'kitchen',pos:'Noun'},
    {word:'さっき',reading:'',def:'a little while ago',pos:'Adv'},
    {word:'じっと',reading:'',def:'still, motionless',pos:'Adv'},
    {word:'へん',reading:'へん',def:'strange, weird',adj:'na',pos:'Adj'},
    {word:'かたづけます',reading:'かたづけます',def:'to tidy up',grp:'G2',pos:'Verb'},
    {word:'来ます',reading:'きます',def:'to wear',grp:'G2',pos:'Verb'},
    {word:'ふります',reading:'ふります',def:'to fall (rain/snow)',grp:'G1',pos:'Verb'},
    {word:'はじめて',reading:'はじめて',def:'for the first time',pos:'Adv'},
    {word:'たいふう',reading:'たいふう',def:'typhoon',pos:'Noun'},
    {word:'美人',reading:'びじん',def:'beautiful woman',pos:'Noun'},
    {word:'金持ち',reading:'かねもち',def:'rich person',pos:'Noun'},
    {word:'しょうゆ',reading:'',def:'soy sauce',pos:'Noun'},
    {word:'ヘルシー',reading:'',def:'healthy',pos:'Noun'},
    {word:'さっかーせんしゅ',reading:'さっかーせんしゅ',def:'soccer player',pos:'Noun'},
    {word:'せっけん',reading:'せっけん',def:'soap',pos:'Noun'},
    {word:'じかんどおり',reading:'じかんどおり',def:'on time',pos:'Noun'},
    {word:'出かけます',reading:'でかけます',def:'to go out',grp:'G2',pos:'Verb'},
    {word:'人気',reading:'にんき',def:'popularity',pos:'Noun'},
    {word:'からだ',reading:'からだ',def:'body',pos:'Noun'},
    {word:'しなもの',reading:'しなもの',def:'goods, items',pos:'Noun'},
    {word:'しぜん',reading:'しぜん',def:'nature',pos:'Noun'},
    {word:'一日中',reading:'いちにちじゅう',def:'all day long',pos:'Noun'},
    {word:'ざんぎょう',reading:'ざんぎょう',def:'overtime work',pos:'Noun'},
    {word:'せいかつ',reading:'せいかつ',def:'daily life, lifestyle',pos:'Noun'},
    {word:'ぶんぽう',reading:'ぶんぽう',def:'grammar',pos:'Noun'},
    {word:'ストーリー',reading:'',def:'story',pos:'Noun'},
    {word:'でんしゃだい',reading:'でんしゃだい',def:'train fare',pos:'Noun'},
    {word:'すてき',reading:'',def:'wonderful, lovely',adj:'na',pos:'Adj'},
    {word:'美しい',reading:'うつくしい',def:'beautiful',adj:'i',pos:'Adj'},
    {word:'辞めます',reading:'やめます',def:'to quit',grp:'G2',pos:'Verb'},
    {word:'つかれます',reading:'つかれます',def:'to get tired',grp:'G2',pos:'Verb'},
    {word:'かた',reading:'かた',def:'person (polite), way of doing',pos:'Noun'},
    {word:'外国',reading:'がいこく',def:'foreign country',pos:'Noun'},
    {word:'おじいさん',reading:'',def:'grandfather, old man',pos:'Noun'},
    {word:'きょうしつ',reading:'きょうしつ',def:'classroom',pos:'Noun'},
    {word:'きゅうり',reading:'',def:'cucumber',pos:'Noun'},
    {word:'ぶどう',reading:'',def:'grapes',pos:'Noun'},
    {word:'めずらしい',reading:'',def:'rare, unusual',adj:'i',pos:'Adj'},
    {word:'とおい',reading:'とおい',def:'far, distant',adj:'i',pos:'Adj'},
    {word:'まよいます',reading:'まよいます',def:'to get lost',grp:'G1',pos:'Verb'},
    {word:'こたえます',reading:'こたえます',def:'to answer',grp:'G2',pos:'Verb'},
    {word:'〜について',reading:'',def:'about ~, regarding ~',pos:'Noun'},
    {word:'ちょっと',reading:'',def:'a little; just a moment',pos:'Noun'},
  ],
  'Q': [
    {word:'何か',reading:'なにか',def:'Something / Anything',pos:'Expr',exprKey:'なにか ありますか'},
    {word:'だれ',reading:'だれ',def:'Who',pos:'Expr',exprKey:'だれと 飲みますか'},
    {word:'どこ',reading:'どこ',def:'Where',pos:'Expr',exprKey:'どこで 食べますか'},
    {word:'どこの',reading:'どこの',def:'Where is it from',pos:'Expr',exprKey:'どこの くるま ですか'},
    {word:'いつ',reading:'いつ',def:'When',pos:'Expr',exprKey:'パーティは いつですか'},
    {word:'どう',reading:'どう',def:'How',pos:'Expr',exprKey:'えいがは どう でしたか'},
    {word:'どうして',reading:'どうして',def:'Why',pos:'Expr',exprKey:'どうしてですか'},
    {word:'いくら',reading:'いくら',def:'How much (cost)',pos:'Expr',exprKey:'いくら かかりますか'},
    {word:'どれ',reading:'どれ',def:'Which one (3+ options)',pos:'Expr',exprKey:'どれが いちばん 好きですか'},
    {word:'どちら',reading:'どちら',def:'Which (of two options)',pos:'Expr',exprKey:'AとBと どちらが 好きですか'},
    {word:'どんな',reading:'どんな',def:'What kind of',pos:'Expr',exprKey:'どんな ＋ [Noun] ＋ ですか'},
    {word:'どうやって',reading:'どうやって',def:'How / By what route',pos:'Expr',exprKey:'どうやって 行きますか'},
    {word:'どのぐらい',reading:'どのぐらい / どのくらい',def:'How long / How much',pos:'Expr',exprKey:'どのぐらい かかりますか'},
    {word:'なにで',reading:'なにで',def:'By what means / transportation',pos:'Expr',exprKey:'なにで 行きますか'},
    {word:'何時',reading:'なんじ',def:'What time',pos:'Expr',exprKey:'なんじに おきますか'},
    {word:'なんようび',reading:'なんようび',def:'What day of the week',pos:'Expr',exprKey:'なんようび ですか'},
    {word:'なんがつ',reading:'なんがつ',def:'What month',pos:'Expr',exprKey:'なんがつ ですか'},
    {word:'なんにち',reading:'なんにち',def:'What day of the month',pos:'Expr',exprKey:'なんにち ですか'},
    {word:'なんじかん',reading:'なんじかん',def:'How many hours',pos:'Expr',exprKey:'なんじかん かかりますか'},
    {word:'なんにちかん',reading:'なんにちかん',def:'How many days',pos:'Expr',exprKey:'なんにちかん かかりますか'},
    {word:'何人',reading:'なんにん',def:'How many people',pos:'Expr',exprKey:'なんにん ですか'},
    {word:'どうしましたか',reading:'どうしましたか',def:'What happened?',pos:'Expr',exprKey:'どうしましたか'},
    {word:'てもいいですか',reading:'〜てもいいですか',def:'Asking for permission',pos:'Expr',exprKey:'写真を とってもいいですか'},
    {word:'ましょうか',reading:'〜ましょうか',def:'Offering to do / Shall I?',pos:'Expr',exprKey:'かばんを 持ちましょうか'},
  ],
};
const oppData = {};
kanjiData['S1'] = {
  'KL1': [
    {kanji:'一',reading:'いち',meaning:'one',mode:'write'},
    {kanji:'九',reading:'きゅう',meaning:'nine',mode:'write'},
    {kanji:'一つ',reading:'ひとつ',meaning:'one (counter)',mode:'write'},
    {kanji:'九つ',reading:'ここのつ',meaning:'nine (counter)',mode:'write'},
    {kanji:'一月',reading:'いちがつ',meaning:'January',mode:'write'},
    {kanji:'九月',reading:'くがつ',meaning:'September',mode:'read'},
    {kanji:'二',reading:'に',meaning:'two',mode:'write'},
    {kanji:'十',reading:'じゅう',meaning:'ten',mode:'write'},
    {kanji:'二つ',reading:'ふたつ',meaning:'two (counter)',mode:'write'},
    {kanji:'十月',reading:'じゅうがつ',meaning:'October',mode:'read'},
    {kanji:'二月',reading:'にがつ',meaning:'February',mode:'read'},
    {kanji:'十一月',reading:'じゅういちがつ',meaning:'November',mode:'read'},
    {kanji:'三',reading:'さん',meaning:'three',mode:'write'},
    {kanji:'十二月',reading:'じゅうにがつ',meaning:'December',mode:'read'},
    {kanji:'三つ',reading:'みっつ',meaning:'three (counter)',mode:'write'},
    {kanji:'百',reading:'ひゃく',meaning:'hundred',mode:'write'},
    {kanji:'三月',reading:'さんがつ',meaning:'March',mode:'read'},
    {kanji:'二百',reading:'にひゃく',meaning:'200',mode:'write'},
    {kanji:'四',reading:'よん',meaning:'four',mode:'write'},
    {kanji:'三百',reading:'さんびゃく',meaning:'300',mode:'write'},
    {kanji:'四つ',reading:'よっつ',meaning:'four (counter)',mode:'write'},
    {kanji:'六百',reading:'ろっぴゃく',meaning:'600',mode:'write'},
    {kanji:'四月',reading:'しがつ',meaning:'April',mode:'read'},
    {kanji:'八百',reading:'はっぴゃく',meaning:'800',mode:'write'},
    {kanji:'五',reading:'ご',meaning:'five',mode:'write'},
    {kanji:'千',reading:'せん',meaning:'thousand',mode:'write'},
    {kanji:'五つ',reading:'いつつ',meaning:'five (counter)',mode:'write'},
    {kanji:'二千',reading:'にせん',meaning:'2000',mode:'write'},
    {kanji:'五月',reading:'ごがつ',meaning:'May',mode:'read'},
    {kanji:'三千',reading:'さんぜん',meaning:'3000',mode:'write'},
    {kanji:'六',reading:'ろく',meaning:'six',mode:'write'},
    {kanji:'八千',reading:'はっせん',meaning:'8000',mode:'write'},
    {kanji:'六つ',reading:'むっつ',meaning:'six (counter)',mode:'write'},
    {kanji:'千円',reading:'せんえん',meaning:'1000 yen',mode:'write'},
    {kanji:'一万',reading:'いちまん',meaning:'10,000',mode:'write'},
    {kanji:'六月',reading:'ろくがつ',meaning:'June',mode:'read'},
    {kanji:'百万',reading:'ひゃくまん',meaning:'one million',mode:'write'},
    {kanji:'七',reading:'なな',meaning:'seven',mode:'write'},
    {kanji:'百円',reading:'ひゃくえん',meaning:'100 yen',mode:'write'},
    {kanji:'七つ',reading:'ななつ',meaning:'seven (counter)',mode:'write'},
    {kanji:'口',reading:'くち',meaning:'mouth',mode:'write'},
    {kanji:'七月',reading:'しちがつ',meaning:'July',mode:'read'},
    {kanji:'入口',reading:'いりぐち',meaning:'entrance',mode:'read'},
    {kanji:'八',reading:'はち',meaning:'eight',mode:'write'},
    {kanji:'出口',reading:'でぐち',meaning:'exit',mode:'read'},
    {kanji:'八つ',reading:'やっつ',meaning:'eight (counter)',mode:'write'},
    {kanji:'目',reading:'め',meaning:'eye',mode:'write'},
    {kanji:'八月',reading:'はちがつ',meaning:'August',mode:'read'},
  ],
  'KL2': [
    {kanji:'一日',reading:'ついたち',meaning:'1st (of month)',mode:'write'},
    {kanji:'本',reading:'ほん',meaning:'book, origin',mode:'write'},
    {kanji:'二日',reading:'ふつか',meaning:'2nd',mode:'write'},
    {kanji:'日本',reading:'にほん',meaning:'Japan',mode:'write'},
    {kanji:'日曜日',reading:'にちようび',meaning:'Sunday',mode:'write'},
    {kanji:'一本',reading:'いっぽん',meaning:'1 (long thing)',mode:'write'},
    {kanji:'二本',reading:'にほん',meaning:'2',mode:'write'},
    {kanji:'今日',reading:'きょう',meaning:'today',mode:'write'},
    {kanji:'三本',reading:'さんぼん',meaning:'3',mode:'write'},
    {kanji:'三日',reading:'みっか',meaning:'3rd',mode:'read'},
    {kanji:'山本さん',reading:'やまもとさん',meaning:'Yamamoto (name)',mode:'read'},
    {kanji:'人',reading:'ひと',meaning:'person',mode:'write'},
    {kanji:'月曜日',reading:'げつようび',meaning:'Monday',mode:'write'},
    {kanji:'日本人',reading:'にほんじん',meaning:'Japanese person',mode:'write'},
    {kanji:'今月',reading:'こんげつ',meaning:'this month',mode:'write'},
    {kanji:'一人',reading:'ひとり',meaning:'one person, alone',mode:'write'},
    {kanji:'月',reading:'つき',meaning:'moon, month',mode:'write'},
    {kanji:'二人',reading:'ふたり',meaning:'two people',mode:'write'},
    {kanji:'一か月',reading:'いっかげつ',meaning:'one month',mode:'read'},
    {kanji:'三人',reading:'さんにん',meaning:'three people',mode:'write'},
    {kanji:'火曜日',reading:'かようび',meaning:'Tuesday',mode:'write'},
    {kanji:'大人',reading:'おとな',meaning:'adult',mode:'read'},
    {kanji:'火',reading:'ひ',meaning:'fire, Tuesday',mode:'write'},
    {kanji:'今',reading:'いま',meaning:'now',mode:'write'},
    {kanji:'水曜日',reading:'すいようび',meaning:'Wednesday',mode:'write'},
    {kanji:'水',reading:'みず',meaning:'water, Wednesday',mode:'write'},
    {kanji:'木曜日',reading:'もくようび',meaning:'Thursday',mode:'write'},
    {kanji:'（お）寺',reading:'おてら',meaning:'temple',mode:'write'},
    {kanji:'木',reading:'き',meaning:'tree',mode:'write'},
    {kanji:'一時',reading:'いちじ',meaning:'1 o\'clock',mode:'write'},
    {kanji:'金曜日',reading:'きんようび',meaning:'Friday',mode:'write'},
    {kanji:'時々',reading:'ときどき',meaning:'sometimes',mode:'read'},
    {kanji:'お金',reading:'おかね',meaning:'money',mode:'write'},
    {kanji:'三時半',reading:'さんじはん',meaning:'3:30',mode:'write'},
    {kanji:'土曜日',reading:'どようび',meaning:'Saturday',mode:'write'},
    {kanji:'半分',reading:'はんぶん',meaning:'half',mode:'write'},
    {kanji:'土',reading:'つち',meaning:'earth, Saturday',mode:'read'},
    {kanji:'刀',reading:'かたな',meaning:'sword, katana',mode:'read'},
    {kanji:'曜日',reading:'ようび',meaning:'day of week',mode:'write'},
    {kanji:'五分',reading:'ごふん',meaning:'5 minutes',mode:'write'},
    {kanji:'十分',reading:'じゅっぷん',meaning:'10 minutes',mode:'write'},
    {kanji:'分かる',reading:'わかる',meaning:'to understand',mode:'write'},
  ],
  'KL3': [
    {kanji:'上',reading:'うえ',meaning:'above, up',mode:'write'},
    {kanji:'後ろ',reading:'うしろ',meaning:'behind, back',mode:'write'},
    {kanji:'上げる',reading:'あげる',meaning:'to raise, to give',mode:'write'},
    {kanji:'クラスの後',reading:'あと',meaning:'after class',mode:'write'},
    {kanji:'下',reading:'した',meaning:'below, down',mode:'write'},
    {kanji:'後で',reading:'あとで',meaning:'later',mode:'write'},
    {kanji:'下げる',reading:'さげる',meaning:'to lower',mode:'write'},
    {kanji:'午後',reading:'ごご',meaning:'PM, afternoon',mode:'write'},
    {kanji:'下さい',reading:'ください',meaning:'please give me',mode:'read'},
    {kanji:'午前',reading:'ごぜん',meaning:'AM, morning',mode:'write'},
    {kanji:'上下',reading:'じょうげ',meaning:'up and down',mode:'read'},
    {kanji:'午前中',reading:'ごぜんちゅう',meaning:'during the morning',mode:'write'},
    {kanji:'中',reading:'なか',meaning:'inside, middle',mode:'write'},
    {kanji:'門',reading:'もん',meaning:'gate',mode:'write'},
    {kanji:'中国',reading:'ちゅうごく',meaning:'China',mode:'write'},
    {kanji:'間',reading:'あいだ',meaning:'between, space',mode:'write'},
    {kanji:'一年中',reading:'いちねんじゅう',meaning:'all year long',mode:'read'},
    {kanji:'時間',reading:'じかん',meaning:'hours',mode:'write'},
    {kanji:'一日中',reading:'いちにちじゅう',meaning:'all day long',mode:'read'},
    {kanji:'二時間',reading:'にじかん',meaning:'two hours',mode:'write'},
    {kanji:'外',reading:'そと',meaning:'outside',mode:'write'},
    {kanji:'東',reading:'ひがし',meaning:'east',mode:'write'},
    {kanji:'外国',reading:'がいこく',meaning:'foreign country',mode:'write'},
    {kanji:'東口',reading:'ひがしぐち',meaning:'east exit',mode:'write'},
    {kanji:'外国人',reading:'がいこくじん',meaning:'foreigner',mode:'read'},
    {kanji:'東京',reading:'とうきょう',meaning:'Tokyo',mode:'read'},
    {kanji:'右',reading:'みぎ',meaning:'right',mode:'write'},
    {kanji:'西',reading:'にし',meaning:'west',mode:'write'},
    {kanji:'右側',reading:'みぎがわ',meaning:'right side',mode:'read'},
    {kanji:'西口',reading:'にしぐち',meaning:'west exit',mode:'write'},
    {kanji:'左右',reading:'さゆう',meaning:'left and right',mode:'read'},
    {kanji:'南',reading:'みなみ',meaning:'south',mode:'write'},
    {kanji:'工事中',reading:'こうじちゅう',meaning:'under construction',mode:'read'},
    {kanji:'南口',reading:'みなみぐち',meaning:'south exit',mode:'write'},
    {kanji:'左',reading:'ひだり',meaning:'left',mode:'write'},
    {kanji:'東南アジア',reading:'とうなんアジア',meaning:'Southeast Asia',mode:'write'},
    {kanji:'左側',reading:'ひだりがわ',meaning:'left side',mode:'read'},
    {kanji:'北',reading:'きた',meaning:'north',mode:'write'},
    {kanji:'前',reading:'まえ',meaning:'front, before',mode:'write'},
    {kanji:'北口',reading:'きたぐち',meaning:'north exit',mode:'write'},
    {kanji:'名前',reading:'なまえ',meaning:'name',mode:'write'},
  ],
  'KL4': [
    {kanji:'田中さん',reading:'たなかさん',meaning:'Tanaka (name)',mode:'write'},
    {kanji:'何',reading:'なに',meaning:'what',mode:'write'},
    {kanji:'山田さん',reading:'やまださん',meaning:'Yamada (name)',mode:'read'},
    {kanji:'何か',reading:'なにか',meaning:'something',mode:'write'},
    {kanji:'力',reading:'ちから',meaning:'power, strength',mode:'write'},
    {kanji:'何人',reading:'なんにん',meaning:'how many people',mode:'write'},
    {kanji:'協力する',reading:'きょうりょくする',meaning:'to cooperate',mode:'read'},
    {kanji:'何時',reading:'なんじ',meaning:'what time',mode:'write'},
    {kanji:'男の子',reading:'おとこのこ',meaning:'boy',mode:'write'},
    {kanji:'父',reading:'ちち',meaning:'(my) father',mode:'write'},
    {kanji:'男の人',reading:'おとこのひと',meaning:'man',mode:'write'},
    {kanji:'お父さん',reading:'おとうさん',meaning:'father',mode:'write'},
    {kanji:'男性',reading:'だんせい',meaning:'male',mode:'read'},
    {kanji:'母',reading:'はは',meaning:'(my) mother',mode:'write'},
    {kanji:'女の子',reading:'おんなのこ',meaning:'girl',mode:'write'},
    {kanji:'お母さん',reading:'おかあさん',meaning:'mother (someone else\'s)',mode:'write'},
    {kanji:'女の人',reading:'おんなのひと',meaning:'woman',mode:'write'},
    {kanji:'一年',reading:'いちねん',meaning:'one year',mode:'write'},
    {kanji:'女性',reading:'じょせい',meaning:'female',mode:'read'},
    {kanji:'今年',reading:'ことし',meaning:'this year',mode:'write'},
    {kanji:'子供',reading:'こども',meaning:'child',mode:'read'},
    {kanji:'年',reading:'とし',meaning:'year',mode:'write'},
    {kanji:'学生',reading:'がくせい',meaning:'student',mode:'write'},
    {kanji:'去年',reading:'きょねん',meaning:'last year',mode:'write'},
    {kanji:'大学',reading:'だいがく',meaning:'university',mode:'read'},
    {kanji:'毎日',reading:'まいにち',meaning:'every day',mode:'write'},
    {kanji:'学校',reading:'がっこう',meaning:'school',mode:'write'},
    {kanji:'毎月',reading:'まいつき',meaning:'every month',mode:'write'},
    {kanji:'先生',reading:'せんせい',meaning:'teacher',mode:'write'},
    {kanji:'毎年',reading:'まいとし',meaning:'every year',mode:'write'},
    {kanji:'生まれる',reading:'うまれる',meaning:'to be born',mode:'write'},
    {kanji:'国王',reading:'こくおう',meaning:'king',mode:'read'},
    {kanji:'生きる',reading:'いきる',meaning:'to live',mode:'write'},
    {kanji:'国',reading:'くに',meaning:'country, nation',mode:'write'},
    {kanji:'誕生日',reading:'たんじょうび',meaning:'birthday',mode:'read'},
    {kanji:'先月',reading:'せんげつ',meaning:'last month',mode:'write'},
    {kanji:'先に',reading:'さきに',meaning:'ahead, first',mode:'read'},
    {kanji:'国籍',reading:'こくせき',meaning:'nationality',mode:'read'},
  ],
  'KL5': [
    {kanji:'見る',reading:'みる',meaning:'to see',mode:'write'},
    {kanji:'耳',reading:'みみ',meaning:'ear',mode:'write'},
    {kanji:'見せる',reading:'みせる',meaning:'to show',mode:'write'},
    {kanji:'聞く',reading:'きく',meaning:'to listen, hear',mode:'write'},
    {kanji:'行く',reading:'いく',meaning:'to go',mode:'write'},
    {kanji:'新聞',reading:'しんぶん',meaning:'newspaper',mode:'write'},
    {kanji:'銀行',reading:'ぎんこう',meaning:'bank',mode:'write'},
    {kanji:'言う',reading:'いう',meaning:'to say',mode:'write'},
    {kanji:'旅行',reading:'りょこう',meaning:'travel',mode:'read'},
    {kanji:'話す',reading:'はなす',meaning:'to speak',mode:'write'},
    {kanji:'お米',reading:'おこめ',meaning:'rice (uncooked)',mode:'write'},
    {kanji:'話',reading:'はなし',meaning:'story, talk',mode:'write'},
    {kanji:'欧米',reading:'おうべい',meaning:'Europe and America',mode:'read'},
    {kanji:'電話',reading:'でんわ',meaning:'telephone',mode:'write'},
    {kanji:'来る',reading:'くる',meaning:'to come',mode:'write'},
    {kanji:'話し合う',reading:'はなしあう',meaning:'to discuss',mode:'read'},
    {kanji:'来ます',reading:'きます',meaning:'to wear (clothes)',mode:'write'},
    {kanji:'立つ',reading:'たつ',meaning:'to stand',mode:'write'},
    {kanji:'来ない',reading:'こない',meaning:'does not come',mode:'write'},
    {kanji:'国立大学',reading:'こくりつだいがく',meaning:'national university',mode:'read'},
    {kanji:'来年',reading:'らいねん',meaning:'next year',mode:'write'},
    {kanji:'待つ',reading:'まつ',meaning:'to wait',mode:'write'},
    {kanji:'来週',reading:'らいしゅう',meaning:'next week',mode:'write'},
    {kanji:'待ち合わせ',reading:'まちあわせ',meaning:'meeting up',mode:'read'},
    {kanji:'良い',reading:'よい',meaning:'good',mode:'read'},
    {kanji:'周り',reading:'まわり',meaning:'surroundings',mode:'read'},
    {kanji:'食べる',reading:'たべる',meaning:'to eat',mode:'write'},
    {kanji:'一周',reading:'いっしゅう',meaning:'1 lap',mode:'read'},
    {kanji:'食べ物',reading:'たべもの',meaning:'food',mode:'read'},
    {kanji:'今週',reading:'こんしゅう',meaning:'this week',mode:'write'},
    {kanji:'食事',reading:'しょくじ',meaning:'meal',mode:'read'},
    {kanji:'先週',reading:'せんしゅう',meaning:'last week',mode:'write'},
    {kanji:'飲む',reading:'のむ',meaning:'to drink',mode:'write'},
    {kanji:'毎週',reading:'まいしゅう',meaning:'every week',mode:'write'},
    {kanji:'飲み物',reading:'のみもの',meaning:'drink, beverage',mode:'read'},
    {kanji:'一週間',reading:'いっしゅうかん',meaning:'one week',mode:'write'},
    {kanji:'飲食店',reading:'いんしょくてん',meaning:'restaurant, eatery',mode:'read'},
    {kanji:'週末',reading:'しゅうまつ',meaning:'weekend',mode:'read'},
    {kanji:'会う',reading:'あう',meaning:'to meet',mode:'write'},
    {kanji:'会話',reading:'かいわ',meaning:'conversation',mode:'write'},
    {kanji:'会社',reading:'かいしゃ',meaning:'company',mode:'write'},
  ],
  'KL6': [
    {kanji:'大きい',reading:'おおきい',meaning:'big',mode:'write'},
    {kanji:'多い',reading:'おおい',meaning:'many',mode:'write'},
    {kanji:'大学生',reading:'だいがくせい',meaning:'university student',mode:'write'},
    {kanji:'少し',reading:'すこし',meaning:'a little',mode:'write'},
    {kanji:'大好きな',reading:'だいすきな',meaning:'like very much',mode:'write'},
    {kanji:'少ない',reading:'すくない',meaning:'few',mode:'write'},
    {kanji:'大切な',reading:'たいせつな',meaning:'important',mode:'read'},
    {kanji:'少々',reading:'しょうしょう',meaning:'a little (formal)',mode:'read'},
    {kanji:'小さい',reading:'ちいさい',meaning:'small',mode:'write'},
    {kanji:'広い',reading:'ひろい',meaning:'wide',mode:'write'},
    {kanji:'小学校',reading:'しょうがっこう',meaning:'elementary school',mode:'read'},
    {kanji:'早い',reading:'はやい',meaning:'fast, early',mode:'write'},
    {kanji:'高い',reading:'たかい',meaning:'tall, expensive',mode:'write'},
    {kanji:'早く',reading:'はやく',meaning:'quickly, early',mode:'write'},
    {kanji:'高校',reading:'こうこう',meaning:'high school',mode:'read'},
    {kanji:'長い',reading:'ながい',meaning:'long',mode:'write'},
    {kanji:'円高',reading:'えんだか',meaning:'strong yen',mode:'read'},
    {kanji:'社長',reading:'しゃちょう',meaning:'company president',mode:'write'},
    {kanji:'安い',reading:'やすい',meaning:'cheap',mode:'write'},
    {kanji:'明るい',reading:'あかるい',meaning:'bright',mode:'write'},
    {kanji:'安全',reading:'あんぜん',meaning:'safe, safety',mode:'read'},
    {kanji:'明日',reading:'あした',meaning:'tomorrow',mode:'write'},
    {kanji:'円安',reading:'えんやす',meaning:'weak yen',mode:'read'},
    {kanji:'説明',reading:'せつめい',meaning:'explanation',mode:'read'},
    {kanji:'新しい',reading:'あたらしい',meaning:'new',mode:'write'},
    {kanji:'好きな',reading:'すきな',meaning:'liked',mode:'write'},
    {kanji:'古い',reading:'ふるい',meaning:'old',mode:'write'},
    {kanji:'友だち',reading:'ともだち',meaning:'friend',mode:'write'},
    {kanji:'中古',reading:'ちゅうこ',meaning:'second-hand',mode:'read'},
    {kanji:'友人',reading:'ゆうじん',meaning:'friend (formal)',mode:'read'},
    {kanji:'元気な',reading:'げんきな',meaning:'healthy, energetic',mode:'write'},
    {kanji:'親友',reading:'しんゆう',meaning:'close friend',mode:'read'},
    {kanji:'気をつける',reading:'きをつける',meaning:'to be careful',mode:'write'},
    {kanji:'天気',reading:'てんき',meaning:'weather',mode:'read'},
    {kanji:'電気',reading:'でんき',meaning:'electricity, light',mode:'write'},
    {kanji:'気持ち',reading:'きもち',meaning:'feeling',mode:'write'},
    {kanji:'人気',reading:'にんき',meaning:'popularity',mode:'read'},
  ],
  'KL7': [
    {kanji:'入る',reading:'はいる',meaning:'to enter',mode:'write'},
    {kanji:'馬',reading:'うま',meaning:'horse',mode:'write'},
    {kanji:'入れる',reading:'いれる',meaning:'to put in',mode:'write'},
    {kanji:'駅',reading:'えき',meaning:'station',mode:'write'},
    {kanji:'入学する',reading:'にゅうがくする',meaning:'to enrol',mode:'write'},
    {kanji:'駅員',reading:'えきいん',meaning:'station staff',mode:'read'},
    {kanji:'出る',reading:'でる',meaning:'to leave',mode:'write'},
    {kanji:'出かける',reading:'でかける',meaning:'to go out',mode:'write'},
    {kanji:'社会',reading:'しゃかい',meaning:'society',mode:'write'},
    {kanji:'出す',reading:'だす',meaning:'to take out',mode:'write'},
    {kanji:'出席する',reading:'しゅっせきする',meaning:'to attend',mode:'read'},
    {kanji:'つくば市',reading:'つくばし',meaning:'Tsukuba City',mode:'write'},
    {kanji:'校長',reading:'こうちょう',meaning:'school principal',mode:'write'},
    {kanji:'市役所',reading:'しやくしょ',meaning:'city hall',mode:'read'},
    {kanji:'店',reading:'みせ',meaning:'shop, store',mode:'write'},
    {kanji:'町',reading:'まち',meaning:'town',mode:'write'},
    {kanji:'店員',reading:'てんいん',meaning:'shop staff',mode:'read'},
    {kanji:'田町',reading:'たまち',meaning:'Tamachi',mode:'read'},
    {kanji:'売店',reading:'ばいてん',meaning:'kiosk, stand',mode:'read'},
    {kanji:'本町',reading:'ほんちょう',meaning:'Honcho',mode:'read'},
    {kanji:'店長',reading:'てんちょう',meaning:'store manager',mode:'read'},
    {kanji:'村',reading:'むら',meaning:'village',mode:'write'},
    {kanji:'市町村',reading:'しちょうそん',meaning:'municipalities',mode:'read'},
    {kanji:'病気',reading:'びょうき',meaning:'illness, disease',mode:'write'},
    {kanji:'雨',reading:'あめ',meaning:'rain',mode:'write'},
    {kanji:'病院',reading:'びょういん',meaning:'hospital',mode:'read'},
    {kanji:'大雨',reading:'おおあめ',meaning:'heavy rain',mode:'read'},
    {kanji:'入院する',reading:'にゅういんする',meaning:'to be hospitalised',mode:'write'},
    {kanji:'大学院',reading:'だいがくいん',meaning:'graduate school',mode:'write'},
    {kanji:'電車',reading:'でんしゃ',meaning:'train',mode:'write'},
    {kanji:'退院する',reading:'たいいんする',meaning:'to be discharged (hospital)',mode:'read'},
    {kanji:'美容院',reading:'びよういん',meaning:'beauty salon, hair salon',mode:'read'},
    {kanji:'電力',reading:'でんりょく',meaning:'electricity, power',mode:'read'},
    {kanji:'電池',reading:'でんち',meaning:'battery',mode:'read'},
    {kanji:'電源',reading:'でんげん',meaning:'power source',mode:'read'},
    {kanji:'車',reading:'くるま',meaning:'car',mode:'write'},
    {kanji:'自転車',reading:'じてんしゃ',meaning:'bicycle',mode:'read'},
    {kanji:'駐車場',reading:'ちゅうしゃじょう',meaning:'parking lot',mode:'read'},
  ],
  'KL8': [
    {kanji:'休む',reading:'やすむ',meaning:'to rest',mode:'write'},
    {kanji:'帰る',reading:'かえる',meaning:'to return',mode:'write'},
    {kanji:'休み',reading:'やすみ',meaning:'rest, holiday',mode:'write'},
    {kanji:'帰国',reading:'きこく',meaning:'return to country',mode:'read'},
    {kanji:'休日',reading:'きゅうじつ',meaning:'holiday',mode:'read'},
    {kanji:'日帰り旅行',reading:'ひがえりりょこう',meaning:'day trip',mode:'read'},
    {kanji:'定休日',reading:'ていきゅうび',meaning:'regular holiday (closed day)',mode:'read'},
    {kanji:'弓',reading:'ゆみ',meaning:'bow (archery)',mode:'write'},
    {kanji:'走る',reading:'はしる',meaning:'to run',mode:'write'},
    {kanji:'虫',reading:'むし',meaning:'insect, bug',mode:'write'},
    {kanji:'起きる',reading:'おきる',meaning:'to wake up',mode:'write'},
    {kanji:'強い',reading:'つよい',meaning:'strong',mode:'write'},
    {kanji:'起こす',reading:'おこす',meaning:'to wake someone up',mode:'write'},
    {kanji:'勉強する',reading:'べんきょうする',meaning:'to study',mode:'write'},
    {kanji:'貝',reading:'かい',meaning:'shellfish',mode:'write'},
    {kanji:'持つ',reading:'もつ',meaning:'to hold, have',mode:'write'},
    {kanji:'買う',reading:'かう',meaning:'to buy',mode:'write'},
    {kanji:'お金持ち',reading:'おかねもち',meaning:'rich person',mode:'write'},
    {kanji:'買い物',reading:'かいもの',meaning:'shopping',mode:'read'},
    {kanji:'売る',reading:'うる',meaning:'to sell',mode:'write'},
    {kanji:'持ち物',reading:'もちもの',meaning:'belongings',mode:'read'},
    {kanji:'売り切れる',reading:'うりきれる',meaning:'to sell out',mode:'read'},
    {kanji:'売り場',reading:'うりば',meaning:'sales floor',mode:'read'},
    {kanji:'有名な',reading:'ゆうめいな',meaning:'famous',mode:'read'},
    {kanji:'氏名',reading:'しめい',meaning:'full name',mode:'read'},
    {kanji:'読む',reading:'よむ',meaning:'to read',mode:'write'},
    {kanji:'名字',reading:'みょうじ',meaning:'surname, family name',mode:'read'},
    {kanji:'書く',reading:'かく',meaning:'to write',mode:'write'},
    {kanji:'名詞',reading:'めいし',meaning:'noun',mode:'read'},
    {kanji:'読書',reading:'どくしょ',meaning:'reading (books)',mode:'read'},
    {kanji:'日本語',reading:'にほんご',meaning:'Japanese',mode:'write'},
    {kanji:'図書館',reading:'としょかん',meaning:'library',mode:'read'},
    {kanji:'中国語',reading:'ちゅうごくご',meaning:'Chinese',mode:'write'},
    {kanji:'辞書',reading:'じしょ',meaning:'dictionary',mode:'read'},
    {kanji:'英語',reading:'えいご',meaning:'English (language)',mode:'read'},
    {kanji:'教科書',reading:'きょうかしょ',meaning:'textbook',mode:'read'},
    {kanji:'外国語',reading:'がいこくご',meaning:'foreign language',mode:'read'},
  ],
};
const grammarData = {};
const conjLookup = {
  'します':[{label:'Pres. +',jp:'します'},{label:'Pres. −',jp:'しません'},{label:'Past +',jp:'しました'},{label:'Past −',jp:'しませんでした'},{label:'Dictionary',jp:'する'},{label:'て-form',jp:'して'},{label:'ない form',jp:'しない'}],
  'すいます':[{label:'Pres. +',jp:'すいます'},{label:'Pres. −',jp:'すいません'},{label:'Past +',jp:'すいました'},{label:'Past −',jp:'すいませんでした'},{label:'Dictionary',jp:'すう'},{label:'て-form',jp:'すって'},{label:'ない form',jp:'すわない'}],
  'およぎます':[{label:'Pres. +',jp:'およぎます'},{label:'Pres. −',jp:'およぎません'},{label:'Past +',jp:'およぎました'},{label:'Past −',jp:'およぎませんでした'},{label:'Dictionary',jp:'およぐ'},{label:'て-form',jp:'およいで'},{label:'ない form',jp:'およがない'}],
  'みがきます':[{label:'Pres. +',jp:'みがきます'},{label:'Pres. −',jp:'みがきません'},{label:'Past +',jp:'みがきました'},{label:'Past −',jp:'みがきませんでした'},{label:'Dictionary',jp:'みがく'},{label:'て-form',jp:'みがいて'},{label:'ない form',jp:'みがかない'}],
  'ねます':[{label:'Pres. +',jp:'ねます'},{label:'Pres. −',jp:'ねません'},{label:'Past +',jp:'ねました'},{label:'Past −',jp:'ねませんでした'},{label:'Dictionary',jp:'ねる'},{label:'て-form',jp:'ねて'},{label:'ない form',jp:'ねない'}],
  'テニスをします':[{label:'Pres. +',jp:'テニスをします'},{label:'Pres. −',jp:'テニスをしません'},{label:'Past +',jp:'テニスをしました'},{label:'Past −',jp:'テニスをしませんでした'},{label:'Dictionary',jp:'テニスをする'},{label:'て-form',jp:'テニスをして'},{label:'ない form',jp:'テニスをしない'}],
  'しごとをします':[{label:'Pres. +',jp:'しごとをします'},{label:'Pres. −',jp:'しごとをしません'},{label:'Past +',jp:'しごとをしました'},{label:'Past −',jp:'しごとをしませんでした'},{label:'Dictionary',jp:'しごとをする'},{label:'て-form',jp:'しごとをして'},{label:'ない form',jp:'しごとをしない'}],
  '食べます':[{label:'Pres. +',jp:'食べます'},{label:'Pres. −',jp:'食べません'},{label:'Past +',jp:'食べました'},{label:'Past −',jp:'食べませんでした'},{label:'Dictionary',jp:'食べる'},{label:'て-form',jp:'食べて'},{label:'ない form',jp:'たべない'}],
  '飲みます':[{label:'Pres. +',jp:'飲みます'},{label:'Pres. −',jp:'飲みません'},{label:'Past +',jp:'飲みました'},{label:'Past −',jp:'飲みませんでした'},{label:'Dictionary',jp:'飲む'},{label:'て-form',jp:'飲んで'},{label:'ない form',jp:'のまない'}],
  '見ます':[{label:'Pres. +',jp:'見ます'},{label:'Pres. −',jp:'見ません'},{label:'Past +',jp:'見ました'},{label:'Past −',jp:'見ませんでした'},{label:'Dictionary',jp:'見る'},{label:'て-form',jp:'見て'},{label:'ない form',jp:'みない'}],
  '聞きます':[{label:'Pres. +',jp:'聞きます'},{label:'Pres. −',jp:'聞きません'},{label:'Past +',jp:'聞きました'},{label:'Past −',jp:'聞きませんでした'},{label:'Dictionary',jp:'聞く'},{label:'て-form',jp:'聞いて'},{label:'ない form',jp:'きかない'}],
  '話します':[{label:'Pres. +',jp:'話します'},{label:'Pres. −',jp:'話しません'},{label:'Past +',jp:'話しました'},{label:'Past −',jp:'話しませんでした'},{label:'Dictionary',jp:'話す'},{label:'て-form',jp:'話して'},{label:'ない form',jp:'はなさない'}],
  '行きます':[{label:'Pres. +',jp:'行きます'},{label:'Pres. −',jp:'行きません'},{label:'Past +',jp:'行きました'},{label:'Past −',jp:'行きませんでした'},{label:'Dictionary',jp:'行く'},{label:'て-form',jp:'行って'},{label:'ない form',jp:'いかない'}],
  '来ます':[{label:'Pres. +',jp:'来ます'},{label:'Pres. −',jp:'来ません'},{label:'Past +',jp:'来ました'},{label:'Past −',jp:'来ませんでした'},{label:'Dictionary',jp:'来る'},{label:'て-form',jp:'来て'},{label:'ない form',jp:'こない'}],
  '入ります':[{label:'Pres. +',jp:'入ります'},{label:'Pres. −',jp:'入りません'},{label:'Past +',jp:'入りました'},{label:'Past −',jp:'入りませんでした'},{label:'Dictionary',jp:'入る'},{label:'て-form',jp:'入って'},{label:'ない form',jp:'はいらない'}],
  '勉強をします':[{label:'Pres. +',jp:'勉強をします'},{label:'Pres. −',jp:'勉強をしません'},{label:'Past +',jp:'勉強をしました'},{label:'Past −',jp:'勉強をしませんでした'},{label:'Dictionary',jp:'勉強をする'},{label:'て-form',jp:'勉強をして'},{label:'ない form',jp:'べんきょうをしない'}],
  '読みます':[{label:'Pres. +',jp:'読みます'},{label:'Pres. −',jp:'読みません'},{label:'Past +',jp:'読みました'},{label:'Past −',jp:'読みませんでした'},{label:'Dictionary',jp:'読む'},{label:'て-form',jp:'読んで'},{label:'ない form',jp:'よまない'}],
  '書きます':[{label:'Pres. +',jp:'書きます'},{label:'Pres. −',jp:'書きません'},{label:'Past +',jp:'書きました'},{label:'Past −',jp:'書きませんでした'},{label:'Dictionary',jp:'書く'},{label:'て-form',jp:'書いて'},{label:'ない form',jp:'かかない'}],
  '買います':[{label:'Pres. +',jp:'買います'},{label:'Pres. −',jp:'買いません'},{label:'Past +',jp:'買いました'},{label:'Past −',jp:'買いませんでした'},{label:'Dictionary',jp:'買う'},{label:'て-form',jp:'買って'},{label:'ない form',jp:'かわない'}],
  '帰ります':[{label:'Pres. +',jp:'帰ります'},{label:'Pres. −',jp:'帰りません'},{label:'Past +',jp:'帰りました'},{label:'Past −',jp:'帰りませんでした'},{label:'Dictionary',jp:'帰る'},{label:'て-form',jp:'帰って'},{label:'ない form',jp:'かえらない'}],
  '起きます':[{label:'Pres. +',jp:'起きます'},{label:'Pres. −',jp:'起きません'},{label:'Past +',jp:'起きました'},{label:'Past −',jp:'起きませんでした'},{label:'Dictionary',jp:'起きる'},{label:'て-form',jp:'起きて'},{label:'ない form',jp:'おきない'}],
  'そうじをします':[{label:'Pres. +',jp:'そうじをします'},{label:'Pres. −',jp:'そうじをしません'},{label:'Past +',jp:'そうじをしました'},{label:'Past −',jp:'そうじをしませんでした'},{label:'Dictionary',jp:'そうじをする'},{label:'て-form',jp:'そうじをして'},{label:'ない form',jp:'そうじをしない'}],
  'つくります':[{label:'Pres. +',jp:'つくります'},{label:'Pres. −',jp:'つくりません'},{label:'Past +',jp:'つくりました'},{label:'Past −',jp:'つくりませんでした'},{label:'Dictionary',jp:'つくる'},{label:'て-form',jp:'つくって'},{label:'ない form',jp:'つこない'}],
  'とまります':[{label:'Pres. +',jp:'とまります'},{label:'Pres. −',jp:'とまりません'},{label:'Past +',jp:'とまりました'},{label:'Past −',jp:'とまりませんでした'},{label:'Dictionary',jp:'とまる'},{label:'て-form',jp:'とまって'},{label:'ない form',jp:'とまない'}],
  '会います':[{label:'Pres. +',jp:'会います'},{label:'Pres. −',jp:'会いません'},{label:'Past +',jp:'会いました'},{label:'Past −',jp:'会いませんでした'},{label:'Dictionary',jp:'会う'},{label:'て-form',jp:'会って'},{label:'ない form',jp:'あわない'}],
  'あります':[{label:'Pres. +',jp:'あります'},{label:'Pres. −',jp:'ありません'},{label:'Past +',jp:'ありました'},{label:'Past −',jp:'ありませんでした'},{label:'Dictionary',jp:'ある'},{label:'て-form',jp:'あって'},{label:'ない form',jp:'あない'}],
  'います':[{label:'Pres. +',jp:'います'},{label:'Pres. −',jp:'いません'},{label:'Past +',jp:'いました'},{label:'Past −',jp:'いませんでした'},{label:'Dictionary',jp:'いる'},{label:'て-form',jp:'いて'},{label:'ない form',jp:'いない'}],
  'のります':[{label:'Pres. +',jp:'のります'},{label:'Pres. −',jp:'のりません'},{label:'Past +',jp:'のりました'},{label:'Past −',jp:'のりませんでした'},{label:'Dictionary',jp:'のる'},{label:'て-form',jp:'のって'},{label:'ない form',jp:'のない'}],
  'つりをします':[{label:'Pres. +',jp:'つりをします'},{label:'Pres. −',jp:'つりをしません'},{label:'Past +',jp:'つりをしました'},{label:'Past −',jp:'つりをしませんでした'},{label:'Dictionary',jp:'つりをする'},{label:'て-form',jp:'つりをして'},{label:'ない form',jp:'つりをしない'}],
  'よびます':[{label:'Pres. +',jp:'よびます'},{label:'Pres. −',jp:'よびません'},{label:'Past +',jp:'よびました'},{label:'Past −',jp:'よびませんでした'},{label:'Dictionary',jp:'よぶ'},{label:'て-form',jp:'よんで'},{label:'ない form',jp:'よばない'}],
  'あけます':[{label:'Pres. +',jp:'あけます'},{label:'Pres. −',jp:'あけません'},{label:'Past +',jp:'あけました'},{label:'Past −',jp:'あけませんでした'},{label:'Dictionary',jp:'あける'},{label:'て-form',jp:'あけて'},{label:'ない form',jp:'あけない'}],
  'うたいます':[{label:'Pres. +',jp:'うたいます'},{label:'Pres. −',jp:'うたいません'},{label:'Past +',jp:'うたいました'},{label:'Past −',jp:'うたいませんでした'},{label:'Dictionary',jp:'うたう'},{label:'て-form',jp:'うたって'},{label:'ない form',jp:'うたわない'}],
  'かきます':[{label:'Pres. +',jp:'かきます'},{label:'Pres. −',jp:'かきません'},{label:'Past +',jp:'かきました'},{label:'Past −',jp:'かきませんでした'},{label:'Dictionary',jp:'かく'},{label:'て-form',jp:'かいて'},{label:'ない form',jp:'かかない'}],
  'そだてます':[{label:'Pres. +',jp:'そだてます'},{label:'Pres. −',jp:'そだてません'},{label:'Past +',jp:'そだてました'},{label:'Past −',jp:'そだてませんでした'},{label:'Dictionary',jp:'そだてる'},{label:'て-form',jp:'そだてて'},{label:'ない form',jp:'そだてない'}],
  'あみます':[{label:'Pres. +',jp:'あみます'},{label:'Pres. −',jp:'あみません'},{label:'Past +',jp:'あみました'},{label:'Past −',jp:'あみませんでした'},{label:'Dictionary',jp:'あむ'},{label:'て-form',jp:'あんで'},{label:'ない form',jp:'あまない'}],
  'ひきます':[{label:'Pres. +',jp:'ひきます'},{label:'Pres. −',jp:'ひきません'},{label:'Past +',jp:'ひきました'},{label:'Past −',jp:'ひきませんでした'},{label:'Dictionary',jp:'ひく'},{label:'て-form',jp:'ひいて'},{label:'ない form',jp:'ひかない'}],
  'しにます':[{label:'Pres. +',jp:'しにます'},{label:'Pres. −',jp:'しにません'},{label:'Past +',jp:'しにました'},{label:'Past −',jp:'しにませんでした'},{label:'Dictionary',jp:'しぬ'},{label:'て-form',jp:'しんで'},{label:'ない form',jp:'しなない'}],
  '待ちます':[{label:'Pres. +',jp:'待ちます'},{label:'Pres. −',jp:'待ちません'},{label:'Past +',jp:'待ちました'},{label:'Past −',jp:'待ちませんでした'},{label:'Dictionary',jp:'待つ'},{label:'て-form',jp:'待って'},{label:'ない form',jp:'またない'}],
  'しめます':[{label:'Pres. +',jp:'しめます'},{label:'Pres. −',jp:'しめません'},{label:'Past +',jp:'しめました'},{label:'Past −',jp:'しめませんでした'},{label:'Dictionary',jp:'しめる'},{label:'て-form',jp:'しめて'},{label:'ない form',jp:'しめない'}],
  'けします':[{label:'Pres. +',jp:'けします'},{label:'Pres. −',jp:'けしません'},{label:'Past +',jp:'けしました'},{label:'Past −',jp:'けしませんでした'},{label:'Dictionary',jp:'けす'},{label:'て-form',jp:'けして'},{label:'ない form',jp:'けさない'}],
  'おしえます':[{label:'Pres. +',jp:'おしえます'},{label:'Pres. −',jp:'おしえません'},{label:'Past +',jp:'おしえました'},{label:'Past −',jp:'おしえませんでした'},{label:'Dictionary',jp:'おしえる'},{label:'て-form',jp:'おしえて'},{label:'ない form',jp:'おしえない'}],
  'わすれます':[{label:'Pres. +',jp:'わすれます'},{label:'Pres. −',jp:'わすれません'},{label:'Past +',jp:'わすれました'},{label:'Past −',jp:'わすれませんでした'},{label:'Dictionary',jp:'わすれる'},{label:'て-form',jp:'わすれて'},{label:'ない form',jp:'わすれない'}],
  'あそびます':[{label:'Pres. +',jp:'あそびます'},{label:'Pres. −',jp:'あそびません'},{label:'Past +',jp:'あそびました'},{label:'Past −',jp:'あそびませんでした'},{label:'Dictionary',jp:'あそぶ'},{label:'て-form',jp:'あそんで'},{label:'ない form',jp:'あそばない'}],
  'かします':[{label:'Pres. +',jp:'かします'},{label:'Pres. −',jp:'かしません'},{label:'Past +',jp:'かしました'},{label:'Past −',jp:'かしませんでした'},{label:'Dictionary',jp:'かす'},{label:'て-form',jp:'かして'},{label:'ない form',jp:'かさない'}],
  'おどります':[{label:'Pres. +',jp:'おどります'},{label:'Pres. −',jp:'おどりません'},{label:'Past +',jp:'おどりました'},{label:'Past −',jp:'おどりませんでした'},{label:'Dictionary',jp:'おどる'},{label:'て-form',jp:'おどって'},{label:'ない form',jp:'おどない'}],
  'とびます':[{label:'Pres. +',jp:'とびます'},{label:'Pres. −',jp:'とびません'},{label:'Past +',jp:'とびました'},{label:'Past −',jp:'とびませんでした'},{label:'Dictionary',jp:'とぶ'},{label:'て-form',jp:'とんで'},{label:'ない form',jp:'とばない'}],
  'あるきます':[{label:'Pres. +',jp:'あるきます'},{label:'Pres. −',jp:'あるきません'},{label:'Past +',jp:'あるきました'},{label:'Past −',jp:'あるきませんでした'},{label:'Dictionary',jp:'あるく'},{label:'て-form',jp:'あるいて'},{label:'ない form',jp:'あるかない'}],
  'わらいます':[{label:'Pres. +',jp:'わらいます'},{label:'Pres. −',jp:'わらいません'},{label:'Past +',jp:'わらいました'},{label:'Past −',jp:'わらいませんでした'},{label:'Dictionary',jp:'わらう'},{label:'て-form',jp:'わらって'},{label:'ない form',jp:'わらわない'}],
  'ひっこします':[{label:'Pres. +',jp:'ひっこします'},{label:'Pres. −',jp:'ひっこしません'},{label:'Past +',jp:'ひっこしました'},{label:'Past −',jp:'ひっこしませんでした'},{label:'Dictionary',jp:'ひっこす'},{label:'て-form',jp:'ひっこして'},{label:'ない form',jp:'ひっこさない'}],
  'てつだいます':[{label:'Pres. +',jp:'てつだいます'},{label:'Pres. −',jp:'てつだいません'},{label:'Past +',jp:'てつだいました'},{label:'Past −',jp:'てつだいませんでした'},{label:'Dictionary',jp:'てつだう'},{label:'て-form',jp:'てつだって'},{label:'ない form',jp:'てつだわない'}],
  'とります':[{label:'Pres. +',jp:'とります'},{label:'Pres. −',jp:'とりません'},{label:'Past +',jp:'とりました'},{label:'Past −',jp:'とりませんでした'},{label:'Dictionary',jp:'とる'},{label:'て-form',jp:'とって'},{label:'ない form',jp:'とない'}],
  '立ちます':[{label:'Pres. +',jp:'立ちます'},{label:'Pres. −',jp:'立ちません'},{label:'Past +',jp:'立ちました'},{label:'Past −',jp:'立ちませんでした'},{label:'Dictionary',jp:'立つ'},{label:'て-form',jp:'立って'},{label:'ない form',jp:'たたない'}],
  '見せます':[{label:'Pres. +',jp:'見せます'},{label:'Pres. −',jp:'見せません'},{label:'Past +',jp:'見せました'},{label:'Past −',jp:'見せませんでした'},{label:'Dictionary',jp:'見せる'},{label:'て-form',jp:'見せて'},{label:'ない form',jp:'みせない'}],
  '言います':[{label:'Pres. +',jp:'言います'},{label:'Pres. −',jp:'言いません'},{label:'Past +',jp:'言いました'},{label:'Past −',jp:'言いませんでした'},{label:'Dictionary',jp:'言う'},{label:'て-form',jp:'言って'},{label:'ない form',jp:'いわない'}],
  '出ます':[{label:'Pres. +',jp:'出ます'},{label:'Pres. −',jp:'出ません'},{label:'Past +',jp:'出ました'},{label:'Past −',jp:'出ませんでした'},{label:'Dictionary',jp:'出る'},{label:'て-form',jp:'出て'},{label:'ない form',jp:'でない'}],
  '持ちます':[{label:'Pres. +',jp:'持ちます'},{label:'Pres. −',jp:'持ちません'},{label:'Past +',jp:'持ちました'},{label:'Past −',jp:'持ちませんでした'},{label:'Dictionary',jp:'持つ'},{label:'て-form',jp:'持って'},{label:'ない form',jp:'もたない'}],
  '走ります':[{label:'Pres. +',jp:'走ります'},{label:'Pres. −',jp:'走りません'},{label:'Past +',jp:'走りました'},{label:'Past −',jp:'走りませんでした'},{label:'Dictionary',jp:'走る'},{label:'て-form',jp:'走って'},{label:'ない form',jp:'はしらない'}],
  'とめます':[{label:'Pres. +',jp:'とめます'},{label:'Pres. −',jp:'とめません'},{label:'Past +',jp:'とめました'},{label:'Past −',jp:'とめませんでした'},{label:'Dictionary',jp:'とめる'},{label:'て-form',jp:'とめて'},{label:'ない form',jp:'とめない'}],
  'おります':[{label:'Pres. +',jp:'おります'},{label:'Pres. −',jp:'おりません'},{label:'Past +',jp:'おりました'},{label:'Past −',jp:'おりませんでした'},{label:'Dictionary',jp:'おりる'},{label:'て-form',jp:'おりて'},{label:'ない form',jp:'おりない'}],
  'あびます':[{label:'Pres. +',jp:'あびます'},{label:'Pres. −',jp:'あびません'},{label:'Past +',jp:'あびました'},{label:'Past −',jp:'あびませんでした'},{label:'Dictionary',jp:'あびる'},{label:'て-form',jp:'あびて'},{label:'ない form',jp:'あびない'}],
  'かかります':[{label:'Pres. +',jp:'かかります'},{label:'Pres. −',jp:'かかりません'},{label:'Past +',jp:'かかりました'},{label:'Past −',jp:'かかりませんでした'},{label:'Dictionary',jp:'かかる'},{label:'て-form',jp:'かかって'},{label:'ない form',jp:'かかない'}],
  'のりかえます':[{label:'Pres. +',jp:'のりかえます'},{label:'Pres. −',jp:'のりかえません'},{label:'Past +',jp:'のりかえました'},{label:'Past −',jp:'のりかえませんでした'},{label:'Dictionary',jp:'のりかえる'},{label:'て-form',jp:'のりかえて'},{label:'ない form',jp:'のりかえない'}],
  'あらいます':[{label:'Pres. +',jp:'あらいます'},{label:'Pres. −',jp:'あらいません'},{label:'Past +',jp:'あらいました'},{label:'Past −',jp:'あらいませんでした'},{label:'Dictionary',jp:'あらう'},{label:'て-form',jp:'あらって'},{label:'ない form',jp:'あらわない'}],
  'うけます':[{label:'Pres. +',jp:'うけます'},{label:'Pres. −',jp:'うけません'},{label:'Past +',jp:'うけました'},{label:'Past −',jp:'うけませんでした'},{label:'Dictionary',jp:'うける'},{label:'て-form',jp:'うけて'},{label:'ない form',jp:'うけない'}],
  'つれて行きます':[{label:'Pres. +',jp:'つれて行きます'},{label:'Pres. −',jp:'つれて行きません'},{label:'Past +',jp:'つれて行きました'},{label:'Past −',jp:'つれて行きませんでした'},{label:'Dictionary',jp:'つれて行く'},{label:'て-form',jp:'つれて行って'},{label:'ない form',jp:'つれていかない'}],
  '行って来ます':[{label:'Pres. +',jp:'行って来ます'},{label:'Pres. −',jp:'行って来ません'},{label:'Past +',jp:'行って来ました'},{label:'Past −',jp:'行って来ませんでした'},{label:'Dictionary',jp:'行って来る'},{label:'て-form',jp:'行って来て'},{label:'ない form',jp:'いってこない'}],
  '出します':[{label:'Pres. +',jp:'出します'},{label:'Pres. −',jp:'出しません'},{label:'Past +',jp:'出しました'},{label:'Past −',jp:'出しませんでした'},{label:'Dictionary',jp:'出す'},{label:'て-form',jp:'出して'},{label:'ない form',jp:'ださない'}],
  '持って行きます':[{label:'Pres. +',jp:'持って行きます'},{label:'Pres. −',jp:'持って行きません'},{label:'Past +',jp:'持って行きました'},{label:'Past −',jp:'持って行きませんでした'},{label:'Dictionary',jp:'持って行く'},{label:'て-form',jp:'持って行って'},{label:'ない form',jp:'もっていかない'}],
  '買って行きます':[{label:'Pres. +',jp:'買って行きます'},{label:'Pres. −',jp:'買って行きません'},{label:'Past +',jp:'買って行きました'},{label:'Past −',jp:'買って行きませんでした'},{label:'Dictionary',jp:'買って行く'},{label:'て-form',jp:'買って行って'},{label:'ない form',jp:'かっていかない'}],
  '持って来ます':[{label:'Pres. +',jp:'持って来ます'},{label:'Pres. −',jp:'持って来ません'},{label:'Past +',jp:'持って来ました'},{label:'Past −',jp:'持って来ませんでした'},{label:'Dictionary',jp:'持って来る'},{label:'て-form',jp:'持って来て'},{label:'ない form',jp:'もってこない'}],
  '買って来ます':[{label:'Pres. +',jp:'買って来ます'},{label:'Pres. −',jp:'買って来ません'},{label:'Past +',jp:'買って来ました'},{label:'Past −',jp:'買って来ませんでした'},{label:'Dictionary',jp:'買って来る'},{label:'て-form',jp:'買って来て'},{label:'ない form',jp:'かってこない'}],
  '買って帰ります':[{label:'Pres. +',jp:'買って帰ります'},{label:'Pres. −',jp:'買って帰りません'},{label:'Past +',jp:'買って帰りました'},{label:'Past −',jp:'買って帰りませんでした'},{label:'Dictionary',jp:'買って帰る'},{label:'て-form',jp:'買って帰って'},{label:'ない form',jp:'かってかえらない'}],
  '持って帰ります':[{label:'Pres. +',jp:'持って帰ります'},{label:'Pres. −',jp:'持って帰りません'},{label:'Past +',jp:'持って帰りました'},{label:'Past −',jp:'持って帰りませんでした'},{label:'Dictionary',jp:'持って帰る'},{label:'て-form',jp:'持って帰って'},{label:'ない form',jp:'もってかえらない'}],
  'はきます':[{label:'Pres. +',jp:'はきます'},{label:'Pres. −',jp:'はきません'},{label:'Past +',jp:'はきました'},{label:'Past −',jp:'はきませんでした'},{label:'Dictionary',jp:'はく'},{label:'て-form',jp:'はいて'},{label:'ない form',jp:'はかない'}],
  'きめます':[{label:'Pres. +',jp:'きめます'},{label:'Pres. −',jp:'きめません'},{label:'Past +',jp:'きめました'},{label:'Past −',jp:'きめませんでした'},{label:'Dictionary',jp:'きめる'},{label:'て-form',jp:'きめて'},{label:'ない form',jp:'きめない'}],
  'たります':[{label:'Pres. +',jp:'たります'},{label:'Pres. −',jp:'たりません'},{label:'Past +',jp:'たりました'},{label:'Past −',jp:'たりませんでした'},{label:'Dictionary',jp:'たりる'},{label:'て-form',jp:'たりて'},{label:'ない form',jp:'たりない'}],
  'まちがえます':[{label:'Pres. +',jp:'まちがえます'},{label:'Pres. −',jp:'まちがえません'},{label:'Past +',jp:'まちがえました'},{label:'Past −',jp:'まちがえませんでした'},{label:'Dictionary',jp:'まちがえる'},{label:'て-form',jp:'まちがえて'},{label:'ない form',jp:'まちがえない'}],
  'おします':[{label:'Pres. +',jp:'おします'},{label:'Pres. −',jp:'おしません'},{label:'Past +',jp:'おしました'},{label:'Past −',jp:'おしませんでした'},{label:'Dictionary',jp:'おす'},{label:'て-form',jp:'おして'},{label:'ない form',jp:'おさない'}],
  'おくれます':[{label:'Pres. +',jp:'おくれます'},{label:'Pres. −',jp:'おくれません'},{label:'Past +',jp:'おくれました'},{label:'Past −',jp:'おくれませんでした'},{label:'Dictionary',jp:'おくれる'},{label:'て-form',jp:'おくれて'},{label:'ない form',jp:'おくれない'}],
  'すわります':[{label:'Pres. +',jp:'すわります'},{label:'Pres. −',jp:'すわりません'},{label:'Past +',jp:'すわりました'},{label:'Past −',jp:'すわりませんでした'},{label:'Dictionary',jp:'すわる'},{label:'て-form',jp:'すわって'},{label:'ない form',jp:'すわない'}],
  'さわります':[{label:'Pres. +',jp:'さわります'},{label:'Pres. −',jp:'さわりません'},{label:'Past +',jp:'さわりました'},{label:'Past −',jp:'さわりませんでした'},{label:'Dictionary',jp:'さわる'},{label:'て-form',jp:'さわって'},{label:'ない form',jp:'さわない'}],
  'かたづけます':[{label:'Pres. +',jp:'かたづけます'},{label:'Pres. −',jp:'かたづけません'},{label:'Past +',jp:'かたづけました'},{label:'Past −',jp:'かたづけませんでした'},{label:'Dictionary',jp:'かたづける'},{label:'て-form',jp:'かたづけて'},{label:'ない form',jp:'かたづけない'}],
  'きます':[{label:'Pres. +',jp:'きます'},{label:'Pres. −',jp:'きません'},{label:'Past +',jp:'きました'},{label:'Past −',jp:'きませんでした'},{label:'Dictionary',jp:'きる'},{label:'て-form',jp:'きて'},{label:'ない form',jp:'きない'}],
  'ふります':[{label:'Pres. +',jp:'ふります'},{label:'Pres. −',jp:'ふりません'},{label:'Past +',jp:'ふりました'},{label:'Past −',jp:'ふりませんでした'},{label:'Dictionary',jp:'ふる'},{label:'て-form',jp:'ふって'},{label:'ない form',jp:'ふない'}],
  'やめます':[{label:'Pres. +',jp:'やめます'},{label:'Pres. −',jp:'やめません'},{label:'Past +',jp:'やめました'},{label:'Past −',jp:'やめませんでした'},{label:'Dictionary',jp:'やめる'},{label:'て-form',jp:'やめて'},{label:'ない form',jp:'やめない'}],
  'まよいます':[{label:'Pres. +',jp:'まよいます'},{label:'Pres. −',jp:'まよいません'},{label:'Past +',jp:'まよいました'},{label:'Past −',jp:'まよいませんでした'},{label:'Dictionary',jp:'まよう'},{label:'て-form',jp:'まよって'},{label:'ない form',jp:'まよわない'}],
  'こたえます':[{label:'Pres. +',jp:'こたえます'},{label:'Pres. −',jp:'こたえません'},{label:'Past +',jp:'こたえました'},{label:'Past −',jp:'こたえませんでした'},{label:'Dictionary',jp:'こたえる'},{label:'て-form',jp:'こたえて'},{label:'ない form',jp:'こたえない'}],
  'つかれます':[{label:'Pres. +',jp:'つかれます'},{label:'Pres. −',jp:'つかれません'},{label:'Past +',jp:'つかれました'},{label:'Past −',jp:'つかれませんでした'},{label:'Dictionary',jp:'つかれる'},{label:'て-form',jp:'つかれて'},{label:'ない form',jp:'つかれない'}],
  'すてます':[{label:'Pres. +',jp:'すてます'},{label:'Pres. −',jp:'すてません'},{label:'Past +',jp:'すてました'},{label:'Past −',jp:'すてませんでした'},{label:'Dictionary',jp:'すてる'},{label:'て-form',jp:'すてて'},{label:'ない form',jp:'すてない'}],
  '出かけます':[{label:'Pres. +',jp:'出かけます'},{label:'Pres. −',jp:'出かけません'},{label:'Past +',jp:'出かけました'},{label:'Past −',jp:'出かけませんでした'},{label:'Dictionary',jp:'出かける'},{label:'て-form',jp:'出かけて'},{label:'ない form',jp:'でかけない'}],
  '分かります':[{label:'Pres. +',jp:'分かります'},{label:'Pres. −',jp:'分かりません'},{label:'Past +',jp:'分かりました'},{label:'Past −',jp:'分かりませんでした'},{label:'Dictionary',jp:'分かる'},{label:'て-form',jp:'分かって'},{label:'ない form',jp:'わからない'}],
  '上げます':[{label:'Pres. +',jp:'上げます'},{label:'Pres. −',jp:'上げません'},{label:'Past +',jp:'上げました'},{label:'Past −',jp:'上げませんでした'},{label:'Dictionary',jp:'上げる'},{label:'て-form',jp:'上げて'},{label:'ない form',jp:'あげない'}],
  '下げます':[{label:'Pres. +',jp:'下げます'},{label:'Pres. −',jp:'下げません'},{label:'Past +',jp:'下げました'},{label:'Past −',jp:'下げませんでした'},{label:'Dictionary',jp:'下げる'},{label:'て-form',jp:'下げて'},{label:'ない form',jp:'さげない'}],
  '下さい':[{label:'Pres. +',jp:'下さいます'},{label:'Pres. −',jp:'下さいません'},{label:'Past +',jp:'下さいました'},{label:'Past −',jp:'下さいませんでした'},{label:'Dictionary',jp:'下さる'},{label:'て-form',jp:'下さって'},{label:'ない form',jp:'くださない'}],
  '協力します':[{label:'Pres. +',jp:'協力します'},{label:'Pres. −',jp:'協力しません'},{label:'Past +',jp:'協力しました'},{label:'Past −',jp:'協力しませんでした'},{label:'Dictionary',jp:'協力する'},{label:'て-form',jp:'協力して'},{label:'ない form',jp:'きょうりょくしない'}],
  '生まれます':[{label:'Pres. +',jp:'生まれます'},{label:'Pres. −',jp:'生まれません'},{label:'Past +',jp:'生まれました'},{label:'Past −',jp:'生まれませんでした'},{label:'Dictionary',jp:'生まれる'},{label:'て-form',jp:'生まれて'},{label:'ない form',jp:'うまれない'}],
  '生きます':[{label:'Pres. +',jp:'生きます'},{label:'Pres. −',jp:'生きません'},{label:'Past +',jp:'生きました'},{label:'Past −',jp:'生きませんでした'},{label:'Dictionary',jp:'生きる'},{label:'て-form',jp:'生きて'},{label:'ない form',jp:'いきない'}],
  'つくって行きます':[{label:'Pres. +',jp:'つくって行きます'},{label:'Pres. −',jp:'つくって行きません'},{label:'Past +',jp:'つくって行きました'},{label:'Past −',jp:'つくって行きませんでした'},{label:'Dictionary',jp:'つくって行く'},{label:'て-form',jp:'つくって行って'},{label:'ない form',jp:'つくっていかない'}],
  '話し合います':[{label:'Pres. +',jp:'話し合います'},{label:'Pres. −',jp:'話し合いません'},{label:'Past +',jp:'話し合いました'},{label:'Past −',jp:'話し合いませんでした'},{label:'Dictionary',jp:'話し合う'},{label:'て-form',jp:'話し合って'},{label:'ない form',jp:'はなしあわない'}],
  '気を付けます':[{label:'Pres. +',jp:'気を付けます'},{label:'Pres. −',jp:'気を付けません'},{label:'Past +',jp:'気を付けました'},{label:'Past −',jp:'気を付けませんでした'},{label:'Dictionary',jp:'気を付ける'},{label:'て-form',jp:'気を付けて'},{label:'ない form',jp:'きをつけない'}],
  '入学します':[{label:'Pres. +',jp:'入学します'},{label:'Pres. −',jp:'入学しません'},{label:'Past +',jp:'入学しました'},{label:'Past −',jp:'入学しませんでした'},{label:'Dictionary',jp:'入学する'},{label:'て-form',jp:'入学して'},{label:'ない form',jp:'にゅうがくしない'}],
  '出席します':[{label:'Pres. +',jp:'出席します'},{label:'Pres. −',jp:'出席しません'},{label:'Past +',jp:'出席しました'},{label:'Past −',jp:'出席しませんでした'},{label:'Dictionary',jp:'出席する'},{label:'て-form',jp:'出席して'},{label:'ない form',jp:'しゅっせきしない'}],
  '入れます':[{label:'Pres. +',jp:'入れます'},{label:'Pres. −',jp:'入れません'},{label:'Past +',jp:'入れました'},{label:'Past −',jp:'入れませんでした'},{label:'Dictionary',jp:'入れる'},{label:'て-form',jp:'入れて'},{label:'ない form',jp:'いれない'}],
  '入院します':[{label:'Pres. +',jp:'入院します'},{label:'Pres. −',jp:'入院しません'},{label:'Past +',jp:'入院しました'},{label:'Past −',jp:'入院しませんでした'},{label:'Dictionary',jp:'入院する'},{label:'て-form',jp:'入院して'},{label:'ない form',jp:'にゅういんしない'}],
  '退院します':[{label:'Pres. +',jp:'退院します'},{label:'Pres. −',jp:'退院しません'},{label:'Past +',jp:'退院しました'},{label:'Past −',jp:'退院しませんでした'},{label:'Dictionary',jp:'退院する'},{label:'て-form',jp:'退院して'},{label:'ない form',jp:'たいいんしない'}],
  '勉強します':[{label:'Pres. +',jp:'勉強します'},{label:'Pres. −',jp:'勉強しません'},{label:'Past +',jp:'勉強しました'},{label:'Past −',jp:'勉強しませんでした'},{label:'Dictionary',jp:'勉強する'},{label:'て-form',jp:'勉強して'},{label:'ない form',jp:'べんきょうしない'}],
  '売ります':[{label:'Pres. +',jp:'売ります'},{label:'Pres. −',jp:'売りません'},{label:'Past +',jp:'売りました'},{label:'Past −',jp:'売りませんでした'},{label:'Dictionary',jp:'売る'},{label:'て-form',jp:'売って'},{label:'ない form',jp:'うらない'}],
  '休みます':[{label:'Pres. +',jp:'休みます'},{label:'Pres. −',jp:'休みません'},{label:'Past +',jp:'休みました'},{label:'Past −',jp:'休みませんでした'},{label:'Dictionary',jp:'休む'},{label:'て-form',jp:'休んで'},{label:'ない form',jp:'やすまない'}],
  '帰国します':[{label:'Pres. +',jp:'帰国します'},{label:'Pres. −',jp:'帰国しません'},{label:'Past +',jp:'帰国しました'},{label:'Past −',jp:'帰国しませんでした'},{label:'Dictionary',jp:'帰国する'},{label:'て-form',jp:'帰国して'},{label:'ない form',jp:'きこくしない'}],
  '起こします':[{label:'Pres. +',jp:'起こします'},{label:'Pres. −',jp:'起こしません'},{label:'Past +',jp:'起こしました'},{label:'Past −',jp:'起こしませんでした'},{label:'Dictionary',jp:'起こす'},{label:'て-form',jp:'起こして'},{label:'ない form',jp:'おこさない'}],
  '売り切れます':[{label:'Pres. +',jp:'売り切れます'},{label:'Pres. −',jp:'売り切れません'},{label:'Past +',jp:'売り切れました'},{label:'Past −',jp:'売り切れませんでした'},{label:'Dictionary',jp:'売り切れる'},{label:'て-form',jp:'売り切れて'},{label:'ない form',jp:'うりきれない'}],
  '大きい':[{label:'Pres. +',jp:'おおきいです'},{label:'Pres. −',jp:'おおきくありません'},{label:'Past +',jp:'おおきかったです'},{label:'Past −',jp:'おおきくありませんでした'}],
  '小さい':[{label:'Pres. +',jp:'ちいさいです'},{label:'Pres. −',jp:'ちいさくありません'},{label:'Past +',jp:'ちいさかったです'},{label:'Past −',jp:'ちいさくありませんでした'}],
  '高い':[{label:'Pres. +',jp:'たかいです'},{label:'Pres. −',jp:'たかくありません'},{label:'Past +',jp:'たかかったです'},{label:'Past −',jp:'たかくありませんでした'}],
  '安い':[{label:'Pres. +',jp:'やすいです'},{label:'Pres. −',jp:'やすくありません'},{label:'Past +',jp:'やすかったです'},{label:'Past −',jp:'やすくありませんでした'}],
  '低い':[{label:'Pres. +',jp:'ひくいです'},{label:'Pres. −',jp:'ひくくありません'},{label:'Past +',jp:'ひくかったです'},{label:'Past −',jp:'ひくくありませんでした'}],
  '長い':[{label:'Pres. +',jp:'ながいです'},{label:'Pres. −',jp:'ながくありません'},{label:'Past +',jp:'ながかったです'},{label:'Past −',jp:'ながくありませんでした'}],
  '短い':[{label:'Pres. +',jp:'みじかいです'},{label:'Pres. −',jp:'みじかくありません'},{label:'Past +',jp:'みじかかったです'},{label:'Past −',jp:'みじかくありませんでした'}],
  '新しい':[{label:'Pres. +',jp:'あたらしいです'},{label:'Pres. −',jp:'あたらしくありません'},{label:'Past +',jp:'あたらしかったです'},{label:'Past −',jp:'あたらしくありませんでした'}],
  '古い':[{label:'Pres. +',jp:'ふるいです'},{label:'Pres. −',jp:'ふるくありません'},{label:'Past +',jp:'ふるかったです'},{label:'Past −',jp:'ふるくありませんでした'}],
  'おいしい':[{label:'Pres. +',jp:'おいしいです'},{label:'Pres. −',jp:'おいしくありません'},{label:'Past +',jp:'おいしかったです'},{label:'Past −',jp:'おいしくありませんでした'}],
  'まずい':[{label:'Pres. +',jp:'まずいです'},{label:'Pres. −',jp:'まずくありません'},{label:'Past +',jp:'まずかったです'},{label:'Past −',jp:'まずくありませんでした'}],
  '難しい':[{label:'Pres. +',jp:'むずかしいです'},{label:'Pres. −',jp:'むずかしくありません'},{label:'Past +',jp:'むずかしかったです'},{label:'Past −',jp:'むずかしくありませんでした'}],
  '易しい':[{label:'Pres. +',jp:'やさしいです'},{label:'Pres. −',jp:'やさしくありません'},{label:'Past +',jp:'やさしかったです'},{label:'Past −',jp:'やさしくありませんでした'}],
  '暑い':[{label:'Pres. +',jp:'あついです'},{label:'Pres. −',jp:'あつくありません'},{label:'Past +',jp:'あつかったです'},{label:'Past −',jp:'あつくありませんでした'}],
  '寒い':[{label:'Pres. +',jp:'さむいです'},{label:'Pres. −',jp:'さむくありません'},{label:'Past +',jp:'さむかったです'},{label:'Past −',jp:'さむくありませんでした'}],
  'いい':[{label:'Pres. +',jp:'いいです'},{label:'Pres. −',jp:'いくありません'},{label:'Past +',jp:'いかったです'},{label:'Past −',jp:'いくありませんでした'}],
  '悪い':[{label:'Pres. +',jp:'わるいです'},{label:'Pres. −',jp:'わるくありません'},{label:'Past +',jp:'わるかったです'},{label:'Past −',jp:'わるくありませんでした'}],
  '面白い':[{label:'Pres. +',jp:'おもしろいです'},{label:'Pres. −',jp:'おもしろくありません'},{label:'Past +',jp:'おもしろかったです'},{label:'Past −',jp:'おもしろくありませんでした'}],
  'つまらない':[{label:'Pres. +',jp:'つまらないです'},{label:'Pres. −',jp:'つまらなくありません'},{label:'Past +',jp:'つまらなかったです'},{label:'Past −',jp:'つまらなくありませんでした'}],
  '重い':[{label:'Pres. +',jp:'おもいです'},{label:'Pres. −',jp:'おもくありません'},{label:'Past +',jp:'おもかったです'},{label:'Past −',jp:'おもくありませんでした'}],
  '軽い':[{label:'Pres. +',jp:'かるいです'},{label:'Pres. −',jp:'かるくありません'},{label:'Past +',jp:'かるかったです'},{label:'Past −',jp:'かるくありませんでした'}],
  '白い':[{label:'Pres. +',jp:'しろいです'},{label:'Pres. −',jp:'しろくありません'},{label:'Past +',jp:'しろかったです'},{label:'Past −',jp:'しろくありませんでした'}],
  '黒い':[{label:'Pres. +',jp:'くろいです'},{label:'Pres. −',jp:'くろくありません'},{label:'Past +',jp:'くろかったです'},{label:'Past −',jp:'くろくありませんでした'}],
  '親切':[{label:'Pres. +',jp:'親切です'},{label:'Pres. −',jp:'親切じゃありません'},{label:'Past +',jp:'親切でした'},{label:'Past −',jp:'親切じゃありませんでした'}],
  '便利':[{label:'Pres. +',jp:'便利です'},{label:'Pres. −',jp:'便利じゃありません'},{label:'Past +',jp:'便利でした'},{label:'Past −',jp:'便利じゃありませんでした'}],
  'きれい':[{label:'Pres. +',jp:'きれいです'},{label:'Pres. −',jp:'きれいじゃありません'},{label:'Past +',jp:'きれいでした'},{label:'Past −',jp:'きれいじゃありませんでした'}],
  '静か':[{label:'Pres. +',jp:'静かです'},{label:'Pres. −',jp:'静かじゃありません'},{label:'Past +',jp:'静かでした'},{label:'Past −',jp:'静かじゃありませんでした'}],
  '元気':[{label:'Pres. +',jp:'元気です'},{label:'Pres. −',jp:'元気じゃありません'},{label:'Past +',jp:'元気でした'},{label:'Past −',jp:'元気じゃありませんでした'}],
  '大切':[{label:'Pres. +',jp:'大切です'},{label:'Pres. −',jp:'大切じゃありません'},{label:'Past +',jp:'大切でした'},{label:'Past −',jp:'大切じゃありませんでした'}],
  'うるさい':[{label:'Pres. +',jp:'うるさいです'},{label:'Pres. −',jp:'うるさくありません'},{label:'Past +',jp:'うるさかったです'},{label:'Past −',jp:'うるさくありませんでした'}],
  '近い':[{label:'Pres. +',jp:'ちかいです'},{label:'Pres. −',jp:'ちかくありません'},{label:'Past +',jp:'ちかかったです'},{label:'Past −',jp:'ちかくありませんでした'}],
  '大変':[{label:'Pres. +',jp:'大変です'},{label:'Pres. −',jp:'大変じゃありません'},{label:'Past +',jp:'大変でした'},{label:'Past −',jp:'大変じゃありませんでした'}],
  '忙しい':[{label:'Pres. +',jp:'いそがしいです'},{label:'Pres. −',jp:'いそがしくありません'},{label:'Past +',jp:'いそがしかったです'},{label:'Past −',jp:'いそがしくありませんでした'}],
  '暇':[{label:'Pres. +',jp:'暇です'},{label:'Pres. −',jp:'暇じゃありません'},{label:'Past +',jp:'暇でした'},{label:'Past −',jp:'暇じゃありませんでした'}],
  '楽しい':[{label:'Pres. +',jp:'たのしいです'},{label:'Pres. −',jp:'たのしくありません'},{label:'Past +',jp:'たのしかったです'},{label:'Past −',jp:'たのしくありませんでした'}],
  '上手':[{label:'Pres. +',jp:'上手です'},{label:'Pres. −',jp:'上手じゃありません'},{label:'Past +',jp:'上手でした'},{label:'Past −',jp:'上手じゃありませんでした'}],
  'にぎやか':[{label:'Pres. +',jp:'にぎやかです'},{label:'Pres. −',jp:'にぎやかじゃありません'},{label:'Past +',jp:'にぎやかでした'},{label:'Past −',jp:'にぎやかじゃありませんでした'}],
  '暖かい/温かい':[{label:'Pres. +',jp:'あたたかいです'},{label:'Pres. −',jp:'あたたかくありません'},{label:'Past +',jp:'あたたかかったです'},{label:'Past −',jp:'あたたかくありませんでした'}],
  '有名':[{label:'Pres. +',jp:'有名です'},{label:'Pres. −',jp:'有名じゃありません'},{label:'Past +',jp:'有名でした'},{label:'Past −',jp:'有名じゃありませんでした'}],
  '多い':[{label:'Pres. +',jp:'おおいです'},{label:'Pres. −',jp:'おおくありません'},{label:'Past +',jp:'おおかったです'},{label:'Past −',jp:'おおくありませんでした'}],
  '広い':[{label:'Pres. +',jp:'ひろいです'},{label:'Pres. −',jp:'ひろくありません'},{label:'Past +',jp:'ひろかったです'},{label:'Past −',jp:'ひろくありませんでした'}],
  '狭い':[{label:'Pres. +',jp:'せまいです'},{label:'Pres. −',jp:'せまくありません'},{label:'Past +',jp:'せまかったです'},{label:'Past −',jp:'せまくありませんでした'}],
  '赤い':[{label:'Pres. +',jp:'あかいです'},{label:'Pres. −',jp:'あかくありません'},{label:'Past +',jp:'あかかったです'},{label:'Past −',jp:'あかくありませんでした'}],
  '茶色い':[{label:'Pres. +',jp:'ちゃいろいです'},{label:'Pres. −',jp:'ちゃいろくありません'},{label:'Past +',jp:'ちゃいろかったです'},{label:'Past −',jp:'ちゃいろくありませんでした'}],
  '四角い':[{label:'Pres. +',jp:'しかくいです'},{label:'Pres. −',jp:'しかくくありません'},{label:'Past +',jp:'しかくかったです'},{label:'Past −',jp:'しかくくありませんでした'}],
  '汚い':[{label:'Pres. +',jp:'きたないです'},{label:'Pres. −',jp:'きたなくありません'},{label:'Past +',jp:'きたなかったです'},{label:'Past −',jp:'きたなくありませんでした'}],
  '黄色い':[{label:'Pres. +',jp:'きいろいです'},{label:'Pres. −',jp:'きいろくありません'},{label:'Past +',jp:'きいろかったです'},{label:'Past −',jp:'きいろくありませんでした'}],
  '丸い':[{label:'Pres. +',jp:'まるいです'},{label:'Pres. −',jp:'まるくありません'},{label:'Past +',jp:'まるかったです'},{label:'Past −',jp:'まるくありませんでした'}],
  'ハンサム':[{label:'Pres. +',jp:'ハンサムです'},{label:'Pres. −',jp:'ハンサムじゃありません'},{label:'Past +',jp:'ハンサムでした'},{label:'Past −',jp:'ハンサムじゃありませんでした'}],
  '新鮮':[{label:'Pres. +',jp:'新鮮です'},{label:'Pres. −',jp:'新鮮じゃありません'},{label:'Past +',jp:'新鮮でした'},{label:'Past −',jp:'新鮮じゃありませんでした'}],
  'ほしい':[{label:'Pres. +',jp:'ほしいです'},{label:'Pres. −',jp:'ほしくありません'},{label:'Past +',jp:'ほしかったです'},{label:'Past −',jp:'ほしくありませんでした'}],
  '好き':[{label:'Pres. +',jp:'好きです'},{label:'Pres. −',jp:'好きじゃありません'},{label:'Past +',jp:'好きでした'},{label:'Past −',jp:'好きじゃありませんでした'}],
  '嫌い':[{label:'Pres. +',jp:'嫌いです'},{label:'Pres. −',jp:'嫌いじゃありません'},{label:'Past +',jp:'嫌いでした'},{label:'Past −',jp:'嫌いじゃありませんでした'}],
  '強い':[{label:'Pres. +',jp:'つよいです'},{label:'Pres. −',jp:'つよくありません'},{label:'Past +',jp:'つよかったです'},{label:'Past −',jp:'つよくありませんでした'}],
  '気持ちいい':[{label:'Pres. +',jp:'きもちいいです'},{label:'Pres. −',jp:'きもちいくありません'},{label:'Past +',jp:'きもちいかったです'},{label:'Past −',jp:'きもちいくありませんでした'}],
  '苦い':[{label:'Pres. +',jp:'にがいです'},{label:'Pres. −',jp:'にがくありません'},{label:'Past +',jp:'にがかったです'},{label:'Past −',jp:'にがくありませんでした'}],
  '寂しい':[{label:'Pres. +',jp:'さびしいです'},{label:'Pres. −',jp:'さびしくありません'},{label:'Past +',jp:'さびしかったです'},{label:'Past −',jp:'さびしくありませんでした'}],
  '悲しい':[{label:'Pres. +',jp:'かなしいです'},{label:'Pres. −',jp:'かなしくありません'},{label:'Past +',jp:'かなしかったです'},{label:'Past −',jp:'かなしくありませんでした'}],
  '苦しい':[{label:'Pres. +',jp:'くるしいです'},{label:'Pres. −',jp:'くるしくありません'},{label:'Past +',jp:'くるしかったです'},{label:'Past −',jp:'くるしくありませんでした'}],
  '嬉しい':[{label:'Pres. +',jp:'うれしいです'},{label:'Pres. −',jp:'うれしくありません'},{label:'Past +',jp:'うれしかったです'},{label:'Past −',jp:'うれしくありませんでした'}],
  '痛い':[{label:'Pres. +',jp:'いたいです'},{label:'Pres. −',jp:'いたくありません'},{label:'Past +',jp:'いたかったです'},{label:'Past −',jp:'いたくありませんでした'}],
  '色々':[{label:'Pres. +',jp:'色々です'},{label:'Pres. −',jp:'色々じゃありません'},{label:'Past +',jp:'色々でした'},{label:'Past −',jp:'色々じゃありませんでした'}],
  '暗い':[{label:'Pres. +',jp:'くらいです'},{label:'Pres. −',jp:'くらくありません'},{label:'Past +',jp:'くらかったです'},{label:'Past −',jp:'くらくありませんでした'}],
  '大丈夫':[{label:'Pres. +',jp:'大丈夫です'},{label:'Pres. −',jp:'大丈夫じゃありません'},{label:'Past +',jp:'大丈夫でした'},{label:'Past −',jp:'大丈夫じゃありませんでした'}],
  'ゆっくり':[{label:'Pres. +',jp:'ゆっくりです'},{label:'Pres. −',jp:'ゆっくりじゃありません'},{label:'Past +',jp:'ゆっくりでした'},{label:'Past −',jp:'ゆっくりじゃありませんでした'}],
  '速い':[{label:'Pres. +',jp:'はやいです'},{label:'Pres. −',jp:'はやくありません'},{label:'Past +',jp:'はやかったです'},{label:'Past −',jp:'はやくありませんでした'}],
  '若い':[{label:'Pres. +',jp:'わかいです'},{label:'Pres. −',jp:'わかくありません'},{label:'Past +',jp:'わかかったです'},{label:'Past −',jp:'わかくありませんでした'}],
  'かっこいい':[{label:'Pres. +',jp:'かっこいいです'},{label:'Pres. −',jp:'かっこいくありません'},{label:'Past +',jp:'かっこいかったです'},{label:'Past −',jp:'かっこいくありませんでした'}],
  '甘い':[{label:'Pres. +',jp:'あまいです'},{label:'Pres. −',jp:'あまくありません'},{label:'Past +',jp:'あまかったです'},{label:'Past −',jp:'あまくありませんでした'}],
  '派手':[{label:'Pres. +',jp:'派手です'},{label:'Pres. −',jp:'派手じゃありません'},{label:'Past +',jp:'派手でした'},{label:'Past −',jp:'派手じゃありませんでした'}],
  '地味':[{label:'Pres. +',jp:'地味です'},{label:'Pres. −',jp:'地味じゃありません'},{label:'Past +',jp:'地味でした'},{label:'Past −',jp:'地味じゃありませんでした'}],
  '分かりやすい':[{label:'Pres. +',jp:'わかりやすいです'},{label:'Pres. −',jp:'わかりやすくありません'},{label:'Past +',jp:'わかりやすかったです'},{label:'Past −',jp:'わかりやすくありませんでした'}],
  '危ない':[{label:'Pres. +',jp:'あぶないです'},{label:'Pres. −',jp:'あぶなくありません'},{label:'Past +',jp:'あぶなかったです'},{label:'Past −',jp:'あぶなくありませんでした'}],
  'はずかしい':[{label:'Pres. +',jp:'はずかしいです'},{label:'Pres. −',jp:'はずかしくありません'},{label:'Past +',jp:'はずかしかったです'},{label:'Past −',jp:'はずかしくありませんでした'}],
  '変':[{label:'Pres. +',jp:'変です'},{label:'Pres. −',jp:'変じゃありません'},{label:'Past +',jp:'変でした'},{label:'Past −',jp:'変じゃありませんでした'}],
  'すてき':[{label:'Pres. +',jp:'すてきです'},{label:'Pres. −',jp:'すてきじゃありません'},{label:'Past +',jp:'すてきでした'},{label:'Past −',jp:'すてきじゃありませんでした'}],
  '美しい':[{label:'Pres. +',jp:'うつくしいです'},{label:'Pres. −',jp:'うつくしくありません'},{label:'Past +',jp:'うつくしかったです'},{label:'Past −',jp:'うつくしくありませんでした'}],
  'めずらしい':[{label:'Pres. +',jp:'めずらしいです'},{label:'Pres. −',jp:'めずらしくありません'},{label:'Past +',jp:'めずらしかったです'},{label:'Past −',jp:'めずらしくありませんでした'}],
  '遠い':[{label:'Pres. +',jp:'とおいです'},{label:'Pres. −',jp:'とおくありません'},{label:'Past +',jp:'とおかったです'},{label:'Past −',jp:'とおくありませんでした'}],
};

// kana aliases for conjLookup
if(!conjLookup['つくっていきます']&&conjLookup['つくって行きます']) conjLookup['つくっていきます']=conjLookup['つくって行きます'];
if(!conjLookup['たべます']&&conjLookup['食べます']) conjLookup['たべます']=conjLookup['食べます'];
if(!conjLookup['のみます']&&conjLookup['飲みます']) conjLookup['のみます']=conjLookup['飲みます'];
if(!conjLookup['よみます']&&conjLookup['読みます']) conjLookup['よみます']=conjLookup['読みます'];
if(!conjLookup['みます']&&conjLookup['見ます']) conjLookup['みます']=conjLookup['見ます'];
if(!conjLookup['かきます']&&conjLookup['書きます']) conjLookup['かきます']=conjLookup['書きます'];
if(!conjLookup['ききます']&&conjLookup['聞きます']) conjLookup['ききます']=conjLookup['聞きます'];
if(!conjLookup['はなします']&&conjLookup['話します']) conjLookup['はなします']=conjLookup['話します'];
if(!conjLookup['かいます']&&conjLookup['買います']) conjLookup['かいます']=conjLookup['買います'];
if(!conjLookup['べんきょうをします']&&conjLookup['勉強をします']) conjLookup['べんきょうをします']=conjLookup['勉強をします'];
if(!conjLookup['いきます']&&conjLookup['行きます']) conjLookup['いきます']=conjLookup['行きます'];
if(!conjLookup['きます']&&conjLookup['来ます']) conjLookup['きます']=conjLookup['来ます'];
if(!conjLookup['かえります']&&conjLookup['帰ります']) conjLookup['かえります']=conjLookup['帰ります'];
if(!conjLookup['おきます']&&conjLookup['起きます']) conjLookup['おきます']=conjLookup['起きます'];
if(!conjLookup['はいります']&&conjLookup['入ります']) conjLookup['はいります']=conjLookup['入ります'];
if(!conjLookup['あいます']&&conjLookup['会います']) conjLookup['あいます']=conjLookup['会います'];
if(!conjLookup['まちます']&&conjLookup['待ちます']) conjLookup['まちます']=conjLookup['待ちます'];
if(!conjLookup['もちます']&&conjLookup['持ちます']) conjLookup['もちます']=conjLookup['持ちます'];
if(!conjLookup['たちます']&&conjLookup['立ちます']) conjLookup['たちます']=conjLookup['立ちます'];
if(!conjLookup['いいます']&&conjLookup['言います']) conjLookup['いいます']=conjLookup['言います'];
if(!conjLookup['おしえます']&&conjLookup['教えます']) conjLookup['おしえます']=conjLookup['教えます'];
if(!conjLookup['みせます']&&conjLookup['見せます']) conjLookup['みせます']=conjLookup['見せます'];
if(!conjLookup['はしります']&&conjLookup['走ります']) conjLookup['はしります']=conjLookup['走ります'];
if(!conjLookup['でます']&&conjLookup['出ます']) conjLookup['でます']=conjLookup['出ます'];
if(!conjLookup['だします']&&conjLookup['出します']) conjLookup['だします']=conjLookup['出します'];
if(!conjLookup['もっていきます']&&conjLookup['持って行きます']) conjLookup['もっていきます']=conjLookup['持って行きます'];
if(!conjLookup['かっていきます']&&conjLookup['買って行きます']) conjLookup['かっていきます']=conjLookup['買って行きます'];
if(!conjLookup['つれていきます']&&conjLookup['つれて行きます']) conjLookup['つれていきます']=conjLookup['つれて行きます'];
if(!conjLookup['もってきます']&&conjLookup['持って来ます']) conjLookup['もってきます']=conjLookup['持って来ます'];
if(!conjLookup['かってきます']&&conjLookup['買って来ます']) conjLookup['かってきます']=conjLookup['買って来ます'];
if(!conjLookup['かってかえります']&&conjLookup['買って帰ります']) conjLookup['かってかえります']=conjLookup['買って帰ります'];
if(!conjLookup['いってきます']&&conjLookup['行って来ます']) conjLookup['いってきます']=conjLookup['行って来ます'];
if(!conjLookup['もってかえります']&&conjLookup['持って帰ります']) conjLookup['もってかえります']=conjLookup['持って帰ります'];
if(!conjLookup['はきます']&&conjLookup['履きます']) conjLookup['はきます']=conjLookup['履きます'];
if(!conjLookup['でかけます']&&conjLookup['出かけます']) conjLookup['でかけます']=conjLookup['出かけます'];
if(!conjLookup['やめます']&&conjLookup['辞めます']) conjLookup['やめます']=conjLookup['辞めます'];
const countersData = {
  'numbers':{label:'Numbers',icon:'🔢',desc:'Cardinal numbers used for counting and math.',items:[
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
    {jp:'万',reading:'いちまん',def:'10,000'},
  ]},
  'native':{label:'Native counting',icon:'🗾',desc:'Traditional Japanese counting (ひとつ、ふたつ…) for general items up to 10.',items:[
    {jp:'一つ',reading:'ひとつ',def:'1'},{jp:'二つ',reading:'ふたつ',def:'2'},{jp:'三つ',reading:'みっつ',def:'3'},
    {jp:'四つ',reading:'よっつ',def:'4'},{jp:'五つ',reading:'いつつ',def:'5'},{jp:'六つ',reading:'むっつ',def:'6'},
    {jp:'七つ',reading:'ななつ',def:'7'},{jp:'八つ',reading:'やっつ',def:'8'},{jp:'九つ',reading:'ここのつ',def:'9'},
    {jp:'十',reading:'とお',def:'10'},
  ]},
  'months':{label:'Months',icon:'📆',desc:'Used to say which month of the year (January = 一月).',items:[
    {jp:'一月',reading:'いちがつ',def:'January'},{jp:'二月',reading:'にがつ',def:'February'},
    {jp:'三月',reading:'さんがつ',def:'March'},{jp:'四月',reading:'しがつ',def:'April'},
    {jp:'五月',reading:'ごがつ',def:'May'},{jp:'六月',reading:'ろくがつ',def:'June'},
    {jp:'七月',reading:'しちがつ',def:'July'},{jp:'八月',reading:'はちがつ',def:'August'},
    {jp:'九月',reading:'くがつ',def:'September'},{jp:'十月',reading:'じゅうがつ',def:'October'},
    {jp:'十一月',reading:'じゅういちがつ',def:'November'},{jp:'十二月',reading:'じゅうにがつ',def:'December'},
  ]},
  'weekdays':{label:'Days of Week',icon:'🗓',desc:'Days of the week. Each ends in 曜日 (ようび).',items:[
    {jp:'月曜日',reading:'げつようび',def:'Monday'},{jp:'火曜日',reading:'かようび',def:'Tuesday'},
    {jp:'水曜日',reading:'すいようび',def:'Wednesday'},{jp:'木曜日',reading:'もくようび',def:'Thursday'},
    {jp:'金曜日',reading:'きんようび',def:'Friday'},{jp:'土曜日',reading:'どようび',def:'Saturday'},
    {jp:'日曜日',reading:'にちようび',def:'Sunday'},
  ]},
  'days':{label:'Days of Month',icon:'📅',desc:'Dates in the month. 1st–10th are irregular; rest follow the pattern.',items:[
    {jp:'一日',reading:'ついたち',def:'1st'},{jp:'二日',reading:'ふつか',def:'2nd'},
    {jp:'三日',reading:'みっか',def:'3rd'},{jp:'四日',reading:'よっか',def:'4th'},
    {jp:'五日',reading:'いつか',def:'5th'},{jp:'六日',reading:'むいか',def:'6th'},
    {jp:'七日',reading:'なのか',def:'7th'},{jp:'八日',reading:'ようか',def:'8th'},
    {jp:'九日',reading:'ここのか',def:'9th'},{jp:'十日',reading:'とおか',def:'10th'},
    {jp:'十四日',reading:'じゅうよっか',def:'14th'},{jp:'二十日',reading:'はつか',def:'20th'},
    {jp:'二十四日',reading:'にじゅうよっか',def:'24th'},
  ]},
  'minutes':{label:'Minutes',icon:'⏱',desc:'Minutes past the hour. Irregular: 1, 3, 4, 6, 8, 10 min.',items:[
    {jp:'一分',reading:'いっぷん',def:'1 min'},{jp:'二分',reading:'にふん',def:'2 min'},
    {jp:'三分',reading:'さんぷん',def:'3 min'},{jp:'四分',reading:'よんぷん',def:'4 min'},
    {jp:'五分',reading:'ごふん',def:'5 min'},{jp:'六分',reading:'ろっぷん',def:'6 min'},
    {jp:'七分',reading:'ななふん',def:'7 min'},{jp:'八分',reading:'はっぷん',def:'8 min'},
    {jp:'九分',reading:'きゅうふん',def:'9 min'},{jp:'十分',reading:'じゅっぷん',def:'10 min'},
    {jp:'三十分',reading:'さんじゅっぷん',def:'30 min'},{jp:'何分',reading:'なんぷん',def:'how many min?'},
  ]},
  'hours':{label:'Hours (o\'clock)',icon:'🕐',desc:'Time on the clock. 4 o\' clock = よじ (irregular).',items:[
    {jp:'一時',reading:'いちじ',def:'1:00'},{jp:'二時',reading:'にじ',def:'2:00'},
    {jp:'三時',reading:'さんじ',def:'3:00'},{jp:'四時',reading:'よじ',def:'4:00 ⚠'},
    {jp:'五時',reading:'ごじ',def:'5:00'},{jp:'六時',reading:'ろくじ',def:'6:00'},
    {jp:'七時',reading:'しちじ',def:'7:00'},{jp:'八時',reading:'はちじ',def:'8:00'},
    {jp:'九時',reading:'くじ',def:'9:00 ⚠'},{jp:'十時',reading:'じゅうじ',def:'10:00'},
    {jp:'十一時',reading:'じゅういちじ',def:'11:00'},{jp:'十二時',reading:'じゅうにじ',def:'12:00'},
    {jp:'何時',reading:'なんじ',def:'what time?'},
  ]},
  'duration':{label:'Hours (duration)',icon:'⏳',desc:'Length of time in hours. Add 時間 after the number.',items:[
    {jp:'一時間',reading:'いちじかん',def:'1 hour'},{jp:'二時間',reading:'にじかん',def:'2 hours'},
    {jp:'三時間',reading:'さんじかん',def:'3 hours'},{jp:'四時間',reading:'よじかん',def:'4 hours'},
    {jp:'五時間',reading:'ごじかん',def:'5 hours'},{jp:'六時間',reading:'ろくじかん',def:'6 hours'},
    {jp:'七時間',reading:'しちじかん',def:'7 hours'},{jp:'八時間',reading:'はちじかん',def:'8 hours'},
    {jp:'九時間',reading:'くじかん',def:'9 hours'},{jp:'十時間',reading:'じゅうじかん',def:'10 hours'},
    {jp:'何時間',reading:'なんじかん',def:'how many hours?'},
  ]},
  'weeks':{label:'Weeks',icon:'📆',desc:'Duration in weeks (〜週間). Note: いっ- for 1 week.',items:[
    {jp:'一週間',reading:'いっしゅうかん',def:'1 week'},{jp:'二週間',reading:'にしゅうかん',def:'2 weeks'},
    {jp:'三週間',reading:'さんしゅうかん',def:'3 weeks'},{jp:'四週間',reading:'よんしゅうかん',def:'4 weeks'},
    {jp:'五週間',reading:'ごしゅうかん',def:'5 weeks'},{jp:'六週間',reading:'ろくしゅうかん',def:'6 weeks'},
    {jp:'七週間',reading:'ななしゅうかん',def:'7 weeks'},{jp:'八週間',reading:'はっしゅうかん',def:'8 weeks'},
    {jp:'九週間',reading:'きゅうしゅうかん',def:'9 weeks'},{jp:'十週間',reading:'じゅっしゅうかん',def:'10 weeks'},
    {jp:'何週間',reading:'なんしゅうかん',def:'how many weeks?'},
  ]},
  'years':{label:'Years',icon:'📅',desc:'Duration in years (〜年). Mostly regular.',items:[
    {jp:'一年',reading:'いちねん',def:'1 year'},{jp:'二年',reading:'にねん',def:'2 years'},
    {jp:'三年',reading:'さんねん',def:'3 years'},{jp:'四年',reading:'よねん',def:'4 years'},
    {jp:'五年',reading:'ごねん',def:'5 years'},{jp:'六年',reading:'ろくねん',def:'6 years'},
    {jp:'七年',reading:'ななねん',def:'7 years'},{jp:'八年',reading:'はちねん',def:'8 years'},
    {jp:'九年',reading:'きゅうねん',def:'9 years'},{jp:'十年',reading:'じゅうねん',def:'10 years'},
    {jp:'何年',reading:'なんねん',def:'how many years?'},
  ]},
  'people':{label:'People',icon:'👤',desc:'Counting people. 1 and 2 are highly irregular (ひとり、ふたり).',items:[
    {jp:'一人',reading:'ひとり',def:'1 person ⚠'},{jp:'二人',reading:'ふたり',def:'2 people ⚠'},
    {jp:'三人',reading:'さんにん',def:'3 people'},{jp:'四人',reading:'よにん',def:'4 people'},
    {jp:'五人',reading:'ごにん',def:'5 people'},{jp:'六人',reading:'ろくにん',def:'6 people'},
    {jp:'七人',reading:'しちにん / ななにん',def:'7 people'},{jp:'八人',reading:'はちにん',def:'8 people'},
    {jp:'九人',reading:'くにん / きゅうにん',def:'9 people'},{jp:'十人',reading:'じゅうにん',def:'10 people'},
    {jp:'何人',reading:'なんにん',def:'how many people?'},
  ]},
  'long':{label:'Long thin things',icon:'📏',desc:'Counting long, thin objects: pens, bottles, roads, trees. 本 (ほん).',items:[
    {jp:'一本',reading:'いっぽん',def:'1 ⚠'},{jp:'二本',reading:'にほん',def:'2'},
    {jp:'三本',reading:'さんぼん',def:'3 ⚠'},{jp:'四本',reading:'よんほん',def:'4'},
    {jp:'五本',reading:'ごほん',def:'5'},{jp:'六本',reading:'ろっぽん',def:'6 ⚠'},
    {jp:'七本',reading:'ななほん',def:'7'},{jp:'八本',reading:'はっぽん',def:'8 ⚠'},
    {jp:'九本',reading:'きゅうほん',def:'9'},{jp:'十本',reading:'じゅっぽん',def:'10 ⚠'},
    {jp:'何本',reading:'なんぼん',def:'how many?'},
  ]},
  'laps':{label:'Laps / Times around',icon:'🔄',desc:'Counting laps or times around something. 周 (しゅう).',items:[
    {jp:'一周',reading:'いっしゅう',def:'1 lap ⚠'},{jp:'二周',reading:'にしゅう',def:'2 laps'},
    {jp:'三周',reading:'さんしゅう',def:'3 laps'},{jp:'四周',reading:'よんしゅう',def:'4 laps'},
    {jp:'五周',reading:'ごしゅう',def:'5 laps'},{jp:'六周',reading:'ろくしゅう',def:'6 laps'},
    {jp:'七周',reading:'ななしゅう',def:'7 laps'},{jp:'八周',reading:'はっしゅう',def:'8 laps ⚠'},
    {jp:'九周',reading:'きゅうしゅう',def:'9 laps'},{jp:'十周',reading:'じゅっしゅう',def:'10 laps ⚠'},
    {jp:'何周',reading:'なんしゅう',def:'how many laps?'},
  ]},
  'front_back':{label:'Front & Back',icon:'↕',desc:'Position from the front or back of a line/row.',items:[
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
  'left_right':{label:'Left & Right',icon:'↔',desc:'Position from the left or right side.',items:[
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
  'rows':{label:'Row number',icon:'📍',desc:'Counting rows (れつ) in a classroom or venue.',items:[
    {jp:'いちれつめ',reading:'いちれつめ',def:'1st row'},{jp:'にれつめ',reading:'にれつめ',def:'2nd row'},
    {jp:'さんれつめ',reading:'さんれつめ',def:'3rd row'},{jp:'よんれつめ',reading:'よんれつめ',def:'4th row'},
    {jp:'ごれつめ',reading:'ごれつめ',def:'5th row'},{jp:'ろくれつめ',reading:'ろくれつめ',def:'6th row'},
    {jp:'ななれつめ',reading:'ななれつめ',def:'7th row'},{jp:'はちれつめ',reading:'はちれつめ',def:'8th row'},
    {jp:'きゅうれつめ',reading:'きゅうれつめ',def:'9th row'},{jp:'じゅうれつめ',reading:'じゅうれつめ',def:'10th row'},
  ]},
};

const sheetData = {
  verbs:  [{'word':'たべます','eng':'to eat','dict':'たべる','te':'たべて','grp':'G2','lvl':'5'},{'word':'のみます','eng':'to drink','dict':'のむ','te':'のんで','grp':'G1','lvl':'5'},{'word':'よみます','eng':'to read','dict':'よむ','te':'よんで','grp':'G1','lvl':'5'},{'word':'みます','eng':'to see','dict':'みる','te':'みて','grp':'G2','lvl':'5'},{'word':'かきます','eng':'to write','dict':'かく','te':'かいて','grp':'G1','lvl':'5'},{'word':'ききます','eng':'to listen','dict':'きく','te':'きいて','grp':'G1','lvl':'5'},{'word':'はなします','eng':'to speak','dict':'はなす','te':'はなして','grp':'G1','lvl':'5'},{'word':'かいます','eng':'to buy','dict':'かう','te':'かって','grp':'G1','lvl':'5'},{'word':'します','eng':'to do','dict':'する','te':'して','grp':'G3','lvl':'5'},{'word':'べんきょうをします','eng':'to study','dict':'べんきょうをする','te':'べんきょうをして','grp':'G3','lvl':'5'},{'word':'テニスをします','eng':'to play tennis','dict':'テニスをする','te':'テニスをして','grp':'G3','lvl':'5'},{'word':'すいます','eng':'to smoke','dict':'すう','te':'すって','grp':'G1','lvl':'5'},{'word':'いきます','eng':'to go','dict':'いく','te':'いって','grp':'G1','lvl':'5'},{'word':'きます','eng':'to come','dict':'きる','te':'きて','grp':'G3','lvl':'5'},{'word':'かえります','eng':'to return','dict':'かえる','te':'かえって','grp':'G1','lvl':'5'},{'word':'およぎます','eng':'to swim','dict':'およぐ','te':'およいで','grp':'G1','lvl':'5'},{'word':'おきます','eng':'to wake up','dict':'おきる','te':'おきて','grp':'G2','lvl':'5'},{'word':'みがきます','eng':'to brush (teeth)','dict':'みがく','te':'みがいて','grp':'G1','lvl':'5'},{'word':'はいります','eng':'to enter','dict':'はいる','te':'はいって','grp':'G1','lvl':'5'},{'word':'ねます','eng':'to sleep','dict':'ねる','te':'ねて','grp':'G2','lvl':'5'},{'word':'そうじをします','eng':'to clean','dict':'そうじをする','te':'そうじをして','grp':'G3','lvl':'6'},{'word':'つくります','eng':'to make','dict':'つくる','te':'つくって','grp':'G1','lvl':'6'},{'word':'あいます','eng':'to meet','dict':'あう','te':'あって','grp':'G1','lvl':'6'},{'word':'とまります','eng':'to stay (at a hotel)','dict':'とまる','te':'とまって','grp':'G3','lvl':'6'},{'word':'あります','eng':'to be (inanimate)','dict':'ある','te':'あって','grp':'G1','lvl':'7'},{'word':'います','eng':'to be (animate)','dict':'いる','te':'いて','grp':'G1','lvl':'7'},{'word':'のります','eng':'to ride','dict':'のる','te':'のって','grp':'G1','lvl':'8'},{'word':'かきます','eng':'to draw','dict':'かく','te':'かいて','grp':'G1','lvl':'8'},{'word':'そだてます','eng':'to raise','dict':'そだてる','te':'そだてて','grp':'G2','lvl':'8'},{'word':'あみます','eng':'to knit','dict':'あむ','te':'あんで','grp':'G1','lvl':'8'},{'word':'ひきます','eng':'to play (instrument)','dict':'ひく','te':'ひいて','grp':'G1','lvl':'8'},{'word':'つりをします','eng':'to fish','dict':'つりをする','te':'つりをして','grp':'G3','lvl':'8'},{'word':'まちます','eng':'to wait','dict':'まつ','te':'まって','grp':'G1','lvl':'8'},{'word':'しにます','eng':'to die','dict':'しぬ','te':'しんで','grp':'G1','lvl':'8'},{'word':'よびます','eng':'to call','dict':'よぶ','te':'よんで','grp':'G1','lvl':'8'},{'word':'あけます','eng':'to open','dict':'あける','te':'あけて','grp':'G2','lvl':'8'},{'word':'うたいます','eng':'to sing','dict':'うたう','te':'うたって','grp':'G1','lvl':'8'},{'word':'もちます','eng':'to have/hold','dict':'もつ','te':'もって','grp':'G1','lvl':'9'},{'word':'かします','eng':'to lend','dict':'かす','te':'かして','grp':'G1','lvl':'9'},{'word':'てつだいます','eng':'to help','dict':'てつだう','te':'てつだって','grp':'G1','lvl':'9'},{'word':'しめます','eng':'to close','dict':'しめる','te':'しめて','grp':'G2','lvl':'9'},{'word':'けします','eng':'to turn off','dict':'けす','te':'けして','grp':'G1','lvl':'9'},{'word':'わすれます','eng':'to forget','dict':'わすれる','te':'わすれて','grp':'G2','lvl':'9'},{'word':'ひっこします','eng':'to move house','dict':'ひっこす','te':'ひっこして','grp':'G1','lvl':'9'},{'word':'たちます','eng':'to stand','dict':'たつ','te':'たって','grp':'G1','lvl':'9'},{'word':'とびます','eng':'to fly','dict':'とぶ','te':'とんで','grp':'G1','lvl':'9'},{'word':'いいます','eng':'to say','dict':'いう','te':'いって','grp':'G1','lvl':'9'},{'word':'おしえます','eng':'to teach/tell','dict':'おしえる','te':'おしえて','grp':'G2','lvl':'9'},{'word':'みせます','eng':'to show','dict':'みせる','te':'みせて','grp':'G2','lvl':'9'},{'word':'あるきます','eng':'to walk','dict':'あるく','te':'あるいて','grp':'G1','lvl':'9'},{'word':'とります','eng':'to take','dict':'とる','te':'とって','grp':'G1','lvl':'9'},{'word':'わらいます','eng':'to laugh','dict':'わらう','te':'わらって','grp':'G1','lvl':'9'},{'word':'あそびます','eng':'to play','dict':'あそぶ','te':'あそんで','grp':'G1','lvl':'9'},{'word':'おどります','eng':'to dance','dict':'おどる','te':'おどって','grp':'G1','lvl':'9'},{'word':'はしります','eng':'to run','dict':'はしる','te':'はしって','grp':'G1','lvl':'9'},{'word':'でます','eng':'to leave','dict':'でる','te':'でて','grp':'G2','lvl':'9'},{'word':'うけます','eng':'to take (a test)','dict':'うける','te':'うけて','grp':'G2','lvl':'10'},{'word':'とめます','eng':'to stop','dict':'とめる','te':'とめて','grp':'G2','lvl':'10'},{'word':'だします','eng':'to take out','dict':'だす','te':'だして','grp':'G1','lvl':'10'},{'word':'あらいます','eng':'to wash','dict':'あらう','te':'あらって','grp':'G1','lvl':'10'},{'word':'あびます','eng':'to take (a shower)','dict':'あびる','te':'あびて','grp':'G2','lvl':'10'},{'word':'おります','eng':'to get off','dict':'おりる','te':'おりて','grp':'G2','lvl':'10'},{'word':'のりかえます','eng':'to change trains','dict':'のりかえる','te':'のりかえて','grp':'G2','lvl':'10'},{'word':'かかります','eng':'to take (time/money)','dict':'かかる','te':'かかって','grp':'G1','lvl':'10'},{'word':'もっていきます','eng':'to take (something)','dict':'もっていく','te':'もっていって','grp':'G1','lvl':'10'},{'word':'かっていきます','eng':'to buy and go','dict':'かっていく','te':'かっていって','grp':'G1','lvl':'10'},{'word':'つくっていきます','eng':'to make and take','dict':'つくっていく','te':'つくっていって','grp':'G1','lvl':'10'},{'word':'つれていきます','eng':'to take someone along','dict':'つれていく','te':'つれていって','grp':'G1','lvl':'10'},{'word':'もってきます','eng':'to bring (something)','dict':'もってくる','te':'もってきて','grp':'G3','lvl':'10'},{'word':'かってきます','eng':'to buy and come','dict':'かってくる','te':'かってきて','grp':'G3','lvl':'10'},{'word':'かってかえります','eng':'to buy and return','dict':'かってかえる','te':'かってかえって','grp':'G1','lvl':'10'},{'word':'いってきます','eng':'to go and come back','dict':'いってくる','te':'いってきて','grp':'G3','lvl':'10'},{'word':'もってかえります','eng':'to take home','dict':'もってかえる','te':'もってかえって','grp':'G1','lvl':'10'},{'word':'きめます','eng':'to decide','dict':'きめる','te':'きめて','grp':'G2','lvl':'11'},{'word':'あげます','eng':'to raise, give','dict':'あげる','te':'あげて','grp':'G2','lvl':'11'},{'word':'たります','eng':'to be enough','dict':'たりる','te':'たりて','grp':'G2','lvl':'11'},{'word':'まちがえます','eng':'to make a mistake','dict':'まちがえる','te':'まちがえて','grp':'G2','lvl':'11'},{'word':'はきます','eng':'to wear (shoes / trousers)','dict':'はく','te':'はいて','grp':'G1','lvl':'11'},{'word':'おします','eng':'to push','dict':'おす','te':'おして','grp':'G1','lvl':'12'},{'word':'おくれます','eng':'to be late','dict':'おくれる','te':'おくれて','grp':'G2','lvl':'12'},{'word':'すわります','eng':'to sit','dict':'すわる','te':'すわって','grp':'G1','lvl':'12'},{'word':'すてます','eng':'to throw away','dict':'すてる','te':'すてて','grp':'G2','lvl':'12'},{'word':'さわります','eng':'to touch','dict':'さわる','te':'さわって','grp':'G1','lvl':'12'},{'word':'かたづけます','eng':'to tidy up','dict':'かたづける','te':'かたづけて','grp':'G2','lvl':'12'},{'word':'ふります','eng':'to fall (rain/snow)','dict':'ふる','te':'ふって','grp':'G1','lvl':'12'},{'word':'でかけます','eng':'to go out','dict':'でかける','te':'でかけて','grp':'G2','lvl':'12'},{'word':'やめます','eng':'to quit','dict':'やめる','te':'やめて','grp':'G2','lvl':'12'},{'word':'つかれます','eng':'to get tired','dict':'つかれる','te':'つかれて','grp':'G2','lvl':'12'},{'word':'まよいます','eng':'to get lost','dict':'まよう','te':'まよって','grp':'G1','lvl':'12'},{'word':'こたえます','eng':'to answer','dict':'こたえる','te':'こたえて','grp':'G2','lvl':'12'}],
  adj:    [{'word':'おおきい','eng':'big, large','adj':'i','lvl':'3'},{'word':'ちいさい','eng':'small, little','adj':'i','lvl':'3'},{'word':'たかい','eng':'tall, expensive','adj':'i','lvl':'3'},{'word':'やすい','eng':'cheap','adj':'i','lvl':'3'},{'word':'ひくい','eng':'low, short','adj':'i','lvl':'3'},{'word':'ながい','eng':'long','adj':'i','lvl':'3'},{'word':'みじかい','eng':'short','adj':'i','lvl':'3'},{'word':'あたらしい','eng':'new','adj':'i','lvl':'3'},{'word':'ふるい','eng':'old (thing)','adj':'i','lvl':'3'},{'word':'おいしい','eng':'delicious','adj':'i','lvl':'3'},{'word':'まずい','eng':'bad tasting','adj':'i','lvl':'3'},{'word':'むずかしい','eng':'difficult','adj':'i','lvl':'3'},{'word':'やさしい','eng':'easy','adj':'i','lvl':'3'},{'word':'あつい','eng':'hot (weather)','adj':'i','lvl':'3'},{'word':'さむい','eng':'cold (weather)','adj':'i','lvl':'3'},{'word':'いい','eng':'good','adj':'i','lvl':'3'},{'word':'わるい','eng':'bad','adj':'i','lvl':'3'},{'word':'おもしろい','eng':'interesting, funny','adj':'i','lvl':'3'},{'word':'つまらない','eng':'boring','adj':'i','lvl':'3'},{'word':'おもい','eng':'heavy','adj':'i','lvl':'3'},{'word':'かるい','eng':'light','adj':'i','lvl':'3'},{'word':'しろい','eng':'white','adj':'i','lvl':'3'},{'word':'くろい','eng':'black','adj':'i','lvl':'3'},{'word':'しんせつ','eng':'kind, friendly','adj':'na','lvl':'3'},{'word':'べんり','eng':'convenient','adj':'na','lvl':'3'},{'word':'きれい','eng':'pretty, clean','adj':'na','lvl':'3'},{'word':'しずか','eng':'quiet, calm','adj':'na','lvl':'3'},{'word':'げんき','eng':'healthy, energetic','adj':'na','lvl':'3'},{'word':'たいせつ','eng':'important','adj':'na','lvl':'3'},{'word':'うるさい','eng':'noisy, loud','adj':'i','lvl':'3'},{'word':'ちかい','eng':'close, near','adj':'i','lvl':'3'},{'word':'たいへん','eng':'tough, hard','adj':'na','lvl':'5'},{'word':'いそがしい','eng':'busy','adj':'i','lvl':'5'},{'word':'ひま','eng':'free time, not busy','adj':'na','lvl':'6'},{'word':'たのしい','eng':'fun, enjoyable','adj':'i','lvl':'6'},{'word':'じょうず','eng':'good at, skilled','adj':'na','lvl':'6'},{'word':'にぎやか','eng':'lively, bustling','adj':'na','lvl':'6'},{'word':'あたたかい','eng':'warm','adj':'i','lvl':'6'},{'word':'ゆうめい','eng':'famous','adj':'na','lvl':'7'},{'word':'おおい','eng':'many, a lot','adj':'i','lvl':'8'},{'word':'ひろい','eng':'wide, spacious','adj':'i','lvl':'8'},{'word':'せまい','eng':'narrow','adj':'i','lvl':'8'},{'word':'あかい','eng':'red','adj':'i','lvl':'8'},{'word':'ちゃいろい','eng':'brown','adj':'i','lvl':'8'},{'word':'しかくい','eng':'square','adj':'i','lvl':'8'},{'word':'きたない','eng':'dirty','adj':'i','lvl':'8'},{'word':'きいろい','eng':'yellow','adj':'i','lvl':'8'},{'word':'まるい','eng':'round','adj':'i','lvl':'8'},{'word':'ハンサム','eng':'handsome','adj':'na','lvl':'8'},{'word':'しんせん','eng':'fresh','adj':'na','lvl':'8'},{'word':'ほしい','eng':'want, desire','adj':'i','lvl':'8'},{'word':'すき','eng':'like, fond of','adj':'na','lvl':'8'},{'word':'きらい','eng':'dislike','adj':'na','lvl':'8'},{'word':'つよい','eng':'strong','adj':'i','lvl':'8'},{'word':'きもちいい','eng':'feels good, comfortable','adj':'i','lvl':'8'},{'word':'にがい','eng':'bitter','adj':'i','lvl':'8'},{'word':'さびしい','eng':'lonely','adj':'i','lvl':'8'},{'word':'かなしい','eng':'sad','adj':'i','lvl':'8'},{'word':'くるしい','eng':'painful, suffering','adj':'i','lvl':'8'},{'word':'うれしい','eng':'happy, glad','adj':'i','lvl':'8'},{'word':'いたい','eng':'painful, hurts','adj':'i','lvl':'8'},{'word':'いろいろ','eng':'various, all kinds','adj':'na','lvl':'8'},{'word':'くらい','eng':'dark','adj':'i','lvl':'9'},{'word':'だいじょうぶ','eng':'OK, alright','adj':'na','lvl':'9'},{'word':'ゆっくり','eng':'slowly, leisurely','adj':'na','lvl':'9'},{'word':'はやい','eng':'fast, early','adj':'i','lvl':'11'},{'word':'わかい','eng':'young','adj':'i','lvl':'11'},{'word':'かっこいい','eng':'cool, stylish','adj':'i','lvl':'11'},{'word':'あまい','eng':'sweet','adj':'i','lvl':'11'},{'word':'はで','eng':'flashy, showy','adj':'na','lvl':'11'},{'word':'じみ','eng':'plain, modest','adj':'na','lvl':'11'},{'word':'わかりやすい','eng':'easy to understand','adj':'i','lvl':'11'},{'word':'あぶない','eng':'dangerous','adj':'i','lvl':'12'},{'word':'はずかしい','eng':'embarrassing, shy','adj':'i','lvl':'12'},{'word':'へん','eng':'strange, weird','adj':'na','lvl':'12'},{'word':'すてき','eng':'wonderful, lovely','adj':'na','lvl':'12'},{'word':'うつくしい','eng':'beautiful','adj':'i','lvl':'12'},{'word':'めずらしい','eng':'rare, unusual','adj':'i','lvl':'12'},{'word':'とおい','eng':'far, distant','adj':'i','lvl':'12'}],
  nouns:  [{'word':'わたし','reading':'わたし','eng':'I, me','lvl':'1'},{'word':'あなた','reading':'','eng':'you','lvl':'1'},{'word':'かれ','reading':'かれ','eng':'he, him','lvl':'1'},{'word':'かのじょ','reading':'かのじょ','eng':'she, her','lvl':'1'},{'word':'日本人','reading':'にほんじん','eng':'Japanese person','lvl':'1'},{'word':'かんこく','reading':'かんこく','eng':'South Korea','lvl':'1'},{'word':'中国','reading':'ちゅうごく','eng':'China','lvl':'1'},{'word':'イギリス','reading':'','eng':'UK, England','lvl':'1'},{'word':'フランス','reading':'','eng':'France','lvl':'1'},{'word':'アメリカ','reading':'','eng':'USA','lvl':'1'},{'word':'学生','reading':'がくせい','eng':'student','lvl':'1'},{'word':'会社員','reading':'かいしゃいん','eng':'office worker','lvl':'1'},{'word':'先生','reading':'せんせい','eng':'teacher','lvl':'1'},{'word':'いしゃ','reading':'いしゃ','eng':'doctor','lvl':'1'},{'word':'かしゅ','reading':'かしゅ','eng':'singer','lvl':'1'},{'word':'けいさつかん','reading':'けいさつかん','eng':'police officer','lvl':'1'},{'word':'(お)国','reading':'(お)くに','eng':'country, nation','lvl':'1'},{'word':'ドイツ','reading':'','eng':'Germany','lvl':'1'},{'word':'でんわばんごう','reading':'でんわばんごう','eng':'telephone number','lvl':'2'},{'word':'くだもの','reading':'くだもの','eng':'fruit','lvl':'2'},{'word':'本','reading':'ほん','eng':'book','lvl':'2'},{'word':'辞書','reading':'じしょ','eng':'dictionary','lvl':'2'},{'word':'さかな','reading':'さかな','eng':'fish','lvl':'2'},{'word':'とり','reading':'とり','eng':'bird, chicken','lvl':'2'},{'word':'ひこうき','reading':'ひこうき','eng':'airplane','lvl':'2'},{'word':'（お）ちゃ','reading':'（お）ちゃ','eng':'tea','lvl':'2'},{'word':'きって','reading':'きって','eng':'stamp','lvl':'2'},{'word':'いす','reading':'','eng':'chair','lvl':'2'},{'word':'つくえ','reading':'つくえ','eng':'desk','lvl':'2'},{'word':'かさ','reading':'かさ','eng':'umbrella','lvl':'2'},{'word':'とけい','reading':'とけい','eng':'watch, clock','lvl':'2'},{'word':'ねこ','reading':'ねこ','eng':'cat','lvl':'2'},{'word':'いぬ','reading':'いぬ','eng':'dog','lvl':'2'},{'word':'ざっし','reading':'ざっし','eng':'magazine','lvl':'2'},{'word':'ぼうし','reading':'ぼうし','eng':'hat, cap','lvl':'2'},{'word':'かぎ','reading':'かぎ','eng':'key','lvl':'2'},{'word':'ペン','reading':'','eng':'pen','lvl':'2'},{'word':'えんぴつ','reading':'','eng':'pencil','lvl':'2'},{'word':'かばん','reading':'','eng':'bag','lvl':'2'},{'word':'くつ','reading':'','eng':'shoes','lvl':'2'},{'word':'りんご','reading':'','eng':'apple','lvl':'2'},{'word':'電話','reading':'でんわ','eng':'telephone','lvl':'2'},{'word':'新聞','reading':'しんぶん','eng':'newspaper','lvl':'2'},{'word':'パイナップル','reading':'','eng':'pineapple','lvl':'2'},{'word':'みかん','reading':'','eng':'mandarin orange','lvl':'2'},{'word':'バナナ','reading':'','eng':'banana','lvl':'2'},{'word':'きっぷ','reading':'きっぷ','eng':'ticket','lvl':'2'},{'word':'テレビ','reading':'','eng':'television','lvl':'2'},{'word':'パン','reading':'','eng':'bread','lvl':'2'},{'word':'ノート','reading':'','eng':'notebook','lvl':'2'},{'word':'車','reading':'くるま','eng':'car','lvl':'2'},{'word':'ゆびわ','reading':'ゆびわ','eng':'ring','lvl':'2'},{'word':'シャツ','reading':'','eng':'shirt','lvl':'2'},{'word':'ふく','reading':'ふく','eng':'clothes','lvl':'2'},{'word':'めがね','reading':'めがね','eng':'glasses','lvl':'2'},{'word':'パソコン','reading':'','eng':'computer','lvl':'2'},{'word':'スイス','reading':'','eng':'Switzerland','lvl':'2'},{'word':'イタリア','reading':'','eng':'Italy','lvl':'2'},{'word':'カメラ','reading':'','eng':'camera','lvl':'2'},{'word':'（お）さけ','reading':'（お）酒','eng':'alcohol, sake','lvl':'2'},{'word':'カップ','reading':'','eng':'cup','lvl':'2'},{'word':'アパート','reading':'','eng':'apartment','lvl':'3'},{'word':'うち','reading':'','eng':'home, house','lvl':'3'},{'word':'テスト','reading':'','eng':'test, exam','lvl':'3'},{'word':'かみ','reading':'かみ','eng':'hair','lvl':'3'},{'word':'ケーキ','reading':'','eng':'cake','lvl':'3'},{'word':'木','reading':'き','eng':'tree','lvl':'3'},{'word':'へや','reading':'へや','eng':'room','lvl':'3'},{'word':'こうえん','reading':'こうえん','eng':'park','lvl':'3'},{'word':'東京','reading':'とうきょう','eng':'Tokyo','lvl':'3'},{'word':'ちかてつ','reading':'ちかてつ','eng':'subway','lvl':'3'},{'word':'（お）金','reading':'（お）かね','eng':'money','lvl':'3'},{'word':'目','reading':'め','eng':'eye','lvl':'3'},{'word':'とても','reading':'','eng':'very','lvl':'3'},{'word':'人','reading':'ひと','eng':'person','lvl':'3'},{'word':'クラスメート','reading':'','eng':'classmate','lvl':'3'},{'word':'駅','reading':'えき','eng':'station','lvl':'3'},{'word':'となり','reading':'となり','eng':'next door','lvl':'3'},{'word':'おおやさん','reading':'おおやさん','eng':'landlord','lvl':'3'},{'word':'でも','reading':'','eng':'but, however','lvl':'3'},{'word':'スケジュール','reading':'','eng':'schedule','lvl':'4'},{'word':'〜時','reading':'〜じ','eng':'~ o clock','lvl':'4'},{'word':'〜分','reading':'〜ふん','eng':'~minutes','lvl':'4'},{'word':'半','reading':'はん','eng':'half','lvl':'4'},{'word':'銀行','reading':'ぎんこう','eng':'bank','lvl':'4'},{'word':'クラス','reading':'','eng':'class','lvl':'4'},{'word':'ゆうびんきょく','reading':'ゆうびんきょく','eng':'post office','lvl':'4'},{'word':'レストラン','reading':'','eng':'restaurant','lvl':'4'},{'word':'コンサート','reading':'','eng':'concert','lvl':'4'},{'word':'デパート','reading':'','eng':'department store','lvl':'4'},{'word':'えいが','reading':'えいが','eng':'movie, film','lvl':'4'},{'word':'学校','reading':'がっこう','eng':'school','lvl':'4'},{'word':'ソウル','reading':'','eng':'Seoul','lvl':'4'},{'word':'コンビニ','reading':'','eng':'convenience store','lvl':'4'},{'word':'カフェ','reading':'','eng':'café','lvl':'4'},{'word':'きっさてん','reading':'きっさてん','eng':'coffee shop','lvl':'4'},{'word':'病院','reading':'びょういん','eng':'hospital','lvl':'4'},{'word':'曜日','reading':'ようび','eng':'day of week','lvl':'4'},{'word':'今日','reading':'きょう','eng':'today','lvl':'4'},{'word':'パーティ','reading':'','eng':'party','lvl':'4'},{'word':'休み','reading':'やすみ','eng':'holiday, day off','lvl':'4'},{'word':'デート','reading':'','eng':'date','lvl':'4'},{'word':'旅行','reading':'りょこう','eng':'travel, trip','lvl':'4'},{'word':'誕生日','reading':'たんじょうび','eng':'birthday','lvl':'4'},{'word':'なつやすみ','reading':'なつやすみ','eng':'summer vacation','lvl':'4'},{'word':'〜月','reading':'〜がつ','eng':'~month','lvl':'4'},{'word':'〜日','reading':'〜にち','eng':'~day of month','lvl':'4'},{'word':'ピクニック','reading':'','eng':'picnic','lvl':'4'},{'word':'ゴールデンウィーク','reading':'','eng':'Golden Week','lvl':'4'},{'word':'毎日','reading':'まいにち','eng':'every day','lvl':'5'},{'word':'コーヒー','reading':'','eng':'coffee','lvl':'5'},{'word':'英語','reading':'えいご','eng':'English (language)','lvl':'5'},{'word':'ビデオ','reading':'','eng':'video','lvl':'5'},{'word':'てんぷら','reading':'','eng':'tempura','lvl':'5'},{'word':'よる','reading':'よる','eng':'night','lvl':'5'},{'word':'午後','reading':'ごご','eng':'PM, afternoon','lvl':'5'},{'word':'こんばん','reading':'こんばん','eng':'tonight, this evening','lvl':'5'},{'word':'たばこ','reading':'','eng':'cigarette, tobacco','lvl':'5'},{'word':'スパゲティ','reading':'','eng':'spaghetti','lvl':'5'},{'word':'明日','reading':'あした','eng':'tomorrow','lvl':'5'},{'word':'ばんごはん','reading':'ばんごはん','eng':'dinner, evening meal','lvl':'5'},{'word':'しんじゅく','reading':'しんじゅく','eng':'Shinjuku','lvl':'5'},{'word':'会社','reading':'かいしゃ','eng':'company, office','lvl':'5'},{'word':'図書館','reading':'としょかん','eng':'library','lvl':'5'},{'word':'ほんや','reading':'ほんや','eng':'bookstore','lvl':'5'},{'word':'サッカー','reading':'','eng':'soccer','lvl':'5'},{'word':'なかの','reading':'なかの','eng':'Nakano','lvl':'5'},{'word':'あきはばら','reading':'あきはばら','eng':'Akihabara','lvl':'5'},{'word':'うえの','reading':'うえの','eng':'Ueno','lvl':'5'},{'word':'六本木','reading':'ろっぽんぎ','eng':'Roppongi','lvl':'5'},{'word':'しごと','reading':'しごと','eng':'work, job','lvl':'5'},{'word':'ステーキ','reading':'','eng':'steak','lvl':'5'},{'word':'買い物','reading':'かいもの','eng':'shopping','lvl':'5'},{'word':'はなみ','reading':'はなみ','eng':'flower viewing','lvl':'5'},{'word':'きょうと','reading':'きょうと','eng':'Kyoto','lvl':'5'},{'word':'友だち','reading':'ともだち','eng':'friend','lvl':'5'},{'word':'来月','reading':'らいげつ','eng':'next month','lvl':'5'},{'word':'ほっかいどう','reading':'ほっかいどう','eng':'Hokkaido','lvl':'5'},{'word':'うみ','reading':'うみ','eng':'sea, ocean','lvl':'5'},{'word':'ホンコン','reading':'','eng':'Hong Kong','lvl':'5'},{'word':'スキー','reading':'','eng':'skiing','lvl':'5'},{'word':'え','reading':'え','eng':'picture, painting','lvl':'5'},{'word':'（お）寺','reading':'（お）てら','eng':'temple','lvl':'5'},{'word':'ひるごはん','reading':'ひるごはん','eng':'lunch','lvl':'5'},{'word':'ときどき','reading':'','eng':'sometimes','lvl':'5'},{'word':'電車','reading':'でんしゃ','eng':'train','lvl':'5'},{'word':'は','reading':'は','eng':'tooth, teeth','lvl':'5'},{'word':'（お）ふろ','reading':'（お）ふろ','eng':'bath','lvl':'5'},{'word':'それから','reading':'','eng':'and then, after that','lvl':'5'},{'word':'スポーツ','reading':'','eng':'sports','lvl':'5'},{'word':'よく','reading':'','eng':'often, well','lvl':'5'},{'word':'あまり','reading':'','eng':'not very (+ negative)','lvl':'5'},{'word':'ぜんぜん','reading':'ぜんぜん','eng':'not at all (+ negative)','lvl':'5'},{'word':'さしみ','reading':'','eng':'sashimi','lvl':'5'},{'word':'すし','reading':'すし','eng':'sushi','lvl':'5'},{'word':'ウィスキー','reading':'','eng':'whiskey','lvl':'5'},{'word':'ビール','reading':'','eng':'beer','lvl':'5'},{'word':'ドイツ語','reading':'どいつご','eng':'German (language)','lvl':'5'},{'word':'にほんしゅ','reading':'にほんしゅ','eng':'Japanese sake','lvl':'5'},{'word':'こうちゃ','reading':'こうちゃ','eng':'black tea','lvl':'5'},{'word':'フランス語','reading':'フランスご','eng':'French (language)','lvl':'5'},{'word':'そうじ','reading':'そうじ','eng':'cleaning, sweeping','lvl':'5'},{'word':'せんたく','reading':'せんたく','eng':'laundry, washing','lvl':'5'},{'word':'おんがく','reading':'おんがく','eng':'music','lvl':'5'},{'word':'アニメ','reading':'','eng':'anime','lvl':'5'},{'word':'ドラマ','reading':'','eng':'drama, TV drama','lvl':'5'},{'word':'りょうり','reading':'りょうり','eng':'cooking, cuisine','lvl':'5'},{'word':'かんこくご','reading':'かんこくご','eng':'Korean (language)','lvl':'5'},{'word':'ジャズ','reading':'','eng':'jazz','lvl':'5'},{'word':'クラシック','reading':'','eng':'classical music','lvl':'5'},{'word':'RPGゲーム','reading':'','eng':'RPG game','lvl':'5'},{'word':'アクションゲーム','reading':'','eng':'action game','lvl':'5'},{'word':'しぶや','reading':'しぶや','eng':'Shibuya','lvl':'5'},{'word':'あさごはん','reading':'あさごはん','eng':'breakfast','lvl':'5'},{'word':'ぱんや','reading':'ぱんや','eng':'bakery','lvl':'5'},{'word':'アルバイト','reading':'','eng':'part-time job','lvl':'5'},{'word':'てがみ','reading':'てがみ','eng':'letter (written)','lvl':'5'},{'word':'しゅくだい','reading':'しゅくだい','eng':'homework','lvl':'5'},{'word':'いっしょ','reading':'いっしょ','eng':'together','lvl':'5'},{'word':'少し','reading':'すこし','eng':'a little','lvl':'5'},{'word':'〜ごろ','reading':'〜ごろ','eng':'around ~ (time)','lvl':'5'},{'word':'きのう','reading':'きのう','eng':'yesterday','lvl':'6'},{'word':'先週','reading':'せんしゅう','eng':'last week','lvl':'6'},{'word':'ゆうべ','reading':'ゆうべ','eng':'last night','lvl':'6'},{'word':'昨夜','reading':'さくや','eng':'last night (formal)','lvl':'6'},{'word':'サラダ','reading':'','eng':'salad','lvl':'6'},{'word':'外国人','reading':'がいこくじん','eng':'foreigner','lvl':'6'},{'word':'ぎんざ','reading':'ぎんざ','eng':'Ginza','lvl':'6'},{'word':'山','reading':'やま','eng':'mountain','lvl':'6'},{'word':'キャンプ','reading':'','eng':'camping','lvl':'6'},{'word':'おととい','reading':'','eng':'day before yesterday','lvl':'6'},{'word':'あさって','reading':'','eng':'day after tomorrow','lvl':'6'},{'word':'今週','reading':'こんしゅう','eng':'this week','lvl':'6'},{'word':'来週','reading':'らいしゅう','eng':'next week','lvl':'6'},{'word':'先月','reading':'せんげつ','eng':'last month','lvl':'6'},{'word':'今月','reading':'こんげつ','eng':'this month','lvl':'6'},{'word':'去年','reading':'きょねん','eng':'last year','lvl':'6'},{'word':'今年','reading':'ことし','eng':'this year','lvl':'6'},{'word':'来年','reading':'らいねん','eng':'next year','lvl':'6'},{'word':'きせつ','reading':'きせつ','eng':'season','lvl':'6'},{'word':'はる','reading':'はる','eng':'spring','lvl':'6'},{'word':'なつ','reading':'なつ','eng':'summer','lvl':'6'},{'word':'あき','reading':'あき','eng':'autumn, fall','lvl':'6'},{'word':'ふゆ','reading':'ふゆ','eng':'winter','lvl':'6'},{'word':'だけ','reading':'','eng':'only, just','lvl':'6'},{'word':'あとで','reading':'','eng':'later','lvl':'6'},{'word':'天気','reading':'てんき','eng':'weather','lvl':'6'},{'word':'フランスりょうり','reading':'フランスりょうり','eng':'French cuisine','lvl':'6'},{'word':'うた','reading':'うた','eng':'song','lvl':'6'},{'word':'さくら','reading':'さくら','eng':'cherry blossom','lvl':'6'},{'word':'食べ物','reading':'たべもの','eng':'food','lvl':'6'},{'word':'そして','reading':'','eng':'and then, and also','lvl':'6'},{'word':'チケット','reading':'','eng':'ticket','lvl':'6'},{'word':'サンドイッチ','reading':'','eng':'sandwich','lvl':'6'},{'word':'旅館','reading':'りょかん','eng':'Japanese inn','lvl':'6'},{'word':'ホテル','reading':'','eng':'hotel','lvl':'6'},{'word':'おみやげ','reading':'おみやげ','eng':'souvenir','lvl':'6'},{'word':'おまんじゅう','reading':'','eng':'sweet bun','lvl':'6'},{'word':'はな','reading':'はな','eng':'nose, flower','lvl':'7'},{'word':'テーブル','reading':'','eng':'table','lvl':'7'},{'word':'本だな','reading':'ほんだな','eng':'bookshelf','lvl':'7'},{'word':'たくさん','reading':'','eng':'many, a lot','lvl':'7'},{'word':'にわ','reading':'にわ','eng':'garden, yard','lvl':'7'},{'word':'れいぞうこ','reading':'','eng':'refrigerator','lvl':'7'},{'word':'チーズ','reading':'','eng':'cheese','lvl':'7'},{'word':'ポケット','reading':'','eng':'pocket','lvl':'7'},{'word':'トマト','reading':'','eng':'tomato','lvl':'7'},{'word':'だいどころ','reading':'だいどころ','eng':'kitchen','lvl':'7'},{'word':'今','reading':'いま','eng':'living room','lvl':'7'},{'word':'こどもべや','reading':'こどもべや','eng':'children\\','lvl':'7'},{'word':'トイレ','reading':'','eng':'toilet, bathroom','lvl':'7'},{'word':'お母さん','reading':'おかあさん','eng':'mother (someone else\\','lvl':'7'},{'word':'ゴキブリ','reading':'','eng':'cockroach','lvl':'7'},{'word':'たまご','reading':'','eng':'egg','lvl':'7'},{'word':'ネズミ','reading':'','eng':'mouse, rat','lvl':'7'},{'word':'ソファー','reading':'','eng':'sofa','lvl':'7'},{'word':'きんこ','reading':'きんこ','eng':'safe, vault','lvl':'7'},{'word':'どろぼう','reading':'','eng':'thief, burglar','lvl':'7'},{'word':'ベッド','reading':'','eng':'bed','lvl':'7'},{'word':'子ども','reading':'こども','eng':'child, children','lvl':'7'},{'word':'おもちゃ','reading':'','eng':'toy','lvl':'7'},{'word':'スリッパ','reading':'','eng':'slippers','lvl':'7'},{'word':'タオル','reading':'','eng':'towel','lvl':'7'},{'word':'自転車','reading':'じてんしゃ','eng':'bicycle','lvl':'7'},{'word':'池','reading':'いけ','eng':'pond','lvl':'7'},{'word':'帰る','reading':'かえる','eng':'frog','lvl':'7'},{'word':'ハンバーガー','reading':'','eng':'hamburger','lvl':'7'},{'word':'ジュース','reading':'','eng':'juice','lvl':'7'},{'word':'オレンジジュース','reading':'','eng':'orange juice','lvl':'7'},{'word':'男','reading':'おとこ','eng':'man, male','lvl':'7'},{'word':'女','reading':'おんな','eng':'woman, female','lvl':'7'},{'word':'コーラ','reading':'','eng':'cola','lvl':'7'},{'word':'ぜんぶ','reading':'ぜんぶ','eng':'all, everything','lvl':'7'},{'word':'円','reading':'えん','eng':'yen','lvl':'7'},{'word':'おつり','reading':'','eng':'change (money)','lvl':'7'},{'word':'ファーストフード','reading':'','eng':'fast food','lvl':'7'},{'word':'ケーキや','reading':'ケーキや','eng':'cake shop','lvl':'7'},{'word':'はこ','reading':'はこ','eng':'box','lvl':'7'},{'word':'上','reading':'うえ','eng':'above, on top','lvl':'7'},{'word':'下','reading':'した','eng':'below, under','lvl':'7'},{'word':'中','reading':'なか','eng':'inside, middle','lvl':'7'},{'word':'よこ','reading':'よこ','eng':'beside, next to','lvl':'7'},{'word':'ここ','reading':'','eng':'here','lvl':'7'},{'word':'そこ','reading':'','eng':'there','lvl':'7'},{'word':'あそこ','reading':'','eng':'over there','lvl':'7'},{'word':'前','reading':'まえ','eng':'in front, before','lvl':'7'},{'word':'後ろ','reading':'うしろ','eng':'behind, back','lvl':'7'},{'word':'ごみ','reading':'','eng':'garbage, trash','lvl':'7'},{'word':'ごみばこ','reading':'','eng':'trash can','lvl':'7'},{'word':'そら','reading':'そら','eng':'sky','lvl':'7'},{'word':'さいふ','reading':'','eng':'wallet, purse','lvl':'7'},{'word':'駐車場','reading':'ちゅうしゃじょう','eng':'parking lot','lvl':'7'},{'word':'そばや','reading':'そばや','eng':'soba restaurant','lvl':'7'},{'word':'そば','reading':'','eng':'near, beside, soba noodles','lvl':'7'},{'word':'ちず','reading':'ちず','eng':'map','lvl':'7'},{'word':'ほんしゅう','reading':'ほんしゅう','eng':'Honshu','lvl':'7'},{'word':'四国','reading':'しこく','eng':'Shikoku','lvl':'7'},{'word':'きゅうしゅう','reading':'きゅうしゅう','eng':'Kyushu','lvl':'7'},{'word':'右','reading':'みぎ','eng':'right','lvl':'7'},{'word':'左','reading':'ひだり','eng':'left','lvl':'7'},{'word':'北','reading':'きた','eng':'north','lvl':'7'},{'word':'南','reading':'みなみ','eng':'south','lvl':'7'},{'word':'西','reading':'にし','eng':'west','lvl':'7'},{'word':'東','reading':'ひがし','eng':'east','lvl':'7'},{'word':'スキー場','reading':'スキーじょう','eng':'ski resort','lvl':'7'},{'word':'ビル','reading':'','eng':'building','lvl':'7'},{'word':'じんじゃ','reading':'じんじゃ','eng':'shrine','lvl':'7'},{'word':'かんこうきゃく','reading':'かんこうきゃく','eng':'tourist','lvl':'7'},{'word':'火山','reading':'かざん','eng':'volcano','lvl':'7'},{'word':'おんせん','reading':'おんせん','eng':'hot spring','lvl':'7'},{'word':'北口','reading':'きたぐち','eng':'north exit','lvl':'7'},{'word':'南口','reading':'みなみぐち','eng':'south exit','lvl':'7'},{'word':'父','reading':'ちち','eng':'father (own)','lvl':'8'},{'word':'母','reading':'はは','eng':'mother (own)','lvl':'8'},{'word':'いもうと','reading':'いもうと','eng':'younger sister','lvl':'8'},{'word':'ぞう','reading':'ぞう','eng':'elephant','lvl':'8'},{'word':'きりん','reading':'','eng':'giraffe','lvl':'8'},{'word':'くび','reading':'くび','eng':'neck','lvl':'8'},{'word':'あし','reading':'あし','eng':'leg, foot','lvl':'8'},{'word':'はつおん','reading':'はつおん','eng':'pronunciation','lvl':'8'},{'word':'こころ','reading':'こころ','eng':'heart, mind','lvl':'8'},{'word':'耳','reading':'みみ','eng':'ear','lvl':'8'},{'word':'サービス','reading':'','eng':'service','lvl':'8'},{'word':'ぶっか','reading':'ぶっか','eng':'prices, cost of living','lvl':'8'},{'word':'やちん','reading':'やちん','eng':'rent','lvl':'8'},{'word':'うさぎ','reading':'','eng':'rabbit','lvl':'8'},{'word':'せ','reading':'せ','eng':'height, stature','lvl':'8'},{'word':'国','reading':'くに','eng':'country, nation','lvl':'8'},{'word':'まど','reading':'まど','eng':'window','lvl':'8'},{'word':'店員','reading':'てんいん','eng':'shop staff','lvl':'8'},{'word':'セーター','reading':'','eng':'sweater','lvl':'8'},{'word':'〜さい','reading':'〜さい','eng':'~years old','lvl':'8'},{'word':'タクシー','reading':'','eng':'taxi','lvl':'8'},{'word':'バス','reading':'','eng':'bus','lvl':'8'},{'word':'アイスクリーム','reading':'','eng':'ice cream','lvl':'8'},{'word':'早く','reading':'はやく','eng':'quickly, early','lvl':'8'},{'word':'すうがく','reading':'すうがく','eng':'mathematics','lvl':'8'},{'word':'あまいもの','reading':'あまいもの','eng':'sweets, sweet things','lvl':'8'},{'word':'ふとん','reading':'','eng':'futon','lvl':'8'},{'word':'ようしょく','reading':'ようしょく','eng':'Western food','lvl':'8'},{'word':'わしょく','reading':'わしょく','eng':'Japanese food','lvl':'8'},{'word':'とかい','reading':'とかい','eng':'city, urban area','lvl':'8'},{'word':'いなか','reading':'いなか','eng':'countryside, rural area','lvl':'8'},{'word':'にく','reading':'にく','eng':'meat','lvl':'8'},{'word':'〜タイプ','reading':'','eng':'~type','lvl':'8'},{'word':'さる','reading':'さる','eng':'monkey','lvl':'8'},{'word':'ライオン','reading':'','eng':'lion','lvl':'8'},{'word':'ようふく','reading':'ようふく','eng':'Western clothes','lvl':'8'},{'word':'一人','reading':'ひとり','eng':'one person, alone','lvl':'8'},{'word':'かんじ','reading':'かんじ','eng':'kanji','lvl':'8'},{'word':'ピアノ','reading':'','eng':'piano','lvl':'8'},{'word':'つり','reading':'つり','eng':'fishing','lvl':'8'},{'word':'しゃしん','reading':'しゃしん','eng':'photo, photograph','lvl':'8'},{'word':'ほんとうに','reading':'ほんとうに','eng':'really, truly','lvl':'8'},{'word':'アプリ','reading':'','eng':'app','lvl':'8'},{'word':'コート','reading':'','eng':'coat','lvl':'8'},{'word':'じこしょうかい','reading':'じこしょうかい','eng':'self-introduction','lvl':'8'},{'word':'しゅみ','reading':'しゅみ','eng':'hobby','lvl':'8'},{'word':'所','reading':'ところ','eng':'place','lvl':'8'},{'word':'かぞく','reading':'かぞく','eng':'family','lvl':'8'},{'word':'スポーツマン','reading':'','eng':'sportsman','lvl':'8'},{'word':'高校生','reading':'こうこうせい','eng':'high school student','lvl':'8'},{'word':'けしゴム','reading':'けしゴム','eng':'eraser','lvl':'9'},{'word':'ラジオ','reading':'','eng':'radio','lvl':'9'},{'word':'エアコン','reading':'','eng':'air conditioner','lvl':'9'},{'word':'電気','reading':'でんき','eng':'electricity, light','lvl':'9'},{'word':'ひっこし','reading':'ひっこし','eng':'moving (house)','lvl':'9'},{'word':'しお','reading':'しお','eng':'salt','lvl':'9'},{'word':'カメラマン','reading':'','eng':'photographer','lvl':'9'},{'word':'モデル','reading':'','eng':'model','lvl':'9'},{'word':'さんぽ','reading':'さんぽ','eng':'walk, stroll','lvl':'9'},{'word':'ロビー','reading':'','eng':'lobby','lvl':'9'},{'word':'ギター','reading':'','eng':'guitar','lvl':'9'},{'word':'（お）たく','reading':'（お）たく','eng':'your home (polite)','lvl':'9'},{'word':'もういちど','reading':'もういちど','eng':'once more, again','lvl':'9'},{'word':'ねつ','reading':'ねつ','eng':'fever','lvl':'10'},{'word':'たぶん','reading':'','eng':'probably, maybe','lvl':'10'},{'word':'くすり','reading':'くすり','eng':'medicine','lvl':'10'},{'word':'びじゅつかん','reading':'びじゅつかん','eng':'art museum','lvl':'10'},{'word':'かわ','reading':'かわ','eng':'river','lvl':'10'},{'word':'カンニング','reading':'','eng':'cheating (on exam)','lvl':'10'},{'word':'ルール','reading':'','eng':'rule','lvl':'10'},{'word':'ゴミ','reading':'','eng':'garbage, trash','lvl':'10'},{'word':'ペット','reading':'','eng':'pet','lvl':'10'},{'word':'かお','reading':'かお','eng':'face','lvl':'10'},{'word':'けさ','reading':'けさ','eng':'this morning','lvl':'10'},{'word':'ジョギング','reading':'','eng':'jogging','lvl':'10'},{'word':'ハム','reading':'','eng':'ham','lvl':'10'},{'word':'ぎゅうにゅう','reading':'ぎゅうにゅう','eng':'milk','lvl':'10'},{'word':'こいびと','reading':'こいびと','eng':'lover, partner','lvl':'10'},{'word':'シャワー','reading':'','eng':'shower','lvl':'10'},{'word':'まず','reading':'','eng':'first, to begin with','lvl':'10'},{'word':'食事','reading':'しょくじ','eng':'meal','lvl':'10'},{'word':'雨','reading':'あめ','eng':'rain','lvl':'10'},{'word':'ミルク','reading':'','eng':'milk','lvl':'10'},{'word':'むじんとう','reading':'むじんとう','eng':'deserted island','lvl':'10'},{'word':'みずぎ','reading':'みずぎ','eng':'swimsuit','lvl':'10'},{'word':'ぶんぼうぐや','reading':'ぶんぼうぐや','eng':'stationery shop','lvl':'10'},{'word':'くすりや','reading':'くすりや','eng':'pharmacy, drug store','lvl':'10'},{'word':'めぐすり','reading':'めぐすり','eng':'eye drops','lvl':'10'},{'word':'おにぎり','reading':'','eng':'rice ball','lvl':'10'},{'word':'飲み物','reading':'のみもの','eng':'drink, beverage','lvl':'10'},{'word':'ボールペン','reading':'','eng':'ballpoint pen','lvl':'10'},{'word':'テスト中','reading':'テストちゅう','eng':'during the exam','lvl':'10'},{'word':'ぎゅうにく','reading':'ぎゅうにく','eng':'beef','lvl':'11'},{'word':'ぶたにく','reading':'ぶたにく','eng':'pork','lvl':'11'},{'word':'人口','reading':'じんこう','eng':'population','lvl':'11'},{'word':'店','reading':'みせ','eng':'shop, store','lvl':'11'},{'word':'読書','reading':'どくしょ','eng':'reading (books)','lvl':'11'},{'word':'れきし','reading':'れきし','eng':'history','lvl':'11'},{'word':'ようしゅ','reading':'ようしゅ','eng':'Western liquor','lvl':'11'},{'word':'きゅうりょう','reading':'きゅうりょう','eng':'salary','lvl':'11'},{'word':'しんちょう','reading':'しんちょう','eng':'height (body)','lvl':'11'},{'word':'たいじゅう','reading':'たいじゅう','eng':'body weight','lvl':'11'},{'word':'ねんれい','reading':'ねんれい','eng':'age','lvl':'11'},{'word':'駅前','reading':'えきまえ','eng':'in front of the station','lvl':'11'},{'word':'デザイン','reading':'','eng':'design','lvl':'11'},{'word':'いろ','reading':'いろ','eng':'color','lvl':'11'},{'word':'ぎゅうどん','reading':'ぎゅうどん','eng':'beef bowl','lvl':'11'},{'word':'うどん','reading':'','eng':'udon noodles','lvl':'11'},{'word':'ずっと','reading':'','eng':'all along, the whole time','lvl':'11'},{'word':'くうき','reading':'くうき','eng':'air','lvl':'11'},{'word':'美容院','reading':'びよういん','eng':'beauty salon, hair salon','lvl':'11'},{'word':'すもう','reading':'すもう','eng':'sumo wrestling','lvl':'11'},{'word':'さとう','reading':'さとう','eng':'sugar','lvl':'11'},{'word':'はじめ','reading':'はじめ','eng':'beginning, first time','lvl':'11'},{'word':'さいきん','reading':'さいきん','eng':'recently, lately','lvl':'11'},{'word':'町','reading':'まち','eng':'town, city, street','lvl':'11'},{'word':'すきやき','reading':'','eng':'sukiyaki','lvl':'11'},{'word':'やきゅう','reading':'やきゅう','eng':'baseball','lvl':'11'},{'word':'スカート','reading':'','eng':'skirt','lvl':'11'},{'word':'ズボン','reading':'','eng':'trousers, pants','lvl':'11'},{'word':'ふどうさんや','reading':'ふどうさんや','eng':'real estate agency','lvl':'11'},{'word':'二日よい','reading':'ふつかよい','eng':'hangover','lvl':'11'},{'word':'ちょうど','reading':'','eng':'exactly','lvl':'11'},{'word':'字','reading':'じ','eng':'character, handwriting','lvl':'11'},{'word':'説明','reading':'せつめい','eng':'explanation','lvl':'11'},{'word':'ファイル','reading':'','eng':'file','lvl':'11'},{'word':'プリントアウト','reading':'','eng':'printout','lvl':'11'},{'word':'デジカメ','reading':'','eng':'digital camera','lvl':'11'},{'word':'マニュアル','reading':'','eng':'manual','lvl':'11'},{'word':'セットアップ','reading':'','eng':'setup','lvl':'11'},{'word':'くつや','reading':'くつや','eng':'shoe store','lvl':'11'},{'word':'いくら','reading':'','eng':'how much','lvl':'11'},{'word':'席','reading':'せき','eng':'seat','lvl':'11'},{'word':'カラオケ','reading':'','eng':'karaoke','lvl':'11'},{'word':'かぶき','reading':'かぶき','eng':'kabuki','lvl':'11'},{'word':'おかし','reading':'おかし','eng':'snacks, sweets','lvl':'12'},{'word':'しばふ','reading':'しばふ','eng':'lawn, grass','lvl':'12'},{'word':'ダイエット','reading':'','eng':'diet','lvl':'12'},{'word':'でんわだい','reading':'でんわだい','eng':'phone bill','lvl':'12'},{'word':'じゅぎょうちゅう','reading':'じゅぎょうちゅう','eng':'during class','lvl':'12'},{'word':'さくぶん','reading':'さくぶん','eng':'essay, composition','lvl':'12'},{'word':'キッチン','reading':'','eng':'kitchen','lvl':'12'},{'word':'さっき','reading':'','eng':'a little while ago','lvl':'12'},{'word':'じっと','reading':'','eng':'still, motionless','lvl':'12'},{'word':'はじめて','reading':'はじめて','eng':'for the first time','lvl':'12'},{'word':'たいふう','reading':'たいふう','eng':'typhoon','lvl':'12'},{'word':'美人','reading':'びじん','eng':'beautiful woman','lvl':'12'},{'word':'金持ち','reading':'かねもち','eng':'rich person','lvl':'12'},{'word':'しょうゆ','reading':'','eng':'soy sauce','lvl':'12'},{'word':'ヘルシー','reading':'','eng':'healthy','lvl':'12'},{'word':'さっかーせんしゅ','reading':'さっかーせんしゅ','eng':'soccer player','lvl':'12'},{'word':'せっけん','reading':'せっけん','eng':'soap','lvl':'12'},{'word':'じかんどおり','reading':'じかんどおり','eng':'on time','lvl':'12'},{'word':'人気','reading':'にんき','eng':'popularity','lvl':'12'},{'word':'からだ','reading':'からだ','eng':'body','lvl':'12'},{'word':'しなもの','reading':'しなもの','eng':'goods, items','lvl':'12'},{'word':'しぜん','reading':'しぜん','eng':'nature','lvl':'12'},{'word':'一日中','reading':'いちにちじゅう','eng':'all day long','lvl':'12'},{'word':'ざんぎょう','reading':'ざんぎょう','eng':'overtime work','lvl':'12'},{'word':'せいかつ','reading':'せいかつ','eng':'daily life, lifestyle','lvl':'12'},{'word':'ぶんぽう','reading':'ぶんぽう','eng':'grammar','lvl':'12'},{'word':'ストーリー','reading':'','eng':'story','lvl':'12'},{'word':'でんしゃだい','reading':'でんしゃだい','eng':'train fare','lvl':'12'},{'word':'かた','reading':'かた','eng':'person (polite), way of doing','lvl':'12'},{'word':'外国','reading':'がいこく','eng':'foreign country','lvl':'12'},{'word':'おじいさん','reading':'','eng':'grandfather, old man','lvl':'12'},{'word':'きょうしつ','reading':'きょうしつ','eng':'classroom','lvl':'12'},{'word':'きゅうり','reading':'','eng':'cucumber','lvl':'12'},{'word':'ぶどう','reading':'','eng':'grapes','lvl':'12'},{'word':'〜について','reading':'','eng':'about ~, regarding ~','lvl':'12'},{'word':'ちょっと','reading':'','eng':'a little; just a moment','lvl':'12'}],
  kanji:  [{'kanji':'一','reading':'いち','meaning':'one','mode':'write','kl':'KL1'},{'kanji':'九','reading':'きゅう','meaning':'nine','mode':'write','kl':'KL1'},{'kanji':'一つ','reading':'ひとつ','meaning':'one (counter)','mode':'write','kl':'KL1'},{'kanji':'九つ','reading':'ここのつ','meaning':'nine (counter)','mode':'write','kl':'KL1'},{'kanji':'一月','reading':'いちがつ','meaning':'January','mode':'write','kl':'KL1'},{'kanji':'九月','reading':'くがつ','meaning':'September','mode':'read','kl':'KL1'},{'kanji':'二','reading':'に','meaning':'two','mode':'write','kl':'KL1'},{'kanji':'十','reading':'じゅう','meaning':'ten','mode':'write','kl':'KL1'},{'kanji':'二つ','reading':'ふたつ','meaning':'two (counter)','mode':'write','kl':'KL1'},{'kanji':'十月','reading':'じゅうがつ','meaning':'October','mode':'read','kl':'KL1'},{'kanji':'二月','reading':'にがつ','meaning':'February','mode':'read','kl':'KL1'},{'kanji':'十一月','reading':'じゅういちがつ','meaning':'November','mode':'read','kl':'KL1'},{'kanji':'三','reading':'さん','meaning':'three','mode':'write','kl':'KL1'},{'kanji':'十二月','reading':'じゅうにがつ','meaning':'December','mode':'read','kl':'KL1'},{'kanji':'三つ','reading':'みっつ','meaning':'three (counter)','mode':'write','kl':'KL1'},{'kanji':'百','reading':'ひゃく','meaning':'hundred','mode':'write','kl':'KL1'},{'kanji':'三月','reading':'さんがつ','meaning':'March','mode':'read','kl':'KL1'},{'kanji':'二百','reading':'にひゃく','meaning':'200','mode':'write','kl':'KL1'},{'kanji':'四','reading':'よん','meaning':'four','mode':'write','kl':'KL1'},{'kanji':'三百','reading':'さんびゃく','meaning':'300','mode':'write','kl':'KL1'},{'kanji':'四つ','reading':'よっつ','meaning':'four (counter)','mode':'write','kl':'KL1'},{'kanji':'六百','reading':'ろっぴゃく','meaning':'600','mode':'write','kl':'KL1'},{'kanji':'四月','reading':'しがつ','meaning':'April','mode':'read','kl':'KL1'},{'kanji':'八百','reading':'はっぴゃく','meaning':'800','mode':'write','kl':'KL1'},{'kanji':'五','reading':'ご','meaning':'five','mode':'write','kl':'KL1'},{'kanji':'千','reading':'せん','meaning':'thousand','mode':'write','kl':'KL1'},{'kanji':'五つ','reading':'いつつ','meaning':'five (counter)','mode':'write','kl':'KL1'},{'kanji':'二千','reading':'にせん','meaning':'2000','mode':'write','kl':'KL1'},{'kanji':'五月','reading':'ごがつ','meaning':'May','mode':'read','kl':'KL1'},{'kanji':'三千','reading':'さんぜん','meaning':'3000','mode':'write','kl':'KL1'},{'kanji':'六','reading':'ろく','meaning':'six','mode':'write','kl':'KL1'},{'kanji':'八千','reading':'はっせん','meaning':'8000','mode':'write','kl':'KL1'},{'kanji':'六つ','reading':'むっつ','meaning':'six (counter)','mode':'write','kl':'KL1'},{'kanji':'千円','reading':'せんえん','meaning':'1000 yen','mode':'write','kl':'KL1'},{'kanji':'一万','reading':'いちまん','meaning':'10,000','mode':'write','kl':'KL1'},{'kanji':'六月','reading':'ろくがつ','meaning':'June','mode':'read','kl':'KL1'},{'kanji':'百万','reading':'ひゃくまん','meaning':'one million','mode':'write','kl':'KL1'},{'kanji':'七','reading':'なな','meaning':'seven','mode':'write','kl':'KL1'},{'kanji':'百円','reading':'ひゃくえん','meaning':'100 yen','mode':'write','kl':'KL1'},{'kanji':'七つ','reading':'ななつ','meaning':'seven (counter)','mode':'write','kl':'KL1'},{'kanji':'口','reading':'くち','meaning':'mouth','mode':'write','kl':'KL1'},{'kanji':'七月','reading':'しちがつ','meaning':'July','mode':'read','kl':'KL1'},{'kanji':'入口','reading':'いりぐち','meaning':'entrance','mode':'read','kl':'KL1'},{'kanji':'八','reading':'はち','meaning':'eight','mode':'write','kl':'KL1'},{'kanji':'出口','reading':'でぐち','meaning':'exit','mode':'read','kl':'KL1'},{'kanji':'八つ','reading':'やっつ','meaning':'eight (counter)','mode':'write','kl':'KL1'},{'kanji':'目','reading':'め','meaning':'eye','mode':'write','kl':'KL1'},{'kanji':'八月','reading':'はちがつ','meaning':'August','mode':'read','kl':'KL1'},{'kanji':'一日','reading':'ついたち','meaning':'1st (of month)','mode':'write','kl':'KL2'},{'kanji':'本','reading':'ほん','meaning':'book, origin','mode':'write','kl':'KL2'},{'kanji':'二日','reading':'ふつか','meaning':'2nd','mode':'write','kl':'KL2'},{'kanji':'日本','reading':'にほん','meaning':'Japan','mode':'write','kl':'KL2'},{'kanji':'日曜日','reading':'にちようび','meaning':'Sunday','mode':'write','kl':'KL2'},{'kanji':'一本','reading':'いっぽん','meaning':'1 (long thing)','mode':'write','kl':'KL2'},{'kanji':'二本','reading':'にほん','meaning':'2','mode':'write','kl':'KL2'},{'kanji':'今日','reading':'きょう','meaning':'today','mode':'write','kl':'KL2'},{'kanji':'三本','reading':'さんぼん','meaning':'3','mode':'write','kl':'KL2'},{'kanji':'三日','reading':'みっか','meaning':'3rd','mode':'read','kl':'KL2'},{'kanji':'山本さん','reading':'やまもとさん','meaning':'Yamamoto (name)','mode':'read','kl':'KL2'},{'kanji':'人','reading':'ひと','meaning':'person','mode':'write','kl':'KL2'},{'kanji':'月曜日','reading':'げつようび','meaning':'Monday','mode':'write','kl':'KL2'},{'kanji':'日本人','reading':'にほんじん','meaning':'Japanese person','mode':'write','kl':'KL2'},{'kanji':'今月','reading':'こんげつ','meaning':'this month','mode':'write','kl':'KL2'},{'kanji':'一人','reading':'ひとり','meaning':'one person, alone','mode':'write','kl':'KL2'},{'kanji':'月','reading':'つき','meaning':'moon, month','mode':'write','kl':'KL2'},{'kanji':'二人','reading':'ふたり','meaning':'two people','mode':'write','kl':'KL2'},{'kanji':'一か月','reading':'いっかげつ','meaning':'one month','mode':'read','kl':'KL2'},{'kanji':'三人','reading':'さんにん','meaning':'three people','mode':'write','kl':'KL2'},{'kanji':'火曜日','reading':'かようび','meaning':'Tuesday','mode':'write','kl':'KL2'},{'kanji':'大人','reading':'おとな','meaning':'adult','mode':'read','kl':'KL2'},{'kanji':'火','reading':'ひ','meaning':'fire, Tuesday','mode':'write','kl':'KL2'},{'kanji':'今','reading':'いま','meaning':'now','mode':'write','kl':'KL2'},{'kanji':'水曜日','reading':'すいようび','meaning':'Wednesday','mode':'write','kl':'KL2'},{'kanji':'水','reading':'みず','meaning':'water, Wednesday','mode':'write','kl':'KL2'},{'kanji':'木曜日','reading':'もくようび','meaning':'Thursday','mode':'write','kl':'KL2'},{'kanji':'（お）寺','reading':'おてら','meaning':'temple','mode':'write','kl':'KL2'},{'kanji':'木','reading':'き','meaning':'tree','mode':'write','kl':'KL2'},{'kanji':'金曜日','reading':'きんようび','meaning':'Friday','mode':'write','kl':'KL2'},{'kanji':'時々','reading':'ときどき','meaning':'sometimes','mode':'read','kl':'KL2'},{'kanji':'お金','reading':'おかね','meaning':'money','mode':'write','kl':'KL2'},{'kanji':'三時半','reading':'さんじはん','meaning':'3:30','mode':'write','kl':'KL2'},{'kanji':'土曜日','reading':'どようび','meaning':'Saturday','mode':'write','kl':'KL2'},{'kanji':'半分','reading':'はんぶん','meaning':'half','mode':'write','kl':'KL2'},{'kanji':'土','reading':'つち','meaning':'earth, Saturday','mode':'read','kl':'KL2'},{'kanji':'刀','reading':'かたな','meaning':'sword, katana','mode':'read','kl':'KL2'},{'kanji':'曜日','reading':'ようび','meaning':'day of week','mode':'write','kl':'KL2'},{'kanji':'五分','reading':'ごふん','meaning':'5 minutes','mode':'write','kl':'KL2'},{'kanji':'十分','reading':'じゅっぷん','meaning':'10 minutes','mode':'write','kl':'KL2'},{'kanji':'分かる','reading':'わかる','meaning':'to understand','mode':'write','kl':'KL2'},{'kanji':'上','reading':'うえ','meaning':'above, up','mode':'write','kl':'KL3'},{'kanji':'後ろ','reading':'うしろ','meaning':'behind, back','mode':'write','kl':'KL3'},{'kanji':'上げる','reading':'あげる','meaning':'to raise, to give','mode':'write','kl':'KL3'},{'kanji':'クラスの後','reading':'あと','meaning':'after class','mode':'write','kl':'KL3'},{'kanji':'下','reading':'した','meaning':'below, down','mode':'write','kl':'KL3'},{'kanji':'後で','reading':'あとで','meaning':'later','mode':'write','kl':'KL3'},{'kanji':'下げる','reading':'さげる','meaning':'to lower','mode':'write','kl':'KL3'},{'kanji':'午後','reading':'ごご','meaning':'PM, afternoon','mode':'write','kl':'KL3'},{'kanji':'下さい','reading':'ください','meaning':'please give me','mode':'read','kl':'KL3'},{'kanji':'午前','reading':'ごぜん','meaning':'AM, morning','mode':'write','kl':'KL3'},{'kanji':'上下','reading':'じょうげ','meaning':'up and down','mode':'read','kl':'KL3'},{'kanji':'午前中','reading':'ごぜんちゅう','meaning':'during the morning','mode':'write','kl':'KL3'},{'kanji':'中','reading':'なか','meaning':'inside, middle','mode':'write','kl':'KL3'},{'kanji':'門','reading':'もん','meaning':'gate','mode':'write','kl':'KL3'},{'kanji':'中国','reading':'ちゅうごく','meaning':'China','mode':'write','kl':'KL3'},{'kanji':'間','reading':'あいだ','meaning':'between, space','mode':'write','kl':'KL3'},{'kanji':'一年中','reading':'いちねんじゅう','meaning':'all year long','mode':'read','kl':'KL3'},{'kanji':'時間','reading':'じかん','meaning':'hours','mode':'write','kl':'KL3'},{'kanji':'一日中','reading':'いちにちじゅう','meaning':'all day long','mode':'read','kl':'KL3'},{'kanji':'二時間','reading':'にじかん','meaning':'two hours','mode':'write','kl':'KL3'},{'kanji':'外','reading':'そと','meaning':'outside','mode':'write','kl':'KL3'},{'kanji':'東','reading':'ひがし','meaning':'east','mode':'write','kl':'KL3'},{'kanji':'外国','reading':'がいこく','meaning':'foreign country','mode':'write','kl':'KL3'},{'kanji':'東口','reading':'ひがしぐち','meaning':'east exit','mode':'write','kl':'KL3'},{'kanji':'外国人','reading':'がいこくじん','meaning':'foreigner','mode':'read','kl':'KL3'},{'kanji':'東京','reading':'とうきょう','meaning':'Tokyo','mode':'read','kl':'KL3'},{'kanji':'右','reading':'みぎ','meaning':'right','mode':'write','kl':'KL3'},{'kanji':'西','reading':'にし','meaning':'west','mode':'write','kl':'KL3'},{'kanji':'右側','reading':'みぎがわ','meaning':'right side','mode':'read','kl':'KL3'},{'kanji':'西口','reading':'にしぐち','meaning':'west exit','mode':'write','kl':'KL3'},{'kanji':'左右','reading':'さゆう','meaning':'left and right','mode':'read','kl':'KL3'},{'kanji':'南','reading':'みなみ','meaning':'south','mode':'write','kl':'KL3'},{'kanji':'工事中','reading':'こうじちゅう','meaning':'under construction','mode':'read','kl':'KL3'},{'kanji':'南口','reading':'みなみぐち','meaning':'south exit','mode':'write','kl':'KL3'},{'kanji':'左','reading':'ひだり','meaning':'left','mode':'write','kl':'KL3'},{'kanji':'東南アジア','reading':'とうなんアジア','meaning':'Southeast Asia','mode':'write','kl':'KL3'},{'kanji':'左側','reading':'ひだりがわ','meaning':'left side','mode':'read','kl':'KL3'},{'kanji':'北','reading':'きた','meaning':'north','mode':'write','kl':'KL3'},{'kanji':'前','reading':'まえ','meaning':'front, before','mode':'write','kl':'KL3'},{'kanji':'北口','reading':'きたぐち','meaning':'north exit','mode':'write','kl':'KL3'},{'kanji':'名前','reading':'なまえ','meaning':'name','mode':'write','kl':'KL3'},{'kanji':'田中さん','reading':'たなかさん','meaning':'Tanaka (name)','mode':'write','kl':'KL4'},{'kanji':'何','reading':'なに','meaning':'what','mode':'write','kl':'KL4'},{'kanji':'山田さん','reading':'やまださん','meaning':'Yamada (name)','mode':'read','kl':'KL4'},{'kanji':'何か','reading':'なにか','meaning':'something','mode':'write','kl':'KL4'},{'kanji':'力','reading':'ちから','meaning':'power, strength','mode':'write','kl':'KL4'},{'kanji':'何人','reading':'なんにん','meaning':'how many people','mode':'write','kl':'KL4'},{'kanji':'協力する','reading':'きょうりょくする','meaning':'to cooperate','mode':'read','kl':'KL4'},{'kanji':'何時','reading':'なんじ','meaning':'what time','mode':'write','kl':'KL4'},{'kanji':'男の子','reading':'おとこのこ','meaning':'boy','mode':'write','kl':'KL4'},{'kanji':'父','reading':'ちち','meaning':'(my) father','mode':'write','kl':'KL4'},{'kanji':'男の人','reading':'おとこのひと','meaning':'man','mode':'write','kl':'KL4'},{'kanji':'お父さん','reading':'おとうさん','meaning':'father','mode':'write','kl':'KL4'},{'kanji':'男性','reading':'だんせい','meaning':'male','mode':'read','kl':'KL4'},{'kanji':'母','reading':'はは','meaning':'(my) mother','mode':'write','kl':'KL4'},{'kanji':'女の子','reading':'おんなのこ','meaning':'girl','mode':'write','kl':'KL4'},{'kanji':'女の人','reading':'おんなのひと','meaning':'woman','mode':'write','kl':'KL4'},{'kanji':'一年','reading':'いちねん','meaning':'one year','mode':'write','kl':'KL4'},{'kanji':'女性','reading':'じょせい','meaning':'female','mode':'read','kl':'KL4'},{'kanji':'今年','reading':'ことし','meaning':'this year','mode':'write','kl':'KL4'},{'kanji':'子供','reading':'こども','meaning':'child','mode':'read','kl':'KL4'},{'kanji':'年','reading':'とし','meaning':'year','mode':'write','kl':'KL4'},{'kanji':'学生','reading':'がくせい','meaning':'student','mode':'write','kl':'KL4'},{'kanji':'去年','reading':'きょねん','meaning':'last year','mode':'write','kl':'KL4'},{'kanji':'大学','reading':'だいがく','meaning':'university','mode':'read','kl':'KL4'},{'kanji':'毎日','reading':'まいにち','meaning':'every day','mode':'write','kl':'KL4'},{'kanji':'学校','reading':'がっこう','meaning':'school','mode':'write','kl':'KL4'},{'kanji':'毎月','reading':'まいつき','meaning':'every month','mode':'write','kl':'KL4'},{'kanji':'先生','reading':'せんせい','meaning':'teacher','mode':'write','kl':'KL4'},{'kanji':'毎年','reading':'まいとし','meaning':'every year','mode':'write','kl':'KL4'},{'kanji':'生まれる','reading':'うまれる','meaning':'to be born','mode':'write','kl':'KL4'},{'kanji':'国王','reading':'こくおう','meaning':'king','mode':'read','kl':'KL4'},{'kanji':'生きる','reading':'いきる','meaning':'to live','mode':'write','kl':'KL4'},{'kanji':'国','reading':'くに','meaning':'country, nation','mode':'write','kl':'KL4'},{'kanji':'誕生日','reading':'たんじょうび','meaning':'birthday','mode':'read','kl':'KL4'},{'kanji':'先月','reading':'せんげつ','meaning':'last month','mode':'write','kl':'KL4'},{'kanji':'先に','reading':'さきに','meaning':'ahead, first','mode':'read','kl':'KL4'},{'kanji':'国籍','reading':'こくせき','meaning':'nationality','mode':'read','kl':'KL4'},{'kanji':'見る','reading':'みる','meaning':'to see','mode':'write','kl':'KL5'},{'kanji':'耳','reading':'みみ','meaning':'ear','mode':'write','kl':'KL5'},{'kanji':'見せる','reading':'みせる','meaning':'to show','mode':'write','kl':'KL5'},{'kanji':'聞く','reading':'きく','meaning':'to listen, hear','mode':'write','kl':'KL5'},{'kanji':'行く','reading':'いく','meaning':'to go','mode':'write','kl':'KL5'},{'kanji':'新聞','reading':'しんぶん','meaning':'newspaper','mode':'write','kl':'KL5'},{'kanji':'銀行','reading':'ぎんこう','meaning':'bank','mode':'write','kl':'KL5'},{'kanji':'言う','reading':'いう','meaning':'to say','mode':'write','kl':'KL5'},{'kanji':'旅行','reading':'りょこう','meaning':'travel','mode':'read','kl':'KL5'},{'kanji':'話す','reading':'はなす','meaning':'to speak','mode':'write','kl':'KL5'},{'kanji':'お米','reading':'おこめ','meaning':'rice (uncooked)','mode':'write','kl':'KL5'},{'kanji':'話','reading':'はなし','meaning':'story, talk','mode':'write','kl':'KL5'},{'kanji':'欧米','reading':'おうべい','meaning':'Europe and America','mode':'read','kl':'KL5'},{'kanji':'電話','reading':'でんわ','meaning':'telephone','mode':'write','kl':'KL5'},{'kanji':'来る','reading':'くる','meaning':'to come','mode':'write','kl':'KL5'},{'kanji':'話し合う','reading':'はなしあう','meaning':'to discuss','mode':'read','kl':'KL5'},{'kanji':'来ます','reading':'きます','meaning':'to wear (clothes)','mode':'write','kl':'KL5'},{'kanji':'立つ','reading':'たつ','meaning':'to stand','mode':'write','kl':'KL5'},{'kanji':'来ない','reading':'こない','meaning':'does not come','mode':'write','kl':'KL5'},{'kanji':'国立大学','reading':'こくりつだいがく','meaning':'national university','mode':'read','kl':'KL5'},{'kanji':'来年','reading':'らいねん','meaning':'next year','mode':'write','kl':'KL5'},{'kanji':'待つ','reading':'まつ','meaning':'to wait','mode':'write','kl':'KL5'},{'kanji':'来週','reading':'らいしゅう','meaning':'next week','mode':'write','kl':'KL5'},{'kanji':'待ち合わせ','reading':'まちあわせ','meaning':'meeting up','mode':'read','kl':'KL5'},{'kanji':'良い','reading':'よい','meaning':'good','mode':'read','kl':'KL5'},{'kanji':'周り','reading':'まわり','meaning':'surroundings','mode':'read','kl':'KL5'},{'kanji':'食べる','reading':'たべる','meaning':'to eat','mode':'write','kl':'KL5'},{'kanji':'一周','reading':'いっしゅう','meaning':'1 lap','mode':'read','kl':'KL5'},{'kanji':'食べ物','reading':'たべもの','meaning':'food','mode':'read','kl':'KL5'},{'kanji':'今週','reading':'こんしゅう','meaning':'this week','mode':'write','kl':'KL5'},{'kanji':'食事','reading':'しょくじ','meaning':'meal','mode':'read','kl':'KL5'},{'kanji':'先週','reading':'せんしゅう','meaning':'last week','mode':'write','kl':'KL5'},{'kanji':'飲む','reading':'のむ','meaning':'to drink','mode':'write','kl':'KL5'},{'kanji':'毎週','reading':'まいしゅう','meaning':'every week','mode':'write','kl':'KL5'},{'kanji':'飲み物','reading':'のみもの','meaning':'drink, beverage','mode':'read','kl':'KL5'},{'kanji':'一週間','reading':'いっしゅうかん','meaning':'one week','mode':'write','kl':'KL5'},{'kanji':'飲食店','reading':'いんしょくてん','meaning':'restaurant, eatery','mode':'read','kl':'KL5'},{'kanji':'週末','reading':'しゅうまつ','meaning':'weekend','mode':'read','kl':'KL5'},{'kanji':'会う','reading':'あう','meaning':'to meet','mode':'write','kl':'KL5'},{'kanji':'会話','reading':'かいわ','meaning':'conversation','mode':'write','kl':'KL5'},{'kanji':'会社','reading':'かいしゃ','meaning':'company','mode':'write','kl':'KL5'},{'kanji':'大きい','reading':'おおきい','meaning':'big','mode':'write','kl':'KL6'},{'kanji':'多い','reading':'おおい','meaning':'many','mode':'write','kl':'KL6'},{'kanji':'大学生','reading':'だいがくせい','meaning':'university student','mode':'write','kl':'KL6'},{'kanji':'少し','reading':'すこし','meaning':'a little','mode':'write','kl':'KL6'},{'kanji':'大好きな','reading':'だいすきな','meaning':'like very much','mode':'write','kl':'KL6'},{'kanji':'少ない','reading':'すくない','meaning':'few','mode':'write','kl':'KL6'},{'kanji':'大切な','reading':'たいせつな','meaning':'important','mode':'read','kl':'KL6'},{'kanji':'少々','reading':'しょうしょう','meaning':'a little (formal)','mode':'read','kl':'KL6'},{'kanji':'小さい','reading':'ちいさい','meaning':'small','mode':'write','kl':'KL6'},{'kanji':'広い','reading':'ひろい','meaning':'wide','mode':'write','kl':'KL6'},{'kanji':'小学校','reading':'しょうがっこう','meaning':'elementary school','mode':'read','kl':'KL6'},{'kanji':'早い','reading':'はやい','meaning':'fast, early','mode':'write','kl':'KL6'},{'kanji':'高い','reading':'たかい','meaning':'tall, expensive','mode':'write','kl':'KL6'},{'kanji':'早く','reading':'はやく','meaning':'quickly, early','mode':'write','kl':'KL6'},{'kanji':'高校','reading':'こうこう','meaning':'high school','mode':'read','kl':'KL6'},{'kanji':'長い','reading':'ながい','meaning':'long','mode':'write','kl':'KL6'},{'kanji':'円高','reading':'えんだか','meaning':'strong yen','mode':'read','kl':'KL6'},{'kanji':'社長','reading':'しゃちょう','meaning':'company president','mode':'write','kl':'KL6'},{'kanji':'安い','reading':'やすい','meaning':'cheap','mode':'write','kl':'KL6'},{'kanji':'明るい','reading':'あかるい','meaning':'bright','mode':'write','kl':'KL6'},{'kanji':'安全','reading':'あんぜん','meaning':'safe, safety','mode':'read','kl':'KL6'},{'kanji':'明日','reading':'あした','meaning':'tomorrow','mode':'write','kl':'KL6'},{'kanji':'円安','reading':'えんやす','meaning':'weak yen','mode':'read','kl':'KL6'},{'kanji':'説明','reading':'せつめい','meaning':'explanation','mode':'read','kl':'KL6'},{'kanji':'新しい','reading':'あたらしい','meaning':'new','mode':'write','kl':'KL6'},{'kanji':'好きな','reading':'すきな','meaning':'liked','mode':'write','kl':'KL6'},{'kanji':'古い','reading':'ふるい','meaning':'old','mode':'write','kl':'KL6'},{'kanji':'友だち','reading':'ともだち','meaning':'friend','mode':'write','kl':'KL6'},{'kanji':'中古','reading':'ちゅうこ','meaning':'second-hand','mode':'read','kl':'KL6'},{'kanji':'友人','reading':'ゆうじん','meaning':'friend (formal)','mode':'read','kl':'KL6'},{'kanji':'元気な','reading':'げんきな','meaning':'healthy, energetic','mode':'write','kl':'KL6'},{'kanji':'親友','reading':'しんゆう','meaning':'close friend','mode':'read','kl':'KL6'},{'kanji':'気をつける','reading':'きをつける','meaning':'to be careful','mode':'write','kl':'KL6'},{'kanji':'天気','reading':'てんき','meaning':'weather','mode':'read','kl':'KL6'},{'kanji':'電気','reading':'でんき','meaning':'electricity, light','mode':'write','kl':'KL6'},{'kanji':'気持ち','reading':'きもち','meaning':'feeling','mode':'write','kl':'KL6'},{'kanji':'人気','reading':'にんき','meaning':'popularity','mode':'read','kl':'KL6'},{'kanji':'入る','reading':'はいる','meaning':'to enter','mode':'write','kl':'KL7'},{'kanji':'馬','reading':'うま','meaning':'horse','mode':'write','kl':'KL7'},{'kanji':'入れる','reading':'いれる','meaning':'to put in','mode':'write','kl':'KL7'},{'kanji':'駅','reading':'えき','meaning':'station','mode':'write','kl':'KL7'},{'kanji':'入学する','reading':'にゅうがくする','meaning':'to enrol','mode':'write','kl':'KL7'},{'kanji':'駅員','reading':'えきいん','meaning':'station staff','mode':'read','kl':'KL7'},{'kanji':'出る','reading':'でる','meaning':'to leave','mode':'write','kl':'KL7'},{'kanji':'出かける','reading':'でかける','meaning':'to go out','mode':'write','kl':'KL7'},{'kanji':'社会','reading':'しゃかい','meaning':'society','mode':'write','kl':'KL7'},{'kanji':'出す','reading':'だす','meaning':'to take out','mode':'write','kl':'KL7'},{'kanji':'出席する','reading':'しゅっせきする','meaning':'to attend','mode':'read','kl':'KL7'},{'kanji':'つくば市','reading':'つくばし','meaning':'Tsukuba City','mode':'write','kl':'KL7'},{'kanji':'校長','reading':'こうちょう','meaning':'school principal','mode':'write','kl':'KL7'},{'kanji':'市役所','reading':'しやくしょ','meaning':'city hall','mode':'read','kl':'KL7'},{'kanji':'店','reading':'みせ','meaning':'shop, store','mode':'write','kl':'KL7'},{'kanji':'町','reading':'まち','meaning':'town','mode':'write','kl':'KL7'},{'kanji':'店員','reading':'てんいん','meaning':'shop staff','mode':'read','kl':'KL7'},{'kanji':'田町','reading':'たまち','meaning':'Tamachi','mode':'read','kl':'KL7'},{'kanji':'売店','reading':'ばいてん','meaning':'kiosk, stand','mode':'read','kl':'KL7'},{'kanji':'本町','reading':'ほんちょう','meaning':'Honcho','mode':'read','kl':'KL7'},{'kanji':'店長','reading':'てんちょう','meaning':'store manager','mode':'read','kl':'KL7'},{'kanji':'村','reading':'むら','meaning':'village','mode':'write','kl':'KL7'},{'kanji':'市町村','reading':'しちょうそん','meaning':'municipalities','mode':'read','kl':'KL7'},{'kanji':'病気','reading':'びょうき','meaning':'illness, disease','mode':'write','kl':'KL7'},{'kanji':'雨','reading':'あめ','meaning':'rain','mode':'write','kl':'KL7'},{'kanji':'病院','reading':'びょういん','meaning':'hospital','mode':'read','kl':'KL7'},{'kanji':'大雨','reading':'おおあめ','meaning':'heavy rain','mode':'read','kl':'KL7'},{'kanji':'入院する','reading':'にゅういんする','meaning':'to be hospitalised','mode':'write','kl':'KL7'},{'kanji':'大学院','reading':'だいがくいん','meaning':'graduate school','mode':'write','kl':'KL7'},{'kanji':'電車','reading':'でんしゃ','meaning':'train','mode':'write','kl':'KL7'},{'kanji':'退院する','reading':'たいいんする','meaning':'to be discharged (hospital)','mode':'read','kl':'KL7'},{'kanji':'美容院','reading':'びよういん','meaning':'beauty salon, hair salon','mode':'read','kl':'KL7'},{'kanji':'電力','reading':'でんりょく','meaning':'electricity, power','mode':'read','kl':'KL7'},{'kanji':'電池','reading':'でんち','meaning':'battery','mode':'read','kl':'KL7'},{'kanji':'電源','reading':'でんげん','meaning':'power source','mode':'read','kl':'KL7'},{'kanji':'車','reading':'くるま','meaning':'car','mode':'write','kl':'KL7'},{'kanji':'自転車','reading':'じてんしゃ','meaning':'bicycle','mode':'read','kl':'KL7'},{'kanji':'駐車場','reading':'ちゅうしゃじょう','meaning':'parking lot','mode':'read','kl':'KL7'},{'kanji':'休む','reading':'やすむ','meaning':'to rest','mode':'write','kl':'KL8'},{'kanji':'帰る','reading':'かえる','meaning':'to return','mode':'write','kl':'KL8'},{'kanji':'休み','reading':'やすみ','meaning':'rest, holiday','mode':'write','kl':'KL8'},{'kanji':'帰国','reading':'きこく','meaning':'return to country','mode':'read','kl':'KL8'},{'kanji':'休日','reading':'きゅうじつ','meaning':'holiday','mode':'read','kl':'KL8'},{'kanji':'日帰り旅行','reading':'ひがえりりょこう','meaning':'day trip','mode':'read','kl':'KL8'},{'kanji':'定休日','reading':'ていきゅうび','meaning':'regular holiday (closed day)','mode':'read','kl':'KL8'},{'kanji':'弓','reading':'ゆみ','meaning':'bow (archery)','mode':'write','kl':'KL8'},{'kanji':'走る','reading':'はしる','meaning':'to run','mode':'write','kl':'KL8'},{'kanji':'虫','reading':'むし','meaning':'insect, bug','mode':'write','kl':'KL8'},{'kanji':'起きる','reading':'おきる','meaning':'to wake up','mode':'write','kl':'KL8'},{'kanji':'強い','reading':'つよい','meaning':'strong','mode':'write','kl':'KL8'},{'kanji':'起こす','reading':'おこす','meaning':'to wake someone up','mode':'write','kl':'KL8'},{'kanji':'勉強する','reading':'べんきょうする','meaning':'to study','mode':'write','kl':'KL8'},{'kanji':'貝','reading':'かい','meaning':'shellfish','mode':'write','kl':'KL8'},{'kanji':'持つ','reading':'もつ','meaning':'to hold, have','mode':'write','kl':'KL8'},{'kanji':'買う','reading':'かう','meaning':'to buy','mode':'write','kl':'KL8'},{'kanji':'お金持ち','reading':'おかねもち','meaning':'rich person','mode':'write','kl':'KL8'},{'kanji':'買い物','reading':'かいもの','meaning':'shopping','mode':'read','kl':'KL8'},{'kanji':'売る','reading':'うる','meaning':'to sell','mode':'write','kl':'KL8'},{'kanji':'持ち物','reading':'もちもの','meaning':'belongings','mode':'read','kl':'KL8'},{'kanji':'売り切れる','reading':'うりきれる','meaning':'to sell out','mode':'read','kl':'KL8'},{'kanji':'売り場','reading':'うりば','meaning':'sales floor','mode':'read','kl':'KL8'},{'kanji':'有名な','reading':'ゆうめいな','meaning':'famous','mode':'read','kl':'KL8'},{'kanji':'氏名','reading':'しめい','meaning':'full name','mode':'read','kl':'KL8'},{'kanji':'読む','reading':'よむ','meaning':'to read','mode':'write','kl':'KL8'},{'kanji':'名字','reading':'みょうじ','meaning':'surname, family name','mode':'read','kl':'KL8'},{'kanji':'書く','reading':'かく','meaning':'to write','mode':'write','kl':'KL8'},{'kanji':'名詞','reading':'めいし','meaning':'noun','mode':'read','kl':'KL8'},{'kanji':'読書','reading':'どくしょ','meaning':'reading (books)','mode':'read','kl':'KL8'},{'kanji':'日本語','reading':'にほんご','meaning':'Japanese','mode':'write','kl':'KL8'},{'kanji':'図書館','reading':'としょかん','meaning':'library','mode':'read','kl':'KL8'},{'kanji':'中国語','reading':'ちゅうごくご','meaning':'Chinese','mode':'write','kl':'KL8'},{'kanji':'辞書','reading':'じしょ','meaning':'dictionary','mode':'read','kl':'KL8'},{'kanji':'英語','reading':'えいご','meaning':'English (language)','mode':'read','kl':'KL8'},{'kanji':'教科書','reading':'きょうかしょ','meaning':'textbook','mode':'read','kl':'KL8'},{'kanji':'外国語','reading':'がいこくご','meaning':'foreign language','mode':'read','kl':'KL8'}]
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
  {jp:'なんじ',reading:'なんじ',eng:'What time',cat:'Time',example:'なんじに おきますか。'},
  {jp:'なんようび',reading:'なんようび',eng:'What day of the week',cat:'Time',example:'なんようび ですか。'},
  {jp:'なんがつ',reading:'なんがつ',eng:'What month',cat:'Time',example:'なんがつ ですか。'},
  {jp:'なんにち',reading:'なんにち',eng:'What day of the month',cat:'Time',example:'なんにち ですか。'},
  {jp:'なんじかん',reading:'なんじかん',eng:'How many hours',cat:'Number',example:'なんじかん かかりますか。'},
  {jp:'なんにちかん',reading:'なんにちかん',eng:'How many days',cat:'Number',example:'なんにちかん かかりますか。'},
  {jp:'なんにん',reading:'なんにん',eng:'How many people',cat:'Number',example:'なんにん ですか。'},
  {jp:'どうしましたか',reading:'どうしましたか',eng:'What happened?',cat:'Conversational',example:'どうしましたか。'},
  {jp:'〜てもいいですか',reading:'〜てもいいですか',eng:'Asking for permission (May I ~?)',cat:'Permission',example:'写真を とってもいいですか。'},
  {jp:'〜ましょうか',reading:'〜ましょうか',eng:'Offering to do, Shall I?',cat:'Invitation',example:'かばんを 持ちましょうか。'},
];
const extraCounterMap = {
  '一':'numbers','二':'numbers','三':'numbers','四':'numbers','五':'numbers','六':'numbers',
  '七':'numbers','八':'numbers','九':'numbers','十':'numbers','百':'numbers','千':'numbers','万':'numbers',
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
  '一時間':'hours','二時間':'hours','三時間':'hours','時間':'hours',
  '一周':'laps','二周':'laps','三周':'laps','四周':'laps','五周':'laps',
  '六周':'laps','七周':'laps','八周':'laps','九周':'laps','十周':'laps',
  '一週間':'weeks','二週間':'weeks','先週':'weeks','今週':'weeks','来週':'weeks','毎週':'weeks',
  '一年':'years','二年':'years','三年':'years','今年':'years','来年':'years','去年':'years','毎年':'years',
  '一人':'people','二人':'people','三人':'people','四人':'people','五人':'people',
  '六人':'people','七人':'people','八人':'people','九人':'people','十人':'people',
  '一本':'long','二本':'long','三本':'long','四本':'long','五本':'long',
  '六本':'long','七本':'long','八本':'long','九本':'long','十本':'long',
  'まえ':'front_back','うしろ':'front_back','ひだり':'left_right','みぎ':'left_right',
  'いちれつめ':'rows','にれつめ':'rows','さんれつめ':'rows',
  'いちばんめ':'position','にばんめ':'position','さんばんめ':'position',
  '前':'position','後ろ':'position','右':'position','左':'position',
};
const sem = 'S1';
let currentTab = 'vocab';
const scrollPositions = {vocab:0,kanji:0,grammar:0,sheets:0};
let currentSearch = '';
let activeFilter = null;
let activeSubFilter = null;
let kanjiShowRead = true;
let kanjiShowWrite = true;

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
const counTypeMap = {};
(function(){
  for(const [key,cat] of Object.entries(countersData)){
    for(const item of cat.items){
      counTypeMap[item.jp] = {key,label:cat.label,icon:cat.icon};
    }
  }
})();

function hasKanji(str){return /[\u4e00-\u9faf\u3400-\u4dbf]/.test(str);}
function rubyHTML(word,reading,style){const rt=hasKanji(word)&&reading?'<rt>'+reading+'</rt>':'';const st=style?' style="'+style+'"':'';return '<ruby class="card-ruby notranslate" translate="no"'+st+'>'+word+rt+'</ruby>';}
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
  document.querySelectorAll('.s-btn').forEach(b=>b.classList.remove('active'));
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

  currentTab = tab;
  currentSearch = '';
  activeFilter = null; activeSubFilter = null;
  const _stb = document.getElementById('scroll-top-btn');
  if(_stb && tab === 'sheets') _stb.classList.remove('visible');
  document.getElementById('main-search').value = '';
  document.getElementById('search-clear').classList.remove('visible');

  function applyTab(){
    if(tab === 'home'){
      homeScreen.style.display = 'flex';
      content.style.display = 'none';
      if(transToggle) transToggle.classList.remove('tt-visible');
      if(stickySearch) stickySearch.classList.add('ss-hidden');
      document.getElementById('vocab-floats').classList.remove('ff-visible');
      document.getElementById('kanji-floats').classList.remove('ff-visible');
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
    setTimeout(()=>{ document.getElementById('vocab-floats').classList.toggle('ff-visible', tab==='vocab'); }, 80);
    setTimeout(()=>{ document.getElementById('kanji-floats').classList.toggle('ff-visible', tab==='kanji'); }, 80);
    document.querySelectorAll('.float-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.float-sub').forEach(s=>s.classList.remove('visible'));
    if(tab==='kanji'){
      document.getElementById('kflt-read').classList.add('active');
      document.getElementById('kflt-write').classList.add('active');
    }
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
    scrollPositions[prevTab] = document.getElementById('main').scrollTop;
    content.classList.add('page-exiting');
    setTimeout(applyTab, 120);
  } else if(prevTab !== 'home' && tab !== 'home'){
    // section → section: quick slide
    scrollPositions[prevTab] = document.getElementById('main').scrollTop;
    content.classList.add('page-exiting');
    setTimeout(applyTab, 120);
  } else {
    applyTab();
  }
}

function toggleFilter(pos, btn){
  if(activeFilter === pos){
    activeFilter = null; activeSubFilter = null;
    btn.classList.remove('active');
    document.querySelectorAll('.float-sub').forEach(s=>s.classList.remove('visible'));
    document.querySelectorAll('.float-btn[id^="flt-G"], .float-btn[id^="flt-i"], .float-btn[id^="flt-na"]').forEach(b=>b.classList.remove('active'));
  } else {
    activeFilter = pos; activeSubFilter = null;
    document.querySelectorAll('.float-btn').forEach(b=>{ if(!b.id.startsWith('kflt')) b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.float-sub').forEach(s=>s.classList.remove('visible'));
    document.querySelectorAll('.float-btn[id^="flt-G"], .float-btn[id^="flt-i"], .float-btn[id^="flt-na"]').forEach(b=>b.classList.remove('active'));
    if(pos==='Verb') setTimeout(()=>document.getElementById('sub-Verb').classList.add('visible'),60);
    if(pos==='Adj') setTimeout(()=>document.getElementById('sub-Adj').classList.add('visible'),60);
  }
  render();
}

function toggleSubFilter(sub, btn){
  if(activeSubFilter === sub){
    activeSubFilter = null;
    btn.classList.remove('active');
  } else {
    activeSubFilter = sub;
    document.querySelectorAll('#sub-Verb .float-btn, #sub-Adj .float-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }
  render();
}

function toggleKanjiMode(mode, btn){
  if(mode==='read') kanjiShowRead = !kanjiShowRead;
  else kanjiShowWrite = !kanjiShowWrite;
  btn.classList.toggle('active');
  renderKanji();
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

function toRomaji(str){
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

function matchesSearch(q, ...fields){
  if(!q) return true;
  for(const f of fields){
    if(!f) continue;
    const s=f.toLowerCase();
    if(s.includes(q)) return true;
    if(toRomaji(s).includes(q)) return true;
  }
  return false;
}


function clearSearch(){
  document.getElementById('main-search').value='';
  document.getElementById('search-clear').classList.remove('visible');
  document.getElementById('search-suggestions').classList.remove('visible');
  doSearch('');
}
function doSearch(val){
  currentSearch = val.trim().toLowerCase();
  const clr = document.getElementById('search-clear');
  if(clr) clr.classList.toggle('visible', currentSearch.length>0);
  updateSuggestions(val.trim());
  if(currentSearch) renderAll();
  else render();
}

// ── AUTOCOMPLETE ──
let _suggIndex = null;
let _suggActive = -1;
let _suggHits = [];

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
      _suggIndex.push({type:'vocab', jp:w.word, read:w.reading||'', en:w.def, badge:w.pos, pos:w.pos, exprKey:w.exprKey||'', searchForms:forms});
    }
  }

  // ── KANJI ──
  const kd = kanjiData[sem]||{};
  for(const lvl of Object.keys(kd)){
    for(const k of kd[lvl]){
      _suggIndex.push({type:'vocab', jp:k.kanji, read:k.reading||'', en:k.meaning, badge:'Kanji', pos:'', exprKey:'', searchForms:[k.kanji, k.reading||'', k.meaning||'']});
    }
  }

  // ── GRAMMAR RULES ──
  for(const sec of grammarSections){
    const isParticle = sec.title === 'じょし';
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

  const scoreItem = (item) => {
    for(const f of item.searchForms){
      if(!f) continue;
      const fl = f.toLowerCase();
      const fr = toRomaji(fl);
      if(fl === q || fr === q || fr === qr) return 3;
      if(fl.startsWith(q) || fr.startsWith(q) || fr.startsWith(qr)) return 2;
      if(fl.includes(q) || fr.includes(q) || fr.includes(qr)) return 1;
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

  const vocabHits = scored.filter(x=>x.item.type==='vocab').slice(0,6).map(x=>x.item);
  // For grammar: deduplicate by section - prefer card-level (has cardLabel) over section-level
  const gramScored = scored.filter(x=>x.item.type==='grammar');
  const seenSec = new Set();
  const gramHits = [];
  for(const {item} of gramScored){
    if(gramHits.length >= 3) break;
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
      // non-particle grammar: English meaning only
      innerHtml = `<span class="sugg-en" style="flex:1">${h.en}</span>`;
    } else if(isGram && h.jp){
      // particles: label contains Japanese, no separate sugg-en
      innerHtml = `<span class="sugg-jp notranslate" translate="no" style="flex:1">${h.jp}</span>`;
    } else {
      innerHtml = `<span class="sugg-jp notranslate" translate="no">${h.jp}</span><span class="sugg-en">${h.en}</span>`;
    }
    return `<div class="sugg-item${isGram?' sugg-gram':''}" data-jp="${jp}" data-read="${read}" data-en="${en}" data-pos="${pos}" data-ek="${ek}" data-sec="${secTitle}" data-card="${cardLabel}" data-type="${h.type}" onpointerdown="event.preventDefault();suggPick(this)">
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
                    card.scrollIntoView({behavior:'smooth', block:'nearest'});
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
      if(gramBtn) setTab('grammar', gramBtn);
      // applyTab runs at ~120ms (page-exiting delay), then render() is synchronous.
      // Wait 200ms to guarantee renderGrammar() has populated the DOM before navigating.
      setTimeout(doGramNav, 200);
    }
  } else {
    openConjPopup(el.dataset.jp, el.dataset.read, el.dataset.en, el.dataset.pos, el.dataset.ek);
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
  const items = box.querySelectorAll('.sugg-item');
  if(!items.length) return;
  if(e.key==='ArrowDown'){ e.preventDefault(); _suggActive=Math.min(_suggActive+1,items.length-1); items.forEach((el,i)=>el.classList.toggle('active',i===_suggActive)); }
  else if(e.key==='ArrowUp'){ e.preventDefault(); _suggActive=Math.max(_suggActive-1,0); items.forEach((el,i)=>el.classList.toggle('active',i===_suggActive)); }
  else if(e.key==='Enter' && _suggActive>=0){ e.preventDefault(); const el=box.querySelectorAll('.sugg-item')[_suggActive]; if(el) suggPick(el); }
  else if(e.key==='Escape'){ box.classList.remove('visible'); }
}

document.addEventListener('click', e=>{ if(!e.target.closest('.sticky-search')) document.getElementById('search-suggestions').classList.remove('visible'); });

function render(){
  if(currentTab==='vocab') renderVocab();
  else if(currentTab==='kanji') renderKanji();
  else if(currentTab==='grammar') renderGrammar();
  else if(currentTab==='sheets') renderSheets();
}

function renderVocab(){
  const vData = vocabData[sem]||{};
  const q = currentSearch;
  const el = document.getElementById('content');
  const levels = Object.keys(vData).sort((a,b)=>{ if(a==='Q') return 1; if(b==='Q') return -1; return parseInt(a.slice(1))-parseInt(b.slice(1)); });
  let html = '';

  for(const lvl of levels){
    const words = (vData[lvl]||[]).filter(w=>{
      // pos filter
      if(activeFilter && w.pos !== activeFilter) return false;
      if(activeSubFilter){
        if(w.pos==='Verb' && w.grp !== activeSubFilter) return false;
        if(w.pos==='Adj'){
          const at = adjType[w.word];
          if(activeSubFilter==='i' && at!=='i') return false;
          if(activeSubFilter==='na' && at!=='na') return false;
        }
      }
      // search
      if(!q) return true;
      return matchesSearch(q,w.word,w.reading,w.def);
    });
    if(!words.length) continue;
    html += `<div class="level-tag"><span>${lvl==="Q"?"Q: Expressions":lvl}</span><span class="lt-line"></span><span class="lt-count">${(vData[lvl]||[]).length} words</span></div>`;
    html += `<div class="vocab-grid">`;
    for(const w of words){
      const adjTag = w.pos==='Adj' ? `<span class="vc-adj-tag adj-${adjType[w.word]||'na'}">${adjType[w.word]==='i'?'い':'な'}</span>` : '';
      const grpTag = w.grp ? `<span class="vc-grp-tag grp-${w.grp}">${w.grp}</span>` : '';
      // counter type badge (strip "(counter)" from def)
      let def = w.def;
      let counBadge = '';
      if(w.pos==='Coun'){
        def = def.replace(/\s*\(counter\)\s*/gi,'').trim();
        const ct = counTypeMap[w.word];
        if(ct) counBadge = `<span class="vc-coun-tag" onclick="openCounterPopup('${ct.key}','${ct.label}',event)">${ct.icon} ${ct.label}</span>`;
      }
      // KL indicator
      const klIndicator = ''; // vocab uses L levels
      html += `<div class="vocab-card" onclick="openConjPopup('${w.word.replace(/'/g,"\\'")}','${(w.reading||'').replace(/'/g,"\\'")}','${def.replace(/'/g,"\\'")}','${w.pos}','${(w.exprKey||'').replace(/'/g,"\\'")}')">
        <div class="vc-left notranslate" translate="no">${rubyHTML(w.word,w.reading||"")}</div>
        <div class="vc-sep"></div>
        <div class="vc-right"><span class="vc-def">${def}${counBadge}</span></div>
        <div style="position:absolute;top:8px;right:8px;display:flex;gap:4px;align-items:center;">${adjTag}${grpTag}<span class="vc-badge pos-${w.pos}" style="position:static;">${w.pos}</span></div>
        <div class="vc-indicators"><span class="vc-lvl-tag">${lvl}</span></div>
      </div>`;
    }
    html += `</div>`;
  }
  el.innerHTML = html || `<div class="empty"><span class="empty-jp">語</span>No vocabulary found.</div>`;
}

function renderKanji(){
  const kData = kanjiData[sem]||{};
  const q = currentSearch;
  const el = document.getElementById('content');
  const levels = Object.keys(kData).sort((a,b)=>parseInt(a.slice(2))-parseInt(b.slice(2)));
  let html = '';

  for(const lvl of levels){
    const entries = (kData[lvl]||[]).filter(k=>{
      if(!kanjiShowRead && k.mode==='read') return false;
      if(!kanjiShowWrite && k.mode==='write') return false;
      if(!q) return true;
      return matchesSearch(q,k.kanji,k.reading,k.meaning);
    });
    if(!entries.length) continue;
    html += `<div class="level-tag"><span>${lvl}</span><span class="lt-line"></span><span class="lt-count">${(kData[lvl]||[]).length} entries</span></div>`;
    html += `<div class="kanji-grid">`;
    for(const k of entries){
      const mc = k.mode==='write'?'kanji-write':'kanji-read';
      html += `<div class="kanji-card ${mc}" onclick="openConjPopup('${k.kanji.replace(/'/g,"\\'")}','${(k.reading||'').replace(/'/g,"\\'")}','${(k.meaning||'').replace(/'/g,"\\'")}')">
        <div class="vc-left notranslate" translate="no">${rubyHTML(k.kanji,k.reading||"")}</div>
        <div class="vc-sep"></div>
        <div class="vc-right"><span class="vc-def">${k.meaning||''}</span></div>
        <div class="vc-indicators"><span class="vc-lvl-tag">${lvl}</span></div>
      </div>`;
    }
    html += `</div>`;
  }
  el.innerHTML = html || `<div class="empty"><span class="empty-jp">字</span>No kanji found.</div>`;
}


const _gramOpenSections = new Set();
function toggleGramSection(el){
  el.classList.toggle('open');
  el.nextElementSibling.classList.toggle('open');
  el.closest('.gram-section').classList.toggle('open');
  const t = el.querySelector('.gram-section-title');
  if(t){ const title=t.textContent.trim(); if(el.classList.contains('open')) _gramOpenSections.add(title); else _gramOpenSections.delete(title); }
}
function closeAllGram(){
  document.querySelectorAll('.gram-section-header.open').forEach(h=>{h.classList.remove('open');h.nextElementSibling.classList.remove('open');h.closest('.gram-section').classList.remove('open');});
  _gramOpenSections.clear();
}
const grammarSections=[
{title:'じょし',en:'Particles',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',cards:[
  {label:'は — Topic Marker',
   meaning:'Sets what you\'re talking about. Not always the subject — it contrasts or frames the sentence.',
   pattern:'[Topic] は …',
   rows:[{jp:'わたしは がくせいです。',en:'I am a student.'},{jp:'わたしは ラーメンを たべます。',en:'I eat ramen (as for me).'}],
   note:'Switch は→が to emphasise WHO does something. は can also show contrast: コーヒーは のみます (coffee I drink, but…)'},
  {label:'を — Direct Object',
   meaning:'Marks the thing being acted on. Always used with action verbs.',
   pattern:'[Object] を [Action Verb]',
   rows:[{jp:'りんごを たべます。',en:'I eat an apple.'},{jp:'おちゃを のみます。',en:'I drink tea.'}],
   note:'Cannot be used with state verbs (あります, います, すきです).'},
  {label:'に — Time / Place / Person',
   meaning:'に has several uses: (1) specific time, (2) entering/arriving at a place, (3) target person of an action.',
   pattern:'[Time] に [Verb]　／　[Place] に はいります　／　[Person] に [Verb]',
   rows:[{jp:'まいにち 7じに おきます。',en:'(1) Time — I wake up at 7 every day.'},{jp:'だいがくに はいります。',en:'(2) Enter — I enter the university.'},{jp:'せんせいに あいます。',en:'(3) Person — I meet the teacher.'}],
   note:'に is used with clock times, days, months. NOT with まいにち、あした、きのう. KEY: に = where something EXISTS (あります/います); use で for actions.'},
  {label:'で — Place of Action / Method',
   meaning:'で has two main uses: (1) marks WHERE an action happens, (2) marks the MEANS or TOOL used.',
   pattern:'[Place] で [Action]　／　[Means] で [Action]',
   rows:[{jp:'うちで しゅくだいを します。',en:'(1) Place — I do homework at home.'},{jp:'でんしゃで がっこうへ いきます。',en:'(2) Method — I go to school by train.'},{jp:'はしで たべます。',en:'(2) Tool — I eat with chopsticks.'}],
   note:'KEY DIFFERENCE: に = where something EXISTS. で = where an ACTION happens.'},
  {label:'へ — Direction',
   meaning:'Marks movement toward a destination. Focuses on the direction itself.',
   pattern:'[Place] へ いきます / きます / かえります',
   rows:[{jp:'がっこうへ いきます。',en:'I go to school.'},{jp:'にほんへ かえります。',en:'I return to Japan.'}],
   note:'へ and に are interchangeable for movement. へ cannot mark time or existence — only direction.'},
  {label:'と — With Someone',
   meaning:'Marks who you do something together with.',
   pattern:'[Person] と [Action]',
   rows:[{jp:'ワンさんと おさけを のみます。',en:'I drink sake with Wang-san.'},{jp:'ともだちと えいがを みます。',en:'I watch a film with my friend.'}]},
  {label:'より — Than (Comparison)',
   meaning:'Marks the thing being compared against. The thing after より is the "loser" of the comparison.',
   pattern:'[A] のほうが [B] より [Adj] です',
   rows:[{jp:'バスより でんしゃのほうが はやいです。',en:'The train is faster than the bus.'},{jp:'このみせのほうが あのみせより やすいです。',en:'This shop is cheaper than that shop.'}],
   note:'より by itself means "than". のほうが marks the winner. To ask: AとBとどちらが〜ですか。'},
  {label:'から / まで — From / Until',
   meaning:'から = starting point (time or place). まで = ending point. Often used as a pair.',
   pattern:'[Start] から [End] まで',
   rows:[{jp:'ごぜん8じはんから ごご1じまで です。',en:'From 8:30 AM until 1:00 PM.'},{jp:'えきから うちまで あるきます。',en:'I walk from the station to home.'}]},
  {label:'も — Also / Not Either',
   meaning:'Replaces は or が to add something to what was already said.',
   pattern:'[Noun] も …',
   rows:[{jp:'わたしも がくせいです。',en:'I am also a student.'},{jp:'だれも いません。',en:'There is nobody at all.'}],
   note:'も replaces は or が — never stack them. In negatives: だれも (nobody), なにも (nothing), どこにも (nowhere).'},
]},
{title:'ひかく',en:'Comparisons',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',cards:[
  {label:'〜のほうが〜より — A is more … than B',
   meaning:'Compares two things. のほうが marks the winner; より marks the loser.',
   pattern:'[A] のほうが [B] より [Adj] です',
   rows:[{jp:'このみせのほうが あのみせより やすいです。',en:'This shop is cheaper than that shop.'},{jp:'バスより でんしゃのほうが はやいです。',en:'The train is faster than the bus.'}],
   note:'To ask: [A] と [B] と どちらが [Adj] ですか？ Answer: [A] のほうが [Adj] です。'},
  {label:'〜のなかで いちばん — The most … among all',
   meaning:'Picks the superlative from a group of 3 or more.',
   pattern:'[Group] のなかで [Q-word] が いちばん [Adj] ですか',
   rows:[{jp:'３つのなかで、どれが いちばん すきですか。',en:'Among the three, which do you like most?'},{jp:'クラスのなかで、だれが いちばん せが たかいですか。',en:'Who is the tallest in the class?'}]},
]},
{title:'のりかえ',en:'The Trains',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',cards:[
  {label:'〜に のります — Board a Line',
   meaning:'Use に to mark the line or vehicle you board.',
   pattern:'[Line/Vehicle] に のります',
   rows:[{jp:'まず、やまのてせんに のります。',en:'First, board the Yamanote Line.'}]},
  {label:'〜で おります — Get Off at a Station',
   meaning:'Use で to mark the station where you get off.',
   pattern:'[Station] で おります',
   rows:[{jp:'しんじゅくで おりてください。',en:'Please get off at Shinjuku.'}]},
  {label:'〜に のりかえます — Transfer',
   meaning:'Use に to mark the line you transfer onto.',
   pattern:'[Line] に のりかえます',
   rows:[{jp:'しょうなんしんじゅくらいんに のりかえて、よこはままで いきます。',en:'Transfer to the Shonan-Shinjuku Line and go to Yokohama.'}]},
  {label:'Travel Questions',
   meaning:'Three key questions for asking about getting somewhere.',
   rows:[{jp:'どうやって いきますか。',en:'How do you get there?'},{jp:'どのぐらい かかりますか。',en:'About how long does it take?'},{jp:'いくら かかりますか。',en:'How much does it cost?'}]},
]},
{title:'ばしょ',en:'Positions & Likes',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',cards:[
  {label:'〜のなかに — Positions',
   meaning:'Describes where something is located relative to another object.',
   pattern:'[Noun A] は [Noun B] の [Position] に あります / います',
   rows:[{jp:'びょういんは いえの そばに あります。',en:'The hospital is near the house.'},{jp:'ねこは テーブルの うえに います。',en:'The cat is on top of the table.'}],
   note:'Position words: うえ (above) · した (below) · なか (inside) · よこ (beside) · まえ (in front) · うしろ (behind) · となり (next to) · そば (near)'},
  {label:'〜が すきです — Likes & Dislikes',
   meaning:'Expresses liking or disliking something. The thing liked is marked with が, NOT を.',
   pattern:'[Noun] が すきです / きらいです',
   rows:[{jp:'わたしは あまいものが すきです。',en:'I like sweet things.'},{jp:'わたしは いぬが きらいです。',en:'I dislike dogs.'}],
   note:'Degree: だいすきです (love it) / すきです (like) / きらいです (dislike) / だいきらいです (hate it)'},
]},
{title:'めいし',en:'Nouns',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',cards:[
  {label:'Noun + です — 4 Forms',
   meaning:'Nouns use です as a copula. Conjugate です for tense and polarity.',
   pattern:'[Noun] + です / じゃありません / でした / じゃなかったです',
   rows:[{jp:'がくせい です。',en:'(+) Present: I am a student.'},{jp:'ちゅうごくじん じゃありません。',en:'(−) Present: I am not Chinese.'},{jp:'やすみ でした。',en:'(+) Past: It was a holiday.'},{jp:'やすみ じゃなかったです。',en:'(−) Past: It was not a holiday.'}],
   note:'More formal negatives: ではありません / ではありませんでした.'},
  {label:'Noun の Noun — Possessive / Modifier',
   meaning:'の connects two nouns. A の B = "B of A" or "A\'s B". Can be stacked.',
   pattern:'[Noun A] の [Noun B]',
   rows:[{jp:'わたしの かばん',en:'my bag'},{jp:'にほんごの ほん',en:'a Japanese-language book'},{jp:'わたしの にほんごの ほん',en:'my Japanese-language book (stacked)'}]},
]},
{title:'けいようし',en:'Adjectives',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',cards:[
  {label:'い-Adj — 4 Conjugations',
   meaning:'い-adjectives change their い ending. Never attach です directly to the stem.',
   pattern:'Stem + い / くない / かった / くなかった + です',
   rows:[{jp:'たかいです。',en:'(+) Present — It is expensive.'},{jp:'たかくないです。',en:'(−) Present — It is not expensive.'},{jp:'たかかったです。',en:'(+) Past — It was expensive.'},{jp:'たかくなかったです。',en:'(−) Past — It was not expensive.'}],
   note:'⚠️ Exception — いい (good): いいです → よくないです → よかったです → よくなかったです'},
  {label:'な-Adj — 4 Conjugations',
   meaning:'な-adjectives behave like nouns — use the same です copula patterns.',
   pattern:'[な-Adj] + です / じゃありません / でした / じゃなかったです',
   rows:[{jp:'げんきです。',en:'(+) Present — energetic / well'},{jp:'げんきじゃありません。',en:'(−) Present — not well'},{jp:'げんきでした。',en:'(+) Past — was well'},{jp:'げんきじゃなかったです。',en:'(−) Past — was not well'}]},
  {label:'Adjectives + Noun — Modifying',
   meaning:'い-adj go directly before a noun. な-adj need な inserted between adj and noun.',
   rows:[{jp:'おおきい くるまです。',en:'It is a big car. (い-Adj directly before noun)'},{jp:'きれいな ひとです。',en:'They are a beautiful person. (な-Adj + な + noun)'}]},
  {label:'〜くて — Connecting い-Adjectives',
   meaning:'Chain multiple い-adjectives together by dropping い and adding くて.',
   pattern:'[い-Adj stem] + くて + [next adj / verb]',
   rows:[{jp:'ちいさくて しろい ねこです。',en:'It is a small, white cat.'},{jp:'やすくて おいしいです。',en:'It is cheap and delicious.'}],
   note:'Used to connect adjectives describing the same noun. The last adjective stays in its normal form.'},
]},
{title:'どうし',en:'Verbs (ます)',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',cards:[
  {label:'G3 — Irregular Verbs',
   meaning:'Only 2 truly irregular verbs. All compound verbs are built on します.',
   rows:[{jp:'します',en:'to do (irregular)'},{jp:'きます',en:'to come (irregular)'},{jp:'べんきょうします',en:'to study (compound: べんきょう + します)'}]},
  {label:'G2 — RU-Verbs (e-sound before ます)',
   meaning:'The sound just before ます is an "e" sound (え, け, べ, ね…). Drop ます → add る for dictionary form.',
   rows:[{jp:'たべます / ねます',en:'eat / sleep (true G2)'},{jp:'みます・おきます・います・あびます・おります',en:'⚠️ Look like G2 but are actually G1!'}]},
  {label:'G1 — U-Verbs (i-sound before ます)',
   meaning:'The sound just before ます is an "i" sound (き, ぎ, み, び…). The dictionary form ends in a う-row sound.',
   rows:[{jp:'のみます / かきます / いきます',en:'drink / write / go (G1)'}]},
  {label:'4 Core ます Forms',
   meaning:'All polite verb tenses are built from the ます stem.',
   pattern:'[Stem] + ます / ません / ました / ませんでした',
   rows:[{jp:'のみます',en:'(+) Present — I drink.'},{jp:'のみません',en:'(−) Present — I don\'t drink.'},{jp:'のみました',en:'(+) Past — I drank.'},{jp:'のみませんでした',en:'(−) Past — I didn\'t drink.'}]},
  {label:'ない Form — Plain Negative',
   meaning:'The plain (dictionary-style) negative form of a verb. Used in casual speech and as a base for grammar patterns.',
   pattern:'G1: change u-sound → a-sound + ない　／　G2: drop る + ない　／　G3: しない / こない',
   rows:[{jp:'のむ → のまない',en:'drink → don\'t drink (G1)'},{jp:'たべる → たべない',en:'eat → don\'t eat (G2)'},{jp:'する → しない',en:'do → don\'t do (G3)'},{jp:'くる → こない',en:'come → don\'t come (G3)'}],
   note:'⚠️ Exception: ある → ない (not あらない). Used in: 〜ないでください (please don\'t), 〜なければなりません (must), 〜なくてもいいです (don\'t have to).'},
]},
{title:'じしょけい',en:'Dictionary Form',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',cards:[
  {label:'G3 — Irregular',
   meaning:'Memorise these two. All compound verbs follow the same pattern.',
   rows:[{jp:'します → する',en:'to do'},{jp:'きます → くる',en:'to come'},{jp:'べんきょうします → べんきょうする',en:'to study'}]},
  {label:'G2 — Drop ます, add る',
   meaning:'The stem stays unchanged. Simply replace ます with る.',
   rows:[{jp:'たべます → たべる',en:'eat'},{jp:'みます → みる',en:'see / watch'},{jp:'ねます → ねる',en:'sleep'}]},
  {label:'G1 — Change i-sound → u-sound',
   meaning:'The い-row sound on the stem shifts to the corresponding う-row sound.',
   rows:[{jp:'のみます → のむ　(み→む)',en:'drink'},{jp:'かきます → かく　(き→く)',en:'write'},{jp:'いきます → いく　(き→く)',en:'go'}]},
]},
{title:'て-けい',en:'て Form',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',cards:[
  {label:'Usage — Connecting Sequences',
   meaning:'て-form connects actions in order. Think of it as "…and then…"',
   rows:[{jp:'やまのてせんに のって、しんじゅくで おります。',en:'I board the Yamanote Line, and then get off at Shinjuku.'}]},
  {label:'G3 & G2 て-forms',
   rows:[{jp:'します → して / きます → きて',en:'G3 irregular'},{jp:'たべます → たべて',en:'G2: drop ます, add て'},{jp:'みます → みて',en:'G2 example'}]},
  {label:'G1 て-form Rules',
   meaning:'7 patterns based on the ending of the dictionary form.',
   rows:[{jp:'う・つ・る → って　（かいます → かって）',en:'buy → て-form'},{jp:'む・ぶ・ぬ → んで　（のみます → のんで）',en:'drink → て-form'},{jp:'く → いて　（かきます → かいて）',en:'write → て-form'},{jp:'ぐ → いで　（およぎます → およいで）',en:'swim → て-form'},{jp:'す → して　（はなします → はなして）',en:'speak → て-form'}],
   note:'⚠️ Exception: いきます → いって (NOT いいて)'},
]},
{title:'そうです',en:'Looks Like / Seems',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',cards:[
  {label:'〜そうです — It looks / seems like ~',
   meaning:'Expresses an impression based on what you can see right now. Not a report — your own observation.',
   pattern:'い-Adj: drop い + そうです　/　な-Adj: drop な + そうです',
   rows:[{jp:'そのケーキ、おいしそうですね！',en:'That cake looks delicious!'},{jp:'かのじょは いつも ひまそうですね。',en:'She always seems to be free / bored.'}],
   note:'⚠️ Exception: いい → よさそうです (not いそうです)'},
  {label:'〜そうな + Noun — Modifying with そう',
   meaning:'Use そうな when そう directly modifies a noun that follows.',
   pattern:'[Adj stem] + そうな + [Noun]',
   rows:[{jp:'おいしそうな ケーキですね。',en:'What a delicious-looking cake!'},{jp:'たのしそうな パーティですね。',en:'That looks like a fun party!'}]},
]},
{title:'たいです',en:'Want To Do',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',cards:[
  {label:'〜たいです / 〜たくないです — Want / Don\'t want to do ~',
   meaning:'Expresses the speaker\'s own desire (positive) or lack of desire (negative) to do something. Conjugates exactly like an い-adjective.',
   pattern:'Verb (drop ます) + たいです　／　Verb (drop ます) + たくないです',
   rows:[{jp:'のみたいです。',en:'(+) Present — I want to drink.'},{jp:'のみたくないです。',en:'(−) Present — I don\'t want to drink.'},{jp:'のみたかったです。',en:'(+) Past — I wanted to drink.'},{jp:'のみたくなかったです。',en:'(−) Past — I didn\'t want to drink.'}],
   note:'たいです is used for the speaker\'s own desire. For someone else\'s desire, use 〜たがっています or 〜たいとおもいます.'},
]},
{title:'ない form',en:'Plain Negative (ない)',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',cards:[
  {label:'ない Form — How to Make It',
   meaning:'The plain (dictionary-style) negative. Used in casual speech and as a base for many grammar patterns.',
   pattern:'G1: u-sound → a-sound + ない　／　G2: drop る + ない　／　G3: しない / こない',
   rows:[{jp:'のむ → のまない',en:'drink → don\'t drink (G1)'},{jp:'かく → かかない',en:'write → don\'t write (G1)'},{jp:'たべる → たべない',en:'eat → don\'t eat (G2)'},{jp:'する → しない',en:'do → don\'t do (G3)'},{jp:'くる → こない',en:'come → don\'t come (G3)'}],
   note:'⚠️ Exception: ある → ない (not あらない).'},
  {label:'〜ないでください — Please Don\'t ~',
   meaning:'A polite request to refrain from doing something.',
   pattern:'[ない form] でください',
   rows:[{jp:'ここで たばこを すわないでください。',en:'Please don\'t smoke here.'},{jp:'おくれないでください。',en:'Please don\'t be late.'}]},
  {label:'〜なくてもいいです — Don\'t Have To ~',
   meaning:'Expresses that something is not necessary. Permission NOT to do something.',
   pattern:'[ない form] + くてもいいです',
   rows:[{jp:'きょうは こなくてもいいです。',en:'You don\'t have to come today.'},{jp:'たべなくてもいいです。',en:'You don\'t have to eat.'}],
   note:'Drop the final い from ない → なく + てもいいです.'},
  {label:'〜なければなりません — Must / Have To ~',
   meaning:'Expresses obligation. Something that must be done.',
   pattern:'[ない form] + ければなりません',
   rows:[{jp:'くすりを のまなければなりません。',en:'I must take the medicine.'},{jp:'はやく いかなければなりません。',en:'I have to go quickly.'}],
   note:'Drop the final い from ない → なければなりません. Casual: なきゃ.'},
  {label:'〜たくないです — Don\'t Want To ~',
   meaning:'Expresses that the speaker does NOT want to do something. Conjugates like an い-adjective.',
   pattern:'Verb (drop ます) + たくないです',
   rows:[{jp:'いきたくないです。',en:'I don\'t want to go.'},{jp:'たべたくないです。',en:'I don\'t want to eat.'},{jp:'おきたくなかったです。',en:'I didn\'t want to wake up. (past)'}],
   note:'たくないです conjugates like い-adj: たくない → たくなかった → たくなかったです.'},
]},
{title:'とおもいます',en:'Expressing Thoughts',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',cards:[
  {label:'〜とおもいます — I think that ~',
   meaning:'Used to express an opinion or assumption. The clause before と is in plain/dictionary form.',
   pattern:'[Plain-form clause] + とおもいます',
   rows:[{jp:'さとうさんは コーヒーが のみたいとおもいます。',en:'I think Satou-san wants to drink coffee.'},{jp:'あしたは あめだとおもいます。',en:'I think it will rain tomorrow.'}],
   note:'⚠️ This と is a QUOTING particle — completely separate from the "with someone" particle と. Do not confuse them.'},
]},
{title:'てもいい / てはいけない',en:'Permission & Prohibition',emoji:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',cards:[
  {label:'〜てもいいですか — May I ~?',
   meaning:'Politely asks for permission to do something. Use て-form + もいいですか.',
   pattern:'[Te-form] + もいいですか',
   rows:[{jp:'しゃしんを とってもいいですか。',en:'May I take a photo?'},{jp:'まどを あけてもいいですか。',en:'May I open the window?'}],
   note:'Answer YES: はい、いいです / どうぞ。Answer NO: すみません、〜てはいけません。'},
  {label:'〜てはいけません — Must Not ~',
   meaning:'States a strict rule or prohibition. Stronger than 〜ないでください.',
   pattern:'[Te-form] + はいけません',
   rows:[{jp:'ここで たばこを すってはいけません。',en:'No smoking here.'},{jp:'じゅぎょうちゅうに スマホを つかってはいけません。',en:'You must not use your phone in class.'}]},
  {label:'〜てください — Please Do ~',
   meaning:'A polite request or instruction. Used for directions, shopping, classroom instructions.',
   pattern:'[Te-form] + ください',
   rows:[{jp:'しおを とってください。',en:'Please pass the salt.'},{jp:'ゆっくり はなしてください。',en:'Please speak slowly.'}]},
  {label:'〜ましょうか — Shall I ~?',
   meaning:'Offers to do something for someone. Polite and helpful in tone.',
   pattern:'Verb (drop ます) + ましょうか',
   rows:[{jp:'かばんを もちましょうか。',en:'Shall I carry your bag?'},{jp:'でんきを けしましょうか。',en:'Shall I turn off the light?'}]},
]},
];
function renderSheets(){
  const el = document.getElementById('content');
  el.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;"><div class="sheets-tabs" style="margin:0;"><button class="sheet-tab active" id="stab-verbs" onclick="switchSheet(\'verbs\',this)">Verbs</button><button class="sheet-tab" id="stab-adj" onclick="switchSheet(\'adj\',this)">Adjectives</button><button class="sheet-tab" id="stab-nouns" onclick="switchSheet(\'nouns\',this)">Nouns</button><button class="sheet-tab" id="stab-kanji" onclick="switchSheet(\'kanji\',this)">Kanji</button><button class="sheet-tab" id="stab-questions" onclick="switchSheet(\'questions\',this)">Questions</button></div><div id="sheet-lvl-filters" style="display:flex;gap:4px;flex-wrap:wrap;align-items:center;min-height:28px;"></div></div><div id="sheet-content"></div><div style="padding:12px 0 8px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><button onclick="copySheet()" id="copy-btn" style="height:36px;padding:0 18px;border-radius:20px;border:none;background:var(--red);color:#fff;font-size:12px;font-weight:700;font-family:Arial,sans-serif;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.15);display:inline-flex;align-items:center;gap:7px;transition:opacity .15s;letter-spacing:.04em;flex-shrink:0;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button><div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:var(--rose);border-radius:12px;border-left:3px solid var(--red);font-size:11px;color:var(--sub);font-family:Arial,sans-serif;line-height:1.6;"><img src="https://avatars.githubusercontent.com/u/616547?s=280&v=4" style="width:22px;height:22px;border-radius:4px;flex-shrink:0;" alt="Quizlet"><span><b style="color:var(--red);">Import to Quizlet</b> — Click Copy, then on Quizlet create a <b>new flashcard set</b>, click <b>Import</b>, paste as‑is and you&#39;re done!</span></div></div>';
  switchSheet('verbs', document.getElementById('stab-verbs'));
}

let currentSheetType = 'verbs';
let activeSheetLvls = new Set();
const activeKanjiModes = new Set(['read','write']);

function renderLvlFilters(type){
  const el = document.getElementById('sheet-lvl-filters');
  if(!el) return;
  if(type === 'questions'){ el.innerHTML=''; return; }
  if(type === 'kanji'){
    const kls=['KL1','KL2','KL3','KL4','KL5','KL6','KL7','KL8'];
    const pill=(active,label,click)=>'<button onclick="'+click+'" style="height:28px;padding:0 '+(label.length>2?'10':'0')+'px;'+(label.length<=2?'width:28px;':'')+'border-radius:'+(label.length<=2?'50%':'14px')+';border:1.5px solid '+(active?'var(--red)':'var(--dot)')+';background:'+(active?'var(--red)':'var(--white)')+';color:'+(active?'var(--white)':'var(--mid)')+';font-size:'+(label.length<=2?'9':'10')+'px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;'+( label.length<=2?'padding:0;':'')+'">' +label+'</button>';
    const klBtns=kls.map(kl=>pill(activeSheetLvls.has(kl), kl.replace('KL',''), "filterSheetKl('"+kl+"',this)")).join('');
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
  const lvls=[...new Set(src.map(r=>parseInt(r.lvl)))].sort((a,b)=>a-b);
  el.innerHTML=lvls.map(lvl=>{
    const a=activeSheetLvls.has(lvl);
    return '<button onclick="filterSheetLvl('+lvl+',this)" style="width:28px;height:28px;border-radius:50%;border:1.5px solid '+(a?'var(--red)':'var(--dot)')+';background:'+(a?'var(--red)':'var(--white)')+';color:'+(a?'var(--white)':'var(--mid)')+';font-size:10px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;padding:0;">'+lvl+'</button>';
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

function switchSheet(type, btn){
  document.querySelectorAll('.sheets-tabs .sheet-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  currentSheetType = type; activeSheetLvls = new Set();
  if(type==='kanji'){activeKanjiModes.clear();activeKanjiModes.add('read');activeKanjiModes.add('write');}
  renderLvlFilters(type); renderSheetTable(type);
}

function renderSheetTable(type){
  const el = document.getElementById('sheet-content');
  let src = type==='questions' ? questionsData : (sheetData[type]||[]);
  if(activeSheetLvls.size>0) src = type==='kanji' ? src.filter(r=>activeSheetLvls.has(r.kl)) : src.filter(r=>activeSheetLvls.has(parseInt(r.lvl)));
  let headers, rows;
  if(type==='verbs'){
    headers=['Verb (Masu)','English','Dictionary','て-form','ない form','Group','Level'];
    rows=src.map(r=>{
      const conj=conjLookup[r.word]||conjLookup[r.reading]||[];
      const nai=(conj.find(f=>f.label==='ない form')||{jp:''}).jp;
      const display=r.reading||r.word;
      return '<tr><td class="jp notranslate" translate="no">'+display+'</td><td>'+r.eng+'</td><td class="jp notranslate" translate="no">/ '+r.dict+'</td><td class="jp notranslate" translate="no">/ '+r.te+'</td><td class="jp notranslate" translate="no">/ '+nai+'</td><td><span class="sheet-grp G'+r.grp+'">('+r.grp+')</span></td><td><span class="sheet-lvl">L'+r.lvl+'</span></td></tr>';
    });
  } else if(type==='adj'){
    headers=['Adjective','English','Type','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.reading||r.word)+'</td><td>'+r.eng+'</td><td style="font-family:Chihaya,serif;font-weight:700;color:'+(r.adj==='i'?'#75255f':'#3a1a6a')+'" translate="no">'+(r.adj==='i'?'(い)':'(な)')+'</td><td><span class="sheet-lvl">L'+r.lvl+'</span></td></tr>');
  } else if(type==='nouns'){
    headers=['Noun','English','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+(r.reading||r.word)+'</td><td>'+r.eng+'</td><td><span class="sheet-lvl">L'+r.lvl+'</span></td></tr>');
  } else if(type==='kanji'){
    if(activeKanjiModes.size>0&&activeKanjiModes.size<2) src=src.filter(r=>activeKanjiModes.has(r.mode));
    headers=['Kanji','Reading','Meaning','Practice','Level'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+r.kanji+'</td><td class="sm notranslate" translate="no">'+r.reading+'</td><td>/ '+r.meaning+'</td><td><span class="sheet-lvl" style="background:'+(r.mode==='write'?'var(--rose)':'rgba(0,0,0,.05)')+'">'+r.mode+'</span></td><td><span class="sheet-lvl">'+r.kl+'</span></td></tr>');
  } else {
    headers=['Question','English'];
    rows=src.map(r=>'<tr><td class="jp notranslate" translate="no">'+r.jp+'</td><td>'+r.eng+'</td></tr>');
  }
  el.innerHTML='<div class="sheet-wrap"><table class="sheet-table" id="main-sheet-table"><thead><tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+rows.join('')+'</tbody></table></div>';
}
function copySheet(){
  const btn=document.getElementById('copy-btn');
  let rows=[];
  if(currentSheetType==='verbs'){
    let src=sheetData.verbs; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(parseInt(r.lvl)));
    rows=src.map(r=>{
      const conj=conjLookup[r.word]||conjLookup[r.reading]||[];
      const nai=(conj.find(f=>f.label==='ない form')||{jp:''}).jp;
      return [r.reading||r.word, r.eng, '/ '+r.dict, '/ '+r.te, '/ '+nai, '('+r.grp+')'];
    });
  } else if(currentSheetType==='adj'){
    let src=sheetData.adj; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(parseInt(r.lvl)));
    rows=src.map(r=>[r.reading||r.word, '/ '+r.eng, r.adj==='i'?'い':'な']);
  } else if(currentSheetType==='nouns'){
    let src=sheetData.nouns; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(parseInt(r.lvl)));
    rows=src.map(r=>[r.reading||r.word, r.eng]);
  } else if(currentSheetType==='kanji'){
    let src=sheetData.kanji; if(activeSheetLvls.size>0) src=src.filter(r=>activeSheetLvls.has(r.kl)); if(activeKanjiModes.size>0&&activeKanjiModes.size<2) src=src.filter(r=>activeKanjiModes.has(r.mode));
    rows=src.map(r=>[r.kanji, r.reading, '/ '+r.meaning]);
  } else {
    rows=questionsData.map(r=>[r.jp, r.eng]);
  }
  const tsv=rows.map(r=>r.join('\t')).join('\n');
  const restore=()=>{btn.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy';btn.style.opacity='1';};
  const done=()=>{btn.innerHTML='&#10003; Copied';btn.style.opacity='.7';setTimeout(restore,2000);};
  navigator.clipboard.writeText(tsv).then(done).catch(()=>{const ta=document.createElement('textarea');ta.value=tsv;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);done();});
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
      const patternHtml=c.pattern?`<div class="gc-pattern notranslate" translate="no">${c.pattern}</div>`:'';
      const rowsHtml=(c.rows||[]).map(r=>`<span class="gc-ex" translate="no">${r.jp}<span class="gc-ex-en">${r.en}</span></span>`).join('');
      const noteHtml=c.note?`<div class="gc-note">${c.note}</div>`:'';
      return `<div class="gram-fc"><div class="gram-fc-label">${c.label}</div>${meaningHtml}${patternHtml}<div class="gram-fc-rule notranslate">${rowsHtml}</div>${noteHtml}</div>`;
    }).join('');
    return `<div class="gram-section"><div class="gram-section-header" onclick="toggleGramSection(this)"><div style="display:flex;align-items:baseline;gap:6px;"><span class="gram-section-emoji">${sec.emoji}</span><span class="gram-section-title">${sec.title}</span><span class="gram-section-en">${sec.en}</span></div><span class="gram-section-arrow">›</span></div><div class="gram-section-body"><div class="gram-fc-grid">${cardsHtml}</div></div></div>`;
  };
  const left=sections.filter((_,i)=>i%2===0).map(makeSect).join('');
  const right=sections.filter((_,i)=>i%2===1).map(makeSect).join('');
  const closeBtn=`<div style="display:flex;justify-content:flex-end;margin-bottom:8px;"><button onclick="closeAllGram()" title="Close all" style="width:28px;height:28px;border-radius:50%;border:1.5px solid var(--dot);background:var(--white);color:var(--mid);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;" onmouseover="this.style.background='var(--rose)'" onmouseout="this.style.background='var(--white)'"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>`;
  el.innerHTML=closeBtn+`<div class="gram-sections-grid"><div class="gram-col">${left}</div><div class="gram-col">${right}</div></div>`;
  // Restore open sections after re-render
  if(_gramOpenSections.size>0){
    document.querySelectorAll('.gram-section-header').forEach(h=>{
      const t=h.querySelector('.gram-section-title');
      if(t && _gramOpenSections.has(t.textContent.trim()) && !h.classList.contains('open')){
        h.classList.add('open');
        h.nextElementSibling.classList.add('open');
        h.closest('.gram-section').classList.add('open');
      }
    });
  }
}

function renderAll(){
  const q = currentSearch;
  const el = document.getElementById('content');
  let html = '';

  // Vocab
  const vData=vocabData[sem]||{};
  let vHtml='';
  for(const lvl of Object.keys(vData).sort((a,b)=>parseInt(a.slice(1))-parseInt(b.slice(1)))){
    const fw=(vData[lvl]||[]).filter(w=>matchesSearch(q,w.word,w.reading,w.def));
    if(!fw.length) continue;
    for(const w of fw){
      let def=w.def; if(w.pos==='Coun') def=def.replace(/\s*\(counter\)\s*/gi,'').trim();
      const adjTag=w.pos==='Adj'?`<span class="vc-adj-tag adj-${adjType[w.word]||'na'}">${adjType[w.word]==='i'?'い':'な'}</span>`:'';
      const grpTag=w.grp?`<span class="vc-grp-tag grp-${w.grp}">${w.grp}</span>`:'';
      vHtml+=`<div class="vocab-card" onclick="openConjPopup('${w.word.replace(/'/g,"\\'")}','${(w.reading||'').replace(/'/g,"\\'")}','${def.replace(/'/g,"\\'")}','${w.pos}','${(w.exprKey||'').replace(/'/g,"\\'")}')">
        <div class="vc-left notranslate" translate="no">${rubyHTML(w.word,w.reading||"")}</div>
        <div class="vc-sep"></div>
        <div class="vc-right"><span class="vc-def">${def}</span></div>
        <div style="position:absolute;top:8px;right:8px;display:flex;gap:4px;align-items:center;">${adjTag}${grpTag}<span class="vc-badge pos-${w.pos}" style="position:static;">${w.pos}</span></div>
        <div class="vc-indicators"><span class="vc-lvl-tag">${lvl}</span></div>
      </div>`;
    }
  }
  if(vHtml) html+=`<div class="level-tag"><span>語 Vocab</span><span class="lt-line"></span></div><div class="vocab-grid">${vHtml}</div>`;

  // Kanji
  const kData=kanjiData[sem]||{};
  let kHtml='';
  for(const lvl of Object.keys(kData).sort((a,b)=>parseInt(a.slice(2))-parseInt(b.slice(2)))){
    const ks=(kData[lvl]||[]).filter(k=>matchesSearch(q,k.kanji,k.reading,k.meaning));
    for(const k of ks){
      const mc=k.mode==='write'?'kanji-write':'kanji-read';
      kHtml+=`<div class="kanji-card ${mc}" onclick="openConjPopup('${k.kanji.replace(/'/g,"\\'")}','${(k.reading||'').replace(/'/g,"\\'")}','${(k.meaning||'').replace(/'/g,"\\'")}')">
        <div class="vc-left notranslate" translate="no">${rubyHTML(k.kanji,k.reading||"")}</div>
        <div class="vc-sep"></div><div class="vc-right"><span class="vc-def">${k.meaning||''}</span></div>
        <div class="vc-indicators"><span class="vc-lvl-tag">${lvl}</span></div>
      </div>`;
    }
  }
  if(kHtml) html+=`<div class="level-tag"><span>字 Kanji</span><span class="lt-line"></span></div><div class="kanji-grid">${kHtml}</div>`;

  // Grammar
  const gData=grammarData[sem]||{};
  let gHtml='';
  for(const lvl of Object.keys(gData).sort()){
    const items=(gData[lvl]||[]).filter(g=>matchesSearch(q,g.pattern,g.meaning));
    for(const g of items){
      gHtml+=`<div class="grammar-card"><div class="g-pattern">${g.pattern}</div><div class="g-meaning">${g.meaning}</div></div>`;
    }
  }
  if(gHtml) html+=`<div class="level-tag"><span>文 Grammar</span><span class="lt-line"></span></div><div class="grammar-list">${gHtml}</div>`;

  el.innerHTML = html||`<div class="empty"><span class="empty-jp">？</span>No results for "${q}".</div>`;
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
    keyword:'なんようび (What day of the week)',
    structure:'[Topic は] + なんようび + ですか',
    meaning:'Asks which day of the week it is. Days: 月火水木金土日 = Mon–Sun.',
    examples:[
      {jp:'きょうは なんようび ですか。',en:'What day of the week is it today?'},
      {jp:'パーティは なんようび ですか。',en:'What day is the party?'},
    ]
  },
  'なんがつ ですか':{
    keyword:'なんがつ (What month)',
    structure:'[Topic は] + なんがつ + ですか',
    meaning:'Asks which month it is. Months are numbered: いちがつ (January) through じゅうにがつ (December).',
    examples:[
      {jp:'たんじょうびは なんがつ ですか。',en:'What month is your birthday?'},
      {jp:'いまは なんがつ ですか。',en:'What month is it now?'},
    ]
  },
  'なんにち ですか':{
    keyword:'なんにち (What day of the month)',
    structure:'[Topic は] + なんにち + ですか',
    meaning:'Asks the date (day of the month). Note the irregular readings: ついたち (1st), ふつか (2nd) etc.',
    examples:[
      {jp:'きょうは なんにち ですか。',en:'What date is it today?'},
      {jp:'しけんは なんにち ですか。',en:'What date is the exam?'},
    ]
  },
  'なんじかん かかりますか':{
    keyword:'なんじかん (How many hours)',
    structure:'なんじかん + かかりますか',
    meaning:'Asks how many hours something takes. かかります = it takes (time/money).',
    examples:[
      {jp:'とうきょうまで なんじかん かかりますか。',en:'How many hours does it take to Tokyo?'},
      {jp:'しごとは なんじかん ですか。',en:'How many hours is work?'},
    ]
  },
  'なんにちかん かかりますか':{
    keyword:'なんにちかん (How many days)',
    structure:'なんにちかん + かかりますか',
    meaning:'Asks how many days something takes or lasts.',
    examples:[
      {jp:'りょこうは なんにちかん ですか。',en:'How many days is the trip?'},
      {jp:'なんにちかん かかりますか。',en:'How many days does it take?'},
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
function openConjPopup(word,reading,def,pos,exprKey){
  // Check counter first
  const counterKey=extraCounterMap[word]||extraCounterMap[reading]||(counTypeMap[word]?.key);
  if(counterKey||pos==='Coun'){
    let mk=counterKey||null;
    if(!mk)for(const[k,cat]of Object.entries(countersData)){if(cat.items.some(i=>i.jp===word||i.reading===reading)){mk=k;break;}}
    openAllCountersPopup(mk||undefined);return;
  }
  document.getElementById('popup-word').textContent = word;
  document.getElementById('popup-reading').textContent = reading;
  document.getElementById('popup-def').textContent = def;

  const row = document.getElementById('popup-conj-row');
  const titleEl = document.querySelector('.popup-title');
  const exprBlock = document.getElementById('popup-expr-block');

  // Expr (question expression) popup
  if(pos==='Expr'){
    const e = exprData[exprKey||word];
    row.style.display='none'; titleEl.style.display='none';
    if(e){
      document.getElementById('popup-expr-keyword').textContent = e.keyword;
      document.getElementById('popup-expr-structure').textContent = e.structure;
      document.getElementById('popup-expr-meaning').textContent = e.meaning;
      document.getElementById('popup-expr-examples').innerHTML = e.examples.map(ex=>
        `<div style="background:var(--bg);border-radius:8px;padding:8px 12px;">
          <div style="font-family:'Chihaya','Noto Serif JP',serif;font-size:15px;color:var(--ink);margin-bottom:2px;">${ex.jp}</div>
          <div style="font-size:11px;color:var(--sub);font-family:Arial,sans-serif;">${ex.en}</div>
        </div>`
      ).join('');
      exprBlock.style.display='block';
    } else {
      exprBlock.style.display='none';
    }
    (function(){var _p=document.getElementById('conj-popup');_p.classList.remove('hidden');requestAnimationFrame(function(){_p.classList.add('visible');});})();
    return;
  }

  exprBlock.style.display='none';
  // Look up by word, then by reading (for kanji cards whose reading is the masu form)
  const forms = conjLookup[word] || conjLookup[reading] || null;
  if(forms && forms.length){
    row.innerHTML = forms.map(f=>`<div class="conj-cell"><span class="conj-cell-label">${f.label}</span><span class="conj-cell-jp notranslate" translate="no">${f.jp}</span></div>`).join('');
    titleEl.style.display='block';
    row.style.display='flex';
  } else {
    titleEl.style.display='none';
    row.style.display='none';
  }
  (function(){var _p=document.getElementById('conj-popup');_p.classList.remove('hidden');requestAnimationFrame(function(){_p.classList.add('visible');});})();
}

function closePopup(e){ if(e.target.id==='conj-popup') closePopupDirect(); }
function closePopupDirect(){
  const el=document.getElementById('conj-popup');
  el.classList.remove('visible');
  setTimeout(()=>el.classList.add('hidden'),220);
}

function renderCounterTab(key){
  const cat=countersData[key];if(!cat)return;
  document.querySelectorAll('.ctr-tab').forEach(b=>b.classList.toggle('active',b.dataset.key===key));
  const descHtml = cat.desc ? '<div style="font-size:11px;color:var(--sub);font-family:Arial,sans-serif;margin-bottom:10px;padding:6px 10px;background:var(--bg);border-radius:8px;border-left:3px solid var(--rose);">'+cat.desc+'</div>' : '';
  document.getElementById('ctr-popup-grid').innerHTML=descHtml+'<div class="ctr-grid">'+cat.items.map(item=>`<div class="ctr-card"><div class="vc-left notranslate" translate="no">${rubyHTML(item.jp,item.reading||'',"font-size:22px;")}</div><div class="vc-sep" style="height:32px;"></div><div class="vc-right"><span class="vc-def">${item.def}</span></div></div>`).join('')+'</div>';
}
function openAllCountersPopup(startKey){
  const tabRow=document.getElementById('ctr-tab-row');
  tabRow.innerHTML=Object.entries(countersData).map(([key,cat])=>`<button class="ctr-tab" data-key="${key}" onclick="renderCounterTab('${key}')">${cat.icon} ${cat.label}</button>`).join('');
  if(!document.getElementById('ctr-tab-style')){const st=document.createElement('style');st.id='ctr-tab-style';st.textContent='.ctr-tab{padding:4px 12px;border-radius:16px;border:1.5px solid var(--dot);background:var(--white);color:var(--mid);font-size:11px;font-weight:700;cursor:pointer;font-family:Arial,sans-serif;transition:all .12s;}.ctr-tab.active{background:var(--red);color:var(--white);border-color:var(--red);}';document.head.appendChild(st);}
  renderCounterTab(startKey||Object.keys(countersData)[0]);
  (function(){var _p=document.getElementById('ctr-popup');_p.classList.remove('hidden');requestAnimationFrame(function(){_p.classList.add('visible');});})();
}
function openCounterPopup(key,label,e){if(e&&e.stopPropagation)e.stopPropagation();openAllCountersPopup(key);}
function closeCounterPopup(e){if(e.target.id==='ctr-popup')(function(){var _p=document.getElementById('ctr-popup');_p.classList.remove('visible');setTimeout(function(){_p.classList.add('hidden');},220);})();}

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
        currentTab=tab;
        const hs=document.getElementById('home-screen');
        const ct=document.getElementById('content');
        if(hs) hs.style.display='none';
        if(ct) ct.style.display='block';
        document.getElementById('vocab-floats').classList.toggle('ff-visible', tab==='vocab');
        document.getElementById('kanji-floats').classList.toggle('ff-visible', tab==='kanji');
        if(tab==='kanji'){document.getElementById('kflt-read').classList.add('active');document.getElementById('kflt-write').classList.add('active');}
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
    bubble.style.transition = 'opacity .4s ease';
    bubble.style.opacity = '1';
    setTimeout(function(){ bubble.classList.add('bb-float'); }, 420);
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
    scheduleShow(4000);
  };
  window._hideBubble = function(){
    clearTimeout(timer);
    if(parseFloat(bubble.style.opacity||'0') < 0.5){ scheduleShow(4000); return; }
    bubble.classList.remove('bb-float');
    bubble.style.transition = 'opacity .3s ease';
    bubble.style.opacity = '0';
    scheduleShow(4300);
  };
  window._leaveBubble = function(){
    clearTimeout(timer);
    bubble.classList.remove('bb-float');
    bubble.style.transition = '';
    bubble.style.opacity = '0';
  };
  scheduleShow(4000);
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
document.getElementById('vocab-floats').classList.remove('ff-visible');
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