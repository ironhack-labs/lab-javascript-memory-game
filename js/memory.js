class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []

    this.pairsClicked = 0

    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    
  const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return shuffleArray
}
  
}

  checkIfPair(card1, card2) {
    // ... write your code here

    
    if ( card1 === card2){
      return true
    } else if ( card1 !== card2){
      return false
    } else if (this.pairsClicked === this.checkIfPair){
      return this.pairsClicked +1
    } else {
      this.pairsGuessed = 0

      return this.pairsGuessed +1
    }
  }

  checkIfFinished() {
    // ... write your code here
    
    
    if (this.pairsGuessed == 0 || this.pairsGuessed < this.cards.length / 2){
      return false
    } else {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
