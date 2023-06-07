class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(array) {
    if (!array || array.length == 0) return undefined;
    // ... write your code here
    // https://sebhastian.com/fisher-yates-shuffle-javascript/

    let arr = Array.from(this.cards);

    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }

    console.log("SHUFFLED: ", arr);
    return (this.cards = [...arr]);
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if (card1.name === card2.name) {
      this.pairsGuessed += 1;
      return true;
    }

    if (card1.name !== card2.name) {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
