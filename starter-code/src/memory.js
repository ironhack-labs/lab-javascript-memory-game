var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

MemoryGame.prototype.shuffleCards = function () {
  if (!cards.length ==0){
    for (i =0; i< this.cards.length; i++){
      var z = Math.floor(Math.random () * (this.cards.length -i)) + 0
      this.cards[i] = this.cards [z];
    }
  }else {
    return undefined;
  }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 if (firstCard === secondCard){
   this.pairsClicked++;
   this.pairsGuessed++;
   return true;
 }
 if (firstCard != secondCard){
   this.pairsClicked++;
   return false;
 }
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  } else {
    return false;
  }
};