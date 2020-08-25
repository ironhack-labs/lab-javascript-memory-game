class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
  }
  shuffleCards() {
    let cardx = []
    let n = 0
    let i = 0
   
      n = this.cards.length
      while (n) {
        i = Math.floor(Math.random() * n--)
        cardx.push(this.cards.splice(i, 1)[0])
      }
      if (!n)
        return undefined
      else 
        return cardx
  } 


  
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if ( card1 == card2)
    {
        this.pairsGuessed++;
        return  true
    }   

    if (card1 != card2)
        return false
    
  }
  isFinished() {
    
    if(this.pairsGuessed == 12)
      return true
    else
      return false
  }
}
