class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }


  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    const theSame = card1 === card2;
    if (theSame) {
      this.pairsGuessed++;
      return true;
    } 
    return false;
  }
  isFinished() {
    const pairs = this.cards.length / 2;
    const finish = pairs === this.pairsGuessed
    return finish
  }
}