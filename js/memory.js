class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const card = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = card;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    const areEquals = card1 === card2;
    if (areEquals) {
      this.pairsGuessed++;
    }
    return areEquals;
  }

  pickCard(htmlCard) {
    let areEquals = false;
    if (this.pickedCards.length < 2) {
      this.pickedCards.push(htmlCard);
      if (this.pickedCards.length === 2) {
        const pickedCardNames = this.pickedCards.map((htmlCard) =>
          htmlCard.getAttribute("data-card-name")
        );
        areEquals = this.checkIfPair(pickedCardNames[0], pickedCardNames[1]);
      }
    }
    return areEquals;
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
