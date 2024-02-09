export class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards !== undefined) {
      var length = this.cards.length;
      let temp;
      let i;

      // While there remain elements to shuffle…
      while (length) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * length--);

        // And swap it with the current element.
        temp = this.cards[length];
        this.cards[length] = this.cards[i];
        this.cards[i] = temp;
      }
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1.localeCompare(card2) === 0) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === 8;
  }
}
