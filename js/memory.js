class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    let arr = this.cards;
    if (arr !== undefined) {
      function shuffle(arr) {
        var m = arr.length,
          t,
          i;

        while (m) {
          i = Math.floor(Math.random * arr.length);
          t = arr[m];
          arr[m] = arr[i];
          arr[i] = t;
        }
        return arr;
      }
      return shuffle(arr);
    } else {
      return arr;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    } else return false;
  }

  checkIfFinished() {
    // ... write your code here
    const totalCards = (this.cards.length) / 2;

    if (this.pairsGuessed < totalCards) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
