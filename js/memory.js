class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var i, n, x;
    for (i = this.cards.length -1; i > 0; i--) {
        n = Math.floor(Math.random() * i);
        x = this.cards[i];
        this.cards[i] = this.cards[n];
    }
  }
  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked++;
      this.pairsGuessed++;
      return true
    }else{
      this.pairsClicked++;
      return false
    }
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true
    }else{
      return false
    }
  }
}