var MemoryGame = function (cards) {
  this.cards = cards;
  // this.cards = this.shuffleCard(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {

  var shuffled = [];
  var max = cardsArr.length;
  while (max > 0) {
    var chosen = Math.floor(Math.random() * cardsArr.length);
    if (chosen in cardsArr) {
      shuffled.push(cardsArr[chosen]);
      delete cardsArr[chosen];
      max--;
    }
  }
  return shuffled;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
  var self = this;
  self.pairsClicked++;
  if (firstCard === secondCard) {
    self.pairsGuessed++;
    // do I have to remove correct cards from the cards array (aka game board)?
    self.cards.splice(self.cards.indexOf(firstCard), 1)
    self.cards.splice(self.cards.indexOf(secondCard), 1)
    return true;
  }
  else {
    return false;  
  }   
}

MemoryGame.prototype.finished = function() {
  var self = this;
  return (self.pairsGuessed === 12)
};