class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.selectedCards = [];
    this.pairsClicked = 0; 
    this.pairsGuessed = 0;
  }
  shuffleCards() {}



  checkIfPair(card1, card2) {
    // console.log(this.selectedCards)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", card1.parent().data("cardName"), " === ", card2.parent().data("cardName"))
    if (card1.parent().data("cardName") === card2.parent().data("cardName")){
      memoryGame.pairsClicked += 1;
      memoryGame.pairsGuessed += 1;
      document.getElementById("pairs_clicked").innerHTML=this.pairsClicked;
      document.getElementById("pairs_guessed").innerHTML=this.pairsGuessed;
      return true;
    } else{
      memoryGame.pairsClicked += 1;
      document.getElementById("pairs_clicked").innerHTML=this.pairsClicked;
      return false;
    }
    
  }

  isFinished() {
    if(this.selectedCards.length % 2 === 0) {
      this.checkIfPair(this.selectedCards[0],this.selectedCards[1]);
    }
  }
}
