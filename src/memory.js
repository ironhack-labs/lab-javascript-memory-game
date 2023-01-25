class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const randNum = Math.floor(Math.random() * (i + 1))
        this.cards[i] = this.cards[randNum]
      }
      return this.cards
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (!this.pairsClicked && !this.pairsGuessed) {
      return false
    } else if (this.pairsGuessed < 12) {
      return false
    } else {
      return true
    }
  }
}
