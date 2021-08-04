class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  
  shuffleCards() {
    if(!this.cards){
      return undefined;
    }else if(this.cards.length === 0 ){
      return false;
    }
    
    for( let i = 0; i < this.cards.length; i++){
      let aux = this.cards[i];
      let randomPosition = Math.floor(Math.random()*(this.cards.length-i)+i)
      this.cards[i] = this.cards[randomPosition];
      this.cards[randomPosition] = aux;
    }

        // ... write your code here
    return this.cards;
  }

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked +=1;
      this.pairsGuessed +=1;
      
      return true;
    }else{
      this.pairsClicked +=1;
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === 12){
      return true;
    }else{
      return false;
    }
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
