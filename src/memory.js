class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards() {
    if (!this.cards) { return undefined } else {
      return this.cards.sort(() => Math.random() - 0.5);
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}
