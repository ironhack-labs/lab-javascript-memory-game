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
    
    // SOLUTION with a copy of the cards array
    
    // const copyOfCards = [...this.cards]

    // for (let i = 0; i < this.cards.length; i++) {
    //   const randomCardIndex = Math.floor(Math.random()*copyOfCards.length)
    //   const randomCard= copyOfCards[randomCardIndex];
    //   shuffledCards.push(randomCard);
    //   copyOfCards.splice(randomCardIndex, 1);
    // }  

    // SOLUTION without a copy of the cards array
    for (let i = this.cards.length-1; i >= 0; i--) {
      const randomCardIndex = Math.floor(Math.random()*cards.length)
      const randomCard= this.cards[randomCardIndex];
      shuffledCards.push(randomCard);
      this.cards.splice(randomCardIndex, 1);
    }  


    return this.cards = shuffledCards;
   
    
}

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
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

