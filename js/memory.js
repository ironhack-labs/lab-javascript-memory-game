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
    if (this.cards===undefined){
      return undefined;
    }else{
     const newArray = function(array){
        let newPos;
        let temp;
      for (let i=0;i<array.length;i++){
        newPos = Math.floor(Math.random()*(i+1));
        temp = array[i];
        array[i] = array[newPos];
        array[newPos] = temp;
      }
      return array; 
    }    
    const shuffleArray = newArray(this.cards);
    return shuffleArray  
  }    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1===card2){
      this.pairsGuessed += 1;
      return true;
    }else{
      return false;
    }

  }

  checkIfFinished() {
    // ... write your code here
    
    if(this.pairsGuessed < (this.cards.length/2)){
      return false;
    }else if(this.pairsGuessed === (this.cards.length/2)){
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
