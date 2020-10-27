class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    
    for (let i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }   
}
  
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++
      return true;
    } else {
      this.pairsClicked++ 
      return false;
    }
   }

  isFinished() {
    if (this.pairsGuessed === 8) {
      return true
    } else {
      return false
    }
  }
}