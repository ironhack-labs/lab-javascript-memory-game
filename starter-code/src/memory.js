class MemoryGame {
  constructor(card) {
    this.pickedCards = [];
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
  }

  //////////////////// AQUÍ PASÉ LA TARDE
  // shuffleCards() {
  //   let array = [];
  //   let x = 0;

  //   let y = 0;
  //   let num = 0;
  //   let check = true;
  //   num = parseInt(Math.random() * this.cards.length);
  //   array.push(num);

  //   while (y < this.cards.length && array.length != this.cards.length) {
  //     x = 0;
  //     check = true;
  //     num = parseInt(Math.random() * this.cards.length);
  //     while (x < array.length) {
  //       if (array[x] === num) {
  //         check = false;
  //       }
  //       x++;
  //     }
  //     if (check == true) {
  //       array.push(num);
  //       check = false;
  //     }
  //     y++;
  //   }
  //   console.log(array);
  // }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    if (card1 !== card2) {
      return false;
    }
  }
  isFinished() {}
}
