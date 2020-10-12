class MemoryGame {
  
  constructor(cards){ 
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    //First approach. Doesn't pass the test but it actually works!!!
    // let copyCards = [];
    // let shuffledCards = [];
    // let randInd = 0;

    // if (arguments.length === 0) {
    //   return undefined;
    // } else {
    //   copyCards = JSON.parse(JSON.stringify(this.cards));
    //   while(copyCards.length !== 0) {
    //     randInd = Math.floor(Math.random() * (copyCards.length));
    //     shuffledCards.push(copyCards[randInd]);
    //     copyCards.splice(randInd, 1);
    //   }
    //   return shuffledCards;
    // } 

    let currentIndex = this.cards.length;
    while (currentIndex !== 0) {
    
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      let tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    if(card1 === card2) {
      this.pairsGuessed++;  
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsClicked === 0) {
      return false;
    }
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}