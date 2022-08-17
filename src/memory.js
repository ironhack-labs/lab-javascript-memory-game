class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    }
    this.cards.sort((a, b) => 0.5 - Math.random());
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}
