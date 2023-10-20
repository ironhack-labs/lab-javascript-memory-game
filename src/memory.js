class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    else {
      const shuffled = this.cards.sort(() => {
        return Math.random() - 0.5

      })
      return shuffled
    }

  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    else {
      this.pairsClicked += 1
      return false
    }

    // ... write your code here
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }
    else {
      return false
    }
    // ... write your code here
  }
}
