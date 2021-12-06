class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    } else {
        for (let i = 0; i < this.cards.length; i++) {
          let j = Math.floor(Math.random() * (this.cards.length));
          let temp = this.cards[i];
          this.cards[i] = this.cards[j]
          this.cards[j] = temp;
        }
      }
  }

  checkIfPair(card1, card2) {
    if (card1 !== undefined && card2 !== undefined) {
      this.pairsClicked++;
    } if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } if (card1 !== card2) {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2){
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;