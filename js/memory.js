class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards(cards) {
   // 
    if (!this.cards) {
      return undefined;
    }
     // Shuffle cardsArr using Fisher Yates Method
     let shuffledCards = this.cards;
    for(let i = this.cards.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let randomCard = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = shuffledCards[i];
      shuffledCards[i] = randomCard;
    }
    return cards;
  }
  
  
  
  checkIfPair(card1, card2) {
    if (card1 && card2) {
      this.pairsClicked ++;
    }
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if ((this.pairsGuessed * 2) === this.cards.length) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
