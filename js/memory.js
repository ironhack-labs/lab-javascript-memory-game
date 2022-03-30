class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    let array = this.cards
    if (!array) {
      return undefined
    }
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let buffer = 0
      buffer = array[j]
      array[j] = array[i]
      array[i] = buffer
    }
    return array
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
    // ... write your code here
  }

  checkIfFinished() {
    console.log("guesed", this.pairsGuessed, "cardslength ", this.cards.length)
    if (this.pairsGuessed === 12) {
      return true
    }
    else {
      return false
    }

    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
