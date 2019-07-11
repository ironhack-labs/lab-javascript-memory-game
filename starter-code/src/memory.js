class MemoryGame {

  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = 0; i < this.cards.length -2; i++) {
      let randomCards = Math.floor(Math.random() * this.cards.length);
      let tempValue = this.cards[i];
      this.cards[i] = this.cards[randomCards];
      this.cards[randomCards] = tempValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}
