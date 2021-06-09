class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(array) {
    if (array === undefined) {
      return undefined
    }
    return array.reduce((a, v) => a.splice(Math.floor(Math.random() * array.length), 0, v) && a, [])

  }


  checkIfPair(card1, card2) {
    let value = false
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      value = true
    }
    return value
  }

  checkIfFinished() {
    let guessed = false
    if (this.pairsGuessed === this.cards.length / 2) { guessed = true }
    return guessed
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
