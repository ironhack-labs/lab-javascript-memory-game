class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
  }

  shuffleCards() {
      if (this.cards === undefined) return undefined
      
      this.cards.sort((a,b) => 0.5 - Math.random())
      return this.cards
       }
  
  
  

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }else{
      this.pairsClicked++
      return false
    }
  }

  checkIfFinished() {
    if ( this.pairsGuessed === this.cards.length/2){
      return true
    }return false
    
  }
}
