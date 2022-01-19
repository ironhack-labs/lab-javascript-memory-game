class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    } else {
      let currentIndex = this.cards.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this.cards[currentIndex], this.cards[randomIndex]] = [
          this.cards[randomIndex],
          this.cards[currentIndex]
        ];
      }
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
