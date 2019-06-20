class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.currentPair = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
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

  checkIfPair() {
    let firstCard = this.currentPair[0].data('card-name');
    let secondCard = this.currentPair[1].data('card-name');
    this.pairsClicked++;

    if(firstCard === secondCard){ 
      this.pairsGuessed++;
      return true;
    } 

    return false;
  };

  isFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  };
};

