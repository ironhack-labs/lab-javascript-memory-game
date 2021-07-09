class MemoryGame {
  constructor(cards) {
  this.cards = cards;

  //storing the cards use has clicked
  this.pickedCards = [];

  // adding every time a user selects and guesses a pair.
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  }

  shuffleCards() {
for (let i = this.cards.length; i > 0; i--) {
  let random = Math.floor(Math.random() * i--);
  // let temp = this.cards[i];
  this.cards[i] = this.cards[random];
  //this.cards[random] = temp;
}
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
      if (card1 === card2) {
        this.pairsGuessed += 1
        return true
    } 
      return false
  }

  

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2 )
    return true

    return false;
  }

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
