class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = [0];
    this.pairsGuessed = [0];
  }
  MemoryGame.shuffleCards()  {
  
    randomIndex = Math.floor(Math.random() * 24);
    currentIndex -= 1;

    

  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
