class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(cardsArray) {
      
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
 if (this.pairsClicked = 0) {
   return false;
  } if (this.pairsGuessed !== (this.cards.length/2)) {
   return false;
 } else {
  return true;
}
  }
};