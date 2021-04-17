class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(array) {
    let currentIndex = this.cards.length, tempValue, randomIndex;
    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
    return array;
  }

  // shuffle elements in array: https://www.codegrepper.com/code-examples/javascript/fisher-yates+shuffle+with+foreach+javascript

   checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    const pair = card1 === card2;
    if (pair) {
      this.pairsGuessed += 1;
    } 
    return pair;
  }



  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  

  }
}