var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var shuffledCards = [], 
    n = cardsArr.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      if (i in cardsArr) {
        shuffledCards.push(cardsArr[i]);
        delete cardsArr[i];
      }
    }
return shuffledCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
    if (firstCard == secondCard) {
    this.pairsGuessed ++; 
    return true;
    } else {
      return false;
    }
};
MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 12){
      return true;
  }
  return false;
};