/*jshint esversion:6 */

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards) {

      return undefined;

    } else {

      //  fisher-yates shuffle algorithm
      for (let i = this.cards.length - 1; i > 0; i--) {
      
        let randNum = Math.floor(Math.random() * (i+1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[randNum];
        this.cards[randNum] = temp;
      }
    }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {

    if (this.pairsGuessed != this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
