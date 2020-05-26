class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined;
    } else {
      const mixedCards = [];
      while (this.cards.length > 0) {
        mixedCards.push((this.cards.splice(Math.floor(Math.random() * this.cards.length), 1))[0]);
      }
      this.cards = mixedCards;
      return mixedCards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true
    }
    return false
  }

  isFinished() {
    return (this.pairsGuessed === this.cards.length / 2) ? true : false
  }
}


