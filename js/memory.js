class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards() { // shuffleCards use Fisher-Yates Shuffle method
    
    if (!this.cards) {
      return this.cards;
    }

    let m = this.cards.length;
    let numberT;
    let numberI;

    while (m) {

      numberI = Math.floor(Math.random() * m--);

      numberT = this.cards[m];
      this.cards[m] = this.cards[numberI];
      this.cards[numberI] = numberT;
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    
    if (card1) {
      this.pairsClicked++
    }

    if (card2) {
      this.pairsClicked++
    }

    if (this.pairsClicked == 2) {

      if (card1 == card2) {
        this.pairsGuessed++
        return true;
      }
      this.pairsClicked = 1;
    }
    return false;
  }

  checkIfFinished() {
    
    if (this.pairsGuessed == this.cards.length / 2) {
      return true;
    }

    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
