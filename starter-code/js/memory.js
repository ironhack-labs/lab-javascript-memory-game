class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    //shuffleCards method should return the shuffled (mixed) array of cards
    if (this.cards === undefined) return undefined;
    let j, temp;
    let i = this.cards.length;
    while(--i>0){
      j = Math.floor(Math.random() * i+1);
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
    return this.cards;
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
  isFinished() {
    if((this.cards.length)/2 === this.pairsGuessed){
      return true;
    }
    return false;
  }
}