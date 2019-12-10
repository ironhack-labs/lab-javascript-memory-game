class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var cards = this.cards,
    m = cards.length, 
    t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = cards[m];
      cards[m] = cards[i];
      cards[i] = t;
    }

  }
  checkIfPair(card1, card2) {
    const pair = card1 === card2;
    this.pairsClicked++;
    if (pair) {
      this.pairsGuessed++;
    }
    return pair;
  }

  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    }else{
      return false;
    }
    
  }
}