class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    const shuffledCards = this.cards;
    let mixed = shuffledCards.length, tempValue, randomIndex;
  
    while (mixed) {
      randomIndex = Math.floor(Math.random() * mixed--);
  
      tempValue = shuffledCards[mixed];
      shuffledCards[mixed] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = tempValue;
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } return false;
  }


  isFinished() {
    return (this.pairsGuessed === (this.cards.length / 2)) ? true : false
  }
}