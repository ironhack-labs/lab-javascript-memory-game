class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let counter = this.cards.length - 1; counter > 0; counter--){
      //get random roll
      let randomIndex = Math.floor(Math.random() * this.cards.length);

      //Exchange the value with the random number + the last value in the cards
      [this.cards[counter], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[counter]];
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}