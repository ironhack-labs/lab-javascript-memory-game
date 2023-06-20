class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; 
    this.pairsClicked = 0; 
    this.pairsGuessed = 0; 
  }

  shuffleCards(cards = []) {
      if (cards.length === 0) {
        return undefined;
      }
      
      const shuffledCards = cards.slice();
      for (let i = cards.length - 1; i > 0; i--) {
        const play = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[play]] = [cards[play], cards[i]];
      }
    
      this.cards = shuffledCards;
  
      return shuffledCards;
  } //No se que me falta exactamente en este punto

  checkIfPair(card1, card2) {
    this.pairsClicked++;

   if (card1 === card2) {
    this.pairsGuessed++; 
    return true;
   } else {
    return false;
  }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
  }