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
    if(!this.cards){
      return undefined;
    }
    while(this.cards.length > 1){
      const randomIndex = Math.floor(Math.random()*this.cards.length);

      const shuffledArr = this.cards.splice(randomIndex,1)
      this.cards = shuffledArr
    }
  }
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if(card1=== card2){
    this.pairsGuessed++; 
      return true; 
    }else{
      return false; 
    }
  }
  checkIfFinished() {
    // ... write your code here
    const totalPairs = this.cards.length/2
    
    if(this.pairsGuessed === totalPairs){
      return true;
    }else{
      return false; 
    }
  }
}
