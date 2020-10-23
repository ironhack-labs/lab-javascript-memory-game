class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards(cards) {

    if (!cards) {
      return undefined
    }
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle.
    while (0 !== currentIndex) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }

  return this.cards;
  
    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      // this.pickedCards = [];
      return true;

    } else {
      // this.pickedCards = [];
      return false;
    }
  }
  isFinished() {
    // false at the begnning
    // false some pairs still to be guessed
    // true all pairs guessed
    // if (this.pairsClicked === 0){
    //   return false;
    // } else if (this.pairsGuessed !==0){
    //   return false;
    // } else if (this.pairsGuessed === this.cards.length / 2){
    //   return true;
    // }
    return this.cards.length/2 == this.pairsGuessed ? true : false;
  }
}