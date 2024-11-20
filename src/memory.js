class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairClicked = 0;
    this.pairGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      this.cards.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
    }
  }

  checkIfPair(card1, card2) {
    const card1Name = card1.getAttribute("data-card-name");
    const card2Name = card2.getAttribute("data-card-name");

    this.pairsClicked++;
    document.querySelector("#pairs-clicked").innerHTML = this.pairsClicked;
    if (card1Name === card2Name) {
      this.pairsGuessed++;
      document.querySelector("#pairs-guessed").innerHTML = this.pairsGuessed;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      console.log("Game is finished :)");
    }
  }
}