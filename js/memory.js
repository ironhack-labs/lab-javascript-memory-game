class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards() {
    for (let i = this.cards.length; i > 0; i--) {
      let random = Math.floor(Math.random() * i--);
      let temp = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    let aux_bool = false;
    if(card1 === card2){
      aux_bool = true;
      this.pairsGuessed += 1;
    }
    return aux_bool;
  }
  
  isFinished() {
    let finished = false;
    if(this.pairsGuessed == this.cards.length/2){
      finished = true;
    }
    return finished;
  }
}
