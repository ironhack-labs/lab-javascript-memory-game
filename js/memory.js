class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 1; i--) {
      let j = Math.floor(Math.random() * i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }


  checkIfPair(card1, card2) {
    // if (card1.name != card2.name) {
    //   return this.pairClicked++
    // } else {
    //   return this.pairsGuessed++
    // }
    if (card1.name === card2.name) {
      return true && this.pairClicked++
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (!this.pairsGuessed || this.pairsGuessed < 12) {
      return false
    } else if (this.pairsGuessed === 12) {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
