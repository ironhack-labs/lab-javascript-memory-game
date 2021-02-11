class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2); {
      return true;
      this.pairsGuessed += 1;
    } else {
         return false;
       }
  }
  isFinished() {
    if (this.pairsGuessed < 16) {
      return false;
    } 
    if (this.pairsGuessed = 16) {
      return true;
    }
  }
}