class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(typeof this.cards === 'undefined') {
      return undefined;
    }

    const cardsClone = [...this.cards];
    const shuffled = [];

    while(cardsClone.length > 0) {
      const randomIndex = Math.floor(Math.random() * cardsClone.length);
      shuffled.push(...cardsClone.splice(randomIndex, 1));
    }

    this.cards = shuffled;
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    this.pickedCards = [];
    if(card1 === card2) {
      this.pairsGuessed ++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
