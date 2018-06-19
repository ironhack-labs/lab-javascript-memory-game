var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var currentIndex = cardsArr.length; 
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = cardsArr[currentIndex];
    cardsArr[currentIndex] = cardsArr[randomIndex];
    cardsArr[randomIndex] = temporaryValue;
  }

  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.finished = function () {
  console.log(this.cards);
  return this.pairsGuessed >= 12 && this.pairsGuessed > 0;
};
