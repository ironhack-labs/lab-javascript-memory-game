class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }





  shuffleCards() {
    if (!this.cards) return undefined;

    for (let i = this.cards.length - 1; i > 0; i--) {
      let shufflePosition = Math.floor(Math.random() * (i + 1));
      let cardRandom = this.cards[shufflePosition]
      this.cards[shufflePosition] = this.cards[i]
      this.cards[i] = cardRandom;
  }
  }

  /*
  for (let i = this.cards.length - 1; x > 0; x--) {
    let cardRandom = Math.floor(Math.random() * (x + 1));
    this.cards[i]= this.cards[y]
  }
  */




  checkIfPair(card1, card2) {
   this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }
    return false
  }



  checkIfFinished() {
    /*return Math.floor(this.cards.length / 2) === this.pairsGuessed;*/
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }

  
  }

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
