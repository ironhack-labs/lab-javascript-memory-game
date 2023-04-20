class MemoryGame {
  constructor(cards) {
    this.cards = cards 
    this.pickedCards = [] 
    this.pairsClicked = 0 
    this.pairsGuessed = 0
  }

  shuffleCards() {
    console.log(this.cards)
    if(!this.cards){
      return undefined
    }
    return this.cards.sort((a, b) => 0.5 - Math.random());
  }



  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    
    if(card1 === card2){
      this.pairsGuessed += 1
      return true
    }else{
      return false
    }
  }



  checkIfFinished() {
   // if(this.pairsGuessed === this.cards.length / 2)
    if(this.pairsGuessed === 12){
      return true
    }else{
      return false
    }
  }
}
