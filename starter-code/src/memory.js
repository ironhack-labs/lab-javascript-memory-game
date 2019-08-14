// export
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = Number(0);
    this.pairsGuessed = Number(0);
  }

  shuffleCards() {
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;

    // while there are elements to shuffle
    while (currentIndex !== 0) {
      //find a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.cards.length / 2 == this.pairsGuessed) {
      return true;
    }
    return false;
  }
}
