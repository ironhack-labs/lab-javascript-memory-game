class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(!this.cards) return undefined 
    else {
    const randomShuffle = this.cards.sort((a, b) => 0.5 - Math.random())
      return randomShuffle
    } 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else { return false }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 8) {
      return true
    } else { return false }

  }
}