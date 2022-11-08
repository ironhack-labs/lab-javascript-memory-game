class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined;
    }
    else {
      for(let i = this.cards.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = temp;
     }
     return this.cards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    let a = card1.innerHTML;
    let b = card2.innerHTML;
    if (a == b) { 
      this.pairsGuessed += 1;
      return true;    
    }
    else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed == this.cards.length/2;
  }
}
