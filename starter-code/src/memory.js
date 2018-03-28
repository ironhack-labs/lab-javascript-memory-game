var MemoryGame = function (cards) {
  var self = this;
  self.cards = cards,
  self.pickedCards = [],
  self.pairsClicked = 0,
  self.pairsGuessed = 0
};

// To create new memoryGame instance
// var memoryGame = new MemoryGame ([2, 11, 37, 42]);


// -- ASK TO WALK THROUGH SHUFFLE METHODOLOGY 
MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var currentCardIndex = cardsArr.length,
    temporaryValue,
    randomCardIndex;

  // While there remain elements to shuffle...
  while (0 !== currentCardIndex) {
    // Pick a remaining element...
    randomCardIndex = Math.floor(Math.random() * currentCardIndex);
    currentCardIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardsArr[currentCardIndex];
    cardsArr[currentCardIndex] = cardsArr[randomCardIndex];
    cardsArr[randomCardIndex] = temporaryValue;
  }

  return cardsArr;
}

// To call the shuffleCard function
// memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);

// Check if pair and if so, tell UI it is a pair (so far only capturing true/false if it is a pair)
var pair;

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
  self.pairsClicked += 1;
  
  if (firstCard.name = secondCard.name) {
    self.pairsGuessed += 1;
    pair = true;
  }
}

MemoryGame.prototype.finished = function () {

};

*/