class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }


  shuffleCards() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = this.cards[currentIndex]
      this.cards[currentIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
    }
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      return this.pairsGuessed++, true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed <= 12) {
      return false
    } else {
      return true
    }
  }

}