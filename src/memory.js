class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if(this.cards === undefined){
      return undefined;
    }
    else{
    for(let i=this.cards.length-1; i>0; i--){
      let j = Math.floor(Math.random()*(i+1));
      let temp = this.cards[j];
      this.cards[j] = temp;
    }
  }
  
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if(card1 === card2){
      this.pairsGuessed++;
      return true
    }
    else{
      this.pairsClicked ++
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === 12){
      return true;
    }
    else{
      return false;
    }
  }
}
