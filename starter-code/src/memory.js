var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  console.log("Before", cardsArr)
  for (var i = cardsArr.length - 1; i >= 0; i--) {
    var j = randomNumber(i);
    console.log("ran", i + ":" + j)
    var tempObj = Object.assign(cardsArr[j]);
    cardsArr[j] = Object.assign(cardsArr[i]);
    cardsArr[i] = tempObj;
  }
  console.log("After", cardsArr)
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed === 12;
};

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
