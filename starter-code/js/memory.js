class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards = this.pickedCards;
  }
 checkIfPair(card1, card2) {
    this.pairsClicked = [];
    this.pairsGuessed = [];
    this.pairsClicked.push(card1);
    this.pairsGuessed.push(card2);
    if (JSON.stringify(pairsClicked) !== JSON.stringify(pairsGuessed)) {
      this.pairsGuessed.splice(pairsGuessed.length -1)
      return false;
    } else {
      return true;
    }
  }
  isFinished() {}
}