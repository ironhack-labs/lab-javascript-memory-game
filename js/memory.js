console.log('memory.js connected');

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Shuffle basado en el Fisher-Yates Shuffle algorithm
  shuffleCards() {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  // Checkeamos si las cards son iguales
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  // Checkeamos si el user ha ganado
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}