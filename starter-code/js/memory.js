class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    const { cards } = this;
    let m = cards.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [cards[m], cards[i]] = [cards[i], cards[m]];
    }
  }

  checkIfPair(card1, card2) {
        this.pairsClicked++
    if(card1 == card2){
        this.pairsGuessed++
        return true
    }else{
        return false
    }
  }
  isFinished() {
    if(this.pairsGuessed == 0){
      return false;
    }else if(this.cards.length == this.pairsGuessed*2){
      return true;
    }else{
      return false;
    }
  }
}

