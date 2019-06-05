class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pickedGuessed = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    cards = this.cards;
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      this.cards[j] = this.cards[i];
      //this.cards[i] = this.cards[j];
      //this.cards[j] = cards2;
    }
  }

  checkIfPair(card1, card2) {
    //cards;

    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else return false;
  }
  isFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    } else return false;
    //if (this.pickedCards.length === 0) return false;
    //if (this.pickedGuessed.length !== this.cards.length) return false;
    // if (this.pairsGuessed === this.cards.length / 2) {
    //   return true;
    // } else return false;
  }
}
