class MemoryGame {

  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    //truthies falsies
  if(this.cards){
   let m = this.cards.length, t, i

   while (m) {
     i = Math.floor(Math.random() * m--)

     t= this.cards[m]

     this.cards[m] = this.cards[i]
     this.cards[i] = t
   }
   return this.cards
  } else {
    return undefined
  }
 }

  checkIfPair(card1, card2) {
   this.pairsClicked ++
   if(card1 === card2) {
     this.pairsGuessed ++
     return true
   } else {
     return false
   }
  }

  isFinished() {
    let guessed = this.pairsGuessed * 2
  if (guessed === this.cards.length) {
    return true
   } else {
    return false
   }
  }
}