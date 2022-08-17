
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [] //las que escogidas

    this.pairsClicked = 0 //las veces que ha jugado
    this.pairsGuessed = 0 //las veces que ha adivinado
    // add the rest of the class properties here
  }

  shuffleCards() {
    //cada vez que se hace un nuevo juego las cartas se barajan
    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); //random index
      return [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]] // swap
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }

    return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }

    return false
  }




}

