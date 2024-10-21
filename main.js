// Kung Fu Panda Slideshow / Gallery
//global variabless
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];

// create image gallery
let imgContainerEl = document.getElementById("img-container");

for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += "<img src= 'images/" + imgPaths[i] + "'>";
}

// let imgIndex = 0;

// //event listners
// document.getElementById("next").addEventListener("click", nextSlide);
// document.getElementById("random").addEventListener("click", randomSlide);

// //event functions
// function nextSlide() {
//   //increment Index, loop if necessary
//   imgIndex++;
//   if (imgIndex == imgPaths.length) {
//     imgIndex = 0;
//   }

//   //display the new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// // Math.randomDec = function (low, high) {
// //   return Math.random() * (high - low) + low;
// // };

// // Math.randomInt = function (low, high) {
// //   return Math.floor(Math.randomDec(low, high));
// // };

// //--------------------------------------------------

// function randomSlide() {
//   //get random index
//   imgIndex = Math.randomInt(0, imgPaths.length);

//   //display the new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }
