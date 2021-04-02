// console.log("I'm running")

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.score = 0;
  }

  // I've found this on stackoverflow // for now
  shuffleCards(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;

      while (currentIndex !==0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }
      return cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++
    if (card1===card2) {
      this.pairsGuessed ++
      return true
    }
    return false
  }

  isFinished() {
    if (this.pairsGuessed*2 ===this.cards.length) return true
    else return false
  }
}

// console.log(MemoryGame);
// const game = new MemoryGame (['hey', 'yo', 'hey']);
// game.cards = 4
// game.pairsClicked = 2
// game.pairsGuessed = 2
// console.log(game.pairsGuessed);
// console.log(game.isFinished())