class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    if (this.cards == null) {
      return undefined
    }

  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  return this.cards;
    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true }
      else {
        return false
      }

    
  }

  checkIfFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true 
    } else {
      return false
    }
  } 
}
