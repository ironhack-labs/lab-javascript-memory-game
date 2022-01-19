class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards <= this.cards.length) { return undefined } else {
      let car = this.cards.length, t, i
      while (car) {
        i = Math.floor(Math.random() * car--)
        t = this.cards[car]
        this.cards[car] = this.cards[i]
        this.cards[i] = t
      }
      return this.cards
    }
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++


      return true
    }
    else
      return false


    // ... write your code here
  }

  checkIfFinished() {
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
