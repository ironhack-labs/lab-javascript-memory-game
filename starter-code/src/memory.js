var MemoryGame = function (cards) {
 this.cards = cards;
 this.pickedCards = [];
 this.pairsClicked = [];
 this.pairsGuessed =[];
};

MemoryGame.prototype.shuffleCard = function (cards) {
var randomDeck = [];
  var cardsToShuffle = cards.slice();
  while (array.length !== 0) {
  	var cardIndex = Math.floor(cardsToShuffle.length * Math.random());
    randomDeck.push(array[cardIndex]);
    array.splice(cardIndex, 1)
  }
  return randomDeck;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked.push(firstCard, secondCard);

  if (firstCard.name !== secondCard.name) {
    return false;
  } else {
     this.pairsGuessed += 1;
     return true;
  }
};

MemoryGame.prototype.finished = function () {

};
