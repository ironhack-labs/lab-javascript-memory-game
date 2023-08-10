class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards(cards) {
    console.log(cards);
    if (!cards) {
      return cards;
    } else {
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temporary = cards[i];
        cards[i] = cards[j];
        cards[j] = temporary;
      }

      console.log(cards);
      return cards;
    }
    // {
    //   for (let i = cards.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * cards.length);
    //     let temporary = cards[i];
    //     cards[i] = cards[j];
    //     cards[j] = temporary;
    //   }
    //   this.cards = cards;
    //   // console.log(cards);
    // }

    return cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 8) {
      return true;
    } else {
      return false;
    }
  }
}
