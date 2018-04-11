var MemoryGame = function (cards, pickedCards, pairsClicked, pairsGuessed) {
  this.cards = cards;
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairsGuessed = pairsGuessed;
};


// Shuffle the cards
MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var elm = cardsArr.length, t, i;
  while (elm) {
    i = Math.floor(Math.random() * elm--);
    t = array[elm];
    array[elm] = array[i];
    array[i] = t;
  }
  return cardsArr;
};


// Check if cards are a pair
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

}

// MemoryGame.prototype.finished = function () {

// };
