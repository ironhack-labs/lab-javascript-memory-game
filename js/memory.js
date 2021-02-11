class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(cardsArray) {
    cardsArray = this.cards;
    for(let i = cardsArray.length - 1; i > 0; i--) {
      let randomInd = Math.floor(Math.random() * (i+1));
      let temp = cardsArray[i];
      cardsArray[i] = cardsArray[randomInd];
      cardsArray[randomInd] = temp;
    }
    console.log(cardsArray);}
    // console.log("tata" + cardsArray);
    // for (let i = cardsArray; i < 0; i++) {
    //   let x = Math.random() * (i + 1);
    //   let temp = cardsArray[i];
    //   cardsArray[i] = cardsArray[x];
    //   cardsArray[x] = temp;
    //   console.log("hello" + temp);
    // }
    // return cardsArray;
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
