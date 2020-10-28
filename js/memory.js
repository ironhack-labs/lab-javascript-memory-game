class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
    let cards = this.cards.map(item=>item)
    let index = 0
    let newCards = []
    let indexArr = []
    const generateRandom = (num) => {
      return Math.floor((Math.random()*num))
    }
    while (newCards.length < cards.length){
      index = generateRandom(cards.length)
      if(!indexArr.includes(index)){
        indexArr.push(index)
        newCards.push(cards[index])
      }
    }
    this.cards = newCards
    return
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++
      this.pickedCards.push(card1)
      this.pickedCards.push(card2)  
      return true
    }else { return false}
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true
    }
    return false
  }
}