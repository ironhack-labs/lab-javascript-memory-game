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
    if (this.cards) {
      let copy = [], n = this.cards.length, i;

      // while there remain elements to shuffle
      while (n) {
        //pick a remaining element
        i = Math.floor(Math.random() * n--)

        // and move it to the new array
        copy.push(this.cards.splice(i, 1)[0])
      }
      return copy
    } else {
      return undefined
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true
    }
    else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
