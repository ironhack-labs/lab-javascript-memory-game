class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.shuffleCards()

    // add the rest of the class properties here
  }

  shuffleCards() {
    if(!this.cards.length){
      return  undefined
    }
    for(let i = this.cards.length -1; i> 0; i--){
      const k = Math.floor(Math.random()* this.cards.length)
      const shuffleOne = this.cards[i]
      this.cards[i] = this.cards[k]
      this.cards[k]= shuffleOne
    } 
  }

  checkIfPair(card1, card2) {
      this.pairsClicked +=1
      if(card1 === card2){
      this.pairsGuessed += 1
      return true
    } else {
      return false
    } 
      
  }

  checkIfFinished() {
    return this.pairsGuessed *2 === this.cards.length
    
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
