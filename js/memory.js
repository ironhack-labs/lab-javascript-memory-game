class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards() {
    //if (typeof !this.cards === 'undefined') {
    //  return undefined
    //}


    const random = this.cards.sort(() => Math.random() - 0.5)

    return random

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
  isFinished() {

    if (this.pairsGuessed === 0) {
      return false

    } else if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }







  }
}