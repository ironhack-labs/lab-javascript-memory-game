class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // let currentIndex = this.cards.length,
    //   temporaryValue,
    //   randomIndex;

    // while (0 !== currentIndex) {
    //   // Pick a remaining element...
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;

    //   // And swap it with the current element.
    //   temporaryValue = array[currentIndex];
    //   array[currentIndex] = array[randomIndex];
    //   array[randomIndex] = temporaryValue;
    // }
    // return;

    let m = this.cards.length, i;

      while(m) {
        i = Math.floor(Math.random() * m--);

       [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]]  
      } 

  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    } else {
      return false
    } 

  }
  isFinished() {
      return this.pairsGuessed === (this.cards.length/2)
      

  }
}