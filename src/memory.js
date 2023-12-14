class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
    for(let i= this.cards.length-1; i>0; i--){
      let j= Math.floor(Math.random()*(i+1));
      [this.cards[i],this.cards[j]]=[this.cards[j],this.cards[i]]
    }return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++
    this.pickedCards.push(card1, card2)
    if(card1===card2){
      return this.pairsGuessed++, true
    }if(card1!==card2){
    return false
    } 
    
  }

  checkIfFinished() {
    if(this.pairsGuessed===this.cards.length/2) {
      return true
    }if(this.pairsGuessed<this.cards.length/2){
      return false
    }
  }
}