class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards() {
  let randomCardA;
  let randomCardB;
  let tempX;
  for (let index = 0; index < this.cards.length; index += 1) {
    randomCardA = Math.floor(Math.random() * this.cards.length);
    randomCardB = Math.floor(Math.random() * this.cards.length);
    tempX = this.cards[randomCardA];
    this.cards[randomCardA] = this.cards[randomCardB];
    this.cards[randomCardB] = tempX;
  }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
      if (card1 !== card2){
        return false
      }
    this.pairsGuessed += 1
    return true
  }

  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true
    } 
  return false
  }
}