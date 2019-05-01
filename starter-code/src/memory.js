class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.pickedCards;
    let n = this.cards.length;
    let i;

    while (n) {
      i = Math.floor(Math.random() * n);

      if (i in this.cards) {
        this.pickedCards.push(this.cards[i]);
        delete this.cards[i];
        n--;
      }
    }

    return this.pickedCards;
  }
  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed == 8) {
      return true;
    } else {
      return false;
    }
  }
}
