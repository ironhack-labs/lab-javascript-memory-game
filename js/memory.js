class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []; // cards the user clicked to be compared
    this.pairsClicked = 0; // counts card pairs the user cliked
    this.pairsGuessed = 0; // counts card pairs the user guessed
  }
  shuffleCards() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex --;
      
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards, undefined
  }
  checkIfPair(card1, card2) {

    this.pairsClicked ++;
    //document.getElementById('#pairs-clicked').innerHTML = this.pairsClicked;
    if (card1 === card2) {
      this.pairsGuessed ++;
      //document.getElementById('#pairs-guessed').innerHTML = this.pairsGuessed;
      return true
    } else {
      return false
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}