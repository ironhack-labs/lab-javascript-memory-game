var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

//mezcla las cartas
MemoryGame.prototype.shuffleCards = function () {
  for (var i = this.cards.length -1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var tmp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j]= tmp;
  }
};
//si la firstCard y secondCard son iguales, se suman a la función pairsGuessed.
//al empezar la función, suma +1 a pairs_clicked.
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.pairsClicked++;
if (firstCard === secondCard) {
  this.pairsGuessed++;
  return true;
  }
  return false;
};

//cuando las cartas (dos cada vez) sumadas en pairsClicked llegan a 12
//se activa esta función
MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 12){
    return true;
  } { return false;
  }
};
