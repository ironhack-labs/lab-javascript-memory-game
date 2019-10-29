class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }else{
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed * 2 === this.cards.length;
  }

  //starGame(){
  // this.pairsClicked = 0;
  //this.pairsGuessed = 0;
  //}
}