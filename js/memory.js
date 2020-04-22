class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let counter = this.cards.length;
    while (0 !== counter) {
      let random = Math.floor(Math.random() * counter);
      counter--;
      let temp = this.cards[counter];
      this.cards[counter] = this.cards[random];
      this.cards[random] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    } else {;
      return false;
    }
  }

  isFinished() { 
    if (this.pairsGuessed === 12){
      return true;
    }else{
      return false; 
    }
  }

}