class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    let oldElement;
    for (let i = this.cards.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = oldElement;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked ++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    console.log(this.pairsGuessed*2,this.cards.length)
    return this.pairsGuessed*2 === this.cards.length;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
