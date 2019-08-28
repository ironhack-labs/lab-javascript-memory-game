class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    let shuffledCars = [], 
        cardsArrayLength = cards.length, 
        idx;
    
      while (cardsArrayLength) {
        idx = Math.floor(Math.random() * cardsArrayLength);
    
        // If not already shuffled, move it to the new array.
        if (idx in cards) {
          shuffledCars.push(cards[idx]);
          delete cards[idx];
          cardsArrayLength--;
        }
      }
    
      return shuffledCars;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true
    }

    return false;
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true;
    return false
  }
}