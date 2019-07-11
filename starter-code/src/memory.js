class MemoryGame {
  constructor(card){
    this.cards = card;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let currentIndex = this.cards.length, tempValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);
      
      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    console.log(this.pairsGuessed, this.cards)
    
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    }
    else {
      return false
    }
  }
}