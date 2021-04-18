class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length -1 ; i>0 ; i--) {
      let randomIndex = Math.floor(Math.random() *this.cards.length);
      [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]]
    }
  }

  pickCard(htmlCard) {
    let areEquals = false;
    if (this.pickedCards.length < 2) {
      this.pickedCards.push(htmlCard);
      if (this.pickedCards.length === 2) {
        const pickedCardNames = this.pickedCards.map(htmlCard => htmlCard.getAttribute('data-card-name'));
        areEquals = this.checkIfPair(pickedCardNames[0], pickedCardNames[1]);
      }
    }
    return areEquals;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    const areEquals = card1 === card2
    if (areEquals) {
      this.pairsGuessed += 1;
    };
    return areEquals;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length/2
  }
}

