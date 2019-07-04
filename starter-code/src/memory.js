class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = 0; i < this.cards.length - 1; i++) {
      let j = Math.floor(Math.random() * (this.cards.length - i) + i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  checkIfPair(card1, card2) {
    let match = card1 === card2;
    this.pairsClicked ++;
    if (match) this.pairsGuessed ++;
    this.pickedCards = [];
    return match;
  }

  isFinished() {
    return this.pairsGuessed === Math.floor(this.cards.length / 2);
  }

  clickedCard(card) {
    this.pickedCards.push(card);
    if (this.pickedCards.length === 2) {
      if(this.checkIfPair(...this.pickedCards)) {
        if(this.isFinished()) {
          console.log("done");
        }
        removeNameAttributes(...this.pickedCards);
      } else {
        return true;
      }
    }
    return false;
  }
}