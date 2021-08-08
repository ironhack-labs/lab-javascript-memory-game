class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {

    if(!this.cards) {
      return undefined;
    } 
      let len = this.cards.length;
      while (len > 0) {
      len--;
      let randomIndex = Math.floor(Math.random() * len);
      const randomCard = this.cards[randomIndex];
      this.cards[len] = randomCard;
      }
  }


    // ... write your code here

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

      if (card1 === card2) {
        this.pairsGuessed += 1;
        return true;
      }
        return false;
  }

  checkIfFinished() {
    return this.cards.length / 2 === this.pairsGuessed;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
