var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(arr) {
  var FisherYates = [],
    n = arr.length,
    while (n) {
    i = Math.floor(Math.random() * arr.length);
    if (i in arr) {
      shuffling.push(arr[i]);
      delete arr[i];
      n--;
    }
  }
  return shuffling;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
};

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed === 12){
        return true;
    }
    return false;
};