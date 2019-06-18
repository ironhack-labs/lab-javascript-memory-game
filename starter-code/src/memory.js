class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = pickedCards;   // not sure if this is supposed to go here
    this.pairsClicked = pairsClicked; // < this also
    this.pairsGuessed = pairsGuessed; // < this as well
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
    if(card1.name === card2.name){ // added .name to match on only the name values
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