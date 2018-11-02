var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var cardsCopy = this.cards;

  var cardsIndex = cardsCopy.map(c => cardsCopy.indexOf(c));

  var newCards = [];

  while (cardsCopy.length > 0) {
    var ranindx = Math.floor(Math.random() * Math.floor(cardsCopy.length));
    if (cardsIndex.filter(c => c === ranindx)) {
      newCards.push(cardsCopy[ranindx]);
      cardsCopy.splice(ranindx, 1);
      cardsIndex.splice(ranindx, 1, ' ');
    }
  }

  this.cards = newCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
  
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2){
    $('.finished').toggle();
    return true;
  }
  return false;

};