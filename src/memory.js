class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards) {
      return undefined
    }

    this.cards.sort((a, b) => (Math.random() - 0.5))


  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    else {
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here
    // if (this.pairsGuessed = 0) {
    //   return false
    // }
    // else if (this.pairsGuessed < 12) {
    //   return false
    // }
    // else {
    //   return true
    // }

    return this.pairsGuessed === 12

  }
}
