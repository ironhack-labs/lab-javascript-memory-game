class MemoryGame {
  constructor(card) {
    this.cards = card;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    console.log("Before: ", this.cards);
    for (const card of this.cards) {
      let currentIndex = this.cards.indexOf(card);

      let randIndex = ~~(
        Math.random() * (this.cards.length - currentIndex) +
        currentIndex
      );
      let buffer = this.cards[randIndex];
      this.cards[randIndex] = card;
      this.cards[currentIndex] = buffer;
    }
    console.log("After: ", this.cards);
    /*
    let newstack = [];
    let failsafe = this.cards.length;
    while (this.cards.length > 0) {
      let pick = ~~(Math.random() * this.cards.length);
      let card = this.cards[pick];
      this.cards = this.cards
        .slice(0, pick)
        .concat(
          this.cards.slice(
            pick === this.cards.length - 1 ? pick : pick + 1,
            this.cards.length
          )
        );
      newstack.push(card);
      if (failsafe <= this.cards.length) {
        console.log("Fialed shuffling: ", cards, card, pick);
        break;
      }
    }
    */
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
