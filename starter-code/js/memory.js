class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let array = JSON.parse(JSON.stringify(this.cards)); 
    //if (this.cards===undefined){
      //return 'undefined'; }
    // let currentIndex = this.cards.length, temporaryValue, randomIndex;
  
    // // While there remain elements to shuffle...
    // while (0 !== currentIndex) {
  
    //   // Pick a remaining element...
    // randomIndex = Math.floor(Math.random() * currentIndex);
    // currentIndex -= 1;
  
    //   // And swap it with the current element.
    // temporaryValue = this.cards[currentIndex];
    // this.cards[currentIndex] = this.cards[randomIndex];
    // this.cards[randomIndex] = temporaryValue;
    // }

    var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  
    this.cards = array;
    
  }
}
  
  

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2){
      this.pairsGuessed += 1;
      
      return true;
    }
    return false; 
  }
  isFinished() {
    if(this.pairsGuessed === 12){
      return true;
      } return false;
  }
  
}