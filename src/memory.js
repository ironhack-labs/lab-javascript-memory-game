class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairClicked = 0
    this.pairGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {

    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.PairsClick++
    if (card1 === card2) {
      this.PairsGuessed++
      return true
    } else {
      return false
    }

    // ... write your code here
  }

  checkIfFinished() {
    if (this.pairGuessed === this.cards / 2) {
      return true
    } else {
      return false
    }

    // ... write your code here
  }
}
