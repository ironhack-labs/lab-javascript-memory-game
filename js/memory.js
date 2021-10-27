class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
 
   if(this.cards === undefined) return undefined

   for(let i = this.cards.length - 1; i > 0; i--){
       let j = Math.floor(Math.random() * (i + 1));
       let temp = this.cards[i]
      
       this.cards[i] = this.cards[j];
       this.cards[j] = temp;

   }
      
   return this.cards;
   
  }

  checkIfPair(card1, card2) {
    // ... write your code here
     this.pairsClicked = this.pairsClicked  + 1;
     if(card1 === card2){
       this.pairsGuessed = this.pairsGuessed + 1;
     
       return true
     } else {
       return false
     }

    
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed * 2 === this.cards.length
  }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
