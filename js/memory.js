class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    console.log("Original cards: ", this.cards);
    let shuffledCards = [];
    let randomIndex = 0;
    while (this.cards.length > 0) {
      randomIndex = Math.floor(Math.random()*this.cards.length);
      shuffledCards.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
    }
    console.log("Shuffled cards: ", shuffledCards);
    this.cards = shuffledCards;
    console.log("This.cards at end of shuffle: ", this.cards);
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    console.log("HERE! Logging cards length in checkIfFinished, and afterwards LENGTH: ", this.cards, this.cards.length);
    console.log("Logging in check if; pairs guessed: ", this.pairsGuessed);
    let answer = this.pairsGuessed === (this.cards.length / 2);
    console.log("Answer to condition: ", answer);
    if (answer) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

const myCards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' }
];
const myMemoryGame = new MemoryGame(myCards);
myMemoryGame.shuffleCards(myCards);
console.log("lenbth of cards / 2: ", myMemoryGame.cards.length / 2);
myMemoryGame.pairsGuessed = 0;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 1;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 2;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 3;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 4;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 5;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 7;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
myMemoryGame.pairsGuessed = 8;
console.log("hasFinished: ", myMemoryGame.checkIfFinished());
