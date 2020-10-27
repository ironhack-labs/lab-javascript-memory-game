class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    //array where to store cards user has clicked to compare
    this.pickedCards = [];
    this.pairsClicked = [].length;  //will be adding every time a user choose and guess a pair. 
    this.pairsGuessed = [].length;  //will be adding every time a user choose and guess a pair. 
  }


  shuffleCards() {

    if (this.cards.length === 0) {
      return undefined
    } else {

      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true

    } else {
      return false
    }
  }

  isFinished() {

    if (this.pairsClicked === 0) {
      return false
    } else if (this.pairsGuessed < (this.cards.length / 2)) {
      return false
    } else if (this.pairsGuessed === (this.cards.length / 2)) {
      alert("You won!!!")
      return true
    }
  }

}