class MemoryGame {
  constructor(cards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) return undefined;
    for (let i = this.cards.length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[j];
      this.cards[j] = this.cards[i - 1];
      this.cards[i - 1] = temp;
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

  checkIfFinished() {
    if (this.pairsGuessed >= 8) {
      return true;
    } else {
      return false;
    }
  }
}
