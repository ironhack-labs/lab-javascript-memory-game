class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    let tmp = 0;
    if (!this.cards) {
      return undefined;
    } else {
      for (let i = 0; i < this.cards.length; i++) {
        for (let j = Math.floor(Math.random() * i); j < i; j++) {
          tmp = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = tmp;
        }
      }
      return this.cards;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// const cards = [
//   { name: "aquaman", img: "aquaman.jpg" },
//   { name: "batman", img: "batman.jpg" },
//   { name: "captain america", img: "captain-america.jpg" },
//   { name: "fantastic four", img: "fantastic-four.jpg" },
//   { name: "flash", img: "flash.jpg" },
//   { name: "green arrow", img: "green-arrow.jpg" },
//   { name: "green lantern", img: "green-lantern.jpg" },
//   { name: "ironman", img: "ironman.jpg" },
//   { name: "spiderman", img: "spiderman.jpg" },
//   { name: "superman", img: "superman.jpg" },
//   { name: "the avengers", img: "the-avengers.jpg" },
//   { name: "thor", img: "thor.jpg" },
//   { name: "aquaman", img: "aquaman.jpg" },
//   { name: "batman", img: "batman.jpg" },
//   { name: "captain america", img: "captain-america.jpg" },
//   { name: "fantastic four", img: "fantastic-four.jpg" },
//   { name: "flash", img: "flash.jpg" },
//   { name: "green arrow", img: "green-arrow.jpg" },
//   { name: "green lantern", img: "green-lantern.jpg" },
//   { name: "ironman", img: "ironman.jpg" },
//   { name: "spiderman", img: "spiderman.jpg" },
//   { name: "superman", img: "superman.jpg" },
//   { name: "the avengers", img: "the-avengers.jpg" },
//   { name: "thor", img: "thor.jpg" },
// ];

// const game = new MemoryGame(cards);

// console.log(game.shuffleCards());
// console.log(game.checkIfPair("batman", "batman"));
// console.log(this.pairsClicked);
// console.log(this.pairsGuessed);
