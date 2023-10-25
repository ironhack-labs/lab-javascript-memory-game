class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

shuffleCards() {
    const { cards } = this;
    if (cards.length === 0) {
     return undefined;
    }
   let m = cards.length;
    let i;

return this;
  }

  checkIfPair(card1, card2) {
  
    this.pairsClicked++;

    if (card1.name === card2.name) {
      this.pairsGuessed++;
      return true;
    } else {

      return false;
    }
    
  
  }

  checkIfFinished() {
    // ... write your code here
  }
}
