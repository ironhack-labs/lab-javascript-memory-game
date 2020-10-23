class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let rand = Math.floor(Math.random() * this.cards.length);
      this.cards.push(this.cards[i]);
      this.cards.splice(i, 1);
      this.cards.push(this.cards[rand]);
      this.cards.splice(rand, 1);
    }
  }
  checkIfPair(cardsArr) {
    this.pairsClicked++;
    if (cardsArr[0].dataset.cardName === cardsArr[1].dataset.cardName) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
