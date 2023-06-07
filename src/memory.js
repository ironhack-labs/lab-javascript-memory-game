class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;
    for (let i = 0; i < this.cards.length; i++) {
      let temp = this.cards[i];
      let random = Math.floor(Math.random() * this.cards.length);
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    if (card1 !== card2) {
      this.pairsClicked++;
      return false;
    }
  }
  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
