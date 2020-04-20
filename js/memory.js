class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.forEach((element, idx) => {
      let j = Math.floor(Math.random() * this.cards.length);
      if (idx != j) {
        let tmpValue = element;
        element = this.cards[j];
        this.cards[j] = tmpValue;
      }
    });
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
    return (this.cards.length / 2) === this.pairsGuessed;
  }
}