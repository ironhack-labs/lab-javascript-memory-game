class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.shuffleCards(cards);
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    if (!arr) {
      return undefined;
    }
    let newArr = arr;
    for (let i = 0; i < newArr.length - 2; i++) {
      let randomIndex = Math.floor(Math.random()*newArr.length);
        while (randomIndex < i) {
          randomIndex = Math.floor(Math.random()*newArr.length);
          if (randomIndex >= i) {
            break;
          }
        }
      let valueAtI = newArr[i];
      let valueAtRandomIndex = newArr[randomIndex];
      newArr[i] = valueAtRandomIndex;
      newArr[randomIndex] = valueAtI;
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
      console.log('Well Done!')
      return true;
    } else {
      return false;
    }
  }
}

