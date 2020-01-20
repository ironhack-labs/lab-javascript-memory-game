class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    let i, j, g;
    for (i = this.cards.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      g  = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = g;
    }
    return undefined;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let areSame = false;
    if (card1 === card2){
      this.pairsGuessed++;
      areSame = true;
    }
    return areSame;
  }
  isFinished() {
    let endGame = false;
    if(this.pairsGuessed === this.cards.length/2){
      endGame = true;
    }
    return endGame;
  }
}