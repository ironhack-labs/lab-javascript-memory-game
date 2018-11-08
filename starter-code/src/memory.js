
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {}


  checkIfPair(firstCard, secondCard) {
    this.pairsClicked ++;
    if (firstCard === secondCard) {
      this.pairsGuessed ++;
      return true;
    }
      return false;
 
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;

    }
    return false;
  } 

};
