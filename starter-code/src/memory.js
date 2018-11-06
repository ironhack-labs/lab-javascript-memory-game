class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {}

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked += 1;
    if (firstCard === secondCard) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

isFinished (){
  if (this.pairsGuessed = cards.length/2){
    return true}
    else {return false}
  }
}


//var MemoryGame = function (cards) {
// this.cards = cards;
// };

// MemoryGame.prototype.shuffleCards = function () {
// };

// MemoryGame.prototype.isFinished = function () {
// };
