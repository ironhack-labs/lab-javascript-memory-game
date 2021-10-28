class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards  = [],
    this.pairsClicked = 0,
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
    this.pairsClicked++;
    let isSame = false;
    if(card1 == card2) {
      this.pairsGuessed++;
      isSame = true;
    }
      return isSame
    }
  

  checkIfFinished() {
    if(this.pairsGuessed == this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
