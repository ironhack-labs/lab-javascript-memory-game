
window.addEventListener('load', ()=>{
  console.log("memory.js connected")
});

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    if(!this.cards) return undefined
    let currIdx = this.cards.length -1
    while(0 !== currIdx){
      let randomIdx = Math.floor(Math.random() * currIdx)
        currIdx--
        let temp = this.cards[currIdx];
        this.cards[currIdx] = this.cards[randomIdx];
        this.cards[randomIdx] = temp
    }  
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++;
      this.isFinished()
      return true 
    } else {
      return false
    } 
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length/2  ? true : false
  }
}
