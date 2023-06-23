class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    if (!this.cards) { 
      return undefined 
    }
    let m = cards.length, t, i;
    while (0 !== m) {
      i = Math.floor(Math.random() * m);
      m -= 1
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
    this.pairsGuessed += 1;
    return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
  if (this.pairsGuessed === this.cards.length/2) {
    return true;
  } else {
    return false;
  }
  }
}
