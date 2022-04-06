class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    if (this.cards){
      let shuffledCards = []
      let iterations = this.cards.length
      for(let i = 0; i < iterations ; i++){
        let randomIndex = Math.floor(Math.random() * this.cards.length)
        let newCard = this.cards.splice([randomIndex], 1)
        shuffledCards.push(newCard[0])
      }
      this.cards = shuffledCards
      return this.cards
    } else {
      return undefined
    }

  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }
    return false
  }

  checkIfFinished() {
    if(this.pairsGuessed < 12){
      return false
    } else {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
