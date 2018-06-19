//Constructor
var MemoryGame = function (cards) {
  this.cards = cards
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

//Function thar shuffles the cards
MemoryGame.prototype.shuffleCard = function (cardsArr) {
  return _.shuffle(cardsArr)
};

//Function that checks if two cards are the same
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard == secondCard) {
    this.pairsGuessed++
    return true
  } else {
    return false
  }
}

//Function thar checks if the game has finished
MemoryGame.prototype.finished = function () {
  return (this.pairsGuessed >= 12)
};
