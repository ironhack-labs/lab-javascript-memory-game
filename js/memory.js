class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    
  }

  shuffleCards() {
    
  }

  checkIfPair(card1, card2) {
    return card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')
  }

  checkIfFinished() {
    
  }
}

if (typeof module !== 'undefined') module.exports = MemoryGame;
