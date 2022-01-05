class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined){
      return undefined;
    }
    this.cards = this.cards.sort(() => {
      if (Math.random() > 0.5){
        return 1;
      } else {
        return -1;
      }
    });
    
    
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {
     return false;
    } 
  }

  checkIfFinished() {
   if(this.pairsGuessed === (this.cards.length/2)){
     return true;
   }else{
     return false;
   }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
