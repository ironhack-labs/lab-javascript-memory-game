class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    const array = this.cards
    let m = array.length, t, i;
  
    while (m) {
     
      i = Math.floor(Math.random() * m--);
    
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }    
  }



  checkIfPair(card1, card2) {
    this.pairsClicked=this.pairsClicked+1;

    if(card1===card2){
      this.pairsGuessed = this.pairsGuessed+1;
      return true;
    } else {
      return false
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
