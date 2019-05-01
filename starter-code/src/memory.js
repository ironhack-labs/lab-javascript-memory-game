class MemoryGame {
  constructor(card) {
    (this.cards = cards),
      (this.pickedCards = []),
      (this.pairsClicked = 0),
      (this.pairsGuessed = 0);
  }
  shuffleCards() {
    let randomCard = this.cards.sort(() => Math.random() - 0.5); // porque el 0.5
  }
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }
  isFinished() {
    console.log(this.pairsGuessed);
    if (this.pairsGuessed != 8) {
      return false;
    } else {
      return true;
    }
  }
}
