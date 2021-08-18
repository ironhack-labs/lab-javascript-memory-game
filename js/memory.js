class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;

    let currentIndex = this.cards.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex]
      ];
    }

    return this.cards;
  }

  checkIfPair(cardName1, cardName2) {

    this.pairsClicked++;

    if(cardName1 === cardName2) this.pairsGuessed++

    return cardName1 === cardName2;
  }

  checkIfFinished() {
    
    return (this.cards.length / 2)  ===  this.pairsGuessed;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
