class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here

    if (this.cards.length < 0) {
      return undefined
    }


    // Esto lo he intentado adaptar de stackoverflow pero no lo acabo de entender
    else {
      for (let i = this.cards.length; i > 0; i--) {
        let j = Math.floor(Math.random() * (i--))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }

    }




  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    }
    else {
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == this.cards.length / 2) {
      return true
    }
    else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
