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
    // ... write your code here
    if(card1 === card2){
      this.pairsClicked +=1;
      this.pairsGuessed +=1;
      return true
    } else {
      this.pairsClicked +=1
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if((this.cards.length/2) === this.pairsGuessed){
      return true
    } else {
      return false
    }
  }
    // ... write your code here

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
