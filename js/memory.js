class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // if (typeof this.class === 'undefined') { //Si esto consigo que me salga bien me falla el siguiente spec
    //   return undefined
    // }
    // const shuffledArray = this.cards.map(elm => {
    //   const j = Math.floor(Math.random() * (this.cards.length - 1))
    //   const temp = elm
    //   elm = this.cards[j]
    //   this.cards[j] = temp
    // const shuffledArray = [...this.cards]
    // console.log(shuffledArray)
    // for (let i = 0; i < shuffledArray.length; i++) {
    //     const j = Math.floor(Math.random() * i)
    //     const temp = shuffledArray[i]
    //     shuffledArray[i] = shuffledArray[j]
    //     shuffledArray[j] = temp
    // }
    
    let shuffledCards = []
    for (let i=0; i < this.cards.length; i++){
      const j = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
      }
    shuffledCards = this.cards
  }

      // const shuffledArray =  this.cards.forEach (elm => {
      //   const i = elm.length;
      //   const j = Math.floor(Math.random() * (i - 1));
      //   const tempi = elm[i];
      //   const tempj = elm[j];
      //   elm[i] = tempj;
      //   elm[j] = tempi;
      
      // for (let i = this.cards.length - 1; i > 0; i--) {
      //   const j = Math.floor(Math.random() * i)
      //   const temp = this.cards[i]
      //   this.cards[i] = this.cards[j]
      //   this.cards[j] = temp
      // }
      // })
    // return shuffledArray
  
  

  checkIfPair(card1, card2) {
    this.pairsClicked++
    const isPair = (card1 === card2)
    if (isPair) {
      this.pairsGuessed++
    }
    return isPair
  }

  isFinished() {
    let isFinished = false
    if (this.pairsGuessed === this.cards.length / 2) {
      isFinished = true
    }
    return isFinished 
  }
}