class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  shuffleCards() {
    for (let i= 0; i < this.cards.length; i ++){
      let newIdx = Math.floor(Math.random()* this.cards.length);
       this.cards[i]= this.cards[newIdx];
    }
  //   this.cards.map((card, idx) => {
  //     let newIdx = Math.floor(Math.random() * this.cards.length);
  //     card[idx] = card[newIdx];
  //   });
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
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}