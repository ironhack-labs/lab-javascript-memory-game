class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(array) {
    if (!array) {
      return undefined;
    } else {
      let shuffledArray = [...array]
    }
    for (let i = shuffledArray.length - 1; i > 0; i--){
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let tempVariable = shuffledArray[i];
      shuffledArray[i] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = tempVariable;
    }
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
  isFinished() {
    if (this.pairsGuessed === 0) {
      return false
    } else if (this.pairsGuessed < [...this.cards].length / 2) {
      return false
    } else {
      this.pairsGuessed === [...this.cards].length / 2;
      return true
    }
  }
}