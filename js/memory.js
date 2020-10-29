class MemoryGame {
  constructor(cards) {
    console.log(cards.length / 2);
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  //  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  // function shuffleArray(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));
  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   }
  // }
  shuffleCards(cards) {
    // console.log(cards);
    for (let i = this.cards.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      let shuffle = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = shuffle;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  // Finally, we need to make sure our game ends, and for that, we can add some logic to the isFinished() method. Here we need to check if our property pairsGuessed has reached the numbers of pairs the game has.
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
