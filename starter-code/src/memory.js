var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (array) {
  
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    // make a new array
    this.cards = copy;
  
    return copy;
  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  // console.log('back', firstCard)
  if (firstCard === secondCard) {
    this.pairsGuessed ++;
  }
  return firstCard === secondCard;
}

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed === 12;
};
