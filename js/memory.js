class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  
   }


// --------------------------- 0 -------------------------------

shuffleCards() {

if (this.cards.length = 0){
  return undefined

} else { 
  
  let m = this.cards.length, t, i;

  while (m) {

   
  i = Math.floor(Math.random() * m--);


  t = this.cards [m];
  this.cards [m] = this.cards [i];
  this.cards [i] = t;
  }

  return this.cards;
}
  
}


  // --------------------------- 0 -------------------------------

  checkIfPair(ironman, batman){
 
  this.pairsClicked++ 
    //console.log(this.pairsClicked)
  if (ironman === batman){


    this.pairsGuessed++ 
    //  console.log(this.pairsGuessed)
    return true


  } 
    return false
  }

  

  // --------------------------- 0 -------------------------------

  isFinished() {

  if (this.cards.length === 24) {
  return false
  }

  if (this.pairsGuessed === this.cards.length/2){
  return true
}
  return false
}
}