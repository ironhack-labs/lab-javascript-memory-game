class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
}

  shuffleCards() {
    if(!this.cards){
      return undefined
    }

    this.cards.forEach((currentCard, index ) => {
      const randomIndex = Math.floor(Math.random() * this.cards.length)
      const temp = this.cards[index]
      this.cards[index] = this.cards[randomIndex]
      this.cards[randomIndex] = temp
    })

    return this.cards;
}

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
      return false; 
  }

  checkIfFinished() {
    // if (this.pairsGuessed < 12) {
    //   return false;
    // }
    // else if (this.pairsGuessed === 12) {
    //   return true;
    // }
    const totalPairs = this.cards.length / 2;
  return this.pairsGuessed === totalPairs;
  }
}

