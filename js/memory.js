class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }

    for (let i = this.cards.length - 1; i >= 1; i -= 1) {
      let j = Math.round(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here

    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
