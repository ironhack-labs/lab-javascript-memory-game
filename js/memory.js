class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let m = this.cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    if(card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  isFinished() {
    let numOfPairs = this.cards.length / 2;
   return (this.pairsGuessed === numOfPairs ?  true :  false);
  }

  checkIfTwoCards() {
    return (this.pickedCards.length === 2 ? true : false);
  }
}


