

var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  const { cards } = this;
  let m = cards.length, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    [cards[m], cards[i]] = [cards[i], cards[m]];
  }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked = +1 // es this por que con el prototype ya estoy dentro del objeto
    if (firstCard == secondCard){
      this.pairsGuessed = +1
      return true
    };
    if (firstCard !== secondCard){ 
      this.pairsGuessed = +0
      return false
    };
    
  }

MemoryGame.prototype.isFinished = function () {
  
  if (this.pairsGuessed === this.cards.length/2){
    return true
  }
  return false
};

