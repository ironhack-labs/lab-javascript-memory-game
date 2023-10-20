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
    let i = this.cards.length;
    while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
      [this.cards[temp], this.cards[i]] = [this.cards[i], this.cards[temp]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    }
    return false;
  }
}
