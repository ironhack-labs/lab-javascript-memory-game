class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards(cards) {
    // ... write your code here
    this.cards = cards;

    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if(card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else { 
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here   
    if ( this.pairsGuessed === 8 ) {  

      return true;
      
    } else{
      
        return false;
  
    }
  }
}

/*Christian, porque esto no funciona? :
 while( this.pairsGuessed !== 8 ){ return false } 
 no pasa la ultima linea del test " should return
 true if all pairs are guessed */


