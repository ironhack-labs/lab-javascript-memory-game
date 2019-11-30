class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  
  shuffleCards() {}


  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else{
      this.pairsClicked++;
      return false;
    }
  }


  isFinished() { 
    if (this.pairsGuessed === this.cards.length/2){
    return true;
    } else {
      return false;
    }
  }
}