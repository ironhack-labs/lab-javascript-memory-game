class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for(let i=this.cards.length-1;i>-1;i--){
      let j = Math.floor(Math.random()*this.cards.length);
      let temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked+=1;
    if(card1.dataset.cardName === card2.dataset.cardName){
      this.pairsGuessed+=1;
      return true;
    }else {
      return false;
    }
  }
  isFinished() {
    if(this.pairsGuessed === 12){
      return true;
    }else{
      return false;
    }
  }
}