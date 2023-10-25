class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here

  }

// if stuck came here to create a loop
  checkIfPair(card1, card2) {
    this.pairsClicked++
    this.card1 = card1;
    this.card2 = card2;
    if( this.card1 === this.card2){
      this.pairsGuessed++
      return true
    }else{
      return false;
    }
    }
  checkIfFinished() {
    // if(this.pairsClicked === 0){
    //   return false;
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    }else{
      return false;
    }
    }
  }