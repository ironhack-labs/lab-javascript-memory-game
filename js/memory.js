class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  
  shuffleCards(array) {
    if (!array) {
      return undefined
    }
    array.reduce((a, v) => a.splice(Math.floor(Math.random() * array.length), 0, v) && a, [])

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
 this.shuffleCards()
 if()
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
