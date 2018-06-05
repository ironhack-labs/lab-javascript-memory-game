var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype._shuffleArray = function (array) {
  //array i barrejat (buit)
  //barrejat[0] = array[random]
  //array.splice(random, 1)

  // var arrayCopia = [];
  // for (var j = 0; j<array.length; j++)
  // {
  //   arrayCopia[j] = array[j];
  // }
  // var barrejat = [];
  // var iterations = arrayCopia.length;
  // for (var i=0; i<iterations; i++)
  // {
  //   var random = Math.floor(Math.random() * arrayCopia.length);
  //   barrejat[i] = arrayCopia[random];
  //   arrayCopia.splice(random, 1);
  // }

  // return barrejat;

  var m = array.length,
  t,
  i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  return this._shuffleArray(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard != secondCard && firstCard.name === secondCard.name) 
  // if (firstCard === secondCard)
  {
    this.pairsGuessed ++;
    return true;
  } 
  else return false;
}

MemoryGame.prototype.finished = function () {
  if (this.cards.length === 0 || this.pairsGuessed * 2  < this.cards.length) return false;
  if(this.pairsGuessed * 2 >= this.cards.length) return true;
};
