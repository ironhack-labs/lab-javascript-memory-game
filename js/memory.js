class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    if (!cards) return undefined

    for (var i = cards.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * (i + 1))
      const currentCard = cards[i]
      const cardToSwap = cards[swapIndex]

      cards[i] = cardToSwap
      cards[swapIndex] = currentCard
    }
    return cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
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