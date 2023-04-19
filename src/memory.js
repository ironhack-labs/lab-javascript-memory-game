class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    return this.cards.sort(() => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false
    }
  }
}
