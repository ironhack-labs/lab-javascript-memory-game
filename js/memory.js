class MemoryGame {
  constructor(cards) {
    this.cards = cards; // array of cards
    // add the rest of the class properties here
    this.pickedCards = []; // "array of all cards" clicked by the user to compare
    this.pairsClicked = 0; // counts every time clicked "a pair of cards", no matter if they are the same or not
    this.pairsGuessed = 0; // "number" of times two cards are the same

  }

  // Fisher-Yates - unbiased shuffle algorithm
  shuffleCards() {
    // return undefined if there is no argument passed
    if(!this.cards) return undefined;
    // remaining cards to do the shuffle, between the last card and the random position
    let remainingCards = this.cards.length; 
    let current; 
    let random; 

    // While there remain elements to shuffle
    while (remainingCards) {
      // Pick a random element from the remaining cards 
      // decrease one by one the iteration --> cardsToShuffle--
      random = Math.floor(Math.random() * remainingCards);
      remainingCards--;

      // And swap it with the current element
      // starts at the end of the array
      current = this.cards[remainingCards]; // set the current
      this.cards[remainingCards] = this.cards[random]; // set the random to the last card in the array(current)
      this.cards[random] = current; // set the last card(current) ---> to the random position
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // add +1 every time two cards are clicked
    this.pairsClicked ++;
    // add +1 every time two cards are the same
    // if (card1 === card2) {
    //   this.pairsGuessed ++;
    //   return true;
    // } else {
    //   return false;
    // }
    return card1 === card2 ? (
      this.pairsGuessed ++,
      true
    ) : false;
    
    // return the result of compare
    
  }

  checkIfFinished() {
    // should return true if all pairs are guessed --> 24 cards, so 12 pairs
    return this.pairsGuessed === this.cards.length/2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
