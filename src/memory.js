class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    if(!cards) {
      return undefined;
    }
    
    for (let i = cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }
    
    return cards;    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }

    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed >= 8) {
      return true;
    }

    return false;
  }
}