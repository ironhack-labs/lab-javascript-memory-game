class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // While there remain elements to shuffle...
    const cardsCopy = this.cards.slice();
    let shuffleCards = [];

    while (cardsCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      shuffleCards.push(cardsCopy[randomIndex]);
      cardsCopy.splice(randomIndex, 1);
    }
    this.cards = shuffleCards;
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
    if (this.cards.length === 24) return false;
    if (this.pairsGuessed === this.cards.length / 2) return true;
    else return false;
  }
}
