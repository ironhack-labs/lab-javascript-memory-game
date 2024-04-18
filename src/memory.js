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

    let oldElement;
    for (let i = this.cards.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = oldElement;
    }
    return this.cards;
};

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2){
      return true;
    }
    return false;
  }
}
