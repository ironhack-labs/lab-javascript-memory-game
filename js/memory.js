class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(!this.cards){return undefined}
          for (var i = this.cards.length - 1; i > 0; i--) {
   
       // Generate random number
              var j = Math.floor(Math.random() * (i + 1));
              [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
   }
       
             return this.cards;
}
  

  checkIfPair(card1, card2) {
      const guessWhat = this.pairsClicked ++
    if (card1 === card2){ 
      const yay = this.pairsGuessed ++
      return true
    }  else  {
      return false
    }
  }

  checkIfFinished() {
    const guessed = this.cards.length / 2
    if (this.pairsGuessed == guessed) {
      return true
    } else {
      return false
    }
}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
