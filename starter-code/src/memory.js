class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.guessCardOpenOne = "";
    this.guessCardOpenTwo = "";
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }
  shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
      let randomNumber = Math.floor(Math.random() * this.cards.length);
      let tempShuffleOne = this.cards[randomNumber];
      this.cards[randomNumber] = this.cards[i];
      this.cards[i] = tempShuffleOne;
    }
  }
  guessCard(card) {
    if (!this.guessCardOpenTwo) {
      this.toggleGuessCards(card);
      this.guessCardOpenOne ? this.guessCardTwo(card) : this.guessCardOpenOne = card;
    }
  }
  guessCardTwo(cardTwo) {
    this.guessCardOpenTwo = cardTwo;
    this.pairsClicked++
    this.checkIfPair() ? (this.pairsGuessed++ , this.resetGuessCards()) :
      setTimeout(() => (this.toggleGuessCards(this.guessCardOpenOne, cardTwo), this.resetGuessCards()), 1000);
  }
  checkIfPair() {
    return this.guessCardOpenOne.parent().data('card-name') === this.guessCardOpenTwo.parent().data('card-name');
  }
  toggleGuessCards(card1, card2) {
    card1.toggleClass('back front');
    card1.siblings().toggleClass('front back');
    card2 ? (card2.toggleClass('back front'), card2.siblings().toggleClass('front back')) : "";
  }
  resetGuessCards() {
    this.guessCardOpenOne = "";
    this.guessCardOpenTwo = "";
  }
  // isFinished() {
  // }
}


