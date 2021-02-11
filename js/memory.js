class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {

    /* shuffleCards(cardsArray) {
      cardsArray = this.cards;
      for(let i = cardsArray.length - 1; i > 0; i--) {
        let randomInd = Math.floor(Math.random() * (i+1));
        let temp = cardsArray[i];
        cardsArray[i] = cardsArray[randomInd];
        cardsArray[randomInd] = temp;
      }
      console.log(cardsArray);} */
  }

  checkIfPair(card1, card2) {
  this.pairsClicked +=1;
  if (card1 === card2){
    this.pairsGuessed +=1;
    return true; 
  }
  else {
  return false;
  }
}
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
  }
  else{
    return false;
  }
}
}