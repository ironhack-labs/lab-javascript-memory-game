class MemoryGame {


  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    let random = null;
    let newRandom = null;

    for (let i = 0; i < this.cards.length; i++) {
      random = Math.floor(Math.random() * (this.cards.length - i) + i);

      newRandom = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = newRandom;
    }


  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
    
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }


  }

}