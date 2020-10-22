class MemoryGame {
  constructor(cards) {
    this.cards = cards; //array of cards
    this.pickedCards = []; // array where the clicked cards will be stored so that they can be compared
    this.pairsClicked = 0; //  cards chosen
    this.pairsGuessed = 0; // cards guessed

  }
  /* Create logic for the method shuffleCards() to shuffle the cards - every time you create a new game, the order of the cards should change.
  - use this.cards since it represents the array of cards
  - change the order of the array with fisher yates
  */

  shuffleCards() {


    let currentIndex = this.cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards
  }

  /* are two cards the same?
  - Check if card1 === card2 return true else false
  - if true +1 pairsguessed and pairsclicked
  - if false +1 pairsclicked */

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  //check if game ended: did pairsGuessed reached number of pairs?
  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true
    } else {
      return false;
    }
  }
}
