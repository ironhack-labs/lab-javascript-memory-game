class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined
    let newArr = [...this.cards]
    this.cards.splice(0)
    for (let i = 0; i < 24; i++) {
      let randomCard = Math.floor(((Math.random()) * 23 - i) + 1)

      let chosenCard = newArr.splice(randomCard, 1)
      this.cards.push(...chosenCard)
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
