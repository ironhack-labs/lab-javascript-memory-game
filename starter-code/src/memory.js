var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = [];
   this.pairsGuessed = []
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var result = [], n = this.cards.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    result.push(this.cards.splice(i, 1)[0]);
  }

  return result;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(this.pickedCards.length == 2){
    var card1 = this.cards[0];
    var card2 = this.cards[1];

    if(card1.name == card2.name){
      this.pairsGuessed++;
    } else {
      this.pairsClicked++;
    }
    this.pickedCards = [];
  }
}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed == 12){
    alert('You win'); // All pairs found therefore he wins
  }
};