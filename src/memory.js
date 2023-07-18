class MemoryGame {
  constructor(cards) {
    this.cards = cards,
    // add the rest of the class properties here
    this.pairsClicked = 0,
    this.pairsGuessed = 0,
    this.pickedCards = []
  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards) {
      return undefined
    }

    function ramdonComparison(a, b) {
      return Math.random() - 0.5;
    }

    this.cards.sort(ramdonComparison)
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

    if (this.pairsGuessed === 12) {
      return true
    }
    return false
  }
}
