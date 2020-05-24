class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards(cardsArray) {
   
    
    if (!cardsArray) {
      
      return undefined
     
      
    } else {
      
      for (let i = cardsArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * i)
        const temp = cardsArray[i]
        cardsArray[i] = cardsArray[j]
        cardsArray[j] = temp
        
      }
      
      
      
    }
    
    return cardsArray




  }

  checkIfPair(card1, card2) { }
  isFinished() { }
}

