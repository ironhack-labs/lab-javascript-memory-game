class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1.dataset.cardName === card2.dataset.cardName) {
      this.pairsGuessed++
      return true
    } else {
      unFlipCards(card1)
      unFlipCards(card2)
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed < this.cards.length / 2) {
      return false
    } else {
      return true
    }
  }
}