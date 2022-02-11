class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // the length of this arr is 2 and contains the cards we are comparing
    this.pairsClicked = 0; // this number updates every 2 clicks
    this.pairsGuessed = 0; // the goal is to get 12 pairs guessed
    this.shuffleCards(cards);
  }

  // arr is a placeholder for array of cards we passed as an argument when we called the method in the constructor
  shuffleCards(arr) {
    let arrLength = arr.length;

    while ( arrLength > 0 ){
      // get random number from 0 to the length of the array - 1
      let index = Math.floor(Math.random() * arrLength);
  
      arrLength --;
  
      // create a temporary variable that will store the last element in the arr
      let tempVar = arr[arrLength];
  
  
      // fill in the last el of the arr with some random element 
      arr[arrLength] = arr[index];
  
      // fill in the empty. space where random element was with temp variable
      arr[index] = tempVar;
    }
  
    return arr;
  }

  checkIfPair(card1, card2) {

    this.pairsClicked ++;

    if (card1 === card2){
      this.pairsGuessed ++;

      this.checkIfFinished(); 

      return true;
    } 

    return false;
    
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length /2){
      document.getElementById("memory-board").innerHTML = ""; 
      let h1 = document.createElement("h1"); 
      h1.innerHTML = "Congradulations, you won!"
      document.getElementById("memory-board").appendChild(h1)

      return true;
    } 
    return false; 
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
