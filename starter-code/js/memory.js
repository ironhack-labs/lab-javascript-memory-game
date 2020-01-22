class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairClicked = 0;
    this.pairGuessed = 0;
    // add the rest of the class properties here
  }


  shuffleCards() {
    let newCard = [];
    let formedCard = this.cards;

    while (formedCard.length !== 0) {
      newCard.push(formedCard[randomIndex]);
      formedCard.splice(randomIndex,1);
    }
    this.cards = newCard;
  }

  checkIfPair(card1, card2) {
    this.pairClicked++;
    if (card1 === card2) {
      this.pairGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    return (this.pairGuessed < this.cards.length/2) ? false : true;
  }
}