class MemoryGame {
  constructor(cards){
    this.cards = cards;
    
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    // console.log(this.cards)
    for (let i = 0; i < this.cards.length; i++) {
      let j = Math.random(this.cards.length)
      console.log(this.cards)
      if (j !== i) {
        this.cards[i] = this.cards[j]
        return this.cards[i]
      }
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
    if (this.pairsGuessed >= 8) {
      return true
    } else {
      return false
    }
  }
}