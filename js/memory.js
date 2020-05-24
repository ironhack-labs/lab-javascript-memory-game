class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards() {
    if (!this.cards) {
      return undefined
    }

    const shuffledCards = []
    while (this.cards.length) {
      const randomNumber = Math.floor(Math.random() * this.cards.length)
      const randomCard = this.cards[randomNumber]
      shuffledCards.push(randomCard)
      this.cards.splice(randomNumber, 1)
    }

    this.cards = shuffledCards
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }

  isFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }
    return false
  }
}