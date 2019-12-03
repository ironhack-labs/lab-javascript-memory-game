class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = (this.cards.length - 1); i > 0; i -= 1) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
    }
    return this.cards;
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
    if (this.cards.length / 2 === this.pairsGuessed) {
      return true;
    }
    return false;
  }
}
