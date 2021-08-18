class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if(!this.cards) return undefined;
    let currentIndex = this.cards.length;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [this.cards[currentIndex], this.cards[randomIndex]] = [ this.cards[randomIndex],this.cards[currentIndex]];
      
     // console.log(this.cards);
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++

    if(card1 === card2) this.pairsGuessed++
    
    return card1===card2
  }

    // ... write your code here
  

  checkIfFinished() {
    // ... write your code here
    return (this.cards.length/2) === this.pairsGuessed
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
