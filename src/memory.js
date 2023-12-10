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
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
