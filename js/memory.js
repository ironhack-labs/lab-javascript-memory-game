class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards = typeof this.cards === "undefined" ? 0 : this.cards;

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards === 0 ? undefined : this.cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
