class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked =0;
    this.pairsGuessed =0;
  }


  shuffleCards() {
    let randomizer = 0;
    let usedRandomNumbers =[];
    let shuffledCards =[];

    do {
      randomizer = Math.floor(Math.random() * this.cards.length);
      if (usedRandomNumbers.indexOf(randomizer)==-1){
        shuffledCards.push(this.cards[randomizer]);
        usedRandomNumbers.push(randomizer);
      }
    } while (shuffledCards.length<this.cards.length);
    this.cards = shuffledCards; 
  }

  checkIfPair(card1, card2) {
    console.log(card1, card2)
    if (card1 == card2){
      this.pairsGuessed +=1; 
      return true;
    } 
    this.pairsClicked +=1; 
    return false; 
  }

  isFinished() {
    if (this.cards.length == this.pairsGuessed*2){
      return true;
    } return false; 
  }
}

// export { memoryGame };