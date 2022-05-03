class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let array = this.cards;

    if (array === undefined) {
      array = undefined;
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        [this.cards[i], this.cards[randomIndex]] = [
          this.cards[randomIndex],
          this.cards[i]
        ];
      }

      array = this.cards;
    }

    return array;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;

      alert('Hey! That was amazing. You beat it!');
      return true;
    } else if (
      this.pairsClicked < this.cards.length / 2 ||
      this.pairsClicked === 0
    ) {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
