class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {      

      let currentIndex = this.cards.length
      let temporaryValue;
      let randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed +=1
      return true
    }else{
      return false
    }
  }
  isFinished() {
    if(this.pairsGuessed==this.cards.length/2){
      return true
    }
    return false
  }
}