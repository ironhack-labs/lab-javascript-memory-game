var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function(a,b){
    return Math.random() - 0.5;
  });
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.pairsClicked++;
if(firstCard === secondCard){
  this.pairsGuessed++;
  return true;
} else {return false;}
}

MemoryGame.prototype.isFinished = function () {
if (this.pairsGuessed === this.cards.length/2){
  return true;
} else {return false;};
}; //si la cantidad de parejas adivinadas son iguales que la mitad de la longitud de las cartas, el juego termina

function classChange(elm) {
  $(elm).toggleClass("front");
  $(elm).toggleClass("back");
  $(elm).siblings().toggleClass("front");
  $(elm).siblings().toggleClass("back");
  $(elm).toggleClass("faceup");
}; // con esta función simplificamos las llamadas para cambiar la clase durante el juego.
