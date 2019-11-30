class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = (this.cards.length - 1); i > 0; i -= 1) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
    console.log(this.cards[i], this.cards[randomIndex])
    console.log(this.cards[randomIndex], this.cards[i])
    }
    return this.cards;
  }
  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsGuessed++;
      this.pairsClicked++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }
  isFinished() {
    
  }
}