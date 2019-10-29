class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    //let random = Math.floor(math.random * this.cards.length)
    /*this.cards.forEach(elm => {
      return this.pickedCards.push(elm[random])
    });*/
    /*
        for (let i = 0; i = this.cards.length; i++) {
          let random = Math.floor((Math.random() * this.cards.length));
          this.pickedCards.push(this.cards[i])
        }
        */

    this.cards = this.cards.sort(function () {
      return Math.random() - 0.5
    });

    //return
    //let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    //let saxonDie = this.saxonArmy[randomSaxon];
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 == card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }
  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true
    }
    return false
  }
}