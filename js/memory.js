class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairClicked = 0
    this.pairGuessed = 0
  }


  shuffleCards() {}


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1===card2){
      this.pairsGuessed++
      return true
  
    } else {
      return false

  }
}
  isFinished() {

    let pairs = this.cards.length/2
    
    if(this.pairsGuessed = pairs){
    return true
  } 
  return false
}