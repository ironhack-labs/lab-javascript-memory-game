class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(arr) {
    if (!arr) return undefined;
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (currentIndex!==0) {
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex -=1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    } return arr;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1===card2) {
      this.pairsGuessed ++;
      return true;
    } return false;
  }
  isFinished() {
    if (this.pairsGuessed===this.cards.length/2) return true;
    return false;
  }
}
// let cards = [1,2,3,4,5];
// const mem = new MemoryGame(cards)
// console.log(mem.cards)
// console.log(mem.shuffleCards(cards))
// console.log(mem.shuffleCards(cards))
// console.log(mem.shuffleCards())
// console.log(mem.cards);
// mem.pairsGuessed = 12;
// console.log(mem.isFinished())