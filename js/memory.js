class MemoryGame {
  constructor(cards, pairGuessed = 0, pairClicked = 0) {
    this.cards = cards;
    this.pairGuessed = pairGuessed;
    this.pairClicked = pairClicked;
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
    this.pairClicked++;
    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return Array.from(document.querySelectorAll('.card-selected')).length === this.cards.length;
  }
}

if (typeof module !== 'undefined') module.exports = MemoryGame;
