class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = [] //to store the cards that user has clicked
    this.pairsClicked = 0 
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) {
       return undefined
     } else {
      this.cards.sort(() => Math.random() - 0.5)
      }
      return this.cards
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
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    return false
  } 
}
