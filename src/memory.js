class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
      for (var i = this.cards.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1))
        const currentCard = this.cards[i]
        const cardToSwap = this.cards[swapIndex]
        this.cards[i] = cardToSwap
        this.cards[swapIndex] = currentCard
      }
      return this.cards
    }

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}
