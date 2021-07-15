class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.isGameFinished = false;
    // add the rest of the class properties here
  }

  shuffleCards(array) {
    if(this.cards === undefined) {
      return undefined;
    }

    return this.shuffle(this.cards);
  }

  shuffle(array) {
    
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if(this.pairsGuessed === 8) {
      this.isGameFinished = true;
    }
    console.log("Game Finished " + this.isGameFinished);
    return this.isGameFinished;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
