class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let numberOfCards = this.cards.length;
    for (let i = 0; i < numberOfCards; i++){
      let newIndex = Math.floor(Math.random() * numberOfCards);
      [this.cards[i], this.cards[newIndex]] = [this.cards[newIndex], this.cards[i]];
    }
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}