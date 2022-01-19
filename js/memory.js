class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    if (!this.cards) { return undefined }
    else {
      let shuffled = this.cards.sort(() => Math.random() - 0.5)
      return shuffled
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
    if (this.pairsGuessed === this.cards.length / 2) { return true }
    else { return false }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
