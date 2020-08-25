class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 1; i--) {
        let j = Math.round(Math.random() * i);
        let tmpCard = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = tmpCard;
  }
}
  checkIfPair(card1, card2) {
      this.pairsClicked += 1
      if (card1 === card2){ 
        this.pairsGuessed += 1
        return true
    }
    return false
  }
  isFinished() {
  }
}

const momo = new MemoryGame

console.log(momo.shuffleCards())