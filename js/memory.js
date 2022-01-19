class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
  }

  shuffleCards() {
    
    if(this.cards <= this.cards.length){ return undefined } else {
      let car = this.cards.length, t, i
      while (car){
        i = Math.floor(Math.random() * car--)
        t = this.cards[car]
        this.cards[car] = this.cards[i]
        this.cards[i] = t 
      }
      return this.cards
    }

    

  }

  checkIfPair(card1, card2) {
    this.pairsClicke++
    
    if(card1 === card2){
      this.pairsGuessed++
      return true
    } else {

      return false
    }
    

  }

  checkIfFinished() {
    


  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
