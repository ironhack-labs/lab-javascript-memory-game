class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards(cards) {
    let newCards = this.cards

      if (!newCards) {
        return undefined
      } else {
        var m = newCards.length, t, i // código de internet
        while (m) {
          i = Math.floor(Math.random() * m--)
          t = newCards[m]
          newCards[m] = newCards[i]
          newCards[i] = t
        }         
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

    // ... write your code here
  }

  checkIfFinished() {

    if (this.pairsGuessed * 2 === (this.cards.length)) {
      return true
    } else {
      return false
    }
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
