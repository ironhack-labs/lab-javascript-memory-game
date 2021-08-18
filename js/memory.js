class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }




 
  shuffleCards(){
    
    if(!this.cards){
      return undefined;
    }

    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards [i];
      this.cards [i] = this.cards [j];
      this.cards[j] = temp;
    }
    return this.cards;
  }
    
  checkIfPair(card1, card2) {
   if (card1=== card2){
    this.pairsClicked=+ 1;
    this.pairsGuessed=+1;
      return true
    }else {
      this.pairsClicked=+1;
      return false}
  }  

  checkIfFinished() {
    // ... write your code here
    if ( this.pairsGuessed === (this.cards.length/2) ){
      return true;
    }else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
