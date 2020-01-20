class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      let cardsJ = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = cardsJ;
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
    let endGame = false
    if(this.pairsGuessed === this.cards.length/2){
      console.log("a");
      endGame = true;
    }
    return endGame;
  }
}