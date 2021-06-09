class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    // console.log(cards)
    if (!this.cards) {
    return undefined
     }
     var i = this.cards.length, randomIndex;
     while (i > 0) {
       randomIndex = Math.floor(Math.random()*(i));
       i--;
       [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
     }
     return this.cards;
    //return cards;
  }
 
  

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      //this.pairsGuessed += 0;
      return false;
    }
    //if (card1.name !== card2.name) {
      //this.pairsGuessed += 0;
    }
    

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == this.cards.length/2) {
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

