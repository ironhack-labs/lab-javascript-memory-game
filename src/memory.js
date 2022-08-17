class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
   return this.cards === undefined ? undefined : this.cards.sort((a, b) => 0.5 - Math.random());
  }  

  checkIfPair(card1, card2) {
    
    this.pairsClicked++
    return  card1 === card2 ? (this.pairsGuessed++, true) : false;    
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length/2 ? true : false
    
  }
}
