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
    let i = this.cards.length - 1;
    let newOrder = [];
    let j = 0;
    while (0 <= j <= i) {
      j = Math.floor(Math.random * i);
      newOrder.push(this.cards[j]);
      this.cards.pop(this.cards[j]);
      i--;
    }
    return newOrder;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
    }
    return card1 === card2;
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0) {
      return false;
    } else if (this.pairsGuessed > 0) {
      return this.cards.length / 2 === this.pairsGuessed;
    }
  }
}
