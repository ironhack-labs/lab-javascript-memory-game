class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    let allCards = [...this.cards]
    this.cards = []
   while (allCards.length > 0) {
    let selectedCard = allCards.splice(Math.floor(Math.random()*allCards.length),1)
    this.cards.push(selectedCard[0])
   }
  }

  checkIfPair(card1, card2) {
   this.pairsClicked++

   if (card1 === card2) {
    this.pairsGuessed++
    return true
   } 
    return false
   
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false
  }
}