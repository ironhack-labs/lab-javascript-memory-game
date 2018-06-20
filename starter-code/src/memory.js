var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  /*var i = 0;
  var j = 0;
  var temp = null;
  for (i = cardsArr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = temp;
  }
  return cardsArr;*/

  var b = cardsArr.length;
  cont = [];
  console.log(cardsArr.length)
  for (i = 0; i < b; i++) {
    var temp = cardsArr[0];
    var a = Math.floor(Math.random() * b);
    while (cont[a]) {
      var a = Math.floor(Math.random() * b);
    }
    cont[a] = temp;
    cardsArr.splice(0, 1);
  }
  cardsArr = cont;
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    this.pairsClicked++;
    return true;
  } else {
    this.pairsClicked++;
    return false;
  }
};
MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed == "12") {
    return true;
  } else {
    return false;
  }
};
