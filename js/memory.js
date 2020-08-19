class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 1; i--) {
      let j = Math.round(Math.random() * i);
      let tempCard = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = tempCard;
    }
  }

  checkIfPair(card1, card2) {
    if(!card1 || !card2) return false;

    this.pairsClicked++;
    if(card1 === card2) this.pairsGuessed++;
    
    return (card1 === card2);
  }

  isFinished() {
    return this.pairsGuessed >= (this.cards.length / 2);
  }

}