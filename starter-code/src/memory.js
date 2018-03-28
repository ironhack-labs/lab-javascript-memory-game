var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {

    var copy = [], n = cardsArr.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * cardsArr.length);
  
      // If not already shuffled, move it to the new array.
      if (i in cardsArr) {
        copy.push(cardsArr[i]);
        delete cardsArr[i];
        n--;
      }
    }
  
    return copy;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
  this.pairsClicked++;  

  if (firstCard === secondCard){
      this.pairsGuessed++;
      return true;
    }
    else {
      return false;
    }
}

MemoryGame.prototype.finished = function () {
  
  return false;

  if (this.pairsGuessed == (this.cards.length)/2){
    return true;
  }
  
};
