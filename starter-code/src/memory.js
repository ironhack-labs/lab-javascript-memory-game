
// Constructor
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []; // guarda las cartas que el usuario a levantado
  this.pairsClicked = 0; // pares clicadas
  this.pairsGuessed = 0; // pares acertadas
};

// simple fisher yates implementation
 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var randomizedCardsArr = [];
    var array = cardsArr.slice(); // hacemos una copia del array cardsArr
    
    while (array.length !== 0) {
      var rIndex = Math.floor( array.length * Math.random() );
      randomizedCardsArr.push( array[rIndex] );
      array.splice( rIndex, 1 );
    }

    return randomizedCardsArr;

//var cardsArr = [1,2,3,4,5,6,7,8];
// Testing
//console.log(shuffle(cardsArr));
};

// ¿Las cartas son pares?
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  if ( firstCard === secondCard ) {
    this.pairsGuessed += 1;
    return true;
  } else {
    this.pairsClicked += 1;
    return false;
  }

}

MemoryGame.prototype.finished = function () {

  if ( this.pairsClicked == 0 ) {
    return false;
  } else if ( this.pairsGuessed === this.cards.length ) {
    console.log(this.pairsGuessed);
    console.log(this.cards.length);
    return true;
  } else {
    return false;
  }
};

