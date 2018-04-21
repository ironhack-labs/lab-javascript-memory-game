var MemoryGame = function (cards) {
  // all the cards  (24)
  this.cards = cards;
  // the length of this array is 2 and it contains 2 cards that we are comparing
  this.pickedCards = [];
  // the goals is to get 12 guessed pairs
  this.pairsGuessed = 0;
  // this number updates every 2 cards clicked
  this.pairsPicked = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  this.cards = _.shuffle(cardsArr);
};

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

// }

// MemoryGame.prototype.finished = function () {

// };
