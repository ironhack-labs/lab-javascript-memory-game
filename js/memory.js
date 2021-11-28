class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined;
    }
    for(let i = 0; i < this.cards.length; i++){
      const j = Math.floor(Math.random() * (this.cards.length));
      const card = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = card;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
