class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 1;
    this.pairsGuessed = 1;
 
    // add the rest of the class properties here
  }

  shuffleCards(cards) {
    cards = this.cards;
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
  



  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicke++;
      return false;
    }
}
  
   isFinished = function() {
     if (this.pairsGuessed === (this.cards.length)/2) return true;
  
     return false;
  };
}