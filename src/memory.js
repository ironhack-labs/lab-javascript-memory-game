class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards === undefined) { return undefined }
    this.cards.sort(() => Math.random() - 0.5)
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1
    if (card1 !== card2) { return false }
    else if (card1 === card2) {
      this.pairsGuessed = this.pairsGuessed + 1
      return true
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed < 12) { return false }
    if (this.pairsGuessed === 12) { return true }
  }
}
