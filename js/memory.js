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
  }
                          
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked+=1;
    if(card1 === card2){
      this.pairsGuessed+=1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed < (this.cards.length/2)){  // si la mitad del array cards no ha sido adivinado el juego continua
      return false;
    } else {
      return true;

    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
