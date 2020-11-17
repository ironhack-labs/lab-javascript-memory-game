class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {


    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.randomCards = [];

    // add the rest of the class properties here
  }


  shuffleCards(cards) {

    let currentIndex = this.cards.length, temporaryValues, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValues = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValues;
    }
    return randomCards;
  }

  checkIfPair(card1, card2) {

    this.pairsClicked = this.pairsClicked + 1;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true
    }
    else {

      return false

    }
  }

  isFinished() {
    if (this.pairsGuessed == (this.cards.length / 2)) {

      return true
    }
    else { return false }
  }
}

