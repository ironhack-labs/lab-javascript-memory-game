class MemoryGame {

  constructor(cards) {

    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {

    let cardIndex = this.cards.length - 1;

    console.log(this.cards);

    while (cardIndex >= 0) {

      let randomNumber = Math.round((Math.random() * (cardIndex + 1)));

      let pivot = this.cards[cardIndex];

      this.cards[cardIndex] = this.cards[randomNumber];
      this.cards[randomNumber] = pivot;

      cardIndex--;

    }

    console.log(this.cards);

  }


  checkIfPair(card1, card2) {

    this.pairsClicked++;

    if (card1 == card2) {
      this.pairsGuessed++
      return true;
    }

    else {
      return false;
    }

  }

  isFinished() {


    if (this.pairsGuessed == ((this.cards.length) / 2)) { return true } else { return false }

  }
}


