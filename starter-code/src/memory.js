class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsClicked === 0) {
      return false;
    }
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else if (this.pairsGuessed === 0) {
      return false;
    }
  }
}
MemoryGame.prototype.shuffleCards = function() {};
