class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) return undefined
    this.cards.forEach((elm, i, arr) => {
      const random = Math.floor(Math.random() * (arr.length));
      [arr[random], arr[i]] = [arr[i], arr[random]]
    })
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } return false
  }

  checkIfFinished() {
    return this.pairsGuessed === 12
  }
}
