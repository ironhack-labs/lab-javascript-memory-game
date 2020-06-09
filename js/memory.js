class MemoryGame {
  constructor(cards) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards() {
    if (!this.cards) return undefined

    for (let i = 0; i < this.cards.length; i++) {
      const num = Math.floor(Math.random() * i)
      const tempArray = this.cards[i]
      this.cards[i] = this.cards[num]
      this.cards[num] = tempArray
    }
  }
  
  checkIfPair(card1, card2) { 

    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true

    } else {

      return false
    }
    
  }
  isFinished() { 

    let arrayCards = this.cards.length / 2

    if (this.pairsGuessed === arrayCards){

      return true

    } else {

      return false
    }
  }
}
