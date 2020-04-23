class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    var suffledCards = [],
      n = this.cards.length,
      i;
    while (n) {
      i = Math.floor(Math.random() * this.cards.length);
      if (i in this.cards) {
        suffledCards.push(this.cards[i]);
        delete this.cards[i];
        n--;
      }
    }
    this.cards = [...suffledCards];
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let theSame = false;
    if (card1 === card2){
      this.pairsGuessed++;
      theSame = true;
    }
    return theSame;

  }

  isFinished() {
    let gameOver = false;
    if(this.pairsGuessed === this.cards.length/2){
      gameOver = true;
    }
    return gameOver;
  }
}