class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards){
      return undefined
    }else{
      for (let i = 0 ; i < this.cards.length; i++){
        const randomNumber = Math.floor(Math.random() * (this.cards.length));
        const selectedCards = this.cards[randomNumber];
        this.cards.splice(randomNumber , 1);
        this.cards.push(selectedCards);
      }
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    }else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    if (this.cards.length / 2 === this.pairsGuessed){
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;