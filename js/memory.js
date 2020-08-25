class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 1; i--) {
        let l = Math.round(Math.random() * i);
        let tmpCard = this.cards[i];   // ahora la var tmpCard almacena el valor de cards[i]
        this.cards[i] = this.cards[l];  // no se sobreesccribe this.cards[i] ya que su valor está en tmpCard
        this.cards[l] = tmpCard;  // cards[l] = tmpCard(que es cards[i])
  }
}
  checkIfPair(card1, card2) {
      this.pairsClicked += 1
      if (card1 === card2){ 
        this.pairsGuessed += 1
        return true
    }
    return false
  }
  isFinished() {
      if (this.pairsGuessed >= (this.cards.length / 2)) return true
      else return false
  }
}