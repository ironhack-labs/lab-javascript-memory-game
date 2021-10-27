class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    let currentIndex = arr.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex]
      ];
    }
    return arr;
  }

  checkIfPair(card1, card2) {
    console.log(card1, card2)
    this.pairsClicked++;
    return card1 === card2 ? (
      this.pairsGuessed++,
      true
    ) : false
  }

  checkIfFinished() {
    return this.pairsGuessed === cards.length / 2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
