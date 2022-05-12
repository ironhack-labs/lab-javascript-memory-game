class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards = () => {
    // ... write your code here
    if (!this.cards) return undefined;

    let oldElement;
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      const rand = Math.floor(Math.random() * (i + 1));
      oldElement = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = oldElement;
    };
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
