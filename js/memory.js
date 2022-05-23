class MemoryGame {
  constructor(cards = undefined, pickedCards = [], pairsGuessed = 0, pairsClicked = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsGuessed = pairsGuessed;
    this.pairsClicked = pairsClicked;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    }
    const arrayAux = [...this.cards];
    const arrayShufle = [];
    
    while (this.cards.length > arrayShufle.length) {
      let randomPosition = Math.floor(Math.random() * arrayAux.length);
      arrayShufle.push(arrayAux[randomPosition]);
      arrayAux.splice(randomPosition,1);
    }

    this.cards = arrayShufle;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return Math.floor(this.cards.length / 2) === this.pairsGuessed;
  }
}

if (typeof module !== 'undefined') module.exports = MemoryGame;
