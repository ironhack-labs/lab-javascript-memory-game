class MemoryGame {
  constructor(cards) {
    // Array
    this.cards = cards;
    this.pickedCards = []; // 2
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    if (!arr) return undefined;

    let newArr = [];

    while (arr.length) {
      let random = Math.floor(Math.random() * arr.length);
      newArr.push(arr[random]);
      arr.splice(random, 1);
    }
    return newArr;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed===0) return false; 
    if (this.pairsGuessed<12) return false; 
    if (this.pairsGuessed === 12) return true; 
  }
}
