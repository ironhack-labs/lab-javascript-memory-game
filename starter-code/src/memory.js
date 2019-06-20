class MemoryGame {
  constructor(card){
    this.cards = cards; // Card Bank
    this.pickedCards = []; // Array for temp storing picked card pairs

    this.pairsMatched = 0; // Counter for matched pairs
    this.pairsGuessed = 0; // Counter for misses
  }
  
  shuffleCards(array) {
    let i = 0, j = 0, temp = null
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  checkIfPair(card1, card2) {
    console.log('card1 is:', card1.attributes[1].value, '& card2 is:', card2.attributes[1].value)
    if (card1.attributes[1].value == card2.attributes[1].value) {
      this.pairsGuessed += 1;
      this.pairsMatched += 1;
      console.log(`Guessed: ${this.pairsGuessed}`);
      console.log(`Matched: ${this.pairsMatched}`);
      return true;
    } else {
      this.pairsGuessed += 1;
      console.log(`Guessed: ${this.pairsGuessed}`);
      return false;
    }
  }

  isFinished() {
    if (this.pairsMatched === 12) {
      
    }
  }
}
