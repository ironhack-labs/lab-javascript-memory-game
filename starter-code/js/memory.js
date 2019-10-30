class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.cards = this.cards.sort(function() {
      return Math.random() - 0.5;
    });
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
