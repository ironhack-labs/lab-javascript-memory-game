class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined){
      return undefined
    }
    for(let i = this.cards.length -1; i>0; i--){
      let k = Math.floor(Math.random() * (i + 1))
      let temp = this.cards[i]
      this.cards[i] = this.cards[k]
      this.cards[k] = temp; 
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++
      return true
    }else{
      return false
    }
  }

  checkIfFinished() {
    return this.cards.length/2 === this.pairsGuessed
}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
