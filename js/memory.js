class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      this.cards.push(array.splice(i, 1)[0]);
    }
    return copy;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 !== card2) {

      return false

    } else {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true

    }

  }

  checkIfFinished() {
    if ((this.cards.length / 2) > this.pairsGuessed) {
      return false
    } else {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
