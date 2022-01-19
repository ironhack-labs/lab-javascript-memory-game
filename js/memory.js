class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    // ... write your code here
    if (!arr) {
      return undefined;
    }
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let shuffledArr = arr[i];
      arr[i] = arr[j];
      arr[j] = shuffledArr;
    }
    this.cards = shuffledArr;
    return shuffledArr;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
