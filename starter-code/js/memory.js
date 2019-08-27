class MemoryGame {
  constructor(cards,pickedCards,pairsClicked,pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    let cards = this.cards;
    let m = cards.length
    let i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
  
      [cards[m], cards[i]] = [cards[i], cards[m]]; 
    }
    // return this;no termino de entender la linea 17
    return undefined ;
  }

  

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1==card2){
      this.pairsGuessed++
      return true
    }else return false
  }
  isFinished()  {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    } else {
      return false;
    }}
}