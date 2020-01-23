// jshint esversion: 6

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // from https://bost.ocks.org/mike/shuffle/
    // except it appears to be broken: to fix!
    if (this.cards === undefined) {
      return undefined;
    } else {
      let remainingCards = this.cards.length;
      let lastCard, randomCard;
      while (remainingCards) {
        randomCard = Math.floor(Math.random() * remainingCards--);
        lastCard = this.cards[remainingCards];
        this.cards[remainingCards] = this.cards[randomCard];
        this.cards[randomCard] = lastCard;
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

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}