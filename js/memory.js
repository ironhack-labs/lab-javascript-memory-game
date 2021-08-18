class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }
  
  shuffleCards(cards) {
    // Shuffle cardsArr using Fisher Yates Method
    console.log(cards);
    let shuffledCards = cards;
    for(let i = cards.length-1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let randomCard = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = shuffledCards[i];
      shuffledCards[i] = randomCard;
    }
    return shuffledCards;
  }
  
  
  
  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
