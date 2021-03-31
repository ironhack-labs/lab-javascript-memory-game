class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    function fisherYatesShuffle(myArray) {
      let i = myArray.length;
      if (i == 0) return undefined;
      while (--i) {
        let j = Math.floor(Math.random() * (i + 1));
        let tempi = myArray[i];
        let tempj = myArray[j];
        myArray[i] = tempj;
        myArray[j] = tempi;
      }
    }
    return fisherYatesShuffle(this.cards);
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}