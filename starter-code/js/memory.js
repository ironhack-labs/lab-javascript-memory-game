class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let mixedCards = this.cards;
    for (let i = mixedCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      mixedCards[i] = mixedCards[j];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    }

    return false;
  }
}
