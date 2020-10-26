class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards= [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
}

//how to randomize shuffle : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  
 shuffleCards() {
    let currentIndex = this.cards.length, 
    let temporaryValue =0; 
    let randomIndex= 0;
    while (0 !== currentIndex) {

      // choisit element 
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // swap l'element 
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards
  }
 

 checkIfPair(card1, card2) {
   this.pairsClicked++;
   if 
  (card1 === card2){
    this.pairsGuessed++; 
    return true; 
  }else{
    this.pairsGuessed; 
    return false;
  }
 }

 //pairsGuessed has reached the numbers of pairs the game has.
  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)){
      return true;
     } else {
      return false;
    } 
  } 
   


