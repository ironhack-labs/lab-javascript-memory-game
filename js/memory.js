class MemoryGame {
  
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
  }

  
  shuffleCards() {

    if (!this.cards) return undefined
    
    for (let i = 0; i < this.cards.length; i++) {
      const num = Math.floor(Math.random() * i)
      const tempArray = this.cards[i]
      this.cards[i] = this.cards[num]
      this.cards[num] = tempArray
   }
    
   }
  


  checkIfPair(card1, card2) {
    

    if (card1 != card2) { 
      

      this.pairsClicked++
      return false
    }
    else {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }


  }


  isFinished() {

    if (this.pairsGuessed >= 12 ) {
       
      return true
    } else { 
      return false
    }

  }



}