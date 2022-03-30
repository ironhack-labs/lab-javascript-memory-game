class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    const arr = this.cards
    
    let j;
    let oldItemI;
    
    let oldItemJ;
    for (let i = arr.length - 1; i >= 0; i--) {
      j = Math.floor(Math.random()*arr.length)
      console.log(j)
      oldItemI = arr[i]
      oldItemJ = arr[j]
      arr[i] = oldItemJ
      arr[j] = oldItemI
    }
    return arr
  }


  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    document.getElementById('pairs-clicked').innerHTML = this.pairsClicked
    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed += 1
      document.getElementById('pairs-guessed').innerHTML = this.pairsGuessed
      return true
    } else return false
  }

  checkIfFinished() {
    return this.pairsGuessed === 12
  }
}

// TEST

// const testGame = new MemoryGame([1,2,3,4,5,6,7,8])
// const testCards = testGame.shuffleCards()
// console.log(testCards)

// TEST END 

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
