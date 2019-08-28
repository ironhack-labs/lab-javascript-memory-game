class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    }
    if (card1 != card2) {
      return false;
    }
  
  }
  isFinished() {
    if (this.pairsGuessed == 12) {
      return console.log( `You won!`);
    }
    return console.log( `Pairs still not found`);
  }
}

let game1 = new MemoryGame;

