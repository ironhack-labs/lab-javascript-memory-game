class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked =0;
    this.pairsGuessed =0;

    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length -1; i>0; i--){
      let randomindex = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[randomindex]] = [this.cards[randomindex], this.cards[i]]
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 === card2){
      this.pairsGuessed++
      return true;
    }
    return false;
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length /2 ? true : false;
  }
}

// // Shuffle --> Durestenfield
// function shuffleNumbers(array) {
//   // loop through the array
//   for(let counter = array.length - 1; counter > 0; counter-- ) {
//   // Get random roll / number
//   let randomIndex = Math.floor(Math.random() * array.length);
//   // Exchange the value with the random number + the last value in the array
//   [array[counter], array[randomIndex]] = [array[randomIndex], array[counter]]
//   }
//   return array;
// } 

