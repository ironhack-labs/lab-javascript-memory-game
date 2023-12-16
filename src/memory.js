class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(){
    if(this.cards === undefined){
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp
    }
}
  

  checkIfPair(card1, card2) {
    this.pairsClicked+=1
    if (card1 === card2){
      this.pairsGuessed+=1
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    const pairsInDeck = this.cards.length / 2
    return this.pairsGuessed === pairsInDeck
  }
}
