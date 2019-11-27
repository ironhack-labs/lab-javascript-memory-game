class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };

  shuffleCards(cards) {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      };
    return cards
   };

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed.innerHTML++;
      this.pairsClicked.innerHTML++;
      console.log("Test successful");
      return true;
    } else {
      this.pairsClicked.innerHTML++;
      console.log("Test unsuccessful");
      return false;
    };
  };

  isFinished() {
    if (this.pairsGuessed === (this.cards.length/2)) {
      window.alert("You've won!");
      return true
    } else {
      return false;
    };
  };
}