class MemoryGame {

  constructor(cards){
    this.cards = cards; 
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    if (!this.cards) {
      return undefined;
    }

      let newPosition;
      let temp;

      for (let i = 0; i < this.cards.length - 1; i++) {
        newPosition = Math.floor(Math.random() * (i + 1));
        temp = this.cards[i];
        this.cards[i] = this.cards[newPosition];
        this.cards[newPosition] = temp;
      }
      
    return this.cards;
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

    if (this.pairsGuessed < (this.cards.length / 2)) {
      return false;
    } else {
      return true;
    }

  }
}