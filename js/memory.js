class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  //2. we need a method to shuffle cards,
  shuffleCards() {
    this.cards.sort(() => Math.random()- 0.5) //devolverá un número aleatorio entre -0.5 i 0.5
  }

    //3.we need a method to compare cards, and

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }   
  }

    //4.we need a method to check if the game is finished.

  isFinished() {
    if (this.cards.length/2 == this.pairsGuessed) {
      return true //no pasa jasmine
    } else {
      return false
    }
  }
}