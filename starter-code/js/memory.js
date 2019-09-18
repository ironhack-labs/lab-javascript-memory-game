class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length - 2; i++) {
      let j = Math.floor(Math.random() * (this.cards.length - 1 - i + 1) + i);
      console.log(j);

      let temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}
