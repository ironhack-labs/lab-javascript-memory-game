class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined)return undefined
    const mixedCards = [];
    this.cards.forEach(card => {
      mixedCards.splice(Math.floor(Math.random() * mixedCards.length), 0, card)
    });
    this.cards = mixedCards
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }else{
      return false;
    }
  }
  
  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    }else{
      return false
    }
  }
}
