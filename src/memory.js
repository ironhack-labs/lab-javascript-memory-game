class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (this.cards === undefined) { return undefined }
    return this.cards.sort(() => 0.5 - Math.random())

  }

  checkIfPair(card1, card2) {
    if (card1 != card2) {
      this.pairsClicked += 1
      return false
    } else if (card1 = card2) {
      this.pairsGuessed += 1
      return true
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
