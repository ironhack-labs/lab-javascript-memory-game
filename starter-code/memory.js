//******************************************************************
// Game Logic
//******************************************************************

var cardCharacters = [
  {name: "aquaman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/aquaman.jpg"},
  {name: "batman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/batman.jpg"},
  {name: "captain america", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/captain-america.jpg"},
  {name: "fantastic four", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/fantastic-four.jpg"},
  {name: "flash", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/flash.jpg"},
  {name: "green arrow", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/green-arrow.jpg"},
  {name: "green lantern", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/green-lantern.jpg"},
  {name: "ironman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/ironman.jpg"},
  {name: "spiderman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/spiderman.jpg"},
  {name: "superman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/superman.jpg"},
  {name: "the avengers", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/the-avengers.jpg"},
  {name: "thor", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/thor.jpg"},
];

var charactersAgain = [
  {name: "aquaman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/aquaman.jpg"},
  {name: "batman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/batman.jpg"},
  {name: "captain america", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/captain-america.jpg"},
  {name: "fantastic four", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/fantastic-four.jpg"},
  {name: "flash", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/flash.jpg"},
  {name: "green arrow", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/green-arrow.jpg"},
  {name: "green lantern", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/green-lantern.jpg"},
  {name: "ironman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/ironman.jpg"},
  {name: "spiderman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/spiderman.jpg"},
  {name: "superman", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/superman.jpg"},
  {name: "the avengers", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/the-avengers.jpg"},
  {name: "thor", img: "/Users/tahirafarid/Codecamp/WK2/day2/lab-javascript-memory-game/starter-code/img/thor.jpg"}
];




function MemoryGame(){
  this.cardCheckerOne = [];
  this.cardCheckerTwo = [];

this.randomCardOne = function(){
  for (var randomPosition in this.cardCharacters) {
  do randomPosition = Math.floor(Math.random()* cardCharacters.length);
   while (this.cardCheckerOne === randomPosition);
}
  this.cardCheckerOne.push(randomPosition);
  // console.log(cardCheckerOne);
  // console.log(randomPosition);
 };
randomCardOne();

this.randomCardTwo = function() {
  for (var randomPositionTwo in this.charactersAgain) {
    do randomPositionTwo = Math.floor(Math.random()* charactersAgain.length);
      while (this.cardCheckerTwo === randomPositionTwo);
  }
  this.cardCheckerTwo.push(randomPositionTwo);
  // console.log(randomPositionTwo, cardCheckerTwo);
 };
randomCardTwo();

this.cardCompare = function() {
  if (this.cardCheckerOne === this.cardCheckerTwo) {
    alert("Its a match");
  }
  else {
    alert("No match");
  }
  console.log(this.cardCheckerOne, this.cardCheckerTwo);
};
cardCompare();


}

var pickCard = new MemoryGame();
pickCard.randomCardOne();

//  function MemoryGame(character){
// this.character = character;
//
// var firstCard = randomCard();
// var secCard = randomCard();
//
// var compareCards = function(character){
//   if (firstCard === secCard) {
//     return ("Its a match");
//   } else {
//     return false;
//
//   }
//   };
// }
//
//
//
//
//
//
//
//
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
//
//
//
//
//
// $(document).ready(function(){
// });
