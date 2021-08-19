class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  // pickedCards.push(card1)
  // pickedCard.push(card2)
  //   if (pickedCards.indexOf(0) === 1){

  //   }

  shuffleCards(cards) {
    if (!this.cards) {
      return undefined;
    }
    let currentIndex = this.cards.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex]
      ];
    }
    return cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0) {
      return false;
    } else if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else if ((this.pairdGuessed = this.cards.length / 2)) {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
