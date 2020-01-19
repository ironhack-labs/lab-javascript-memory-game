class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards;
    this.pairsClicked ;
    this.pairsGuessed;
    // add the rest of the class properties here
  }
  shuffleCards() {
    this.cards.sort(function(){ return Math.random() -0.5})
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1.name === card2.name){
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    let numCards = Object.keys(this.cards[0]);
    console.log(numCards)
    if (this.pairsGuessed == (numCards/2)){
      return true;
    } else {
      return false;
    }
  }
}