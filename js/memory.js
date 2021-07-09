class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards(cards) {
    if (!cards) {
      return undefined;
    }
    const array = JSON.parse(JSON.stringify(cards));
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  checkIfPair(card1, card2) {
    for (let i = 0; i < this.cards.length; i++) {
      if (card1 === card2) {
        this.pairsClicked += 1;
        this.pairsGuessed += 1;

        return true;
      }
      this.pairsClicked += 1;
      return false;
    }
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
