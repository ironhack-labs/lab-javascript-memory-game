class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
    // add the rest of the class properties here
  }

  // shuffleCards() {
  //   if (!this.cards) {
  //     return undefined
  //   } else {
  //     this.cards.sort(() => Math.random() - 0.5)
  //   }
  // }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      console.log(true)
      return true
    } else {
      console.log(false)
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
