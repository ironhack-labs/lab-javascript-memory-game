class MemoryGame {
  constructor(card){
    this.cards = card;
    this.clickedCards = [];
    this.guessed = 0;
    this.clicked = 0;
  }
  shuffleCards() {}

  checkIfPair(card1, card2) {

    // console.log(card1, " === ", card2)
    // console.log(card2)

  if(card1.attributes[1].value === card2.attributes[1].value){ 
    // console.log("its true");
    return true;
  } else {
    // console.log("its false");
    return false;
  }

  } // checkIfPair

  isFinished() {}
}
