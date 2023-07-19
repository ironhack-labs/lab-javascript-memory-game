class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards ){
      return undefined
    }
    
    this.cards.sort(() => Math.random() - 0.5)

  }

  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsGuessed++;
      return true
    } else {
      this.pairsClicked++;
      return false
    }
  }

  checkIfFinished() {

    if (this.pairsGuessed < 12) {
      return false
    }
      
    else if (this.pairsGuessed >= 12 ) {
      return true
    }
  }
}
