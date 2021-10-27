class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) return undefined
    let shuffledCards = this.cards;
    let currentIndex = shuffledCards.length;
    let randomIndex = 0;
    // console.log("antes: ",shuffledCards);
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[currentIndex]];
    }
    // console.log("despues: ", shuffledCards);
    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    if(card1 === card2) {
      this.pairsGuessed += 1;
    }
    this.pairsClicked += 1;
    return card1 === card2;
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length/2) return true
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
