class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(arrayOfCards) {
    if (!arrayOfCards) {
      return 
    }
    var j, x, i;
    for (i = arrayOfCards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arrayOfCards[i];
        arrayOfCards[i] = arrayOfCards[j];
        arrayOfCards[j] = x;
    }
    return arrayOfCards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }

    return false;
  }
  isFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }
    return false;
  }
}