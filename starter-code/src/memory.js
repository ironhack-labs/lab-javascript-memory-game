class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = cards;
    this.pairsClicked = Number(cards);
    this.pairsGuessed = Number(cards);
  }
   
  shuffleCards(cards) {
  var m = this.cards.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this.cards[m];
    this.cards[m]=this.cards[i];
    this.cards[i]=t;
  }
    this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked=+1;
    if (card1 === card2)
    this.pairsGuessed=+1;
    if(card1 !== card2)
    return false;
    else if (card1 === card2)
    return true;
  }

  isFinished() {
    if (this.pairsClicked === 0)
    return false;
    if (this.pairsGuessed !== (this.cards.length)/2)
    return false;
    if (this.pairsGuessed === (this.cards.length)/2)
    return true;
  
  }
}