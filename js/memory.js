class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked = 1;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      card1 !== card2
      return false;
    }
  }

  isFinished() {
    return (this.pairsGuessed === this.cards.length / 2);
  }
}