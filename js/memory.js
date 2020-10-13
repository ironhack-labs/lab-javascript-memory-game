class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
 shuffleCards() {
  
  // 1st option
  // let i = 0
  // let j = 0
  // let tempValue = null

  // for (i = this.cards.length - 1; i > 0; i -= 1) {
  //   j = Math.floor(Math.random() * (i + 1))
  //   tempValue = this.cards[i]
  //   this.cards[i] = this.cards[j]
  //   this.cards[i] = tempValue
  // }
  // this.cards.push(tempValue);

  // 2nd option
  let currentIndex = this.cards.length;
    while (currentIndex !== 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      let tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
  }
}

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}