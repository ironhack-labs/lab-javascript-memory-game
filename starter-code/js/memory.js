class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      this.randomN = this.cards[Math.floor(Math.random() * this.cards.length)];
      for (let j = 0; j < this.cards.length; j++) {
        if (this.cards[i] < this.cards[j]) {
          this.cardIdx = this.cards.indexOf(this.randomN);
          this.extracted = this.cards[this.cardIdx];
          this.cards.splice(this.cardIdx, 1);
          this.cards.push(this.extracted);
        }
      }
    }
    return this.cards;
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
