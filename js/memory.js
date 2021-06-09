class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    // las funciones de Fisher Yates me funcionan exactamente igual que esto.
  }

  checkIfPair(card1, card2) {

    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }










  }


  checkIfFinished(checkIfPair) {

    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }



  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
