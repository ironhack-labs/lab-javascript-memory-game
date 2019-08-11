class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      let random = Math.floor(Math.random * this.cards.length);
      this.cards[i] = this.cards[random];
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) return true;
    return false;
  }
}
