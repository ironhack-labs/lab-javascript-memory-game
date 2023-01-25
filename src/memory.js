class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(card1, card2) {
    // ... write your code here
    if (!this.cards) return undefined

    for (let i = 0; i < this.cards.length; i++) {
      let shuffledCards = Math.floor(Math.random() * this.cards.length)
      let temporaryCard = this.cards[i]
      this.cards[i] = this.cards[shuffledCards]
      this.cards[shuffledCards] = temporaryCard
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0) {
      return false
    } else if (this.pairsGuessed < 12) {
      return false
    } else return true
  }
}