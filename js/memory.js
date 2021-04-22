export class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = [];
    this.pairsGuessed = [];
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {}
  isFinished() {}
}