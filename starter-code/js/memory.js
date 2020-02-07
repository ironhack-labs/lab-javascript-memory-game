class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    
    const array = this.cards;

    for (let i = array.length-1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
  
      let temporaryValue = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    this.cards = array;

  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }

    return false;

  }

  isFinished() {

    if(this.pairsGuessed === this.cards.length / 2) {
      return true;
    }

    return false;
  }
}