class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(yourArray) {
    function shuffle(array) {
      let counter = array.length;
  
      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);
  
          // Decrease counter by 1
          counter--;
  
          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }
  
      return array;
  }
    this.cards = shuffle(this.cards);
  
  
  }
  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished(){
    
    
    if(this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
    
  }
}


