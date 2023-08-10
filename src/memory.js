class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    //shuffle cards
  }

  shuffleCards() {
    //loop over the cards and change its indexes
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if (card1 === card2){
      this.pairsGuessed++;
      this.checkIfFinished()
      return true;
    }
    
    else{
      return false;
    }
    
    
  }

  checkIfFinished() {
    
    // ... write your code here
    if(this.pairsGuessed === 8){
      return true;
    }
    else{
      return false;
    }
  }
}
