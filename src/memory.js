class MemoryGame {
  constructor(cards, pickedCards = [], pairsClicked = 0, pairsGuessed = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards
    this.pairsClicked = pairsClicked
    this.pairsGuessed = pairsGuessed
  }

  shuffleCards(cards) {
    if (!this.cards) {
      return undefined
    }
    return this.cards.sort(() => Math.random() - 0.5)
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }

  checkIfFinished() {
    return this.pairsGuessed === 12
  }

}
