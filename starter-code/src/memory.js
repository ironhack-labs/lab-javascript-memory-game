var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0; //at first it will be 0
  this.pairsGuessed = 0;

};

// function Person(firstname, lastname){
//   this.firstname=firstname;
//   this.lastname=lastname
//   this.fullname=firstname + lastname
// }

// MemoryGame.prototype._shuffleCard = function() {
//   return this.cards.shuffle([])

// };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  return _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard === secondCard) {
    this.pairsGuessed ++
    return true
  }
  return false
};

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed*2 === this.cards.length){
    alert('YIIPPEE')
    return true;
  }
  return false
};
