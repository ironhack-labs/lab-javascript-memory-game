class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {
    return card1 === card2;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}