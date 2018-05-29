var MemoryGame = function (cards) {
  this.cards = this.shuffleCard(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {
  // Fisher-Yates, from https://bost.ocks.org/mike/shuffle/

    var copy = [], n = cardsArr.length, i;
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * cardsArr.length);
  
      // If not already shuffled, move it to the new cardsArr.
      if (i in cardsArr) {
        copy.push(cardsArr[i]);
        delete cardsArr[i];
        n--;
      }
    }
    return copy;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  var same = (firstCard === secondCard)
  this.pairsClicked += 1;
  if (same)
    this.pairsGuessed += 1;
  return same
}


MemoryGame.prototype.finished = function () {
  return (this.pairsGuessed < 12 ? false : true)
};
