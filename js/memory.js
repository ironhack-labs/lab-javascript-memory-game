class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    let randomPos;
    let temp;
    for (let i = this.cards.length - 1; i > 0; i--) {
      randomPos = Math.floor(Math.random() * (i + 1));
      temp = this.cards[i];
      this.cards[i] = this.cards[randomPos];
      this.cards[randomPos] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    let cardName1 = card1.getAttribute('data-card-name');
    let cardName2 = card2.getAttribute('data-card-name');

    this.pairsClicked += 1;
    if (cardName1 === cardName2) {
      this.pairsGuessed += 1;
      card1.classList.add('front');
      card2.classList.add('front');
      return true;
    } else {
      card1.classList.remove('turned');
      card2.classList.remove('turned');
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
