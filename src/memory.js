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
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let result;
    if (card1 === card2) {
      this.pairsGuessed++;
      result = true;
    } else if (card1 !== card2) {
      result = false;
    }
    return result;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
    //   let pairs = this.pairsGuessed;
    //   if (pairs === 0) {
    //     return false;
    //   } else if (pairs < 8) {
    //     return false;
    //   } else {
    //     return true;
    //   }
  }
}
