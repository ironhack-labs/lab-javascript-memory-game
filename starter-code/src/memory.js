var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var shuffledCards = cardsArr;
  var m = shuffledCards.length, t, i;

  // Fisher-Yates Shuffle
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = shuffledCards[m];
    shuffledCards[m] = shuffledCards[i];
    shuffledCards[i] = t;
  }

  return shuffledCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }

  return false;
  
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 12) {
    return true;
  }

  return false;

};
