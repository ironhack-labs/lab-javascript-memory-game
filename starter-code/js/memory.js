class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0 ;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    this.cards.sort(function(){ return Math.random() -0.5})
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } else {
      return false
    }
  }
  
  isFinished() {
    console.log(this.pairsGuessed);
    console.log(this.cards.length/2);

    if (this.pairsGuessed == (this.cards.length/2)){
      console.log("You won!")
      alert("You won!!");
      return true;
    } else {
      return false;
    }
  }
}