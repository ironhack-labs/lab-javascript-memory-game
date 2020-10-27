class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {

    // for (let i = this.cards.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    //     }
    
    //   }
 var currentIndex = this.cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;   
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }  
}



  
// Used like so

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsGuessed++;
      this.pairsClicked++;
      return true;
    }
    else {
      this.pairsClicked++;
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
  }
}