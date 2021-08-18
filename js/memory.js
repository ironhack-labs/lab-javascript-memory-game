class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // se guardan las cartas para compararse entre si
    this.pairsClicked = 0; // cuentan los intentos del usuario
    this.pairsGuessed = 0; // cuenta los aciertos del usuario

    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!arguments) {
      return undefined;
    } else {
      const cardsCopy = JSON.parse(JSON.stringify(this.cards));
      var m = cardsCopy.length,
        t,
        i;

      while (m) {
        i = Math.floor(Math.random() * m--);

        t = cardsCopy[m];
        cardsCopy[m] = cardsCopy[i];
        cardsCopy[i] = t;
      }
      this.cards = cardsCopy;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    let cardsPairNumber = this.cards.length;

    if (this.pairsGuessed * 2 === cardsPairNumber) {
      alert('YEAAAH');
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
