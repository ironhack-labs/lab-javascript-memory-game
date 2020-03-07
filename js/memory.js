class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    function shuffle(array) {
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
    
      return array;
    } 
    shuffle(this.cards);   
  }

  checkIfPair(card1, card2) {
    this.cards.name = card1;
    this.cards.name = card2;

    this.pairsClicked += 1;

    if(card1 === card2){
      this.pairsGuessed +=1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    } else{
      return false;
    }
  }
}