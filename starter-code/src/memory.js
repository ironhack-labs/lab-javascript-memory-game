var MemoryGame = function (cards) {
  this.cards = cards; //array of objects
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0; 
};

MemoryGame.prototype.shuffleCards = function () {

var randomCardIndex;
var cardToMove;
for (var indexLoop = 0; indexLoop < this.cards.length; indexLoop++) {
  randomCardIndex = Math.floor(Math.random()*this.cards.length);
  cardToMove = this.cards[randomCardIndex];

  this.cards[randomCardIndex] = this.cards[indexLoop];
  this.cards[indexLoop] = cardToMove;
}

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
  console.log(firstCard)
  this.pairsClicked += 1;

  if (firstCard == secondCard) {
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == this.cards.length/2) {
    return true;
  } else {
    return false;
  }
};