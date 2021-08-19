class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = [];


  }

  shuffleCards() {

    if (this.cards === undefined)
      return undefined;

    // cogido de internet

    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomCard = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[randomCard]] = [this.cards[randomCard], this.cards[i]];
    }



  }

  checkIfPair(card1, card2) {

    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true
    } else return false

  }

  checkIfFinished() {

    return this.pairsGuessed === this.cards.length / 2
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
