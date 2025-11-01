class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const deck = this.cards.slice();
    let length = this.cards.length;
    for (let i = deck.length -1; i > 1; i--) {
      //Get random number
      const random = Math.floor(Math.random() * length);
      //Get last card
      const card = deck[i];
      //Get random card
      const randomCard = deck[random];

      //Swap places
      deck[deck.indexOf(card)] = randomCard;
      deck[random] = card;

      //console.log("=========");
      //console.log("Vuelta: ", i);
      //console.log("Card: ", card, " - ", this.cards.indexOf(card));
      //console.log("RandomCard: ", randomCard, " - ", this.cards.indexOf(randomCard));

      length--;
    }
    this.cards = deck;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }

  }

  checkIfFinished() {
    return this.pairsGuessed === (this.cards.length / 2);
  }
}
