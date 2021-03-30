class MemoryGame {
  constructor(cards){
    this.cards = cards 
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  
  shuffleCards() {
    if (this.cards.length = 0) {
      return undefined
    } else {
    let m = this.cards.length, t, i

    while (m) {

    i = Math.floor(Math.random() * m--)

    t = this.cards[m]
    this.cards[m] = this.cards[i]
    this.cards[i] = t
  }

  return this.cards
    }
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1

    if ( card1 === card2 ) { 
      this.pairsGuessed += 1
      return true
    } 
      return false
  }
  
  isFinished() {
    if (this.pairsGuessed === 8) {
      return true
    } else {
      return false
    }
  }
}