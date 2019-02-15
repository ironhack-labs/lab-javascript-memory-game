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

  var i = 0;
  var cardRandom = []; //this will be new array of cards we will play with. shuffled array

  result = generateRandomIndex(); //it generates array of 24 random numbers (0-23). Elements in result are equal to card's indexes in cards1 arr.
  // It is a global function defined below;


  while (i < result.length) { // do steps for every element in result array. Idea was to find card with index equal to number from result. 
    //When we find that card put it in cardRandom array.

    newCard = cards1.find(card => cards1.indexOf(card) == result[i]);

    cardRandom.push(newCard);

    i++;
  }

  this.cards = cardRandom; // this functon should not return anything, but it should set cards property to be equal to shuffled array when it is calld on 
  //memoryGame object (this).
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

function generateRandomIndex() {

  var randomIndex = []
  while (randomIndex.length <= 23) {
    var num = Math.floor(Math.random() * 24);
    if (randomIndex.indexOf(num) === -1) randomIndex.push(num);
  }

  return randomIndex; //array which contains numbers from 0-23 (equal to card indexes in array "cards")
}