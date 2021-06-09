class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here

    let currentIndex = this.cards.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [this.cards[currentIndex], this.cards[randomIndex]] = [
      this.cards[randomIndex], this.cards[currentIndex]
    ];
  }

  return this.cards;
}

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;

      return true
    }

    return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === (this.cards.length / 2)) {
      console.log('Game finished')
      return true
    } else {
      console.log('The Game is still on!')
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
