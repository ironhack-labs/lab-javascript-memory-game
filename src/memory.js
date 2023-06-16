class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
   }
   
  shuffleCards() {
    const shuffledCard = []
    if (!this.cards) {
      return undefined
    }
    const shuffledCards = cards.map(card) 
    
    for (let i = shuffledCard.length -1; i > 0; i--) {
      const randomShuffleCard = Math.floor(Math.random() * (i + 1))
      [shuffledCard[i], shuffledCard[randomShuffleCard]] = [shuffledCard[randomShuffleCard], shuffledCard[i]]
    }
    return shuffledCard
  }


  checkIfPair(card1, card2) {
    
    this.pairsClicked += 1
      if (card1 === card2) {
        this.pairsGuessed += 1
        return true
      } else {
        return false
    } 
  } 


  
checkIfFinished() {
  
  if (this.pairsGuessed === this.cards.length / 2) {
    return true
    } else {
    return false
    }
  }

}

