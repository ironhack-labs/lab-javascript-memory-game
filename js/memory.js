class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  // let arr = [1,2,3]
  // let ame = new MemoryGame()
  // console.log(ame.shuffleCards(arr))
  shuffleCards(array) {
    if(!array){
      return undefined
    }
    const copy = []
    let n = array.length
    let i;
  
    while (n) {  
      i = Math.floor(Math.random() * n--);
      copy.push(array.splice(i, 1)[0]);
      // console.log(array.splice(i, 1)[0])
    }  
    this.cards = [...copy]
    return copy
    
  }


  checkIfPair(card1, card2) {
    this.pairsClicked ++
    if( card1 == card2 ){
      this.pairsGuessed++
      return true
    }
    return false
  }

  checkIfFinished() {
    if( this.pairsGuessed * 2 === this.cards.length){
      return true
    }
    return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
