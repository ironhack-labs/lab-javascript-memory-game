class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }

  shuffleCards() {
    if (!this.cards){
      return undefined
    }
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] =  temp;
    } 
    return this.cards 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++
    if (card1 === card2){
      this.pairsGuessed ++
      return true
    }
    else { 
      return false
     }
  }

  checkIfFinished() {
return this.pairsGuessed === this.cards.length / 2
  }
}
