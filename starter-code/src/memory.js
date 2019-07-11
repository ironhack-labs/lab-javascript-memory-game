class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    let guessed = card1 === card2
    guessed ? this.pairsGuessed++ : false
    return guessed

  }
  isFinished() {
    return this.pairsGuessed === this.cards.length/2
  }
}

