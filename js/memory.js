class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards(cards) {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * i)
      const shuffle = this.cards[i]
      this.cards[i] = this.cards[random]
      this.cards[random] = shuffle;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
    this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }

  }

  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    } else {
      return false;
    }
  }

}
