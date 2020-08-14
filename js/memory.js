class MemoryGame {

  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards(array) {

    if (!array) { return undefined }

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    return array;
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

    if ( this.pairsGuessed === 0 ) { return false; }

    if ( this.pairsGuessed === this.cards.length / 2 ) {
      return true;
    } else {
      return false;
    }  }

}
