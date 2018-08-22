class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  checkIfPair() {
    console.log("running function");
    this.pairsClicked++;
    console.log(this.pairsClicked);
    console.log(this.pickedCards[0]);
    console.log(this.pickedCards[1]);

    if (this.pickedCards[0].attr("name") === this.pickedCards[1].attr("name")) {
      this.pairsGuessed += 1;
      console.log("match!");
      console.log(this.pairsGuessed);
      this.pickedCards = [];
      console.log("Array Cleared!");
      return true;
    } else if (
      this.pickedCards[0].attr("name") !== this.pickedCards[1].attr("name")
    ) {
      console.log("too bad!");;
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === 12) {
      alert('Congratulations You Know Stuff!')
      window.location.reload();
      return true;
    } else {
      return false;
    }
  }
}

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// }

// MemoryGame.prototype.isFinished = function () {
// };
