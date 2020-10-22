class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
    // add the rest of the class properties here
  }
  shuffleCards(array){}

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true
    } else {
      return false
    }
  }
  isFinished() {
    if(this.pairsGuessed === 12) {
      //You Win
      return true }
    if(this.pairsClicked === 12) {
      //You lose?
    return false
    } else {
    return false
    //The games continues
    }
  }
}