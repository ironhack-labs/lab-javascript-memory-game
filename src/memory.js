class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;  // initialize pairsClicked to 0
    this.pairsGuessed = 0;
  }
    // let revealedCount = 0;
    // let activeCard = null;
    // let awaintingEndOfmove = false ;

    shuffleArray() {

      // const shuffleArray = [...this.cards];
      this.cards.sort(() => Math.random() - 0.5); //for loop to get a random cards using index

      return shuffleArray;

    }

  shuffleCards() {
    // ... write your code here

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.card1 = card1;
    this.card2 = card2;

    this.pairsClicked++;


    if (this.card1 === this.card2) {
      this.pairsGuessed++; // nnncrement pairsguessed if the cards match
      return true; // cards match
    } else {
      return false; // cards dont match
    }
  }


  checkIfFinished() {
    // ... write your code here
    this.begginingGame = false;
    if (this.pairsGuessed === 0) {
      return false;
    }else {
      return this.pairsGuessed === this.cards.length / 2; //is equal to half the total number of cards // f its equal  means all pairs have been guessed and the function returns true
    }

  }
}
