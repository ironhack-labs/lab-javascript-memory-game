class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) return undefined
    this.cards.sort((a, b) => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = +1

    if (card1 === card2) {
      this.pairsGuessed++
      return true

    }

    if (card1 != card2) {
      return false
    }


  }

  checkIfFinished() {
    return this.pairsGuessed === 12
  }
}
