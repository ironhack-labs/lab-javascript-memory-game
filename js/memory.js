class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    function shuffle(cards) {
      
    }

    
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {

      return true

    } else {

      return false
    }

  }






  isFinished() {
    if (this.pairsGuessed === 0)

      return false

    else if (this.pairsGuessed < 12)

      return false

    else (this.pairsGuessed === 12)
    return true

  }


}