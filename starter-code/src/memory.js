class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = SVGPathSegCurvetoQuadraticAbs[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2){
      this.pairsGuessed += 1 
    return true}  
  }
  isFinished() {
    if (this.pairsClicked == 0) 
    return false;
 if (this.pairsGuessed < 12)
   return false;
   if (this.pairsGuessed >= 12)
   return true;
  }
}