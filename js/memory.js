class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.shuffleCards();
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;

    let deck = this.cards;

    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
}

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed++;
      return true;
    }
    else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    }
    else {
      return false;
    }     
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
