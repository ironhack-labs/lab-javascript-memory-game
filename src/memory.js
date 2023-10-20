class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
    this.shuffleCards()

  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
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
    if (this.pairsClicked === 0) {
      return false
    } else if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }

  }
}

