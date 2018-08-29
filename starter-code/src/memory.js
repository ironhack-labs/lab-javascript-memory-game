var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    var self = this;
    var m = this.cards.length, t, i;
    t = this.cards;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = self.cards[m];
      self.cards[m] = self.cards[i];
      self.cards[i] = t;
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
   this.pairsClicked++;
   console.log("1+ to clickedCards");
   if (firstCard === secondCard) {
    this.pairsGuessed++;
    console.log("CONGRATS 1 TO PAIRS GUESSED");
    return true;
   }else {
     console.log("sorry try again");
     
     return false;
   }
}

MemoryGame.prototype.isFinished = function () {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
};