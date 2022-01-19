class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(array) {
    let currentIndex = array.length;  
    let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = 
    [array[randomIndex], array[currentIndex]];
  }

  return array;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if(card1 === card2){
      this.pairsGuessed++
      return true;
    }else {
      return false;
    }
    // ... write your code here
  }

  checkIfFinished() {
    if(this.pairsGuessed === 12){
      return true;
    }
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
