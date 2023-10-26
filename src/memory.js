class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    console.log(this.cards);
    if (!this.cards) {
      return undefined;
    }
    let newArr;
    for (let i = this.cards.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      newArr = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = newArr;
    }
    return newArr;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      console.log("YEY");
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    // console.log(this.pairsGuessed, this.cards.length);
    // console.log("new arr", newArr.length);
    if (this.pairsClicked === 0 && this.pairsGuessed === 0) {
      console.log(this.cards.length);
      return false;
    }
    if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}
