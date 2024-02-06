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
    //fisher yates algo
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1.localeCompare(card2) === 0) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }

    /*When a user picks 2 cards, we will need to check if they are the same. Let's create logic for the method checkIfPair(), 
which will receive two parameters, the names of both cards selected by the user (example: 'ironman' and 'batman'). 
The method will add 1 to our pairsClicked property, and if the cards are the same also add 1 to pairsGuessed. 
It should return true or false depending on the result of comparing both cards.

So, to summarize, we will have to update pairsClicked on every two open cards by a user - it doesn't matter if the cards are the same. If two cards that we are comparing are the same, then pairsGuessed gets updated with +1.*/
  }

  checkIfFinished() {
    // ... write your code here
  }
}
