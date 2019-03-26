class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    let counter = this.cards.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = this.cards[counter];
      this.cards[counter] = this.cards[index];
      this.cards[index] = temp;
    }
  }

  //card1 and card2 the names of both cards selected by the user (example: 'ironman' and 'batman')
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
    }
    return card1 === card2;
  }
  
  isFinished() {
    return this.pairsGuessed === (this.cards.length / 2)
  }

}
