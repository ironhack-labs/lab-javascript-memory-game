class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 1
    this.pairsGuessed = 2
  }
  
  shuffleCards() {
    
    // NO IDEAA!!!!!!!!!
  }
  checkIfPair(card1, card2) {
    this.pairsClicked +1
    if (card1 == card2) {
      this.pairsGuessed++
      return(true)
    } 
    return(false)
  }
  
  
  // esta parte no me queda clara , internet
  isFinished() {
   return this.pairsGuessed >= this.cards.length/2
  }
}