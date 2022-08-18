class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {

    /*for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.pickedCards[i];
      this.pickedCards[i] = this.pickedCards[j];
      this.pickedCards[j] = temp;

    }
    return this.cards;*/
    if (this.cards === undefined) return undefined;
    let shuffle =
      this.cards.sort(() => Math.random() - 0.5);
    return shuffle;




  }

  checkIfPair(card1, card2) {
    this.pairsClicked = 1;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;

    } else {

      return false;

    }
    return this.pairsClicked;

  }

  checkIfFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    } else {
      return false;
    }


  }
}
