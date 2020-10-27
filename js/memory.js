class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed= 0 
  }
  shuffleCards() {
    if (this.cards=== 0) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random()* (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }
    return false;

  }
  isFinished() {
    if (this.pairsGuessed < this.cards.length/2){
      return false
    }
    else if (this.pairsGuessed === this.cards.length/2){
      return true 
    }
  }
}