class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    if (card1.name === card2.name) {
      this.pairsClicked++;
      this.pairsGuessed++;
     
      return true;
    } else {
      
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    } else {
      return false;
    }

  }
}
