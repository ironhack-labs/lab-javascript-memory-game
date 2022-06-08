class MemoryGame {
  constructor(cards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    }
    return this.cards.sort((a, b) => 0.5 - Math.random())


  }

  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++

      return false

    }
  }

  checkIfFinished() {
    if (this.pairsGuessed >= 12) {
      return true
    } return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
