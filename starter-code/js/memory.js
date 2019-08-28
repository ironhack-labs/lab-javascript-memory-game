class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    let newCards = this.cards;
    let currentIndex = newCards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = newCards[currentIndex];
      newCards[currentIndex] = newCards[randomIndex];
      newCards[randomIndex] = temporaryValue;
      //God Bless Stack Overflow
    }
    return undefined;
  
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
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    } else {
      return false;
    }
  }
}