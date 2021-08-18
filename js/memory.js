class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
      if (this.cards){   
        let currIndex = this.cards.length;
        let randomIndex = 0;
      
        while (currIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currIndex);
          currIndex--;
      
          this.cards[currIndex]= this.cards[randomIndex]
          this.cards[randomIndex] = this.cards[currIndex];
  
        return this.cards;
      }
      
      } else {
        return undefined
      }
    // Used like so
    var arr = [2, 11, 37, 42];
    shuffle(arr);
    console.log(arr);
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
   if (this.pairsGuessed === this.cards.length/2) {
     return true;
   } else {
     return false;
   }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
