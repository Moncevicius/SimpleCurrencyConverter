const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
  music.forEach(function (value, index, array){
      console.log(`My favorite music is ${value} choosing from ${array}`);
  });
}