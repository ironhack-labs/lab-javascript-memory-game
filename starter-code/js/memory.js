class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.paisGuessed = 0;

    // add the rest of the class properties here
  }
  shuffleCards() {
    
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(this.card1 === this.card2){
      this.paisGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.paisGuessed === this.pickedCards.length / 2){
      return `Game Over`;
    }
  }
}