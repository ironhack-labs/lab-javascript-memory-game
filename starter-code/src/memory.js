var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cardsArray) {
    var cardsArray = this.cards;
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];  
      return ;
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if(firstCard === secondCard){
    this.pairsGuessed += 1;
    return true
  } else{
    return false
  }
};

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed < this.pairsClicked){
    return false
  } else {
    return true
  }
};