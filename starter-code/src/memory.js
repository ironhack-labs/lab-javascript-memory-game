cards = [];
pickedCards = [];
pairsClicked = 0;
pairsGuessed = 0;


var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairsGuessed = pairsGuessed;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var arr = [];
for (var i = 0 ; i < cardsArr.length;) {
  var random = Math.floor(Math.random()*(cardsArr.length));
  // list[i] = cardsArr[random];
  arr.push(cardsArr[random]);
  cardsArr.splice(random,1);
}
return arr;
};

//Same function, but not method of object MemoryGame, because no need to in order to be used
function shuffleCard (cardsArr) {

  var arr = [];
for (var i = 0 ; i < cardsArr.length;) {
  var random = Math.floor(Math.random()*(cardsArr.length));
  // list[i] = cardsArr[random];
  arr.push(cardsArr[random]);
  cardsArr.splice(random,1);
}
return arr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1 ;

  if(firstCard === secondCard) {
    this.pairsGuessed +=1;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 24/2) {
    return true;
  } else {
    return false;
  }
};
