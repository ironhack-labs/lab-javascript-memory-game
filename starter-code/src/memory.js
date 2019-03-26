class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed= 0;
  }
  shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return undefined;
  }
  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard === secondCard) {
      this.pairsGuessed = 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed < 8) {
      return false
    }else {
      return true
    }
  }
}