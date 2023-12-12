class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
    else{
      for(let i=this.cards.length -1; i>0;i--){
        let j = Math.floor(Math.random()*(this.cards.length))
        let shuffled = [this.cards[i],this.cards[j]]=[this.cards[j],this.cards[i]]
        return shuffled
      }

    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1===card2){
      this.pairsGuessed++
      return true
    }
    if(card1 !== card2){
      return false
    }
  
    
  }

  checkIfFinished() {
    if(this.pairsGuessed===0){
      return false
    }
    let totalPairs = this.cards.length/2
   if(this.pairsGuessed<totalPairs){
    return false
   }
   else{
    return true
   }
   
  }
}
