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
    if (!this.cards){
      return undefined
    }
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * (this.cards.length));
      const temp = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temp
  }
  }
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++

    if (card1 === card2){
      this.pairsGuessed++
      return true
    }
    else{
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } 
    else if (this.pairsGuessed !== 12){
      return false;
    }
    else {
      return true;
    }
  }
}
