class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.checkResult = true;
  }

  shuffleCards() {
    if (!arguments.length) return
    // const shuffleArray = array => {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    //   }
    // }
    // return shuffleArray
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      this.checkResult = true;
      return true;
    }
    this.checkResult = false;
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) return true;
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
