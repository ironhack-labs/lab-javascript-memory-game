class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // ... write your code here
    // While there remain elements to shuffle...
    if(!this.cards) {
      return undefined;
    } 
    
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    // let findDuplicates = cards => cards.filter((item, index) => cards.indexOf(item) != index)
    let totalPairs = this.cards.length / 2;
    if (this.pairsGuessed >= totalPairs) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
