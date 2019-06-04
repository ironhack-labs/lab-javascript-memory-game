class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    console.log(Number(cards));
  }

  shuffleCards(cards) {
    var m = this.cards.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    this.cards;
  }


  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true;
    }
    else if (card1 !== card2) {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) return true;

    if (this.pickedCards.length == 0) return false;

    if (this.pickedCards.length !== 0) return false;

  }
}

