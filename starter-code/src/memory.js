var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function (arr) {
  arr = this.cards
 var currentIndex = arr.length, temporaryValue, randomIndex;

 // While there remain elements to shuffle...
 while (0 !== currentIndex) {

   // Pick a remaining element...
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   // And swap it with the current element.
   temporaryValue = arr[currentIndex];
   arr[currentIndex] = arr[randomIndex];
   arr[randomIndex] = temporaryValue;
 }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard === secondCard) {
    this.pairsGuessed++
    return true
  } else {
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.cards.length /  2 === this.pairsGuessed) {
    return true
  } else {
    return false
  }
};