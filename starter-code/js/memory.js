class MemoryGame {
  constructor(cards){
    this.clicks = 0;
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
    // add the rest of the class properties here
  }

  shuffleCards() {
    this.cards.forEach((card,i) => {
      let tempCard = card;
      let randomIndexCard = Math.floor(Math.random()*this.cards.length);
      let tempCard2 = this.cards[randomIndexCard];
      this.cards[i] = tempCard2;
      this.cards[randomIndexCard] = tempCard;
    });
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    this.pickedCards = [];
    if(card1 == card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    let numberOfCards = this.cards.length;
    if(this.pairsGuessed == numberOfCards/2) {
      return true;
    }
    return false;
  }
}