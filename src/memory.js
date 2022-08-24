class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
    this.arg = arguments;
  }

  shuffleCards() {
    console.log(arguments.length);
    if (this.arg.length <= 0) {
      return undefined;
    }

    let array = [...this.cards];
    console.log(this.cards);
    console.log(array);
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    this.cards = array;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed == 0) {
      return false;
    } else if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}
