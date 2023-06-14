class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // Donde compararemos si son iguales.
    this.pairsClicked = 0; // Pares pulsados
    this.pairsGuessed = 0; // Pares Adivinados
  }

  shuffleCards() {
    const cards = this.cards;
    if (cards) {
      let currentIndex = cards.length,
        temporaryValue,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }
    }
    return cards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else if (card1 !== card2) {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    }
    return false;
  }
}
