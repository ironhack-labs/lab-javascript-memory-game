class MemoryGame {
  constructor(cards){
    this.cards = cards;
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
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked ++;
      this.pairsGuessed ++;
    }else{
      this.pairsClicked ++;
    }
  }
  isFinished() {
    if (cards.length / 2 === this.pairsGuessed){
      return true;
    }
    return false;
  }
}