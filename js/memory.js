class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [pickedCards];
    this.pairsClicked = 1;
    this.pairsGuessed = 1;
  }
  shuffleCards(cards) {
return ;
  }

  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsGuessed += 1;
    } else if (card1 === card2) {
      return true;
    } else {
      return false;
    }
  }

  isFinished() {}
}
