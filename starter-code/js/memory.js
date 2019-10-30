class MemoryGame {
  constructor(cards){
    this.cards = cards,
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let index = 0; index < this.cards.length; index += 1) {
      let randomCardA = Math.floor(Math.random() * this.cards.length);
      let randomCardB = Math.floor(Math.random() * this.cards.length);
      let tempX = this.cards[randomCardA];
      this.cards[randomCardA] = this.cards[randomCardB];
      this.cards[randomCardB] = tempX;
    }
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
  isFinished() {
    return this.pairsGuessed * 2 === this.cards.length;
  }
}