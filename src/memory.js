class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    return this.cards ? this.cards.sort((a, b) => 0.5 - Math.random()) : undefined;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      console.log("si");
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}
