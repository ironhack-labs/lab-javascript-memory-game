
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;


    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      this.cards = undefined
    } else {

      let random = this.cards.sort(() => Math.random() - 0.5);
      return random;
    }

  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      console.log('son iguales')

      return true
    } else {
      console.log('no son iguales')
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}
