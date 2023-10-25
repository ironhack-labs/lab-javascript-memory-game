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
    if (!this.cards) {
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let temp = this.cards[i];
      let x = Math.floor(Math.random() * this.cards.length);
      this.cards[i] = this.cards[x];
      this.cards[x] = temp;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
    

    // if (card1 === card2) {
    //   this.pairsGuessed += 1;
    //   return true;
    // }
    // if (card1 && card2) {
    //   this.pairsClicked += 1;
    //   return false;
    // }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}
