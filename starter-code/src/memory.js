class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards()
  }
  shuffleCards() {

    for (var i = 0; i < this.cards.length-1; i++){
      var j = Math.floor(this.cards.length*Math.random())
      //Swap i and j
      var temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) 
      this.pairsGuessed++
      return firstCard === secondCard
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } else return false
  }
}


