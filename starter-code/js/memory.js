class MemoryGame {
  constructor(cards) {
    (this.cards = cards),
      (this.pickedCards = []),
      (this.pairsClicked = 0),
      (this.pairsGuessed = 0);
  }

  shuffleCards() {
    let cardsNumbers = this.cards.length;
    let i;
    let e;
    while (cardsNumbers) {
      i = Math.floor(Math.random() * cardsNumbers--);

      e = this.cards[cardsNumbers];
      this.cards[cardsNumbers] = this.cards[i];
      this.cards[i] = e;
    }
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
    let pairs = this.cards.length / 2;
    if (this.pairsGuessed == pairs) {
      return true;
    }
    return false;
  }
}
