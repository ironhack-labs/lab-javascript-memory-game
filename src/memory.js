class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {}
  

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (this.pickedCards.length === 2) {
      const [card1, card2] = this.pickedCards;

      if (card1 === card2) {
        return true;
      }
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed) {
      return true;
    } else return false;
  }
}
