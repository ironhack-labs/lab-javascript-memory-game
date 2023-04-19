class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards === undefined) {
      return undefined
    } else {
      return this.cards.sort(() => Math.random() - 0.5);
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else if (this.pairsGuessed < this.cards.length / 2) {
      return false
    }

  }
}
