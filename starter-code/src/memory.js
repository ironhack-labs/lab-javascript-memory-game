class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pairsInGame = this.cards.length / 2;
  }

  shuffleCards() {
    const shuffledCards = this.cards;

    let m = shuffledCards.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = shuffledCards[m];
      shuffledCards[m] = shuffledCards[i];
      shuffledCards[i] = t;
    }
    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1.parentElement.dataset.cardName === card2.parentElement.dataset.cardName) {
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if(this.pairsGuessed === this.pairsInGame ){
      return true;
    } else {
      return false;
    }
  }
}