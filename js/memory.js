class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }


  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === 8) {
      return true;
    } else {
      return false;
    }
  }
}