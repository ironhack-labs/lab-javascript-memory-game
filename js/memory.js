class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked= 0
    this.pairsGuessed = 0

    // add the rest of the class properties here
  }

  shuffleCards() {
    
    if(!this.cards){
      return undefined
    }else{
      let currIndex = this.cards.length
      let randomIndex
      while (currIndex !=0 ) {
        randomIndex = Math.floor(Math.random()*currIndex)
        currIndex --
        [this.cards[currIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currIndex]]
              
      }
      return this.cards
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++
    if( card1==card2 ){
      this.pairsGuessed ++
      return true
    }
    return false
  }

  checkIfFinished() {
    if (this.pairsGuessed < 12){
      return false
    }
    return true
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
