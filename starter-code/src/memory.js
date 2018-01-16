var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var shuffledCards = [];
  var i = 0;

  // While there remain elements to shuffle…
  while (cardsArr.length > 0) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * cardsArr.length);

    // If not already shuffled, move it to the new array.
    if (cardsArr[i] <= cardsArr.length) {
      shuffledCards.push(cardsArr[i]);
      delete cardsArr[i];
    }
  }

  return shuffledCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard == secondCard){
    this.pairsGuessed += 1;
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if(this.cards.length != 0 && this.pairsGuessed == (this.cards.length / 2) ){
    return true;
  }
  else{
    return false;
  }
};
