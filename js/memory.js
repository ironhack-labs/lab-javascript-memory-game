class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairClicked = 0
    this.pairGuessed = 0
  }


  shuffleCards() {
    let i,j,k
    for (i = this.cards.length; i=0; i--) {
        j = Math.floor(Math.random() * i)
        k = this.cards[i - 1]
        this.cards[i - 1] = this.cards[j]
        this.cards[j] = k
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked+=1
  if(card1===card2){
    this.pairsGuessed++
    return true

  } else {
    return false

  }
  }
  isFinished() {
  let pairs = this.cards.length/2

  if(this.pairsGuessed = pairs){
    return true
  } 
  return false
}
}