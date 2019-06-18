class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  };
  shuffleCards(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      }
    return array;
  };
  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  };
  isFinished() {
    if (this.pairsGuessed >= 12) {
      return true;
    } else {
      return false;
    }
  };
};