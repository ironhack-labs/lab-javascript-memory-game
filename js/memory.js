class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards(cardsArray) {
    if (typeof this.cards === 'undefined') {
      return undefined
    }
    cardsArray.sort(() => Math.random() - 0.5)
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
    if (this.pairsGuessed < 12) {
      return false
    } else if (this.Guessed = 12) {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
