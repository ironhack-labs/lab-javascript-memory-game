class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = this.cards.length; i > 0; i--) {
      let random = Math.floor(Math.random() * i--);
      let temp = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }
  }
  checkIfPair(card1, card2) {
    // I disagree with calling this function everytime a card is clicked:
    // we only need to call it when we actually have 2 cards clicked.

    // Uncomment line 21 to pass Jasmine test
    // this.pairsClicked += 1;

    let name1 = card1.getAttribute("data-card-name");
    let name2 = card2.getAttribute("data-card-name");

    if (name1 === name2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) return true;
    return false;
  }
}
