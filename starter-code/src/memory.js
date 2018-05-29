var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var result = [];
  for (var i = cardsArr.length; i > 0; i--) {
    var randomNum = Math.floor(Math.random() * cardsArr.length);
    result.push(cardsArr[randomNum]);
    cardsArr.splice(randomNum, 1);
  }
  this.cards = result;
  return result;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard){
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if ( this.pairsClicked === 0 || this.pairsGuessed < 12 ) {
    console.log("There are still pairs to match...");
    return false;
  } else {
    console.log("No more cards to choose. GAME OVER");
    return true;
  }
};
