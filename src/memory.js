class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined
    }

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }

  }
  

  checkIfPair(card1, card2) {
    this.pairsClicked++
      if(card1===card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }

  checkIfFinished() {
    //quizás esté petando por esto
    return this.pairsGuessed === 12 ? true : false 
  }
}
