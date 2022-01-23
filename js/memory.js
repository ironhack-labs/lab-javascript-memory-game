class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
  if (this.cards) {
  const shuffledCards = this.cards.sort(() => 0.5 - Math.random());
  return shuffledCards;
    }
  }
 
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    } return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
