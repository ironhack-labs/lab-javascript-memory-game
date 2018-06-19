var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var current, randomNumber, randomPos;
  for(var i = 0; i<cardsArr.length; i++){
    randomNumber = Math.floor(Math.random()*cardsArr.length);
    current = cardsArr[i];
    randomPos = cardsArr[randomNumber];
    cardsArr[i] = randomPos;
    cardsArr[randomNumber] = current;
  }
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard==secondCard){
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed == 12;
};
