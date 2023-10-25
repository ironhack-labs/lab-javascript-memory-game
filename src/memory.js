class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards(); // shuffle cards for each time a game is created
  }

  shuffleCards() {
    // ... write your code here
    // I dont undestand the Iteration 2.2.1. description <> tests
    // Is this function supposed to be called without arguments and shuffle the Memorygame.cards?
    // Or shall this function receive an array of cards as argument, shuffle that array, and return it?
    /*
    if (cardsArray == undefined) {
      return undefined;
    }
    
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randomCardIndex = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[randomCardIndex]] = [cardsArray[randomCardIndex], cardsArray[i]];
    }
    */
    if (this.cards.length > 0) {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomCardIndex = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[randomCardIndex]] = [this.cards[randomCardIndex], this.cards[i]];
      }
    }

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    return (this.pairsGuessed == this.cards.length / 2)
  }
}

/* double checking my card shuffling actually works, because tests are not clear
const myArray = [1, 2, 3, 4, 5];
let myGame = new MemoryGame;
myGame.shuffleCards(myArray);
console.log(myArray)
*/