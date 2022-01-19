class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here    

    this.pairsClicked ++;
    if (card1 === card2) {
    
      this.pairsGuessed ++

      return true
      
    } else {

      return false

    } 


  }

  checkIfFinished() {
    
    if (this.pairsGuessed <= 12){ //no entiendo por que me da error
      return false
    } else {
    return true
    } 

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
