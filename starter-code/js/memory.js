class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
    // add the rest of the class properties here
  }
  shuffleCards(cards) {
   this.cards=cards.sort(() => Math.random() - 0.5);
    return undefined
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1.name==card2.name) {
      this.pairsGuessed++
      return true
    }else
      return false
    
  }
  isFinished() {
    if (this.pairsGuessed==this.cards.length/2) {
      return true
    }
    return false
  }
}


