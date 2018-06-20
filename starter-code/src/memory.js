var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {  
  var newArr = [];
  var i = 0
  var j = 0
  var temp = null

  for (i = cardsArr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = cardsArr[i]
    cardsArr[i] = cardsArr[j]
    cardsArr[j] = temp
    newArr.push(cardsArr[j]);
  }
  return newArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard) {
    this.pairsGuessed++
  }
  return firstCard === secondCard;
}

MemoryGame.prototype.finished = function () {
return this.pairsClicked === 12 || this.pairsGuessed === 12;
}
