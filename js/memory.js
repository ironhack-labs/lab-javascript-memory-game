class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    if (this.cards) {
      let m = this.cards.length, t, i
      while (m) {
        i = Math.floor(Math.random() * m--)
        t = this.cards[m]
        this.cards[m] = this.cards[i]
        this.cards[i] = t
      }
      return this.cards
    } else {
      return undefined
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
  isFinished() {
    while (this.pairsGuessed < this.cards.length / 2) {
      return false
    }
    return true
  }
}