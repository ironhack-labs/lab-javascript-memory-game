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
  this.pairsClicked += 1;
  if (firstCard.attr("name") === secondCard.attr("name")) {
    this.pairsGuessed +=1;
    return true;
  }
  return false;
};

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 0) {
    return false;
  }
  if (this.pairsGuessed === 12) {
    return true;
  } else {
    return false;
  }
};
