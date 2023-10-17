class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    for (let i = this.cards.length - 1; i >= 1; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let intermediate = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = intermediate;
    }

    return this.cards;
    }
  

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 === card2){
      this.pairsGuessed ++;
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === 12
  }
}
