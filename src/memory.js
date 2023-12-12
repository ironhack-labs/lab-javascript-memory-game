class MemoryGame {
  constructor(cards) {
    this.cards = cards; // array of all cards
    // add the rest of the class properties here
    this.pickedCards = []; // can only hold 2 cards
    this.pairsClicked = 0; // number of pairs clicked (found + notFound)
    this.pairsGuessed = 0; // number of pairs found 
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;
    let shuffledDeck = [];
    let randNums = [];
    let currRandNum;
    this.cards.forEach((element) => {
      currRandNum = this.getRandomInt(this.cards.length);
      while (randNums.includes(currRandNum)) {
        currRandNum = this.getRandomInt(this.cards.length);
      }
      randNums.push(currRandNum);
      shuffledDeck.push(this.cards[currRandNum]);
    });
    this.cards = [...shuffledDeck];
  }

  // random number generator helper function
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    // strings, names of cards card1/2
    let result = false;
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      result = true;
    }
    return result;
  }

  checkIfFinished() {
    // ... write your code here
    let isFinished = false;
    if (this.pairsGuessed === this.cards.length / 2) {
      isFinished = true;
    }
    return isFinished;
  }
}

// testing
// let cards = [1,2,3,4,5,6,7,8]
// let game = new MemoryGame (cards);

// game.shuffleCards();
// console.log (game.cards);