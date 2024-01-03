class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    }

    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i]
      let random = Math.floor(Math.random() * this.cards.length)
      this.cards[i] = this.cards[random]
      this.cards[random] = card
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
    
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}
