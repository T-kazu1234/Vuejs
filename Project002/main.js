new Vue({
  el: '#app',

  data:{
    url :[],
    imege:[],
    AppMenuName:[],
  },

mounted(){
//  function Images(width,height){
    fetch(
      "https://script.google.com/macros/s/AKfycbwi_lY7A0gA3CjLZ6pUZBQAtAoV6WSk0cWtJTjxks8Gpyeu7UHU/exec",
      )
    .then(res => res.json())
    .then(result => {
      console.log(result);
      console.log(result[0].メニュー名);
    }
  );
  },
computed:{
 data: result[0].メニュー名,
},
    });
