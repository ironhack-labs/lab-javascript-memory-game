class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let m = this.cards.length, t, i;

    while (m) {

      i = Math.floor(Math.random() * m--);

      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  }
  
  checkIfPair(card1, card2) { 
    this.pairsClicked ++
    if( card1 === card2){
      this.pairsGuessed ++
      return true
    }
    return false
  }
  isFinished() {
    if(this.pairsGuessed===this.cards.length || this.pairsGuessed===(this.cards.length/2)){
      return true;
    }else{
      return false;
    }
  }
}