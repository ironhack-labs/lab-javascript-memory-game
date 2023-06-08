class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  //   shuffleCards method
  // should be declared
  // should return undefined if argument (cards array) is not passed
  // should return the shuffled (mixed) array of cards

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.Cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    const totalPairs = this.cards.length / 2;
    if (this.pairsGuessed === totalPairs) {
      return true;
    } else {
      return false;
    }
  }
}

// ------------------------------------------------------------
