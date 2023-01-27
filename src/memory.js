console.log("hello");

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    // for i from n−1 downto 1 do
    // j ← random integer such that 0 ≤ j ≤ i
    // exchange a[j] and a[i]
    if (!this.cards) {
      return undefined;
    }

    let shuffleCards = [];

    while (this.cards.length > 0) {
      let j;
      j = Math.floor(Math.random() * this.cards.length);
      const randomCard = this.cards.splice(j, 1);
      shuffleCards.push(randomCard);
    }
    this.cards.push(...shuffleCards);
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 !== card2) {
      this.pairsClicked += 1;
      return false;
    }
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed * 2 < this.cards.length) {
      return false;
    }

    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    }
  }
}

// export default MemoryGame;
