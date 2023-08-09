class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // ... write your code here
    if (!cards) {
      return cards
    } else 
    {
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * this.cards.length)
        let temporary = cards[j]
        cards[j] = cards[j]
        cards[j] = temporary
      }
      this.cards = cards
    }
    return cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here\
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      this.checkIfFinished()
      return true;
    }
    else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}
