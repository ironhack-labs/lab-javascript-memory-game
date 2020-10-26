class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }
  shuffleCards() {
    //Fisher-Yates algorithm
    let currentIndex = this.cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex){//while there remain  elements to shuffle
      randomIndex = Math.floor(Math.random()* currentIndex); //pick a remain element
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];//swap it  with the current element
      this.cards[currentIndex] = this.cards [randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;//add one 
    if (card1 === card2) {
      this.pairsGuessed++;//and if they are the same add one
      return true;
    }else{
      return false;
    }
  }
  isFinished() {
    return (this.pairsGuessed === this.cards.length /2);//"pairguessed reached the number of pairs the game has"
  }
}
