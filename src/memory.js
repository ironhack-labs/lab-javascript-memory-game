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
    return this.cards === undefined ? undefined : this.cards.sort((a, b) => 0.5 - Math.random())
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  this.pairsClicked++
  return card1 === card2 ? (this.pairsGuessed++, true) : false
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2 ? true : false
    
  }
}
