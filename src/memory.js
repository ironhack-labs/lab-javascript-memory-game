class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) return;
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
  return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked ++;
    if (card1 === card2){
      this.pairsGuessed ++;
      return true
    } else return false;

  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed < (this.cards.length / 2)) return false
    else if (this.pairsGuessed <= 0) return false
    else return true;
  }
}
