class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // taken from stackoverflow
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 == card2) this.pairsGuessed++;
    return card1 == card2;
  }
  isFinished() {
    return this.cards.length / 2 == this.pairsGuessed && this.pairsClicked > 0;
  }
}
