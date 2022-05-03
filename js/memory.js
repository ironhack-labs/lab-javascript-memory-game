class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
   
  }

  shuffleCards() {

  let array = this.cards

  if(array !== undefined){

  function shuffle(array) {
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }

  return shuffle(array)}

  else {
    return array;
  }

  }

  checkIfPair(card1, card2) {
   
if (card1 === card2){
  this.pairsClicked +=1;
  this.pairsGuessed +=1;
  return true
} else {
  this.pairsClicked +=1;
  return false
}

  }

  checkIfFinished() {

  if (this.pairsGuessed === (this.cards.length)/2 ) {

    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    alert('Hey! That was amazing. Press refresh to do it again');
      return true} 

      else if(this.pairsClicked < (this.cards.length)/2 || this.pairsClicked ===0 ){
        return false
      } 


  }

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
