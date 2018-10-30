var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {

  let ctr = this.cards.length;
  let temp;
  let index;

    for (var i = 0; i < ctr; i ++)  {
    // Pick a random index
        index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
        ctr--;
   // And swap the last element with it
        temp = this.cards[ctr];
        this.cards[ctr] = this.cards[index];
        this.cards[index] = temp;
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked ++;

  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }

  return false;

}

MemoryGame.prototype.isFinished = function () {

  if (this.pairsGuessed === (this.cards.length / 2)) {
    return true;
  } else {
    return false;
  }

};