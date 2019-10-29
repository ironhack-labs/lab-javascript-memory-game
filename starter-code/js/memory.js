class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let arr = this.cards;

    for (let i = 0; i < arr.length; i++){
      let j = Math.floor(Math.random()*arr.length);
      arr[i] = arr[j];
    };
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }

    return false;
  }

  isFinished() {
    if(this.pairsGuessed*2 === this.cards.length){
      return true;
    }
    return false;
  }
}