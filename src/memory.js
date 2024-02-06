class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0; 
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  /*The MemoryGame class: we created a MemoryGame class and, as we can see in its constructor, 
  it will receive an array of cards as a parameter and set this array to a this.cards property.

We also need a this.pickedCards array, where we will be storing the cards the user has clicked so we can compare them.

Finally, a this.pairsClicked and this.pairsGuessed properties where will be adding every time a user choose and guess a pair. Go ahead and add these to the constructor.*/

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}
