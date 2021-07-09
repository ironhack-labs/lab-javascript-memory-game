class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let m = this.cards.length

    while(m) {
      let i 
      i = Math.floor(Math.random() * m--); //i = random number to pick a card
      
      let t
      t = this.cards[m]; // t = the last card
      this.cards[m] = this.cards[i] // the last card is nw 
      this.cards[i] = t //
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2) {
      this.pairsGuessed += 1;
      return true
    }
    else return false
  }

  checkIfFinished() {
    if(this.cards.length/2 === this.pairsGuessed) return true;
    else return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;


console.log("Hello memory")
