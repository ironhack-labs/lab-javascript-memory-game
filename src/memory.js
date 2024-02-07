class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }
//Iteration 2.2
  shuffleCards() {
    // ... write your code here
    //should return the shuffled (mixed) array of cards-NOT WORKING
    const shuffle = (cards) =>{
      let oldElement;
      for (let i = cards.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        oldElement = cards[i];
        cards[i] = cards[rand];
        cards[rand] = oldElement;
      }
      return cards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1.name===card2.name){
      this.pairsGuessed++
      return true
    }
    
  //   else {
      
      
  // return false}
     
   }
  

  checkIfFinished() {
    if(this.pairsGuessed===0){
      return false
    }
    if(this.pairsGuessed===this.cards.length/2){
      return true
    }
    else {
      return false
    }
  }
}
