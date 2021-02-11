class MemoryGame {
  constructor(cards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
        // for(let i = this.cardscards.length - 1; i > 0; i--) {
        //   let randomInd = Math.floor(Math.random() * (i+1));
        //   let temp = this.cards[i];
        //   this.cards[i] = this.cards[randomInd];
        //   this.cards[randomInd] = temp;
        // } // copié de Julie P. sur le Ironflow mais je ne comprends pas + ça ne marche pas
      }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += +1;
      this.pairsClicked += +1;
      return true;
    } else {
      this.pairsClicked += +1;
      return false;
    }
  }

  isFinished() {
    let halfCards = this.cards.length / 2;
    // if (this.pairsClicked === this.cards.length) {
    //   return false;
    if (this.pairsGuessed === halfCards) {
      return true;
    } else {
      return false;
    }
  }
}
