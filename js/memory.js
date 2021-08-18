class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0; //almacenaremos las tarjetas en las que el usuario ha hecho clic para poder compararlas.
    this.pairsGuessed = 0; // almacena las tarjetas emparejadas
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    // copia superficial
    // const cardsCopy = [...this.cards]
    // copia profunda ambas funcionarian
    const cardsCopy = JSON.parse(JSON.stringify(this.cards))
    var m = cardsCopy.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = cardsCopy[m];
      cardsCopy[m] = cardsCopy[i];
      cardsCopy[i] = t;
    }
    this.cards = cardsCopy;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1;
    if(card1 === card2){
      this.pairsGuessed = this.pairsGuessed + 1;
      return true;
    } 
    return false
  }

  checkIfFinished() {
    if ((this.cards.length/2) === this.pairsGuessed) {
      return true;
    }
    return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
