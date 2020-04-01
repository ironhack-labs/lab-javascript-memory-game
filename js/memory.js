class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    let i = this.cards.length,
      k, temp
    while (--i > 0) {
      k = Math.floor(Math.random() * (i + 1))
      temp = this.cards[k]
      this.cards[k] = this.cards[i]
      this.cards[i] = temp
    }
    return this.cards
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
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}