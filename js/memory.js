class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    if (this.cards === undefined) return undefined
    const shuffledArray = this.cards.sort((a, b) => 0.5 - Math.random());
    return shuffledArray
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

    if (this.pairsGuessed === 12) {

      return true

    } else {

      return false

    }

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
