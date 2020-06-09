class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {

    if (!this.cards) return undefined
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomCards = Math.floor(Math.random() * (i + 1));
      const someCard = this.cards[i]
      this.cards[i] = this.cards[randomCards]
      this.cards[randomCards] = someCard
    }

    return this.cards

  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      (card1 !== card2)
      this.pairsClicked++
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else if (this.pairsClicked = 0) {
      return false
    } else {
      return false
    }
  }
}