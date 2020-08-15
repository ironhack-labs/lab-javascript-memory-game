class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked= 0;
    this.pairsGuessed= 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    //Fisher-Yates shuffle algorithm
    let i = this.cards.length, randomIndex, temp;

    //While there remain elements to shuffle..
    while (--i > 0) {
      //Pick a remaining element..
      randomIndex = Math.floor(Math.random() * (i+1));

      //And swap it with the current element
      temp = this.cards[randomIndex];
      this.cards[i] = this.cards[randomIndex];
      this.cards[i] = temp;
    }
    console.log(this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed+=1;
      return true;
    } else {
    return false;
    }

  }

  isFinished() {
    if (this.pairsGuessed===this.cards.length/2) {
      return true;
    } else {return false;}
}

}