class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let numOfCards = this.cards.length;
    let randomPos = 0;
    let auxCard = undefined;

    while (numOfCards) {
      randomPos = Math.floor(Math.random() * numOfCards--);
      auxCard = this.cards[numOfCards];
      this.cards[numOfCards] = this.cards[randomPos];
      this.cards[randomPos] = auxCard;
    }

    return this.cards;
  }

  checkIfPair(cardName1, cardName2) {
    let areEqual = false;

    this.pairsClicked++;

    if (cardName1 === cardName2) {
      this.pairsGuessed++;
      areEqual = true;
    }

    return areEqual;
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {}
  isFinished() {}
}