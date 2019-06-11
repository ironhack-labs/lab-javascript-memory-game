class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
   }
  shuffleCards() {
     let shuffle = Math.floor(Math.random()*this.cards.length -1) + 1;
     let array = this.cards.sort(() => {
       return shuffle/2 - shuffle

     });
     this.pickedCards.push(array);
     }
     
     

  
  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if(card1 === card2) {
    
     this.pairsGuessed ++;
     return this.pairsClicked;
     
   }
     else { 
      return false
     }
  }
  isFinished() {
    if(this.pairsGuessed == 12) {
      return true
    }
     return false

  }
}