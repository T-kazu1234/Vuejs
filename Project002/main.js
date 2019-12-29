  function test(result){

  new Vue({

        el: '#app',
          data: {
            url:[
              result[0].URL,
              result[1].URL,
              result[2].URL,
              result[3].URL,
              result[4].URL,
              result[5].URL,
              result[6].URL,
              result[7].URL,
              result[8].URL,
              result[9].URL,
              result[10].URL,
              result[11].URL,
            ],
            image:[
              result[0].image,
              result[1].image,
              result[2].image,
              result[3].image,
              result[4].image,
              result[5].image,
              result[6].image,
              result[7].image,
              result[8].image,
              result[9].image,
              result[10].image,
              result[11].image,
            ],
            AppMenuName:[
              result[0].AppMenuName,
              result[1].AppMenuName,
              result[2].AppMenuName,
              result[3].AppMenuName,
              result[4].AppMenuName,
              result[5].AppMenuName,
              result[6].AppMenuName,
              result[7].AppMenuName,
              result[8].AppMenuName,
              result[9].AppMenuName,
              result[10].AppMenuName,
              result[11].AppMenuName,
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
