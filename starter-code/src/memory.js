class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }
  shuffleCards() {
    let newstack=[]
    let card;
    while(cards>0){
      let pick=Math.floor(Math.random()*cards.length)
      card=cards[pick]
      cards.splice(pick,1)
      newstack.push(card)
    }
    cards=newstack
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1.name===card2.name){
      this.pairsGuessed++
      return true
    }
    return false
  }
  isFinished() {
    if(this.pairsGuessed===this.cards.length)
      return true
    return false
  }
}