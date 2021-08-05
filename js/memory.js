class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const min = 0;
    const max = this.cards.length;
    let randomNumber;

    this.cards.forEach(() => {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;

      const selectedCard = this.cards[randomNumber];

      this.cards.splice(randomNumber, 1);
      this.cards.push(selectedCard);
    });
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
