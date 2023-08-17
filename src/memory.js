class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards || this.cards.length === 0) {
      return undefined;
    }
    let i = this.cards.length;
  
    while (i > 0) {
      const k = Math.floor(Math.random() * i);
      i--;
  
      const temp = this.cards[i];
      this.cards[i] = this.cards[k];
      this.cards[k] = temp;
    }
  
    return this.cards; 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked+=1;
    if(card1 === card2) {
      this.pairsGuessed+=1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else if( this.pickedCards.length === 0) {
      return false;
    }
    return false;
  }
}
