class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(array) {
    if(!array) {return undefined}
  
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    console.log(array)
   return array
  
  }
  checkIfPair(card1, card2) {
     this.pairsClicked++
     if(card1 == card2) {
       this.pairsGuessed++
       return true
     }else {
       return false
     }
  }
  isFinished() {

    return this.pairsGuessed == 8 || this.pairsGuessed == this.pairsClicked;
  }
}