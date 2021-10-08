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
    let current; // current index of Array it's the last item --> if index = 23
    let random;  // between the cards before the current index--> random from 0 to 22

    // While there remain elements to shuffle
    // at first there are 24 cards in an array
    while (remainingCards) {
      // Pick a random element from the remaining cards 
      // decrease one by one the iteration --> cardsToShuffle--
      random = Math.floor(Math.random() * remainingCards);
      remainingCards--;

      // And swap it with the current element
      // starts at the end of the array
      current = this.cards[remainingCards]; // set the current with the last item of remaining cards to iterate
      
      this.cards[remainingCards] = this.cards[random]; // set the random to the last card in the array(current)
      this.cards[random] = current; // set the last card(current) ---> to the random position
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // add +1 every time two cards are clicked
    this.pairsClicked ++;
    // add +1 every time two cards are the same
    // if (card1.name === card2.name) {
    //   this.pairsGuessed ++;
    //   return true;
    // } else {
    //   return false;
    // }
    return card1 === card2 ? ( // compare names
      // pairGuessed is one match --> click/choose two cards
      this.pairsGuessed ++,
      true
    ) : false;
    
    // return the result of compare
    
  }

  checkIfFinished() {
    // pairGuessed is one match --> click/choose two cards
    // this means that pairGuessed --> 12, this means clicked on 24 cards
    // should return true if all pairs are guessed --> 24 cards, so 12 pairs
    // this.cards.length / 2 --> 24/2 --> 12
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
