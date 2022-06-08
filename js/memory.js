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
    } else {
      this.cards.sort((a, b) => 0.5 - Math.random())
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
