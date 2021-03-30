class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    if (!this.cards) {
      console.log("fdasfdsa");
      return undefined

    } else {
      let cardDeck = this.cards.length
      let currentCard
      let cardPicked

      while (cardDeck) {
        cardPicked = Math.floor(Math.random() * cardDeck--)

        currentCard = this.cards[cardDeck]
        this.cards[cardDeck] = this.cards[cardPicked]
        this.cards[cardPicked] = currentCard

      }

      return this.cards
    }
  }

  checkIfPair(card1, card2) {
    this.pairsGuessed++
    if (card1 === card2) {
      this.pairsClicked++
      return true
    } else {
      return false
    }

  }

  isFinished() {
    // finished but Jasmine says memoryGame is not defined ?
    if (this.pairsGuessed !== this.cards.length / 2) {
      return false

    } else {
      console.log(this.pairsGuessed);
      console.log(this.cards.length);
      return true

    }
  }
}