class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    let randomCardA;
    let randomCardB;
    let tempDeck;
    if (!cards) {
      return undefined
    }
    for (let i = 0; i < cards.length; i += 1) {
      randomCardA = Math.floor(Math.random() * cards.length);
      randomCardB = Math.floor(Math.random() * cards.length);
      tempDeck = cards[randomCardB];
      cards[randomCardA] = cards[randomCardB];
      cards[randomCardB] = tempDeck
    }
    return tempDeck;
    }
  

  checkIfPair(card1, card2) {
    this.pairsClicked++
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
    }
    if (this.pairsClicked < this.cards.length / 2) {
      return false
    }
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    }
  }



// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
