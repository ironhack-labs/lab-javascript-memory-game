class MemoryGame {
  // Create de game
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Suffle Cards
  shuffleCards() {
    this.cards = this.cards.sort(() => {
      return 0.5 - Math.random();
    })
  }

  // Check if Card 1 & card 2 are the same
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1
      this.pickedCards = [];
      return true;
    }
    this.pickedCards = [];
    return false;
  }

  // Check if game is Finished
  isFinished() {
    return this.pairsGuessed === this.cards.length/2 ? true : false
  }
}