class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  /** Get random integer
   *
   * Range: [0-max[ */
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  shuffleCards() {
    // Fisher–Yates shuffle (modern method)
    if(!this.cards) return undefined;

    const shuffledArray = [...this.cards]

    // Iterate from last card to second card
    // variable i represents the number of the card, from 1 to Length
    for (let i = shuffledArray.length; i > 1; i--) {
      const randomCardIndex = this.getRandomInt(i);
      // Swap cards
      [shuffledArray[randomCardIndex], shuffledArray[i-1]] = [
        shuffledArray[i-1],
        shuffledArray[randomCardIndex],
      ];
    }

    this.cards = shuffledArray;
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }

    return false;
  }

  checkIfFinished() {
    if (this.cards.length === 0) return false;

    return this.cards.length / 2 === this.pairsGuessed;
  }
}
