class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    cards = this.cards;
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }



  checkIfPair(card1, card2) {

    for (let i = 0; i < this.cards.length; i++) {
      if (card1[i] === card2[i]) {
        this.pairsClicked += 1;
        this.pairsGuessed += 1;
        return true;

      } else {
        this.pairsClicked += 1;
        return false;

      }
    }
  }

  isFinished() {


    let numberCards = this.cards.length / 2

    if (this.pairsGuessed === numberCards) {
      return true
    } else {
      return false
    }
  }


}
