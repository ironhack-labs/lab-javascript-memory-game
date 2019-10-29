class MemoryGame {
  constructor(cards, pickedCards, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5); //lo he sacado de internet pero me gustaría que me lo explicaras, sobretodo la parte del "-0.5"
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    let restOfcards = this.cards.length;
    if (this.pairsGuessed === restOfcards / 2) {
      return true;
    }
    return false;
  }
}
//function randomSelector(array) {
// let random = array[Math.floor(Math.random() * array.length)];
//return random;
//}£
