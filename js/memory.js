class MemoryGame {
  constructor(cards, pickedCards = [], pairsGuessed = 0, pairsClicked = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsGuessed = pairsGuessed;
    this.pairsClicked = pairsClicked;
  }

  shuffleCards() {
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
    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return Array.from(document.querySelectorAll('.card-selected')).length === this.cards.length;
  }
}

if (typeof module !== 'undefined') module.exports = MemoryGame;
