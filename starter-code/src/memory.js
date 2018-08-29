var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCards = function (cards) {
  var self = this.cards;
  var ctr = self.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = self[ctr];
      self[ctr] = self[index];
      self[index] = temp;
  }
  return self;
};



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      this.pairsClicked ++;
      if(firstCard === secondCard) {
      this.pairsGuessed ++;
      return true
      }else{
      this.pairsGuessed;
      return false
      }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed ==12){
    return true;
  }
  return false;
};