class MemoryGame {
  constructor(cards, pickedCards, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = Number();
    this.pairsGuessed = Number();

    // add the rest of the class properties here
  }
  //formule trouvee sur stack overflow, j ai pas tout compris tbf
  shuffleCards() {
    for (let index = this.cards.length - 1; index > 0; index--) {
      let j = Math.floor(Math.random() * (index + 1));
      [this.cards[index], this.cards[j]] = [this.cards[j], this.cards[index]];
    }
  }

  //num1&2 will be strings withthe name of the cards,
  //so if name of card 1 = name of card 2 is true, on est bons,
  //si card1 != card2 alors pairsclicked++
  //else if si card1=card2 alors pairs clicked++ et pairguessed++

  checkIfPair(card1, card2) {
    if (card1 !== card2) {
      this.pairsClicked++;
      return false;
    } else if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }
  }

  //ok, first, find how many pairs is endgame, then, and then,
  //if pair guessed = le max de paire possible, return true, alors is finished = true
  //onsait aussi qu au debut, is finished return false,
  // if pairsclicked ===0 (debut du jeux) return false,
  //else return true

  //if la moitie de la totalite des cartes est egal a la quantite the pairsguessed
  //(12) alors return true, dans tous les autres cas, return faux.

  isFinished() {
    let max = this.cards.length / 2;
    if (max === this.pairsGuessed) {
      return true;
    } else {
      return false;
    }
  }
}
