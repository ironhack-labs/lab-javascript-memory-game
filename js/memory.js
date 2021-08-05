class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
   return !this.cards ? undefined : this.cards.sort((a, b) => 0.5 - Math.random()); 

  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    return card1 === card2 ? (this.pairsGuessed += 1, true) : false;
      // ... write your code here
  }

  checkIfFinished() {
    
    return this.pairsGuessed < this.cards.length / 2 ? false : true;
 /*   return this.cards.length / 2 === this.pairsGuessed; */
  }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
