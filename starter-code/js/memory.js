class MemoryGame {
  constructor(cards){
    this.cards = cards;
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
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2){
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    let numberOfCards = this.cards.length;
    if (this.pairsGuessed == numberOfCards / 2){
      return true;
    }
    return false;
  }
}