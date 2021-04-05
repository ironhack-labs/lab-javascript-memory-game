class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards() {
    let numOfCards = this.cards.length, temporaryValue, randomIndex;

    while (numOfCards) {
      //use math.random to generate a random floating num between 0 and < 1, then multiply it by the number of cards and use math.floor to convert it to an integer
      randomIndex = Math.floor(Math.random() * numOfCards);
      
      numOfCards -= 1;
      //swap the values
      // Bind this.cards[numOfCards] value to temporary value  
      temporaryValue = this.cards[numOfCards];
      this.cards[numOfCards] = this.cards[randomIndex];
      //assign this.cards[randomIndex]the value of temporaryValue
      this.cards[randomIndex] = temporaryValue;
    }
  }
  
  checkIfPair(card1, card2) {
   this.pairsClicked++;
    
    if (card1 === card2) {
      //if the cards match, add 1 to pairsGuessed and return true
      this.pairsGuessed++;
      return true;
    } 
    //return false if pairs don't match
    return false;
  }
  
  isFinished() {
    return this.pairsGuessed * 2 === this.cards.length;
  }
}