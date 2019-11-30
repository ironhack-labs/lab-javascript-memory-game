class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(){
    for (let i = this.cards.length-1; i > 0; i--){
      let j = Math.floor(Math.random() * i);
      let cardsJ = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = cardsJ;
    }
    return this.cards;
  };

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    return (this.pairsGuessed === this.cards.length/2);
  }
}