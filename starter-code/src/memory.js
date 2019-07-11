class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for(let i = this.cards.length - 1; i > 0; i -= 1) {
      
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } 
    return false;
    

  }
  isFinished() {
    console.log(cards.length)
    if(this.cards.length/2 === this.pairsGuessed) {
      
      return true;
    }
    return false;
  }
}