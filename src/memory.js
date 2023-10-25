class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    
  // add the rest of the class properties here
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairsGuessed = pairsGuessed;  
}

  shuffleCards(cards) {
    // ... write your code here
  
    for(let i = cards.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i +1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
  

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;

    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
if (this.pairsGuessed === this.cards.length / 2) {
  return true; 
} else {
  return false;
}
  }
}
