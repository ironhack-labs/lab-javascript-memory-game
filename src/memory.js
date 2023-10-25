class MemoryGame {
  constructor(cards) {
    (this.cards = cards),
      // add the rest of the class properties here
      (this.pickedCards = []),
      (this.pairsClicked = 0),
      (this.pairsGuessed = 0);
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    const shuffledCards = [];
    for (let i = this.cards.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * this.cards.length);
      shuffledCards.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    let isFinished = false;
    if (!this.pairsClicked) {
      isFinished=false;}
    else if (this.pairsGuessed !== this.cards.length / 2) {
      isFinished=false;}
      else if (this.pairsGuessed === this.cards.length / 2) {
        isFinished=true;}
    return isFinished
  }
}
