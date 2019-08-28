class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairGuessed = 0
  }
  shuffleCards(cards) {

    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;

     // while there are elements to shuffle
    while (currentIndex !== 0) {
      //find a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

       // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairGuessed += 1
      return true;
    }
    else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)){
      return true
    }
    return false;
  }
}