class MemoryGame {
  constructor(cards) {
    this.cards = cards; //cartas
    this.pickedCards = []; // Array donde se guarda la carta para comparar
    this.pairsClicked = 0; // click en 1 carta 
    this.pairsGuessed = 0 // clik en 2 carta
    // add the rest of the class properties here
  }

  shuffleCards(cards) { // 
    let m = cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = cards[m];
      cards[m] = cards[i];
      cards[i] = t;
    }
    return cards;
  }
  // ... write your code here
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
