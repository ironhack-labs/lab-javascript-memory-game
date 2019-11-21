// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
// });
  
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // function shuffleCards1 (someArr) {
  //   // console.log("I'm shuffling");
  //   let theLength = someArr.length;
  
  //   while(theLength > 0){
  //     let index = Math.floor(Math.random() * theLength);
  //   // console.log(index)
  
  //     theLength --;
  //     // tempVar in first iteration gets last element in the array
  //     let tempVar = someArr[theLength];
  //   // the last position in the array gets filled with random nuber
  //     someArr[theLength] = someArr[index];
  //     // random number's position gets filled with the value of tempVar
  //     someArr[index] = tempVar;
  
  //     // this process repeats as many times as we have elements in  the array
  //   }
  //   return someArr
  // };

  shuffleCards() {
    for (let i= this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  checkIfPair(card1, card2) {
    // use an if statement here
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true; 
    } 
    return false;
  }
  
  
  isFinished() {
    return this.cards.length / 2 == this.pairsGuessed 
  }
}