class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = this.cards.length; i > 0; i--){
      let j = Math.floor(Math.random()*(i--));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    } 
  }
  checkIfPair(card1, card2) {
    this.pairsClicked = 1;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }

  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    }else {
      return false;
    }
  }
}