  function test(result){

  new Vue({

        el: '#app',
          data: {
            url:[
              result[12].url,
              result[13].url,
              result[14].url,
              result[15].url,
              result[16].url,
              result[17].url,
              result[18].url,
              result[19].url,
              result[20].url,
              result[21].url,
              result[22].url,
              result[23].url,
            ],
            image:[
              result[12].image,
              result[13].image,
              result[14].image,
              result[15].image,
              result[16].image,
              result[17].image,
              result[18].image,
              result[19].image,
              result[20].image,
              result[21].image,
              result[22].image,
              result[23].image,
            ],
            AppMenuName:[
              result[12].AppMenuName,
              result[13].AppMenuName,
              result[14].AppMenuName,
              result[15].AppMenuName,
              result[16].AppMenuName,
              result[17].AppMenuName,
              result[18].AppMenuName,
              result[19].AppMenuName,
              result[20].AppMenuName,
              result[21].AppMenuName,
              result[22].AppMenuName,
              result[23].AppMenuName,
            ],
          },
    });
}

fetch(
  "https://script.google.com/macros/s/AKfycbwi_lY7A0gA3CjLZ6pUZBQAtAoV6WSk0cWtJTjxks8Gpyeu7UHU/exec",
  )
.then(res => res.json())
.then(result => {
  console.log(result);
  test(result);
}
);
