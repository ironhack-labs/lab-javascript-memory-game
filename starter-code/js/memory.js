class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }


  shuffleCards() {
    if (this.pickedCards.length === 0){
      return undefined;
    }

    else {
      let newCard = [];
      let formedCard = this.cards;

      while (formedCard.length !== 0) {
        newCard.push(formedCard[randomIndex]);
        formedCard.splice(randomIndex,1);
    }
    this.cards = newCard;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}