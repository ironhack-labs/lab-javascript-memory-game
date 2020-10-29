class MemoryGame {
  constructor(cards) {
    // console.log(cards.length / 2);
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // console.log(cards);
    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temporary = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temporary;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  //  check if the property pairsGuessed has reached the numbers of pairs the game has.
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
