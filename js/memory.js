class MemoryGame {
  
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    // let cardsName = memoryGame.cards.map(card => card.name)
    // let newCards = memoryGame.cards.map(card => card.name)
    // if(cardsName === newCards){
    //   return Math.random(cards) 
    // }
    let cards = this.cards

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];

    }
}
  
  checkIfPair(card1, card2) {

    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true

    } else {

      return false
    }
  }

  isFinished() {

   if (this.pairsGuessed === this.cards.length /2){
       return true
  }
  else {
    return false
  }
}
}