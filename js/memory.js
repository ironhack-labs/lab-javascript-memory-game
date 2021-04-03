class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Method 1
  // Created using the following logic: [https://www.youtube.com/watch?v=79AWYPyPEdU]
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      let randomCard = Math.floor(Math.random() * this.cards.length);
      let placeholder = "";
      let currentCard = this.cards[i];
      let newCard = this.cards[randomCard];
      // Swap Names
      placeholder = currentCard;
      this.cards[i] = newCard;
      this.cards[randomCard] = placeholder;
    }
  } 

  // Method 2
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } return false;
  }

  // Method 3
  isFinished() {
    if (this.pairsGuessed === 0) return false;
    if (this.pairsGuessed < this.cards.length / 2) return false;
    if (this.pairsGuessed === this.cards.length / 2) return true;
  }
}