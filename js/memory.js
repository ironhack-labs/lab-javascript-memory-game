class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
  //  the index is counting down from the length
  for (var i = this.cards.length - 1; i > 0; i--) {
  //  j generates a randon number based on the index
  var j = Math.floor(Math.random() * (i + 1));
  // temp becomes the whole object from that index
  var temp = this.cards[i];
  // make the objects at i and j the same
  this.cards[i] = this.cards[j];
  // reset
  this.cards[j] = temp;
   // start the process with the next lowest i; since it counts down the ones that are already created arent touched

}
}
// It picks a random element for each original array element, 
// and excludes it from the next draw, like picking randomly from a deck of cards.
// This clever exclusion swaps the picked element with the current one, 
// then picks the next random element from the remainder, looping backwards for optimal efficiency, 
// ensuring the random pick is simplified (it can always start at 0), and thereby skipping the final element.

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){ 
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if(this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}