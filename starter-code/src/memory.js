var MemoryGame = function (cards) { //constructor is called with cards argument and it has 3 extra properties
  this.cards = cards;
  this.pickedCards = []; //array
  this.pairsClicked = 0; //number
  this.pairsGuessed = 0; //number

};


//shuffleCards should mix cards, so every time we have different order of cards on the board. it doesn't return anything.

MemoryGame.prototype.shuffleCards = function (cards1) { //it takes current cards as argument

  if (!cards1) {
    return undefined; // in case that function is called without arguments return undefined
  }

  this.cards = _.shuffle(cards1); //LoDash method to shuffle array
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++; // it will increase it by one every time we select two cards on the board. Two cards = one pair
  this.pickedCards.push(firstCard, secondCard); //put it in array so we can comaper it + we always have info about number of steps that players makes.

  if (firstCard === secondCard) {
    this.pairsGuessed++; // this property keeps track of guessed pairs. Every guessed pair increase it for 1.
    return true;
  }

  return false;
}

MemoryGame.prototype.isFinished = function () {

  if (this.pairsGuessed != 12) { // board is 6X4= 24 cards or 12 pairs. 
    return false;
  }

  return true; // all cards are revealed. game over

};

