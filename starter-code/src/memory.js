class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort((a,b) => {
        return Math.floor(Math.random() < 0.5 ? -1 : 1);
    })
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    else{
      return false;
    }
  }
  isFinished() {
    let boo = false;
    if(this.pairsGuessed===(this.cards.length/2)){
      boo = true;
    }
    return boo;
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}

