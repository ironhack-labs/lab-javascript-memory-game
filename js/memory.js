class MemoryGame {

  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards(cards) {

    if (!cards) { return undefined }

    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    
    return cards;
  }

  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false
    }

  }

  isFinished() {
    if ( this.pairsGuessed = cards.length / 2 ) {
      return true
    } else {
      return false
    }
  }

}
