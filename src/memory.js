class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    for(i=0; i<this.cards.length-1; i++){
      const randNumber = Math.floor(Math.random()*24) + 1
      // swap cards[i] and cards[randNumber]
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++
      return true
    } else return false
  }

  checkIfFinished() {
    if(this.pairsGuessed !== this.cards.length/2){
      return false
    } else return true
  }
}
