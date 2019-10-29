class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
  }
  shuffleCards() {
    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }else{
      return false
    }
  }
  isFinished() {
    return this.pairsGuessed >= this.cards.length / 2;
  }
}