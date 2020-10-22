class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // this.pickedCards = pickedCards;
    // this.pairsClicked = pairsClicked;
    // this.pairsGuessed = pairsGuessed;
  }
  shuffleCards(cardsObj) {
    if (!cardsObj) {
      return undefined;
    }
    for (let i = 0; i < cardsObj.length; i++) {
      let rand = Math.floor(Math.random() * cardsObj.length);
      cardsObj.push(cardsObj[rand]);
      cardsObj.splice(rand, 1);
    }
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}

let cardsArrTemp = cardsArr;
for (let i = 0; i < cardsArrTemp.length; i++) {
  let rand = Math.floor(Math.random() * cardsArrTemp.length);
  cardsArrTemp.push(cardsArr[rand]);
  cardsArr.splice(rand, 1);
}
