class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    for (let i = this.cards.length - 1; i >= 1; i--) {
      const random = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
    }
    return card1 === card2;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
