class MemoryGame {
  constructor(card){
    this.cards = card;
    this.firstGuess;
    this.secondGuess;
    this.firstGuessFrontDiv
    this.firstGuessBackDiv
    this.secondGuessFrontDiv
    this.secondGuessBackDiv
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
    // console.log(card1);
    // console.log(card2);
    if(card1 === card2 && card1 !== undefined){
      memoryGame.correctPairsClicked += 1;
      // console.log(memoryGame.correctPairsClicked);
      $(`#pairs_guessed`).html(memoryGame.correctPairsClicked);
      // console.log(`You got ${memoryGame.correctPairsClicked} pairs correct`)
      $(".back").removeClass("blocked");
    }
    else{
      setTimeout(function resetCard(){
        memoryGame.firstGuessBackDiv.toggleClass("front back");
        memoryGame.firstGuessFrontDiv.toggleClass("back front");
        memoryGame.secondGuessBackDiv.toggleClass("front back");
        memoryGame.secondGuessFrontDiv.toggleClass("back front");

        },500);
        setTimeout(function unblockCards(){
          $(".back").removeClass("blocked");
        },500)
      }
    }
  
  isFinished(){
    if(memoryGame.correctPairsClicked === 12){
      setTimeout(function(){
        if(!alert('You are the Ultimate Memory Game Gangsta!!!!')){
        window.location.reload();
        }
      },250)
    }
  }

}