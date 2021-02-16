class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cardsArray) {
    cardsArray = this.cards;
    for(let i = cardsArray.length - 1; i > 0; i--) {
      let randomInd = Math.floor(Math.random() * (i+1));
      let temp = cardsArray[i];
      cardsArray[i] = cardsArray[randomInd];
      cardsArray[randomInd] = temp;
    }
    return cardsArray}
  
  checkIfPair(name1, name2) {
   if (name1 === name2)
    {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true;
    }
    else  {
      this.pairsClicked += 1
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed===this.cards.length/2) {
      return true;
    }
    else return false;
  }
}
