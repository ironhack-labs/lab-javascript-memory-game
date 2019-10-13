class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = Number([]);
    this.pairsGuessed = Number([]);
    // add the rest of the class properties here
  }

  shuffleCards(cards) {

    var i, j, k;
    var temp;
  
    // Shuffle the stack 'n' times.
    for (i = 0; i < this.cards.length; i++)
      for (j = 0; j < this.cards.length; j++) {
        k = Math.floor(Math.random() * this.cards.length);
        temp = this.cards[j];
        this.cards[j] = this.cards[k];
        this.cards[k] = temp;
      
      }
      return undefined;
  }

  checkIfPair(card1, card2) {

    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }

  }





  isFinished() {

    if (this.pairsGuessed >= this.pairsClicked) {
      return true;
    } else (this.pairsGuessed < this.pairsClicked) 
      return false;
    }
  
}