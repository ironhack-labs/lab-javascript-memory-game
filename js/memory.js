//const cl = (...p) => console.log(...p)
window.addEventListener('load', ()=>{
  console.log("memory.js connected")
});

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    //this.pickedCards = [cards[0].name,cards[12].name]
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

  checkIfPair(card1,card2) {
   if(this.pickedCards.length === 2) this.pairsClicked++
    let pClick = document.querySelector('#pairs-clicked')
    pClick.innerHTML = this.pairsClicked
    if(card1 === card2){
      this.pairsGuessed++;
      let pGuessed = document.querySelector('#pairs-guessed')
      pGuessed.innerHTML = this.pairsGuessed
      return true 
    } else {
      return false
    } 
  }

  isFinished() {
    // if true dom manip post game over
    // if true button start new game
    // if false keep playing etc
    return this.pairsGuessed === this.cards.length/2  ? true : false
  }
}








//cl(game.pairsClicked)

// cl(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]))
// cl(memoryGame.pairsClicked)
// cl(memoryGame.pairsGuessed)
