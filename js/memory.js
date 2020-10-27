class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {

    this.cards.sort(() => Math.random()- 1)

  }

  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }

  }
  
  isFinished() {
    if (this.pairsGuessed === ((this.cards.length) / 2)) {
      return true
    } else {
      return false
    }
  }
}