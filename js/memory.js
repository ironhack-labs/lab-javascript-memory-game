class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    //Iteration 2.1: The MemoryGame class
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  //Iteration 2.2: The class methods
  shuffleCards() {
    for (let i = 0; i < this.cards.length - 2; i++) {
      let j = Math.floor(Math.random() * (this.cards.length - i) + i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } else return false;
  }
  isFinished() {
    return (this.cards.length / 2) === this.pairsGuessed;
  }

}