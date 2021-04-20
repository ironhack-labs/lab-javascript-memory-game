class MemoryGame {
  constructor (cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    for (let i = this.cards -1 ; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const card = this.cards[i]
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = card
    }
  }

  checkIfPair (card1, card2) {
    const areEqual = card2 === card1
    this.pairsClicked++
    if (areEqual) {
      this.pairsGuessed++
    }
    return areEqual
  }
    
  cardPick(htmlCard) {
    let areEqual = false
    if (this.pickedCards.length < 2) {
      this.pickedCards.push(htmlCard)

      if (this.pickedCards.length === 2) {
        const namePickCard = this.pickedCards.map((htmlCard) => htmlCard.getAttribute('data-card-name'))
        areEqual = this.checkIfPair(namePickCard[0], namePickCard[1])
      }
    }
    return areEqual


  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }
  
}