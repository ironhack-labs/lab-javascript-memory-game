class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    const shuffle = this.cards.length
      if (cards !== this.cards) {
        return undefined
      }
      for (let i = shuffle.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i+1));
        oldCards = cards[i];
        cards[i] = cards[random];
        cards[random] = oldCards;
      }
      return cards;
  }

  checkIfPair(card1, card2) {
    
  }

  checkIfFinished() {
    if (this.pairsGuessed == (this.cards.length / 2)) {
      return true
    } else return false
  }

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
