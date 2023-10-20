class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  pickedCards = []

  // add the rest of the class properties here


  shuffleCards() {
    if (!this.cards) {
      return undefined


    }




    for (let i = 0; i < this.cards.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];





    }
    {


    }

  }









  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    else {
      this.pairsClicked += 1
      return false
    }
  }



  checkIfFinished() {

    if (this.pairsGuessed < 12) {
      return false
    } else {
      return true
    }
  }


}

















