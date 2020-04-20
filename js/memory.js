class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var suffledCards = [],
      n = this.cards.length,
      i;
    while (n) {
      i = Math.floor(Math.random() * this.cards.length);
      if (i in this.cards) {
        suffledCards.push(this.cards[i]);
        delete this.cards[i];
        n--;
      }
    }

    this.cards = [...suffledCards];
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    return (this.cards.length / 2) === this.pairsGuessed;
  }
}