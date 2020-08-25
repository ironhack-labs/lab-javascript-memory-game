class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  // shuffleCards() {
  //   if (!this.cards) {
  //     return undefined      //Jasmine dice que no funciona
  //   }
  //   return this.cards.sort(() => Math.random() - 0.5)
  // }

  // Pruebo otro método encontrado en Google
  shuffleCards(cards) {
    for(let i = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
    return cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    
    if (card1 === card2) {
      this.pairsGuessed +=1
      //console.log(`Pairs clicked: ${this.pairsClicked}, pairs guessed: ${this.pairsGuessed}`);
      return true
    } 
    return false
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } 
    return false
  }
}