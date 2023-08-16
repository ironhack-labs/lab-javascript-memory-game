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
    for (let i = this.cards.length-1; i > 0; i--) {
      const j = Math.floor(Math.random()*i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    }
    return this.cards
    }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length/2){
    return true;
    }
    return false;
  }
}
