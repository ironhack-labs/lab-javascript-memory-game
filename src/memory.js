class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let j, key;
    for (let i=this.cards.length-1; i>=1; i--) {
      j = Math.floor(Math.random()*(i+1))
      key = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = key;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++;
    }
    this.pairsClicked++;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }
}
