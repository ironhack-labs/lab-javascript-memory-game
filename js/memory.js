class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arrCards) {
    if (arrCards === undefined) {
      return undefined;
    }
    let arrLength = arrCards.length,
      rndIndex,
      temp;
    while (--arrLength > 0) {
      rndIndex = Math.floor(Math.random() * (arrLength + 1));
      temp = arrCards[rndIndex];
      arrCards[rndIndex] = arrCards[arrLength];
      arrCards[arrLength] = temp;
    }
    return arrCards;
  }

  checkIfPair(card1, card2) {
    if (card1.dataset.cardName === card2.dataset.cardName) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
