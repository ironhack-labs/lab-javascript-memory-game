class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i=this.cards.length-1; i>0; i--) {
      let j = Math.floor(Math.random() * (i+1))
      let temp = this.cards[j];
      this.cards[j] =  this.cards[i];
      this.cards[i] = temp;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.cards.length/2 === this.pairsGuessed) {
      return true;
    }
    return false;
  }
}