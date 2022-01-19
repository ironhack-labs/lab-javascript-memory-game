class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
  }
  

  shuffleCards(arrCards) {
    if (!this.cards){return undefined}  
    for(let i = this.cards.length-1 ; i>0 ;i--){
        const iBarajado = Math.floor( Math.random() * (i + 1) ); 
      [this.cards[i],this.cards[iBarajado]]=[this.cards[iBarajado],this.cards[i]];
      return iBarajado
  }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = 1
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    else {return false}
  }

  checkIfFinished() {
   if (this.cards.length === this.pairsGuessed*2){
     return true
   }
    else {return false}
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
