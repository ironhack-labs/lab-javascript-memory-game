class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [] ;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  // No pasa Jasmine pero devuelve el array randomizado https://codepen.io/chinostrike/pen/GRZWMRw
  shuffleCards(cards) {
      if (!cards) {
        return undefined
      }
  
      for (let i = 0; i < cards.length ; i++) {
        let j = Math.floor(Math.random() * cards.length)
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp 
  
      }
      return cards
  }
  
    //   INTENTAMOS HACER EL SHUFFLE USANDO SORT PERO NO PASABA EL TEST
    //   for (let i = 0; i < cards.length; i++) {
    //   cards.sort((a,b) => {
    //     const swap = Math.random()
    //     if (swap > 0,5) {
    //       return 1
    //     }
    //     else {
    //       return -1
    //     }
    //   })
    // }
  
  checkIfPair(card1, card2) {
    this.pairsClicked++
console.log(card1, card2)
    if(card1 === card2) {
      this.pairsGuessed++
      return true
    }
    else{
      return false
    }
  }

  isFinished() {
    if (2 * this.pairsGuessed == this.cards.length) {
      return true
    }
    else {
      return false
    }
  }
}