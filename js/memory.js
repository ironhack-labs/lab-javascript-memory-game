class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined){
      return undefined
    } else {
      for(let i = this.cards.length -1; i>0; i--){
        //Math.floor sirve para redondear
        const j = Math.floor(Math.random() * i + 1)
        const temp = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = temp
      }
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    return card1 === card2 ? ( 
      this.pairsGuessed ++,
      true
    ) : false;
  }

  checkIfFinished() {
    const pairs = this.cards.length / 2
    return this.pairsGuessed === pairs ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
