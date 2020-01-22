class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
    console.log(this.cards.length);
  }
  shuffleCards() {
    let mixedCards = [];
    let n = this.cards.length;
    let i;
    while (n) {
      i = Math.floor(Math.random() * n--);

      mixedCards.push(this.cards.splice(i, 1)[0]);
    }
    return mixedCards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      (this.pairsClicked += 1) && (this.pairsGuessed += 1);
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
