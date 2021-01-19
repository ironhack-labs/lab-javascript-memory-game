class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards= [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards(array) {

    
    var m = this.cards.length, t, i; 
      console.log(m)
      while (m) {
        

      i = Math.floor(Math.random() * m--);
  
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
      } 

  }
  checkIfPair(card1, card2) {
    this.pairsClicked ++
    if (card1 === card2){
      this.pairsGuessed ++
      return true;
    } else{
      return false;
    }

  }
  isFinished() {
    if (this.pairsClicked === 0 || this.pairsGuessed < cards.length/2){
      return false;
    } else{
      return true;
    }
  }
}