class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined){
      return undefined;
    }else{
      this.cards.sort((a, b) => (Math.random() - 0.5))
  }
}

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }else{
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed < this.cards.length / 2){
      return false;
    }else if(this.pairsGuessed === this.cards.length / 2){
      return true;
    }
  }
}
