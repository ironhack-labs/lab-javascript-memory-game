class MemoryGame {

  constructor(cards) {
    
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards(cards) {

    for (let i = 0; i < this.cards.length; i++) {

      // random number
      const j = Math.floor(Math.random() * i)

      const temp = this.cards[i]

      this.cards[i] = this.cards[j]

      this.cards[j] = temp

    }

    return cards

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

  isFinished() {

    if (this.pairsGuessed === (this.cards.length / 2)) {

      return true

    } 

    return false

  }
}