class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards(cards) {
   
    const shuffledCards = []
    while (cards.length) {
      const randomNumber = Math.floor(Math.random() * cards.length)
      const randomCard = cards[randomNumber]
      shuffledCards.push(randomCard)
      cards.splice(randomNumber, 1)
    }
    this.cards = shuffledCards
    return  this.cards
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
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    return false
  }
}