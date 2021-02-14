class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    console.log("test");
  }

  shuffleCards(cards) {

    let i = this.cards.length, swap, holder;
    while (--i > 0){
      swap = Math.floor(Math.random() * (i+1));
      holder = this.cards[swap];
      this.cards[swap] = this.cards[i];
      this.cards[i] = holder;
    }}

  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    let numpairstoWin = this.cards.length/2;

    if (numpairstoWin > this.pairsGuessed) {
      return false;
    } else if (numpairstoWin === this.pairsGuessed ) {
      return true;
    } 
  }
}

// export default MemoryGame
