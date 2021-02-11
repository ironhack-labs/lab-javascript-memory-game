class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards(arr) {
    let newArr = [];
    if (!arr) {
      return undefined;
    }
    for (let i = 0; i < arr.length - 2; i++) {
      let randomIndex = Math.floor(Math.random()*arr.length);
      while (randomIndex < i) {
      randomIndex = Math.floor(Math.random()*arr.length);
      if (randomIndex >= i) {
        break;
      }
      }
      let valueAtI = arr[i];
      let valueAtRandomIndex = arr[randomIndex];
      arr[i] = valueAtRandomIndex;
      arr[randomIndex] = valueAtI;
    }
    return newArr;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    } 
    return false;
  }
}

