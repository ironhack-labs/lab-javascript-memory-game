var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};




MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var newarray = [];
  var length = cardsArr.length;
  var random= 0;
  for (var i = 0; i < length; i++) {
 random = Math.floor(Math.random()*(cardsArr.length));
 newarray.push(cardsArr[random]);
 cardsArr.splice(random, 1);
}
this.cards = newarray
return newarray;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
if (firstCard === secondCard) {
  this.pairsGuessed++;
  return true;
  
} else {
  return false;
  
  }  
}

MemoryGame.prototype.finished = function () {
if (this.cards.length === 0) {
  return false;
} else if (this.pairsGuessed === this.cards.length/2) {
  return true;
} else {
  return false;

}

};

