class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // Fisher-Yates shuffle
    let newCards = JSON.parse(JSON.stringify(this.cards))

    if (!this.cards) {
      return undefined
    } else {
      for (let i = newCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = newCards[i]
        newCards[i] = newCards[j]
        newCards[j] = temp
      }
      console.log(newCards)
      return newCards
    }


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
