class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    const randomizedDeck = (cards) => {

      // While there remain elements to shuffle…
      let reducingLength = cards.length;
      let temporaryCard;
      let randomIndex;

      while (reducingLength) {

        // Pick a remaining element…
        randomIndex = Math.floor(Math.random() * reducingLength--);

        // And swap it with the current element.
        temporaryCard = cards[reducingLength];
        cards[reducingLength] = cards[randomIndex];
        cards[randomIndex] = temporaryCard;

      }

      return cards;

    };
    randomizedDeck(this.cards);
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
  isFinished() {

    const numberOfPairs = this.cards.length / 2;
    if (this.pairsGuessed === numberOfPairs) {
      return true;
    } else {
      return false;
    }

  }
}