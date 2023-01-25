class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    if (!this.cards) {
      return undefined
    } else {
      return this.cards.sort((_a, _b) => Math.random() - 0.5)
    }
  }


  checkIfPair(card1, card2) {
    if (this.checkIfPair) {
      this.pairsClicked++
    }
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
    } return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}


// this.pairsClicked.push(1)

// this.pairsClicked.push(1)


//  && this.pairsGuessed.push(1)
