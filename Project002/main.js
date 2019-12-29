new Vue({
  el: '#app',

  data: {
    url:[
      /*Menu01*/'https://compromise-satisfaction.github.io/Reversi/',
      /*Menu02*/'https://t-kazu1234.github.io/game/GameFolder_05/index.html',
      /*Menu03*/'https://scrapbox.io/Tanakake-memo/%E9%9F%B3%E6%A5%BD%E3%83%AA%E3%82%B9%E3%83%88',
      /*Menu04*/'https://scrapbox.io/Tanakake-memo/%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0',
      /*Menu05*/'https://compromise-satisfaction.github.io/referee/index.html',
      /*Menu06*/'https://scrapbox.io/Tanakake-memo/%E4%BD%BF%E3%81%84%E6%96%B9',
      /*Menu07*/'https://subtle-signal-141217.firebaseapp.com/todolist/todolist.html',
      /*Menu08*/'https://scrapbox.io/Tanakake-memo/HOME',
      /*Menu09*/'',
      /*Menu10*/'https://scrapbox.io/Tanakake-memo/%E8%AA%BF%E3%81%B9%E3%82%8B%E3%83%BB%E6%A4%9C%E7%B4%A2%E3%81%99%E3%82%8B',
      /*Menu11*/'https://subtle-signal-141217.firebaseapp.com/SuperLine/SuperLine.htm',
      /*Menu12*/'https://compromise-satisfaction.github.io/Sudoku/',
    ],
    image:[
      /*Menu01*/'https://i.gyazo.com/9848d507f0afb95fe42a2d28e629b71e.png',
      /*Menu02*/'https://i.gyazo.com/2f130e8f25fc7fff0a5d261bdfaa340b.png',
      /*Menu03*/'https://i.gyazo.com/7205e58fedab8d59e2b382bb06fbe70d.jpg',
      /*Menu04*/'https://st.depositphotos.com/2610399/4912/i/950/depositphotos_49123997-stock-photo-old-camera-and-old-pictures.jpg',
      /*Menu05*/'https://icondecotter.jp/data/509/15278144/igiari.png',
      /*Menu06*/'https://i.gyazo.com/4f20d2f7cf413372babe9d9bfb4e8355.png',
      /*Menu07*/'https://i.gyazo.com/93ebe582dedf8db57412f119e20b3688.jpg',
      /*Menu08*/'https://i.gyazo.com/60691b5d21536e13159806b09cab5f7a.png',
      /*Menu09*/'https://i.gyazo.com/2775ab6895a6e3522c03ac61e528f881.jpg',
      /*Menu10*/'https://i.gyazo.com/18209366c51e82ccac2409b4396d15dd.jpg',
      /*Menu11*/'https://i.gyazo.com/853e1720954b54f2c7df8c93cf65db9b.png',
      /*Menu12*/'https://i.gyazo.com/60fd84be42b4b3582eb6d0064ab7e546.jpg',
    ],
    AppMenuName:[
      /*Menu01*/'リバーシ',
      /*Menu02*/'ノベルゲーム',
      /*Menu03*/'ミュージック',
      /*Menu04*/'フォト',
      /*Menu05*/'法廷バトル',
      /*Menu06*/'ヘルプ',
      /*Menu07*/'やることリスト',
      /*Menu08*/'共有メモを書く',
      /*Menu09*/'読書ツール',
      /*Menu10*/'調べる・検索する',
      /*Menu11*/'自作スタンプ',
      /*Menu12*/'数独',
    ],
  }
});

/*
*/
/*
    function Images(width,height){
      fetch(
        "https://script.google.com/macros/s/AKfycbwi_lY7A0gA3CjLZ6pUZBQAtAoV6WSk0cWtJTjxks8Gpyeu7UHU/exec",
        )
      .then(res => res.json())
      .then(result => {
        III = [];
        ImageDATAS = result;
        console.log('result');
        console.log(ImageDATAS);
        var kakaka = 0;
        for (var i = 0; i < ImageDATAS.length; i++){
          if(ImageDATAS[i].name=="最終更新日時") continue;
          III[kakaka] = ImageDATAS[i].url
          kakaka++;
        }
        Load(width,height)

      },);
    }
*/
