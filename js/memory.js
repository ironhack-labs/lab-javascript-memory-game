class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let shuffledArr = [...this.cards];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      const temp = shuffledArr[i];
      shuffledArr[i] = shuffledArr[j];
      shuffledArr[j] = temp;
    }
    return shuffledArr;
  }
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsGuessed++;
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === 12;
  }
}