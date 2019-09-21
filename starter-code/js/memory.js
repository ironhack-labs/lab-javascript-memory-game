class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.shuffleCards()
    // add the rest of the class properties here
  }
  shuffleCards() {
    var copy = [], n = this.cards.length, i;

    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
  
      // And move it to the new array.
      copy.push(this.cards.splice(i, 1)[0]);
    }
    this.cards = copy;
  }
  checkIfPair(card1, card2) {
    console.log(card1 , card2)
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }
  isFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }else{
      return false
    }
  }
}