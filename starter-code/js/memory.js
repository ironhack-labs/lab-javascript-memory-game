class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
   
    let a = 24
    let random = Math.floor(Math.random()*a)
    let newArr = []

    for(let i = 0; i <= a; i++){
      a-- 
      console.log(a)
      newArr.push(this.cards[random])
      this.cards.splice(this.cards.indexOf(this.cards[random]), 1)
      // a = this.cards[i]
      // this.cards[i] = this.cards[random]
      // this.cards[random] = a
    }
   
    this.cards = newArr
    return this.cards

  }
  checkIfPair(card1, card2) {
    if( card1 === card2){
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false 
    }
  }
  isFinished() {
    if(this.pairsGuessed == this.cards.length/2){
      return true
    }

    return false
  }
}