class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    //  The Fisher - Yates algorithm is named after Ronald Fisher and Frank Yates.
    //  It’s an algorithm used to shuffle a sequence of finite items, like an array for instance.
    //  The algorithm works by swapping a random element from your array with the last element in that array repeatedly.
    //  Here are the steps taken by the algorithm to shuffle an array:
    //    Pick a random index number between the first and the last index position in your array
    //    Swap the element at the random index with the last index element
    //    Repeat step one, but leave the last index out of the random selection
    //    Stop the shuffle when only the starting index is left in the random selection
    //    Each time step one is repeated, the last index of the previous repetition is excluded from the selection.
    if (!this.cards) return undefined
    let shuffledCards = this.cards
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));  //  Math.random -> de 0 (incluido) a 1 (excluido)
      [shuffledCards[randIndex], shuffledCards[i]] = [shuffledCards[i], shuffledCards[randIndex]]
    }
    return shuffledCards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) return true
    else if (this.pickedCards.length === 0) return false
    else return false
  }
}
