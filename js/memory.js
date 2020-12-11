class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    let counter = 0
    while(counter < this.cards.length){
        const randomNumber = Math.floor(Math.random() * this.cards.length);
        [this.cards[counter], this.cards[randomNumber]] = [this.cards[randomNumber], this.cards[counter]];
        counter ++
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++
      return true
    }
    return false
  }
  isFinished() {
   return this.pairsGuessed === this.cards.length/2? true : false
  }
}

