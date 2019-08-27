class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    var i, j, temp;

    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  };

   


  checkIfPair(card1, card2) {

    this.pairsClicked += 1;

    if (card1 === card2) {

      this.pairsGuessed += 1;
      return true
    }

    return false
  }


  isFinished() {


    if (this.pairsGuessed == 12) {
      return true
    }

    else {
      return false

    }

  }


}


