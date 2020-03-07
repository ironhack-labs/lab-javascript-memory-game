class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let newArray = [];
    if (this.cards) {
      for (let i = this.cards.length-1; i >= 0; i--) {
        newArray.push(this.cards[i]);
      }
      this.cards = newArray;
    // return this.cards;
  }
}

  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if(card1===card2){
    this.pairsGuessed+=1;
    return true;
    } else{
      return false;
    }
  }

  isFinished() {
    if(this.pairsGuessed===this.cards.length/2){
      return true;
    }else{
      return false;
    }
  }
}