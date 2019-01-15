class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(){
    var currentCard = this.cards.length;
    var randomCard, tempCard;
    while (0 !== currentCard){
      randomCard = Math.floor(Math.random()*currentCard);
      currentCard --;
      tempCard = this.cards[currentCard];
      this.cards[currentCard] = this.cards[randomCard];
      this.cards[randomCard] = tempCard;
    }
  }
  checkIfPair(){
    this.pairsClicked ++;
    if (this.pickedCards[0] === this.pickedCards[1]) {
      this.pairsGuessed ++;
      return true;
    } else return false;
  }
  isFinished(){
    return (this.pairsGuessed === this.cards.length/2)
  }
};