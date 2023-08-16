class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    this.cards.sort(() => Math.random() - 0.5);
  }
  checkIfPair(card1, card2) {
    // ... write your code here

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed < 12) {
      return false
    }

    if (this.pairsGuessed >= 12 ) {
      return true
    }
  }
}
