var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    this.cards = shuffle(this.cards);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  
  if (firstCard === secondCard){
    this.pairsGuessed ++;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2){
    return true;
  } return false;
};