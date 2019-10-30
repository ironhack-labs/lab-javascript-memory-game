class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

    // add the rest of the class properties here
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5)
  }



  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }



  isFinished() {
    let maxCards = this.cards.length
    if (this.pairsGuessed == maxCards / 2) {
      return true
    }
    return false
  }
}


