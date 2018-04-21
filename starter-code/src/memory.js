var MemoryGame = function (cards) {
  //all the cards (24)
  this.cards = cards;
  //the length of this array is 2, and it contains 2 cards that we are comparing
  this.pickedCards = [];
  // the goal is to get to 12 guessed pairs
  this.pairGuessed = 0;
  // this number updates every 2 cards clicked
  this.pairClicked = 0;

};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  this.cards = _.shuffle(cardsArr);
  console.log("shuffled array: ", this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard === secondCard){
    console.log("match!");
  }
}

// MemoryGame.prototype.finished = function () {

// };
