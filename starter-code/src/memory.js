var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  // ugly Fisher–Yates shuffle algorithm
  var arr = this.cards;
  for (var i=0; i<arr.length; i++){
    var j = Math.floor(Math.random()*arr.length);
    var tempEl = arr[j];
    arr[j] = arr[i];
    arr[i] = tempEl;
  };
  this.cards = arr;

  // Prettier but naive sort
  // this.cards = this.cards.sort(() => Math.random() - 0.5);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard===secondCard){
    this.pairsGuessed += 1;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed===this.cards.length/2){
    return true;
  }
  return false;
};