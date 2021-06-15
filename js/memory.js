class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // this.cards = cardsArray;
    // var ctr = this.cards.length, temp, index;
    
    // // While there are elements in the array
    // while (ctr > 0) {
    // // Pick a random index
    //   index = Math.floor(Math.random() * ctr);
    // // Decrease ctr by 1
    //   ctr--;
    // // And swap the last element with it
    //   temp = this.cards[ctr];
    //   this.cards[ctr] = this.cards[index];
    //   this.cards[index] = temp;
    // }
    // return this.cards;  
    //...............................
    this.cards.sort( () => .5 - Math.random() );
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }else{
      return false;
    }  
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    }else{
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
