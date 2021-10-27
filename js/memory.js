class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    
    if (!this.cards) {
      return undefined
    }
    
    
    /* let mixedCards = someArray.sort((a,b) => 0.5 - Math.random());
    return mixedCards; */

    let mixedArray = someArray => {
      for (let i = someArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = temp;
      }
    }
    console.log(mixedArray(this.cards));
    console.log((this.cards));
    return mixedArray(this.cards);
     
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    }
    
    return false;
    

  }

  checkIfFinished() {
    
    if (this.pairsGuessed.length === 0) {
      return false;
    }

    if (this.cards.length === this.pairsGuessed*2) {
      return true;
    } else {
      return false;
    }



    

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
