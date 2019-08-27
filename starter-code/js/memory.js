class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  //
  shuffleCards() {
    let shuffledCards = [];
    let shuffleCounter = this.cards.length;
    while (shuffleCounter > 0) {
      let random = Math.floor(Math.random() * shuffleCounter);
      shuffledCards.push(this.cards.splice(random, 1)[0]);
      shuffleCounter = this.cards.length;
    }
    this.cards = shuffledCards;
  }

  //

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }


  isFinished() {
    if (this.cards.length == this.pairsGuessed * 2) {
      return true;
    } else {
      return false;
    }
  }
}