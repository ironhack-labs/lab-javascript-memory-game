class MemoryGame {
  constructor(card) {
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

    let m = cards.length, i;

      while(m) {
        i = Math.floor(Math.random() * m--);

       [cards[m], cards[i]] = [cards[i], cards[m]]  
      } 

  }


  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1.name == card2.name){
      this.pairsGuessed += 1
      this.pairsClicked = 0
      return true
    } else {
      this.pairsClicked = 0
      return false
    } 

  }
  isFinished() {
    window.onload()

  }
}
