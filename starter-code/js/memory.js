class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[Math.floor(Math.random() * this.cards.length)];
    }
    return this.cards.sort(() => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      this.isFinished();
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === 8) {
      alert("You won!!!");
      return true;
    } else {
      return false;
    }
  }
}
