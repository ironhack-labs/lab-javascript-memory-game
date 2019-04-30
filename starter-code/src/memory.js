class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards =[]
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    console.log(memoryGame.cards.map(function(card) { return card.name }).toString());
    let rand = parseInt(Math.random()*this.cards.length)
    
    for (let i=0; i<this.cards.length; i++){
      let tmp
      tmp = this.cards[i]
      this.cards[i] = this.cards[rand]
      this.cards[rand] = tmp
    
    }
    console.log(memoryGame.cards.map(function(card) { return card.name }).toString());

  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2){
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == (this.cards.length/2)) {
      return true
    } else {
      return false
    }
  }
}