class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    //1.1 Creamos las variables que contendran nuestras cartas:
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards){
      return undefined;
    }
   let cardsStack = this.cards;
   let shuffleCardsStack = this.cards.sort(() => Math.random() - 0.5);
   return shuffleCardsStack;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked ++
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }else {
    return false;

    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
