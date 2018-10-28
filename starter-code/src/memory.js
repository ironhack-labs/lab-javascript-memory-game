class MemoryGame {

  constructor(cards){
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

 shuffleCards() {
    var m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    };
  };

  checkIfPair(cardA, cardB){
    this.pairsClicked ++;
    if (cardA === cardB){
      this.pairsGuessed ++;
      return true;
    }
    return false;
  }

  isFinished(){
    if (this.pairsGuessed < this.cards.length/2){
      return false
    }
    else {
      setTimeout(function(){
        alert("You win!");
        location.reload();
        }, 800);
        return true;
    }
  }

};