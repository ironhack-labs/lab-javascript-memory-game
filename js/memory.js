class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(mixedCards) {
   mixedCards = this.cards
      for (let i= mixedCards.length -1; i > 0 ; i--){
      const j = Math.floor(Math.random()*(i+1));
        mixedCards[i] = mixedCards[j];
        mixedCards[j],mixedCards[i];
}
  }
  
  checkIfPair(card1, card2) {
   if (card1 !==card2) {
   this.pairsClicked += 1;
   return false;
   } else {
     this.pairsGuessed += 1;
     return true;
   }
  }
  
  isFinished() {
    if (this.pairsGuessed === 0) {
      return false 
    } else if (this.pairsGuessed < 12) {
      return false;
    } else {
      return true;
    }
    
  }
}