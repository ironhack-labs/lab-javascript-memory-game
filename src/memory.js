class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    // ... write your code here
    if (!Array.isArray(this.cards)) {
      return;
    }

    this.cards.forEach((_, i, arr) => {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    });
  }
  // VAMOOOOS CHAT GPT AL RESCATE(el salvador de la clase)

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed !== 12) {
      return false
    } else {
      return true
    }

  }
}
