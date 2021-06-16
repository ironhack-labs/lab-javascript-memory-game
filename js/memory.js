class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  checkIfPair(card1, card2){
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      this.checkIfFinished();
      return true;
    }else{
      return false;
    }
  }

  checkIfFinished() {
    let correctPairs = this.pairsGuessed;
    if (correctPairs < this.cards.length/2) {
      return false;
    }else{
      return true;
    }
  }
}  
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
