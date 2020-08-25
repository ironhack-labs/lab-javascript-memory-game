class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let copy = []
    let n = 0
    let i = 0
    
    n = this.cards.length
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
      // And move it to the new array.
      copy.push(this.cards.splice(i, 1)[0]);
    }
    if (!n)
      return undefined
    else 
      return copy
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    else 
      return false
  }
  isFinished() {
    if (this.pairsGuessed === 12)
      return true
    return false
  }
}