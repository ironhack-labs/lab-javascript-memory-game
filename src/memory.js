class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked=0
    this.pairsGuessed=0
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    else{this.cards.sort(() => Math.random() - 0.5)}
  } 

  checkIfPair(card1, card2) {
    this.pairsClicked += 1  
    this.pairsGuessed +=1
    if (card1 === card2) {
      return true
    } else {
      this.pairsGuessed-=1
      return false
    }
      
    
  }
  

  checkIfFinished() {
    if (this.pairsGuessed ===12)  {
      return true
    }
    return false
  }
}
