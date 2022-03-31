class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards) {
      const shuffledArray = this.cards.sort((a, b) => 0.5 - Math.random());
      return shuffledArray
    } else {
      return undefined
    }


  }
  checkIfPair(card1, card2) {
    let result = card1 === card2
    if (result === true) {
      this.pairsGuessed += 1
    }
    if (result === true || result === false) {
      this.pairsClicked += 1
    }
    return result
  }
  checkIfFinished() {

    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
