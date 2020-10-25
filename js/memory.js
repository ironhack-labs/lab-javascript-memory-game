class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5)
  }
  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    } 
  }
  isFinished() {
    const pairCards = this.cards.length / 2;

    if (pairCards === this.pairsGuessed) {
      return true;
    } else {
      return false;
    }
  }
}



