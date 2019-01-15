class MemoryGame {
  constructor(arr) {
    this.cards = arr;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(arr) {
    for (i=arr.length; i>0; i--) {
      var random = Math.floor(Math.random() * i);
      var temp = arr[i];
      arr[i] = arr[random];
      arr[random] = temp;
    };  
    return arr
  };
  checkIfPair() {
    if (this.pickedCards[0] === this.pickedCards[1]) {
      this.pickedCards = [];
      return true
    };
    this.pickedCards = [];
    return false
  };
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2) {
      return true
    };
    return false
  };
};