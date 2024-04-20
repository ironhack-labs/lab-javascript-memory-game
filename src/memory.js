class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(this.cards == null) {
      return undefined
    } else {

      for (let i = this.cards.length - 1; i > 0; i--) {
        const copyOfItemPositionBeingLooped = this.cards[i];
        const randomlySelectedPosition = Math.floor(Math.random() * i); 
        this.cards[i] = this.cards[randomlySelectedPosition];
        this.cards[randomlySelectedPosition] = copyOfItemPositionBeingLooped
      }

      return this.cards

    /* const shuffledCards = []
    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomCard = this.cards[Math.floor(Math.random() * i)]
      shuffledCards.push(randomCard)
      this.cards.splice(this.cards.indexOf(randomCard), 1)
    }
    return shuffledCards */}
  }

  checkIfPair(card1, card2) {
    console.log(card1, card2)
    this.pairsClicked++
    let clickDisplayed = document.getElementById("pairs-clicked")
      clickDisplayed.innerHTML = this.pairsClicked

const pickedCard1 = card1.getAttribute("data-card-name")
const pickedCard2 = card2.getAttribute("data-card-name")

    if (pickedCard1 === pickedCard2) {
      this.pairsGuessed++
      let guessDisplayed = document.getElementById("pairs-guessed")
      guessDisplayed.innerHTML = this.pairsGuessed
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } else {
      return false
    }
  } 
}
