class MemoryGame {
  constructor(card){
    this.cards = card;
    this.firstGuess;
    this.secondGuess;
    this.pairsClicked = 0;
    this.correctPairsClicked = 0;
  }
  shuffleCards() {
    let i = this.cards.length;
    if ( i == 0 ) return false;
    while ( --i ) {
     let j = Math.floor( Math.random() * ( i + 1 ) );
     let tempi = this.cards[i];
     let tempj = this.cards[j];
     this.cards[i] = tempj;
     this.cards[j] = tempi;
   }
  }

  checkIfPair(card1,card2) {
    let firstGuess = card1;
    let secondGuess = card2;
    if(card1 === card2 && card1 !== undefined){
      memoryGame.correctPairsClicked += 1;
      console.log(`You got ${memoryGame.correctPairsClicked} pairs correct`)
    }
    // let pairsClicked = 0;
    // let correctPairsClicked = 0
    // if(card1 !== card2){
    //   pairsClicked ++;
    // }else{
    //   pairsClicked ++;
    //   correctPairsClicked ++;
    // }
  }


  isFinished() {}
}


// // set time out to flip back if wrong 

// //can't break if you double click