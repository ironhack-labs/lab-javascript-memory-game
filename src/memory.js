class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
        
    if(!this.cards) {
      return undefined
    }

    const shuffledCards = [];
    const copyOfCards = [...this.cards]

    for (let i = 0; i < this.cards.length; i++) {
      const randomCardIndex = Math.floor(Math.random()*copyOfCards.length)
      const randomCard= copyOfCards[randomCardIndex];
      shuffledCards.push(randomCard);
      copyOfCards.splice(randomCardIndex, 1);
    }  
    this.cards = shuffledCards;

}

  checkIfPair(card1, card2) {
    if(card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
}

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } 
    return false; 
  }
}

