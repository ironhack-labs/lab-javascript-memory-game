class MemoryGame  {
  constructor(cards) {
    this.cards = cards;
    this.guessCardOpenOne = "";
    this.guessCardOpenTwo = "";
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }
  shuffleCards(){
    for (i =0; i < cards.length; i++) {
      let randomNumber = Math.floor(Math.random() * this.cards.length);
      let tempShuffleOne = this.cards[randomNumber];
      this.cards[randomNumber] = this.cards[i];
      this.cards[i] = tempShuffleOne;
    }
  }
  checkIfPair() {
    this.guessCardOpenOne === this.guessCardOpenTwo;
  }
  toggleGuessCards() {
    
  }
  isFinished() {
  }
}


