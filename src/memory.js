class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
if(!this.cards){
  return undefined
}
while (this.cards.length > 1){
  const randomIndex = Math.floor(Math.random()* this.cards.length)
  const shuffledArr = this.cards.splice(randomIndex,1)
  this.cards = shuffledArr
}
  }

  /*let shuffled = unshuffled
  .map(element => ({oldValue: element, random: Math.random()}))
  .sort((a, b) => a.random - b.random)
  .map(({oldValue}) => oldValue)
  */

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
       this.pairsGuessed++
      return true
     
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.cards === 12) {
      return true
    } else {
      return false
    }
  }
}