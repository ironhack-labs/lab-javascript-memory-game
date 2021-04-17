class MemoryGame {
  constructor(cards){
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }
  shuffleCards() {}


  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    const areEquals = card1 === card2;
    if (areEquals) {
      this.pairsGuessed += 1;
    }
    return areEquals;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length/2
  }
}