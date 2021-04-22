class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {

    let counter = this.cards.length;
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);
          counter--;
          // And swap the last element with it
          let temp = this.cards[counter];
          this.cards[counter] = this.cards[index];
          this.cards[index] = temp;
      }
      return cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked =+ 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = MemoryGame;
//export { MemoryGame };