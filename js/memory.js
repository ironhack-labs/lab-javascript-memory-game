class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pickedCards = 0;
    this.pickedCards = 0;
  }

  shuffleCards() {
    const cardsCopy = JSON.parse(JSON.stringify(this.cards));

    let m = cardsCopy.lenght,
    t, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      t = cardsCopy[m];
      cardsCopy[m] = cardsCopy[i];
      cardsCopy[i] = t;
    }

    this.cards = cardsCopy;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if(card1 === card2) this.pairsGuessed++;

    return card1 === card2;
  }

  checkIfFinished() {
    return this.cards.lenght / this.pairsGuessed === 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
