class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards(cards) {
    const shuffledCards = this.cards;
    let currentIndex = shuffledCards.length, temporaryValue, randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffledCards[currentIndex];
      shuffledCards[currentIndex] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = temporaryValue;
    }
    return undefined;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true
    } else {
      return false;
    }
  }
  
  isFinished() {}
}