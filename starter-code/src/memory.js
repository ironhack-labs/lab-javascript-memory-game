var MemoryGame = function (cards) {
  this.cards = cards;

  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.cardsFlipped = 0;
};




MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  firstCard = pickedCard[0];
  secondCard = pickedCard[1];
  this.pairsClicked++;

  if (firstCard.name === secondCard.name) {
    this.pairsGuessed++;
    return true;

  } return false;

}



MemoryGame.prototype.isFinished = function () {
  this.pairsGuessed == this.cards.length / 2; 

};




