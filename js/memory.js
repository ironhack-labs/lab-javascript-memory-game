class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  shuffleCards() {
    let temporary;
    let index;
    for(let i = 0; i < this.cards.length; i++){
      do{
        index = Math.floor(Math.random()*this.cards.length);
      }while(index === i)
      temporary = Object.assign({}, this.cards[i]);
      this.cards[i] = Object.assign({}, this.cards[index]);
      this.cards[index] = temporary;
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
    if(this.pairsGuessed < 12){
      return false;
    }
    return true;
  }
}