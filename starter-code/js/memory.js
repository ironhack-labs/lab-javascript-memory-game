class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pairsClicked = 0;
    this.pickedCards = [];
    this.pairsGuessed = 0;


    // add the rest of the class properties here
  }
  shuffleCards() {
    let shuffle =[];
    console.log(this.cards)
    this.cards.forEach((card,i)=>{
    let tempcard = card;
    let randomIndexCard = Math.floor(Math.random()*this.cards.length);
    let tempcard2 = this.cards[randomIndexCard];
    this.cards[i]= tempcard2;
    this.cards[randomIndexCard] =tempcard;
  })
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    this.pickedCards = [];
    if (card1 == card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed == this.cards.length/2){
      return true;
    }
    return false;
  }
}
