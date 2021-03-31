class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let copy = JSON.parse(JSON.stringify(this.cards));
    this.cards = []

    while (copy.length > 0) {
    let int = Math.floor(Math.random() * copy.length);
    let pickedCard = copy[int];

    copy.splice(copy.indexOf(pickedCard), 1);
    this.cards.push(pickedCard);
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if ((this.cards.length/2) - this.pairsGuessed === 0 ) return true;
    return false
  }
}