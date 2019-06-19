class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.selectedCards = [];
  }
  shuffleCards() {}



  checkIfPair(card1, card2) {
    // console.log(this.selectedCards)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", card1.parent().data("cardName"), " === ", card2.parent().data("cardName"))
    if (card1.parent().data("cardName") === card2.parent().data("cardName")){
      // console.log("its true ====")
      return true;
    } else{
      // console.log("its false ----")
      return false;
    }
    
  }

  isFinished() {
    if(this.selectedCards.length % 2 === 0) {
      this.checkIfPair(this.selectedCards[0],this.selectedCards[1]);
    }
  }
}
