class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.checkResult = true;
  }

  shuffleCards(array) {
    if (!arguments.length) return
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    }

    return array;
  }
  
  

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      this.checkResult = true;
      return true;
    }
    this.checkResult = false;
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) return true;
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
